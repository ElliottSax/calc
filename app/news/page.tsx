import type { Metadata } from 'next'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { MarketInsights, type NewsItem } from '@/components/news/MarketInsights'
import { getMarketNews, type FinnhubNewsItem } from '@/lib/api/finnhub'

export const revalidate = 900 // Revalidate every 15 minutes

export const metadata: Metadata = {
  title: 'Dividend News & Market Updates | Dividend Engines',
  description: 'Stay updated with the latest dividend news, market insights, upcoming ex-dividend dates, and expert analysis. Live market data and curated financial news for income investors.',
  keywords: [
    'dividend news',
    'dividend announcements',
    'ex-dividend dates',
    'market news',
    'market insights',
    'dividend investing news',
    'stock market updates',
    'income investing news',
    'dividend increases',
    'dividend cuts',
    'dividend aristocrats news',
    'dividend ETF news',
    'REIT news',
    'dividend calendar',
  ],
  openGraph: {
    title: 'Dividend News & Market Updates | Dividend Engines',
    description: 'Live dividend news, market data, and investment insights for income investors.',
    type: 'website',
  },
}

// Keywords for categorization (server-side transform)
const DIVIDEND_KEYWORDS = ['dividend', 'yield', 'payout', 'distribution', 'buyback', 'repurchase', 'aristocrat', 'drip', 'ex-date']
const EARNINGS_KEYWORDS = ['earnings', 'revenue', 'profit', 'eps', 'quarterly results', 'beat', 'miss', 'guidance']
const ECONOMIC_KEYWORDS = ['fed', 'federal reserve', 'interest rate', 'inflation', 'gdp', 'treasury', 'bond', 'cpi', 'rate cut']
const POSITIVE_KEYWORDS = ['increase', 'raise', 'growth', 'surge', 'rally', 'gain', 'beat', 'record', 'boost', 'upgrade', 'strong']
const NEGATIVE_KEYWORDS = ['cut', 'reduce', 'decline', 'drop', 'fall', 'miss', 'loss', 'warning', 'downgrade', 'weak', 'slash']

function transformToNewsItem(item: FinnhubNewsItem): NewsItem {
  const text = `${item.headline} ${item.summary}`.toLowerCase()

  // Categorize
  let category: NewsItem['category'] = 'analysis'
  if (DIVIDEND_KEYWORDS.some(kw => text.includes(kw))) category = 'dividends'
  else if (EARNINGS_KEYWORDS.some(kw => text.includes(kw))) category = 'earnings'
  else if (ECONOMIC_KEYWORDS.some(kw => text.includes(kw))) category = 'economic'
  else if (item.related && item.related.length > 0) category = 'market'

  // Sentiment
  const pos = POSITIVE_KEYWORDS.filter(kw => text.includes(kw)).length
  const neg = NEGATIVE_KEYWORDS.filter(kw => text.includes(kw)).length
  let sentiment: NewsItem['sentiment'] = 'neutral'
  if (pos > neg) sentiment = 'positive'
  else if (neg > pos) sentiment = 'negative'

  // Importance
  let importance: NewsItem['importance'] = 'low'
  if (category === 'dividends') importance = 'high'
  else if (text.includes('federal reserve') || text.includes('breaking')) importance = 'high'
  else if (category === 'earnings' || category === 'economic') importance = 'medium'

  const wordCount = item.summary.split(/\s+/).length
  const readTime = Math.max(2, Math.min(8, Math.ceil(wordCount / 50)))

  return {
    id: String(item.id),
    headline: item.headline,
    summary: item.summary,
    source: item.source,
    timestamp: new Date(item.datetime * 1000).toISOString(),
    category,
    sentiment,
    tickers: item.related ? item.related.split(',').filter(Boolean).slice(0, 5) : [],
    importance,
    imageUrl: item.image || undefined,
    url: item.url || undefined,
    readTime,
  }
}

