import type { Metadata } from 'next'
import Link from 'next/link'
import { DividendYieldCalculator } from '@/components/calculators/DividendYieldCalculator'

const url = 'https://dividendengines.com/calculators/dividend-yield'

export const metadata: Metadata = {
  title: { absolute: 'Dividend Yield Calculator & Formula (How to Calculate) | Dividend Engines' },
  description:
    'How to calculate dividend yield: yield = annual dividend per share ÷ share price × 100. Use the free calculator for yield, annual and monthly income, and yield on cost.',
  keywords: ['dividend yield calculator', 'dividend yield formula', 'how to calculate dividend yield', 'calculate dividend yield', 'how to calculate annual dividend', 'how to calculate stock dividend', 'yield on cost calculator', 'dividend income calculator'],
  alternates: { canonical: url },
  openGraph: { title: 'Dividend Yield Calculator & Formula', description: 'How to calculate dividend yield, annual dividend, income, and yield on cost.', type: 'website', url },
}

const faqs = [
  { q: 'How is dividend yield calculated?', a: 'Dividend yield = annual dividend per share ÷ current share price × 100. A stock paying $2 a year at a $50 price yields 4%.' },
  { q: 'What is the dividend yield formula?', a: 'The dividend yield formula is: Dividend Yield (%) = (Annual Dividend Per Share ÷ Current Share Price) × 100. Both inputs must be per-share figures for the same currency. If you only know the total dollars a company pays out, divide that by its share count first to get the dividend per share.' },
  { q: 'How do you calculate the annual dividend of a stock?', a: 'Multiply one regular payment by how many times a year it is paid: a quarterly dividend × 4, a monthly dividend × 12, a semi-annual dividend × 2. A stock paying $0.50 each quarter has a $2.00 annual dividend. Skip special one-time dividends — they are not part of the regular rate and can make the yield look higher than it really is.' },
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

        <section className="mt-12 max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">How to calculate dividend yield</h2>
          <p className="text-muted-foreground mb-4">
            Dividend yield tells you what percentage of a stock&apos;s price comes back to you as cash
            each year. It is a simple ratio between two per-share numbers — the dividend a company
            pays over twelve months, and what one share costs today.
          </p>

          <div className="rounded-lg border bg-muted/50 p-5 my-6">
            <p className="font-mono text-sm sm:text-base font-medium">
              Dividend Yield = (Annual Dividend Per Share ÷ Current Share Price) × 100
            </p>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-2">Step 1 — find the annual dividend per share</h3>
          <p className="text-muted-foreground mb-4">
            Most U.S. companies pay quarterly, so take one quarterly payment and multiply by four.
            Monthly payers multiply by twelve; semi-annual payers by two. Leave out special or
            one-time dividends — they inflate the yield and are not repeated next year.
          </p>

          <div className="rounded-lg border bg-muted/50 p-5 my-6">
            <p className="font-mono text-sm sm:text-base font-medium">
              Annual Dividend = Quarterly Dividend Per Share × 4
            </p>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-2">Step 2 — divide by the share price</h3>
          <p className="text-muted-foreground mb-4">
            Use the current market price for the yield you would get buying today, or your own
            purchase price to get yield on cost — the yield your original money is earning now.
          </p>

          <div className="rounded-lg border bg-muted/50 p-5 my-6">
            <p className="font-mono text-sm sm:text-base font-medium">
              Yield on Cost = (Annual Dividend Per Share ÷ Your Purchase Price) × 100
            </p>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-3">Worked example</h3>
          <p className="text-muted-foreground mb-3">
            Suppose a stock trades at $50 a share and pays a $0.50 dividend every quarter.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-muted-foreground mb-4">
            <li>
              Annual dividend per share: <span className="font-mono">$0.50 × 4 = $2.00</span>
            </li>
            <li>
              Divide by the price: <span className="font-mono">$2.00 ÷ $50 = 0.04</span>
            </li>
            <li>
              Convert to a percentage: <span className="font-mono">0.04 × 100 = 4%</span>
            </li>
          </ol>
          <p className="text-muted-foreground mb-4">
            So the stock yields 4%. Owning 200 shares ($10,000 worth) would produce{' '}
            <span className="font-mono">200 × $2.00 = $400</span> a year, or about{' '}
            <span className="font-mono">$400 ÷ 12 = $33</span> a month. If you had bought those same
            shares years earlier at $25, your yield on cost would be{' '}
            <span className="font-mono">$2.00 ÷ $25 = 8%</span> — the market yield stays at 4% for a
            new buyer, but your original dollars are working twice as hard.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-2">What your result means</h3>
          <p className="text-muted-foreground">
            Yield on its own is not a quality score — it is just price versus payout. A broad
            dividend portfolio usually lands between 3% and 5%; large, steady payers often sit near
            2–4%, while REITs and utilities run higher because they distribute most of their
            earnings. A yield well above 8% is usually the market pricing in a cut rather than a
            bargain, since yield rises automatically when the share price falls. Before treating a
            high number as income, check the payout ratio and whether the company has actually kept
            raising the dividend. A modest yield that grows every year normally beats a large one
            that gets reduced.
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
