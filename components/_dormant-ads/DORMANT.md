# Dormant: ad components

**Moved here:** 2026-09-06, during a dead-code sweep.

`AdManager.tsx` and `AdUnit.tsx` implement a display-ad slot system. Nothing
in `app/` imports `AdManager` (its only consumer is `AdUnit`, which itself has
no other importers) — no page ever renders an ad slot.

**Decision needed:** finish-and-launch (wire an ad network into a real page,
if display ads become part of the monetization plan alongside the broker
affiliate CTAs) or delete. Until decided, leave dormant.
