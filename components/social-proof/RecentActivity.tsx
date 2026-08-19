/**
 * Recent-activity popup removed 2026-08-18.
 *
 * This rendered a fixed-position toast cycling eight invented people -- "Sarah
 * from Austin used the DRIP Calculator, 2 minutes ago", "Michael from SF
 * calculated their 401(k) growth" -- rotating every 5 seconds to look like a
 * live feed of other visitors.
 *
 * Nobody named in it exists and no activity was being observed. It was not
 * imported by any page when it was removed, which is the only reason it never
 * shipped to a reader.
 *
 * Kept as a no-op rather than deleted so the name stays claimed: a file that
 * disappears tends to get rewritten by whoever next wants social proof.
 */

export function RecentActivity() {
  return null
}
