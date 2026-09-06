# Dormant: optimized-metadata helper

**Moved here:** 2026-09-06, during a dead-code sweep.

`optimized-metadata.ts` has no importers anywhere in the codebase. Live pages
build their `Metadata` exports directly rather than through this helper.

**Decision needed:** finish-and-launch (adopt it as the shared metadata
builder, if there's duplicated metadata-construction logic worth
consolidating across pages) or delete. Until decided, leave dormant.
