# Dormant: trust signals component

**Moved here:** 2026-09-06, during a dead-code sweep.

`TrustSignals.tsx` has no importers anywhere in `app/`. Note: this repo also
had a real "trust signal" honesty problem — fabricated press-coverage claims
("As Featured In Forbes/WSJ/...") were removed sitewide in the 2026-08-19
compliance pass. Before reviving this component, check its contents against
`.github/workflows/integrity-gates.yml`'s "No invented audience or press
claims" gate; that gate does not scan `app/blog/` or `app/brokers/` but does
scan `components/`, so this file would be checked automatically if revived.

**Decision needed:** finish-and-launch (after an honesty check) or delete.
Until decided, leave dormant.
