import type { Metadata } from 'next'
import Link from 'next/link'
import { FireCalculator } from '@/components/calculators/FireCalculator'

const url = 'https://dividendengines.com/calculators/fire'

export const metadata: Metadata = {
  title: { absolute: 'FIRE Calculator — Retirement Income & Your FIRE Number | Dividend Engines' },
  description:
    'How to calculate retirement income: portfolio × safe withdrawal rate. Free FIRE calculator for your FIRE number, savings rate, and years to financial independence.',
  keywords: ['fire calculator', 'how to calculate retirement income', 'how to build wealth for retirement', 'retirement income calculator', 'financial independence calculator', 'retire early calculator', 'fire number calculator', 'savings rate calculator'],
  alternates: { canonical: url },
  openGraph: { title: 'FIRE Calculator — Retirement Income & Your FIRE Number', description: 'Calculate retirement income, your FIRE number, and years to financial independence.', type: 'website', url },
}

const faqs = [
  { q: 'What is a FIRE number?', a: 'Your FIRE number is the portfolio size that lets you live off withdrawals indefinitely. It equals your annual expenses divided by your safe withdrawal rate — at the common 4% rate, that is 25× your annual expenses.' },
  { q: 'What is a safe withdrawal rate?', a: 'The percentage of your portfolio you can withdraw each year with low risk of running out. The classic figure is 4% (the "4% rule"), though some prefer 3–3.5% for a longer or more conservative retirement.' },
  { q: 'How is "years to FIRE" calculated?', a: 'We compound your current savings plus your annual contributions (income minus expenses) at your expected return until the balance reaches your FIRE number. A higher savings rate shortens the timeline far more than a higher return.' },
  { q: 'What is Coast FIRE?', a: 'Coast FIRE is when your existing investments will grow to your FIRE number by retirement age without any further contributions — so you only need to cover current expenses. Increase the age gap and set contributions low to approximate it here.' },
  { q: 'How do you calculate retirement income?', a: 'Multiply the portfolio you expect to retire with by your safe withdrawal rate: retirement income = portfolio value × withdrawal rate. A $900,000 portfolio at 4% supports $36,000 a year, or $3,000 a month, before tax. Add any pension and Social Security on top of that figure, and subtract them from your target first if you want to know how much the portfolio alone has to cover.' },
  { q: 'How do you build wealth for retirement?', a: 'Almost all of it comes from your savings rate and time invested rather than picking winners. Save a consistent percentage of income into low-cost, broadly diversified funds, capture every dollar of employer match, keep the money invested through downturns, and let each raise increase the amount saved rather than the amount spent. Cutting a recurring expense does double duty: it frees cash to invest and permanently lowers the portfolio you need, since your target is roughly 25× annual spending.' },
]

