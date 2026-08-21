import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { courses } from '@/lib/data/courses'
import { NOINDEX_REPRINTS } from '@/lib/noindex-reprints'

// Read content/blog at request time (the files are bundled for this route via
// outputFileTracingIncludes in next.config.mjs). Content only changes via the
// autopublish job (every 2h, and each run triggers its own rebuild), so an
// hourly ISR cache is always at least as fresh as the deployed content while
// avoiding a full `readdirSync` over content/blog (2000+ files) on every
// crawler hit to /sitemap.xml.
export const revalidate = 3600

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

// Robust base URL: the env var has been wrong (calc-bay-one.vercel.app + a stray
// newline) — trim it and reject non-production hosts so the sitemap always emits
// the real domain.
function resolveBaseUrl(): string {
  const raw = (process.env.NEXT_PUBLIC_APP_URL || '').trim().replace(/\/+$/, '')
  if (raw && !raw.includes('localhost') && !raw.includes('vercel.app')) return raw
  return 'https://dividendengines.com'
}

function blogSlugs(): string[] {
  try {
    return fs
      .readdirSync(BLOG_DIR)
      .filter((f) => f.endsWith('.md'))
      // Exclude the noindexed auto-generated batches (haiku-*/cerebras-*): a
      // sitemap should only list pages you want indexed.
      .filter((f) => !/^(haiku|cerebras)-/.test(f))
      // Same for the near-duplicate reprints (319 of the 470 remaining posts) —
      // they're served noindex, so don't ask Google to crawl them.
      .filter((f) => !NOINDEX_REPRINTS.has(f.replace(/\.md$/, '')))
      .map((f) => f.replace(/\.md$/, ''))
  } catch {
    return []
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = resolveBaseUrl()
  const now = new Date()

  const staticPaths = [
    { p: '', freq: 'daily' as const, pr: 1.0 },
    { p: '/blog', freq: 'daily' as const, pr: 0.8 },
    // Real calculator routes. The previous list pointed at /yield, /growth,
    // /comparison, /retirement — none of which exist (they 404'd) — and omitted
    // the six that do. Fixed to match app/calculators/*.
    { p: '/calculators', freq: 'weekly' as const, pr: 0.9 },
    { p: '/calculators/drip', freq: 'weekly' as const, pr: 0.9 },
    { p: '/calculators/dividend-yield', freq: 'weekly' as const, pr: 0.9 },
    { p: '/calculators/dividend-income', freq: 'weekly' as const, pr: 0.9 },
    { p: '/calculators/dividend-growth', freq: 'weekly' as const, pr: 0.9 },
    { p: '/calculators/dividend-tax', freq: 'weekly' as const, pr: 0.9 },
    { p: '/calculators/wash-sale', freq: 'weekly' as const, pr: 0.9 },
    { p: '/calculators/payout-ratio', freq: 'weekly' as const, pr: 0.9 },
    { p: '/calculators/fire', freq: 'weekly' as const, pr: 0.9 },
    { p: '/calculators/compound-interest', freq: 'weekly' as const, pr: 0.9 },
    { p: '/calculators/401k', freq: 'weekly' as const, pr: 0.9 },
    { p: '/calculators/ira', freq: 'weekly' as const, pr: 0.9 },
    { p: '/calculators/savings', freq: 'weekly' as const, pr: 0.9 },
    { p: '/calculators/investment-return', freq: 'weekly' as const, pr: 0.9 },
    { p: '/guides', freq: 'weekly' as const, pr: 0.8 },
    { p: '/resources', freq: 'weekly' as const, pr: 0.7 },
    { p: '/courses', freq: 'weekly' as const, pr: 0.8 },
    ...courses.map((c) => ({ p: `/courses/${c.slug}`, freq: 'monthly' as const, pr: 0.7 })),
  ]

  const staticPages: MetadataRoute.Sitemap = staticPaths.map(({ p, freq, pr }) => ({
    url: `${baseUrl}${p}`,
    lastModified: now,
    changeFrequency: freq,
    priority: pr,
  }))

  const blogPages: MetadataRoute.Sitemap = blogSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${encodeURIComponent(slug)}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}
