"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { X, TrendingUp, DollarSign, Calendar, Percent } from 'lucide-react'
import { formatPercent, formatCurrency, formatNumber } from '@/lib/utils/calculations'
import type { DividendAristocrat } from '@/types/aristocrats'

interface StockComparisonProps {
  stocks: DividendAristocrat[]
  onRemove: (symbol: string) => void
  onClear: () => void
}

export function StockComparison({ stocks, onRemove, onClear }: StockComparisonProps) {
  if (stocks.length === 0) return null

  const metrics = [
    { 
      label: 'Current Yield', 
      key: 'currentYield' as keyof DividendAristocrat, 
      format: formatPercent,
      icon: Percent,
      higher: true // Higher is better
    },
    { 
      label: '5Y Dividend Growth', 
      key: 'dividendGrowthRate5Y' as keyof DividendAristocrat, 
      format: formatPercent,
      icon: TrendingUp,
      higher: true
    },
    { 
      label: 'Payout Ratio', 
      key: 'payoutRatio' as keyof DividendAristocrat, 
      format: formatPercent,
      icon: DollarSign,
      higher: false // Lower is better
    },
    { 
      label: 'Years of Growth', 
      key: 'yearsOfDividendGrowth' as keyof DividendAristocrat, 
      format: (v: any) => v.toString(),
      icon: Calendar,
      higher: true
    },
    { 
      label: 'Market Cap', 
      key: 'marketCap' as keyof DividendAristocrat, 
      format: (v: any) => `$${(v / 1e9).toFixed(1)}B`,
      icon: DollarSign,
      higher: true
    },
    { 
      label: 'Annual Dividend', 
      key: 'annualDividend' as keyof DividendAristocrat, 
      format: (v: any) => formatCurrency(v),
      icon: DollarSign,
      higher: true
    }
  ]

  // Find best value for each metric
  const getBestValue = (key: keyof DividendAristocrat, higherIsBetter: boolean) => {
    const values = stocks.map(s => s[key] as number).filter(v => v !== null && v !== undefined)
    return higherIsBetter ? Math.max(...values) : Math.min(...values)
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Stock Comparison
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClear}>
            Clear All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Stock Headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="font-medium text-sm text-gray-600">Metric</div>
          {stocks.map(stock => (
            <div key={stock.symbol} className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="font-bold">{stock.symbol}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0"
                  onClick={() => onRemove(stock.symbol)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
              <div className="text-xs text-gray-600 truncate">{stock.companyName}</div>
              <Badge variant="secondary" className="text-xs mt-1">
                {stock.sector}
              </Badge>
            </div>
          ))}
        </div>

        {/* Comparison Metrics */}
        <div className="space-y-3">
          {metrics.map(({ label, key, format, icon: Icon, higher }) => {
            const bestValue = getBestValue(key, higher)
            
            return (
              <div key={key} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-3 border-t">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-gray-500" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
                {stocks.map(stock => {
                  const value = stock[key]
                  const isBest = value === bestValue
                  
                  return (
                    <div 
                      key={`${stock.symbol}-${key}`}
                      className={`text-center ${isBest ? 'font-bold text-green-600' : ''}`}
                    >
                      {value !== null && value !== undefined ? format(value) : '-'}
                      {isBest && <span className="ml-1 text-xs">👑</span>}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>

        {/* Summary */}
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h4 className="font-medium text-sm mb-2">Quick Analysis</h4>
          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            {stocks.length > 1 && (
              <>
                <p>
                  • Highest yield: <strong>{
                    stocks.reduce((best, stock) => 
                      stock.currentYield > best.currentYield ? stock : best
                    ).symbol
                  }</strong> ({formatPercent(Math.max(...stocks.map(s => s.currentYield)))})
                </p>
                <p>
                  • Fastest growing dividend: <strong>{
                    stocks.reduce((best, stock) => 
                      stock.dividendGrowthRate5Y > best.dividendGrowthRate5Y ? stock : best
                    ).symbol
                  }</strong> ({formatPercent(Math.max(...stocks.map(s => s.dividendGrowthRate5Y)))} 5Y CAGR)
                </p>
                <p>
                  • Most conservative payout: <strong>{
                    stocks.reduce((best, stock) => 
                      stock.payoutRatio < best.payoutRatio ? stock : best
                    ).symbol
                  }</strong> ({formatPercent(Math.min(...stocks.map(s => s.payoutRatio)))})
                </p>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}