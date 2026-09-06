"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Plus, X, TrendingUp, BarChart3, Target, ArrowRight, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts'

interface ComparisonScenario {
  id: string
  name: string
  initialInvestment: number
  monthlyContribution: number
  dividendYield: number
  dividendGrowth: number
  shareGrowth: number
  color: string
}

const defaultScenarios: ComparisonScenario[] = [
  {
    id: '1',
    name: 'Conservative Portfolio',
    initialInvestment: 10000,
    monthlyContribution: 500,
    dividendYield: 3.5,
    dividendGrowth: 3,
    shareGrowth: 6,
    color: '#3B82F6'
  },
  {
    id: '2',
    name: 'Aggressive Growth',
    initialInvestment: 10000,
    monthlyContribution: 500,
    dividendYield: 2.1,
    dividendGrowth: 8,
    shareGrowth: 12,
    color: '#10B981'
  }
]

const calculateScenarioData = (scenario: ComparisonScenario, years: number) => {
  const data = []
  let portfolioValue = scenario.initialInvestment
  let totalDividends = 0
  
  for (let year = 0; year <= years; year++) {
    if (year > 0) {
      // Add monthly contributions
      portfolioValue += scenario.monthlyContribution * 12
      
      // Calculate dividends
      const yearlyDividends = portfolioValue * (scenario.dividendYield / 100)
      totalDividends += yearlyDividends
      
      // Reinvest dividends
      portfolioValue += yearlyDividends
      
      // Apply share price growth
      portfolioValue *= (1 + scenario.shareGrowth / 100)
      
      // Apply dividend growth for next year
      // This is simplified - in reality, dividend growth affects future yields
    }
    
    data.push({
      year,
      [`${scenario.name}_portfolio`]: Math.round(portfolioValue),
      [`${scenario.name}_dividends`]: Math.round(totalDividends),
      [`${scenario.name}_total`]: Math.round(portfolioValue + totalDividends)
    })
  }
  
  return data
}

