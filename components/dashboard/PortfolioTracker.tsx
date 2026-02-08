"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { TrendingUp, DollarSign, PieChart, Calendar, Target, AlertCircle, Plus, Eye, BarChart3, Activity } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { LineChart, Line, AreaChart, Area, PieChart as RechartsPieChart, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface Holding {
  symbol: string
  name: string
  shares: number
  avgCost: number
  currentPrice: number
  dividendYield: number
  lastDividend: number
  nextExDate: string
  allocation: number
  totalValue: number
  gainLoss: number
  gainLossPercent: number
}

interface DividendPayment {
  symbol: string
  amount: number
  payDate: string
  exDate: string
  shares: number
}

interface PortfolioMetrics {
  totalValue: number
  totalCost: number
  totalGainLoss: number
  totalGainLossPercent: number
  annualDividendIncome: number
  portfolioYield: number
  diversificationScore: number
  dividendGrowthRate: number
}

const mockHoldings: Holding[] = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    shares: 50,
    avgCost: 150.00,
    currentPrice: 189.43,
    dividendYield: 0.51,
    lastDividend: 0.24,
    nextExDate: "2024-02-09",
    allocation: 35,
    totalValue: 9471.50,
    gainLoss: 1971.50,
    gainLossPercent: 26.3
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    shares: 25,
    avgCost: 320.00,
    currentPrice: 378.85,
    dividendYield: 0.79,
    lastDividend: 0.75,
    nextExDate: "2024-02-14",
    allocation: 25,
    totalValue: 9471.25,
    gainLoss: 1471.25,
    gainLossPercent: 18.4
  },
  {
    symbol: "JNJ",
    name: "Johnson & Johnson",
    shares: 75,
    avgCost: 140.00,
    currentPrice: 156.23,
    dividendYield: 3.05,
    lastDividend: 1.19,
    nextExDate: "2024-02-28",
    allocation: 20,
    totalValue: 11717.25,
    gainLoss: 1217.25,
    gainLossPercent: 11.6
  },
  {
    symbol: "KO",
    name: "Coca-Cola",
    shares: 100,
    avgCost: 52.00,
    currentPrice: 58.47,
    dividendYield: 3.15,
    lastDividend: 0.46,
    nextExDate: "2024-03-14",
    allocation: 12,
    totalValue: 5847.00,
    gainLoss: 647.00,
    gainLossPercent: 12.4
  },
  {
    symbol: "REALTY",
    name: "Realty Income",
    shares: 200,
    avgCost: 48.00,
    currentPrice: 52.83,
    dividendYield: 5.64,
    lastDividend: 0.249,
    nextExDate: "2024-01-31",
    allocation: 8,
    totalValue: 10566.00,
    gainLoss: 1966.00,
    gainLossPercent: 20.5
  }
]

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4']

