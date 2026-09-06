# Dormant: error-handling library

**Moved here:** 2026-09-06, during a dead-code sweep.

`index.ts`, `error-boundary.tsx`, and `suspense-fallback.tsx` (which pulls in
`loading-fallback.tsx`) have no importers anywhere in the codebase. The live
error handling is `components/ErrorBoundary.tsx`, `app/error.tsx`,
`app/blog/error.tsx`, and `app/api/errors/route.ts` — note the case-only
naming collision between this dormant `error-boundary.tsx` and the live
`ErrorBoundary.tsx`, which is exactly the kind of mixup this sweep exists to
prevent.

**Decision needed:** delete (the live error handling already covers this
surface) unless this implementation has functionality the live one lacks.
Until decided, leave dormant.
