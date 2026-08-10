import type { Metadata } from 'next'
import Link from 'next/link'

// Hub / directory for every calculator. The calculators were live but had no
// landing page and weren't in the nav or (correctly) the sitemap, so neither
// users nor Google could find them from anywhere. This page is the front door.

export const metadata: Metadata = {
  title: { absolute: 'Free Investment & Dividend Calculators | Dividend Engines' },
  description:
    'Free calculators for dividend reinvestment (DRIP), compound interest, 401(k), IRA, savings goals, and investment returns. No signup — model your money in seconds.',
  alternates: { canonical: 'https://dividendengines.com/calculators' },
}

const CALCULATORS = [
  { href: '/calculators/drip', name: 'DRIP Calculator', desc: 'See how reinvesting dividends compounds your portfolio over time.' },
  { href: '/calculators/dividend-yield', name: 'Dividend Yield Calculator', desc: 'Get yield, annual income, and yield on cost for any dividend stock.' },
  { href: '/calculators/dividend-income', name: 'Dividend Income Calculator', desc: 'See your monthly and annual dividend income from any portfolio.' },
  { href: '/calculators/dividend-growth', name: 'Dividend Growth Calculator', desc: 'Project how rising dividends grow your income and yield on cost.' },
  { href: '/calculators/dividend-tax', name: 'Dividend Tax Calculator', desc: 'Estimate tax on qualified and non-qualified dividends, including the 3.8% NIIT.' },
  { href: '/calculators/fire', name: 'FIRE Calculator', desc: 'Find your FIRE number and years to financial independence.' },
  { href: '/calculators/compound-interest', name: 'Compound Interest Calculator', desc: 'Project how any investment grows with compounding.' },
  { href: '/calculators/401k', name: '401(k) Calculator', desc: 'Plan retirement savings, including your employer match.' },
  { href: '/calculators/ira', name: 'IRA Calculator', desc: 'Compare Traditional vs. Roth IRA outcomes side by side.' },
  { href: '/calculators/savings', name: 'Savings Calculator', desc: 'Find out how to reach a specific savings goal.' },
  { href: '/calculators/investment-return', name: 'Investment Return Calculator', desc: 'Calculate ROI and annualized returns on any investment.' },
]

export default function CalculatorsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Free Investment Calculators</h1>
        <p className="text-lg text-muted-foreground">
          Model dividends, compounding, retirement, and returns in seconds. Every calculator is
          free and needs no signup.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CALCULATORS.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group rounded-xl border p-6 transition-all hover:border-primary hover:shadow-md"
          >
            <h2 className="text-xl font-semibold mb-1.5 group-hover:text-primary transition-colors">
              {c.name}
            </h2>
            <p className="text-sm text-muted-foreground">{c.desc}</p>
            <span className="mt-4 inline-block text-sm font-medium text-primary">Open calculator →</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
