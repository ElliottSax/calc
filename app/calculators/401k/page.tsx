import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { FourZeroOneKCalculator } from '@/components/calculators/FourZeroOneKCalculator'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { StructuredData } from '@/components/seo/StructuredData'
import { generateCalculatorSchema, generateFAQSchema } from '@/lib/seo/structured-data'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://calc-bay-one.vercel.app'

export const metadata: Metadata = {
  title: '401(k) Calculator - Plan Your Retirement Savings with Employer Match 2026',
  description: 'Free 401(k) retirement calculator with employer matching. Calculate retirement savings, tax benefits, and see how much you\'ll have at retirement. Includes the 4% withdrawal rule.',
  keywords: [
    '401k calculator',
    '401(k) retirement calculator',
    'employer match calculator',
    'retirement savings calculator',
    '401k growth calculator',
    'retirement planning calculator',
    'tax-deferred savings calculator'
  ],
  openGraph: {
    title: '401(k) Calculator - Calculate Retirement Savings with Employer Match',
    description: 'Free 401(k) calculator. See how employer matching and tax advantages help you build retirement wealth.',
    type: 'website',
    url: `${baseUrl}/calculators/401k`
  },
  alternates: {
    canonical: `${baseUrl}/calculators/401k`
  }
}

const breadcrumbItems = [
  { name: 'Home', url: baseUrl },
  { name: 'Calculators', url: `${baseUrl}/calculators` },
  { name: '401(k) Calculator', url: `${baseUrl}/calculators/401k` }
]

const faqs = [
  {
    question: 'How much should I contribute to my 401(k)?',
    answer: 'At minimum, contribute enough to get the full employer match - it\'s free money! Ideally, aim for 10-15% of your salary. The 2026 IRS limit is $23,000 per year ($30,500 if age 50+).'
  },
  {
    question: 'What is employer matching?',
    answer: 'Employer matching is when your company contributes money to your 401(k) based on your contributions. For example, "50% match up to 6%" means if you contribute 6% of salary, they add 3%. This is an instant 50% return on your money!'
  },
  {
    question: 'What return should I expect from my 401(k)?',
    answer: 'Historical stock market returns average 7-10% annually. Conservative estimates use 6-7%, moderate 7-8%, and aggressive 8-10%. Your actual returns depend on your investment choices and market conditions.'
  },
  {
    question: 'Can I access my 401(k) money before retirement?',
    answer: 'Yes, but with penalties. Withdrawals before age 59½ typically incur a 10% penalty plus income tax. Exceptions exist for hardship withdrawals, loans (if plan allows), and Rule of 55 for those leaving jobs at 55+.'
  },
  {
    question: 'What is the 4% withdrawal rule?',
    answer: 'The 4% rule suggests withdrawing 4% of your retirement savings annually for sustainable income. For a $1 million 401(k), that\'s $40,000/year. Research shows this provides a 95% probability your money will last 30+ years in retirement.'
  },
  {
    question: 'Should I do Roth 401(k) or Traditional 401(k)?',
    answer: 'Traditional 401(k) contributions are pre-tax (tax deduction now, pay taxes in retirement). Roth 401(k) contributions are after-tax (no deduction now, tax-free withdrawals). Choose Traditional if you expect lower taxes in retirement, Roth if higher. Many do both.'
  },
  {
    question: 'What happens to my 401(k) if I change jobs?',
    answer: 'You have options: (1) Leave it with old employer, (2) Roll over to new employer\'s plan, (3) Roll over to an IRA, (4) Cash out (not recommended due to taxes and penalties). Rolling over to an IRA often provides the most investment options.'
  },
  {
    question: 'How do 401(k) fees affect my returns?',
    answer: 'Fees matter enormously! A 1% fee difference can cost hundreds of thousands over a career. Look for low-cost index funds with expense ratios under 0.20%. Avoid funds with loads or 12b-1 fees.'
  }
]

