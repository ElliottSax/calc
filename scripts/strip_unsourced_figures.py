"""Remove unsourced, fake-precise or impossible figures from indexable blog posts.

Background (2026-10-04): most of content/blog was generated in March 2026 and states
invented numbers as fact -- "Johnson & Johnson (JNJ) currently offers a dividend yield of
2.85% and has a payout ratio of 54.12%", "As of 2026, 3M yields 4.3%", "According to a
recent study, ... 40%", and partnerships that no longer exist (Magellan Midstream was
absorbed by ONEOK in 2023, Phillips 66 Partners in 2022, Valero Energy Partners in 2019)
quoted with "current" yields. Nothing on this site backs those figures, so the sentences
are removed rather than reworded. Worked arithmetic ("$3.48 / $165 = 2.11%"), expense
ratios, thresholds and the two hand-written Dividend Engines pages are left alone.

usage: python scripts/strip_unsourced_figures.py            # dry run, prints every removal
       python scripts/strip_unsourced_figures.py --apply    # write files

Only posts that would be indexed are touched (same rule as app/sitemap.ts): not haiku-*/
cerebras-* and not in lib/noindex-reprints.ts.
"""
from __future__ import annotations

import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BLOG = os.path.join(ROOT, "content", "blog")

# Hand-edited in the same pass; the script must not touch them.
SKIP = {
    "best-dividend-stocks-for-beginners.md",
    "best-reit-dividend-stocks.md",
    "04-high-yield-reits-worth-buying.md",
    "03-best-dividend-stocks-under-50.md",
    "master-limited-partnerships-mlps-dividend-guide.md",
    "best-dividend-stocks-under-50.md",
    "02-top-10-dividend-etfs-for-passive-income.md",
}

PCT2 = re.compile(r"\d+\.\d{2}\s*%")
PCT = re.compile(r"\d+(?:\.\d+)?\s*%")
LABEL = re.compile(r"\b(yield(?:s|ing)?|payout ratios?|growth rates?|CAGR|returns?|P/E|price-to-earnings)\b", re.I)
TICKER = re.compile(r"\(([A-Z]{1,5}(?:[.-][A-Z]{1,2})?)\)")
ARITH = re.compile(r"[=÷×]|\$\d[\d,]*(?:\.\d+)?\s*(?:÷|/|×|x)\s*\$")
EXPENSE_ONLY = re.compile(r"expense ratio", re.I)
ASOF = re.compile(r"\b(?:as of|in|from)\s+(?:early\s+|late\s+)?(?:january|february|march|april|may|june|july|august|september|october|november|december)?\s*2026\b|\bcurrently\b|\bcurrent (?:yield|dividend yield|payout)|\btoday\b", re.I)
UNSOURCED = re.compile(
    r"according to (?:a|our|the|recent)\b[^,.]{0,40}?(?:study|survey|analysis|data|research|report)"
    r"|according to (?:a )?(?:recent )?(?:study|data|research|report)s? (?:by|from)\b"
    r"|\b(?:research|studies|market data|historical data|data|history|statistics|analysis) (?:shows?|suggests?|indicates?|finds?|found|demonstrates?)\b"
    r"|\breal-time data from 2026\b|\bdata from 2026\b|\b\(2026 data\)"
    r"|\b(?:IMF|International Monetary Fund|World Bank|Federal Reserve)\b[^.]{0,60}\b(?:predict|forecast|project)",
    re.I,
)
TABLE_REF = re.compile(r"\b(?:as shown in|see|in|refer to|below|above|following)\s+the\s+table\b|\btable\s+(?:below|above)\b", re.I)
CONTINUATION = re.compile(r"^\**\s*(?:Another example|Similarly|In contrast|Other examples|Both companies|Other notable|Lastly|Finally)\b", re.I)
# Entities that no longer trade, never existed, or are the wrong instrument.
DEAD = re.compile(
    r"\bMMP\b|Magellan Midstream|\bPSXP\b|Phillips 66 Partners|\bVLP\b|Valero Energy Partners"
    r"|RDS\.A|Royal Dutch Shell|Certent|Healthplex|\bHCT\b|CBRE Acquisition|\bNRT\b",
)
# 3M's increase streak ended with the 2024 cut; "a century of increases" is false.
MMM_STREAK = re.compile(r"\b(?:3M|MMM)\b[^.\n]{0,80}\b(?:consecutive years|century|100\+|103)\b|\b(?:consecutive years|century|100\+|103)\b[^.\n]{0,60}\b(?:3M|MMM)\b", re.I)
COUNT_2026 = re.compile(r"as of 2026, there are (?:only )?\d+ (?:stocks|companies|dividend (?:kings|aristocrats))", re.I)
FOLLOWON = re.compile(r"^(?:Its|The company(?:'s)?|The fund(?:'s)?|With a|[A-Z]{1,5}'s|Both companies|Both|Similarly,|In contrast,|This)\b", re.I)

