import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BrokerCta, AffiliateNotice } from '@/components/affiliate/BrokerCta'

// Index of the broker reviews. The wash-sale calculator and other pages link here;
// it used to 404. No bonuses, ratings, user totals or awards: nothing on this site sources them.

export const metadata: Metadata = {
  title: { absolute: 'Broker Reviews for Dividend Investors | Dividend Engines' },
  description:
    'Reviews of brokers that suit dividend investors: M1 Finance, Fidelity, Charles Schwab, Robinhood and Wealthfront. Features, fees and who each one fits.',
  alternates: { canonical: 'https://dividendengines.com/brokers' },
}

const BROKERS = [
  { slug: 'm1-finance', name: 'M1 Finance', baseUrl: 'https://www.m1finance.com', blurb: 'Automated "Pies" portfolios with free DRIP and fractional shares.' },
  { slug: 'fidelity', name: 'Fidelity Investments', baseUrl: 'https://www.fidelity.com', blurb: 'Full-service broker with fractional shares and DRIP on eligible holdings.' },
  { slug: 'charles-schwab', name: 'Charles Schwab', baseUrl: 'https://www.schwab.com', blurb: 'Full-service broker with research tools and Schwab Stock Slices.' },
  { slug: 'robinhood', name: 'Robinhood', baseUrl: 'https://robinhood.com', blurb: 'Mobile-first broker with commission-free stock trades and fractional shares.' },
  { slug: 'wealthfront', name: 'Wealthfront', baseUrl: 'https://www.wealthfront.com', blurb: 'Automated investing with a hands-off, managed approach.' },
]

export default function BrokersIndexPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">Broker Reviews for Dividend Investors</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
            Where you hold your dividend stocks matters for fees, reinvestment (DRIP) and tax reporting. Read a review, then check the broker's own site for current terms.
          </p>
          <AffiliateNotice />
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {BROKERS.map((b) => (
              <Card key={b.slug}>
                <CardHeader>
                  <CardTitle>{b.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">{b.blurb}</p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild variant="outline">
                      <Link href={`/brokers/${b.slug}`}>Read the review</Link>
                    </Button>
                    <BrokerCta
                      brokerId={b.slug}
                      brokerName={b.name}
                      baseUrl={b.baseUrl}
                      placement="brokers-index"
                      size="default"
                      variant="secondary"
                    >
                      Visit {b.name}
                    </BrokerCta>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-8">
            This is general information, not investment advice. Check each broker's current fees and terms before you open an account.
          </p>
        </div>
      </main>
    </>
  )
}
