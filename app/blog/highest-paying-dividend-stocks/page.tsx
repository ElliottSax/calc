import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle, ArrowRight, Award, BarChart3, CheckCircle2, Color, DollarSign, LineChart, Percent, Shield, Star, Target, TrendingUp, Zap } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Highest Paying Dividend Stocks: Top 20 Yields (2026)',
  description: 'The 20 highest-paying dividend stocks ranked by yield. Learn which high-yield stocks are safe, which are yield traps, and how to build a high-income portfolio.',
  keywords: ['highest paying dividend stocks', 'highest dividend yield stocks', 'top dividend paying stocks', 'best high yield dividend stocks', 'high dividend stocks 2026', 'stocks with highest dividends'],
}

const highYieldStocks = [
  { symbol: 'AGNC', name: 'AGNC Investment', yield: '14.0%', price: '$10.20', sector: 'Mortgage REIT', payoutRatio: '95%', safety: 'Moderate', safetyColor: 'yellow', description: 'Agency mortgage REIT investing in government-guaranteed MBS. Ultra-high yield but book value and dividends have declined over time. Best for traders and income-seekers who understand the risks.' },
  { symbol: 'NLY', name: 'Annaly Capital', yield: '13.2%', price: '$19.80', sector: 'Mortgage REIT', payoutRatio: '92%', safety: 'Moderate', safetyColor: 'yellow', description: 'The largest mortgage REIT by assets. Similar to AGNC with high leverage and interest rate sensitivity. The dividend has been cut multiple times over the past decade, but current levels appear sustainable.' },
  { symbol: 'MO', name: 'Altria Group', yield: '9.2%', price: '$42.00', sector: 'Tobacco', payoutRatio: '80%', safety: 'High', safetyColor: 'green', description: 'Marlboro cigarette maker with 55 years of consecutive dividend increases. Declining cigarette volumes offset by price increases and NJOY e-cigarette growth. Payout ratio is elevated but free cash flow comfortably covers the dividend.' },
  { symbol: 'BTI', name: 'British American Tobacco', yield: '8.8%', price: '$35.50', sector: 'Tobacco', payoutRatio: '65%', safety: 'High', safetyColor: 'green', description: 'Global tobacco giant with brands including Lucky Strike and Camel. Lower payout ratio than Altria provides more safety margin. International diversification reduces US regulatory risk.' },
  { symbol: 'VALE', name: 'Vale SA', yield: '8.2%', price: '$10.50', sector: 'Mining', payoutRatio: '55%', safety: 'Moderate', safetyColor: 'yellow', description: 'World\'s largest iron ore producer based in Brazil. Variable dividend policy means payouts fluctuate with commodity prices. High yield reflects commodity risk and emerging market discount.' },
  { symbol: 'ET', name: 'Energy Transfer', yield: '8.0%', price: '$15.80', sector: 'Midstream MLP', payoutRatio: '60%', safety: 'High', safetyColor: 'green', description: 'One of the largest midstream pipeline MLPs with 130,000 miles of pipelines. Distribution has been restored and is growing after a 2020 cut. Fee-based revenue provides steady cash flow. Note: K-1 tax form required.' },
  { symbol: 'ENB', name: 'Enbridge', yield: '7.2%', price: '$42.00', sector: 'Pipeline', payoutRatio: '65%', safety: 'High', safetyColor: 'green', description: 'Canadian pipeline giant transporting 25% of North American crude oil. 29 consecutive years of dividend increases. Regulated utility-like cash flows provide exceptional dividend safety for a high-yield stock.' },
  { symbol: 'EPD', name: 'Enterprise Products', yield: '7.0%', price: '$28.50', sector: 'Midstream MLP', payoutRatio: '60%', safety: 'Very High', safetyColor: 'green', description: 'The gold standard of midstream MLPs with 25 consecutive distribution increases. Conservative management maintains 1.7x coverage ratio. The most reliable high-yield investment on this list. Note: K-1 tax form.' },
  { symbol: 'VZ', name: 'Verizon', yield: '6.8%', price: '$38.50', sector: 'Telecom', payoutRatio: '55%', safety: 'High', safetyColor: 'green', description: 'America\'s largest wireless carrier with the best network. 18 consecutive years of dividend increases. Mature business generates massive free cash flow. Limited growth but very safe income.' },
  { symbol: 'T', name: 'AT&T', yield: '6.5%', price: '$17.50', sector: 'Telecom', payoutRatio: '50%', safety: 'High', safetyColor: 'green', description: 'Post-WarnerMedia spinoff, AT&T is a focused telecom company with a sustainable dividend. Free cash flow covers the payout 2x over. Fiber expansion and 5G growth provide modest upside.' },
  { symbol: 'SPG', name: 'Simon Property Group', yield: '6.0%', price: '$140.00', sector: 'Retail REIT', payoutRatio: '85%', safety: 'Moderate', safetyColor: 'yellow', description: 'The largest mall REIT focusing on Class A properties. Premium malls are performing well post-pandemic. High payout ratio is normal for REITs. Risk: retail disruption continues long-term.' },
  { symbol: 'WPC', name: 'W.P. Carey', yield: '5.8%', price: '$58.00', sector: 'Diversified REIT', payoutRatio: '80%', safety: 'High', safetyColor: 'green', description: 'Diversified net-lease REIT with industrial, warehouse, and retail properties. 27 consecutive years of dividend increases. CPI-linked rent escalators provide built-in inflation protection.' },
  { symbol: 'MMM', name: '3M Company', yield: '5.8%', price: '$95.00', sector: 'Industrial', payoutRatio: '95%', safety: 'Low', safetyColor: 'red', description: 'Dividend King with 65 years of increases, but payout ratio above 90% is concerning. Legal liabilities from PFAS chemicals weigh on finances. The streak may be maintained, but the margin of safety is thin.' },
  { symbol: 'O', name: 'Realty Income', yield: '5.5%', price: '$52.00', sector: 'Net Lease REIT', payoutRatio: '75%', safety: 'Very High', safetyColor: 'green', description: 'The Monthly Dividend Company with 29 years of consecutive raises and over 650 monthly payments. Triple-net leases to investment-grade tenants. The highest-quality high-yield stock on this list.' },
  { symbol: 'PM', name: 'Philip Morris Intl', yield: '5.4%', price: '$96.00', sector: 'Tobacco', payoutRatio: '75%', safety: 'High', safetyColor: 'green', description: 'International tobacco company with the fast-growing IQOS heated tobacco system. No US cigarette exposure reduces regulatory risk. IQOS conversion from cigarettes drives volume growth in 100+ markets.' },
  { symbol: 'VICI', name: 'VICI Properties', yield: '5.2%', price: '$30.00', sector: 'Gaming REIT', payoutRatio: '75%', safety: 'High', safetyColor: 'green', description: 'Owns Caesars Palace, MGM properties, and other experiential real estate. Triple-net leases with CPI-linked rent bumps. Gaming revenue has proven resilient through recent downturns.' },
  { symbol: 'D', name: 'Dominion Energy', yield: '4.5%', price: '$47.00', sector: 'Utility', payoutRatio: '80%', safety: 'High', safetyColor: 'green', description: 'Regulated electric and gas utility serving Virginia and the Carolinas. Predictable regulated returns fund steady dividend growth. The yield reflects the 2020 dividend reduction; current level is very well covered.' },
  { symbol: 'IBM', name: 'IBM', yield: '3.8%', price: '$175.00', sector: 'Technology', payoutRatio: '65%', safety: 'High', safetyColor: 'green', description: 'Enterprise technology and AI leader with 28 consecutive years of dividend increases. The Red Hat acquisition and AI consulting drive revenue growth. One of the few tech stocks with a meaningful yield.' },
  { symbol: 'PFE', name: 'Pfizer', yield: '6.8%', price: '$24.50', sector: 'Pharma', payoutRatio: '95%', safety: 'Moderate', safetyColor: 'yellow', description: 'Pharmaceutical giant with a massive drug pipeline beyond COVID vaccines. Current yield is elevated due to post-pandemic stock decline. Payout ratio is stretched but management has committed to maintaining the dividend.' },
  { symbol: 'BMY', name: 'Bristol-Myers Squibb', yield: '5.0%', price: '$51.00', sector: 'Pharma', payoutRatio: '60%', safety: 'High', safetyColor: 'green', description: 'Oncology and cardiovascular drug leader with strong pipeline. The 5% yield is well-covered by free cash flow with a comfortable 60% payout ratio. New drug launches should drive growth through the decade.' },
]

