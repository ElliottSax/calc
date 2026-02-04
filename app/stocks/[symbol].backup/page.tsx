import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getStockBySymbol, generateStockMetadata, getRelatedStocks, TOP_DIVIDEND_STOCKS } from '@/lib/seo/stock-data'
import { generateStockProfileSchema, generateBreadcrumbSchema } from '@/lib/seo/structured-data'
import { StructuredData } from '@/components/seo/StructuredData'
import { StockProfileContent } from '@/components/stocks/StockProfileContent'
import { RelatedStocks } from '@/components/seo/RelatedStocks'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { Header } from '@/components/layout/Header'

interface PageProps {
  params: {
    symbol: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const stock = getStockBySymbol(params.symbol)
  
  if (!stock) {
    return {
      title: 'Stock Not Found',
      description: 'The requested stock profile could not be found.'
    }
  }

  const metadata = generateStockMetadata(stock)
  
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'article',
      url: `https://dividendcalculatorhub.com/stocks/${stock.symbol.toLowerCase()}`,
      siteName: 'Dividend Calculator Hub',
      images: [
        {
          url: `/og/stocks/${stock.symbol.toLowerCase()}.png`,
          width: 1200,
          height: 630,
          alt: `${stock.name} dividend analysis`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: [`/og/stocks/${stock.symbol.toLowerCase()}.png`]
    },
    alternates: {
      canonical: `https://dividendcalculatorhub.com/stocks/${stock.symbol.toLowerCase()}`
    }
  }
}

export async function generateStaticParams() {
  return TOP_DIVIDEND_STOCKS.map((stock) => ({
    symbol: stock.symbol.toLowerCase()
  }))
}

export default function StockProfilePage({ params }: PageProps) {
  const stock = getStockBySymbol(params.symbol)
  
  if (!stock) {
    notFound()
  }

  const relatedStocks = getRelatedStocks(stock)
  
  // Breadcrumb data
  const breadcrumbItems = [
    { name: 'Home', url: 'https://dividendcalculatorhub.com' },
    { name: 'Stocks', url: 'https://dividendcalculatorhub.com/stocks' },
    { name: stock.symbol, url: `https://dividendcalculatorhub.com/stocks/${stock.symbol.toLowerCase()}` }
  ]

  // Structured data
  const stockSchema = generateStockProfileSchema({
    symbol: stock.symbol,
    name: stock.name,
    description: stock.description,
    price: stock.price,
    yield: stock.currentYield,
    sector: stock.sector,
    exchange: stock.exchange
  })

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems)

  return (
    <>
      <StructuredData data={stockSchema} />
      <StructuredData data={breadcrumbSchema} />
      
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <BreadcrumbNav items={breadcrumbItems} />
        
        <div className="max-w-7xl mx-auto">
          <StockProfileContent stock={stock} />
          
          {/* Related Stocks Section */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">
              Similar {stock.sector} Dividend Stocks
            </h2>
            <RelatedStocks stocks={relatedStocks} currentSymbol={stock.symbol} />
          </section>

          {/* SEO Content Section */}
          <section className="mt-12 prose prose-lg max-w-none">
            <h2>About {stock.name} Dividends</h2>
            <p>
              {stock.name} ({stock.symbol}) is a {stock.sector} company that has been paying 
              dividends for {stock.keyMetrics.consecutiveYears} consecutive years. With a current 
              dividend yield of {stock.currentYield.toFixed(2)}%, {stock.symbol} offers investors 
              a {stock.currentYield > 3 ? 'high-yield' : 'moderate'} income opportunity.
            </p>
            
            <h3>{stock.symbol} Dividend Safety</h3>
            <p>
              The company maintains a payout ratio of {stock.keyMetrics.payoutRatio}%, which 
              {stock.keyMetrics.payoutRatio < 60 ? 'indicates a safe and sustainable dividend' : 
               stock.keyMetrics.payoutRatio < 80 ? 'suggests the dividend is reasonably safe' :
               'may indicate limited room for dividend growth'}.
            </p>
            
            <h3>Dividend Growth History</h3>
            <p>
              Over the past 5 years, {stock.name} has grown its dividend at an average annual 
              rate of {stock.keyMetrics.dividendGrowthRate5Y}%. This growth rate 
              {stock.keyMetrics.dividendGrowthRate5Y > 5 ? ' exceeds inflation, providing real income growth' :
               stock.keyMetrics.dividendGrowthRate5Y > 0 ? ' helps protect against inflation' :
               ' has been negative, which investors should monitor closely'}.
            </p>
          </section>
        </div>
      </main>
    </>
  )
}