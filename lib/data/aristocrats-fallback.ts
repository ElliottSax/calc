/**
 * Fallback data for Dividend Aristocrats when API is unavailable
 * This list includes well-known S&P 500 Dividend Aristocrats
 */

import type { DividendAristocrat } from '@/types/aristocrats'

export const ARISTOCRATS_FALLBACK_DATA: DividendAristocrat[] = [
  {
    symbol: 'JNJ',
    companyName: 'Johnson & Johnson',
    sector: 'Healthcare',
    industry: 'Drug Manufacturers - General',
    currentYield: 2.95,
    dividendGrowthRate5Y: 5.8,
    payoutRatio: 62.5,
    yearsOfDividendGrowth: 60,
    marketCap: 425000000000,
    price: 162.50,
    annualDividend: 4.80,
    exDividendDate: '2024-02-15',
    paymentDate: '2024-03-12',
    lastUpdated: new Date().toISOString()
  },
  {
    symbol: 'KO',
    companyName: 'The Coca-Cola Company',
    sector: 'Consumer Defensive',
    industry: 'Beverages - Non-Alcoholic',
    currentYield: 3.10,
    dividendGrowthRate5Y: 3.5,
    payoutRatio: 74.2,
    yearsOfDividendGrowth: 61,
    marketCap: 265000000000,
    price: 61.25,
    annualDividend: 1.90,
    exDividendDate: '2024-03-14',
    paymentDate: '2024-04-01',
    lastUpdated: new Date().toISOString()
  },
  {
    symbol: 'PG',
    companyName: 'Procter & Gamble',
    sector: 'Consumer Defensive',
    industry: 'Household & Personal Products',
    currentYield: 2.42,
    dividendGrowthRate5Y: 5.2,
    payoutRatio: 65.8,
    yearsOfDividendGrowth: 67,
    marketCap: 380000000000,
    price: 160.00,
    annualDividend: 3.87,
    exDividendDate: '2024-01-19',
    paymentDate: '2024-02-15',
    lastUpdated: new Date().toISOString()
  },
  {
    symbol: 'MMM',
    companyName: '3M Company',
    sector: 'Industrials',
    industry: 'Conglomerates',
    currentYield: 5.95,
    dividendGrowthRate5Y: 1.2,
    payoutRatio: 58.3,
    yearsOfDividendGrowth: 65,
    marketCap: 58000000000,
    price: 105.00,
    annualDividend: 6.24,
    exDividendDate: '2024-02-15',
    paymentDate: '2024-03-12',
    lastUpdated: new Date().toISOString()
  },
  {
    symbol: 'ABBV',
    companyName: 'AbbVie Inc.',
    sector: 'Healthcare',
    industry: 'Drug Manufacturers - General',
    currentYield: 3.85,
    dividendGrowthRate5Y: 8.9,
    payoutRatio: 52.1,
    yearsOfDividendGrowth: 51,
    marketCap: 285000000000,
    price: 160.00,
    annualDividend: 6.16,
    exDividendDate: '2024-01-12',
    paymentDate: '2024-02-15',
    lastUpdated: new Date().toISOString()
  },
  {
    symbol: 'PEP',
    companyName: 'PepsiCo, Inc.',
    sector: 'Consumer Defensive',
    industry: 'Beverages - Non-Alcoholic',
    currentYield: 2.98,
    dividendGrowthRate5Y: 6.8,
    payoutRatio: 71.5,
    yearsOfDividendGrowth: 51,
    marketCap: 245000000000,
    price: 178.00,
    annualDividend: 5.30,
    exDividendDate: '2024-03-07',
    paymentDate: '2024-03-31',
    lastUpdated: new Date().toISOString()
  },
  {
    symbol: 'CL',
    companyName: 'Colgate-Palmolive',
    sector: 'Consumer Defensive',
    industry: 'Household & Personal Products',
    currentYield: 2.25,
    dividendGrowthRate5Y: 3.2,
    payoutRatio: 59.4,
    yearsOfDividendGrowth: 60,
    marketCap: 75000000000,
    price: 88.50,
    annualDividend: 1.99,
    exDividendDate: '2024-01-19',
    paymentDate: '2024-02-15',
    lastUpdated: new Date().toISOString()
  },
  {
    symbol: 'EMR',
    companyName: 'Emerson Electric',
    sector: 'Industrials',
    industry: 'Specialty Industrial Machinery',
    currentYield: 2.15,
    dividendGrowthRate5Y: 1.5,
    payoutRatio: 48.6,
    yearsOfDividendGrowth: 66,
    marketCap: 65000000000,
    price: 112.00,
    annualDividend: 2.41,
    exDividendDate: '2024-02-09',
    paymentDate: '2024-03-11',
    lastUpdated: new Date().toISOString()
  },
  {
    symbol: 'O',
    companyName: 'Realty Income',
    sector: 'Real Estate',
    industry: 'REIT - Retail',
    currentYield: 5.45,
    dividendGrowthRate5Y: 3.8,
    payoutRatio: 75.2,
    yearsOfDividendGrowth: 26,
    marketCap: 45000000000,
    price: 56.75,
    annualDividend: 3.09,
    exDividendDate: '2024-01-31',
    paymentDate: '2024-02-15',
    lastUpdated: new Date().toISOString()
  },
  {
    symbol: 'WMT',
    companyName: 'Walmart Inc.',
    sector: 'Consumer Defensive',
    industry: 'Discount Stores',
    currentYield: 1.35,
    dividendGrowthRate5Y: 1.9,
    payoutRatio: 35.8,
    yearsOfDividendGrowth: 50,
    marketCap: 485000000000,
    price: 180.00,
    annualDividend: 2.43,
    exDividendDate: '2024-01-11',
    paymentDate: '2024-02-05',
    lastUpdated: new Date().toISOString()
  }
]

// Helper function to get sectors from fallback data
export function getFallbackSectors(): string[] {
  return Array.from(new Set(ARISTOCRATS_FALLBACK_DATA.map(stock => stock.sector)))
}