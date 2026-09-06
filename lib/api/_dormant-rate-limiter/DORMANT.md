# Dormant: api rate-limiter.ts

**Moved here:** 2026-09-06, during a dead-code sweep.

`rate-limiter.ts` has no importers anywhere in the codebase. The live limiter
is `lib/rate-limit.ts` (used by API routes and complementing `middleware.ts`).
Near-identical name and a matching `RateLimitConfig`-shaped interface made
these easy to confuse.

**Decision needed:** delete (the live limiter already covers this) unless
this implementation has a feature the live one lacks. Until decided, leave
dormant.
