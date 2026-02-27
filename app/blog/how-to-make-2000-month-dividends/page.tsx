import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, DollarSign, Target, CheckCircle2, AlertTriangle, ArrowRight, Star, Calendar, BarChart3, Shield, Percent, LineChart, Award, PieChart } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'How to Make $2,000/Month in Dividends (Step-by-Step 2026)',
  description: 'Step-by-step guide to building a portfolio that generates $2,000/month in dividend income. Portfolio sizes at different yields, stock picks, and realistic timelines.',
  keywords: ['2000 a month in dividends', 'make 2000 month dividends', 'dividend income 2000', '24000 year dividends', 'how much to invest for 2000 month dividends'],
}

export default function HowToMake2000MonthDividends() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Award className="h-3 w-3 mr-1" />
          Advanced Income Strategy
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          How to Make $2,000/Month in Dividends
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          A detailed 2026 plan to build $24,000/year in passive dividend income.
          Portfolio allocations, timelines, and strategies for this major milestone.
        </p>
      </div>

      {/* Quick Answer */}
      <Card className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2 border-blue-500">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Target className="h-6 w-6 text-blue-600" />
            Capital Required
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            $2,000/month = $24,000/year. Here is what you need at different yield levels:
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">At 3% Yield</p>
              <p className="text-2xl font-bold text-slate-800 dark:text-slate-200">$800,000</p>
              <p className="text-xs text-slate-500">Blue-chip growth</p>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">At 4% Yield</p>
              <p className="text-2xl font-bold text-blue-600">$600,000</p>
              <p className="text-xs text-slate-500">Conservative</p>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg text-center border-2 border-green-400">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">At 5% Yield</p>
              <p className="text-2xl font-bold text-green-600">$480,000</p>
              <p className="text-xs text-green-600 font-semibold">Recommended</p>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">At 6% Yield</p>
              <p className="text-2xl font-bold text-orange-600">$400,000</p>
              <p className="text-xs text-slate-500">Higher risk</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
            $2,000/month is a significant milestone -- it covers a mortgage payment, a car payment plus insurance,
            or a couple&apos;s monthly food budget. At this level, dividends become a real lifestyle enhancer.
          </p>
        </CardContent>
      </Card>

      {/* Why $2K/month matters */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Star className="h-7 w-7 text-yellow-500" />
          Why $2,000/Month Changes Everything
        </h2>

        <div className="prose prose-slate dark:prose-invert max-w-none mb-6">
          <p>
            $2,000 per month in dividends is a psychological turning point. It covers one major expense
            completely -- your mortgage, your healthcare, or your retirement travel budget. Many investors
            who reach this level say it is the moment financial stress starts to disappear.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="text-center">
            <CardContent className="pt-6">
              <DollarSign className="h-10 w-10 mx-auto mb-3 text-green-600" />
              <p className="font-bold text-lg">$24,000/Year</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Equivalent to a part-time job</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="h-10 w-10 mx-auto mb-3 text-blue-600" />
              <p className="font-bold text-lg">Growing 6-8%/yr</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">$2,000 becomes $4,000 in 10 years</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Shield className="h-10 w-10 mx-auto mb-3 text-purple-600" />
              <p className="font-bold text-lg">Recession Proof</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Aristocrats paid through 2008 and 2020</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Three Portfolio Strategies */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <PieChart className="h-7 w-7 text-purple-600" />
          3 Portfolio Strategies for $2,000/Month
        </h2>

        <div className="space-y-6">
          {/* Strategy 1: Conservative */}
          <Card className="border-2 border-green-400">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">Strategy 1: Conservative (3.8% yield)</CardTitle>
                  <CardDescription>Capital: $630,000 | Risk: Low | Best for retirees</CardDescription>
                </div>
                <Badge className="bg-green-600">Safest</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <span className="font-semibold">SCHD + VYM ETFs (40%)</span>
                  <span className="text-sm">$252K | 3.3% yield | $8,316/yr</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <span className="font-semibold">Dividend Kings -- JNJ, PG, KO, CL (25%)</span>
                  <span className="text-sm">$157.5K | 3.0% yield | $4,725/yr</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <span className="font-semibold">REITs -- O, NNN, WPC (20%)</span>
                  <span className="text-sm">$126K | 5.2% yield | $6,552/yr</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <span className="font-semibold">Utilities -- NEE, SO, DUK (15%)</span>
                  <span className="text-sm">$94.5K | 4.0% yield | $3,780/yr</span>
                </div>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                <p className="font-bold">Total: $23,373/yr ($1,948/mo) -- with 5% div growth, hits $2K in 6 months</p>
              </div>
            </CardContent>
          </Card>

          {/* Strategy 2: Balanced */}
          <Card className="border-2 border-blue-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">Strategy 2: Balanced (5.0% yield)</CardTitle>
                  <CardDescription>Capital: $480,000 | Risk: Moderate | Best for most investors</CardDescription>
                </div>
                <Badge className="bg-blue-600">Recommended</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <span className="font-semibold">SCHD ETF Core (25%)</span>
                  <span className="text-sm">$120K | 3.5% yield | $4,200/yr</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <span className="font-semibold">Aristocrats -- ABBV, PEP, HD (20%)</span>
                  <span className="text-sm">$96K | 3.5% yield | $3,360/yr</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <span className="font-semibold">REITs -- O, STAG, EPR, WPC (20%)</span>
                  <span className="text-sm">$96K | 5.5% yield | $5,280/yr</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <span className="font-semibold">High Yield -- VZ, MO, T (15%)</span>
                  <span className="text-sm">$72K | 7.0% yield | $5,040/yr</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <span className="font-semibold">BDCs -- MAIN, ARCC (10%)</span>
                  <span className="text-sm">$48K | 8.5% yield | $4,080/yr</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <span className="font-semibold">International -- VYMI (10%)</span>
                  <span className="text-sm">$48K | 4.5% yield | $2,160/yr</span>
                </div>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                <p className="font-bold">Total: $24,120/yr ($2,010/mo) -- diversified across 20+ holdings, 8 sectors</p>
              </div>
            </CardContent>
          </Card>

          {/* Strategy 3: Aggressive */}
          <Card className="border-2 border-orange-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">Strategy 3: Aggressive (6.5% yield)</CardTitle>
                  <CardDescription>Capital: $370,000 | Risk: Higher | Best for income maximizers</CardDescription>
                </div>
                <Badge variant="destructive">Higher Risk</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <span className="font-semibold">REITs -- O, STAG, EPR, LTC, MPW (30%)</span>
                  <span className="text-sm">$111K | 6.0% yield | $6,660/yr</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <span className="font-semibold">BDCs -- MAIN, ARCC, HTGC (20%)</span>
                  <span className="text-sm">$74K | 8.5% yield | $6,290/yr</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <span className="font-semibold">High-Yield Stocks -- MO, VZ, T (20%)</span>
                  <span className="text-sm">$74K | 7.5% yield | $5,550/yr</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <span className="font-semibold">SCHD + Aristocrats (20%)</span>
                  <span className="text-sm">$74K | 3.5% yield | $2,590/yr</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <span className="font-semibold">Covered Call ETFs -- JEPI, JEPQ (10%)</span>
                  <span className="text-sm">$37K | 8.0% yield | $2,960/yr</span>
                </div>
              </div>
              <div className="p-3 bg-orange-50 dark:bg-orange-950 rounded">
                <p className="font-bold">Total: $24,050/yr ($2,004/mo) -- less capital needed but higher volatility</p>
              </div>

              <Card className="mt-4 bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800">
                <CardContent className="pt-4">
                  <p className="text-sm font-semibold flex items-center gap-2 text-red-700 dark:text-red-400 mb-2">
                    <AlertTriangle className="h-4 w-4" />
                    Risk Warning
                  </p>
                  <p className="text-xs text-slate-700 dark:text-slate-300">
                    High-yield strategies carry dividend cut risk. mREITs, BDCs, and covered call ETFs can reduce
                    payouts significantly during recessions. This strategy is best for investors who can tolerate
                    a temporary 20-30% income reduction during downturns.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Calendar className="h-7 w-7 text-green-600" />
          Realistic Timeline to $2,000/Month
        </h2>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          Building to $480,000 (balanced approach) with consistent monthly investing at 7% total return:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2">
                <th className="text-left py-3 pr-4 font-bold">Starting With</th>
                <th className="text-center py-3 px-4 font-bold">+ $2K/mo</th>
                <th className="text-center py-3 px-4 font-bold">+ $3K/mo</th>
                <th className="text-center py-3 px-4 font-bold">+ $4K/mo</th>
                <th className="text-center py-3 pl-4 font-bold">+ $5K/mo</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">$0</td>
                <td className="text-center py-3 px-4">14 years</td>
                <td className="text-center py-3 px-4">11 years</td>
                <td className="text-center py-3 px-4">9 years</td>
                <td className="text-center py-3 pl-4">7.5 years</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">$50,000</td>
                <td className="text-center py-3 px-4">12 years</td>
                <td className="text-center py-3 px-4">9.5 years</td>
                <td className="text-center py-3 px-4">8 years</td>
                <td className="text-center py-3 pl-4">6.5 years</td>
              </tr>
              <tr className="border-b bg-green-50 dark:bg-green-950">
                <td className="py-3 pr-4 font-semibold">$100,000</td>
                <td className="text-center py-3 px-4">10 years</td>
                <td className="text-center py-3 px-4 font-bold text-green-600">8 years</td>
                <td className="text-center py-3 px-4">6.5 years</td>
                <td className="text-center py-3 pl-4">5.5 years</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">$200,000</td>
                <td className="text-center py-3 px-4">7 years</td>
                <td className="text-center py-3 px-4">5.5 years</td>
                <td className="text-center py-3 px-4">4.5 years</td>
                <td className="text-center py-3 pl-4">3.5 years</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold">$300,000</td>
                <td className="text-center py-3 px-4">4 years</td>
                <td className="text-center py-3 px-4">3 years</td>
                <td className="text-center py-3 px-4">2.5 years</td>
                <td className="text-center py-3 pl-4">2 years</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex gap-4">
          <Link href="/calculators/compound-interest" className="flex-1">
            <Button className="w-full" size="lg">
              Calculate Your Timeline <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/calculators/drip" className="flex-1">
            <Button variant="outline" className="w-full" size="lg">
              DRIP Calculator <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Email Signup */}
      <div className="my-16">
        <InlineSignup />
      </div>

      {/* The $2K/Month Roadmap */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <LineChart className="h-7 w-7 text-blue-600" />
          The Step-by-Step Roadmap
        </h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">1</div>
                <div>
                  <p className="font-bold text-lg">Phase 1: Foundation ($0 to $100K)</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Start with 2-3 dividend ETFs (SCHD, VYM, DGRO). Invest $1,500-3,000/month. Enable DRIP
                    on everything. Do not worry about individual stocks yet -- focus on building your base.
                    At $100K with 4.5% yield, you are earning roughly $375/month in dividends.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">2</div>
                <div>
                  <p className="font-bold text-lg">Phase 2: Diversification ($100K to $250K)</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Begin adding individual Dividend Aristocrats (JNJ, PG, KO, ABBV, PEP). Add REITs for
                    higher yield and monthly income (O, STAG, WPC). Target 12-15 holdings across 6+ sectors.
                    At $250K you are earning roughly $1,040/month -- halfway there.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">3</div>
                <div>
                  <p className="font-bold text-lg">Phase 3: Income Optimization ($250K to $400K)</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Add higher-yield positions: BDCs (MAIN, ARCC), telecom (VZ, T), and international
                    dividend ETFs (VYMI). Begin optimizing your tax strategy -- maximize Roth IRA contributions
                    and place high-yield holdings in tax-advantaged accounts.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">4</div>
                <div>
                  <p className="font-bold text-lg">Phase 4: The Home Stretch ($400K to $480K+)</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Fine-tune your portfolio for maximum income without excessive risk. Rebalance positions
                    that have grown too large. Consider adding covered call ETFs (JEPI) for enhanced income.
                    At $480K with 5% yield, you have reached $2,000/month.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tax Strategy */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Percent className="h-7 w-7 text-red-500" />
          Tax Strategy for $2,000/Month
        </h2>

        <Card>
          <CardContent className="pt-6">
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              At $24,000/year in dividends, tax efficiency becomes critical. Here is the optimal setup:
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="font-bold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Roth IRA (Tax-Free)
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Hold REITs (O, STAG) and BDCs (MAIN, ARCC) here. Their dividends are taxed as ordinary
                  income in taxable accounts but are 100% tax-free in a Roth. Maximum: $7,000/year contributions.
                </p>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="font-bold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  Traditional IRA / 401(k) (Tax-Deferred)
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Hold high-yield stocks (VZ, MO, T) here. Dividends compound without current tax drag.
                  You pay taxes only when you withdraw in retirement (hopefully at a lower bracket).
                </p>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                <p className="font-bold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600" />
                  Taxable Brokerage (Tax-Efficient)
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Hold qualified-dividend stocks (JNJ, PG, KO, SCHD) here. Qualified dividends are taxed at
                  0% for incomes under $47,025 (single) or 15% above that -- far below ordinary income rates.
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
              <strong>Estimated tax savings:</strong> Proper account placement can save $1,500-$3,000/year
              in taxes on $24,000 of dividend income compared to holding everything in a taxable account.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Is $2,000/month in dividends enough to retire on?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                It depends on your lifestyle and location. In low-cost areas, $2,000/month covers basic
                expenses. Most financial planners suggest $4,000-$5,000/month for a comfortable retirement.
                However, $2,000/month combined with Social Security ($1,500-$2,500) puts many retirees in a
                solid position. Plus, your dividends continue to grow.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How do I get from $500/month to $2,000/month?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Once you hit $500/month, you have roughly $130K invested. Adding $2,000/month and reinvesting
                dividends, you can reach $480K (and $2,000/month) in about 7-8 more years. The journey from
                $500 to $2,000 is actually faster than $0 to $500 because compounding has kicked in and your
                reinvested dividends contribute meaningfully.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Should I use covered call ETFs like JEPI?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Covered call ETFs (JEPI, JEPQ, XYLD) can boost current income to 7-10%, but they sacrifice
                upside growth. Limit them to 10-15% of your portfolio. They work best in sideways or slightly
                down markets. In strong bull markets, you underperform. Use them as income enhancers, not core
                holdings.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Can a couple reach $2,000/month together?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Absolutely -- and faster. Two incomes mean higher savings rates. If both partners contribute
                to Roth IRAs ($14,000/year combined) and invest $3,000/month in a joint taxable account,
                you can build a $480K+ portfolio in 8-10 years from scratch. Each person reaching $1,000/month
                is very achievable.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What if I do not want individual stocks?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                An all-ETF portfolio works fine. SCHD (3.5%), VYM (2.8%), VYMI (4.5%), VNQ (3.8%), and
                JEPI (7.5%) can give you a 4%+ blended yield with zero individual stock research. You will
                need slightly more capital (~$550K) since ETF yields are lower than optimized individual
                stock portfolios, but the simplicity is worth it for many investors.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2 border-blue-500">
          <CardHeader>
            <CardTitle className="text-2xl">Map Your Path to $2,000/Month</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              Use our calculators to model exactly when you will reach $2,000/month based on your starting
              capital, monthly contributions, and target yield.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/calculators/drip">
                <Button className="w-full" size="lg">
                  DRIP Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/calculators/yield-on-cost">
                <Button variant="outline" className="w-full" size="lg">
                  Yield on Cost <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/calculators/retirement-income">
                <Button variant="outline" className="w-full" size="lg">
                  Retirement Planner <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Related Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/how-to-make-500-month-dividends">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How to Make $500/Month in Dividends</CardTitle>
                <CardDescription>Start with the first milestone</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/blog/how-to-build-1000-month-dividend-portfolio">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Build a $1,000/Month Portfolio</CardTitle>
                <CardDescription>The middle milestone breakdown</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/blog/fire-movement-dividend-strategy">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">FIRE Movement + Dividends</CardTitle>
                <CardDescription>Use $2K/month to retire early</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/blog/dividend-tax-guide-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Tax Guide 2026</CardTitle>
                <CardDescription>Keep more of your $24K/year income</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
