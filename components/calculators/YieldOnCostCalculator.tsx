"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { formatCurrency, formatPercent } from '@/lib/utils/calculations'
import { ShareResults } from '@/components/viral/ShareResults'
import { ExternalLink } from 'lucide-react'

export function YieldOnCostCalculator() {
  const [shares, setShares] = useState('500')
  const [purchasePrice, setPurchasePrice] = useState('50')
  const [initialDividend, setInitialDividend] = useState('2.00')
  const [currentPrice, setCurrentPrice] = useState('75')
  const [currentDividend, setCurrentDividend] = useState('3.50')
  const [yearsHeld, setYearsHeld] = useState('10')
  const [results, setResults] = useState<any>(null)

  const calculate = () => {
    const numShares = parseFloat(shares)
    const buyPrice = parseFloat(purchasePrice)
    const initDiv = parseFloat(initialDividend)
    const nowPrice = parseFloat(currentPrice)
    const nowDiv = parseFloat(currentDividend)
    const years = parseInt(yearsHeld)

    // Initial investment
    const initialInvestment = numShares * buyPrice

    // Current values
    const currentValue = numShares * nowPrice
    const annualIncome = numShares * nowDiv

    // Yield on cost
    const yieldOnCost = (annualIncome / initialInvestment) * 100

    // Current yield (market)
    const currentYield = (nowDiv / nowPrice) * 100

    // Initial yield
    const initialYield = (initDiv / buyPrice) * 100

    // Dividend growth rate
    const dividendGrowthRate = (Math.pow(nowDiv / initDiv, 1 / years) - 1) * 100

    // Total return
    const totalReturn = ((currentValue - initialInvestment) / initialInvestment) * 100

    // Total income received (simplified - assumes constant growth)
    let totalIncomeReceived = 0
    for (let y = 0; y < years; y++) {
      const yearDiv = initDiv * Math.pow(1 + (dividendGrowthRate / 100), y)
      totalIncomeReceived += yearDiv * numShares
    }

    setResults({
      initialInvestment,
      currentValue,
      annualIncome,
      yieldOnCost,
      currentYield,
      initialYield,
      dividendGrowthRate,
      totalReturn,
      totalIncomeReceived,
      capitalGain: currentValue - initialInvestment
    })
  }

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <Label className="text-slate-700 dark:text-slate-300 font-semibold uppercase tracking-wide text-sm">
            Shares Owned
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
            Purchase Price/Share
          </Label>
          <Input
            type="number"
            step="0.01"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
            className="mt-2 text-lg font-semibold tabular-nums"
          />
        </div>

        <div>
          <Label className="text-slate-700 dark:text-slate-300 font-semibold uppercase tracking-wide text-sm">
            Initial Dividend/Share
          </Label>
          <Input
            type="number"
            step="0.01"
            value={initialDividend}
            onChange={(e) => setInitialDividend(e.target.value)}
            className="mt-2 text-lg font-semibold tabular-nums"
          />
        </div>

        <div>
          <Label className="text-slate-700 dark:text-slate-300 font-semibold uppercase tracking-wide text-sm">
            Current Price/Share
          </Label>
          <Input
            type="number"
            step="0.01"
            value={currentPrice}
            onChange={(e) => setCurrentPrice(e.target.value)}
            className="mt-2 text-lg font-semibold tabular-nums"
          />
        </div>

        <div>
          <Label className="text-slate-700 dark:text-slate-300 font-semibold uppercase tracking-wide text-sm">
            Current Dividend/Share
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
            Years Held
          </Label>
          <Input
            type="number"
            value={yearsHeld}
            onChange={(e) => setYearsHeld(e.target.value)}
            className="mt-2 text-lg font-semibold tabular-nums"
          />
        </div>
      </div>

      <Button
        onClick={calculate}
        className="w-full py-6 text-lg font-bold bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 shadow-lg hover:shadow-xl transition-all"
      >
        Calculate Yield on Cost
      </Button>

      {/* Results */}
      {results && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Hero Metric */}
          <Card className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white border-0 shadow-xl">
            <div className="text-center">
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Yield on Cost
              </div>
              <div className="text-6xl font-black mb-1 tabular-nums">
                {results.yieldOnCost.toFixed(2)}%
              </div>
              <div className="text-slate-300">
                vs {results.currentYield.toFixed(2)}% current market yield
              </div>
            </div>
          </Card>

          {/* Comparison */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Initial Yield
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white tabular-nums">
                {results.initialYield.toFixed(2)}%
              </div>
            </Card>

            <Card className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Yield on Cost
              </div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 tabular-nums">
                {results.yieldOnCost.toFixed(2)}%
              </div>
            </Card>

            <Card className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Dividend Growth Rate
              </div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 tabular-nums">
                {results.dividendGrowthRate.toFixed(2)}%
              </div>
            </Card>
          </div>

          {/* Income & Value */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Annual Dividend Income
              </div>
              <div className="text-4xl font-bold text-slate-900 dark:text-white tabular-nums">
                {formatCurrency(results.annualIncome)}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                {formatCurrency(results.annualIncome / 12)}/month
              </div>
            </Card>

            <Card className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Current Value
              </div>
              <div className="text-4xl font-bold text-slate-900 dark:text-white tabular-nums">
                {formatCurrency(results.currentValue)}
              </div>
              <div className="text-sm text-green-600 dark:text-green-400 mt-1">
                +{formatCurrency(results.capitalGain)} ({results.totalReturn.toFixed(1)}%)
              </div>
            </Card>
          </div>

          {/* Total Income */}
          <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800">
            <div className="text-center">
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                Total Dividends Received (Past {yearsHeld} Years)
              </div>
              <div className="text-4xl font-black text-slate-900 dark:text-white tabular-nums">
                {formatCurrency(results.totalIncomeReceived)}
              </div>
            </div>
          </Card>

          {/* Share Results */}
          <div className="mt-8">
            <ShareResults
              results={{
                finalPortfolioValue: results.currentValue,
                finalDividendIncome: results.annualIncome,
                totalDividendsReceived: results.totalIncomeReceived,
                totalContributions: results.initialInvestment,
                yearsCalculated: parseInt(yearsHeld),
                gainFromDividends: results.totalIncomeReceived
              }}
            />
          </div>

          {/* Inline Broker CTA */}
          <Card className="mt-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-2 border-orange-200 dark:border-orange-800">
            <div className="p-8 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-3">
                Impressive {results.yieldOnCost.toFixed(2)}% Yield on Cost!
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-2">
                Generate <span className="font-bold text-orange-600 dark:text-orange-400">{formatCurrency(results.annualIncome)}/year</span> from your {formatCurrency(results.initialInvestment)} investment
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-500 mb-6">
                Total return: <span className="font-semibold text-green-600">{results.totalReturn.toFixed(1)}%</span> over {yearsHeld} years
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all"
                onClick={() => {
                  const brokersSection = document.getElementById('brokers')
                  if (brokersSection) {
                    brokersSection.scrollIntoView({ behavior: 'smooth' })
                  }
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'cta_click', {
                      source: 'calculator_results',
                      calculator: 'yield_on_cost',
                      yoc: results.yieldOnCost
                    })
                  }
                }}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Start Building Your Dividend Portfolio
              </Button>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
                Find stocks with growing dividends
              </p>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
