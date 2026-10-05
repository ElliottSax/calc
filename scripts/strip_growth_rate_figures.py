"""Remove invented per-company dividend-growth figures from indexable blog posts (claims pass 2).

Background (2026-10-05): a persona read of the live posts (life-hq/CALC_CLAIMS_PASS2_2026-10-05.md) found
sentences such as "Johnson & Johnson ... a consistent dividend growth rate of 6.3% over the past five
years" and "The company has a solid dividend growth rate of 4.2% over the past 5 years" (no company
named at all). Pass 1 removed two-decimal yield/payout figures; these one-decimal growth-rate figures
slipped through. Nothing on this site backs them, so the sentence is removed rather than reworded.

usage: python scripts/strip_growth_rate_figures.py            # dry run, prints every removal
       python scripts/strip_growth_rate_figures.py --apply    # write files
Only posts that would be indexed are touched (same rule as strip_unsourced_figures.indexable()).
"""
from __future__ import annotations

import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from strip_unsourced_figures import ARITH, BLOG, SKIP, indexable, split_sentences  # noqa: E402

# "<N>-year / five-year / 5-year / past five years ... growth rate ... N.N%"  (or the reverse order)
GROWTH = re.compile(
    r"(?:(?:\d+|five|three|ten)[- ]year|past (?:\d+|five|three|ten) years|over the (?:past|last) (?:\d+|five|three|ten) years)"
    r"[^.\n]{0,60}(?:dividend )?growth rate[^.\n]{0,40}\d+(?:\.\d+)?\s*%"
    r"|(?:dividend )?growth rate[^.\n]{0,60}\d+(?:\.\d+)?\s*%[^.\n]{0,40}(?:over the (?:past|last) (?:\d+|five|three|ten) years|(?:\d+|five|three|ten)[- ]year)",
    re.I,
)
# "5-year CAGR of 7.1%" / "5-year average annual growth rate of 5.1%" (same invented figure, other wording)
CAGR = re.compile(
    r"(?:(?:\d+|five|three|ten)[- ]year|past (?:\d+|five|three|ten) years)[^.\n]{0,40}(?:CAGR|compound annual growth rate|average annual growth rate)[^.\n]{0,25}\d+(?:\.\d+)?\s*%"
    r"|(?:CAGR|compound annual growth rate|average annual growth rate)[^.\n]{0,30}\d+(?:\.\d+)?\s*%[^.\n]{0,30}(?:over the (?:past|last) (?:\d+|five|three|ten) years|(?:\d+|five|three|ten)[- ]year)",
    re.I,
)
DEBT_EQ = re.compile(r"debt-to-equity ratio[^.\n]{0,25}\b\d+(?:\.\d+)?\b", re.I)


def bad(s: str) -> str | None:
    if "```" in s or ARITH.search(s):
        return None
    # screening thresholds and labelled hypotheticals are guidance, not claims about a security
    if re.search(r"minimum|or higher|at least|for example, an investor|hypothetical", s, re.I):
        return None
    if re.match(r"\s*[-*] [^:]{0,40}:", s):  # "- 5-Year Dividend CAGR: 3-7%" label/value rows are sector ranges, not company claims
        return None
    if GROWTH.search(s) or CAGR.search(s):
        return "growth-rate"
    return None


def main() -> int:
    apply = "--apply" in sys.argv
    total = 0
    for f in indexable():
        if f in SKIP:
            continue
        path = os.path.join(BLOG, f)
        text = open(path, encoding="utf8").read()
        out_lines = []
        changed = False
        for line in text.split("\n"):
            if line.lstrip().startswith("|") or line.lstrip().startswith("#") or not (GROWTH.search(line) or CAGR.search(line)):
                out_lines.append(line)
                continue
            kept = []
            for s in split_sentences(line):
                why = bad(s)
                if why:
                    total += 1
                    changed = True
                    print(f"{f} [{why}]: {s.strip()[:230]}")
                else:
                    kept.append(s)
            new = " ".join(kept)
            out_lines.append(new)
        if changed and apply:
            res = "\n".join(out_lines)
            res = re.sub(r"\n{3,}", "\n\n", res)
            open(path, "w", encoding="utf8", newline="").write(res)
    print(f"{'APPLIED' if apply else 'dry run'}: {total} sentences")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