export default function FirePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebApplication', name: 'FIRE Calculator', applicationCategory: 'FinanceApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, url },
      { '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    ],
  }
  return (
    <div className="container mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-muted-foreground mb-4">
          <Link href="/calculators" className="hover:underline">Calculators</Link> / <span>FIRE Calculator</span>
        </nav>
        <h1 className="text-4xl font-bold mb-3">FIRE Calculator</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
          Find your FIRE number and how many years until you could retire early — based on your income,
          expenses, savings, and expected return. Free, no signup.
        </p>

        <FireCalculator />

        <section className="mt-12 max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">How to calculate retirement income</h2>
          <p className="text-muted-foreground mb-4">
            Retirement income from a portfolio is whatever you can withdraw each year without
            draining it. That makes it a single multiplication: the balance you retire with, times
            the withdrawal rate you consider safe.
          </p>

          <div className="rounded-lg border bg-muted/50 p-5 my-6">
            <p className="font-mono text-sm sm:text-base font-medium">
              Annual Retirement Income = Portfolio Value × Safe Withdrawal Rate
            </p>
          </div>

          <p className="text-muted-foreground mb-4">
            Run it backwards and you get the target the calculator above solves for — the portfolio
            that supports the spending you actually have:
          </p>

          <div className="rounded-lg border bg-muted/50 p-5 my-6">
            <p className="font-mono text-sm sm:text-base font-medium">
              FIRE Number = Annual Expenses ÷ Safe Withdrawal Rate
            </p>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-3">Worked example</h3>
          <p className="text-muted-foreground mb-3">
            Take a $900,000 portfolio and the classic 4% withdrawal rate.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-muted-foreground mb-4">
            <li>
              Convert the rate: <span className="font-mono">4% ÷ 100 = 0.04</span>
            </li>
            <li>
              Annual income: <span className="font-mono">$900,000 × 0.04 = $36,000</span>
            </li>
            <li>
              Monthly: <span className="font-mono">$36,000 ÷ 12 = $3,000</span>
            </li>
          </ol>
          <p className="text-muted-foreground mb-4">
            In the other direction, someone who spends $60,000 a year needs{' '}
            <span className="font-mono">$60,000 ÷ 0.04 = $1,500,000</span> — the familiar 25× rule,
            since dividing by 0.04 is the same as multiplying by 25. Choosing a more cautious 3.5%
            rate raises that target to{' '}
            <span className="font-mono">$60,000 ÷ 0.035 = $1,714,000</span>. If a pension or Social
            Security will cover $20,000 of that spending, subtract it first: only{' '}
            <span className="font-mono">$40,000 ÷ 0.04 = $1,000,000</span> has to come from the
            portfolio.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">How to build wealth for retirement</h2>
          <p className="text-muted-foreground mb-4">
            The gap between what you earn and what you spend, invested consistently, does nearly all
            the work. That gap has a name and a formula:
          </p>

          <div className="rounded-lg border bg-muted/50 p-5 my-6">
            <p className="font-mono text-sm sm:text-base font-medium">
              Savings Rate = (Income − Expenses) ÷ Income × 100
            </p>
          </div>

          <p className="text-muted-foreground mb-4">
            Project it forward the same way the calculator does — existing savings compounding, plus
            each year&apos;s contributions compounding for the years they have left:
          </p>

          <div className="rounded-lg border bg-muted/50 p-5 my-6">
            <p className="font-mono text-sm sm:text-base font-medium">
              Future Value = Savings × (1 + r)^n + Annual Contribution × [((1 + r)^n − 1) ÷ r]
            </p>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-3">Worked example</h3>
          <p className="text-muted-foreground mb-3">
            Someone earning $80,000 and spending $52,000, with $100,000 already invested and a 6%
            expected return after inflation:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-muted-foreground mb-4">
            <li>
              Savings rate:{' '}
              <span className="font-mono">($80,000 − $52,000) ÷ $80,000 = 35%</span>, or $28,000 a
              year invested
            </li>
            <li>
              Target: <span className="font-mono">$52,000 ÷ 0.04 = $1,300,000</span>
            </li>
            <li>
              After 20 years the existing savings grow to{' '}
              <span className="font-mono">$100,000 × 1.06^20 = $321,000</span>
            </li>
            <li>
              The contributions grow to{' '}
              <span className="font-mono">$28,000 × [(3.21 − 1) ÷ 0.06] = $1,030,000</span>
            </li>
            <li>
              Together: <span className="font-mono">$321,000 + $1,030,000 ≈ $1,351,000</span> — past
              the target a shade under 20 years in
            </li>
          </ol>
          <p className="text-muted-foreground mb-4">
            Now notice what cutting spending does. Trimming $200 a month is $2,400 a year: it lifts
            annual savings to $30,400 <em>and</em> drops the target by{' '}
            <span className="font-mono">$2,400 × 25 = $60,000</span>, to $1,240,000. The two ends
            move toward each other, which is why expense cuts shorten the timeline far more than an
            equivalent raise.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-2">What your result means</h3>
          <p className="text-muted-foreground">
            The years-to-FIRE figure is a planning estimate, not a date. Real returns arrive
            unevenly, and retiring into a bad first few years is the main risk a 4% withdrawal rate
            is meant to survive — which is why 3–3.5% is common for anyone planning a retirement
            longer than 30 years. Treat the income figure as pre-tax: withdrawals from a traditional
            401(k) or IRA are taxed as ordinary income, while a Roth is not, so the same balance can
            support meaningfully different spending. And check what your number is measured in — if
            you use a nominal return, the target needs inflating too; using a real (after-inflation)
            return, as in the example above, keeps everything in today&apos;s dollars.
          </p>
        </section>

        <div className="mt-12 max-w-2xl">
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
              See how reinvested dividends accelerate your path with the DRIP calculator, or model raw growth with compound interest.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/calculators/drip" className="text-primary hover:underline">DRIP Calculator →</Link>
              <Link href="/calculators/compound-interest" className="text-primary hover:underline">Compound Interest →</Link>
              <Link href="/calculators/dividend-yield" className="text-primary hover:underline">Dividend Yield →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
