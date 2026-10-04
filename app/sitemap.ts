import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { courses } from '@/lib/data/courses'
import { NOINDEX_REPRINTS } from '@/lib/noindex-reprints'
import { NOINDEX_STAGE1 } from '@/lib/noindex-stage1'

// Fully static (no revalidate): built once from content/blog at build time
// via real Node fs, then served as a static file. Not ISR -- the Cloudflare
// deployment (OpenNext/Workers runtime) has no real filesystem backing
// content/blog for on-demand reads at request time even though the .md files
// are included in the deployed bundle, so a runtime readdirSync silently
// returns nothing there (confirmed: this shipped 0 blog URLs on the
// Cloudflare preview when it still had `revalidate = 3600`). Content only
// changes via the autopublish job, and each run triggers its own rebuild, so
// static-at-build-time is always at least as fresh as the deployed content --
// same reasoning the old comment gave for ISR, just without a runtime fs call.


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
      // Thin-content stage 1 (2026-10-04): 13 noindexed posts, still reachable.
      .filter((f) => !NOINDEX_STAGE1.has(f.replace(/\.md$/, '')))
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
    { p: '/calculators/rmd', freq: 'weekly' as const, pr: 0.9 },
    { p: '/calculators/savings', freq: 'weekly' as const, pr: 0.9 },
    { p: '/calculators/investment-return', freq: 'weekly' as const, pr: 0.9 },
    { p: '/brokers', freq: 'weekly' as const, pr: 0.8 },
    { p: '/brokers/m1-finance', freq: 'monthly' as const, pr: 0.7 },
    { p: '/brokers/fidelity', freq: 'monthly' as const, pr: 0.7 },
    { p: '/brokers/charles-schwab', freq: 'monthly' as const, pr: 0.7 },
    { p: '/brokers/robinhood', freq: 'monthly' as const, pr: 0.7 },
    { p: '/brokers/wealthfront', freq: 'monthly' as const, pr: 0.7 },
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
