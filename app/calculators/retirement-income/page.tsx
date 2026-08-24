import { Metadata } from 'next'
import Link from 'next/link'
import { RetirementIncomeCalculator } from '@/components/calculators/RetirementIncomeCalculator'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'
import { ArrowLeft, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: { absolute: 'Retirement Income Calculator — Calculate Your Dividend Freedom | Dividend Engines' },
  description: 'Calculate exactly how much portfolio value and monthly passive income you need to retire on dividends. Free retirement calculator with broker comparisons.',
  alternates: {
    canonical: 'https://dividendengines.com/calculators/retirement-income',
  },
  openGraph: {
    title: 'Retirement Income Calculator — Calculate Your Dividend Freedom',
    description: 'Find out how much capital you need in dividend stocks to fully fund your retirement lifestyle.',
    url: 'https://dividendengines.com/calculators/retirement-income',
    type: 'website',
  },
}

export default function RetirementIncomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Retirement Income Calculator',
    url: 'https://dividendengines.com/calculators/retirement-income',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'All',
    description: 'Calculate required portfolio value and passive dividend income needed to retire.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I calculate how much money I need to retire on dividends?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To calculate the required portfolio size for retirement dividend income, divide your target annual income by your expected dividend yield. For example, if you need $40,000 per year and your portfolio yields an average of 4%, you need $1,000,000 invested ($40,000 / 0.04).',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a safe dividend yield for retirement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A sustainable dividend yield typically ranges between 3% and 5% for a diversified portfolio of blue-chip dividend growth stocks (such as Dividend Aristocrats). Chasing ultra-high yields above 8-10% often introduces significant dividend cut risk and capital erosion.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I bridge the retirement savings gap?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If your current portfolio generates less than your target income, you can bridge the gap by increasing your monthly contributions, reinvesting dividends (DRIP compounding), extending your timeline, or systematically rotating into higher-quality dividend growth companies.',
        },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header / Nav */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/calculators"
            className="inline-flex items-center text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Calculators
          </Link>
          <span className="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/50 px-3 py-1 rounded-full border border-green-200 dark:border-green-800">
            Retirement Planning
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Title & Intro */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Retirement Income Calculator
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400">
            Determine exactly how much portfolio capital you need to retire entirely on passive dividend cash flow, and calculate your required monthly savings.
          </p>
        </div>

        {/* Calculator Component */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 md:p-10 mb-16">
          <RetirementIncomeCalculator />
        </div>

        {/* Educational Deep Dive */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-950/50 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center font-bold text-xl mb-4">
              1
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              The Dividend Formula
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Your retirement freedom number is simply your target income divided by your expected yield. Quality dividend growth stocks let you live off cash distributions without selling principal shares.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-950/50 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center font-bold text-xl mb-4">
              2
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Closing the Gap
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              If your current portfolio leaves a shortfall, disciplined monthly contributions combined with dividend reinvestment (DRIP) accelerate your timeline to financial independence.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-950/50 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center font-bold text-xl mb-4">
              3
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Platform & Tax Efficiency
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Holding dividend portfolios in tax-advantaged accounts (like IRAs or Roth accounts) shields your passive income from annual tax drag, compounding your wealth much faster.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 md:p-12 mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-8 flex items-center">
            <HelpCircle className="w-8 h-8 mr-3 text-green-600" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, idx) => (
              <div key={idx} className="border-b border-slate-200 dark:border-slate-800 pb-6 last:border-0 last:pb-0">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {faq.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Broker Comparison Section (Target for inline CTA scroll) */}
        <section id="brokers" className="scroll-mt-12 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-3">
              Ready to Build Your Dividend Portfolio?
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Compare the top brokers for dividend investing, featuring low fees, robust DRIP programs, and account bonuses.
            </p>
          </div>
          <BrokerComparisonTable />
        </section>

        {/* Sibling Calculators Cross-Link */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-12">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Explore More Dividend Calculators
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/calculators/yield-on-cost"
              className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-green-500 dark:hover:border-green-500 transition-all shadow-sm hover:shadow-md group"
            >
              <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-green-600 transition-colors mb-1">
                Yield on Cost Calculator &rarr;
              </h4>
              <p className="text-sm text-slate-500">Calculate your effective return based on your original purchase price.</p>
            </Link>

            <Link
              href="/calculators/payout-ratio"
              className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-green-500 dark:hover:border-green-500 transition-all shadow-sm hover:shadow-md group"
            >
              <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-green-600 transition-colors mb-1">
                Dividend Payout Ratio &rarr;
              </h4>
              <p className="text-sm text-slate-500">Test dividend safety and sustainability against earnings and cash flow.</p>
            </Link>

            <Link
              href="/calculators/dividend-yield"
              className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-green-500 dark:hover:border-green-500 transition-all shadow-sm hover:shadow-md group"
            >
              <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-green-600 transition-colors mb-1">
                Dividend Yield Calculator &rarr;
              </h4>
              <p className="text-sm text-slate-500">Compute current yields and annual cash returns across stock positions.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
