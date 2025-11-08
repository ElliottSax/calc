/**
 * Mock API responses for testing Financial Modeling Prep API
 */

// Mock stock data for testing
export const MOCK_STOCK_DATA = {
  'JNJ': {
    symbol: 'JNJ',
    name: 'Johnson & Johnson',
    price: 162.50,
    changes: 1.25,
    changesPercentage: 0.77,
    marketCap: 425000000000,
    volume: 12500000,
    avgVolume: 15000000,
    exchange: 'NASDAQ',
    industry: 'Drug Manufacturers - General',
    website: 'https://www.jnj.com',
    description: 'Johnson & Johnson is a leader in pharmaceuticals, medical devices, and consumer products.',
    ceo: 'Joaquin Duato',
    sector: 'Healthcare',
    country: 'US',
    fullTimeEmployees: 152700,
    phone: '732-524-0400',
    address: 'One Johnson & Johnson Plaza',
    city: 'New Brunswick',
    state: 'NJ',
    zip: '08933',
    dcfDiff: null,
    dcf: 170.5,
    image: 'https://logo.clearbit.com/jnj.com',
    ipoDate: '1944-09-25',
    defaultImage: false,
    isEtf: false,
    isActivelyTrading: true,
    isAdr: false,
    isFund: false
  },
  'KO': {
    symbol: 'KO',
    name: 'The Coca-Cola Company',
    price: 61.25,
    changes: -0.75,
    changesPercentage: -1.21,
    marketCap: 265000000000,
    volume: 18000000,
    avgVolume: 16000000,
    exchange: 'NYSE',
    industry: 'Beverages - Non-Alcoholic',
    website: 'https://www.coca-colacompany.com',
    description: 'Coca-Cola is the world\'s largest beverage company.',
    ceo: 'James Quincey',
    sector: 'Consumer Defensive',
    country: 'US',
    fullTimeEmployees: 82500,
    phone: '404-676-2121',
    address: 'One Coca Cola Plaza',
    city: 'Atlanta',
    state: 'GA',
    zip: '30313',
    dcfDiff: null,
    dcf: 58.2,
    image: 'https://logo.clearbit.com/coca-cola.com',
    ipoDate: '1919-09-05',
    defaultImage: false,
    isEtf: false,
    isActivelyTrading: true,
    isAdr: false,
    isFund: false
  }
}

// Mock dividend data
export const MOCK_DIVIDEND_DATA = {
  'JNJ': {
    symbol: 'JNJ',
    historical: [
      {
        date: '2024-03-01',
        label: 'March 01, 2024',
        adjDividend: 1.19,
        dividend: 1.19,
        recordDate: '2024-02-20',
        paymentDate: '2024-03-12',
        declarationDate: '2024-01-23'
      },
      {
        date: '2023-12-01',
        label: 'December 01, 2023',
        adjDividend: 1.13,
        dividend: 1.13,
        recordDate: '2023-11-20',
        paymentDate: '2023-12-12',
        declarationDate: '2023-10-23'
      },
      {
        date: '2023-09-01',
        label: 'September 01, 2023',
        adjDividend: 1.13,
        dividend: 1.13,
        recordDate: '2023-08-20',
        paymentDate: '2023-09-12',
        declarationDate: '2023-07-23'
      }
    ]
  },
  'KO': {
    symbol: 'KO',
    historical: [
      {
        date: '2024-03-15',
        label: 'March 15, 2024',
        adjDividend: 0.485,
        dividend: 0.485,
        recordDate: '2024-03-01',
        paymentDate: '2024-04-01',
        declarationDate: '2024-02-15'
      },
      {
        date: '2023-12-15',
        label: 'December 15, 2023',
        adjDividend: 0.46,
        dividend: 0.46,
        recordDate: '2023-12-01',
        paymentDate: '2024-01-01',
        declarationDate: '2023-11-15'
      }
    ]
  }
}

// Mock financial metrics
export const MOCK_FINANCIAL_METRICS = {
  'JNJ': {
    symbol: 'JNJ',
    date: '2023-12-31',
    calendarYear: '2023',
    period: 'FY',
    revenuePerShare: 85.62,
    netIncomePerShare: 16.45,
    operatingCashFlowPerShare: 18.92,
    freeCashFlowPerShare: 15.87,
    cashPerShare: 8.45,
    bookValuePerShare: 28.73,
    tangibleBookValuePerShare: 12.34,
    shareholdersEquityPerShare: 28.73,
    interestDebtPerShare: 11.23,
    marketCap: 425000000000,
    enterpriseValue: 438000000000,
    peRatio: 24.5,
    priceToSalesRatio: 4.2,
    pocfratio: 8.6,
    pfcfRatio: 10.2,
    pbRatio: 5.7,
    ptbRatio: 13.2,
    evToSales: 4.5,
    enterpriseValueOverEBITDA: 15.8,
    evToOperatingCashFlow: 23.2,
    evToFreeCashFlow: 27.6,
    earningsYield: 0.041,
    freeCashFlowYield: 0.037,
    debtToEquity: 0.391,
    debtToAssets: 0.189,
    netDebtToEBITDA: 1.23,
    currentRatio: 1.34,
    interestCoverage: 18.5,
    incomeQuality: 0.84,
    dividendYield: 0.0295,
    payoutRatio: 0.625,
    salesGeneralAndAdministrativeToRevenue: 0.245,
    researchAndDdevelopementToRevenue: 0.135,
    intangiblesToTotalAssets: 0.445,
    capexToOperatingCashFlow: 0.162,
    capexToRevenue: 0.031,
    capexToDepreciation: 1.12,
    stockBasedCompensationToRevenue: 0.012,
    grahamNumber: 45.6,
    roic: 0.142,
    returnOnTangibleAssets: 0.187,
    grahamNetNet: 0,
    workingCapital: 28500000000,
    tangibleAssetValue: 56200000000,
    netCurrentAssetValue: 15400000000,
    investedCapital: 89300000000,
    averageReceivables: 14200000000,
    averagePayables: 8900000000,
    averageInventory: 9800000000,
    daysSalesOutstanding: 55.2,
    daysPayablesOutstanding: 42.1,
    daysOfInventoryOnHand: 38.7,
    receivablesTurnover: 6.61,
    payablesTurnover: 8.67,
    inventoryTurnover: 9.43,
    roe: 0.215,
    capexPerShare: 2.84
  }
}

