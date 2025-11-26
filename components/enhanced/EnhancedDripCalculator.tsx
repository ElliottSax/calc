"use client"

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Calculator, Info, TrendingUp, DollarSign, Target, Award, Sparkles, Zap, BarChart3, Users, Calendar, Briefcase, Download } from 'lucide-react'
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
import { trackCalculatorUse } from '@/lib/analytics/tracking'
import { DripCharts } from '@/components/visualizations/DripCharts'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { SocialShare } from '@/components/social/SocialShare'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { AchievementSystem } from '@/components/gamification/AchievementSystem'
import { DividendComparison } from '@/components/tools/DividendComparison'
import { DividendScreener } from '@/components/tools/DividendScreener'
import { AnimatedHero } from '@/components/hero/AnimatedHero'
import { StockLookup } from '@/components/tools/StockLookup'
import { InvestmentRecommendations } from '@/components/ai/InvestmentRecommendations'
import { PortfolioTracker } from '@/components/dashboard/PortfolioTracker'
import { MarketInsights } from '@/components/news/MarketInsights'
import { TaxOptimizer } from '@/components/tools/TaxOptimizer'
import { DividendSimulator } from '@/components/tools/DividendSimulator'
import { RetirementPlanner } from '@/components/tools/RetirementPlanner'
import { DividendCalendar } from '@/components/tools/DividendCalendar'
import { ExportTools } from '@/components/tools/ExportTools'
import type { DripCalculatorInputs, DripCalculationResult, DripSummary } from '@/types/calculator'

const QuickPresets = [
  {
    name: "Conservative Growth",
    icon: "🏦",
    color: "from-blue-500 to-blue-600",
    inputs: {
      initialInvestment: "25000",
      monthlyContribution: "800",
      sharePrice: "50",
      annualDividend: "2.5",
      dividendGrowthRate: "3",
      shareAppreciationRate: "6",
      yearsToCalculate: 25,
      reinvestDividends: true
    }
  },
  {
    name: "Aggressive Builder",
    icon: "🚀",
    color: "from-purple-500 to-purple-600", 
    inputs: {
      initialInvestment: "15000",
      monthlyContribution: "1200",
      sharePrice: "75",
      annualDividend: "1.8",
      dividendGrowthRate: "8",
      shareAppreciationRate: "10",
      yearsToCalculate: 20,
      reinvestDividends: true
    }
  },
  {
    name: "Income Focus",
    icon: "💰",
    color: "from-green-500 to-green-600",
    inputs: {
      initialInvestment: "50000",
      monthlyContribution: "500",
      sharePrice: "25",
      annualDividend: "1.5",
      dividendGrowthRate: "4",
      shareAppreciationRate: "4",
      yearsToCalculate: 30,
      reinvestDividends: true
    }
  }
]

