import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { BrokerComparisonTool } from '@/components/tools/BrokerComparisonTool'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { SimpleUsageCounter } from '@/components/social-proof/UsageCounter'
import { CompactTrustBadges } from '@/components/social-proof/TrustBadges'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://calc-bay-one.vercel.app'

export const metadata: Metadata = {
  title: 'Broker Comparison Tool - Compare Top Investment Brokers 2026',
  description: 'Compare top investment brokers side-by-side. Free interactive tool to find the best broker for dividend investing, DRIP, research, and more.',
  keywords: ['broker comparison', 'best broker', 'compare brokers', 'investment broker comparison tool']
}

const breadcrumbItems = [
  { name: 'Home', url: baseUrl },
  { name: 'Tools', url: `${baseUrl}/tools` },
  { name: 'Broker Comparison', url: `${baseUrl}/tools/compare` }
]

export default function BrokerComparisonPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <BreadcrumbNav items={breadcrumbItems} />
          <div className="text-center mb-8 mt-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Broker Comparison Tool</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Compare top investment brokers side-by-side and get personalized recommendations.
            </p>
          </div>
          <SimpleUsageCounter />
          <CompactTrustBadges />
          <BrokerComparisonTool />
        </div>
      </main>
    </>
  )
}
