'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { TrendingUp, TrendingDown, DollarSign, Activity, AlertCircle, Clock, Zap, Award, BarChart3, PieChart } from 'lucide-react'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart as RePieChart, Pie, Cell } from 'recharts'

// Mock market data - in production, this would come from a real API
const MARKET_INDICES = [
  { symbol: 'DJI', name: 'Dow Jones', value: 38654.42, change: 186.55, changePercent: 0.48, status: 'up' },
  { symbol: 'SPX', name: 'S&P 500', value: 4958.61, change: 38.42, changePercent: 0.78, status: 'up' },
  { symbol: 'IXIC', name: 'NASDAQ', value: 15638.88, change: -68.77, changePercent: -0.44, status: 'down' },
  { symbol: 'VIX', name: 'Volatility', value: 13.28, change: -0.82, changePercent: -5.82, status: 'down' }
]

const TOP_DIVIDEND_STOCKS = [
  { symbol: 'JNJ', name: 'Johnson & Johnson', price: 156.23, change: 1.45, yield: 3.2, peRatio: 24.5, volume: '6.2M' },
  { symbol: 'KO', name: 'Coca-Cola', price: 61.45, change: -0.33, yield: 3.1, peRatio: 26.8, volume: '12.4M' },
  { symbol: 'PG', name: 'Procter & Gamble', price: 167.89, change: 2.12, yield: 2.3, peRatio: 27.2, volume: '5.8M' },
  { symbol: 'O', name: 'Realty Income', price: 52.34, change: 0.67, yield: 5.8, peRatio: 42.3, volume: '3.2M' },
  { symbol: 'ABBV', name: 'AbbVie', price: 178.45, change: -1.23, yield: 3.6, peRatio: 18.2, volume: '4.7M' },
  { symbol: 'VZ', name: 'Verizon', price: 40.12, change: 0.15, yield: 6.7, peRatio: 8.9, volume: '18.3M' }
]

const SECTOR_PERFORMANCE = [
  { sector: 'Technology', performance: 2.3, color: '#3B82F6' },
  { sector: 'Healthcare', performance: 1.8, color: '#10B981' },
  { sector: 'Financial', performance: 0.9, color: '#8B5CF6' },
  { sector: 'Consumer Staples', performance: -0.2, color: '#F59E0B' },
  { sector: 'Energy', performance: -1.1, color: '#EF4444' },
  { sector: 'Real Estate', performance: 1.5, color: '#EC4899' },
  { sector: 'Utilities', performance: 0.6, color: '#06B6D4' },
  { sector: 'Industrials', performance: 1.2, color: '#6366F1' }
]

const DIVIDEND_NEWS = [
  {
    id: 1,
    title: 'Apple Increases Dividend by 4%',
    time: '2 hours ago',
    impact: 'positive',
    description: 'AAPL raises quarterly dividend to $0.25 per share'
  },
  {
    id: 2,
    title: 'Fed Signals Potential Rate Cuts',
    time: '4 hours ago',
    impact: 'positive',
    description: 'Lower rates could boost dividend stock attractiveness'
  },
  {
    id: 3,
    title: 'Energy Sector Dividend Cuts Expected',
    time: '6 hours ago',
    impact: 'negative',
    description: 'Oil price volatility impacts payout sustainability'
  },
  {
    id: 4,
    title: 'REIT Sector Shows Strong Growth',
    time: '8 hours ago',
    impact: 'positive',
    description: 'Real estate dividends up 12% year-over-year'
  }
]

