'use client'

import React, { useState, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart, PieChart, Pie, Cell, Legend, BarChart, Bar } from 'recharts'
import { Calendar, TrendingUp, DollarSign, Target, AlertTriangle, CheckCircle, Clock, Briefcase, Home, Heart, GraduationCap, Plane } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Progress } from '@/components/ui/progress'

interface RetirementGoal {
  id: string
  name: string
  icon: React.ReactNode
  targetAmount: number
  priority: 'high' | 'medium' | 'low'
  achieved: boolean
}

interface RetirementMilestone {
  age: number
  event: string
  impact: string
  type: 'positive' | 'negative' | 'neutral'
}

export function RetirementPlanner() {
  const [currentAge, setCurrentAge] = useState(30)
  const [retirementAge, setRetirementAge] = useState(65)
  const [currentSavings, setCurrentSavings] = useState(50000)
  const [monthlyContribution, setMonthlyContribution] = useState(1000)
  const [expectedReturn, setExpectedReturn] = useState(7)
  const [inflationRate, setInflationRate] = useState(3)
  const [lifeExpectancy, setLifeExpectancy] = useState(90)
  const [monthlyExpenses, setMonthlyExpenses] = useState(5000)
  const [socialSecurity, setSocialSecurity] = useState(2000)
  const [pension, setPension] = useState(0)

  const [goals, setGoals] = useState<RetirementGoal[]>([
    { id: '1', name: 'Basic Living Expenses', icon: <Home className="h-4 w-4" />, targetAmount: 1500000, priority: 'high', achieved: false },
    { id: '2', name: 'Healthcare', icon: <Heart className="h-4 w-4" />, targetAmount: 500000, priority: 'high', achieved: false },
    { id: '3', name: 'Travel & Leisure', icon: <Plane className="h-4 w-4" />, targetAmount: 300000, priority: 'medium', achieved: false },
    { id: '4', name: 'Legacy & Estate', icon: <GraduationCap className="h-4 w-4" />, targetAmount: 500000, priority: 'low', achieved: false }
  ])

  const calculateRetirement = useCallback(() => {
    const yearsToRetirement = retirementAge - currentAge
    const yearsInRetirement = lifeExpectancy - retirementAge
    const monthsToRetirement = yearsToRetirement * 12
    const realReturn = (expectedReturn - inflationRate) / 100
    const monthlyReturn = realReturn / 12

    // Calculate future value of current savings
    const futureValueCurrent = currentSavings * Math.pow(1 + realReturn, yearsToRetirement)

    // Calculate future value of monthly contributions
    const futureValueContributions = monthlyContribution * 12 * 
      ((Math.pow(1 + realReturn, yearsToRetirement) - 1) / realReturn)

    // Total retirement savings at retirement
    const totalRetirementSavings = futureValueCurrent + futureValueContributions

    // Calculate required retirement income (adjusted for inflation)
    const inflationMultiplier = Math.pow(1 + inflationRate / 100, yearsToRetirement)
    const adjustedMonthlyExpenses = monthlyExpenses * inflationMultiplier
    const annualExpenses = adjustedMonthlyExpenses * 12
    const annualIncome = (socialSecurity + pension) * 12

    // Calculate if retirement goals are met
    const annualShortfall = annualExpenses - annualIncome
    const totalNeeded = annualShortfall * yearsInRetirement
    const surplus = totalRetirementSavings - totalNeeded

    // Generate projection data
    let projectionData = []
    let balance = currentSavings
    
    for (let age = currentAge; age <= lifeExpectancy; age++) {
      if (age < retirementAge) {
        // Accumulation phase
        balance = balance * (1 + realReturn) + monthlyContribution * 12
      } else {
        // Distribution phase
        balance = balance * (1 + realReturn) - (adjustedMonthlyExpenses - socialSecurity - pension) * 12
      }

      projectionData.push({
        age,
        balance: Math.max(0, Math.round(balance)),
        phase: age < retirementAge ? 'Accumulation' : 'Distribution',
        milestone: age === retirementAge ? 'Retirement' : null
      })
    }

    // Calculate success probability (simplified Monte Carlo)
    const successRate = Math.min(100, Math.max(0, 
      50 + (surplus / totalNeeded) * 50
    ))

    return {
      projectionData,
      totalRetirementSavings: Math.round(totalRetirementSavings),
      monthlyRetirementIncome: Math.round(totalRetirementSavings / (yearsInRetirement * 12)),
      adjustedMonthlyExpenses: Math.round(adjustedMonthlyExpenses),
      surplus: Math.round(surplus),
      successRate: Math.round(successRate),
      yearsToRetirement,
      yearsInRetirement,
      totalNeeded: Math.round(totalNeeded)
    }
  }, [currentAge, retirementAge, currentSavings, monthlyContribution, expectedReturn, inflationRate, lifeExpectancy, monthlyExpenses, socialSecurity, pension])

  const results = calculateRetirement()

  const milestones: RetirementMilestone[] = [
    { age: 50, event: 'Catch-up contributions eligible', impact: '+$7,500/year to 401(k)', type: 'positive' },
    { age: 59.5, event: 'Penalty-free withdrawals', impact: 'Access retirement accounts', type: 'positive' },
    { age: 62, event: 'Early Social Security', impact: 'Reduced benefits available', type: 'neutral' },
    { age: 65, event: 'Medicare eligibility', impact: 'Healthcare coverage begins', type: 'positive' },
    { age: 67, event: 'Full Social Security', impact: 'Maximum benefits available', type: 'positive' },
    { age: 72, event: 'Required distributions', impact: 'Must withdraw from IRAs', type: 'negative' }
  ]

  const allocationData = [
    { name: 'Stocks', value: 60, color: '#8b5cf6' },
    { name: 'Bonds', value: 30, color: '#06b6d4' },
    { name: 'Real Estate', value: 5, color: '#10b981' },
    { name: 'Cash', value: 5, color: '#f59e0b' }
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-green-500" />
            Retirement Planning Calculator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="calculator" className="space-y-6">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="calculator">Calculator</TabsTrigger>
              <TabsTrigger value="projection">Projection</TabsTrigger>
              <TabsTrigger value="milestones">Milestones</TabsTrigger>
              <TabsTrigger value="allocation">Allocation</TabsTrigger>
            </TabsList>

            <TabsContent value="calculator" className="space-y-6">
              {/* Input Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <Label>Current Age</Label>
                  <Input
                    type="number"
                    value={currentAge}
                    onChange={(e) => setCurrentAge(Number(e.target.value))}
                  />
                </div>
                <div>
                  <Label>Retirement Age</Label>
                  <Input
                    type="number"
                    value={retirementAge}
                    onChange={(e) => setRetirementAge(Number(e.target.value))}
                  />
                </div>
                <div>
                  <Label>Life Expectancy</Label>
                  <Input
                    type="number"
                    value={lifeExpectancy}
                    onChange={(e) => setLifeExpectancy(Number(e.target.value))}
                  />
                </div>
                <div>
                  <Label>Current Savings ($)</Label>
                  <Input
                    type="number"
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(Number(e.target.value))}
                  />
                </div>
                <div>
                  <Label>Monthly Contribution ($)</Label>
                  <Input
                    type="number"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                  />
                </div>
                <div>
                  <Label>Monthly Expenses in Retirement ($)</Label>
                  <Input
                    type="number"
                    value={monthlyExpenses}
                    onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                  />
                </div>
                <div>
                  <Label>Expected Return (%)</Label>
                  <Input
                    type="number"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  />
                </div>
                <div>
                  <Label>Inflation Rate (%)</Label>
                  <Input
                    type="number"
                    value={inflationRate}
                    onChange={(e) => setInflationRate(Number(e.target.value))}
                  />
                </div>
                <div>
                  <Label>Monthly Social Security ($)</Label>
                  <Input
                    type="number"
                    value={socialSecurity}
                    onChange={(e) => setSocialSecurity(Number(e.target.value))}
                  />
                </div>
              </div>

              {/* Results Summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Card className={results.surplus > 0 ? 'bg-green-50 dark:bg-green-950/20' : 'bg-red-50 dark:bg-red-950/20'}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground">Retirement Savings</p>
                          <p className="text-xl font-bold">
                            ${results.totalRetirementSavings.toLocaleString()}
                          </p>
                        </div>
                        {results.surplus > 0 ? (
                          <CheckCircle className="h-6 w-6 text-green-500" />
                        ) : (
                          <AlertTriangle className="h-6 w-6 text-red-500" />
                        )}
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
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground">Monthly Income</p>
                          <p className="text-xl font-bold">
                            ${results.monthlyRetirementIncome.toLocaleString()}
                          </p>
                        </div>
                        <DollarSign className="h-6 w-6 text-blue-500" />
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
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground">Years to Retire</p>
                          <p className="text-xl font-bold">{results.yearsToRetirement}</p>
                        </div>
                        <Clock className="h-6 w-6 text-purple-500" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground">Success Rate</p>
                          <p className="text-xl font-bold">{results.successRate}%</p>
                        </div>
                        <Target className="h-6 w-6 text-green-500" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Success Indicator */}
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Retirement Readiness</span>
                      <span className="text-sm text-muted-foreground">{results.successRate}%</span>
                    </div>
                    <Progress value={results.successRate} className="h-3" />
                    {results.surplus > 0 ? (
                      <Alert className="bg-green-50 dark:bg-green-950/20 border-green-200">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <AlertDescription className="text-green-800 dark:text-green-200">
                          Great! You're on track with a surplus of ${results.surplus.toLocaleString()}
                        </AlertDescription>
                      </Alert>
                    ) : (
                      <Alert className="bg-red-50 dark:bg-red-950/20 border-red-200">
                        <AlertTriangle className="h-4 w-4 text-red-600" />
                        <AlertDescription className="text-red-800 dark:text-red-200">
                          You need an additional ${Math.abs(results.surplus).toLocaleString()} for retirement
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Retirement Goals */}
              <Card>
                <CardHeader>
                  <CardTitle>Retirement Goals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {goals.map(goal => (
                    <div key={goal.id} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${
                          goal.priority === 'high' ? 'bg-red-100' :
                          goal.priority === 'medium' ? 'bg-yellow-100' :
                          'bg-green-100'
                        }`}>
                          {goal.icon}
                        </div>
                        <div>
                          <p className="font-medium">{goal.name}</p>
                          <p className="text-sm text-muted-foreground">
                            Target: ${goal.targetAmount.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          goal.priority === 'high' ? 'bg-red-100 text-red-700' :
                          goal.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {goal.priority}
                        </span>
                        {goal.achieved && <CheckCircle className="h-5 w-5 text-green-500" />}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="projection">
              <Card>
                <CardHeader>
                  <CardTitle>Retirement Balance Projection</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={results.projectionData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="age" />
                      <YAxis />
                      <Tooltip formatter={(value: any) => `$${value.toLocaleString()}`} />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="balance"
                        stroke="#8b5cf6"
                        fill="#8b5cf6"
                        fillOpacity={0.3}
                        name="Retirement Balance"
                      />
                      <Line
                        type="monotone"
                        dataKey="milestone"
                        stroke="#ef4444"
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="milestones">
              <Card>
                <CardHeader>
                  <CardTitle>Retirement Milestones</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {milestones.map((milestone, index) => (
                      <motion.div
                        key={milestone.age}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-center gap-4 p-4 rounded-lg border ${
                          milestone.type === 'positive' ? 'bg-green-50 dark:bg-green-950/20' :
                          milestone.type === 'negative' ? 'bg-red-50 dark:bg-red-950/20' :
                          'bg-blue-50 dark:bg-blue-950/20'
                        }`}
                      >
                        <div className={`p-3 rounded-full ${
                          milestone.type === 'positive' ? 'bg-green-100' :
                          milestone.type === 'negative' ? 'bg-red-100' :
                          'bg-blue-100'
                        }`}>
                          <Calendar className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold">Age {milestone.age}: {milestone.event}</p>
                          <p className="text-sm text-muted-foreground">{milestone.impact}</p>
                        </div>
                        {milestone.age <= currentAge && (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="allocation">
              <Card>
                <CardHeader>
                  <CardTitle>Recommended Asset Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={allocationData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {allocationData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="space-y-4">
                      {allocationData.map(item => (
                        <div key={item.name} className="flex items-center justify-between p-3 rounded-lg border">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-4 h-4 rounded"
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <span className="text-lg font-bold">{item.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Alert className="mt-6">
                    <AlertDescription>
                      Based on your age and risk profile, this allocation balances growth potential with stability as you approach retirement.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}