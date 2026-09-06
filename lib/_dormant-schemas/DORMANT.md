# Dormant: schemas library

**Moved here:** 2026-09-06, during a dead-code sweep.

`index.ts` has no importers anywhere in the codebase. The live structured-data
implementation is `lib/seo/structured-data.ts` + `components/seo/
SchemaRenderer.tsx`. Note: this file was edited in the 2026-09-05 compliance
pass (commit 1d5814c) to strip a fabricated `AggregateRating` — that fix never
shipped to any live page because this file was never imported, so if a fake
rating pattern like that exists on the live site, it must be in
`lib/seo/structured-data.ts` or `components/seo/SchemaRenderer.tsx` instead,
not here. Worth a follow-up check of those two live files specifically.

**Decision needed:** delete (the live schema system already covers this) or
merge whatever unique schema types this defines into the live implementation.
Until decided, leave dormant.
