#!/usr/bin/env node
/**
 * Publish an article to dividendengines.com (the "calc" repo).
 *
 *   node scripts/publish-article.js '<json>'   (or a path to a .json file)
 *   json = { title, body, slug?, description?, author?, published_date?, tags? }
 *
 * Writes content/blog/<slug>.md. The dynamic route app/blog/[id]/page.tsx reads
 * this dir on demand (gray-matter frontmatter + react-markdown body), so a new
 * file renders at /blog/<slug> after deploy — no index/registry to regenerate.
 */
const fs = require('fs');
const path = require('path');

// Trim trailing hyphens AFTER truncating, so an 80-char cut that lands on a
// separator doesn't leave a dangling "-" (e.g. content/blog/foo-bar-.md).
const slugify = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80).replace(/-+$/g, '');
const oneLine = (s) => String(s || '').replace(/[\r\n]+/g, ' ').replace(/"/g, "'").trim();

const arg = process.argv[2] || '{}';
const raw = (arg && arg.length < 500 && fs.existsSync(arg)) ? fs.readFileSync(arg, 'utf-8') : arg;
const p = JSON.parse(raw);
if (!p.title || !p.body) { console.error('FAIL: title and body are required'); process.exit(1); }

const slug = slugify(p.slug || p.title);
const title = oneLine(p.title);
const description = oneLine(p.description).slice(0, 200);
const author = oneLine(p.author || 'Dividend Engines');
const date = oneLine(p.published_date || new Date().toISOString().slice(0, 10));
const tags = (Array.isArray(p.tags) && p.tags.length ? p.tags : ['dividend investing', 'dividend stocks', 'passive income'])
  .map((t) => `"${oneLine(t)}"`).join(', ');

const frontmatter = [
  '---',
  `title: "${title}"`,
  `description: "${description}"`,
  `date: "${date}"`,
  `author: "${author}"`,
  `category: "Dividend Investing"`,
  `tags: [${tags}]`,
  `keywords: [${tags}]`,
  `slug: "${slug}"`,
  '---',
  '',
].join('\n');

const outDir = path.join(process.cwd(), 'content', 'blog');
fs.mkdirSync(outDir, { recursive: true });
const filePath = path.join(outDir, `${slug}.md`);
// Refuse to silently clobber an existing post with the same slug — in an
// automated pipeline two different titles can collide and the second write
// would destroy the first article. Opt in with overwrite:true / --overwrite / OVERWRITE=1.
const allowOverwrite = p.overwrite === true || process.argv.includes('--overwrite') || process.env.OVERWRITE === '1';
if (fs.existsSync(filePath) && !allowOverwrite) {
  console.error(`FAIL: ${slug}.md already exists (slug collision). Pass overwrite:true (or --overwrite) to replace it.`);
  process.exit(1);
}
fs.writeFileSync(filePath, frontmatter + p.body.trim() + '\n');
console.log('WROTE', filePath);
console.log('PUBLISHED', slug, '(content/blog)');
