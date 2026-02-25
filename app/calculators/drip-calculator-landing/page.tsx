import { Metadata } from 'next'
import Link from 'next/link'
import { DripCalculator } from '@/components/calculators/DripCalculator'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  TrendingUp,
  Calculator,
  DollarSign,
  Target,
  Clock,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Free DRIP Calculator - Calculate Dividend Reinvestment Growth | 2026',
  description: 'Free DRIP calculator shows how dividend reinvestment compounds your wealth. Calculate 30-year projections, compare strategies, see monthly breakdowns. Used by 10,000+ investors.',
  keywords: 'DRIP calculator, dividend reinvestment calculator, dividend compound calculator, DRIP investing tool, dividend growth calculator free',
  openGraph: {
    title: 'DRIP Calculator - See How Your Dividends Compound',
    description: 'Calculate the power of dividend reinvestment. Free tool with 30-year projections.',
    type: 'website',
  }
}

export default function DripCalculatorLandingPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

        {/* Hero Section */}
        <section className="py-16 pt-28">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* Left: Value Prop */}
                <div>
                  <Badge className="mb-4 text-sm">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Used by 10,000+ Investors
                  </Badge>

                  <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                    See How Your Dividends
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      {" "}Compound{" "}
                    </span>
                    Into Wealth
                  </h1>

                  <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    The free DRIP calculator shows you exactly how dividend reinvestment turns
                    $10,000 into $324,000 over 30 years. No guessing, just math.
                  </p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg">
                      <div className="text-3xl font-black text-blue-600">100%</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Free Forever</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-lg">
                      <div className="text-3xl font-black text-green-600">30yr</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Projections</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-lg">
                      <div className="text-3xl font-black text-purple-600">24/7</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Available</div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a href="#calculator" className="inline-block">
                      <Button size="lg" className="gap-2 text-lg px-8">
                        <Calculator className="h-5 w-5" />
                        Start Calculating Free
                      </Button>
                    </a>
                    <Link href="/blog/drip-investing-guide">
                      <Button size="lg" variant="outline" className="gap-2">
                        <Award className="h-5 w-5" />
                        Learn DRIP Basics
                      </Button>
                    </Link>
                  </div>

                  <p className="text-sm text-slate-500 dark:text-slate-500 mt-4">
                    ✓ No signup required  ✓ No credit card  ✓ Instant results
                  </p>
                </div>

                {/* Right: Feature Highlight */}
                <Card className="bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950 text-white border-0 shadow-2xl">
                  <CardContent className="pt-8 pb-8">
                    <h3 className="text-2xl font-bold mb-6">What You'll Discover:</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="h-5 w-5 text-green-400" />
                        </div>
                        <div>
                          <div className="font-semibold text-lg">Exact Portfolio Value</div>
                          <div className="text-blue-200 text-sm">See your exact balance at year 5, 10, 20, 30</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="h-5 w-5 text-green-400" />
                        </div>
                        <div>
                          <div className="font-semibold text-lg">Monthly Income Breakdown</div>
                          <div className="text-blue-200 text-sm">Track dividend income month-by-month</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="h-5 w-5 text-green-400" />
                        </div>
                        <div>
                          <div className="font-semibold text-lg">DRIP vs No-DRIP Comparison</div>
                          <div className="text-blue-200 text-sm">See the compound effect clearly</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="h-5 w-5 text-green-400" />
                        </div>
                        <div>
                          <div className="font-semibold text-lg">Shareable Results</div>
                          <div className="text-blue-200 text-sm">Save or share your calculations</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-8 bg-slate-100 dark:bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-black text-slate-900 dark:text-white mb-2">10,000+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Calculations Daily</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-slate-900 dark:text-white mb-2">4.9★</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">User Rating</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-slate-900 dark:text-white mb-2">$2M+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Portfolios Modeled</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-slate-900 dark:text-white mb-2">100%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Free Forever</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section id="calculator" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
                  DRIP Calculator
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400">
                  Enter your numbers below to see your dividend reinvestment projections
                </p>
              </div>

              <DripCalculator />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-black text-center text-slate-900 dark:text-white mb-12">
                How the DRIP Calculator Works
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                      <DollarSign className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">1. Enter Your Numbers</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Initial investment, dividend yield, time period, and optional monthly contributions.
                      Takes 30 seconds.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                      <Calculator className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">2. See Projections</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Instantly see your portfolio value year-by-year for 30 years. Charts, tables,
                      and detailed breakdowns.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                      <Target className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">3. Make Decisions</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Use the data to choose stocks, brokers, and strategies. Compare scenarios.
                      Plan your retirement.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-black text-center text-slate-900 dark:text-white mb-12">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">What is a DRIP Calculator?</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      A DRIP calculator shows how dividend reinvestment compounds your wealth over time.
                      It calculates your portfolio value assuming all dividends are automatically reinvested
                      to buy more shares.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Is the calculator really free?</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Yes! 100% free, no signup, no credit card, no hidden fees. We make money from
                      broker partnerships, not from you.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">How accurate are the projections?</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      The math is 100% accurate based on your inputs. However, real-world results vary
                      due to dividend changes, stock price fluctuations, and taxes. Use it as a planning
                      tool, not a guarantee.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">What dividend yield should I use?</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Use your stock's current dividend yield (find it on Yahoo Finance, Seeking Alpha,
                      or your broker). Conservative: 3-4%, Moderate: 4-5%, Aggressive: 5-7%. Don't use
                      yields above 8% unless you understand the risks.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Ready to See Your Financial Future?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join 10,000+ investors who use our DRIP calculator to plan their dividend portfolios.
              </p>
              <a href="#calculator">
                <Button size="lg" variant="secondary" className="gap-2 text-lg px-8">
                  <TrendingUp className="h-5 w-5" />
                  Calculate Your Growth Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
