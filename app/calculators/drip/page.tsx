import { Metadata } from 'next'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { DripCalculator } from '@/components/calculators/DripCalculator'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'
import { FAQSchema } from '@/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'DRIP Calculator - Free Dividend Reinvestment Calculator | Plan Your Passive Income',
  description: 'Calculate the power of dividend reinvestment with our free DRIP calculator. Project your portfolio growth, dividend income, and compound returns over 1-30 years. Interactive charts and detailed breakdowns included.',
  keywords: [
    'DRIP calculator',
    'dividend reinvestment calculator',
    'dividend reinvestment plan',
    'compound dividend calculator',
    'passive income calculator',
    'dividend growth calculator',
    'DRIP investment',
    'dividend compounding',
    'retirement income calculator'
  ],
  openGraph: {
    title: 'Free DRIP Calculator - Calculate Dividend Reinvestment Returns',
    description: 'See how dividend reinvestment can grow your wealth. Free calculator with interactive charts and year-by-year projections.',
    type: 'website',
    url: 'https://yourdomain.com/calculators/drip',
  },
  alternates: {
    canonical: 'https://yourdomain.com/calculators/drip'
  }
}

const DRIP_FAQS = [
  {
    question: 'What is a DRIP calculator?',
    answer: 'A DRIP (Dividend Reinvestment Plan) calculator helps you project how your investments will grow when you automatically reinvest dividends instead of taking them as cash. It accounts for compound growth, dividend increases, and share price appreciation to show your total returns over time.'
  },
  {
    question: 'How does dividend reinvestment work?',
    answer: 'When you reinvest dividends, instead of receiving cash payments, your dividends automatically purchase additional shares of the same stock. These new shares also generate dividends, creating a compounding effect that accelerates wealth building over time.'
  },
  {
    question: 'What is a good dividend yield for DRIP investing?',
    answer: 'For DRIP investing, yields between 2-6% are typically ideal. Lower yields (2-3%) often come from growth companies with strong dividend growth rates. Higher yields (4-6%) provide more immediate income but may have slower growth. Avoid extremely high yields (8%+) as they may be unsustainable.'
  },
  {
    question: 'How much can I make with DRIP investing?',
    answer: 'Returns depend on your initial investment, contributions, dividend yield, and dividend growth rate. For example, investing $10,000 initially with $500 monthly contributions at a 4% yield and 7% dividend growth could grow to over $500,000 in 20 years through dividend reinvestment.'
  },
  {
    question: 'Is DRIP investing better than taking dividends as cash?',
    answer: 'DRIP investing is typically better for wealth building because of compound growth. Taking dividends as cash makes sense if you need the income for living expenses. For long-term growth, especially in retirement accounts, reinvesting dividends significantly accelerates portfolio growth.'
  },
  {
    question: 'Do I pay taxes on reinvested dividends?',
    answer: 'Yes, reinvested dividends are taxable in the year they are paid, even though you did not receive cash. However, in tax-advantaged accounts like IRAs and 401(k)s, you can reinvest dividends tax-free, making them ideal for DRIP strategies.'
  }
]

