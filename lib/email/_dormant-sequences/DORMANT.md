# Dormant: email sequences + automation workflows

**Moved here:** 2026-09-06, during a dead-code sweep.

`sequences.ts` (649 lines) and `automation-workflows.ts` (484 lines) have no
importers anywhere in the codebase. The live provider integration is
`lib/email/email-service.ts` (left in place). `automation-workflows.ts` was
touched in commit 35a4dce (a domain fix) as though it were live.

**Decision needed:** finish-and-launch (wire a real drip-email sequence
through `email-service.ts` using this content, since CLAUDE.md notes email
capture exists but the email service still needs an API key configured) or
delete. Until decided, leave dormant.
