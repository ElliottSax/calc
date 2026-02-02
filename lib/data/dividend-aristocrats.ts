// S&P 500 Dividend Aristocrats and Top Dividend Stocks
// Data as of 2026 - Update quarterly

export interface DividendStock {
  ticker: string;
  name: string;
  sector: string;
  price: number;
  annualDividend: number;
  yield: number;
  dividendGrowth5Year: number;
  yearsOfGrowth: number;
  payoutRatio?: number;
  marketCap?: number;
}

export const DIVIDEND_ARISTOCRATS: DividendStock[] = [
  // Technology & Communication
  {
    ticker: 'AAPL',
    name: 'Apple Inc.',
    sector: 'Technology',
    price: 185.50,
    annualDividend: 0.96,
    yield: 0.52,
    dividendGrowth5Year: 5.2,
    yearsOfGrowth: 12,
    payoutRatio: 15,
    marketCap: 2900000000000
  },
  {
    ticker: 'MSFT',
    name: 'Microsoft Corporation',
    sector: 'Technology',
    price: 425.00,
    annualDividend: 3.00,
    yield: 0.71,
    dividendGrowth5Year: 9.8,
    yearsOfGrowth: 20,
    payoutRatio: 25,
    marketCap: 3200000000000
  },
  {
    ticker: 'T',
    name: 'AT&T Inc.',
    sector: 'Communication Services',
    price: 22.50,
    annualDividend: 1.11,
    yield: 4.93,
    dividendGrowth5Year: 2.0,
    yearsOfGrowth: 39,
    payoutRatio: 55,
    marketCap: 160000000000
  },
  {
    ticker: 'VZ',
    name: 'Verizon Communications',
    sector: 'Communication Services',
    price: 42.00,
    annualDividend: 2.61,
    yield: 6.21,
    dividendGrowth5Year: 2.1,
    yearsOfGrowth: 18,
    payoutRatio: 60,
    marketCap: 175000000000
  },

  // Healthcare
  {
    ticker: 'JNJ',
    name: 'Johnson & Johnson',
    sector: 'Healthcare',
    price: 162.00,
    annualDividend: 4.76,
    yield: 2.94,
    dividendGrowth5Year: 5.9,
    yearsOfGrowth: 62,
    payoutRatio: 48,
    marketCap: 390000000000
  },
  {
    ticker: 'ABBV',
    name: 'AbbVie Inc.',
    sector: 'Healthcare',
    price: 175.00,
    annualDividend: 6.20,
    yield: 3.54,
    dividendGrowth5Year: 10.5,
    yearsOfGrowth: 52,
    payoutRatio: 52,
    marketCap: 310000000000
  },
  {
    ticker: 'MDT',
    name: 'Medtronic plc',
    sector: 'Healthcare',
    price: 88.50,
    annualDividend: 2.76,
    yield: 3.12,
    dividendGrowth5Year: 4.2,
    yearsOfGrowth: 47,
    payoutRatio: 55,
    marketCap: 115000000000
  },
  {
    ticker: 'ABT',
    name: 'Abbott Laboratories',
    sector: 'Healthcare',
    price: 120.00,
    annualDividend: 2.16,
    yield: 1.80,
    dividendGrowth5Year: 12.5,
    yearsOfGrowth: 52,
    payoutRatio: 42,
    marketCap: 210000000000
  },

  // Consumer Staples
  {
    ticker: 'KO',
    name: 'The Coca-Cola Company',
    sector: 'Consumer Staples',
    price: 63.00,
    annualDividend: 1.94,
    yield: 3.08,
    dividendGrowth5Year: 3.2,
    yearsOfGrowth: 62,
    payoutRatio: 75,
    marketCap: 270000000000
  },
  {
    ticker: 'PEP',
    name: 'PepsiCo Inc.',
    sector: 'Consumer Staples',
    price: 175.00,
    annualDividend: 5.06,
    yield: 2.89,
    dividendGrowth5Year: 7.2,
    yearsOfGrowth: 52,
    payoutRatio: 67,
    marketCap: 240000000000
  },
  {
    ticker: 'PG',
    name: 'The Procter & Gamble Company',
    sector: 'Consumer Staples',
    price: 165.00,
    annualDividend: 3.96,
    yield: 2.40,
    dividendGrowth5Year: 4.5,
    yearsOfGrowth: 68,
    payoutRatio: 60,
    marketCap: 395000000000
  },
  {
    ticker: 'WMT',
    name: 'Walmart Inc.',
    sector: 'Consumer Staples',
    price: 72.00,
    annualDividend: 0.83,
    yield: 1.15,
    dividendGrowth5Year: 1.9,
    yearsOfGrowth: 51,
    payoutRatio: 32,
    marketCap: 585000000000
  },
  {
    ticker: 'KMB',
    name: 'Kimberly-Clark Corporation',
    sector: 'Consumer Staples',
    price: 135.00,
    annualDividend: 4.76,
    yield: 3.53,
    dividendGrowth5Year: 3.2,
    yearsOfGrowth: 52,
    payoutRatio: 68,
    marketCap: 45000000000
  },
  {
    ticker: 'CL',
    name: 'Colgate-Palmolive Company',
    sector: 'Consumer Staples',
    price: 92.00,
    annualDividend: 1.96,
    yield: 2.13,
    dividendGrowth5Year: 2.8,
    yearsOfGrowth: 61,
    payoutRatio: 58,
    marketCap: 76000000000
  },

  // Financials
  {
    ticker: 'JPM',
    name: 'JPMorgan Chase & Co.',
    sector: 'Financials',
    price: 195.00,
    annualDividend: 4.60,
    yield: 2.36,
    dividendGrowth5Year: 8.5,
    yearsOfGrowth: 13,
    payoutRatio: 28,
    marketCap: 565000000000
  },
  {
    ticker: 'BAC',
    name: 'Bank of America Corporation',
    sector: 'Financials',
    price: 42.00,
    annualDividend: 1.04,
    yield: 2.48,
    dividendGrowth5Year: 12.5,
    yearsOfGrowth: 10,
    payoutRatio: 25,
    marketCap: 335000000000
  },
  {
    ticker: 'USB',
    name: 'U.S. Bancorp',
    sector: 'Financials',
    price: 48.00,
    annualDividend: 1.96,
    yield: 4.08,
    dividendGrowth5Year: 5.2,
    yearsOfGrowth: 53,
    payoutRatio: 42,
    marketCap: 70000000000
  },

  // Industrials
  {
    ticker: 'MMM',
    name: '3M Company',
    sector: 'Industrials',
    price: 105.00,
    annualDividend: 6.00,
    yield: 5.71,
    dividendGrowth5Year: 1.5,
    yearsOfGrowth: 66,
    payoutRatio: 75,
    marketCap: 58000000000
  },
  {
    ticker: 'CAT',
    name: 'Caterpillar Inc.',
    sector: 'Industrials',
    price: 355.00,
    annualDividend: 5.20,
    yield: 1.46,
    dividendGrowth5Year: 6.8,
    yearsOfGrowth: 31,
    payoutRatio: 28,
    marketCap: 185000000000
  },
  {
    ticker: 'ITW',
    name: 'Illinois Tool Works Inc.',
    sector: 'Industrials',
    price: 260.00,
    annualDividend: 5.52,
    yield: 2.12,
    dividendGrowth5Year: 6.5,
    yearsOfGrowth: 61,
    payoutRatio: 55,
    marketCap: 80000000000
  },

  // Energy
  {
    ticker: 'XOM',
    name: 'Exxon Mobil Corporation',
    sector: 'Energy',
    price: 115.00,
    annualDividend: 3.88,
    yield: 3.37,
    dividendGrowth5Year: 2.8,
    yearsOfGrowth: 42,
    payoutRatio: 52,
    marketCap: 470000000000
  },
  {
    ticker: 'CVX',
    name: 'Chevron Corporation',
    sector: 'Energy',
    price: 165.00,
    annualDividend: 6.52,
    yield: 3.95,
    dividendGrowth5Year: 5.5,
    yearsOfGrowth: 37,
    payoutRatio: 58,
    marketCap: 305000000000
  },

  // Real Estate
  {
    ticker: 'O',
    name: 'Realty Income Corporation',
    sector: 'Real Estate',
    price: 62.00,
    annualDividend: 3.08,
    yield: 4.97,
    dividendGrowth5Year: 3.5,
    yearsOfGrowth: 29,
    payoutRatio: 73,
    marketCap: 48000000000
  },

  // Utilities
  {
    ticker: 'NEE',
    name: 'NextEra Energy Inc.',
    sector: 'Utilities',
    price: 68.00,
    annualDividend: 1.87,
    yield: 2.75,
    dividendGrowth5Year: 10.2,
    yearsOfGrowth: 29,
    payoutRatio: 65,
    marketCap: 140000000000
  },
  {
    ticker: 'DUK',
    name: 'Duke Energy Corporation',
    sector: 'Utilities',
    price: 108.00,
    annualDividend: 4.14,
    yield: 3.83,
    dividendGrowth5Year: 2.5,
    yearsOfGrowth: 98,
    payoutRatio: 75,
    marketCap: 83000000000
  },
  {
    ticker: 'SO',
    name: 'The Southern Company',
    sector: 'Utilities',
    price: 82.00,
    annualDividend: 2.84,
    yield: 3.46,
    dividendGrowth5Year: 3.2,
    yearsOfGrowth: 23,
    payoutRatio: 72,
    marketCap: 92000000000
  },

  // Materials
  {
    ticker: 'APD',
    name: 'Air Products and Chemicals Inc.',
    sector: 'Materials',
    price: 295.00,
    annualDividend: 7.00,
    yield: 2.37,
    dividendGrowth5Year: 9.5,
    yearsOfGrowth: 42,
    payoutRatio: 65,
    marketCap: 65000000000
  },
  {
    ticker: 'ECL',
    name: 'Ecolab Inc.',
    sector: 'Materials',
    price: 230.00,
    annualDividend: 2.28,
    yield: 0.99,
    dividendGrowth5Year: 5.8,
    yearsOfGrowth: 33,
    payoutRatio: 32,
    marketCap: 65000000000
  },

  // Additional High-Quality Dividend Stocks
  {
    ticker: 'HD',
    name: 'The Home Depot Inc.',
    sector: 'Consumer Discretionary',
    price: 385.00,
    annualDividend: 8.36,
    yield: 2.17,
    dividendGrowth5Year: 12.5,
    yearsOfGrowth: 14,
    payoutRatio: 55,
    marketCap: 390000000000
  },
  {
    ticker: 'LOW',
    name: "Lowe's Companies Inc.",
    sector: 'Consumer Discretionary',
    price: 260.00,
    annualDividend: 4.60,
    yield: 1.77,
    dividendGrowth5Year: 15.2,
    yearsOfGrowth: 61,
    payoutRatio: 38,
    marketCap: 155000000000
  },
  {
    ticker: 'TGT',
    name: 'Target Corporation',
    sector: 'Consumer Discretionary',
    price: 165.00,
    annualDividend: 4.32,
    yield: 2.62,
    dividendGrowth5Year: 10.8,
    yearsOfGrowth: 57,
    payoutRatio: 48,
    marketCap: 75000000000
  },

  // Additional Top Dividend Stocks (10 More)
  {
    ticker: 'MCD',
    name: "McDonald's Corporation",
    sector: 'Consumer Discretionary',
    price: 295.00,
    annualDividend: 6.68,
    yield: 2.26,
    dividendGrowth5Year: 8.2,
    yearsOfGrowth: 48,
    payoutRatio: 58,
    marketCap: 215000000000
  },
  {
    ticker: 'COST',
    name: 'Costco Wholesale Corporation',
    sector: 'Consumer Staples',
    price: 685.00,
    annualDividend: 4.48,
    yield: 0.65,
    dividendGrowth5Year: 13.5,
    yearsOfGrowth: 20,
    payoutRatio: 28,
    marketCap: 305000000000
  },
  {
    ticker: 'NKE',
    name: 'Nike Inc.',
    sector: 'Consumer Discretionary',
    price: 105.00,
    annualDividend: 1.45,
    yield: 1.38,
    dividendGrowth5Year: 11.2,
    yearsOfGrowth: 22,
    payoutRatio: 35,
    marketCap: 160000000000
  },
  {
    ticker: 'MO',
    name: 'Altria Group Inc.',
    sector: 'Consumer Staples',
    price: 48.00,
    annualDividend: 4.08,
    yield: 8.50,
    dividendGrowth5Year: 3.8,
    yearsOfGrowth: 54,
    payoutRatio: 78,
    marketCap: 85000000000
  },
  {
    ticker: 'IBM',
    name: 'International Business Machines Corporation',
    sector: 'Technology',
    price: 185.00,
    annualDividend: 6.68,
    yield: 3.61,
    dividendGrowth5Year: 1.2,
    yearsOfGrowth: 29,
    payoutRatio: 65,
    marketCap: 170000000000
  },
  {
    ticker: 'INTC',
    name: 'Intel Corporation',
    sector: 'Technology',
    price: 45.00,
    annualDividend: 0.50,
    yield: 1.11,
    dividendGrowth5Year: 4.5,
    yearsOfGrowth: 8,
    payoutRatio: 25,
    marketCap: 185000000000
  },
  {
    ticker: 'GIS',
    name: 'General Mills Inc.',
    sector: 'Consumer Staples',
    price: 68.00,
    annualDividend: 2.32,
    yield: 3.41,
    dividendGrowth5Year: 1.8,
    yearsOfGrowth: 125,
    payoutRatio: 60,
    marketCap: 38000000000
  },
  {
    ticker: 'LMT',
    name: 'Lockheed Martin Corporation',
    sector: 'Industrials',
    price: 465.00,
    annualDividend: 12.60,
    yield: 2.71,
    dividendGrowth5Year: 7.5,
    yearsOfGrowth: 21,
    payoutRatio: 42,
    marketCap: 120000000000
  },
  {
    ticker: 'RTX',
    name: 'RTX Corporation',
    sector: 'Industrials',
    price: 105.00,
    annualDividend: 2.44,
    yield: 2.32,
    dividendGrowth5Year: 5.2,
    yearsOfGrowth: 30,
    payoutRatio: 45,
    marketCap: 150000000000
  },
  {
    ticker: 'BLK',
    name: 'BlackRock Inc.',
    sector: 'Financials',
    price: 820.00,
    annualDividend: 20.00,
    yield: 2.44,
    dividendGrowth5Year: 11.8,
    yearsOfGrowth: 15,
    payoutRatio: 50,
    marketCap: 125000000000
  },

  // Additional Quality Dividend Stocks (9 More to Reach 50)
  {
    ticker: 'WFC',
    name: 'Wells Fargo & Company',
    sector: 'Financials',
    price: 58.00,
    annualDividend: 1.40,
    yield: 2.41,
    dividendGrowth5Year: 5.5,
    yearsOfGrowth: 12,
    payoutRatio: 32,
    marketCap: 215000000000
  },
  {
    ticker: 'CSCO',
    name: 'Cisco Systems Inc.',
    sector: 'Technology',
    price: 52.00,
    annualDividend: 1.60,
    yield: 3.08,
    dividendGrowth5Year: 3.2,
    yearsOfGrowth: 13,
    payoutRatio: 48,
    marketCap: 210000000000
  },
  {
    ticker: 'QCOM',
    name: 'Qualcomm Incorporated',
    sector: 'Technology',
    price: 165.00,
    annualDividend: 3.20,
    yield: 1.94,
    dividendGrowth5Year: 6.8,
    yearsOfGrowth: 21,
    payoutRatio: 38,
    marketCap: 185000000000
  },
  {
    ticker: 'SBUX',
    name: 'Starbucks Corporation',
    sector: 'Consumer Discretionary',
    price: 95.00,
    annualDividend: 2.20,
    yield: 2.32,
    dividendGrowth5Year: 12.5,
    yearsOfGrowth: 14,
    payoutRatio: 65,
    marketCap: 110000000000
  },
  {
    ticker: 'UNP',
    name: 'Union Pacific Corporation',
    sector: 'Industrials',
    price: 245.00,
    annualDividend: 5.20,
    yield: 2.12,
    dividendGrowth5Year: 9.8,
    yearsOfGrowth: 18,
    payoutRatio: 45,
    marketCap: 150000000000
  },
  {
    ticker: 'HON',
    name: 'Honeywell International Inc.',
    sector: 'Industrials',
    price: 205.00,
    annualDividend: 4.48,
    yield: 2.19,
    dividendGrowth5Year: 7.2,
    yearsOfGrowth: 14,
    payoutRatio: 48,
    marketCap: 135000000000
  },
  {
    ticker: 'UNH',
    name: 'UnitedHealth Group Incorporated',
    sector: 'Healthcare',
    price: 520.00,
    annualDividend: 7.52,
    yield: 1.45,
    dividendGrowth5Year: 16.5,
    yearsOfGrowth: 15,
    payoutRatio: 32,
    marketCap: 485000000000
  },
  {
    ticker: 'AMGN',
    name: 'Amgen Inc.',
    sector: 'Healthcare',
    price: 285.00,
    annualDividend: 8.80,
    yield: 3.09,
    dividendGrowth5Year: 10.2,
    yearsOfGrowth: 13,
    payoutRatio: 45,
    marketCap: 155000000000
  },
  {
    ticker: 'BDX',
    name: 'Becton Dickinson and Company',
    sector: 'Healthcare',
    price: 240.00,
    annualDividend: 3.76,
    yield: 1.57,
    dividendGrowth5Year: 5.5,
    yearsOfGrowth: 53,
    payoutRatio: 42,
    marketCap: 68000000000
  },
];

// Helper functions
export function getStockByTicker(ticker: string): DividendStock | undefined {
  return DIVIDEND_ARISTOCRATS.find(
    (stock) => stock.ticker.toUpperCase() === ticker.toUpperCase()
  );
}

export function getStocksBySector(sector: string): DividendStock[] {
  return DIVIDEND_ARISTOCRATS.filter(
    (stock) => stock.sector.toLowerCase() === sector.toLowerCase()
  );
}

export function getTopYieldStocks(limit: number = 10): DividendStock[] {
  return [...DIVIDEND_ARISTOCRATS]
    .sort((a, b) => b.yield - a.yield)
    .slice(0, limit);
}

export function getTopGrowthStocks(limit: number = 10): DividendStock[] {
  return [...DIVIDEND_ARISTOCRATS]
    .sort((a, b) => b.dividendGrowth5Year - a.dividendGrowth5Year)
    .slice(0, limit);
}

export function getTrueDividendAristocrats(): DividendStock[] {
  return DIVIDEND_ARISTOCRATS.filter((stock) => stock.yearsOfGrowth >= 25);
}
