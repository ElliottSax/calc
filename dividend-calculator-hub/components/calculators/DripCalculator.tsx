"use client"

import { useState } from 'react'
import { Calculator, Info, TrendingUp, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useToast } from '@/hooks/use-toast'
import { calculateDripResults, formatCurrency, formatPercent, formatNumber } from '@/lib/utils/calculations'
import { validateDripInputs } from '@/lib/utils/validation'
import { calculatorBrowserLogger } from '@/lib/logger/browser'
import { PremiumFeatures } from '@/components/premium/PremiumFeatures'
import { trackCalculatorUse } from '@/lib/analytics/tracking'
import type { DripCalculatorInputs, DripCalculationResult, DripSummary } from '@/types/calculator'

export function DripCalculator() {
  const { toast } = useToast()
  const [inputs, setInputs] = useState<DripCalculatorInputs>({
    ticker: '',
    initialInvestment: '10000',
    sharePrice: '100',
    annualDividend: '4',
    dividendYield: '4',
    monthlyContribution: '500',
    dividendGrowthRate: '5',
    shareAppreciationRate: '7',
    yearsToCalculate: 20,
    taxRate: '15',
    reinvestDividends: true
  })
  
  const [results, setResults] = useState<DripCalculationResult[] | null>(null)
  const [summary, setSummary] = useState<DripSummary | null>(null)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (field: keyof DripCalculatorInputs, value: string | number | boolean) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Auto-calculate dividend yield or annual dividend
    if (field === 'sharePrice' || field === 'annualDividend') {
      const sharePrice = field === 'sharePrice' ? parseFloat(value as string) : parseFloat(inputs.sharePrice)
      const annualDiv = field === 'annualDividend' ? parseFloat(value as string) : parseFloat(inputs.annualDividend)
      
      if (sharePrice > 0 && annualDiv >= 0) {
        const yield_ = (annualDiv / sharePrice) * 100
        setInputs(prev => ({
          ...prev,
          dividendYield: yield_.toFixed(2)
        }))
      }
    }
  }

  const calculate = () => {
    calculatorBrowserLogger.info('Starting DRIP calculation', inputs)
    
    // Validate inputs
    const errors = validateDripInputs(inputs)
    if (errors.length > 0) {
      errors.forEach(error => {
        toast({
          variant: "destructive",
          title: "Validation Error",
          description: error.message
        })
      })
      return
    }
    
    setLoading(true)
    
    try {
      const { results: calcResults, summary: calcSummary } = calculateDripResults(inputs)
      setResults(calcResults)
      setSummary(calcSummary)
      
      toast({
        title: "Calculation Complete",
        description: "Your dividend reinvestment projection is ready!"
      })
      
      calculatorBrowserLogger.info('DRIP calculation completed successfully')
    } catch (error) {
      calculatorBrowserLogger.error('DRIP calculation failed', error)
      toast({
        variant: "destructive",
        title: "Calculation Error",
        description: "Failed to calculate results. Please check your inputs."
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="inputs" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="inputs">Calculator Inputs</TabsTrigger>
          <TabsTrigger value="results" disabled={!results}>Results & Analysis</TabsTrigger>
        </TabsList>
        
        <TabsContent value="inputs" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Investment Details
                </CardTitle>
                <CardDescription>
                  Enter your initial investment and contribution plan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="ticker">Stock Ticker (Optional)</Label>
                  <Input
                    id="ticker"
                    placeholder="e.g., AAPL"
                    value={inputs.ticker}
                    onChange={(e) => handleInputChange('ticker', e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="initialInvestment">Initial Investment ($)</Label>
                  <Input
                    id="initialInvestment"
                    type="number"
                    min="0"
                    step="100"
                    value={inputs.initialInvestment}
                    onChange={(e) => handleInputChange('initialInvestment', e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="monthlyContribution">Monthly Contribution ($)</Label>
                  <Input
                    id="monthlyContribution"
                    type="number"
                    min="0"
                    step="50"
                    value={inputs.monthlyContribution}
                    onChange={(e) => handleInputChange('monthlyContribution', e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="yearsToCalculate">Investment Period (Years)</Label>
                  <Input
                    id="yearsToCalculate"
                    type="number"
                    min="1"
                    max="50"
                    value={inputs.yearsToCalculate}
                    onChange={(e) => handleInputChange('yearsToCalculate', parseInt(e.target.value) || 20)}
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Stock & Dividend Info
                </CardTitle>
                <CardDescription>
                  Current stock price and dividend information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="sharePrice">Current Share Price ($)</Label>
                  <Input
                    id="sharePrice"
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={inputs.sharePrice}
                    onChange={(e) => handleInputChange('sharePrice', e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="annualDividend">Annual Dividend per Share ($)</Label>
                  <Input
                    id="annualDividend"
                    type="number"
                    min="0"
                    step="0.01"
                    value={inputs.annualDividend}
                    onChange={(e) => handleInputChange('annualDividend', e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="dividendYield">Dividend Yield (%)</Label>
                  <Input
                    id="dividendYield"
                    type="number"
                    min="0"
                    step="0.1"
                    value={inputs.dividendYield}
                    disabled
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="reinvestDividends"
                    checked={inputs.reinvestDividends}
                    onChange={(e) => handleInputChange('reinvestDividends', e.target.checked)}
                    className="h-4 w-4"
                  />
                  <Label htmlFor="reinvestDividends" className="cursor-pointer">
                    Reinvest Dividends (DRIP)
                  </Label>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5" />
                Growth & Tax Assumptions
              </CardTitle>
              <CardDescription>
                Expected growth rates and tax considerations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="dividendGrowthRate">Dividend Growth Rate (%)</Label>
                  <Input
                    id="dividendGrowthRate"
                    type="number"
                    min="-10"
                    max="30"
                    step="0.5"
                    value={inputs.dividendGrowthRate}
                    onChange={(e) => handleInputChange('dividendGrowthRate', e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="shareAppreciationRate">Share Price Growth Rate (%)</Label>
                  <Input
                    id="shareAppreciationRate"
                    type="number"
                    min="-10"
                    max="30"
                    step="0.5"
                    value={inputs.shareAppreciationRate}
                    onChange={(e) => handleInputChange('shareAppreciationRate', e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="taxRate">Tax Rate on Dividends (%)</Label>
                  <Input
                    id="taxRate"
                    type="number"
                    min="0"
                    max="50"
                    step="1"
                    value={inputs.taxRate}
                    onChange={(e) => handleInputChange('taxRate', e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              onClick={calculate}
              disabled={loading}
              className="px-8"
            >
              <Calculator className="mr-2 h-5 w-5" />
              {loading ? 'Calculating...' : 'Calculate Results'}
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="results" className="space-y-6">
          {summary && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>Investment Summary</CardTitle>
                  <CardDescription>
                    Your dividend reinvestment projection over {inputs.yearsToCalculate} years
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Initial Investment</p>
                      <p className="text-2xl font-bold">{formatCurrency(summary.initialInvestment)}</p>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Final Portfolio Value</p>
                      <p className="text-2xl font-bold text-green-600">
                        {formatCurrency(summary.finalPortfolioValue)}
                      </p>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Total Return</p>
                      <p className="text-2xl font-bold text-green-600">
                        {formatPercent(summary.totalReturnPercent)}
                      </p>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Total Contributions</p>
                      <p className="text-xl font-semibold">{formatCurrency(summary.totalContributions)}</p>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Total Dividends Earned</p>
                      <p className="text-xl font-semibold">{formatCurrency(summary.totalDividendsEarned)}</p>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Annualized Return</p>
                      <p className="text-xl font-semibold">{formatPercent(summary.annualizedReturn)}</p>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Final Shares Owned</p>
                      <p className="text-xl font-semibold">{formatNumber(summary.finalShares, 2)}</p>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Final Annual Dividend Income</p>
                      <p className="text-xl font-semibold">{formatCurrency(summary.finalDividendIncome)}</p>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Final Yield on Cost</p>
                      <p className="text-xl font-semibold">{formatPercent(summary.finalYieldOnCost)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Year-by-Year Breakdown</CardTitle>
                  <CardDescription>
                    Detailed progression of your investment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">Year</th>
                          <th className="text-right py-2">Portfolio Value</th>
                          <th className="text-right py-2">Shares</th>
                          <th className="text-right py-2">Annual Dividend</th>
                          <th className="text-right py-2">Total Return</th>
                          <th className="text-right py-2">Yield on Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        {results?.map((result, index) => (
                          <tr key={result.year} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                            <td className="py-2">{result.year}</td>
                            <td className="text-right py-2">{formatCurrency(result.portfolioValue)}</td>
                            <td className="text-right py-2">{formatNumber(result.shares, 2)}</td>
                            <td className="text-right py-2">{formatCurrency(result.annualDividend)}</td>
                            <td className="text-right py-2">{formatPercent(result.totalReturnPercent)}</td>
                            <td className="text-right py-2">{formatPercent(result.yieldOnCost)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}