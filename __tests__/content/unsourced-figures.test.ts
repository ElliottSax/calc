import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'
import { needsFiguresNote, writtenMonth } from '../../lib/blog/figures-note'

// 2026-10-04: most of content/blog was machine-written in March 2026 and stated invented
// numbers as fact ("JNJ currently offers a dividend yield of 2.85% and a payout ratio of
// 54.12%"), cited studies nobody can find, and quoted "current" yields for partnerships that
// stopped trading years earlier. scripts/strip_unsourced_figures.py removed them; this keeps
// the patterns from coming back in any post Google is asked to index.

const ROOT = path.resolve(__dirname, '..', '..')
const BLOG = path.join(ROOT, 'content', 'blog')

function indexablePosts(): string[] {
  const src = readFileSync(path.join(ROOT, 'lib', 'noindex-reprints.ts'), 'utf8')
  const reprints = new Set([...src.matchAll(/'([^']+)'/g)].map((m) => m[1]))
  return readdirSync(BLOG).filter(
    (f) => f.endsWith('.md') && !/^(haiku|cerebras)-/.test(f) && !reprints.has(f.replace(/\.md$/, '')),
  )
}

const PCT2 = /\d+\.\d{2}\s*%/
const LABEL = /\b(yield(?:s|ing)?|payout ratios?|growth rates?|CAGR|returns?)\b/i
const TICKER = /\(([A-Z]{1,5}(?:[.-][A-Z]{1,2})?)\)/
const ARITH = /[=÷×]|\$\d/
const UNNAMED_STUDY =
  /according to (?:a|our|the|recent)\b[^,.]{0,40}?(?:study|survey|analysis|data|research|report)|\b(?:research|studies|market data|historical data|data|statistics) (?:shows?|suggests?|indicates?|finds?|found|demonstrates?)\b|\bdata from 2026\b|\(2026 data\)/i
// Securities that no longer trade, never existed, or are the wrong instrument for the name.
const DEAD = /\bMMP\b|Magellan Midstream|\bPSXP\b|Phillips 66 Partners|\bVLP\b|Valero Energy Partners|RDS\.A|Royal Dutch Shell|Certent|Healthplex|\bHCT\b|CBRE Acquisition|National Retail(?: Properties)? \(NRT\)|Invesco Dividend \(PLD\)|Invesco Dividend \| PLD|\bVDAIX\b|\bVGSIX\b|Invesco MLP ETF/
// 3M's streak of increases ended with the 2024 cut.
const MMM_STREAK = /\b(?:3M|MMM)\b[^.\n]{0,80}\b(?:consecutive years|century|100\+|103)\b/i

function proseSentences(md: string): string[] {
  const body = md.replace(/^---[\s\S]*?---/, '').replace(/```[\s\S]*?```/g, ' ')
  const out: string[] = []
  for (const line of body.split('\n')) {
    if (!line.trim() || line.startsWith('#') || line.trim().startsWith('|')) continue
    out.push(...line.split(/(?<=[.!?])\s+(?=[A-Z*(\[])/))
  }
  return out
}

describe('indexable blog posts carry no unsourced or impossible figures', () => {
  const posts = indexablePosts()

  it('covers the indexable set', () => {
    expect(posts.length).toBeGreaterThan(100)
  })

  it('no sentence attaches a two-decimal yield/payout/growth figure to a named security', () => {
    const bad: string[] = []
    for (const f of posts) {
      for (const s of proseSentences(readFileSync(path.join(BLOG, f), 'utf8'))) {
        // two-decimal figures of at least 1% -- 0.0x% expense ratios are real and stable
        const big2 = [...s.matchAll(/(\d+\.\d{2})\s*%/g)].some((m) => parseFloat(m[1]) >= 1)
        if (big2 && LABEL.test(s) && TICKER.test(s) && !ARITH.test(s) && !/expense ratio/i.test(s)) bad.push(`${f}: ${s.slice(0, 120)}`)
      }
    }
    expect(bad).toEqual([])
  })

  it('no unnamed "study/survey/data shows" claim carries a figure', () => {
    const bad: string[] = []
    for (const f of posts) {
      for (const s of proseSentences(readFileSync(path.join(BLOG, f), 'utf8'))) {
        if (UNNAMED_STUDY.test(s) && /\d/.test(s)) bad.push(`${f}: ${s.slice(0, 120)}`)
      }
    }
    expect(bad).toEqual([])
  })

  it('names no delisted, fabricated or misidentified securities', () => {
    const bad: string[] = []
    for (const f of posts) {
      const txt = readFileSync(path.join(BLOG, f), 'utf8')
      for (const s of proseSentences(txt).concat(txt.split('\n').filter((l) => l.trim().startsWith('|')))) {
        const m = s.match(DEAD)
        // naming a vanished partnership as history ("absorbed by ONEOK in 2023") is fine
        if (m && !/absorbed|acquired|merged|no longer|delisted/i.test(s)) bad.push(`${f}: ${m[0]}`)
      }
      if (MMM_STREAK.test(txt)) bad.push(`${f}: 3M streak claim`)
    }
    expect(bad).toEqual([])
  })

  it('the two hand-written list pages label their figures as a dated snapshot', () => {
    for (const f of ['best-dividend-stocks-for-beginners.md', 'best-reit-dividend-stocks.md']) {
      const txt = readFileSync(path.join(BLOG, f), 'utf8')
      expect(txt).toMatch(/compiled when this article was written \(July 2026\)/)
      expect(txt).not.toMatch(/\| MMM \|/)
    }
  })
})

describe('figures note helper', () => {
  it('fires for ticker + percentage and for percentage table rows', () => {
    expect(needsFiguresNote('Johnson & Johnson (JNJ) yields about 2.7% today.')).toBe(true)
    expect(needsFiguresNote('| Stock | Yield |\n|---|---|\n| Coca-Cola | 2.9% |\n')).toBe(true)
  })
  it('stays quiet for prose without security figures', () => {
    expect(needsFiguresNote('Reinvesting dividends compounds over time. Start early.')).toBe(false)
    expect(needsFiguresNote('A 30% withholding tax applies in some countries.')).toBe(false)
  })
  it('formats the written month or returns null', () => {
    expect(writtenMonth('2026-03-22')).toBe('March 2026')
    expect(writtenMonth(new Date('2026-07-24T00:00:00Z'))).toBe('July 2026')
    expect(writtenMonth(undefined)).toBeNull()
    expect(writtenMonth("'''2026")).toBeNull()
  })
})
