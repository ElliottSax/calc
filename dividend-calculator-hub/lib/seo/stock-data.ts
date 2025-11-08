/**
 * Stock data for programmatic SEO pages
 */

export interface StockProfileData {
  symbol: string
  name: string
  sector: string
  industry: string
  description: string
  exchange: string
  currentYield: number
  price: number
  marketCap: number
  peRatio: number
  dividendHistory: number[]
  keyMetrics: {
    payoutRatio: number
    dividendGrowthRate5Y: number
    consecutiveYears: number
    exDividendDate: string
    paymentFrequency: string
  }
  competitors: string[]
}

// Top 100 dividend stocks for programmatic pages
export const TOP_DIVIDEND_STOCKS: StockProfileData[] = [
  {
    symbol: 'JNJ',
    name: 'Johnson & Johnson',
    sector: 'Healthcare',
    industry: 'Drug Manufacturers - General',
    description: 'Johnson & Johnson is a leader in pharmaceuticals, medical devices, and consumer products.',
    exchange: 'NYSE',
    currentYield: 2.95,
    price: 162.50,
    marketCap: 425000000000,
    peRatio: 24.5,
    dividendHistory: [4.80, 4.52, 4.24, 4.04, 3.86],
    keyMetrics: {
      payoutRatio: 62.5,
      dividendGrowthRate5Y: 5.8,
      consecutiveYears: 60,
      exDividendDate: '2024-02-15',
      paymentFrequency: 'Quarterly'
    },
    competitors: ['PFE', 'MRK', 'ABBV', 'LLY']
  },
  {
    symbol: 'KO',
    name: 'The Coca-Cola Company',
    sector: 'Consumer Defensive',
    industry: 'Beverages - Non-Alcoholic',
    description: 'Coca-Cola is the world\'s largest beverage company, refreshing consumers with more than 500 sparkling and still brands.',
    exchange: 'NYSE',
    currentYield: 3.10,
    price: 61.25,
    marketCap: 265000000000,
    peRatio: 26.8,
    dividendHistory: [1.90, 1.84, 1.76, 1.68, 1.64],
    keyMetrics: {
      payoutRatio: 74.2,
      dividendGrowthRate5Y: 3.5,
      consecutiveYears: 61,
      exDividendDate: '2024-03-14',
      paymentFrequency: 'Quarterly'
    },
    competitors: ['PEP', 'KDP', 'MNST', 'DPS']
  },
  {
    symbol: 'PG',
    name: 'Procter & Gamble',
    sector: 'Consumer Defensive',
    industry: 'Household & Personal Products',
    description: 'P&G serves consumers with one of the strongest portfolios of trusted, quality, leadership brands.',
    exchange: 'NYSE',
    currentYield: 2.42,
    price: 160.00,
    marketCap: 380000000000,
    peRatio: 27.3,
    dividendHistory: [3.87, 3.65, 3.48, 3.22, 3.16],
    keyMetrics: {
      payoutRatio: 65.8,
      dividendGrowthRate5Y: 5.2,
      consecutiveYears: 67,
      exDividendDate: '2024-01-19',
      paymentFrequency: 'Quarterly'
    },
    competitors: ['UL', 'CL', 'KMB', 'CHD']
  },
  {
    symbol: 'T',
    name: 'AT&T Inc.',
    sector: 'Communication Services',
    industry: 'Telecom Services',
    description: 'AT&T is a multinational telecommunications holding company.',
    exchange: 'NYSE',
    currentYield: 6.25,
    price: 17.50,
    marketCap: 125000000000,
    peRatio: 7.2,
    dividendHistory: [1.11, 1.11, 1.11, 2.08, 2.08],
    keyMetrics: {
      payoutRatio: 45.0,
      dividendGrowthRate5Y: -12.0,
      consecutiveYears: 35,
      exDividendDate: '2024-01-09',
      paymentFrequency: 'Quarterly'
    },
    competitors: ['VZ', 'TMUS', 'CMCSA', 'CHTR']
  },
  {
    symbol: 'XOM',
    name: 'Exxon Mobil Corporation',
    sector: 'Energy',
    industry: 'Oil & Gas Integrated',
    description: 'Exxon Mobil is one of the world\'s largest publicly traded energy providers and chemical manufacturers.',
    exchange: 'NYSE',
    currentYield: 3.35,
    price: 105.00,
    marketCap: 425000000000,
    peRatio: 10.5,
    dividendHistory: [3.52, 3.48, 3.48, 3.43, 3.28],
    keyMetrics: {
      payoutRatio: 35.2,
      dividendGrowthRate5Y: 1.5,
      consecutiveYears: 40,
      exDividendDate: '2024-02-12',
      paymentFrequency: 'Quarterly'
    },
    competitors: ['CVX', 'COP', 'BP', 'SHEL']
  }
  // Add more stocks here...
]

// Generate metadata for stock pages
export function generateStockMetadata(stock: StockProfileData) {
  return {
    title: `${stock.symbol} Dividend Analysis | ${stock.name} Stock Yield & History`,
    description: `${stock.name} (${stock.symbol}) dividend analysis: ${stock.currentYield.toFixed(2)}% yield, ${stock.keyMetrics.consecutiveYears} years of payments. View dividend history, payout ratio, and growth rate.`,
    keywords: `${stock.symbol} dividend, ${stock.name} yield, ${stock.symbol} dividend history, ${stock.symbol} payout ratio, ${stock.name} dividend growth`
  }
}

// Generate URL slug for stock pages
export function generateStockSlug(symbol: string): string {
  return symbol.toLowerCase()
}

// Get stock by symbol
export function getStockBySymbol(symbol: string): StockProfileData | undefined {
  return TOP_DIVIDEND_STOCKS.find(s => s.symbol === symbol.toUpperCase())
}

// Get related stocks (same sector)
export function getRelatedStocks(stock: StockProfileData, limit: number = 5): StockProfileData[] {
  return TOP_DIVIDEND_STOCKS
    .filter(s => s.sector === stock.sector && s.symbol !== stock.symbol)
    .slice(0, limit)
}

// Get competitor stocks
export function getCompetitorStocks(stock: StockProfileData): StockProfileData[] {
  return TOP_DIVIDEND_STOCKS.filter(s => stock.competitors.includes(s.symbol))
}