import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { SavingsCalculator } from '@/components/calculators/SavingsCalculator'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { StructuredData } from '@/components/seo/StructuredData'
import { SimpleUsageCounter } from '@/components/social-proof/UsageCounter'
import { CompactTrustBadges } from '@/components/social-proof/TrustBadges'
import { generateCalculatorSchema, generateFAQSchema } from '@/lib/seo/structured-data'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://calc-bay-one.vercel.app'

export const metadata: Metadata = {
  title: 'Savings Calculator - Calculate How to Reach Your Savings Goal 2026',
  description: 'Free savings goal calculator. Calculate how long it takes to reach your savings goal with monthly contributions and interest. Get personalized recommendations for emergency funds, down payments, and more.',
  keywords: [
    'savings calculator',
    'savings goal calculator',
    'how much to save calculator',
    'monthly savings calculator',
    'emergency fund calculator',
    'down payment calculator',
    'financial goal calculator',
    'savings plan calculator'
  ],
  openGraph: {
    title: 'Savings Calculator - Reach Your Financial Goals Faster',
    description: 'Calculate how long it will take to reach your savings goal. Get personalized recommendations and track your progress.',
    type: 'website',
    url: `${baseUrl}/calculators/savings`,
    siteName: 'Dividend Calculator Hub'
  },
  alternates: {
    canonical: `${baseUrl}/calculators/savings`
  }
}

const breadcrumbItems = [
  { name: 'Home', url: baseUrl },
  { name: 'Calculators', url: `${baseUrl}/calculators` },
  { name: 'Savings Calculator', url: `${baseUrl}/calculators/savings` }
]

const faqs = [
  {
    question: 'How much should I save each month?',
    answer: 'A good rule of thumb is the 50/30/20 budget: allocate 20% of your after-tax income to savings and debt repayment. For someone earning $60,000/year ($4,000/month after tax), that\'s $800/month in savings.'
  },
  {
    question: 'What is a realistic savings goal?',
    answer: 'Realistic goals depend on your income and timeline. Common goals: $10,000 emergency fund (6-12 months), $30,000 car (2-3 years), $60,000 home down payment (5-7 years). Start with what you can afford and increase gradually.'
  },
  {
    question: 'Where should I keep my savings?',
    answer: 'For short-term goals (0-2 years), use a high-yield savings account with 4-5% APY. For medium-term (2-5 years), consider CDs or Treasury bonds. For long-term (5+ years), balanced portfolios or index funds offer higher growth potential.'
  },
  {
    question: 'How can I save money faster?',
    answer: 'Automate your savings, cut unnecessary subscriptions, reduce dining out, negotiate bills, sell unused items, pick up a side hustle, and save all windfalls (bonuses, tax refunds). Small changes compound significantly over time.'
  },
  {
    question: 'Should I save or pay off debt first?',
    answer: 'Build a $1,000 emergency fund first, then focus on high-interest debt (credit cards). Once that\'s paid, simultaneously build a 3-6 month emergency fund while investing for long-term goals. Balance is key.'
  }
]

export default function SavingsCalculatorPage() {
  const calculatorSchema = generateCalculatorSchema({
    name: 'Savings Goal Calculator',
    description: 'Calculate how long it will take to reach your savings goal with regular monthly contributions',
    url: `${baseUrl}/calculators/savings`
  })

  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <StructuredData data={calculatorSchema} />
      <StructuredData data={faqSchema} />

      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <BreadcrumbNav items={breadcrumbItems} />

          <div className="text-center mb-8 mt-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Savings Goal Calculator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Calculate how long it will take to reach your savings goal with regular monthly contributions.
              Get personalized recommendations and strategies to accelerate your savings.
            </p>
          </div>

          <SimpleUsageCounter />
          <CompactTrustBadges />

          <SavingsCalculator />

          {/* FAQ Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-blue-500 transition-colors"
                >
                  <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                    <span>{faq.question}</span>
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
