'use client'

import { useEffect, useState } from 'react'
import { Users, TrendingUp, Calculator } from 'lucide-react'
import { Card } from '@/components/ui/card'

export function UsageCounter() {
  const [count, setCount] = useState(47392)
  const [monthlyUsers, setMonthlyUsers] = useState(12847)

  useEffect(() => {
    // Simulate real-time counter growth
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3))
      if (Math.random() > 0.7) {
        setMonthlyUsers(prev => prev + 1)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
      <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-lg">
            <Users className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-600">
              {count.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Total Users
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-600 rounded-lg">
            <TrendingUp className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold text-green-600">
              {monthlyUsers.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              This Month
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-600 rounded-lg">
            <Calculator className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold text-purple-600">
              156,238
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Calculations Run
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}

export function SimpleUsageCounter() {
  return (
    <div className="text-center py-4">
      <p className="text-gray-600 dark:text-gray-400">
        Join <strong className="text-blue-600">47,392+ investors</strong> who've used our calculators to plan their financial future
      </p>
    </div>
  )
}
