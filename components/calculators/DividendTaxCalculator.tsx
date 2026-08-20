'use client'

import { useMemo, useState } from 'react'

// Dividend tax calculator. Qualified dividends use the 2026 long-term capital
// gains brackets (0/15/20% by taxable income); non-qualified dividends are taxed
// at the ordinary marginal rate; NIIT adds 3.8% for high earners.
//
// 2026 capital-gains breakpoints sourced from IRS Revenue Procedure 2025-32
// (tax year 2026 inflation adjustments, released 2025-10-09), cross-checked
// against Tax Foundation's 2026 tax bracket tables (taxfoundation.org) on
// 2026-08-19. NIIT thresholds ($200k/$250k) are fixed by statute since 2013
// and are not inflation-adjusted -- unchanged for 2026.

function money(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })
}

export function DividendTaxCalculator() {
  const [qualifiedDividends, setQualifiedDividends] = useState(5000)
  const [nonQualifiedDividends, setNonQualifiedDividends] = useState(1000)
  const [filingStatus, setFilingStatus] = useState<'single' | 'married'>('single')
  const [taxableIncome, setTaxableIncome] = useState(60000)
  const [ordinaryRate, setOrdinaryRate] = useState(22)

  const results = useMemo(() => {
    const totalDividends = qualifiedDividends + nonQualifiedDividends
    const totalTaxableIncome = taxableIncome + totalDividends

    const getQualifiedRate = (status: 'single' | 'married', income: number) => {
      if (status === 'single') {
        if (income <= 49450) return 0
        if (income <= 545500) return 15
        return 20
      } else {
        if (income <= 98900) return 0
        if (income <= 613700) return 15
        return 20
      }
    }

    const qualifiedRate = getQualifiedRate(filingStatus, taxableIncome)
    const qualifiedTax = qualifiedDividends * (qualifiedRate / 100)
    const nonQualifiedTax = nonQualifiedDividends * (ordinaryRate / 100)

    const niitThreshold = filingStatus === 'single' ? 200000 : 250000
    const niit = totalTaxableIncome > niitThreshold ? totalDividends * 0.038 : 0

    const totalTax = qualifiedTax + nonQualifiedTax + niit
    const effectiveRate = totalDividends > 0 ? (totalTax / totalDividends) * 100 : 0
    const afterTaxIncome = totalDividends - totalTax

    return { qualifiedRate, qualifiedTax, nonQualifiedTax, niit, totalTax, effectiveRate, afterTaxIncome }
  }, [qualifiedDividends, nonQualifiedDividends, filingStatus, taxableIncome, ordinaryRate])

  const fields: [string, number, (n: number) => void, boolean, number][] = [
    ['Annual qualified dividends', qualifiedDividends, setQualifiedDividends, true, 0.01],
    ['Annual non-qualified dividends', nonQualifiedDividends, setNonQualifiedDividends, true, 0.01],
    ['Taxable income (excluding dividends)', taxableIncome, setTaxableIncome, true, 0.01],
    ['Ordinary marginal rate (%)', ordinaryRate, setOrdinaryRate, false, 0.01],
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

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Filing status</label>
          <select
            value={filingStatus}
            onChange={(e) => setFilingStatus(e.target.value as 'single' | 'married')}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2.5 px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="single">Single</option>
            <option value="married">Married filing jointly</option>
          </select>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-b from-emerald-50 to-white dark:from-gray-800 dark:to-gray-900 p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">Results</h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">Total dividend tax</p>
            <p className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">{money(results.totalTax)}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Qualified tax ({results.qualifiedRate}%)</p>
              <p className="text-xl font-semibold">{money(results.qualifiedTax)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Non-qualified tax</p>
              <p className="text-xl font-semibold">{money(results.nonQualifiedTax)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">NIIT (3.8%)</p>
              <p className="text-xl font-semibold">{money(results.niit)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Effective rate</p>
              <p className="text-xl font-semibold">{results.effectiveRate.toFixed(2)}%</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500">After-tax dividend income</p>
            <p className="text-2xl font-bold">{money(results.afterTaxIncome)}</p>
            <p className="text-xs text-gray-400 mt-1">Estimate only — qualified rates use 2026 brackets; consult a tax professional.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
