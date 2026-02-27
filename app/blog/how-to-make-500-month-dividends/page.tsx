import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, DollarSign, Target, CheckCircle2, AlertTriangle, ArrowRight, Star, Calendar, BarChart3, Shield, Percent, Clock } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'How to Make $500/Month in Dividends (Realistic 2026 Plan)',
  description: 'A realistic, step-by-step plan to earn $500 per month in dividend income. Learn how much to invest, which stocks to buy, and the exact timeline to reach this goal.',
  keywords: ['500 a month in dividends', 'make 500 month dividends', 'dividend income 500', 'passive income 500 month', 'how much to invest for 500 month dividends'],
}

export default function HowToMake500MonthDividends() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <DollarSign className="h-3 w-3 mr-1" />
          Realistic Income Plan
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          How to Make $500/Month in Dividends
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          A step-by-step 2026 plan to build $6,000/year in passive dividend income.
          Realistic numbers, specific stock picks, and a clear savings timeline.
        </p>
      </div>

      {/* Quick Answer */}
      <Card className="mb-12 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2 border-green-500">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Target className="h-6 w-6 text-green-600" />
            The Quick Math
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            To earn $500/month ($6,000/year) in dividends, here is how much you need invested:
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">At 3% Yield</p>
              <p className="text-2xl font-bold text-slate-800 dark:text-slate-200">$200,000</p>
              <p className="text-xs text-slate-500">Very conservative</p>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg text-center border-2 border-green-400">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">At 4% Yield</p>
              <p className="text-2xl font-bold text-green-600">$150,000</p>
              <p className="text-xs text-green-600 font-semibold">Sweet spot</p>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">At 5% Yield</p>
              <p className="text-2xl font-bold text-blue-600">$120,000</p>
              <p className="text-xs text-slate-500">Balanced approach</p>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">At 6% Yield</p>
              <p className="text-2xl font-bold text-orange-600">$100,000</p>
              <p className="text-xs text-slate-500">Higher risk</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
            We recommend targeting a 4-5% blended yield for the best balance of income and safety.
            That means $120,000-$150,000 invested. Here is exactly how to get there.
          </p>
        </CardContent>
      </Card>

      {/* How long will it take? */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Clock className="h-7 w-7 text-blue-600" />
          How Long Will It Take?
        </h2>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          Your timeline depends on how much you can invest each month. Assuming 7% total return
          (dividends + appreciation) and targeting a $130,000 portfolio at 4.6% blended yield:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2">
                <th className="text-left py-3 pr-4 font-bold">Monthly Investment</th>
                <th className="text-center py-3 px-4 font-bold">Time to $130K</th>
                <th className="text-center py-3 px-4 font-bold">Annual Dividends</th>
                <th className="text-center py-3 pl-4 font-bold">Monthly Income</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 pr-4">$500/month</td>
                <td className="text-center py-3 px-4">13 years</td>
                <td className="text-center py-3 px-4">$5,980</td>
                <td className="text-center py-3 pl-4">$498</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4">$750/month</td>
                <td className="text-center py-3 px-4">10 years</td>
                <td className="text-center py-3 px-4">$5,980</td>
                <td className="text-center py-3 pl-4">$498</td>
              </tr>
              <tr className="border-b bg-green-50 dark:bg-green-950">
                <td className="py-3 pr-4 font-semibold">$1,000/month</td>
                <td className="text-center py-3 px-4 font-semibold text-green-600">8 years</td>
                <td className="text-center py-3 px-4 font-semibold">$5,980</td>
                <td className="text-center py-3 pl-4 font-semibold text-green-600">$498</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4">$1,500/month</td>
                <td className="text-center py-3 px-4">6 years</td>
                <td className="text-center py-3 px-4">$5,980</td>
                <td className="text-center py-3 pl-4">$498</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">$2,000/month</td>
                <td className="text-center py-3 px-4">4.5 years</td>
                <td className="text-center py-3 px-4">$5,980</td>
                <td className="text-center py-3 pl-4">$498</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200">
          <CardContent className="pt-6">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong>Key insight:</strong> The timeline accelerates because of compounding. Reinvested
              dividends buy more shares, which pay more dividends, which buy more shares. In years 1-3,
              progress feels slow. In years 5-8, it snowballs. That is why consistency matters more than
              the starting amount.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* The $500/Month Portfolio */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="h-7 w-7 text-purple-600" />
          The $500/Month Dividend Portfolio
        </h2>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          Here is a sample $130,000 portfolio yielding approximately $500/month. It is diversified across
          7 sectors with a blend of ETFs and individual stocks for income and growth.
        </p>

        <Card className="mb-6 border-2 border-green-500">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-xl">Balanced $500/Month Portfolio</CardTitle>
                <CardDescription>$130,000 invested | 4.6% blended yield | Moderate risk</CardDescription>
              </div>
              <Badge className="bg-green-600">Recommended</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">SCHD ETF</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Core | 100+ dividend stocks</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$39,000 (30%)</p>
                  <p className="text-xs text-slate-600">3.5% yield | $1,365/yr</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">Realty Income (O)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Monthly REIT | 100+ quarters</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$19,500 (15%)</p>
                  <p className="text-xs text-slate-600">5.2% yield | $1,014/yr</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">Johnson & Johnson (JNJ)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Dividend King | Healthcare</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$16,250 (12.5%)</p>
                  <p className="text-xs text-slate-600">3.2% yield | $520/yr</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">Verizon (VZ)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Telecom | High current yield</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$16,250 (12.5%)</p>
                  <p className="text-xs text-slate-600">6.5% yield | $1,056/yr</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">Procter & Gamble (PG)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Consumer staples | 67 yr streak</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$13,000 (10%)</p>
                  <p className="text-xs text-slate-600">2.5% yield | $325/yr</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">Main Street Capital (MAIN)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">BDC | Monthly dividends</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$13,000 (10%)</p>
                  <p className="text-xs text-slate-600">6.2% yield | $806/yr</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">AbbVie (ABBV)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Pharma | 52 yr dividend growth</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$13,000 (10%)</p>
                  <p className="text-xs text-slate-600">3.5% yield | $455/yr</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <p className="font-bold text-lg">Total Annual Dividends: $5,541</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Monthly income: ~$462</p>
              <p className="text-xs text-slate-500 mt-1">
                With 6% average dividend growth, you cross $500/month within 14 months without adding any capital.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Shield className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <p className="font-semibold">7 Holdings</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Across 6 sectors</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Calendar className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <p className="font-semibold">Monthly Payers</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">35% pays monthly (O, MAIN)</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <p className="font-semibold">Growing Income</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">6%+ avg annual dividend growth</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Savings Plan */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <DollarSign className="h-7 w-7 text-green-600" />
          The Monthly Savings Plan
        </h2>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          Here is a year-by-year projection investing $1,000/month into dividend stocks
          with DRIP enabled and 4.5% average yield:
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
            <div>
              <p className="font-semibold">Year 1</p>
              <p className="text-xs text-slate-500">Building foundation</p>
            </div>
            <div className="text-right">
              <p className="font-bold">$12,840 portfolio</p>
              <p className="text-xs text-slate-600">$48/month in dividends</p>
            </div>
          </div>
          <div className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
            <div>
              <p className="font-semibold">Year 2</p>
              <p className="text-xs text-slate-500">Momentum building</p>
            </div>
            <div className="text-right">
              <p className="font-bold">$26,970 portfolio</p>
              <p className="text-xs text-slate-600">$101/month in dividends</p>
            </div>
          </div>
          <div className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
            <div>
              <p className="font-semibold">Year 3</p>
              <p className="text-xs text-slate-500">Compounding kicks in</p>
            </div>
            <div className="text-right">
              <p className="font-bold">$42,560 portfolio</p>
              <p className="text-xs text-slate-600">$160/month in dividends</p>
            </div>
          </div>
          <div className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
            <div>
              <p className="font-semibold">Year 5</p>
              <p className="text-xs text-slate-500">Snowball accelerating</p>
            </div>
            <div className="text-right">
              <p className="font-bold">$77,680 portfolio</p>
              <p className="text-xs text-slate-600">$291/month in dividends</p>
            </div>
          </div>
          <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-950 rounded-lg border-2 border-green-400">
            <div>
              <p className="font-semibold text-green-700 dark:text-green-400">Year 8</p>
              <p className="text-xs text-green-600">Goal reached!</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-green-700 dark:text-green-400">$133,400 portfolio</p>
              <p className="text-xs text-green-600 font-semibold">$500/month in dividends</p>
            </div>
          </div>
        </div>

        <Card className="bg-amber-50 dark:bg-amber-950 border-amber-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">A Note on Taxes</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  In a taxable account, you will owe taxes on dividends even during the accumulation phase.
                  Qualified dividends are taxed at 0% if your income is under $47,025 (single) or 15% above
                  that. To maximize growth, build in a Roth IRA first ($7,000/year limit) where all dividends
                  are 100% tax-free.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Email Signup */}
      <div className="my-16">
        <InlineSignup />
      </div>

      {/* Accelerating Your Timeline */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Star className="h-7 w-7 text-yellow-500" />
          5 Ways to Reach $500/Month Faster
        </h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <p className="font-bold">Increase Your Monthly Contributions</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Going from $1,000 to $1,500/month shaves 2 years off your timeline. Cancel subscriptions,
                    reduce dining out, or pick up a side gig. Every extra $100/month matters.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <p className="font-bold">Invest Windfalls Immediately</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Tax refunds, bonuses, gifts, and side hustle income -- invest it all. A $3,000 tax refund
                    invested at 4.5% yield adds $135/year in perpetual income.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <p className="font-bold">Buy During Market Dips</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    When stocks drop 10-20%, yields go up. Realty Income at $50 yields 5.5% vs 5.0% at $55.
                    Keep a cash reserve (5-10% of portfolio) ready for corrections.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <p className="font-bold">Reinvest Every Dividend (DRIP)</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    DRIP turns your dividends into additional shares automatically. Those new shares pay their
                    own dividends. Over 8 years, DRIP alone contributes about 15-20% of your final portfolio value.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div>
                  <p className="font-bold">Focus on Dividend Growth Stocks</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Stocks that raise dividends 8-10% annually will double your income in 7-9 years without
                    adding a single dollar. ABBV has raised its dividend 270% in the last decade.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Is $500/month in dividends realistic?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Absolutely. It requires $120,000-$150,000 invested, which is achievable by consistently
                investing $1,000/month for 8 years. Millions of retirees generate far more than $500/month
                from their dividend portfolios. It is not a get-rich-quick scheme, but it is a proven path
                to passive income.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Can I start with just $100/month?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes. At $100/month, it takes longer (roughly 25+ years), but you are building the habit and
                benefiting from compounding. Most brokers now offer fractional shares, so you can buy $100
                of SCHD even though a single share costs over $80. Start where you are and increase over time.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What if I already have $50,000 saved?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Great head start. $50,000 at 4.5% yield already generates $188/month. Add $1,000/month and
                you reach $500/month in about 4-5 years instead of 8. Use our{' '}
                <Link href="/calculators/drip" className="text-blue-600 hover:underline">DRIP calculator</Link>{' '}
                to model your specific starting amount.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Should I use ETFs or individual stocks?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                A mix of both. Use SCHD or VYM as your foundation (30-40% of portfolio) for instant
                diversification, then add individual stocks for higher yield and targeted sector exposure.
                If you have less than $25,000, stick with ETFs until you have enough to properly diversify
                individual positions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">When should I stop reinvesting and start collecting?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Turn off DRIP only when you actually need the income. If you reach your $500/month target but
                are still working, keep reinvesting. Every year of additional compounding makes your eventual
                income significantly larger. Many investors keep DRIP on until retirement.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2 border-green-500">
          <CardHeader>
            <CardTitle className="text-2xl">Start Building Your $500/Month Portfolio Today</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              Use our free calculators to plan your exact path to $500/month in dividend income.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/calculators/drip">
                <Button className="w-full" size="lg">
                  DRIP Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/calculators/dividend-growth">
                <Button variant="outline" className="w-full" size="lg">
                  Dividend Growth <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/calculators/investment-return">
                <Button variant="outline" className="w-full" size="lg">
                  Investment Return <ArrowRight className="ml-2 h-4 w-4" />
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
          <Link href="/blog/how-to-make-2000-month-dividends">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How to Make $2,000/Month in Dividends</CardTitle>
                <CardDescription>Level up to the next milestone</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/blog/passive-income-with-dividends">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Complete Passive Income Guide</CardTitle>
                <CardDescription>$500 to $5,000/month roadmap</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/blog/how-to-invest-with-500-dollars">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Start Investing with Just $500</CardTitle>
                <CardDescription>Perfect for absolute beginners</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/blog/dividend-snowball-method-explained">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">The Dividend Snowball Method</CardTitle>
                <CardDescription>Accelerate your income growth</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
