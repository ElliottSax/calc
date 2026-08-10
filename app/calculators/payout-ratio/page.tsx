import type { Metadata } from 'next'
import Link from 'next/link'
import { PayoutRatioCalculator } from '@/components/calculators/PayoutRatioCalculator'

const url = 'https://dividendengines.com/calculators/payout-ratio'

export const metadata: Metadata = {
  title: { absolute: 'Dividend Payout Ratio Calculator — Is the Dividend Sustainable? | Dividend Engines' },
  description:
    'Free dividend payout ratio calculator. Enter dividend per share and EPS to see the payout ratio, retention ratio, and whether a company’s dividend is sustainable.',
  keywords: ['dividend payout ratio calculator', 'payout ratio formula', 'is a dividend sustainable', 'retention ratio calculator', 'dividend coverage calculator'],
  alternates: { canonical: url },
  openGraph: { title: 'Dividend Payout Ratio Calculator', description: 'Calculate payout ratio, retention ratio, and dividend sustainability.', type: 'website', url },
}

const faqs = [
  { q: 'What is the dividend payout ratio?', a: 'The payout ratio is the share of a company’s earnings paid out as dividends: dividend per share ÷ earnings per share × 100 (or total dividends ÷ net income). A company earning $5 a share and paying $2 has a 40% payout ratio.' },
  { q: 'What is a good payout ratio?', a: 'It depends on the industry, but 40–60% is generally considered healthy for a growing company — enough to reward shareholders while retaining earnings to reinvest. Mature, stable businesses can comfortably run higher, while a ratio under 40% leaves plenty of room for future dividend increases.' },
  { q: 'Why is a payout ratio over 100% a warning sign?', a: 'A ratio above 100% means the company is paying out more in dividends than it earns, funding the difference from cash reserves, borrowing, or selling assets. That is rarely sustainable, and it often precedes a dividend cut.' },
  { q: 'Do REITs use the payout ratio?', a: 'Not the standard EPS-based one. REITs and many other high-yield vehicles are better measured against funds from operations (FFO) rather than earnings per share, because large non-cash depreciation charges depress reported EPS and make the EPS payout ratio look artificially high.' },
]

export default function PayoutRatioPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebApplication', name: 'Dividend Payout Ratio Calculator', applicationCategory: 'FinanceApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, url },
      { '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    ],
  }
  return (
    <div className="container mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-muted-foreground mb-4">
          <Link href="/calculators" className="hover:underline">Calculators</Link> / <span>Dividend Payout Ratio Calculator</span>
        </nav>
        <h1 className="text-4xl font-bold mb-3">Dividend Payout Ratio Calculator</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
          Enter a company&apos;s dividend per share and earnings per share to see what portion of profits
          it pays out, how much it keeps, and whether the dividend looks sustainable. Free, no signup.
        </p>

        <PayoutRatioCalculator />

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
              A sustainable payout ratio is only half the story — check the yield, how fast the dividend
              is growing, and what you&apos;ll keep after tax.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/calculators/dividend-yield" className="text-primary hover:underline">Dividend Yield Calculator →</Link>
              <Link href="/calculators/dividend-growth" className="text-primary hover:underline">Dividend Growth Calculator →</Link>
              <Link href="/calculators/dividend-tax" className="text-primary hover:underline">Dividend Tax Calculator →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
