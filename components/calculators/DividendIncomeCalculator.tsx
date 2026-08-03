'use client'

import { useMemo, useState } from 'react'

// Portfolio dividend income calculator. Given a portfolio value and average
// yield, shows annual/quarterly/monthly income. Also works in reverse: how much
// you'd need invested to hit a target monthly income.

function money(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

export function DividendIncomeCalculator() {
  const [portfolio, setPortfolio] = useState(100000)
  const [yieldPct, setYieldPct] = useState(4)
  const [goalMonthly, setGoalMonthly] = useState(1000)

  const r = useMemo(() => {
    const y = yieldPct / 100
    const annual = portfolio * y
    const needed = y > 0 ? (goalMonthly * 12) / y : Infinity
    return {
      annual,
      quarterly: annual / 4,
      monthly: annual / 12,
      needed,
    }
  }, [portfolio, yieldPct, goalMonthly])

  const inputs: [string, number, (n: number) => void, boolean, number][] = [
    ['Portfolio value', portfolio, setPortfolio, true, 1000],
    ['Average dividend yield (%)', yieldPct, setYieldPct, false, 0.1],
  ]

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-4">
        {inputs.map(([label, value, setter, dollar, step]) => (
          <div key={label}>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">{label}</label>
            <div className="relative">
              {dollar && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>}
              <input type="number" value={value} step={step} min={0}
                onChange={(e) => setter(parseFloat(e.target.value) || 0)}
                className={`w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2.5 ${dollar ? 'pl-7 pr-3' : 'px-3'} text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`} />
            </div>
          </div>
        ))}
        <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Monthly income goal</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
            <input type="number" value={goalMonthly} step={50} min={0}
              onChange={(e) => setGoalMonthly(parseFloat(e.target.value) || 0)}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2.5 pl-7 pr-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-b from-emerald-50 to-white dark:from-gray-800 dark:to-gray-900 p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">Your Dividend Income</h2>
        <div className="space-y-5">
          <div>
            <p className="text-sm text-gray-500">Annual income</p>
            <p className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">{money(r.annual)}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div><p className="text-sm text-gray-500">Per quarter</p><p className="text-2xl font-bold">{money(r.quarterly)}</p></div>
            <div><p className="text-sm text-gray-500">Per month</p><p className="text-2xl font-bold">{money(r.monthly)}</p></div>
          </div>
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500">To earn {money(goalMonthly)}/month at {yieldPct}% yield, you'd need</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{isFinite(r.needed) ? money(r.needed) : '—'}</p>
            <p className="text-xs text-gray-400 mt-1">invested.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
