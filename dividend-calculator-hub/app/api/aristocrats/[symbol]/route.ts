import { NextRequest, NextResponse } from 'next/server'
import { logger } from '@/lib/logger'
import { fmpClient } from '@/lib/api/fmp'
import { ARISTOCRATS_FALLBACK_DATA } from '@/lib/data/aristocrats-fallback'
import type { AristocratDetails, DividendHistoryPoint } from '@/types/aristocrats'

/**
 * GET /api/aristocrats/[symbol]
 * Fetches detailed data for a specific Dividend Aristocrat
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { symbol: string } }
) {
  try {
    const symbol = params.symbol.toUpperCase()
    logger.info({ symbol }, 'Fetching aristocrat details')
    
    // Try to fetch from FMP API
    const [profile, dividendHistory, quote] = await Promise.all([
      fmpClient.getCompanyProfile(symbol),
      fmpClient.getDividendHistory(symbol, 20),
      fmpClient.getQuote(symbol)
    ])
    
    if (profile && quote) {
      // Build detailed response
      const details: AristocratDetails = {
        symbol: symbol,
        companyName: profile.companyName,
        sector: profile.sector,
        industry: profile.industry,
        currentYield: (profile.lastDiv / quote.price) * 100,
        dividendGrowthRate5Y: calculateDividendGrowthRate(dividendHistory),
        payoutRatio: 65, // Would calculate from financials
        yearsOfDividendGrowth: calculateYearsOfGrowth(dividendHistory),
        marketCap: quote.marketCap,
        price: quote.price,
        annualDividend: profile.lastDiv,
        exDividendDate: dividendHistory[0]?.recordDate || null,
        paymentDate: dividendHistory[0]?.paymentDate || null,
        lastUpdated: new Date().toISOString(),
        description: profile.description,
        website: profile.website,
        ceo: profile.ceo,
        employees: parseInt(profile.fullTimeEmployees) || 0,
        dividendHistory: dividendHistory.map(d => ({
          date: d.date,
          dividend: d.dividend,
          adjustedDividend: d.adjDividend
        })),
        financialMetrics: {
          revenue: 0, // Would fetch from financials endpoint
          revenueGrowth: 0,
          netIncome: 0,
          freeCashFlow: 0,
          debtToEquity: 0,
          returnOnEquity: 0
        }
      }
      
      return NextResponse.json({
        data: details,
        source: 'api'
      })
    }
    
    // Fallback to basic data
    const fallbackStock = ARISTOCRATS_FALLBACK_DATA.find(s => s.symbol === symbol)
    if (fallbackStock) {
      const fallbackDetails: AristocratDetails = {
        ...fallbackStock,
        description: `${fallbackStock.companyName} is a leading company in the ${fallbackStock.industry} industry.`,
        website: `https://www.${fallbackStock.companyName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`,
        ceo: 'CEO Name',
        employees: 10000,
        dividendHistory: generateMockDividendHistory(fallbackStock),
        financialMetrics: {
          revenue: fallbackStock.marketCap * 0.3,
          revenueGrowth: 5.5,
          netIncome: fallbackStock.marketCap * 0.05,
          freeCashFlow: fallbackStock.marketCap * 0.06,
          debtToEquity: 0.8,
          returnOnEquity: 15
        }
      }
      
      return NextResponse.json({
        data: fallbackDetails,
        source: 'fallback'
      })
    }
    
    return NextResponse.json(
      { error: 'Stock not found' },
      { status: 404 }
    )
    
  } catch (error) {
    logger.error({ error }, 'Failed to fetch aristocrat details')
    return NextResponse.json(
      { error: 'Failed to fetch stock details' },
      { status: 500 }
    )
  }
}

function calculateDividendGrowthRate(history: any[]): number {
  if (history.length < 5) return 0
  
  const currentYear = history[0]?.dividend || 0
  const fiveYearsAgo = history[4]?.dividend || 0
  
  if (fiveYearsAgo === 0) return 0
  
  const growthRate = Math.pow(currentYear / fiveYearsAgo, 1/5) - 1
  return growthRate * 100
}

function calculateYearsOfGrowth(history: any[]): number {
  // Simple implementation - would need more sophisticated logic
  let consecutiveYears = 0
  
  for (let i = 0; i < history.length - 1; i++) {
    if (history[i].dividend >= history[i + 1].dividend) {
      consecutiveYears++
    } else {
      break
    }
  }
  
  return Math.max(25, consecutiveYears) // Aristocrats have at least 25 years
}

function generateMockDividendHistory(stock: any): DividendHistoryPoint[] {
  const history: DividendHistoryPoint[] = []
  const currentDividend = stock.annualDividend / 4 // Quarterly
  
  for (let i = 0; i < 20; i++) {
    const quarterlyDividend = currentDividend * Math.pow(1 + stock.dividendGrowthRate5Y / 100, -i/4)
    const date = new Date()
    date.setMonth(date.getMonth() - (i * 3))
    
    history.push({
      date: date.toISOString().split('T')[0],
      dividend: quarterlyDividend,
      adjustedDividend: quarterlyDividend
    })
  }
  
  return history
}