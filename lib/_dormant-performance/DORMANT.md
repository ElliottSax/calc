# Dormant: performance library

**Moved here:** 2026-09-06, during a dead-code sweep.

`index.ts`, `optimized-image.tsx`, and `web-vitals.ts` have no importers
anywhere in the codebase. This is a third dormant web-vitals implementation —
see also `lib/analytics/_dormant-web-vitals/` and `components/analytics/
_dormant-web-vitals-reporter/`, moved in the same sweep. The live vitals
component is `components/analytics/WebVitals.tsx` (imported by
`app/layout.tsx`), and `next/image` is presumably what's used for live image
optimization instead of `optimized-image.tsx`.

**Decision needed:** delete (three dormant vitals implementations plus a live
one is enough duplication that consolidating down to one, live version is the
likely right call) or pick this one to keep and delete the other two. Until
decided, leave dormant.
