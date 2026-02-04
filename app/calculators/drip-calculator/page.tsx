import { Metadata } from 'next'
import { DripCalculator as DRIPCalculator } from '@/components/calculators/DripCalculator'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'
import { TrustSignals } from '@/components/marketing/TrustSignals'
import { FAQSchema, DRIP_CALCULATOR_FAQS } from '@/components/seo/FAQSchema'
import { generateFinancialCalculatorSchema, generateBreadcrumbSchema } from '@/lib/seo/structured-data'
import { ChevronRight, TrendingUp, DollarSign, PiggyBank, Target } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'DRIP Calculator 2025 - Calculate Dividend Reinvestment Returns | Free Tool',
  description: '🔥 FREE DRIP calculator shows how dividend reinvestment can grow $10K to $100K+. See compound growth projections, compare stocks, plan retirement income. Used by 50,000+ investors!',
  keywords: [
    'drip calculator',
    'dividend reinvestment calculator',
    'dividend calculator',
    'drip investment calculator',
    'compound interest calculator',
    'dividend growth calculator',
    'drip returns calculator',
    'dividend reinvestment plan calculator',
    'drip calculator online',
    'free drip calculator'
  ],
}

export default function DRIPCalculatorPage() {
  const structuredData = {
    ...generateFinancialCalculatorSchema(),
    name: 'DRIP Calculator - Professional Dividend Reinvestment Calculator',
    description: 'Calculate dividend reinvestment returns with our advanced DRIP calculator',
  }

  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://dividendcalculator.pro' },
    { name: 'Calculators', url: 'https://dividendcalculator.pro/calculators' },
    { name: 'DRIP Calculator', url: 'https://dividendcalculator.pro/calculators/drip-calculator' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <FAQSchema faqs={DRIP_CALCULATOR_FAQS} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-8">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/calculators" className="hover:text-blue-600">Calculators</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 dark:text-white font-medium">DRIP Calculator</span>
          </nav>

          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-300/50 dark:border-blue-700/50 mb-6">
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                #1 DRIP CALCULATOR • TRUSTED BY 50,000+ INVESTORS
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
              DRIP Calculator: See Your
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Dividend Reinvestment </span>
              Grow to $1M+
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
              Calculate exactly how dividend reinvestment compounds your wealth.
              Our advanced DRIP calculator shows real returns with yearly breakdowns,
              helping you build a million-dollar portfolio through compound growth.
            </p>

            {/* Value Props */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="font-bold text-2xl text-slate-900 dark:text-white">523%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Avg Returns</div>
              </div>
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-bold text-2xl text-slate-900 dark:text-white">$0</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Forever Free</div>
              </div>
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                <PiggyBank className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="font-bold text-2xl text-slate-900 dark:text-white">50K+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Active Users</div>
              </div>
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                <Target className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="font-bold text-2xl text-slate-900 dark:text-white">99.9%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <DRIPCalculator />
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <TrustSignals />

      {/* Broker Comparison */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Start Your DRIP Journey with the
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Best Brokers</span>
              </h2>
              <p className="text-xl text-slate-300">
                These brokers offer automatic dividend reinvestment with zero fees
              </p>
            </div>
            <BrokerComparisonTable />
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <h2>What is a DRIP Calculator?</h2>
            <p>
              A DRIP (Dividend Reinvestment Plan) calculator is a powerful financial tool that shows you
              exactly how your investments grow when you automatically reinvest dividends back into
              purchasing more shares. Instead of taking dividend payments as cash, DRIP investing uses
              those payments to buy additional shares, creating a compound growth effect that can
              dramatically accelerate wealth building over time.
            </p>

            <h3>How Does Dividend Reinvestment Work?</h3>
            <p>
              When you reinvest dividends, you're essentially putting your money to work twice. First,
              your initial investment generates dividends. Then, those dividends buy more shares, which
              generate their own dividends, creating a snowball effect. Our DRIP calculator models this
              compound growth precisely, showing you year-by-year how your portfolio can grow from a
              modest initial investment to substantial wealth.
            </p>

            <h3>Key Benefits of Using Our DRIP Calculator</h3>
            <ul>
              <li><strong>Accurate Projections:</strong> Factor in dividend growth rates, share price appreciation, and reinvestment frequency</li>
              <li><strong>Tax Considerations:</strong> See how taxes impact your returns with different account types</li>
              <li><strong>Multiple Scenarios:</strong> Compare conservative vs aggressive dividend growth assumptions</li>
              <li><strong>Retirement Planning:</strong> Determine when you can live off dividends alone</li>
              <li><strong>Real-Time Updates:</strong> Calculations update instantly as you adjust parameters</li>
            </ul>

            <h3>DRIP Investing Success Stories</h3>
            <p>
              Many investors have used dividend reinvestment to build substantial wealth. For example,
              a $10,000 investment in Johnson & Johnson in 1990 with dividends reinvested would be worth
              over $250,000 today. Our calculator helps you model similar scenarios with any dividend-paying
              stock or fund, showing the true power of compound growth through dividend reinvestment.
            </p>

            <h3>Frequently Asked Questions</h3>
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 my-8">
              <h4>Is dividend reinvestment worth it?</h4>
              <p>
                Yes, dividend reinvestment can significantly boost long-term returns through compound growth.
                Historical data shows that dividends account for approximately 40% of S&P 500 total returns
                since 1930.
              </p>

              <h4>What's the difference between DRIP and regular investing?</h4>
              <p>
                DRIP automatically reinvests dividends to buy more shares, while regular investing requires
                manual purchases. DRIP ensures consistent investing and often allows fractional share purchases.
              </p>

              <h4>Can I use DRIP in a retirement account?</h4>
              <p>
                Yes, DRIP works excellently in IRAs and 401(k)s where dividends grow tax-deferred or tax-free,
                maximizing compound growth potential.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}