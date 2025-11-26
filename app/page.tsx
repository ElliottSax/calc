import { Header } from '@/components/layout/Header'
import { PremiumHero } from '@/components/hero/PremiumHero'
import { FeaturesShowcase } from '@/components/hero/FeaturesShowcase'
import { SocialProof } from '@/components/hero/SocialProof'
import { DripCalculator } from '@/components/calculators/DripCalculator'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'
import { BehaviorTriggeredPopup } from '@/components/lead-generation/BehaviorTriggeredPopup'
import { Card } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />

      {/* Premium Hero Section */}
      <PremiumHero />

      {/* Features Showcase */}
      <FeaturesShowcase />

      {/* Main Calculator Section */}
      <section id="calculator" className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-slate-950 dark:via-blue-950/10 dark:to-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-300/50 dark:border-blue-700/50 mb-6">
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  START CALCULATING
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                See Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Financial Future</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Enter your numbers below and watch your dividend wealth compound over time
              </p>
            </div>

            {/* Calculator Card */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-30"></div>

              <Card className="relative backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-2 border-blue-200/50 dark:border-blue-800/50 shadow-2xl p-8 rounded-2xl">
                <DripCalculator />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <SocialProof />

      {/* Broker Comparison */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                Ready to <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Start Investing</span>?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Choose the best broker to start building your dividend portfolio
              </p>
            </div>
            <BrokerComparisonTable />
          </div>
        </div>
      </section>

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