'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  rmdApplicableAge,
  needsJointLifeTable,
  calculateRMD,
  calculateShortfallPenalty,
  projectRMDSchedule,
} from '@/lib/rmd'

// RMD calculator. All math lives in lib/rmd.ts (IRS Pub. 590-B Uniform
// Lifetime Table + SECURE 2.0 applicable-age rules) -- this file is only
// inputs, layout, and the CSV export.

function money(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })
}

function currentAge(birthYear: number, asOfYear: number) {
  return asOfYear - birthYear
}

function downloadCSV(rows: (string | number)[][], filename: string) {
  const csv = rows.map((r) => r.map((c) => (typeof c === 'string' && c.includes(',') ? `"${c}"` : c)).join(',')).join('\n')
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export function RMDCalculator() {
  const thisYear = new Date().getFullYear()

  const [birthYear, setBirthYear] = useState(thisYear - 74)
  const [accountType, setAccountType] = useState<'ira' | 'employer'>('ira')
  const [priorYearEndBalance, setPriorYearEndBalance] = useState(500000)
  const [amountWithdrawn, setAmountWithdrawn] = useState(0)
  const [correctedWithinWindow, setCorrectedWithinWindow] = useState(true)

  const [spouseIsSoleBeneficiary, setSpouseIsSoleBeneficiary] = useState(false)
  const [spouseBirthYear, setSpouseBirthYear] = useState(thisYear - 60)

  const [expectedReturnRate, setExpectedReturnRate] = useState(5)
  const [projectionYears, setProjectionYears] = useState(15)

  const applicableAge = rmdApplicableAge(birthYear)
  const age = currentAge(birthYear, thisYear)
  const spouseAge = spouseIsSoleBeneficiary ? currentAge(spouseBirthYear, thisYear) : null

  const jointLifeApplies = needsJointLifeTable(age, spouseIsSoleBeneficiary, spouseAge)
  const isFirstRmdYear = age === applicableAge
  const notYetRequired = age < applicableAge

  const result = useMemo(() => {
    if (notYetRequired || jointLifeApplies) return null
    return calculateRMD({ ownerAge: age, priorYearEndBalance })
  }, [age, priorYearEndBalance, notYetRequired, jointLifeApplies])

  const penalty = useMemo(() => {
    if (!result) return 0
    return calculateShortfallPenalty({ requiredRMD: result.rmd, amountWithdrawn, correctedWithinWindow })
  }, [result, amountWithdrawn, correctedWithinWindow])

  const schedule = useMemo(() => {
    if (jointLifeApplies) return []
    return projectRMDSchedule({
      birthYear,
      startYear: thisYear,
      priorYearEndBalance,
      expectedReturnRate,
      years: projectionYears,
    })
  }, [birthYear, thisYear, priorYearEndBalance, expectedReturnRate, projectionYears, jointLifeApplies])

  function exportCSV() {
    downloadCSV(
      [
        ['Year', 'Age', 'Divisor (Uniform Lifetime Table)', 'RMD Required', 'Balance Start of Year', 'Balance After RMD + Growth'],
        ...schedule.map((s) => [
          s.year,
          s.age,
          s.divisor?.toFixed(1) ?? 'n/a (below RMD age)',
          s.rmdRequired.toFixed(2),
          s.balanceStart.toFixed(2),
          s.balanceAfter.toFixed(2),
        ]),
      ],
      `rmd-schedule-${thisYear}.csv`
    )
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Your birth year</label>
            <input
              type="number"
              value={birthYear}
              min={1900}
              max={thisYear}
              onChange={(e) => setBirthYear(parseInt(e.target.value) || thisYear)}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2.5 px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-400 mt-1">
              You're {age} this year. Your RMD age is {applicableAge} (SECURE 2.0 Act).
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Account type</label>
            <select
              value={accountType}
              onChange={(e) => setAccountType(e.target.value as 'ira' | 'employer')}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2.5 px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="ira">Traditional / SEP / SIMPLE IRA</option>
              <option value="employer">401(k) / 403(b) / other employer plan</option>
            </select>
            <p className="text-xs text-gray-400 mt-1">
              {accountType === 'ira'
                ? 'IRAs can be aggregated: total the RMD from every IRA you own and withdraw it from any one (or combination) of them.'
                : 'Employer plans cannot be aggregated with each other or with IRAs — each 401(k)/403(b) must satisfy its own RMD separately.'}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Account balance, Dec 31 {thisYear - 1}
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <input
                type="number"
                value={priorYearEndBalance}
                min={0}
                step={1000}
                onChange={(e) => setPriorYearEndBalance(parseFloat(e.target.value) || 0)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2.5 pl-7 pr-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              id="spouse-beneficiary"
              type="checkbox"
              checked={spouseIsSoleBeneficiary}
              onChange={(e) => setSpouseIsSoleBeneficiary(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300"
            />
            <label htmlFor="spouse-beneficiary" className="text-sm text-gray-700 dark:text-gray-300">
              My spouse is my sole beneficiary
            </label>
          </div>

          {spouseIsSoleBeneficiary && (
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Spouse's birth year</label>
              <input
                type="number"
                value={spouseBirthYear}
                min={1900}
                max={thisYear}
                onChange={(e) => setSpouseBirthYear(parseInt(e.target.value) || thisYear)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2.5 px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Amount already withdrawn this year (optional)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <input
                type="number"
                value={amountWithdrawn}
                min={0}
                step={100}
                onChange={(e) => setAmountWithdrawn(parseFloat(e.target.value) || 0)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2.5 pl-7 pr-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Expected return (%/yr)</label>
              <input
                type="number"
                value={expectedReturnRate}
                step={0.5}
                onChange={(e) => setExpectedReturnRate(parseFloat(e.target.value) || 0)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2.5 px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Project (years)</label>
              <input
                type="number"
                value={projectionYears}
                min={1}
                max={30}
                onChange={(e) => setProjectionYears(Math.min(30, Math.max(1, parseInt(e.target.value) || 1)))}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2.5 px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-b from-emerald-50 to-white dark:from-gray-800 dark:to-gray-900 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
            {thisYear} Required Minimum Distribution
          </h2>

          {jointLifeApplies && (
            <div className="rounded-lg border border-amber-300 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-700 px-4 py-3 text-sm text-amber-800 dark:text-amber-300 mb-4">
              Your spouse is more than 10 years younger and your sole beneficiary. The IRS requires
              the Joint Life and Last Survivor Table (Table II) here, not the Uniform Lifetime
              Table — this calculator doesn't include that table. Your actual RMD will be
              <strong> smaller</strong> than the Uniform Lifetime figure. See IRS Pub. 590-B,
              Appendix B, Table II, or a tax professional.
            </div>
          )}

          {!jointLifeApplies && notYetRequired && (
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No RMD required yet — you don't reach your RMD age ({applicableAge}) until{' '}
              {birthYear + applicableAge}.
            </p>
          )}

          {!jointLifeApplies && !notYetRequired && result && (
            <>
              <p className="text-sm text-gray-500">Required withdrawal this year</p>
              <p className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">{money(result.rmd)}</p>
              <p className="text-xs text-gray-400 mt-1 mb-4">
                {money(priorYearEndBalance)} ÷ {result.divisor} (Uniform Lifetime Table divisor for age {age})
              </p>

              {isFirstRmdYear && (
                <div className="rounded-lg border border-blue-300 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-700 px-4 py-3 text-sm text-blue-800 dark:text-blue-300 mb-4">
                  This is your first RMD year. You may delay this withdrawal to April 1,{' '}
                  {thisYear + 1}, but doing so forces <strong>two</strong> RMDs into {thisYear + 1}{' '}
                  (this one plus next year's) — often pushing you into a higher tax bracket that
                  year.
                </div>
              )}

              {amountWithdrawn < result.rmd && (
                <div className="rounded-lg border border-red-300 bg-red-50 dark:bg-red-900/20 dark:border-red-700 px-4 py-3 text-sm text-red-700 dark:text-red-300 mb-4">
                  <p className="font-medium mb-1">
                    Potential excise tax if not corrected: {money(calculateShortfallPenalty({ requiredRMD: result.rmd, amountWithdrawn, correctedWithinWindow: false }))}
                  </p>
                  <p>
                    25% of the {money(result.rmd - amountWithdrawn)} shortfall (IRC §4974(a)), or{' '}
                    {money(calculateShortfallPenalty({ requiredRMD: result.rmd, amountWithdrawn, correctedWithinWindow: true }))}{' '}
                    (10%) if corrected within the SECURE 2.0 correction window.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Withdrawn so far</p>
                  <p className="text-xl font-semibold">{money(amountWithdrawn)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Still owed this year</p>
                  <p className="text-xl font-semibold">{money(Math.max(result.rmd - amountWithdrawn, 0))}</p>
                </div>
              </div>

              <p className="text-xs text-gray-400">
                RMDs are taxed as ordinary income at your marginal rate, not as qualified dividends
                — see the{' '}
                <Link href="/calculators/dividend-tax" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Dividend Tax Calculator
                </Link>{' '}
                to estimate the ordinary-income portion of your tax bill.
              </p>
            </>
          )}
        </div>
      </div>

      {schedule.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-500">
              {projectionYears}-year RMD schedule (ages {schedule[0].age}–{schedule[schedule.length - 1].age})
            </h3>
            <button
              type="button"
              onClick={exportCSV}
              className="rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-1.5 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Download CSV
            </button>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-800 text-left text-gray-500">
                <tr>
                  <th className="px-3 py-2 font-medium">Year</th>
                  <th className="px-3 py-2 font-medium">Age</th>
                  <th className="px-3 py-2 font-medium">Divisor</th>
                  <th className="px-3 py-2 font-medium">RMD required</th>
                  <th className="px-3 py-2 font-medium">Balance start</th>
                  <th className="px-3 py-2 font-medium">Balance after</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((s) => (
                  <tr key={s.year} className="border-t border-gray-100 dark:border-gray-800">
                    <td className="px-3 py-2">{s.year}</td>
                    <td className="px-3 py-2">{s.age}</td>
                    <td className="px-3 py-2">{s.divisor ?? '—'}</td>
                    <td className="px-3 py-2">{money(s.rmdRequired)}</td>
                    <td className="px-3 py-2">{money(s.balanceStart)}</td>
                    <td className="px-3 py-2">{money(s.balanceAfter)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <p className="text-xs text-gray-400 max-w-2xl">
        Estimate only, computed from the IRS Uniform Lifetime Table (Pub. 590-B) over the numbers
        you enter — nothing is saved or sent anywhere. The multi-year projection assumes a constant
        return and no additional contributions or withdrawals beyond the RMD. Not tax advice;
        consult a tax professional and your account custodian, whose figure is the one reported to
        the IRS.
      </p>
    </div>
  )
}
