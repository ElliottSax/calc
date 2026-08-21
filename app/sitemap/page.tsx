import { Metadata } from 'next'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import { NOINDEX_REPRINTS } from '@/lib/noindex-reprints'

export const metadata: Metadata = {
  title: 'Sitemap | Dividend Engines',
  description:
    'Every page on Dividend Engines: calculators, guides, courses and articles.',
}

// Content changes only when the publisher runs, so an hourly cache is always at
// least as fresh as the deployed content and avoids a readdirSync over
// content/blog (2,400+ files) on every request. Same reasoning as app/sitemap.ts.
export const revalidate = 3600

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

/**
 * The same set app/sitemap.ts publishes, and for the same reason: the
 * auto-generated `haiku-*` / `cerebras-*` batches and the near-duplicate
 * reprints are served `noindex`, so listing them here would invite crawling of
 * pages we have asked not to be indexed, and bury the real articles.
 */
function indexableSlugs(): string[] {
  try {
    return fs
      .readdirSync(BLOG_DIR)
      .filter((f) => f.endsWith('.md'))
      .filter((f) => !/^(haiku|cerebras)-/.test(f))
      .filter((f) => !NOINDEX_REPRINTS.has(f.replace(/\.md$/, '')))
      .map((f) => f.replace(/\.md$/, ''))
      .sort()
  } catch {
    return []
  }
}

function titleFromSlug(slug: string): string {
  return slug
    .replace(/^\d+-/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

const CALCULATORS = [
  ['/calculators', 'All calculators'],
  ['/calculators/drip', 'DRIP compounding'],
  ['/calculators/dividend-yield', 'Dividend yield'],
  ['/calculators/dividend-income', 'Dividend income'],
  ['/calculators/dividend-growth', 'Dividend growth'],
  ['/calculators/dividend-tax', 'Dividend tax'],
  ['/calculators/payout-ratio', 'Payout ratio'],
  ['/calculators/fire', 'FIRE number'],
  ['/calculators/compound-interest', 'Compound interest'],
  ['/calculators/401k', '401(k) growth'],
  ['/calculators/ira', 'IRA growth'],
  ['/calculators/savings', 'Savings goal'],
  ['/calculators/investment-return', 'Investment return'],
]

const SECTIONS = [
  ['/', 'Home'],
  ['/blog', 'Articles'],
  ['/guides', 'Guides'],
  ['/courses', 'Courses'],
  ['/resources', 'Resources'],
  ['/free-guide', "The Dividend Investor's Toolkit"],
  ['/free-guide/read', 'Read the toolkit online'],
]

const COMPANY = [
  ['/about', 'About'],
  ['/contact', 'Contact'],
  ['/privacy', 'Privacy Policy'],
  ['/terms', 'Terms of Service'],
  ['/disclaimer', 'Disclaimer'],
  ['/affiliate-disclosure', 'Affiliate Disclosure'],
]

function LinkList({ items }: { items: string[][] }) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {items.map(([href, label]) => (
        <li key={href}>
          <Link href={href} className="text-blue-600 hover:underline dark:text-blue-400">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default function SitemapPage() {
  const slugs = indexableSlugs()

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-3">Sitemap</h1>
      <p className="text-muted-foreground mb-10">
        Every page on this site. Machines want{' '}
        <a href="/sitemap.xml" className="underline">
          /sitemap.xml
        </a>
        .
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Sections</h2>
        <LinkList items={SECTIONS} />
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Calculators</h2>
        <LinkList items={CALCULATORS} />
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Company</h2>
        <LinkList items={COMPANY} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">
          Articles <span className="text-muted-foreground font-normal">({slugs.length})</span>
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          Auto-generated batches and near-duplicate reprints are served noindex and
          are deliberately not listed here.
        </p>
        <ul className="space-y-1.5">
          {slugs.map((slug) => (
            <li key={slug}>
              <Link
                href={`/blog/${encodeURIComponent(slug)}`}
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                {titleFromSlug(slug)}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
