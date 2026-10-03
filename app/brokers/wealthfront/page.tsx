import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Badge } from '@/components/ui/badge'
import { BrokerCta, AffiliateNotice } from '@/components/affiliate/BrokerCta'

export const metadata: Metadata = {
  title: 'Wealthfront Review 2026 - Robo-Advisor for Passive Investors',
  description: 'Wealthfront review: automated investing, tax-loss harvesting, and a high-yield cash account for hands-off investors.',
  keywords: ['wealthfront review', 'robo advisor', 'automated investing']
}

export default function WealthfrontPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-600">ROBO-ADVISOR</Badge>
          <h1 className="text-5xl font-bold mb-4">Wealthfront Review 2026</h1>
          <p className="text-xl text-gray-600 mb-6">
            Set it and forget it. Automated portfolio management with tax-loss harvesting and a high-yield cash account.
          </p>
          <BrokerCta
            brokerId="wealthfront"
            brokerName="Wealthfront"
            baseUrl="https://www.wealthfront.com"
            placement="broker-page-hero"
            className="bg-blue-600"
          >
            Open Wealthfront Account →
          </BrokerCta>
          <AffiliateNotice />
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <h2>Perfect for Hands-Off Investors</h2>
          <p>Wealthfront&apos;s robo-advisor automatically builds and maintains a diversified portfolio based on your risk tolerance.</p>
          <h3>Key Features</h3>
          <ul>
            <li>Automated tax-loss harvesting</li>
            <li>High-yield cash account (the rate changes; check Wealthfront for the current APY)</li>
            <li>An annual advisory fee instead of per-trade commissions (check Wealthfront for the current fee schedule)</li>
            <li>Auto-rebalancing and dividend reinvestment</li>
          </ul>
          <p>
            Rates, fees and promotions change often. Confirm the current terms on Wealthfront&apos;s own site before you open an account.
          </p>
        </div>
      </main>
    </>
  )
}
