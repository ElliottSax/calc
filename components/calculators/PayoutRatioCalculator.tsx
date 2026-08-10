'use client'

import { useMemo, useState } from 'react'

// Dividend payout ratio calculator. Payout ratio = dividends per share / earnings
// per share. Retention ratio is the earnings kept in the business (100 - payout).
// The assessment flags whether the dividend looks sustainable.

function money(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })
}

function assess(payout: number): string {
  if (payout <= 40) return 'Conservative — lots of room to grow'
  if (payout <= 60) return 'Healthy'
  if (payout <= 80) return 'Elevated'
  if (payout <= 100) return 'Stretched'
  return 'Unsustainable — paying out more than it earns'
}

export function PayoutRatioCalculator() {
  const [dps, setDps] = useState(2)
  const [eps, setEps] = useState(5)

  const r = useMemo(() => {
    const payoutRatio = eps > 0 ? (dps / eps) * 100 : 0
    const retentionRatio = 100 - payoutRatio
    const assessment = assess(payoutRatio)
    return { payoutRatio, retentionRatio, assessment }
  }, [dps, eps])

  const fields: [string, number, (n: number) => void, boolean, number][] = [
    ['Dividend per share', dps, setDps, true, 0.01],
    ['Earnings per share (EPS)', eps, setEps, true, 0.01],
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
        <p className="text-xs text-gray-400">
          Tip: you can use the company&apos;s total dividends and net income instead of the per-share
          figures — the ratio comes out the same.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-b from-emerald-50 to-white dark:from-gray-800 dark:to-gray-900 p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">Results</h2>
        <div className="space-y-5">
          <div>
            <p className="text-sm text-gray-500">Payout ratio</p>
            <p className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">{r.payoutRatio.toFixed(1)}%</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Retention ratio</p>
            <p className="text-2xl font-bold">{r.retentionRatio.toFixed(1)}%</p>
            <p className="text-xs text-gray-400 mt-1">The share of earnings kept to reinvest, pay down debt, or buy back stock.</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Assessment</p>
            <p className="text-xl font-semibold">{r.assessment}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
