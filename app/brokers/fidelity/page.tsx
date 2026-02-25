import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, XCircle, Award } from 'lucide-react'
import { TrustBadges } from '@/components/social-proof/TrustBadges'

export const metadata: Metadata = {
  title: 'Fidelity Review 2026 - Best Overall Broker for Dividend Investors',
  description: 'Complete Fidelity review: zero commissions, excellent research, fractional shares, and 24/7 customer service. Best overall choice for serious investors.',
  keywords: ['fidelity review', 'fidelity dividend investing', 'best broker overall']
}

export default function FidelityPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-600">BEST OVERALL</Badge>
            <h1 className="text-5xl font-bold mb-4">Fidelity Review 2026</h1>
            <p className="text-xl text-gray-600 mb-6">
              The gold standard for serious investors. World-class research, 24/7 support, and zero commissions.
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">$100</div>
                <div className="text-sm text-gray-600">Signup Bonus</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">4.9★</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Open Fidelity Account →
            </Button>
          </div>

          <TrustBadges />

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Fidelity is #1</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    Industry-Leading Research
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Access professional-grade research tools, stock screeners, and analysis reports typically reserved for institutional investors.
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Zero Commission Trading</CardTitle>
                </CardHeader>
                <CardContent>
                  $0 commissions on stocks, ETFs, and options. Free DRIP on all dividend-paying stocks with fractional share support.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>24/7 Customer Support</CardTitle>
                </CardHeader>
                <CardContent>
                  Talk to real humans anytime, day or night. Phone, chat, and in-person branch support available.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Complete Product Suite</CardTitle>
                </CardHeader>
                <CardContent>
                  Stocks, bonds, mutual funds, ETFs, options, CDs, and more. Everything you need in one place.
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Pros & Cons</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-green-200">
                <CardHeader><CardTitle className="text-green-600">Pros</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" /><span>Best-in-class research and tools</span></div>
                  <div className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" /><span>24/7 excellent customer service</span></div>
                  <div className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" /><span>Zero commissions on stocks/ETFs</span></div>
                  <div className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" /><span>3,500+ no-transaction-fee mutual funds</span></div>
                  <div className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" /><span>Strong mobile and desktop platforms</span></div>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader><CardTitle className="text-red-600">Cons</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex gap-2"><XCircle className="h-5 w-5 text-red-600 mt-0.5" /><span>Interface can feel dated</span></div>
                  <div className="flex gap-2"><XCircle className="h-5 w-5 text-red-600 mt-0.5" /><span>No automated portfolio management</span></div>
                  <div className="flex gap-2"><XCircle className="h-5 w-5 text-red-600 mt-0.5" /><span>Learning curve for beginners</span></div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Join 40+ Million Investors</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Fidelity manages over $12 trillion in assets. Trusted by professionals and beginners alike.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Open Fidelity Account - Get $100 Bonus →
            </Button>
          </section>
        </div>
      </main>
    </>
  )
}
