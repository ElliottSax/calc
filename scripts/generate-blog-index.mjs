// Scans BOTH live blog content sources and writes a static lookup table
// (lib/blog/blog-index.generated.ts) used by app/blog/layout.tsx and
// app/courses/[courseSlug]/page.tsx to match posts <-> courses by topic:
//   1. app/blog/<slug>/page.mdx        -- 97 static routes
//   2. content/blog/<file>.md          -- read at request time by
//      app/blog/[id]/page.tsx (fs.readFileSync) and listed in app/sitemap.ts's
//      blogSlugs(). This is the larger, primary content source (~2469 files) --
//      it was missed in the first pass of this script.
// Re-run this whenever blog posts are added/removed/retitled.
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const STATIC_BLOG_DIR = path.join(process.cwd(), 'app', 'blog')
const CONTENT_BLOG_DIR = path.join(process.cwd(), 'content', 'blog')
const NOINDEX_REPRINTS_FILE = path.join(process.cwd(), 'lib', 'noindex-reprints.ts')
const OUT_FILE = path.join(process.cwd(), 'lib', 'blog', 'blog-index.generated.ts')

// Same exclusions app/sitemap.ts applies to content/blog: the haiku-/cerebras-
// batches and the (bigger) NOINDEX_REPRINTS set are real files that render at
// real URLs, but the site's own authors already determined they're template-
// generated near-duplicates not worth surfacing (see lib/noindex-reprints.ts's
// own comment: 319 of 470 non-batch posts are reprints of one of 151 originals).
// Reuse that judgment here instead of re-deriving it or ignoring it.
const reprintsSrc = fs.readFileSync(NOINDEX_REPRINTS_FILE, 'utf-8')
const NOINDEX_REPRINTS = new Set(
  [...reprintsSrc.matchAll(/'((?:[^'\\]|\\.)*)'/g)].map((m) => m[1])
)

// Parses a frontmatter block. Falls back to line-by-line regex extraction of
// title/category when full YAML parsing fails -- this codebase's generated
// frontmatter has two known failure shapes: an unescaped nested `schema:`
// FAQPage block (apostrophes break YAML), and unquoted title values that
// themselves contain a colon (e.g. "title: Strategy: Complete Guide"). Both
// are pre-existing content bugs, out of scope to fix file-by-file here --
// this only needs to be resilient enough to extract title/category from them.
// First markdown H1 as a title fallback -- same convention app/blog/[id]/page.tsx
// already uses for posts with no frontmatter title.
function h1Title(raw) {
  return raw.match(/^\s*#\s+(.+?)\s*$/m)?.[1]
}

function parseFrontmatter(raw, label) {
  let title, category, tags
  try {
    const trimmed = raw.replace(/\nschema:\n(?:[ \t].*\n?)*/, '\n')
    const { data } = matter(trimmed)
    ;({ title, category, tags } = data)
  } catch {
    const block = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? ''
    title = block.match(/^title:\s*(.+)$/m)?.[1]
    category = block.match(/^category:\s*(.+)$/m)?.[1]
    tags = []
  }
  if (!title) title = h1Title(raw)
  if (!title) {
    console.warn(`  skip (no frontmatter title or H1): ${label}`)
    return null
  }
  return { title, category, tags }
}

function cleanText(t) {
  return String(t ?? '').replace(/^[\s'"]+|[\s'"]+$/g, '').replace(/\s+/g, ' ').trim()
}

const entries = []
const seenSlugs = new Set()
let staticFail = 0

// 1. Static app/blog/<slug>/page.mdx routes -- indexed first so they win any
// slug collision with content/blog (per-page code, more likely hand-tuned).
for (const dirent of fs.readdirSync(STATIC_BLOG_DIR, { withFileTypes: true })) {
  if (!dirent.isDirectory() || dirent.name.startsWith('[')) continue
  const mdxPath = path.join(STATIC_BLOG_DIR, dirent.name, 'page.mdx')
  if (!fs.existsSync(mdxPath)) continue
  const raw = fs.readFileSync(mdxPath, 'utf-8')
  const fm = parseFrontmatter(raw, dirent.name)
  if (!fm) { staticFail++; continue }
  entries.push({
    slug: dirent.name,
    title: cleanText(fm.title) || dirent.name,
    category: cleanText(fm.category),
    tags: Array.isArray(fm.tags) ? fm.tags : [],
    source: 'static',
  })
  seenSlugs.add(dirent.name)
}

// 2. content/blog/<file>.md -- the larger, primary source. Same exclusions
// app/sitemap.ts applies (haiku-/cerebras- prefix, NOINDEX_REPRINTS), plus:
// skip any slug already claimed by a static route above.
let contentFail = 0
let contentSkippedNoindex = 0
let contentSkippedDupe = 0
const contentFiles = fs.readdirSync(CONTENT_BLOG_DIR).filter((f) => f.endsWith('.md'))
for (const file of contentFiles) {
  const slug = file.replace(/\.md$/, '')
  if (/^(haiku|cerebras)-/.test(file)) { contentSkippedNoindex++; continue }
  if (NOINDEX_REPRINTS.has(slug)) { contentSkippedNoindex++; continue }
  if (seenSlugs.has(slug)) { contentSkippedDupe++; continue }
  const raw = fs.readFileSync(path.join(CONTENT_BLOG_DIR, file), 'utf-8')
  const fm = parseFrontmatter(raw, file)
  if (!fm) { contentFail++; continue }
  entries.push({
    slug,
    title: cleanText(fm.title) || slug,
    category: cleanText(fm.category),
    tags: Array.isArray(fm.tags) ? fm.tags : [],
    source: 'content',
  })
  seenSlugs.add(slug)
}

entries.sort((a, b) => a.slug.localeCompare(b.slug))

const staticCount = entries.filter((e) => e.source === 'static').length
const contentCount = entries.filter((e) => e.source === 'content').length
console.log(`Static app/blog routes: ${staticCount} indexed, ${staticFail} skipped (bad frontmatter)`)
console.log(
  `content/blog: ${contentFiles.length} files -> ${contentCount} indexed, ` +
  `${contentSkippedNoindex} skipped (noindex/reprint), ${contentSkippedDupe} skipped (dupe of static slug), ` +
  `${contentFail} skipped (bad frontmatter)`
)
console.log(`Total: ${entries.length} entries`)

// `source` was only needed for this summary; drop it from the emitted data.
const output = entries.map(({ source, ...rest }) => rest)

const body = `// GENERATED by scripts/generate-blog-index.mjs — do not hand-edit.
// Re-run \`node scripts/generate-blog-index.mjs\` after adding/removing/retitling blog posts.
// Sources: app/blog/<slug>/page.mdx (static routes) + content/blog/<file>.md
// (the larger primary source, filtered the same way app/sitemap.ts filters it:
// haiku-/cerebras- batches and lib/noindex-reprints.ts excluded). Static-route
// slugs win over content/blog on collision.

export interface BlogIndexEntry {
  slug: string
  title: string
  category: string
  tags: string[]
}

export const BLOG_INDEX: BlogIndexEntry[] = ${JSON.stringify(output, null, 2)}
`

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true })
fs.writeFileSync(OUT_FILE, body)
console.log(`Wrote ${entries.length} entries to ${OUT_FILE}`)
