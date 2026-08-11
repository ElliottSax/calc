import type { Metadata } from 'next'
import Link from 'next/link'
import { DividendGrowthCalculator } from '@/components/calculators/DividendGrowthCalculator'

const url = 'https://dividendengines.com/calculators/dividend-growth'

export const metadata: Metadata = {
  title: { absolute: 'Dividend Growth Calculator — How to Calculate Growth Rate | Dividend Engines' },
  description:
    'How to calculate dividend growth rate: (new dividend ÷ old dividend) − 1, or the CAGR over several years. Free calculator projects your rising income and yield on cost.',
  keywords: ['dividend growth calculator', 'how to calculate dividend growth rate', 'calculate dividend growth', 'how to find dividend growth rate', 'dividend growth rate formula', 'dividend growth rate calculator', 'yield on cost calculator'],
  alternates: { canonical: url },
  openGraph: { title: 'Dividend Growth Calculator & Growth Rate Formula', description: 'How to calculate dividend growth rate and project rising income over time.', type: 'website', url },
}

const faqs = [
  { q: 'What is dividend growth?', a: 'Dividend growth is the annual rate at which a company increases its dividend per share. A stock yielding 3% today that raises its dividend 8% a year pays far more on your original cost a decade later — that rising "yield on cost" is the engine of dividend-growth investing.' },
  { q: 'What is a good dividend growth rate?', a: 'Established dividend growers typically raise payouts 5–10% a year. Dividend Aristocrats (25+ years of increases) often land in the 6–8% range. Very high growth rates (15%+) are usually early-stage and less sustainable.' },
  { q: 'How does reinvesting change the result?', a: 'Reinvesting dividends (a DRIP) buys more shares, which pay their own growing dividends — so income compounds on two fronts at once: more shares and higher per-share payouts. Over 20+ years the difference versus taking the cash is dramatic.' },
  { q: 'What is yield on cost?', a: "Yield on cost is your annual dividend divided by what you originally paid, not today's price. As the dividend grows, yield on cost climbs well above the market yield — a 4% starting yield can become 15%+ on cost after enough years of increases." },
  { q: 'How do you calculate dividend growth rate?', a: 'For a single year, dividend growth rate = (new annual dividend − old annual dividend) ÷ old annual dividend × 100. If a company raised its dividend from $1.00 to $1.08, that is ($1.08 − $1.00) ÷ $1.00 = 8%. Over several years use the compound annual growth rate instead: (ending dividend ÷ starting dividend) raised to the power of 1 ÷ number of years, minus 1.' },
  { q: 'How do you find a dividend growth rate for a stock?', a: 'Pull the annual dividend per share for each of the last five to ten years from the company\'s investor-relations dividend history or a broker\'s dividend tab, then run the CAGR formula on the first and last figures. Averaging the 3-, 5- and 10-year rates gives a steadier picture than any single year, and it exposes companies whose recent raises are much smaller than their older ones.' },
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

        <section className="mt-12 max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">How to calculate dividend growth rate</h2>
          <p className="text-muted-foreground mb-4">
            The dividend growth rate is simply how fast a company is raising its dividend per share.
            There are two versions worth knowing: the one-year rate, which tells you what just
            happened, and the compound annual growth rate (CAGR), which smooths several years into a
            single number you can project forward.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-2">One-year growth rate</h3>
          <div className="rounded-lg border bg-muted/50 p-5 my-6">
            <p className="font-mono text-sm sm:text-base font-medium">
              Growth Rate = (New Dividend − Old Dividend) ÷ Old Dividend × 100
            </p>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-2">Multi-year growth rate (CAGR)</h3>
          <div className="rounded-lg border bg-muted/50 p-5 my-6">
            <p className="font-mono text-sm sm:text-base font-medium">
              Growth Rate = ((Ending Dividend ÷ Starting Dividend) ^ (1 ÷ Years) − 1) × 100
            </p>
          </div>
          <p className="text-muted-foreground mb-4">
            &ldquo;Years&rdquo; is the number of gaps between payments, not the number of figures you
            have. Ten calendar years of dividend data covers nine years of growth, so divide by 9.
            Use annual dividends per share throughout — comparing a quarterly payment to an annual
            one is the most common mistake here.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">Worked example</h3>
          <p className="text-muted-foreground mb-3">
            A company paid $1.00 per share in dividends five years ago and pays $1.61 today.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-muted-foreground mb-4">
            <li>
              Divide end by start: <span className="font-mono">$1.61 ÷ $1.00 = 1.61</span>
            </li>
            <li>
              Take the 5th root: <span className="font-mono">1.61 ^ (1 ÷ 5) = 1.10</span>
            </li>
            <li>
              Subtract 1 and convert: <span className="font-mono">(1.10 − 1) × 100 = 10%</span>
            </li>
          </ol>
          <p className="text-muted-foreground mb-4">
            The dividend has compounded at about 10% a year. If the most recent raise was from $1.50
            to $1.61, the one-year rate is{' '}
            <span className="font-mono">($1.61 − $1.50) ÷ $1.50 = 7.3%</span> — slower than the
            five-year average, which is worth noticing. On a $1,000 position bought at a 3% yield,
            10% dividend growth turns $30 of first-year income into roughly $78 after ten years
            without adding a dollar of new money.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-2">What your result means</h3>
          <p className="text-muted-foreground">
            Growth rates in the 5–10% range are the sweet spot for mature dividend payers: fast
            enough to beat inflation and lift your yield on cost, slow enough to be funded out of
            real earnings. Rates above 15% are usually a young dividend coming off a small base, or a
            catch-up raise, and rarely persist for a decade. A rate that has been decelerating year
            after year — 12%, then 8%, then 3% — often signals a payout ratio that has run out of
            room, which matters more than the headline yield. Pair the growth rate with the starting
            yield: a 2% yield growing 12% a year and a 5% yield growing 3% a year can end up in a
            very different place depending on your time horizon, which is exactly what the calculator
            above shows.
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
