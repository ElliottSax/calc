import { Header } from '@/components/layout/Header'
import { MultiCalculator } from '@/components/calculators/MultiCalculator'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'
import { SocialProof } from '@/components/hero/SocialProof'
import { FeaturesShowcase } from '@/components/hero/FeaturesShowcase'
import { BehaviorTriggeredPopup } from '@/components/lead-generation/BehaviorTriggeredPopup'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Header />

      {/* Main Calculator Section - LEAD WITH THIS */}
      <section id="calculator" className="py-12 pt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-300/50 dark:border-blue-700/50 mb-6">
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  FREE DIVIDEND CALCULATORS
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
                Calculate Your <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Dividend Future</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Choose from 5 powerful calculators to plan your dividend investing strategy
              </p>
            </div>

            {/* Multi-Calculator with Tabs */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl opacity-30"></div>

              <div className="relative">
                <MultiCalculator />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Broker Comparison - Focus on Affiliate */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
                <span className="text-sm font-semibold text-blue-300">
                  START INVESTING TODAY
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Ready to <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Build Your Portfolio</span>?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Choose the best broker to start building your dividend portfolio
              </p>
            </div>
            <BrokerComparisonTable />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <SocialProof />

      {/* Features Showcase */}
      <FeaturesShowcase />

      {/* SEO Content Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:font-black prose-h2:text-4xl prose-h3:text-2xl prose-p:text-slate-600 dark:prose-p:text-slate-400">
            <h2>Master Your Dividend Investing Strategy</h2>
            <p>
              Our dividend reinvestment calculator helps you visualize the long-term power of
              compounding returns through dividend reinvestment plans (DRIPs). Whether you're
              planning for retirement or building passive income, understanding how dividends
              compound over time is crucial for successful investing.
            </p>

            <h3>How Dividend Reinvestment Works</h3>
            <p>
              Dividend reinvestment is the practice of using dividend payments to purchase
              additional shares of the same stock, rather than taking the dividends as cash.
              This strategy can significantly accelerate wealth building through the power of
              compound growth.
            </p>

            <h3>Key Benefits of DRIP Investing</h3>
            <ul className="space-y-3">
              <li><strong>Compound Growth:</strong> Your dividends buy more shares, which generate more dividends</li>
              <li><strong>Dollar-Cost Averaging:</strong> Regular purchases smooth out market volatility</li>
              <li><strong>No Commission Fees:</strong> Most DRIPs allow commission-free reinvestment</li>
              <li><strong>Fractional Shares:</strong> Every dollar of dividends is put to work</li>
              <li><strong>Passive Investing:</strong> Set it and forget it approach to wealth building</li>
            </ul>

            <h3>Why Use Our Calculator?</h3>
            <p>
              Unlike other calculators, ours provides interactive visualizations, detailed year-by-year breakdowns,
              and the ability to compare different dividend growth scenarios. Whether you're investing in dividend
              aristocrats, REITs, or high-yield stocks, our tool helps you make informed decisions about your
              financial future.
            </p>
          </div>
        </div>
      </section>

      {/* Behavior-triggered popup */}
      <BehaviorTriggeredPopup />
    </div>
  )
}