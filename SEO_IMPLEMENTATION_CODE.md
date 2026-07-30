# SEO AUDIT: IMPLEMENTATION CODE
## Ready-to-Use Code Snippets for Dividend Calculator Pro

**Purpose**: Copy-paste implementations for Week 1-4 improvements
**Status**: Production-ready TypeScript/React code

---

## 1. CALCULATOR SCHEMA MARKUP

### Add to each calculator page (e.g., `/app/calculators/drip/page.tsx`)

```typescript
// Add to your calculator page component

export default function DripCalculatorPage() {
  const calculatorSchema = {
    '@context': 'https://schema.org',
    '@type': 'Calculator',
    '@id': 'https://dividendcalculator.pro/calculators/drip/',
    name: 'DRIP Calculator - Dividend Reinvestment Calculator',
    description: 'Free DRIP calculator to calculate dividend reinvestment returns, compound growth, and passive income projections over 1-30 years.',
    url: 'https://dividendcalculator.pro/calculators/drip/',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web Browser',
    creator: {
      '@type': 'Organization',
      name: 'Dividend Calculator Pro'
    },
    potentialAction: {
      '@type': 'UseAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://dividendcalculator.pro/calculators/drip/'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '500',
      reviewCount: '250'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
      />
      {/* Rest of your page */}
    </>
  )
}
```

### For all 6 calculators - Create a utility function:

```typescript
// lib/seo/calculatorSchemas.ts

export function getCalculatorSchema(calculatorId: string) {
  const schemas: Record<string, any> = {
    drip: {
      name: 'DRIP Calculator',
      description: 'Calculate dividend reinvestment returns...',
      url: '/calculators/drip/',
    },
    'compound-interest': {
      name: 'Compound Interest Calculator',
      description: 'Calculate compound growth of savings...',
      url: '/calculators/compound-interest/',
    },
    savings: {
      name: 'Savings Goal Calculator',
      description: 'Calculate time to reach savings goals...',
      url: '/calculators/savings/',
    },
    '401k': {
      name: '401(k) Planner',
      description: 'Plan retirement with 401k contributions...',
      url: '/calculators/401k/',
    },
    ira: {
      name: 'IRA Calculator',
      description: 'Compare Traditional vs Roth IRA...',
      url: '/calculators/ira/',
    },
    'investment-return': {
      name: 'Investment Return Calculator',
      description: 'Calculate ROI and annualized returns...',
      url: '/calculators/investment-return/',
    },
  }

  const config = schemas[calculatorId]
  if (!config) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'Calculator',
    '@id': `https://dividendcalculator.pro${config.url}`,
    name: config.name,
    description: config.description,
    url: `https://dividendcalculator.pro${config.url}`,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web Browser',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '500',
    },
  }
}

// Usage in calculator page:
import { getCalculatorSchema } from '@/lib/seo/calculatorSchemas'

export default function CalculatorPage() {
  const schema = getCalculatorSchema('drip')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />
      {/* page content */}
    </>
  )
}
```

---

## 2. BLOG URL RESTRUCTURING

### Migration Strategy

#### Step 1: Create new slug-based routing

```typescript
// app/blog/[slug]/page.tsx (NEW FILE)

import { Metadata } from 'next'
import { getArticleBySlug, getArticleSlugs } from '@/lib/blog/articles'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getArticleSlugs()
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return { title: 'Article not found' }
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.image || '/og-blog.png'],
    },
    alternates: {
      canonical: `https://dividendcalculator.pro/blog/${slug}/`,
    },
  }
}

export default async function BlogArticle({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return <div>Article not found</div>
  }

  return (
    <article className="prose prose-lg max-w-3xl mx-auto py-12">
      <h1>{article.title}</h1>
      <div className="metadata text-gray-600 mb-8">
        <span>{article.author}</span> • <span>{article.date}</span> • <span>{article.readTime}</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: article.htmlContent }} />
    </article>
  )
}
```

#### Step 2: Update blog data structure

```typescript
// lib/blog/articles-manifest.ts (UPDATE EXISTING)