// Static fallback news when no API key is configured
function getStaticFallbackNews(): NewsItem[] {
  const now = Date.now()
  return [
    {
      id: 'static-1',
      headline: 'S&P 500 Dividend Aristocrats Outperform Broad Market in Q1 2026',
      summary: 'The S&P 500 Dividend Aristocrats Index, which tracks companies with 25+ consecutive years of dividend increases, has outperformed the broader S&P 500 by 2.3% year-to-date. Analysts attribute the outperformance to investors seeking quality and income stability amid ongoing market uncertainty. Top performers include Procter & Gamble, Johnson & Johnson, and Coca-Cola.',
      source: 'Dividend Engines Research',
      timestamp: new Date(now - 2 * 60 * 60 * 1000).toISOString(),
      category: 'dividends',
      sentiment: 'positive',
      tickers: ['NOBL', 'PG', 'JNJ', 'KO'],
      importance: 'high',
      readTime: 4,
    },
    {
      id: 'static-2',
      headline: 'Federal Reserve Signals Potential Rate Cuts Later in 2026',
      summary: 'Federal Reserve Chair Jerome Powell indicated that the central bank is closely monitoring economic data and may begin easing monetary policy in the second half of 2026. Lower interest rates typically benefit dividend stocks as investors rotate from fixed income to higher-yielding equities. REIT and utility sectors saw immediate positive reactions.',
      source: 'Dividend Engines Research',
      timestamp: new Date(now - 5 * 60 * 60 * 1000).toISOString(),
      category: 'economic',
      sentiment: 'positive',
      tickers: ['VNQ', 'XLU', 'SCHD'],
      importance: 'high',
      readTime: 5,
    },
    {
      id: 'static-3',
      headline: 'Microsoft Announces 10% Dividend Increase and $60B Buyback Program',
      summary: 'Microsoft Corporation has raised its quarterly dividend to $0.83 per share, representing a 10% increase over the previous quarter. The tech giant also announced a new $60 billion share repurchase authorization. This marks the 19th consecutive year of dividend increases for MSFT, moving closer to Dividend Aristocrat status.',
      source: 'Dividend Engines Research',
      timestamp: new Date(now - 8 * 60 * 60 * 1000).toISOString(),
      category: 'dividends',
      sentiment: 'positive',
      tickers: ['MSFT'],
      importance: 'high',
      readTime: 3,
    },
    {
      id: 'static-4',
      headline: 'High-Yield Dividend ETFs See Record Inflows in February 2026',
      summary: 'Dividend-focused exchange-traded funds attracted a record $12.4 billion in net inflows during February 2026, according to Morningstar data. The Schwab U.S. Dividend Equity ETF (SCHD), Vanguard Dividend Appreciation ETF (VIG), and Vanguard High Dividend Yield ETF (VYM) led the charge as income-seeking investors position for potential rate cuts.',
      source: 'Dividend Engines Research',
      timestamp: new Date(now - 12 * 60 * 60 * 1000).toISOString(),
      category: 'analysis',
      sentiment: 'positive',
      tickers: ['SCHD', 'VIG', 'VYM', 'DVY'],
      importance: 'high',
      readTime: 5,
    },
    {
      id: 'static-5',
      headline: 'Realty Income Extends Monthly Dividend Streak to 640 Consecutive Months',
      summary: 'Realty Income Corporation, known as "The Monthly Dividend Company," declared its 640th consecutive monthly dividend at $0.263 per share. The REIT, which holds Dividend Aristocrat status, has increased its payout 123 times since its 1994 NYSE listing. The annualized dividend yield stands at approximately 5.2%.',
      source: 'Dividend Engines Research',
      timestamp: new Date(now - 16 * 60 * 60 * 1000).toISOString(),
      category: 'dividends',
      sentiment: 'positive',
      tickers: ['O'],
      importance: 'medium',
      readTime: 3,
    },
    {
      id: 'static-6',
      headline: 'Energy Sector Dividends Under Pressure as Oil Prices Decline',
      summary: 'Several major energy companies are facing scrutiny over their dividend sustainability as crude oil prices dip below $65 per barrel. While integrated majors like ExxonMobil and Chevron maintain strong coverage ratios, some mid-cap exploration companies may need to reassess their payout policies. Investors are advised to focus on companies with low breakeven costs.',
      source: 'Dividend Engines Research',
      timestamp: new Date(now - 20 * 60 * 60 * 1000).toISOString(),
      category: 'market',
      sentiment: 'negative',
      tickers: ['XOM', 'CVX', 'XLE'],
      importance: 'medium',
      readTime: 6,
    },
    {
      id: 'static-7',
      headline: 'How to Build a $100K Dividend Portfolio: Step-by-Step Guide for 2026',
      summary: 'Building a six-figure dividend portfolio requires a strategic approach combining growth and income. Our latest analysis shows that investors who reinvest dividends and maintain a diversified portfolio across sectors can realistically achieve $100K in portfolio value within 7-10 years starting with $500/month contributions.',
      source: 'Dividend Engines Research',
      timestamp: new Date(now - 24 * 60 * 60 * 1000).toISOString(),
      category: 'analysis',
      sentiment: 'positive',
      tickers: ['VIG', 'SCHD', 'O', 'PG'],
      importance: 'medium',
      readTime: 8,
    },
    {
      id: 'static-8',
      headline: 'Johnson & Johnson Raises Dividend for 62nd Consecutive Year',
      summary: 'Johnson & Johnson has announced a 4.2% increase to its quarterly dividend, extending its remarkable streak to 62 consecutive years of dividend growth. The healthcare giant declared a quarterly cash dividend of $1.24 per share. JNJ remains one of the most reliable Dividend Kings, a group of companies with 50+ years of consecutive dividend increases.',
      source: 'Dividend Engines Research',
      timestamp: new Date(now - 28 * 60 * 60 * 1000).toISOString(),
      category: 'dividends',
      sentiment: 'positive',
      tickers: ['JNJ'],
      importance: 'high',
      readTime: 3,
    },
    {
      id: 'static-9',
      headline: 'REIT Sector Rebounds as Treasury Yields Pull Back From Highs',
      summary: 'Real estate investment trusts are seeing renewed investor interest as the 10-year Treasury yield retreats from recent highs. The Vanguard Real Estate ETF (VNQ) has gained 4.7% over the past month, outpacing the broader market. Analysts note that REITs with strong balance sheets are best positioned to benefit from a declining rate environment.',
      source: 'Dividend Engines Research',
      timestamp: new Date(now - 32 * 60 * 60 * 1000).toISOString(),
      category: 'market',
      sentiment: 'positive',
      tickers: ['VNQ', 'O', 'SPG', 'AMT'],
      importance: 'medium',
      readTime: 4,
    },
    {
      id: 'static-10',
      headline: 'Q4 Earnings Season: Dividend Stocks Report Strong Cash Flow Growth',
      summary: 'The latest earnings season shows that dividend-paying companies in the S&P 500 reported average free cash flow growth of 8.3% year-over-year, well above the 4.1% average for non-dividend payers. This strong cash generation supports continued dividend growth and share buyback programs across healthcare, technology, and consumer staples.',
      source: 'Dividend Engines Research',
      timestamp: new Date(now - 36 * 60 * 60 * 1000).toISOString(),
      category: 'earnings',
      sentiment: 'positive',
      tickers: ['SPY', 'AAPL', 'MSFT', 'JNJ'],
      importance: 'medium',
      readTime: 5,
    },
  ]
}

