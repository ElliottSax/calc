"use client"

import React, { useMemo, useState, useRef, useEffect } from 'react'
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
  TooltipProps,
  Brush,
  ReferenceArea,
  ReferenceLine
} from 'recharts'
import Confetti from 'react-confetti'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { TrendingUp, BarChart3, LineChart as LineChartIcon, PieChart, Sparkles, Activity, Download, Maximize2, ZoomIn, ZoomOut, RotateCcw, Trophy, Target, Zap, Crown, Award, DollarSign } from 'lucide-react'
import { formatCurrency, formatNumber } from '@/lib/utils/calculations'
import type { DripCalculationResult } from '@/types/calculator'

interface DripChartsProps {
  results: DripCalculationResult[]
  comparisonResults?: DripCalculationResult[] | null
}

// Enhanced interactive tooltip with sparkline trend and animations
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    // Calculate growth from previous year if available
    const currentValue = payload[0]?.value || 0

    return (
      <div className="relative backdrop-blur-xl bg-white/95 dark:bg-slate-900/95 p-6 rounded-2xl shadow-[0_16px_64px_0_rgba(0,0,0,0.2)] dark:shadow-[0_16px_64px_0_rgba(0,0,0,0.6)] border-2 border-slate-300/80 dark:border-slate-600/80 animate-in fade-in zoom-in-95 duration-300 min-w-[280px]">
        {/* Animated glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl animate-pulse" style={{ animationDuration: '3s' }} />

        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10 rounded-2xl animate-shimmer" style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }} />

        <div className="relative">
          {/* Header with year and sparkle */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-slate-200/80 dark:border-slate-700/80">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-gradient-to-b from-slate-800 via-slate-600 to-slate-800 dark:from-slate-200 dark:via-slate-400 dark:to-slate-200 rounded-full shadow-lg animate-pulse" />
              <div>
                <p className="font-bold text-xl tracking-tight text-slate-900 dark:text-slate-100">Year {label}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">Data Point</p>
              </div>
            </div>
            <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-pulse" />
          </div>

          {/* Values with enhanced styling */}
          <div className="space-y-3.5">
            {payload.map((entry: any, index: number) => (
              <div key={index} className="flex items-center justify-between gap-8 group relative">
                {/* Hover background */}
                <div className="absolute inset-0 bg-slate-100/50 dark:bg-slate-800/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10" />

                <div className="flex items-center gap-3 flex-1">
                  <div
                    className="w-3 h-3 rounded-full shadow-md transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg relative"
                    style={{ backgroundColor: entry.color }}
                  >
                    {/* Pulsing ring */}
                    <div
                      className="absolute inset-0 rounded-full animate-ping opacity-75"
                      style={{ backgroundColor: entry.color }}
                    />
                  </div>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 tracking-wide group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">
                    {entry.name}
                  </p>
                </div>
                <p className="text-base font-bold tabular-nums tracking-tight transition-all duration-300 group-hover:scale-105" style={{ color: entry.color }}>
                  {formatCurrency(entry.value as number)}
                </p>
              </div>
            ))}
          </div>

          {/* Footer tip */}
          <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
            <p className="text-xs text-slate-500 dark:text-slate-400 text-center font-medium">
              Click chart to zoom • Hover for details
            </p>
          </div>
        </div>
      </div>
    )
  }
  return null
}

