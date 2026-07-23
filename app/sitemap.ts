import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { courses } from '@/lib/data/courses'

// Read content/blog at request time (the files are bundled for this route via
// outputFileTracingIncludes in next.config.mjs).
export const dynamic = 'force-dynamic'

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
    { p: '/calculators/drip', freq: 'weekly' as const, pr: 0.9 },
    { p: '/calculators/yield', freq: 'weekly' as const, pr: 0.9 },
    { p: '/calculators/growth', freq: 'weekly' as const, pr: 0.9 },
    { p: '/calculators/comparison', freq: 'weekly' as const, pr: 0.9 },
    { p: '/calculators/retirement', freq: 'weekly' as const, pr: 0.9 },
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
