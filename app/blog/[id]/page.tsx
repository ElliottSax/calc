import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { notFound, redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { EmailCaptureForm } from '@/components/forms/EmailCaptureForm'
import { getSlugForId, isValidBlogId, BLOG_SLUG_MAP } from '@/lib/blog/slug-mapping'
import { NOINDEX_REPRINTS } from '@/lib/noindex-reprints'
import { NOINDEX_STAGE1 } from '@/lib/noindex-stage1'
import { fallbackDescription } from '@/lib/blog/fallback-description'
import { needsFiguresNote, figuresNoteText } from '@/lib/blog/figures-note'

// The [id] segment serves two purposes:
//  - purely-numeric legacy IDs -> 301 redirect to the slug URL (preserves SEO)
//  - everything else is treated as a post slug and rendered from content/blog/<file>.md
// (One dynamic segment name per path level, so this can't be a separate [slug].)
// content/blog is bundled into this function via outputFileTracingIncludes in
// next.config.js so fs reads resolve at runtime on Vercel.
//
// Full static generation, not ISR. This route reads content/blog/<slug>.md via
// fs at render time; that's fine on Vercel (a real Node.js fs, files bundled by
// outputFileTracingIncludes), but on the Cloudflare deployment (OpenNext,
// Workers runtime) there's no real filesystem backing content/blog for
// on-demand reads even though the .md files ARE included in the deployed
// bundle -- fs.readFileSync/readdirSync silently fail to find them at request
// time there (confirmed: every /blog/<slug> 404'd on the Cloudflare preview
// until this was made fully static). generateStaticParams below pre-renders
// every post at build time (real Node fs, works everywhere) instead, which
// also fits the existing update model: autopublish only adds new files and
// triggers its own rebuild, so a full rebuild always has current content.
// dynamicParams = false means any slug NOT in generateStaticParams 404s
// immediately rather than attempting a runtime fs read that would fail
// silently on Cloudflare.
export const dynamicParams = false

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export function generateStaticParams(): { id: string }[] {
  const legacyIds = Object.keys(BLOG_SLUG_MAP)
  let fileSlugs: string[] = []
  try {
    fileSlugs = fs
      .readdirSync(BLOG_DIR)
      .filter((f) => f.endsWith('.md'))
      .map((f) => f.replace(/\.md$/, ''))
  } catch {
    fileSlugs = []
  }
  const curatedSlugs = Object.keys(SLUG_TO_FILE)
  const all = new Set([...legacyIds, ...fileSlugs, ...curatedSlugs])
  return Array.from(all).map((id) => ({ id }))
}

// A handful of curated posts use a clean slug that differs from the numbered file.
const SLUG_TO_FILE: Record<string, string> = {
  'drip-investing-for-beginners-2026': '01-drip-investing-for-beginners-2026.md',
  'top-10-dividend-aristocrats-analysis': '02-top-10-dividend-aristocrats-analysis.md',
  'monthly-dividend-stocks-guide': '03-monthly-dividend-stocks-guide.md',
  'reits-vs-dividend-stocks': '04-reits-vs-dividend-stocks.md',
  'tax-efficient-dividend-investing': '05-tax-efficient-dividend-investing.md',
  'dividend-growth-strategy': '06-dividend-growth-strategy.md',
  'high-yield-vs-dividend-growth': '07-high-yield-vs-dividend-growth.md',
  'building-1k-monthly-dividend-income': '08-building-1k-monthly-dividend-income.md',
  'retirement-income-from-dividends': '09-retirement-income-from-dividends.md',
  'dividend-reinvestment-calculator-guide': '10-dividend-reinvestment-calculator-guide.md',
}

function resolveFile(slug: string): string | null {
  const candidates = [SLUG_TO_FILE[slug], `${slug}.md`].filter(Boolean) as string[]
  for (const name of candidates) {
    const p = path.join(BLOG_DIR, name)
    if (fs.existsSync(p)) return p
  }
  // Fall back to scanning: match by full stem or by stem with a leading "NN-" stripped.
  try {
    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))
    const match = files.find((f) => {
      const stem = f.replace(/\.md$/, '')
      return stem === slug || stem.replace(/^\d+[-_]/, '') === slug
    })
    if (match) return path.join(BLOG_DIR, match)
  } catch {
    /* directory unreadable — treat as not found */
  }
  return null
}