// Mock aristocrats data
export const MOCK_ARISTOCRATS_DATA = [
  {
    symbol: 'JNJ',
    name: 'Johnson & Johnson',
    sector: 'Healthcare',
    industry: 'Drug Manufacturers - General',
    marketCap: 425000000000,
    currentPrice: 162.50,
    dividendYield: 2.95,
    consecutiveYears: 60,
    payoutRatio: 62.5,
    dividendGrowthRate5Y: 5.8,
    dividendGrowthRate1Y: 5.2,
    peRatio: 24.5,
    debtToEquity: 0.391,
    roe: 0.215,
    roic: 0.142,
    exDividendDate: '2024-02-15',
    paymentDate: '2024-03-12',
    lastUpdate: new Date().toISOString()
  },
  {
    symbol: 'KO',
    name: 'The Coca-Cola Company',
    sector: 'Consumer Defensive',
    industry: 'Beverages - Non-Alcoholic',
    marketCap: 265000000000,
    currentPrice: 61.25,
    dividendYield: 3.10,
    consecutiveYears: 61,
    payoutRatio: 74.2,
    dividendGrowthRate5Y: 3.5,
    dividendGrowthRate1Y: 5.4,
    peRatio: 26.8,
    debtToEquity: 1.45,
    roe: 0.428,
    roic: 0.089,
    exDividendDate: '2024-03-14',
    paymentDate: '2024-04-01',
    lastUpdate: new Date().toISOString()
  },
  {
    symbol: 'PG',
    name: 'Procter & Gamble',
    sector: 'Consumer Defensive',
    industry: 'Household & Personal Products',
    marketCap: 380000000000,
    currentPrice: 160.00,
    dividendYield: 2.42,
    consecutiveYears: 67,
    payoutRatio: 65.8,
    dividendGrowthRate5Y: 5.2,
    dividendGrowthRate1Y: 6.1,
    peRatio: 27.3,
    debtToEquity: 0.52,
    roe: 0.334,
    roic: 0.145,
    exDividendDate: '2024-01-19',
    paymentDate: '2024-02-15',
    lastUpdate: new Date().toISOString()
  }
]

/**
 * Mock FMP API client for testing
 */
export class MockFMPClient {
  private useMockData: boolean
  
  constructor() {
    this.useMockData = process.env.MOCK_API_RESPONSES === 'true' || process.env.NODE_ENV === 'test'
  }
  
  async getQuote(symbol: string) {
    if (this.useMockData) {
      await this.simulateDelay()
      const mockData = MOCK_STOCK_DATA[symbol as keyof typeof MOCK_STOCK_DATA]
      if (!mockData) {
        throw new Error(`Mock data not found for symbol: ${symbol}`)
      }
      return [mockData]
    }
    // Return actual API call here
    throw new Error('Real API not implemented in mock client')
  }
  
  async getHistoricalDividend(symbol: string) {
    if (this.useMockData) {
      await this.simulateDelay()
      const mockData = MOCK_DIVIDEND_DATA[symbol as keyof typeof MOCK_DIVIDEND_DATA]
      if (!mockData) {
        throw new Error(`Mock dividend data not found for symbol: ${symbol}`)
      }
      return mockData
    }
    throw new Error('Real API not implemented in mock client')
  }
  
  async getFinancialMetrics(symbol: string) {
    if (this.useMockData) {
      await this.simulateDelay()
      const mockData = MOCK_FINANCIAL_METRICS[symbol as keyof typeof MOCK_FINANCIAL_METRICS]
      if (!mockData) {
        throw new Error(`Mock financial metrics not found for symbol: ${symbol}`)
      }
      return [mockData]
    }
    throw new Error('Real API not implemented in mock client')
  }
  
  async getDividendAristocrats() {
    if (this.useMockData) {
      await this.simulateDelay(500) // Simulate longer response for large dataset
      return MOCK_ARISTOCRATS_DATA
    }
    throw new Error('Real API not implemented in mock client')
  }
  
  private async simulateDelay(ms: number = 200) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}

// Export singleton instance
export const mockFMPClient = new MockFMPClient()