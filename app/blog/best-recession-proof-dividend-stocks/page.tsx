import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Shield, DollarSign, TrendingUp, CheckCircle2, AlertTriangle, ArrowRight, Star, Target, BarChart3, Building2, Landmark, Clock } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Best Recession-Proof Dividend Stocks: 12 Safe Havens (2026)',
  description: 'Discover 12 recession-proof dividend stocks that maintained or raised dividends through 2008 and 2020 crashes. These safe havens protect your income when markets fall.',
  keywords: ['recession proof dividend stocks', 'safe dividend stocks', 'recession resistant dividends', 'defensive dividend stocks', 'dividend stocks that survived 2008', 'best dividends during recession'],
}

const recessionStocks = [
  { symbol: 'JNJ', name: 'Johnson & Johnson', yield: '3.0%', sector: 'Healthcare', yearsGrowth: 62, payoutRatio: '48%', recession2008: 'Raised 7.3%', recession2020: 'Raised 6.3%', description: 'The gold standard of recession-proof dividends. JNJ raised its dividend through the Great Depression, the dot-com bust, the 2008 financial crisis, and the 2020 pandemic. Diversified across pharmaceuticals, medical devices, and consumer health products that people buy regardless of economic conditions.' },
  { symbol: 'PG', name: 'Procter & Gamble', yield: '2.4%', sector: 'Consumer Staples', yearsGrowth: 68, payoutRatio: '60%', recession2008: 'Raised 10%', recession2020: 'Raised 6.0%', description: 'People buy Tide, Charmin, Pampers, and Gillette in good times and bad. PG has raised its dividend for 68 consecutive years, making it a Dividend King. Its brands command premium pricing even during recessions, protecting profit margins.' },
  { symbol: 'KO', name: 'Coca-Cola', yield: '3.0%', sector: 'Consumer Staples', yearsGrowth: 62, payoutRatio: '75%', recession2008: 'Raised 8.5%', recession2020: 'Raised 2.5%', description: 'Warren Buffett\'s favorite stock has paid increasing dividends for 62 years. Coca-Cola\'s global distribution network reaches 200+ countries. During 2008, revenue actually grew 5% while competitors struggled. The brand is virtually indestructible.' },
  { symbol: 'WMT', name: 'Walmart', yield: '1.4%', sector: 'Consumer Staples', yearsGrowth: 51, payoutRatio: '35%', recession2008: 'Raised 8.0%', recession2020: 'Raised 1.9%', description: 'Walmart thrives during recessions as consumers trade down from premium retailers. Same-store sales rose 3.5% during the 2008 crisis while competitors saw double-digit declines. The low-price leader gains market share when the economy weakens.' },
  { symbol: 'PEP', name: 'PepsiCo', yield: '2.7%', sector: 'Consumer Staples', yearsGrowth: 51, payoutRatio: '65%', recession2008: 'Raised 13%', recession2020: 'Raised 7.1%', description: 'PepsiCo is more diversified than its name suggests, with Frito-Lay snacks generating over half of profits. During 2008, Frito-Lay grew volume 3% while many food companies declined. The snack business is remarkably recession-resistant.' },
  { symbol: 'MCD', name: 'McDonald\'s', yield: '2.2%', sector: 'Consumer Discretionary', yearsGrowth: 48, payoutRatio: '55%', recession2008: 'Raised 33%', recession2020: 'Raised 3.2%', description: 'McDonald\'s actually benefits from recessions as consumers trade down from sit-down restaurants to fast food. During 2008, same-store sales grew 6.9% globally. The franchise model generates high-margin royalty income that funds reliable dividends.' },
  { symbol: 'CL', name: 'Colgate-Palmolive', yield: '2.3%', sector: 'Consumer Staples', yearsGrowth: 61, payoutRatio: '58%', recession2008: 'Raised 10%', recession2020: 'Raised 2.5%', description: 'Toothpaste, soap, and cleaning supplies are non-negotiable purchases. Colgate holds 40% global market share in oral care. The company has raised dividends for 61 consecutive years through every economic environment imaginable.' },
  { symbol: 'ABT', name: 'Abbott Laboratories', yield: '1.8%', sector: 'Healthcare', yearsGrowth: 52, payoutRatio: '40%', recession2008: 'Raised 9.7%', recession2020: 'Raised 25%', description: 'Medical diagnostics, devices, and nutrition products that hospitals and consumers need regardless of the economy. Abbott\'s FreeStyle Libre diabetes system drives growth. The 52-year dividend increase streak spans every recession since 1972.' },
  { symbol: 'NEE', name: 'NextEra Energy', yield: '2.5%', sector: 'Utilities', yearsGrowth: 29, payoutRatio: '55%', recession2008: 'Raised 7.1%', recession2020: 'Raised 10%', description: 'Regulated utilities are classic recession shelters because people always pay their electric bill. NextEra combines the safety of Florida Power & Light with the growth of its renewable energy arm. Dividend growth has averaged 10% annually for a decade.' },
  { symbol: 'DUK', name: 'Duke Energy', yield: '4.0%', sector: 'Utilities', yearsGrowth: 97, payoutRatio: '70%', recession2008: 'Raised 2.0%', recession2020: 'Raised 2.0%', description: 'Duke Energy has paid dividends for 97 consecutive years, more than nearly any other company in America. Regulated rate increases approved by utility commissions provide a predictable earnings floor even during deep recessions.' },
  { symbol: 'SO', name: 'Southern Company', yield: '3.8%', sector: 'Utilities', yearsGrowth: 22, payoutRatio: '75%', recession2008: 'Raised 3.2%', recession2020: 'Raised 3.2%', description: 'Serving 9 million customers in the southeastern United States, Southern Company operates in a constructive regulatory environment. Its monopoly on electricity distribution in its service territory ensures stable cash flow through any economic cycle.' },
  { symbol: 'XOM', name: 'Exxon Mobil', yield: '3.4%', sector: 'Energy', yearsGrowth: 41, payoutRatio: '35%', recession2008: 'Raised 7.7%', recession2020: 'Maintained', description: 'While energy is cyclical, Exxon\'s fortress balance sheet allows it to maintain dividends through oil price crashes. During the 2020 oil price collapse, Exxon chose to borrow rather than cut its 41-year dividend streak. The stock is now in its strongest financial position in a decade.' },
]

