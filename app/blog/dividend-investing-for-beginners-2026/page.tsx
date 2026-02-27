import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, DollarSign, TrendingUp, Shield, CheckCircle2, AlertTriangle, Calculator, Wallet, BookOpen } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Dividend Investing for Beginners: Complete 2026 Guide (Start with $100)',
  description: 'Start dividend investing with just $100. Step-by-step beginner guide covering broker selection, building your first portfolio, DRIP reinvestment, and the power of compounding. Updated for 2026.',
  keywords: 'dividend investing for beginners, how to start dividend investing, dividend investing with $100, beginner dividend portfolio, dividend stocks for beginners 2026',
}

export default function DividendInvestingForBeginners2026() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <GraduationCap className="h-3 w-3 mr-1" />
          2026 Beginner's Guide
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Dividend Investing for Beginners
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-4">
          Start building passive income with as little as $100.
          No experience needed. No complicated strategies. Just a proven, step-by-step plan.
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Updated February 2026 | 15 min read
        </p>
      </div>

      {/* Why Dividend Investing */}
      <Card className="mb-12 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-500">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-green-600" />
            Why Dividend Investing?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
            Dividend investing is the strategy of buying shares in companies that pay you a portion
            of their profits regularly, usually every quarter. It's one of the most reliable ways to
            build wealth because you get paid whether the stock market goes up, down, or sideways.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg text-center">
              <p className="text-3xl font-bold text-green-600 mb-1">$100</p>
              <p className="text-sm font-semibold">All you need to start</p>
              <p className="text-xs text-slate-500 mt-1">Fractional shares make it possible</p>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg text-center">
              <p className="text-3xl font-bold text-blue-600 mb-1">3-5%</p>
              <p className="text-sm font-semibold">Typical annual yield</p>
              <p className="text-xs text-slate-500 mt-1">Paid to you every quarter</p>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg text-center">
              <p className="text-3xl font-bold text-purple-600 mb-1">65+</p>
              <p className="text-sm font-semibold">Years of proven results</p>
              <p className="text-xs text-slate-500 mt-1">Companies like P&G have paid since 1956</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white dark:bg-slate-900 rounded-lg">
            <p className="font-semibold text-sm mb-2">The math that changes everything:</p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              $100/month invested in dividend stocks averaging 3.5% yield with 7% dividend growth,
              reinvesting all dividends (DRIP), grows to approximately <strong className="text-green-600">$165,000 in 25 years</strong>.
              That portfolio would then generate about <strong className="text-green-600">$580/month in passive income</strong>,
              growing every year without you adding another penny.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* How Much Do You Need */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How Much Money Do You Need to Start?</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="h-6 w-6 text-blue-600" />
              The Truth: Less Than You Think
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              Thanks to fractional shares (available at most modern brokers), you can buy a piece of
              any stock for as little as $1. You don't need to afford a full share of a $300 stock
              to get started.
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold text-lg">$100 - Perfect Starting Point</p>
                  <Badge className="bg-green-600">Recommended</Badge>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  Enough to buy 3 diversified positions. Your first quarterly dividend might only be $0.75-$1.00,
                  but the habit and experience are worth far more than the dollar amount.
                </p>
                <p className="text-xs text-slate-500">First year estimated dividend income: ~$3-4</p>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold text-lg">$500 - Solid Foundation</p>
                  <Badge variant="outline">Great Option</Badge>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  Lets you build a properly diversified mini-portfolio of 5 positions across different sectors.
                  Dividends become more noticeable and motivating.
                </p>
                <p className="text-xs text-slate-500">First year estimated dividend income: ~$17-25</p>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold text-lg">$1,000+ - Accelerated Start</p>
                  <Badge variant="outline">If Available</Badge>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  A full starter portfolio of 8-10 dividend stocks or 2-3 ETFs. Your quarterly dividends
                  will feel real and motivate consistent investing.
                </p>
                <p className="text-xs text-slate-500">First year estimated dividend income: ~$35-50</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 mt-4 font-semibold">
              The amount you start with matters far less than the habit of investing consistently. $100/month
              every month beats a one-time $5,000 investment with no follow-through.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Where to Open an Account */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Step 1: Where to Open a Brokerage Account</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Best Brokers for Beginner Dividend Investors (2026)</CardTitle>
            <CardDescription>All offer $0 commissions, fractional shares, and automatic dividend reinvestment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg">Fidelity</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Best overall for beginners who want to learn</p>
                    <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>$0 commissions + fractional shares from $1</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>Excellent research tools and dividend screening</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>Phone + chat support when you have questions</span>
                      </li>
                    </ul>
                  </div>
                  <Badge className="bg-green-600">Top Pick</Badge>
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div>
                  <h3 className="font-bold text-lg">Charles Schwab</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Best for long-term investors who value education</p>
                  <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>$0 commissions + Schwab Stock Slices (fractional)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>Massive library of free educational content</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>Physical branches for in-person help</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div>
                  <h3 className="font-bold text-lg">M1 Finance</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Best for automation and "set it and forget it"</p>
                  <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>Automatic portfolio rebalancing with every deposit</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>Pre-built dividend "Pies" you can copy in one click</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>Perfect for recurring $100/month investments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded border border-yellow-200 dark:border-yellow-800">
              <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                Which Account Type?
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Roth IRA</strong> (if eligible): Dividends grow and are withdrawn 100% tax-free in retirement.
                Best for long-term dividend investing. 2026 contribution limit: $7,000 ($8,000 if 50+).
                <br />
                <strong>Taxable brokerage</strong>: No contribution limits, withdraw anytime. Dividends are taxed annually.
                Use this after maxing your Roth IRA, or if you need access before age 59.5.
              </p>
            </div>

            <div className="mt-4">
              <Link href="/blog/how-to-choose-dividend-broker">
                <Button variant="outline" className="w-full">
                  Read Our Full Broker Comparison Guide
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* What to Look For in Dividend Stocks */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Step 2: What to Look for in Dividend Stocks</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-600" />
              The 5 Signs of a Quality Dividend Stock
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <p className="font-bold mb-1">Dividend History: 10+ Years of Consecutive Increases</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Companies that have raised dividends for 10+ years have proven they can grow
                      through recessions, pandemics, and market crashes. "Dividend Aristocrats" have
                      25+ years of increases. These are the gold standard for beginners.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <p className="font-bold mb-1">Payout Ratio Below 60-75%</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      The payout ratio shows what percentage of earnings goes to dividends. Below 60% means
                      the company keeps enough profit to grow and can sustain the dividend even if
                      earnings dip temporarily. Above 90% is a red flag (except for REITs, which
                      are required to pay 90%+ of income).
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <p className="font-bold mb-1">Moderate Yield: 2-5%</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Yields of 2-5% are the sweet spot for beginners. Below 2% is fine for growth
                      companies but feels slow. Above 6% often indicates higher risk or slower growth.
                      Very high yields (8%+) frequently precede dividend cuts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                  <div>
                    <p className="font-bold mb-1">A Business You Understand</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      As a beginner, buy companies whose products or services you use and understand.
                      If you can explain what the company does to a 10-year-old, you understand the
                      business well enough to own the stock. Procter & Gamble makes toothpaste and
                      detergent. Coca-Cola makes drinks. Simple.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">5</div>
                  <div>
                    <p className="font-bold mb-1">Strong Competitive Position (Economic Moat)</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Look for companies with advantages competitors can't easily copy: brand loyalty
                      (Coca-Cola), patents (Johnson & Johnson), scale (Walmart), switching costs
                      (Microsoft). These "moats" protect profits and make dividend growth sustainable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* $100 Starter Portfolio */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Step 3: Build Your $100 Starter Portfolio</h2>

        <Card className="mb-6 border-2 border-green-500">
          <CardHeader>
            <CardTitle className="text-2xl">Sample $100 Beginner Portfolio</CardTitle>
            <CardDescription>
              A diversified starting point using ETFs and one individual stock.
              All available as fractional shares at major brokers.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-lg">SCHD - Schwab U.S. Dividend Equity ETF</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Allocation: $40 (40%)</p>
                  </div>
                  <Badge variant="outline">~3.5% Yield</Badge>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  One ETF that holds 100+ quality dividend stocks. Instant diversification across sectors.
                  Tracks the Dow Jones U.S. Dividend 100 Index. One of the most popular dividend ETFs
                  with strong 5-year total returns.
                </p>
                <ul className="text-xs text-slate-500 space-y-1">
                  <li>- Top holdings: Broadcom, Merck, Home Depot, Verizon, Coca-Cola</li>
                  <li>- Expense ratio: 0.06% (just $0.60 per $1,000 invested)</li>
                  <li>- 5-year dividend growth: ~12% annually</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-lg">VYM - Vanguard High Dividend Yield ETF</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Allocation: $30 (30%)</p>
                  </div>
                  <Badge variant="outline">~3.0% Yield</Badge>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  Broader dividend exposure with 400+ holdings. Slightly lower yield than SCHD but more
                  diversified. Excellent complement because it holds different stocks with minimal overlap.
                </p>
                <ul className="text-xs text-slate-500 space-y-1">
                  <li>- Top holdings: JPMorgan, Broadcom, ExxonMobil, Procter & Gamble</li>
                  <li>- Expense ratio: 0.06% (just $0.60 per $1,000 invested)</li>
                  <li>- Holds 400+ dividend-paying companies</li>
                </ul>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-lg">O - Realty Income Corporation</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Allocation: $30 (30%)</p>
                  </div>
                  <Badge variant="outline">~5.5% Yield</Badge>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  A monthly dividend-paying REIT (Real Estate Investment Trust). Owns 13,000+ commercial
                  properties leased to companies like Walgreens, Dollar General, and FedEx. Nicknamed "The
                  Monthly Dividend Company." Adds real estate diversification and monthly income.
                </p>
                <ul className="text-xs text-slate-500 space-y-1">
                  <li>- Pays dividends monthly (not quarterly like most stocks)</li>
                  <li>- 29 consecutive years of dividend increases</li>
                  <li>- 108 consecutive quarterly dividend increases</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg mb-6">
              <p className="font-semibold mb-2">Portfolio Summary</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div>
                  <p className="text-slate-500">Total Invested</p>
                  <p className="font-bold">$100.00</p>
                </div>
                <div>
                  <p className="text-slate-500">Weighted Yield</p>
                  <p className="font-bold text-green-600">~3.75%</p>
                </div>
                <div>
                  <p className="text-slate-500">Est. Year 1 Income</p>
                  <p className="font-bold">~$3.75</p>
                </div>
                <div>
                  <p className="text-slate-500">Number of Positions</p>
                  <p className="font-bold">3 (600+ underlying stocks)</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded border border-yellow-200 dark:border-yellow-800 mb-6">
              <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                Important Disclaimer
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                This is an educational example, not personalized financial advice. Yields, prices, and holdings
                change regularly. Do your own research or consult a financial advisor before investing. Past
                performance does not guarantee future results.
              </p>
            </div>

            <Link href="/calculators/drip">
              <Button className="w-full" size="lg">
                <Calculator className="h-4 w-4 mr-2" />
                See How This $100 Grows Over 20 Years
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* DRIP Explained */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Step 4: Enable DRIP (Your Secret Weapon)</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-green-600" />
              What Is DRIP and Why It Matters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              DRIP stands for <strong>Dividend Reinvestment Plan</strong>. Instead of receiving dividends
              as cash in your account, DRIP automatically uses those dividends to buy more shares of
              the same stock. Those new shares then earn their own dividends, creating a compounding
              snowball effect.
            </p>

            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg mb-6">
              <p className="font-semibold mb-3">DRIP in Action: Your $100 Portfolio</p>
              <div className="space-y-3 text-sm">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded">
                    <p className="font-semibold text-red-600 dark:text-red-400 mb-2">Without DRIP (20 years)</p>
                    <p>$100 initial + $100/month contributions</p>
                    <p>Dividends taken as cash</p>
                    <p className="font-bold mt-2">Portfolio value: ~$38,000</p>
                    <p className="text-xs text-slate-500">+ ~$4,500 in dividends collected as cash</p>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded">
                    <p className="font-semibold text-green-600 dark:text-green-400 mb-2">With DRIP (20 years)</p>
                    <p>$100 initial + $100/month contributions</p>
                    <p>Dividends automatically reinvested</p>
                    <p className="font-bold mt-2 text-green-600">Portfolio value: ~$52,000</p>
                    <p className="text-xs text-slate-500">$14,000 more wealth from DRIP alone</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500">
                  Assumes 3.5% yield, 7% dividend growth, 6% stock price appreciation. For illustration only.
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <p className="font-semibold">How to Enable DRIP (Takes 2 Minutes):</p>
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs flex-shrink-0">1</div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Log into your brokerage account
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs flex-shrink-0">2</div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Go to Account Settings or Preferences
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs flex-shrink-0">3</div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Find "Dividend Reinvestment" or "DRIP" option
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs flex-shrink-0">4</div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Toggle it ON for all holdings (or individually per stock)
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/calculators/drip">
                <Button className="w-full">
                  <Calculator className="h-4 w-4 mr-2" />
                  DRIP Growth Calculator
                </Button>
              </Link>
              <Link href="/calculators/compound-interest">
                <Button variant="outline" className="w-full">
                  Compound Interest Calculator
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Email Signup */}
      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Get Our Free Beginner's Dividend Starter Kit"
          description="Includes: portfolio tracking spreadsheet, DRIP setup guide, and our top 20 beginner-friendly dividend stocks for 2026."
          buttonText="Send Me The Starter Kit"
          source="dividend_investing_beginners_blog"
        />
      </div>

      {/* Common Mistakes */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">7 Mistakes Every Beginner Makes</h2>

        <div className="space-y-4">
          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Mistake #1: Chasing the Highest Yield
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The trap:</strong> You sort stocks by yield and buy the 10% and 12% yielders, thinking
                more yield equals more money.
              </p>
              <p className="text-sm font-semibold text-green-600">
                Solution: Ultra-high yields usually precede dividend cuts. Stick to 2-5% yields from established
                companies. A 3% yield that grows 8% annually beats a 10% yield that gets cut in half.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Mistake #2: Not Diversifying
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The trap:</strong> You put all your money in one or two stocks you love.
              </p>
              <p className="text-sm font-semibold text-green-600">
                Solution: Own at least 10-15 stocks across 5+ sectors, or use dividend ETFs (SCHD, VYM) for
                instant diversification. Our sample $100 portfolio gives you exposure to 600+ companies.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Mistake #3: Checking Your Portfolio Every Day
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The trap:</strong> You watch stock prices daily, panic when they drop, and make emotional
                decisions to sell.
              </p>
              <p className="text-sm font-semibold text-green-600">
                Solution: Check your portfolio monthly or quarterly, not daily. Focus on dividend payments
                being received, not stock price movements. The price you care about is the one 20 years from now.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Mistake #4: Waiting for the "Perfect" Time to Buy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The trap:</strong> You research endlessly but never pull the trigger because the market
                might drop next week.
              </p>
              <p className="text-sm font-semibold text-green-600">
                Solution: Time in the market beats timing the market. Start with your $100 today. Invest
                consistently every month. Over 20 years, whether you started on a "good" or "bad" day barely
                affects your final result.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Mistake #5: Ignoring Dividend Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The trap:</strong> You focus only on today's yield and ignore how fast the dividend is growing.
              </p>
              <p className="text-sm font-semibold text-green-600">
                Solution: A stock yielding 2% but growing dividends 12% annually will out-earn a 5% yielder
                with 2% growth within 8 years. Dividend growth rate is the engine that powers long-term wealth.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Mistake #6: Not Using Tax-Advantaged Accounts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The trap:</strong> You invest in a regular taxable account and pay taxes on every dividend,
                reducing your compounding power.
              </p>
              <p className="text-sm font-semibold text-green-600">
                Solution: Max out a Roth IRA first ($7,000/year for 2026). All dividends and growth are
                permanently tax-free. Only use a taxable account after your Roth is maxed.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Mistake #7: Giving Up Too Early
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The trap:</strong> After 6 months, you've earned $8 in dividends and think "this is
                pointless." You sell and chase meme stocks instead.
              </p>
              <p className="text-sm font-semibold text-green-600">
                Solution: Dividend investing is a marathon, not a sprint. The compounding effect is barely
                visible in years 1-3 but becomes powerful in years 5-10 and life-changing in years 15-20.
                That $8 becomes $80, then $800, then $8,000 per year. Trust the process.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Power of Starting Small */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">The Power of Starting Small and Staying Consistent</h2>

        <Card>
          <CardHeader>
            <CardTitle>$100/Month for 25 Years: The Compounding Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              Assuming 3.5% starting yield, 7% annual dividend growth, dividends reinvested, and 7% average stock price growth:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Year</th>
                    <th className="text-right p-2">Total Invested</th>
                    <th className="text-right p-2">Portfolio Value</th>
                    <th className="text-right p-2">Annual Dividends</th>
                    <th className="text-right p-2">Monthly Income</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Year 1</td>
                    <td className="p-2 text-right">$1,200</td>
                    <td className="p-2 text-right">$1,280</td>
                    <td className="p-2 text-right">$35</td>
                    <td className="p-2 text-right">$3</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Year 5</td>
                    <td className="p-2 text-right">$6,000</td>
                    <td className="p-2 text-right">$7,800</td>
                    <td className="p-2 text-right">$290</td>
                    <td className="p-2 text-right">$24</td>
                  </tr>
                  <tr className="border-b bg-blue-50 dark:bg-blue-950">
                    <td className="p-2 font-semibold">Year 10</td>
                    <td className="p-2 text-right">$12,000</td>
                    <td className="p-2 text-right">$20,500</td>
                    <td className="p-2 text-right">$850</td>
                    <td className="p-2 text-right">$71</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Year 15</td>
                    <td className="p-2 text-right">$18,000</td>
                    <td className="p-2 text-right">$43,000</td>
                    <td className="p-2 text-right">$2,100</td>
                    <td className="p-2 text-right">$175</td>
                  </tr>
                  <tr className="border-b bg-green-50 dark:bg-green-950">
                    <td className="p-2 font-semibold">Year 20</td>
                    <td className="p-2 text-right">$24,000</td>
                    <td className="p-2 text-right font-bold">$82,000</td>
                    <td className="p-2 text-right font-bold text-green-600">$4,300</td>
                    <td className="p-2 text-right font-bold text-green-600">$358</td>
                  </tr>
                  <tr className="bg-green-100 dark:bg-green-900">
                    <td className="p-2 font-bold">Year 25</td>
                    <td className="p-2 text-right">$30,000</td>
                    <td className="p-2 text-right font-bold">$165,000</td>
                    <td className="p-2 text-right font-bold text-green-600">$6,950</td>
                    <td className="p-2 text-right font-bold text-green-600">$580</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <p className="font-semibold mb-2">Key Takeaways:</p>
              <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>You invested $30,000 total and ended with $165,000 - a 5.5x return</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>At year 25, dividends alone pay $580/month without selling a single share</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Most of the growth happens in the final 5-10 years (compounding accelerates)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>This is on just $100/month. Imagine the results at $300 or $500/month</span>
                </li>
              </ul>
            </div>

            <p className="text-xs text-slate-500 mt-3">
              These projections are illustrative estimates. Actual results will vary based on market conditions,
              specific stock selections, and dividend policies. Past performance is not indicative of future results.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Final CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Your Action Plan: Start This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <p className="text-sm"><strong>Today:</strong> Open a brokerage account (Fidelity, Schwab, or M1 Finance). Takes 10 minutes.</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <p className="text-sm"><strong>Day 2:</strong> Fund your account with $100 (or whatever you're comfortable with).</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <p className="text-sm"><strong>Day 3:</strong> Buy your first 3 positions: SCHD ($40), VYM ($30), O ($30).</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <p className="text-sm"><strong>Day 4:</strong> Enable DRIP on all holdings. Turn on automatic $100/month contributions.</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <p className="text-sm"><strong>Day 5:</strong> Use our calculators to project your 10, 20, and 25-year growth. Then forget about it and let compounding work.</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 mb-6">
              The hardest part of dividend investing is getting started. Once you see that first dividend
              payment appear in your account, no matter how small, something clicks. You realize you're
              being paid to own great businesses. That's the moment you become a dividend investor.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/calculators/drip">
                <Button className="w-full" size="lg">
                  <Calculator className="h-4 w-4 mr-2" />
                  Project Your Growth
                </Button>
              </Link>
              <Link href="/calculators/compound-interest">
                <Button variant="outline" className="w-full" size="lg">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Compound Interest Calculator
                </Button>
              </Link>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-6 text-center">
              The best time to start investing was 20 years ago. The second best time is today.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Related Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/how-to-choose-dividend-broker">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How to Choose a Dividend Broker</CardTitle>
                <CardDescription>Detailed comparison of the best platforms for dividend investors</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/drip-investing-guide">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Complete DRIP Investing Guide</CardTitle>
                <CardDescription>Everything you need to know about dividend reinvestment</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-dividend-stocks-for-beginners">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Dividend Stocks for Beginners</CardTitle>
                <CardDescription>10 safe, proven stocks to start your portfolio</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/how-to-calculate-dividend-yield">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How to Calculate Dividend Yield</CardTitle>
                <CardDescription>Master the most important metric for income investors</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
