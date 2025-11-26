"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Calculator, FileText, PiggyBank, TrendingUp, Shield, AlertCircle, ChevronRight, Download, Info } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface TaxScenario {
  income: number
  dividendIncome: number
  capitalGains: number
  filingStatus: 'single' | 'married' | 'head'
  state: string
  age: number
  retirementContributions: number
  taxLossHarvesting: number
}

interface TaxCalculation {
  federalTax: number
  stateTax: number
  dividendTax: number
  capitalGainsTax: number
  totalTax: number
  effectiveRate: number
  afterTaxIncome: number
  savings: number
  strategies: Strategy[]
}

interface Strategy {
  title: string
  description: string
  potentialSavings: number
  difficulty: 'easy' | 'medium' | 'hard'
  icon: React.ElementType
}

const taxBrackets2024 = {
  single: [
    { min: 0, max: 11600, rate: 0.10 },
    { min: 11600, max: 47150, rate: 0.12 },
    { min: 47150, max: 100525, rate: 0.22 },
    { min: 100525, max: 191950, rate: 0.24 },
    { min: 191950, max: 243725, rate: 0.32 },
    { min: 243725, max: 609350, rate: 0.35 },
    { min: 609350, max: Infinity, rate: 0.37 }
  ],
  married: [
    { min: 0, max: 23200, rate: 0.10 },
    { min: 23200, max: 94300, rate: 0.12 },
    { min: 94300, max: 201050, rate: 0.22 },
    { min: 201050, max: 383900, rate: 0.24 },
    { min: 383900, max: 487450, rate: 0.32 },
    { min: 487450, max: 731200, rate: 0.35 },
    { min: 731200, max: Infinity, rate: 0.37 }
  ]
}

const stateTaxRates: Record<string, number> = {
  'California': 0.133,
  'New York': 0.109,
  'Texas': 0,
  'Florida': 0,
  'Illinois': 0.0495,
  'Pennsylvania': 0.0307,
  'Massachusetts': 0.05,
  'Washington': 0,
  'Nevada': 0,
  'Oregon': 0.099
}

