import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import {
  Star,
  Check,
  X,
  ExternalLink,
  Shield,
  TrendingUp,
  Award,
  DollarSign,
  Smartphone,
  Headphones,
  BookOpen,
  BarChart3,
  Clock
} from 'lucide-react'
import { getBrokerBySlug, getAllBrokers } from '@/lib/data/broker-details'

interface BrokerPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const brokers = getAllBrokers()
  return brokers.map((broker) => ({
    slug: broker.slug,
  }))
}

export async function generateMetadata({ params }: BrokerPageProps): Promise<Metadata> {
  const broker = getBrokerBySlug(params.slug)

  if (!broker) {
    return { title: 'Broker Not Found' }
  }

  return {
    title: `${broker.name} Review 2026 - ${broker.tagline}`,
    description: `Complete review of ${broker.name} for dividend investors. Fees, features, pros & cons. ${broker.rating}/5 rating from ${broker.reviewCount.toLocaleString()} reviews.`,
    keywords: `${broker.name} review, ${broker.name} dividend investing, best broker for dividends, ${broker.name} DRIP`,
  }
}

export default function BrokerPage({ params }: BrokerPageProps) {
  const broker = getBrokerBySlug(params.slug)

  if (!broker) {
    notFound()
  }

  const ratingColor = broker.rating >= 4.7 ? 'text-green-600' : broker.rating >= 4.3 ? 'text-blue-600' : 'text-yellow-600'

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        {/* Hero */}
        <section className="py-16 pt-24 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Badge variant="secondary" className="mb-4">Broker Review • Updated February 2026</Badge>
              <h1 className="text-4xl md:text-5xl font-black mb-4">
                {broker.name} Review
              </h1>
              <p className="text-2xl text-slate-200 mb-6">
                {broker.tagline}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-6 w-6 ${
                        i < Math.floor(broker.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-400'
                      }`}
                    />
                  ))}
                </div>
                <div>
                  <div className={`text-3xl font-bold ${ratingColor}`}>
                    {broker.rating}/5
                  </div>
                  <div className="text-sm text-slate-300">
                    {broker.reviewCount.toLocaleString()} reviews
                  </div>
                </div>
              </div>

              {/* CTA */}
              {broker.currentPromo && (
                <Card className="bg-gradient-to-r from-green-500 to-emerald-500 border-0 mb-6">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div>
                        <div className="text-white font-bold text-xl mb-1">{broker.currentPromo.title}</div>
                        <div className="text-green-100">{broker.currentPromo.description}</div>
                      </div>
                      <a href={broker.affiliateLink} target="_blank" rel="noopener noreferrer">
                        <Button size="lg" variant="secondary" className="whitespace-nowrap">
                          Claim Offer <ExternalLink className="ml-2 h-5 w-5" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              )}

              {!broker.currentPromo && (
                <a href={broker.affiliateLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="secondary">
                    Open {broker.name} Account <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            {/* Quick Summary */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Quick Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">{broker.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {broker.bestFor.map((item, index) => (
                    <Badge key={index} variant="secondary">{item}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fees */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-6 w-6" />
                  Fees & Costs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <FeeItem label="Trading Commission" value={broker.fees.tradingCommission} />
                  <FeeItem label="Account Minimum" value={broker.fees.accountMinimum} />
                  <FeeItem label="Account Fees" value={broker.fees.accountFees} />
                  <FeeItem label="DRIP Fees" value={broker.fees.dripFees} />
                  {broker.fees.transferFees && (
                    <FeeItem label="Transfer Fees" value={broker.fees.transferFees} />
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Features & Ratings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <FeatureRating
                    icon={<Check />}
                    label="DRIP Support"
                    value={broker.features.dripSupport ? 'Yes (Automatic)' : 'No'}
                    isGood={broker.features.dripSupport}
                  />
                  <FeatureRating
                    icon={<BarChart3 />}
                    label="Fractional Shares"
                    value={broker.features.fractionalShares ? 'Yes' : 'No'}
                    isGood={broker.features.fractionalShares}
                  />
                  <FeatureRating
                    icon={<TrendingUp />}
                    label="Research Tools"
                    value={broker.features.researchTools}
                  />
                  <FeatureRating
                    icon={<Smartphone />}
                    label="Mobile App"
                    value={broker.features.mobileApp}
                  />
                  <FeatureRating
                    icon={<Headphones />}
                    label="Customer Support"
                    value={broker.features.customerSupport}
                  />
                  <FeatureRating
                    icon={<BookOpen />}
                    label="Educational Resources"
                    value={broker.features.educationalResources}
                  />
                </div>
              </CardContent>
            </Card>

            {/* User Experience Scores */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {broker.easeOfUse}/5
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Ease of Use</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    {broker.platformSpeed}/5
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Platform Speed</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {broker.reliability}/5
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Reliability</div>
                </CardContent>
              </Card>
            </div>

            {/* Pros & Cons */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-700 dark:text-green-400">Pros</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {broker.pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-red-700 dark:text-red-400">Cons</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {broker.cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Perfect For */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-green-50 dark:bg-green-950">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-green-600" />
                    Perfect For
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {broker.idealFor.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-red-50 dark:bg-red-950">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <X className="h-5 w-5 text-red-600" />
                    Not Ideal For
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {broker.notIdealFor.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Final CTA */}
            <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
              <CardContent className="pt-8 pb-8 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Start Dividend Investing with {broker.name}?
                </h2>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Join thousands of dividend investors using {broker.name} to build wealth through
                  automatic dividend reinvestment.
                </p>
                <a href={broker.affiliateLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="secondary">
                    Open {broker.name} Account <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                {broker.currentPromo && (
                  <p className="text-sm text-blue-100 mt-4">
                    {broker.currentPromo.title} • {broker.currentPromo.description}
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Compare to Others */}
            <div className="mt-8 text-center">
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Not sure if {broker.name} is right for you?
              </p>
              <Link href="/about#brokers">
                <Button variant="outline">
                  Compare All Brokers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

// Helper Components
function FeeItem({ label, value }: { label: string; value: string }) {
  const isFree = value === '$0' || value.includes('$0')
  return (
    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
      <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">{label}</div>
      <div className={`text-lg font-bold ${isFree ? 'text-green-600' : ''}`}>
        {value}
      </div>
    </div>
  )
}

function FeatureRating({
  icon,
  label,
  value,
  isGood
}: {
  icon: React.ReactNode
  label: string
  value: string
  isGood?: boolean
}) {
  const getColor = () => {
    if (isGood !== undefined) return isGood ? 'text-green-600' : 'text-red-600'
    if (value === 'Excellent') return 'text-green-600'
    if (value === 'Good') return 'text-blue-600'
    return 'text-slate-600'
  }

  return (
    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
      <div className="flex items-center gap-3">
        <div className="text-slate-600 dark:text-slate-400">{icon}</div>
        <span className="font-medium">{label}</span>
      </div>
      <span className={`font-bold ${getColor()}`}>{value}</span>
    </div>
  )
}
