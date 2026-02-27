import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, DollarSign, Target, CheckCircle2, AlertTriangle, ArrowRight, Flame, Calendar, Shield, BarChart3, Percent, Clock } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'FIRE Movement: How to Use Dividends to Retire Early (2026)',
  description: 'Complete guide to using dividend investing for FIRE (Financial Independence, Retire Early). Calculate your FI number, build your dividend portfolio, and create a roadmap to early retirement.',
  keywords: ['FIRE dividend investing', 'financial independence retire early', 'dividend FIRE strategy', 'early retirement dividends', 'FI number calculator', 'retire early with dividends'],
}

export default function FireMovementDividendStrategy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Flame className="h-3 w-3 mr-1" />
          FIRE Strategy Guide
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          FIRE Movement: How to Use Dividends to Retire Early
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          The dividend investor&apos;s guide to Financial Independence, Retire Early. Calculate your
          FI number, build a portfolio that pays your bills, and create a realistic timeline to freedom.
        </p>
      </div>

      {/* Quick FI Number Calculator */}
      <Card className="mb-12 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 border-2 border-orange-500">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Target className="h-6 w-6 text-orange-600" />
            Your FI Number (Quick Calculation)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Your Financial Independence number is the portfolio size needed to cover all expenses with
            investment income alone. Here is the formula for dividend-based FIRE:
          </p>
          <div className="p-4 bg-white dark:bg-slate-900 rounded-lg mb-4 text-center">
            <p className="text-lg font-mono font-bold text-orange-600">
              FI Number = Annual Expenses / Dividend Yield
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">$40K/yr expenses</p>
              <p className="text-2xl font-bold text-orange-600">$1,000,000</p>
              <p className="text-xs text-slate-500">at 4% yield</p>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">$60K/yr expenses</p>
              <p className="text-2xl font-bold text-orange-600">$1,500,000</p>
              <p className="text-xs text-slate-500">at 4% yield</p>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">$80K/yr expenses</p>
              <p className="text-2xl font-bold text-orange-600">$2,000,000</p>
              <p className="text-xs text-slate-500">at 4% yield</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
            The traditional 4% rule uses total return (dividends + selling shares). Dividend FIRE is more
            conservative: you live only on dividend income, never touching the principal.
          </p>
        </CardContent>
      </Card>

      {/* Why Dividends for FIRE */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Shield className="h-7 w-7 text-blue-600" />
          Why Dividends Are Perfect for FIRE
        </h2>

        <div className="prose prose-slate dark:prose-invert max-w-none mb-6">
          <p>
            Traditional FIRE relies on the 4% withdrawal rule: sell 4% of your portfolio each year. The
            problem? In a prolonged bear market, you are selling shares at a loss, accelerating portfolio
            depletion. Dividend FIRE solves this by generating income without selling shares.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <Card className="border-2 border-red-200">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                Traditional 4% Rule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">-</span>
                  Must sell shares for income (bad in bear markets)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">-</span>
                  Sequence of returns risk can deplete portfolio
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">-</span>
                  Income is unpredictable, depends on market
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">+</span>
                  Lower initial portfolio needed (growth stocks)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">+</span>
                  More flexibility in stock selection
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                Dividend FIRE
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">+</span>
                  Never sell shares -- income from dividends only
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">+</span>
                  Income is stable even in bear markets
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">+</span>
                  Dividends grow over time (built-in inflation hedge)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">+</span>
                  Psychologically easier (no selling anxiety)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">-</span>
                  Larger initial portfolio required
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200">
          <CardContent className="pt-6">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong>The hybrid approach:</strong> Many FIRE practitioners use a combination. Build a
              dividend portfolio that covers 80-100% of essential expenses (housing, food, insurance),
              and use the 4% rule from a growth portfolio for discretionary spending. This provides
              bulletproof baseline income with upside flexibility.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* FIRE Timeline by Income Level */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Clock className="h-7 w-7 text-green-600" />
          Dividend FIRE Timeline: How Long Will It Take?
        </h2>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          Your timeline to FIRE depends on three variables: income, savings rate, and investment returns.
          Here is what it looks like for a dividend-focused approach with 4.5% yield and 7% total return:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2">
                <th className="text-left py-3 pr-4 font-bold">Annual Income</th>
                <th className="text-center py-3 px-4 font-bold">Savings Rate</th>
                <th className="text-center py-3 px-4 font-bold">Monthly Invested</th>
                <th className="text-center py-3 px-4 font-bold">Years to $1M</th>
                <th className="text-center py-3 pl-4 font-bold">Years to $1.5M</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 pr-4">$60,000</td>
                <td className="text-center py-3 px-4">30%</td>
                <td className="text-center py-3 px-4">$1,500</td>
                <td className="text-center py-3 px-4">22 years</td>
                <td className="text-center py-3 pl-4">26 years</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4">$80,000</td>
                <td className="text-center py-3 px-4">40%</td>
                <td className="text-center py-3 px-4">$2,667</td>
                <td className="text-center py-3 px-4">17 years</td>
                <td className="text-center py-3 pl-4">20 years</td>
              </tr>
              <tr className="border-b bg-green-50 dark:bg-green-950">
                <td className="py-3 pr-4 font-semibold">$100,000</td>
                <td className="text-center py-3 px-4 font-semibold">50%</td>
                <td className="text-center py-3 px-4 font-semibold">$4,167</td>
                <td className="text-center py-3 px-4 font-semibold text-green-600">13 years</td>
                <td className="text-center py-3 pl-4 font-semibold text-green-600">16 years</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4">$120,000</td>
                <td className="text-center py-3 px-4">50%</td>
                <td className="text-center py-3 px-4">$5,000</td>
                <td className="text-center py-3 px-4">11 years</td>
                <td className="text-center py-3 pl-4">14 years</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">$150,000</td>
                <td className="text-center py-3 px-4">60%</td>
                <td className="text-center py-3 px-4">$7,500</td>
                <td className="text-center py-3 px-4">8 years</td>
                <td className="text-center py-3 pl-4">10 years</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-slate-500 mb-4">
          Assumes 7% total annual return (dividends reinvested + appreciation), starting from $0. Actual results vary based on market conditions.
        </p>

        <div className="flex gap-4">
          <Link href="/calculators/compound-interest" className="flex-1">
            <Button className="w-full" size="lg">
              Calculate Your FIRE Timeline <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/calculators/retirement-income" className="flex-1">
            <Button variant="outline" className="w-full" size="lg">
              Retirement Income Planner <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Email Signup */}
      <div className="my-16">
        <InlineSignup />
      </div>

      {/* The Dividend FIRE Portfolio */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="h-7 w-7 text-purple-600" />
          The Dividend FIRE Portfolio (3 Phases)
        </h2>

        <div className="space-y-6">
          <Card className="border-2 border-green-400">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">Phase 1: Accumulation (Years 1-10)</CardTitle>
                  <CardDescription>Focus: Maximum growth + reinvestment</CardDescription>
                </div>
                <Badge className="bg-green-600">Building</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                In the accumulation phase, prioritize total return over current yield. Reinvest every
                dividend. Your goal is growing the portfolio as fast as possible.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <p className="font-semibold text-sm">Dividend Growth ETFs (60%)</p>
                  <p className="text-xs text-slate-500">SCHD, VIG, DGRO -- 2.5-3.5% yield, 8-12% total return</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <p className="font-semibold text-sm">Growth-Oriented Aristocrats (25%)</p>
                  <p className="text-xs text-slate-500">ABBV, HD, AVGO -- 2-4% yield, high dividend growth rate</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <p className="font-semibold text-sm">S&P 500 Index (15%)</p>
                  <p className="text-xs text-slate-500">VOO or SPY -- 1.3% yield, maximum capital appreciation</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-950 rounded">
                <p className="text-sm font-semibold">Strategy: 100% DRIP enabled, maximize monthly contributions, buy dips aggressively</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-400">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">Phase 2: Transition (Years 10-15)</CardTitle>
                  <CardDescription>Focus: Shift toward higher income</CardDescription>
                </div>
                <Badge className="bg-blue-600">Shifting</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                As you approach your FI number, gradually rotate from growth into income. Start converting
                growth positions into higher-yielding dividend payers.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <p className="font-semibold text-sm">Dividend Growth ETFs (40%)</p>
                  <p className="text-xs text-slate-500">SCHD, VYM -- stable core, growing dividends</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <p className="font-semibold text-sm">Dividend Aristocrats (30%)</p>
                  <p className="text-xs text-slate-500">JNJ, PG, KO, PEP, MMM -- reliable income</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <p className="font-semibold text-sm">REITs (20%)</p>
                  <p className="text-xs text-slate-500">O, STAG, WPC -- 4.5-5.5% yield, monthly income</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <p className="font-semibold text-sm">High Yield (10%)</p>
                  <p className="text-xs text-slate-500">VZ, MO, MAIN -- 6-8% yield, income boost</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950 rounded">
                <p className="text-sm font-semibold">Strategy: Begin selectively turning off DRIP, rotate growth into income, test living on dividends</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-400">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">Phase 3: Freedom (Post-FIRE)</CardTitle>
                  <CardDescription>Focus: Sustainable income + growth to beat inflation</CardDescription>
                </div>
                <Badge className="bg-orange-600">Free</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                You have hit your FI number. Now the portfolio should generate reliable, growing income
                that keeps pace with inflation without ever touching principal.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <p className="font-semibold text-sm">Core Income ETFs (35%)</p>
                  <p className="text-xs text-slate-500">SCHD, VYM, HDV -- 3-4% yield, diversified</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <p className="font-semibold text-sm">Dividend Aristocrats (25%)</p>
                  <p className="text-xs text-slate-500">15-20 individual stocks across 8+ sectors</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <p className="font-semibold text-sm">REITs + BDCs (25%)</p>
                  <p className="text-xs text-slate-500">O, STAG, MAIN, ARCC -- 5-7% yield</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <p className="font-semibold text-sm">Growth Buffer (15%)</p>
                  <p className="text-xs text-slate-500">VIG, DGRO -- keeps portfolio growing</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-orange-50 dark:bg-orange-950 rounded">
                <p className="text-sm font-semibold">Blended yield: ~4.5% | Target: dividends cover 100% of expenses + 2% reinvested for growth</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Study */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <TrendingUp className="h-7 w-7 text-green-600" />
          Case Study: FIRE at 45 on $100K Salary
        </h2>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="text-xs text-slate-500">Starting Age</p>
                <p className="text-2xl font-bold">28</p>
              </div>
              <div className="text-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="text-xs text-slate-500">Salary</p>
                <p className="text-2xl font-bold">$100K</p>
              </div>
              <div className="text-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="text-xs text-slate-500">Savings Rate</p>
                <p className="text-2xl font-bold">50%</p>
              </div>
              <div className="text-center p-3 bg-green-50 dark:bg-green-900 rounded">
                <p className="text-xs text-slate-500">FIRE Age</p>
                <p className="text-2xl font-bold text-green-600">45</p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <span>Annual expenses (living on 50%)</span>
                <span className="font-bold">$50,000/year</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <span>FI number at 4.5% yield</span>
                <span className="font-bold">$1,111,000</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <span>Monthly investment</span>
                <span className="font-bold">$4,167</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <span>Assumed total return</span>
                <span className="font-bold">8%/year (with DRIP)</span>
              </div>
              <div className="flex justify-between p-3 bg-green-50 dark:bg-green-950 rounded">
                <span className="font-semibold">Time to FI number</span>
                <span className="font-bold text-green-600">~14 years (age 42)</span>
              </div>
              <div className="flex justify-between p-3 bg-green-50 dark:bg-green-950 rounded">
                <span className="font-semibold">Annual dividend income at FI</span>
                <span className="font-bold text-green-600">$50,000+ ($4,167/month)</span>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
              This person works 3 more years to age 45 as a buffer, bringing their portfolio to roughly
              $1.3M with $58,500/year in dividends. Their dividends grow 6-7% annually, so by age 50,
              income exceeds $78,000/year -- more than they need, with excess reinvested automatically.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Common Mistakes */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <AlertTriangle className="h-7 w-7 text-red-500" />
          5 Dividend FIRE Mistakes to Avoid
        </h2>

        <div className="space-y-4">
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-6">
              <p className="font-bold mb-1">1. Chasing Yield Above 8%</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Ultra-high yields often signal a company in trouble. A 12% yield that gets cut to 6% destroys
                your income and your stock price. Stick to 3-7% yields from proven dividend payers.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-6">
              <p className="font-bold mb-1">2. Not Accounting for Taxes</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                If your FI number is $1M at 4% yield ($40K income), remember you owe taxes on dividends in
                taxable accounts. Plan for 10-15% effective tax drag, or max out Roth accounts for tax-free income.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-6">
              <p className="font-bold mb-1">3. Ignoring Healthcare Costs</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Before 65 (Medicare age), you need private health insurance. Budget $500-$1,500/month for ACA
                marketplace plans. Many FIRE practitioners underestimate this -- it can add $200K+ to your FI number.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-6">
              <p className="font-bold mb-1">4. Concentrating in One Sector</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Loading up on REITs or utilities because they have high yields exposes you to sector-specific
                downturns. Spread across at least 8 sectors: healthcare, consumer staples, utilities, REITs,
                financials, energy, technology, and industrials.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-6">
              <p className="font-bold mb-1">5. Retiring Too Early Without a Buffer</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Hit your FI number and work 1-2 more years. This buffer protects against early bear markets
                and gives your dividends time to grow beyond your current expenses. A 10-20% cushion above
                your FI number provides meaningful peace of mind.
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
            <CardHeader>
              <CardTitle className="text-lg">Is dividend FIRE harder than traditional FIRE?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                It requires a slightly larger portfolio (since you target 4-5% yield rather than 4% withdrawal
                from any portfolio), but it is more sustainable. You never deplete principal, and your income
                grows automatically through dividend increases. Most dividend FIRE practitioners report less
                anxiety about running out of money.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What savings rate do I need for FIRE?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                At 50% savings rate, you can reach FIRE in roughly 15-17 years. At 30%, expect 25+ years.
                The higher your savings rate, the faster you reach FIRE -- and the less income you need in
                retirement (since you are already living on less). Most successful FIRE practitioners target
                40-60% savings rates.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Can I FIRE on a median income ($60K)?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes, but it takes longer and requires frugality. At $60K income with 30% savings rate
                ($1,500/month invested), you can reach a $750K portfolio in about 20 years. That generates
                $33,750/year at 4.5% yield. If your expenses are $36K/year, that is lean FIRE. Many people
                supplement with part-time work (Barista FIRE) to bridge the gap.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Should I pay off my mortgage before FIRE?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                If your mortgage rate is below 4%, mathematically you are better off investing in dividend
                stocks earning 4-5%. However, having no mortgage dramatically reduces your FI number (and
                stress). Many FIRE practitioners aim to pay off their mortgage within 2 years of their FIRE
                date for the psychological benefit and lower monthly expenses.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What about Social Security?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Social Security is a bonus. If you FIRE at 45, you have worked enough quarters to qualify.
                At 62 (earliest) or 67 (full benefit), Social Security adds $1,500-$2,500/month. Many
                dividend FIRE investors treat this as a safety net, not part of their plan. It means your
                dividends can be partially reinvested again after age 62.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 border-2 border-orange-500">
          <CardHeader>
            <CardTitle className="text-2xl">Calculate Your Path to Dividend FIRE</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              Use our free tools to map out your FIRE timeline and build the portfolio that sets you free.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/calculators/compound-interest">
                <Button className="w-full" size="lg">
                  FIRE Timeline Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/calculators/retirement-income">
                <Button variant="outline" className="w-full" size="lg">
                  Retirement Income <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/calculators/yield-on-cost">
                <Button variant="outline" className="w-full" size="lg">
                  Yield on Cost <ArrowRight className="ml-2 h-4 w-4" />
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
          <Link href="/blog/passive-income-with-dividends">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Build Passive Income with Dividends</CardTitle>
                <CardDescription>$500 to $5,000/month roadmap</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/blog/how-to-make-2000-month-dividends">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How to Make $2,000/Month in Dividends</CardTitle>
                <CardDescription>Step-by-step portfolio plan</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/blog/dividend-snowball-method-explained">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Snowball Method</CardTitle>
                <CardDescription>Accelerate your FIRE journey</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/blog/how-to-live-off-dividends">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How to Live Off Dividends</CardTitle>
                <CardDescription>The complete guide to dividend retirement</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