export default function DripCalculatorPage() {
  return (
    <>
      {/* SEO: FAQ Schema for Rich Snippets */}
      <FAQSchema faqs={DRIP_FAQS} />

      <Navigation />

      {/* Hero Section */}
      <section className="py-12 pt-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-300/50 dark:border-blue-700/50 mb-6">
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                FREE DRIP CALCULATOR
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
              DRIP Calculator: Calculate Your{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Dividend Future
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
              See the power of dividend reinvestment with our free DRIP calculator.
              Project your portfolio growth, track compound returns, and visualize your
              path to financial freedom through automatic dividend reinvestment.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No Sign-up Required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Interactive Charts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Detailed Projections</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <DripCalculator />
          </div>
        </div>
      </section>

      {/* Broker Section */}
      <section id="brokers" className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Ready to Start{' '}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  DRIP Investing
                </span>?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Choose a broker that supports automatic dividend reinvestment
              </p>
            </div>
            <BrokerComparisonTable />
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:font-black prose-h2:text-4xl prose-h3:text-2xl prose-p:text-slate-600 dark:prose-p:text-slate-400">

            <h2>What is DRIP Investing?</h2>
            <p>
              DRIP stands for Dividend Reinvestment Plan. It's an investment strategy where
              dividends paid by stocks are automatically used to purchase additional shares of
              the same stock, rather than being paid out as cash. This creates a powerful
              compounding effect that can significantly accelerate wealth building over time.
            </p>

            <h3>How DRIP Works</h3>
            <p>
              When you enroll in a DRIP program, here's what happens with each dividend payment:
            </p>
            <ol>
              <li><strong>Dividend Payment:</strong> The company pays dividends to shareholders</li>
              <li><strong>Automatic Reinvestment:</strong> Your dividends are used to buy more shares</li>
              <li><strong>Fractional Shares:</strong> You can purchase partial shares, so every dollar is invested</li>
              <li><strong>No Commissions:</strong> Most DRIPs allow commission-free reinvestment</li>
              <li><strong>Compound Growth:</strong> New shares generate their own dividends, creating exponential growth</li>
            </ol>

            <h3>Benefits of Using a DRIP Calculator</h3>
            <p>
              Our DRIP calculator helps you visualize the long-term power of dividend reinvestment:
            </p>
            <ul>
              <li><strong>Project Future Wealth:</strong> See how your portfolio could grow over 5, 10, 20+ years</li>
              <li><strong>Compare Scenarios:</strong> Test different dividend yields and growth rates</li>
              <li><strong>Plan Contributions:</strong> Determine how much to invest monthly to reach your goals</li>
              <li><strong>Understand Compound Growth:</strong> Visualize how reinvested dividends accelerate returns</li>
              <li><strong>Make Informed Decisions:</strong> Choose the right dividend stocks for your strategy</li>
            </ul>

            <h3>Key Factors in DRIP Investing</h3>

            <h4>Dividend Yield</h4>
            <p>
              Dividend yield is the annual dividend payment divided by the stock price. For example,
              a stock trading at $100 that pays $4 in annual dividends has a 4% yield. Higher yields
              provide more dividends to reinvest, but extremely high yields (8%+) may signal risk.
            </p>

            <h4>Dividend Growth Rate</h4>
            <p>
              This is how much the company increases its dividend each year. Dividend Aristocrats
              (companies that have increased dividends for 25+ consecutive years) often grow dividends
              by 5-10% annually. Strong dividend growth compounds your returns over time.
            </p>

            <h4>Share Price Appreciation</h4>
            <p>
              While dividends are reinvested, the underlying stock price may also increase. Quality
              dividend stocks often appreciate 5-8% annually, adding to your total returns on top of
              dividend income.
            </p>

            <h3>DRIP Investing Strategies</h3>

            <h4>The Dividend Aristocrat Strategy</h4>
            <p>
              Focus on companies that have increased dividends for 25+ consecutive years. These
              companies typically offer:
            </p>
            <ul>
              <li>Yields of 2-4%</li>
              <li>Dividend growth of 7-10% annually</li>
              <li>Stable, profitable businesses</li>
              <li>Long-term reliability</li>
            </ul>

            <h4>The High-Yield Strategy</h4>
            <p>
              Target stocks with higher current yields (4-6%) for more immediate dividend income.
              Best for investors who want faster compounding or will eventually need the income.
            </p>

            <h4>The Balanced Strategy</h4>
            <p>
              Mix dividend growth stocks (lower yield, higher growth) with high-yield stocks to
              balance current income with future growth potential.
            </p>

            <h3>Tax Considerations for DRIP</h3>
            <p>
              Understanding the tax implications of dividend reinvestment is crucial:
            </p>
            <ul>
              <li><strong>Taxable Accounts:</strong> Dividends are taxed in the year received, even if reinvested. Qualified dividends are taxed at favorable capital gains rates (0%, 15%, or 20%).</li>
              <li><strong>Tax-Advantaged Accounts:</strong> In IRAs, 401(k)s, and other retirement accounts, you can reinvest dividends tax-free, making them ideal for DRIP strategies.</li>
              <li><strong>Cost Basis Tracking:</strong> Each reinvestment creates a new tax lot with its own cost basis. Good brokers track this automatically.</li>
            </ul>

            <h3>Common DRIP Mistakes to Avoid</h3>
            <ol>
              <li><strong>Chasing High Yields:</strong> Yields above 8-10% are often unsustainable and may indicate a company in trouble.</li>
              <li><strong>Ignoring Dividend Growth:</strong> A 3% yield growing at 10% annually will eventually outpace a 6% yield with no growth.</li>
              <li><strong>Not Diversifying:</strong> Don't put all your DRIP investments in one sector or stock.</li>
              <li><strong>Forgetting About Taxes:</strong> Plan for tax liability in taxable accounts, or use tax-advantaged accounts for DRIP.</li>
              <li><strong>Neglecting to Rebalance:</strong> Successful stocks may grow to dominate your portfolio; rebalance periodically.</li>
            </ol>

            <h3>How to Start DRIP Investing Today</h3>
            <ol>
              <li><strong>Choose a Broker:</strong> Select a broker that offers commission-free dividend reinvestment (most major brokers do).</li>
              <li><strong>Research Dividend Stocks:</strong> Look for companies with strong dividend histories and sustainable payout ratios.</li>
              <li><strong>Enable DRIP:</strong> Turn on automatic dividend reinvestment in your brokerage account settings.</li>
              <li><strong>Invest Consistently:</strong> Add regular contributions to maximize compound growth.</li>
              <li><strong>Monitor Performance:</strong> Review your holdings annually, but avoid overtrading.</li>
              <li><strong>Stay Patient:</strong> DRIP investing is a long-term strategy; the real magic happens over decades.</li>
            </ol>

            <h3>Frequently Asked Questions</h3>

            <h4>How long should I DRIP invest?</h4>
            <p>
              DRIP investing works best over long time horizons (10+ years). The compound effect
              becomes exponential after 15-20 years. Many successful DRIP investors maintain their
              strategy for 20-30+ years.
            </p>

            <h4>Can I do DRIP in a Roth IRA?</h4>
            <p>
              Yes! Roth IRAs are ideal for DRIP investing because dividends compound tax-free and
              qualified withdrawals are tax-free in retirement.
            </p>

            <h4>What's better: DRIP or taking cash dividends?</h4>
            <p>
              DRIP is better for wealth accumulation. Taking cash dividends makes sense if you need
              the income for living expenses, typically in retirement.
            </p>

            <h4>Do all stocks offer DRIP?</h4>
            <p>
              Most dividend-paying stocks can be enrolled in DRIP programs through your broker.
              Some companies also offer direct DRIP programs where you purchase shares directly
              from the company.
            </p>

            <h3>Best Dividend Stocks for DRIP Investing</h3>
            <p>
              While we can't provide specific investment advice, popular DRIP categories include:
            </p>
            <ul>
              <li><strong>Dividend Aristocrats:</strong> Companies with 25+ years of dividend increases</li>
              <li><strong>Dividend Kings:</strong> Companies with 50+ years of dividend increases</li>
              <li><strong>Utilities:</strong> Stable, regulated businesses with reliable dividends</li>
              <li><strong>Consumer Staples:</strong> Companies selling essential products (food, household items)</li>
              <li><strong>REITs:</strong> Real estate investment trusts with high yields (90% payout requirement)</li>
            </ul>

            <h3>Use Our Calculator to Plan Your Strategy</h3>
            <p>
              Our free DRIP calculator above lets you model different scenarios:
            </p>
            <ul>
              <li>Test various dividend yields (2% to 8%)</li>
              <li>Compare different dividend growth rates</li>
              <li>See the impact of monthly contributions</li>
              <li>Project 1 to 30 years into the future</li>
              <li>Visualize your compound growth with interactive charts</li>
            </ul>

            <p className="text-lg font-semibold mt-8">
              Start planning your dividend future today with our free DRIP calculator!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
