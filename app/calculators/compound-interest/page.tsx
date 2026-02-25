import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { CompoundInterestCalculator } from '@/components/calculators/CompoundInterestCalculator'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { StructuredData } from '@/components/seo/StructuredData'
import { generateCalculatorSchema, generateFAQSchema } from '@/lib/seo/structured-data'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://calc-bay-one.vercel.app'

export const metadata: Metadata = {
  title: 'Compound Interest Calculator - Free Investment Growth Calculator 2026',
  description: 'Free compound interest calculator with monthly contributions. Calculate investment growth, compare compounding frequencies, and see detailed yearly breakdowns. Start planning your financial future today.',
  keywords: [
    'compound interest calculator',
    'investment calculator',
    'savings calculator',
    'compound growth calculator',
    'interest calculator',
    'financial calculator',
    'retirement calculator',
    'wealth building calculator'
  ],
  openGraph: {
    title: 'Compound Interest Calculator - Calculate Investment Growth',
    description: 'Free compound interest calculator. See how your money grows with regular contributions and compound interest over time.',
    type: 'website',
    url: `${baseUrl}/calculators/compound-interest`,
    siteName: 'Dividend Calculator Hub',
    images: [
      {
        url: '/og-compound-interest.png',
        width: 1200,
        height: 630,
        alt: 'Compound Interest Calculator'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compound Interest Calculator - Free Tool',
    description: 'Calculate how your money grows with compound interest and regular monthly contributions.',
    images: ['/og-compound-interest.png']
  },
  alternates: {
    canonical: `${baseUrl}/calculators/compound-interest`
  }
}

const breadcrumbItems = [
  { name: 'Home', url: baseUrl },
  { name: 'Calculators', url: `${baseUrl}/calculators` },
  { name: 'Compound Interest', url: `${baseUrl}/calculators/compound-interest` }
]

const faqs = [
  {
    question: 'What is compound interest?',
    answer: 'Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. It allows your money to grow exponentially over time as you earn "interest on interest."'
  },
  {
    question: 'How does compound interest differ from simple interest?',
    answer: 'Simple interest only earns returns on your initial investment, while compound interest earns returns on both your principal AND all interest earned. This makes compound interest much more powerful for long-term wealth building.'
  },
  {
    question: 'What is a good compound interest rate?',
    answer: 'It depends on the investment type. High-yield savings accounts offer 4-5% APY, index funds historically return 7-10%, and dividend stocks with DRIP can provide 6-8% total returns. Any rate above inflation (typically 2-3%) helps grow your wealth.'
  },
  {
    question: 'How often should interest compound?',
    answer: 'More frequent compounding is better. Daily compounding (365 times per year) produces slightly higher returns than monthly (12 times), quarterly (4 times), or annual (1 time) compounding, though the difference decreases as the interest rate increases.'
  },
  {
    question: 'Should I make monthly contributions?',
    answer: 'Yes! Regular monthly contributions dramatically accelerate wealth building. Even small amounts ($100-500/month) can grow to substantial sums over 20-30 years when combined with compound interest.'
  },
  {
    question: 'What are the best investments for compound growth?',
    answer: 'Index funds (S&P 500), dividend stocks with DRIP, high-yield savings accounts, and bonds all offer compound growth. Choose based on your risk tolerance and time horizon. Longer time horizons can handle more volatility for higher returns.'
  },
  {
    question: 'How much can I earn with compound interest?',
    answer: 'It depends on your principal, contribution amount, interest rate, and time. For example, $10,000 initial + $200/month at 7% for 20 years = $113,000. The longer you invest and the higher the rate, the more you earn exponentially.'
  },
  {
    question: 'When should I start investing for compound interest?',
    answer: 'As early as possible! Time is the most powerful factor in compound interest. Starting at age 25 vs 35 can result in 2-3x more wealth at retirement, even with the same contribution amounts.'
  },
  {
    question: 'Are compound interest earnings taxable?',
    answer: 'Yes, interest earnings are typically taxable as ordinary income. However, investing in tax-advantaged accounts like Roth IRA (tax-free growth) or 401(k) (tax-deferred) can minimize or eliminate taxes on compound interest.'
  },
  {
    question: 'Can I lose money with compound interest?',
    answer: 'With savings accounts and bonds, your principal is generally safe. With stocks and index funds, short-term losses are possible, but historical data shows positive returns over 10+ year periods. Diversification and long time horizons minimize risk.'
  }
]

export default function CompoundInterestCalculatorPage() {
  const calculatorSchema = generateCalculatorSchema({
    name: 'Compound Interest Calculator',
    description: 'Calculate investment growth with compound interest and regular monthly contributions',
    url: `${baseUrl}/calculators/compound-interest`
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

          {/* Hero Section */}
          <div className="text-center mb-8 mt-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Compound Interest Calculator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Calculate how your money grows with compound interest and regular monthly contributions.
              See detailed breakdowns, compare compounding frequencies, and plan your financial future.
            </p>
          </div>

          {/* Calculator */}
          <CompoundInterestCalculator />

          {/* How to Use */}
          <section className="mt-12 prose dark:prose-invert max-w-none">
            <h2>How to Use This Compound Interest Calculator</h2>

            <h3>Step 1: Enter Your Initial Investment</h3>
            <p>
              Input the amount you're starting with. This could be savings you already have, a lump sum inheritance,
              or any starting capital. If you're starting from $0, that's okay - monthly contributions still compound powerfully.
            </p>

            <h3>Step 2: Set Your Monthly Contribution</h3>
            <p>
              Enter how much you plan to invest each month. Regular contributions are the secret to building wealth.
              Even $100-300/month can grow to six figures over 20-30 years. Consistency matters more than size.
            </p>

            <h3>Step 3: Choose Your Interest Rate</h3>
            <p>
              Use realistic return expectations based on your investment type:
            </p>
            <ul>
              <li><strong>4-5%:</strong> High-yield savings accounts, CDs</li>
              <li><strong>6-7%:</strong> Conservative balanced portfolios</li>
              <li><strong>7-10%:</strong> S&P 500 index funds (historical average)</li>
              <li><strong>8-12%:</strong> Growth stock portfolios (higher risk)</li>
            </ul>

            <h3>Step 4: Select Compounding Frequency</h3>
            <p>
              Different investments compound at different frequencies. Most modern brokers compound daily,
              but bonds may compound semi-annually. Choose the frequency that matches your investment.
            </p>

            <h3>Step 5: Set Your Time Horizon</h3>
            <p>
              Slide the years selector to match your investment timeline. Remember: longer time horizons
              allow compound interest to work its magic. 20-30 years is ideal for retirement planning.
            </p>

            <h3>Interpreting Your Results</h3>
            <p>
              The calculator shows three critical numbers:
            </p>
            <ul>
              <li><strong>Final Balance:</strong> Total amount you'll have</li>
              <li><strong>Total Contributions:</strong> How much you actually invested</li>
              <li><strong>Total Interest:</strong> Free money from compound growth!</li>
            </ul>

            <p>
              The chart visualizes how your wealth grows over time. Notice how the growth accelerates in later years -
              that's compound interest at work!
            </p>

            <h2>Best Brokers for Compound Interest Growth</h2>
            <p>
              To maximize compound interest, you need a broker that offers:
            </p>
            <ul>
              <li>Zero trading commissions</li>
              <li>Automatic dividend reinvestment (DRIP)</li>
              <li>Fractional shares for perfect dollar-based investing</li>
              <li>Competitive interest rates on cash</li>
            </ul>

            <p>
              Top brokers for compound growth in 2026:
            </p>
            <ul>
              <li><strong>M1 Finance:</strong> Best for automated portfolio management</li>
              <li><strong>Fidelity:</strong> Best overall with excellent research tools</li>
              <li><strong>Charles Schwab:</strong> Best for comprehensive financial planning</li>
              <li><strong>Vanguard:</strong> Best for low-cost index funds</li>
            </ul>
          </section>

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

          {/* Call to Action */}
          <section className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Building Wealth?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              The best time to start investing was 20 years ago. The second best time is today.
              Use this calculator to plan your financial future, then open a brokerage account to get started.
            </p>
          </section>
        </div>
      </main>
    </>
  )
}