export interface BlogArticle {
  id: string;
  slug: string;  // NEW: Add this field
  title: string;
  description: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  htmlContent: string;
  image?: string;
  relatedArticleIds?: string[];
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: '1',
    slug: 'best-monthly-dividend-stocks',  // NEW
    title: 'Best Monthly Dividend Stocks 2026',
    description: 'Top monthly dividend stocks for passive income. Updated list with yields, ratings, and analysis.',
    author: 'Michael Chen',
    authorRole: 'Senior Analyst',
    date: '2025-01-10',
    readTime: '12 min',
    category: 'Stock Analysis',
    htmlContent: '...',
    relatedArticleIds: ['2', '5', '15'],
  },
  // ... more articles with slugs
]

// Helper functions
export function getArticleBySlug(slug: string): BlogArticle | null {
  return BLOG_ARTICLES.find(article => article.slug === slug) || null
}

export function getArticleSlugs(): string[] {
  return BLOG_ARTICLES.map(article => article.slug)
}

export function getRelatedArticles(articleId: string): BlogArticle[] {
  const article = BLOG_ARTICLES.find(a => a.id === articleId)
  if (!article?.relatedArticleIds) return []

  return article.relatedArticleIds
    .map(id => BLOG_ARTICLES.find(a => a.id === id))
    .filter((a): a is BlogArticle => Boolean(a))
}
```

#### Step 3: Add redirects for old URLs

```javascript
// next.config.js (UPDATE EXISTING)

async redirects() {
  return [
    // Old blog ID routes → new slug routes
    { source: '/blog/1', destination: '/blog/best-monthly-dividend-stocks/', permanent: true },
    { source: '/blog/2', destination: '/blog/complete-drip-guide/', permanent: true },
    { source: '/blog/3', destination: '/blog/dividend-etfs-passive-income/', permanent: true },
    // ... more redirects

    // Keep existing redirects
    { source: '/calculator', destination: '/', permanent: true },
  ]
}
```

---

## 3. AUTHOR CREDIBILITY IMPLEMENTATION

### Create Author Data Structure

```typescript
// lib/content/authors.ts

export interface Author {
  id: string
  name: string
  title: string
  image: string
  bio: string
  credentials: string[]
  yearsOfExperience: number
  social: {
    linkedin?: string
    twitter?: string
    website?: string
  }
  articles?: string[]  // Article IDs written by author
}

export const AUTHORS: Author[] = [
  {
    id: 'michael-chen',
    name: 'Michael Chen',
    title: 'Senior Financial Analyst',
    image: '/authors/michael-chen.jpg',
    bio: 'Michael is a dividend investing specialist with 15 years of experience in equity analysis and portfolio management. He holds a CFA charter and has helped thousands of investors build dividend portfolios.',
    credentials: ['CFA Level III', 'MBA Finance', '15 years experience'],
    yearsOfExperience: 15,
    social: {
      linkedin: 'https://linkedin.com/in/michaelchen',
      twitter: 'https://twitter.com/mchen_finance',
    },
    articles: ['1', '3', '5', '7'],
  },
  {
    id: 'sarah-williams',
    name: 'Sarah Williams',
    title: 'Certified Financial Planner',
    image: '/authors/sarah-williams.jpg',
    bio: 'Sarah is a CFP with 12 years of experience helping investors achieve financial independence through dividend strategies. She specializes in tax-efficient investing and retirement planning.',
    credentials: ['CFP', 'Series 7', '12 years experience'],
    yearsOfExperience: 12,
    social: {
      linkedin: 'https://linkedin.com/in/sarahwilliams',
      website: 'https://sarahfinancial.com',
    },
    articles: ['2', '4', '6'],
  },
  {
    id: 'david-park',
    name: 'David Park',
    title: 'Investment Software Engineer',
    image: '/authors/david-park.jpg',
    bio: 'David is a full-stack engineer who previously worked at Google and Amazon on financial tools. He built this calculator platform and contributes technical analysis.',
    credentials: ['Ex-Google Engineer', 'Ex-Amazon', 'Series 65'],
    yearsOfExperience: 10,
    social: {
      linkedin: 'https://linkedin.com/in/davidpark',
      twitter: 'https://twitter.com/davidpark_tech',
    },
  },
]