export function DividendComparison() {
  const [scenarios, setScenarios] = useState<ComparisonScenario[]>(defaultScenarios)
  const [timeHorizon, setTimeHorizon] = useState(20)
  const [showDividends, setShowDividends] = useState(true)
  
  const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4']

  const addScenario = () => {
    const newScenario: ComparisonScenario = {
      id: Date.now().toString(),
      name: `Scenario ${scenarios.length + 1}`,
      initialInvestment: 10000,
      monthlyContribution: 500,
      dividendYield: 3.0,
      dividendGrowth: 4,
      shareGrowth: 7,
      color: colors[scenarios.length % colors.length]
    }
    setScenarios([...scenarios, newScenario])
  }

  const removeScenario = (id: string) => {
    setScenarios(scenarios.filter(s => s.id !== id))
  }

  const updateScenario = (id: string, field: keyof ComparisonScenario, value: any) => {
    setScenarios(scenarios.map(s => 
      s.id === id ? { ...s, [field]: value } : s
    ))
  }

  // Combine all scenario data
  const chartData = scenarios.reduce((acc, scenario) => {
    const scenarioData = calculateScenarioData(scenario, timeHorizon)
    
    scenarioData.forEach((data, index) => {
      if (!acc[index]) {
        acc[index] = { year: data.year }
      }
      Object.keys(data).forEach(key => {
        if (key !== 'year') {
          acc[index][key] = data[key]
        }
      })
    })
    
    return acc
  }, [] as any[])

  const finalValues = scenarios.map(scenario => {
    const data = calculateScenarioData(scenario, timeHorizon)
    const finalData = data[data.length - 1]
    return {
      scenario,
      portfolio: finalData[`${scenario.name}_portfolio`],
      dividends: finalData[`${scenario.name}_dividends`],
      total: finalData[`${scenario.name}_total`]
    }
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30">
          <Zap className="w-4 h-4 text-purple-400 mr-2" />
          <span className="text-purple-300 text-sm font-medium">Smart Scenario Analysis</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
          Compare Dividend Strategies
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Run side-by-side comparisons of different dividend investment strategies. 
          Visualize how different yields, growth rates, and contributions impact your wealth.
        </p>
      </motion.div>

      {/* Controls */}
      <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-white flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Comparison Settings
            </CardTitle>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Label htmlFor="timeHorizon" className="text-gray-300">Time Horizon:</Label>
                <Input
                  id="timeHorizon"
                  type="number"
                  value={timeHorizon}
                  onChange={(e) => setTimeHorizon(Number(e.target.value))}
                  className="w-20 bg-slate-700 border-slate-600 text-white"
                  min="1"
                  max="50"
                />
                <span className="text-gray-300">years</span>
              </div>
              <Button
                onClick={addScenario}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                disabled={scenarios.length >= 5}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Scenario
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={scenario.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-lg border border-slate-600"
                style={{ borderLeftColor: scenario.color, borderLeftWidth: '4px' }}
              >
                <div className="flex justify-between items-start mb-4">
                  <Input
                    value={scenario.name}
                    onChange={(e) => updateScenario(scenario.id, 'name', e.target.value)}
                    className="text-lg font-semibold bg-transparent border-none text-white p-0 h-auto"
                  />
                  {scenarios.length > 1 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeScenario(scenario.id)}
                      className="border-slate-600 text-gray-400 hover:bg-red-500 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div>
                    <Label className="text-gray-300">Initial Investment</Label>
                    <Input
                      type="number"
                      value={scenario.initialInvestment}
                      onChange={(e) => updateScenario(scenario.id, 'initialInvestment', Number(e.target.value))}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-gray-300">Monthly Contribution</Label>
                    <Input
                      type="number"
                      value={scenario.monthlyContribution}
                      onChange={(e) => updateScenario(scenario.id, 'monthlyContribution', Number(e.target.value))}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-gray-300">Dividend Yield (%)</Label>
                    <Input
                      type="number"
                      step="0.1"
                      value={scenario.dividendYield}
                      onChange={(e) => updateScenario(scenario.id, 'dividendYield', Number(e.target.value))}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-gray-300">Dividend Growth (%)</Label>
                    <Input
                      type="number"
                      step="0.1"
                      value={scenario.dividendGrowth}
                      onChange={(e) => updateScenario(scenario.id, 'dividendGrowth', Number(e.target.value))}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-gray-300">Share Growth (%)</Label>
                    <Input
                      type="number"
                      step="0.1"
                      value={scenario.shareGrowth}
                      onChange={(e) => updateScenario(scenario.id, 'shareGrowth', Number(e.target.value))}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Results Summary */}
      <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <BarChart3 className="w-5 h-5 mr-2" />
            Final Results After {timeHorizon} Years
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {finalValues
              .sort((a, b) => b.total - a.total)
              .map((result, index) => (
                <motion.div
                  key={result.scenario.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-lg"
                  style={{ 
                    backgroundColor: `${result.scenario.color}20`,
                    borderLeft: `4px solid ${result.scenario.color}`
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <Badge 
                      className="text-white"
                      style={{ backgroundColor: result.scenario.color }}
                    >
                      #{index + 1}
                    </Badge>
                    <div>
                      <h4 className="font-semibold text-white">{result.scenario.name}</h4>
                      <p className="text-gray-400 text-sm">
                        Portfolio: ${result.portfolio.toLocaleString()} | 
                        Dividends: ${result.dividends.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">
                      ${result.total.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400">Total Value</div>
                  </div>
                </motion.div>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* Interactive Chart */}
      <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-white flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Portfolio Growth Comparison
            </CardTitle>
            <Button
              variant="outline"
              onClick={() => setShowDividends(!showDividends)}
              className="border-slate-600 text-gray-300"
            >
              {showDividends ? 'Hide' : 'Show'} Dividends
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <defs>
                {scenarios.map(scenario => (
                  <linearGradient key={scenario.id} id={`gradient-${scenario.id}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={scenario.color} stopOpacity={0.8}/>
                    <stop offset="95%" stopColor={scenario.color} stopOpacity={0.1}/>
                  </linearGradient>
                ))}
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-gray-700" />
              <XAxis 
                dataKey="year" 
                className="text-gray-400"
                label={{ value: 'Years', position: 'insideBottom', offset: -5 }}
              />
              <YAxis 
                className="text-gray-400"
                tickFormatter={(value: number) => `$${(value / 1000).toFixed(0)}k`}
                label={{ value: 'Portfolio Value', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #475569',
                  borderRadius: '8px',
                  color: '#fff'
                }}
                formatter={(value: any) => [`$${Number(value).toLocaleString()}`, '']}
              />
              <Legend />
              
              {scenarios.map(scenario => (
                <Area
                  key={scenario.id}
                  type="monotone"
                  dataKey={showDividends ? `${scenario.name}_total` : `${scenario.name}_portfolio`}
                  name={scenario.name}
                  stroke={scenario.color}
                  strokeWidth={2}
                  fill={`url(#gradient-${scenario.id})`}
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}