export const DripCharts = React.memo(function DripCharts({ results, comparisonResults }: DripChartsProps) {
  const [activeTab, setActiveTab] = useState('growth')
  const [hoveredChart, setHoveredChart] = useState<string | null>(null)
  const [zoomDomain, setZoomDomain] = useState<{left: number, right: number} | null>(null)
  const [activeDataPoint, setActiveDataPoint] = useState<number | null>(null)
  const [showBrush, setShowBrush] = useState(false)
  const [celebration, setCelebration] = useState<{ active: boolean; message: string; icon: any } | null>(null)
  const [clickedPoint, setClickedPoint] = useState<any>(null)
  const [hiddenSeries, setHiddenSeries] = useState<Set<string>>(new Set())
  const [showInsights, setShowInsights] = useState(true)
  const celebrationTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Format data for different chart types
  const portfolioGrowthData = useMemo(() => {
    return results.map((r) => ({
      year: r.year,
      portfolioValue: Number(r.portfolioValue),
      totalContributions: Number(r.totalContributions),
      totalDividends: Number(r.totalDividendsEarned)
    }))
  }, [results])

  const dividendIncomeData = useMemo(() => {
    return results.map((r) => ({
      year: r.year,
      grossDividend: Number(r.grossAnnualDividend),
      netDividend: Number(r.netAnnualDividend)
    }))
  }, [results])

  const shareGrowthData = useMemo(() => {
    return results.map((r) => ({
      year: r.year,
      shares: Number(r.shares),
      sharePrice: Number(r.sharePrice)
    }))
  }, [results])

  const compositionData = useMemo(() => {
    return results.map((r) => ({
      year: r.year,
      contributions: Number(r.totalContributions),
      dividends: Number(r.totalDividendsEarned),
      gains: Number(r.portfolioValue) - Number(r.totalContributions) - Number(r.totalDividendsEarned)
    }))
  }, [results])

  const comparisonData = useMemo(() => {
    if (!comparisonResults) return null

    return results.map((r, index) => ({
      year: r.year,
      withDRIP: Number(r.portfolioValue),
      withoutDRIP: comparisonResults[index] ? Number(comparisonResults[index].portfolioValue) : 0
    }))
  }, [results, comparisonResults])

  // Detect milestones and generate insights
  const milestones = useMemo(() => {
    const final = results[results.length - 1]
    const finalValue = Number(final?.portfolioValue || 0)
    const finalDividend = Number(final?.grossAnnualDividend || 0)
    const detected: Array<{ value: number; message: string; icon: any; year?: number }> = []

    // Portfolio milestones
    const portfolioMilestones = [
      { threshold: 1000000, message: "🎉 Millionaire Status!", icon: Crown },
      { threshold: 500000, message: "💎 Half Million Achieved!", icon: Trophy },
      { threshold: 250000, message: "🚀 Quarter Million Milestone!", icon: Zap },
      { threshold: 100000, message: "✨ Six Figures Reached!", icon: Award },
      { threshold: 50000, message: "🎯 $50K Portfolio!", icon: Target }
    ]

    portfolioMilestones.forEach(m => {
      const crossingPoint = results.findIndex(r => Number(r.portfolioValue) >= m.threshold)
      if (crossingPoint !== -1) {
        detected.push({
          value: m.threshold,
          message: m.message,
          icon: m.icon,
          year: results[crossingPoint].year
        })
      }
    })

    // Dividend income milestones
    if (finalDividend >= 10000) {
      detected.push({ value: 10000, message: "💰 $10K+ Annual Dividends!", icon: Crown })
    } else if (finalDividend >= 5000) {
      detected.push({ value: 5000, message: "💵 $5K+ Passive Income!", icon: Trophy })
    }

    return detected
  }, [results])

  // Key insights
  const insights = useMemo(() => {
    if (results.length < 2) return []

    const final = results[results.length - 1]
    const initial = results[0]
    const finalValue = Number(final.portfolioValue)
    const initialValue = Number(initial.portfolioValue)
    const totalReturn = ((finalValue - initialValue) / initialValue) * 100
    const finalDividend = Number(final.grossAnnualDividend)
    const years = results.length - 1

    const insights: string[] = []

    // Growth rate insight
    const annualGrowth = (Math.pow(finalValue / initialValue, 1 / years) - 1) * 100
    if (annualGrowth > 15) {
      insights.push(`🔥 ${annualGrowth.toFixed(1)}% annual growth - exceptional performance!`)
    } else if (annualGrowth > 10) {
      insights.push(`📈 ${annualGrowth.toFixed(1)}% annual growth - beating market average!`)
    }

    // Dividend income insight
    const monthlyIncome = finalDividend / 12
    if (monthlyIncome > 1000) {
      insights.push(`💰 ${formatCurrency(monthlyIncome)}/month in passive income!`)
    }

    // Compound power insight
    const contributions = Number(final.totalContributions)
    const gains = finalValue - contributions
    const gainPercent = (gains / contributions) * 100
    if (gainPercent > 100) {
      insights.push(`⚡ Your money has more than doubled through compound growth!`)
    } else if (gainPercent > 50) {
      insights.push(`✨ ${gainPercent.toFixed(0)}% gains from compounding - the magic is working!`)
    }

    return insights
  }, [results])

  // Trigger celebration
  const triggerCelebration = (message: string, icon: any) => {
    if (celebrationTimerRef.current) {
      clearTimeout(celebrationTimerRef.current)
    }

    setCelebration({ active: true, message, icon })

    celebrationTimerRef.current = setTimeout(() => {
      setCelebration(null)
    }, 5000)
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (celebrationTimerRef.current) {
        clearTimeout(celebrationTimerRef.current)
      }
    }
  }, [])

  // Handle data point click
  const handleDataPointClick = (data: any) => {
    setClickedPoint(data)

    // Check if this point crosses a milestone
    const value = data.portfolioValue || data.totalIncome || 0
    const milestone = milestones.find(m =>
      value >= m.value * 0.98 && value <= m.value * 1.02
    )

    if (milestone) {
      triggerCelebration(milestone.message, milestone.icon)
    }
  }

  // Toggle series visibility
  const toggleSeries = (seriesName: string) => {
    const newHidden = new Set(hiddenSeries)
    if (newHidden.has(seriesName)) {
      newHidden.delete(seriesName)
    } else {
      newHidden.add(seriesName)
    }
    setHiddenSeries(newHidden)
  }

  // Chart controls component
  const ChartControls = ({ onReset, onToggleBrush }: { onReset: () => void, onToggleBrush: () => void }) => (
    <div className="flex items-center gap-2">
      <Button
        size="sm"
        variant="outline"
        onClick={onToggleBrush}
        className="h-8 px-3 backdrop-blur-sm bg-white/60 dark:bg-slate-900/60 border-slate-300/60 dark:border-slate-600/60 hover:bg-white dark:hover:bg-slate-800 transition-all duration-200"
      >
        <ZoomIn className="w-3.5 h-3.5 mr-1.5" />
        <span className="text-xs font-medium">Zoom</span>
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={onReset}
        className="h-8 px-3 backdrop-blur-sm bg-white/60 dark:bg-slate-900/60 border-slate-300/60 dark:border-slate-600/60 hover:bg-white dark:hover:bg-slate-800 transition-all duration-200"
      >
        <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
        <span className="text-xs font-medium">Reset</span>
      </Button>
    </div>
  )

  const handleResetZoom = () => {
    setZoomDomain(null)
    setShowBrush(false)
  }

  return (
    <div className="space-y-8 relative">
      {/* Celebration Confetti */}
      {celebration?.active && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <Confetti
            width={typeof window !== 'undefined' ? window.innerWidth : 1000}
            height={typeof window !== 'undefined' ? window.innerHeight : 1000}
            recycle={false}
            numberOfPieces={500}
            gravity={0.3}
            colors={['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b']}
          />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
            <div className="backdrop-blur-xl bg-white/95 dark:bg-slate-900/95 p-12 rounded-3xl shadow-[0_32px_128px_0_rgba(0,0,0,0.3)] dark:shadow-[0_32px_128px_0_rgba(0,0,0,0.8)] border-4 border-yellow-400/80 animate-in zoom-in-95 duration-500">
              <div className="text-center space-y-6">
                {celebration.icon && (
                  <celebration.icon className="w-24 h-24 mx-auto text-yellow-500 animate-bounce" />
                )}
                <h2 className="text-5xl font-black text-slate-900 dark:text-white animate-pulse">
                  {celebration.message}
                </h2>
                <Button
                  size="lg"
                  onClick={() => setCelebration(null)}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold px-8 py-6 text-xl shadow-xl animate-float"
                >
                  Amazing! ✨
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Insights Banner */}
      {showInsights && insights.length > 0 && (
        <div className="relative animate-in slide-in-from-top duration-700">
          <Card className="overflow-hidden backdrop-blur-xl bg-gradient-to-r from-blue-50/90 via-purple-50/90 to-pink-50/90 dark:from-blue-950/40 dark:via-purple-950/40 dark:to-pink-950/40 border-2 border-blue-300/60 dark:border-blue-600/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-glow" />
            <CardContent className="relative p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400 animate-pulse" />
                    <h3 className="text-xl font-black text-slate-900 dark:text-white">
                      Key Insights
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    {insights.map((insight, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-3 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 hover:scale-105 transition-transform duration-200 cursor-pointer"
                        onClick={() => {
                          const Icon = i === 0 ? TrendingUp : i === 1 ? DollarSign : Zap
                          triggerCelebration(insight, Icon)
                        }}
                      >
                        <div className="text-2xl">{insight.split(' ')[0]}</div>
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                          {insight.substring(insight.indexOf(' ') + 1)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setShowInsights(false)}
                  className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                >
                  ✕
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Milestones Achievement Banner */}
      {milestones.length > 0 && (
        <div className="relative animate-in slide-in-from-left duration-700 delay-300">
          <Card className="overflow-hidden backdrop-blur-xl bg-gradient-to-r from-yellow-50/90 via-orange-50/90 to-red-50/90 dark:from-yellow-950/40 dark:via-orange-950/40 dark:to-red-950/40 border-2 border-yellow-300/60 dark:border-yellow-600/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 flex-wrap">
                <Trophy className="w-7 h-7 text-yellow-600 dark:text-yellow-400 animate-bounce" />
                <div className="flex-1">
                  <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">
                    🎯 Milestones Achieved
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    {milestones.slice(0, 5).map((milestone, i) => {
                      const Icon = milestone.icon
                      return (
                        <button
                          key={i}
                          onClick={() => triggerCelebration(milestone.message, Icon)}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 border-2 border-yellow-400/60 dark:border-yellow-600/60 hover:scale-110 hover:border-yellow-500 transition-all duration-200 cursor-pointer shadow-md hover:shadow-xl group"
                        >
                          <Icon className="w-4 h-4 text-yellow-600 dark:text-yellow-400 group-hover:animate-spin" />
                          <span className="text-sm font-bold text-slate-900 dark:text-white">
                            {formatCurrency(milestone.value)}
                          </span>
                          {milestone.year && (
                            <span className="text-xs text-slate-600 dark:text-slate-400">
                              Year {milestone.year}
                            </span>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Subtle premium background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50/50 via-white to-slate-50/50 dark:from-slate-950/50 dark:via-slate-900 dark:to-slate-950/50 rounded-3xl" />

      <Tabs defaultValue="growth" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5 mb-8 p-1.5 backdrop-blur-xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-xl">
          <TabsTrigger
            value="growth"
            className="flex items-center gap-2 data-[state=active]:bg-slate-900 dark:data-[state=active]:bg-slate-100 data-[state=active]:text-white dark:data-[state=active]:text-slate-900 data-[state=active]:shadow-lg transition-all duration-300 rounded-lg font-medium"
          >
            <TrendingUp className="h-4 w-4" />
            <span className="hidden sm:inline">Growth</span>
          </TabsTrigger>
          <TabsTrigger
            value="composition"
            className="flex items-center gap-2 data-[state=active]:bg-slate-900 dark:data-[state=active]:bg-slate-100 data-[state=active]:text-white dark:data-[state=active]:text-slate-900 data-[state=active]:shadow-lg transition-all duration-300 rounded-lg font-medium"
          >
            <PieChart className="h-4 w-4" />
            <span className="hidden sm:inline">Composition</span>
          </TabsTrigger>
          <TabsTrigger
            value="dividends"
            className="flex items-center gap-2 data-[state=active]:bg-slate-900 dark:data-[state=active]:bg-slate-100 data-[state=active]:text-white dark:data-[state=active]:text-slate-900 data-[state=active]:shadow-lg transition-all duration-300 rounded-lg font-medium"
          >
            <BarChart3 className="h-4 w-4" />
            <span className="hidden sm:inline">Dividends</span>
          </TabsTrigger>
          <TabsTrigger
            value="shares"
            className="flex items-center gap-2 data-[state=active]:bg-slate-900 dark:data-[state=active]:bg-slate-100 data-[state=active]:text-white dark:data-[state=active]:text-slate-900 data-[state=active]:shadow-lg transition-all duration-300 rounded-lg font-medium"
          >
            <LineChartIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Shares</span>
          </TabsTrigger>
          {comparisonData && (
            <TabsTrigger
              value="comparison"
              className="flex items-center gap-2 data-[state=active]:bg-slate-900 dark:data-[state=active]:bg-slate-100 data-[state=active]:text-white dark:data-[state=active]:text-slate-900 data-[state=active]:shadow-lg transition-all duration-300 rounded-lg font-medium"
            >
              <Activity className="h-4 w-4" />
              <span className="hidden sm:inline">Compare</span>
            </TabsTrigger>
          )}
        </TabsList>

        {/* Portfolio Growth Chart */}
        <TabsContent value="growth" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card
            className="overflow-hidden backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-700/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.12)] dark:hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.4)] transition-all duration-500 group"
            onMouseEnter={() => setHoveredChart('growth')}
            onMouseLeave={() => setHoveredChart(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl" />
            <CardHeader className="relative pb-6 pt-8 px-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="flex items-center gap-4 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                    <div className="p-2.5 bg-slate-900 dark:bg-slate-100 rounded-xl shadow-lg">
                      <TrendingUp className="h-5 w-5 text-white dark:text-slate-900" />
                    </div>
                    Portfolio Value Growth Over Time
                  </CardTitle>
                  <CardDescription className="text-base text-slate-600 dark:text-slate-400 mt-2 ml-14">
                    Track how your portfolio value grows with contributions and dividend reinvestment
                  </CardDescription>
                </div>
                <ChartControls onReset={handleResetZoom} onToggleBrush={() => setShowBrush(!showBrush)} />
              </div>
            </CardHeader>
            <CardContent className="relative px-8 pb-8">
              <ResponsiveContainer width="100%" height={480}>
                <LineChart
                  data={portfolioGrowthData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <defs>
                    <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0f172a" stopOpacity={0.15}/>
                      <stop offset="95%" stopColor="#0f172a" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-700" opacity={0.5} />
                  <XAxis
                    dataKey="year"
                    label={{ value: 'Year', position: 'insideBottom', offset: -5 }}
                    className="text-slate-600 dark:text-slate-400"
                    tick={{ fontSize: 13, fontWeight: 500 }}
                    stroke="#94a3b8"
                  />
                  <YAxis
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                    label={{ value: 'Portfolio Value', angle: -90, position: 'insideLeft' }}
                    className="text-slate-600 dark:text-slate-400"
                    tick={{ fontSize: 13, fontWeight: 500 }}
                    stroke="#94a3b8"
                  />
                  <Tooltip
                    content={<CustomTooltip />}
                    cursor={{
                      stroke: '#0f172a',
                      strokeWidth: 2,
                      strokeDasharray: '5 5',
                      opacity: 0.5
                    }}
                    animationDuration={300}
                    animationEasing="ease-out"
                  />
                  <Legend
                    wrapperStyle={{ paddingTop: '24px' }}
                    iconType="circle"
                    onClick={(e: any) => toggleSeries(e.value)}
                    formatter={(value: string) => (
                      <span
                        className={`cursor-pointer hover:text-slate-900 dark:hover:text-white transition-colors ${
                          hiddenSeries.has(value) ? 'line-through opacity-50' : ''
                        }`}
                      >
                        {value}
                      </span>
                    )}
                  />
                  <Area
                    type="monotone"
                    dataKey="portfolioValue"
                    fill="url(#portfolioGradient)"
                    stroke="none"
                    animationDuration={2000}
                    animationEasing="ease-in-out"
                    isAnimationActive={true}
                  />
                  {/* Milestone Reference Lines */}
                  {milestones.map((milestone, i) => (
                    <ReferenceLine
                      key={i}
                      y={milestone.value}
                      stroke="#f59e0b"
                      strokeDasharray="6 6"
                      strokeWidth={2}
                      label={{
                        value: `${formatCurrency(milestone.value)} 🎯`,
                        position: 'right',
                        fill: '#f59e0b',
                        fontSize: 13,
                        fontWeight: 700
                      }}
                    />
                  ))}
                  <Line
                    type="monotone"
                    dataKey="portfolioValue"
                    name="Portfolio Value"
                    stroke="#0f172a"
                    strokeWidth={3}
                    dot={{
                      fill: '#0f172a',
                      r: 5,
                      strokeWidth: 3,
                      stroke: '#fff',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                    }}
                    activeDot={{
                      r: 8,
                      strokeWidth: 3,
                      stroke: '#fff',
                      fill: '#0f172a',
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                      onClick: handleDataPointClick,
                      style: { cursor: 'pointer' }
                    }}
                    animationDuration={2000}
                    animationEasing="ease-in-out"
                    isAnimationActive={true}
                    hide={hiddenSeries.has('Portfolio Value')}
                  />
                  <Line
                    type="monotone"
                    dataKey="totalContributions"
                    name="Total Contributions"
                    stroke="#64748b"
                    strokeWidth={2.5}
                    strokeDasharray="8 4"
                    dot={false}
                    animationDuration={2000}
                    animationEasing="ease-in-out"
                    isAnimationActive={true}
                    hide={hiddenSeries.has('Total Contributions')}
                  />
                  {showBrush && (
                    <Brush
                      dataKey="year"
                      height={40}
                      stroke="#0f172a"
                      fill="rgba(15, 23, 42, 0.05)"
                      travellerWidth={10}
                      className="animate-in slide-in-from-bottom duration-300"
                    />
                  )}
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Portfolio Composition Chart */}
        <TabsContent value="composition" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card
            className="overflow-hidden backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-700/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.12)] dark:hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.4)] transition-all duration-500 group"
            onMouseEnter={() => setHoveredChart('composition')}
            onMouseLeave={() => setHoveredChart(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-transparent to-slate-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl" />
            <CardHeader className="relative pb-6 pt-8 px-8">
              <CardTitle className="flex items-center gap-4 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                <div className="p-2.5 bg-slate-900 dark:bg-slate-100 rounded-xl shadow-lg">
                  <PieChart className="h-5 w-5 text-white dark:text-slate-900" />
                </div>
                Portfolio Composition Over Time
              </CardTitle>
              <CardDescription className="text-base text-slate-600 dark:text-slate-400 mt-2 ml-14">
                See how contributions, dividends, and capital gains build your wealth
              </CardDescription>
            </CardHeader>
            <CardContent className="relative px-8 pb-8">
              <ResponsiveContainer width="100%" height={480}>
                <AreaChart data={compositionData} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
                  <defs>
                    <linearGradient id="colorContributions" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#334155" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#334155" stopOpacity={0.3}/>
                    </linearGradient>
                    <linearGradient id="colorDividends" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#64748b" stopOpacity={0.7}/>
                      <stop offset="95%" stopColor="#64748b" stopOpacity={0.25}/>
                    </linearGradient>
                    <linearGradient id="colorGains" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0f172a" stopOpacity={0.6}/>
                      <stop offset="95%" stopColor="#0f172a" stopOpacity={0.2}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-700" opacity={0.5} />
                  <XAxis
                    dataKey="year"
                    label={{ value: 'Year', position: 'insideBottom', offset: -5 }}
                    className="text-slate-600 dark:text-slate-400"
                    tick={{ fontSize: 13, fontWeight: 500 }}
                    stroke="#94a3b8"
                  />
                  <YAxis
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                    label={{ value: 'Value', angle: -90, position: 'insideLeft' }}
                    className="text-slate-600 dark:text-slate-400"
                    tick={{ fontSize: 13, fontWeight: 500 }}
                    stroke="#94a3b8"
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#0f172a', strokeWidth: 1, strokeDasharray: '4 4', opacity: 0.3 }} />
                  <Legend
                    wrapperStyle={{ paddingTop: '24px' }}
                    iconType="circle"
                    onClick={(e: any) => toggleSeries(e.value)}
                    formatter={(value: string) => (
                      <span
                        className={`cursor-pointer hover:text-slate-900 dark:hover:text-white transition-colors ${
                          hiddenSeries.has(value) ? 'line-through opacity-50' : ''
                        }`}
                      >
                        {value}
                      </span>
                    )}
                  />
                  <Area
                    type="monotone"
                    dataKey="contributions"
                    name="Contributions"
                    stackId="1"
                    stroke="#334155"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorContributions)"
                    animationDuration={1500}
                    animationEasing="ease-in-out"
                  />
                  <Area
                    type="monotone"
                    dataKey="dividends"
                    name="Dividends"
                    stackId="1"
                    stroke="#64748b"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorDividends)"
                    animationDuration={1500}
                    animationEasing="ease-in-out"
                  />
                  <Area
                    type="monotone"
                    dataKey="gains"
                    name="Capital Gains"
                    stackId="1"
                    stroke="#0f172a"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorGains)"
                    animationDuration={1500}
                    animationEasing="ease-in-out"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Annual Dividend Income Chart */}
        <TabsContent value="dividends" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card
            className="overflow-hidden backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-700/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.12)] dark:hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.4)] transition-all duration-500 group"
            onMouseEnter={() => setHoveredChart('dividends')}
            onMouseLeave={() => setHoveredChart(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-transparent to-slate-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl" />
            <CardHeader className="relative pb-6 pt-8 px-8">
              <CardTitle className="flex items-center gap-4 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                <div className="p-2.5 bg-slate-900 dark:bg-slate-100 rounded-xl shadow-lg">
                  <BarChart3 className="h-5 w-5 text-white dark:text-slate-900" />
                </div>
                Annual Dividend Income
              </CardTitle>
              <CardDescription className="text-base text-slate-600 dark:text-slate-400 mt-2 ml-14">
                Your dividend income growth year over year
              </CardDescription>
            </CardHeader>
            <CardContent className="relative px-8 pb-8">
              <ResponsiveContainer width="100%" height={480}>
                <BarChart data={dividendIncomeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <defs>
                    <linearGradient id="grossGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#64748b" stopOpacity={0.95}/>
                      <stop offset="95%" stopColor="#64748b" stopOpacity={0.7}/>
                    </linearGradient>
                    <linearGradient id="netGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0f172a" stopOpacity={0.95}/>
                      <stop offset="95%" stopColor="#0f172a" stopOpacity={0.7}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-700" opacity={0.5} />
                  <XAxis
                    dataKey="year"
                    label={{ value: 'Year', position: 'insideBottom', offset: -5 }}
                    className="text-slate-600 dark:text-slate-400"
                    tick={{ fontSize: 13, fontWeight: 500 }}
                    stroke="#94a3b8"
                  />
                  <YAxis
                    tickFormatter={(value) => `$${value.toLocaleString()}`}
                    label={{ value: 'Annual Dividend', angle: -90, position: 'insideLeft' }}
                    className="text-slate-600 dark:text-slate-400"
                    tick={{ fontSize: 13, fontWeight: 500 }}
                    stroke="#94a3b8"
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(15, 23, 42, 0.05)' }} />
                  <Legend
                    wrapperStyle={{ paddingTop: '24px' }}
                    iconType="circle"
                    onClick={(e: any) => toggleSeries(e.value)}
                    formatter={(value: string) => (
                      <span
                        className={`cursor-pointer hover:text-slate-900 dark:hover:text-white transition-colors ${
                          hiddenSeries.has(value) ? 'line-through opacity-50' : ''
                        }`}
                      >
                        {value}
                      </span>
                    )}
                  />
                  <Bar
                    dataKey="grossDividend"
                    name="Gross Dividend"
                    fill="url(#grossGradient)"
                    radius={[10, 10, 0, 0]}
                    animationDuration={2000}
                    animationEasing="ease-in-out"
                    isAnimationActive={true}
                    onMouseEnter={(data: any) => setActiveDataPoint(data.index)}
                    onMouseLeave={() => setActiveDataPoint(null)}
                    style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
                  />
                  <Bar
                    dataKey="netDividend"
                    name="Net Dividend (After Tax)"
                    fill="url(#netGradient)"
                    radius={[10, 10, 0, 0]}
                    animationDuration={2000}
                    animationEasing="ease-in-out"
                    isAnimationActive={true}
                    onMouseEnter={(data: any) => setActiveDataPoint(data.index)}
                    onMouseLeave={() => setActiveDataPoint(null)}
                    style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Share Accumulation Chart */}
        <TabsContent value="shares" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card
            className="overflow-hidden backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-700/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.12)] dark:hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.4)] transition-all duration-500 group"
            onMouseEnter={() => setHoveredChart('shares')}
            onMouseLeave={() => setHoveredChart(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-transparent to-slate-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl" />
            <CardHeader className="relative pb-6 pt-8 px-8">
              <CardTitle className="flex items-center gap-4 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                <div className="p-2.5 bg-slate-900 dark:bg-slate-100 rounded-xl shadow-lg">
                  <LineChartIcon className="h-5 w-5 text-white dark:text-slate-900" />
                </div>
                Share Accumulation & Price Growth
              </CardTitle>
              <CardDescription className="text-base text-slate-600 dark:text-slate-400 mt-2 ml-14">
                Watch your share count grow through DRIP and contributions
              </CardDescription>
            </CardHeader>
            <CardContent className="relative px-8 pb-8">
              <ResponsiveContainer width="100%" height={480}>
                <AreaChart data={shareGrowthData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <defs>
                    <linearGradient id="colorShares" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#475569" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#475569" stopOpacity={0.2}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-700" opacity={0.5} />
                  <XAxis
                    dataKey="year"
                    label={{ value: 'Year', position: 'insideBottom', offset: -5 }}
                    className="text-slate-600 dark:text-slate-400"
                    tick={{ fontSize: 13, fontWeight: 500 }}
                    stroke="#94a3b8"
                  />
                  <YAxis
                    yAxisId="left"
                    tickFormatter={(value) => formatNumber(value)}
                    label={{ value: 'Number of Shares', angle: -90, position: 'insideLeft' }}
                    className="text-slate-600 dark:text-slate-400"
                    tick={{ fontSize: 13, fontWeight: 500 }}
                    stroke="#94a3b8"
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    tickFormatter={(value) => `$${value.toFixed(0)}`}
                    label={{ value: 'Share Price', angle: 90, position: 'insideRight' }}
                    className="text-slate-600 dark:text-slate-400"
                    tick={{ fontSize: 13, fontWeight: 500 }}
                    stroke="#94a3b8"
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#0f172a', strokeWidth: 1, strokeDasharray: '4 4', opacity: 0.3 }} />
                  <Legend
                    wrapperStyle={{ paddingTop: '24px' }}
                    iconType="circle"
                    onClick={(e: any) => toggleSeries(e.value)}
                    formatter={(value: string) => (
                      <span
                        className={`cursor-pointer hover:text-slate-900 dark:hover:text-white transition-colors ${
                          hiddenSeries.has(value) ? 'line-through opacity-50' : ''
                        }`}
                      >
                        {value}
                      </span>
                    )}
                  />
                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="shares"
                    name="Total Shares"
                    stroke="#475569"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorShares)"
                    animationDuration={1500}
                    animationEasing="ease-in-out"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="sharePrice"
                    name="Share Price"
                    stroke="#0f172a"
                    strokeWidth={3}
                    dot={{ fill: '#0f172a', r: 4, strokeWidth: 2, stroke: '#fff' }}
                    activeDot={{ r: 6, strokeWidth: 2 }}
                    animationDuration={1500}
                    animationEasing="ease-in-out"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* DRIP Comparison Chart */}
        {comparisonData && (
          <TabsContent value="comparison" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card
              className="overflow-hidden backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-700/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.12)] dark:hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.4)] transition-all duration-500 group"
              onMouseEnter={() => setHoveredChart('comparison')}
              onMouseLeave={() => setHoveredChart(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-transparent to-slate-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl" />
              <CardHeader className="relative pb-6 pt-8 px-8">
                <CardTitle className="flex items-center gap-4 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                  <div className="p-2.5 bg-slate-900 dark:bg-slate-100 rounded-xl shadow-lg">
                    <Activity className="h-5 w-5 text-white dark:text-slate-900" />
                  </div>
                  DRIP vs No DRIP Comparison
                </CardTitle>
                <CardDescription className="text-base text-slate-600 dark:text-slate-400 mt-2 ml-14">
                  See the power of dividend reinvestment over time
                </CardDescription>
              </CardHeader>
              <CardContent className="relative px-8 pb-8">
                <ResponsiveContainer width="100%" height={480}>
                  <LineChart data={comparisonData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <defs>
                      <linearGradient id="dripGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0f172a" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#0f172a" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="noDripGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.15}/>
                        <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-700" opacity={0.5} />
                    <XAxis
                      dataKey="year"
                      label={{ value: 'Year', position: 'insideBottom', offset: -5 }}
                      className="text-slate-600 dark:text-slate-400"
                      tick={{ fontSize: 13, fontWeight: 500 }}
                      stroke="#94a3b8"
                    />
                    <YAxis
                      tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                      label={{ value: 'Portfolio Value', angle: -90, position: 'insideLeft' }}
                      className="text-slate-600 dark:text-slate-400"
                      tick={{ fontSize: 13, fontWeight: 500 }}
                      stroke="#94a3b8"
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#0f172a', strokeWidth: 1, strokeDasharray: '4 4', opacity: 0.3 }} />
                    <Legend
                      wrapperStyle={{ paddingTop: '24px' }}
                      iconType="circle"
                    />
                    <Area
                      type="monotone"
                      dataKey="withDRIP"
                      fill="url(#dripGradient)"
                      stroke="none"
                      animationDuration={1500}
                    />
                    <Area
                      type="monotone"
                      dataKey="withoutDRIP"
                      fill="url(#noDripGradient)"
                      stroke="none"
                      animationDuration={1500}
                    />
                    <Line
                      type="monotone"
                      dataKey="withDRIP"
                      name="With DRIP Enabled"
                      stroke="#0f172a"
                      strokeWidth={3}
                      dot={{ fill: '#0f172a', r: 4, strokeWidth: 2, stroke: '#fff' }}
                      activeDot={{ r: 6, strokeWidth: 2 }}
                      animationDuration={1500}
                      animationEasing="ease-in-out"
                    />
                    <Line
                      type="monotone"
                      dataKey="withoutDRIP"
                      name="Without DRIP"
                      stroke="#64748b"
                      strokeWidth={2}
                      strokeDasharray="6 3"
                      dot={{ fill: '#64748b', r: 3, strokeWidth: 2, stroke: '#fff' }}
                      activeDot={{ r: 5, strokeWidth: 2 }}
                      animationDuration={1500}
                      animationEasing="ease-in-out"
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
})
