# Dormant: premium hero variant

**Moved here:** 2026-09-06, during a dead-code sweep.

`PremiumHero.tsx` has no importers anywhere in `app/`. It's a separate,
standalone hero variant — not part of the `EnhancedDripCalculator` cluster
(that cluster's own hero variant, `AnimatedHero.tsx`, moved to
`components/_dormant-enhanced/hero/` instead). The live homepage hero is
whatever `app/page.tsx` currently imports from this same `components/hero/`
folder (`FeaturesShowcase.tsx` / `SocialProof.tsx`, both unaffected).

**Decision needed:** finish-and-launch (swap it in as the live hero, if its
design is preferred) or delete. Until decided, leave dormant.
