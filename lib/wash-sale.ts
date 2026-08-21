/**
 * Wash-sale detection and basis-adjustment arithmetic (IRC §1091).
 *
 * Rule: a loss on a sale of stock or securities is disallowed if, within the
 * 61-day window spanning 30 days before the sale through 30 days after it,
 * you buy substantially identical securities. The disallowed loss is added
 * to the cost basis of the replacement shares, deferring (not eliminating)
 * the tax benefit to when those replacement shares are eventually sold.
 * Source: IRC §1091; IRS Publication 550 ("Wash Sales"); IRS Topic 409
 * (capital gains/losses, incl. the $3,000/yr ordinary-income offset cap and
 * indefinite carryforward for individuals).
 *
 * Algorithm, per ticker, processing trades in chronological order:
 *  1. FIFO-match every sell against open buy lots to determine which lot(s)
 *     supplied the shares sold, using each lot's *current* basis per share
 *     (which may already reflect an earlier wash-sale bump).
 *  2. For every matched fragment sold at a loss, search ALL buys of the same
 *     ticker (excluding the lot just sold from) within the 61-day window for
 *     unused replacement capacity, nearest-date first, and disallow the loss
 *     on the matched share count.
 *  3. The disallowed dollar amount is added to the basis of exactly the
 *     replacement shares consumed (via per-lot cost layers, so a lot that is
 *     only partially used as a replacement keeps the rest of its shares at
 *     unadjusted basis).
 *
 * Scope: correct for the common case of a handful of manually-entered
 * trades processed in chronological order, including a later resale of the
 * replacement shares. It does not handle every possible ordering of a
 * multi-hop chain (e.g. a replacement lot fully resold *before* the loss
 * sale that later designates it as a replacement) — enter trades in
 * chronological order for an accurate result. This is a calculator over the
 * trades you provide, not a brokerage cost-basis system; verify against
 * your 1099-B before filing.
 */

export type TradeType = 'buy' | 'sell'

export interface Trade {
  id: string
  ticker: string
  type: TradeType
  /** ISO date string, YYYY-MM-DD. */
  date: string
  shares: number
  /** Price per share in dollars. */
  price: number
}

interface CostLayer {
  shares: number
  basisPerShare: number
}

interface Lot {
  id: string
  ticker: string
  date: string
  originalShares: number
  originalBasisPerShare: number
  /** FIFO-sellable inventory; splits when a wash-sale bump only covers part of the lot. */
  layers: CostLayer[]
  /** Shares of this lot not yet consumed as someone else's wash-sale replacement. */
  forWashRemaining: number
}

export interface DisallowedFragment {
  sellId: string
  ticker: string
  sellDate: string
  soldLotId: string
  soldLotDate: string
  disallowedShares: number
  lossPerShare: number
  disallowedAmount: number
  replacementLotId: string
  replacementDate: string
}

export interface SellReport {
  sellId: string
  ticker: string
  date: string
  shares: number
  proceeds: number
  /** Reported gain/loss after wash-sale disallowance — this is the number that hits Schedule D. */
  reportedGainLoss: number
  disallowedLoss: number
  isWashSale: boolean
}

export interface WashSaleResult {
  sells: SellReport[]
  disallowedFragments: DisallowedFragment[]
  errors: string[]
  totalDisallowedLoss: number
  /** Sum of reportedGainLoss across every sell — before the $3,000 ordinary-income cap. */
  netCapitalGainLoss: number
  /** Portion of a net loss usable against ordinary income this year (max $3,000; $1,500 MFS). */
  ordinaryIncomeOffset: number
  /** Net loss remaining after the ordinary-income offset, carried to next year. Zero if net gain. */
  carryforwardLoss: number
}

const DAY_MS = 24 * 60 * 60 * 1000

function daysBetween(a: string, b: string): number {
  return Math.abs(Date.parse(a) - Date.parse(b)) / DAY_MS
}

export function validateTrades(trades: Trade[]): string | null {
  if (trades.length === 0) return 'Add at least one buy and one sell to check for wash sales.'
  for (const t of trades) {
    if (!t.ticker.trim()) return 'Every trade needs a ticker.'
    if (!Number.isFinite(t.shares) || t.shares <= 0) return `${t.ticker || 'A trade'}: shares must be greater than 0.`
    if (!Number.isFinite(t.price) || t.price <= 0) return `${t.ticker || 'A trade'}: price must be greater than $0.`
    if (!t.date || Number.isNaN(Date.parse(t.date))) return `${t.ticker || 'A trade'}: enter a valid date.`
  }
  return null
}

