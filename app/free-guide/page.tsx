import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { LeadMagnetForm } from '@/components/lead-magnet/LeadMagnetForm'
import { CheckCircle2, Download, TrendingUp, Shield, DollarSign, BookOpen, Calculator, LineChart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Free Guide: The Dividend Investor\'s Toolkit',
  description: 'A free 12-chapter guide to how dividend investing actually works: yield traps, payout ratios, DRIP compounding, screening, tax treatment, and the mistakes that cost most.',
  keywords: ['dividend investing guide', 'DRIP guide', 'dividend aristocrats', 'passive income guide', 'free investing guide']
}

export default function FreeGuidePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-600 text-lg px-6 py-2">100% FREE - NO CREDIT CARD REQUIRED</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            The Dividend Investor's Toolkit 2026
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-4xl mx-auto">
            A practical walkthrough of dividend investing mechanics — how DRIP compounding, yield, and payout timing actually work.
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
            12 chapters · 15 pages · free PDF or read online
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Download className="h-5 w-5 text-green-600" />
              <span>Instant Download</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <span>No Spam Ever</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-purple-600" />
              <span>Free, No Cost</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Form */}
          <div className="order-2 md:order-1">
            <Card className="border-2 border-blue-500 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                <CardTitle className="text-2xl text-center">Get Instant Access</CardTitle>
                <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
                  Enter your email to download the complete toolkit
                </p>
              </CardHeader>
              <CardContent className="pt-6">
                <LeadMagnetForm />
                <p className="text-xs text-gray-500 text-center mt-4">
                  We respect your privacy. Unsubscribe anytime with one click.
                </p>
              </CardContent>
            </Card>

            {/* A "Trusted By Investors At:" block used to sit here listing Google,
                Microsoft, Amazon, Meta, Apple and Tesla. We have no relationship with
                any of them and no basis for the claim -- naming real companies as
                endorsers is a deceptive-endorsement problem, not just puffery, and it
                is the first thing an affiliate network looks for. Nothing replaces it:
                we have no audience figures we can actually stand behind. */}
          </div>

          {/* Right Column - What's Inside */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">What's Inside</h2>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Chapters 1-3: The mechanics</h3>
                  <p className="text-gray-600 dark:text-gray-400">What a dividend is and the four dates that govern it, why a high yield is usually a warning, and whether a payout is actually affordable</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Chapters 4-6: Compounding and structure</h3>
                  <p className="text-gray-600 dark:text-gray-400">Growth versus income and yield on cost, what DRIP really compounds, and the sector concentration trap dividend portfolios fall into</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <Calculator className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Chapters 7-9: Judgement</h3>
                  <p className="text-gray-600 dark:text-gray-400">A screening process you can repeat, how to read a dividend cut months before it lands, and the tax treatment that quietly costs the most</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                  <LineChart className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Chapters 10-12: Special cases and process</h3>
                  <p className="text-gray-600 dark:text-gray-400">Why REITs and MLPs cannot be analysed like ordinary shares, the ten mistakes that cost most, and a start-to-finish process</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">No stock tips, deliberately</h3>
                  <p className="text-gray-600 dark:text-gray-400">A PDF cannot update itself, so printed prices and yields go stale on your hard drive. The guide teaches the method and sends you to our live tools for current figures</p>
                </div>
              </div>
            </div>

            {/* A testimonial from "Jennifer M., Software Engineer, San Francisco"
                used to sit here, claiming the guide built her a $50K portfolio. She
                does not exist. An invented testimonial with a fabricated result is a
                false-claim problem in a financial context, which is the worst place
                to have one. Add a real one here if a reader ever sends one. */}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What Makes This Guide Different</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Actionable Steps</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    No fluff. Every chapter includes specific action items you can implement today.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Interactive Tools</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Access to all 5 calculators on this site, free, to model your exact situation.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Real Examples</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    3 complete portfolio examples with actual stocks, allocation, and expected returns.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Dividend Portfolio?</h2>
          <p className="text-xl mb-6 opacity-90">
            Free to download. No cost, no upsell.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            <a href="#top">Get Instant Access →</a>
          </Button>
        </div>
      </main>
    </>
  )
}
