import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, DollarSign, BarChart3, Shield, CheckCircle2, AlertTriangle, ArrowRight, Star, Target, Percent, Calendar, Clock, Zap } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'JEPI ETF Review: JPMorgan Equity Premium Income (2026)',
  description: 'Complete JEPI ETF review covering its covered call strategy, 7-8% yield, monthly income, holdings, risks, and who should invest. JPMorgan Equity Premium Income deep dive for 2026.',
  keywords: ['JEPI ETF review', 'JEPI analysis', 'JPMorgan Equity Premium Income', 'JEPI yield', 'JEPI monthly income', 'covered call ETF', 'high yield ETF 2026'],
}

export default function JEPIReviewAnalysis() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Star className="h-3 w-3 mr-1" />
          ETF Deep Dive
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          JEPI ETF Review: JPMorgan Equity Premium Income
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Earning 7-8% yield with monthly payments sounds too good to be true. Here is exactly how
          JEPI works, what risks you take, and whether it belongs in your portfolio.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <span>16 min read</span>
          <span>-</span>
          <span>Updated February 2026</span>
        </div>
      </div>

      {/* Key Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-12">
        <Card>
          <CardContent className="pt-6 text-center">
            <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">$36B+</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Assets Under Management</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <Percent className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">7.5%</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Current Distribution Yield</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">Monthly</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Distribution Frequency</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <BarChart3 className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">0.35%</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Expense Ratio</p>
          </CardContent>
        </Card>
      </div>

      {/* What is JEPI */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">What Is JEPI?</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          The JPMorgan Equity Premium Income ETF (JEPI) is an actively managed fund that generates
          high monthly income by combining a portfolio of low-volatility S&P 500 stocks with an
          options overlay strategy (selling equity-linked notes, or ELNs, tied to S&P 500 call options).
        </p>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          Launched in May 2020, JEPI has exploded in popularity due to its eye-catching 7-8% yield
          and monthly distributions. It has attracted over $36 billion in assets in less than six years,
          making it one of the fastest-growing ETFs in history.
        </p>
        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <CardContent className="pt-6">
            <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">JEPI at a Glance</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Fund Name</span><span className="font-medium">JPMorgan Equity Premium Income ETF</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Ticker</span><span className="font-medium">JEPI</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Inception Date</span><span className="font-medium">May 20, 2020</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Expense Ratio</span><span className="font-medium">0.35%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Distribution Yield</span><span className="font-medium">~7.5%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Distribution Frequency</span><span className="font-medium">Monthly</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Management</span><span className="font-medium">Actively managed</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Number of Holdings</span><span className="font-medium">~120 stocks + ELNs</span></div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* How It Works */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How JEPI Generates Its High Yield</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          JEPI&apos;s income comes from two distinct sources, which together produce its 7-8% yield.
          Understanding both is critical to knowing what you are actually investing in.
        </p>
        <div className="space-y-4">
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-blue-600">1</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Equity Portfolio (~1-2% Yield)</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    JEPI holds approximately 120 low-volatility, large-cap S&P 500 stocks selected by JPMorgan&apos;s
                    research team. These are typically defensive, dividend-paying companies like UnitedHealth,
                    Progressive, AbbVie, and Mastercard. This portfolio alone generates a modest 1-2% dividend yield.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-green-500">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-green-600">2</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Options Premium (~5-6% Yield)</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    The majority of JEPI&apos;s yield comes from selling S&P 500 call options through equity-linked
                    notes (ELNs). By selling these options, JEPI collects premium income in exchange for
                    capping the fund&apos;s upside participation. When the S&P 500 rallies beyond the strike price,
                    JEPI misses out on those gains -- that is the trade-off for the high income.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <div className="flex gap-3">
            <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Critical Understanding:</strong> JEPI&apos;s 7-8% yield is not all &quot;free money.&quot; Much of it comes
              from selling away future upside potential. In strong bull markets, JEPI significantly
              underperforms the S&P 500 on total returns because its options strategy caps gains.
            </p>
          </div>
        </div>
      </section>

      {/* Top Holdings */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Top 10 Stock Holdings</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 font-semibold">Company</th>
                    <th className="text-left py-3 font-semibold">Ticker</th>
                    <th className="text-right py-3 font-semibold">Weight</th>
                    <th className="text-right py-3 font-semibold">Sector</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Progressive Corp.', ticker: 'PGR', weight: '1.82%', sector: 'Financials' },
                    { name: 'Trane Technologies', ticker: 'TT', weight: '1.71%', sector: 'Industrials' },
                    { name: 'AbbVie', ticker: 'ABBV', weight: '1.68%', sector: 'Healthcare' },
                    { name: 'Microsoft', ticker: 'MSFT', weight: '1.64%', sector: 'Technology' },
                    { name: 'Amazon', ticker: 'AMZN', weight: '1.59%', sector: 'Consumer Disc.' },
                    { name: 'Mastercard', ticker: 'MA', weight: '1.55%', sector: 'Financials' },
                    { name: 'Meta Platforms', ticker: 'META', weight: '1.52%', sector: 'Technology' },
                    { name: 'UnitedHealth Group', ticker: 'UNH', weight: '1.48%', sector: 'Healthcare' },
                    { name: 'ServiceNow', ticker: 'NOW', weight: '1.43%', sector: 'Technology' },
                    { name: 'Accenture', ticker: 'ACN', weight: '1.38%', sector: 'Technology' },
                  ].map((holding, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-3 font-medium">{holding.name}</td>
                      <td className="py-3 text-blue-600">{holding.ticker}</td>
                      <td className="py-3 text-right">{holding.weight}</td>
                      <td className="py-3 text-right text-slate-600 dark:text-slate-400">{holding.sector}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              Note: JEPI also holds ~15-20% in equity-linked notes (ELNs) which are the options component.
              Stock holdings as of Q1 2026.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Performance */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Performance: The Full Picture</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 font-semibold">Metric</th>
                    <th className="text-right py-3 font-semibold">JEPI</th>
                    <th className="text-right py-3 font-semibold">S&P 500</th>
                    <th className="text-right py-3 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: '2023 Total Return', jepi: '9.1%', sp: '26.3%', note: 'S&P 500 rallied hard' },
                    { metric: '2024 Total Return', jepi: '10.8%', sp: '25.0%', note: 'Strong bull market' },
                    { metric: '2025 Total Return', jepi: '8.5%', sp: '11.2%', note: 'Narrower gap' },
                    { metric: '2022 Total Return', jepi: '-3.5%', sp: '-18.1%', note: 'JEPI shined in bear market' },
                    { metric: 'Annual Income (per $100K)', jepi: '$7,500', sp: '$1,300', note: '5.8x more income' },
                    { metric: 'Max Drawdown (since inception)', jepi: '-13.1%', sp: '-25.4%', note: 'Much less volatility' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-3 font-medium">{row.metric}</td>
                      <td className="py-3 text-right font-medium">{row.jepi}</td>
                      <td className="py-3 text-right">{row.sp}</td>
                      <td className="py-3 text-right text-xs text-slate-500">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        <div className="mt-6 p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
          <p className="text-sm text-green-800 dark:text-green-200">
            <strong>Bear Market Performance:</strong> JEPI truly excels during flat or declining markets.
            In 2022, when the S&P 500 lost 18.1%, JEPI lost only 3.5% -- a remarkable 14.6% outperformance.
            The options premium acts as a cushion during downturns.
          </p>
        </div>
      </section>

      <InlineSignup />

      {/* Monthly Income Example */}
      <section className="mb-16 mt-16">
        <h2 className="text-3xl font-bold mb-6">Monthly Income by Portfolio Size</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          One of JEPI&apos;s biggest draws is its monthly distribution schedule. Here is approximately
          how much monthly income different portfolio sizes generate at current yields.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { investment: '$50,000', monthly: '$312', annual: '$3,750' },
            { investment: '$100,000', monthly: '$625', annual: '$7,500' },
            { investment: '$250,000', monthly: '$1,562', annual: '$18,750' },
            { investment: '$500,000', monthly: '$3,125', annual: '$37,500' },
          ].map((tier, i) => (
            <Card key={i} className="text-center">
              <CardContent className="pt-6">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Invest</p>
                <p className="text-xl font-bold mb-3">{tier.investment}</p>
                <div className="border-t pt-3">
                  <p className="text-2xl font-black text-green-600">{tier.monthly}/mo</p>
                  <p className="text-xs text-slate-500">{tier.annual}/year</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-4">
          Based on a 7.5% annualized distribution yield. Actual monthly distributions vary and are not guaranteed.
        </p>
      </section>

      {/* Risks */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Key Risks to Understand</h2>
        <div className="space-y-4">
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-6">
              <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">Capped Upside in Bull Markets</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                In 2023, the S&P 500 returned 26.3% while JEPI returned only 9.1%. The covered call
                strategy meant JEPI missed roughly 17% of upside. Over a long bull market, this
                opportunity cost compounds significantly.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-6">
              <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">Variable Distributions</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                JEPI&apos;s monthly distribution is not fixed. It fluctuates based on options premium received
                and market volatility. In low-volatility environments, the yield can drop to 6% or lower.
                In high-volatility periods, it can spike above 10%.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-6">
              <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">Tax Inefficiency</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                A significant portion of JEPI&apos;s distributions are classified as short-term capital gains
                (from options premium), which are taxed as ordinary income -- not at the lower qualified
                dividend rate. This makes JEPI best suited for tax-advantaged accounts.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="pt-6">
              <h3 className="font-bold text-orange-700 dark:text-orange-400 mb-2">Higher Expense Ratio</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                At 0.35%, JEPI costs nearly 6x more than passive dividend ETFs like SCHD or VYM (0.06%).
                Over 20 years on a $100,000 investment, this expense difference could cost you $6,000+
                in additional fees.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who Should Buy */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Who Should Buy JEPI?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="text-green-700 dark:text-green-400 text-lg flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Good Fit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Retirees who need high current monthly income</span></li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Investors holding in IRAs or 401(k)s (tax-sheltered)</span></li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Conservative investors wanting equity exposure with downside protection</span></li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Income portion of a diversified portfolio (not 100% allocation)</span></li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-red-200 dark:border-red-800">
            <CardHeader>
              <CardTitle className="text-red-700 dark:text-red-400 text-lg flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Poor Fit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2"><span className="text-red-600 mt-0.5 flex-shrink-0">-</span><span>Young investors with 20+ year time horizons (VOO is better)</span></li>
                <li className="flex gap-2"><span className="text-red-600 mt-0.5 flex-shrink-0">-</span><span>Investors seeking maximum total returns</span></li>
                <li className="flex gap-2"><span className="text-red-600 mt-0.5 flex-shrink-0">-</span><span>Taxable account investors (tax-inefficient distributions)</span></li>
                <li className="flex gap-2"><span className="text-red-600 mt-0.5 flex-shrink-0">-</span><span>Anyone planning to make JEPI their only holding</span></li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Is JEPI safe for retirees?',
              a: 'JEPI can be appropriate for retirees as a portion of their portfolio. It provides high monthly income and has lower volatility than the broad market. However, retirees should not put 100% in JEPI because its distributions fluctuate and the options strategy caps long-term growth needed to combat inflation.'
            },
            {
              q: 'Why does JEPI yield so much higher than other ETFs?',
              a: 'JEPI\'s extra yield comes from selling call options (via equity-linked notes). This is not a "free" yield -- you are trading away upside market participation in exchange for immediate income. In strong bull markets, this trade-off is costly. In flat or declining markets, it is very beneficial.'
            },
            {
              q: 'Is JEPI better than SCHD?',
              a: 'They serve different purposes. JEPI offers 2-3x higher current income but sacrifices upside growth. SCHD offers lower current yield (3.45%) but much stronger dividend growth (12%+ annually) and full market participation. For total return over 20+ years, SCHD likely wins. For immediate high income, JEPI wins.'
            },
            {
              q: 'How are JEPI distributions taxed?',
              a: 'JEPI distributions are a mix of qualified dividends, short-term capital gains, and return of capital. The options premium component is typically taxed as short-term capital gains (ordinary income rates). This makes JEPI significantly more tax-efficient when held in IRAs or 401(k)s.'
            },
            {
              q: 'Can I live off JEPI dividends?',
              a: 'At current yields, $500,000 in JEPI generates approximately $37,500 per year ($3,125/month). Whether this covers your expenses depends on your lifestyle and location. Keep in mind that distributions can decrease in low-volatility periods, so plan for income variability.'
            },
          ].map((faq, i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-purple-600 to-blue-600 text-white">
          <CardContent className="pt-8 pb-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Calculate Your JEPI Income Potential</h2>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Model how much monthly income JEPI could generate based on your portfolio size.
              Compare it with traditional dividend strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculators/retirement-income">
                <Button size="lg" variant="secondary">
                  Retirement Income Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/calculators/yield-on-cost">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Yield on Cost Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Related Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'JEPQ vs JEPI: Which JPMorgan Income ETF?', href: '/blog/JEPQ-vs-JEPI-comparison', badge: 'Comparison' },
            { title: 'SCHD ETF Review: Complete Analysis', href: '/blog/SCHD-review-analysis', badge: 'Review' },
            { title: 'Best S&P 500 Dividend ETFs Ranked', href: '/blog/best-sp500-dividend-etfs', badge: 'Rankings' },
            { title: 'Covered Call Dividend Strategy Guide', href: '/blog/covered-call-dividend-strategy', badge: 'Strategy' },
          ].map((article, i) => (
            <Link key={i} href={article.href}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="pt-6">
                  <Badge variant="outline" className="mb-2">{article.badge}</Badge>
                  <h3 className="font-bold text-blue-600 dark:text-blue-400">{article.title}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
