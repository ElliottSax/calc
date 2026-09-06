# Dormant: WebVitalsReporter

**Moved here:** 2026-09-06, during a dead-code sweep.

`WebVitalsReporter.tsx` has no importers anywhere in `app/`. It depends on
`lib/analytics/_dormant-web-vitals/web-vitals.ts` (moved alongside it). The
live vitals component is `components/analytics/WebVitals.tsx`, imported by
`app/layout.tsx` — but be aware that component currently posts to
`/api/analytics/vitals`, which is a console.log stub, while the more
substantive `app/api/vitals/route.ts` sits unreferenced by anything. That
live-side mismatch is a separate, pre-existing issue from this dormant move —
flagging it here since whoever picks this back up will want to fix the live
wiring too, not just revive this reporter.

**Decision needed:** finish-and-launch (point the live `WebVitals.tsx` at the
real `/api/vitals` route, and decide whether this reporter or the live
component should be the one kept) or delete this directory plus
`lib/analytics/_dormant-web-vitals/` and `lib/_dormant-performance/
web-vitals.ts`. Until decided, leave dormant.
