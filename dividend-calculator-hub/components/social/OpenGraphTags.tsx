import Head from 'next/head'

interface OpenGraphTagsProps {
  title: string
  description: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  siteName?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
  tags?: string[]
}

export function OpenGraphTags({
  title,
  description,
  image = '/og/default.png',
  url,
  type = 'website',
  siteName = 'Dividend Calculator Hub',
  author,
  publishedTime,
  modifiedTime,
  tags = []
}: OpenGraphTagsProps) {
  const canonicalUrl = url || (typeof window !== 'undefined' ? window.location.href : '')
  const ogImage = image.startsWith('http') ? image : `https://dividendcalculatorhub.com${image}`
  
  return (
    <Head>
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Article-specific tags */}
      {type === 'article' && (
        <>
          {author && <meta property="article:author" content={author} />}
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
          <meta property="article:section" content="Finance" />
        </>
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@DividendCalcHub" />
      <meta name="twitter:creator" content="@DividendCalcHub" />
      
      {/* Additional meta tags for better sharing */}
      <meta property="fb:app_id" content="your-facebook-app-id" />
      <meta name="twitter:app:name:iphone" content="Dividend Calculator Hub" />
      <meta name="twitter:app:name:ipad" content="Dividend Calculator Hub" />
      <meta name="twitter:app:name:googleplay" content="Dividend Calculator Hub" />
      
      {/* Schema.org for search engines */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={ogImage} />
    </Head>
  )
}

/**
 * Generate Open Graph image URL for dynamic content
 */
export function generateOGImageUrl(params: {
  title: string
  description?: string
  type?: 'stock' | 'article' | 'calculator'
  symbol?: string
  yield?: number
  price?: number
}): string {
  const baseUrl = 'https://dividendcalculatorhub.com/api/og'
  const searchParams = new URLSearchParams()
  
  searchParams.append('title', params.title)
  if (params.description) searchParams.append('description', params.description)
  if (params.type) searchParams.append('type', params.type)
  if (params.symbol) searchParams.append('symbol', params.symbol)
  if (params.yield) searchParams.append('yield', params.yield.toString())
  if (params.price) searchParams.append('price', params.price.toString())
  
  return `${baseUrl}?${searchParams.toString()}`
}

/**
 * Pre-built OG tags for specific page types
 */
export function StockProfileOGTags({ symbol, name, yield: stockYield, price }: {
  symbol: string
  name: string
  yield: number
  price: number
}) {
  return (
    <OpenGraphTags
      title={`${symbol} Stock Analysis | ${yield.toFixed(2)}% Dividend Yield`}
      description={`Comprehensive dividend analysis for ${name} (${symbol}). Current yield: ${stockYield.toFixed(2)}%, Price: $${price.toFixed(2)}. View dividend history and calculate returns.`}
      image={generateOGImageUrl({
        title: `${symbol} Dividend Analysis`,
        type: 'stock',
        symbol,
        yield: stockYield,
        price
      })}
      type="article"
      tags={['dividend stocks', symbol, 'stock analysis', 'dividend yield']}
    />
  )
}

export function BlogPostOGTags({ title, excerpt, author, publishDate, slug, tags }: {
  title: string
  excerpt: string
  author: string
  publishDate: string
  slug: string
  tags: string[]
}) {
  return (
    <OpenGraphTags
      title={title}
      description={excerpt}
      image={generateOGImageUrl({
        title,
        description: excerpt,
        type: 'article'
      })}
      type="article"
      author={author}
      publishedTime={publishDate}
      tags={tags}
      url={`https://dividendcalculatorhub.com/blog/${slug}`}
    />
  )
}

export function CalculatorOGTags({ calculatorType, description }: {
  calculatorType: string
  description: string
}) {
  const titles: Record<string, string> = {
    drip: 'DRIP Calculator | Dividend Reinvestment Calculator',
    yield: 'Dividend Yield Calculator | Calculate Stock Yields',
    growth: 'Dividend Growth Calculator | Project Future Income'
  }
  
  return (
    <OpenGraphTags
      title={titles[calculatorType] || `${calculatorType} Calculator`}
      description={description}
      image={generateOGImageUrl({
        title: titles[calculatorType] || `${calculatorType} Calculator`,
        type: 'calculator'
      })}
      type="website"
    />
  )
}