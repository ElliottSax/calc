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

  // Expansion to 100 Stocks - Dividend Kings, REITs, and Quality Dividend Payers (50 More)

  // Dividend Kings (50+ years of increases)
  {
    ticker: 'CINF',
    name: 'Cincinnati Financial Corporation',
    sector: 'Financials',
    price: 115.00,
    annualDividend: 2.88,
    yield: 2.50,
    dividendGrowth5Year: 6.5,
    yearsOfGrowth: 63,
    payoutRatio: 55,
    marketCap: 18000000000
  },
  {
    ticker: 'LANC',
    name: 'Lancaster Colony Corporation',
    sector: 'Consumer Staples',
    price: 195.00,
    annualDividend: 3.40,
    yield: 1.74,
    dividendGrowth5Year: 5.2,
    yearsOfGrowth: 61,
    payoutRatio: 48,
    marketCap: 5500000000
  },
  {
    ticker: 'SWK',
    name: 'Stanley Black & Decker Inc.',
    sector: 'Industrials',
    price: 95.00,
    annualDividend: 3.20,
    yield: 3.37,
    dividendGrowth5Year: 2.8,
    yearsOfGrowth: 56,
    payoutRatio: 72,
    marketCap: 14000000000
  },
  {
    ticker: 'HRL',
    name: 'Hormel Foods Corporation',
    sector: 'Consumer Staples',
    price: 35.00,
    annualDividend: 1.04,
    yield: 2.97,
    dividendGrowth5Year: 8.5,
    yearsOfGrowth: 58,
    payoutRatio: 62,
    marketCap: 19000000000
  },
  {
    ticker: 'SYY',
    name: 'Sysco Corporation',
    sector: 'Consumer Staples',
    price: 78.00,
    annualDividend: 2.00,
    yield: 2.56,
    dividendGrowth5Year: 4.2,
    yearsOfGrowth: 54,
    payoutRatio: 52,
    marketCap: 39000000000
  },

  // REITs (Monthly Dividend Payers)
  {
    ticker: 'STAG',
    name: 'STAG Industrial Inc.',
    sector: 'Real Estate',
    price: 38.00,
    annualDividend: 1.56,
    yield: 4.11,
    dividendGrowth5Year: 3.5,
    yearsOfGrowth: 13,
    payoutRatio: 75,
    marketCap: 7000000000
  },
  {
    ticker: 'MAIN',
    name: 'Main Street Capital Corporation',
    sector: 'Financials',
    price: 48.00,
    annualDividend: 3.12,
    yield: 6.50,
    dividendGrowth5Year: 2.5,
    yearsOfGrowth: 14,
    payoutRatio: 85,
    marketCap: 3800000000
  },
  {
    ticker: 'NNN',
    name: 'NNN REIT Inc.',
    sector: 'Real Estate',
    price: 45.00,
    annualDividend: 2.16,
    yield: 4.80,
    dividendGrowth5Year: 2.8,
    yearsOfGrowth: 35,
    payoutRatio: 72,
    marketCap: 8000000000
  },
  {
    ticker: 'WPC',
    name: 'W. P. Carey Inc.',
    sector: 'Real Estate',
    price: 55.00,
    annualDividend: 4.24,
    yield: 7.71,
    dividendGrowth5Year: 1.5,
    yearsOfGrowth: 27,
    payoutRatio: 82,
    marketCap: 11000000000
  },
  {
    ticker: 'MPW',
    name: 'Medical Properties Trust Inc.',
    sector: 'Real Estate',
    price: 4.50,
    annualDividend: 0.60,
    yield: 13.33,
    dividendGrowth5Year: -5.0,
    yearsOfGrowth: 8,
    payoutRatio: 95,
    marketCap: 2700000000
  },

  // Technology & Communication
  {
    ticker: 'AVGO',
    name: 'Broadcom Inc.',
    sector: 'Technology',
    price: 1400.00,
    annualDividend: 22.00,
    yield: 1.57,
    dividendGrowth5Year: 18.5,
    yearsOfGrowth: 14,
    payoutRatio: 42,
    marketCap: 650000000000
  },
  {
    ticker: 'TXN',
    name: 'Texas Instruments Incorporated',
    sector: 'Technology',
    price: 180.00,
    annualDividend: 5.00,
    yield: 2.78,
    dividendGrowth5Year: 12.5,
    yearsOfGrowth: 20,
    payoutRatio: 58,
    marketCap: 165000000000
  },
  {
    ticker: 'ORCL',
    name: 'Oracle Corporation',
    sector: 'Technology',
    price: 115.00,
    annualDividend: 1.60,
    yield: 1.39,
    dividendGrowth5Year: 16.8,
    yearsOfGrowth: 10,
    payoutRatio: 35,
    marketCap: 315000000000
  },
  {
    ticker: 'CMCSA',
    name: 'Comcast Corporation',
    sector: 'Communication Services',
    price: 42.00,
    annualDividend: 1.24,
    yield: 2.95,
    dividendGrowth5Year: 8.5,
    yearsOfGrowth: 16,
    payoutRatio: 32,
    marketCap: 175000000000
  },

  // Consumer Discretionary
  {
    ticker: 'YUM',
    name: 'Yum! Brands Inc.',
    sector: 'Consumer Discretionary',
    price: 135.00,
    annualDividend: 2.40,
    yield: 1.78,
    dividendGrowth5Year: 8.8,
    yearsOfGrowth: 12,
    payoutRatio: 45,
    marketCap: 38000000000
  },
  {
    ticker: 'DIS',
    name: 'The Walt Disney Company',
    sector: 'Communication Services',
    price: 95.00,
    annualDividend: 0.00,
    yield: 0.00,
    dividendGrowth5Year: 0.0,
    yearsOfGrowth: 0,
    payoutRatio: 0,
    marketCap: 175000000000
  },
  {
    ticker: 'GILD',
    name: 'Gilead Sciences Inc.',
    sector: 'Healthcare',
    price: 85.00,
    annualDividend: 3.12,
    yield: 3.67,
    dividendGrowth5Year: 5.2,
    yearsOfGrowth: 11,
    payoutRatio: 48,
    marketCap: 105000000000
  },
  {
    ticker: 'BMY',
    name: 'Bristol-Myers Squibb Company',
    sector: 'Healthcare',
    price: 55.00,
    annualDividend: 2.60,
    yield: 4.73,
    dividendGrowth5Year: 3.8,
    yearsOfGrowth: 15,
    payoutRatio: 62,
    marketCap: 115000000000
  },
  {
    ticker: 'MRK',
    name: 'Merck & Co. Inc.',
    sector: 'Healthcare',
    price: 105.00,
    annualDividend: 3.04,
    yield: 2.90,
    dividendGrowth5Year: 5.5,
    yearsOfGrowth: 14,
    payoutRatio: 45,
    marketCap: 265000000000
  },
  {
    ticker: 'PFE',
    name: 'Pfizer Inc.',
    sector: 'Healthcare',
    price: 28.00,
    annualDividend: 1.68,
    yield: 6.00,
    dividendGrowth5Year: 2.5,
    yearsOfGrowth: 14,
    payoutRatio: 85,
    marketCap: 160000000000
  },

  // Financials & Insurance
  {
    ticker: 'C',
    name: 'Citigroup Inc.',
    sector: 'Financials',
    price: 62.00,
    annualDividend: 2.12,
    yield: 3.42,
    dividendGrowth5Year: 8.5,
    yearsOfGrowth: 9,
    payoutRatio: 28,
    marketCap: 115000000000
  },
  {
    ticker: 'GS',
    name: 'The Goldman Sachs Group Inc.',
    sector: 'Financials',
    price: 480.00,
    annualDividend: 11.00,
    yield: 2.29,
    dividendGrowth5Year: 10.5,
    yearsOfGrowth: 12,
    payoutRatio: 32,
    marketCap: 165000000000
  },
  {
    ticker: 'AXP',
    name: 'American Express Company',
    sector: 'Financials',
    price: 245.00,
    annualDividend: 2.60,
    yield: 1.06,
    dividendGrowth5Year: 10.8,
    yearsOfGrowth: 12,
    payoutRatio: 22,
    marketCap: 175000000000
  },
  {
    ticker: 'MET',
    name: 'MetLife Inc.',
    sector: 'Financials',
    price: 78.00,
    annualDividend: 2.08,
    yield: 2.67,
    dividendGrowth5Year: 5.5,
    yearsOfGrowth: 12,
    payoutRatio: 32,
    marketCap: 58000000000
  },
  {
    ticker: 'PRU',
    name: 'Prudential Financial Inc.',
    sector: 'Financials',
    price: 115.00,
    annualDividend: 5.20,
    yield: 4.52,
    dividendGrowth5Year: 4.8,
    yearsOfGrowth: 16,
    payoutRatio: 48,
    marketCap: 42000000000
  },

  // Industrials & Transportation
  {
    ticker: 'DE',
    name: 'Deere & Company',
    sector: 'Industrials',
    price: 425.00,
    annualDividend: 5.60,
    yield: 1.32,
    dividendGrowth5Year: 10.2,
    yearsOfGrowth: 20,
    payoutRatio: 28,
    marketCap: 120000000000
  },
  {
    ticker: 'EMR',
    name: 'Emerson Electric Co.',
    sector: 'Industrials',
    price: 110.00,
    annualDividend: 2.16,
    yield: 1.96,
    dividendGrowth5Year: 1.5,
    yearsOfGrowth: 68,
    payoutRatio: 45,
    marketCap: 65000000000
  },
  {
    ticker: 'GD',
    name: 'General Dynamics Corporation',
    sector: 'Industrials',
    price: 285.00,
    annualDividend: 5.52,
    yield: 1.94,
    dividendGrowth5Year: 6.8,
    yearsOfGrowth: 32,
    payoutRatio: 38,
    marketCap: 78000000000
  },
  {
    ticker: 'NSC',
    name: 'Norfolk Southern Corporation',
    sector: 'Industrials',
    price: 250.00,
    annualDividend: 5.60,
    yield: 2.24,
    dividendGrowth5Year: 8.5,
    yearsOfGrowth: 18,
    payoutRatio: 42,
    marketCap: 58000000000
  },
  {
    ticker: 'UPS',
    name: 'United Parcel Service Inc.',
    sector: 'Industrials',
    price: 155.00,
    annualDividend: 6.64,
    yield: 4.28,
    dividendGrowth5Year: 5.8,
    yearsOfGrowth: 15,
    payoutRatio: 68,
    marketCap: 130000000000
  },

  // Energy
  {
    ticker: 'COP',
    name: 'ConocoPhillips',
    sector: 'Energy',
    price: 115.00,
    annualDividend: 2.06,
    yield: 1.79,
    dividendGrowth5Year: 25.5,
    yearsOfGrowth: 8,
    payoutRatio: 22,
    marketCap: 145000000000
  },
  {
    ticker: 'EOG',
    name: 'EOG Resources Inc.',
    sector: 'Energy',
    price: 130.00,
    annualDividend: 3.50,
    yield: 2.69,
    dividendGrowth5Year: 18.5,
    yearsOfGrowth: 22,
    payoutRatio: 35,
    marketCap: 75000000000
  },
  {
    ticker: 'PSX',
    name: 'Phillips 66',
    sector: 'Energy',
    price: 145.00,
    annualDividend: 5.04,
    yield: 3.48,
    dividendGrowth5Year: 6.2,
    yearsOfGrowth: 13,
    payoutRatio: 48,
    marketCap: 68000000000
  },
  {
    ticker: 'KMI',
    name: 'Kinder Morgan Inc.',
    sector: 'Energy',
    price: 21.00,
    annualDividend: 1.13,
    yield: 5.38,
    dividendGrowth5Year: 3.5,
    yearsOfGrowth: 7,
    payoutRatio: 72,
    marketCap: 47000000000
  },
  {
    ticker: 'OKE',
    name: 'ONEOK Inc.',
    sector: 'Energy',
    price: 85.00,
    annualDividend: 3.92,
    yield: 4.61,
    dividendGrowth5Year: 5.8,
    yearsOfGrowth: 21,
    payoutRatio: 65,
    marketCap: 48000000000
  },

  // Utilities
  {
    ticker: 'AEP',
    name: 'American Electric Power Company Inc.',
    sector: 'Utilities',
    price: 95.00,
    annualDividend: 3.36,
    yield: 3.54,
    dividendGrowth5Year: 5.5,
    yearsOfGrowth: 14,
    payoutRatio: 68,
    marketCap: 52000000000
  },
  {
    ticker: 'D',
    name: 'Dominion Energy Inc.',
    sector: 'Utilities',
    price: 55.00,
    annualDividend: 2.67,
    yield: 4.85,
    dividendGrowth5Year: 2.5,
    yearsOfGrowth: 21,
    payoutRatio: 78,
    marketCap: 47000000000
  },
  {
    ticker: 'EXC',
    name: 'Exelon Corporation',
    sector: 'Utilities',
    price: 42.00,
    annualDividend: 1.61,
    yield: 3.83,
    dividendGrowth5Year: 2.8,
    yearsOfGrowth: 12,
    payoutRatio: 62,
    marketCap: 42000000000
  },
  {
    ticker: 'ED',
    name: 'Consolidated Edison Inc.',
    sector: 'Utilities',
    price: 100.00,
    annualDividend: 3.28,
    yield: 3.28,
    dividendGrowth5Year: 2.5,
    yearsOfGrowth: 50,
    payoutRatio: 72,
    marketCap: 36000000000
  },
  {
    ticker: 'XEL',
    name: 'Xcel Energy Inc.',
    sector: 'Utilities',
    price: 62.00,
    annualDividend: 2.04,
    yield: 3.29,
    dividendGrowth5Year: 6.2,
    yearsOfGrowth: 21,
    payoutRatio: 65,
    marketCap: 35000000000
  },

  // Materials & Chemicals
  {
    ticker: 'LIN',
    name: 'Linde plc',
    sector: 'Materials',
    price: 445.00,
    annualDividend: 5.20,
    yield: 1.17,
    dividendGrowth5Year: 8.5,
    yearsOfGrowth: 32,
    payoutRatio: 38,
    marketCap: 220000000000
  },
  {
    ticker: 'DD',
    name: 'DuPont de Nemours Inc.',
    sector: 'Materials',
    price: 78.00,
    annualDividend: 1.40,
    yield: 1.79,
    dividendGrowth5Year: 3.5,
    yearsOfGrowth: 8,
    payoutRatio: 35,
    marketCap: 35000000000
  },
  {
    ticker: 'PPG',
    name: 'PPG Industries Inc.',
    sector: 'Materials',
    price: 135.00,
    annualDividend: 2.52,
    yield: 1.87,
    dividendGrowth5Year: 6.5,
    yearsOfGrowth: 53,
    payoutRatio: 42,
    marketCap: 31000000000
  },
  {
    ticker: 'SHW',
    name: 'The Sherwin-Williams Company',
    sector: 'Materials',
    price: 325.00,
    annualDividend: 2.60,
    yield: 0.80,
    dividendGrowth5Year: 12.5,
    yearsOfGrowth: 46,
    payoutRatio: 28,
    marketCap: 82000000000
  },

  // Consumer Staples - Additional
  {
    ticker: 'PM',
    name: 'Philip Morris International Inc.',
    sector: 'Consumer Staples',
    price: 115.00,
    annualDividend: 5.40,
    yield: 4.70,
    dividendGrowth5Year: 2.5,
    yearsOfGrowth: 16,
    payoutRatio: 78,
    marketCap: 178000000000
  },
  {
    ticker: 'BTI',
    name: 'British American Tobacco p.l.c.',
    sector: 'Consumer Staples',
    price: 35.00,
    annualDividend: 2.98,
    yield: 8.51,
    dividendGrowth5Year: 1.5,
    yearsOfGrowth: 25,
    payoutRatio: 75,
    marketCap: 78000000000
  },
  {
    ticker: 'KHC',
    name: 'The Kraft Heinz Company',
    sector: 'Consumer Staples',
    price: 36.00,
    annualDividend: 1.60,
    yield: 4.44,
    dividendGrowth5Year: 0.0,
    yearsOfGrowth: 8,
    payoutRatio: 82,
    marketCap: 44000000000
  },
  {
    ticker: 'K',
    name: 'Kellogg Company',
    sector: 'Consumer Staples',
    price: 58.00,
    annualDividend: 2.40,
    yield: 4.14,
    dividendGrowth5Year: 2.8,
    yearsOfGrowth: 19,
    payoutRatio: 72,
    marketCap: 20000000000
  },
  {
    ticker: 'CPB',
    name: 'Campbell Soup Company',
    sector: 'Consumer Staples',
    price: 45.00,
    annualDividend: 1.52,
    yield: 3.38,
    dividendGrowth5Year: 2.2,
    yearsOfGrowth: 55,
    payoutRatio: 58,
    marketCap: 13500000000
  },
  {
    ticker: 'ADM',
    name: 'Archer-Daniels-Midland Company',
    sector: 'Consumer Staples',
    price: 58.00,
    annualDividend: 1.84,
    yield: 3.17,
    dividendGrowth5Year: 6.5,
    yearsOfGrowth: 52,
    payoutRatio: 42,
    marketCap: 30000000000
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
