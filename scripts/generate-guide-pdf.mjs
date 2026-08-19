/**
 * Renders lib/guide/toolkit-content.ts into public/dividend-investors-toolkit.pdf.
 *
 *   node scripts/generate-guide-pdf.mjs
 *
 * Run this after editing the guide content, and commit the resulting PDF. It is
 * generated rather than hand-made so the web version at /free-guide/read and the
 * downloadable file can never drift apart.
 *
 * Deliberately not wired into `next build`: regenerating on every deploy would
 * churn a binary in git for no reason, and a build should not depend on jsPDF
 * behaving identically across environments.
 */

import { jsPDF } from 'jspdf'
import { writeFileSync, mkdirSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(ROOT, 'public', 'dividend-investors-toolkit.pdf')

// The content module is TypeScript, and this script runs under plain node. Rather
// than pull in a transpiler for one file, read it and evaluate the exported data
// literals. They are pure data -- no imports, no runtime logic -- so this is safe
// and keeps the toolchain to zero extra dependencies.
async function loadContent() {
  const src = readFileSync(join(ROOT, 'lib', 'guide', 'toolkit-content.ts'), 'utf8')
  const stripped = src
    .replace(/^import[\s\S]*?$/gm, '')
    .replace(/export interface[\s\S]*?\n}/g, '')
    .replace(/:\s*GuideBlock\[\]/g, '')
    .replace(/:\s*GuideChapter\[\]/g, '')
    .replace(/\bexport const\b/g, 'const')
  const mod = new Function(
    `${stripped}\nreturn { GUIDE_TITLE, GUIDE_SUBTITLE, GUIDE_SITE, GUIDE_FRONT_MATTER, GUIDE_CHAPTERS };`
  )
  return mod()
}

// --- layout constants (mm, A4 portrait) ---
const PAGE_W = 210
const PAGE_H = 297
const MARGIN_X = 22
const MARGIN_TOP = 24
const MARGIN_BOTTOM = 22
const TEXT_W = PAGE_W - MARGIN_X * 2

const INK = [26, 32, 44]
const MUTED = [90, 100, 115]
const ACCENT = [37, 99, 235]
const RULE = [214, 220, 228]

