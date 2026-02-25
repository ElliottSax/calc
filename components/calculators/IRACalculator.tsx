'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Shield, TrendingUp, DollarSign, Info, Zap } from 'lucide-react'
import { Line } from 'react-chartjs-2'
import { InlineBrokerCTA } from '@/components/affiliate/InlineBrokerCTA'

interface IRAResult {
  traditionalBalance: number
  rothBalance: number
  traditionalAfterTax: number
  rothAfterTax: number
  taxSavingsNow: number
  taxSavingsRetirement: number
  recommendation: 'traditional' | 'roth' | 'both'
  yearlyBreakdown: {
    age: number
    contribution: number
    traditionalBalance: number
    rothBalance: number
  }[]
}

export function IRACalculator() {
  const [currentAge, setCurrentAge] = useState<number>(30)
  const [retirementAge, setRetirementAge] = useState<number>(65)
  const [annualContribution, setAnnualContribution] = useState<string>('6500')
  const [currentBalance, setCurrentBalance] = useState<string>('10000')
  const [expectedReturn, setExpectedReturn] = useState<string>('7')
  const [currentTaxRate, setCurrentTaxRate] = useState<string>('24')
  const [retirementTaxRate, setRetirementTaxRate] = useState<string>('22')
  const [iraType, setIraType] = useState<string>('compare')
  const [result, setResult] = useState<IRAResult | null>(null)

  const calculateIRA = () => {
    const age = currentAge
    const retirement = retirementAge
    const contribution = parseFloat(annualContribution) || 0
    const balance = parseFloat(currentBalance) || 0
    const returnRate = (parseFloat(expectedReturn) || 0) / 100
    const currentTax = (parseFloat(currentTaxRate) || 0) / 100
    const retirementTax = (parseFloat(retirementTaxRate) || 0) / 100

    if (retirement <= age) return

    const years = retirement - age
    let traditionalBal = balance
    let rothBal = balance

    const yearlyBreakdown: IRAResult['yearlyBreakdown'] = []

    for (let year = 1; year <= years; year++) {
      // Traditional IRA - full contribution goes in
      traditionalBal = (traditionalBal + contribution) * (1 + returnRate)

      // Roth IRA - contribution after tax, so effectively less
      rothBal = (rothBal + contribution) * (1 + returnRate)

      yearlyBreakdown.push({
        age: age + year,
        contribution,
        traditionalBalance: traditionalBal,
        rothBalance: rothBal
      })
    }

    // Traditional: pay taxes on withdrawal
    const traditionalAfterTax = traditionalBal * (1 - retirementTax)

    // Roth: no taxes on withdrawal
    const rothAfterTax = rothBal

    // Tax savings now (Traditional)
    const annualTaxSavings = contribution * currentTax
    const totalTaxSavingsNow = annualTaxSavings * years

    // Tax savings in retirement (Roth)
    const totalTaxSavingsRetirement = rothBal * retirementTax

    // Recommendation
    let recommendation: 'traditional' | 'roth' | 'both' = 'both'
    if (currentTax > retirementTax + 0.03) recommendation = 'traditional'
    else if (retirementTax > currentTax + 0.03) recommendation = 'roth'

    setResult({
      traditionalBalance: traditionalBal,
      rothBalance: rothBal,
      traditionalAfterTax,
      rothAfterTax,
      taxSavingsNow: totalTaxSavingsNow,
      taxSavingsRetirement: totalTaxSavingsRetirement,
      recommendation,
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

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-blue-600" />
            IRA Calculator - Traditional vs Roth
          </CardTitle>
          <CardDescription>
            Compare Traditional and Roth IRA to find the best retirement strategy for you
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Current Age</Label>
              <Input type="number" value={currentAge} onChange={(e) => setCurrentAge(parseInt(e.target.value) || 30)} />
            </div>

            <div className="space-y-2">
              <Label>Retirement Age</Label>
              <Input type="number" value={retirementAge} onChange={(e) => setRetirementAge(parseInt(e.target.value) || 65)} />
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Annual Contribution
              </Label>
              <Input type="number" value={annualContribution} onChange={(e) => setAnnualContribution(e.target.value)} />
              <p className="text-xs text-gray-600">2026 limit: $7,000 ($8,000 if 50+)</p>
            </div>

            <div className="space-y-2">
              <Label>Current IRA Balance</Label>
              <Input type="number" value={currentBalance} onChange={(e) => setCurrentBalance(e.target.value)} />
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Expected Return (%)
              </Label>
              <Input type="number" step="0.5" value={expectedReturn} onChange={(e) => setExpectedReturn(e.target.value)} />
            </div>

            <div className="space-y-2">
              <Label>IRA Type Comparison</Label>
              <Select value={iraType} onValueChange={setIraType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="compare">Compare Both</SelectItem>
                  <SelectItem value="traditional">Traditional Only</SelectItem>
                  <SelectItem value="roth">Roth Only</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Current Tax Rate (%)</Label>
              <Input type="number" value={currentTaxRate} onChange={(e) => setCurrentTaxRate(e.target.value)} />
            </div>

            <div className="space-y-2">
              <Label>Retirement Tax Rate (%)</Label>
              <Input type="number" value={retirementTaxRate} onChange={(e) => setRetirementTaxRate(e.target.value)} />
            </div>

            <div className="md:col-span-2">
              <Button onClick={calculateIRA} className="w-full" size="lg">
                Calculate IRA Comparison
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {result && (
        <>
          {/* Recommendation */}
          <Alert className={
            result.recommendation === 'roth' ? 'bg-green-50 dark:bg-green-900/20 border-green-500' :
            result.recommendation === 'traditional' ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500' :
            'bg-purple-50 dark:bg-purple-900/20 border-purple-500'
          }>
            <Zap className="h-4 w-4" />
            <AlertDescription>
              <strong>Recommendation: </strong>
              {result.recommendation === 'roth' && 'Roth IRA - Your retirement tax rate is higher, making Roth the better choice for tax-free withdrawals.'}
              {result.recommendation === 'traditional' && 'Traditional IRA - Your current tax rate is higher, making Traditional better for immediate tax deductions.'}
              {result.recommendation === 'both' && 'Consider Both - Tax rates are similar. Diversify by contributing to both Traditional and Roth IRAs.'}
            </AlertDescription>
          </Alert>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-blue-500">
              <CardHeader>
                <CardTitle className="text-blue-600">Traditional IRA</CardTitle>
                <CardDescription>Tax deduction now, pay taxes in retirement</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Balance at Retirement:</p>
                  <p className="text-3xl font-bold text-blue-600">{formatCurrency(result.traditionalBalance)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">After-Tax Value:</p>
                  <p className="text-2xl font-bold">{formatCurrency(result.traditionalAfterTax)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Tax Savings Now:</p>
                  <p className="text-lg font-semibold text-green-600">{formatCurrency(result.taxSavingsNow)}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-500">
              <CardHeader>
                <CardTitle className="text-green-600">Roth IRA</CardTitle>
                <CardDescription>No deduction now, tax-free withdrawals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Balance at Retirement:</p>
                  <p className="text-3xl font-bold text-green-600">{formatCurrency(result.rothBalance)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">After-Tax Value:</p>
                  <p className="text-2xl font-bold">{formatCurrency(result.rothAfterTax)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Tax Savings in Retirement:</p>
                  <p className="text-lg font-semibold text-green-600">{formatCurrency(result.taxSavingsRetirement)}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Winner */}
          <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
            <CardHeader>
              <CardTitle>Better Choice (After-Tax)</CardTitle>
            </CardHeader>
            <CardContent>
              {result.rothAfterTax > result.traditionalAfterTax ? (
                <div>
                  <p className="text-2xl font-bold text-green-600">Roth IRA Wins!</p>
                  <p className="text-gray-600 mt-2">
                    You'll have <strong>{formatCurrency(result.rothAfterTax - result.traditionalAfterTax)}</strong> more
                    after taxes with a Roth IRA.
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-2xl font-bold text-blue-600">Traditional IRA Wins!</p>
                  <p className="text-gray-600 mt-2">
                    You'll have <strong>{formatCurrency(result.traditionalAfterTax - result.rothAfterTax)}</strong> more
                    after taxes with a Traditional IRA.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mt-8">
            <InlineBrokerCTA variant="featured" calculatorType="ira" />
          </div>
        </>
      )}

      {/* Educational Content */}
      <Card>
        <CardHeader>
          <CardTitle>Traditional vs Roth IRA: Which is Better?</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <h3>Key Differences</h3>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Traditional IRA</th>
                <th>Roth IRA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tax Deduction</td>
                <td>✅ Yes (now)</td>
                <td>❌ No</td>
              </tr>
              <tr>
                <td>Tax on Withdrawals</td>
                <td>❌ Yes</td>
                <td>✅ No (tax-free!)</td>
              </tr>
              <tr>
                <td>RMDs (Required Withdrawals)</td>
                <td>❌ Yes at 73</td>
                <td>✅ No</td>
              </tr>
              <tr>
                <td>Income Limits</td>
                <td>✅ None</td>
                <td>❌ Yes ($161K-$176K single)</td>
              </tr>
              <tr>
                <td>Early Withdrawal</td>
                <td>❌ 10% penalty</td>
                <td>✅ Contributions anytime</td>
              </tr>
            </tbody>
          </table>

          <h3>When to Choose Traditional IRA</h3>
          <ul>
            <li>You're in a high tax bracket now (32%+)</li>
            <li>You expect lower income in retirement</li>
            <li>You need the tax deduction this year</li>
            <li>You're over the Roth income limits</li>
          </ul>

          <h3>When to Choose Roth IRA</h3>
          <ul>
            <li>You're young and in a lower tax bracket (12-22%)</li>
            <li>You expect higher income/taxes in retirement</li>
            <li>You want tax-free growth and withdrawals</li>
            <li>You want flexibility (no RMDs)</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
