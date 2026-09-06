/**
 * LiveMarketData removed 2026-08-19.
 *
 * Despite the name, nothing here was live and none of it was market data. The
 * component built a price series by starting from a hardcoded baseValue of 150
 * and adding `Math.random() * 10 - 5` per point, with `Math.floor(Math.random()
 * * 1000000)` for volume, then charted it as an intraday feed.
 *
 * It was not imported by any page, which is the only reason a reader never saw
 * invented prices on a site about investing. Kept as a no-op rather than deleted
 * so the name stays claimed.
 *
 * If live quotes are wanted, they come from a market data provider, and the
 * component shows nothing when that provider is unavailable.
 */

export function LiveMarketData() {
  return null
}

export default LiveMarketData
