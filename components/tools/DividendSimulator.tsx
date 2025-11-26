'use client'

import React, { useState, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { motion, AnimatePresence } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart, Legend } from 'recharts'
import { Play, Pause, RotateCcw, TrendingUp, DollarSign, Calendar, Zap, Target, Award } from 'lucide-react'

interface SimulationScenario {
  id: string
  name: string
  description: string
  marketVolatility: number
  dividendGrowthRate: number
  inflationRate: number
  recessionProbability: number
  bullMarketProbability: number
}

const SCENARIOS: SimulationScenario[] = [
  {
    id: 'optimistic',
    name: 'Bull Market',
    description: 'Strong economic growth, low inflation',
    marketVolatility: 0.12,
    dividendGrowthRate: 0.08,
    inflationRate: 0.02,
    recessionProbability: 0.05,
    bullMarketProbability: 0.70
  },
  {
    id: 'realistic',
    name: 'Balanced Growth',
    description: 'Historical average market conditions',
    marketVolatility: 0.18,
    dividendGrowthRate: 0.05,
    inflationRate: 0.03,
    recessionProbability: 0.15,
    bullMarketProbability: 0.40
  },
  {
    id: 'pessimistic',
    name: 'Bear Market',
    description: 'Economic downturn, high volatility',
    marketVolatility: 0.35,
    dividendGrowthRate: 0.01,
    inflationRate: 0.05,
    recessionProbability: 0.40,
    bullMarketProbability: 0.10
  },
  {
    id: 'stagflation',
    name: 'Stagflation',
    description: 'High inflation with stagnant growth',
    marketVolatility: 0.25,
    dividendGrowthRate: -0.02,
    inflationRate: 0.08,
    recessionProbability: 0.30,
    bullMarketProbability: 0.15
  }
]

