import { describe, it, expect } from 'vitest'
import { existsSync, readdirSync } from 'node:fs'
import path from 'node:path'
import redirects from '@/lib/redirects/ranked-404-redirects.json'

const ROOT = path.resolve(__dirname, '..', '..')
const APP = path.join(ROOT, 'app')
const BLOG = path.join(ROOT, 'content', 'blog')

// Same resolution rule as sitemap-routes.test.ts: app/<segments>/page.tsx, with [param] folders
// standing in for a segment.
function routeExists(urlPath: string): boolean {
  const segs = urlPath.split('/').filter(Boolean).map(decodeURIComponent)
  const walk = (dir: string, rest: string[]): boolean => {
    if (rest.length === 0) {
      return ['page.tsx', 'page.ts', 'page.jsx', 'page.js'].some((f) => existsSync(path.join(dir, f)))
    }
    const [head, ...tail] = rest
    const exact = path.join(dir, head)
    if (existsSync(exact) && walk(exact, tail)) return true
    const dynamic = readdirSync(dir, { withFileTypes: true }).filter(
      (d) => d.isDirectory() && /^\[[^\]]+\]$/.test(d.name),
    )
    return dynamic.some((d) => walk(path.join(dir, d.name), tail))
  }
  return walk(APP, segs)
}

// /blog/<slug> is served by the dynamic app/blog/[id] route, which 404s unless
// content/blog/<slug>.md exists, so the route check alone is not enough for blog posts.
function targetResolves(dest: string): boolean {
  const m = dest.match(/^\/blog\/([^/]+)$/)
  if (m) return existsSync(path.join(BLOG, `${m[1]}.md`))
  return routeExists(dest)
}

describe('ranked 404 redirects', () => {
  it('has the expected shape: absolute paths, no self-redirects, unique sources', () => {
    const sources = redirects.map((r) => r.source)
    expect(new Set(sources).size).toBe(sources.length)
    for (const r of redirects) {
      expect(r.source.startsWith('/')).toBe(true)
      expect(r.destination.startsWith('/')).toBe(true)
      expect(r.source).not.toBe(r.destination)
    }
  })

  it('every destination resolves to a real page', () => {
    const broken = redirects.filter((r) => !targetResolves(r.destination)).map((r) => `${r.source} -> ${r.destination}`)
    expect(broken).toEqual([])
  })

  it('no source is still a live page (a redirect must not shadow a real route)', () => {
    const shadowed = redirects.filter((r) => targetResolves(r.source)).map((r) => r.source)
    expect(shadowed).toEqual([])
  })

  it('destinations are not themselves redirect sources (no chains)', () => {
    const sources = new Set(redirects.map((r) => r.source))
    const chained = redirects.filter((r) => sources.has(r.destination)).map((r) => r.destination)
    expect(chained).toEqual([])
  })
})
