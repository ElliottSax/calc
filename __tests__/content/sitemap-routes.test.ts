import { describe, it, expect } from 'vitest'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'
import sitemap from '@/app/sitemap'

const ROOT = path.resolve(__dirname, '..', '..')
const APP = path.join(ROOT, 'app')

// A URL path resolves if app/<segments>/page.tsx exists, or a dynamic [param] folder
// stands in for a segment (e.g. /blog/<slug>, /courses/<slug>).
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

describe('sitemap routes', () => {
  it('every sitemap.xml entry maps to an existing page route', () => {
    const missing = sitemap()
      .map((e) => new URL(e.url).pathname)
      .filter((p) => !routeExists(p))
    expect(missing).toEqual([])
  })

  it('every internal link in the HTML sitemap page maps to an existing route', () => {
    const src = readFileSync(path.join(APP, 'sitemap', 'page.tsx'), 'utf8')
    const paths = [...src.matchAll(/\[\s*'(\/[^']*)'\s*,/g)].map((m) => m[1])
    expect(paths.length).toBeGreaterThan(10)
    const missing = paths.filter((p) => !routeExists(p))
    expect(missing).toEqual([])
  })
})
