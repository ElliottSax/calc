import { describe, it, expect, vi } from 'vitest'
import Big from 'big.js'

// Mock the logger before importing the module under test
vi.mock('@/lib/logger', () => ({
  calculatorLogger: { info: vi.fn(), error: vi.fn(), warn: vi.fn(), debug: vi.fn() },
  logger: { info: vi.fn(), error: vi.fn(), warn: vi.fn(), debug: vi.fn() },
}))

import {
  calculateDripResults,
  calculateAnnualizedReturn,
  formatCurrency,
  formatPercent,
  formatNumber,
} from '@/lib/utils/calculations'
import type { DripCalculatorInputs } from '@/types/calculator'

function makeInputs(overrides: Partial<DripCalculatorInputs> = {}): DripCalculatorInputs {
  return {
    ticker: 'TEST',
    initialInvestment: '10000',
    sharePrice: '100',
    annualDividend: '4',
    dividendYield: '4',
    monthlyContribution: '100',
    dividendGrowthRate: '5',
    shareAppreciationRate: '7',
    yearsToCalculate: 5,
    taxRate: '0',
    reinvestDividends: true,
    ...overrides,
  }
}

describe('calculateDripResults', () => {
  it('returns one result per year', () => {
    const { results } = calculateDripResults(makeInputs())
    expect(results).toHaveLength(5)
    expect(results[0].year).toBe(1)
    expect(results[4].year).toBe(5)
  })

  it('grows portfolio value over time', () => {
    const { results } = calculateDripResults(makeInputs())
    const firstValue = results[0].portfolioValue.toNumber()
    const lastValue = results[4].portfolioValue.toNumber()
    expect(lastValue).toBeGreaterThan(firstValue)
  })

  it('accumulates total dividends earned', () => {
    const { results } = calculateDripResults(makeInputs())
    for (let i = 1; i < results.length; i++) {
      expect(results[i].totalDividendsEarned.toNumber())
        .toBeGreaterThan(results[i - 1].totalDividendsEarned.toNumber())
    }
  })

  it('produces more shares with reinvestment ON than OFF', () => {
    const withReinvest = calculateDripResults(makeInputs({ reinvestDividends: true }))
    const withoutReinvest = calculateDripResults(makeInputs({ reinvestDividends: false }))
    const sharesOn = withReinvest.results[4].shares.toNumber()
    const sharesOff = withoutReinvest.results[4].shares.toNumber()
    expect(sharesOn).toBeGreaterThan(sharesOff)
  })

  it('handles zero monthly contribution', () => {
    const { results, summary } = calculateDripResults(
      makeInputs({ monthlyContribution: '0' })
    )
    // Total contributions should equal initial investment only
    expect(summary.totalContributions.toNumber()).toBe(10000)
    expect(results).toHaveLength(5)
  })

  it('handles zero dividend growth', () => {
    const { results } = calculateDripResults(
      makeInputs({ dividendGrowthRate: '0' })
    )
    // Annual dividend per share stays the same across years
    // Year 1 and year 5 gross dividend per share should differ only by share count
    expect(results).toHaveLength(5)
    // With 0 growth, the dividend yield on original cost stays constant
    expect(results[0].yieldOnCost.toNumber()).toBe(results[4].yieldOnCost.toNumber())
  })

  it('applies tax rate to dividends', () => {
    const noTax = calculateDripResults(makeInputs({ taxRate: '0' }))
    const withTax = calculateDripResults(makeInputs({ taxRate: '25' }))
    // Net annual dividend should be lower with tax
    expect(withTax.results[0].netAnnualDividend.toNumber())
      .toBeLessThan(noTax.results[0].netAnnualDividend.toNumber())
    // Gross should be the same (same inputs otherwise)
    expect(withTax.results[0].grossAnnualDividend.toNumber())
      .toBe(noTax.results[0].grossAnnualDividend.toNumber())
  })

  it('summary contains correct initial investment', () => {
    const { summary } = calculateDripResults(makeInputs())
    expect(summary.initialInvestment.toNumber()).toBe(10000)
  })

  it('computes correct year-1 values for known inputs', () => {
    const inputs = makeInputs({
      initialInvestment: '10000',
      sharePrice: '100',
      annualDividend: '4',
      monthlyContribution: '0',
      dividendGrowthRate: '0',
      shareAppreciationRate: '0',
      taxRate: '0',
      reinvestDividends: true,
    })
    const { results } = calculateDripResults(inputs)
    const y1 = results[0]
    // 100 shares * $4 = $400 dividend
    expect(y1.grossAnnualDividend.toNumber()).toBe(400)
    // shares = 100 initial + 400/100 reinvested = 104
    expect(y1.shares.toNumber()).toBe(104)
    // portfolio = 104 * 100 = 10400
    expect(y1.portfolioValue.toNumber()).toBe(10400)
  })
})

describe('calculateAnnualizedReturn', () => {
  it('computes basic CAGR', () => {
    // $10k -> $20k in 10 years => ~7.177% CAGR
    const result = calculateAnnualizedReturn(new Big(10000), new Big(20000), 10)
    expect(result.toNumber()).toBeCloseTo(7.177, 1)
  })

  it('returns 0 for zero initial value', () => {
    const result = calculateAnnualizedReturn(new Big(0), new Big(10000), 5)
    expect(result.toNumber()).toBe(0)
  })

  it('returns 0 for zero years', () => {
    const result = calculateAnnualizedReturn(new Big(10000), new Big(20000), 0)
    expect(result.toNumber()).toBe(0)
  })

  it('handles negative returns', () => {
    const result = calculateAnnualizedReturn(new Big(10000), new Big(5000), 5)
    expect(result.toNumber()).toBeLessThan(0)
  })
})

describe('formatCurrency', () => {
  it('formats a Big number', () => {
    expect(formatCurrency(new Big(1234.5))).toBe('$1,234.50')
  })

  it('formats a plain number', () => {
    expect(formatCurrency(1000)).toBe('$1,000.00')
  })

  it('formats a string', () => {
    expect(formatCurrency('999.9')).toBe('$999.90')
  })

  it('formats zero', () => {
    expect(formatCurrency(0)).toBe('$0.00')
  })

  it('formats large numbers with commas', () => {
    expect(formatCurrency(1000000)).toBe('$1,000,000.00')
  })
})

describe('formatPercent', () => {
  it('formats a Big number', () => {
    expect(formatPercent(new Big(7.5))).toBe('7.50%')
  })

  it('formats a plain number', () => {
    expect(formatPercent(3.14159)).toBe('3.14%')
  })

  it('formats a string', () => {
    expect(formatPercent('12')).toBe('12.00%')
  })
})

describe('formatNumber', () => {
  it('formats with default 2 decimals', () => {
    expect(formatNumber(1234.567)).toBe('1,234.57')
  })

  it('respects custom decimal parameter', () => {
    expect(formatNumber(1234.5, 0)).toBe('1,235')
  })

  it('formats a Big number', () => {
    expect(formatNumber(new Big(999.1), 1)).toBe('999.1')
  })
})
