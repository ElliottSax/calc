import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DollarSign, TrendingUp, CheckCircle2, AlertTriangle, ArrowRight, Star, Target, BarChart3, Percent, Zap, Shield, PieChart } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Best Dividend Stocks Under $20: Affordable Income Picks (2026)',
  description: 'Discover the best dividend stocks under $20 per share. Build an income portfolio on any budget with these affordable, high-yielding dividend payers.',
  keywords: ['dividend stocks under 20', 'cheap dividend stocks', 'affordable dividend stocks', 'low price dividend stocks', 'best cheap dividend paying stocks', 'dividend stocks under 20 dollars'],
}

const stocksUnder20 = [
  { symbol: 'T', name: 'AT&T', price: '$17.50', yield: '6.5%', annualDiv: '$1.11', payoutRatio: '50%', sector: 'Telecom', highlight: 'Highest yield on this list', description: 'After spinning off WarnerMedia and cutting its dividend in 2022, AT&T now has a sustainable payout with room to grow. Free cash flow covers the dividend 2x over. The 5G rollout and fiber expansion drive subscriber growth, and the stock price reflects years of pessimism that may be overdone.' },
  { symbol: 'F', name: 'Ford Motor', price: '$11.20', yield: '5.4%', annualDiv: '$0.60', payoutRatio: '45%', sector: 'Auto', highlight: 'EV transition play', description: 'Ford offers one of the highest yields in the auto industry. The F-150 Lightning and strong truck sales generate massive cash flow. Management has committed to the regular dividend plus special dividends when cash permits. A turnaround story with real income potential.' },
  { symbol: 'WBD', name: 'Warner Bros Discovery', price: '$12.80', yield: '0%', annualDiv: 'None', payoutRatio: '0%', sector: 'Media', highlight: 'Potential future dividend', description: 'While WBD does not currently pay a dividend, it is included as a watchlist candidate. As debt paydown accelerates and Max streaming achieves profitability, a dividend initiation could come in 2026-2027. At under $15, this is a speculative name to monitor for future income.' },
  { symbol: 'VALE', name: 'Vale SA', price: '$10.50', yield: '8.2%', annualDiv: '$0.86', payoutRatio: '55%', sector: 'Mining', highlight: 'Highest yield mining stock', description: 'Brazilian mining giant Vale is the world\'s largest iron ore producer. Its variable dividend policy pays out a minimum of $1 billion per year, with additional payouts tied to iron ore prices. At current prices, the yield exceeds 8%, though it fluctuates with commodity markets.' },
  { symbol: 'KGC', name: 'Kinross Gold', price: '$8.90', yield: '2.2%', annualDiv: '$0.20', payoutRatio: '35%', sector: 'Gold Mining', highlight: 'Gold price hedge', description: 'Kinross Gold benefits from elevated gold prices and has steadily increased its dividend. Gold miners serve as an inflation hedge and portfolio diversifier. With a low payout ratio of 35%, there is significant room for dividend growth as gold remains above $2,000 per ounce.' },
  { symbol: 'AGNC', name: 'AGNC Investment', price: '$10.20', yield: '14.0%', annualDiv: '$1.44', payoutRatio: '95%', sector: 'Mortgage REIT', highlight: 'Ultra-high yield', description: 'AGNC Investment is a mortgage REIT that invests in agency mortgage-backed securities guaranteed by the US government. The 14% yield is among the highest of any stock, but understand the risk: mortgage REITs use leverage and the dividend can fluctuate with interest rates. Best as a small portfolio position.' },
  { symbol: 'NLY', name: 'Annaly Capital', price: '$19.80', yield: '13.2%', annualDiv: '$2.60', payoutRatio: '92%', sector: 'Mortgage REIT', highlight: 'Largest mortgage REIT', description: 'Annaly is the largest publicly traded mortgage REIT with over $70 billion in assets. Like AGNC, it offers an extraordinary yield but with elevated risk. The dividend has been reduced multiple times over the past decade. Suitable only for investors who understand interest rate risk and want high current income.' },
  { symbol: 'CLF', name: 'Cleveland-Cliffs', price: '$14.50', yield: '1.4%', annualDiv: '$0.20', payoutRatio: '15%', sector: 'Steel', highlight: 'Growth + value combo', description: 'Cleveland-Cliffs is the largest flat-rolled steel producer in North America. The dividend was recently reinstated, signaling management confidence. With a tiny 15% payout ratio, there is enormous room for dividend growth. Infrastructure spending in 2026 provides a demand catalyst.' },
  { symbol: 'USB', name: 'U.S. Bancorp', price: '$18.90', yield: '4.2%', annualDiv: '$1.96', payoutRatio: '45%', sector: 'Banking', highlight: 'Best-in-class regional bank', description: 'U.S. Bancorp consistently earns the highest return on equity among large regional banks. The dividend has grown at 5.5% annually for 13 consecutive years. Conservative management navigated the 2023 regional banking crisis without cutting the dividend. At under $20, this is a quality bank at a value price.' },
  { symbol: 'STAG', name: 'STAG Industrial', price: '$18.50', yield: '4.8%', annualDiv: '$1.47', payoutRatio: '70%', sector: 'Industrial REIT', highlight: 'Monthly dividend', description: 'STAG Industrial is a monthly-paying REIT that owns single-tenant industrial warehouses. E-commerce growth drives demand for warehouse space. The company has raised its dividend annually since its IPO and pays investors every month, making it ideal for income investors who want regular cash flow.' },
  { symbol: 'MPW', name: 'Medical Properties Trust', price: '$4.50', yield: '4.4%', annualDiv: '$0.20', payoutRatio: '40%', sector: 'Healthcare REIT', highlight: 'Deeply discounted', description: 'Medical Properties Trust owns hospital real estate leased to healthcare operators. The stock has fallen significantly due to tenant issues, but the dividend has been adjusted to a sustainable level. For contrarian investors, this deeply discounted REIT offers recovery potential with income.' },
  { symbol: 'M', name: 'Macy\'s', price: '$16.80', yield: '4.2%', annualDiv: '$0.67', payoutRatio: '35%', sector: 'Retail', highlight: 'Real estate value', description: 'Macy\'s pays an attractive dividend backed by strong free cash flow and valuable real estate holdings. The company owns its flagship Herald Square and Union Square locations. While traditional retail faces challenges, the combination of income, real estate value, and a 35% payout ratio provides a margin of safety.' },
]

