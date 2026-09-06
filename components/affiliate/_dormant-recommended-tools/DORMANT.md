# Dormant: recommended tools card

**Moved here:** 2026-09-06, during a dead-code sweep.

`RecommendedTools.tsx` has no importers anywhere in `app/`. It reads live data
(`lib/data/broker-affiliates-expanded.ts`, `lib/analytics/tracking.ts`,
`lib/affiliate/config.ts`) so it isn't broken — it was simply never placed on
a page. It sits beside the live `BrokerComparisonTable.tsx` and
`InlineBrokerCTA.tsx` in this same parent folder.

**Decision needed:** finish-and-launch (drop it onto a calculator or resources
page as another affiliate-CTA surface) or delete. Until decided, leave
dormant.
