import { Metadata } from 'next'
import { BLOG_INDEX } from '@/lib/blog/blog-index.generated'
import { BlogIndexClient } from './BlogIndexClient'

// Was a fully mock page: a fabricated "7 Dividend Stocks..." featured post
// with invented view/comment/like counts and a fake "Senior Analyst" byline
// attributed to Elliott personally, fake per-category counts, a "Trending"
// bar linking to /blog/topic/* routes that don't exist, and zero connection
// to the real posts BLOG_INDEX (lib/blog/blog-index.generated.ts) already
// tracks. Every crawler and visitor hitting this page saw none of the real
// content. Rewritten to read that real index -- no invented metrics, since
// none of view/comment/date/read-time data exists for these posts. Search/
// filter interactivity lives in BlogIndexClient so this file can stay a
// server component and keep exporting real metadata.

export const metadata: Metadata = {
  title: 'Dividend Investing Blog - Strategies, Analysis & Market Updates',
  description: `${BLOG_INDEX.length} free guides on dividend investing, DRIP strategies, stock analysis, and passive income.`,
  keywords: [
    'dividend investing blog',
    'dividend stock analysis',
    'DRIP strategy',
    'passive income blog',
    'dividend growth investing',
    'dividend portfolio',
    'monthly dividend stocks',
    'dividend aristocrats analysis',
    'dividend investing for beginners',
    'dividend tax strategies'
  ],
  openGraph: {
    title: 'Dividend Investing Blog - Build Wealth Through Dividends',
    description: 'Guides on dividend investing strategy, stock analysis, and portfolio construction. Free to read.',
    images: ['/og-blog.png']
  }
}

export default function BlogPage() {
  return <BlogIndexClient />
}
