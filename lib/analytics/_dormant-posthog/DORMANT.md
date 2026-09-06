# Dormant: posthog.ts wrapper

**Moved here:** 2026-09-06, during a dead-code sweep.

`posthog.ts` has no importers anywhere in the codebase. This does NOT mean
PostHog itself is unused — `posthog-js` is imported directly by
`InlineSignup.tsx`, `LeadMagnetCard.tsx`, and `middleware.ts`. Only this
particular wrapper module was bypassed.

**Decision needed:** delete (the direct `posthog-js` usage already covers
this) unless there's a reason to centralize PostHog calls through a shared
wrapper going forward. Until decided, leave dormant.