export function PortfolioTracker() {
  const [holdings, setHoldings] = useState<Holding[]>(mockHoldings)
  const [selectedTimeframe, setSelectedTimeframe] = useState<'1M' | '3M' | '6M' | '1Y' | 'ALL'>('3M')
  const [showAnalytics, setShowAnalytics] = useState(false)

  // Calculate portfolio metrics
  const metrics: PortfolioMetrics = {
    totalValue: holdings.reduce((sum, h) => sum + h.totalValue, 0),
    totalCost: holdings.reduce((sum, h) => sum + (h.shares * h.avgCost), 0),
    totalGainLoss: holdings.reduce((sum, h) => sum + h.gainLoss, 0),
    totalGainLossPercent: 0,
    annualDividendIncome: holdings.reduce((sum, h) => sum + (h.shares * h.lastDividend * 4), 0),
    portfolioYield: 0,
    diversificationScore: 85,
    dividendGrowthRate: 5.2
  }
  
  metrics.totalGainLossPercent = (metrics.totalGainLoss / metrics.totalCost) * 100
  metrics.portfolioYield = (metrics.annualDividendIncome / metrics.totalValue) * 100

  // Mock performance data
  const performanceData = Array.from({ length: 30 }, (_, i) => ({
    date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
    portfolioValue: metrics.totalValue * (0.95 + Math.random() * 0.1),
    dividendIncome: (i * metrics.annualDividendIncome) / 365
  }))

  // Allocation data for pie chart
  const allocationData = holdings.map(h => ({
    name: h.symbol,
    value: h.allocation,
    actualValue: h.totalValue
  }))

  // Upcoming dividends
  const upcomingDividends: DividendPayment[] = holdings
    .filter(h => new Date(h.nextExDate) > new Date())
    .sort((a, b) => new Date(a.nextExDate).getTime() - new Date(b.nextExDate).getTime())
    .map(h => ({
      symbol: h.symbol,
      amount: h.shares * h.lastDividend,
      payDate: new Date(new Date(h.nextExDate).getTime() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      exDate: h.nextExDate,
      shares: h.shares
    }))

  return (
    <div className="space-y-6">
      {/* Portfolio Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-white">Portfolio Dashboard</h2>
            <p className="text-gray-400">Real-time tracking of your dividend investments</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setShowAnalytics(!showAnalytics)}
              className="border-slate-600 text-gray-300"
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              {showAnalytics ? 'Hide Analytics' : 'Show Analytics'}
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Add Holding
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-400 text-sm font-medium">Portfolio Value</p>
                  <p className="text-2xl font-bold text-white">${metrics.totalValue.toLocaleString()}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <div className="mt-2">
                <span className={`text-sm font-medium ${metrics.totalGainLoss >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {metrics.totalGainLoss >= 0 ? '+' : ''}${metrics.totalGainLoss.toLocaleString()} ({metrics.totalGainLossPercent.toFixed(2)}%)
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-400 text-sm font-medium">Annual Dividend Income</p>
                  <p className="text-2xl font-bold text-white">${metrics.annualDividendIncome.toLocaleString()}</p>
                </div>
                <DollarSign className="w-8 h-8 text-blue-400" />
              </div>
              <div className="mt-2">
                <span className="text-sm text-blue-400">
                  {metrics.portfolioYield.toFixed(2)}% Portfolio Yield
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-400 text-sm font-medium">Diversification Score</p>
                  <p className="text-2xl font-bold text-white">{metrics.diversificationScore}/100</p>
                </div>
                <PieChart className="w-8 h-8 text-purple-400" />
              </div>
              <div className="mt-2">
                <Progress value={metrics.diversificationScore} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border-orange-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-400 text-sm font-medium">Dividend Growth</p>
                  <p className="text-2xl font-bold text-white">{metrics.dividendGrowthRate.toFixed(1)}%</p>
                </div>
                <Activity className="w-8 h-8 text-orange-400" />
              </div>
              <div className="mt-2">
                <span className="text-sm text-orange-400">
                  5-Year Average
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Performance Chart */}
      <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-white flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Portfolio Performance
            </CardTitle>
            <div className="flex gap-2">
              {(['1M', '3M', '6M', '1Y', 'ALL'] as const).map((period) => (
                <Button
                  key={period}
                  variant={selectedTimeframe === period ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTimeframe(period)}
                  className={selectedTimeframe === period 
                    ? "bg-blue-600 text-white" 
                    : "border-slate-600 text-gray-300"
                  }
                >
                  {period}
                </Button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={performanceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-gray-700" />
              <XAxis dataKey="date" className="text-gray-400" />
              <YAxis className="text-gray-400" tickFormatter={(value: number) => `$${(value / 1000).toFixed(0)}k`} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #475569',
                  borderRadius: '8px',
                  color: '#fff'
                }}
                formatter={(value: number) => [`$${Number(value).toLocaleString()}`, 'Portfolio Value']}
              />
              <Area
                type="monotone"
                dataKey="portfolioValue"
                stroke="#3B82F6"
                strokeWidth={2}
                fill="url(#portfolioGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Holdings Table */}
        <div className="lg:col-span-2">
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Current Holdings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-600 text-gray-300">
                      <th className="text-left py-3">Symbol</th>
                      <th className="text-right py-3">Shares</th>
                      <th className="text-right py-3">Avg Cost</th>
                      <th className="text-right py-3">Current</th>
                      <th className="text-right py-3">Value</th>
                      <th className="text-right py-3">Gain/Loss</th>
                      <th className="text-right py-3">Yield</th>
                    </tr>
                  </thead>
                  <tbody>
                    {holdings.map((holding, index) => (
                      <motion.tr
                        key={holding.symbol}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors"
                      >
                        <td className="py-3">
                          <div>
                            <div className="font-semibold text-white">{holding.symbol}</div>
                            <div className="text-xs text-gray-400 truncate max-w-[100px]">{holding.name}</div>
                          </div>
                        </td>
                        <td className="text-right py-3 text-white">{holding.shares}</td>
                        <td className="text-right py-3 text-gray-300">${holding.avgCost.toFixed(2)}</td>
                        <td className="text-right py-3 text-white">${holding.currentPrice.toFixed(2)}</td>
                        <td className="text-right py-3 font-semibold text-white">${holding.totalValue.toLocaleString()}</td>
                        <td className={`text-right py-3 font-medium ${holding.gainLoss >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {holding.gainLoss >= 0 ? '+' : ''}${holding.gainLoss.toLocaleString()}
                          <div className="text-xs">({holding.gainLossPercent.toFixed(1)}%)</div>
                        </td>
                        <td className="text-right py-3 text-blue-400">{holding.dividendYield.toFixed(2)}%</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Allocation Chart */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <PieChart className="w-5 h-5" />
                Asset Allocation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <RechartsPieChart>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      border: '1px solid #475569',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                    formatter={(value: number, name: string) => [`${value}%`, name]}
                  />
                  <RechartsPieChart data={allocationData} cx="50%" cy="50%" outerRadius={80}>
                    {allocationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </RechartsPieChart>
                </RechartsPieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {allocationData.map((item, index) => (
                  <div key={item.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      />
                      <span className="text-gray-300">{item.name}</span>
                    </div>
                    <span className="text-white">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Dividends */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-green-400" />
                Upcoming Dividends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingDividends.slice(0, 5).map((dividend, index) => (
                  <motion.div
                    key={dividend.symbol}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg border border-green-500/20"
                  >
                    <div>
                      <div className="font-semibold text-white">{dividend.symbol}</div>
                      <div className="text-xs text-gray-400">Ex: {new Date(dividend.exDate).toLocaleDateString()}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-green-400">${dividend.amount.toFixed(2)}</div>
                      <div className="text-xs text-gray-400">{dividend.shares} shares</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Portfolio Health */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-400" />
                Portfolio Health
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Diversification</span>
                    <span className="text-white">{metrics.diversificationScore}/100</span>
                  </div>
                  <Progress value={metrics.diversificationScore} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Dividend Coverage</span>
                    <span className="text-white">92/100</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Quality Score</span>
                    <span className="text-white">88/100</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>
              </div>
              
              <div className="pt-3 border-t border-slate-600">
                <div className="flex items-center gap-2 text-sm text-green-400">
                  <AlertCircle className="w-4 h-4" />
                  <span>Portfolio is well-diversified</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}