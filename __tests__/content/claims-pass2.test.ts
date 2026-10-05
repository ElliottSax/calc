import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'

// 2026-10-05 claims pass 2: a persona read of the live posts found invented per-company growth
// figures ("a 5-year dividend growth rate of 6.3%" on a company that is not even named),
// securities that no longer trade or changed their dividend, arithmetic that did not add up and
// recycled "40-60% of long-term wealth" boilerplate. scripts/strip_growth_rate_figures.py and
// hand edits removed them; this keeps them from coming back in any post Google may index.

const ROOT = path.resolve(__dirname, '..', '..')
const BLOG = path.join(ROOT, 'content', 'blog')

function indexablePosts() {
  const src = readFileSync(path.join(ROOT, 'lib', 'noindex-reprints.ts'), 'utf8')
  const reprints = new Set([...src.matchAll(/'([^']+)'/g)].map((m) => m[1]))
  return readdirSync(BLOG).filter(
    (f) => f.endsWith('.md') && !/^(haiku|cerebras)-/.test(f) && !reprints.has(f.replace(/\.md$/, '')),
  )
}

function proseSentences(md: string): string[] {
  const body = md.replace(/^---[\s\S]*?---/, '').replace(/```[\s\S]*?```/g, ' ')
  const out: string[] = []
  for (const line of body.split('\n')) {
    if (!line.trim() || line.startsWith('#') || line.trim().startsWith('|')) continue
    out.push(...line.split(/(?<=[.!?])\s+(?=[A-Z*(\[])/))
  }
  return out
}

// "<N>-year / five-year / past five years ... growth rate ... N.N%" (either order)
const GROWTH =
  /(?:(?:\d+|five|three|ten)[- ]year|past (?:\d+|five|three|ten) years|over the (?:past|last) (?:\d+|five|three|ten) years)[^.\n]{0,60}(?:dividend )?growth rate[^.\n]{0,40}\d+(?:\.\d+)?\s*%|(?:dividend )?growth rate[^.\n]{0,60}\d+(?:\.\d+)?\s*%[^.\n]{0,40}(?:over the (?:past|last) (?:\d+|five|three|ten) years|(?:\d+|five|three|ten)[- ]year)/i
const ARITH = /[=÷×]|\$\d[\d,]*(?:\.\d+)?\s*(?:÷|\/|×|x)\s*\$/
const GUIDANCE = /\bminimum\b|\bor higher\b|\bat least\b|\bfor example, an investor\b|\bhypothetical/i

// phrases that were wrong, invented or outdated and must not reappear
const FORBIDDEN = [
  'Warren Buffett famously called compound interest',
  'costs 40-60% of long-term wealth',
  'loses 40-60% of potential retirement wealth',
  'increase portfolio value by 40-60%',
  'increase portfolio value by 40-70%',
  '| 3M | MMM | $',
  'STORE Capital (STOR)',
  'Broadmark Realty Capital',
  'Schwab U.S. Utilities (SCHB)',
  'Locks in 20% long-term rate on dividends',
  'sell before the ex-dividend date to capture',
  '94% more wealth',
  'Florida population growth (2M+',
  'Total invested: $13,300',
  'Ellington Financial (EFC) are required by regulation',
  'special dividend of $3.20 per share',
  'special dividend of $3.00 per share in 2025',
  'Aristocrats had 0 cuts in 2008',
  'since 1893 (oldest in U.S.)',
  '| Dollar Tree | DLTR |',
  'earning 7-10% safely',
  'According to a study by the National Bureau of Economic Research',
  'turn $250,000 into $2 million',
  'mplx LP | MPLX | 7.9%',
]

describe('indexable blog posts, claims pass 2', () => {
  const posts = indexablePosts()

  it('covers the indexable set', () => {
    expect(posts.length).toBeGreaterThan(100)
  })

  it('no sentence gives a per-company N-year dividend growth rate figure', () => {
    const bad: string[] = []
    for (const f of posts) {
      for (const s of proseSentences(readFileSync(path.join(BLOG, f), 'utf8'))) {
        if (ARITH.test(s) || GUIDANCE.test(s)) continue
        if (GROWTH.test(s)) bad.push(`${f}: ${s.slice(0, 120)}`)
      }
    }
    expect(bad).toEqual([])
  })

  it('none of the corrected claims reappears', () => {
    const bad: string[] = []
    for (const f of posts) {
      const t = readFileSync(path.join(BLOG, f), 'utf8')
      for (const p of FORBIDDEN) if (t.includes(p)) bad.push(`${f}: ${p}`)
    }
    expect(bad).toEqual([])
  })

  it('the Dividend Aristocrats list no longer includes 3M', () => {
    const t = readFileSync(path.join(BLOG, '02-top-10-dividend-aristocrats-analysis.md'), 'utf8')
    expect(/3M|MMM/.test(t)).toBe(false)
  })

  it('the tracking-sheet portfolio totals add up', () => {
    const t = readFileSync(path.join(BLOG, '30-track-your-dividend-income-and-portfolio-performance.md'), 'utf8')
    // 50 x $145 + 100 x $52 + 40 x $130 = $17,650; 50 x $155 + 100 x $58 + 40 x $165 = $20,150
    expect(t).toContain('Total invested: $17,650')
    expect(t).toContain('Current value: $20,150')
    expect(t).toContain('Portfolio yield on cost: 3.15%')
  })
})
