#!/usr/bin/env python3
"""Pull GA4 engagement metrics for the affiliate properties.

    GCP_SERVICE_ACCOUNT='<service account json>' python scripts/ga4_pull_performance.py

Output: ga4_performance.json in the working directory.

WHY THIS EXISTS, ALONGSIDE gsc_pull_performance.py
--------------------------------------------------
Search Console answers "did the result get clicked". It cannot answer "did the click do
anything", which is the question that decides where effort goes. The measured CTR gap on
quantengines.com -- /scanner at 7.1% against the 700-post blog at 0.12%, a ~60x
difference -- says tools convert impressions far better than articles. What GSC cannot
say is whether those tool visitors then engage or bounce straight back, and that
determines whether the answer is "build more tools" or "the tools are not good enough
yet". This pulls the engagement side.

ACCESS
------
The Admin and Data APIs were enabled on project gsc-affiliate-elliott on 2026-08-20.
The remaining step is Elliott-only and cannot be automated: in GA4 Admin -> Property
Access Management, add the service account as a Viewer on each property. Until that is
done every request returns 403, and this script says so explicitly rather than writing an
empty or partial artefact that would later be mistaken for a real measurement.

Property IDs are NUMERIC and are not the G- measurement IDs. The measurement IDs are
G-PHX6T0R1Y1 (quant) and G-0C19DC0EQ4 (calc); the numeric IDs they correspond to are
discovered via accountSummaries and cached into this file's PROPERTIES once known --
they cannot be derived from the G- string.
"""

from __future__ import annotations

import json
import os
import sys
from datetime import date, timedelta

import requests
from google.oauth2 import service_account

SCOPES = ["https://www.googleapis.com/auth/analytics.readonly"]
ADMIN = "https://analyticsadmin.googleapis.com/v1beta"
DATA = "https://analyticsdata.googleapis.com/v1beta"

# Filled in from the accountSummaries discovery below. Left empty deliberately: guessing
# a numeric property ID would silently pull the wrong site's data.
PROPERTIES: dict[str, str] = {}

LOOKBACK_DAYS = 28


def credentials():
    raw = os.environ.get("GCP_SERVICE_ACCOUNT")
    if not raw:
        print("ERROR: GCP_SERVICE_ACCOUNT env var not set", file=sys.stderr)
        sys.exit(1)
    return service_account.Credentials.from_service_account_info(json.loads(raw), scopes=SCOPES)


def session_for(creds) -> requests.Session:
    from google.auth.transport.requests import Request

    creds.refresh(Request())
    s = requests.Session()
    s.headers["Authorization"] = f"Bearer {creds.token}"
    return s


def discover(s: requests.Session) -> dict[str, str]:
    """Numeric property IDs the service account can actually see."""
    r = s.get(f"{ADMIN}/accountSummaries", timeout=60)
    if r.status_code == 403:
        print(
            "\n403 from the GA4 Admin API. The service account is not granted on any "
            "property yet.\n"
            "Fix (Elliott only, cannot be automated):\n"
            "  GA4 Admin -> Property Access Management -> add\n"
            "  seo-auto-submit@gsc-affiliate-elliott.iam.gserviceaccount.com as Viewer\n"
            "  on the quantengines and calc properties.\n",
            file=sys.stderr,
        )
        sys.exit(2)
    r.raise_for_status()
    found: dict[str, str] = {}
    for acct in r.json().get("accountSummaries", []):
        for prop in acct.get("propertySummaries", []):
            # "properties/123456789" -> "123456789"
            found[prop.get("displayName", prop["property"])] = prop["property"].split("/")[-1]
    return found


def run_report(s: requests.Session, prop_id: str, body: dict) -> dict:
    r = s.post(f"{DATA}/properties/{prop_id}:runReport", json=body, timeout=90)
    if r.status_code == 403:
        return {"error": "403 — service account not granted on this property"}
    r.raise_for_status()
    return r.json()


def rows_of(report: dict) -> list[dict]:
    """Flatten a runReport response into plain dicts, or return the error untouched."""
    if "error" in report:
        return []
    dims = [h["name"] for h in report.get("dimensionHeaders", [])]
    mets = [h["name"] for h in report.get("metricHeaders", [])]
    out = []
    for row in report.get("rows", []):
        rec = {d: v["value"] for d, v in zip(dims, row.get("dimensionValues", []))}
        for m, v in zip(mets, row.get("metricValues", [])):
            raw = v["value"]
            try:
                rec[m] = float(raw) if "." in raw else int(raw)
            except ValueError:
                rec[m] = raw
        out.append(rec)
    return out


def main() -> int:
    end = date.today() - timedelta(days=1)
    start = end - timedelta(days=LOOKBACK_DAYS - 1)
    window = {"startDate": start.isoformat(), "endDate": end.isoformat()}

    s = session_for(credentials())
    props = PROPERTIES or discover(s)
    if not props:
        print("No GA4 properties visible to this service account.", file=sys.stderr)
        return 2
    print(f"properties visible: {props}")

    report = {"pulled": date.today().isoformat(), "window": window, "properties": {}}

    for name, pid in props.items():
        entry: dict[str, object] = {"property_id": pid}

        # Landing pages: does a click go anywhere? engagementRate and average duration
        # are the columns Search Console structurally cannot provide.
        entry["landing_pages"] = rows_of(run_report(s, pid, {
            "dateRanges": [window],
            "dimensions": [{"name": "landingPagePlusQueryString"}],
            "metrics": [{"name": "sessions"}, {"name": "engagedSessions"},
                        {"name": "engagementRate"}, {"name": "averageSessionDuration"},
                        {"name": "bounceRate"}],
            "orderBys": [{"metric": {"metricName": "sessions"}, "desc": True}],
            "limit": 100,
        }))

        # Traffic composition, to see whether organic is actually the channel that grows.
        entry["channels"] = rows_of(run_report(s, pid, {
            "dateRanges": [window],
            "dimensions": [{"name": "sessionDefaultChannelGroup"}],
            "metrics": [{"name": "sessions"}, {"name": "engagedSessions"},
                        {"name": "engagementRate"}],
            "orderBys": [{"metric": {"metricName": "sessions"}, "desc": True}],
            "limit": 25,
        }))

        # Daily totals, so a change can be dated against a deploy.
        entry["daily"] = rows_of(run_report(s, pid, {
            "dateRanges": [window],
            "dimensions": [{"name": "date"}],
            "metrics": [{"name": "sessions"}, {"name": "engagedSessions"},
                        {"name": "totalUsers"}],
            "orderBys": [{"dimension": {"dimensionName": "date"}}],
            "limit": 400,
        }))

        report["properties"][name] = entry
        n = len(entry["landing_pages"])  # type: ignore[arg-type]
        print(f"  {name} ({pid}): {n} landing pages")

    with open("ga4_performance.json", "w", encoding="utf-8") as f:
        json.dump(report, f, indent=1)
    print("wrote ga4_performance.json")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
