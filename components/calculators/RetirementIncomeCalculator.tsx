"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { formatCurrency } from '@/lib/utils/calculations'
import { ShareResults } from '@/components/viral/ShareResults'
import { ExternalLink } from 'lucide-react'

export function RetirementIncomeCalculator() {
  const [portfolioValue, setPortfolioValue] = useState('500000')
  const [targetIncome, setTargetIncome] = useState('40000')
  const [dividendYield, setDividendYield] = useState('4')
  const [yearsToRetirement, setYearsToRetirement] = useState('15')
  const [results, setResults] = useState<any>(null)

  const calculate = () => {
    const portfolio = parseFloat(portfolioValue)
    const target = parseFloat(targetIncome)
    const yieldPct = parseFloat(dividendYield) / 100
    const years = parseInt(yearsToRetirement)

    // Calculate required portfolio for target income
    const requiredPortfolio = target / yieldPct

    // Current annual income
    const currentIncome = portfolio * yieldPct

    // Monthly income at retirement
    const monthlyIncome = (requiredPortfolio * yieldPct) / 12

    // Gap to fill
    const gap = requiredPortfolio - portfolio

    // Required monthly contribution (assuming 7% growth)
    const monthlyReturn = 0.07 / 12
    const months = years * 12
    const requiredMonthly = gap / (((Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn))

    setResults({
      requiredPortfolio,
      currentIncome,
      monthlyIncome,
      gap,
      requiredMonthly,
      shortfall: gap > 0
    })
  }

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label className="text-slate-700 dark:text-slate-300 font-semibold uppercase tracking-wide text-sm">
            Current Portfolio Value
          </Label>
          <Input
            type="number"
            value={portfolioValue}
            onChange={(e) => setPortfolioValue(e.target.value)}
            className="mt-2 text-lg font-semibold tabular-nums"
          />
        </div>

        <div>
          <Label className="text-slate-700 dark:text-slate-300 font-semibold uppercase tracking-wide text-sm">
            Target Annual Income
          </Label>
          <Input
            type="number"
            value={targetIncome}
            onChange={(e) => setTargetIncome(e.target.value)}
            className="mt-2 text-lg font-semibold tabular-nums"
          />
        </div>

        <div>
          <Label className="text-slate-700 dark:text-slate-300 font-semibold uppercase tracking-wide text-sm">
            Expected Dividend Yield (%)
          </Label>
          <Input
            type="number"
            value={dividendYield}
            onChange={(e) => setDividendYield(e.target.value)}
            className="mt-2 text-lg font-semibold tabular-nums"
          />
        </div>

        <div>
          <Label className="text-slate-700 dark:text-slate-300 font-semibold uppercase tracking-wide text-sm">
            Years to Retirement
          </Label>
          <Input
            type="number"
            value={yearsToRetirement}
            onChange={(e) => setYearsToRetirement(e.target.value)}
            className="mt-2 text-lg font-semibold tabular-nums"
          />
        </div>
      </div>

      <Button
        onClick={calculate}
        className="w-full py-6 text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all"
      >
        Calculate Retirement Plan
      </Button>

      {/* Results */}
      {results && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Hero Metric */}
          <Card className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white border-0 shadow-xl">
            <div className="text-center">
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Required Portfolio
              </div>
              <div className="text-5xl font-black mb-1 tabular-nums">
                {formatCurrency(results.requiredPortfolio)}
              </div>
              <div className="text-slate-300">
                To generate {formatCurrency(parseFloat(targetIncome))}/year
              </div>
            </div>
          </Card>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Current Annual Income
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white tabular-nums">
                {formatCurrency(results.currentIncome)}
              </div>
            </Card>

            <Card className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Monthly Income at Retirement
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white tabular-nums">
                {formatCurrency(results.monthlyIncome)}
              </div>
            </Card>

            <Card className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                {results.shortfall ? 'Gap to Fill' : 'Surplus'}
              </div>
              <div className={`text-3xl font-bold tabular-nums ${results.shortfall ? 'text-orange-600' : 'text-green-600'}`}>
                {formatCurrency(Math.abs(results.gap))}
              </div>
            </Card>

            <Card className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Required Monthly Savings
              </div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 tabular-nums">
                {results.shortfall ? formatCurrency(results.requiredMonthly) : '$0'}
              </div>
            </Card>
          </div>

          {/* Share Results */}
          <div className="mt-8">
            <ShareResults
              calculatorType="retirement"
              results={{
                finalPortfolioValue: results.requiredPortfolio,
                finalDividendIncome: results.annualIncome,
                totalDividendsEarned: results.totalIncomeReceived || 0,
                totalReturn: ((results.requiredPortfolio - parseFloat(portfolioValue)) / parseFloat(portfolioValue)) * 100,
                yearsCalculated: parseInt(yearsToRetirement),
                initialInvestment: parseFloat(portfolioValue),
                monthlyContribution: results.shortfall ? results.requiredMonthly : 0
              }}
            />
          </div>

          {/* Inline Broker CTA */}
          <Card className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-200 dark:border-green-800">
            <div className="p-8 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-3">
                Ready to Make This Real?
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-2">
                Start building your <span className="font-bold text-green-600 dark:text-green-400">{formatCurrency(results.requiredPortfolio)}</span> retirement portfolio today
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-500 mb-6">
                Generate <span className="font-semibold">{formatCurrency(results.annualIncome)}/year</span> in passive dividend income
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all"
                onClick={() => {
                  const brokersSection = document.getElementById('brokers')
                  if (brokersSection) {
                    brokersSection.scrollIntoView({ behavior: 'smooth' })
                  }
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'cta_click', {
                      source: 'calculator_results',
                      calculator: 'retirement_income',
                      portfolio_target: results.requiredPortfolio
                    })
                  }
                }}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                See Best Brokers for Dividend Investing
              </Button>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
                Compare fees, features, and bonuses
              </p>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
