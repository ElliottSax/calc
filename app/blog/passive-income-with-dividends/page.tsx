import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, DollarSign, Target, CheckCircle2, AlertTriangle, ArrowRight, Shield, Calendar, Zap, BarChart3, Star } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'How to Build Passive Income with Dividends: Complete Guide (2026)',
  description: 'Learn how to build $500, $1,000, or $5,000/month in passive dividend income. Step-by-step roadmap with portfolio sizes, stock picks, and realistic timelines.',
  keywords: ['passive income dividends', 'dividend income', 'passive income investing', 'dividend portfolio', 'monthly dividend income', 'live off dividends'],
}

export default function PassiveIncomeWithDividends() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <DollarSign className="h-3 w-3 mr-1" />
          Complete Roadmap
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          How to Build Passive Income with Dividends
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          The complete 2026 guide to replacing your paycheck with dividend income.
          From $500/month to $5,000/month -- here is exactly what it takes.
        </p>
      </div>

      {/* Income Target Overview */}
      <Card className="mb-12 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2 border-green-500">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Target className="h-6 w-6 text-green-600" />
            What Does It Take?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Here is the capital you need at different yield levels to hit common passive income targets:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-3 pr-4 font-bold">Monthly Goal</th>
                  <th className="text-center py-3 px-4 font-bold">At 3% Yield</th>
                  <th className="text-center py-3 px-4 font-bold">At 4% Yield</th>
                  <th className="text-center py-3 px-4 font-bold">At 5% Yield</th>
                  <th className="text-center py-3 pl-4 font-bold">At 6% Yield</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-semibold">$500/month</td>
                  <td className="text-center py-3 px-4">$200,000</td>
                  <td className="text-center py-3 px-4">$150,000</td>
                  <td className="text-center py-3 px-4 text-green-600 font-bold">$120,000</td>
                  <td className="text-center py-3 pl-4">$100,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-semibold">$1,000/month</td>
                  <td className="text-center py-3 px-4">$400,000</td>
                  <td className="text-center py-3 px-4">$300,000</td>
                  <td className="text-center py-3 px-4 text-green-600 font-bold">$240,000</td>
                  <td className="text-center py-3 pl-4">$200,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-semibold">$2,000/month</td>
                  <td className="text-center py-3 px-4">$800,000</td>
                  <td className="text-center py-3 px-4">$600,000</td>
                  <td className="text-center py-3 px-4 text-green-600 font-bold">$480,000</td>
                  <td className="text-center py-3 pl-4">$400,000</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">$5,000/month</td>
                  <td className="text-center py-3 px-4">$2,000,000</td>
                  <td className="text-center py-3 px-4">$1,500,000</td>
                  <td className="text-center py-3 px-4 text-green-600 font-bold">$1,200,000</td>
                  <td className="text-center py-3 pl-4">$1,000,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            Formula: Annual Income Needed / Dividend Yield = Capital Required. A 4-5% blended yield is realistic for a diversified portfolio.
          </p>
        </CardContent>
      </Card>

      {/* Introduction */}
      <div className="prose prose-slate dark:prose-invert max-w-none mb-12">
        <p className="text-lg leading-relaxed">
          Dividend investing is one of the most reliable paths to passive income. Unlike rental properties that
          require management, or businesses that demand your time, a dividend portfolio pays you simply for
          owning shares. You buy, you hold, and you get paid -- every quarter, every month, for as long as
          you own the shares.
        </p>
        <p>
          In this guide, we will walk through exactly how to build a dividend income stream at every level:
          from your first $100/month all the way to replacing a full salary. We will cover which stocks to buy,
          how much to invest, and the realistic timeline to reach each milestone.
        </p>
      </div>

      {/* Step 1: Why Dividends */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Shield className="h-7 w-7 text-blue-600" />
          Why Dividends Are the Best Passive Income
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Truly Passive</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">No tenants, no maintenance, no employees. Buy shares and collect payments automatically.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Growing Income</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Dividend Aristocrats raise payments yearly. A 7% annual increase doubles your income every 10 years.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Tax Advantaged</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Qualified dividends are taxed at 0-20% -- much lower than ordinary income tax rates of 22-37%.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Liquid and Flexible</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Sell shares in seconds if needed. Unlike real estate or CDs, your money is never locked up.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200">
          <CardContent className="pt-6">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong>Real-world example:</strong> An investor who put $100,000 into Johnson & Johnson (JNJ) in 2006
              would have received roughly $3,200 in dividends that first year. By 2026, thanks to 20 consecutive years
              of dividend increases, that same position now pays over $7,800/year -- a 7.8% yield on the original
              investment. That is the power of growing dividends.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Step 2: The $500/month Milestone */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Star className="h-7 w-7 text-yellow-500" />
          Milestone 1: $500/Month ($6,000/Year)
        </h2>

        <Card className="mb-6 border-2 border-yellow-400">
          <CardHeader>
            <CardTitle>The Starter Portfolio</CardTitle>
            <CardDescription>Capital needed: $120,000-$150,000 at a 4-5% blended yield</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">SCHD (Schwab Dividend ETF)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Core foundation | 100+ stocks</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">40%</p>
                  <p className="text-xs text-slate-600">~3.5% yield</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">Realty Income (O)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Monthly REIT | 25+ years increases</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">20%</p>
                  <p className="text-xs text-slate-600">~5.2% yield</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">Johnson & Johnson (JNJ)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Dividend King | Healthcare</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">15%</p>
                  <p className="text-xs text-slate-600">~3.2% yield</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">Verizon (VZ)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Telecom | High current yield</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">15%</p>
                  <p className="text-xs text-slate-600">~6.5% yield</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">Main Street Capital (MAIN)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">BDC | Monthly dividends</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">10%</p>
                  <p className="text-xs text-slate-600">~6.2% yield</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
              <p className="font-bold">Blended yield: ~4.5% | Annual income: ~$6,075 on $135,000</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Monthly income: ~$506</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-50 dark:bg-green-950 border-green-200">
          <CardContent className="pt-6">
            <p className="font-semibold mb-2">Timeline to $500/month if starting from scratch:</p>
            <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Calendar className="h-4 w-4 mt-0.5 text-green-600 flex-shrink-0" />
                <span>Saving $1,000/month with DRIP: approximately 8-9 years</span>
              </li>
              <li className="flex items-start gap-2">
                <Calendar className="h-4 w-4 mt-0.5 text-green-600 flex-shrink-0" />
                <span>Saving $1,500/month with DRIP: approximately 6-7 years</span>
              </li>
              <li className="flex items-start gap-2">
                <Calendar className="h-4 w-4 mt-0.5 text-green-600 flex-shrink-0" />
                <span>Saving $2,000/month with DRIP: approximately 5 years</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Step 3: The $1,000/month Milestone */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <TrendingUp className="h-7 w-7 text-blue-600" />
          Milestone 2: $1,000/Month ($12,000/Year)
        </h2>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          One thousand dollars per month is the milestone where dividends start to feel real. It covers a
          car payment, groceries, or utilities. At a 4.5% blended yield, you need approximately $265,000 invested.
        </p>

        <Card className="mb-6 border-2 border-blue-500">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>The $1K/Month Blueprint</CardTitle>
                <CardDescription>Diversified across 6+ sectors with growth + income</CardDescription>
              </div>
              <Badge className="bg-blue-600">Most Popular Goal</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              At this level, you want to diversify beyond ETFs into individual Dividend Aristocrats and REITs
              to boost your yield while maintaining safety. A portfolio of 12-15 holdings across at least 6
              sectors provides excellent protection against any single company cutting its dividend.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <p className="font-semibold mb-2">Growth Sleeve (50%)</p>
                <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                  <li>SCHD ETF (25%) -- 3.5% yield</li>
                  <li>JNJ, PG, PEP (15%) -- 3.0% yield</li>
                  <li>ABBV, AVGO (10%) -- 3.8% yield</li>
                </ul>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <p className="font-semibold mb-2">Income Sleeve (50%)</p>
                <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                  <li>Realty Income, STAG (20%) -- 5.0% yield</li>
                  <li>VZ, T (15%) -- 6.5% yield</li>
                  <li>MAIN, ARCC (15%) -- 9.0% yield</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <p className="font-bold">Blended yield: ~4.8% | Capital required: ~$250,000</p>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Link href="/calculators/drip" className="flex-1">
            <Button className="w-full" size="lg">
              Calculate Your DRIP Growth <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/calculators/dividend-growth" className="flex-1">
            <Button variant="outline" className="w-full" size="lg">
              Model Dividend Growth <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Email Signup */}
      <div className="my-16">
        <InlineSignup />
      </div>

      {/* Step 4: The $5,000/month Milestone */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Zap className="h-7 w-7 text-purple-600" />
          Milestone 3: $5,000/Month ($60,000/Year)
        </h2>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          At $5,000/month, dividends are replacing a full median US salary. This is the level where many
          investors achieve true financial independence. You need roughly $1 million to $1.5 million depending on
          your yield approach.
        </p>

        <Card className="mb-6 border-2 border-purple-500">
          <CardHeader>
            <CardTitle>The Freedom Portfolio</CardTitle>
            <CardDescription>$1.2M invested at 5% blended yield = $60,000/year</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div className="flex justify-between">
                  <span className="font-semibold">Dividend Growth ETFs (SCHD, VIG, DGRO)</span>
                  <span className="font-bold">30% ($360K)</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">Yield: 3.2% | Income: $11,520/yr | Growing 8-10%/yr</p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div className="flex justify-between">
                  <span className="font-semibold">Dividend Aristocrats (JNJ, PG, KO, PEP, ABBV)</span>
                  <span className="font-bold">25% ($300K)</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">Yield: 3.5% | Income: $10,500/yr | 25+ years increases</p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div className="flex justify-between">
                  <span className="font-semibold">REITs (O, STAG, WPC, EPR)</span>
                  <span className="font-bold">20% ($240K)</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">Yield: 5.5% | Income: $13,200/yr | Monthly payers</p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div className="flex justify-between">
                  <span className="font-semibold">High-Yield (VZ, T, MO, MAIN, ARCC)</span>
                  <span className="font-bold">15% ($180K)</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">Yield: 7.5% | Income: $13,500/yr | Income focus</p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div className="flex justify-between">
                  <span className="font-semibold">International (VYMI, IDV)</span>
                  <span className="font-bold">10% ($120K)</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">Yield: 4.5% | Income: $5,400/yr | Geographic diversification</p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
              <p className="font-bold text-lg">Total Annual Income: $54,120 from $1.2M invested</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Monthly: $4,510. With 7% annual dividend growth, you cross $5,000/month within 2 years.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-amber-50 dark:bg-amber-950 border-amber-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Important: Account for Taxes and Inflation</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  $5,000/month in a taxable account becomes roughly $4,250 after federal taxes on qualified dividends
                  (15% bracket). To truly live off dividends, target $6,000/month pre-tax or use Roth IRA accounts
                  for tax-free income. Also factor in 3% annual inflation -- your dividends need to grow at least
                  3%/year just to maintain purchasing power.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* The 5-Step Roadmap */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="h-7 w-7 text-green-600" />
          Your 5-Step Dividend Income Roadmap
        </h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">1</div>
                <div>
                  <p className="font-bold text-lg">Set Your Income Target</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Pick your first milestone: $200/month, $500/month, or $1,000/month. Work backward using the
                    formula: Annual Income / 0.045 = Capital Needed. Use our{' '}
                    <Link href="/calculators/retirement-income" className="text-blue-600 hover:underline">retirement income calculator</Link>{' '}
                    to model different scenarios.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">2</div>
                <div>
                  <p className="font-bold text-lg">Open the Right Account</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Start with a Roth IRA for tax-free growth (max $7,000/year in 2026). Once maxed, open a taxable
                    brokerage account. Put REITs and BDCs in the Roth (their dividends are taxed as ordinary income).
                    Keep qualified-dividend stocks in the taxable account for favorable 0-20% tax rates.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">3</div>
                <div>
                  <p className="font-bold text-lg">Build Your Core Position</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Start with a dividend ETF like SCHD as your foundation (at least 30% of portfolio). Then add
                    individual Dividend Aristocrats one at a time. Do not chase yield above 6-7% until your portfolio
                    is well diversified across 8+ sectors.
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
                  <p className="font-bold text-lg">Enable DRIP and Automate</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Turn on dividend reinvestment for every holding. Set up automatic monthly transfers from your bank.
                    Even $500/month adds $6,000/year to your portfolio. The compounding effect of reinvested dividends
                    buying more shares that pay more dividends is the engine behind wealth building.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">5</div>
                <div>
                  <p className="font-bold text-lg">Stay the Course for 10+ Years</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    The market will drop 20-30% at some point. Your dividends will keep flowing. Companies like JNJ
                    and PG paid dividends through 2008, 2020, and every crisis in between. Do not sell during downturns.
                    In fact, market drops are the best time to buy more shares at higher yields.
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
              <CardTitle className="text-lg">Is dividend investing really passive?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes, once your portfolio is built. You will spend 1-2 hours per quarter reviewing holdings and
                potentially rebalancing. The dividends deposit automatically into your account. Compare this
                to rental properties (5-10 hours/week of management) or running a business.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Can dividends really replace a salary?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Absolutely. Many retirees and financially independent individuals live entirely off dividend income.
                The key is reaching a portfolio size that generates enough income at a sustainable yield (4-5%).
                At $1.2 million invested, you can generate $60,000/year -- the median US household income.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What if a company cuts its dividend?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                This is why diversification matters. Holding 15-20 stocks across 8+ sectors means a single
                dividend cut reduces your income by only 3-5%. Focus on Dividend Aristocrats with 25+ years
                of consecutive increases -- they have weathered multiple recessions without cutting.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Should I start with ETFs or individual stocks?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Start with ETFs (SCHD, VYM, or DGRO). They give you instant diversification across 100+ stocks
                for the price of one share. Once your portfolio exceeds $25,000-$50,000, begin adding individual
                stocks to boost yield and control your sector allocation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How do dividends compare to rental income?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Dividends offer better liquidity, zero maintenance, and lower barriers to entry. You can start
                with $500. Real estate offers leverage (mortgages) and potential for higher returns, but requires
                significantly more capital and time. Many investors combine both for diversified passive income.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2 border-green-500">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to Start Building Your Dividend Income?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              Use our free calculators to plan your journey to financial independence through dividends.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/calculators/drip">
                <Button className="w-full" size="lg">
                  DRIP Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/calculators/dividend-growth">
                <Button variant="outline" className="w-full" size="lg">
                  Growth Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/calculators/retirement-income">
                <Button variant="outline" className="w-full" size="lg">
                  Retirement Calculator <ArrowRight className="ml-2 h-4 w-4" />
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
                <CardDescription>Realistic plan with specific stock picks</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/blog/fire-movement-dividend-strategy">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">FIRE Movement + Dividend Strategy</CardTitle>
                <CardDescription>Retire early using dividend income</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/blog/dividend-snowball-method-explained">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Snowball Method Explained</CardTitle>
                <CardDescription>Accelerate your income through compounding</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/blog/how-to-invest-with-500-dollars">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Start Investing with Just $500</CardTitle>
                <CardDescription>Beginner-friendly plan for small budgets</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
