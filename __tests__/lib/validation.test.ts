import { describe, it, expect } from 'vitest'
import {
  validateDripInputs,
  sanitizeNumericInput,
  parsePercentageInput,
} from '@/lib/utils/validation'
import type { DripCalculatorInputs } from '@/types/calculator'

function validInputs(overrides: Partial<DripCalculatorInputs> = {}): DripCalculatorInputs {
  return {
    ticker: 'AAPL',
    initialInvestment: '10000',
    sharePrice: '150',
    annualDividend: '3.28',
    dividendYield: '2.19',
    monthlyContribution: '500',
    dividendGrowthRate: '7',
    shareAppreciationRate: '8',
    yearsToCalculate: 10,
    taxRate: '15',
    reinvestDividends: true,
    ...overrides,
  }
}

describe('validateDripInputs', () => {
  it('returns no errors for valid inputs', () => {
    expect(validateDripInputs(validInputs())).toEqual([])
  })

  it('returns error for negative initial investment', () => {
    const errors = validateDripInputs(validInputs({ initialInvestment: '-100' }))
    expect(errors.some(e => e.field === 'initialInvestment')).toBe(true)
  })

  it('returns error for NaN initial investment', () => {
    const errors = validateDripInputs(validInputs({ initialInvestment: 'abc' }))
    expect(errors.some(e => e.field === 'initialInvestment')).toBe(true)
  })

  it('returns error for zero share price', () => {
    const errors = validateDripInputs(validInputs({ sharePrice: '0' }))
    expect(errors.some(e => e.field === 'sharePrice')).toBe(true)
  })

  it('returns error for negative share price', () => {
    const errors = validateDripInputs(validInputs({ sharePrice: '-50' }))
    expect(errors.some(e => e.field === 'sharePrice')).toBe(true)
  })

  it('returns error for negative annual dividend', () => {
    const errors = validateDripInputs(validInputs({ annualDividend: '-1' }))
    expect(errors.some(e => e.field === 'annualDividend')).toBe(true)
  })

  it('returns error for negative monthly contribution', () => {
    const errors = validateDripInputs(validInputs({ monthlyContribution: '-200' }))
    expect(errors.some(e => e.field === 'monthlyContribution')).toBe(true)
  })

  it('returns error for dividend growth rate > 100', () => {
    const errors = validateDripInputs(validInputs({ dividendGrowthRate: '101' }))
    expect(errors.some(e => e.field === 'dividendGrowthRate')).toBe(true)
  })

  it('returns error for dividend growth rate < -100', () => {
    const errors = validateDripInputs(validInputs({ dividendGrowthRate: '-101' }))
    expect(errors.some(e => e.field === 'dividendGrowthRate')).toBe(true)
  })

  it('returns error for share appreciation rate > 100', () => {
    const errors = validateDripInputs(validInputs({ shareAppreciationRate: '101' }))
    expect(errors.some(e => e.field === 'shareAppreciationRate')).toBe(true)
  })

  it('returns error for tax rate > 100', () => {
    const errors = validateDripInputs(validInputs({ taxRate: '101' }))
    expect(errors.some(e => e.field === 'taxRate')).toBe(true)
  })

  it('returns error for negative tax rate', () => {
    const errors = validateDripInputs(validInputs({ taxRate: '-5' }))
    expect(errors.some(e => e.field === 'taxRate')).toBe(true)
  })

  it('returns error for years < 1', () => {
    const errors = validateDripInputs(validInputs({ yearsToCalculate: 0 }))
    expect(errors.some(e => e.field === 'yearsToCalculate')).toBe(true)
  })

  it('returns error for years > 50', () => {
    const errors = validateDripInputs(validInputs({ yearsToCalculate: 51 }))
    expect(errors.some(e => e.field === 'yearsToCalculate')).toBe(true)
  })

  it('accepts boundary values (0 investment, 0% growth, 100% tax)', () => {
    const errors = validateDripInputs(validInputs({
      initialInvestment: '0',
      dividendGrowthRate: '0',
      taxRate: '100',
    }))
    expect(errors).toEqual([])
  })

  it('accepts -100% growth rate as valid boundary', () => {
    const errors = validateDripInputs(validInputs({ dividendGrowthRate: '-100' }))
    expect(errors).toEqual([])
  })
})

describe('sanitizeNumericInput', () => {
  it('strips letters', () => {
    expect(sanitizeNumericInput('abc123')).toBe('123')
  })

  it('strips dollar sign and commas', () => {
    expect(sanitizeNumericInput('$1,234.56')).toBe('1234.56')
  })

  it('preserves negative sign', () => {
    expect(sanitizeNumericInput('-42')).toBe('-42')
  })

  it('preserves decimal point', () => {
    expect(sanitizeNumericInput('3.14')).toBe('3.14')
  })

  it('strips percent sign', () => {
    expect(sanitizeNumericInput('5%')).toBe('5')
  })

  it('returns empty string for no digits', () => {
    expect(sanitizeNumericInput('abc')).toBe('')
  })
})

describe('parsePercentageInput', () => {
  it('handles plain number', () => {
    expect(parsePercentageInput('5')).toBe('5')
  })

  it('strips percent sign', () => {
    expect(parsePercentageInput('5%')).toBe('5')
  })

  it('handles number with spaces', () => {
    expect(parsePercentageInput(' 7.5 ')).toBe('7.5')
  })

  it('handles negative percentage', () => {
    expect(parsePercentageInput('-3.5%')).toBe('-3.5')
  })
})
