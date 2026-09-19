"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Check, 
  X, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp,
  Info
} from 'lucide-react'
import { BROKER_AFFILIATES_EXPANDED } from '@/lib/data/broker-affiliates-expanded'
import { buildAffiliateUrl } from '@/lib/affiliate/config'
import { trackAffiliateClick } from '@/lib/analytics/tracking'
import { useExperiment } from '@/hooks/use-experiment'
import type { BrokerComparison } from '@/types/monetization'

export function BrokerComparisonTable() {
  const [expandedBroker, setExpandedBroker] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<'rating' | 'name'>('rating')
  const { variant, trackConversion } = useExperiment('brokerCTA')

  const sortedBrokers = [...BROKER_AFFILIATES_EXPANDED].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating
    return a.name.localeCompare(b.name)
  })

  const handleBrokerClick = (broker: BrokerComparison) => {
    // Guard clause for missing affiliate link
    if (!broker.affiliateLink) {
      console.warn('No affiliate link available for broker:', broker.name)
      return
    }

    // Track affiliate click
    trackAffiliateClick({
      merchantId: broker.id,
      merchantName: broker.name,
      category: 'broker',
      placement: 'comparison-table'
    })

    // Track A/B test conversion
    trackConversion('broker_click', 1)

    // Open in new tab (tracking param comes from env config, never a fake default)
    window.open(
      buildAffiliateUrl(broker.id, broker.affiliateLink.url),
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <div className="space-y-6">
      {/* Affiliate Disclosure */}
      <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-2">
            <Info className="h-5 w-5 text-blue-600 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-blue-900 dark:text-blue-100">Affiliate Disclosure</p>
              {/*
                The previous copy claimed the rankings were "based on extensive research
                and user feedback". There is no user feedback: this site collects none,
                and the star ratings that used to appear below were hand-written
                constants (removed -- see the comment in the broker header). Claiming a
                feedback-based methodology next to a paid link is the same
                deceptive-endorsement exposure as the fake ratings themselves, so the
                copy now describes what the ordering actually is.
              */}
              <p className="text-blue-700 dark:text-blue-200 mt-1">
                We may earn a commission when you open an account through links on this page.
                It never changes the order below, which is our own editorial ranking based on
                the published account features shown here &mdash; minimum deposit, commissions,
                fractional shares and dividend-reinvestment support. It is not a user-review
                score, and we do not collect user reviews.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparison Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Best Brokers for Dividend Investing</CardTitle>
            <div className="flex gap-2">
              <Button
                variant={sortBy === 'rating' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSortBy('rating')}
              >
                Our ranking
              </Button>
              <Button
                variant={sortBy === 'name' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSortBy('name')}
              >
                By Name
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sortedBrokers.map((broker) => (
              <div
                key={broker.id}
                className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
              >
                {/* Broker Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-gray-500">Logo</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{broker.name}</h3>
                      {/*
                        The star row and "(N reviews)" count that used to sit here were
                        fabricated: `rating` and `reviewCount` in
                        lib/data/broker-affiliates-expanded.ts are hand-written constants
                        (M1 Finance shipped live as "4.8 (12,500 reviews)"), and this site
                        has never collected a single user review. Presenting invented
                        numbers as aggregated user reviews immediately above a monetized
                        CTA is a deceptive-endorsement problem under the FTC Endorsement
                        Guides, not a cosmetic one -- and it is the third instance of this
                        exact pattern in this portfolio, after the invented
                        `aggregateRating` in this repo's app/layout.tsx and the "347 people
                        applied this week" counter on cardclassroom.com.

                        `rating` is kept as the ordering key only. That is defensible as an
                        editorial ranking, which is how it is now labelled -- see the sort
                        control above and the note below the CTA. Restoring a real star
                        rating needs a real source (collected reviews, or a cited
                        third-party score with a link), not these constants.
                      */}
                      <p className="text-sm text-gray-600 mt-1">
                        Best for: <span className="font-medium">{broker.bestFor}</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    {broker.affiliateLink?.featured && (
                      <Badge className="mb-2" variant="default">
                        Featured Partner
                      </Badge>
                    )}
                    <Button
                      onClick={() => handleBrokerClick(broker)}
                      className="flex items-center gap-2"
                      disabled={!broker.affiliateLink}
                    >
                      {variant?.text || 'Open Account'}
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                  <FeatureItem
                    label="Min Deposit"
                    value={broker.features.minDeposit === 0 ? '$0' : `$${broker.features.minDeposit}`}
                    positive={broker.features.minDeposit === 0}
                  />
                  <FeatureItem
                    label="Commission-Free"
                    value={broker.features.commissionFree}
                    positive={broker.features.commissionFree}
                  />
                  <FeatureItem
                    label="Fractional Shares"
                    value={broker.features.fractionalShares}
                    positive={broker.features.fractionalShares}
                  />
                  <FeatureItem
                    label="DRIP"
                    value={broker.features.dripSupport ?? false}
                    positive={broker.features.dripSupport ?? false}
                  />
                  <FeatureItem
                    label="Int'l Stocks"
                    value={broker.features.internationalStocks ?? false}
                    positive={broker.features.internationalStocks ?? false}
                  />
                </div>

                {/* Expandable Details */}
                <button
                  className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
                  onClick={() => setExpandedBroker(
                    expandedBroker === broker.id ? null : broker.id
                  )}
                >
                  {expandedBroker === broker.id ? (
                    <>
                      <ChevronUp className="h-4 w-4" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4" />
                      Show Pros & Cons
                    </>
                  )}
                </button>

                {expandedBroker === broker.id && (
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Pros</h4>
                      <ul className="space-y-1">
                        {broker.pros.map((pro, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-600 mt-0.5" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-700 mb-2">Cons</h4>
                      <ul className="space-y-1">
                        {broker.cons.map((con, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <X className="h-4 w-4 text-red-600 mt-0.5" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function FeatureItem({ 
  label, 
  value, 
  positive 
}: { 
  label: string
  value: boolean | string
  positive: boolean 
}) {
  return (
    <div className="text-center">
      <p className="text-xs text-gray-600 mb-1">{label}</p>
      {typeof value === 'boolean' ? (
        value ? (
          <Check className="h-5 w-5 text-green-600 mx-auto" />
        ) : (
          <X className="h-5 w-5 text-gray-400 mx-auto" />
        )
      ) : (
        <p className={`font-medium ${positive ? 'text-green-600' : ''}`}>
          {value}
        </p>
      )}
    </div>
  )
}