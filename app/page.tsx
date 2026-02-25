import nextDynamic from 'next/dynamic'
import Link from 'next/link'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { FAQSchema, DRIP_CALCULATOR_FAQS } from '@/components/seo/FAQSchema'

// Dynamic imports for heavy below-fold components
const MultiCalculator = nextDynamic(() => import('@/components/calculators/MultiCalculator').then(m => ({ default: m.MultiCalculator })))
const BrokerComparisonTable = nextDynamic(() => import('@/components/affiliate/BrokerComparisonTable').then(m => ({ default: m.BrokerComparisonTable })))
const SocialProof = nextDynamic(() => import('@/components/hero/SocialProof').then(m => ({ default: m.SocialProof })))
const FeaturesShowcase = nextDynamic(() => import('@/components/hero/FeaturesShowcase').then(m => ({ default: m.FeaturesShowcase })))
const BehaviorTriggeredPopup = nextDynamic(() => import('@/components/lead-generation/BehaviorTriggeredPopup').then(m => ({ default: m.BehaviorTriggeredPopup })))
const CookieConsent = nextDynamic(() => import('@/components/gdpr/CookieConsent').then(m => ({ default: m.CookieConsent })))

// Force dynamic rendering to avoid static generation timeout
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <>
      {/* SEO: FAQ Schema for Rich Snippets */}
      <FAQSchema faqs={DRIP_CALCULATOR_FAQS} />

      <Navigation />

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
      <section id="brokers" className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
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

      {/* All Calculators Showcase */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4">All Financial Calculators</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Everything you need to plan your financial future
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/calculators/drip" className="group p-6 border-2 border-slate-200 dark:border-slate-700 rounded-xl hover:border-blue-500 hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">DRIP Calculator</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">Calculate dividend reinvestment returns with compound growth projections</p>
                <div className="text-blue-600 font-semibold text-sm">Try Calculator →</div>
              </Link>

              <Link href="/calculators/compound-interest" className="group p-6 border-2 border-slate-200 dark:border-slate-700 rounded-xl hover:border-blue-500 hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">Compound Interest</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">See how your savings grow with different compounding frequencies</p>
                <div className="text-blue-600 font-semibold text-sm">Try Calculator →</div>
              </Link>

              <Link href="/calculators/savings" className="group p-6 border-2 border-slate-200 dark:border-slate-700 rounded-xl hover:border-blue-500 hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">Savings Goal</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">Calculate how to reach your savings goals faster with monthly contributions</p>
                <div className="text-blue-600 font-semibold text-sm">Try Calculator →</div>
              </Link>

              <Link href="/calculators/401k" className="group p-6 border-2 border-slate-200 dark:border-slate-700 rounded-xl hover:border-blue-500 hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">401(k) Planner</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">Plan your retirement with employer match and tax savings analysis</p>
                <div className="text-blue-600 font-semibold text-sm">Try Calculator →</div>
              </Link>

              <Link href="/calculators/ira" className="group p-6 border-2 border-slate-200 dark:border-slate-700 rounded-xl hover:border-blue-500 hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">IRA Calculator</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">Compare Traditional vs Roth IRA to optimize your retirement strategy</p>
                <div className="text-blue-600 font-semibold text-sm">Try Calculator →</div>
              </Link>

              <Link href="/calculators/investment-return" className="group p-6 border-2 border-slate-200 dark:border-slate-700 rounded-xl hover:border-blue-500 hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">Investment Returns</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">Calculate ROI, annualized returns, and profit from your investments</p>
                <div className="text-blue-600 font-semibold text-sm">Try Calculator →</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Broker Comparison Tool Promo */}
      <section className="py-16 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 mb-6">
                  <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                    NEW TOOL
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-4">Compare Top Investment Brokers</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                  Find the perfect broker for your investing style. Compare features, fees, and get personalized recommendations.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Side-by-side feature comparison</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Personalized recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Exclusive signup bonuses up to $200</span>
                  </li>
                </ul>
                <Link
                  href="/tools/compare"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  Compare Brokers Now →
                </Link>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
                <div className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-3">🎯</div>
                    <h3 className="font-bold text-xl mb-2">M1 Finance</h3>
                    <div className="flex items-center justify-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm font-semibold">4.8/5</span>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Commission:</span>
                      <span className="font-semibold">$0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Auto DRIP:</span>
                      <span className="font-semibold text-green-600">✓ Yes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Signup Bonus:</span>
                      <span className="font-semibold text-blue-600">$150</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Best For:</span>
                      <span className="font-semibold text-xs">DRIP Investors</span>
                    </div>
                  </div>
                  <div className="mt-6 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
                    <span className="text-sm font-semibold text-green-700 dark:text-green-300">Perfect for dividend investors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Guide Lead Magnet */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 via-blue-50 to-purple-50 dark:from-emerald-950/20 dark:via-blue-950/20 dark:to-purple-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-300 dark:border-emerald-700 mb-6">
              <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                100% FREE - NO CREDIT CARD
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
              Get the Dividend Investor's Toolkit
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              50-page comprehensive guide covering DRIP investing, dividend aristocrats, 3 ready-to-use portfolio strategies, and tax optimization. Downloaded by 47,000+ investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-guide"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Download Free Guide →
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-lg transition-colors border border-slate-200 dark:border-slate-700"
              >
                Read Free Articles
              </Link>
            </div>
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

      {/* Footer */}
      <Footer />

      {/* Cookie Consent */}
      <CookieConsent />
    </>
  )
}
