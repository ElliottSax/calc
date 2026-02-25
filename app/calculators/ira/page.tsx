import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { IRACalculator } from '@/components/calculators/IRACalculator'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { StructuredData } from '@/components/seo/StructuredData'
import { generateCalculatorSchema } from '@/lib/seo/structured-data'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://calc-bay-one.vercel.app'

export const metadata: Metadata = {
  title: 'IRA Calculator - Traditional vs Roth IRA Comparison 2026',
  description: 'Free IRA calculator comparing Traditional and Roth IRA. Calculate tax savings, retirement balances, and find the best IRA type for your situation.',
  keywords: ['ira calculator', 'roth ira calculator', 'traditional ira calculator', 'ira comparison', 'retirement calculator'],
  alternates: { canonical: `${baseUrl}/calculators/ira` }
}

const breadcrumbItems = [
  { name: 'Home', url: baseUrl },
  { name: 'Calculators', url: `${baseUrl}/calculators` },
  { name: 'IRA Calculator', url: `${baseUrl}/calculators/ira` }
]

export default function IRACalculatorPage() {
  const calculatorSchema = generateCalculatorSchema({
    name: 'IRA Calculator - Traditional vs Roth',
    description: 'Compare Traditional and Roth IRA to optimize your retirement tax strategy',
    url: `${baseUrl}/calculators/ira`
  })

  return (
    <>
      <StructuredData data={calculatorSchema} />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <BreadcrumbNav items={breadcrumbItems} />
          <div className="text-center mb-8 mt-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              IRA Calculator - Traditional vs Roth
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Compare Traditional and Roth IRA to find the best retirement strategy based on your tax situation.
              See exactly how much you'll save with each option.
            </p>
          </div>
          <IRACalculator />
        </div>
      </main>
    </>
  )
}
