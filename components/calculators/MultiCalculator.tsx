"use client"

import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import {
  Calculator,
  TrendingUp,
  DollarSign,
  PiggyBank,
  LineChart,
  Coffee,
  Target
} from 'lucide-react'
import { DripCalculator } from './DripCalculator'
import { CoffeeToRetirement } from '@/components/viral/CoffeeToRetirement'
import { RetirementIncomeCalculator } from './RetirementIncomeCalculator'
import { DividendGrowthCalculator } from './DividendGrowthCalculator'
import { YieldOnCostCalculator } from './YieldOnCostCalculator'

export function MultiCalculator() {
  const [activeTab, setActiveTab] = useState('drip')

  // Handle URL parameters on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const calcParam = params.get('calc')

      // Switch to calculator if specified in URL
      if (calcParam && ['drip', 'retirement', 'growth', 'yield', 'coffee'].includes(calcParam)) {
        setActiveTab(calcParam)

        // Track shared link visits
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'shared_link_visit', {
            calculator: calcParam,
            has_params: params.toString().length > 10
          })
        }
      }
    }
  }, [])

  return (
    <div className="w-full">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        {/* Premium Tab Navigation */}
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 h-auto p-2 bg-slate-900/80 backdrop-blur-xl border-2 border-slate-700/50 rounded-2xl mb-8">
          <TabsTrigger
            value="drip"
            className="flex items-center gap-2 py-4 px-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white transition-all duration-300"
          >
            <TrendingUp className="w-5 h-5" />
            <span className="hidden sm:inline font-semibold">DRIP</span>
          </TabsTrigger>

          <TabsTrigger
            value="retirement"
            className="flex items-center gap-2 py-4 px-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-emerald-600 data-[state=active]:text-white transition-all duration-300"
          >
            <Target className="w-5 h-5" />
            <span className="hidden sm:inline font-semibold">Retirement</span>
          </TabsTrigger>

          <TabsTrigger
            value="growth"
            className="flex items-center gap-2 py-4 px-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white transition-all duration-300"
          >
            <LineChart className="w-5 h-5" />
            <span className="hidden sm:inline font-semibold">Growth</span>
          </TabsTrigger>

          <TabsTrigger
            value="yield"
            className="flex items-center gap-2 py-4 px-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-600 data-[state=active]:to-red-600 data-[state=active]:text-white transition-all duration-300"
          >
            <DollarSign className="w-5 h-5" />
            <span className="hidden sm:inline font-semibold">Yield</span>
          </TabsTrigger>

          <TabsTrigger
            value="coffee"
            className="flex items-center gap-2 py-4 px-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-orange-600 data-[state=active]:text-white transition-all duration-300"
          >
            <Coffee className="w-5 h-5" />
            <span className="hidden sm:inline font-semibold">Coffee</span>
          </TabsTrigger>
        </TabsList>

        {/* Tab Contents */}
        <TabsContent value="drip" className="mt-0">
          <Card className="backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-2 border-blue-200/50 dark:border-blue-800/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] p-8 rounded-2xl">
            <div className="mb-6">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">
                DRIP Calculator
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Calculate the power of dividend reinvestment over time
              </p>
            </div>
            <DripCalculator />
          </Card>
        </TabsContent>

        <TabsContent value="retirement" className="mt-0">
          <Card className="backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-2 border-green-200/50 dark:border-green-800/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] p-8 rounded-2xl">
            <div className="mb-6">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">
                Retirement Income Calculator
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Plan your passive dividend income for retirement
              </p>
            </div>
            <RetirementIncomeCalculator />
          </Card>
        </TabsContent>

        <TabsContent value="growth" className="mt-0">
          <Card className="backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-2 border-purple-200/50 dark:border-purple-800/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] p-8 rounded-2xl">
            <div className="mb-6">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">
                Dividend Growth Calculator
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Project your growing dividend income stream
              </p>
            </div>
            <DividendGrowthCalculator />
          </Card>
        </TabsContent>

        <TabsContent value="yield" className="mt-0">
          <Card className="backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-2 border-orange-200/50 dark:border-orange-800/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] p-8 rounded-2xl">
            <div className="mb-6">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">
                Yield on Cost Calculator
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Calculate your effective yield as dividends grow
              </p>
            </div>
            <YieldOnCostCalculator />
          </Card>
        </TabsContent>

        <TabsContent value="coffee" className="mt-0">
          <Card className="backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-2 border-yellow-200/50 dark:border-yellow-800/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] p-8 rounded-2xl">
            <div className="mb-6">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">
                Coffee to Millionaire
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                See what your daily spending could become if invested
              </p>
            </div>
            <CoffeeToRetirement />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
