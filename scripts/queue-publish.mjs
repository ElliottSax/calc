#!/usr/bin/env node
/**
 * Dependency-free autopublisher for GitHub Actions (per-repo, self-publishing).
 *
 * Moves the next article(s) from ./article-queue/ into the site's content dir.
 * The queue IS the dedup state: a published file is removed from the queue, so
 * the next run naturally takes the next one — no external state file needed.
 * The workflow commits + pushes the result, which triggers a Vercel deploy.
 *
 * Config: ./article-queue/.publish-config.json
 *   { "contentDir": "content/blog", "format": "flat"|"directory", "domain": "x.com" }
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const QUEUE_DIR = path.join(ROOT, 'article-queue');
const CONFIG_PATH = path.join(QUEUE_DIR, '.publish-config.json');

if (!fs.existsSync(CONFIG_PATH)) {
  console.log('no article-queue/.publish-config.json — nothing to do');
  process.exit(0);
}
const CONFIG = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
const PER_RUN = Number(process.env.ARTICLES_PER_RUN || CONFIG.articlesPerRun || 1);

function normalizeSlug(s) {
  s = String(s).toLowerCase().replace(/&/g, 'and').replace(/['"]/g, '');
  s = s.replace(/[^a-z0-9\-_]+/g, '-').replace(/-+/g, '-').replace(/^[-_]+|[-_]+$/g, '');
  return s.slice(0, 80).replace(/-+$/g, '');
}

function destPath(slug) {
  const base = path.join(ROOT, CONFIG.contentDir);
  return CONFIG.format === 'directory'
    ? path.join(base, slug, 'page.mdx')
    : path.join(base, `${slug}.md`);
}

// Refresh the first `date:` line in the frontmatter to today so published
// articles don't all show a stale generation date.
function freshenDate(text) {
  const today = new Date().toISOString().slice(0, 10);
  return text.replace(/^(date:[ \t]*).*$/m, `$1${today}`);
}

function queueFiles() {
  if (!fs.existsSync(QUEUE_DIR)) return [];
  return fs.readdirSync(QUEUE_DIR).filter(f => f.endsWith('.md')).sort()
    .map(f => path.join(QUEUE_DIR, f));
}

// A prior batch ("Add 100 new articles via autopublisher", content/blog/haiku-*)
// shipped with currency figures silently mangled by some no-longer-identifiable
// step upstream of this script: "$10,000" became ",000", "$1,520" became ",520",
// "\$10,787" became "\,787" — the "$" (and sometimes a leading backslash from
// markdown-escaping) plus the digits before the first comma vanish, leaving a
// bare comma-group with no digit or "$" immediately in front of it. A comma
// directly followed by exactly a 3-digit group, with no digit/"$" before it,
// doesn't occur in legitimate prose or real thousands-formatted numbers (those
// always have a digit right before the comma, e.g. "10,000"), so it's a
// reliable fingerprint. Refusing to publish on a match is cheap insurance
// against shipping the same corruption again from an unknown source.
const CORRUPT_CURRENCY_RE = /(?<![\d$]),\d{3}(?!\d)/;

function looksCorrupted(text) {
  return CORRUPT_CURRENCY_RE.test(text);
}

const gate = await import('./content-quality-gate.mjs');
const CONTENT_DIR_ABS = path.join(ROOT, CONFIG.contentDir);
const corpus = gate.corpusShingles(CONTENT_DIR_ABS);

let published = 0;
let rejected = 0;
for (const qf of queueFiles()) {
  if (published >= PER_RUN) break;
  const slug = normalizeSlug(path.basename(qf, '.md'));
  if (!slug) { fs.rmSync(qf); console.log(`drop (empty slug): ${path.basename(qf)}`); continue; }
  const dest = destPath(slug);
  const text = fs.readFileSync(qf, 'utf8');
  if (!/^---\r?\n/.test(text)) { fs.rmSync(qf); console.log(`drop (no frontmatter): ${slug}`); continue; }
  if (fs.existsSync(dest)) { fs.rmSync(qf); console.log(`drop (already published): ${slug}`); continue; }
  if (looksCorrupted(text)) {
    const quarantineDir = path.join(QUEUE_DIR, 'quarantine');
    fs.mkdirSync(quarantineDir, { recursive: true });
    fs.renameSync(qf, path.join(quarantineDir, path.basename(qf)));
    console.log(`QUARANTINED (looks like corrupted currency figures): ${slug}`);
    continue;
  }

  // Boilerplate gate, alongside the corrupted-currency quarantine above. 1,903
  // already-published articles here are mail-merge -- a topic title substituted
  // into a fixed f-string by template scripts in ../content-engine -- and this
  // site's own sitemap.ts now excludes them while blog/[id]/page.tsx serves them
  // noindex. That is an admission they should not have been published.
  //
  // Rejected articles stay in the queue rather than being deleted.
  const verdict = gate.check(qf, CONTENT_DIR_ABS, corpus);
  if (!verdict.ok) {
    rejected++;
    console.log(`SKIP ${slug}: ${verdict.reason}`);
    continue;
  }
  // A published article joins the corpus the next candidate is judged against,
  // otherwise a batch identical to each other all looks original.
  for (const sh of gate.shingles(gate.normalise(text))) corpus.add(sh);

  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, freshenDate(text));
  fs.rmSync(qf);
  published++;
  console.log(`PUBLISHED ${slug} -> ${path.relative(ROOT, dest)}`);
}
console.log(`done: ${published}/${PER_RUN} published, ${rejected} skipped by the quality gate, ${queueFiles().length} left in queue`);
