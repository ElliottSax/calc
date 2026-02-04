import { NextResponse } from 'next/server'

interface AffiliateBroker {
  id: string
  name: string
  url: string
  affiliateUrl: string
  description: string
  features: string[]
  minDeposit: number
  commission: string
  rating: number
  pros: string[]
  cons: string[]
  bestFor: string
  promotions?: string
  lastUpdated: string
}

const AFFILIATE_BROKERS: AffiliateBroker[] = [
  {
    id: 'charles-schwab',
    name: 'Charles Schwab',
    url: 'https://www.schwab.com',
    affiliateUrl: 'https://refer.schwab.com/dividendcalc',
    description: 'Full-service broker with excellent research tools and no commission trades',
    features: ['$0 stock trades', '$0 ETF trades', 'Fractional shares', 'DRIP available', 'No minimum'],
    minDeposit: 0,
    commission: '$100 per referral',
    rating: 4.9,
    pros: ['Excellent customer service', 'Comprehensive research', 'No account minimums', 'Free DRIP'],
    cons: ['Higher margin rates', 'Limited cryptocurrency options'],
    bestFor: 'Long-term dividend investors',
    promotions: 'Get $100 when you open and fund an account',
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 'vanguard',
    name: 'Vanguard',
    url: 'https://investor.vanguard.com',
    affiliateUrl: 'https://vanguard.com/refer/dividendcalc',
    description: 'Leader in low-cost index funds and ETFs perfect for dividend investors',
    features: ['$0 Vanguard ETFs', 'Low expense ratios', 'Automatic investing', 'Tax-loss harvesting'],
    minDeposit: 3000,
    commission: '$150 per referral',
    rating: 4.8,
    pros: ['Industry-low expense ratios', 'Excellent retirement planning', 'Strong dividend ETFs'],
    cons: ['$3,000 minimum for most funds', 'Limited trading tools'],
    bestFor: 'Buy-and-hold dividend investors',
    promotions: '$150 bonus for new accounts over $10,000',
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 'fidelity',
    name: 'Fidelity',
    url: 'https://www.fidelity.com',
    affiliateUrl: 'https://fidelity.com/refer/dividendcalc',
    description: 'Comprehensive broker with zero-fee index funds and strong research',
    features: ['$0 trades', 'Zero expense ratio funds', 'Fractional shares', 'Strong mobile app'],
    minDeposit: 0,
    commission: '$125 per referral',
    rating: 4.9,
    pros: ['No minimums', 'Excellent research', 'Great customer service', 'Free DRIP'],
    cons: ['Complex fee structure for some services'],
    bestFor: 'All types of dividend investors',
    promotions: 'Get $100 with qualifying deposit',
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 'm1-finance',
    name: 'M1 Finance',
    url: 'https://www.m1finance.com',
    affiliateUrl: 'https://m1finance.8bxp97.net/dividendcalc',
    description: 'Automated investing platform with free rebalancing and fractional shares',
    features: ['Automated rebalancing', 'Fractional shares', 'Dynamic rebalancing', 'Tax-optimized'],
    minDeposit: 100,
    commission: '$30-50 per referral',
    rating: 4.6,
    pros: ['Free automated investing', 'Fractional shares from $1', 'Portfolio line of credit'],
    cons: ['Limited research tools', 'One trading window per day'],
    bestFor: 'Hands-off dividend investors',
    promotions: 'Get $30 when you fund your account',
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 'etoro',
    name: 'eToro',
    url: 'https://www.etoro.com',
    affiliateUrl: 'https://etoro.tw/dividendcalc',
    description: 'Social trading platform with copy trading and fractional shares',
    features: ['Copy trading', 'Social features', 'Fractional shares', 'Cryptocurrency'],
    minDeposit: 200,
    commission: '$50-200 CPA',
    rating: 4.3,
    pros: ['Social trading features', 'Wide asset selection', 'User-friendly interface'],
    cons: ['Higher spreads', 'Withdrawal fees'],
    bestFor: 'Beginners wanting to learn from others',
    promotions: '$100 welcome bonus',
    lastUpdated: new Date().toISOString(),
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const format = searchParams.get('format') || 'xml'

  if (format === 'json') {
    return NextResponse.json({
      brokers: AFFILIATE_BROKERS,
      generated: new Date().toISOString(),
      total: AFFILIATE_BROKERS.length,
    })
  }

  // Generate XML feed
  const xml = generateXMLFeed(AFFILIATE_BROKERS)

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}

function generateXMLFeed(brokers: AffiliateBroker[]): string {
  const escapeXML = (str: string) => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;')
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Dividend Calculator Pro - Recommended Brokers</title>
    <link>https://dividendcalculator.pro</link>
    <description>Curated list of the best brokers for dividend investing</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>Dividend Calculator Pro Feed Generator</generator>

    ${brokers.map(broker => `
    <item>
      <guid isPermaLink="false">${broker.id}</guid>
      <title>${escapeXML(broker.name)} - ${escapeXML(broker.bestFor)}</title>
      <link>${broker.affiliateUrl}</link>
      <description>${escapeXML(broker.description)}</description>
      <content:encoded><![CDATA[
        <h2>${broker.name}</h2>
        <p><strong>Rating:</strong> ${broker.rating}/5.0</p>
        <p><strong>Best For:</strong> ${broker.bestFor}</p>
        <p>${broker.description}</p>

        <h3>Key Features:</h3>
        <ul>
          ${broker.features.map(f => `<li>${f}</li>`).join('')}
        </ul>

        <h3>Pros:</h3>
        <ul>
          ${broker.pros.map(p => `<li>${p}</li>`).join('')}
        </ul>

        <h3>Cons:</h3>
        <ul>
          ${broker.cons.map(c => `<li>${c}</li>`).join('')}
        </ul>

        ${broker.promotions ? `<p><strong>Current Promotion:</strong> ${broker.promotions}</p>` : ''}

        <p><a href="${broker.affiliateUrl}">Open Account at ${broker.name}</a></p>
      ]]></content:encoded>

      <category>Broker</category>
      <category>Dividend Investing</category>
      <pubDate>${new Date(broker.lastUpdated).toUTCString()}</pubDate>

      <enclosure url="${broker.affiliateUrl}" type="text/html" />

      <broker:name>${escapeXML(broker.name)}</broker:name>
      <broker:rating>${broker.rating}</broker:rating>
      <broker:minDeposit>${broker.minDeposit}</broker:minDeposit>
      <broker:commission>${escapeXML(broker.commission)}</broker:commission>
      <broker:affiliateUrl>${broker.affiliateUrl}</broker:affiliateUrl>
    </item>
    `).join('')}
  </channel>
</rss>`

  return xml
}

// Product feed for comparison shopping engines
// This is a helper function that could be used by another route
async function generateProductFeed(): Promise<string> {
  const products = AFFILIATE_BROKERS.map(broker => ({
    id: broker.id,
    title: `${broker.name} Brokerage Account`,
    description: broker.description,
    link: broker.affiliateUrl,
    price: broker.minDeposit === 0 ? 'FREE' : `${broker.minDeposit} USD`,
    brand: broker.name,
    condition: 'new',
    availability: 'in stock',
    image_link: `https://dividendcalculator.pro/images/brokers/${broker.id}.png`,
    product_type: 'Financial Services > Investment Accounts',
    google_product_category: '3937', // Financial Services category
    custom_label_0: broker.bestFor,
    custom_label_1: `Rating: ${broker.rating}`,
    custom_label_2: broker.commission,
  }))

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>Dividend Calculator Pro - Broker Accounts</title>
    <link>https://dividendcalculator.pro</link>
    <description>Investment brokerage accounts for dividend investors</description>

    ${products.map(product => `
    <item>
      <g:id>${product.id}</g:id>
      <g:title>${product.title}</g:title>
      <g:description>${product.description}</g:description>
      <g:link>${product.link}</g:link>
      <g:price>${product.price}</g:price>
      <g:brand>${product.brand}</g:brand>
      <g:condition>${product.condition}</g:condition>
      <g:availability>${product.availability}</g:availability>
      <g:image_link>${product.image_link}</g:image_link>
      <g:product_type>${product.product_type}</g:product_type>
      <g:google_product_category>${product.google_product_category}</g:google_product_category>
      <g:custom_label_0>${product.custom_label_0}</g:custom_label_0>
      <g:custom_label_1>${product.custom_label_1}</g:custom_label_1>
      <g:custom_label_2>${product.custom_label_2}</g:custom_label_2>
    </item>
    `).join('')}
  </channel>
</rss>`

  return xml
}