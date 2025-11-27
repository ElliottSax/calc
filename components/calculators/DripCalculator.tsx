"use client"

import { useState, useCallback, useEffect } from 'react'
import { Calculator, Info, TrendingUp, DollarSign, Sparkles } from 'lucide-react'
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
import { FieldTooltip } from '@/components/ui/field-tooltip'
import { DRIP_PRESETS, type PresetKey } from '@/lib/data/calculator-presets'
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

  // Pre-fill inputs from URL parameters (viral sharing)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)

      const initial = params.get('initial')
      const monthly = params.get('monthly')
      const years = params.get('years')
      const yieldParam = params.get('yield')
      const growth = params.get('growth')

      // Only pre-fill if at least one parameter is present
      if (initial || monthly || years || yieldParam || growth) {
        setInputs(prev => ({
          ...prev,
          ...(initial && { initialInvestment: initial }),
          ...(monthly && { monthlyContribution: monthly }),
          ...(years && { yearsToCalculate: parseInt(years) }),
          ...(yieldParam && { dividendYield: yieldParam }),
          ...(growth && { dividendGrowthRate: growth })
        }))

        // Track pre-filled visits
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'calculator_prefill', {
            calculator: 'drip',
            source: 'shared_link'
          })
        }
      }
    }
  }, [])

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
          {/* Quick Start Presets */}
          <Card className="backdrop-blur-xl bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200/60 dark:border-blue-800/60 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Quick Start Scenarios</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Try these pre-configured investment strategies
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {Object.entries(DRIP_PRESETS).map(([key, preset]) => (
                  <Button
                    key={key}
                    variant="outline"
                    size="sm"
                    className="h-auto py-3 px-3 flex flex-col items-center gap-2 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:border-blue-400 dark:hover:border-blue-600 transition-all group"
                    onClick={() => {
                      setInputs(preset.inputs)
                      toast({
                        title: `${preset.icon} ${preset.name} Loaded`,
                        description: preset.description
                      })
                      if (typeof window !== 'undefined' && (window as any).gtag) {
                        (window as any).gtag('event', 'preset_loaded', {
                          preset: key,
                          calculator: 'drip'
                        })
                      }
                    }}
                    title={preset.description}
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform">{preset.icon}</span>
                    <span className="text-xs font-semibold text-center leading-tight">
                      {preset.name}
                    </span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

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
                  <Label htmlFor="ticker" className="flex items-center">
                    Stock Ticker (Optional)
                    <FieldTooltip content="Enter a stock symbol to track (e.g., AAPL for Apple). This is optional and used for reference only." />
                  </Label>
                  <Input
                    id="ticker"
                    placeholder="e.g., AAPL"
                    value={inputs.ticker}
                    onChange={(e) => handleInputChange('ticker', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="initialInvestment" className="flex items-center">
                    Initial Investment ($)
                    <FieldTooltip content="The amount of money you plan to invest upfront. This is your starting capital that will begin generating dividends immediately." />
                  </Label>
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
                  <Label htmlFor="monthlyContribution" className="flex items-center">
                    Monthly Contribution ($)
                    <FieldTooltip content="How much you plan to invest each month. Regular contributions accelerate wealth building through dollar-cost averaging." />
                  </Label>
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
                  <Label htmlFor="yearsToCalculate" className="flex items-center">
                    Investment Period (Years)
                    <FieldTooltip content="How many years you plan to invest. Longer timeframes allow compound growth to work its magic. 20-30 years is typical for retirement planning." />
                  </Label>
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
                  <Label htmlFor="sharePrice" className="flex items-center">
                    Current Share Price ($)
                    <FieldTooltip content="The current market price per share of the stock. This determines how many shares your initial investment can buy." />
                  </Label>
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
                  <Label htmlFor="annualDividend" className="flex items-center">
                    Annual Dividend per Share ($)
                    <FieldTooltip content="The total dividend paid per share each year. For example, if a stock pays $0.50 quarterly, the annual dividend is $2.00." />
                  </Label>
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
                  <Label htmlFor="dividendYield" className="flex items-center">
                    Dividend Yield (%)
                    <FieldTooltip content="Automatically calculated as (Annual Dividend / Share Price) × 100. Shows the percentage return from dividends alone. Typical dividend yields range from 2-5%." />
                  </Label>
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
                  <Label htmlFor="reinvestDividends" className="cursor-pointer flex items-center">
                    Reinvest Dividends (DRIP)
                    <FieldTooltip content="When enabled, dividend payments automatically buy more shares instead of being paid as cash. This creates compound growth and is the core of DRIP investing." />
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
                  <Label htmlFor="dividendGrowthRate" className="flex items-center">
                    Dividend Growth Rate (%)
                    <FieldTooltip content="How much the dividend increases each year. Dividend aristocrats average 5-8% annual growth. Conservative estimate: 3-5%, Aggressive: 8-12%." />
                  </Label>
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
                  <Label htmlFor="shareAppreciationRate" className="flex items-center">
                    Share Price Growth Rate (%)
                    <FieldTooltip content="Expected annual increase in stock price. Historical S&P 500 average is 7-10%. This affects your total portfolio value but not dividend income." />
                  </Label>
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
                  <Label htmlFor="taxRate" className="flex items-center">
                    Tax Rate on Dividends (%)
                    <FieldTooltip content="Qualified dividends are taxed at 0%, 15%, or 20% based on income. Use 0% for tax-advantaged accounts like IRAs. Default 15% is typical for most investors." />
                  </Label>
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
                      calculatorType="drip"
                      results={{
                        finalPortfolioValue: Number(summary.finalPortfolioValue),
                        finalDividendIncome: Number(summary.finalDividendIncome),
                        totalDividendsEarned: Number(summary.totalDividendsEarned),
                        totalReturn: Number(summary.totalReturnPercent),
                        yearsCalculated: inputs.yearsToCalculate,
                        initialInvestment: Number(summary.initialInvestment),
                        monthlyContribution: parseFloat(inputs.monthlyContribution)
                      }}
                      additionalParams={{
                        yield: inputs.dividendYield,
                        growth: inputs.dividendGrowthRate
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