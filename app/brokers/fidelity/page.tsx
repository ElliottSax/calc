import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, XCircle, Award } from 'lucide-react'
import { TrustBadges } from '@/components/social-proof/TrustBadges'
import { BrokerCta, AffiliateNotice } from '@/components/affiliate/BrokerCta'

export const metadata: Metadata = {
  alternates: { canonical: 'https://dividendengines.com/brokers/fidelity' },
  title: 'Fidelity Review 2026 - Full-Service Broker for Dividend Investors',
  description: 'Fidelity review for dividend investors: $0 commissions on online stock and ETF trades, research tools, fractional shares, and phone support.',
  keywords: ['fidelity review', 'fidelity dividend investing', 'full service broker']
}

export default function FidelityPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-600">FULL-SERVICE BROKER</Badge>
            <h1 className="text-5xl font-bold mb-4">Fidelity Review 2026</h1>
            <p className="text-xl text-gray-600 mb-6">
              A full-service broker with research tools, phone support, and $0 commissions on online stock and ETF trades.
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">$0</div>
                <div className="text-sm text-gray-600">Stock &amp; ETF commissions</div>
              </div>
            </div>
            <BrokerCta
              brokerId="fidelity"
              brokerName="Fidelity Investments"
              baseUrl="https://www.fidelity.com"
              placement="broker-page-hero"
              className="bg-blue-600 hover:bg-blue-700"
            >
              Open Fidelity Account →
            </BrokerCta>
            <AffiliateNotice />
          </div>

          <TrustBadges />

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Dividend Investors Consider Fidelity</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    Research Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Stock screeners, analyst research reports, and planning tools are available to account holders.
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Zero Commission Trading</CardTitle>
                </CardHeader>
                <CardContent>
                  $0 commissions on online US stock and ETF trades (options carry per-contract fees). Dividend reinvestment and fractional shares are available; check Fidelity for the current details.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Customer Support</CardTitle>
                </CardHeader>
                <CardContent>
                  Phone and chat support, plus branch locations. Check Fidelity for current support hours.
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
                  <div className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" /><span>Broad research and planning tools</span></div>
                  <div className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" /><span>Phone and chat customer support</span></div>
                  <div className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" /><span>$0 commissions on online stock and ETF trades</span></div>
                  <div className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" /><span>Large selection of no-transaction-fee mutual funds</span></div>
                  <div className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" /><span>Mobile and desktop platforms</span></div>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader><CardTitle className="text-red-600">Cons</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex gap-2"><XCircle className="h-5 w-5 text-red-600 mt-0.5" /><span>Interface can feel dated</span></div>
                  <div className="flex gap-2"><XCircle className="h-5 w-5 text-red-600 mt-0.5" /><span>Self-directed accounts are hands-on; automated investing is a separate product</span></div>
                  <div className="flex gap-2"><XCircle className="h-5 w-5 text-red-600 mt-0.5" /><span>Learning curve for beginners</span></div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Look at Fidelity?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Fees, features and promotions change. Confirm the current terms on Fidelity&apos;s own site before you open an account.
            </p>
            <BrokerCta
              brokerId="fidelity"
              brokerName="Fidelity Investments"
              baseUrl="https://www.fidelity.com"
              placement="broker-page-bottom-cta"
              className="bg-blue-600 hover:bg-blue-700"
            >
              Open Fidelity Account →
            </BrokerCta>
            <AffiliateNotice />
          </section>
        </div>
      </main>
    </>
  )
}
