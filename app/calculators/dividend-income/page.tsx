import type { Metadata } from 'next'
import Link from 'next/link'
import { DividendIncomeCalculator } from '@/components/calculators/DividendIncomeCalculator'

const url = 'https://dividendengines.com/calculators/dividend-income'

export const metadata: Metadata = {
  title: { absolute: 'Dividend Income Calculator — Monthly, Annual & ETF Income | Dividend Engines' },
  description:
    'How to calculate dividend income from stocks or a dividend ETF: portfolio value × yield. Free calculator for annual, quarterly, and monthly income and your income goal.',
  keywords: ['dividend income calculator', 'how to calculate dividend income', 'etf dividend calculator', 'dividend etf calculator', 'monthly dividend income calculator', 'dividend portfolio calculator', 'how much to invest for dividend income'],
  alternates: { canonical: url },
  openGraph: { title: 'Dividend Income Calculator', description: 'Calculate monthly and annual dividend income from stocks or dividend ETFs.', type: 'website', url },
}

const faqs = [
  { q: 'How do I calculate dividend income?', a: 'Multiply your portfolio value by its average dividend yield. A $100,000 portfolio at a 4% yield produces $4,000 a year — about $333 a month. Divide the annual figure by 12 for monthly or by 4 for quarterly income.' },
  { q: 'How much do I need invested for $1,000 a month in dividends?', a: 'It depends on yield. At a 4% average yield you need $300,000 ($1,000 × 12 ÷ 0.04). At 5% you need $240,000; at 3% you need $400,000. Use the income-goal field above to solve for your own target.' },
  { q: 'What is a realistic dividend yield?', a: 'A diversified dividend portfolio typically yields 3–5%. Chasing much higher yields (8%+) usually means taking on more risk of a dividend cut. Sustainable yield from quality companies beats an unsustainable headline number.' },
  { q: 'Is dividend income taxed?', a: "In a taxable account, most dividends from U.S. stocks are 'qualified' and taxed at lower long-term capital-gains rates. Holding dividend stocks in a Roth IRA or 401(k) can defer or eliminate that tax." },
  { q: 'How do you calculate dividend income from an ETF?', a: 'The same way as a stock, using the fund instead of a single company: multiply the amount you hold by the ETF\'s trailing 12-month distribution yield. $25,000 in an ETF distributing 3.2% produces about $800 a year. Use the trailing distribution yield rather than the SEC 30-day yield if you want to reflect what the fund actually paid, and remember distributions vary quarter to quarter as the underlying holdings change their dividends.' },
  { q: 'Can I use this as an ETF dividend calculator?', a: 'Yes. Enter the value of your ETF position as the portfolio value and the fund\'s distribution yield as the yield — the math is identical whether the yield comes from one stock, a basket of them, or a dividend ETF. For a mixed portfolio, blend the yields: weight each holding\'s yield by its share of the total and enter the combined figure.' },
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

        <section className="mt-12 max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">How to calculate dividend income</h2>
          <p className="text-muted-foreground mb-4">
            Dividend income is the cash your holdings pay you over a year. You can work it out from
            the top down — total portfolio value multiplied by its average yield — or from the bottom
            up, adding the dividends from each position. Both give the same answer; the top-down
            version is faster when you own a fund or a broad basket.
          </p>

          <div className="rounded-lg border bg-muted/50 p-5 my-6">
            <p className="font-mono text-sm sm:text-base font-medium">
              Annual Dividend Income = Portfolio Value × Dividend Yield
            </p>
          </div>

          <p className="text-muted-foreground mb-4">
            Position by position, it is shares multiplied by the annual dividend each share pays:
          </p>

          <div className="rounded-lg border bg-muted/50 p-5 my-6">
            <p className="font-mono text-sm sm:text-base font-medium">
              Annual Income = Shares Owned × Annual Dividend Per Share
            </p>
          </div>

          <p className="text-muted-foreground mb-4">
            Divide the annual figure by 12 for monthly income or by 4 for quarterly. To go the other
            direction and find the capital an income goal requires, flip the first formula:
          </p>

          <div className="rounded-lg border bg-muted/50 p-5 my-6">
            <p className="font-mono text-sm sm:text-base font-medium">
              Portfolio Needed = Annual Income Goal ÷ Dividend Yield
            </p>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-3">Worked example</h3>
          <p className="text-muted-foreground mb-3">
            Say you hold $60,000 in a dividend ETF with a 3.5% trailing distribution yield.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-muted-foreground mb-4">
            <li>
              Convert the yield to a decimal: <span className="font-mono">3.5% ÷ 100 = 0.035</span>
            </li>
            <li>
              Annual income: <span className="font-mono">$60,000 × 0.035 = $2,100</span>
            </li>
            <li>
              Monthly: <span className="font-mono">$2,100 ÷ 12 = $175</span>; quarterly:{' '}
              <span className="font-mono">$2,100 ÷ 4 = $525</span>
            </li>
          </ol>
          <p className="text-muted-foreground mb-4">
            Going the other way: to reach $500 a month — $6,000 a year — at that same 3.5% yield you
            would need <span className="font-mono">$6,000 ÷ 0.035 = $171,429</span> invested.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-2">Using this as an ETF dividend calculator</h3>
          <p className="text-muted-foreground mb-4">
            Nothing changes for funds — an ETF&apos;s distributions are just the pooled dividends of
            everything it holds, passed through to you. Enter the ETF position&apos;s market value and
            the fund&apos;s distribution yield. Two details are worth watching: most equity ETFs
            distribute quarterly rather than monthly, so income arrives in four lumps, and the
            trailing yield reflects the last twelve months of payments while the SEC 30-day yield
            estimates the next twelve. For a portfolio mixing several funds and stocks, weight each
            holding&apos;s yield by its dollar share to get the blended yield to type in.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-2">What your result means</h3>
          <p className="text-muted-foreground">
            The number the calculator returns is pre-tax and pre-growth. In a taxable account,
            qualified dividends are taxed at long-term capital-gains rates, so plan on keeping
            somewhat less than the headline figure; in a Roth IRA you keep all of it. It also assumes
            the yield holds steady — in practice a portfolio of dividend growers should pay a little
            more each year without you adding money, while a portfolio built around unusually high
            yields is more likely to see a cut. A diversified dividend portfolio realistically yields
            3–5%, so treat any plan that depends on 8%+ as carrying real risk to the income itself,
            not just to the share price.
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
