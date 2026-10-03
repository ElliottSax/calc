import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(__dirname, '..', '..')

// Claims that nothing on this site backs up: audience totals, star ratings of brokers,
// signup bonus amounts. They were removed on 2026-10-03; this keeps them from coming back.
const BANNED = [
  /\b\d{2,3},\d{3}\+\s*investors/i,
  /join thousands/i,
  /\b[0-9]\.[0-9]\/5\s*stars/i,
  /signup bonuses?/i,
  /bonuses up to \$\d+/i,
]

const SOURCES = [
  'components/hero/SocialProof.tsx',
  'app/page.tsx',
  'app/free-guide/thank-you/page.tsx',
  'app/resources/lead-magnets/LeadMagnetsPage.tsx',
  'lib/data/broker-details.ts',
  'app/brokers/page.tsx',
]

describe('no unsourced marketing claims', () => {
  it.each(SOURCES)('%s', (rel) => {
    const src = readFileSync(path.join(ROOT, rel), 'utf8')
    for (const re of BANNED) expect(src).not.toMatch(re)
  })

  it('blog posts carry no audience totals or fake broker star ratings', () => {
    const dir = path.join(ROOT, 'content', 'blog')
    const bad: string[] = []
    for (const f of readdirSync(dir).filter((x) => x.endsWith('.md'))) {
      const txt = readFileSync(path.join(dir, f), 'utf8')
      for (const re of BANNED) if (re.test(txt)) bad.push(`${f}: ${re}`)
    }
    expect(bad).toEqual([])
  })
})

describe('/brokers index', () => {
  const src = readFileSync(path.join(ROOT, 'app', 'brokers', 'page.tsx'), 'utf8')
  it.each(['m1-finance', 'fidelity', 'charles-schwab', 'robinhood', 'wealthfront'])('lists %s with a tracked CTA', (slug) => {
    expect(src).toContain(`slug: '${slug}'`)
    expect(src).toContain('<BrokerCta')
    expect(src).toContain('<AffiliateNotice')
  })
  it('has a canonical and is in the sitemap', () => {
    expect(src).toContain("canonical: 'https://dividendengines.com/brokers'")
    const sm = readFileSync(path.join(ROOT, 'app', 'sitemap.ts'), 'utf8')
    expect(sm).toContain("p: '/brokers'")
  })
})
