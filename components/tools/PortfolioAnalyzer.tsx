'use client'

import React, { useState, useMemo } from 'react'
import { PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, Area, AreaChart, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Plus, Trash2, TrendingUp, DollarSign, PieChartIcon, AlertTriangle, Shield, Target, Download, Upload, Calculator, Award, BarChart3 } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Progress } from '@/components/ui/progress'

interface Holding {
  id: string
  ticker: string
  shares: number
  costBasis: number
  currentPrice: number
  annualDividend: number
  sector: string
  dividendYield: number
}

const SECTOR_COLORS = {
  'Technology': '#3B82F6',
  'Healthcare': '#10B981',
  'Financial': '#8B5CF6',
  'Consumer Staples': '#F59E0B',
  'Energy': '#EF4444',
  'Real Estate': '#EC4899',
  'Utilities': '#06B6D4',
  'Industrials': '#6366F1',
  'Communication': '#84CC16',
  'Materials': '#F97316',
  'Consumer Discretionary': '#14B8A6'
}

export function PortfolioAnalyzer() {
  const [holdings, setHoldings] = useState<Holding[]>([
    {
      id: '1',
      ticker: 'JNJ',
      shares: 100,
      costBasis: 140,
      currentPrice: 156.23,
      annualDividend: 4.76,
      sector: 'Healthcare',
      dividendYield: 3.2
    },
    {
      id: '2',
      ticker: 'KO',
      shares: 200,
      costBasis: 55,
      currentPrice: 61.45,
      annualDividend: 1.84,
      sector: 'Consumer Staples',
      dividendYield: 3.1
    },
    {
      id: '3',
      ticker: 'MSFT',
      shares: 50,
      costBasis: 350,
      currentPrice: 415.23,
      annualDividend: 3.00,
      sector: 'Technology',
      dividendYield: 0.7
    },
    {
      id: '4',
      ticker: 'O',
      shares: 150,
      costBasis: 58,
      currentPrice: 52.34,
      annualDividend: 3.06,
      sector: 'Real Estate',
      dividendYield: 5.8
    }
  ])

  const [newHolding, setNewHolding] = useState({
    ticker: '',
    shares: '',
    costBasis: '',
    currentPrice: '',
    annualDividend: '',
    sector: 'Technology'
  })

  const portfolioMetrics = useMemo(() => {
    const totalValue = holdings.reduce((sum, h) => sum + (h.shares * h.currentPrice), 0)
    const totalCost = holdings.reduce((sum, h) => sum + (h.shares * h.costBasis), 0)
    const totalGain = totalValue - totalCost
    const totalGainPercent = totalCost > 0 ? (totalGain / totalCost) * 100 : 0
    const annualDividends = holdings.reduce((sum, h) => sum + (h.shares * h.annualDividend), 0)
    const portfolioYield = totalValue > 0 ? (annualDividends / totalValue) * 100 : 0
    const yieldOnCost = totalCost > 0 ? (annualDividends / totalCost) * 100 : 0
    const monthlyIncome = annualDividends / 12

    // Sector allocation
    const sectorAllocation = holdings.reduce((acc, h) => {
      const value = h.shares * h.currentPrice
      if (!acc[h.sector]) {
        acc[h.sector] = { value: 0, percentage: 0, dividends: 0 }
      }
      acc[h.sector].value += value
      acc[h.sector].dividends += h.shares * h.annualDividend
      return acc
    }, {} as Record<string, { value: number; percentage: number; dividends: number }>)

    Object.keys(sectorAllocation).forEach(sector => {
      sectorAllocation[sector].percentage = (sectorAllocation[sector].value / totalValue) * 100
    })

    // Diversification score (0-100)
    const sectorCount = Object.keys(sectorAllocation).length
    const largestSectorPercent = Math.max(...Object.values(sectorAllocation).map(s => s.percentage))
    const diversificationScore = Math.min(100, (sectorCount * 10) + (100 - largestSectorPercent))

    // Income stability score
    const avgYield = portfolioYield
    const incomeStability = Math.min(100, avgYield * 20 + diversificationScore / 2)

    return {
      totalValue,
      totalCost,
      totalGain,
      totalGainPercent,
      annualDividends,
      portfolioYield,
      yieldOnCost,
      monthlyIncome,
      sectorAllocation,
      diversificationScore,
      incomeStability,
      holdingsCount: holdings.length
    }
  }, [holdings])

  const addHolding = () => {
    if (newHolding.ticker && newHolding.shares && newHolding.costBasis) {
      const holding: Holding = {
        id: Date.now().toString(),
        ticker: newHolding.ticker.toUpperCase(),
        shares: parseFloat(newHolding.shares),
        costBasis: parseFloat(newHolding.costBasis),
        currentPrice: parseFloat(newHolding.currentPrice || newHolding.costBasis),
        annualDividend: parseFloat(newHolding.annualDividend || '0'),
        sector: newHolding.sector,
        dividendYield: 0
      }
      holding.dividendYield = holding.currentPrice > 0 ? (holding.annualDividend / holding.currentPrice) * 100 : 0

      setHoldings([...holdings, holding])
      setNewHolding({
        ticker: '',
        shares: '',
        costBasis: '',
        currentPrice: '',
        annualDividend: '',
        sector: 'Technology'
      })
    }
  }

  const removeHolding = (id: string) => {
    setHoldings(holdings.filter(h => h.id !== id))
  }

  const sectorChartData = useMemo(() => {
    return Object.entries(portfolioMetrics.sectorAllocation).map(([sector, data]) => ({
      name: sector,
      value: data.value,
      percentage: data.percentage
    }))
  }, [portfolioMetrics.sectorAllocation])

  const performanceData = useMemo(() => {
    return holdings.map(h => ({
      ticker: h.ticker,
      gain: ((h.currentPrice - h.costBasis) / h.costBasis) * 100,
      value: h.shares * h.currentPrice
    }))
  }, [holdings])

  const incomeData = useMemo(() => {
    return holdings.map(h => ({
      ticker: h.ticker,
      annual: h.shares * h.annualDividend,
      yield: h.dividendYield
    }))
  }, [holdings])

  const projectedIncomeData = useMemo(() => {
    const years = 10
    const growthRate = 0.05 // 5% annual dividend growth
    const data = []

    for (let i = 0; i <= years; i++) {
      const income = portfolioMetrics.annualDividends * Math.pow(1 + growthRate, i)
      data.push({
        year: `Year ${i}`,
        income: income,
        cumulative: portfolioMetrics.annualDividends * ((Math.pow(1 + growthRate, i + 1) - 1) / growthRate)
      })
    }

    return data
  }, [portfolioMetrics.annualDividends])

  const radarData = useMemo(() => {
    return [
      {
        metric: 'Yield',
        value: Math.min(100, portfolioMetrics.portfolioYield * 20),
        fullMark: 100
      },
      {
        metric: 'Growth',
        value: Math.min(100, Math.abs(portfolioMetrics.totalGainPercent)),
        fullMark: 100
      },
      {
        metric: 'Diversity',
        value: portfolioMetrics.diversificationScore,
        fullMark: 100
      },
      {
        metric: 'Stability',
        value: portfolioMetrics.incomeStability,
        fullMark: 100
      },
      {
        metric: 'Size',
        value: Math.min(100, portfolioMetrics.holdingsCount * 5),
        fullMark: 100
      }
    ]
  }, [portfolioMetrics])

  const exportPortfolio = () => {
    const data = {
      holdings,
      metrics: portfolioMetrics,
      exportDate: new Date().toISOString()
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'portfolio-analysis.json'
    a.click()
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Portfolio Analyzer
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Analyze your dividend portfolio performance and income
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Upload className="w-4 h-4" />
            Import
          </Button>
          <Button variant="outline" size="sm" className="gap-2" onClick={exportPortfolio}>
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Portfolio Value</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">${portfolioMetrics.totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            <p className={`text-sm mt-1 flex items-center gap-1 ${portfolioMetrics.totalGain >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              <TrendingUp className="w-3 h-3" />
              {portfolioMetrics.totalGain >= 0 ? '+' : ''}{portfolioMetrics.totalGainPercent.toFixed(2)}%
              <span className="text-slate-500">
                (${portfolioMetrics.totalGain.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })})
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Annual Income</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-600">
              ${portfolioMetrics.annualDividends.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <p className="text-sm text-slate-600 mt-1">
              ${portfolioMetrics.monthlyIncome.toFixed(2)}/month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Portfolio Yield</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-blue-600">{portfolioMetrics.portfolioYield.toFixed(2)}%</p>
            <p className="text-sm text-slate-600 mt-1">
              YOC: {portfolioMetrics.yieldOnCost.toFixed(2)}%
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Diversification</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Progress value={portfolioMetrics.diversificationScore} className="flex-1" />
              <span className="text-sm font-bold">{portfolioMetrics.diversificationScore.toFixed(0)}</span>
            </div>
            <p className="text-sm text-slate-600 mt-1">
              {Object.keys(portfolioMetrics.sectorAllocation).length} sectors
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Add Holdings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Add Holdings
          </CardTitle>
          <CardDescription>Add stocks to your portfolio for analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            <Input
              placeholder="Ticker"
              value={newHolding.ticker}
              onChange={(e) => setNewHolding({ ...newHolding, ticker: e.target.value })}
            />
            <Input
              type="number"
              placeholder="Shares"
              value={newHolding.shares}
              onChange={(e) => setNewHolding({ ...newHolding, shares: e.target.value })}
            />
            <Input
              type="number"
              placeholder="Cost/Share"
              value={newHolding.costBasis}
              onChange={(e) => setNewHolding({ ...newHolding, costBasis: e.target.value })}
            />
            <Input
              type="number"
              placeholder="Current Price"
              value={newHolding.currentPrice}
              onChange={(e) => setNewHolding({ ...newHolding, currentPrice: e.target.value })}
            />
            <Input
              type="number"
              placeholder="Annual Div"
              value={newHolding.annualDividend}
              onChange={(e) => setNewHolding({ ...newHolding, annualDividend: e.target.value })}
            />
            <Button onClick={addHolding} className="w-full">
              Add Stock
            </Button>
          </div>

          {holdings.length > 0 && (
            <div className="mt-6 space-y-2">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Current Holdings</p>
              <div className="grid gap-2">
                {holdings.map(holding => (
                  <div key={holding.id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div>
                        <span className="font-bold">{holding.ticker}</span>
                        <Badge variant="outline" className="ml-2">{holding.sector}</Badge>
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {holding.shares} shares @ ${holding.costBasis}
                      </div>
                      <div className="text-sm">
                        <span className={`font-medium ${(holding.currentPrice - holding.costBasis) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {((holding.currentPrice - holding.costBasis) / holding.costBasis * 100).toFixed(1)}%
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeHolding(holding.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Analysis Tabs */}
      <Tabs defaultValue="allocation" className="space-y-4">
        <TabsList className="grid grid-cols-4 w-full lg:w-auto lg:inline-grid">
          <TabsTrigger value="allocation">Allocation</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="income">Income</TabsTrigger>
          <TabsTrigger value="health">Health Score</TabsTrigger>
        </TabsList>

        <TabsContent value="allocation" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Sector Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={sectorChartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={(props: any) => `${props.percentage.toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {sectorChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={SECTOR_COLORS[entry.name as keyof typeof SECTOR_COLORS] || '#94a3b8'} />
                      ))}
                    </Pie>
                    <RechartsTooltip
                      formatter={(value: number | undefined) =>
                        value !== undefined ? `$${value.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '$0.00'
                      }
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sector Income Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={Object.entries(portfolioMetrics.sectorAllocation).map(([sector, data]) => ({
                    sector,
                    income: data.dividends
                  }))}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="sector" angle={-45} textAnchor="end" height={80} />
                    <YAxis />
                    <RechartsTooltip
                      formatter={(value: number | undefined) =>
                        value !== undefined ? `$${value.toFixed(2)}` : '$0.00'
                      }
                    />
                    <Bar dataKey="income" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Individual Stock Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="ticker" />
                  <YAxis />
                  <RechartsTooltip
                    formatter={(value: number | undefined) =>
                      value !== undefined ? `${value.toFixed(2)}%` : '0.00%'
                    }
                  />
                  <Bar dataKey="gain">
                    {performanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.gain >= 0 ? '#10b981' : '#ef4444'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="income" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Income by Stock</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={incomeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="ticker" />
                    <YAxis yAxisId="left" orientation="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <RechartsTooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="annual" fill="#3b82f6" name="Annual Income ($)" />
                    <Bar yAxisId="right" dataKey="yield" fill="#f59e0b" name="Yield (%)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Projected Income Growth</CardTitle>
                <CardDescription>Assuming 5% annual dividend growth</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={projectedIncomeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <RechartsTooltip
                      formatter={(value: number | undefined) =>
                        value !== undefined ? `$${value.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '$0.00'
                      }
                    />
                    <Area type="monotone" dataKey="income" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="cumulative" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="health" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Health Score</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="metric" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar name="Score" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className={portfolioMetrics.diversificationScore > 70 ? '' : 'border-orange-200 bg-orange-50'}>
                  <Shield className="w-4 h-4" />
                  <AlertTitle>Diversification</AlertTitle>
                  <AlertDescription>
                    {portfolioMetrics.diversificationScore > 70
                      ? 'Your portfolio is well-diversified across sectors.'
                      : 'Consider adding stocks from different sectors to improve diversification.'}
                  </AlertDescription>
                </Alert>

                <Alert className={portfolioMetrics.portfolioYield > 2 ? '' : 'border-orange-200 bg-orange-50'}>
                  <DollarSign className="w-4 h-4" />
                  <AlertTitle>Income Generation</AlertTitle>
                  <AlertDescription>
                    Your portfolio yields {portfolioMetrics.portfolioYield.toFixed(2)}% annually.
                    {portfolioMetrics.portfolioYield < 2 && ' Consider adding higher-yield stocks for better income.'}
                  </AlertDescription>
                </Alert>

                <Alert className={portfolioMetrics.incomeStability > 60 ? '' : 'border-orange-200 bg-orange-50'}>
                  <Target className="w-4 h-4" />
                  <AlertTitle>Income Stability</AlertTitle>
                  <AlertDescription>
                    Income stability score: {portfolioMetrics.incomeStability.toFixed(0)}/100
                    {portfolioMetrics.incomeStability < 60 && '. Add more dividend aristocrats for stable income.'}
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">Want Professional Portfolio Management?</h3>
              <p className="text-purple-100 mt-1">
                Compare robo-advisors that automatically manage and rebalance your portfolio
              </p>
            </div>
            <Button size="lg" variant="secondary" className="whitespace-nowrap">
              Compare Robo-Advisors →
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}