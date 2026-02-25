'use client'

import { useEffect, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const activities = [
  { user: 'Sarah from Austin', action: 'used the DRIP Calculator', time: '2 minutes ago' },
  { user: 'Michael from SF', action: 'calculated their 401(k) growth', time: '5 minutes ago' },
  { user: 'Jennifer from Miami', action: 'compared Traditional vs Roth IRA', time: '8 minutes ago' },
  { user: 'David from Seattle', action: 'set a savings goal of $50,000', time: '12 minutes ago' },
  { user: 'Lisa from Boston', action: 'calculated compound interest', time: '15 minutes ago' },
  { user: 'Robert from Denver', action: 'used the Investment Return Calculator', time: '18 minutes ago' },
  { user: 'Emily from Portland', action: 'planned their retirement income', time: '22 minutes ago' },
  { user: 'James from Chicago', action: 'calculated dividend growth', time: '25 minutes ago' }
]

export function RecentActivity() {
  const [currentActivity, setCurrentActivity] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentActivity((prev) => (prev + 1) % activities.length)
        setIsVisible(true)
      }, 300)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const activity = activities[currentActivity]

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-sm">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  <strong>{activity.user}</strong> {activity.action}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {activity.time}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
