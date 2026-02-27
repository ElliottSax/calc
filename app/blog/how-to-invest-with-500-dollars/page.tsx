import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, DollarSign, Target, CheckCircle2, AlertTriangle, ArrowRight, Star, Calendar, BarChart3, Shield, Zap, Building2, Landmark, PieChart } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'How to Start Dividend Investing with $500 (2026 Beginner Plan)',
  description: 'Start dividend investing with just $500. Learn about fractional shares, the best ETFs for beginners, how to allocate your first investment, and a monthly DCA plan to grow.',
  keywords: ['invest 500 dollars', 'start dividend investing 500', 'invest with 500 dollars', 'beginner dividend investing', 'fractional shares dividends', 'small budget investing'],
}

export default function HowToInvestWith500Dollars() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Star className="h-3 w-3 mr-1" />
          Beginner Friendly
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          How to Start Dividend Investing with $500
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          You do not need thousands to start. Here is the exact 2026 plan to turn $500 into
          a growing dividend income stream using fractional shares, ETFs, and monthly DCA.
        </p>
      </div>

      {/* Quick Answer */}
      <Card className="mb-12 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-500">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
            Yes, $500 Is Enough to Start
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-lg text-slate-700 dark:text-slate-300">
              With $500 and fractional shares, you can build a diversified portfolio of 3-5 dividend investments
              today. Here is what $500 invested at 4% yield generates:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg text-center">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Year 1</p>
                <p className="text-2xl font-bold text-green-600">$20</p>
                <p className="text-xs text-slate-500">Your first dividends</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg text-center">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Year 1 + $100/mo DCA</p>
                <p className="text-2xl font-bold text-blue-600">$74</p>
                <p className="text-xs text-slate-500">Now we are cooking</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg text-center">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Year 5 + $100/mo DCA</p>
                <p className="text-2xl font-bold text-purple-600">$340</p>
                <p className="text-xs text-slate-500">Snowball growing</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Small start, big results. $500 + $100/month for 20 years at 8% total return = $63,000+ portfolio
              generating $2,500+/year in dividends.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Why $500 is enough */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Zap className="h-7 w-7 text-yellow-500" />
          Why $500 Is Plenty to Start (Thanks to Fractional Shares)
        </h2>

        <div className="prose prose-slate dark:prose-invert max-w-none mb-6">
          <p>
            Ten years ago, you needed hundreds or thousands of dollars just to buy a single share of quality
            dividend stocks. Today, fractional shares have changed everything. You can buy $10 worth of
            any stock, regardless of its share price.
          </p>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <p className="font-semibold mb-4">What $500 buys you with fractional shares:</p>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">SCHD ETF</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">~$84/share | 3.5% yield</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$200 invested</p>
                  <p className="text-xs text-slate-600">~2.4 shares | $7.00/yr dividends</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">Realty Income (O)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">~$54/share | 5.2% yield</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$125 invested</p>
                  <p className="text-xs text-slate-600">~2.3 shares | $6.50/yr dividends</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">Coca-Cola (KO)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">~$62/share | 3.0% yield</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$100 invested</p>
                  <p className="text-xs text-slate-600">~1.6 shares | $3.00/yr dividends</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">Verizon (VZ)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">~$41/share | 6.5% yield</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$75 invested</p>
                  <p className="text-xs text-slate-600">~1.8 shares | $4.88/yr dividends</p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <p className="font-bold">Total: $500 invested across 4 holdings = $21.38/year in dividends</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                That is $1.78/month. Small, yes -- but every dividend gets reinvested, and you are adding
                more each month. This is how every million-dollar portfolio started.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Landmark className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <p className="font-semibold">$0 Commissions</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Every major broker is free</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <PieChart className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <p className="font-semibold">Fractional Shares</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Buy any stock for $1+</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <p className="font-semibold">Auto DRIP</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Reinvest every penny</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Three Starter Portfolios */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="h-7 w-7 text-purple-600" />
          3 Starter Portfolios for $500
        </h2>

        <div className="space-y-6">
          <Card className="border-2 border-green-400">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">Option A: The Simple ETF Start</CardTitle>
                  <CardDescription>1 fund, maximum simplicity, instant diversification</CardDescription>
                </div>
                <Badge className="bg-green-600">Easiest</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-lg">SCHD -- 100% ($500)</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Schwab US Dividend Equity ETF | 100+ dividend stocks | 3.5% yield
                    </p>
                  </div>
                </div>
              </div>
              <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Instant diversification across 100+ quality dividend stocks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Ultra-low 0.06% expense ratio ($0.30/year on $500)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>10-year average return: 11.5%/year (with dividends reinvested)</span>
                </li>
              </ul>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-3">
                <strong>Best for:</strong> Complete beginners who want a single investment they never
                need to think about. Add more money monthly and let DRIP do the rest.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-400">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">Option B: The Balanced Start</CardTitle>
                  <CardDescription>2 ETFs, balanced growth and income</CardDescription>
                </div>
                <Badge className="bg-blue-600">Recommended</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">SCHD (Dividend Quality)</p>
                      <p className="text-xs text-slate-500">3.5% yield | Growth + Income</p>
                    </div>
                    <p className="font-bold">$300 (60%)</p>
                  </div>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">VNQ or O (Real Estate)</p>
                      <p className="text-xs text-slate-500">4.0-5.2% yield | Monthly income</p>
                    </div>
                    <p className="font-bold">$200 (40%)</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Best for:</strong> Investors who want slightly higher income and two different
                asset classes (stocks + real estate). Simple to maintain and easy to add to monthly.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-400">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">Option C: The Stock Picker Start</CardTitle>
                  <CardDescription>3-4 individual stocks, more hands-on</CardDescription>
                </div>
                <Badge variant="outline">Intermediate</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">SCHD ETF (Foundation)</p>
                      <p className="text-xs text-slate-500">Diversified core</p>
                    </div>
                    <p className="font-bold">$200 (40%)</p>
                  </div>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">Realty Income (O)</p>
                      <p className="text-xs text-slate-500">Monthly REIT dividend</p>
                    </div>
                    <p className="font-bold">$125 (25%)</p>
                  </div>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">Coca-Cola (KO)</p>
                      <p className="text-xs text-slate-500">Dividend King, 62+ year streak</p>
                    </div>
                    <p className="font-bold">$100 (20%)</p>
                  </div>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">AbbVie (ABBV)</p>
                      <p className="text-xs text-slate-500">Pharma, fast dividend growth</p>
                    </div>
                    <p className="font-bold">$75 (15%)</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Best for:</strong> Investors who enjoy researching stocks and want to learn stock
                analysis while building their portfolio. Uses SCHD as the safety net with 3 individual picks.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Monthly DCA Plan */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Calendar className="h-7 w-7 text-blue-600" />
          The $100/Month DCA Plan
        </h2>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          Your $500 starting investment is the seed. Monthly dollar-cost averaging (DCA) is the water.
          Here is what happens when you add just $100/month to your dividend portfolio:
        </p>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">End of Year 1</p>
                  <p className="text-xs text-slate-500">$500 initial + $1,200 contributions</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$1,810 portfolio</p>
                  <p className="text-xs text-slate-600">$74/yr dividends ($6.17/month)</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">End of Year 3</p>
                  <p className="text-xs text-slate-500">Snowball forming</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$4,780 portfolio</p>
                  <p className="text-xs text-slate-600">$206/yr dividends ($17/month)</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">End of Year 5</p>
                  <p className="text-xs text-slate-500">Real momentum</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$8,370 portfolio</p>
                  <p className="text-xs text-slate-600">$377/yr dividends ($31/month)</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">End of Year 10</p>
                  <p className="text-xs text-slate-500">Compounding shines</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$20,650 portfolio</p>
                  <p className="text-xs text-slate-600">$930/yr dividends ($78/month)</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950 rounded border-2 border-green-400">
                <div>
                  <p className="font-semibold text-green-700 dark:text-green-400">End of Year 20</p>
                  <p className="text-xs text-green-600">The snowball is massive</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-700 dark:text-green-400">$63,140 portfolio</p>
                  <p className="text-xs text-green-600 font-semibold">$2,841/yr ($237/month)</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 mt-4">
              Assumes 8% total return (4% yield + 4% appreciation) with DRIP enabled and 6% annual dividend growth rate.
              Total invested over 20 years: $24,500. Portfolio value: $63,140. That is the magic of compounding.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200">
          <CardContent className="pt-6">
            <p className="font-semibold mb-2">What if you can invest more?</p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-white dark:bg-slate-900 rounded text-center">
                <p className="font-bold text-blue-600">$200/month</p>
                <p className="text-xs text-slate-500">Year 20: $123,000 portfolio</p>
                <p className="text-xs text-slate-500">$5,535/yr dividends</p>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded text-center">
                <p className="font-bold text-blue-600">$500/month</p>
                <p className="text-xs text-slate-500">Year 20: $302,000 portfolio</p>
                <p className="text-xs text-slate-500">$13,590/yr dividends</p>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded text-center">
                <p className="font-bold text-blue-600">$1,000/month</p>
                <p className="text-xs text-slate-500">Year 20: $596,000 portfolio</p>
                <p className="text-xs text-slate-500">$26,820/yr dividends</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Email Signup */}
      <div className="my-16">
        <InlineSignup />
      </div>

      {/* Getting Started Checklist */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Target className="h-7 w-7 text-green-600" />
          Your First Week Action Plan
        </h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">1</div>
                <div>
                  <p className="font-bold text-lg">Day 1: Open a Brokerage Account</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Choose Fidelity (best research tools), Schwab (best all-around), or M1 Finance (best
                    for automated investing). All offer $0 commissions, fractional shares, and free DRIP.
                    If you are under 59.5, open a Roth IRA first for tax-free growth. Takes 10 minutes online.
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
                  <p className="font-bold text-lg">Day 2: Fund Your Account with $500</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Link your bank account and transfer $500. ACH transfers typically take 1-3 business days,
                    but many brokers offer instant deposits for amounts under $1,000. While you wait, research
                    the portfolio options above.
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
                  <p className="font-bold text-lg">Day 3: Make Your First Purchase</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Buy your chosen portfolio. If going with Option A, purchase $500 of SCHD. With fractional
                    shares, you will own approximately 5.9 shares. You are now a dividend investor. Your first
                    dividend should arrive within 1-3 months depending on the payment schedule.
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
                  <p className="font-bold text-lg">Day 4: Enable DRIP</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Go to your account settings and turn on automatic dividend reinvestment for all holdings.
                    On Fidelity: Account Features then Brokerage & Trading then Dividends and Capital Gains.
                    On Schwab: Account Settings then Dividend Reinvestment. This is critical -- it starts your
                    snowball automatically.
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
                  <p className="font-bold text-lg">Day 5: Set Up Auto-Invest ($100+/month)</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Schedule a recurring monthly transfer from your bank to your brokerage. Even $100/month
                    adds up to $1,200/year. Set the transfer for the day after payday so you invest before you
                    spend. M1 Finance and Fidelity both support automatic recurring investments.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Common Beginner Mistakes */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <AlertTriangle className="h-7 w-7 text-amber-500" />
          5 Beginner Mistakes to Avoid
        </h2>

        <div className="space-y-4">
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-6">
              <p className="font-bold mb-1">1. Waiting Until You Have &quot;Enough&quot;</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                There is no minimum to start. The difference between starting today with $500 and waiting
                a year to save $5,000 is minimal over 20 years. Time in the market beats timing the market.
                Start now and add more later.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-6">
              <p className="font-bold mb-1">2. Chasing the Highest Yield</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                A 12% yield looks tempting compared to 3.5%, but ultra-high yields often mean the company
                is in trouble and may cut its dividend. Stick to 2-6% yields from established companies.
                A 3.5% yield that grows 8% annually beats a 10% yield that gets cut in half.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-6">
              <p className="font-bold mb-1">3. Checking Your Account Daily</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Stock prices fluctuate daily. Your dividend income does not. Check your account monthly
                or quarterly, not daily. Focus on your forward annual dividend income, not the daily stock
                price. If your dividends are growing, you are winning.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-6">
              <p className="font-bold mb-1">4. Selling During Market Drops</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                When stocks drop 20%, your initial reaction will be to sell. Do the opposite: buy more.
                Market drops mean higher dividend yields. The investors who bought during the 2020 COVID
                crash are sitting on 50-100% capital gains and locked in above-average yields.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-6">
              <p className="font-bold mb-1">5. Not Having an Emergency Fund First</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Before investing $500 in dividends, make sure you have at least $1,000-$2,000 in a savings
                account for emergencies. You do not want to sell your investments at a loss because of an
                unexpected car repair. Build a small emergency fund, then invest.
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
              <CardTitle className="text-lg">Which broker is best for $500?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                For $500, choose Fidelity or Schwab for a Roth IRA, or M1 Finance for automated investing.
                All three offer $0 commissions, fractional shares, and free DRIP. M1 Finance is particularly
                good for beginners because it automates everything -- you set your allocation once and every
                future deposit is invested automatically in the right proportions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Should I open a Roth IRA or a regular brokerage?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                If you qualify, start with a Roth IRA. All dividends and growth are 100% tax-free forever.
                You can contribute up to $7,000/year (2026) if your income is below $161,000 (single). You
                can withdraw your contributions (not gains) at any time without penalty. It is the best
                account for dividend investing.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">When will I receive my first dividend?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Most dividend stocks pay quarterly (every 3 months). If you buy SCHD today, your first
                dividend could arrive within 1-3 months depending on timing. Realty Income (O) pays monthly,
                so you could see your first payment within 30 days. The amount will be small ($1-5), but
                it is your first taste of passive income.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Is $100/month enough to make a difference?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Absolutely. $100/month for 20 years at 8% return grows to over $59,000 -- from $24,000
                invested. That is nearly $2,500/year in dividends. Many millionaires started with less. The
                key is consistency. $100/month every month for 20 years beats $5,000 invested once and
                then forgotten.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What is the single best stock for a beginner?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                SCHD (Schwab US Dividend Equity ETF). It is not a single stock -- it is an ETF holding 100+
                quality dividend stocks selected by a proven methodology. It has outperformed the broader
                market over the past decade while providing growing dividends. One investment gives you
                instant diversification across sectors and companies.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-500">
          <CardHeader>
            <CardTitle className="text-2xl">See How Your $500 Grows Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              Use our free calculators to project how your $500 starting investment grows with
              monthly contributions and reinvested dividends.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/calculators/drip">
                <Button className="w-full" size="lg">
                  DRIP Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/calculators/compound-interest">
                <Button variant="outline" className="w-full" size="lg">
                  Compound Interest <ArrowRight className="ml-2 h-4 w-4" />
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
          <Link href="/blog/dividend-investing-for-beginners-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Investing for Beginners</CardTitle>
                <CardDescription>The complete 2026 starter guide</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/blog/how-to-make-500-month-dividends">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How to Make $500/Month in Dividends</CardTitle>
                <CardDescription>Your first big income milestone</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/blog/dividend-snowball-method-explained">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">The Dividend Snowball Method</CardTitle>
                <CardDescription>How small investments compound into wealth</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/blog/best-dividend-stocks-for-beginners">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Dividend Stocks for Beginners</CardTitle>
                <CardDescription>Safe, reliable picks for new investors</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
