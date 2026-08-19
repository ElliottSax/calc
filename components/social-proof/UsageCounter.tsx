/**
 * Usage counters removed 2026-08-18.
 *
 * This file used to render "47,392 Total Users", "12,847 This Month" and
 * "156,238 Calculations Run" -- and then increment the first two on a 5-second
 * timer with Math.random(), so the page appeared to show live traffic arriving.
 *
 * None of those numbers came from anywhere. There is no analytics query behind
 * them and never was. A static invented figure is a false claim; an invented
 * figure animated to look like a live feed is a deliberate one, and it sat on a
 * site whose readers are making decisions about their retirement savings.
 *
 * The exports are kept as no-ops so any page still importing them keeps building.
 * If real usage numbers are ever wanted here, they have to come from an actual
 * analytics source, and the component should show nothing when that source is
 * unavailable rather than falling back to a placeholder.
 */

export function UsageCounter() {
  return null
}

export function SimpleUsageCounter() {
  return null
}
