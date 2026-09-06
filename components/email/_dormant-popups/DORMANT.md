# Dormant: exit-intent popup + sticky bar

**Moved here:** 2026-09-06, during a dead-code sweep.

`ExitIntentPopup.tsx` and `StickyBar.tsx` have no importers anywhere in
`app/`. The live email-capture surface in this folder is `InlineSignup.tsx`
(unaffected, left in place).

**Decision needed:** finish-and-launch (add one or both as a site-wide capture
surface, if a stronger lead-gen push is wanted) or delete. Until decided,
leave dormant.
