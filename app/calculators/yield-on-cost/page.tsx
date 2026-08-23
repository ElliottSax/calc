import type { Metadata } from 'next'
import Link from 'next/link'
import { YieldOnCostCalculator } from '@/components/calculators/YieldOnCostCalculator'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { FAQSchema } from '@/components/seo/FAQSchema'

const url = 'https://dividendengines.com/calculators/yield-on-cost'

export const metadata: Metadata = {
  title: { absolute: 'Yield on Cost Calculator — See Your Real Dividend Return | Dividend Engines' },
  description:
    'Free yield on cost calculator. Enter your purchase price, current dividend, and share price to see your real return — the yield your original dollars are earning today, not the market yield.',
  keywords: [
    'yield on cost calculator',
    'yield on cost formula',
    'how to calculate yield on cost',
    'dividend yield on cost',
    'real dividend return calculator',
    'dividend growth calculator',
    'dividend income calculator',
    'dividend portfolio calculator',
    'dividend yield vs yield on cost',
    'dividend yield calculator'
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Yield on Cost Calculator — See Your Real Dividend Return',
    description: 'Calculate yield on cost — the real return your original investment is earning today, not the market yield.',
    type: 'website',
    url
  },
}

const faqs = [
  {
    question: 'What is yield on cost?',
    answer: 'Yield on cost is the dividend yield based on the price you originally paid for a stock, not its current market price. It shows the real return your original dollars are earning today — not what a new buyer would get.'
  },
  {
    question: 'How do you calculate yield on cost?',
    answer: 'Yield on cost = (annual dividend per share ÷ your purchase price per share) × 100. For example, if you bought a stock at $50 and it now pays $3 a year in dividends, your yield on cost is (3 ÷ 50) × 100 = 6% — regardless of what the stock is worth today.'
  },
  {
    question: 'Why is yield on cost important?',
    answer: 'Yield on cost shows the real return your original investment is earning today. As a company raises its dividend over the years, your yield on cost rises even though the market yield stays similar. It is a measure of how well your original dollars are working for you — not just the current price.'
  },
  {
    question: 'What is the difference between yield on cost and dividend yield?',
    answer: 'Dividend yield uses the current share price: annual dividend ÷ current price × 100. Yield on cost uses your purchase price: annual dividend ÷ your purchase price × 100. A stock trading at $100 with a $4 dividend yields 4% for a new buyer, but if you bought it at $50, your yield on cost is 8% — your original dollars are earning twice as much.'
  },
  {
    question: 'How can yield on cost be higher than the current dividend yield?',
    answer: 'Yield on cost rises when a company increases its dividend over time while the stock price also rises. For example, a stock you bought at $50 might now pay $3 a year (6% yield on cost) while trading at $100 — so the current dividend yield is only 3%. Your original dollars are earning 6% because you paid less for the same dividend.'
  },
  {
    question: 'What is a good yield on cost?',
    answer: 'A good yield on cost depends on your goals and the company’s growth. Many successful dividend investors aim for 8–12% yield on cost over 10–20 years. This means your original investment is earning 8–12% a year in dividends alone — not counting any capital appreciation. Companies that consistently raise dividends can deliver these returns.'
  },
  {
    question: 'Does yield on cost include capital gains?',
    answer: 'No. Yield on cost only measures the dividend income your original investment is generating today. It does not include capital gains (the increase in the stock price). Total return includes both dividend income and capital appreciation.'
  },
  {
    question: 'How does dividend growth affect yield on cost?',
    answer: 'Dividend growth directly increases your yield on cost. Every time a company raises its dividend, your yield on cost rises — even if the stock price stays the same. For example, if you bought a stock at $50 paying $1 a year (2% yield on cost), and the dividend grows to $3 a year, your yield on cost rises to 6% — a 3× increase in income from your original investment.'
  },
  {
    question: 'Is yield on cost the same as yield on investment (YOI)?',
    answer: 'Yes, yield on cost is sometimes called yield on investment (YOI) or yield on original investment. All three terms mean the same thing: the dividend yield based on the price you originally paid, not the current market price.'
  },
  {
    question: 'How can I use yield on cost to evaluate my portfolio?',
    answer: 'Yield on cost helps you see which stocks are delivering the best returns on your original investment. A high yield on cost (8%+) means your original dollars are working hard, while a low yield on cost (under 3%) means your original investment is generating little income. Use it to identify which holdings are delivering real income growth and which may need review.'
  }
]

