'use client'

import { useMemo, useState } from 'react'
import { computeWashSales, validateTrades, type Trade, type TradeType } from '@/lib/wash-sale'

// Wash-sale detection over the trades entered below. Everything is computed
// client-side from your own inputs — no positions or trade history are
// stored or sent anywhere.

function money(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })
}

let nextId = 1
function newRow(overrides: Partial<Trade> = {}): Trade {
  return {
    id: `t${nextId++}`,
    ticker: overrides.ticker ?? '',
    type: overrides.type ?? 'buy',
    date: overrides.date ?? '',
    shares: overrides.shares ?? 0,
    price: overrides.price ?? 0,
  }
}

const DEFAULT_ROWS: Trade[] = [
  { id: 't1', ticker: 'XYZ', type: 'buy', date: '2026-01-01', shares: 100, price: 50 },
  { id: 't2', ticker: 'XYZ', type: 'sell', date: '2026-02-01', shares: 100, price: 40 },
  { id: 't3', ticker: 'XYZ', type: 'buy', date: '2026-02-15', shares: 100, price: 42 },
]
nextId = 4

export function WashSaleCalculator() {
  const [rows, setRows] = useState<Trade[]>(DEFAULT_ROWS)

  const error = useMemo(() => validateTrades(rows.filter((r) => r.ticker.trim() || r.shares || r.price)), [rows])
  const result = useMemo(() => {
    const usable = rows.filter((r) => r.ticker.trim() && r.shares > 0 && r.price > 0 && r.date)
    if (usable.length === 0) return null
    return computeWashSales(usable)
  }, [rows])

  function updateRow(id: string, patch: Partial<Trade>) {
    setRows((rs) => rs.map((r) => (r.id === id ? { ...r, ...patch } : r)))
  }
  function removeRow(id: string) {
    setRows((rs) => rs.filter((r) => r.id !== id))
  }
  function addRow(type: TradeType) {
    setRows((rs) => [...rs, newRow({ type })])
  }

  return (
    <div className="space-y-6">
      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-800 text-left text-gray-500">
            <tr>
              <th className="px-3 py-2 font-medium">Ticker</th>
              <th className="px-3 py-2 font-medium">Type</th>
              <th className="px-3 py-2 font-medium">Date</th>
              <th className="px-3 py-2 font-medium">Shares</th>
              <th className="px-3 py-2 font-medium">Price/share</th>
              <th className="px-3 py-2" />
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-gray-100 dark:border-gray-800">
                <td className="px-3 py-2">
                  <input
                    value={r.ticker}
                    onChange={(e) => updateRow(r.id, { ticker: e.target.value.toUpperCase() })}
                    placeholder="XYZ"
                    className="w-20 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-2 py-1.5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </td>
                <td className="px-3 py-2">
                  <select
                    value={r.type}
                    onChange={(e) => updateRow(r.id, { type: e.target.value as TradeType })}
                    className="rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-2 py-1.5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="buy">Buy</option>
                    <option value="sell">Sell</option>
                  </select>
                </td>
                <td className="px-3 py-2">
                  <input
                    type="date"
                    value={r.date}
                    onChange={(e) => updateRow(r.id, { date: e.target.value })}
                    className="rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-2 py-1.5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </td>
                <td className="px-3 py-2">
                  <input
                    type="number"
                    min={0}
                    value={r.shares || ''}
                    onChange={(e) => updateRow(r.id, { shares: parseFloat(e.target.value) || 0 })}
                    className="w-24 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-2 py-1.5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </td>
                <td className="px-3 py-2">
                  <div className="relative w-28">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                    <input
                      type="number"
                      min={0}
                      step={0.01}
                      value={r.price || ''}
                      onChange={(e) => updateRow(r.id, { price: parseFloat(e.target.value) || 0 })}
                      className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 pl-5 pr-2 py-1.5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </td>
                <td className="px-3 py-2">
                  <button
                    type="button"
                    onClick={() => removeRow(r.id)}
                    className="text-gray-400 hover:text-red-500"
                    aria-label="Remove trade"
                  >
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => addRow('buy')}
          className="rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-1.5 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          + Add buy
        </button>
        <button
          type="button"
          onClick={() => addRow('sell')}
          className="rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-1.5 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          + Add sell
        </button>
      </div>

      {error && (
        <div className="rounded-lg border border-amber-300 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-700 px-4 py-3 text-sm text-amber-800 dark:text-amber-300">
          {error}
        </div>
      )}

      {result && (
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-b from-emerald-50 to-white dark:from-gray-800 dark:to-gray-900 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">Results</h2>

          {result.errors.length > 0 && (
            <div className="mb-4 rounded-lg border border-red-300 bg-red-50 dark:bg-red-900/20 dark:border-red-700 px-4 py-3 text-sm text-red-700 dark:text-red-300 space-y-1">
              {result.errors.map((e, i) => (
                <p key={i}>{e}</p>
              ))}
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-500">Net capital gain/loss</p>
              <p className={`text-xl font-semibold ${result.netCapitalGainLoss < 0 ? 'text-red-500' : 'text-emerald-600 dark:text-emerald-400'}`}>
                {money(result.netCapitalGainLoss)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Disallowed (wash sale)</p>
              <p className="text-xl font-semibold">{money(result.totalDisallowedLoss)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Offsets ordinary income</p>
              <p className="text-xl font-semibold">{money(result.ordinaryIncomeOffset)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Carries forward</p>
              <p className="text-xl font-semibold">{money(result.carryforwardLoss)}</p>
            </div>
          </div>

          <h3 className="text-sm font-semibold text-gray-500 mb-2">Per-sale breakdown</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm mb-2">
              <thead className="text-left text-gray-500">
                <tr>
                  <th className="py-1 pr-4">Ticker</th>
                  <th className="py-1 pr-4">Date</th>
                  <th className="py-1 pr-4">Shares</th>
                  <th className="py-1 pr-4">Reported G/L</th>
                  <th className="py-1 pr-4">Disallowed</th>
                  <th className="py-1">Wash sale?</th>
                </tr>
              </thead>
              <tbody>
                {result.sells.map((s) => (
                  <tr key={s.sellId} className="border-t border-gray-100 dark:border-gray-800">
                    <td className="py-1.5 pr-4 font-medium">{s.ticker}</td>
                    <td className="py-1.5 pr-4">{s.date}</td>
                    <td className="py-1.5 pr-4">{s.shares}</td>
                    <td className={`py-1.5 pr-4 ${s.reportedGainLoss < 0 ? 'text-red-500' : 'text-emerald-600 dark:text-emerald-400'}`}>
                      {money(s.reportedGainLoss)}
                    </td>
                    <td className="py-1.5 pr-4">{s.disallowedLoss > 0 ? money(s.disallowedLoss) : '—'}</td>
                    <td className="py-1.5">{s.isWashSale ? '⚠️ Yes' : 'No'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {result.disallowedFragments.length > 0 && (
            <>
              <h3 className="text-sm font-semibold text-gray-500 mb-2 mt-4">Replacement-lot basis adjustments</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-left text-gray-500">
                    <tr>
                      <th className="py-1 pr-4">Ticker</th>
                      <th className="py-1 pr-4">Loss sale</th>
                      <th className="py-1 pr-4">Replacement buy</th>
                      <th className="py-1 pr-4">Shares</th>
                      <th className="py-1">Basis added</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.disallowedFragments.map((f, i) => (
                      <tr key={i} className="border-t border-gray-100 dark:border-gray-800">
                        <td className="py-1.5 pr-4 font-medium">{f.ticker}</td>
                        <td className="py-1.5 pr-4">{f.sellDate}</td>
                        <td className="py-1.5 pr-4">{f.replacementDate}</td>
                        <td className="py-1.5 pr-4">{f.disallowedShares}</td>
                        <td className="py-1.5">{money(f.disallowedAmount)} (+{money(f.lossPerShare)}/share)</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          <p className="text-xs text-gray-400 mt-5">
            Estimate only, computed from IRC §1091 mechanics over the trades you entered — not a
            substitute for your broker's 1099-B, which is the figure the IRS actually receives.
            Enter trades in chronological order for the most accurate result. Consult a tax
            professional before filing.
          </p>
        </div>
      )}
    </div>
  )
}