export function DividendSimulator() {
  const [isSimulating, setIsSimulating] = useState(false)
  const [currentYear, setCurrentYear] = useState(0)
  const [selectedScenario, setSelectedScenario] = useState<SimulationScenario>(SCENARIOS[1])
  const [simulationData, setSimulationData] = useState<any[]>([])
  const [inputs, setInputs] = useState({
    initialInvestment: 10000,
    monthlyContribution: 500,
    initialDividendYield: 3,
    simulationYears: 30,
    reinvestDividends: true,
    taxRate: 25
  })
  const [results, setResults] = useState({
    finalPortfolioValue: 0,
    totalDividendsEarned: 0,
    effectiveYield: 0,
    bestYear: { year: 0, value: 0 },
    worstYear: { year: 0, value: 0 },
    averageAnnualReturn: 0
  })

  const runSimulation = useCallback(() => {
    let data = []
    let portfolioValue = inputs.initialInvestment
    let totalDividends = 0
    let bestValue = 0
    let worstValue = Infinity
    let bestYear = 0
    let worstYear = 0

    for (let year = 0; year <= inputs.simulationYears; year++) {
      // Apply market conditions
      const marketMultiplier = 1 + (Math.random() - 0.5) * selectedScenario.marketVolatility
      const dividendGrowth = 1 + selectedScenario.dividendGrowthRate + (Math.random() - 0.5) * 0.02
      const inflation = 1 + selectedScenario.inflationRate

      // Calculate values
      portfolioValue *= marketMultiplier
      portfolioValue += inputs.monthlyContribution * 12

      const yearlyDividends = portfolioValue * (inputs.initialDividendYield / 100) * dividendGrowth
      const taxedDividends = yearlyDividends * (1 - inputs.taxRate / 100)
      
      if (inputs.reinvestDividends) {
        portfolioValue += taxedDividends
      }
      
      totalDividends += taxedDividends

      // Adjust for inflation
      const realValue = portfolioValue / Math.pow(inflation, year)

      // Track best/worst
      if (realValue > bestValue) {
        bestValue = realValue
        bestYear = year
      }
      if (realValue < worstValue && year > 0) {
        worstValue = realValue
        worstYear = year
      }

      data.push({
        year,
        portfolioValue: Math.round(portfolioValue),
        realValue: Math.round(realValue),
        dividends: Math.round(yearlyDividends),
        totalDividends: Math.round(totalDividends),
        effectiveYield: ((yearlyDividends / portfolioValue) * 100).toFixed(2)
      })
    }

    setSimulationData(data)
    setResults({
      finalPortfolioValue: Math.round(portfolioValue),
      totalDividendsEarned: Math.round(totalDividends),
      effectiveYield: ((totalDividends / inputs.initialInvestment) * 100 / inputs.simulationYears).toFixed(2) as any,
      bestYear: { year: bestYear, value: Math.round(bestValue) },
      worstYear: { year: worstYear, value: Math.round(worstValue) },
      averageAnnualReturn: (Math.pow(portfolioValue / inputs.initialInvestment, 1 / inputs.simulationYears) - 1) * 100
    })
  }, [inputs, selectedScenario])

  const startSimulation = () => {
    setIsSimulating(true)
    setCurrentYear(0)
    runSimulation()

    const interval = setInterval(() => {
      setCurrentYear(prev => {
        if (prev >= inputs.simulationYears) {
          setIsSimulating(false)
          clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, 100)
  }

  const resetSimulation = () => {
    setIsSimulating(false)
    setCurrentYear(0)
    setSimulationData([])
    setResults({
      finalPortfolioValue: 0,
      totalDividendsEarned: 0,
      effectiveYield: 0,
      bestYear: { year: 0, value: 0 },
      worstYear: { year: 0, value: 0 },
      averageAnnualReturn: 0
    })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-500" />
            Dividend Reinvestment Simulator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Scenario Selection */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {SCENARIOS.map(scenario => (
              <motion.div
                key={scenario.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card 
                  className={`cursor-pointer transition-all ${
                    selectedScenario.id === scenario.id 
                      ? 'ring-2 ring-primary bg-primary/5' 
                      : 'hover:shadow-lg'
                  }`}
                  onClick={() => setSelectedScenario(scenario)}
                >
                  <CardContent className="p-4">
                    <h3 className="font-semibold">{scenario.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {scenario.description}
                    </p>
                    <div className="mt-3 space-y-1 text-xs">
                      <div>Volatility: {(scenario.marketVolatility * 100).toFixed(0)}%</div>
                      <div>Growth: {(scenario.dividendGrowthRate * 100).toFixed(0)}%</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Input Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <Label>Initial Investment ($)</Label>
              <Input
                type="number"
                value={inputs.initialInvestment}
                onChange={(e) => setInputs({...inputs, initialInvestment: Number(e.target.value)})}
                disabled={isSimulating}
              />
            </div>
            <div>
              <Label>Monthly Contribution ($)</Label>
              <Input
                type="number"
                value={inputs.monthlyContribution}
                onChange={(e) => setInputs({...inputs, monthlyContribution: Number(e.target.value)})}
                disabled={isSimulating}
              />
            </div>
            <div>
              <Label>Initial Dividend Yield (%)</Label>
              <Input
                type="number"
                value={inputs.initialDividendYield}
                onChange={(e) => setInputs({...inputs, initialDividendYield: Number(e.target.value)})}
                disabled={isSimulating}
              />
            </div>
            <div>
              <Label>Simulation Years: {inputs.simulationYears}</Label>
              <Slider
                value={[inputs.simulationYears]}
                onValueChange={([value]) => setInputs({...inputs, simulationYears: value})}
                min={5}
                max={50}
                step={1}
                disabled={isSimulating}
                className="mt-2"
              />
            </div>
            <div>
              <Label>Tax Rate: {inputs.taxRate}%</Label>
              <Slider
                value={[inputs.taxRate]}
                onValueChange={([value]) => setInputs({...inputs, taxRate: value})}
                min={0}
                max={40}
                step={1}
                disabled={isSimulating}
                className="mt-2"
              />
            </div>
            <div className="flex items-center space-x-2 mt-6">
              <input
                type="checkbox"
                checked={inputs.reinvestDividends}
                onChange={(e) => setInputs({...inputs, reinvestDividends: e.target.checked})}
                disabled={isSimulating}
                className="rounded"
              />
              <Label>Reinvest Dividends (DRIP)</Label>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex gap-4">
            <Button
              onClick={isSimulating ? () => setIsSimulating(false) : startSimulation}
              className="flex items-center gap-2"
            >
              {isSimulating ? (
                <>
                  <Pause className="h-4 w-4" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="h-4 w-4" />
                  Run Simulation
                </>
              )}
            </Button>
            <Button
              onClick={resetSimulation}
              variant="outline"
              className="flex items-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>
          </div>

          {/* Progress Bar */}
          {simulationData.length > 0 && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Year {currentYear}</span>
                <span>{inputs.simulationYears} years</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <motion.div
                  className="bg-primary h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentYear / inputs.simulationYears) * 100}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
          )}

          {/* Visualization */}
          {simulationData.length > 0 && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Portfolio Growth Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={simulationData.slice(0, currentYear + 1)}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip formatter={(value: any) => `$${value.toLocaleString()}`} />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="portfolioValue"
                        stroke="#8b5cf6"
                        fill="#8b5cf6"
                        fillOpacity={0.3}
                        name="Portfolio Value"
                      />
                      <Area
                        type="monotone"
                        dataKey="realValue"
                        stroke="#06b6d4"
                        fill="#06b6d4"
                        fillOpacity={0.3}
                        name="Inflation-Adjusted"
                      />
                      <Area
                        type="monotone"
                        dataKey="totalDividends"
                        stroke="#10b981"
                        fill="#10b981"
                        fillOpacity={0.3}
                        name="Total Dividends"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Results Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Final Portfolio</p>
                          <p className="text-2xl font-bold">
                            ${results.finalPortfolioValue.toLocaleString()}
                          </p>
                        </div>
                        <TrendingUp className="h-8 w-8 text-green-500" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Total Dividends</p>
                          <p className="text-2xl font-bold">
                            ${results.totalDividendsEarned.toLocaleString()}
                          </p>
                        </div>
                        <DollarSign className="h-8 w-8 text-blue-500" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Annual Return</p>
                          <p className="text-2xl font-bold">
                            {results.averageAnnualReturn.toFixed(1)}%
                          </p>
                        </div>
                        <Award className="h-8 w-8 text-purple-500" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Best/Worst Years */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-green-50 dark:bg-green-950/20">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-green-700 dark:text-green-400">Best Year</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Year {results.bestYear.year}: ${results.bestYear.value.toLocaleString()}
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-red-50 dark:bg-red-950/20">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-red-700 dark:text-red-400">Worst Year</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Year {results.worstYear.year}: ${results.worstYear.value.toLocaleString()}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}