export default function YieldOnCostPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'Yield on Cost Calculator',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        url
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer }
        }))
      }
    ]
  }

  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-muted-foreground mb-4">
            <Link href="/calculators" className="hover:underline">Calculators</Link> / <span>Yield on Cost Calculator</span>
          </nav>
          <h1 className="text-4xl font-bold mb-3">Yield on Cost Calculator</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            Enter your purchase price, current dividend, and share price to see your real return — the yield your original dollars are earning today, not the market yield. Free, no signup.
          </p>

          <YieldOnCostCalculator />

          <section className="mt-12 max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">What is yield on cost?</h2>
            <p className="text-muted-foreground mb-4">
              Yield on cost tells you the real return your original investment is earning today — not what a new buyer would get. It is the dividend yield based on the price you paid, not the current market price.
            </p>

            <div className="rounded-lg border bg-muted/50 p-5 my-6">
              <p className="font-mono text-sm sm:text-base font-medium">
                Yield on Cost = (Annual Dividend Per Share ÷ Your Purchase Price) × 100
              </p>
            </div>

            <p className="text-muted-foreground mb-4">
              For example, if you bought a stock at $50 and it now pays $3 a year in dividends, your yield on cost is 6% — regardless of what the stock is worth today. A new buyer paying $100 for the same $3 dividend would only get a 3% yield, but your original dollars are earning 6%.
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-2">Why it matters</h3>
            <p className="text-muted-foreground mb-4">
              Yield on cost shows how well your original investment is working for you. As a company raises its dividend over the years, your yield on cost rises even though the market yield stays similar. It is a measure of real income growth — not just price appreciation.
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-2">Yield on cost vs. dividend yield</h3>
            <p className="text-muted-foreground mb-4">
              Dividend yield uses the current share price: annual dividend ÷ current price × 100. Yield on cost uses your purchase price: annual dividend ÷ your purchase price × 100. A stock trading at $100 with a $4 dividend yields 4% for a new buyer, but if you bought it at $50, your yield on cost is 8% — your original dollars are earning twice as much.
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-3">Worked example</h3>
            <p className="text-muted-foreground mb-3">
              Suppose you bought 100 shares of a stock at $50 each ($5,000 total) and it now pays $3 a year in dividends.
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-muted-foreground mb-4">
              <li>
                Annual dividend per share: <span className="font-mono">$3.00</span>
              </li>
              <li>
                Divide by your purchase price: <span className="font-mono">$3.00 ÷ $50 = 0.06</span>
              </li>
              <li>
                Convert to a percentage: <span className="font-mono">0.06 × 100 = 6%</span>
              </li>
            </ol>
            <p className="text-muted-foreground mb-4">
              So your yield on cost is 6%. Your $5,000 investment now generates <span className="font-mono">100 × $3 = $300</span> a year in dividends — a 6% return on your original money. If the stock now trades at $100, the current dividend yield is only 3%, but your original dollars are earning 6%.
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-2">What your result means</h3>
            <p className="text-muted-foreground">
              Yield on cost helps you see the real return your original investment is generating. A rising yield on cost means your income is growing — a sign of a successful dividend investment. A yield on cost well above the current dividend yield means your original dollars are working much harder than a new buyer’s would be.
            </p>
          </section>

          <div className="mt-12 max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>
            <div className="space-y-5">
              {faqs.map((f) => (
                <div key={f.question}>
                  <h3 className="font-semibold mb-1">{f.question}</h3>
                  <p className="text-muted-foreground">{f.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-lg border p-5">
              <p className="font-medium mb-2">Keep going</p>
              <p className="text-muted-foreground mb-3 text-sm">
                Check your dividend income, see how reinvesting dividends compounds your returns, or find beginner-friendly dividend stocks.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link href="/calculators/dividend-income" className="text-primary hover:underline">Dividend Income Calculator →</Link>
                <Link href="/calculators/dividend-growth" className="text-primary hover:underline">Dividend Growth Calculator →</Link>
                <Link href="/calculators/drip" className="text-primary hover:underline">DRIP Calculator →</Link>
                <Link href="/blog/best-dividend-stocks-for-beginners" className="text-primary hover:underline">Best Dividend Stocks for Beginners →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Broker Section — provides the #brokers anchor for the component's scroll target */}
      <section id="brokers" className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Ready to Build Your Dividend Portfolio?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Choose a broker that makes dividend investing easy
              </p>
            </div>
            <BrokerComparisonTable />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}