// Some generated frontmatter titles are wrapped in stray quotes (e.g.
// title: '''''''Foo'''''''). Strip surrounding quotes/whitespace and collapse runs.
function cleanText(t: unknown): string {
  return String(t ?? '').replace(/^[\s'"]+|[\s'"]+$/g, '').replace(/\s+/g, ' ').trim()
}

// Frontmatter dates are written unquoted (date: 2026-03-21). gray-matter's YAML
// parser turns an unquoted ISO-looking date into a native JS Date, so the old
// `String(data.date)` call ran Date.prototype.toString() -- "Sat Mar 21 2026
// 00:00:00 GMT+0000 (Coordinated Universal Time)" -- into datePublished, which
// fails Google's Article rich-result validation (requires ISO 8601). Normalize
// both Date objects and plain strings to ISO 8601 instead.
function toISODate(value: unknown): string | undefined {
  if (!value) return undefined
  const d = value instanceof Date ? value : new Date(String(value))
  return isNaN(d.getTime()) ? undefined : d.toISOString()
}

function loadPost(slug: string): { data: Record<string, any>; body: string; title: string; description: string } | null {
  const file = resolveFile(slug)
  if (!file) return null
  try {
    const { data, content } = matter(fs.readFileSync(file, 'utf-8'))
    // First markdown H1 (clean) — title fallback, and stripped from the body so it
    // doesn't duplicate the heading we render from the title.
    const h1 = content.match(/^\s*#\s+(.+?)\s*$/m)?.[1] ?? ''
    const body = content.replace(/^\s*#\s+.*\r?\n+/, '')
    const title =
      cleanText(data.title) ||
      cleanText(h1) ||
      slug.replace(/^\d+[-_]/, '').replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
    return { data: data as Record<string, any>, body, title, description: cleanText(data.description) }
  } catch {
    return null
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const post = loadPost(id)
  if (!post) return { title: 'Article Not Found | Dividend Engines' }
  // Posts without a frontmatter description (the 01-10 numbered guides) fall back to
  // their first prose paragraph instead of shipping with no meta description.
  const description = post.description || fallbackDescription(post.body) || undefined
  const url = `https://dividendengines.com/blog/${id}`
  // `absolute` bypasses the root layout's "%s | Dividend Engines -
  // Financial Independence Tools" template, which otherwise double-brands and
  // overflows the ~60-char title limit. An optional `seoTitle` frontmatter field
  // lets a page set a tuned, keyword-first title.
  const seoTitle = cleanText(post.data.seoTitle) || `${post.title} | Dividend Engines`
  // Auto-generated low-value pages (haiku-*/cerebras-* batches) drag down the
  // site's quality signal and waste crawl budget — they earned ~4 clicks across
  // ~1,900 pages in a month. noindex them (still crawlable/followable) so Google
  // concentrates ranking signals on the real articles + tools. Reversible: drop
  // this rule. Also excluded from the sitemap.
  // Beyond the auto-generated batches, 319 of the 470 *indexed* posts turned out
  // to be near-duplicate reprints of the other 151 (families up to 54, 39 sharing
  // a byte-identical opening). Noindexing only the haiku-/cerebras- tail left
  // that ratio untouched in the head. See lib/noindex-reprints.ts.
  // Thin-content stage 1 (2026-10-04) adds 13 more; see lib/noindex-stage1.ts.
  const isLowValue =
    /^(haiku|cerebras)-/.test(id) || NOINDEX_REPRINTS.has(id) || NOINDEX_STAGE1.has(id)
  return {
    title: { absolute: seoTitle },
    description,
    alternates: { canonical: url },
    openGraph: { title: post.title, description, type: 'article', url },
    ...(isLowValue ? { robots: { index: false, follow: true } } : {}),
  }
}

const components = {
  // The page itself renders the article title as the page's one <h1> (below).
  // Markdown bodies routinely open with their own "# Title" line duplicating
  // that title -- rendering it as a real <h1> gave every article page two
  // level-1 headings, a WCAG 1.3.1 heading-hierarchy violation repeated across
  // the whole blog. Demoted to <h2> (same size as before) so it nests as a
  // section under the page's real h1 instead of competing with it.
  h1: ({ node, ...p }: any) =><h2 className="text-3xl font-bold mt-10 mb-4" {...p} />,
  h2: ({ node, ...p }: any) =><h2 className="text-2xl font-bold mt-8 mb-3" {...p} />,
  h3: ({ node, ...p }: any) =><h3 className="text-xl font-semibold mt-6 mb-2" {...p} />,
  p: ({ node, ...p }: any) =><p className="mb-4 leading-7 text-gray-700 dark:text-gray-300" {...p} />,
  ul: ({ node, ...p }: any) =><ul className="list-disc pl-6 mb-4 space-y-1" {...p} />,
  ol: ({ node, ...p }: any) =><ol className="list-decimal pl-6 mb-4 space-y-1" {...p} />,
  li: ({ node, ...p }: any) =><li className="leading-7 text-gray-700 dark:text-gray-300" {...p} />,
  a: ({ node, ...p }: any) =><a className="text-blue-600 hover:underline" {...p} />,
  strong: ({ node, ...p }: any) =><strong className="font-semibold text-gray-900 dark:text-white" {...p} />,
  blockquote: ({ node, ...p }: any) =>(
    <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-600 dark:text-gray-400" {...p} />
  ),
  code: ({ node, ...p }: any) =><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm" {...p} />,
  table: ({ node, ...p }: any) =>(
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm" {...p} />
    </div>
  ),
  thead: ({ node, ...p }: any) =><thead className="bg-gray-50 dark:bg-gray-800" {...p} />,
  th: ({ node, ...p }: any) =><th className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-left font-semibold" {...p} />,
  td: ({ node, ...p }: any) =><td className="border border-gray-300 dark:border-gray-700 px-3 py-2" {...p} />,
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  // Legacy numeric IDs redirect to their slug URL (or 404 if unknown).
  if (/^\d+$/.test(id)) {
    if (isValidBlogId(id)) {
      const slug = getSlugForId(id)
      if (slug) redirect(`/blog/${slug}`)
    }
    notFound()
  }

  const post = loadPost(id)
  if (!post) notFound()

  const { data, body, title, description } = post
  const url = `https://dividendengines.com/blog/${id}`
  // FAQ rich results are the biggest CTR lever for pages ranking on page 1. Emit
  // Article + BreadcrumbList always, and FAQPage when the post's frontmatter
  // provides a `faq: [{ q, a }]` list (Google shows expandable Q&A in the SERP).
  const faq = Array.isArray((data as any).faq) ? ((data as any).faq as { q: string; a: string }[]) : []
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: title,
        description: description || undefined,
        url,
        ...(toISODate((data as any).date)
          ? { datePublished: toISODate((data as any).date), dateModified: toISODate((data as any).date) }
          : {}),
        author: { '@type': 'Organization', name: 'Dividend Engines' },
        publisher: { '@type': 'Organization', name: 'Dividend Engines' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Blog', item: 'https://dividendengines.com/blog' },
          { '@type': 'ListItem', position: 2, name: title, item: url },
        ],
      },
      ...(faq.length
        ? [{ '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }]
        : []),
    ],
  }
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 leading-tight text-gray-900 dark:text-white">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{description}</p>
          )}
          {/* Posts that pair named securities with percentages were written on a specific
              day; say so instead of letting a 2026-03 yield read as a live quote. */}
          {needsFiguresNote(body) && (
            <p
              data-figures-note
              className="mb-8 rounded-lg border border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/40 px-4 py-3 text-sm text-amber-900 dark:text-amber-200"
            >
              <strong>About the figures:</strong> {figuresNoteText((data as any).date)}
            </p>
          )}
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
            {body}
          </ReactMarkdown>

          {/* Lead capture — convert article readers into subscribers. Posts to
              the Resend-backed newsletter service; welcome email delivers value. */}
          <aside
            id="signup-form"
            className="mt-12 rounded-2xl border border-blue-200 dark:border-gray-700 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 sm:p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              Get smarter about dividends
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-5">
              Join free for practical dividend-investing tips, new calculator releases, and stock
              ideas — no spam, unsubscribe anytime.
            </p>
            <EmailCaptureForm variant="inline" />
          </aside>
        </article>
      </main>
    </>
  )
}