function main() {
  const { GUIDE_TITLE, GUIDE_SUBTITLE, GUIDE_SITE, GUIDE_FRONT_MATTER, GUIDE_CHAPTERS } =
    awaitable()

  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  let y = 0
  let pageNo = 0
  // Chapter start pages, collected as we lay out, so the contents page is real
  // rather than guessed. The contents page is inserted afterwards.
  const chapterPages = []

  const newPage = () => {
    doc.addPage()
    pageNo += 1
    y = MARGIN_TOP
  }

  /** Reserve vertical space, breaking the page if the block will not fit. */
  const need = (mm) => {
    if (y + mm > PAGE_H - MARGIN_BOTTOM) newPage()
  }

  const setFont = (style, size, colour) => {
    doc.setFont('helvetica', style)
    doc.setFontSize(size)
    doc.setTextColor(...colour)
  }

  const paragraph = (text, { size = 10.5, style = 'normal', colour = INK, indent = 0, gap = 4.5 } = {}) => {
    setFont(style, size, colour)
    const lines = doc.splitTextToSize(text, TEXT_W - indent)
    const lh = size * 0.52
    for (const line of lines) {
      need(lh)
      doc.text(line, MARGIN_X + indent, y)
      y += lh
    }
    y += gap
  }

  const list = (items, ordered) => {
    items.forEach((item, i) => {
      const marker = ordered ? `${i + 1}.` : '•'
      setFont('bold', 10.5, ACCENT)
      const lines = doc.splitTextToSize(item, TEXT_W - 8)
      const lh = 10.5 * 0.52
      need(lh)
      doc.text(marker, MARGIN_X, y)
      setFont('normal', 10.5, INK)
      lines.forEach((line, li) => {
        if (li > 0) need(lh)
        doc.text(line, MARGIN_X + 8, y)
        y += lh
      })
      y += 1.8
    })
    y += 3
  }

  const formula = (text) => {
    const h = 11
    need(h + 4)
    doc.setFillColor(243, 246, 250)
    doc.roundedRect(MARGIN_X, y - 4.5, TEXT_W, h, 1.5, 1.5, 'F')
    setFont('bold', 10.5, ACCENT)
    doc.text(text, PAGE_W / 2, y + 2, { align: 'center' })
    y += h + 5
  }

  const note = (text) => {
    setFont('italic', 9.8, MUTED)
    const lines = doc.splitTextToSize(text, TEXT_W - 10)
    const lh = 9.8 * 0.52
    need(lines.length * lh + 6)
    const top = y - 4
    lines.forEach((line) => {
      doc.text(line, MARGIN_X + 7, y)
      y += lh
    })
    doc.setDrawColor(...ACCENT)
    doc.setLineWidth(0.8)
    doc.line(MARGIN_X + 1.5, top, MARGIN_X + 1.5, y - lh + 1.5)
    y += 5
  }

  const renderBlocks = (blocks) => {
    for (const b of blocks) {
      if (b.type === 'p') paragraph(b.text)
      else if (b.type === 'ul') list(b.items, false)
      else if (b.type === 'ol') list(b.items, true)
      else if (b.type === 'formula') formula(b.text)
      else if (b.type === 'note') note(b.text)
    }
  }

  // --- cover ---
  pageNo = 1
  y = 90
  setFont('bold', 30, INK)
  doc.splitTextToSize(GUIDE_TITLE, TEXT_W).forEach((line) => {
    doc.text(line, MARGIN_X, y)
    y += 13
  })
  y += 2
  setFont('normal', 12.5, MUTED)
  doc.splitTextToSize(GUIDE_SUBTITLE, TEXT_W).forEach((line) => {
    doc.text(line, MARGIN_X, y)
    y += 7
  })
  doc.setDrawColor(...ACCENT)
  doc.setLineWidth(1.2)
  doc.line(MARGIN_X, y + 6, MARGIN_X + 40, y + 6)
  setFont('normal', 10.5, MUTED)
  doc.text(GUIDE_SITE, MARGIN_X, PAGE_H - 24)

  // --- front matter ---
  newPage()
  setFont('bold', 17, INK)
  doc.text('Before you start', MARGIN_X, y)
  y += 11
  renderBlocks(GUIDE_FRONT_MATTER)

  // --- chapters ---
  for (const ch of GUIDE_CHAPTERS) {
    newPage()
    chapterPages.push({ number: ch.number, title: ch.title, page: pageNo })
    setFont('bold', 9.5, ACCENT)
    doc.text(`CHAPTER ${ch.number}`, MARGIN_X, y)
    y += 7.5
    setFont('bold', 18, INK)
    doc.splitTextToSize(ch.title, TEXT_W).forEach((line) => {
      doc.text(line, MARGIN_X, y)
      y += 8.5
    })
    doc.setDrawColor(...RULE)
    doc.setLineWidth(0.4)
    doc.line(MARGIN_X, y, MARGIN_X + TEXT_W, y)
    y += 8
    renderBlocks(ch.blocks)
  }

  // --- contents, inserted as page 2 now that real page numbers are known ---
  doc.insertPage(2)
  doc.setPage(2)
  y = MARGIN_TOP
  setFont('bold', 17, INK)
  doc.text('Contents', MARGIN_X, y)
  y += 12
  for (const c of chapterPages) {
    setFont('normal', 11, INK)
    doc.text(`${c.number}.`, MARGIN_X, y)
    doc.text(c.title, MARGIN_X + 8, y)
    setFont('normal', 11, MUTED)
    // +1 because inserting the contents page shifted everything after it
    doc.text(String(c.page + 1), PAGE_W - MARGIN_X, y, { align: 'right' })
    doc.setDrawColor(...RULE)
    doc.setLineWidth(0.15)
    doc.line(MARGIN_X + 10 + doc.getTextWidth(c.title), y - 1, PAGE_W - MARGIN_X - 6, y - 1)
    y += 8
  }

  // --- footers on every page but the cover ---
  const total = doc.getNumberOfPages()
  for (let p = 2; p <= total; p += 1) {
    doc.setPage(p)
    setFont('normal', 8.5, MUTED)
    doc.text(GUIDE_SITE, MARGIN_X, PAGE_H - 12)
    doc.text(`${p} / ${total}`, PAGE_W - MARGIN_X, PAGE_H - 12, { align: 'right' })
  }

  mkdirSync(dirname(OUT), { recursive: true })
  writeFileSync(OUT, Buffer.from(doc.output('arraybuffer')))
  console.log(`Wrote ${OUT} (${total} pages)`)
  return total
}

// tiny shim so main() can stay synchronous while loadContent is async
let CONTENT = null
function awaitable() {
  return CONTENT
}

loadContent().then((c) => {
  CONTENT = c
  main()
})