export function TaxOptimizer() {
  const [scenario, setScenario] = useState<TaxScenario>({
    income: 85000,
    dividendIncome: 5000,
    capitalGains: 10000,
    filingStatus: 'single',
    state: 'California',
    age: 35,
    retirementContributions: 6000,
    taxLossHarvesting: 0
  })

  const [calculation, setCalculation] = useState<TaxCalculation | null>(null)
  const [showAdvanced, setShowAdvanced] = useState(false)

  const calculateTax = useCallback(() => {
    const { income, dividendIncome, capitalGains, filingStatus, state, retirementContributions, taxLossHarvesting } = scenario
    
    // Adjusted Gross Income
    const agi = income + dividendIncome + capitalGains - retirementContributions
    
    // Standard deduction
    const standardDeduction = filingStatus === 'married' ? 29200 : 14600
    const taxableIncome = Math.max(0, agi - standardDeduction)
    
    // Federal tax calculation
    const brackets = taxBrackets2024[filingStatus === 'married' ? 'married' : 'single']
    let federalTax = 0
    
    for (const bracket of brackets) {
      if (taxableIncome > bracket.min) {
        const taxableInThisBracket = Math.min(taxableIncome - bracket.min, bracket.max - bracket.min)
        federalTax += taxableInThisBracket * bracket.rate
      }
    }
    
    // Qualified dividend tax (simplified)
    const qualifiedDividendRate = taxableIncome < 47025 ? 0 : taxableIncome < 518900 ? 0.15 : 0.20
    const dividendTax = dividendIncome * qualifiedDividendRate
    
    // Capital gains tax
    const capitalGainsRate = taxableIncome < 47025 ? 0 : taxableIncome < 518900 ? 0.15 : 0.20
    const capitalGainsTax = Math.max(0, (capitalGains - taxLossHarvesting) * capitalGainsRate)
    
    // State tax
    const stateTax = (income + dividendIncome + capitalGains) * (stateTaxRates[state] || 0.05)
    
    // Total tax and calculations
    const totalTax = federalTax + stateTax + dividendTax + capitalGainsTax
    const totalIncome = income + dividendIncome + capitalGains
    const effectiveRate = (totalTax / totalIncome) * 100
    const afterTaxIncome = totalIncome - totalTax
    
    // Tax-saving strategies
    const strategies: Strategy[] = [
      {
        title: 'Max Out 401(k)',
        description: 'Contribute the maximum $23,000 to reduce taxable income',
        potentialSavings: (23000 - retirementContributions) * 0.24,
        difficulty: 'easy',
        icon: PiggyBank
      },
      {
        title: 'Tax Loss Harvesting',
        description: 'Offset capital gains with losses from underperforming investments',
        potentialSavings: Math.min(capitalGains, 3000) * capitalGainsRate,
        difficulty: 'medium',
        icon: TrendingUp
      },
      {
        title: 'Municipal Bonds',
        description: 'Invest in tax-free municipal bonds for dividend income',
        potentialSavings: dividendIncome * qualifiedDividendRate * 0.5,
        difficulty: 'easy',
        icon: Shield
      },
      {
        title: 'Qualified Opportunity Zones',
        description: 'Defer and reduce capital gains tax through QOZ investments',
        potentialSavings: capitalGains * 0.1,
        difficulty: 'hard',
        icon: Calculator
      },
      {
        title: 'HSA Contributions',
        description: 'Triple tax advantage: deductible, tax-free growth, tax-free withdrawals',
        potentialSavings: 4150 * 0.24,
        difficulty: 'easy',
        icon: FileText
      }
    ].sort((a, b) => b.potentialSavings - a.potentialSavings)
    
    const totalPotentialSavings = strategies.reduce((sum, s) => sum + s.potentialSavings, 0)
    
    setCalculation({
      federalTax,
      stateTax,
      dividendTax,
      capitalGainsTax,
      totalTax,
      effectiveRate,
      afterTaxIncome,
      savings: totalPotentialSavings,
      strategies
    })
  }, [scenario])

  const handleInputChange = (field: keyof TaxScenario, value: any) => {
    setScenario(prev => ({ ...prev, [field]: value }))
  }

  const getDifficultyColor = (difficulty: Strategy['difficulty']) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500 text-white'
      case 'medium': return 'bg-yellow-500 text-white'
      case 'hard': return 'bg-red-500 text-white'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30">
          <Shield className="w-4 h-4 text-green-400 mr-2" />
          <span className="text-green-300 text-sm font-medium">Tax Optimization Engine</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
          Minimize Taxes, Maximize Returns
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Advanced tax strategies for dividend investors. Calculate your tax liability and discover 
          personalized strategies to legally reduce your tax burden.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              Tax Scenario Input
            </CardTitle>
            <CardDescription className="text-gray-400">
              Enter your financial information for personalized tax optimization
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="income" className="text-gray-300">Annual Income ($)</Label>
                <Input
                  id="income"
                  type="number"
                  value={scenario.income}
                  onChange={(e) => handleInputChange('income', Number(e.target.value))}
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
              
              <div>
                <Label htmlFor="dividendIncome" className="text-gray-300">Dividend Income ($)</Label>
                <Input
                  id="dividendIncome"
                  type="number"
                  value={scenario.dividendIncome}
                  onChange={(e) => handleInputChange('dividendIncome', Number(e.target.value))}
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
              
              <div>
                <Label htmlFor="capitalGains" className="text-gray-300">Capital Gains ($)</Label>
                <Input
                  id="capitalGains"
                  type="number"
                  value={scenario.capitalGains}
                  onChange={(e) => handleInputChange('capitalGains', Number(e.target.value))}
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
              
              <div>
                <Label htmlFor="age" className="text-gray-300">Age</Label>
                <Input
                  id="age"
                  type="number"
                  value={scenario.age}
                  onChange={(e) => handleInputChange('age', Number(e.target.value))}
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
              
              <div>
                <Label htmlFor="filingStatus" className="text-gray-300">Filing Status</Label>
                <Select
                  value={scenario.filingStatus}
                  onValueChange={(value) => handleInputChange('filingStatus', value)}
                >
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="married">Married Filing Jointly</SelectItem>
                    <SelectItem value="head">Head of Household</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="state" className="text-gray-300">State</Label>
                <Select
                  value={scenario.state}
                  onValueChange={(value) => handleInputChange('state', value)}
                >
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(stateTaxRates).map(state => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Advanced Options */}
            <div className="pt-4 border-t border-slate-600">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="border-slate-600 text-gray-300 mb-4"
              >
                {showAdvanced ? 'Hide' : 'Show'} Advanced Options
                <ChevronRight className={`w-4 h-4 ml-2 transition-transform ${
                  showAdvanced ? 'rotate-90' : ''
                }`} />
              </Button>
              
              {showAdvanced && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="retirement" className="text-gray-300">401(k) Contributions ($)</Label>
                    <Input
                      id="retirement"
                      type="number"
                      value={scenario.retirementContributions}
                      onChange={(e) => handleInputChange('retirementContributions', Number(e.target.value))}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="harvesting" className="text-gray-300">Tax Loss Harvesting ($)</Label>
                    <Input
                      id="harvesting"
                      type="number"
                      value={scenario.taxLossHarvesting}
                      onChange={(e) => handleInputChange('taxLossHarvesting', Number(e.target.value))}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>
              )}
            </div>

            <Button
              onClick={calculateTax}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
              size="lg"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Calculate Tax & Optimize
            </Button>
          </CardContent>
        </Card>

        {/* Results Section */}
        {calculation && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <Card className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 backdrop-blur-sm border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">Tax Analysis Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-red-500/20 rounded-lg border border-red-500/30">
                    <div className="text-2xl font-bold text-red-400">
                      ${calculation.totalTax.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-300">Total Tax Liability</div>
                  </div>
                  
                  <div className="p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                    <div className="text-2xl font-bold text-green-400">
                      ${calculation.afterTaxIncome.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-300">After-Tax Income</div>
                  </div>
                  
                  <div className="p-4 bg-blue-500/20 rounded-lg border border-blue-500/30">
                    <div className="text-2xl font-bold text-blue-400">
                      {calculation.effectiveRate.toFixed(1)}%
                    </div>
                    <div className="text-sm text-gray-300">Effective Tax Rate</div>
                  </div>
                  
                  <div className="p-4 bg-purple-500/20 rounded-lg border border-purple-500/30">
                    <div className="text-2xl font-bold text-purple-400">
                      ${calculation.savings.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-300">Potential Savings</div>
                  </div>
                </div>

                {/* Tax Breakdown */}
                <div className="space-y-3">
                  <h4 className="text-white font-semibold">Tax Breakdown</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Federal Tax</span>
                        <span className="text-white">${calculation.federalTax.toLocaleString()}</span>
                      </div>
                      <Progress value={(calculation.federalTax / calculation.totalTax) * 100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">State Tax</span>
                        <span className="text-white">${calculation.stateTax.toLocaleString()}</span>
                      </div>
                      <Progress value={(calculation.stateTax / calculation.totalTax) * 100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Dividend Tax</span>
                        <span className="text-white">${calculation.dividendTax.toLocaleString()}</span>
                      </div>
                      <Progress value={(calculation.dividendTax / calculation.totalTax) * 100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Capital Gains Tax</span>
                        <span className="text-white">${calculation.capitalGainsTax.toLocaleString()}</span>
                      </div>
                      <Progress value={(calculation.capitalGainsTax / calculation.totalTax) * 100} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tax-Saving Strategies */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  Recommended Tax Strategies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {calculation.strategies.map((strategy, index) => {
                  const Icon = strategy.icon
                  return (
                    <motion.div
                      key={strategy.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-green-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-white">{strategy.title}</h4>
                            <Badge className={getDifficultyColor(strategy.difficulty)}>
                              {strategy.difficulty}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-300 mb-2">{strategy.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-green-400 font-semibold">
                              Save ~${strategy.potentialSavings.toLocaleString()}
                            </span>
                            <Button size="sm" variant="outline" className="border-slate-600 text-gray-300">
                              Learn More
                              <ChevronRight className="w-3 h-3 ml-1" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Export Options */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Info className="w-4 h-4" />
                    <span className="text-sm">Generate detailed tax report</span>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Export PDF Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  )
}