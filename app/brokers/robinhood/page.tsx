import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Badge } from '@/components/ui/badge'
import { BrokerCta, AffiliateNotice } from '@/components/affiliate/BrokerCta'

export const metadata: Metadata = {
  alternates: { canonical: 'https://dividendengines.com/brokers/robinhood' },
  title: 'Robinhood Review 2026 - Mobile-First Investing for Beginners',
  description: 'Robinhood review: simple mobile app, fractional shares and $0 commissions on stock and ETF trades for first-time investors.',
  keywords: ['robinhood review', 'beginner investing app', 'mobile trading']
}

export default function RobinhoodPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-pink-600">BEGINNER-FRIENDLY</Badge>
          <h1 className="text-5xl font-bold mb-4">Robinhood Review 2026</h1>
          <p className="text-xl text-gray-600 mb-6">
            A simple, mobile-first way to start investing, with $0 commissions on stock and ETF trades and fractional shares.
          </p>
          <BrokerCta
            brokerId="robinhood"
            brokerName="Robinhood"
            baseUrl="https://robinhood.com"
            placement="broker-page-hero"
            className="bg-green-600"
          >
            Open Robinhood Account →
          </BrokerCta>
          <AffiliateNotice />
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <h2>Investing Made Simple</h2>
          <p>Robinhood popularized commission-free trading with an easy-to-use mobile app.</p>
          <h3>Good for New Investors</h3>
          <ul>
            <li>Simple mobile-first interface</li>
            <li>No account minimum to get started</li>
            <li>Fractional shares, so you can invest small amounts in any eligible stock</li>
            <li>$0 commissions on stock and ETF trades</li>
            <li>Extended hours trading</li>
          </ul>
          <h3>Limitations</h3>
          <ul>
            <li>Limited research tools compared with full-service brokers</li>
            <li>Check Robinhood&apos;s current dividend-reinvestment options if DRIP matters to you</li>
            <li>Not built around dividend-income portfolios</li>
          </ul>
          <p>Features and terms change. Confirm the current details on Robinhood&apos;s own site.</p>
        </div>
      </main>
    </>
  )
}
