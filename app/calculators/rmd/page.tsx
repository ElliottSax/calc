import type { Metadata } from 'next'
import Link from 'next/link'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'
import { RMDCalculator } from '@/components/calculators/RMDCalculator'

const url = 'https://dividendengines.com/calculators/rmd'

export const metadata: Metadata = {
  title: { absolute: 'RMD Calculator — Required Minimum Distribution | Dividend Engines' },
  description:
    'Free RMD calculator. Enter your birth year and account balance to see your required minimum distribution using the IRS Uniform Lifetime Table, plus the excise tax penalty for a shortfall and a year-by-year withdrawal schedule.',
  keywords: [
    'RMD calculator',
    'required minimum distribution calculator',
    'IRA RMD calculator',
    '401k RMD calculator',
    'uniform lifetime table',
    'RMD penalty calculator',
    'RMD age calculator',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'RMD Calculator',
    description: 'Calculate your required minimum distribution using the IRS Uniform Lifetime Table, the shortfall penalty, and a multi-year withdrawal schedule.',
    type: 'website',
    url,
  },
}

const faqs = [
  {
    q: 'What is a Required Minimum Distribution (RMD)?',
    a: "An RMD is the minimum amount the IRS requires you to withdraw each year from a tax-deferred retirement account — a Traditional IRA, SEP IRA, SIMPLE IRA, 401(k), 403(b), and similar employer plans — once you reach your RMD age. It's calculated by dividing your account balance as of December 31 of the prior year by a life-expectancy divisor from the IRS Uniform Lifetime Table (IRS Pub. 590-B, Appendix B, Table III).",
  },
  {
    q: 'At what age do RMDs start?',
    a: 'Under the SECURE 2.0 Act of 2022 (Section 107), your RMD age depends on your birth year: 72 if born before 1951, 73 if born 1951–1959, and 75 if born in 1960 or later. Roth IRAs (unlike Roth 401(k)s before 2024, and traditional accounts) have no RMDs during the original owner\'s lifetime.',
  },
  {
    q: 'What happens if I miss my RMD or withdraw too little?',
    a: 'IRC Section 4974(a), as amended by SECURE 2.0 Section 302, imposes an excise tax of 25% of the shortfall (the required amount minus what you actually withdrew). That drops to 10% if you correct the shortfall within the IRS correction window — generally by the end of the second tax year after the year the tax applies — by taking the missed distribution and filing Form 5329.',
  },
  {
    q: 'Can I take my total RMD from just one of my IRAs?',
    a: "Yes. Traditional, SEP, and SIMPLE IRAs can be aggregated: calculate each IRA's RMD separately, add them up, and withdraw the total from any one IRA or any combination of them. 401(k)s and 403(b)s cannot be aggregated with each other or with your IRAs — each employer plan's RMD must be withdrawn from that specific plan.",
  },
  {
    q: 'Can I delay my first RMD?',
    a: 'Yes — the RMD for the year you reach your RMD age can be delayed until April 1 of the following year (the "required beginning date"). The catch: every RMD after that first one is still due by December 31 each year, so delaying means you take two RMDs in that following year, which can push you into a higher tax bracket. This calculator flags that year so you can weigh the trade-off.',
  },
  {
    q: 'Does a much-younger spouse change my RMD?',
    a: "Yes. If your sole beneficiary for the entire year is a spouse more than 10 years younger than you, the IRS requires the Joint Life and Last Survivor Table (Table II) instead of the Uniform Lifetime Table, which produces a longer divisor and a smaller required RMD. This calculator flags that situation but doesn't compute Table II's two-dimensional values — see IRS Pub. 590-B or a tax professional for the exact figure.",
  },
  {
    q: 'Is my RMD taxed the same as qualified dividends?',
    a: 'No. Withdrawals from a Traditional IRA or 401(k) — including your RMD — are taxed as ordinary income at your marginal tax rate, regardless of whether the underlying holdings paid qualified dividends inside the account. Use the Dividend Tax Calculator to estimate ordinary-income tax on the withdrawn amount.',
  },
]

export default function RMDCalculatorPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'RMD Calculator',
        description: 'Free calculator for Required Minimum Distributions using the IRS Uniform Lifetime Table, the SECURE 2.0 RMD age rules, and the IRC §4974 shortfall penalty.',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        url,
      },
      { '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    ],
  }
  return (
    <div className="container mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-muted-foreground mb-4">
          <Link href="/calculators" className="hover:underline">Calculators</Link> / <span>RMD Calculator</span>
        </nav>
        <h1 className="text-4xl font-bold mb-3">RMD Calculator</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
          Enter your birth year and account balance to get this year's required minimum
          distribution from the IRS Uniform Lifetime Table, the excise tax you'd owe on a
          shortfall, and a year-by-year withdrawal schedule. Free, no signup, nothing leaves your
          browser.
        </p>

        <RMDCalculator />

        <section id="brokers" className="py-12 border-t border-gray-200 dark:border-gray-700 mt-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Still holding dividend stocks in your IRA?</h2>
            <p className="text-muted-foreground mb-6">Find a broker that makes managing RMD-driven withdrawals simple.</p>
            <BrokerComparisonTable />
          </div>
        </section>

        <div className="mt-12 max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">How the calculation works</h2>
          <p className="text-muted-foreground mb-4">
            The formula is set by IRS Publication 590-B: divide your account balance as of December
            31 of the previous year by the distribution period for the age you turn this year, from
            the Uniform Lifetime Table (Pub. 590-B, Appendix B, Table III). For example, someone who
            turns 80 this year with a $500,000 prior year-end balance divides by the table's age-80
            divisor of 20.2 — the calculator above runs that same division live on whatever numbers
            you enter, it isn't a canned example.
          </p>
          <p className="text-muted-foreground mb-4">
            RMDs on dividend-paying holdings often force a sale or a shift out of stock into cash
            once withdrawals must start — see the{' '}
            <Link href="/calculators/dividend-income" className="text-primary hover:underline">Dividend Income Calculator</Link>{' '}
            to check how much income a smaller position would still generate, or the{' '}
            <Link href="/calculators/drip" className="text-primary hover:underline">DRIP Calculator</Link>{' '}
            for how reinvestment compounds a taxable account with no RMDs to work around.
          </p>
        </div>

        <div className="mt-10 max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>
          <div className="space-y-5">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-semibold mb-1">{f.q}</h3>
                <p className="text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-lg border p-5">
            <p className="font-medium mb-2">Keep going</p>
            <p className="text-muted-foreground mb-3 text-sm">
              Estimate the tax on what you withdraw, or check the IRA rules that got you here.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/calculators/dividend-tax" className="text-primary hover:underline">Dividend Tax Calculator →</Link>
              <Link href="/calculators/ira" className="text-primary hover:underline">IRA Calculator →</Link>
              <Link href="/calculators/retirement-income" className="text-primary hover:underline">Retirement Income Calculator →</Link>
            </div>
          </div>
        </div>

        <p className="mt-10 text-xs text-muted-foreground max-w-2xl">
          This calculator performs arithmetic on the numbers you enter and does not access your
          brokerage or custodian account. It is not tax advice; consult a tax professional and your
          account custodian, whose figure is the one reported to the IRS on Form 5498.
        </p>
      </div>
    </div>
  )
}
