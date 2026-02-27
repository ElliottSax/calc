/**
 * Structured data generators for SEO
 */

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://calc-bay-one.vercel.app'

interface CalculatorStructuredData {
  name: string
  description: string
  url: string
  category?: string
  inputFields?: Array<{
    name: string
    description: string
    required: boolean
  }>
  outputFields?: Array<{
    name: string
    description: string
  }>
}

export function generateCalculatorSchema(data: CalculatorStructuredData) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": data.name,
    "description": data.description,
    "url": data.url,
    "applicationCategory": "FinanceApplication",
    "applicationSubCategory": data.category,
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      ...(data.inputFields || []).map(field => `Input: ${field.name}`),
      ...(data.outputFields || []).map(field => `Output: ${field.name}`)
    ],
    "screenshot": {
      "@type": "ImageObject",
      "url": `${data.url}/screenshot.png`,
      "caption": `${data.name} interface`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    },
    "author": {
      "@type": "Organization",
      "name": "Dividend Calculator Hub",
      "url": baseUrl
    }
  }
}

export function generateFinancialCalculatorSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Dividend Calculator Hub",
    "description": "Free online dividend calculators and investment tools",
    "url": baseUrl,
    "serviceType": "Financial Calculators",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dividend Calculators",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DRIP Calculator",
            "description": "Calculate dividend reinvestment returns"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Yield Calculator",
            "description": "Calculate dividend yield and income"
          }
        }
      ]
    }
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  author: string
  datePublished: string
  dateModified: string
  imageUrl: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified,
    "image": article.imageUrl,
    "url": article.url,
    "publisher": {
      "@type": "Organization",
      "name": "Dividend Calculator Hub",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    }
  }
}

export function generateStockProfileSchema(stock: {
  symbol: string
  name: string
  description: string
  price: number
  yield: number
  sector: string
  exchange: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": stock.name,
    "tickerSymbol": stock.symbol,
    "description": stock.description,
    "url": `${baseUrl}/stocks/${stock.symbol.toLowerCase()}`,
    "sameAs": [
      `https://finance.yahoo.com/quote/${stock.symbol}`,
      `https://www.google.com/finance/quote/${stock.symbol}:${stock.exchange}`
    ],
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "FinancialProduct",
        "name": "Common Stock",
        "category": stock.sector
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Stock Information",
      "itemListElement": [
        {
          "@type": "Offer",
          "price": stock.price,
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": stock.price,
            "priceCurrency": "USD",
            "valueAddedTaxIncluded": false
          }
        }
      ]
    }
  }
}