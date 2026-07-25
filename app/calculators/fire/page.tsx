import type { Metadata } from 'next'
import Link from 'next/link'
import { FireCalculator } from '@/components/calculators/FireCalculator'

const url = 'https://dividendengines.com/calculators/fire'

export const metadata: Metadata = {
  title: { absolute: 'FIRE Calculator — Financial Independence & Retire Early | Dividend Engines' },
  description:
    'Free FIRE calculator. Find your FIRE number and how many years until financial independence based on your savings rate, income, expenses, and expected return.',
  keywords: ['fire calculator', 'financial independence calculator', 'retire early calculator', 'coast fire calculator', 'fire number calculator', 'savings rate calculator'],
  alternates: { canonical: url },
  openGraph: { title: 'FIRE Calculator — When Can You Retire Early?', description: 'Calculate your FIRE number and years to financial independence.', type: 'website', url },
}

const faqs = [
  { q: 'What is a FIRE number?', a: 'Your FIRE number is the portfolio size that lets you live off withdrawals indefinitely. It equals your annual expenses divided by your safe withdrawal rate — at the common 4% rate, that is 25× your annual expenses.' },
  { q: 'What is a safe withdrawal rate?', a: 'The percentage of your portfolio you can withdraw each year with low risk of running out. The classic figure is 4% (the "4% rule"), though some prefer 3–3.5% for a longer or more conservative retirement.' },
  { q: 'How is "years to FIRE" calculated?', a: 'We compound your current savings plus your annual contributions (income minus expenses) at your expected return until the balance reaches your FIRE number. A higher savings rate shortens the timeline far more than a higher return.' },
  { q: 'What is Coast FIRE?', a: 'Coast FIRE is when your existing investments will grow to your FIRE number by retirement age without any further contributions — so you only need to cover current expenses. Increase the age gap and set contributions low to approximate it here.' },
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
