import type { Metadata } from 'next'
import Link from 'next/link'
import { DividendGrowthCalculator } from '@/components/calculators/DividendGrowthCalculator'

const url = 'https://dividendengines.com/calculators/dividend-growth'

export const metadata: Metadata = {
  title: { absolute: 'Dividend Growth Calculator — Project Rising Income (2026) | Dividend Engines' },
  description:
    'Free dividend growth calculator. See how your dividend income and yield on cost grow over time as companies raise their payouts and you reinvest.',
  keywords: ['dividend growth calculator', 'dividend income growth', 'yield on cost calculator', 'dividend growth rate calculator', 'dividend compounding calculator'],
  alternates: { canonical: url },
  openGraph: { title: 'Dividend Growth Calculator', description: 'Project how rising dividends grow your income over time.', type: 'website', url },
}

const faqs = [
  { q: 'What is dividend growth?', a: 'Dividend growth is the annual rate at which a company increases its dividend per share. A stock yielding 3% today that raises its dividend 8% a year pays far more on your original cost a decade later — that rising "yield on cost" is the engine of dividend-growth investing.' },
  { q: 'What is a good dividend growth rate?', a: 'Established dividend growers typically raise payouts 5–10% a year. Dividend Aristocrats (25+ years of increases) often land in the 6–8% range. Very high growth rates (15%+) are usually early-stage and less sustainable.' },
  { q: 'How does reinvesting change the result?', a: 'Reinvesting dividends (a DRIP) buys more shares, which pay their own growing dividends — so income compounds on two fronts at once: more shares and higher per-share payouts. Over 20+ years the difference versus taking the cash is dramatic.' },
  { q: 'What is yield on cost?', a: "Yield on cost is your annual dividend divided by what you originally paid, not today's price. As the dividend grows, yield on cost climbs well above the market yield — a 4% starting yield can become 15%+ on cost after enough years of increases." },
]

export default function DividendGrowthPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebApplication', name: 'Dividend Growth Calculator', applicationCategory: 'FinanceApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, url },
      { '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    ],
  }
  return (
    <div className="container mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-muted-foreground mb-4">
          <Link href="/calculators" className="hover:underline">Calculators</Link> / <span>Dividend Growth Calculator</span>
        </nav>
        <h1 className="text-4xl font-bold mb-3">Dividend Growth Calculator</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
          See how your dividend income and yield on cost grow over time as companies raise their
          payouts — and how much faster with reinvestment. Free, no signup.
        </p>

        <DividendGrowthCalculator />

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
              <Link href="/calculators/drip" className="text-primary hover:underline">DRIP Calculator →</Link>
              <Link href="/calculators/dividend-income" className="text-primary hover:underline">Dividend Income Calculator →</Link>
              <Link href="/blog/best-dividend-stocks-for-beginners" className="text-primary hover:underline">Best Dividend Stocks for Beginners →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
