import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import {
  Check,
  X,
  DollarSign,
  TrendingUp,
  Shield,
  Smartphone,
  Zap,
  Award,
  ArrowRight,
  AlertCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Choose the Best Broker for Dividend Investing | 2026 Guide',
  description: 'Complete guide to choosing the best brokerage for dividend investors. Compare fees, DRIP support, fractional shares, and features. Find your perfect broker.',
  keywords: 'best broker for dividends, dividend investing broker, DRIP broker, commission-free trading, fractional shares',
}

export default function HowToChooseBrokerPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <article className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-12">
                <Badge className="mb-4">Broker Guide • Updated February 2026</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  How to Choose the Best Broker for Dividend Investing
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Not all brokers are equal for dividend investors. This complete guide shows you exactly
                  what to look for and which brokers are best in 2026.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span>12 min read</span>
                  <span>•</span>
                  <span>Expert comparison</span>
                </div>
              </div>

              {/* Table of Contents */}
              <Card className="mb-12 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#why-it-matters" className="text-blue-600 hover:underline">Why Your Broker Choice Matters</a></li>
                    <li><a href="#must-have" className="text-blue-600 hover:underline">6 Must-Have Features</a></li>
                    <li><a href="#nice-to-have" className="text-blue-600 hover:underline">Nice-to-Have Features</a></li>
                    <li><a href="#red-flags" className="text-blue-600 hover:underline">Red Flags to Avoid</a></li>
                    <li><a href="#top-brokers" className="text-blue-600 hover:underline">Top Brokers Compared</a></li>
                    <li><a href="#decision-tree" className="text-blue-600 hover:underline">Decision Tree</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <section id="why-it-matters" className="mb-12">
                  <h2 className="flex items-center gap-2">
                    <Shield className="h-7 w-7 text-blue-600" />
                    Why Your Broker Choice Matters
                  </h2>
                  <p>
                    Choosing the wrong broker can cost you thousands of dollars over time through unnecessary
                    fees, missed dividend reinvestment opportunities, and poor execution.
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3">Real Cost Example</h3>
                      <p className="mb-4">
                        <strong>Scenario:</strong> You invest $500/month in dividend stocks for 20 years.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                          <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Bad Broker</div>
                          <div className="text-xl font-bold text-red-600 mb-2">$89,350</div>
                          <ul className="text-sm space-y-1">
                            <li>❌ $7/trade × 240 trades = $1,680</li>
                            <li>❌ No DRIP (dividends sit idle)</li>
                            <li>❌ No fractional shares (waste $50+/month)</li>
                            <li>❌ Lost compounding: ~$8,000</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 rounded-lg">
                          <div className="text-sm text-green-700 dark:text-green-300 mb-1">Good Broker</div>
                          <div className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">$99,030</div>
                          <ul className="text-sm space-y-1">
                            <li>✅ $0/trade = $0 in fees</li>
                            <li>✅ Auto DRIP (every dividend reinvested)</li>
                            <li>✅ Fractional shares (no waste)</li>
                            <li>✅ Full compounding potential</li>
                          </ul>
                        </div>
                      </div>
                      <p className="mt-4 font-bold">
                        Difference: <span className="text-green-600">$9,680 more wealth</span> just by choosing the right broker!
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <section id="must-have" className="mb-12">
                  <h2>6 Must-Have Features for Dividend Investors</h2>

                  <div className="space-y-6">
                    <FeatureCard
                      icon={<DollarSign className="h-6 w-6" />}
                      title="1. $0 Trading Commissions"
                      importance="CRITICAL"
                      description="Every $7 commission is $7 less working for you. With commission-free trading, every dollar goes into your investments."
                      why="If you invest monthly ($12 trades/year) at $7/trade, you're paying $84/year. Over 20 years, that's $1,680 in pure waste."
                      brokers={['M1 Finance', 'Fidelity', 'Schwab', 'Robinhood', 'Webull']}
                    />

                    <FeatureCard
                      icon={<TrendingUp className="h-6 w-6" />}
                      title="2. Automatic Dividend Reinvestment (DRIP)"
                      importance="CRITICAL"
                      description="Automatically reinvests dividends to buy more shares. This is THE feature that compounds your wealth."
                      why="Without DRIP, dividends sit in cash earning 0%. With DRIP, they immediately buy more dividend-paying shares, creating exponential growth."
                      brokers={['M1 Finance', 'Fidelity', 'Schwab', 'Robinhood', 'Webull', 'E*TRADE']}
                    />

                    <FeatureCard
                      icon={<Zap className="h-6 w-6" />}
                      title="3. Fractional Shares"
                      importance="CRITICAL"
                      description="Buy partial shares with any dollar amount. Essential for dividend reinvestment."
                      why="Without fractional shares, a $50 dividend can't buy a $300 stock. That $50 sits idle. With fractional shares, it buys 0.167 shares immediately."
                      brokers={['M1 Finance', 'Fidelity', 'Schwab', 'Robinhood', 'Webull', 'Public']}
                    />

                    <FeatureCard
                      icon={<Shield className="h-6 w-6" />}
                      title="4. No Account Minimums"
                      importance="HIGH"
                      description="Start investing with any amount, even $10."
                      why="Account minimums block beginners. The best time to start is NOW, not when you save up $1,000+"
                      brokers={['M1 Finance ($100)', 'Fidelity ($0)', 'Schwab ($0)', 'Robinhood ($0)', 'Webull ($0)']}
                    />

                    <FeatureCard
                      icon={<Smartphone className="h-6 w-6" />}
                      title="5. User-Friendly Platform"
                      importance="HIGH"
                      description="Easy to use means you'll actually use it. Complicated platforms lead to mistakes."
                      why="If you can't figure out how to enable DRIP or buy fractional shares, those features are useless."
                      brokers={['M1 Finance (excellent)', 'Robinhood (excellent)', 'Fidelity (good)', 'Schwab (good)']}
                    />

                    <FeatureCard
                      icon={<Award className="h-6 w-6" />}
                      title="6. Reliability & Reputation"
                      importance="HIGH"
                      description="Your broker holds your life savings. They must be trustworthy and stable."
                      why="Platform outages during market crashes, poor customer service, or security breaches can cost you dearly."
                      brokers={['Fidelity (A+)', 'Schwab (A+)', 'M1 Finance (A)', 'Robinhood (B-)']}
                    />
                  </div>
                </section>

                <section id="nice-to-have" className="mb-12">
                  <h2>Nice-to-Have Features</h2>
                  <p>
                    These aren't essential for dividend investing, but they're valuable bonuses:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 my-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-600" />
                          Research Tools
                        </h4>
                        <p className="text-sm">
                          Stock screeners, analyst ratings, dividend calendars. Helpful for finding new stocks.
                          <br /><strong>Best:</strong> Fidelity, Schwab
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-600" />
                          Customer Support
                        </h4>
                        <p className="text-sm">
                          24/7 phone support, live chat, physical branches.
                          <br /><strong>Best:</strong> Fidelity, Schwab
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-600" />
                          Retirement Accounts
                        </h4>
                        <p className="text-sm">
                          IRA, Roth IRA, 401k rollovers. Important if you're investing for retirement.
                          <br /><strong>Best:</strong> Fidelity, Schwab, E*TRADE
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-600" />
                          Banking Integration
                        </h4>
                        <p className="text-sm">
                          Checking, savings, debit card with your brokerage.
                          <br /><strong>Best:</strong> Schwab, M1 Finance (M1 Plus)
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-600" />
                          Tax Tools
                        </h4>
                        <p className="text-sm">
                          Tax-loss harvesting, cost basis tracking, tax forms.
                          <br /><strong>Best:</strong> Fidelity, Schwab, M1 Finance
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-600" />
                          Dividend ETFs
                        </h4>
                        <p className="text-sm">
                          Wide selection of dividend-focused ETFs for diversification.
                          <br /><strong>Best:</strong> Fidelity, Schwab, Vanguard
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section id="red-flags" className="mb-12">
                  <h2 className="flex items-center gap-2">
                    <AlertCircle className="h-7 w-7 text-red-600" />
                    Red Flags to Avoid
                  </h2>

                  <div className="space-y-4">
                    <Card className="border-red-200 dark:border-red-800">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-red-700 dark:text-red-400 mb-2 flex items-center gap-2">
                          <X className="h-5 w-5" />
                          🚩 Trading Commissions
                        </h3>
                        <p className="mb-2">
                          Any broker charging per-trade fees in 2026 is outdated. There are too many good free options.
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          <strong>Avoid:</strong> Brokers charging $5-10 per trade
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-red-200 dark:border-red-800">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-red-700 dark:text-red-400 mb-2 flex items-center gap-2">
                          <X className="h-5 w-5" />
                          🚩 No DRIP Support
                        </h3>
                        <p className="mb-2">
                          If a broker doesn't offer automatic dividend reinvestment, run. This is non-negotiable for dividend investors.
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          <strong>Deal-breaker:</strong> Missing DRIP = find another broker
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-red-200 dark:border-red-800">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-red-700 dark:text-red-400 mb-2 flex items-center gap-2">
                          <X className="h-5 w-5" />
                          🚩 No Fractional Shares
                        </h3>
                        <p className="mb-2">
                          Without fractional shares, your dividends sit in cash instead of compounding. Major efficiency loss.
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          <strong>Impact:</strong> 10-20% less wealth over 20 years
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-red-200 dark:border-red-800">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-red-700 dark:text-red-400 mb-2 flex items-center gap-2">
                          <X className="h-5 w-5" />
                          🚩 High Account Minimums
                        </h3>
                        <p className="mb-2">
                          Brokers requiring $1,000-10,000 minimums are gatekeeping. You can't start small or dollar-cost average easily.
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          <strong>Better:</strong> $0-100 minimum lets you start immediately
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-red-200 dark:border-red-800">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-red-700 dark:text-red-400 mb-2 flex items-center gap-2">
                          <X className="h-5 w-5" />
                          🚩 Frequent Outages
                        </h3>
                        <p className="mb-2">
                          Platforms that crash during market volatility (Robinhood in 2020) are unreliable. You can't sell during crashes.
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          <strong>Research:</strong> Check reviews for "outage" and "crash"
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-red-200 dark:border-red-800">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-red-700 dark:text-red-400 mb-2 flex items-center gap-2">
                          <X className="h-5 w-5" />
                          🚩 Poor Customer Service
                        </h3>
                        <p className="mb-2">
                          Email-only support with 5-day response times is unacceptable when you have money problems.
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          <strong>Minimum:</strong> Phone or live chat support during business hours
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section id="top-brokers" className="mb-12">
                  <h2>Top Brokers Compared (2026)</h2>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border border-slate-200 dark:border-slate-700">
                      <thead className="bg-slate-100 dark:bg-slate-800">
                        <tr>
                          <th className="p-3 text-left">Broker</th>
                          <th className="p-3 text-center">Commissions</th>
                          <th className="p-3 text-center">DRIP</th>
                          <th className="p-3 text-center">Fractional</th>
                          <th className="p-3 text-center">Minimum</th>
                          <th className="p-3 text-center">Best For</th>
                        </tr>
                      </thead>
                      <tbody>
                        <BrokerRow
                          name="M1 Finance"
                          commissions="$0"
                          drip="✅ Auto"
                          fractional="✅ Yes"
                          minimum="$100"
                          bestFor="Long-term dividend investors"
                          link="/brokers/m1-finance"
                        />
                        <BrokerRow
                          name="Fidelity"
                          commissions="$0"
                          drip="✅ Auto"
                          fractional="✅ Yes"
                          minimum="$0"
                          bestFor="Research & full-service"
                          link="/brokers/fidelity"
                        />
                        <BrokerRow
                          name="Schwab"
                          commissions="$0"
                          drip="✅ Auto"
                          fractional="✅ Yes"
                          minimum="$0"
                          bestFor="All-around excellence"
                          link="/brokers/charles-schwab"
                        />
                        <BrokerRow
                          name="Robinhood"
                          commissions="$0"
                          drip="✅ Auto"
                          fractional="✅ Yes"
                          minimum="$0"
                          bestFor="Beginners & simplicity"
                          link="/brokers/robinhood"
                        />
                        <BrokerRow
                          name="Webull"
                          commissions="$0"
                          drip="✅ Auto"
                          fractional="✅ Yes"
                          minimum="$0"
                          bestFor="Charts & analysis"
                          link="/brokers/webull"
                        />
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="decision-tree" className="mb-12">
                  <h2>Decision Tree: Which Broker Is Right for You?</h2>

                  <Card className="my-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
                    <CardContent className="pt-6">
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-bold mb-2">If you want the SIMPLEST platform...</h3>
                          <p className="mb-2">→ <Link href="/brokers/robinhood" className="text-blue-600 font-bold hover:underline">Robinhood</Link></p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Perfect for beginners. Beautiful app. Easy DRIP setup. No learning curve.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold mb-2">If you want the BEST for dividend automation...</h3>
                          <p className="mb-2">→ <Link href="/brokers/m1-finance" className="text-blue-600 font-bold hover:underline">M1 Finance</Link></p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            "Pies" make portfolio building effortless. Set it and forget it. Auto-rebalancing.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold mb-2">If you want the BEST research tools...</h3>
                          <p className="mb-2">→ <Link href="/brokers/fidelity" className="text-blue-600 font-bold hover:underline">Fidelity</Link></p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Professional-grade research. Excellent customer service. Perfect for serious investors.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold mb-2">If you want the BEST all-around platform...</h3>
                          <p className="mb-2">→ <Link href="/brokers/charles-schwab" className="text-blue-600 font-bold hover:underline">Charles Schwab</Link></p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Everything you need: investing, banking, research, support. One-stop shop.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold mb-2">If you want the BEST charts and data...</h3>
                          <p className="mb-2">→ <Link href="/brokers/webull" className="text-blue-600 font-bold hover:underline">Webull</Link></p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Advanced charting free. Extended hours trading. Good for data nerds.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold mb-2">If you're STILL not sure...</h3>
                          <p className="mb-2">→ <strong>Start with Fidelity or Schwab</strong></p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            You can't go wrong with either. Both have everything you need and excellent reputations.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section className="mb-12">
                  <h2>Final Thoughts</h2>
                  <p>
                    The "best" broker depends on YOUR priorities. But here's the truth: <strong>Any broker with
                    free trades, DRIP, and fractional shares is good enough to start.</strong>
                  </p>

                  <p>
                    Don't spend weeks researching. The difference between Fidelity, Schwab, and M1 Finance is minimal.
                    The difference between starting TODAY vs waiting another month is huge.
                  </p>

                  <h3>My Recommendation for Most People:</h3>
                  <ol>
                    <li><strong>Complete beginner?</strong> Robinhood (easiest)</li>
                    <li><strong>Dividend automation fan?</strong> M1 Finance (best pies)</li>
                    <li><strong>Want everything?</strong> Fidelity or Schwab (can't go wrong)</li>
                  </ol>

                  <p className="text-lg font-semibold mt-6">
                    Pick one. Open an account TODAY. Start investing. You can always transfer later if needed.
                  </p>
                </section>

                {/* CTA */}
                <Card className="mt-12 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                  <CardContent className="pt-6 text-center">
                    <h2 className="text-2xl font-bold mb-4">Ready to Start Dividend Investing?</h2>
                    <p className="mb-6 max-w-2xl mx-auto">
                      Use our free calculators to project your returns with any dividend stock, then open an
                      account with one of our recommended brokers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/stocks">
                        <Button size="lg">
                          Browse Stock Calculators <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                      <Link href="/about">
                        <Button size="lg" variant="outline">
                          Compare All Brokers
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}

