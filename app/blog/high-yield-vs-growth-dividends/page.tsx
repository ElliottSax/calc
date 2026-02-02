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
  Calendar,
  Target,
  Users,
  ArrowRight,
  Award
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'High-Yield vs Dividend Growth Stocks: Which Strategy Wins? | 2026',
  description: 'Complete comparison of high-yield dividend stocks vs dividend growth investing. Learn which strategy is best for your age, goals, and risk tolerance.',
  keywords: 'high yield dividends, dividend growth investing, dividend strategy, best dividend stocks, income vs growth',
}

export default function HighYieldVsGrowthPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <article className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <Badge className="mb-4">Investment Strategy • Updated February 2026</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  High-Yield vs Dividend Growth Stocks: Which Strategy Wins?
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Should you chase 8% yields or 3% yields that grow 15%/year? The answer depends on your age,
                  goals, and timeline. Here's the complete comparison.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span>15 min read</span>
                  <span>•</span>
                  <span>Data-driven analysis</span>
                </div>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                {/* Quick Answer */}
                <Card className="my-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-4">The Quick Answer</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                        <h3 className="font-bold text-green-700 dark:text-green-400 mb-2">High-Yield Wins If:</h3>
                        <ul className="space-y-1 text-sm mb-0">
                          <li>✅ You need income TODAY</li>
                          <li>✅ You're retired or near retirement</li>
                          <li>✅ You have a short timeline (5-10 years)</li>
                          <li>✅ You want predictable cash flow</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                        <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Growth Wins If:</h3>
                        <ul className="space-y-1 text-sm mb-0">
                          <li>✅ You have 15+ years until retirement</li>
                          <li>✅ You want maximum long-term wealth</li>
                          <li>✅ You're reinvesting dividends (DRIP)</li>
                          <li>✅ You're under 50 years old</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h2>Understanding the Two Strategies</h2>

                <h3>High-Yield Dividend Strategy</h3>
                <p>
                  <strong>Definition:</strong> Buying stocks with yields of 5-10%+ to generate maximum current income.
                </p>

                <Card className="my-6">
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-3">High-Yield Examples:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-800 rounded">
                        <span>Altria (MO)</span>
                        <span className="font-bold text-green-600">8.50% yield</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-800 rounded">
                        <span>British American Tobacco (BTI)</span>
                        <span className="font-bold text-green-600">8.51% yield</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-800 rounded">
                        <span>W. P. Carey (WPC)</span>
                        <span className="font-bold text-green-600">7.71% yield</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-800 rounded">
                        <span>Verizon (VZ)</span>
                        <span className="font-bold text-green-600">6.21% yield</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h3>Dividend Growth Strategy</h3>
                <p>
                  <strong>Definition:</strong> Buying stocks with lower current yields (2-4%) but high dividend growth rates (10-20%/year).
                </p>

                <Card className="my-6">
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-3">Growth Stock Examples:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-800 rounded">
                        <span>Broadcom (AVGO)</span>
                        <span className="font-bold text-blue-600">1.57% yield, 18.5% growth</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-800 rounded">
                        <span>UnitedHealth (UNH)</span>
                        <span className="font-bold text-blue-600">1.45% yield, 16.5% growth</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-800 rounded">
                        <span>Lowe's (LOW)</span>
                        <span className="font-bold text-blue-600">1.77% yield, 15.2% growth</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-800 rounded">
                        <span>Costco (COST)</span>
                        <span className="font-bold text-blue-600">0.65% yield, 13.5% growth</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h2>20-Year Comparison: The Math</h2>

                <p>
                  Let's compare $10,000 invested in each strategy for 20 years with DRIP enabled.
                </p>

                <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-2xl mb-4">Scenario: $10,000 Investment, 20 Years</h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      {/* High Yield */}
                      <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                        <h4 className="font-bold text-lg mb-3">High-Yield Strategy</h4>
                        <ul className="space-y-2 text-sm">
                          <li>Starting yield: <strong>8%</strong></li>
                          <li>Dividend growth: <strong>2%/year</strong></li>
                          <li>Stock price growth: <strong>3%/year</strong></li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                          <div className="text-sm text-slate-600 dark:text-slate-400">Final value after 20 years:</div>
                          <div className="text-3xl font-bold text-green-600">$37,245</div>
                          <div className="text-sm mt-2">Annual income: <strong>$2,433</strong></div>
                        </div>
                      </div>

                      {/* Growth */}
                      <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg">
                        <h4 className="font-bold text-lg mb-3">Growth Strategy</h4>
                        <ul className="space-y-2 text-sm">
                          <li>Starting yield: <strong>2%</strong></li>
                          <li>Dividend growth: <strong>15%/year</strong></li>
                          <li>Stock price growth: <strong>12%/year</strong></li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-700">
                          <div className="text-sm text-blue-700 dark:text-blue-300">Final value after 20 years:</div>
                          <div className="text-3xl font-bold text-blue-900 dark:text-blue-100">$96,463</div>
                          <div className="text-sm mt-2"><strong>+$59,218 more wealth!</strong></div>
                          <div className="text-sm">Annual income: <strong>$3,274</strong></div>
                        </div>
                      </div>
                    </div>

                    <p className="text-center font-bold text-lg">
                      Growth strategy = <span className="text-blue-600">2.6x more wealth</span> after 20 years
                    </p>
                  </CardContent>
                </Card>

                <h3>But Wait - What If You Need Income NOW?</h3>

                <p>
                  The above assumes reinvesting all dividends. What if you need to spend the income?
                </p>

                <Card className="my-6 bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-3">Taking Income (Not Reinvesting)</h4>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="font-semibold mb-2">High-Yield (8%)</div>
                        <div className="text-sm space-y-1">
                          <div>Year 1 income: <strong>$800</strong></div>
                          <div>Year 10 income: <strong>$975</strong></div>
                          <div>Year 20 income: <strong>$1,190</strong></div>
                          <div className="pt-2 border-t">Total income collected: <strong>$19,682</strong></div>
                        </div>
                      </div>

                      <div>
                        <div className="font-semibold mb-2">Growth (2% → 16%)</div>
                        <div className="text-sm space-y-1">
                          <div>Year 1 income: <strong>$200</strong></div>
                          <div>Year 10 income: <strong>$810</strong></div>
                          <div>Year 20 income: <strong>$3,274</strong></div>
                          <div className="pt-2 border-t">Total income collected: <strong>$23,947</strong></div>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 font-semibold">
                      Even when taking income, growth eventually wins (by year 15). But high-yield gives you
                      more income in years 1-12.
                    </p>
                  </CardContent>
                </Card>

                <h2>Pros & Cons of Each Strategy</h2>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-3 text-green-700 dark:text-green-400">
                        High-Yield Pros
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li>✅ Immediate high income</li>
                        <li>✅ Predictable cash flow</li>
                        <li>✅ Better for retirees</li>
                        <li>✅ Psychological satisfaction</li>
                        <li>✅ Lower stock price volatility</li>
                      </ul>

                      <h3 className="font-bold text-lg mt-6 mb-3 text-red-700 dark:text-red-400">
                        High-Yield Cons
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li>❌ Slower dividend growth</li>
                        <li>❌ Lower total returns long-term</li>
                        <li>❌ Higher dividend cut risk</li>
                        <li>❌ Often declining industries (tobacco, oil)</li>
                        <li>❌ Tax inefficient (high income = high taxes)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-3 text-blue-700 dark:text-blue-400">
                        Growth Pros
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li>✅ Fastest wealth accumulation</li>
                        <li>✅ Rising income over time</li>
                        <li>✅ Growing businesses (tech, healthcare)</li>
                        <li>✅ Lower dividend cut risk</li>
                        <li>✅ Tax efficient (less income now)</li>
                      </ul>

                      <h3 className="font-bold text-lg mt-6 mb-3 text-red-700 dark:text-red-400">
                        Growth Cons
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li>❌ Low income initially</li>
                        <li>❌ Requires patience (10-15 years)</li>
                        <li>❌ Higher stock price volatility</li>
                        <li>❌ Temptation to sell during crashes</li>
                        <li>❌ Not ideal for retirees needing income NOW</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2>Which Strategy for Your Age?</h2>

                <div className="space-y-4 my-6">
                  <Card className="border-blue-200 dark:border-blue-800">
                    <CardContent className="pt-6">
                      <h3 className="font-bold flex items-center gap-2 mb-3">
                        <Users className="h-5 w-5" />
                        Ages 20-40: Dividend Growth (80-100%)
                      </h3>
                      <p className="mb-3">
                        You have 20-40 years until retirement. Prioritize growth over current income.
                      </p>
                      <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                        <div className="font-semibold mb-1">Recommended allocation:</div>
                        <div className="text-sm">
                          • 80% dividend growth (AVGO, UNH, LOW, COST, HD)<br />
                          • 20% moderate yield (JNJ, PG, ABBV)<br />
                          • 0% high yield (you don't need income yet)
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200 dark:border-purple-800">
                    <CardContent className="pt-6">
                      <h3 className="font-bold flex items-center gap-2 mb-3">
                        <Users className="h-5 w-5" />
                        Ages 40-55: Balanced (50/50)
                      </h3>
                      <p className="mb-3">
                        Transition phase. Start adding moderate-yield stocks but keep growth.
                      </p>
                      <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded-lg">
                        <div className="font-semibold mb-1">Recommended allocation:</div>
                        <div className="text-sm">
                          • 40% dividend growth (UNH, LOW, AVGO)<br />
                          • 40% moderate yield (JNJ, PG, PEP, ABBV)<br />
                          • 20% high yield (VZ, MMM)
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200 dark:border-green-800">
                    <CardContent className="pt-6">
                      <h3 className="font-bold flex items-center gap-2 mb-3">
                        <Users className="h-5 w-5" />
                        Ages 55-70: Income Focus (60-80% high-yield)
                      </h3>
                      <p className="mb-3">
                        Approaching or in retirement. Prioritize current income and stability.
                      </p>
                      <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                        <div className="font-semibold mb-1">Recommended allocation:</div>
                        <div className="text-sm">
                          • 20% dividend growth (UNH, LOW for diversification)<br />
                          • 40% moderate yield (JNJ, PG, PEP)<br />
                          • 40% high yield (VZ, MMM, MO, O, WPC)
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-200 dark:border-orange-800">
                    <CardContent className="pt-6">
                      <h3 className="font-bold flex items-center gap-2 mb-3">
                        <Users className="h-5 w-5" />
                        Ages 70+: Maximum Income (80-100% high-yield)
                      </h3>
                      <p className="mb-3">
                        Fully retired. Need maximum monthly income. Safety and yield matter most.
                      </p>
                      <div className="p-3 bg-orange-50 dark:bg-orange-950 rounded-lg">
                        <div className="font-semibold mb-1">Recommended allocation:</div>
                        <div className="text-sm">
                          • 0-10% dividend growth (optional diversification)<br />
                          • 30% moderate yield (JNJ, PG for stability)<br />
                          • 60-70% high yield (VZ, O, WPC, MMM, MO)
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h2>The Hybrid Strategy (Best of Both Worlds)</h2>

                <p>
                  Most investors should use a <strong>hybrid approach</strong> that evolves over time.
                </p>

                <Card className="my-6 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-xl mb-4">The "Barbell Strategy"</h3>

                    <p className="mb-4">
                      Combine the extremes: very high growth + very high yield. Skip the middle.
                    </p>

                    <div className="space-y-3">
                      <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                        <div className="font-bold mb-2">50% Aggressive Growth</div>
                        <div className="text-sm">
                          AVGO (18.5% div growth), UNH (16.5%), LOW (15.2%), COST (13.5%)<br />
                          <span className="text-slate-600 dark:text-slate-400">Goal: Build wealth fast</span>
                        </div>
                      </div>

                      <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                        <div className="font-bold mb-2">50% High Yield</div>
                        <div className="text-sm">
                          MO (8.5%), BTI (8.5%), WPC (7.7%), VZ (6.2%)<br />
                          <span className="text-slate-600 dark:text-slate-400">Goal: Generate income now</span>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 font-semibold">
                      Result: Income today + explosive growth tomorrow
                    </p>
                  </CardContent>
                </Card>

                <h2>Common Mistakes to Avoid</h2>

                <div className="space-y-3 my-6">
                  <Card className="border-red-200 dark:border-red-800">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">
                        ❌ Mistake #1: Chasing Yield Without Checking Sustainability
                      </h3>
                      <p className="text-sm">
                        A 12% yield is worthless if the dividend gets cut 50% next year. Always check payout ratio
                        (under 80% preferred) and cash flow.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-red-200 dark:border-red-800">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">
                        ❌ Mistake #2: Ignoring Growth When You're Young
                      </h3>
                      <p className="text-sm">
                        If you're 30 and buying 7% yielders, you're leaving millions on the table. Young investors
                        should prioritize growth over current income.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-red-200 dark:border-red-800">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">
                        ❌ Mistake #3: All-or-Nothing Thinking
                      </h3>
                      <p className="text-sm">
                        You don't have to choose one strategy exclusively. A 70/30 or 50/50 mix often works best.
                        Diversify across both approaches.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-red-200 dark:border-red-800">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">
                        ❌ Mistake #4: Not Adjusting as You Age
                      </h3>
                      <p className="text-sm">
                        Your strategy at 25 should be different from 55. Gradually shift from growth to income
                        as retirement approaches.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h2>Final Verdict</h2>

                <Card className="my-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-2xl mb-4">The Winner Is... Both!</h3>

                    <p className="mb-4">
                      The "best" strategy isn't one or the other - it's using the right mix for YOUR situation.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Award className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-bold">Under 45:</div>
                          <div className="text-sm">Focus 70-80% on dividend growth. Think decades, not years.</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Award className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-bold">Ages 45-60:</div>
                          <div className="text-sm">Transition to 50/50. Balance growth and income.</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Award className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-bold">Over 60:</div>
                          <div className="text-sm">Shift to 60-80% high-yield. Prioritize income and stability.</div>
                        </div>
                      </div>
                    </div>

                    <p className="mt-6 font-semibold text-lg">
                      Remember: The best dividend portfolio is one you'll stick with through bull and bear markets.
                    </p>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="mt-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                  <CardContent className="pt-6 text-center">
                    <h2 className="text-2xl font-bold mb-4">
                      Calculate Your Returns with Any Strategy
                    </h2>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                      Use our free calculators to compare high-yield vs growth stocks and see which performs
                      better for YOUR timeline.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/tools/compare">
                        <Button size="lg" variant="secondary">
                          Compare Stocks Side-by-Side <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                      <Link href="/stocks">
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                          Browse 100+ Stocks
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
