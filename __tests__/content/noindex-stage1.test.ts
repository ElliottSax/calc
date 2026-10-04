import { describe, it, expect } from 'vitest'
import { existsSync } from 'node:fs'
import path from 'node:path'
import sitemap from '@/app/sitemap'
import { generateMetadata } from '@/app/blog/[id]/page'
import { NOINDEX_STAGE1 } from '@/lib/noindex-stage1'
import { NOINDEX_REPRINTS } from '@/lib/noindex-reprints'

const ROOT = path.resolve(__dirname, '..', '..')
const BLOG_DIR = path.join(ROOT, 'content', 'blog')

// Thin-content stage 1 (2026-10-04). Basis and measurement plan:
// life-hq/CALC_NOINDEX_STAGE1_2026-10-04.json. Reverting = delete lib/noindex-stage1.ts.
const REMOVED_NOTES = ['README', 'GENERATION_SUMMARY', 'dividend-etf-articles-summary']
const KEEP_SAMPLES = [
  'best-dividend-stocks-for-beginners',
  'best-reit-dividend-stocks',
  '01-best-healthcare-reits-medical-properties-2026',
]

const sitemapSlugs = () =>
  new Set(
    sitemap()
      .map((e) => new URL(e.url).pathname)
      .filter((p) => p.startsWith('/blog/'))
      .map((p) => decodeURIComponent(p.slice('/blog/'.length))),
  )

const robotsIndex = async (slug: string) => {
  const meta = await generateMetadata({ params: Promise.resolve({ id: slug }) })
  const robots = meta.robots as { index?: boolean } | undefined
  return robots?.index
}

describe('thin-content stage 1', () => {
  it('holds exactly the 13 triaged posts', () => {
    expect(NOINDEX_STAGE1.size).toBe(13)
    // The set must not duplicate the reprint set or name a deleted note.
    for (const s of NOINDEX_STAGE1) {
      expect(NOINDEX_REPRINTS.has(s)).toBe(false)
      expect(REMOVED_NOTES).not.toContain(s)
    }
  })

  it('every stage-1 post still exists on disk (reachable, not deleted)', () => {
    for (const s of NOINDEX_STAGE1) expect(existsSync(path.join(BLOG_DIR, `${s}.md`))).toBe(true)
  })

  it('stage-1 posts render noindex,follow and are out of the sitemap', async () => {
    const inSitemap = sitemapSlugs()
    for (const s of NOINDEX_STAGE1) {
      expect(await robotsIndex(s), s).toBe(false)
      expect(inSitemap.has(s), `${s} still in sitemap`).toBe(false)
    }
  })

  it('the three generator notes are gone from content/blog and the sitemap', () => {
    const inSitemap = sitemapSlugs()
    for (const s of REMOVED_NOTES) {
      expect(existsSync(path.join(BLOG_DIR, `${s}.md`)), `${s}.md still present`).toBe(false)
      expect(inSitemap.has(s), `${s} still in sitemap`).toBe(false)
    }
  })

  it('the three generator-note URLs redirect to /blog', () => {
    const cfg = require(path.join(ROOT, 'next.config.js'))
    return cfg.redirects().then((rules: { source: string; destination: string }[]) => {
      for (const s of REMOVED_NOTES) {
        const rule = rules.find((r) => r.source === `/blog/${s}`)
        expect(rule?.destination, s).toBe('/blog')
      }
    })
  })

  it('KEEP samples are still indexable and in the sitemap', async () => {
    const inSitemap = sitemapSlugs()
    for (const s of KEEP_SAMPLES) {
      expect(await robotsIndex(s), s).not.toBe(false)
      expect(inSitemap.has(s), `${s} missing from sitemap`).toBe(true)
    }
  })
})