export default function BestDividendStocksUnder20() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12">
        <Badge className="mb-4 bg-blue-100 text-blue-800">
          <DollarSign className="h-3 w-3 mr-1" />
          Affordable Income
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Best Dividend Stocks Under $20: Affordable Income Picks (2026)
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          You don't need thousands of dollars to start earning dividends. These stocks trade under $20 per share
          and pay yields up to 14%. Plus, most brokers now offer fractional shares, so even $5 gets you started.
        </p>
        <div className="flex items-center gap-4 text-sm text-slate-500 flex-wrap">
          <span>Updated: February 2026</span>
          <span>|</span>
          <span>10 min read</span>
          <span>|</span>
          <span className="flex items-center gap-1">
            <Star className="h-4 w-4" />
            12 stocks analyzed
          </span>
        </div>
      </div>

      {/* Fractional Shares Note */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200">
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Zap className="h-6 w-6 text-blue-600" />
              A Note on Fractional Shares
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
              With fractional share investing at Fidelity, Schwab, and Robinhood, you can buy any stock for as little
              as $1 regardless of share price. This means a $500 stock like Broadcom is just as accessible as a $10 stock.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              That said, many investors prefer owning whole shares for psychological and practical reasons. If you want
              to build positions with whole shares on a tight budget, these under-$20 stocks let you diversify without
              needing a large account.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Quick Comparison Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="h-7 w-7 text-purple-600" />
          Quick Comparison
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="text-left p-3 font-bold">Stock</th>
                <th className="text-left p-3 font-bold">Price</th>
                <th className="text-left p-3 font-bold">Yield</th>
                <th className="text-left p-3 font-bold">Annual Div</th>
                <th className="text-left p-3 font-bold">Payout Ratio</th>
                <th className="text-left p-3 font-bold">Sector</th>
              </tr>
            </thead>
            <tbody>
              {stocksUnder20.filter(s => s.yield !== '0%').map((stock, idx) => (
                <tr key={stock.symbol} className={idx % 2 === 0 ? '' : 'bg-slate-50 dark:bg-slate-900'}>
                  <td className="p-3 font-semibold">{stock.symbol}</td>
                  <td className="p-3">{stock.price}</td>
                  <td className="p-3 text-green-600 font-bold">{stock.yield}</td>
                  <td className="p-3">{stock.annualDiv}</td>
                  <td className="p-3">{stock.payoutRatio}</td>
                  <td className="p-3">{stock.sector}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Stock Picks */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Star className="h-7 w-7 text-yellow-500" />
          Detailed Analysis: 12 Dividend Stocks Under $20
        </h2>

        <div className="space-y-6">
          {stocksUnder20.map((stock, idx) => (
            <Card key={stock.symbol} className="border-l-4 border-l-blue-500">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl font-bold">{idx + 1}. {stock.name} ({stock.symbol})</h3>
                    <p className="text-sm text-blue-600 font-medium">{stock.highlight}</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">{stock.price}</Badge>
                    <Badge className="bg-green-600">{stock.yield} Yield</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 text-sm">
                  <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded">
                    <p className="text-slate-500 text-xs">Share Price</p>
                    <p className="font-bold">{stock.price}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded">
                    <p className="text-slate-500 text-xs">Dividend Yield</p>
                    <p className="font-bold text-green-600">{stock.yield}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded">
                    <p className="text-slate-500 text-xs">Annual Dividend</p>
                    <p className="font-bold">{stock.annualDiv}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded">
                    <p className="text-slate-500 text-xs">Payout Ratio</p>
                    <p className="font-bold">{stock.payoutRatio}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400">{stock.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Email Signup */}
      <section className="mb-16">
        <InlineSignup />
      </section>

      {/* Sample Portfolio */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <PieChart className="h-7 w-7 text-indigo-600" />
          Sample $1,000 Portfolio (All Under $20)
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
          Here is how you could invest $1,000 across these affordable dividend payers, balancing yield with safety.
        </p>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
          <CardContent className="pt-6">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-semibold">AT&T (T) - 10 shares</span>
                <span>$175 | $11.10/yr income</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-semibold">U.S. Bancorp (USB) - 8 shares</span>
                <span>$151 | $15.68/yr income</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-semibold">STAG Industrial (STAG) - 8 shares</span>
                <span>$148 | $11.76/yr income</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-semibold">Ford Motor (F) - 13 shares</span>
                <span>$146 | $7.80/yr income</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-semibold">Macy's (M) - 6 shares</span>
                <span>$101 | $4.02/yr income</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-semibold">Vale (VALE) - 9 shares</span>
                <span>$95 | $7.74/yr income</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-semibold">AGNC Investment (AGNC) - 9 shares</span>
                <span>$92 | $12.96/yr income</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-semibold">Kinross Gold (KGC) - 10 shares</span>
                <span>$89 | $2.00/yr income</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 rounded">
              <p className="font-bold">Total Invested: $997 | Annual Income: $73.06</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Blended Yield: 7.3% | 8 stocks across 7 sectors</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Risk Warnings */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <AlertTriangle className="h-7 w-7 text-yellow-600" />
          Important Risk Warnings
        </h2>
        <div className="space-y-4">
          <Card className="border-yellow-200 bg-yellow-50 dark:bg-yellow-950">
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Ultra-High Yields Often Signal Trouble</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                AGNC and NLY yield 13-14%, but mortgage REITs have historically reduced their dividends over time.
                Their yields look sustainable in the short term but the underlying book value can erode. Limit mortgage
                REIT exposure to 5-10% of your portfolio.
              </p>
            </CardContent>
          </Card>
          <Card className="border-yellow-200 bg-yellow-50 dark:bg-yellow-950">
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Low Price Does Not Equal Value</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Some stocks are under $20 because the business is struggling. Always check the payout ratio,
                free cash flow, and debt levels before buying a cheap stock for its dividend. A $5 stock that
                cuts its dividend will lose far more than the income it pays.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Is it better to buy cheap stocks or fractional shares of expensive ones?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Quality matters more than price. A $500 stock like Broadcom with an 18% dividend growth rate will
                outperform a $5 stock with a declining dividend every time. Use fractional shares to buy the best
                companies regardless of price. The stocks on this list are under $20 AND quality picks, giving you
                the best of both worlds.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">How much can I earn in dividends with $500?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                With a 5% average yield from these stocks, $500 generates about $25 per year in dividends.
                That's about $2 per month. With DRIP reinvesting and $100 monthly additions, your annual
                dividend income grows to roughly $200 after just 3 years. Small amounts compound into meaningful
                income streams over time.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Are dividend stocks under $20 riskier than blue-chip stocks?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Generally, yes. Lower-priced stocks tend to be smaller companies, turnaround stories, or
                companies facing challenges. AT&T and U.S. Bancorp are exceptions as large-cap quality names
                that happen to trade at lower prices. Diversify across at least 5-8 positions to reduce the
                impact of any single stock underperforming.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Should I reinvest dividends or take the cash?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                If you are building wealth, always reinvest. DRIP (Dividend Reinvestment Plans) automatically
                buy more shares with each dividend payment, compounding your returns. On a $1,000 portfolio
                yielding 7%, reinvesting for 20 years grows your position to roughly $3,870 versus $2,400
                without reinvestment.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">What is the minimum to start dividend investing?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                With fractional shares, you can start with as little as $1. To build a meaningful diversified
                portfolio of whole shares at these under-$20 prices, $200-$500 is enough to buy 3-5 different
                stocks. The key is to start investing consistently, even if amounts are small. Time in the
                market is the single biggest factor in dividend investing success.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">See How Your Dividends Grow</h3>
            <p className="mb-6 text-blue-100">
              Model how a $500 or $1,000 investment in these affordable dividend stocks compounds over
              10, 20, or 30 years with our free calculators.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/calculators/drip">
                <Button size="lg" variant="secondary" className="gap-2">
                  <TrendingUp className="h-5 w-5" />
                  DRIP Calculator
                </Button>
              </Link>
              <Link href="/calculators/investment-return">
                <Button size="lg" variant="secondary" className="gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Investment Return Calculator
                </Button>
              </Link>
              <Link href="/calculators/dividend-growth">
                <Button size="lg" variant="secondary" className="gap-2">
                  <DollarSign className="h-5 w-5" />
                  Dividend Growth Calculator
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Related Articles */}
      <Card className="bg-slate-50 dark:bg-slate-900">
        <CardContent className="pt-6">
          <h3 className="font-bold text-lg mb-4">Related Articles</h3>
          <div className="grid gap-3">
            <Link href="/blog/best-dividend-stocks-for-beginners" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Best Dividend Stocks for Beginners
            </Link>
            <Link href="/blog/best-dividend-stocks-for-young-investors" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Best Dividend Stocks for Young Investors in Their 20s
            </Link>
            <Link href="/blog/highest-paying-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Highest Paying Dividend Stocks: Top 20 Yields
            </Link>
            <Link href="/blog/drip-investing-guide" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Complete Guide to DRIP Investing
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