export function computeWashSales(trades: Trade[], carryforwardCapPerYear = 3000): WashSaleResult {
  const sorted = [...trades].sort((a, b) => {
    const d = Date.parse(a.date) - Date.parse(b.date)
    if (d !== 0) return d
    if (a.type !== b.type) return a.type === 'buy' ? -1 : 1
    return 0
  })

  const byTicker = new Map<string, Trade[]>()
  for (const t of sorted) {
    if (!byTicker.has(t.ticker)) byTicker.set(t.ticker, [])
    byTicker.get(t.ticker)!.push(t)
  }

  const sells: SellReport[] = []
  const disallowedFragments: DisallowedFragment[] = []
  const errors: string[] = []

  for (const [ticker, tickerTrades] of byTicker) {
    const lots: Lot[] = tickerTrades
      .filter((t) => t.type === 'buy')
      .map((t) => ({
        id: t.id,
        ticker,
        date: t.date,
        originalShares: t.shares,
        originalBasisPerShare: t.price,
        layers: [{ shares: t.shares, basisPerShare: t.price }],
        forWashRemaining: t.shares,
      }))

    const lotById = new Map(lots.map((l) => [l.id, l]))

    /** Apply a basis bump to exactly `consume` shares of `lot`, splitting layers as needed. */
    function bumpLot(lot: Lot, consume: number, bumpPerShare: number) {
      let need = consume
      const nextLayers: CostLayer[] = []
      for (const layer of lot.layers) {
        if (need <= 0) {
          nextLayers.push(layer)
          continue
        }
        const take = Math.min(layer.shares, need)
        const untouched = layer.shares - take
        if (untouched > 0) nextLayers.push({ shares: untouched, basisPerShare: layer.basisPerShare })
        if (take > 0) nextLayers.push({ shares: take, basisPerShare: layer.basisPerShare + bumpPerShare })
        need -= take
      }
      lot.layers = nextLayers
    }

    /** Consume `take` shares from a lot's oldest-cost layers (fungible; order doesn't affect totals). */
    function consumeFromLot(lot: Lot, take: number): CostLayer[] {
      const consumed: CostLayer[] = []
      let need = take
      const remaining: CostLayer[] = []
      for (const layer of lot.layers) {
        if (need <= 0) {
          remaining.push(layer)
          continue
        }
        const t = Math.min(layer.shares, need)
        if (t > 0) consumed.push({ shares: t, basisPerShare: layer.basisPerShare })
        const leftover = layer.shares - t
        if (leftover > 0) remaining.push({ shares: leftover, basisPerShare: layer.basisPerShare })
        need -= t
      }
      lot.layers = remaining
      return consumed
    }

    for (const t of tickerTrades) {
      if (t.type !== 'sell') continue

      let remaining = t.shares
      const fragments: { lot: Lot; shares: number; basisPerShare: number }[] = []
      const orderedLots = lots
        .filter((l) => Date.parse(l.date) <= Date.parse(t.date))
        .sort((a, b) => Date.parse(a.date) - Date.parse(b.date))

      for (const lot of orderedLots) {
        if (remaining <= 0) break
        const available = lot.layers.reduce((s, l) => s + l.shares, 0)
        if (available <= 0) continue
        const take = Math.min(remaining, available)
        for (const c of consumeFromLot(lot, take)) {
          fragments.push({ lot, shares: c.shares, basisPerShare: c.basisPerShare })
        }
        remaining -= take
      }

      if (remaining > 0) {
        errors.push(
          `${ticker}: sell of ${t.shares} shares on ${t.date} exceeds shares held at that point by ${remaining}.`
        )
      }

      let reportedGainLoss = 0
      let disallowedLoss = 0
      let sawWashSale = false

      for (const frag of fragments) {
        const gainLossPerShare = t.price - frag.basisPerShare
        if (gainLossPerShare >= 0) {
          reportedGainLoss += gainLossPerShare * frag.shares
          continue
        }

        const lossPerShare = -gainLossPerShare
        const candidates = lots
          .filter((l) => l.id !== frag.lot.id && l.forWashRemaining > 0 && daysBetween(l.date, t.date) <= 30)
          .sort((a, b) => daysBetween(a.date, t.date) - daysBetween(b.date, t.date) || Date.parse(a.date) - Date.parse(b.date))

        let sharesToDisallow = frag.shares
        for (const cand of candidates) {
          if (sharesToDisallow <= 0) break
          const consume = Math.min(sharesToDisallow, cand.forWashRemaining)
          if (consume <= 0) continue
          cand.forWashRemaining -= consume
          bumpLot(cand, consume, lossPerShare)
          const disallowedAmount = consume * lossPerShare
          disallowedLoss += disallowedAmount
          sharesToDisallow -= consume
          sawWashSale = true
          disallowedFragments.push({
            sellId: t.id,
            ticker,
            sellDate: t.date,
            soldLotId: frag.lot.id,
            soldLotDate: frag.lot.date,
            disallowedShares: consume,
            lossPerShare,
            disallowedAmount,
            replacementLotId: cand.id,
            replacementDate: cand.date,
          })
        }

        // sharesToDisallow left over after the loop is the portion of the loss with no
        // replacement match within the window — a real, allowed loss.
        const allowedShares = sharesToDisallow
        reportedGainLoss += gainLossPerShare * allowedShares
      }

      sells.push({
        sellId: t.id,
        ticker,
        date: t.date,
        shares: t.shares,
        proceeds: t.shares * t.price,
        reportedGainLoss,
        disallowedLoss,
        isWashSale: sawWashSale,
      })
    }
  }

  sells.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))

  const totalDisallowedLoss = disallowedFragments.reduce((s, f) => s + f.disallowedAmount, 0)
  const netCapitalGainLoss = sells.reduce((s, r) => s + r.reportedGainLoss, 0)
  const ordinaryIncomeOffset = netCapitalGainLoss < 0 ? Math.min(-netCapitalGainLoss, carryforwardCapPerYear) : 0
  const carryforwardLoss = netCapitalGainLoss < 0 ? Math.max(-netCapitalGainLoss - ordinaryIncomeOffset, 0) : 0

  return {
    sells,
    disallowedFragments,
    errors,
    totalDisallowedLoss,
    netCapitalGainLoss,
    ordinaryIncomeOffset,
    carryforwardLoss,
  }
}
