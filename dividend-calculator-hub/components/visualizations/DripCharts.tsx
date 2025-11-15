"use client"

import { useMemo } from 'react'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps
} from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TrendingUp, BarChart3, LineChart as LineChartIcon, PieChart } from 'lucide-react'
import { formatCurrency, formatNumber } from '@/lib/utils/calculations'
import type { DripCalculationResult } from '@/types/calculator'

interface DripChartsProps {
  results: DripCalculationResult[]
  comparisonResults?: DripCalculationResult[] | null
}

// Custom tooltip for better formatting
const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
        <p className="font-semibold text-gray-900 dark:text-white mb-2">Year {label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {formatCurrency(entry.value as number)}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export function DripCharts({ results, comparisonResults }: DripChartsProps) {
  // Format data for different chart types
  const portfolioGrowthData = useMemo(() => {
    return results.map((r) => ({
      year: r.year,
      portfolioValue: parseFloat(r.portfolioValue),
      totalContributions: parseFloat(r.totalContributions),
      totalDividends: parseFloat(r.totalDividendsEarned)
    }))
  }, [results])

  const dividendIncomeData = useMemo(() => {
    return results.map((r) => ({
      year: r.year,
      grossDividend: parseFloat(r.grossAnnualDividend),
      netDividend: parseFloat(r.netAnnualDividend)
    }))
  }, [results])

  const shareGrowthData = useMemo(() => {
    return results.map((r) => ({
      year: r.year,
      shares: parseFloat(r.shares),
      sharePrice: parseFloat(r.sharePrice)
    }))
  }, [results])

  const compositionData = useMemo(() => {
    return results.map((r) => ({
      year: r.year,
      contributions: parseFloat(r.totalContributions),
      dividends: parseFloat(r.totalDividendsEarned),
      gains: parseFloat(r.portfolioValue) - parseFloat(r.totalContributions) - parseFloat(r.totalDividendsEarned)
    }))
  }, [results])

  const comparisonData = useMemo(() => {
    if (!comparisonResults) return null

    return results.map((r, index) => ({
      year: r.year,
      withDRIP: parseFloat(r.portfolioValue),
      withoutDRIP: comparisonResults[index] ? parseFloat(comparisonResults[index].portfolioValue) : 0
    }))
  }, [results, comparisonResults])

  return (
    <div className="space-y-6">
      <Tabs defaultValue="growth" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-6">
          <TabsTrigger value="growth" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            <span className="hidden sm:inline">Growth</span>
          </TabsTrigger>
          <TabsTrigger value="composition" className="flex items-center gap-2">
            <PieChart className="h-4 w-4" />
            <span className="hidden sm:inline">Composition</span>
          </TabsTrigger>
          <TabsTrigger value="dividends" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            <span className="hidden sm:inline">Dividends</span>
          </TabsTrigger>
          <TabsTrigger value="shares" className="flex items-center gap-2">
            <LineChartIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Shares</span>
          </TabsTrigger>
          {comparisonData && (
            <TabsTrigger value="comparison" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">DRIP vs No DRIP</span>
            </TabsTrigger>
          )}
        </TabsList>

        {/* Portfolio Growth Chart */}
        <TabsContent value="growth" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Portfolio Value Growth Over Time
              </CardTitle>
              <CardDescription>
                Track how your portfolio value grows with contributions and dividend reinvestment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={portfolioGrowthData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                  <XAxis
                    dataKey="year"
                    label={{ value: 'Year', position: 'insideBottom', offset: -5 }}
                    className="text-gray-600 dark:text-gray-400"
                  />
                  <YAxis
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                    label={{ value: 'Portfolio Value', angle: -90, position: 'insideLeft' }}
                    className="text-gray-600 dark:text-gray-400"
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="portfolioValue"
                    name="Portfolio Value"
                    stroke="#10b981"
                    strokeWidth={3}
                    dot={{ fill: '#10b981', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="totalContributions"
                    name="Total Contributions"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Portfolio Composition Chart */}
        <TabsContent value="composition" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-purple-600" />
                Portfolio Composition Over Time
              </CardTitle>
              <CardDescription>
                See how contributions, dividends, and capital gains build your wealth
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={compositionData} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
                  <defs>
                    <linearGradient id="colorContributions" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    </linearGradient>
                    <linearGradient id="colorDividends" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    </linearGradient>
                    <linearGradient id="colorGains" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.3}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                  <XAxis
                    dataKey="year"
                    label={{ value: 'Year', position: 'insideBottom', offset: -5 }}
                    className="text-gray-600 dark:text-gray-400"
                  />
                  <YAxis
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                    label={{ value: 'Value', angle: -90, position: 'insideLeft' }}
                    className="text-gray-600 dark:text-gray-400"
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="contributions"
                    name="Contributions"
                    stackId="1"
                    stroke="#3b82f6"
                    fillOpacity={1}
                    fill="url(#colorContributions)"
                  />
                  <Area
                    type="monotone"
                    dataKey="dividends"
                    name="Dividends"
                    stackId="1"
                    stroke="#8b5cf6"
                    fillOpacity={1}
                    fill="url(#colorDividends)"
                  />
                  <Area
                    type="monotone"
                    dataKey="gains"
                    name="Capital Gains"
                    stackId="1"
                    stroke="#10b981"
                    fillOpacity={1}
                    fill="url(#colorGains)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Annual Dividend Income Chart */}
        <TabsContent value="dividends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                Annual Dividend Income
              </CardTitle>
              <CardDescription>
                Your dividend income growth year over year
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={dividendIncomeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                  <XAxis
                    dataKey="year"
                    label={{ value: 'Year', position: 'insideBottom', offset: -5 }}
                    className="text-gray-600 dark:text-gray-400"
                  />
                  <YAxis
                    tickFormatter={(value) => `$${value.toLocaleString()}`}
                    label={{ value: 'Annual Dividend', angle: -90, position: 'insideLeft' }}
                    className="text-gray-600 dark:text-gray-400"
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar
                    dataKey="grossDividend"
                    name="Gross Dividend"
                    fill="#3b82f6"
                    radius={[8, 8, 0, 0]}
                  />
                  <Bar
                    dataKey="netDividend"
                    name="Net Dividend (After Tax)"
                    fill="#10b981"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Share Accumulation Chart */}
        <TabsContent value="shares" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChartIcon className="h-5 w-5 text-orange-600" />
                Share Accumulation & Price Growth
              </CardTitle>
              <CardDescription>
                Watch your share count grow through DRIP and contributions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={shareGrowthData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <defs>
                    <linearGradient id="colorShares" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#f97316" stopOpacity={0.2}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                  <XAxis
                    dataKey="year"
                    label={{ value: 'Year', position: 'insideBottom', offset: -5 }}
                    className="text-gray-600 dark:text-gray-400"
                  />
                  <YAxis
                    yAxisId="left"
                    tickFormatter={(value) => formatNumber(value)}
                    label={{ value: 'Number of Shares', angle: -90, position: 'insideLeft' }}
                    className="text-gray-600 dark:text-gray-400"
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    tickFormatter={(value) => `$${value.toFixed(0)}`}
                    label={{ value: 'Share Price', angle: 90, position: 'insideRight' }}
                    className="text-gray-600 dark:text-gray-400"
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="shares"
                    name="Total Shares"
                    stroke="#f97316"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorShares)"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="sharePrice"
                    name="Share Price"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    dot={{ fill: '#8b5cf6', r: 3 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* DRIP Comparison Chart */}
        {comparisonData && (
          <TabsContent value="comparison" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-emerald-600" />
                  DRIP vs No DRIP Comparison
                </CardTitle>
                <CardDescription>
                  See the power of dividend reinvestment over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={comparisonData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                    <XAxis
                      dataKey="year"
                      label={{ value: 'Year', position: 'insideBottom', offset: -5 }}
                      className="text-gray-600 dark:text-gray-400"
                    />
                    <YAxis
                      tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                      label={{ value: 'Portfolio Value', angle: -90, position: 'insideLeft' }}
                      className="text-gray-600 dark:text-gray-400"
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="withDRIP"
                      name="With DRIP Enabled"
                      stroke="#10b981"
                      strokeWidth={3}
                      dot={{ fill: '#10b981', r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="withoutDRIP"
                      name="Without DRIP"
                      stroke="#ef4444"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={{ fill: '#ef4444', r: 3 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  )
}
