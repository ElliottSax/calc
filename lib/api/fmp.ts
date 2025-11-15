/**
 * Financial Modeling Prep API Client
 * Handles all interactions with the FMP API for stock and dividend data
 */

import { logger } from '@/lib/logger'

const FMP_BASE_URL = 'https://financialmodelingprep.com/api/v3'
const API_KEY = process.env.FMP_API_KEY

export interface StockQuote {
  symbol: string
  name: string
  price: number
  change: number
  changesPercentage: number
  dayLow: number
  dayHigh: number
  yearHigh: number
  yearLow: number
  marketCap: number
  priceAvg50: number
  priceAvg200: number
  volume: number
  avgVolume: number
  exchange: string
  open: number
  previousClose: number
  eps: number
  pe: number
  earningsAnnouncement: string
  sharesOutstanding: number
  timestamp: number
}

export interface DividendData {
  date: string
  label: string
  adjDividend: number
  symbol: string
  dividend: number
  recordDate: string
  paymentDate: string
  declarationDate: string
}

export interface CompanyProfile {
  symbol: string
  companyName: string
  currency: string
  exchangeShortName: string
  industry: string
  sector: string
  country: string
  description: string
  image: string
  ipoDate: string
  beta: number
  lastDiv: number
  changes: number
  dcfDiff: number
  dcf: number
  isin: string
  cusip: string
  ceo: string
  website: string
  city: string
  state: string
  zip: string
  address: string
  fullTimeEmployees: string
}

class FMPClient {
  private apiKey: string
  private baseUrl: string

  constructor() {
    if (!API_KEY) {
      logger.warn('FMP API key not configured')
    }
    this.apiKey = API_KEY || ''
    this.baseUrl = FMP_BASE_URL
  }

  private async fetchFromFMP<T>(endpoint: string): Promise<T> {
    const url = `${this.baseUrl}${endpoint}${endpoint.includes('?') ? '&' : '?'}apikey=${this.apiKey}`
    
    logger.info({ endpoint }, 'Fetching from FMP API')
    
    try {
      const response = await fetch(url, {
        next: { revalidate: 300 } // Cache for 5 minutes
      })
      
      if (!response.ok) {
        throw new Error(`FMP API error: ${response.status} ${response.statusText}`)
      }
      
      const data = await response.json()
      return data
    } catch (error) {
      logger.error({ endpoint, error }, 'FMP API request failed')
      throw error
    }
  }

  async getQuote(symbol: string): Promise<StockQuote | null> {
    try {
      const data = await this.fetchFromFMP<StockQuote[]>(`/quote/${symbol.toUpperCase()}`)
      return data[0] || null
    } catch (error) {
      logger.error({ symbol, error }, 'Failed to fetch stock quote')
      return null
    }
  }

  async getDividendHistory(symbol: string, limit = 10): Promise<DividendData[]> {
    try {
      const data = await this.fetchFromFMP<DividendData[]>(
        `/historical-price-full/stock_dividend/${symbol.toUpperCase()}?limit=${limit}`
      )
      return data
    } catch (error) {
      logger.error({ symbol, error }, 'Failed to fetch dividend history')
      return []
    }
  }

  async getCompanyProfile(symbol: string): Promise<CompanyProfile | null> {
    try {
      const data = await this.fetchFromFMP<CompanyProfile[]>(`/profile/${symbol.toUpperCase()}`)
      return data[0] || null
    } catch (error) {
      logger.error({ symbol, error }, 'Failed to fetch company profile')
      return null
    }
  }

  async searchSymbol(query: string): Promise<Array<{ symbol: string; name: string }>> {
    try {
      const data = await this.fetchFromFMP<Array<{ symbol: string; name: string }>>(
        `/search?query=${encodeURIComponent(query)}&limit=10`
      )
      return data
    } catch (error) {
      logger.error({ query, error }, 'Failed to search symbols')
      return []
    }
  }
}

export const fmpClient = new FMPClient()