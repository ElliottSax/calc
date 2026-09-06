# Dormant: GoogleAnalytics wrapper

**Moved here:** 2026-09-06, during a dead-code sweep.

`GoogleAnalytics.tsx` is reachable only from `lib/ab-testing/_dormant-
experiment/experiment.tsx` (also dormant, moved alongside it in this sweep).
The site's real analytics wiring is elsewhere (GA4 property 527370798,
configured directly, not through this wrapper).

**Decision needed:** delete both this file and `lib/ab-testing/_dormant-
experiment/experiment.tsx` together (the live A/B system is `lib/ab-testing/
experiments.ts` + `hooks/use-experiment.ts`, unaffected), unless there's a
reason to revive the older experiment framework instead. Until decided, leave
dormant.