REPLACE = [
    # right company, wrong ticker (NRT is an oil royalty trust)
    (re.compile(r"National Retail(?: Properties)? \(NRT\)"), "National Retail Properties (NNN)"),
    (re.compile(r"Vanguard Dividend Appreciation ETF \(VDAIX\)"), "Vanguard Dividend Appreciation ETF (VIG)"),
    (re.compile(r"\bVDAIX\b"), "VIG"),
    (re.compile(r"Vanguard Real Estate ETF \(VGSIX\)"), "Vanguard Real Estate ETF (VNQ)"),
    (re.compile(r"\bVGSIX\b"), "VNQ"),
    (re.compile(r"Invesco MLP ETF \(MLPA\)"), "Global X MLP ETF (MLPA)"),
    (re.compile(r"Research shows diversification benefits plateau after 15-20 holdings\."),
     "In the classic diversification literature most of the benefit arrives within roughly the first 15-30 holdings; the exact number is debated."),
    (re.compile(r"Research shows lump[- ]sum investing (?:slightly )?outperforms (?:DCA|dollar-cost averaging \(DCA\)) (?:2/3 of the time|roughly 66% of the time)[^.]*\."),
     "A 2012 Vanguard study found that investing a lump sum immediately beat spreading it out over a year roughly two-thirds of the time across U.S., U.K. and Australian markets."),
]


def indexable() -> list[str]:
    src = open(os.path.join(ROOT, "lib", "noindex-reprints.ts"), encoding="utf8").read()
    reprints = set(re.findall(r"'([^']+)'", src))
    out = []
    for f in sorted(os.listdir(BLOG)):
        if not f.endswith(".md") or re.match(r"^(haiku|cerebras)-", f) or f[:-3] in reprints:
            continue
        out.append(f)
    return out


def split_sentences(text: str) -> list[str]:
    # keep delimiters; do not split after "et al." or inside "U.S."
    parts = re.split(r"(?<=[.!?])\s+(?=[A-Z*(\[])", text)
    return [p for p in parts if p]


def sentence_is_bad(s: str, tickers: set[str], prev_removed: bool) -> str | None:
    if "```" in s:
        return None
    if DEAD.search(s):
        return "dead-entity"
    if MMM_STREAK.search(s):
        return "3m-streak"
    if COUNT_2026.search(s):
        return "count-2026"
    if UNSOURCED.search(s) and re.search(r"\d", s):
        return "unsourced-study"
    if ARITH.search(s):
        return None
    has_entity = bool(TICKER.search(s)) or any(re.search(rf"\b{re.escape(t)}\b", s) for t in tickers) \
        or re.search(r"\bS&P 500\b|\bDow Jones\b|\bNASDAQ\b|\bTreasury\b|federal funds|\bFTSE\b|\bMSCI\b", s)
    if PCT2.search(s) and LABEL.search(s) and not (EXPENSE_ONLY.search(s) and not re.search(r"yield|payout|growth|return", s, re.I)):
        if has_entity:
            return "fake-precision"
        if prev_removed and FOLLOWON.match(s.strip("* ")):
            return "fake-precision-followon"
    if ASOF.search(s) and PCT.search(s) and LABEL.search(s) and has_entity:
        return "asof-2026-figure"
    if prev_removed and CONTINUATION.match(s) and PCT.search(s) and LABEL.search(s):
        return "continuation-figure"
    return None


