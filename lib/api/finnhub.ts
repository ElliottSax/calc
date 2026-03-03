/**
 * Finnhub API Client
 * Free tier: 60 calls/minute
 * Docs: https://finnhub.io/docs/api
 */

const BASE_URL = 'https://finnhub.io/api/v1'

function getToken(): string | null {
  return process.env.FINNHUB_API_KEY || process.env.NEXT_PUBLIC_FINNHUB_API_KEY || null
}

function isConfigured(): boolean {
  const token = getToken()
  return !!token && token !== 'PLACEHOLDER'
}

export interface FinnhubQuote {
  c: number  // current price
  d: number  // change
  dp: number // percent change
  h: number  // high
  l: number  // low
  o: number  // open
  pc: number // previous close
  t: number  // timestamp
}

export interface FinnhubDividend {
  symbol: string
  date: string
  amount: number
  adjustedAmount: number
  payDate: string
  recordDate: string
  declarationDate: string
  currency: string
}

export interface FinnhubNewsItem {
  category: string
  datetime: number
  headline: string
  id: number
  image: string
  related: string
  source: string
  summary: string
  url: string
}

export interface FinnhubBasicFinancials {
  metric: {
    dividendYieldIndicatedAnnual?: number
    dividendsPerShareAnnual?: number
    dividendPayoutRatio?: number
    '52WeekHigh'?: number
    '52WeekLow'?: number
    marketCapitalization?: number
    peNormalizedAnnual?: number
    [key: string]: number | undefined
  }
}

export async function getQuote(symbol: string): Promise<FinnhubQuote | null> {
  if (!isConfigured()) return null
  try {
    const res = await fetch(`${BASE_URL}/quote?symbol=${symbol}&token=${getToken()}`, {
      next: { revalidate: 60 }
    })
    if (!res.ok) return null
    return res.json()
  } catch { return null }
}

export async function getDividends(symbol: string, from: string, to: string): Promise<FinnhubDividend[]> {
  if (!isConfigured()) return []
  try {
    const res = await fetch(
      `${BASE_URL}/stock/dividend?symbol=${symbol}&from=${from}&to=${to}&token=${getToken()}`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return []
    return res.json()
  } catch { return [] }
}

export async function getMarketNews(category: string = 'general'): Promise<FinnhubNewsItem[]> {
  if (!isConfigured()) return []
  try {
    const res = await fetch(
      `${BASE_URL}/news?category=${category}&token=${getToken()}`,
      { next: { revalidate: 900 } }
    )
    if (!res.ok) return []
    return res.json()
  } catch { return [] }
}

export async function getCompanyNews(symbol: string, from: string, to: string): Promise<FinnhubNewsItem[]> {
  if (!isConfigured()) return []
  try {
    const res = await fetch(
      `${BASE_URL}/company-news?symbol=${symbol}&from=${from}&to=${to}&token=${getToken()}`,
      { next: { revalidate: 900 } }
    )
    if (!res.ok) return []
    return res.json()
  } catch { return [] }
}

export async function getBasicFinancials(symbol: string): Promise<FinnhubBasicFinancials | null> {
  if (!isConfigured()) return null
  try {
    const res = await fetch(
      `${BASE_URL}/stock/metric?symbol=${symbol}&metric=all&token=${getToken()}`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return null
    return res.json()
  } catch { return null }
}
