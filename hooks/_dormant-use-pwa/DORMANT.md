# Dormant: usePWA hook

**Moved here:** 2026-09-06, during a dead-code sweep.

`usePWA.ts` has no importers anywhere in `app/`. As a direct consequence,
`public/sw.js` (the service worker it would register) is never registered —
that file is a live-served static asset with dead code behind it, not
something this sweep touched, since `public/` assets aren't code collisions.

**Decision needed:** finish-and-launch (call this hook from `app/layout.tsx`
to actually register the service worker, if offline/installable-PWA support
is wanted) or delete this hook and `public/sw.js` together. Until decided,
leave dormant.
