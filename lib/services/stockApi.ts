interface StockQuote {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  dividendYield: number
  dividendAmount: number
  marketCap: number
  pe: number
  volume: number
  avgVolume: number
  open: number
  high: number
  low: number
  previousClose: number
  lastUpdated: string
}

interface DividendInfo {
  symbol: string
  dividendDate: string
  exDividendDate: string
  dividendAmount: number
  dividendYield: number
  payoutRatio: number
  dividendGrowth5Y: number
  consecutiveYears: number
  frequency: 'Monthly' | 'Quarterly' | 'Semi-Annual' | 'Annual'
}

interface StockNews {
  headline: string
  summary: string
  url: string
  source: string
  publishedAt: string
  sentiment: 'positive' | 'neutral' | 'negative'
}

class StockAPIService {
  private apiKey: string
  private baseUrl: string
  private cache = new Map<string, { data: any; timestamp: number }>()
  private cacheTimeout = 60000 // 1 minute cache

  constructor() {
    // In production, these would come from environment variables
    this.apiKey = process.env.NEXT_PUBLIC_STOCK_API_KEY || 'demo'
    this.baseUrl = 'https://api.twelvedata.com/v1'
  }

  private isCacheValid(timestamp: number): boolean {
    return Date.now() - timestamp < this.cacheTimeout
  }