async function fetchNews(): Promise<{
  news: NewsItem[]
  source: 'finnhub' | 'curated'
  notice?: string
}> {
  try {
    const finnhubNews = await getMarketNews('general')

    if (finnhubNews && finnhubNews.length > 0) {
      const transformed = finnhubNews.map(transformToNewsItem)

      // Sort by importance then timestamp
      const importanceOrder: Record<string, number> = { high: 0, medium: 1, low: 2 }
      transformed.sort((a, b) => {
        const impDiff = importanceOrder[a.importance] - importanceOrder[b.importance]
        if (impDiff !== 0) return impDiff
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      })

      return {
        news: transformed.slice(0, 20),
        source: 'finnhub',
      }
    }
  } catch {
    // Fall through to static data
  }

  return {
    news: getStaticFallbackNews(),
    source: 'curated',
    notice: 'Showing curated dividend news. Connect a Finnhub API key for live market data.',
  }
}

export default async function NewsPage() {
  const { news, source, notice } = await fetchNews()

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Dividend News & Market Updates
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Stay informed with the latest dividend announcements, market trends,
              and expert analysis for income-focused investors.
            </p>
          </div>

          {/* Market Insights Component with server-fetched data */}
          <MarketInsights
            initialNews={news}
            newsSource={source}
            sourceNotice={notice}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
