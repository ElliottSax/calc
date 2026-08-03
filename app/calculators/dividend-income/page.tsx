import type { Metadata } from 'next'
import Link from 'next/link'
import { DividendIncomeCalculator } from '@/components/calculators/DividendIncomeCalculator'

const url = 'https://dividendengines.com/calculators/dividend-income'

export const metadata: Metadata = {
  title: { absolute: 'Dividend Income Calculator — Monthly & Annual Income (2026) | Dividend Engines' },
  description:
    'Free dividend income calculator. Enter your portfolio value and yield to see annual, quarterly, and monthly dividend income — plus how much you need to hit an income goal.',
  keywords: ['dividend income calculator', 'monthly dividend income calculator', 'dividend portfolio calculator', 'passive income calculator', 'how much to invest for dividend income'],
  alternates: { canonical: url },
  openGraph: { title: 'Dividend Income Calculator', description: 'Calculate your monthly and annual dividend income.', type: 'website', url },
}

const faqs = [
  { q: 'How do I calculate dividend income?', a: 'Multiply your portfolio value by its average dividend yield. A $100,000 portfolio at a 4% yield produces $4,000 a year — about $333 a month. Divide the annual figure by 12 for monthly or by 4 for quarterly income.' },
  { q: 'How much do I need invested for $1,000 a month in dividends?', a: 'It depends on yield. At a 4% average yield you need $300,000 ($1,000 × 12 ÷ 0.04). At 5% you need $240,000; at 3% you need $400,000. Use the income-goal field above to solve for your own target.' },
  { q: 'What is a realistic dividend yield?', a: 'A diversified dividend portfolio typically yields 3–5%. Chasing much higher yields (8%+) usually means taking on more risk of a dividend cut. Sustainable yield from quality companies beats an unsustainable headline number.' },
  { q: 'Is dividend income taxed?', a: "In a taxable account, most dividends from U.S. stocks are 'qualified' and taxed at lower long-term capital-gains rates. Holding dividend stocks in a Roth IRA or 401(k) can defer or eliminate that tax." },
]

export default function DividendIncomePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebApplication', name: 'Dividend Income Calculator', applicationCategory: 'FinanceApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, url },
      { '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    ],
  }
  return (
    <div className="container mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-muted-foreground mb-4">
          <Link href="/calculators" className="hover:underline">Calculators</Link> / <span>Dividend Income Calculator</span>
        </nav>
        <h1 className="text-4xl font-bold mb-3">Dividend Income Calculator</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
          Enter your portfolio value and average yield to see your annual, quarterly, and monthly
          dividend income — and how much you'd need to reach an income goal. Free, no signup.
        </p>

        <DividendIncomeCalculator />

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
            <div className="flex gap-3 flex-wrap">
              <Link href="/calculators/dividend-growth" className="text-primary hover:underline">Dividend Growth Calculator →</Link>
              <Link href="/calculators/drip" className="text-primary hover:underline">DRIP Calculator →</Link>
              <Link href="/blog/best-dividend-stocks-for-beginners" className="text-primary hover:underline">Best Dividend Stocks for Beginners →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