def strip_tables(lines: list[str], removed: list[tuple[str, str]]) -> tuple[list[str], bool]:
    """Remove table rows that quote two-decimal percentages (fake precision) or dead entities.
    A table that loses every data row is removed entirely. Returns (lines, any_table_dropped)."""
    out: list[str] = []
    i = 0
    dropped_table = False
    # guides that derive their figures step by step ("$4.52 ÷ $155 × 100 = 2.92%") reuse those
    # figures in example tables; leave their tables alone
    worked_examples = any(("÷" in ln or "× 100" in ln or "x 100" in ln) for ln in lines)
    while i < len(lines):
        if not lines[i].lstrip().startswith("|"):
            out.append(lines[i])
            i += 1
            continue
        j = i
        while j < len(lines) and lines[j].lstrip().startswith("|"):
            j += 1
        block = lines[i:j]
        header, sep, rows = block[0], (block[1] if len(block) > 1 else ""), block[2:]
        if not re.match(r"^\|?\s*:?-{2,}", sep.strip()):
            out.extend(block)
            i = j
            continue
        kept = []
        yield_header = re.search(r"yield|payout|return|growth", header, re.I)
        for r in rows:
            # two-decimal percentages of at least 1% (0.0x% yields and expense ratios are not the
            # fake-precision pattern), outside total rows and dollar/arithmetic rows
            big2 = [p for p in re.findall(r"(\d+\.\d{2})\s*%", r) if float(p) >= 1.0]
            if DEAD.search(r):
                removed.append(("dead-entity-row", r.strip()))
            elif big2 and yield_header and "$" not in r and "=" not in r and not re.search(r"\btotal\b", r, re.I) and not worked_examples:
                removed.append(("fake-precision-row", r.strip()))
            else:
                kept.append(r)
        if rows and not kept:
            removed.append(("empty-table", header.strip()))
            dropped_table = True
        else:
            out.extend([header, sep] + kept)
        i = j
    return out, dropped_table


def process(text: str, fname: str) -> tuple[str, list[tuple[str, str]]]:
    removed: list[tuple[str, str]] = []
    for pat, rep in REPLACE:
        text = pat.sub(rep, text)
    tickers = set(TICKER.findall(text)) - {"REIT", "ETF", "MLP", "IRA", "DCA", "FFO", "NAV", "ESG", "EPS", "DPS", "AI", "US", "USA", "UK", "K", "TSX", "P", "E", "FAQ"}
    src_lines, dropped_table = strip_tables(text.split("\n"), removed)
    out_lines = []
    in_fence = False
    for line in src_lines:
        if line.strip().startswith("```"):
            in_fence = not in_fence
            out_lines.append(line)
            continue
        if in_fence or line.startswith("#") or not line.strip() or line.lstrip().startswith("|"):
            out_lines.append(line)
            continue
        m = re.match(r"^(\s*(?:[-*+]|\d+\.)\s+)?(.*)$", line)
        prefix, body = (m.group(1) or ""), m.group(2)
        sents = split_sentences(body)
        kept = []
        prev_removed = False
        for s in sents:
            why = sentence_is_bad(s, tickers, prev_removed)
            if not why and dropped_table and TABLE_REF.search(s):
                why = "dangling-table-ref"
            if why:
                removed.append((why, s.strip()))
                prev_removed = True
            else:
                kept.append(s)
                prev_removed = False
        if not kept:
            continue  # whole bullet / paragraph gone
        if len(kept) == len(sents):
            out_lines.append(line)
            continue
        new = prefix + " ".join(kept)
        # a bullet reduced to a bare label ("- **Johnson & Johnson (JNJ)**:") is noise
        if prefix and re.fullmatch(r"\s*(?:[-*+]|\d+\.)\s+\**[^:*]{0,60}\**\s*:?\s*", new):
            removed.append(("bare-label", line.strip()))
            continue
        out_lines.append(new)
    # drop a section heading whose content was entirely removed (next non-blank line is a
    # heading of the same or higher level, or end of file). "# Title" lines are left alone.
    cleaned: list[str] = []
    for i, line in enumerate(out_lines):
        m = re.match(r"^(#{2,6})\s", line)
        if m:
            j = i + 1
            while j < len(out_lines) and not out_lines[j].strip():
                j += 1
            nxt = re.match(r"^(#{1,6})\s", out_lines[j]) if j < len(out_lines) else None
            if j >= len(out_lines) or (nxt and len(nxt.group(1)) <= len(m.group(1))):
                removed.append(("empty-heading", line.strip()))
                continue
        cleaned.append(line)
    result = re.sub(r"\n{3,}", "\n\n", "\n".join(cleaned))
    return result, removed


def main() -> None:
    apply = "--apply" in sys.argv
    total = 0
    files_changed = 0
    for f in indexable():
        if f in SKIP:
            continue
        path = os.path.join(BLOG, f)
        text = open(path, encoding="utf8").read()
        new, removed = process(text, f)
        if new != text:
            files_changed += 1
            total += len(removed)
            for why, s in removed:
                print(f"{f}\t{why}\t{s[:240]}")
            if apply:
                tmp = path + ".tmp"
                with open(tmp, "w", encoding="utf8", newline="") as fh:
                    fh.write(new)
                os.replace(tmp, path)
    print(f"# {total} removals in {files_changed} files ({'applied' if apply else 'dry run'})", file=sys.stderr)


if __name__ == "__main__":
    main()
