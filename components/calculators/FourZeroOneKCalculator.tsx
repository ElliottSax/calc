'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DollarSign, TrendingUp, Briefcase, Percent, Users, Info } from 'lucide-react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { InlineBrokerCTA } from '@/components/affiliate/InlineBrokerCTA'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

interface FourZeroOneKResult {
  finalBalance: number
  employeeContributions: number
  employerContributions: number
  totalContributions: number
  investmentGains: number
  yearlyBreakdown: {
    age: number
    year: number
    employeeContribution: number
    employerMatch: number
    balance: number
    investmentGain: number
  }[]
  retirementIncome: number
  taxSavings: number
}

export function FourZeroOneKCalculator() {
  const [currentAge, setCurrentAge] = useState<number>(30)
  const [retirementAge, setRetirementAge] = useState<number>(65)
  const [currentSalary, setCurrentSalary] = useState<string>('75000')
  const [currentBalance, setCurrentBalance] = useState<string>('25000')
  const [contributionPercent, setContributionPercent] = useState<string>('10')
  const [employerMatch, setEmployerMatch] = useState<string>('50')
  const [employerMatchLimit, setEmployerMatchLimit] = useState<string>('6')
  const [annualReturn, setAnnualReturn] = useState<string>('7')
  const [salaryIncrease, setSalaryIncrease] = useState<string>('3')
  const [marginalTaxRate, setMarginalTaxRate] = useState<string>('24')
  const [result, setResult] = useState<FourZeroOneKResult | null>(null)

  const calculate401k = () => {
    const age = currentAge
    const retirement = retirementAge
    const salary = parseFloat(currentSalary) || 0
    const balance = parseFloat(currentBalance) || 0
    const contrib = (parseFloat(contributionPercent) || 0) / 100
    const matchPct = (parseFloat(employerMatch) || 0) / 100
    const matchLimit = (parseFloat(employerMatchLimit) || 0) / 100
    const returnRate = (parseFloat(annualReturn) || 0) / 100
    const salaryGrowth = (parseFloat(salaryIncrease) || 0) / 100
    const taxRate = (parseFloat(marginalTaxRate) || 0) / 100

    if (retirement <= age || salary <= 0) {
      return
    }

    const years = retirement - age
    let currentBalance = balance
    let totalEmployeeContrib = 0
    let totalEmployerContrib = 0
    let currentSalaryAmount = salary

    const yearlyBreakdown: FourZeroOneKResult['yearlyBreakdown'] = []

    for (let year = 1; year <= years; year++) {
      const employeeContrib = currentSalaryAmount * contrib
      const matchableAmount = Math.min(currentSalaryAmount * contrib, currentSalaryAmount * matchLimit)
      const employerContrib = matchableAmount * matchPct

      // Add contributions
      currentBalance += employeeContrib + employerContrib
      totalEmployeeContrib += employeeContrib
      totalEmployerContrib += employerContrib

      // Calculate investment gains for the year
      const investmentGain = currentBalance * returnRate
      currentBalance += investmentGain

      yearlyBreakdown.push({
        age: age + year,
        year,
        employeeContribution: employeeContrib,
        employerMatch: employerContrib,
        balance: currentBalance,
        investmentGain
      })

      // Increase salary for next year
      currentSalaryAmount *= (1 + salaryGrowth)
    }

    const totalContributions = totalEmployeeContrib + totalEmployerContrib
    const investmentGains = currentBalance - balance - totalContributions

    // 4% rule for retirement income
    const retirementIncome = currentBalance * 0.04

    // Tax savings from contributions (assumes pre-tax 401k)
    const annualTaxSavings = parseFloat(currentSalary) * contrib * taxRate
    const totalTaxSavings = annualTaxSavings * years

    setResult({
      finalBalance: currentBalance,
      employeeContributions: totalEmployeeContrib,
      employerContributions: totalEmployerContrib,
      totalContributions,
      investmentGains,
      yearlyBreakdown,
      retirementIncome,
      taxSavings: totalTaxSavings
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

  const chartData = result ? {
    labels: result.yearlyBreakdown.map(y => y.age),
    datasets: [
      {
        label: 'Total 401(k) Balance',
        data: result.yearlyBreakdown.map(y => y.balance),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Total Contributions',
        data: result.yearlyBreakdown.map((y, i) =>
          parseFloat(currentBalance) +
          result.yearlyBreakdown.slice(0, i + 1).reduce((sum, item) =>
            sum + item.employeeContribution + item.employerMatch, 0
          )
        ),
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        fill: false,
        tension: 0.4
      }
    ]
  } : null

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: 'top' as const },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: ${formatCurrency(context.parsed.y)}`
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: any) {
            return formatCurrency(value)
          }
        }
      },
      x: {
        title: { display: true, text: 'Age' }
      }
    }
  }

  const contributionLimitWarning = parseFloat(currentSalary) * (parseFloat(contributionPercent) / 100) > 23000

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-blue-600" />
            401(k) Retirement Calculator
          </CardTitle>
          <CardDescription>
            Calculate your 401(k) growth with employer matching and tax advantages
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Age Inputs */}
            <div className="space-y-2">
              <Label htmlFor="currentAge">Current Age</Label>
              <Input
                id="currentAge"
                type="number"
                value={currentAge}
                onChange={(e) => setCurrentAge(parseInt(e.target.value) || 30)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="retirementAge">Retirement Age</Label>
              <Input
                id="retirementAge"
                type="number"
                value={retirementAge}
                onChange={(e) => setRetirementAge(parseInt(e.target.value) || 65)}
              />
            </div>

            {/* Financial Inputs */}
            <div className="space-y-2">
              <Label htmlFor="currentSalary" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Current Annual Salary
              </Label>
              <Input
                id="currentSalary"
                type="number"
                value={currentSalary}
                onChange={(e) => setCurrentSalary(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="currentBalance">Current 401(k) Balance</Label>
              <Input
                id="currentBalance"
                type="number"
                value={currentBalance}
                onChange={(e) => setCurrentBalance(e.target.value)}
              />
            </div>

            {/* Contribution Settings */}
            <div className="space-y-2">
              <Label htmlFor="contributionPercent">Your Contribution (%)</Label>
              <Input
                id="contributionPercent"
                type="number"
                step="0.5"
                value={contributionPercent}
                onChange={(e) => setContributionPercent(e.target.value)}
              />
              {contributionLimitWarning && (
                <p className="text-sm text-orange-600">
                  ⚠️ Exceeds 2026 IRS limit ($23,000). Capped at limit in calculations.
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="employerMatch" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Employer Match (%)
              </Label>
              <Input
                id="employerMatch"
                type="number"
                step="5"
                value={employerMatch}
                onChange={(e) => setEmployerMatch(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="employerMatchLimit">Match Up To (% of salary)</Label>
              <Input
                id="employerMatchLimit"
                type="number"
                step="1"
                value={employerMatchLimit}
                onChange={(e) => setEmployerMatchLimit(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="marginalTaxRate">Marginal Tax Rate (%)</Label>
              <Input
                id="marginalTaxRate"
                type="number"
                step="1"
                value={marginalTaxRate}
                onChange={(e) => setMarginalTaxRate(e.target.value)}
              />
            </div>

            {/* Growth Assumptions */}
            <div className="space-y-2">
              <Label htmlFor="annualReturn" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Expected Annual Return (%)
              </Label>
              <Input
                id="annualReturn"
                type="number"
                step="0.5"
                value={annualReturn}
                onChange={(e) => setAnnualReturn(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="salaryIncrease" className="flex items-center gap-2">
                <Percent className="h-4 w-4" />
                Annual Salary Increase (%)
              </Label>
              <Input
                id="salaryIncrease"
                type="number"
                step="0.5"
                value={salaryIncrease}
                onChange={(e) => setSalaryIncrease(e.target.value)}
              />
            </div>

            {/* Calculate Button */}
            <div className="md:col-span-2">
              <Button onClick={calculate401k} className="w-full" size="lg">
                Calculate 401(k) Growth
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {result && (
        <>
          {/* Summary Cards */}
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
              <CardHeader>
                <CardDescription>401(k) Balance at {retirementAge}</CardDescription>
                <CardTitle className="text-2xl text-blue-600">
                  {formatCurrency(result.finalBalance)}
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
              <CardHeader>
                <CardDescription>Employer Match (Free!)</CardDescription>
                <CardTitle className="text-2xl text-green-600">
                  {formatCurrency(result.employerContributions)}
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
              <CardHeader>
                <CardDescription>Investment Gains</CardDescription>
                <CardTitle className="text-2xl text-purple-600">
                  {formatCurrency(result.investmentGains)}
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20">
              <CardHeader>
                <CardDescription>Annual Income (4% Rule)</CardDescription>
                <CardTitle className="text-2xl text-orange-600">
                  {formatCurrency(result.retirementIncome)}
                </CardTitle>
              </CardHeader>
            </Card>
          </div>

          {/* Key Insights */}
          <Card>
            <CardHeader>
              <CardTitle>Key Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="bg-green-50 dark:bg-green-900/20 border-green-500">
                <Info className="h-4 w-4 text-green-600" />
                <AlertDescription>
                  <strong>Free Money Alert!</strong> Your employer will contribute {formatCurrency(result.employerContributions)} over your career.
                  That's an instant {((result.employerContributions / result.employeeContributions) * 100).toFixed(0)}% return on your contributions!
                </AlertDescription>
              </Alert>

              <Alert className="bg-blue-50 dark:bg-blue-900/20 border-blue-500">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertDescription>
                  <strong>Tax Savings:</strong> You'll save approximately {formatCurrency(result.taxSavings)} in taxes over your career
                  by contributing pre-tax dollars. That's money that compounds instead of going to Uncle Sam!
                </AlertDescription>
              </Alert>

              <div className="grid md:grid-cols-2 gap-4 pt-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Contribution Breakdown</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Your Contributions:</span>
                      <span className="font-medium">{formatCurrency(result.employeeContributions)}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Employer Match:</span>
                      <span className="font-medium">{formatCurrency(result.employerContributions)}</span>
                    </div>
                    <div className="flex justify-between border-t pt-1">
                      <span>Total Contributions:</span>
                      <span className="font-medium">{formatCurrency(result.totalContributions)}</span>
                    </div>
                    <div className="flex justify-between text-purple-600">
                      <span>Investment Gains:</span>
                      <span className="font-medium">{formatCurrency(result.investmentGains)}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Retirement Income (4% Rule)</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Annual Income:</span>
                      <span className="font-medium">{formatCurrency(result.retirementIncome)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Income:</span>
                      <span className="font-medium">{formatCurrency(result.retirementIncome / 12)}</span>
                    </div>
                    <p className="text-xs text-gray-600 pt-2">
                      Based on the 4% safe withdrawal rate, a widely accepted retirement planning guideline.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Chart */}
          <Card>
            <CardHeader>
              <CardTitle>401(k) Growth Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                {chartData && <Line data={chartData} options={chartOptions} />}
              </div>
            </CardContent>
          </Card>

          {/* Broker CTA */}
          <div className="mt-8">
            <InlineBrokerCTA variant="featured" calculatorType="401k" />
          </div>
        </>
      )}

      {/* Educational Content */}
      <Card>
        <CardHeader>
          <CardTitle>Understanding Your 401(k)</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <h3>What is a 401(k)?</h3>
          <p>
            A 401(k) is an employer-sponsored retirement savings plan that offers significant tax advantages.
            Contributions are made pre-tax (reducing your taxable income now), and investments grow tax-deferred
            until withdrawal in retirement.
          </p>

          <h3>Why Employer Match is "Free Money"</h3>
          <p>
            Many employers match your contributions up to a certain percentage. For example, a 50% match on
            contributions up to 6% of salary means if you contribute 6%, your employer adds another 3%.
            <strong> Never leave employer match on the table - it's an instant guaranteed return!</strong>
          </p>

          <h3>Contribution Limits (2026)</h3>
          <ul>
            <li><strong>Under 50:</strong> $23,000 per year</li>
            <li><strong>Age 50+:</strong> $30,500 per year (with $7,500 catch-up)</li>
            <li><strong>Total limit:</strong> $69,000 (including employer match)</li>
          </ul>

          <h3>Investment Options</h3>
          <p>
            Most 401(k) plans offer target-date funds, index funds, and actively managed funds. For most people,
            low-cost target-date funds or S&P 500 index funds are excellent choices with minimal effort required.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
