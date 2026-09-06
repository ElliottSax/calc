# Dormant: stock profile content

**Moved here:** 2026-09-06, during a dead-code sweep.

`StockProfileContent.tsx` has no importers anywhere in `app/`. It shares a
type (`StockProfileData`) with `components/seo/_dormant-related-stocks/
RelatedStocks.tsx` and `lib/seo/_dormant-stock-data/stock-data.ts` — all three
are one dormant feature (a per-stock profile page with related-stocks
cross-linking) that was never given a route. It does not collide with the
live `app/stocks/[symbol]/page.tsx`, which uses different data sources.

**Decision needed:** finish-and-launch (route it as `app/stocks/[symbol]/
profile` or fold it into the existing stock page, if richer per-stock SEO
pages are wanted) or delete this directory plus `components/seo/
_dormant-related-stocks/` and `lib/seo/_dormant-stock-data/` together. Until
decided, leave dormant.