export default function FourZeroOneKCalculatorPage() {
  const calculatorSchema = generateCalculatorSchema({
    name: '401(k) Retirement Calculator',
    description: 'Calculate 401(k) retirement savings with employer matching and tax advantages',
    url: `${baseUrl}/calculators/401k`
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              401(k) Retirement Calculator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Calculate your 401(k) growth with employer matching, tax advantages, and compound returns.
              See exactly how much you'll have at retirement and plan your financial future.
            </p>
          </div>

          <FourZeroOneKCalculator />

          {/* Educational Section */}
          <section className="mt-12 prose dark:prose-invert max-w-none">
            <h2>Maximizing Your 401(k) for Retirement</h2>

            <h3>Step 1: Get the Full Employer Match</h3>
            <p>
              This is the single most important rule of 401(k) investing. Employer matching is literally free money -
              an instant 25-100% return on your contributions. If your employer offers a match, contribute at least
              enough to receive it all. For example:
            </p>
            <ul>
              <li><strong>Company offers:</strong> 50% match on contributions up to 6% of salary</li>
              <li><strong>Your salary:</strong> $75,000</li>
              <li><strong>You contribute:</strong> 6% = $4,500/year</li>
              <li><strong>Company adds:</strong> 3% = $2,250/year (free!)</li>
              <li><strong>Total saved:</strong> $6,750/year</li>
            </ul>

            <h3>Step 2: Increase Contributions Over Time</h3>
            <p>
              Start where you can and increase gradually. Many plans offer automatic annual increases. A good progression:
            </p>
            <ul>
              <li><strong>Year 1:</strong> 6% (get full match)</li>
              <li><strong>Year 2:</strong> 8% (after first raise)</li>
              <li><strong>Year 3:</strong> 10% (building momentum)</li>
              <li><strong>Year 5+:</strong> 15% (on track for comfortable retirement)</li>
            </ul>

            <h3>Step 3: Choose Low-Cost Index Funds</h3>
            <p>
              Investment selection matters. Here's a simple, proven approach:
            </p>
            <ul>
              <li><strong>Target-Date Funds:</strong> Easiest option - automatically adjusts risk as you age</li>
              <li><strong>S&P 500 Index:</strong> Simple, low-cost exposure to US stocks</li>
              <li><strong>Total Market Index:</strong> Broader diversification across all US companies</li>
              <li><strong>Three-Fund Portfolio:</strong> US stocks (60%), International stocks (30%), Bonds (10%)</li>
            </ul>

            <h3>401(k) vs IRA: What's the Difference?</h3>
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>401(k)</th>
                  <th>IRA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Contribution Limit (2026)</td>
                  <td>$23,000 ($30,500 age 50+)</td>
                  <td>$7,000 ($8,000 age 50+)</td>
                </tr>
                <tr>
                  <td>Employer Match</td>
                  <td>Yes (often 3-6%)</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Investment Options</td>
                  <td>Limited to plan options</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Fees</td>
                  <td>Varies (0.5-2%)</td>
                  <td>Usually lower (0.03-0.5%)</td>
                </tr>
                <tr>
                  <td>When to Use</td>
                  <td>First priority (get match!)</td>
                  <td>After maxing 401(k) match</td>
                </tr>
              </tbody>
            </table>

            <h3>Common 401(k) Mistakes to Avoid</h3>
            <ol>
              <li><strong>Not contributing enough for full match</strong> - Leaving free money on the table</li>
              <li><strong>Cashing out when changing jobs</strong> - Lose 30-40% to taxes and penalties</li>
              <li><strong>Being too conservative</strong> - Young workers in bonds miss decades of growth</li>
              <li><strong>Ignoring fees</strong> - High-fee funds can cost you hundreds of thousands</li>
              <li><strong>Stopping contributions in downturns</strong> - Miss buying opportunities</li>
              <li><strong>Not rebalancing</strong> - Portfolio drifts away from target allocation</li>
            </ol>
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
        </div>
      </main>
    </>
  )
}
