import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { TrumpAccountCalculatorLazy as TrumpAccountCalculator } from '@/components/calculators/TrumpAccountCalculatorLazy'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://dividendengines.com'

export const metadata: Metadata = {
  title: 'Trump Account Calculator — Project the $1,000 Seed to Age 18',
  description:
    'Free Trump Account (Section 530A) calculator: project the federal $1,000 seed plus contributions to age 18, and compare against a custodial UTMA and a 529 side by side.',
  keywords: [
    'trump account calculator',
    'trump savings account',
    'section 530A account',
    'trump account vs 529',
    'trump account vs UTMA',
    'child investment account calculator',
  ],
  openGraph: {
    title: 'Trump Account Calculator — Project the $1,000 Seed to Age 18',
    description:
      'Project a Trump Account to age 18 and compare it honestly against UTMA and 529 options.',
    type: 'website',
    url: `${baseUrl}/calculators/trump-account`,
  },
  alternates: { canonical: `${baseUrl}/calculators/trump-account` },
}


// The comparison table is the page's real job. AI Overviews cite tables ~2.5x more
// than prose, and the honest framing -- Trump Accounts open through the federal
// pilot only -- makes the "what ELSE should we open" row the one a brokerage link
// can legitimately serve.
const COMPARISON = [
  {
    row: 'Where you open it',
    trump: 'Federal pilot enrollment (Treasury); approved custodians only — not retail brokerages',
    utma: 'Any major brokerage, in minutes',
    plan529: 'State plans or brokerages',
  },
  {
    row: 'Free money',
    trump: '$1,000 federal seed (eligible children born 2025–2028); some employers may contribute',
    utma: 'None',
    plan529: 'State tax deductions/credits in many states',
  },
  {
    row: 'Contribution cap',
    trump: '$5,000/yr',
    utma: 'None (gift-tax rules apply above annual exclusion)',
    plan529: 'High lifetime limits, state-dependent',
  },
  {
    row: 'What it can hold',
    trump: 'Designated broad index funds',
    utma: 'Almost anything — stocks, ETFs, funds',
    plan529: 'Plan menu of funds',
  },
  {
    row: 'When the child can use it',
    trump: 'Locked until 18, then IRA-style treatment (retirement-oriented)',
    utma: 'Transfers to the child at majority; usable for anything',
    plan529: 'Anytime, for qualified education expenses',
  },
  {
    row: 'Best at',
    trump: 'Capturing the free seed + tax-advantaged compounding to adulthood',
    utma: 'Flexibility — first car, gap year, seed capital, anything',
    plan529: 'Education costs specifically',
  },
]

export default function TrumpAccountPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <BreadcrumbNav
          items={[
            { name: 'Calculators', url: '/calculators' },
            { name: 'Trump Account Calculator', url: '/calculators/trump-account' },
          ]}
        />

        <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-3">
          Trump Account Calculator
        </h1>
        <p className="text-muted-foreground max-w-3xl mb-8">
          Project a Trump Account (Section 530A) from today to your child&apos;s 18th
          birthday — the $1,000 federal seed, your contributions under the $5,000
          annual cap, and compounding in between. Then see, honestly, where a
          custodial account or 529 fits alongside it.
        </p>

        <TrumpAccountCalculator />

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">
            Trump Account vs UTMA vs 529 — side by side
          </h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            These are complements, not competitors. The Trump Account&apos;s seed and tax
            treatment are unmatched — but its $5,000/yr cap and age-18 lock-up mean many
            families pair it with a flexible custodial (UTMA) account, a 529, or both.
          </p>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 text-left">
                  <th className="p-3 font-semibold"></th>
                  <th className="p-3 font-semibold">Trump Account (530A)</th>
                  <th className="p-3 font-semibold">Custodial UTMA</th>
                  <th className="p-3 font-semibold">529 Plan</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((r) => (
                  <tr key={r.row} className="border-t align-top">
                    <td className="p-3 font-medium whitespace-nowrap">{r.row}</td>
                    <td className="p-3 text-muted-foreground">{r.trump}</td>
                    <td className="p-3 text-muted-foreground">{r.utma}</td>
                    <td className="p-3 text-muted-foreground">{r.plan529}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Common questions</h2>
          <div className="space-y-5 text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground">Can I open a Trump Account at a brokerage?</h3>
              <p>
                No. Enrollment runs through the federal pilot program with approved
                custodians. Brokerages can&apos;t open one — anyone telling you otherwise is
                mistaken. What a brokerage <em>can</em> hold is the flexible custodial
                account many families run alongside.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">What happens at 18?</h3>
              <p>
                The balance moves to IRA-style treatment for the child. That&apos;s powerful
                for retirement compounding and restrictive for everything else — which is
                exactly why the comparison above matters before your child needs a first
                car or tuition.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Is the $1,000 seed automatic?</h3>
              <p>
                Eligibility covers children born 2025–2028, subject to enrollment —
                confirmation and current rules live at treasury.gov, not on third-party
                sites (including this one). Rules are new and still being clarified;
                this page states its as-of date and updates as guidance lands.
              </p>
            </div>
          </div>
        </section>

        <p className="text-xs text-muted-foreground mt-10">
          Educational estimates only, not tax or investment advice. See our{' '}
          <a href="/disclaimer" className="underline">disclaimer</a> and{' '}
          <a href="/affiliate-disclosure" className="underline">affiliate disclosure</a>.
        </p>
      </main>
    </>
  )
}
