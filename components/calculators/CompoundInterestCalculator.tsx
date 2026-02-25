'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TrendingUp, DollarSign, Calendar, Percent, Info, Download, Share2 } from 'lucide-react'
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

interface CompoundInterestResult {
  finalAmount: number
  totalContributions: number
  totalInterest: number
  yearlyBreakdown: {
    year: number
    startingBalance: number
    contribution: number
    interestEarned: number
    endingBalance: number
  }[]
}

export function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState<string>('10000')
  const [monthlyContribution, setMonthlyContribution] = useState<string>('200')
  const [annualRate, setAnnualRate] = useState<string>('7')
  const [years, setYears] = useState<number>(20)
  const [compoundFrequency, setCompoundFrequency] = useState<string>('12')
  const [result, setResult] = useState<CompoundInterestResult | null>(null)

  const calculateCompoundInterest = () => {
    const P = parseFloat(principal) || 0
    const PMT = parseFloat(monthlyContribution) || 0
    const r = (parseFloat(annualRate) || 0) / 100
    const t = years
    const n = parseInt(compoundFrequency)

    if (P < 0 || PMT < 0 || r < 0 || t <= 0) {
      return
    }

    const yearlyBreakdown: CompoundInterestResult['yearlyBreakdown'] = []
    let balance = P

    for (let year = 1; year <= t; year++) {
      const startingBalance = balance
      let yearContributions = 0
      let yearInterest = 0

      // Calculate month by month for accurate compound interest
      for (let month = 1; month <= 12; month++) {
        // Add monthly contribution
        balance += PMT
        yearContributions += PMT

        // Calculate interest for this compounding period
        const periodsInMonth = n / 12
        for (let period = 0; period < periodsInMonth; period++) {
          const periodInterest = balance * (r / n)
          balance += periodInterest
          yearInterest += periodInterest
        }
      }

      yearlyBreakdown.push({
        year,
        startingBalance,
        contribution: yearContributions,
        interestEarned: yearInterest,
        endingBalance: balance
      })
    }

    const totalContributions = P + (PMT * 12 * t)
    const finalAmount = balance
    const totalInterest = finalAmount - totalContributions

    setResult({
      finalAmount,
      totalContributions,
      totalInterest,
      yearlyBreakdown
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
    return `${value.toFixed(1)}%`
  }

  const chartData = result ? {
    labels: result.yearlyBreakdown.map(y => `Year ${y.year}`),
    datasets: [
      {
        label: 'Total Balance',
        data: result.yearlyBreakdown.map(y => y.endingBalance),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Contributions',
        data: result.yearlyBreakdown.map((y, i) =>
          parseFloat(principal) + (parseFloat(monthlyContribution) * 12 * (i + 1))
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
      legend: {
        display: true,
        position: 'top' as const
      },
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
      }
    }
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            Compound Interest Calculator
          </CardTitle>
          <CardDescription>
            Calculate how your money grows with compound interest and regular contributions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Initial Investment */}
            <div className="space-y-2">
              <Label htmlFor="principal" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Initial Investment
              </Label>
              <Input
                id="principal"
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                placeholder="10000"
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
                placeholder="200"
              />
            </div>

            {/* Annual Interest Rate */}
            <div className="space-y-2">
              <Label htmlFor="annualRate" className="flex items-center gap-2">
                <Percent className="h-4 w-4" />
                Annual Interest Rate (%)
              </Label>
              <Input
                id="annualRate"
                type="number"
                step="0.1"
                value={annualRate}
                onChange={(e) => setAnnualRate(e.target.value)}
                placeholder="7"
              />
            </div>

            {/* Compound Frequency */}
            <div className="space-y-2">
              <Label htmlFor="compoundFrequency">Compound Frequency</Label>
              <Select value={compoundFrequency} onValueChange={setCompoundFrequency}>
                <SelectTrigger id="compoundFrequency">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Annually</SelectItem>
                  <SelectItem value="2">Semi-Annually</SelectItem>
                  <SelectItem value="4">Quarterly</SelectItem>
                  <SelectItem value="12">Monthly</SelectItem>
                  <SelectItem value="365">Daily</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Years to Grow */}
            <div className="md:col-span-2 space-y-4">
              <Label htmlFor="years">Years to Grow: {years}</Label>
              <Slider
                id="years"
                min={1}
                max={50}
                step={1}
                value={[years]}
                onValueChange={(value) => setYears(value[0])}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>1 year</span>
                <span>25 years</span>
                <span>50 years</span>
              </div>
            </div>

            {/* Calculate Button */}
            <div className="md:col-span-2">
              <Button onClick={calculateCompoundInterest} className="w-full" size="lg">
                Calculate Growth
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {result && (
        <>
          {/* Summary Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
              <CardHeader>
                <CardDescription>Final Balance</CardDescription>
                <CardTitle className="text-3xl text-blue-600">
                  {formatCurrency(result.finalAmount)}
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
              <CardHeader>
                <CardDescription>Total Contributions</CardDescription>
                <CardTitle className="text-3xl text-green-600">
                  {formatCurrency(result.totalContributions)}
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
              <CardHeader>
                <CardDescription>Total Interest Earned</CardDescription>
                <CardTitle className="text-3xl text-purple-600">
                  {formatCurrency(result.totalInterest)}
                </CardTitle>
              </CardHeader>
            </Card>
          </div>

          {/* Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Growth Over Time</CardTitle>
              <CardDescription>
                Visualize how your investment grows with compound interest
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                {chartData && <Line data={chartData} options={chartOptions} />}
              </div>
            </CardContent>
          </Card>

          {/* Yearly Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Yearly Breakdown</CardTitle>
              <CardDescription>
                Detailed breakdown of contributions and interest by year
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="summary">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="summary">Summary</TabsTrigger>
                  <TabsTrigger value="detailed">Detailed Table</TabsTrigger>
                </TabsList>

                <TabsContent value="summary" className="space-y-4">
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Your money will grow {formatPercent((result.finalAmount / result.totalContributions - 1) * 100)}</strong>
                      {' '}from your total contributions of {formatCurrency(result.totalContributions)}.
                      That's {formatCurrency(result.totalInterest)} in compound interest!
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Initial Investment:</span>
                      <span>{formatCurrency(parseFloat(principal))}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Total Contributions:</span>
                      <span>{formatCurrency(parseFloat(monthlyContribution) * 12 * years)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Total Interest:</span>
                      <span className="text-green-600 font-bold">{formatCurrency(result.totalInterest)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Effective Annual Return:</span>
                      <span>{formatPercent((result.finalAmount / result.totalContributions) ** (1 / years) * 100 - 100)}</span>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="detailed">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th className="px-4 py-2 text-left">Year</th>
                          <th className="px-4 py-2 text-right">Starting Balance</th>
                          <th className="px-4 py-2 text-right">Contributions</th>
                          <th className="px-4 py-2 text-right">Interest Earned</th>
                          <th className="px-4 py-2 text-right">Ending Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.yearlyBreakdown.map((row) => (
                          <tr key={row.year} className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                            <td className="px-4 py-2">{row.year}</td>
                            <td className="px-4 py-2 text-right">{formatCurrency(row.startingBalance)}</td>
                            <td className="px-4 py-2 text-right text-blue-600">{formatCurrency(row.contribution)}</td>
                            <td className="px-4 py-2 text-right text-green-600">{formatCurrency(row.interestEarned)}</td>
                            <td className="px-4 py-2 text-right font-bold">{formatCurrency(row.endingBalance)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Broker CTA */}
          <div className="mt-8">
            <InlineBrokerCTA
              variant="featured"
              calculatorType="compound-interest"
            />
          </div>

          {/* Share Results */}
          <Card>
            <CardHeader>
              <CardTitle>Share Your Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {/* Educational Content */}
      <Card>
        <CardHeader>
          <CardTitle>Understanding Compound Interest</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            Compound interest is often called the "eighth wonder of the world" because it allows your money to grow exponentially over time.
            Unlike simple interest, which only earns returns on your initial investment, compound interest earns returns on both your
            principal AND the interest you've already earned.
          </p>

          <h3>The Power of Regular Contributions</h3>
          <p>
            Adding regular monthly contributions supercharges your compound interest. Even small amounts can grow significantly
            when combined with compound interest and time. For example:
          </p>
          <ul>
            <li>$200/month at 7% for 20 years = ${formatCurrency(104,550)}</li>
            <li>$500/month at 7% for 30 years = ${formatCurrency(594,150)}</li>
            <li>$1,000/month at 8% for 25 years = ${formatCurrency(957,880)}</li>
          </ul>

          <h3>Compound Frequency Matters</h3>
          <p>
            The frequency of compounding affects your returns. More frequent compounding = higher returns:
          </p>
          <ul>
            <li><strong>Annually:</strong> Interest compounds once per year</li>
            <li><strong>Quarterly:</strong> Interest compounds 4 times per year</li>
            <li><strong>Monthly:</strong> Interest compounds 12 times per year</li>
            <li><strong>Daily:</strong> Interest compounds 365 times per year</li>
          </ul>

          <h3>Where to Invest for Compound Growth</h3>
          <p>
            Consider these investment vehicles that offer compound growth:
          </p>
          <ul>
            <li><strong>High-Yield Savings Accounts:</strong> 4-5% APY (FDIC insured)</li>
            <li><strong>Index Funds:</strong> ~7-10% historical returns</li>
            <li><strong>Dividend Stocks with DRIP:</strong> 6-8% total returns</li>
            <li><strong>Bonds:</strong> 3-5% fixed returns</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
