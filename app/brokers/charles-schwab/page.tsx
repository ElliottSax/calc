import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Badge } from '@/components/ui/badge'
import { BrokerCta, AffiliateNotice } from '@/components/affiliate/BrokerCta'

export const metadata: Metadata = {
  alternates: { canonical: 'https://dividendengines.com/brokers/charles-schwab' },
  title: 'Charles Schwab Review 2026 - Full-Service Broker',
  description: 'Charles Schwab review: full-service broker with banking, $0 commissions on stock and ETF trades, research tools and local branches.',
  keywords: ['charles schwab review', 'schwab dividend investing', 'full service broker']
}

export default function CharlesSchwabPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-orange-600">FULL-SERVICE BROKER</Badge>
          <h1 className="text-5xl font-bold mb-4">Charles Schwab Review 2026</h1>
          <p className="text-xl text-gray-600 mb-6">
            Banking, investing, and retirement planning in one place.
          </p>
          <BrokerCta
            brokerId="charles-schwab"
            brokerName="Charles Schwab"
            baseUrl="https://www.schwab.com"
            placement="broker-page-hero"
            className="bg-blue-600"
          >
            Open Charles Schwab Account →
          </BrokerCta>
          <AffiliateNotice />
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <h2>Why Schwab Stands Out</h2>
          <p>Schwab is one of the largest US brokerages, with a wide product range and a branch network.</p>
          <h3>Key Benefits</h3>
          <ul>
            <li>$0 commissions on online stock and ETF trades (options carry per-contract fees)</li>
            <li>Schwab Intelligent Portfolios robo-advisor</li>
            <li>Local branches for in-person support</li>
            <li>Banking available alongside your brokerage account</li>
            <li>thinkorswim platform for advanced traders</li>
            <li>Research and educational resources</li>
          </ul>
          <p>Fees and features change. Confirm the current terms on Schwab&apos;s own site.</p>
        </div>
      </main>
    </>
  )
}
