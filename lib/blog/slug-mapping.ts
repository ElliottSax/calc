/**
 * Blog slug mapping - Maps numeric IDs to slug-based URLs
 * Used for 301 redirects from old URLs to new SEO-friendly URLs
 * Generated from BLOG_POSTS data
 */

export const BLOG_SLUG_MAP: Record<string, string> = {
  // ID 1-6 from RECENT_POSTS in page.tsx (mock data)
  '1': 'dividend-growth-strategy',
  '2': 'drip-investing-complete-guide',
  '3': 'reits-vs-dividend-stocks',
  '4': 'building-1k-monthly-dividend-income',
  '5': 'tax-efficient-dividend-investing',
  '6': 'monthly-dividend-stocks-guide',

  // Featured post
  '7': 'drip-investing-for-beginners-2026',

  // Additional mappings for common searches
  '8': 'top-10-dividend-aristocrats-analysis',
  '9': 'dividend-aristocrats-complete-guide-2024',
  '10': 'dividend-reinvestment-calculator-guide',
  '11': 'building-dividend-portfolio-beginners',
  '12': 'high-yield-dividend-stocks-risks-rewards',
  '13': 'high-yield-vs-dividend-growth',
  '14': 'retirement-income-from-dividends',
}

/**
 * Get slug for numeric ID
 * Used for redirect resolution
 */
export function getSlugForId(id: string): string | null {
  return BLOG_SLUG_MAP[id] || null
}

/**
 * Get ID for slug (reverse lookup)
 */
export function getIdForSlug(slug: string): string | null {
  const entry = Object.entries(BLOG_SLUG_MAP).find(([_, s]) => s === slug)
  return entry ? entry[0] : null
}

/**
 * Check if ID exists in mapping
 */
export function isValidBlogId(id: string): boolean {
  return id in BLOG_SLUG_MAP
}
