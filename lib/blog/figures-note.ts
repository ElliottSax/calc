// Blog posts quote yields, payout ratios and returns that were true (at best) on the day they
// were written. A reader landing on a 2026-03 post in 2027 has no way to know that, so posts
// whose body pairs a named security with a percentage get a short note under the title. The
// note is honest about the limits of the figures instead of pretending they are live quotes.

const TICKER_WITH_PCT = /\([A-Z]{1,5}(?:[.-][A-Z]{1,2})?\)[^.\n]{0,120}\d+(?:\.\d+)?\s*%/
const TABLE_ROW_WITH_PCT = /^\|[^\n]*\d+(?:\.\d+)?\s*%[^\n]*\|\s*$/m

const ANY_TICKER = /\b[A-Z]{1,5}\b\s*(?:\(TSX\))?\s*\|/ // a ticker cell in a table row
const PAREN_TICKER = /\([A-Z]{1,5}(?:[.-][A-Z]{1,2})?\)/

/** True when the markdown body attaches percentages to named securities (tickers or table rows).
 *  Posts whose percentages are computed from stated assumptions and name no securities (the
 *  DRIP-timing article's year-by-year table) get no note. */
export function needsFiguresNote(body: string): boolean {
  if (!body) return false
  const prose = body.replace(/```[\s\S]*?```/g, ' ')
  if (TICKER_WITH_PCT.test(prose)) return true
  return TABLE_ROW_WITH_PCT.test(prose) && (PAREN_TICKER.test(prose) || ANY_TICKER.test(prose))
}

/** "March 2026" for a parseable frontmatter date, otherwise null. */
export function writtenMonth(date: unknown): string | null {
  if (date == null) return null
  if (!(date instanceof Date)) {
    const s = String(date).replace(/^['"]+|['"]+$/g, '')
    // a bare year ("2026", or the corrupted '''2026''' frontmatter) has no month to report
    if (!/\d{4}-\d{2}/.test(s) && !/[A-Za-z]{3}/.test(s)) return null
  }
  const d = date instanceof Date ? date : new Date(String(date).replace(/^['"]+|['"]+$/g, ''))
  if (Number.isNaN(d.getTime()) || d.getUTCFullYear() < 2020) return null
  return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' })
}

export function figuresNoteText(date: unknown): string {
  const month = writtenMonth(date)
  const when = month ? `when this article was written (${month})` : 'when this article was written'
  return `Yields, payout ratios and returns quoted below are approximate figures from ${when}. They are not live quotes and will have changed — check a company's stock page or your broker for current numbers before acting on them.`
}
