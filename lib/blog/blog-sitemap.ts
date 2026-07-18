/**
 * Blog sitemap generator for SEO
 * Generates sitemap XML with proper URLs and priority
 */

import { BLOG_POSTS } from './blog-data'
import { BLOG_SLUG_MAP } from './slug-mapping'

export interface SitemapEntry {
  url: string
  lastmod: string
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

/**
 * Generate all blog sitemap entries
 */
export function generateBlogSitemapEntries(baseUrl: string): SitemapEntry[] {
  const entries: SitemapEntry[] = []

  // Main blog index
  entries.push({
    url: `${baseUrl}/blog`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.9,
  })

  // Individual blog posts
  BLOG_POSTS.forEach((post) => {
    entries.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastmod: post.updatedDate || post.publishDate,
      changefreq: 'monthly',
      priority: post.featured ? 0.8 : 0.6,
    })
  })

  // Category pages
  const categories = Array.from(new Set(BLOG_POSTS.map((p) => p.category)))
  categories.forEach((category) => {
    const slug = category.toLowerCase().replace(/\s+/g, '-')
    entries.push({
      url: `${baseUrl}/blog/category/${slug}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.5,
    })
  })

  // Tag pages
  const allTags = Array.from(new Set(BLOG_POSTS.flatMap((p) => p.tags)))
  allTags.forEach((tag) => {
    const slug = tag.toLowerCase().replace(/\s+/g, '-')
    entries.push({
      url: `${baseUrl}/blog/tag/${slug}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.4,
    })
  })

  return entries
}

/**
 * Generate XML sitemap string
 */
export function generateBlogSitemapXML(baseUrl: string): string {
  const entries = generateBlogSitemapEntries(baseUrl)

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  entries.forEach((entry) => {
    xml += '  <url>\n'
    xml += `    <loc>${escapeXml(entry.url)}</loc>\n`
    xml += `    <lastmod>${entry.lastmod}</lastmod>\n`
    xml += `    <changefreq>${entry.changefreq}</changefreq>\n`
    xml += `    <priority>${entry.priority}</priority>\n`
    xml += '  </url>\n'
  })

  xml += '</urlset>'
  return xml
}

/**
 * Escape XML special characters
 */
function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

/**
 * Generate robots.txt rules for blog
 */
export function generateBlogRobotsTxt(): string {
  return `User-agent: *
Allow: /blog/
Allow: /blog/category/
Allow: /blog/tag/
Disallow: /api/
Disallow: /admin/
Disallow: /?*
Allow: /

# Crawl delay to be respectful
Crawl-delay: 1

# Sitemap
Sitemap: https://yoursite.com/sitemap.xml
`
}

/**
 * Generate redirect map for old numeric IDs to new slugs
 * Used for documentation and analytics tracking
 */
export function generateRedirectMap(): Record<string, { from: string; to: string }> {
  const redirects: Record<string, { from: string; to: string }> = {}

  Object.entries(BLOG_SLUG_MAP).forEach(([id, slug]) => {
    redirects[id] = {
      from: `/blog/${id}`,
      to: `/blog/${slug}`,
    }
  })

  return redirects
}

/**
 * Get all URL variations for a blog post (for indexing verification)
 */
export function getAllUrlsForSlug(slug: string, baseUrl: string): string[] {
  return [
    `${baseUrl}/blog/${slug}`,
    // Old numeric IDs that redirect to this slug
    // This helps verify canonical URLs and redirects are working
  ]
}
