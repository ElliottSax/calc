# Dormant: accessibility helpers

**Moved here:** 2026-09-06, during a dead-code sweep.

`aria-live.tsx`, `focus-trap.tsx`, and `skip-links.tsx` have no importers
anywhere in the codebase.

**Decision needed:** finish-and-launch (these are generally good practice —
wiring in a skip-link and focus-trap would likely help the a11y fixes already
made in commit d21867b) or delete. Given they're small and non-risky,
finishing them is probably the better call, but that's a product decision,
not this sweep's to make. Until decided, leave dormant.
