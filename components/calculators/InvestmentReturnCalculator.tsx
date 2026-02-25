'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { TrendingUp, DollarSign, Percent, Calendar, Info } from 'lucide-react'
import { InlineBrokerCTA } from '@/components/affiliate/InlineBrokerCTA'

export function InvestmentReturnCalculator() {
  const [initialInvestment, setInitialInvestment] = useState<string>('10000')
  const [finalValue, setFinalValue] = useState<string>('15000')
  const [years, setYears] = useState<string>('5')
  const [result, setResult] = useState<{
    totalReturn: number
    totalReturnPercent: number
    annualizedReturn: number
    profitLoss: number
  } | null>(null)

  const calculateReturn = () => {
    const initial = parseFloat(initialInvestment) || 0
    const final = parseFloat(finalValue) || 0
    const period = parseFloat(years) || 1

    if (initial <= 0 || period <= 0) return

    const profitLoss = final - initial
    const totalReturn = ((final - initial) / initial) * 100
    const annualizedReturn = (Math.pow(final / initial, 1 / period) - 1) * 100

    setResult({
      totalReturn: final,
      totalReturnPercent: totalReturn,
      annualizedReturn,
      profitLoss
    })
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
  }

  const formatPercent = (value: number) => {
    return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            Investment Return Calculator
          </CardTitle>
          <CardDescription>
            Calculate total return, annualized return, and profit/loss on your investments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="initialInvestment" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Initial Investment
              </Label>
              <Input
                id="initialInvestment"
                type="number"
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="finalValue">Final Value</Label>
              <Input
                id="finalValue"
                type="number"
                value={finalValue}
                onChange={(e) => setFinalValue(e.target.value)}
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <Label htmlFor="years" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Investment Period (Years)
              </Label>
              <Input
                id="years"
                type="number"
                step="0.1"
                value={years}
                onChange={(e) => setYears(e.target.value)}
              />
            </div>

            <div className="md:col-span-2">
              <Button onClick={calculateReturn} className="w-full" size="lg">
                Calculate Returns
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {result && (
        <>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className={`bg-gradient-to-br ${result.profitLoss >= 0 ? 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20' : 'from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20'}`}>
              <CardHeader>
                <CardDescription>Profit/Loss</CardDescription>
                <CardTitle className={`text-3xl ${result.profitLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatCurrency(result.profitLoss)}
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
              <CardHeader>
                <CardDescription>Total Return</CardDescription>
                <CardTitle className="text-3xl text-blue-600">
                  {formatPercent(result.totalReturnPercent)}
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
              <CardHeader>
                <CardDescription>Annualized Return</CardDescription>
                <CardTitle className="text-3xl text-purple-600">
                  {formatPercent(result.annualizedReturn)}
                </CardTitle>
              </CardHeader>
            </Card>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-900/20 border-blue-500">
            <Info className="h-4 w-4 text-blue-600" />
            <AlertDescription>
              <strong>Annualized Return</strong> shows your average yearly return, accounting for compounding.
              This is the standard metric for comparing investments over different time periods.
            </AlertDescription>
          </Alert>

          <div className="mt-8">
            <InlineBrokerCTA variant="featured" calculatorType="investment-return" />
          </div>
        </>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Understanding Investment Returns</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <h3>Total Return vs Annualized Return</h3>
          <p>
            <strong>Total Return</strong> is the overall percentage gain or loss on your investment.
            <strong> Annualized Return</strong> converts that into an average yearly rate, making it easier to compare
            investments of different durations.
          </p>

          <h3>Benchmark Returns to Compare</h3>
          <ul>
            <li><strong>S&P 500:</strong> ~10% annualized (historical average)</li>
            <li><strong>Bonds:</strong> ~4-6% annualized</li>
            <li><strong>Real Estate:</strong> ~8-12% annualized</li>
            <li><strong>Inflation:</strong> ~2-3% annualized (need to beat this!)</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
