/**
 * TypeScript types for Dividend Aristocrats Explorer
 */

export interface DividendAristocrat {
  symbol: string
  companyName: string
  sector: string
  industry: string
  currentYield: number
  dividendGrowthRate5Y: number
  payoutRatio: number
  yearsOfDividendGrowth: number
  marketCap: number
  price: number
  annualDividend: number
  exDividendDate: string | null
  paymentDate: string | null
  lastUpdated: string
}

export interface DividendHistoryPoint {
  date: string
  dividend: number
  adjustedDividend: number
}

export interface AristocratDetails extends DividendAristocrat {
  description: string
  website: string
  ceo: string
  employees: number
  dividendHistory: DividendHistoryPoint[]
  financialMetrics: {
    revenue: number
    revenueGrowth: number
    netIncome: number
    freeCashFlow: number
    debtToEquity: number
    returnOnEquity: number
  }
}

export interface AristocratFilter {
  sectors: string[]
  minYield: number
  maxYield: number
  minGrowthRate: number
  maxGrowthRate: number
  minYearsGrowth: number
}

export interface ComparisonItem {
  symbol: string
  data: DividendAristocrat
}

export interface WatchlistItem {
  id: string
  userId: string
  symbol: string
  addedAt: string
  notes: string | null
  targetYield?: number
  targetPrice?: number
}