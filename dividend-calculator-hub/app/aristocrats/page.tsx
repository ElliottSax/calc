import { Metadata } from 'next'
import { AristocratsExplorer } from '@/components/aristocrats/AristocratsExplorer'

export const metadata: Metadata = {
  title: 'Dividend Aristocrats List 2024 | Complete Analysis & Screener',
  description: 'Explore all S&P 500 Dividend Aristocrats with our interactive screener. Filter by yield, growth rate, and sector. Updated daily with real-time data.',
  keywords: 'dividend aristocrats, dividend aristocrats list, S&P 500 dividend aristocrats, dividend stocks, dividend growth stocks, aristocrats screener',
  openGraph: {
    title: 'Dividend Aristocrats List 2024 - Interactive Screener',
    description: 'Complete list of S&P 500 Dividend Aristocrats with yields, growth rates, and detailed analysis.',
    type: 'website',
    url: 'https://dividendcalculatorhub.com/aristocrats',
    images: [
      {
        url: '/og-aristocrats.png',
        width: 1200,
        height: 630,
        alt: 'Dividend Aristocrats Screener'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dividend Aristocrats List 2024',
    description: 'Interactive screener for S&P 500 Dividend Aristocrats'
  },
  alternates: {
    canonical: 'https://dividendcalculatorhub.com/aristocrats'
  }
}

// Structured data for search engines
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Dividend Aristocrats List and Screener",
  "description": "Interactive screener for S&P 500 Dividend Aristocrats with real-time data",
  "url": "https://dividendcalculatorhub.com/aristocrats",
  "mainEntity": {
    "@type": "Table",
    "about": "S&P 500 Dividend Aristocrats",
    "name": "Dividend Aristocrats Screener"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dividendcalculatorhub.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Dividend Aristocrats",
        "item": "https://dividendcalculatorhub.com/aristocrats"
      }
    ]
  }
}

export default function AristocratsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          {/* SEO-optimized heading structure */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Dividend Aristocrats List 2024
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
              Explore the complete list of S&P 500 Dividend Aristocrats - companies that have 
              increased their dividends for at least 25 consecutive years. Use our interactive 
              screener to filter by yield, growth rate, sector, and more.
            </p>
          </header>

          {/* Main content */}
          <AristocratsExplorer />

          {/* SEO content section */}
          <section className="mt-12 prose prose-lg max-w-none dark:prose-invert">
            <h2>What are Dividend Aristocrats?</h2>
            <p>
              Dividend Aristocrats are S&P 500 companies that have increased their dividend 
              payments for at least 25 consecutive years. These companies demonstrate 
              exceptional financial stability and commitment to returning value to shareholders.
            </p>

            <h3>Key Criteria for Dividend Aristocrats</h3>
            <ul>
              <li>Member of the S&P 500 index</li>
              <li>25+ consecutive years of dividend increases</li>
              <li>Minimum market capitalization requirements</li>
              <li>Sufficient liquidity for trading</li>
            </ul>

            <h3>Why Invest in Dividend Aristocrats?</h3>
            <p>
              Dividend Aristocrats offer several advantages for long-term investors:
            </p>
            <ul>
              <li><strong>Reliability:</strong> Proven track record of consistent dividend growth</li>
              <li><strong>Quality:</strong> Typically large, established companies with strong fundamentals</li>
              <li><strong>Income Growth:</strong> Regular dividend increases help offset inflation</li>
              <li><strong>Lower Volatility:</strong> Often less volatile than the broader market</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}