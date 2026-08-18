'use client'

// Trump Account (Section 530A) growth projector + honest comparison.
//
// Framing note, deliberate: Trump Accounts open ONLY through the federal pilot
// (Treasury-run enrollment; approved custodians), NOT at retail brokerages, and
// this page never implies otherwise. The commercial wedge is the truthful one:
// the $5,000/yr cap and the IRA-style lock-up mean many families ALSO want a
// flexible custodial account alongside -- that comparison lives below the tool.
// Rules are new (OBBBA, 2025) and still being clarified; every number here is a
// user-editable assumption with an as-of stamp, not a promise.

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Info, TrendingUp, DollarSign } from 'lucide-react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement,
  LineElement, Title, Tooltip, Legend, Filler,
} from 'chart.js'
import { InlineBrokerCTA } from '@/components/affiliate/InlineBrokerCTA'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

const RULES_AS_OF = 'August 2026'
const ANNUAL_CAP = 5000          // per-child contribution cap (excl. certain employer $)
const FEDERAL_SEED = 1000        // pilot seed for eligible children born 2025-2028

interface YearRow { age: number; contributions: number; balance: number }

function project(startAge: number, seed: number, annual: number, rate: number, toAge: number): YearRow[] {
  const rows: YearRow[] = []
  let balance = seed
  let contributed = seed
  for (let age = startAge; age <= toAge; age++) {
    if (age > startAge) {
      balance = balance * (1 + rate / 100) + annual
      contributed += annual
    }
    rows.push({ age, contributions: contributed, balance })
  }
  return rows
}

const fmt = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

export function TrumpAccountCalculator() {
  const [childAge, setChildAge] = useState<string>('0')
  const [seed, setSeed] = useState<string>(String(FEDERAL_SEED))
  const [annual, setAnnual] = useState<string>('2500')
  const [rate, setRate] = useState<string>('7')
  const [rows, setRows] = useState<YearRow[] | null>(null)

  const run = () => {
    const a = Math.min(17, Math.max(0, parseInt(childAge) || 0))
    const s = Math.max(0, parseFloat(seed) || 0)
    const c = Math.min(ANNUAL_CAP, Math.max(0, parseFloat(annual) || 0))
    const r = Math.min(15, Math.max(0, parseFloat(rate) || 0))
    setRows(project(a, s, c, r, 18))
  }

  const final = rows ? rows[rows.length - 1] : null

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" /> Trump Account Growth Projector
          </CardTitle>
          <CardDescription>
            Project a Section 530A account from your child&apos;s current age to 18, when the
            balance converts to IRA-style treatment. Rules as of {RULES_AS_OF} — edit any
            assumption.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Label htmlFor="ta-age">Child&apos;s current age</Label>
              <Input id="ta-age" type="number" min="0" max="17" value={childAge}
                     onChange={(e) => setChildAge(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="ta-seed">Starting balance / seed ($)</Label>
              <Input id="ta-seed" type="number" min="0" value={seed}
                     onChange={(e) => setSeed(e.target.value)} />
              <p className="text-xs text-muted-foreground mt-1">
                ${FEDERAL_SEED.toLocaleString()} federal seed for eligible children born 2025–2028
              </p>
            </div>
            <div>
              <Label htmlFor="ta-annual">Annual contribution ($)</Label>
              <Input id="ta-annual" type="number" min="0" max={ANNUAL_CAP} value={annual}
                     onChange={(e) => setAnnual(e.target.value)} />
              <p className="text-xs text-muted-foreground mt-1">
                Capped at ${ANNUAL_CAP.toLocaleString()}/yr
              </p>
            </div>
            <div>
              <Label htmlFor="ta-rate">Assumed annual return (%)</Label>
              <Input id="ta-rate" type="number" min="0" max="15" step="0.5" value={rate}
                     onChange={(e) => setRate(e.target.value)} />
              <p className="text-xs text-muted-foreground mt-1">
                Accounts track broad index funds; past averages guarantee nothing
              </p>
            </div>
          </div>
          <Button onClick={run} className="w-full sm:w-auto">
            <DollarSign className="h-4 w-4 mr-2" /> Project to age 18
          </Button>
        </CardContent>
      </Card>

      {rows && final && (
        <>
          <div className="grid gap-4 sm:grid-cols-3">
            <Card><CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">Balance at 18</p>
              <p className="text-2xl font-bold">{fmt(final.balance)}</p>
            </CardContent></Card>
            <Card><CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">Total contributed</p>
              <p className="text-2xl font-bold">{fmt(final.contributions)}</p>
            </CardContent></Card>
            <Card><CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">Growth</p>
              <p className="text-2xl font-bold">{fmt(final.balance - final.contributions)}</p>
            </CardContent></Card>
          </div>

          <Card>
            <CardContent className="pt-6">
              <Line
                data={{
                  labels: rows.map((r) => `Age ${r.age}`),
                  datasets: [
                    { label: 'Projected balance', data: rows.map((r) => r.balance),
                      borderColor: 'rgb(37, 99, 235)', backgroundColor: 'rgba(37, 99, 235, 0.10)',
                      fill: true, tension: 0.25 },
                    { label: 'Contributions', data: rows.map((r) => r.contributions),
                      borderColor: 'rgb(148, 163, 184)', borderDash: [6, 4], fill: false, tension: 0.25 },
                  ],
                }}
                options={{ responsive: true, plugins: { legend: { position: 'bottom' } },
                  scales: { y: { ticks: { callback: (v) => '$' + Number(v).toLocaleString() } } } }}
              />
            </CardContent>
          </Card>

          <InlineBrokerCTA
            finalPortfolioValue={final.balance}
            variant="compact"
            calculatorType="trump-account"
          />
        </>
      )}

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription className="text-sm">
          <strong>Where Trump Accounts actually open:</strong> through the federal pilot
          program and approved custodians only — not at retail brokerages, and no
          brokerage link on this page can open one for you. Verify current enrollment
          rules at <a className="underline" href="https://www.treasury.gov" target="_blank"
          rel="noopener noreferrer">treasury.gov</a>. This projector is an educational
          estimate, not tax or investment advice; Section 530A details (contribution
          treatment, conversion mechanics at 18) are still being clarified and may change.
        </AlertDescription>
      </Alert>
    </div>
  )
}
