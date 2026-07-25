'use client'

import { useMemo, useState } from 'react'

// Self-contained FIRE (Financial Independence, Retire Early) calculator.
// FIRE number = annual expenses / safe withdrawal rate. Years to FIRE is found
// by compounding current savings + annual contributions at the expected return
// until the portfolio reaches the FIRE number.

function fmt(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

export function FireCalculator() {
  const [age, setAge] = useState(30)
  const [currentSavings, setCurrentSavings] = useState(50000)
  const [annualIncome, setAnnualIncome] = useState(80000)
  const [annualExpenses, setAnnualExpenses] = useState(40000)
  const [returnRate, setReturnRate] = useState(7)
  const [withdrawalRate, setWithdrawalRate] = useState(4)

  const result = useMemo(() => {
    const annualContribution = Math.max(0, annualIncome - annualExpenses)
    const savingsRate = annualIncome > 0 ? (annualContribution / annualIncome) * 100 : 0
    const fireNumber = withdrawalRate > 0 ? annualExpenses / (withdrawalRate / 100) : Infinity
    const r = returnRate / 100

    let balance = currentSavings
    let years = 0
    // Cap at 100 years so an unreachable goal doesn't loop forever.
    while (balance < fireNumber && years < 100) {
      balance = balance * (1 + r) + annualContribution
      years++
    }
    const reachable = balance >= fireNumber
    return {
      annualContribution,
      savingsRate,
      fireNumber,
      years: reachable ? years : null,
      ageAtFire: reachable ? age + years : null,
    }
  }, [age, currentSavings, annualIncome, annualExpenses, returnRate, withdrawalRate])

  const fields: [string, number, (n: number) => void, string, number?][] = [
    ['Current age', age, setAge, 'years', 1],
    ['Current savings / investments', currentSavings, setCurrentSavings, '$', 1000],
    ['Annual income (after tax)', annualIncome, setAnnualIncome, '$', 1000],
    ['Annual expenses', annualExpenses, setAnnualExpenses, '$', 1000],
    ['Expected annual return', returnRate, setReturnRate, '%', 0.5],
    ['Safe withdrawal rate', withdrawalRate, setWithdrawalRate, '%', 0.5],
  ]

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-4">
        {fields.map(([label, value, setter, unit, step]) => (
          <div key={label}>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              {label} {unit !== '$' && unit !== 'years' ? `(${unit})` : ''}
            </label>
            <div className="relative">
              {unit === '$' && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>}
              <input
                type="number"
                value={value}
                step={step ?? 1}
                min={0}
                onChange={(e) => setter(parseFloat(e.target.value) || 0)}
                className={`w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2.5 ${unit === '$' ? 'pl-7 pr-3' : 'px-3'} text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">Your FIRE Numbers</h2>

        <div className="space-y-5">
          <div>
            <p className="text-sm text-gray-500">Your FIRE number (portfolio needed)</p>
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">{isFinite(result.fireNumber) ? fmt(result.fireNumber) : '—'}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Years to FIRE</p>
              <p className="text-2xl font-bold">{result.years ?? '50+'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Age at FIRE</p>
              <p className="text-2xl font-bold">{result.ageAtFire ?? '—'}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">You save / year</p>
              <p className="text-lg font-semibold">{fmt(result.annualContribution)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Savings rate</p>
              <p className="text-lg font-semibold">{result.savingsRate.toFixed(0)}%</p>
            </div>
          </div>
        </div>

        {result.years === null && (
          <p className="mt-5 text-sm text-amber-600 dark:text-amber-400">
            With these inputs, FIRE takes over 50 years. Try increasing your income, cutting expenses, or raising your savings rate.
          </p>
        )}
        <p className="mt-5 text-xs text-gray-400">
          Estimates only, in today&apos;s dollars. Assumes constant return and contributions and ignores taxes and inflation adjustments.
        </p>
      </div>
    </div>
  )
}