export default function BestRecessionProofDividendStocks() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12">
        <Badge className="mb-4 bg-green-100 text-green-800">
          <Shield className="h-3 w-3 mr-1" />
          Recession Defense
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Best Recession-Proof Dividend Stocks: 12 Safe Havens (2026)
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          These 12 companies didn't just survive the 2008 financial crisis and 2020 pandemic -- they raised
          their dividends through both. When the next recession hits, these stocks will protect your income stream.
        </p>
        <div className="flex items-center gap-4 text-sm text-slate-500 flex-wrap">
          <span>Updated: February 2026</span>
          <span>|</span>
          <span>12 min read</span>
          <span>|</span>
          <span className="flex items-center gap-1">
            <Shield className="h-4 w-4" />
            Research-backed analysis
          </span>
        </div>
      </div>

      {/* Why Recession-Proof Dividends Matter */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Target className="h-7 w-7 text-blue-600" />
          Why Recession-Proof Dividends Matter
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
          During the 2008 financial crisis, 120 S&P 500 companies cut or suspended their dividends. In the 2020 pandemic,
          another 68 companies slashed payouts. Investors who owned the wrong stocks saw their income evaporate right when
          they needed it most.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="border-red-200 bg-red-50 dark:bg-red-950">
            <CardContent className="pt-6 text-center">
              <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <p className="text-3xl font-black text-red-700">120</p>
              <p className="text-sm text-red-600">S&P 500 dividend cuts in 2008-2009</p>
            </CardContent>
          </Card>
          <Card className="border-red-200 bg-red-50 dark:bg-red-950">
            <CardContent className="pt-6 text-center">
              <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <p className="text-3xl font-black text-red-700">-55%</p>
              <p className="text-sm text-red-600">S&P 500 peak-to-trough decline in 2008</p>
            </CardContent>
          </Card>
          <Card className="border-green-200 bg-green-50 dark:bg-green-950">
            <CardContent className="pt-6 text-center">
              <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-3xl font-black text-green-700">12</p>
              <p className="text-sm text-green-600">Stocks below that raised through BOTH</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200">
          <CardContent className="pt-6">
            <h3 className="font-bold text-lg mb-3">What Makes a Stock Recession-Proof?</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Essential products/services</strong> -- things people can't stop buying</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Low payout ratio</strong> -- room to maintain dividends if earnings dip</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Strong balance sheet</strong> -- low debt, high cash reserves</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Proven track record</strong> -- survived multiple recessions without cutting</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* The 12 Stocks */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Star className="h-7 w-7 text-yellow-500" />
          The 12 Best Recession-Proof Dividend Stocks
        </h2>

        <div className="space-y-6">
          {recessionStocks.map((stock, idx) => (
            <Card key={stock.symbol} className="border-l-4 border-l-green-500">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <h3 className="text-xl font-bold">{idx + 1}. {stock.name} ({stock.symbol})</h3>
                  <div className="flex gap-2">
                    <Badge variant="outline">{stock.sector}</Badge>
                    <Badge className="bg-green-600">{stock.yield} Yield</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 text-sm">
                  <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded">
                    <p className="text-slate-500 text-xs">Consecutive Raises</p>
                    <p className="font-bold">{stock.yearsGrowth} years</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded">
                    <p className="text-slate-500 text-xs">Payout Ratio</p>
                    <p className="font-bold">{stock.payoutRatio}</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900 p-2 rounded">
                    <p className="text-green-600 text-xs">2008 Recession</p>
                    <p className="font-bold text-green-700">{stock.recession2008}</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900 p-2 rounded">
                    <p className="text-green-600 text-xs">2020 Pandemic</p>
                    <p className="font-bold text-green-700">{stock.recession2020}</p>
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

      {/* Sector Breakdown */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="h-7 w-7 text-purple-600" />
          Recession-Proof Sectors Ranked
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
          Not all sectors perform equally during recessions. Here is how each major sector held up during
          the last two downturns, ranked from most to least defensive.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="text-left p-3 font-bold">Rank</th>
                <th className="text-left p-3 font-bold">Sector</th>
                <th className="text-left p-3 font-bold">2008 Avg. Return</th>
                <th className="text-left p-3 font-bold">2020 Avg. Return</th>
                <th className="text-left p-3 font-bold">Dividend Cuts</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3">1</td>
                <td className="p-3 font-semibold">Consumer Staples</td>
                <td className="p-3 text-red-600">-15%</td>
                <td className="p-3 text-red-600">-8%</td>
                <td className="p-3 text-green-600">Very Rare</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50 dark:bg-slate-900">
                <td className="p-3">2</td>
                <td className="p-3 font-semibold">Utilities</td>
                <td className="p-3 text-red-600">-29%</td>
                <td className="p-3 text-red-600">-12%</td>
                <td className="p-3 text-green-600">Rare</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3">3</td>
                <td className="p-3 font-semibold">Healthcare</td>
                <td className="p-3 text-red-600">-23%</td>
                <td className="p-3 text-red-600">-5%</td>
                <td className="p-3 text-green-600">Rare</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50 dark:bg-slate-900">
                <td className="p-3">4</td>
                <td className="p-3 font-semibold">Telecom</td>
                <td className="p-3 text-red-600">-34%</td>
                <td className="p-3 text-red-600">-10%</td>
                <td className="p-3 text-yellow-600">Occasional</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3">5</td>
                <td className="p-3 font-semibold">Energy</td>
                <td className="p-3 text-red-600">-35%</td>
                <td className="p-3 text-red-600">-35%</td>
                <td className="p-3 text-yellow-600">Occasional</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50 dark:bg-slate-900">
                <td className="p-3">6</td>
                <td className="p-3 font-semibold">Financials</td>
                <td className="p-3 text-red-600">-55%</td>
                <td className="p-3 text-red-600">-22%</td>
                <td className="p-3 text-red-600">Frequent</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3">7</td>
                <td className="p-3 font-semibold">REITs</td>
                <td className="p-3 text-red-600">-39%</td>
                <td className="p-3 text-red-600">-25%</td>
                <td className="p-3 text-red-600">Frequent</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* How to Build a Recession-Proof Portfolio */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Building2 className="h-7 w-7 text-indigo-600" />
          Building Your Recession-Proof Portfolio
        </h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">Step 1: Allocate 50-60% to Defensive Sectors</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Consumer staples (PG, KO, PEP, CL), healthcare (JNJ, ABT), and utilities (NEE, DUK, SO) should
                form the core of your recession-proof portfolio. These sectors have the fewest dividend cuts historically.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">Step 2: Add 20-30% Cyclical Stocks with Fortress Balance Sheets</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Companies like Exxon Mobil (XOM) and McDonald's (MCD) operate in cyclical industries but have
                enough financial strength to maintain dividends through downturns. Look for low payout ratios below 50%.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">Step 3: Keep 10-20% Cash or Short-Term Bonds</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Dry powder lets you buy quality dividend stocks at recession-discounted prices. The 2020 crash
                offered JNJ at a 3.8% yield and PG at 3.1% -- both well above their normal ranges. Cash is an asset during panics.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Landmark className="h-7 w-7 text-slate-600" />
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Can dividend stocks really protect you during a recession?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes, but only specific ones. During 2008, the S&P 500 fell 55%, but Walmart gained 18% and McDonald's
                gained 6%. Defensive dividend stocks may still drop in price during recessions, but their dividends
                provide a floor of income and they typically recover faster. The key is owning companies that sell essential
                products people can't stop buying.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Should I sell cyclical dividend stocks before a recession?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Timing recessions is nearly impossible, and selling means missing potential dividends and recovery gains.
                Instead, reduce your allocation to cyclical stocks (financials, real estate, industrials) and increase
                positions in defensive sectors. If you must hold cyclicals, choose only those with decades-long dividend
                streaks and low payout ratios.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Are Dividend Aristocrats automatically recession-proof?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Not necessarily. Aristocrat status requires 25+ years of consecutive dividend raises, but some
                companies barely squeaked through past recessions. For example, 3M (MMM) maintained its streak but
                its payout ratio climbed above 90% during stress periods. Check the payout ratio, sector, and
                balance sheet, not just the streak length.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">What about dividend ETFs for recession protection?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Dividend ETFs like SCHD or VIG provide diversification but hold both defensive and cyclical stocks.
                During 2020, SCHD fell 35% peak-to-trough and its dividend dipped slightly. A hand-picked portfolio
                of recession-proof stocks would have performed better. For maximum recession protection, consider
                a focused portfolio of the stocks on this list rather than a broad dividend ETF.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">When is the best time to buy recession-proof dividend stocks?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Ironically, the best time to buy defensive stocks is before the recession, when yields are lower
                and valuations are normal. Once recession fears hit, these stocks become "safe havens" and their
                prices get bid up, reducing yields. The worst time to buy is when everyone else is panicking into
                them. Start building your defensive position today so you're protected before the next downturn.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-600 to-emerald-700 text-white">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Model Your Recession-Proof Portfolio</h3>
            <p className="mb-6 text-green-100">
              Use our free calculators to project how these defensive dividend stocks will grow your income
              over the next 10, 20, or 30 years -- even through recessions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/calculators/drip">
                <Button size="lg" variant="secondary" className="gap-2">
                  <TrendingUp className="h-5 w-5" />
                  DRIP Calculator
                </Button>
              </Link>
              <Link href="/calculators/dividend-growth">
                <Button size="lg" variant="secondary" className="gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Dividend Growth Calculator
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
            <Link href="/blog/dividend-aristocrats-complete-list-2026" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Complete List of Dividend Aristocrats 2026
            </Link>
            <Link href="/blog/how-to-avoid-dividend-cuts" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              How to Avoid Dividend Cuts: Warning Signs to Watch
            </Link>
            <Link href="/blog/best-dividend-stocks-for-beginners" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Best Dividend Stocks for Beginners
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
