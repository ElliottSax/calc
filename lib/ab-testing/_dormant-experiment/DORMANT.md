# Dormant: experiment.tsx (older A/B framework)

**Moved here:** 2026-09-06, during a dead-code sweep.

`experiment.tsx` has no importers anywhere in the codebase. It pulled in
`components/analytics/GoogleAnalytics.tsx` (moved alongside it to
`components/analytics/_dormant-google-analytics/`, since that component had
no other callers). The live A/B testing system is `lib/ab-testing/
experiments.ts` + `hooks/use-experiment.ts`, both left in place, unaffected.

**Decision needed:** delete both this file and the GoogleAnalytics wrapper
(the live A/B system + GA4 wiring already cover this) unless this older
framework has a feature the live one is missing. Until decided, leave
dormant.