export default function HighestPayingDividendStocks() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12">
        <Badge className="mb-4 bg-green-100 text-green-800">
          <DollarSign className="h-3 w-3 mr-1" />
          High Yield
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Highest Paying Dividend Stocks: Top 20 Yields (2026)
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          These 20 stocks pay the highest dividend yields in the market, ranging from 3.8% to 14%. But high yield
          comes with risk. We analyze which payouts are sustainable and which are yield traps waiting to snap shut.
        </p>
        <div className="flex items-center gap-4 text-sm text-slate-500 flex-wrap">
          <span>Updated: February 2026</span>
          <span>|</span>
          <span>14 min read</span>
          <span>|</span>
          <span className="flex items-center gap-1">
            <AlertTriangle className="h-4 w-4" />
            Includes safety ratings
          </span>
        </div>
      </div>

      {/* Yield Trap Warning */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950 border-2 border-red-200">
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              How to Spot a Yield Trap
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              A "yield trap" is a stock with an unsustainably high yield that is about to be cut. The high yield
              lures investors in, then the dividend cut causes both income loss AND a stock price drop. Here are the
              warning signs:
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span><strong>Payout ratio above 100%</strong> -- the company is paying more than it earns</span>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span><strong>Declining revenue/earnings</strong> -- the business is shrinking</span>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span><strong>Rising debt</strong> -- borrowing to fund the dividend</span>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span><strong>Stock price down 50%+</strong> -- high yield from falling price, not rising payouts</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Safety Rating Legend */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Shield className="h-7 w-7 text-blue-600" />
          Our Safety Rating System
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="border-green-200 bg-green-50 dark:bg-green-950">
            <CardContent className="pt-4 text-center">
              <Badge className="bg-green-600 mb-2">Very High</Badge>
              <p className="text-xs text-slate-600">Dividend extremely safe. 25+ year track record, low payout ratio.</p>
            </CardContent>
          </Card>
          <Card className="border-green-200 bg-green-50 dark:bg-green-950">
            <CardContent className="pt-4 text-center">
              <Badge className="bg-green-600 mb-2">High</Badge>
              <p className="text-xs text-slate-600">Dividend well-covered. Sustainable from free cash flow.</p>
            </CardContent>
          </Card>
          <Card className="border-yellow-200 bg-yellow-50 dark:bg-yellow-950">
            <CardContent className="pt-4 text-center">
              <Badge className="bg-yellow-600 mb-2">Moderate</Badge>
              <p className="text-xs text-slate-600">Some risk factors. Dividend could be cut in a downturn.</p>
            </CardContent>
          </Card>
          <Card className="border-red-200 bg-red-50 dark:bg-red-950">
            <CardContent className="pt-4 text-center">
              <Badge className="bg-red-600 mb-2">Low</Badge>
              <p className="text-xs text-slate-600">Elevated risk. Payout ratio stretched, cut is possible.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Top 20 Stocks */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Star className="h-7 w-7 text-yellow-500" />
          The 20 Highest-Paying Dividend Stocks
        </h2>

        <div className="space-y-6">
          {highYieldStocks.map((stock, idx) => (
            <Card key={stock.symbol} className={`border-l-4 ${stock.safetyColor === 'green' ? 'border-l-green-500' : stock.safetyColor === 'yellow' ? 'border-l-yellow-500' : 'border-l-red-500'}`}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl font-bold">{idx + 1}. {stock.name} ({stock.symbol})</h3>
                    <p className="text-sm text-slate-500">{stock.sector}</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-green-700 text-lg">{stock.yield}</Badge>
                    <Badge className={stock.safetyColor === 'green' ? 'bg-green-600' : stock.safetyColor === 'yellow' ? 'bg-yellow-600' : 'bg-red-600'}>
                      {stock.safety} Safety
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
                  <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded">
                    <p className="text-slate-500 text-xs">Share Price</p>
                    <p className="font-bold">{stock.price}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded">
                    <p className="text-slate-500 text-xs">Dividend Yield</p>
                    <p className="font-bold text-green-600">{stock.yield}</p>
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

      {/* High Yield Portfolio Strategy */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Target className="h-7 w-7 text-purple-600" />
          Building a Safe High-Yield Portfolio
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
          Chasing the absolute highest yields is a recipe for disaster. Instead, blend high-yield stocks with
          different risk profiles. Here is a model portfolio yielding 6%+ with reasonable safety.
        </p>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
          <CardContent className="pt-6">
            <h3 className="font-bold text-lg mb-4">Safe High-Yield Model Portfolio (6.1% Yield)</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <span><strong>Realty Income (O)</strong> - Very High Safety</span>
                <span className="text-green-600 font-bold">5.5%</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <span><strong>Enterprise Products (EPD)</strong> - Very High Safety</span>
                <span className="text-green-600 font-bold">7.0%</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <span><strong>Enbridge (ENB)</strong> - High Safety</span>
                <span className="text-green-600 font-bold">7.2%</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <span><strong>Verizon (VZ)</strong> - High Safety</span>
                <span className="text-green-600 font-bold">6.8%</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <span><strong>Philip Morris (PM)</strong> - High Safety</span>
                <span className="text-green-600 font-bold">5.4%</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <span><strong>VICI Properties (VICI)</strong> - High Safety</span>
                <span className="text-green-600 font-bold">5.2%</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <span><strong>Bristol-Myers Squibb (BMY)</strong> - High Safety</span>
                <span className="text-green-600 font-bold">5.0%</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <span><strong>W.P. Carey (WPC)</strong> - High Safety</span>
                <span className="text-green-600 font-bold">5.8%</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 rounded">
              <p className="font-bold">Blended Yield: 6.0% | $10,000 invested = $600/year income</p>
              <p className="text-sm text-slate-600">All stocks rated High or Very High safety. No yield traps.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* $100K Income Example */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <DollarSign className="h-7 w-7 text-green-600" />
          How Much Do You Need for $1,000/Month?
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="text-left p-3 font-bold">Portfolio Yield</th>
                <th className="text-left p-3 font-bold">Investment Needed</th>
                <th className="text-left p-3 font-bold">Monthly Income</th>
                <th className="text-left p-3 font-bold">Risk Level</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-semibold">3% (Conservative)</td>
                <td className="p-3">$400,000</td>
                <td className="p-3 text-green-600">$1,000</td>
                <td className="p-3">Low</td>
              </tr>
              <tr className="border-b bg-slate-50 dark:bg-slate-900">
                <td className="p-3 font-semibold">5% (Moderate)</td>
                <td className="p-3">$240,000</td>
                <td className="p-3 text-green-600">$1,000</td>
                <td className="p-3">Low-Medium</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">6% (High Yield)</td>
                <td className="p-3">$200,000</td>
                <td className="p-3 text-green-600">$1,000</td>
                <td className="p-3">Medium</td>
              </tr>
              <tr className="border-b bg-slate-50 dark:bg-slate-900">
                <td className="p-3 font-semibold">8% (Aggressive)</td>
                <td className="p-3">$150,000</td>
                <td className="p-3 text-green-600">$1,000</td>
                <td className="p-3">High</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">10%+ (Maximum)</td>
                <td className="p-3">$120,000</td>
                <td className="p-3 text-green-600">$1,000</td>
                <td className="p-3 text-red-600">Very High</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Is a 10%+ dividend yield safe?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Rarely. Yields above 10% almost always carry elevated risk. Mortgage REITs (AGNC, NLY) can sustain
                double-digit yields for periods, but their dividends have declined over time. The only consistently
                safe yields above 7% are pipeline MLPs like Enterprise Products Partners. As a rule of thumb, be
                skeptical of any yield above 8% and deeply investigate anything above 10%.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Why do some stocks have very high yields?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                High yields occur for three reasons: (1) The company pays out a large portion of earnings (tobacco,
                REITs), (2) The stock price has fallen sharply, inflating the yield (potentially a yield trap), or
                (3) The business generates extraordinary cash flow (pipelines, telecoms). Understanding WHY the yield
                is high tells you whether it is sustainable.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Should I avoid tobacco stocks for ethical reasons?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                That is a personal decision. Altria, Philip Morris, and British American Tobacco are among the
                best dividend payers in history, with decades of massive income generation. Many ESG-focused
                investors exclude them. If you do own them, understand that declining cigarette volumes are
                partially offset by price increases and reduced-risk product transitions like IQOS.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">How are REIT and MLP dividends taxed?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                REIT dividends are mostly taxed as ordinary income (up to 37% rate), though you get a 20% QBI
                deduction on the income. MLP distributions are tax-deferred return of capital until you sell, then
                taxed as capital gains. MLPs also issue K-1 forms instead of 1099s, which complicates tax filing.
                Consider holding REITs and MLPs in tax-advantaged accounts like IRAs.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">What is the best high-yield dividend ETF?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                SPYD (S&P 500 High Dividend ETF) yields around 4.5% and holds the 80 highest-yielding S&P 500
                stocks. HDV (iShares High Dividend ETF) yields 4.0% with a quality screen. JEPI (JPMorgan Equity
                Premium Income) yields 7%+ using a covered call strategy. For maximum yield with quality, consider
                building a custom portfolio from the "High Safety" stocks on this list.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-600 to-teal-700 text-white">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your Dividend Income</h3>
            <p className="mb-6 text-green-100">
              Model how much income these high-yield stocks generate over time. See how reinvesting at
              6%+ yields accelerates your wealth building.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/calculators/drip">
                <Button size="lg" variant="secondary" className="gap-2">
                  <TrendingUp className="h-5 w-5" />
                  DRIP Calculator
                </Button>
              </Link>
              <Link href="/calculators/yield-on-cost">
                <Button size="lg" variant="secondary" className="gap-2">
                  <Percent className="h-5 w-5" />
                  Yield on Cost Calculator
                </Button>
              </Link>
              <Link href="/calculators/retirement-income">
                <Button size="lg" variant="secondary" className="gap-2">
                  <DollarSign className="h-5 w-5" />
                  Retirement Income Calculator
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
            <Link href="/blog/safest-dividend-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Safest Dividend Stocks: 15 Ultra-Reliable Picks (2026)
            </Link>
            <Link href="/blog/best-recession-proof-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Best Recession-Proof Dividend Stocks: 12 Safe Havens
            </Link>
            <Link href="/blog/dividend-investing-mistakes-to-avoid" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              15 Dividend Investing Mistakes That Cost You Money
            </Link>
            <Link href="/blog/how-to-build-1000-month-dividend-portfolio" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              How to Build a $1,000/Month Dividend Portfolio
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
