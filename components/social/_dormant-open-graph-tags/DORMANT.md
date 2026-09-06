# Dormant: OpenGraphTags component

**Moved here:** 2026-09-06, during a dead-code sweep.

`OpenGraphTags.tsx` has no importers anywhere in `app/`. Next.js's own
`generateMetadata`/`Metadata` export is how OG tags are actually set
sitewide (see the fix in commit 0891145, "broken OG/Twitter share images
sitewide"), which is presumably why this manual component was never wired in.
The live sharing feature in this folder is `SocialShare.tsx` (unaffected).

**Decision needed:** delete (the Metadata-API approach already covers this)
unless there's a specific page that needs manual OG-tag control this way.
Until decided, leave dormant.
