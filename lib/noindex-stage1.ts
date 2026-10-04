/**
 * Thin-content stage 1 (2026-10-04): posts held back from the index after the
 * claims pass removed their invented figures.
 *
 * Basis: life-hq/CALC_THIN_CONTENT_TRIAGE_2026-10-04.json -- each of these had
 * zero Search Console impressions and zero bot-filtered human sessions in both
 * windows (28 days and since 2025-06-09) and is the shorter twin of a kept post
 * on the same topic, or has no concrete statement left. They stay reachable
 * and followable (noindex,follow) and are only dropped from the sitemap.
 *
 * Measurement: re-check KEEP+REWRITE impressions/clicks on 2026-11-01; if they
 * fell >20% vs the prior 4 weeks, revert by deleting this file. Stage 2
 * (merging duplicate pairs, rewrites) waits for that measurement.
 *
 * The three generator notes that were served as posts (README,
 * GENERATION_SUMMARY, dividend-etf-articles-summary) were removed outright in
 * the same change and redirect to /blog; they are not in this set.
 */
export const NOINDEX_STAGE1 = new Set<string>([
  '22-how-to-reinvest-dividends-maximum-growth',
  'best-brokerage-for-dividend-investors',
  'building-a-dividend-ladder-for-monthly-income',
  'dividend-income-in-retirement',
  'dividend-kings-analysis',
  'dividend-reinvestment-plans-explained',
  'dividend-sustainability-analysis-framework',
  'high-yield-vs-dividend-growth-stocks',
  'how-to-build-a-1000-monthly-dividend-portfolio',
  'how-to-build-a-1000month-dividend-portfolio',
  'portfolio-allocation-for-income',
  'reinvesting-dividends-for-growth',
  'technology-dividend-stocks-guide',
])
