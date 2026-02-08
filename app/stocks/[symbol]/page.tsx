import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DripCalculator } from '@/components/calculators/DripCalculator';
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable';
import { ShareResults } from '@/components/viral/ShareResults';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { DIVIDEND_ARISTOCRATS } from '@/lib/data/dividend-aristocrats';

// Force dynamic rendering to avoid build timeouts
export const dynamic = 'force-dynamic'
export const dynamicParams = true

interface StockPageProps {
  params: {
    symbol: string;
  };
}

// Disable static generation for now to speed up builds
export async function generateStaticParams() {
  return []  // Return empty array to disable pre-generation
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: StockPageProps): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://calc-bay-one.vercel.app';
  const ticker = params.symbol.toUpperCase();
  const stockData = await getStockData(ticker);

  if (!stockData) {
    return {
      title: 'Stock Not Found',
    };
  }

  const title = `${stockData.name} (${ticker}) Dividend Calculator & DRIP Analysis`;
  const description = `Calculate ${ticker} dividend returns with our free DRIP calculator. ${stockData.name} current yield: ${stockData.yield?.toFixed(2)}%, 5-year growth: ${stockData.dividendGrowth5y?.toFixed(1)}%. See how your dividends compound over time.`;

  return {
    title,
    description,
    keywords: [
      `${ticker} dividend calculator`,
      `${ticker} DRIP calculator`,
      `${stockData.name} dividends`,
      `${ticker} dividend yield`,
      `${ticker} dividend reinvestment`,
      'dividend calculator',
      'DRIP analysis',
    ].join(', '),
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${baseUrl}/stocks/${ticker.toLowerCase()}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function StockDividendPage({ params }: StockPageProps) {
  const ticker = params.symbol.toUpperCase();
  const stockData = await getStockData(ticker);

  if (!stockData) {
    notFound();
  }

  // Pre-fill calculator defaults based on stock data
  const calculatorDefaults = {
    ticker: ticker,
    sharePrice: stockData.price?.toString() || '100',
    annualDividend: stockData.annualDividend?.toString() || '4',
    dividendYield: stockData.yield?.toFixed(2) || '4',
    dividendGrowthRate: stockData.dividendGrowth5y?.toFixed(1) || '5',
  };

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        {/* Hero Section */}
        <section className="py-12 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              {/* Breadcrumb */}
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                <a href="/" className="hover:underline">Home</a>
                {' '}/{' '}
                <a href="/stocks" className="hover:underline">Dividend Stocks</a>
                {' '}/{' '}
                <span>{ticker}</span>
              </div>

              {/* Stock Header */}
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  {stockData.name} ({ticker})
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Dividend Calculator
                  </span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400">
                  Calculate your potential returns with {stockData.name}'s dividend reinvestment
                </p>
              </div>

              {/* Stock Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <StatCard
                  label="Current Price"
                  value={`$${stockData.price?.toFixed(2)}`}
                />
                <StatCard
                  label="Dividend Yield"
                  value={`${stockData.yield?.toFixed(2)}%`}
                  highlighted
                />
                <StatCard
                  label="Annual Dividend"
                  value={`$${stockData.annualDividend?.toFixed(2)}`}
                />
                <StatCard
                  label="5Y Growth"
                  value={`${stockData.dividendGrowth5y?.toFixed(1)}%`}
                  highlighted
                />
              </div>

              {/* Dividend Aristocrat Badge */}
              {stockData.isDividendAristocrat && (
                <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 border border-yellow-300/50 dark:border-yellow-700/50 mb-6">
                  <span className="text-sm font-semibold bg-gradient-to-r from-yellow-700 to-orange-700 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent">
                    ⭐ S&P 500 DIVIDEND ARISTOCRAT ⭐
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {stockData.consecutiveYears}+ years of consecutive dividend increases
                  </p>
                </div>
              )}
            </div>

            {/* Calculator Section */}
            <div className="max-w-7xl mx-auto">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl opacity-30"></div>
                <div className="relative">
                  <DripCalculator />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stock Analysis Section */}
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              <h2>About {stockData.name} Dividends</h2>

              <p>
                {stockData.name} ({ticker}) {stockData.isDividendAristocrat && 'is a prestigious S&P 500 Dividend Aristocrat, having increased its dividend for ' + stockData.consecutiveYears + '+ consecutive years. This '}
                currently offers a dividend yield of {stockData.yield?.toFixed(2)}%, with an annual dividend payment of ${stockData.annualDividend?.toFixed(2)} per share.
              </p>

              <h3>Why Invest in {ticker} for Dividends?</h3>
              <ul>
                <li><strong>Reliable Income:</strong> Consistent dividend payments {stockData.isDividendAristocrat && 'with a proven track record of increases'}</li>
                <li><strong>Dividend Growth:</strong> {stockData.dividendGrowth5y && stockData.dividendGrowth5y > 0 ? `${stockData.dividendGrowth5y.toFixed(1)}% average annual dividend growth over the past 5 years` : 'Stable dividend policy'}</li>
                <li><strong>Quality Company:</strong> {stockData.sector} sector leader with strong fundamentals</li>
                <li><strong>DRIP Potential:</strong> Ideal for dividend reinvestment strategies</li>
              </ul>

              <h3>How to Use This {ticker} Dividend Calculator</h3>
              <p>
                Our calculator is pre-filled with {stockData.name}'s current data, but you can adjust any values:
              </p>
              <ol>
                <li><strong>Initial Investment:</strong> Enter how much you want to invest initially</li>
                <li><strong>Monthly Contribution:</strong> Set your recurring investment amount</li>
                <li><strong>Time Horizon:</strong> Choose your investment timeline (5-30 years)</li>
                <li><strong>Dividend Growth:</strong> Adjust based on your expectations (default: historical average)</li>
                <li><strong>DRIP Toggle:</strong> See the difference reinvesting makes!</li>
              </ol>

              <h3>Best Brokers for Buying {ticker}</h3>
              <p>
                Looking to start your {ticker} dividend investment? Choose a broker that supports:
              </p>
              <ul>
                <li>Commission-free trading</li>
                <li>Automatic dividend reinvestment (DRIP)</li>
                <li>Fractional shares (buy with any amount)</li>
                <li>No account minimums</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Broker Comparison */}
        <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black mb-4">
                  Start Investing in {ticker} Today
                </h2>
                <p className="text-xl text-slate-300">
                  Choose the best broker to build your {stockData.name} dividend portfolio
                </p>
              </div>
              <BrokerComparisonTable />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-black text-center mb-8">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <FAQItem
                  question={`What is ${ticker}'s current dividend yield?`}
                  answer={`${stockData.name} currently offers a dividend yield of ${stockData.yield?.toFixed(2)}%, meaning you earn $${stockData.yield?.toFixed(2)} per year for every $100 invested.`}
                />
                <FAQItem
                  question={`How often does ${ticker} pay dividends?`}
                  answer={`${stockData.name} typically pays dividends ${stockData.paymentFrequency || 'quarterly'}, distributing ${stockData.paymentsPerYear || 4} payments per year.`}
                />
                <FAQItem
                  question={`Should I reinvest ${ticker} dividends?`}
                  answer={`Dividend reinvestment (DRIP) can significantly boost long-term returns through compounding. Use our calculator above to see the difference reinvesting makes over time.`}
                />
                <FAQItem
                  question={`Is ${ticker} a good dividend stock?`}
                  answer={`${stockData.isDividendAristocrat ? `As an S&P 500 Dividend Aristocrat with ${stockData.consecutiveYears}+ years of consecutive dividend increases, ${ticker} has a strong track record of reliable dividend payments.` : `${ticker} offers a ${stockData.yield && stockData.yield > 3 ? 'competitive' : 'moderate'} dividend yield of ${stockData.yield?.toFixed(2)}%. Review the company's fundamentals and your investment goals before investing.`}`}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

// Helper Components
function StatCard({ label, value, highlighted = false }: { label: string; value: string; highlighted?: boolean }) {
  return (
    <div className={`p-4 rounded-xl border ${highlighted ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`}>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">{label}</p>
      <p className={`text-2xl font-bold ${highlighted ? 'text-blue-600 dark:text-blue-400' : 'text-slate-900 dark:text-white'}`}>
        {value}
      </p>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b border-slate-200 dark:border-slate-700 pb-6">
      <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
        {question}
      </h3>
      <p className="text-slate-600 dark:text-slate-400">
        {answer}
      </p>
    </div>
  );
}

// Fetch stock data (replace with real API in production)
async function getStockData(ticker: string) {
  // Check if stock is in our database
  const stock = DIVIDEND_ARISTOCRATS.find(
    (s) => s.ticker.toUpperCase() === ticker.toUpperCase()
  );

  if (!stock) {
    // In production, fetch from Financial Modeling Prep API
    return null;
  }

  return {
    name: stock.name,
    ticker: stock.ticker,
    price: stock.price || 100,
    annualDividend: stock.annualDividend || 4,
    yield: stock.yield || 4,
    dividendGrowth5y: stock.dividendGrowth5Year || 5,
    sector: stock.sector,
    isDividendAristocrat: stock.yearsOfGrowth >= 25,
    consecutiveYears: stock.yearsOfGrowth,
    paymentFrequency: 'quarterly',
    paymentsPerYear: 4,
  };
}
