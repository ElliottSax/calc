"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  TrendingUp, 
  DollarSign, 
  Calendar, 
  BarChart3,
  Building2,
  Info
} from 'lucide-react'
import { formatPercent, formatCurrency } from '@/lib/utils/calculations'
import type { StockProfileData } from '@/lib/seo/stock-data'
import Link from 'next/link'

interface StockProfileContentProps {
  stock: StockProfileData
}

export function StockProfileContent({ stock }: StockProfileContentProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-3">
            {stock.symbol}
            <Badge variant="outline" className="text-lg px-3 py-1">
              {stock.exchange}
            </Badge>
          </h1>
          <p className="text-xl text-gray-600 mt-2">{stock.name}</p>
          <div className="flex items-center gap-4 mt-3">
            <Badge className="bg-blue-100 text-blue-800">
              <Building2 className="h-3 w-3 mr-1" />
              {stock.sector}
            </Badge>
            <Badge variant="secondary">
              {stock.industry}
            </Badge>
          </div>
        </div>
        
        <div className="text-right">
          <p className="text-3xl font-bold">${stock.price.toFixed(2)}</p>
          <p className="text-sm text-gray-600">Current Price</p>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          icon={DollarSign}
          label="Dividend Yield"
          value={formatPercent(stock.currentYield)}
          trend={stock.currentYield > 3 ? 'positive' : 'neutral'}
        />
        <MetricCard
          icon={TrendingUp}
          label="5Y Growth Rate"
          value={formatPercent(stock.keyMetrics.dividendGrowthRate5Y)}
          trend={stock.keyMetrics.dividendGrowthRate5Y > 5 ? 'positive' : 'neutral'}
        />
        <MetricCard
          icon={BarChart3}
          label="Payout Ratio"
          value={formatPercent(stock.keyMetrics.payoutRatio)}
          trend={stock.keyMetrics.payoutRatio < 70 ? 'positive' : 'negative'}
        />
        <MetricCard
          icon={Calendar}
          label="Years of Growth"
          value={stock.keyMetrics.consecutiveYears}
          trend="positive"
        />
      </div>

      {/* Company Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Company Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">{stock.description}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
            <div>
              <p className="text-sm text-gray-600">Market Cap</p>
              <p className="font-semibold">${(stock.marketCap / 1e9).toFixed(1)}B</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">P/E Ratio</p>
              <p className="font-semibold">{stock.peRatio.toFixed(1)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Ex-Dividend Date</p>
              <p className="font-semibold">{new Date(stock.keyMetrics.exDividendDate).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Payment Frequency</p>
              <p className="font-semibold">{stock.keyMetrics.paymentFrequency}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dividend History */}
      <Card>
        <CardHeader>
          <CardTitle>Dividend History (Annual)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-end space-x-2 h-48">
              {stock.dividendHistory.map((dividend, index) => {
                const maxDividend = Math.max(...stock.dividendHistory)
                const height = (dividend / maxDividend) * 100
                const year = new Date().getFullYear() - index
                
                return (
                  <div key={year} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition-colors relative group"
                      style={{ height: `${height}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        ${dividend.toFixed(2)}
                      </div>
                    </div>
                    <p className="text-xs mt-2">{year}</p>
                  </div>
                )
              })}
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <div className="flex items-start space-x-2">
                <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-blue-900 dark:text-blue-100">
                    Dividend Growth Analysis
                  </p>
                  <p className="text-blue-700 dark:text-blue-200 mt-1">
                    {stock.name} has increased its dividend for {stock.keyMetrics.consecutiveYears} consecutive 
                    years with an average growth rate of {stock.keyMetrics.dividendGrowthRate5Y}% over the 
                    past 5 years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <Link href={`/?ticker=${stock.symbol}`}>
          <Button size="lg">
            Calculate {stock.symbol} DRIP Returns
          </Button>
        </Link>
        <Button variant="outline" size="lg">
          Add to Watchlist
        </Button>
        <Button variant="outline" size="lg">
          Compare Stocks
        </Button>
      </div>
    </div>
  )
}

function MetricCard({ icon: Icon, label, value, trend }: any) {
  const trendColors = {
    positive: 'text-green-600 bg-green-50',
    negative: 'text-red-600 bg-red-50',
    neutral: 'text-gray-600 bg-gray-50'
  }
  
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Icon className="h-5 w-5 text-gray-500" />
        </div>
        <p className={`text-2xl font-bold ${trend === 'negative' ? 'text-red-600' : ''}`}>
          {value}
        </p>
        <p className="text-sm text-gray-600">{label}</p>
      </CardContent>
    </Card>
  )
}