export function LiveMarketData() {
  const [selectedStock, setSelectedStock] = useState<string>('JNJ')
  const [timeframe, setTimeframe] = useState<'1D' | '1W' | '1M' | '3M' | '1Y'>('1D')
  const [isMarketOpen, setIsMarketOpen] = useState(true)
  const [lastUpdate, setLastUpdate] = useState(new Date())

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date())
    }, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  // Check market hours
  useEffect(() => {
    const checkMarketHours = () => {
      const now = new Date()
      const hours = now.getHours()
      const day = now.getDay()

      // Market open Mon-Fri, 9:30 AM - 4:00 PM EST
      const isWeekday = day >= 1 && day <= 5
      const isDuringMarketHours = hours >= 9.5 && hours < 16

      setIsMarketOpen(isWeekday && isDuringMarketHours)
    }

    checkMarketHours()
    const interval = setInterval(checkMarketHours, 60000)

    return () => clearInterval(interval)
  }, [])

  // Generate mock chart data
  const chartData = useMemo(() => {
    const points = 50
    const data = []
    const baseValue = 150

    for (let i = 0; i < points; i++) {
      const time = new Date()
      time.setMinutes(time.getMinutes() - (points - i) * 5)

      data.push({
        time: time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        value: baseValue + Math.random() * 10 - 5,
        volume: Math.floor(Math.random() * 1000000)
      })
    }

    return data
  }, [timeframe])

  const selectedStockData = TOP_DIVIDEND_STOCKS.find(s => s.symbol === selectedStock)

  return (
    <div className="space-y-6">
      {/* Market Status Bar */}
      <Card className={`border-2 ${isMarketOpen ? 'border-green-500 bg-green-50/50 dark:bg-green-950/20' : 'border-slate-300 bg-slate-50/50 dark:bg-slate-950/20'}`}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${isMarketOpen ? 'bg-green-500 animate-pulse' : 'bg-slate-400'}`} />
              <span className="font-semibold">
                {isMarketOpen ? 'Markets Open' : 'Markets Closed'}
              </span>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                Last update: {lastUpdate.toLocaleTimeString()}
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              {MARKET_INDICES.map(index => (
                <div key={index.symbol} className="flex items-center gap-2">
                  <span className="font-medium">{index.symbol}</span>
                  <span className={index.status === 'up' ? 'text-green-600' : 'text-red-600'}>
                    {index.status === 'up' ? '▲' : '▼'} {Math.abs(index.changePercent).toFixed(2)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Market Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live Chart */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-blue-600" />
                    {selectedStockData?.name} ({selectedStock})
                  </CardTitle>
                  <CardDescription>
                    Real-time price and volume data
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  {(['1D', '1W', '1M', '3M', '1Y'] as const).map(tf => (
                    <Badge
                      key={tf}
                      variant={timeframe === tf ? 'default' : 'outline'}
                      className="cursor-pointer"
                      onClick={() => setTimeframe(tf)}
                    >
                      {tf}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {selectedStockData && (
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Price</p>
                    <p className="text-2xl font-bold">${selectedStockData.price}</p>
                    <p className={`text-sm ${selectedStockData.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {selectedStockData.change > 0 ? '+' : ''}{selectedStockData.change}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Yield</p>
                    <p className="text-2xl font-bold text-green-600">{selectedStockData.yield}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">P/E Ratio</p>
                    <p className="text-2xl font-bold">{selectedStockData.peRatio}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Volume</p>
                    <p className="text-2xl font-bold">{selectedStockData.volume}</p>
                  </div>
                </div>
              )}

              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="time" stroke="#6b7280" fontSize={12} />
                  <YAxis stroke="#6b7280" fontSize={12} />
                  <RechartsTooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>

              <div className="mt-4">
                <p className="text-sm font-medium mb-2">Volume</p>
                <ResponsiveContainer width="100%" height={100}>
                  <BarChart data={chartData}>
                    <Bar dataKey="volume" fill="#94a3b8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stock List */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Top Dividend Stocks
              </CardTitle>
              <CardDescription>
                Today's best performers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {TOP_DIVIDEND_STOCKS.map(stock => (
                <div
                  key={stock.symbol}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedStock === stock.symbol
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30'
                      : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                  onClick={() => setSelectedStock(stock.symbol)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{stock.symbol}</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">{stock.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">${stock.price}</p>
                      <p className={`text-xs ${stock.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {stock.change > 0 ? '▲' : '▼'} {Math.abs(stock.change)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t">
                    <Badge variant="secondary" className="text-xs">
                      Yield: {stock.yield}%
                    </Badge>
                    <span className="text-xs text-slate-600">Vol: {stock.volume}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Sector Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="w-5 h-5 text-purple-600" />
                Sector Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {SECTOR_PERFORMANCE.map(sector => (
                  <div key={sector.sector}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>{sector.sector}</span>
                      <span className={sector.performance > 0 ? 'text-green-600' : 'text-red-600'}>
                        {sector.performance > 0 ? '+' : ''}{sector.performance}%
                      </span>
                    </div>
                    <Progress
                      value={50 + sector.performance * 10}
                      className="h-2"
                      style={{
                        '--progress-color': sector.color
                      } as any}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Market News & Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            Market News & Dividend Updates
          </CardTitle>
          <CardDescription>
            Latest market-moving events
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {DIVIDEND_NEWS.map(news => (
              <div
                key={news.id}
                className="p-4 rounded-lg border hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <Badge
                    variant={news.impact === 'positive' ? 'default' : 'destructive'}
                    className="text-xs"
                  >
                    {news.impact === 'positive' ? '↑' : '↓'}
                  </Badge>
                  <span className="text-xs text-slate-500">
                    <Clock className="w-3 h-3 inline mr-1" />
                    {news.time}
                  </span>
                </div>
                <h4 className="font-semibold text-sm mb-1">{news.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {news.description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Market Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-600">Most Active</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">VZ</p>
            <p className="text-sm text-slate-600">18.3M volume</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-600">Top Gainer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-600">PG</p>
            <p className="text-sm text-green-600">+1.28%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-600">Highest Yield</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-blue-600">VZ</p>
            <p className="text-sm text-blue-600">6.7% yield</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-600">New Dividend</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-purple-600">AAPL</p>
            <p className="text-sm text-purple-600">+4% increase</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}