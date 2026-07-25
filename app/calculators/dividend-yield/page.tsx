import type { Metadata } from 'next'
import Link from 'next/link'
import { DividendYieldCalculator } from '@/components/calculators/DividendYieldCalculator'

const url = 'https://dividendengines.com/calculators/dividend-yield'

export const metadata: Metadata = {
  title: { absolute: 'Dividend Yield Calculator — Yield, Income & Yield on Cost | Dividend Engines' },
  description:
    'Free dividend yield calculator. Enter share price and dividend to get the yield, your annual and monthly income, and yield on cost from your purchase price.',
  keywords: ['dividend yield calculator', 'yield on cost calculator', 'dividend income calculator', 'stock dividend calculator', 'annual dividend calculator'],
  alternates: { canonical: url },
  openGraph: { title: 'Dividend Yield Calculator', description: 'Calculate dividend yield, income, and yield on cost.', type: 'website', url },
}

const faqs = [
  { q: 'How is dividend yield calculated?', a: 'Dividend yield = annual dividend per share ÷ current share price × 100. A stock paying $2 a year at a $50 price yields 4%.' },
  { q: 'What is yield on cost?', a: 'Yield on cost uses the price you originally paid instead of today\'s price: annual dividend ÷ your purchase price. As a company raises its dividend over the years, your yield on cost rises even though the market yield stays similar.' },
  { q: 'Is a higher dividend yield always better?', a: 'No. An unusually high yield (say, above 8–10%) often signals the market expects a dividend cut. Sustainable yields from companies with a low payout ratio and a history of increases usually beat chasing the highest number.' },
  { q: 'How often are dividends paid?', a: 'Most U.S. companies pay quarterly, so the annual dividend is roughly four times the quarterly payment. A few, like Realty Income, pay monthly.' },
]

export default function DividendYieldPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebApplication', name: 'Dividend Yield Calculator', applicationCategory: 'FinanceApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, url },
      { '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    ],
  }
  return (
    <div className="container mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-muted-foreground mb-4">
          <Link href="/calculators" className="hover:underline">Calculators</Link> / <span>Dividend Yield Calculator</span>
        </nav>
        <h1 className="text-4xl font-bold mb-3">Dividend Yield Calculator</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
          Enter a share price and dividend to see the yield, your annual and monthly income, and your
          yield on cost. Free, no signup.
        </p>

        <DividendYieldCalculator />

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
              Reinvest those dividends and watch them compound, or find beginner-friendly payers to start with.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/calculators/drip" className="text-primary hover:underline">DRIP Calculator →</Link>
              <Link href="/blog/best-dividend-stocks-for-beginners" className="text-primary hover:underline">Best Dividend Stocks for Beginners →</Link>
              <Link href="/calculators/fire" className="text-primary hover:underline">FIRE Calculator →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
