import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, XCircle, TrendingUp, DollarSign, Zap, Shield, Users } from 'lucide-react'
import { TrustBadges } from '@/components/social-proof/TrustBadges'
import { CompactTestimonials } from '@/components/social-proof/Testimonials'

export const metadata: Metadata = {
  title: 'M1 Finance Review 2026 - Best Broker for DRIP & Dividend Investing',
  description: 'Complete M1 Finance review: automated portfolio management, free DRIP, fractional shares, and Pies for dividend investors. $150 bonus available.',
  keywords: ['m1 finance review', 'm1 finance dividend investing', 'best drip broker', 'automated investing']
}

export default function M1FinancePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-600">EDITOR'S CHOICE - Best for DRIP</Badge>
            <h1 className="text-5xl font-bold mb-4">M1 Finance Review 2026</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              The best broker for automated dividend investing with free DRIP, fractional shares, and intelligent portfolio management.
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">$150</div>
                <div className="text-sm text-gray-600">Signup Bonus</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">$0</div>
                <div className="text-sm text-gray-600">Commissions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">4.8★</div>
                <div className="text-sm text-gray-600">User Rating</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                Open M1 Finance Account →
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Compare All Brokers
              </Button>
            </div>
          </div>

          <TrustBadges />

          {/* Key Features */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Why M1 Finance for Dividend Investors</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    Automated Portfolio "Pies"
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Build custom portfolios with automated rebalancing. Perfect for dividend portfolios targeting specific allocations.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    Free Automatic DRIP
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  All dividends automatically reinvest with zero fees. Fractional shares mean every penny compounds immediately.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-purple-600" />
                    Dynamic Rebalancing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  New deposits automatically buy underweighted holdings. Maintain your target allocation effortlessly.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-orange-600" />
                    Borrowing (M1 Borrow)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Borrow against your portfolio at competitive rates (6-7%). Access liquidity without selling positions.
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Pros & Cons */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Pros & Cons</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-600">Pros</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>100% free automated DRIP with fractional shares</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Intelligent portfolio rebalancing (unique feature)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Zero commissions on all trades</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Clean, intuitive mobile and web interface</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>M1 Borrow: portfolio line of credit</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Expert Pies: pre-built portfolios for beginners</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-600">Cons</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                    <span>Limited trading windows (one morning window)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                    <span>No options trading</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                    <span>No mutual funds (ETFs only)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                    <span>Basic research tools (not for active traders)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                    <span>$100 minimum to start (higher than some competitors)</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Who It's Best For */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Who Should Choose M1 Finance?</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-blue-50 dark:bg-blue-900/20">
                <CardHeader>
                  <CardTitle className="text-lg">✅ Perfect For</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div>• Long-term dividend investors</div>
                  <div>• DRIP strategy enthusiasts</div>
                  <div>• Buy-and-hold investors</div>
                  <div>• Portfolio automation seekers</div>
                  <div>• Hands-off investors</div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 dark:bg-green-900/20">
                <CardHeader>
                  <CardTitle className="text-lg">⚡ Great For</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div>• Index fund investors</div>
                  <div>• Retirement savers</div>
                  <div>• Tax-loss harvesters</div>
                  <div>• Portfolio rebalancers</div>
                  <div>• Robo-advisor users</div>
                </CardContent>
              </Card>

              <Card className="bg-red-50 dark:bg-red-900/20">
                <CardHeader>
                  <CardTitle className="text-lg">❌ Not Ideal For</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div>• Day traders</div>
                  <div>• Options traders</div>
                  <div>• Active stock pickers</div>
                  <div>• Crypto traders</div>
                  <div>• Mutual fund investors</div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">M1 Finance vs Competitors</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="p-3 text-left">Feature</th>
                    <th className="p-3 text-center">M1 Finance</th>
                    <th className="p-3 text-center">Fidelity</th>
                    <th className="p-3 text-center">Robinhood</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Commission-Free</td>
                    <td className="p-3 text-center">✅</td>
                    <td className="p-3 text-center">✅</td>
                    <td className="p-3 text-center">✅</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Auto DRIP</td>
                    <td className="p-3 text-center">✅</td>
                    <td className="p-3 text-center">✅</td>
                    <td className="p-3 text-center">❌</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Fractional Shares</td>
                    <td className="p-3 text-center">✅</td>
                    <td className="p-3 text-center">✅</td>
                    <td className="p-3 text-center">✅</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Auto Rebalancing</td>
                    <td className="p-3 text-center text-green-600 font-bold">✅</td>
                    <td className="p-3 text-center">❌</td>
                    <td className="p-3 text-center">❌</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Portfolio Pies</td>
                    <td className="p-3 text-center text-green-600 font-bold">✅</td>
                    <td className="p-3 text-center">❌</td>
                    <td className="p-3 text-center">❌</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Research Tools</td>
                    <td className="p-3 text-center">Basic</td>
                    <td className="p-3 text-center text-green-600 font-bold">Excellent</td>
                    <td className="p-3 text-center">Basic</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Testimonials */}
          <CompactTestimonials />

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8 text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Dividend Investing?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Join 500,000+ investors using M1 Finance for automated portfolio management and free DRIP.
              Get $150 bonus when you fund your account.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-12">
              Open M1 Finance Account - Get $150 Bonus →
            </Button>
            <p className="text-sm text-gray-500 mt-4">No minimum deposit • Free DRIP • Cancel anytime</p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Is M1 Finance really free?',
                  a: 'Yes, M1 Finance charges zero commissions on stock and ETF trades. Their revenue comes from M1 Plus subscriptions ($125/year), M1 Borrow interest, and securities lending.'
                },
                {
                  q: 'What are M1 Finance Pies?',
                  a: 'Pies are M1\'s unique portfolio feature. You create a "pie" with your desired allocation (e.g., 60% stocks, 40% bonds), and M1 automatically maintains those percentages when you add money or receive dividends.'
                },
                {
                  q: 'Does M1 Finance automatically reinvest dividends?',
                  a: 'Yes! M1 automatically reinvests all dividends with fractional shares at no cost. Every penny of your dividends goes back to work immediately.'
                },
                {
                  q: 'Can I use M1 Finance for retirement accounts?',
                  a: 'Absolutely. M1 supports Traditional IRA, Roth IRA, SEP IRA, and even 401(k) rollovers. Many users love M1 for automated retirement investing.'
                }
              ].map((faq, i) => (
                <details key={i} className="group border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <summary className="font-semibold cursor-pointer list-none flex justify-between">
                    <span>{faq.q}</span>
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
