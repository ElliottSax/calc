"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { formatCurrency } from '@/lib/utils/calculations'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ShareResults } from '@/components/viral/ShareResults'
import { ExternalLink } from 'lucide-react'

export function DividendGrowthCalculator() {
  const [shares, setShares] = useState('1000')
  const [currentDividend, setCurrentDividend] = useState('2.50')
  const [growthRate, setGrowthRate] = useState('7')
  const [years, setYears] = useState('20')
  const [results, setResults] = useState<any>(null)

  // Pre-fill inputs from URL parameters (viral sharing)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)

      const sharesParam = params.get('shares')
      const dividend = params.get('dividend')
      const growth = params.get('growth')
      const yearsParam = params.get('years')

      // Only pre-fill if at least one parameter is present
      if (sharesParam || dividend || growth || yearsParam) {
        if (sharesParam) setShares(sharesParam)
        if (dividend) setCurrentDividend(dividend)
        if (growth) setGrowthRate(growth)
        if (yearsParam) setYears(yearsParam)

        // Track pre-filled visits
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'calculator_prefill', {
            calculator: 'growth',
            source: 'shared_link'
          })
        }
      }
    }
  }, [])

  const calculate = () => {
    const numShares = parseFloat(shares)
    const dividend = parseFloat(currentDividend)
    const growth = parseFloat(growthRate) / 100
    const numYears = parseInt(years)

    const yearData = []
    let currentYear = new Date().getFullYear()

    for (let year = 0; year <= numYears; year++) {
      const annualDividend = dividend * Math.pow(1 + growth, year)
      const totalIncome = annualDividend * numShares

      yearData.push({
        year: currentYear + year,
        dividend: annualDividend,
        totalIncome: totalIncome
      })
    }

    const finalDividend = yearData[yearData.length - 1].dividend
    const finalIncome = yearData[yearData.length - 1].totalIncome
    const totalReceived = yearData.reduce((sum, y) => sum + y.totalIncome, 0)

    setResults({
      yearData,
      finalDividend,
      finalIncome,
      totalReceived,
      percentIncrease: ((finalDividend - dividend) / dividend) * 100
    })
  }

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label className="text-slate-700 dark:text-slate-300 font-semibold uppercase tracking-wide text-sm">
            Number of Shares
          </Label>
          <Input
            type="number"
            value={shares}
            onChange={(e) => setShares(e.target.value)}
            className="mt-2 text-lg font-semibold tabular-nums"
          />
        </div>

        <div>
          <Label className="text-slate-700 dark:text-slate-300 font-semibold uppercase tracking-wide text-sm">
            Current Dividend per Share
          </Label>
          <Input
            type="number"
            step="0.01"
            value={currentDividend}
            onChange={(e) => setCurrentDividend(e.target.value)}
            className="mt-2 text-lg font-semibold tabular-nums"
          />
        </div>

        <div>
          <Label className="text-slate-700 dark:text-slate-300 font-semibold uppercase tracking-wide text-sm">
            Annual Growth Rate (%)
          </Label>
          <Input
            type="number"
            step="0.1"
            value={growthRate}
            onChange={(e) => setGrowthRate(e.target.value)}
            className="mt-2 text-lg font-semibold tabular-nums"
          />
        </div>

        <div>
          <Label className="text-slate-700 dark:text-slate-300 font-semibold uppercase tracking-wide text-sm">
            Years to Project
          </Label>
          <Input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="mt-2 text-lg font-semibold tabular-nums"
          />
        </div>
      </div>

      <Button
        onClick={calculate}
        className="w-full py-6 text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all"
      >
        Project Dividend Growth
      </Button>

      {/* Results */}
      {results && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Hero Metric */}
          <Card className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white border-0 shadow-xl">
            <div className="text-center">
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Final Annual Income (Year {years})
              </div>
              <div className="text-5xl font-black mb-1 tabular-nums">
                {formatCurrency(results.finalIncome)}
              </div>
              <div className="text-slate-300">
                Dividend grew {results.percentIncrease.toFixed(1)}% ({formatCurrency(parseFloat(currentDividend))} → {formatCurrency(results.finalDividend)}/share)
              </div>
            </div>
          </Card>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Starting Income
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white tabular-nums">
                {formatCurrency(parseFloat(currentDividend) * parseFloat(shares))}
              </div>
            </Card>

            <Card className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Ending Income
              </div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 tabular-nums">
                {formatCurrency(results.finalIncome)}
              </div>
            </Card>

            <Card className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Total Dividends Received
              </div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 tabular-nums">
                {formatCurrency(results.totalReceived)}
              </div>
            </Card>
          </div>

          {/* Chart */}
          <Card className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              Annual Dividend Income Growth
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={results.yearData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                <XAxis
                  dataKey="year"
                  stroke="#64748b"
                  style={{ fontSize: '13px', fontWeight: 500 }}
                />
                <YAxis
                  stroke="#64748b"
                  style={{ fontSize: '13px', fontWeight: 500 }}
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                  formatter={(value: any) => [formatCurrency(value), 'Annual Income']}
                />
                <Line
                  type="monotone"
                  dataKey="totalIncome"
                  stroke="#8b5cf6"
                  strokeWidth={3}
                  dot={{ fill: '#a78bfa', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Share Results */}
          <div className="mt-8">
            <ShareResults
              calculatorType="growth"
              results={{
                finalPortfolioValue: parseFloat(shares) * parseFloat(currentDividend) * parseFloat(years),
                finalDividendIncome: results.finalIncome,
                totalDividendsEarned: results.totalReceived,
                totalReturn: results.percentIncrease,
                yearsCalculated: parseInt(years),
                initialInvestment: parseFloat(shares) * parseFloat(currentDividend),
                monthlyContribution: 0
              }}
              additionalParams={{
                shares: shares,
                dividend: currentDividend,
                growth: growthRate
              }}
            />
          </div>

          {/* Inline Broker CTA */}
          <Card className="mt-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-2 border-purple-200 dark:border-purple-800">
            <div className="p-8 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-3">
                Love These Growth Projections?
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-2">
                Start building a portfolio that grows to <span className="font-bold text-purple-600 dark:text-purple-400">{formatCurrency(results.finalIncome)}/year</span>
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-500 mb-6">
                Total dividends over {years} years: <span className="font-semibold">{formatCurrency(results.totalReceived)}</span>
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all"
                onClick={() => {
                  const brokersSection = document.getElementById('brokers')
                  if (brokersSection) {
                    brokersSection.scrollIntoView({ behavior: 'smooth' })
                  }
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'cta_click', {
                      source: 'calculator_results',
                      calculator: 'dividend_growth',
                      income_projection: results.finalIncome
                    })
                  }
                }}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Find the Best Dividend Growth Stocks
              </Button>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
                Open an account and start investing today
              </p>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
