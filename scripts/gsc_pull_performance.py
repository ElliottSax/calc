#!/usr/bin/env python3
"""Pull Search Console performance data for all four properties.

Auth mirrors gsc_auto_submit.py: the GCP_SERVICE_ACCOUNT env var holds the
service-account JSON (in CI it comes from the GitHub secret of the same name).
The account must be added as a user on each GSC property first.

Output: gsc_performance.json in the working directory — per-property daily
clicks/impressions for the last 28 days plus the top 20 queries and pages.
"""

import json
import os
import sys
from datetime import date, timedelta

from google.oauth2 import service_account
from googleapiclient.discovery import build

# Domain properties, not URL-prefix — verified against sites().list() 2026-08-18.
PROPERTIES = [
    "sc-domain:dividendengines.com",
    "sc-domain:quantengines.com",
    "sc-domain:thestackguide.com",
    "sc-domain:cardclassroom.com",
]

def main() -> int:
    raw = os.environ.get("GCP_SERVICE_ACCOUNT")
    if not raw:
        print("ERROR: GCP_SERVICE_ACCOUNT env var not set", file=sys.stderr)
        return 1

    creds = service_account.Credentials.from_service_account_info(
        json.loads(raw), scopes=["https://www.googleapis.com/auth/webmasters.readonly"]
    )
    svc = build("searchconsole", "v1", credentials=creds, cache_discovery=False)

    end = date.today() - timedelta(days=2)  # GSC data lags ~2 days
    start = end - timedelta(days=27)
    window = {"startDate": start.isoformat(), "endDate": end.isoformat()}

    report = {"pulled": date.today().isoformat(), "window": window, "properties": {}}
    for prop in PROPERTIES:
        entry = {}
        try:
            daily = svc.searchanalytics().query(
                siteUrl=prop, body={**window, "dimensions": ["date"], "rowLimit": 30}
            ).execute()
            entry["daily"] = daily.get("rows", [])
            for dim in ("query", "page"):
                rows = svc.searchanalytics().query(
                    siteUrl=prop, body={**window, "dimensions": [dim], "rowLimit": 20}
                ).execute()
                entry[f"top_{dim}s"] = rows.get("rows", [])
            totals = entry["daily"]
            entry["totals"] = {
                "clicks": sum(r["clicks"] for r in totals),
                "impressions": sum(r["impressions"] for r in totals),
            }
            print(f"{prop}: {entry['totals']['impressions']} impressions, "
                  f"{entry['totals']['clicks']} clicks over 28d")
        except Exception as e:  # keep going — one unverified property shouldn't kill the run
            entry["error"] = str(e)
            print(f"{prop}: FAILED — {e}", file=sys.stderr)
        report["properties"][prop] = entry

    with open("gsc_performance.json", "w", encoding="utf-8") as f:
        json.dump(report, f, indent=1)
    print("wrote gsc_performance.json")
    return 0

if __name__ == "__main__":
    sys.exit(main())
