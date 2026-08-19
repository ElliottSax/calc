import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { FourZeroOneKCalculatorLazy as FourZeroOneKCalculator } from '@/components/calculators/FourZeroOneKCalculatorLazy'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { StructuredData } from '@/components/seo/StructuredData'
import { SimpleUsageCounter } from '@/components/social-proof/UsageCounter'
import { CompactTrustBadges } from '@/components/social-proof/TrustBadges'
import { generateCalculatorSchema, generateFAQSchema } from '@/lib/seo/structured-data'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://calc-bay-one.vercel.app'

export const metadata: Metadata = {
  title: '401(k) Calculator — Maximize Your Match, Calculate Growth',
  description: 'Free 401(k) calculator plus the formulas: how to calculate 401(k) growth year by year and how to maximize your employer match so you never leave free money behind.',
  keywords: [
    '401k calculator',
    'how to maximize 401k match',
    'how to calculate 401k growth',
    '401(k) retirement calculator',
    'employer match calculator',
    '401k growth formula',
    'retirement savings calculator',
    '401k growth calculator',
    'retirement planning calculator',
    'tax-deferred savings calculator'
  ],
  openGraph: {
    title: '401(k) Calculator - Maximize Your Employer Match & Calculate Growth',
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
  },
  {
    question: 'How do you maximize your 401(k) match?',
    answer: 'Contribute at least the percentage your plan matches up to, and spread those contributions across every paycheck of the year. The match is calculated as salary × the lower of your contribution rate or the match cap × the match rate — so on a "50% up to 6%" formula at a $75,000 salary, contributing 6% earns $2,250 while contributing 4% earns only $1,500. Because most plans match per paycheck, maxing out early in the year can stop your contributions and forfeit the match on later paychecks unless your plan offers a true-up. Also check the vesting schedule: matched dollars you leave before vesting go back to the employer.'
  },
  {
    question: 'How do you calculate 401(k) growth?',
    answer: 'Compound your current balance forward and add the future value of your yearly contributions: FV = Balance × (1 + r)^n + Annual Contribution × [((1 + r)^n − 1) ÷ r], where r is your annual return as a decimal and n is years to retirement. Your annual contribution is your own deferral plus the employer match. Because you are compounding both the existing balance and every new contribution, the growth curve steepens sharply in the final decade — which is why raising your contribution rate early matters more than picking the perfect fund.'
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

          <SimpleUsageCounter />
          <CompactTrustBadges />

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

          {/* Formula / worked-example Section */}
          <section className="mt-12 max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">How to calculate 401(k) growth</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A 401(k) balance grows from three things at once: the money already in the account
              compounding, the new contributions you and your employer add each year, and the return
              those new contributions earn for however long they sit there. One formula covers all
              three — the future value of a lump sum plus the future value of a stream of
              contributions.
            </p>

            <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-5 my-6">
              <p className="font-mono text-sm sm:text-base font-medium">
                Future Value = Balance × (1 + r)^n + Annual Contribution × [((1 + r)^n − 1) ÷ r]
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Here <strong>r</strong> is your expected annual return as a decimal (7% becomes 0.07)
              and <strong>n</strong> is the number of years until you retire. The annual contribution
              is not just your own deferral — it includes the employer match, which is why the match
              does so much of the heavy lifting:
            </p>

            <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-5 my-6">
              <p className="font-mono text-sm sm:text-base font-medium">
                Annual Contribution = (Your Contribution % + Employer Match %) × Salary
              </p>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-3">Worked example</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              A $75,000 salary, a 6% contribution, a 50%-up-to-6% match, a $50,000 balance already in
              the plan, a 7% return, and 25 years to go:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-gray-600 dark:text-gray-300 mb-4">
              <li>
                Your contribution: <span className="font-mono">$75,000 × 6% = $4,500</span>
              </li>
              <li>
                Employer match: <span className="font-mono">$75,000 × 6% × 50% = $2,250</span> — total
                going in each year is <span className="font-mono">$6,750</span>
              </li>
              <li>
                Growth factor: <span className="font-mono">(1 + 0.07)^25 = 5.43</span>
              </li>
              <li>
                Existing balance grows to:{' '}
                <span className="font-mono">$50,000 × 5.43 = $271,000</span>
              </li>
              <li>
                Contributions grow to:{' '}
                <span className="font-mono">$6,750 × [(5.43 − 1) ÷ 0.07] = $6,750 × 63.2 = $427,000</span>
              </li>
              <li>
                Add them together: <span className="font-mono">$271,000 + $427,000 ≈ $698,000</span>
              </li>
            </ol>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Note that $2,250 of each year&apos;s $6,750 — a third of the total — came from the employer.
              Drop the match and the same 25 years ends near $556,000 instead. The example assumes
              contributions land at year end; because real contributions arrive every paycheck and
              start compounding sooner, the calculator above will show a slightly higher figure, and
              neither version accounts for future raises.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">How to maximize your 401(k) match</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The match is the highest-return part of the whole account, and it is calculated with a
              formula you can plan around:
            </p>

            <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-5 my-6">
              <p className="font-mono text-sm sm:text-base font-medium">
                Employer Match = Salary × min(Your Contribution %, Match Cap %) × Match Rate
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The <span className="font-mono">min()</span> is the important part: contributing above
              the cap earns you nothing extra in match. On that $75,000 salary with a 50%-up-to-6%
              formula, contributing 4% collects{' '}
              <span className="font-mono">$75,000 × 4% × 50% = $1,500</span> instead of the full
              $2,250 — $750 given up every year. Contributing 10% still collects $2,250, because the
              cap binds at 6%. Four practical rules follow from that:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 mb-4">
              <li>
                <strong>Hit the cap first.</strong> Before an IRA, before extra mortgage payments,
                fund your 401(k) up to the match cap. A 50% match is an instant 50% return.
              </li>
              <li>
                <strong>Spread contributions across all pay periods.</strong> Most plans match per
                paycheck. Hitting the IRS annual limit in September stops your deferrals for the rest
                of the year and, unless the plan offers a year-end "true-up," forfeits the match on
                those final paychecks.
              </li>
              <li>
                <strong>Read your plan&apos;s exact formula.</strong> A tiered safe-harbor formula
                (dollar-for-dollar on the first 3%, then 50% on the next 2%) needs a 5% contribution
                to be fully collected, not 6% — the cap differs from plan to plan.
              </li>
              <li>
                <strong>Check the vesting schedule.</strong> Matched dollars often vest over three to
                five years. Leaving a month before a vesting cliff can hand back thousands you already
                counted as yours; your own contributions are always 100% yours.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-3">What these numbers mean</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Treat the projection as a range, not a promise. Returns arrive unevenly, so a 7%
              average can still mean a decade that goes nowhere followed by a decade that does the
              work. A useful sanity check is the 4% rule: divide the projected balance by 25 to see
              the rough annual income it supports — that $698,000 becomes about $27,900 a year before
              tax, on top of Social Security. If that falls short of what you need, the two levers
              with the biggest effect are your contribution rate and the number of years you leave it
              invested, not the return assumption you type in.
            </p>
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