  private async fetchWithCache<T>(url: string, cacheKey: string): Promise<T> {
    // Check cache first
    const cached = this.cache.get(cacheKey)
    if (cached && this.isCacheValid(cached.timestamp)) {
      return cached.data as T
    }

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      
      // Cache the result
      this.cache.set(cacheKey, {
        data,
        timestamp: Date.now()
      })
      
      return data as T
    } catch (error) {
      console.error('Stock API error:', error)
      // Return mock data for demo purposes
      return this.getMockData(cacheKey) as T
    }
  }

  async getStockQuote(symbol: string): Promise<StockQuote> {
    const url = `${this.baseUrl}/quote?symbol=${symbol}&apikey=${this.apiKey}`
    const cacheKey = `quote_${symbol}`
    
    const data = await this.fetchWithCache<any>(url, cacheKey)
    
    return {
      symbol: symbol.toUpperCase(),
      name: data.name || this.getCompanyName(symbol),
      price: parseFloat(data.close) || this.getMockPrice(symbol),
      change: parseFloat(data.change) || this.getMockChange(),
      changePercent: parseFloat(data.percent_change) || this.getMockChangePercent(),
      dividendYield: this.getMockDividendYield(symbol),
      dividendAmount: this.getMockDividendAmount(symbol),
      marketCap: this.getMockMarketCap(symbol),
      pe: parseFloat(data.pe_ratio) || this.getMockPE(symbol),
      volume: parseInt(data.volume) || this.getMockVolume(),
      avgVolume: this.getMockAvgVolume(),
      open: parseFloat(data.open) || this.getMockPrice(symbol),
      high: parseFloat(data.high) || this.getMockPrice(symbol) * 1.02,
      low: parseFloat(data.low) || this.getMockPrice(symbol) * 0.98,
      previousClose: parseFloat(data.previous_close) || this.getMockPrice(symbol),
      lastUpdated: new Date().toISOString()
    }
  }

  async getDividendInfo(symbol: string): Promise<DividendInfo> {
    const cacheKey = `dividend_${symbol}`
    
    // Mock dividend data for popular stocks
    const mockData = this.getMockDividendInfo(symbol)
    
    this.cache.set(cacheKey, {
      data: mockData,
      timestamp: Date.now()
    })
    
    return mockData
  }

  async searchStocks(query: string): Promise<Array<{ symbol: string; name: string; type: string }>> {
    if (query.length < 2) return []
    
    const cacheKey = `search_${query}`
    const cached = this.cache.get(cacheKey)
    
    if (cached && this.isCacheValid(cached.timestamp)) {
      return cached.data
    }

    // Mock search results
    const mockResults = this.getMockSearchResults(query)
    
    this.cache.set(cacheKey, {
      data: mockResults,
      timestamp: Date.now()
    })
    
    return mockResults
  }

  async getStockNews(symbol: string): Promise<StockNews[]> {
    const cacheKey = `news_${symbol}`
    return this.getMockNews(symbol)
  }

  async getBulkQuotes(symbols: string[]): Promise<StockQuote[]> {
    const promises = symbols.map(symbol => this.getStockQuote(symbol))
    return Promise.all(promises)
  }

  // Mock data generators for demo purposes
  private getMockData(cacheKey: string): any {
    const symbol = cacheKey.split('_')[1] || 'DEMO'
    return {
      symbol,
      close: this.getMockPrice(symbol).toString(),
      name: this.getCompanyName(symbol),
      change: this.getMockChange().toString(),
      percent_change: this.getMockChangePercent().toString()
    }
  }

  private getMockPrice(symbol: string): number {
    const prices: Record<string, number> = {
      'AAPL': 189.43,
      'MSFT': 378.85,
      'GOOGL': 2832.47,
      'TSLA': 248.50,
      'AMZN': 3441.85,
      'JNJ': 156.23,
      'KO': 58.47,
      'PG': 155.67,
      'VTI': 245.31,
      'SPY': 448.90
    }
    return prices[symbol] || 100 + Math.random() * 200
  }

  private getMockChange(): number {
    return (Math.random() - 0.5) * 10
  }

  private getMockChangePercent(): number {
    return (Math.random() - 0.5) * 5
  }

  private getMockDividendYield(symbol: string): number {
    const yields: Record<string, number> = {
      'AAPL': 0.51,
      'MSFT': 0.79,
      'JNJ': 3.05,
      'KO': 3.15,
      'PG': 2.34,
      'VTI': 1.75,
      'SPY': 1.68
    }
    return yields[symbol] || Math.random() * 4
  }

  private getMockDividendAmount(symbol: string): number {
    const amounts: Record<string, number> = {
      'AAPL': 0.96,
      'MSFT': 3.00,
      'JNJ': 4.76,
      'KO': 1.84,
      'PG': 3.65
    }
    return amounts[symbol] || Math.random() * 3
  }

  private getMockMarketCap(symbol: string): number {
    const caps: Record<string, number> = {
      'AAPL': 2980000000000,
      'MSFT': 2810000000000,
      'GOOGL': 1890000000000,
      'TSLA': 789000000000,
      'JNJ': 415000000000
    }
    return caps[symbol] || Math.random() * 500000000000
  }

  private getMockPE(symbol: string): number {
    return 15 + Math.random() * 25
  }

  private getMockVolume(): number {
    return Math.floor(Math.random() * 50000000) + 1000000
  }

  private getMockAvgVolume(): number {
    return Math.floor(Math.random() * 30000000) + 5000000
  }

  private getCompanyName(symbol: string): string {
    const names: Record<string, string> = {
      'AAPL': 'Apple Inc.',
      'MSFT': 'Microsoft Corporation',
      'GOOGL': 'Alphabet Inc.',
      'TSLA': 'Tesla, Inc.',
      'AMZN': 'Amazon.com Inc.',
      'JNJ': 'Johnson & Johnson',
      'KO': 'The Coca-Cola Company',
      'PG': 'Procter & Gamble Co.',
      'VTI': 'Vanguard Total Stock Market ETF',
      'SPY': 'SPDR S&P 500 ETF Trust'
    }
    return names[symbol] || `${symbol} Corporation`
  }

  private getMockDividendInfo(symbol: string): DividendInfo {
    const dividendData: Record<string, Partial<DividendInfo>> = {
      'AAPL': {
        dividendAmount: 0.96,
        dividendYield: 0.51,
        payoutRatio: 15.8,
        dividendGrowth5Y: 4.8,
        consecutiveYears: 12,
        frequency: 'Quarterly'
      },
      'JNJ': {
        dividendAmount: 4.76,
        dividendYield: 3.05,
        payoutRatio: 68.5,
        dividendGrowth5Y: 5.2,
        consecutiveYears: 61,
        frequency: 'Quarterly'
      },
      'KO': {
        dividendAmount: 1.84,
        dividendYield: 3.15,
        payoutRatio: 73.2,
        dividendGrowth5Y: 3.1,
        consecutiveYears: 61,
        frequency: 'Quarterly'
      }
    }

    const base = dividendData[symbol] || {}
    
    return {
      symbol,
      dividendDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      exDividendDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      dividendAmount: base.dividendAmount || Math.random() * 3,
      dividendYield: base.dividendYield || Math.random() * 4,
      payoutRatio: base.payoutRatio || 40 + Math.random() * 40,
      dividendGrowth5Y: base.dividendGrowth5Y || Math.random() * 8,
      consecutiveYears: base.consecutiveYears || Math.floor(Math.random() * 30),
      frequency: base.frequency || 'Quarterly'
    }
  }

  private getMockSearchResults(query: string): Array<{ symbol: string; name: string; type: string }> {
    const allStocks = [
      { symbol: 'AAPL', name: 'Apple Inc.', type: 'Common Stock' },
      { symbol: 'MSFT', name: 'Microsoft Corporation', type: 'Common Stock' },
      { symbol: 'GOOGL', name: 'Alphabet Inc.', type: 'Common Stock' },
      { symbol: 'TSLA', name: 'Tesla, Inc.', type: 'Common Stock' },
      { symbol: 'AMZN', name: 'Amazon.com Inc.', type: 'Common Stock' },
      { symbol: 'JNJ', name: 'Johnson & Johnson', type: 'Common Stock' },
      { symbol: 'KO', name: 'The Coca-Cola Company', type: 'Common Stock' },
      { symbol: 'PG', name: 'Procter & Gamble Co.', type: 'Common Stock' },
      { symbol: 'VTI', name: 'Vanguard Total Stock Market ETF', type: 'ETF' },
      { symbol: 'SPY', name: 'SPDR S&P 500 ETF Trust', type: 'ETF' }
    ]

    return allStocks.filter(stock => 
      stock.symbol.toLowerCase().includes(query.toLowerCase()) ||
      stock.name.toLowerCase().includes(query.toLowerCase())
    )
  }

  private getMockNews(symbol: string): StockNews[] {
    const headlines = [
      `${symbol} Reports Strong Q3 Earnings, Beats Expectations`,
      `Analysts Upgrade ${symbol} Price Target Following Dividend Increase`,
      `${symbol} Announces Strategic Partnership in AI Technology`,
      `Institutional Investors Increase Stakes in ${symbol}`,
      `${symbol} Dividend Aristocrat Status Continues Strong Performance`
    ]

    return headlines.map((headline, index) => ({
      headline,
      summary: `Latest developments and analysis regarding ${symbol} stock performance and dividend outlook...`,
      url: `https://example.com/news/${symbol.toLowerCase()}-${index}`,
      source: ['MarketWatch', 'Yahoo Finance', 'Bloomberg', 'Reuters'][index % 4],
      publishedAt: new Date(Date.now() - index * 3600000).toISOString(),
      sentiment: (['positive', 'neutral', 'negative'] as const)[index % 3]
    }))
  }
}

export const stockAPI = new StockAPIService()
export type { StockQuote, DividendInfo, StockNews }