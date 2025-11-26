"use client"

import { useState, useCallback } from 'react'
import { Calculator, Info, TrendingUp, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useToast } from '@/hooks/use-toast'
import { calculateDripResults, formatCurrency, formatPercent, formatNumber } from '@/lib/utils/calculations'
import { validateDripInputs } from '@/lib/utils/validation'
import { calculatorBrowserLogger } from '@/lib/logger/browser'
import { PremiumFeatures } from '@/components/premium/PremiumFeatures'
import { trackCalculatorUse } from '@/lib/analytics/tracking'
import { DripCharts } from '@/components/visualizations/DripCharts'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { ShareResults } from '@/components/viral/ShareResults'
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

  const calculate = useCallback(() => {
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
  }, [inputs, toast])

  return (
    <div className="space-y-8 relative">
      {/* Subtle luxury background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 -z-10 rounded-3xl" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-100/50 dark:bg-slate-800/30 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-100/50 dark:bg-slate-800/30 rounded-full blur-[100px] -z-10" />

      <Tabs defaultValue="inputs" className="w-full">
        <TabsList className="grid w-full grid-cols-2 p-1.5 backdrop-blur-xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-xl">
          <TabsTrigger
            value="inputs"
            className="data-[state=active]:bg-slate-900 dark:data-[state=active]:bg-slate-100 data-[state=active]:text-white dark:data-[state=active]:text-slate-900 data-[state=active]:shadow-lg transition-all duration-300 rounded-lg font-medium text-base"
          >
            Calculator Inputs
          </TabsTrigger>
          <TabsTrigger
            value="results"
            disabled={!results}
            className="data-[state=active]:bg-slate-900 dark:data-[state=active]:bg-slate-100 data-[state=active]:text-white dark:data-[state=active]:text-slate-900 data-[state=active]:shadow-lg transition-all duration-300 rounded-lg font-medium text-base disabled:opacity-40"
          >
            Results & Analysis
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="inputs" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-700/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.12)] dark:hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.4)] transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-transparent to-slate-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl" />
              <CardHeader className="relative pb-6 pt-8 px-8">
                <CardTitle className="flex items-center gap-4 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                  <div className="p-2.5 bg-slate-900 dark:bg-slate-100 rounded-xl shadow-lg">
                    <DollarSign className="h-5 w-5 text-white dark:text-slate-900" />
                  </div>
                  Investment Details
                </CardTitle>
                <CardDescription className="text-base text-slate-600 dark:text-slate-400 mt-2 ml-14">
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
            
            <Card className="backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-700/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.12)] dark:hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.4)] transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-transparent to-slate-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl" />
              <CardHeader className="relative pb-6 pt-8 px-8">
                <CardTitle className="flex items-center gap-4 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                  <div className="p-2.5 bg-slate-900 dark:bg-slate-100 rounded-xl shadow-lg">
                    <TrendingUp className="h-5 w-5 text-white dark:text-slate-900" />
                  </div>
                  Stock & Dividend Info
                </CardTitle>
                <CardDescription className="text-base text-slate-600 dark:text-slate-400 mt-2 ml-14">
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
                  <Checkbox
                    id="reinvestDividends"
                    checked={inputs.reinvestDividends}
                    onCheckedChange={(checked) => handleInputChange('reinvestDividends', checked as boolean)}
                  />
                  <Label htmlFor="reinvestDividends" className="cursor-pointer">
                    Reinvest Dividends (DRIP)
                  </Label>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-700/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.12)] dark:hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.4)] transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-transparent to-slate-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl" />
            <CardHeader className="relative pb-6 pt-8 px-8">
              <CardTitle className="flex items-center gap-4 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                <div className="p-2.5 bg-slate-900 dark:bg-slate-100 rounded-xl shadow-lg">
                  <Info className="h-5 w-5 text-white dark:text-slate-900" />
                </div>
                Growth & Tax Assumptions
              </CardTitle>
              <CardDescription className="text-base text-slate-600 dark:text-slate-400 mt-2 ml-14">
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
          
          <div className="flex justify-center pt-4">
            <Button
              size="lg"
              onClick={calculate}
              disabled={loading}
              className="px-16 py-7 text-lg font-semibold tracking-tight bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.16)] dark:hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-[1.02] disabled:opacity-40 disabled:hover:scale-100 group relative overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Calculator className="mr-3 h-6 w-6 transition-transform duration-500 group-hover:rotate-6" />
              <span className="relative">{loading ? 'Calculating...' : 'Calculate Results'}</span>
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="results" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {summary && (
            <>
              <Card className="overflow-hidden backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-700/60 shadow-[0_16px_48px_0_rgba(0,0,0,0.12)] dark:shadow-[0_16px_48px_0_rgba(0,0,0,0.4)]">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-slate-100/50 dark:from-slate-800/50 dark:via-transparent dark:to-slate-900/50" />
                <CardHeader className="relative bg-gradient-to-br from-slate-50/90 to-white/90 dark:from-slate-900/90 dark:to-slate-800/90 border-b border-slate-200/60 dark:border-slate-700/60 pb-8 pt-10 px-10">
                  <CardTitle className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                    Investment Summary
                  </CardTitle>
                  <CardDescription className="text-lg text-slate-600 dark:text-slate-400 mt-3">
                    Your dividend reinvestment projection over {inputs.yearsToCalculate} years
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative pt-10 px-10 pb-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="group p-6 rounded-2xl backdrop-blur-sm bg-white/60 dark:bg-slate-800/60 hover:bg-white/80 dark:hover:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-500">
                      <p className="text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400 mb-3 uppercase">Initial Investment</p>
                      <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 tabular-nums">
                        {formatCurrency(summary.initialInvestment)}
                      </p>
                    </div>

                    <div className="group p-6 rounded-2xl backdrop-blur-sm bg-slate-900/95 dark:bg-slate-100/95 border border-slate-800 dark:border-slate-200 hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.16)] dark:hover:shadow-[0_16px_48px_0_rgba(255,255,255,0.16)] transition-all duration-500 hover:scale-[1.02]">
                      <p className="text-sm font-medium tracking-wide text-slate-400 dark:text-slate-600 mb-3 uppercase">Final Portfolio Value</p>
                      <p className="text-4xl font-bold tracking-tight text-white dark:text-slate-900 tabular-nums">
                        {formatCurrency(summary.finalPortfolioValue)}
                      </p>
                    </div>

                    <div className="group p-6 rounded-2xl backdrop-blur-sm bg-white/60 dark:bg-slate-800/60 hover:bg-white/80 dark:hover:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-500">
                      <p className="text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400 mb-3 uppercase">Total Return</p>
                      <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 tabular-nums">
                        {formatPercent(summary.totalReturnPercent)}
                      </p>
                    </div>

                    <div className="group p-6 rounded-2xl backdrop-blur-sm bg-white/60 dark:bg-slate-800/60 hover:bg-white/80 dark:hover:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-500">
                      <p className="text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400 mb-3 uppercase">Total Contributions</p>
                      <p className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 tabular-nums">
                        {formatCurrency(summary.totalContributions)}
                      </p>
                    </div>

                    <div className="group p-6 rounded-2xl backdrop-blur-sm bg-white/60 dark:bg-slate-800/60 hover:bg-white/80 dark:hover:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-500">
                      <p className="text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400 mb-3 uppercase">Total Dividends Earned</p>
                      <p className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 tabular-nums">
                        {formatCurrency(summary.totalDividendsEarned)}
                      </p>
                    </div>

                    <div className="group p-6 rounded-2xl backdrop-blur-sm bg-white/60 dark:bg-slate-800/60 hover:bg-white/80 dark:hover:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-500">
                      <p className="text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400 mb-3 uppercase">Annualized Return</p>
                      <p className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 tabular-nums">
                        {formatPercent(summary.annualizedReturn)}
                      </p>
                    </div>

                    <div className="group p-6 rounded-2xl backdrop-blur-sm bg-white/60 dark:bg-slate-800/60 hover:bg-white/80 dark:hover:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-500">
                      <p className="text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400 mb-3 uppercase">Final Shares Owned</p>
                      <p className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 tabular-nums">
                        {formatNumber(summary.finalShares, 2)}
                      </p>
                    </div>

                    <div className="group p-6 rounded-2xl backdrop-blur-sm bg-white/60 dark:bg-slate-800/60 hover:bg-white/80 dark:hover:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-500">
                      <p className="text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400 mb-3 uppercase">Final Annual Dividend Income</p>
                      <p className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 tabular-nums">
                        {formatCurrency(summary.finalDividendIncome)}
                      </p>
                    </div>

                    <div className="group p-6 rounded-2xl backdrop-blur-sm bg-white/60 dark:bg-slate-800/60 hover:bg-white/80 dark:hover:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-500">
                      <p className="text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400 mb-3 uppercase">Final Yield on Cost</p>
                      <p className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 tabular-nums">
                        {formatPercent(summary.finalYieldOnCost)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Share Results - VIRAL FEATURE */}
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2 border-blue-300 dark:border-blue-700 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                        🎉 Love these results?
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Share your dividend plan and inspire others to start investing!
                      </p>
                    </div>
                    <ShareResults
                      results={{
                        finalPortfolioValue: Number(summary.finalPortfolioValue),
                        finalDividendIncome: Number(summary.finalDividendIncome),
                        totalDividendsEarned: Number(summary.totalDividendsEarned),
                        totalReturn: Number(summary.totalReturnPercent),
                        yearsCalculated: inputs.yearsToCalculate,
                        initialInvestment: Number(summary.initialInvestment),
                        monthlyContribution: parseFloat(inputs.monthlyContribution)
                      }}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Charts */}
              {results && (
                <ErrorBoundary>
                  <DripCharts results={results} />
                </ErrorBoundary>
              )}

              <Card className="overflow-hidden backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-700/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.12)] dark:hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.4)] transition-all duration-500">
                <CardHeader className="bg-gradient-to-br from-slate-50/90 to-white/90 dark:from-slate-900/90 dark:to-slate-800/90 border-b border-slate-200/60 dark:border-slate-700/60 pb-8 pt-10 px-10">
                  <CardTitle className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                    Year-by-Year Breakdown
                  </CardTitle>
                  <CardDescription className="text-base text-slate-600 dark:text-slate-400 mt-3">
                    Detailed progression of your investment
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="backdrop-blur-sm bg-slate-50/90 dark:bg-slate-800/90 sticky top-0">
                        <tr className="border-b border-slate-200 dark:border-slate-700">
                          <th className="text-left py-4 px-6 font-semibold text-slate-700 dark:text-slate-300 tracking-wide">Year</th>
                          <th className="text-right py-4 px-6 font-semibold text-slate-700 dark:text-slate-300 tracking-wide">Portfolio Value</th>
                          <th className="text-right py-4 px-6 font-semibold text-slate-700 dark:text-slate-300 tracking-wide">Shares</th>
                          <th className="text-right py-4 px-6 font-semibold text-slate-700 dark:text-slate-300 tracking-wide">Annual Dividend</th>
                          <th className="text-right py-4 px-6 font-semibold text-slate-700 dark:text-slate-300 tracking-wide">Total Return</th>
                          <th className="text-right py-4 px-6 font-semibold text-slate-700 dark:text-slate-300 tracking-wide">Yield on Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        {results?.map((result, index) => (
                          <tr
                            key={result.year}
                            className={`
                              ${index % 2 === 0 ? 'bg-white/40 dark:bg-slate-900/40' : 'bg-slate-50/40 dark:bg-slate-800/40'}
                              hover:bg-slate-100/60 dark:hover:bg-slate-700/60 transition-colors duration-300 border-b border-slate-100 dark:border-slate-800
                            `}
                          >
                            <td className="py-4 px-6 font-semibold text-slate-900 dark:text-slate-100 tabular-nums">{result.year}</td>
                            <td className="text-right py-4 px-6 font-semibold text-slate-900 dark:text-slate-100 tabular-nums">
                              {formatCurrency(result.portfolioValue)}
                            </td>
                            <td className="text-right py-4 px-6 text-slate-700 dark:text-slate-300 tabular-nums">{formatNumber(result.shares, 2)}</td>
                            <td className="text-right py-4 px-6 font-medium text-slate-700 dark:text-slate-300 tabular-nums">
                              {formatCurrency(result.annualDividend)}
                            </td>
                            <td className="text-right py-4 px-6 font-medium text-slate-700 dark:text-slate-300 tabular-nums">
                              {formatPercent(result.totalReturnPercent)}
                            </td>
                            <td className="text-right py-4 px-6 font-medium text-slate-700 dark:text-slate-300 tabular-nums">
                              {formatPercent(result.yieldOnCost)}
                            </td>
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