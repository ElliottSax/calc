'use client'

import { useMemo, useState } from 'react'

// Dividend yield calculator. Yield = annual dividend / current price. Also shows
// annual income for a holding and yield-on-cost when a purchase price is given.

function money(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })
}

export function DividendYieldCalculator() {
  const [price, setPrice] = useState(50)
  const [annualDividend, setAnnualDividend] = useState(2)
  const [shares, setShares] = useState(100)
  const [costBasis, setCostBasis] = useState(40)

  const r = useMemo(() => {
    const yieldPct = price > 0 ? (annualDividend / price) * 100 : 0
    const yieldOnCost = costBasis > 0 ? (annualDividend / costBasis) * 100 : 0
    const annualIncome = annualDividend * shares
    const monthlyIncome = annualIncome / 12
    return { yieldPct, yieldOnCost, annualIncome, monthlyIncome }
  }, [price, annualDividend, shares, costBasis])

  const fields: [string, number, (n: number) => void, boolean, number][] = [
    ['Current share price', price, setPrice, true, 0.01],
    ['Annual dividend per share', annualDividend, setAnnualDividend, true, 0.01],
    ['Number of shares', shares, setShares, false, 1],
    ['Your purchase price (for yield-on-cost)', costBasis, setCostBasis, true, 0.01],
  ]

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-4">
        {fields.map(([label, value, setter, dollar, step]) => (
          <div key={label}>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">{label}</label>
            <div className="relative">
              {dollar && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>}
              <input
                type="number"
                value={value}
                step={step}
                min={0}
                onChange={(e) => setter(parseFloat(e.target.value) || 0)}
                className={`w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2.5 ${dollar ? 'pl-7 pr-3' : 'px-3'} text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-b from-emerald-50 to-white dark:from-gray-800 dark:to-gray-900 p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">Results</h2>
        <div className="space-y-5">
          <div>
            <p className="text-sm text-gray-500">Dividend yield</p>
            <p className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">{r.yieldPct.toFixed(2)}%</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Annual income</p>
              <p className="text-2xl font-bold">{money(r.annualIncome)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Monthly income</p>
              <p className="text-2xl font-bold">{money(r.monthlyIncome)}</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500">Yield on cost</p>
            <p className="text-xl font-semibold">{r.yieldOnCost.toFixed(2)}%</p>
            <p className="text-xs text-gray-400 mt-1">Your dividend return based on what you originally paid, not today&apos;s price.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
