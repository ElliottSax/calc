# Dormant: monitoring error-handler

**Moved here:** 2026-09-06, during a dead-code sweep.

`error-handler.ts` has no importers anywhere in the codebase. See also
`lib/_dormant-error-handling/` — a separate, unrelated dormant error-handling
implementation moved in the same sweep.

**Decision needed:** delete unless this has functionality the live
`components/ErrorBoundary.tsx` / `app/error.tsx` / `app/api/errors/route.ts`
setup lacks. Until decided, leave dormant.
