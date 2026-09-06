# Dormant: affiliate tracking.ts

**Moved here:** 2026-09-06, during a dead-code sweep.

`tracking.ts` has no importers anywhere in the codebase. It sat alongside the
live `lib/affiliate/config.ts` and collided by name/purpose with
`lib/analytics/tracking.ts` and `app/api/track-conversion/route.ts`, which do
the real affiliate/conversion tracking. It was edited on 2026-08-09 (commit
ccc9df3, "env-drive all broker/tool affiliate links") as though it were live
code, and is referenced by name in `.github/workflows/integrity-gates.yml`'s
comments as a legitimate randomness user — both signs that this file has
already fooled a maintainer once into thinking it ships.

**Decision needed:** delete (the live tracking path already covers affiliate
click/conversion tracking) unless this implementation does something the live
path doesn't. Until decided, leave dormant.