// Helper Components
function FeatureCard({
  icon,
  title,
  importance,
  description,
  why,
  brokers
}: {
  icon: React.ReactNode
  title: string
  importance: string
  description: string
  why: string
  brokers: string[]
}) {
  const importanceColor = importance === 'CRITICAL' ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300' : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="text-blue-600">{icon}</div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          <Badge className={importanceColor}>{importance}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-3">{description}</p>
        <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg mb-3">
          <p className="text-sm"><strong>Why it matters:</strong> {why}</p>
        </div>
        <div className="text-sm">
          <strong>Brokers with this:</strong> {brokers.join(', ')}
        </div>
      </CardContent>
    </Card>
  )
}

function BrokerRow({
  name,
  commissions,
  drip,
  fractional,
  minimum,
  bestFor,
  link
}: {
  name: string
  commissions: string
  drip: string
  fractional: string
  minimum: string
  bestFor: string
  link: string
}) {
  return (
    <tr className="border-b border-slate-200 dark:border-slate-700">
      <td className="p-3">
        <Link href={link} className="font-bold text-blue-600 hover:underline">
          {name}
        </Link>
      </td>
      <td className="p-3 text-center text-green-600 font-semibold">{commissions}</td>
      <td className="p-3 text-center">{drip}</td>
      <td className="p-3 text-center">{fractional}</td>
      <td className="p-3 text-center">{minimum}</td>
      <td className="p-3 text-sm">{bestFor}</td>
    </tr>
  )
}
