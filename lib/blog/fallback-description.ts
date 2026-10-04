// Meta-description fallback for posts whose frontmatter has no `description`.
// Takes the first real prose paragraph of the markdown body (skips headings, tables,
// lists, quotes, code and images), strips markdown, and trims to <= 155 characters at
// a word boundary. Returns '' when the body has no suitable paragraph.

const MAX = 155

function stripMarkdown(s: string): string {
  return s
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`~]+/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export function fallbackDescription(body: string): string {
  const withoutFences = body.replace(/```[\s\S]*?```/g, '\n\n')
  for (const block of withoutFences.split(/\n\s*\n/)) {
    const lead = block.trimStart()
    const first = lead[0]
    if (!first || '#|>-*+<[!'.includes(first) || /^\d+[.)]\s/.test(lead)) continue
    const text = stripMarkdown(block)
    if (text.length < 60) continue
    if (text.length <= MAX) return text
    const cut = text.slice(0, MAX - 3)
    const lastSpace = cut.lastIndexOf(' ')
    return (lastSpace > 80 ? cut.slice(0, lastSpace) : cut).replace(/[\s,;:.-]+$/, '') + '...'
  }
  return ''
}
