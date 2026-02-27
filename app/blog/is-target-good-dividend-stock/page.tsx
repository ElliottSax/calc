import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  TrendingUp,
  DollarSign,
  BarChart3,
  Shield,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Target,
  Percent,
  Building2,
  Calendar,
  Zap,
  Award,
  LineChart,
  Clock
} from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata: Metadata = {
  title: 'Is Target (TGT) a Good Dividend Stock? 2026 Analysis',
  description: 'Complete analysis of Target (TGT) as a dividend investment. 53+ years of consecutive increases (Dividend King), ~3.2% yield, retail challenges, competitive position, and dividend safety rating.',
  keywords: [
    'target dividend',
    'TGT dividend stock',
    'target stock analysis 2026',
    'target dividend king',
    'target dividend safety',
    'retail dividend stocks',
    'target dividend history',
    'is target a good investment'
  ],
}

export default function IsTargetGoodDividendStock() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">

      {/* Hero */}
      <div className="mb-12">
        <Badge className="mb-4">
          <Award className="h-3 w-3 mr-1" />
          Dividend King Analysis
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Is Target (TGT) a Good Dividend Stock? 2026 Analysis
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Target is a Dividend King with 53 consecutive years of dividend increases -- one of only
          ~50 companies in the market with this distinction. Despite recent retail headwinds, TGT
          offers a compelling ~3.2% yield. Is it a buy, hold, or avoid?
        </p>
        <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 flex-wrap">
          <span>Updated: February 2026</span>
          <span>-</span>
          <span>12 min read</span>
          <span>-</span>
          <span className="flex items-center gap-1">
            <BarChart3 className="h-4 w-4" />
            Expert Analysis
          </span>
        </div>
      </div>

      {/* Quick Verdict */}
      <Card className="mb-16 bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-slate-950 border-2 border-red-200 dark:border-red-800">
        <CardContent className="pt-6">
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-red-600" />
            Quick Verdict: Should You Buy Target for Dividends?
          </h2>
          <div className="space-y-3 text-sm">
            <p className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Dividend King Status:</strong> 53 consecutive years of increases -- elite reliability through recessions, inflation, and retail disruption.</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Current Yield:</strong> ~3.2% -- above the S&P 500 average, with room for continued growth.</span>
            </p>
            <p className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span><strong>Key Risk:</strong> Retail margin pressure from Amazon competition, inventory challenges, and shifting consumer spending patterns.</span>
            </p>
            <p className="flex items-start gap-2 font-semibold">
              <Award className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span><strong>Our Rating: HOLD/WATCHLIST</strong> -- the Dividend King status is impressive, but retail headwinds and margin compression warrant caution. Buy on pullbacks below $120.</span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="h-7 w-7 text-red-600" />
          Target Dividend Snapshot (2026)
        </h2>

        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 rounded-lg">
                <Percent className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <p className="text-sm text-slate-600 dark:text-slate-400">Current Yield</p>
                <p className="text-3xl font-bold text-red-600">~3.2%</p>
                <p className="text-xs text-slate-500 mt-1">Annual: $4.44/share</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900 rounded-lg">
                <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <p className="text-sm text-slate-600 dark:text-slate-400">Dividend King Status</p>
                <p className="text-3xl font-bold text-yellow-600">53 Yrs</p>
                <p className="text-xs text-slate-500 mt-1">Since 1972</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-lg">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm text-slate-600 dark:text-slate-400">Payout Ratio</p>
                <p className="text-3xl font-bold text-green-600">~50%</p>
                <p className="text-xs text-slate-500 mt-1">Sustainable level</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
              <h3 className="text-lg font-bold mb-3">Key Facts</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Market Cap:</strong> ~$63 billion</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Revenue:</strong> ~$107 billion (2025)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Stores:</strong> ~1,960 across all 50 states</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>5-Yr Dividend CAGR:</strong> ~10%</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Ticker:</strong> TGT (NYSE)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Same-Day Delivery:</strong> Via Shipt and Drive Up</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Dividend King Status */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Award className="h-7 w-7 text-yellow-600" />
          What Makes Target a Dividend King?
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          A Dividend King is a company that has increased its dividend for 50 or more consecutive
          years. Target first raised its dividend in 1972 and has done so every year since. This
          53-year streak encompasses multiple recessions, the rise of e-commerce, and dramatic
          shifts in retail.
        </p>

        <Card className="mb-6 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950 dark:to-amber-950">
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold mb-4">Target&apos;s Dividend Through History</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-semibold">1972-1980</span>
                <span className="text-green-600">Streak begins. Small retailer, small dividends.</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-semibold">1981-2000</span>
                <span className="text-green-600">National expansion. Dividend grows with store count.</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-semibold">2001-2008</span>
                <span className="text-green-600">Dot-com bust and financial crisis. Streak continues.</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-semibold">2013-2014</span>
                <span className="text-yellow-600">Massive data breach. Canada exit. Dividend still raised.</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-semibold">2020-2021</span>
                <span className="text-green-600">COVID boom. Target&apos;s same-day services explode.</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-semibold">2022-2025</span>
                <span className="text-yellow-600">Post-COVID hangover. Inventory & margin challenges.</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Dividend History Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Calendar className="h-7 w-7 text-green-600" />
          Target Dividend History (10-Year)
        </h2>

        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3">Year</th>
                    <th className="text-center p-3">Annual Dividend</th>
                    <th className="text-center p-3">YoY Growth</th>
                    <th className="text-center p-3">Approx. Yield</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { year: '2016', div: '$2.36', growth: '+7.3%', yld: '~3.3%' },
                    { year: '2017', div: '$2.46', growth: '+4.2%', yld: '~3.8%' },
                    { year: '2018', div: '$2.56', growth: '+4.1%', yld: '~3.5%' },
                    { year: '2019', div: '$2.64', growth: '+3.1%', yld: '~2.1%' },
                    { year: '2020', div: '$2.72', growth: '+3.0%', yld: '~1.5%' },
                    { year: '2021', div: '$3.60', growth: '+32.4%', yld: '~1.5%' },
                    { year: '2022', div: '$4.32', growth: '+20.0%', yld: '~2.8%' },
                    { year: '2023', div: '$4.36', growth: '+0.9%', yld: '~3.1%' },
                    { year: '2024', div: '$4.40', growth: '+0.9%', yld: '~3.0%' },
                    { year: '2025', div: '$4.44', growth: '+0.9%', yld: '~3.2%' },
                  ].map((row) => (
                    <tr key={row.year} className="border-b hover:bg-slate-50 dark:hover:bg-slate-900">
                      <td className="p-3 font-medium">{row.year}</td>
                      <td className="p-3 text-center">{row.div}</td>
                      <td className="p-3 text-center text-green-600">{row.growth}</td>
                      <td className="p-3 text-center">{row.yld}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
              <p className="font-semibold text-sm mb-1">The 2021-2022 Surge, Then Slowdown</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Target raised its dividend 32% in 2021 and 20% in 2022 after blockbuster COVID-era
                earnings. But as margins compressed in 2023-2025 from inventory issues and
                discretionary spending weakness, growth slowed to under 1%. The streak continues, but
                barely. This is the risk with cyclical retailers as Dividend Kings.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* InlineSignup */}
      <section className="mb-16">
        <InlineSignup />
      </section>

      {/* Dividend Safety */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Shield className="h-7 w-7 text-green-600" />
          Dividend Safety Analysis
        </h2>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold mb-4">Dividend Safety Scorecard</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Payout Ratio (~50% of earnings)</span>
                </div>
                <Badge className="bg-green-600">Safe</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Free Cash Flow Coverage (1.4x)</span>
                </div>
                <Badge className="bg-green-600">Adequate</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Track Record (53 years)</span>
                </div>
                <Badge className="bg-green-600">Excellent</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <span className="font-medium">Margin Pressure (Competitive retail)</span>
                </div>
                <Badge className="bg-yellow-600">Moderate Risk</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <span className="font-medium">E-Commerce Competition (Amazon)</span>
                </div>
                <Badge className="bg-yellow-600">Moderate Risk</Badge>
              </div>
            </div>

            <div className="mt-4 p-4 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
              <p className="font-bold text-yellow-800 dark:text-yellow-200">Overall: MODERATELY SAFE (7/10)</p>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                The dividend is safe at current levels and management is fiercely committed to
                maintaining the 53-year streak. However, the sub-1% recent growth rate signals that
                earnings may not support meaningful increases until margins recover. The dividend
                will be maintained, but growth investors should temper expectations.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Retail Challenges */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <AlertTriangle className="h-7 w-7 text-orange-600" />
          The Retail Challenges Target Faces
        </h2>

        <div className="space-y-6">
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <Building2 className="h-5 w-5 text-red-600" />
                Amazon and E-Commerce Pressure
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Amazon captures ~40% of U.S. e-commerce sales. Target&apos;s discretionary categories
                (home decor, electronics, apparel) are most vulnerable to online competition.
                Target&apos;s response -- same-day delivery via Shipt, Drive Up, and Order Pickup --
                has been effective but costly. E-commerce fulfillment margins are lower than
                in-store purchases, pressuring overall profitability.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-500">
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-yellow-600" />
                Discretionary Spending Weakness
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Unlike Walmart (which is 55%+ grocery), Target derives roughly 50% of sales from
                discretionary categories. When consumers feel squeezed by inflation, they cut back on
                clothing, home goods, and toys before cutting groceries. This makes Target more
                cyclical than Walmart and explains the margin compression in 2022-2025.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-600" />
                Why Target Can Overcome These Challenges
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Target&apos;s owned brands (Good & Gather, Threshold, Cat & Jack) generate ~30% of
                sales at higher margins than national brands. The store-as-hub fulfillment model
                is a competitive advantage -- 97% of orders are fulfilled from stores, reducing
                shipping costs. Target&apos;s &quot;cheap chic&quot; positioning attracts a higher-income
                demographic ($80K+ household income) that is more resilient during downturns.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <LineChart className="h-7 w-7 text-indigo-600" />
          Pros and Cons
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-2 border-green-300 dark:border-green-700">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" />
                Reasons to Buy
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Dividend King</strong> -- 53 consecutive years, elite commitment to shareholder returns</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Attractive yield</strong> (~3.2%) at a reasonable valuation (~16x P/E)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Strong owned brands</strong> (Good & Gather, Threshold) drive higher margins</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Same-day services</strong> (Drive Up, Shipt) create competitive moat vs pure e-commerce</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Margin recovery potential</strong> -- if discretionary spending rebounds, earnings could surge</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-red-300 dark:border-red-700">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6" />
                Risks to Consider
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Sub-1% dividend growth</strong> in 2023-2025 -- streak alive but barely growing</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Margin compression</strong> -- operating margin fell from ~9% (2021) to ~5% (2023)</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Amazon competition</strong> intensifying in Target&apos;s core discretionary categories</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Shrinkage and theft</strong> costing $500M+ annually in lost inventory</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Consumer trade-down</strong> -- shoppers shifting to Walmart and dollar stores</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Will Target break its 53-year dividend streak?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Highly unlikely. Management is deeply committed to maintaining the Dividend King
                status. Even during the 2023-2025 margin compression, Target continued raising
                the dividend (albeit by pennies). The company generates $4-5B in annual free cash
                flow against ~$2B in dividend payments. Breaking a 53-year streak would be a
                reputational disaster and would likely only happen in an extreme scenario like
                bankruptcy risk -- which is not remotely on the table.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Is Target better than Walmart for dividends?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                It depends on what you prioritize. Target has a higher yield (~3.2% vs Walmart&apos;s
                ~1.3%) and longer streak (53 vs 51 years). However, Walmart is a more defensive
                business with stronger grocery exposure and better competitive positioning against
                Amazon. Walmart also has a much larger scale ($640B revenue vs $107B). For pure
                income, Target wins. For overall quality and safety, Walmart is arguably better.
                Many dividend investors own both.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">When will Target&apos;s dividend growth accelerate again?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Dividend growth should accelerate when operating margins recover to the 5-6%+ range
                (from current ~5%). This depends on discretionary spending recovery, inventory
                management improvement, and shrinkage reduction. Most analysts expect meaningful
                improvement in 2026-2027 as consumer spending normalizes. When margins recover,
                Target could return to 5-10% annual dividend growth. Until then, expect token
                penny-per-share increases to maintain the streak.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Is Target stock undervalued at ~16x earnings?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Potentially. Target&apos;s 5-year average P/E is about 18-20x. At 16x, the stock
                is trading at a discount to its historical average, reflecting the margin challenges
                and investor skepticism about the recovery timeline. If margins normalize to 6%+,
                earnings could grow 20-30%, which combined with multiple expansion could deliver
                significant total returns. Value-oriented dividend investors may see this as an
                opportunity to buy a Dividend King at a discount.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">How does Target&apos;s owned brand strategy help the dividend?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Target&apos;s owned brands (Good & Gather, Threshold, Cat & Jack, All in Motion, etc.)
                generate roughly 30% of total sales at meaningfully higher margins than national brands.
                Good & Gather alone is a $4B+ brand. These exclusive brands cannot be price-compared
                on Amazon, giving Target pricing power and customer loyalty. As the owned brand
                portfolio grows, it supports higher margins, which in turn funds dividend growth.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-red-600 to-red-800 text-white">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your Target Dividend Returns</h3>
            <p className="mb-6 text-red-100">
              Model Target&apos;s dividend growth scenarios -- from conservative 2% growth to optimistic
              10% recovery growth. See how DRIP reinvestment affects your long-term income.
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
              <Link href="/calculators/investment-return">
                <Button size="lg" variant="secondary" className="gap-2">
                  <DollarSign className="h-5 w-5" />
                  Investment Return Calculator
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
            <Link href="/blog/dividend-kings-list-2026" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Complete Dividend Kings List (2026)
            </Link>
            <Link href="/blog/best-consumer-staples-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Best Consumer Staples Dividend Stocks
            </Link>
            <Link href="/blog/how-to-avoid-dividend-cuts" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              How to Avoid Dividend Cuts (Warning Signs)
            </Link>
            <Link href="/blog/best-dividend-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              50 Best Dividend Stocks to Buy in 2026
            </Link>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}
