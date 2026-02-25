'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Progress } from '@/components/ui/progress'
import { DollarSign, Target, TrendingUp, Calendar, Info, Sparkles } from 'lucide-react'
import { InlineBrokerCTA } from '@/components/affiliate/InlineBrokerCTA'

interface SavingsResult {
  monthsToGoal: number
  yearsToGoal: number
  requiredMonthly: number
  totalSaved: number
  interestEarned: number
  goalMet: boolean
  monthlyBreakdown: {
    month: number
    contribution: number
    interest: number
    balance: number
  }[]
}

export function SavingsCalculator() {
  const [savingsGoal, setSavingsGoal] = useState<string>('50000')
  const [currentSavings, setCurrentSavings] = useState<string>('5000')
  const [monthlyContribution, setMonthlyContribution] = useState<string>('500')
  const [annualReturn, setAnnualReturn] = useState<string>('4')
  const [timeframe, setTimeframe] = useState<number>(60) // months
  const [result, setResult] = useState<SavingsResult | null>(null)

  const calculateSavings = () => {
    const goal = parseFloat(savingsGoal) || 0
    const current = parseFloat(currentSavings) || 0
    const monthly = parseFloat(monthlyContribution) || 0
    const rate = (parseFloat(annualReturn) || 0) / 100 / 12 // Monthly rate
    const months = timeframe

    if (goal <= 0 || monthly < 0 || current < 0) {
      return
    }

    const monthlyBreakdown: SavingsResult['monthlyBreakdown'] = []
    let balance = current
    let totalInterest = 0
    let monthsToReachGoal = 0
    let goalReached = false

    for (let month = 1; month <= months; month++) {
      // Add monthly contribution
      balance += monthly

      // Calculate interest
      const monthlyInterest = balance * rate
      balance += monthlyInterest
      totalInterest += monthlyInterest

      monthlyBreakdown.push({
        month,
        contribution: monthly,
        interest: monthlyInterest,
        balance
      })

      // Check if goal reached
      if (!goalReached && balance >= goal) {
        monthsToReachGoal = month
        goalReached = true
      }
    }

    // Calculate required monthly to reach goal if not reached
    let requiredMonthly = monthly
    if (!goalReached) {
      // Use future value of annuity formula to find required payment
      // FV = PV(1+r)^n + PMT * [(1+r)^n - 1] / r
      // Solve for PMT = [FV - PV(1+r)^n] * r / [(1+r)^n - 1]
      const futureValueCurrent = current * Math.pow(1 + rate, months)
      const numerator = (goal - futureValueCurrent) * rate
      const denominator = Math.pow(1 + rate, months) - 1
      requiredMonthly = denominator > 0 ? numerator / denominator : 0
    }

    setResult({
      monthsToGoal: monthsToReachGoal || months,
      yearsToGoal: (monthsToReachGoal || months) / 12,
      requiredMonthly: requiredMonthly,
      totalSaved: balance,
      interestEarned: totalInterest,
      goalMet: goalReached,
      monthlyBreakdown
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

  const progressPercent = result
    ? Math.min((result.totalSaved / parseFloat(savingsGoal)) * 100, 100)
    : 0

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-6 w-6 text-blue-600" />
            Savings Goal Calculator
          </CardTitle>
          <CardDescription>
            Calculate how long it will take to reach your savings goal with regular contributions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Savings Goal */}
            <div className="space-y-2">
              <Label htmlFor="savingsGoal" className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Savings Goal
              </Label>
              <Input
                id="savingsGoal"
                type="number"
                value={savingsGoal}
                onChange={(e) => setSavingsGoal(e.target.value)}
                placeholder="50000"
              />
            </div>

            {/* Current Savings */}
            <div className="space-y-2">
              <Label htmlFor="currentSavings" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Current Savings
              </Label>
              <Input
                id="currentSavings"
                type="number"
                value={currentSavings}
                onChange={(e) => setCurrentSavings(e.target.value)}
                placeholder="5000"
              />
            </div>

            {/* Monthly Contribution */}
            <div className="space-y-2">
              <Label htmlFor="monthlyContribution" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Monthly Contribution
              </Label>
              <Input
                id="monthlyContribution"
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(e.target.value)}
                placeholder="500"
              />
            </div>

            {/* Annual Return */}
            <div className="space-y-2">
              <Label htmlFor="annualReturn" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Expected Annual Return (%)
              </Label>
              <Input
                id="annualReturn"
                type="number"
                step="0.1"
                value={annualReturn}
                onChange={(e) => setAnnualReturn(e.target.value)}
                placeholder="4"
              />
            </div>

            {/* Timeframe */}
            <div className="md:col-span-2 space-y-4">
              <Label htmlFor="timeframe">Timeframe: {Math.floor(timeframe / 12)} years {timeframe % 12} months</Label>
              <Slider
                id="timeframe"
                min={6}
                max={360}
                step={6}
                value={[timeframe]}
                onValueChange={(value) => setTimeframe(value[0])}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>6 months</span>
                <span>15 years</span>
                <span>30 years</span>
              </div>
            </div>

            {/* Calculate Button */}
            <div className="md:col-span-2">
              <Button onClick={calculateSavings} className="w-full" size="lg">
                Calculate Savings Plan
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {result && (
        <>
          {/* Goal Progress */}
          <Card className={result.goalMet ? 'border-green-500' : 'border-orange-500'}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Goal Progress</span>
                <span className={result.goalMet ? 'text-green-600' : 'text-orange-600'}>
                  {progressPercent.toFixed(0)}%
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress value={progressPercent} className="h-4" />

              {result.goalMet ? (
                <Alert className="bg-green-50 dark:bg-green-900/20 border-green-500">
                  <Info className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800 dark:text-green-200">
                    <strong>Congratulations!</strong> You'll reach your goal of {formatCurrency(parseFloat(savingsGoal))} in{' '}
                    <strong>{result.yearsToGoal.toFixed(1)} years</strong> ({result.monthsToGoal} months)
                    with your current savings plan.
                  </AlertDescription>
                </Alert>
              ) : (
                <Alert className="bg-orange-50 dark:bg-orange-900/20 border-orange-500">
                  <Info className="h-4 w-4 text-orange-600" />
                  <AlertDescription className="text-orange-800 dark:text-orange-200">
                    At your current contribution of {formatCurrency(parseFloat(monthlyContribution))}/month,
                    you'll save {formatCurrency(result.totalSaved)} in {timeframe / 12} years.
                    To reach your goal, increase to <strong>{formatCurrency(result.requiredMonthly)}/month</strong>.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
              <CardHeader>
                <CardDescription>Total Saved</CardDescription>
                <CardTitle className="text-3xl text-blue-600">
                  {formatCurrency(result.totalSaved)}
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
              <CardHeader>
                <CardDescription>Interest Earned</CardDescription>
                <CardTitle className="text-3xl text-green-600">
                  {formatCurrency(result.interestEarned)}
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
              <CardHeader>
                <CardDescription>Time to Goal</CardDescription>
                <CardTitle className="text-3xl text-purple-600">
                  {result.yearsToGoal.toFixed(1)} yrs
                </CardTitle>
              </CardHeader>
            </Card>
          </div>

          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle>Personalized Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {!result.goalMet && (
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Increase your monthly contribution to {formatCurrency(result.requiredMonthly)}</strong>
                    {' '}to reach your goal in {timeframe / 12} years.
                  </AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <h3 className="font-semibold">Ways to Accelerate Your Savings:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                  <li>Set up automatic transfers on payday</li>
                  <li>Use a high-yield savings account (4-5% APY)</li>
                  <li>Cut one subscription and redirect to savings</li>
                  <li>Save windfalls (bonuses, tax refunds, gifts)</li>
                  <li>Review and reduce monthly expenses by 10%</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Best Accounts for Your Savings Goal:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                  <li><strong>Emergency Fund (0-2 years):</strong> High-yield savings (4-5% APY)</li>
                  <li><strong>Short-term (2-5 years):</strong> CDs or Treasury bonds (4-5%)</li>
                  <li><strong>Medium-term (5-10 years):</strong> Balanced portfolio (5-7%)</li>
                  <li><strong>Long-term (10+ years):</strong> Index funds (7-10%)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Broker CTA */}
          <div className="mt-8">
            <InlineBrokerCTA
              variant="featured"
              calculatorType="savings"
            />
          </div>
        </>
      )}

      {/* Educational Content */}
      <Card>
        <CardHeader>
          <CardTitle>Savings Calculator Guide</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <h3>How to Use This Savings Calculator</h3>
          <p>
            This calculator helps you determine if your current savings plan will reach your goal,
            or calculates how much you need to save monthly to achieve your target.
          </p>

          <h3>Setting Realistic Savings Goals</h3>
          <p>
            <strong>SMART goals</strong> work best:
          </p>
          <ul>
            <li><strong>Specific:</strong> "Save $50,000 for a down payment"</li>
            <li><strong>Measurable:</strong> Track progress monthly</li>
            <li><strong>Achievable:</strong> Based on your income and expenses</li>
            <li><strong>Relevant:</strong> Aligned with your life priorities</li>
            <li><strong>Time-bound:</strong> Set a clear deadline</li>
          </ul>

          <h3>Common Savings Goals by Timeline</h3>
          <ul>
            <li><strong>Emergency Fund (6-12 months):</strong> $10,000-30,000</li>
            <li><strong>Car Purchase (2-3 years):</strong> $15,000-35,000</li>
            <li><strong>Wedding (1-2 years):</strong> $20,000-40,000</li>
            <li><strong>Home Down Payment (3-7 years):</strong> $50,000-100,000</li>
            <li><strong>Retirement Supplement (20-30 years):</strong> $500,000+</li>
          </ul>

          <h3>The 50/30/20 Savings Rule</h3>
          <ul>
            <li><strong>50%:</strong> Needs (rent, utilities, groceries)</li>
            <li><strong>30%:</strong> Wants (dining, entertainment, hobbies)</li>
            <li><strong>20%:</strong> Savings and debt repayment</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
