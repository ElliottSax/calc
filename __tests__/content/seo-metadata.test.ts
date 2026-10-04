import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'
import { fallbackDescription } from '../../lib/blog/fallback-description'

const ROOT = path.resolve(__dirname, '..', '..')
const read = (rel: string) => readFileSync(path.join(ROOT, rel), 'utf8')

// These pages inherited the homepage canonical from the root layout, telling Google they
// were duplicates of "/". Each must now declare its own URL.
const SELF_CANONICAL: Record<string, string> = {
  'app/about/page.tsx': '/about',
  'app/affiliate-disclosure/page.tsx': '/affiliate-disclosure',
  'app/disclaimer/page.tsx': '/disclaimer',
  'app/free-guide/page.tsx': '/free-guide',
  'app/privacy/page.tsx': '/privacy',
  'app/sitemap/page.tsx': '/sitemap',
  'app/terms/page.tsx': '/terms',
  'app/tools/compare/page.tsx': '/tools/compare',
}

describe('self-referencing canonicals', () => {
  it.each(Object.entries(SELF_CANONICAL))('%s canonical is %s', (rel, p) => {
    expect(read(rel)).toContain(`canonical: 'https://dividendengines.com${p}'`)
  })

  it('stock pages canonicalise to their own lowercase ticker URL', () => {
    expect(read('app/stocks/[symbol]/page.tsx')).toContain(
      'canonical: `https://dividendengines.com/stocks/${ticker.toLowerCase()}`',
    )
  })
})

describe('root layout metadata', () => {
  const layout = read('app/layout.tsx')
  it('does not advertise hreflang alternates that 404', () => {
    expect(layout).not.toMatch(/['"`]en-(GB|CA|US)['"`]\s*:/)
    expect(layout).not.toContain('languages:')
  })
  it('keeps the homepage canonical', () => {
    expect(layout).toContain('canonical: siteUrl')
  })
})

describe('fallbackDescription', () => {
  it('uses the first real prose paragraph, skipping headings, tables, lists and quotes', () => {
    const body = [
      '## Heading',
      '| a | b |\n|---|---|\n| 1 | 2 |',
      '- bullet one that is long enough to be a paragraph on its own but is a list',
      '> a quoted line that is also long enough to look like prose but is a blockquote',
      'DRIP investing automatically reinvests your dividends into more shares, so your income compounds over time without extra effort.',
    ].join('\n\n')
    expect(fallbackDescription(body)).toBe(
      'DRIP investing automatically reinvests your dividends into more shares, so your income compounds over time without extra effort.',
    )
  })

  it('strips markdown and links, and trims to 155 characters at a word boundary', () => {
    const long = 'This **guide** explains [dividend yield](https://x.test) in plain words ' + 'and shows worked examples '.repeat(10)
    const d = fallbackDescription(long)
    expect(d.length).toBeLessThanOrEqual(155)
    expect(d.endsWith('...')).toBe(true)
    expect(d).not.toMatch(/[*\[\]()]/)
    expect(d.startsWith('This guide explains dividend yield')).toBe(true)
  })

  it('returns an empty string when there is no suitable paragraph', () => {
    expect(fallbackDescription('# Only a heading\n\n| a |\n|---|\n\nshort')).toBe('')
  })

  it('gives every indexable numbered guide that has no frontmatter description a usable one', () => {
    const slugs = [
      '01-drip-investing-for-beginners-2026',
      '02-top-10-dividend-aristocrats-analysis',
      '03-monthly-dividend-stocks-guide',
      '04-reits-vs-dividend-stocks',
      '05-tax-efficient-dividend-investing',
      '07-high-yield-vs-dividend-growth',
      '08-building-1k-monthly-dividend-income',
      '09-retirement-income-from-dividends',
      '10-dividend-reinvestment-calculator-guide',
    ]
    const dir = path.join(ROOT, 'content', 'blog')
    const files = new Set(readdirSync(dir))
    for (const s of slugs) {
      expect(files.has(`${s}.md`)).toBe(true)
      const raw = readFileSync(path.join(dir, `${s}.md`), 'utf8')
      const body = raw.replace(/^---[\s\S]*?\n---\s*/, '')
      const d = fallbackDescription(body)
      expect(d.length).toBeGreaterThanOrEqual(60)
      expect(d.length).toBeLessThanOrEqual(155)
    }
  })
})
