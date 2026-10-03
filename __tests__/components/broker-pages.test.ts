import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { BrokerCta } from '@/components/affiliate/BrokerCta'

const ROOT = path.resolve(__dirname, '..', '..')

const PAGES: Array<{ slug: string; brokerId: string; baseUrl: string }> = [
  { slug: 'm1-finance', brokerId: 'm1-finance', baseUrl: 'https://www.m1finance.com' },
  { slug: 'fidelity', brokerId: 'fidelity', baseUrl: 'https://www.fidelity.com' },
  { slug: 'wealthfront', brokerId: 'wealthfront', baseUrl: 'https://www.wealthfront.com' },
  { slug: 'robinhood', brokerId: 'robinhood', baseUrl: 'https://robinhood.com' },
  { slug: 'charles-schwab', brokerId: 'charles-schwab', baseUrl: 'https://www.schwab.com' },
]

// Claims that were removed because nothing on this site backs them up. A bonus
// amount, a user/asset total or a "free stock" offer must not come back without a source.
const BANNED = [
  /\$\s?\d+\s*(?:bonus|signup bonus)/i,
  /get\s+\$\s?\d+/i,
  /free stock/i,
  /\d[\d,.]*\+?\s*(?:million|billion|trillion)/i,
  /editor'?s choice/i,
  /\bbest overall\b/i,
]

describe.each(PAGES)('static broker page: $slug', ({ slug, brokerId, baseUrl }) => {
  const src = readFileSync(path.join(ROOT, 'app', 'brokers', slug, 'page.tsx'), 'utf8')

  it('has a tracked CTA pointing at the plain broker homepage', () => {
    expect(src).toContain('<BrokerCta')
    expect(src).toContain(`brokerId="${brokerId}"`)
    expect(src).toContain(`baseUrl="${baseUrl}"`)
    expect(src).toContain('<AffiliateNotice')
  })

  it('has no bare, link-less CTA button', () => {
    expect(src).not.toMatch(/<Button[^>]*>\s*Open [^<]*Account/)
  })

  it('carries no unsourced bonus, size or award claims', () => {
    for (const pattern of BANNED) {
      expect(src, String(pattern)).not.toMatch(pattern)
    }
  })

  it('invents no affiliate ID', () => {
    expect(src).not.toMatch(/[?&](?:ref|refrid|immid|affiliate)=/i)
  })
})

describe('BrokerCta', () => {
  it('renders a sponsored outbound link to the bare homepage when no tracking is configured', () => {
    const html = renderToStaticMarkup(
      createElement(
        BrokerCta,
        {
          brokerId: 'fidelity',
          brokerName: 'Fidelity Investments',
          baseUrl: 'https://www.fidelity.com',
          placement: 'broker-page-hero',
        },
        'Open Fidelity Account'
      )
    )
    expect(html).toContain('href="https://www.fidelity.com"')
    expect(html).toContain('rel="noopener noreferrer sponsored"')
    expect(html).toContain('Open Fidelity Account')
  })
})
