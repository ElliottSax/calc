import { describe, it, expect } from 'vitest'
import { computeWashSales, validateTrades, type Trade } from '@/lib/wash-sale'

function trade(overrides: Partial<Trade> & Pick<Trade, 'id' | 'ticker' | 'type' | 'date' | 'shares' | 'price'>): Trade {
  return { ...overrides }
}

describe('computeWashSales', () => {
  it('fully disallows a loss and chains the deferred loss into a later resale of the replacement shares', () => {
    const trades: Trade[] = [
      trade({ id: 'b1', ticker: 'XYZ', type: 'buy', date: '2026-01-01', shares: 100, price: 50 }),
      trade({ id: 's1', ticker: 'XYZ', type: 'sell', date: '2026-02-01', shares: 100, price: 40 }),
      trade({ id: 'b2', ticker: 'XYZ', type: 'buy', date: '2026-02-15', shares: 100, price: 42 }),
      trade({ id: 's2', ticker: 'XYZ', type: 'sell', date: '2026-06-01', shares: 100, price: 60 }),
    ]
    const r = computeWashSales(trades)
    const s1 = r.sells.find((s) => s.sellId === 's1')!
    const s2 = r.sells.find((s) => s.sellId === 's2')!

    expect(s1.isWashSale).toBe(true)
    expect(s1.disallowedLoss).toBeCloseTo(1000)
    expect(s1.reportedGainLoss).toBeCloseTo(0)
    // Replacement basis becomes $42 + $10 disallowed/share = $52; sold at $60 -> $8/share gain.
    expect(s2.reportedGainLoss).toBeCloseTo(800)
    expect(r.totalDisallowedLoss).toBeCloseTo(1000)
  })

  it('disallows only the replaced portion when the repurchase is smaller than the sale', () => {
    const trades: Trade[] = [
      trade({ id: 'b1', ticker: 'ABC', type: 'buy', date: '2026-01-01', shares: 100, price: 50 }),
      trade({ id: 's1', ticker: 'ABC', type: 'sell', date: '2026-02-01', shares: 100, price: 40 }),
      trade({ id: 'b2', ticker: 'ABC', type: 'buy', date: '2026-02-10', shares: 50, price: 41 }),
    ]
    const r = computeWashSales(trades)
    const s1 = r.sells.find((s) => s.sellId === 's1')!
    expect(s1.disallowedLoss).toBeCloseTo(500)
    expect(s1.reportedGainLoss).toBeCloseTo(-500)
  })

  it('allows the full loss when the repurchase is outside the 61-day window', () => {
    const trades: Trade[] = [
      trade({ id: 'b1', ticker: 'NOWASH', type: 'buy', date: '2026-01-01', shares: 100, price: 50 }),
      trade({ id: 's1', ticker: 'NOWASH', type: 'sell', date: '2026-02-01', shares: 100, price: 40 }),
      trade({ id: 'b2', ticker: 'NOWASH', type: 'buy', date: '2026-06-01', shares: 100, price: 42 }),
    ]
    const r = computeWashSales(trades)
    const s1 = r.sells.find((s) => s.sellId === 's1')!
    expect(s1.isWashSale).toBe(false)
    expect(s1.reportedGainLoss).toBeCloseTo(-1000)
    expect(s1.disallowedLoss).toBe(0)
  })

  it('triggers a wash sale when the replacement is bought before the loss sale', () => {
    const trades: Trade[] = [
      trade({ id: 'b1', ticker: 'PRE', type: 'buy', date: '2026-01-01', shares: 100, price: 50 }),
      trade({ id: 'b2', ticker: 'PRE', type: 'buy', date: '2026-01-20', shares: 100, price: 48 }),
      trade({ id: 's1', ticker: 'PRE', type: 'sell', date: '2026-02-01', shares: 100, price: 40 }),
    ]
    const r = computeWashSales(trades)
    const s1 = r.sells.find((s) => s.sellId === 's1')!
    expect(s1.disallowedLoss).toBeCloseTo(1000)
    expect(s1.reportedGainLoss).toBeCloseTo(0)
  })

  it('caps the ordinary-income offset at $3,000 and carries the remainder forward', () => {
    const trades: Trade[] = [
      trade({ id: 'b1', ticker: 'CAP', type: 'buy', date: '2026-01-01', shares: 100, price: 100 }),
      trade({ id: 's1', ticker: 'CAP', type: 'sell', date: '2026-06-01', shares: 100, price: 50 }),
    ]
    const r = computeWashSales(trades)
    expect(r.netCapitalGainLoss).toBeCloseTo(-5000)
    expect(r.ordinaryIncomeOffset).toBe(3000)
    expect(r.carryforwardLoss).toBeCloseTo(2000)
  })

  it('flags an oversell instead of returning a silently wrong result', () => {
    const trades: Trade[] = [
      trade({ id: 'b1', ticker: 'OVR', type: 'buy', date: '2026-01-01', shares: 50, price: 10 }),
      trade({ id: 's1', ticker: 'OVR', type: 'sell', date: '2026-02-01', shares: 100, price: 12 }),
    ]
    const r = computeWashSales(trades)
    expect(r.errors.length).toBeGreaterThan(0)
  })
})

describe('validateTrades', () => {
  it('rejects an empty trade list', () => {
    expect(validateTrades([])).not.toBeNull()
  })

  it('accepts a valid buy/sell pair', () => {
    const trades: Trade[] = [
      trade({ id: 'b1', ticker: 'XYZ', type: 'buy', date: '2026-01-01', shares: 10, price: 10 }),
      trade({ id: 's1', ticker: 'XYZ', type: 'sell', date: '2026-02-01', shares: 10, price: 12 }),
    ]
    expect(validateTrades(trades)).toBeNull()
  })
})
