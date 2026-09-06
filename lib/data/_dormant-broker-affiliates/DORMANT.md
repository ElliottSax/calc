# Dormant: broker-affiliates.ts (5-broker list)

**Moved here:** 2026-09-06, during a dead-code sweep.

`broker-affiliates.ts` has no importers anywhere in the codebase.
`components/affiliate/BrokerComparisonTable.tsx` imports `broker-affiliates-
expanded.ts` (15+ brokers) instead — this file's stale predecessor. This
repo's own CLAUDE.md still had a Feb-2026 section calling this file "Current
(5 brokers)" until this 2026-09-06 sweep corrected it; it was also edited in
commit ccc9df3 (2026-08-09) as though live.

**Decision needed:** delete (the expanded broker list is the one actually
used, and it's a strict superset) unless there's a reason to keep the smaller
list around. Until decided, leave dormant.
