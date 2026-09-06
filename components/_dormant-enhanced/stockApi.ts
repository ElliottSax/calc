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
  // Optional: these were previously always populated with today+30 and today+14,
  // which is not a schedule, it is a guess wearing a date's clothes.
  dividendDate?: string
  exDividendDate?: string
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
      // This used to `return this.getMockData(cacheKey)`, which synthesised a whole
      // quote response -- price, change, percent change -- from Math.random(). So a
      // network failure or a rejected API key did not look like a failure at all:
      // the caller got a well-formed quote for a real ticker made entirely of noise.
      // Let it fail. A visible error is the only honest outcome here.
      console.error('Stock API error:', error)
      throw error instanceof Error ? error : new Error(String(error))
    }
  }

  /**
   * Every field here used to fall back to an invented value:
   *
   *   price: parseFloat(data.close) || this.getMockPrice(symbol)
   *
   * and getMockPrice returned `100 + Math.random() * 200` for any symbol not in a
   * short hardcoded list, with getMockChange returning `(Math.random() - 0.5) * 10`.
   * NEXT_PUBLIC_STOCK_API_KEY defaults to 'demo', so a failed or unparseable
   * response was the normal case -- and the caller received a plausible quote for
   * a real ticker that was pure noise, with no error and no way to tell.
   *
   * A quote we do not have is now an error the UI must handle, not a number we
   * make up. Losing the number is recoverable; publishing a fictional price for a
   * real company to someone deciding what to buy is not.
   */
  async getStockQuote(symbol: string): Promise<StockQuote> {
    const url = `${this.baseUrl}/quote?symbol=${symbol}&apikey=${this.apiKey}`
    const cacheKey = `quote_${symbol}`

    const data = await this.fetchWithCache<any>(url, cacheKey)

    const num = (v: unknown): number | undefined => {
      const n = typeof v === 'number' ? v : parseFloat(String(v))
      return Number.isFinite(n) ? n : undefined
    }

    const price = num(data?.close)
    if (price === undefined || price <= 0) {
      throw new Error(
        `No quote available for ${symbol.toUpperCase()}. The market data provider ` +
          `returned no usable price.`
      )
    }

    return {
      symbol: symbol.toUpperCase(),
      name: data.name || this.getCompanyName(symbol),
      price,
      change: num(data?.change) ?? 0,
      changePercent: num(data?.percent_change) ?? 0,
      dividendYield: this.getMockDividendYield(symbol),
      dividendAmount: this.getMockDividendAmount(symbol),
      marketCap: this.getMockMarketCap(symbol),
      pe: num(data?.pe_ratio) ?? 0,
      volume: num(data?.volume) ?? 0,
      avgVolume: this.getMockAvgVolume(),
      open: num(data?.open) ?? price,
      high: num(data?.high) ?? price,
      low: num(data?.low) ?? price,
      previousClose: num(data?.previous_close) ?? price,
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

  // getMockData() lived here. It built a fake quote response on every API failure
  // using getMockPrice/getMockChange/getMockChangePercent, all of which were
  // Math.random(). Removed along with the two change generators; failures now
  // propagate to the caller.

  /**
   * Kept ONLY as a lookup of last-known reference prices for the ten symbols
   * listed. The `|| 100 + Math.random() * 200` tail was removed: inventing a price
   * for an unknown ticker is the failure this class exists to avoid. Returns
   * undefined when the symbol is not known.
   */
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
    return prices[symbol] ?? 0
  }

  // getMockChange() and getMockChangePercent() returned (Math.random() - 0.5) * 10
  // and * 5 -- a made-up daily move for a real company. Removed; callers now use 0
  // when the provider gives no change figure, which reads as "unknown" rather than
  // as a movement that did not happen.

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
    // `|| Math.random() * 4` invented a dividend yield for any unlisted ticker.
    // On a dividend site that is the single most damaging number to fabricate:
    // yield is precisely what a reader comes here to compare. 0 reads as unknown.
    return yields[symbol] ?? 0
  }

  private getMockDividendAmount(symbol: string): number {
    const amounts: Record<string, number> = {
      'AAPL': 0.96,
      'MSFT': 3.00,
      'JNJ': 4.76,
      'KO': 1.84,
      'PG': 3.65
    }
    // previously fell back to a random amount for unlisted symbols
    return amounts[symbol] ?? 0
  }

  private getMockMarketCap(symbol: string): number {
    const caps: Record<string, number> = {
      'AAPL': 2980000000000,
      'MSFT': 2810000000000,
      'GOOGL': 1890000000000,
      'TSLA': 789000000000,
      'JNJ': 415000000000
    }
    // previously fell back to a random market cap for unlisted symbols
    return caps[symbol] ?? 0
  }

  // These three returned `15 + Math.random() * 25` (P/E), and random volumes in
  // the tens of millions. A P/E ratio and a volume figure are exactly the kind of
  // number a reader treats as measured fact. There is no reference data to fall
  // back to, so they now return 0, which the UI should render as "--" rather than
  // as a value.
  private getMockPE(symbol: string): number {
    return 0
  }

  private getMockVolume(): number {
    return 0
  }

  private getMockAvgVolume(): number {
    return 0
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
    
    // Every field below fell back to Math.random(): a made-up payout ratio, a
    // made-up 5-year growth rate, and -- worst of the set -- `consecutiveYears`,
    // the dividend-streak number that is the entire basis of the aristocrat
    // screens this site publishes. The two dates were not random but were just as
    // invented: always today+14 and today+30, regardless of the company's actual
    // schedule, presented as its ex-dividend and payment dates.
    //
    // Unknown is now 0 and the dates are omitted unless known. A blank field sends
    // the reader to check a real source; a fabricated one stops them looking.
    return {
      symbol,
      dividendDate: base.dividendDate,
      exDividendDate: base.exDividendDate,
      dividendAmount: base.dividendAmount ?? 0,
      dividendYield: base.dividendYield ?? 0,
      payoutRatio: base.payoutRatio ?? 0,
      dividendGrowth5Y: base.dividendGrowth5Y ?? 0,
      consecutiveYears: base.consecutiveYears ?? 0,
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