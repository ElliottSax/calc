# Dormant: related stocks widget

**Moved here:** 2026-09-06, during a dead-code sweep.

`RelatedStocks.tsx` has no importers anywhere in `app/`. See
`components/_dormant-stocks/DORMANT.md` — this file, `StockProfileContent.tsx`
and `lib/seo/_dormant-stock-data/stock-data.ts` are one dormant feature moved
together as three separate directories (each stayed in its original parent
folder rather than being merged, since they sit in three different top-level
areas: components/seo, components/stocks, lib/seo).

**Decision needed:** see `components/_dormant-stocks/DORMANT.md` — decide the
whole three-file cluster together.