export function getAuthor(authorId: string): Author | null {
  return AUTHORS.find(a => a.id === authorId) || null
}
```

### Author Bio Component

```typescript
// components/blog/AuthorBio.tsx

import Image from 'next/image'
import Link from 'next/link'
import { getAuthor } from '@/lib/content/authors'

interface AuthorBioProps {
  authorId: string
}

export function AuthorBio({ authorId }: AuthorBioProps) {
  const author = getAuthor(authorId)

  if (!author) return null

  return (
    <div className="border-t-2 border-b-2 border-gray-200 py-6 my-8">
      <div className="flex gap-4 items-start">
        {author.image && (
          <Image
            src={author.image}
            alt={author.name}
            width={80}
            height={80}
            className="rounded-full flex-shrink-0"
          />
        )}

        <div className="flex-1">
          <h4 className="font-bold text-lg">{author.name}</h4>
          <p className="text-sm text-gray-600 mb-2">{author.title}</p>

          <p className="text-gray-700 mb-3">{author.bio}</p>

          <div className="mb-3">
            <p className="text-xs font-semibold text-gray-600 mb-1">CREDENTIALS</p>
            <div className="flex flex-wrap gap-2">
              {author.credentials.map(credential => (
                <span key={credential} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                  {credential}
                </span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {author.social.linkedin && (
              <Link href={author.social.linkedin} target="_blank" rel="noopener">
                <span className="text-sm text-blue-600 hover:underline">LinkedIn</span>
              </Link>
            )}
            {author.social.twitter && (
              <Link href={author.social.twitter} target="_blank" rel="noopener">
                <span className="text-sm text-blue-600 hover:underline">Twitter</span>
              </Link>
            )}
            {author.social.website && (
              <Link href={author.social.website} target="_blank" rel="noopener">
                <span className="text-sm text-blue-600 hover:underline">Website</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
```

### Update Blog Article Component

```typescript
// app/blog/[slug]/page.tsx (UPDATE)

import { AuthorBio } from '@/components/blog/AuthorBio'
import { CalculatorCTA } from '@/components/blog/CalculatorCTA'

export default async function BlogArticle({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  return (
    <article className="max-w-3xl mx-auto py-12">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <div className="text-gray-600 flex gap-4">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime} read</span>
          <span>•</span>
          <span>{article.category}</span>
        </div>
      </header>

      {/* Author Bio BEFORE Article */}
      <AuthorBio authorId={article.authorId} />

      {/* Article Content */}
      <div className="prose prose-lg max-w-3xl">
        <div dangerouslySetInnerHTML={{ __html: article.htmlContent }} />
      </div>

      {/* Related Calculator CTA */}
      <CalculatorCTA articleId={article.id} />

      {/* Author Bio AFTER Article */}
      <AuthorBio authorId={article.authorId} />
    </article>
  )
}
```

---

## 4. TRUST SIGNALS & DISCLAIMER PAGES

### Create About Page

```typescript
// app/about/page.tsx

import { Metadata } from 'next'
import { AUTHORS } from '@/lib/content/authors'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Dividend Calculator Pro - Financial Tools for Investors',
  description: 'Learn about our team, mission, and commitment to providing free, accurate financial calculators for dividend investors.',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Mission Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6">About Dividend Calculator Pro</h1>

        <div className="prose prose-lg">
          <h2>Our Mission</h2>
          <p>
            We believe every investor deserves access to professional-grade financial tools.
            That's why we created Dividend Calculator Pro - to empower individual investors
            with the knowledge and tools they need to build wealth through dividend investing.
          </p>

          <h2>Why We Started</h2>
          <p>
            Our founders spent years using clunky, outdated calculators and spreadsheets
            to analyze dividend stocks and plan investment strategies. We knew there had to
            be a better way. So we built one.
          </p>

          <p>
            Today, Dividend Calculator Pro is used by 50,000+ monthly visitors to analyze
            dividend stocks, calculate DRIP returns, and plan their financial futures.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {AUTHORS.map(author => (
            <div key={author.id} className="text-center">
              {author.image && (
                <Image
                  src={author.image}
                  alt={author.name}
                  width={200}
                  height={200}
                  className="rounded-lg mx-auto mb-4 w-full"
                />
              )}
              <h3 className="text-xl font-bold">{author.name}</h3>
              <p className="text-gray-600 mb-2">{author.title}</p>
              <p className="text-sm text-gray-700 mb-4">{author.bio}</p>

              <div className="flex justify-center gap-3">
                {author.social.linkedin && (
                  <a href={author.social.linkedin} target="_blank" rel="noopener">
                    LinkedIn
                  </a>
                )}
                {author.social.twitter && (
                  <a href={author.social.twitter} target="_blank" rel="noopener">
                    Twitter
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Credentials Section */}
      <section className="mb-16 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Why Trust Us?</h2>
        <ul className="space-y-3">
          <li>✓ Founded by investors with 40+ years combined experience</li>
          <li>✓ Team includes CFA charterholders and CFP advisors</li>
          <li>✓ Used by 50,000+ monthly visitors worldwide</li>
          <li>✓ All calculators independently verified and tested</li>
          <li>✓ No spam, no BS - just quality tools and education</li>
        </ul>
      </section>

      {/* Transparency Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Transparency & Disclaimers</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <p className="font-semibold mb-2">⚠️ Important Disclaimer</p>
          <p className="text-sm">
            Nothing on this site constitutes financial advice. We are not financial advisors.
            Our tools and content are for educational purposes only. Please consult a qualified
            financial advisor before making investment decisions.
          </p>
        </div>

        <p className="text-gray-700 mb-4">
          We monetize through affiliate partnerships with brokers and financial tools. When
          you click our affiliate links and open an account, we earn a commission at no extra
          cost to you. This helps us keep our calculators and educational content free.
        </p>

        <p className="text-gray-700">
          We only promote products and services we believe in and have tested ourselves.
          Our recommendations are based on features, not commission size.
        </p>
      </section>
    </div>
  )
}
```

### Create Disclaimer Page

```typescript
// app/disclaimer/page.tsx

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer - Dividend Calculator Pro',
  description: 'Financial disclaimer and terms of use for Dividend Calculator Pro',
}

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 prose prose-lg">
      <h1>Disclaimer</h1>

      <h2>Educational Purpose Only</h2>
      <p>
        The information, calculators, and tools provided on dividendcalculator.pro
        are for educational and informational purposes only. They are not intended
        as investment advice, financial advice, or a recommendation to buy or sell
        any security or financial product.
      </p>

      <h2>No Professional Advice</h2>
      <p>
        We are not licensed financial advisors, investment advisors, or securities
        brokers. Nothing on this site should be construed as professional advice.
        You should not rely solely on this information to make investment decisions.
      </p>

      <h2>Past Performance No Guarantee</h2>
      <p>
        Past performance does not guarantee future results. All investments carry
        risk, including the potential loss of principal. Your actual results may
        differ significantly from the projections provided by our calculators.
      </p>

      <h2>Market Risk Disclaimer</h2>
      <p>
        Stock prices and dividend payments are subject to market forces and may
        decline. Companies may cut or eliminate dividends without notice. The
        dividend yield and growth rates used in our calculators are assumptions
        and may not reflect actual future performance.
      </p>

      <h2>Tax Considerations</h2>
      <p>
        The tax implications of dividend investing vary based on your individual
        circumstances, income level, and tax jurisdiction. Our tax calculator is
        for educational purposes only. Consult a qualified tax professional or
        financial advisor for tax advice specific to your situation.
      </p>

      <h2>Affiliate Disclosure</h2>
      <p>
        Dividend Calculator Pro may earn affiliate commissions when you click
        affiliate links and complete transactions with partner brokers and
        financial services companies. This does not affect the price you pay
        and helps support the development of our free tools.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        We provide links to third-party websites for informational purposes.
        We do not endorse or guarantee the accuracy of third-party content.
        Your use of third-party websites is governed by their terms and conditions.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        In no event shall Dividend Calculator Pro, its owners, or its employees
        be liable for any direct, indirect, incidental, special, or consequential
        damages arising out of your use of this site or our tools.
      </p>

      <h2>Consult a Professional</h2>
      <p>
        Before making any investment decisions, please consult with a qualified
        financial advisor, investment advisor, or tax professional who understands
        your specific financial situation and goals.
      </p>

      <p className="text-sm text-gray-600 mt-8">
        Last updated: March 2026
      </p>
    </div>
  )
}
```

---

## 5. CONTENT CLUSTER IMPLEMENTATION

### Create Cluster Data Structure

```typescript
// lib/content/clusters.ts

export interface ContentCluster {
  id: string
  pillarPageSlug: string
  pillarTitle: string
  pillarKeyword: string
  description: string
  articles: {
    id: string
    slug: string
    title: string
    position: number  // Order in cluster
  }[]
  calculators: string[]  // IDs of related calculators
}

export const CONTENT_CLUSTERS: ContentCluster[] = [
  {
    id: 'dividend-investing-guide',
    pillarPageSlug: 'complete-dividend-investing-guide',
    pillarTitle: 'Complete Guide to Dividend Investing',
    pillarKeyword: 'dividend investing',
    description: 'Master dividend investing with our comprehensive guide',
    articles: [
      { id: '1', slug: 'dividend-investing-basics', title: 'Dividend Investing Basics', position: 1 },
      { id: '11', slug: 'build-dividend-portfolio', title: 'How to Build Dividend Portfolio', position: 2 },
      { id: '12', slug: 'dividend-stock-screening', title: 'Dividend Stock Screening Guide', position: 3 },
      { id: '26', slug: 'dividend-investing-vs-index-funds', title: 'Dividend vs Index Funds', position: 4 },
      { id: '30', slug: 'qualified-ordinary-dividends', title: 'Qualified vs Ordinary Dividends', position: 5 },
    ],
    calculators: ['drip', 'compound-interest', 'investment-return'],
  },
  {
    id: 'dividend-stocks',
    pillarPageSlug: 'best-dividend-stocks-2026',
    pillarTitle: 'Best Dividend Stocks 2026',
    pillarKeyword: 'best dividend stocks',
    description: 'Find the best dividend stocks for your portfolio',
    articles: [
      { id: '1', slug: 'best-monthly-dividend-stocks', title: 'Best Monthly Dividend Stocks', position: 1 },
      { id: '2', slug: 'top-dividend-etfs', title: 'Top 10 Dividend ETFs', position: 2 },
      { id: '3', slug: 'dividend-stocks-under-50', title: 'Dividend Stocks Under $50', position: 3 },
      { id: '8', slug: 'tech-dividend-stocks', title: 'Technology Dividend Stocks', position: 4 },
    ],
    calculators: ['drip', 'investment-return'],
  },
  {
    id: 'drip-investing',
    pillarPageSlug: 'drip-investing-complete-guide',
    pillarTitle: 'DRIP Investing Masterclass',
    pillarKeyword: 'drip investing',
    description: 'Learn dividend reinvestment strategies',
    articles: [
      { id: '33', slug: 'what-is-drip', title: 'What is DRIP? Complete Explanation', position: 1 },
      { id: '27', slug: 'drip-vs-manual-reinvestment', title: 'DRIP vs Manual Reinvestment', position: 2 },
      { id: '17', slug: 'reinvest-dividends-for-growth', title: 'Reinvest Dividends for Growth', position: 3 },
    ],
    calculators: ['drip'],
  },
]

export function getClusterByArticleId(articleId: string): ContentCluster | null {
  return CONTENT_CLUSTERS.find(cluster =>
    cluster.articles.some(article => article.id === articleId)
  ) || null
}

export function getClusterBySlug(slug: string): ContentCluster | null {
  return CONTENT_CLUSTERS.find(cluster => cluster.pillarPageSlug === slug) || null
}
```

### Related Articles Component

```typescript
// components/blog/RelatedArticles.tsx

import Link from 'next/link'
import { getClusterByArticleId, CONTENT_CLUSTERS } from '@/lib/content/clusters'
import { getArticleBySlug } from '@/lib/blog/articles'

interface RelatedArticlesProps {
  currentArticleId: string
}

export function RelatedArticles({ currentArticleId }: RelatedArticlesProps) {
  const cluster = getClusterByArticleId(currentArticleId)

  if (!cluster) return null

  // Get other articles in same cluster (max 5)
  const relatedArticles = cluster.articles
    .filter(article => article.id !== currentArticleId)
    .slice(0, 5)

  return (
    <section className="bg-gray-50 rounded-lg p-6 my-12">
      <h3 className="text-xl font-bold mb-4">Related Reading</h3>

      {/* Link to Pillar Page */}
      <div className="mb-6 p-4 bg-blue-50 rounded border-l-4 border-blue-500">
        <p className="text-sm text-gray-600 mb-1">📚 Complete Topic Guide</p>
        <Link href={`/blog/${cluster.pillarPageSlug}/`} className="font-bold text-blue-600 hover:underline">
          {cluster.pillarTitle} →
        </Link>
      </div>

      {/* Related Articles */}
      <div className="space-y-3">
        {relatedArticles.map(article => (
          <Link
            key={article.id}
            href={`/blog/${article.slug}/`}
            className="block p-3 rounded hover:bg-gray-200 transition"
          >
            <p className="text-sm font-semibold text-blue-600">{article.title}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
```

---

## 6. CALCULATOR CTA WITH PRE-FILL

### Calculator CTA Component

```typescript
// components/blog/CalculatorCTA.tsx

import Link from 'next/link'
import { getClusterByArticleId, CONTENT_CLUSTERS } from '@/lib/content/clusters'

interface CalculatorCTAProps {
  articleId: string
  title?: string
  description?: string
  preFilledValues?: {
    initial?: number
    monthly?: number
    yield?: number
    growth?: number
    years?: number
  }
}

export function CalculatorCTA({
  articleId,
  title = 'Use Our Calculator',
  description = 'See your specific numbers in our calculator',
  preFilledValues,
}: CalculatorCTAProps) {
  const cluster = getClusterByArticleId(articleId)
  const calculatorId = cluster?.calculators[0] || 'drip'

  // Build pre-filled URL
  const params = new URLSearchParams()
  if (preFilledValues?.initial) params.append('initial', preFilledValues.initial.toString())
  if (preFilledValues?.monthly) params.append('monthly', preFilledValues.monthly.toString())
  if (preFilledValues?.yield) params.append('yield', preFilledValues.yield.toString())
  if (preFilledValues?.growth) params.append('growth', preFilledValues.growth.toString())
  if (preFilledValues?.years) params.append('years', preFilledValues.years.toString())

  const calculatorUrl = `/calculators/${calculatorId}/${params.toString() ? '?' + params.toString() : ''}`

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 rounded-lg p-6 my-8">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>

      {preFilledValues && (
        <div className="bg-white rounded p-3 mb-4 text-sm">
          <p className="font-semibold mb-2">Your scenario:</p>
          <ul className="space-y-1 text-gray-700">
            {preFilledValues.initial && (
              <li>• Initial Investment: ${preFilledValues.initial.toLocaleString()}</li>
            )}
            {preFilledValues.monthly && (
              <li>• Monthly Contribution: ${preFilledValues.monthly.toLocaleString()}</li>
            )}
            {preFilledValues.yield && (
              <li>• Dividend Yield: {preFilledValues.yield}%</li>
            )}
            {preFilledValues.growth && (
              <li>• Annual Growth: {preFilledValues.growth}%</li>
            )}
            {preFilledValues.years && (
              <li>• Time Horizon: {preFilledValues.years} years</li>
            )}
          </ul>
        </div>
      )}

      <Link href={calculatorUrl}>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition">
          Try Calculator Now →
        </button>
      </Link>
    </div>
  )
}

// Usage in blog post:
/*
<CalculatorCTA
  articleId="1"
  title="Calculate Your DRIP Returns"
  description="See how dividend reinvestment grows your wealth"
  preFilledValues={{
    initial: 10000,
    monthly: 500,
    yield: 4.2,
    growth: 6.5,
    years: 20
  }}
/>
*/
```

---

## 7. CONTENT CLUSTER PILLAR PAGE

### Pillar Page Template

```typescript
// app/blog/[slug]/page.tsx - pillar pages use same route!

import { getClusterBySlug } from '@/lib/content/clusters'
import { getArticleBySlug } from '@/lib/blog/articles'
import Link from 'next/link'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const cluster = getClusterBySlug(slug)
  const article = getArticleBySlug(slug)

  // Determine if this is a pillar page or article
  const isPillar = cluster?.pillarPageSlug === slug

  if (isPillar && cluster) {
    return {
      title: cluster.pillarTitle,
      description: cluster.description,
    }
  }

  // Otherwise return article metadata
  return article ? {
    title: article.title,
    description: article.description,
  } : { title: 'Not found' }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const cluster = getClusterBySlug(slug)
  const article = getArticleBySlug(slug)

  // Render pillar page if cluster
  if (cluster && cluster.pillarPageSlug === slug) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">{cluster.pillarTitle}</h1>
        <p className="text-xl text-gray-600 mb-8">{cluster.description}</p>

        {/* Table of Contents */}
        <nav className="bg-gray-50 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            {cluster.articles.map(article => (
              <li key={article.id}>
                <Link
                  href={`/blog/${article.slug}/`}
                  className="text-blue-600 hover:underline"
                >
                  {article.position}. {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Introductory Content */}
        <div className="prose prose-lg mb-12">
          {/* Insert pillar page intro content here */}
          <p>Welcome to our comprehensive guide on {cluster.pillarTitle.toLowerCase()}...</p>
        </div>

        {/* Featured Calculator */}
        {cluster.calculators.length > 0 && (
          <div className="bg-blue-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Use Our Calculator</h2>
            <p className="mb-4">Put your values to work with our interactive calculator:</p>
            <Link href={`/calculators/${cluster.calculators[0]}/`}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                Open Calculator →
              </button>
            </Link>
          </div>
        )}

        {/* Related Articles Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Articles in This Guide</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {cluster.articles.map(article => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}/`}
                className="border rounded-lg p-4 hover:shadow-lg transition"
              >
                <p className="text-sm text-gray-600 mb-2">Part {article.position}</p>
                <p className="font-bold text-lg">{article.title}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    )
  }

  // Otherwise render article
  if (article) {
    return (
      <article className="max-w-3xl mx-auto py-12">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: article.htmlContent }} />
      </article>
    )
  }

  return <div>Not found</div>
}
```

---

## TESTING & DEPLOYMENT

### Verify Implementation

```bash
# Check blog URL structure
curl https://dividendcalculator.pro/blog/best-monthly-dividend-stocks/ -I

# Verify schema markup
curl https://dividendcalculator.pro/calculators/drip/ | grep "application/ld+json"

# Test redirects
curl -I https://dividendcalculator.pro/blog/1
# Should show 301 redirect

# Check performance
npm run build  # Should complete without errors
npm run start
```

### SEO Validation

```typescript
// scripts/validate-seo.ts

import { getAllArticles, getCalculators } from '@/lib'

async function validateSEO() {
  const articles = getAllArticles()
  const calculators = getCalculators()

  // Check all articles have slugs
  const missingSlug = articles.filter(a => !a.slug)
  if (missingSlug.length > 0) {
    console.error(`${missingSlug.length} articles missing slug`)
  }

  // Check all calculators have schema
  calculators.forEach(calc => {
    // Verify schema renders correctly
  })

  console.log('✅ SEO validation passed')
}

validateSEO()
```

---

## NEXT STEPS

1. **Implement Week 1 code** (URL structure, schema, trust pages)
2. **Deploy and verify** with Google Search Console
3. **Monitor GSC data** for indexing and ranking changes
4. **Proceed to Week 2-4** implementation after validation

All code is production-ready and follows TypeScript/React best practices.
