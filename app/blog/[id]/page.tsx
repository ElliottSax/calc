import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { notFound, redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { getSlugForId, isValidBlogId } from '@/lib/blog/slug-mapping'

// The [id] segment serves two purposes:
//  - purely-numeric legacy IDs -> 301 redirect to the slug URL (preserves SEO)
//  - everything else is treated as a post slug and rendered from content/blog/<file>.md
// (One dynamic segment name per path level, so this can't be a separate [slug].)
// content/blog is bundled into this function via outputFileTracingIncludes in
// next.config.js so fs reads resolve at runtime on Vercel.

export const dynamic = 'force-dynamic'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

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
  const description = post.description || undefined
  const url = `https://dividendengines.com/blog/${id}`
  return {
    title: `${post.title} | Dividend Engines`,
    description,
    alternates: { canonical: url },
    openGraph: { title: post.title, description, type: 'article', url },
  }
}

const components = {
  h1: ({ node, ...p }: any) =><h1 className="text-3xl font-bold mt-10 mb-4" {...p} />,
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

  const { body, title, description } = post
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 leading-tight text-gray-900 dark:text-white">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{description}</p>
          )}
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
            {body}
          </ReactMarkdown>
        </article>
      </main>
    </>
  )
}