export function EnhancedDripCalculator() {
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
  const [activeTab, setActiveTab] = useState('hero')
  const [showAchievements, setShowAchievements] = useState(false)

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
      
      // Trigger success animations and achievements
      setShowAchievements(true)
      
      toast({
        title: "🎉 Calculation Complete!",
        description: "Your dividend empire awaits! Check out those results.",
      })
      
      // Auto-switch to results tab
      setActiveTab('results')
      
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

  const loadPreset = (preset: typeof QuickPresets[0]) => {
    setInputs(prev => ({
      ...prev,
      ...preset.inputs,
      ticker: prev.ticker, // Keep the ticker
      taxRate: prev.taxRate, // Keep tax rate
      dividendYield: ((parseFloat(preset.inputs.annualDividend) / parseFloat(preset.inputs.sharePrice)) * 100).toFixed(2)
    }))
    
    toast({
      title: `${preset.icon} Preset Loaded!`,
      description: `${preset.name} strategy is ready to calculate`,
    })
  }

  const startCalculating = () => {
    setActiveTab('calculator')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Top Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center"
        >
          <div className="flex items-center space-x-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
            >
              <Sparkles className="w-4 h-4 text-white" />
            </motion.div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Dividend Empire Builder
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {summary && (
              <SocialShare
                title={`🚀 My Dividend Strategy: $${summary.finalPortfolioValue.toLocaleString()} in ${inputs.yearsToCalculate} years!`}
                description={`Started with $${summary.initialInvestment.toLocaleString()}, could reach $${summary.finalPortfolioValue.toLocaleString()} through dividend reinvesting. The power of compound growth! 📈`}
                hashtags={['DividendInvesting', 'DRIP', 'PassiveIncome', 'WealthBuilding']}
              />
            )}
          </div>
        </motion.div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-1 bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-1">
            <TabsTrigger value="hero" className="text-xs">
              <Zap className="w-3 h-3 md:mr-1" />
              <span className="hidden md:inline">Home</span>
            </TabsTrigger>
            <TabsTrigger value="calculator" className="text-xs">
              <Calculator className="w-3 h-3 md:mr-1" />
              <span className="hidden md:inline">Calculate</span>
            </TabsTrigger>
            <TabsTrigger value="results" disabled={!results} className="text-xs">
              <BarChart3 className="w-3 h-3 md:mr-1" />
              <span className="hidden md:inline">Results</span>
            </TabsTrigger>
            <TabsTrigger value="simulator" className="text-xs">
              <Zap className="w-3 h-3 md:mr-1" />
              <span className="hidden md:inline">Simulator</span>
            </TabsTrigger>
            <TabsTrigger value="retirement" className="text-xs">
              <Target className="w-3 h-3 md:mr-1" />
              <span className="hidden md:inline">Retirement</span>
            </TabsTrigger>
            <TabsTrigger value="tax" className="text-xs">
              <DollarSign className="w-3 h-3 md:mr-1" />
              <span className="hidden md:inline">Tax</span>
            </TabsTrigger>
            <TabsTrigger value="calendar" className="text-xs">
              <Calendar className="w-3 h-3 md:mr-1" />
              <span className="hidden md:inline">Calendar</span>
            </TabsTrigger>
            <TabsTrigger value="news" className="text-xs">
              <TrendingUp className="w-3 h-3 md:mr-1" />
              <span className="hidden md:inline">News</span>
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="text-xs">
              <Briefcase className="w-3 h-3 md:mr-1" />
              <span className="hidden md:inline">Portfolio</span>
            </TabsTrigger>
            <TabsTrigger value="compare" className="text-xs">
              <BarChart3 className="w-3 h-3 md:mr-1" />
              <span className="hidden md:inline">Compare</span>
            </TabsTrigger>
            <TabsTrigger value="screener" className="text-xs">
              <Users className="w-3 h-3 md:mr-1" />
              <span className="hidden md:inline">Screener</span>
            </TabsTrigger>
            <TabsTrigger value="achievements" className="text-xs">
              <Award className="w-3 h-3 md:mr-1" />
              <span className="hidden md:inline">Progress</span>
            </TabsTrigger>
            <TabsTrigger value="export" className="text-xs">
              <Download className="w-3 h-3 md:mr-1" />
              <span className="hidden md:inline">Export</span>
            </TabsTrigger>
          </TabsList>

          {/* Hero Tab */}
          <TabsContent value="hero" className="space-y-0">
            <AnimatedHero onStartCalculating={startCalculating} />
          </TabsContent>

          {/* Calculator Tab */}
          <TabsContent value="calculator" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Quick Presets */}
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
                    Quick Start Strategies
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Choose a proven strategy template to get started instantly
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {QuickPresets.map((preset, index) => (
                      <motion.div
                        key={preset.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          variant="outline"
                          onClick={() => loadPreset(preset)}
                          className={`w-full h-auto p-4 bg-gradient-to-br ${preset.color} border-0 text-white hover:opacity-90 transition-opacity`}
                        >
                          <div className="text-center space-y-2">
                            <div className="text-2xl">{preset.icon}</div>
                            <div className="font-semibold">{preset.name}</div>
                            <div className="text-xs opacity-90">
                              ${parseInt(preset.inputs.initialInvestment).toLocaleString()} + ${parseInt(preset.inputs.monthlyContribution)}/mo
                            </div>
                          </div>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Main Calculator Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <DollarSign className="h-5 w-5 text-green-400" />
                      Investment Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="ticker" className="text-gray-300">Stock Ticker (Optional)</Label>
                      <Input
                        id="ticker"
                        placeholder="e.g., AAPL, MSFT, KO"
                        value={inputs.ticker}
                        onChange={(e) => handleInputChange('ticker', e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="initialInvestment" className="text-gray-300">Initial Investment ($)</Label>
                      <Input
                        id="initialInvestment"
                        type="number"
                        min="0"
                        step="100"
                        value={inputs.initialInvestment}
                        onChange={(e) => handleInputChange('initialInvestment', e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="monthlyContribution" className="text-gray-300">Monthly Contribution ($)</Label>
                      <Input
                        id="monthlyContribution"
                        type="number"
                        min="0"
                        step="50"
                        value={inputs.monthlyContribution}
                        onChange={(e) => handleInputChange('monthlyContribution', e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="yearsToCalculate" className="text-gray-300">Investment Period (Years)</Label>
                      <Input
                        id="yearsToCalculate"
                        type="number"
                        min="1"
                        max="50"
                        value={inputs.yearsToCalculate}
                        onChange={(e) => handleInputChange('yearsToCalculate', parseInt(e.target.value) || 20)}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <TrendingUp className="h-5 w-5 text-blue-400" />
                      Stock & Dividend Info
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="sharePrice" className="text-gray-300">Current Share Price ($)</Label>
                      <Input
                        id="sharePrice"
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={inputs.sharePrice}
                        onChange={(e) => handleInputChange('sharePrice', e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="annualDividend" className="text-gray-300">Annual Dividend per Share ($)</Label>
                      <Input
                        id="annualDividend"
                        type="number"
                        min="0"
                        step="0.01"
                        value={inputs.annualDividend}
                        onChange={(e) => handleInputChange('annualDividend', e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="dividendYield" className="text-gray-300">Dividend Yield (%)</Label>
                      <Input
                        id="dividendYield"
                        type="number"
                        min="0"
                        step="0.1"
                        value={inputs.dividendYield}
                        disabled
                        className="bg-slate-600 border-slate-500 text-gray-300"
                      />
                      <p className="text-xs text-gray-400 mt-1">Auto-calculated from price and dividend</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="reinvestDividends"
                        checked={inputs.reinvestDividends}
                        onCheckedChange={(checked) => handleInputChange('reinvestDividends', checked as boolean)}
                      />
                      <Label htmlFor="reinvestDividends" className="cursor-pointer text-gray-300">
                        Enable DRIP (Reinvest Dividends)
                      </Label>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Advanced Options */}
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Info className="h-5 w-5 text-purple-400" />
                    Growth & Tax Assumptions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="dividendGrowthRate" className="text-gray-300">Dividend Growth Rate (%)</Label>
                      <Input
                        id="dividendGrowthRate"
                        type="number"
                        min="-10"
                        max="30"
                        step="0.5"
                        value={inputs.dividendGrowthRate}
                        onChange={(e) => handleInputChange('dividendGrowthRate', e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="shareAppreciationRate" className="text-gray-300">Share Price Growth Rate (%)</Label>
                      <Input
                        id="shareAppreciationRate"
                        type="number"
                        min="-10"
                        max="30"
                        step="0.5"
                        value={inputs.shareAppreciationRate}
                        onChange={(e) => handleInputChange('shareAppreciationRate', e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="taxRate" className="text-gray-300">Tax Rate on Dividends (%)</Label>
                      <Input
                        id="taxRate"
                        type="number"
                        min="0"
                        max="50"
                        step="1"
                        value={inputs.taxRate}
                        onChange={(e) => handleInputChange('taxRate', e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Calculate Button */}
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    onClick={calculate}
                    disabled={loading}
                    className="px-12 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold text-lg rounded-xl shadow-2xl shadow-purple-500/25"
                  >
                    {loading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-3"
                      />
                    ) : (
                      <Calculator className="mr-3 h-6 w-6" />
                    )}
                    {loading ? 'Building Your Empire...' : 'Calculate My Dividend Empire'}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </TabsContent>

          {/* Results Tab */}
          <TabsContent value="results" className="space-y-6">
            <AnimatePresence>
              {summary && results && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* Results Summary */}
                  <Card className="bg-gradient-to-br from-green-500/20 to-blue-500/20 border-green-500/30 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-2xl text-white flex items-center gap-2">
                          <Award className="w-6 h-6 text-yellow-400" />
                          Your Dividend Empire
                        </CardTitle>
                        {summary && (
                          <SocialShare
                            title={`🎯 Dividend Success Story: $${summary.finalPortfolioValue.toLocaleString()} Portfolio!`}
                            description={`Started with $${summary.initialInvestment.toLocaleString()}, building to $${summary.finalPortfolioValue.toLocaleString()} in ${inputs.yearsToCalculate} years through smart dividend reinvesting! 🚀`}
                            hashtags={['DividendSuccess', 'DRIP', 'InvestmentGoals']}
                          />
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="text-center p-4 bg-white/10 rounded-lg"
                        >
                          <div className="text-3xl font-bold text-green-400">{formatCurrency(summary.finalPortfolioValue)}</div>
                          <div className="text-gray-300 text-sm">Final Portfolio Value</div>
                        </motion.div>
                        
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="text-center p-4 bg-white/10 rounded-lg"
                        >
                          <div className="text-3xl font-bold text-blue-400">{formatCurrency(summary.finalDividendIncome)}</div>
                          <div className="text-gray-300 text-sm">Annual Dividend Income</div>
                        </motion.div>
                        
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="text-center p-4 bg-white/10 rounded-lg"
                        >
                          <div className="text-3xl font-bold text-purple-400">{formatPercent(summary.totalReturnPercent)}</div>
                          <div className="text-gray-300 text-sm">Total Return</div>
                        </motion.div>
                        
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          className="text-center p-4 bg-white/10 rounded-lg"
                        >
                          <div className="text-3xl font-bold text-yellow-400">{formatPercent(summary.annualizedReturn)}</div>
                          <div className="text-gray-300 text-sm">Annualized Return</div>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Interactive Charts */}
                  <ErrorBoundary>
                    <DripCharts results={results} />
                  </ErrorBoundary>

                  {/* Detailed Results Table */}
                  <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white">Year-by-Year Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-slate-600 text-gray-300">
                              <th className="text-left py-3">Year</th>
                              <th className="text-right py-3">Portfolio Value</th>
                              <th className="text-right py-3">Shares</th>
                              <th className="text-right py-3">Annual Dividend</th>
                              <th className="text-right py-3">Total Return</th>
                            </tr>
                          </thead>
                          <tbody>
                            {results.map((result, index) => (
                              <motion.tr
                                key={result.year}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className={`${index % 2 === 0 ? 'bg-slate-700/30' : 'bg-slate-800/30'} text-white hover:bg-slate-600/30 transition-colors`}
                              >
                                <td className="py-3 font-medium">{result.year}</td>
                                <td className="text-right py-3 font-semibold text-green-400">{formatCurrency(result.portfolioValue)}</td>
                                <td className="text-right py-3">{formatNumber(result.shares, 2)}</td>
                                <td className="text-right py-3 text-blue-400">{formatCurrency(result.annualDividend)}</td>
                                <td className="text-right py-3 text-purple-400">{formatPercent(result.totalReturnPercent)}</td>
                              </motion.tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </TabsContent>

          {/* Dividend Simulator Tab */}
          <TabsContent value="simulator" className="space-y-6">
            <DividendSimulator />
          </TabsContent>

          {/* Retirement Planner Tab */}
          <TabsContent value="retirement" className="space-y-6">
            <RetirementPlanner />
          </TabsContent>

          {/* Tax Optimizer Tab */}
          <TabsContent value="tax" className="space-y-6">
            <TaxOptimizer />
          </TabsContent>

          {/* Dividend Calendar Tab */}
          <TabsContent value="calendar" className="space-y-6">
            <DividendCalendar />
          </TabsContent>

          {/* Market News Tab */}
          <TabsContent value="news" className="space-y-6">
            <MarketInsights />
          </TabsContent>

          {/* Portfolio Tracker Tab */}
          <TabsContent value="portfolio" className="space-y-6">
            <PortfolioTracker />
          </TabsContent>

          {/* Comparison Tab */}
          <TabsContent value="compare" className="space-y-6">
            <DividendComparison />
          </TabsContent>

          {/* Screener Tab */}
          <TabsContent value="screener" className="space-y-6">
            <DividendScreener />
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <AchievementSystem />
          </TabsContent>

          {/* Export Tab */}
          <TabsContent value="export" className="space-y-6">
            <ExportTools
              data={summary ? {
                portfolioValue: Number(summary.finalPortfolioValue),
                annualDividends: Number(summary.finalDividendIncome),
                totalReturn: Number(summary.totalReturnPercent),
                years: inputs.yearsToCalculate,
                monthlyContribution: Number(inputs.monthlyContribution),
                initialInvestment: Number(inputs.initialInvestment),
                strategy: inputs.ticker ? `${inputs.ticker} DRIP Strategy` : 'Custom Dividend Strategy'
              } : undefined}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}