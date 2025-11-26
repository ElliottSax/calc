/**
 * TypeScript types for dividend calculator with Big.js precision
 */

import type Big from 'big.js'

// Input types for calculator forms
export interface DripCalculatorInputs {
  ticker: string
  initialInvestment: string
  sharePrice: string
  annualDividend: string
  dividendYield: string
  monthlyContribution: string
  dividendGrowthRate: string
  shareAppreciationRate: string
  yearsToCalculate: number
  taxRate: string
  reinvestDividends: boolean
}

// Calculation result types
export interface DripCalculationResult {
  year: number
  shares: Big
  sharePrice: Big
  portfolioValue: Big
  annualDividend: Big
  grossAnnualDividend: Big
  netAnnualDividend: Big
  totalDividends: Big
  totalDividendsEarned: Big
  totalContributions: Big
  totalReturn: Big
  totalReturnPercent: Big
  dividendYield: Big
  yieldOnCost: Big
}

export interface DripSummary {
  initialInvestment: Big
  finalPortfolioValue: Big
  totalContributions: Big
  totalDividendsEarned: Big
  totalReturn: Big
  totalReturnPercent: Big
  annualizedReturn: Big
  finalShares: Big
  finalDividendIncome: Big
  finalYieldOnCost: Big
}

// Chart data types
export interface ChartDataPoint {
  label: string
  value: number
}

export interface PortfolioChartData {
  years: number[]
  portfolioValue: number[]
  totalContributions: number[]
  dividendIncome: number[]
}

// Validation types
export interface ValidationError {
  field: keyof DripCalculatorInputs
  message: string
}

export interface CalculatorState {
  inputs: DripCalculatorInputs
  results: DripCalculationResult[] | null
  summary: DripSummary | null
  loading: boolean
  errors: ValidationError[]
}

// Stock data types (from API)
export interface StockData {
  symbol: string
  name: string
  price: number
  dividendYield: number
  annualDividend: number
  payoutRatio?: number
  dividendGrowthRate?: number
  sector?: string
  industry?: string
}