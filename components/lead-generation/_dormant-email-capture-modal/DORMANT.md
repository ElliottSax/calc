# Dormant: email capture modal

**Moved here:** 2026-09-06, during a dead-code sweep.

`EmailCaptureModal.tsx` has no importers anywhere in `app/`. The live capture
surfaces in this folder are `BehaviorTriggeredPopup.tsx` and
`LeadMagnetCard.tsx` (both unaffected). This also collides in spirit with
`components/lead-magnet/` and `components/forms/EmailCaptureForm.tsx`
elsewhere in the tree — three separate email-capture implementations exist;
only the ones actually imported by `app/` are live.

**Decision needed:** finish-and-launch (if this modal's UX is preferred over
the live popup/card) or delete. Until decided, leave dormant.
