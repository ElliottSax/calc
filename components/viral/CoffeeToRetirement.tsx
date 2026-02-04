"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Coffee, DollarSign, TrendingUp, Zap, Share2, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { ShareResults } from './ShareResults'
import { formatCurrency, formatNumber } from '@/lib/utils/calculations'

interface CoffeeCalculation {
  dailyAmount: number
  monthlyAmount: number
  yearlyAmount: number
  retirementValue: number
  dividendIncome: number
  opportunityCost: number
}

export function CoffeeToRetirement() {
  const [dailySpend, setDailySpend] = useState(5)
  const [years, setYears] = useState(30)
  const [returnRate, setReturnRate] = useState(8)
  const [showResults, setShowResults] = useState(false)

  const calculation = calculateCoffeeImpact(dailySpend, years, returnRate)

  const handleCalculate = () => {
    setShowResults(true)

    // Track viral calculator usage
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'coffee_calculator_used', {
        daily_spend: dailySpend,
        years: years,
        opportunity_cost: calculation.opportunityCost
      })
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-3">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="inline-block"
        >
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl">
            <Coffee className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
          The $1 Million Coffee
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          See how your daily habits could be costing you a fortune in retirement
        </p>
      </div>

      {/* Calculator Card */}
      <Card className="backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-2 border-orange-200/60 dark:border-orange-700/60 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Zap className="w-6 h-6 text-orange-600" />
            Calculate Your Opportunity Cost
          </CardTitle>
          <CardDescription className="text-base">
            Small daily expenses add up to shocking amounts over time
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8 pt-6">
          {/* Input: Daily Spend */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="daily-spend" className="text-lg font-semibold">
                Daily Spend
              </Label>
              <div className="text-3xl font-bold text-orange-600">
                ${dailySpend.toFixed(2)}
              </div>
            </div>
            <Slider
              id="daily-spend"
              min={1}
              max={20}
              step={0.50}
              value={[dailySpend]}
              onValueChange={(value) => setDailySpend(value[0])}
              className="py-4"
            />
            <div className="flex justify-between text-sm text-slate-500">
              <span>$1 (Cheap coffee)</span>
              <span>$20 (Daily splurge)</span>
            </div>
          </div>

          {/* Input: Time Horizon */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="years" className="text-lg font-semibold">
                Time to Retirement
              </Label>
              <div className="text-3xl font-bold text-blue-600">
                {years} years
              </div>
            </div>
            <Slider
              id="years"
              min={5}
              max={40}
              step={5}
              value={[years]}
              onValueChange={(value) => setYears(value[0])}
              className="py-4"
            />
            <div className="flex justify-between text-sm text-slate-500">
              <span>5 years</span>
              <span>40 years</span>
            </div>
          </div>

          {/* Input: Return Rate */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="return" className="text-lg font-semibold">
                Annual Return
              </Label>
              <div className="text-3xl font-bold text-green-600">
                {returnRate}%
              </div>
            </div>
            <Slider
              id="return"
              min={4}
              max={12}
              step={0.5}
              value={[returnRate]}
              onValueChange={(value) => setReturnRate(value[0])}
              className="py-4"
            />
            <div className="flex justify-between text-sm text-slate-500">
              <span>4% (Conservative)</span>
              <span>12% (Aggressive)</span>
            </div>
          </div>

          {/* Calculate Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={handleCalculate}
              size="lg"
              className="w-full text-lg py-7 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <AlertCircle className="w-5 h-5 mr-2" />
              Show Me The Damage
            </Button>
          </motion.div>
        </CardContent>
      </Card>

      {/* Results */}
      {showResults && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Shock Value Banner */}
          <Card className="overflow-hidden bg-gradient-to-br from-red-600 via-orange-600 to-yellow-500 text-white border-0 shadow-2xl">
            <CardContent className="p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
              >
                <p className="text-lg font-medium mb-2 opacity-90">
                  You could be missing out on...
                </p>
                <div className="text-6xl md:text-7xl font-black mb-4">
                  {formatCurrency(calculation.opportunityCost)}
                </div>
                <p className="text-xl opacity-90">
                  ...in retirement wealth! 😱
                </p>
              </motion.div>
            </CardContent>
          </Card>

          {/* Detailed Breakdown */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 border-2 border-orange-300 dark:border-orange-700">
                <CardContent className="p-6 text-center">
                  <Coffee className="w-12 h-12 mx-auto mb-3 text-orange-600" />
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    Daily Spend
                  </p>
                  <p className="text-3xl font-bold text-orange-600">
                    ${dailySpend.toFixed(2)}
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    = ${calculation.monthlyAmount}/month
                  </p>
                  <p className="text-xs text-slate-500">
                    = ${calculation.yearlyAmount}/year
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-300 dark:border-blue-700">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    If Invested
                  </p>
                  <p className="text-3xl font-bold text-blue-600">
                    {formatCurrency(calculation.retirementValue)}
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    Portfolio value in {years} years
                  </p>
                  <p className="text-xs text-slate-500">
                    at {returnRate}% annual return
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-300 dark:border-green-700">
                <CardContent className="p-6 text-center">
                  <DollarSign className="w-12 h-12 mx-auto mb-3 text-green-600" />
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    Passive Income
                  </p>
                  <p className="text-3xl font-bold text-green-600">
                    {formatCurrency(calculation.dividendIncome)}
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    Annual dividend income
                  </p>
                  <p className="text-xs text-slate-500">
                    = ${(calculation.dividendIncome / 12).toFixed(0)}/month
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Comparison Visual */}
          <Card>
            <CardHeader>
              <CardTitle>The Real Cost</CardTitle>
              <CardDescription>
                What you spend vs. what you could have
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="font-medium">Total Spent (${dailySpend}/day × {years} years)</span>
                    <span className="font-bold text-orange-600">
                      ${formatNumber(calculation.yearlyAmount * years)}
                    </span>
                  </div>
                  <div className="h-8 bg-orange-200 dark:bg-orange-900 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="h-full bg-gradient-to-r from-orange-500 to-red-500"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="font-medium">Potential Value (if invested)</span>
                    <span className="font-bold text-green-600">
                      {formatCurrency(calculation.retirementValue)}
                    </span>
                  </div>
                  <div className="h-8 bg-green-200 dark:bg-green-900 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${Math.min(100, (calculation.retirementValue / (calculation.yearlyAmount * years) * 100) / 3)}%`
                      }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <p className="text-center text-sm text-slate-600 dark:text-slate-400">
                  <span className="font-bold text-red-600">
                    {((calculation.retirementValue / (calculation.yearlyAmount * years) - 1) * 100).toFixed(0)}% more wealth
                  </span>
                  {' '}if you invested instead of spending!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Share Results */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2 border-blue-300 dark:border-blue-700">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-3">
                This result is too shocking not to share!
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Help your friends avoid this expensive mistake
              </p>
              <ShareResults
                results={{
                  finalPortfolioValue: calculation.retirementValue,
                  finalDividendIncome: calculation.dividendIncome,
                  totalDividendsEarned: calculation.dividendIncome * years,
                  totalReturn: returnRate,
                  yearsCalculated: years,
                  initialInvestment: 0,
                  monthlyContribution: calculation.monthlyAmount
                }}
              />
            </CardContent>
          </Card>

          {/* Inline Broker CTA */}
          <InlineBrokerCTA
            variant="featured"
            finalPortfolioValue={calculation.retirementValue}
            finalDividendIncome={calculation.dividendIncome}
            calculatorType="coffee-millionaire"
            className="mt-6"
          />

          {/* Call to Action */}
          <Card className="bg-gradient-to-br from-slate-900 to-blue-900 text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">
                Ready to Turn Your Habits Into Wealth?
              </h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Use our full DRIP calculator to plan your exact path to financial freedom
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Calculate My Dividend Plan
                <TrendingUp className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}

/**
 * Calculate the opportunity cost of daily spending
 */
function calculateCoffeeImpact(
  dailySpend: number,
  years: number,
  annualReturn: number
): CoffeeCalculation {
  const monthlyAmount = dailySpend * 365 / 12
  const yearlyAmount = dailySpend * 365
  const monthlyReturn = annualReturn / 100 / 12
  const months = years * 12

  // Future value of monthly contributions
  const retirementValue =
    monthlyAmount *
    ((Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn)

  // Assume 3% dividend yield for income calculation
  const dividendIncome = retirementValue * 0.03

  // Opportunity cost = what you could have vs what you spent
  const opportunityCost = retirementValue - (yearlyAmount * years)

  return {
    dailyAmount: dailySpend,
    monthlyAmount: Math.round(monthlyAmount),
    yearlyAmount: Math.round(yearlyAmount),
    retirementValue: Math.round(retirementValue),
    dividendIncome: Math.round(dividendIncome),
    opportunityCost: Math.round(opportunityCost)
  }
}
