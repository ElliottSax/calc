"use client"

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, DollarSign } from 'lucide-react'
import type { StockProfileData } from '@/lib/seo/stock-data'
import { formatPercent } from '@/lib/utils/calculations'

interface RelatedStocksProps {
  stocks: StockProfileData[]
  currentSymbol: string
}

export function RelatedStocks({ stocks, currentSymbol }: RelatedStocksProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {stocks.map((stock) => (
        <Link 
          key={stock.symbol} 
          href={`/stocks/${stock.symbol.toLowerCase()}`}
          className="block hover:no-underline"
        >
          <Card className="h-full transition-all hover:shadow-lg hover:scale-[1.02]">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-lg">{stock.symbol}</h3>
                  <p className="text-sm text-gray-600 line-clamp-1">
                    {stock.name}
                  </p>
                </div>
                <Badge variant="secondary" className="ml-2">
                  {stock.industry}
                </Badge>
              </div>
              
              <div className="space-y-2 mt-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="h-3 w-3 mr-1" />
                    Yield
                  </div>
                  <span className="font-semibold text-sm">
                    {formatPercent(stock.currentYield)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-600">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    5Y Growth
                  </div>
                  <span className="font-semibold text-sm">
                    {formatPercent(stock.keyMetrics.dividendGrowthRate5Y)}
                  </span>
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t">
                <p className="text-xs text-gray-500">
                  {stock.keyMetrics.consecutiveYears} years of dividend payments
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}