import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'
import { InvestmentReturnCalculator } from '@/components/calculators/InvestmentReturnCalculator'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { StructuredData } from '@/components/seo/StructuredData'
import { SimpleUsageCounter } from '@/components/social-proof/UsageCounter'
import { CompactTrustBadges } from '@/components/social-proof/TrustBadges'
import { generateCalculatorSchema } from '@/lib/seo/structured-data'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://calc-bay-one.vercel.app'

export const metadata: Metadata = {
  title: 'Investment Return Calculator - Calculate ROI & Annualized Returns 2026',
  description: 'Free investment return calculator. Calculate total return, annualized return, and profit/loss on stocks, funds, and investments.',
  keywords: ['investment return calculator', 'roi calculator', 'annualized return calculator', 'investment profit calculator'],
  alternates: { canonical: `${baseUrl}/calculators/investment-return` }
}

const breadcrumbItems = [
  { name: 'Home', url: baseUrl },
  { name: 'Calculators', url: `${baseUrl}/calculators` },
  { name: 'Investment Return', url: `${baseUrl}/calculators/investment-return` }
]

export default function InvestmentReturnCalculatorPage() {
  const calculatorSchema = generateCalculatorSchema({
    name: 'Investment Return Calculator',
    description: 'Calculate investment returns, ROI, and annualized performance',
    url: `${baseUrl}/calculators/investment-return`
  })

  return (
    <>
      <StructuredData data={calculatorSchema} />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <BreadcrumbNav items={breadcrumbItems} />
          <div className="text-center mb-8 mt-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Investment Return Calculator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Calculate your investment returns, ROI, and annualized performance to track portfolio success.
            </p>
          </div>

          <SimpleUsageCounter />
          <CompactTrustBadges />

          <InvestmentReturnCalculator />
      <section id="brokers" className="py-12 border-t border-gray-200 dark:border-gray-700 mt-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Ready to start investing?</h2>
          <p className="text-muted-foreground mb-6">Pick a broker that makes investing simple.</p>
          <BrokerComparisonTable />
        </div>
      </section>

        </div>
      </main>
    </>
  )
}
