import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import {
  TrendingUp,
  DollarSign,
  Calculator,
  Award,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Complete Guide to DRIP Investing (Dividend Reinvestment Plans) | 2026',
  description: 'Learn how DRIP investing works, why it accelerates wealth building, and how to set up automatic dividend reinvestment for passive income growth. Complete guide with examples and calculators.',
  keywords: 'DRIP investing, dividend reinvestment plan, passive income, compound interest, dividend stocks, wealth building',
  openGraph: {
    title: 'The Complete Guide to DRIP Investing - Build Wealth on Autopilot',
    description: 'Master dividend reinvestment plans and accelerate your wealth building with compound growth.',
    type: 'article',
  }
}

export default function DripInvestingGuidePage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        {/* Hero */}
        <article className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <Badge className="mb-4">Investment Guide</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  The Complete Guide to DRIP Investing
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Learn how Dividend Reinvestment Plans (DRIPs) can accelerate your wealth building
                  through the power of compound growth - completely on autopilot.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span>Updated: February 2026</span>
                  <span>•</span>
                  <span>12 min read</span>
                </div>
              </div>

              {/* Table of Contents */}
              <Card className="mb-12 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#what-is-drip" className="text-blue-600 hover:underline">What is DRIP Investing?</a></li>
                    <li><a href="#how-it-works" className="text-blue-600 hover:underline">How DRIP Works</a></li>
                    <li><a href="#benefits" className="text-blue-600 hover:underline">5 Key Benefits of DRIPs</a></li>
                    <li><a href="#compound-power" className="text-blue-600 hover:underline">The Compound Growth Advantage</a></li>
                    <li><a href="#how-to-start" className="text-blue-600 hover:underline">How to Set Up a DRIP</a></li>
                    <li><a href="#best-stocks" className="text-blue-600 hover:underline">Best Stocks for DRIP Investing</a></li>
                    <li><a href="#mistakes" className="text-blue-600 hover:underline">Common Mistakes to Avoid</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <section id="what-is-drip" className="mb-12">
                  <h2 className="flex items-center gap-2">
                    <DollarSign className="h-7 w-7 text-blue-600" />
                    What is DRIP Investing?
                  </h2>
                  <p>
                    A <strong>Dividend Reinvestment Plan (DRIP)</strong> is an investment strategy where you
                    automatically reinvest your dividend payments to purchase more shares of the same stock,
                    rather than receiving the dividends as cash.
                  </p>
                  <p>
                    Think of it as putting your dividends to work immediately. Instead of letting that $50
                    dividend sit in your account, DRIP automatically uses it to buy more shares (or fractional
                    shares), which then generate their own dividends, creating a compounding effect.
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3">Real Example:</h3>
                      <p className="mb-2">
                        You own 100 shares of Johnson & Johnson (JNJ) at $160/share. JNJ pays $4.76 annual dividend.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                          <span><strong>Without DRIP:</strong> You receive $476/year in cash</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                          <span><strong>With DRIP:</strong> That $476 automatically buys 2.98 more shares</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                          <span><strong>Year 2:</strong> You now have 102.98 shares earning dividends</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                          <span><strong>After 20 years:</strong> Your 100 shares become 300+ shares through DRIP alone!</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                <section id="how-it-works" className="mb-12">
                  <h2>How DRIP Works (Step by Step)</h2>
                  <ol className="space-y-4">
                    <li>
                      <strong>You own dividend-paying stock</strong> - For example, 50 shares of Coca-Cola (KO)
                    </li>
                    <li>
                      <strong>Company declares dividend</strong> - KO announces $0.485 per share quarterly dividend
                    </li>
                    <li>
                      <strong>Dividend payment date arrives</strong> - You're owed $24.25 (50 shares × $0.485)
                    </li>
                    <li>
                      <strong>DRIP automatically reinvests</strong> - Your broker uses that $24.25 to buy 0.385 more shares at current price (~$63)
                    </li>
                    <li>
                      <strong>You now own more shares</strong> - 50.385 shares, which earn dividends next quarter
                    </li>
                    <li>
                      <strong>Process repeats forever</strong> - Each quarter, you accumulate more shares
                    </li>
                  </ol>

                  <p className="mt-6">
                    <strong>Key point:</strong> This happens automatically. You don't need to log in, place orders,
                    or make decisions. It's wealth building on autopilot.
                  </p>
                </section>

                <section id="benefits" className="mb-12">
                  <h2 className="flex items-center gap-2">
                    <TrendingUp className="h-7 w-7 text-green-600" />
                    5 Key Benefits of DRIP Investing
                  </h2>

                  <div className="grid gap-6 mt-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-2">1. Compound Growth Acceleration</h3>
                        <p>
                          DRIPs harness the power of compound interest. Your dividends buy shares that generate
                          dividends that buy more shares. Over 20-30 years, this creates exponential growth.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-2">2. Dollar-Cost Averaging</h3>
                        <p>
                          Since you're buying shares continuously (every dividend payment), you automatically
                          buy more shares when prices are low and fewer when prices are high - a proven strategy
                          to reduce risk.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-2">3. No Trading Commissions</h3>
                        <p>
                          Most brokers offer commission-free DRIP. You're not paying $0.50-$5 every time you
                          reinvest dividends. Those savings add up significantly over decades.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-2">4. Fractional Share Purchasing</h3>
                        <p>
                          Can't afford a $500 share? DRIP lets you buy 0.1 shares with a $50 dividend. This
                          maximizes every dollar and ensures no dividends sit idle.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-2">5. Removes Emotion from Investing</h3>
                        <p>
                          DRIP is automatic. You won't be tempted to spend dividends or make poor timing decisions.
                          The discipline of automatic reinvestment often outperforms manual investing.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section id="compound-power" className="mb-12">
                  <h2>The Compound Growth Advantage</h2>
                  <p>
                    Let's see the real difference DRIP makes with actual numbers:
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-4">Scenario: $10,000 in Dividend Aristocrat Portfolio</h3>
                      <ul className="space-y-3">
                        <li>
                          <strong>Starting Investment:</strong> $10,000
                        </li>
                        <li>
                          <strong>Average Yield:</strong> 3.5%
                        </li>
                        <li>
                          <strong>Dividend Growth:</strong> 6% annually
                        </li>
                        <li>
                          <strong>Time Horizon:</strong> 20 years
                        </li>
                      </ul>

                      <div className="mt-6 grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                          <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">WITHOUT DRIP (Cash Dividends)</div>
                          <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">$22,450</div>
                          <div className="text-sm">$10,000 principal + $12,450 dividends collected</div>
                        </div>
                        <div className="p-4 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 rounded-lg">
                          <div className="text-sm text-green-700 dark:text-green-300 mb-1">WITH DRIP (Reinvested)</div>
                          <div className="text-3xl font-bold text-green-900 dark:text-green-100 mb-2">$38,697</div>
                          <div className="text-sm text-green-800 dark:text-green-200"><strong>+$16,247 more wealth</strong> (72% higher!)</div>
                        </div>
                      </div>

                      <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                        * Assumes 6% annual stock price appreciation. Your results may vary.
                      </p>
                    </CardContent>
                  </Card>

                  <p>
                    <strong>That's the power of DRIP:</strong> Nearly double the returns over 20 years, just by
                    clicking "Enable DRIP" in your broker account.
                  </p>
                </section>

                <section id="how-to-start" className="mb-12">
                  <h2>How to Set Up a DRIP</h2>

                  <h3>Option 1: Through Your Broker (Recommended for Most)</h3>
                  <ol className="space-y-3">
                    <li>
                      <strong>Choose a broker with free DRIP:</strong> Fidelity, Charles Schwab, M1 Finance,
                      Robinhood, Webull, E*TRADE all offer commission-free DRIP
                    </li>
                    <li>
                      <strong>Buy dividend-paying stocks</strong>
                    </li>
                    <li>
                      <strong>Enable DRIP in account settings:</strong> Usually under "Dividends & Capital Gains"
                      → Toggle "Reinvest Dividends" to ON
                    </li>
                    <li>
                      <strong>Done!</strong> Your dividends will automatically reinvest from now on
                    </li>
                  </ol>

                  <h3 className="mt-6">Option 2: Direct Stock Purchase Plans (DSPPs)</h3>
                  <p>
                    Some companies (like Coca-Cola, Home Depot) offer direct purchase plans where you buy
                    stock directly from the company. Benefits include sometimes discounted shares and very
                    low fees. Downsides: more paperwork, less flexibility.
                  </p>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-2">💡 Pro Tip:</h4>
                      <p>
                        For beginners, use a broker's DRIP feature. It's easier to manage, you can invest in
                        multiple stocks from one account, and you have more flexibility to sell if needed.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <section id="best-stocks" className="mb-12">
                  <h2 className="flex items-center gap-2">
                    <Award className="h-7 w-7 text-yellow-600" />
                    Best Stocks for DRIP Investing
                  </h2>
                  <p>
                    The best DRIP stocks combine three qualities:
                  </p>
                  <ol className="space-y-2">
                    <li><strong>Consistent dividend payments</strong> (quarterly is ideal)</li>
                    <li><strong>Dividend growth history</strong> (5+ years of increases)</li>
                    <li><strong>Financial stability</strong> (won't cut dividends in downturns)</li>
                  </ol>

                  <h3 className="mt-6">Top DRIP Stock Categories:</h3>

                  <div className="grid gap-4 mt-4">
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-2">Dividend Aristocrats (25+ Years of Increases)</h4>
                        <p className="mb-3">Companies with proven track records of growing dividends for 25+ consecutive years.</p>
                        <div className="flex flex-wrap gap-2">
                          <Link href="/stocks/jnj"><Badge>JNJ - Johnson & Johnson</Badge></Link>
                          <Link href="/stocks/pg"><Badge>PG - Procter & Gamble</Badge></Link>
                          <Link href="/stocks/ko"><Badge>KO - Coca-Cola</Badge></Link>
                          <Link href="/stocks/mmm"><Badge>MMM - 3M</Badge></Link>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-2">High-Yield Dividend Stocks</h4>
                        <p className="mb-3">For faster share accumulation through DRIP.</p>
                        <div className="flex flex-wrap gap-2">
                          <Link href="/stocks/mo"><Badge>MO - Altria (8.5% yield)</Badge></Link>
                          <Link href="/stocks/vz"><Badge>VZ - Verizon (6.2% yield)</Badge></Link>
                          <Link href="/stocks/mmm"><Badge>MMM - 3M (5.7% yield)</Badge></Link>
                          <Link href="/stocks/o"><Badge>O - Realty Income (5.0% yield)</Badge></Link>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-2">Fast Dividend Growth Stocks</h4>
                        <p className="mb-3">Growing dividends 10%+ annually compounds even faster.</p>
                        <div className="flex flex-wrap gap-2">
                          <Link href="/stocks/unh"><Badge>UNH - UnitedHealth (16.5% growth)</Badge></Link>
                          <Link href="/stocks/cost"><Badge>COST - Costco (13.5% growth)</Badge></Link>
                          <Link href="/stocks/hd"><Badge>HD - Home Depot (12.5% growth)</Badge></Link>
                          <Link href="/stocks/blk"><Badge>BLK - BlackRock (11.8% growth)</Badge></Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-6 p-6 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <Calculator className="h-5 w-5" />
                      Try Our DRIP Calculator
                    </h4>
                    <p className="mb-4">
                      See exactly how much wealth you can build with DRIP investing using our free calculator
                      pre-filled with real dividend data.
                    </p>
                    <Link href="/stocks">
                      <Button>
                        Explore Stock Calculators <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </section>

                <section id="mistakes" className="mb-12">
                  <h2>Common DRIP Mistakes to Avoid</h2>

                  <div className="space-y-4">
                    <Card className="border-red-200 dark:border-red-800">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">
                          ❌ Mistake #1: Not Tracking Cost Basis
                        </h3>
                        <p>
                          Every DRIP purchase is a separate tax lot. Keep records! Most brokers track this automatically,
                          but verify before tax time.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-red-200 dark:border-red-800">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">
                          ❌ Mistake #2: DRIPing in Taxable Accounts Without Planning
                        </h3>
                        <p>
                          Dividends are taxable even if reinvested. Make sure you have cash to pay taxes on those
                          dividends, or use DRIP primarily in tax-advantaged accounts (IRA, 401k).
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-red-200 dark:border-red-800">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">
                          ❌ Mistake #3: DRIPing Overvalued Stocks
                        </h3>
                        <p>
                          DRIP works best with fundamentally strong companies at fair prices. Don't DRIP a stock
                          that's 50% overvalued just because it pays dividends.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-red-200 dark:border-red-800">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">
                          ❌ Mistake #4: Never Reviewing Your Holdings
                        </h3>
                        <p>
                          DRIP is "set and forget" but not "set and ignore forever." Review annually to ensure
                          companies remain strong and dividends are sustainable.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section className="mb-12">
                  <h2>Conclusion: Is DRIP Investing Right for You?</h2>
                  <p>
                    DRIP investing is ideal if you:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-1" />
                      <span>Have a long time horizon (10+ years)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-1" />
                      <span>Want to build wealth on autopilot</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-1" />
                      <span>Don't need current income from dividends</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-1" />
                      <span>Believe in the power of compound growth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-1" />
                      <span>Want to invest without constant monitoring</span>
                    </li>
                  </ul>

                  <p className="mt-6">
                    The math is clear: reinvesting dividends can nearly <strong>double your wealth</strong> over
                    20-30 years compared to taking cash. All it takes is clicking one button in your broker account.
                  </p>

                  <Card className="my-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <CardContent className="pt-6 text-center">
                      <h3 className="text-2xl font-bold mb-4">Start Your DRIP Journey Today</h3>
                      <p className="mb-6">
                        Use our free calculators to see how DRIP investing can grow your wealth with your
                        favorite dividend stocks.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/stocks">
                          <Button size="lg">
                            <Calculator className="mr-2 h-5 w-5" />
                            Try DRIP Calculator
                          </Button>
                        </Link>
                        <Link href="/about">
                          <Button size="lg" variant="outline">
                            Find the Best Broker for DRIP
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </section>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}
