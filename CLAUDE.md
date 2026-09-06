# ⚠️ SESSION CHECKPOINT — 2026-09-06 (finish-vs-delete pass, + follow-up fix) — READ THIS FIRST ⚠️
# ============================================================
# Everything below this block is stale (Feb 2026 / earlier 09-06 sweep). Read
# this before trusting anything further down. See also the "dead-code sweep"
# and 2026-09-05 checkpoints further down for prior context.
# ============================================================

## 2026-09-06 (same day, follow-up): fabricated rating/reviews found live in app/layout.tsx
A second, independent pass re-verifying the dormant-cluster decisions below
found one thing the original pass missed: `app/layout.tsx`'s sitewide
`WebApplication` JSON-LD block (injected on every page, not just one) still
carried an invented `aggregateRating` (4.9 stars, ratingCount 12847,
reviewCount 3456) plus two fully fabricated `Review` entries ("John D.",
"Sarah M.", including an invented "$50K -> $250K" testimonial). This is the
exact same fake-rating/testimonial pattern already stripped elsewhere on this
site — `components/seo/SchemaRenderer.tsx`'s `OrganizationSchema` even has a
comment recording that earlier removal — but this occurrence in `layout.tsx`
was never caught by that pass. Removed both blocks (commit 6ea7aaf). Real
`aggregateRating`/`review` data can be added back once it reflects actual
reviews, not before.

## 2026-09-06 (later same day): dormant-cluster decisions — all 30 deleted, none revived
The earlier sweep below renamed ~30 dead clusters to `_dormant-*` with a
DORMANT.md each, deliberately deferring finish-vs-delete. That decision is now
made: **all 30 were deleted outright** (`git rm -r`), nothing was revived.
Reasoning by group:
- **Parallel blog/SEO pipeline** (`app/blog/_dormant-page-template`,
  `lib/blog/_dormant-legacy-system` — the "50 SEO articles" manifest +
  generator scaffolding): deleted, no debate. This site has a live Google
  scaled-content penalty from 1,999 AI-mass-generated near-duplicate articles
  (see below). A second scaled-content generator is the exact failure pattern
  that caused that penalty — there is no safe "finish and launch" path for it
  on this site.
- **Enhanced DRIP calculator suite** (`components/_dormant-enhanced/`,
  ~17 files centered on `EnhancedDripCalculator.tsx`): read in full against
  the live `components/calculators/DripCalculator.tsx` before deciding.
  Deleted, not revived — it fails on multiple independent grounds, not just
  one: (1) `news/MarketInsights.tsx` renders hardcoded `mockNews` fake
  headlines — exactly the fabricated-content pattern already stripped
  sitewide elsewhere (fake ratings, fake testimonials, "FDIC Insured" error);
  (2) `stockApi.ts` depends on an unconfigured third-party API
  (`api.twelvedata.com`, no key set) — a new external dependency the task
  explicitly ruled out; (3) it never imports `InlineBrokerCTA` at all, so
  swapping it in would delete the site's actual broker-affiliate revenue
  mechanism from the DRIP page; (4) it hardcodes its own dark
  purple/gamified theme and a separate `ThemeToggle`, ignoring the site's
  real theme system. The live `DripCalculator.tsx` is the more complete,
  correct, already-monetized component (it has the CSV/PDF export, viral
  `ShareResults`, and `InlineBrokerCTA` — see the 2026-09-05 checkpoint's
  DRIP-calculator fixes). No swap was made.
- **Everything else** (27 smaller clusters — duplicate analytics/web-vitals/
  error-handling/rate-limiter implementations, a stale 5-broker affiliate
  list, unrouted stock-profile/related-stocks pages, unwired popups/modals/
  hero variants/ad slots, an accessibility trio, a PWA hook + service worker,
  email-sequence scaffolding, etc.): deleted. None qualified as the "trivial,
  zero-risk wire-in" exception — every one either duplicated something a live
  system already covers, needed a real product/business decision (which page
  gets the CTA, whether to run ads, whether to commit to a drip-email
  campaign), or (accessibility helpers) needed nontrivial integration work
  (matching DOM ids across pages, wrapping existing modals) rather than a
  single missing import line. Full per-cluster reasoning was in each
  DORMANT.md, now removed along with the code.
- Not touched: the live `WebVitals.tsx` → `/api/analytics/vitals` console-log
  stub mismatch flagged in one of the deleted DORMANT.md files (the real
  `/api/vitals/route.ts` sits unused) — that's a live-code bug, out of scope
  for this dormant-cluster pass, still open.
- Verified after deletion: `npx tsc --noEmit` clean, deploy reached Ready,
  homepage + `/calculators/drip` both curl 200.

## 2026-09-06 (morning): dead-code sweep (deleted 104 files, dormant-flagged ~35 more)
Ran an independent re-verification of a dead-code/bloat audit, then acted on
what checked out (commit 6e15523, pushed to origin/main, deploy verified
Ready + live pages curled 200):
- **Deleted** (confirmed non-routes / unreferenced, zero live-URL impact):
  97 `app/blog/*/page.mdx` files (MDX isn't configured anywhere in this repo
  — no `@next/mdx`, no `pageExtensions` override — so these were never
  routes; 90 had a byte-parity `content/blog/*.md` twin already serving that
  URL, 2 were old paths already redirected, 5 were already-404 underscore
  variants), plus 7 orphaned `content/*.md` root files nothing reads.
- **Renamed to `_dormant-*`** (zero importers from `app/` or
  `middleware.ts`, confirmed by grep + a clean `tsc --noEmit`): whole
  directories `lib/{error-handling,monitoring,accessibility,responsive,
  performance,schemas}`, `components/{ads,market,marketing,stocks,enhanced}`
  (the last being `EnhancedDripCalculator.tsx` + 16 files reachable only
  through it — a whole second, unrouted DRIP calculator variant), and
  ~15 single files moved out of otherwise-live folders (old
  `lib/data/broker-affiliates.ts`, `lib/affiliate/tracking.ts`, the legacy
  `lib/blog/{blog-sitemap,blog-data,blog-content,articles-manifest}.ts` +
  `page-template.tsx` "50 SEO articles" pipeline, three separate dead
  web-vitals implementations, etc.). Each new `_dormant-*` directory has a
  `DORMANT.md` explaining what it was and what decision (finish-and-launch vs
  delete) is still open — **nothing was deleted here, only flagged**, since
  it may be unfinished-but-wanted work. Fixed `lib/data/broker-affiliates.ts`
  being called "Current" further down this file — it's the dormant one now;
  `-expanded.ts` is what's actually imported.
- **Deliberately NOT touched**, per the standing deferral below: the 1,999
  noindexed haiku-*/cerebras-* posts and 319 noindexed template-reprint
  posts. These are live, crawlable, noindexed URLs — not dead code — and
  their fate (delete vs. leave noindexed) was already explicitly deferred
  once, after the 6346f5a accidental-deletion incident. Also left alone:
  `scripts/seo-article-swarm.py` / `generate-blog-posts.ps1` /
  `article-topics.json` (the swarm generators — flagged as a decision, not
  auto-deleted) and ~111 root-level session-summary `.md`/`.txt` files
  (low-priority repo noise, not individually verified).
- **Also noticed, not acted on** (outside this sweep's scope): `app/blog/
  page.tsx` (the blog INDEX page, distinct from the `[id]` post route) is
  still a hardcoded mock with a fabricated "Senior Analyst" byline and view/
  comment counts, and links to `/blog/topic/*`, `/blog/category/*`,
  `/blog/tag/*` routes that don't exist — it doesn't list the real 151
  indexed posts. The integrity-gates workflow excludes `app/blog/`, so this
  is invisible to it. Same class of issue as the fabricated social proof
  removed elsewhere on 2026-08-19/09-05 — worth a follow-up pass.

## What actually happened since the Feb 2026 status below
- **This site got hit with a Google scaled-content penalty.** The content/
  directory had 2,469 blog markdown files — 1,999 were `haiku-*`/`cerebras-*`
  prefixed AI-mass-generated junk or near-duplicate template reprints, only 151
  were genuinely original. That got noindexed back in early August (commits
  0cd11fa, 11c841d) — already fixed, but Google's trust-recovery takes months,
  not weeks. Current ~17 organic sessions/month reflects the pre-cleanup
  penalty, not a currently-broken site. **Do not write more content until this
  recovers** — check Search Console impressions/position trend before adding
  any new articles, and if you do, max 2-3 genuinely original pieces at a time.
- 88% of this site's "traffic" was headless-bot scraping from China/Singapore
  (not real users) — now blocked at the edge in middleware.ts by country.
- 2 critical CVEs patched (jspdf PDF-injection, protobufjs RCE via posthog-js).
- **The broker CTAs mentioned as "COMPLETE & WORKING" below are placeholder,
  not live affiliate relationships** — confirmed directly by Elliott, don't
  assume they generate real revenue.
- Real compliance violations found and removed: fake ratings baked into JSON-LD
  (Google spam-policy risk), a fully fabricated urgency modal with invented
  testimonials/stats, and a factual error claiming brokerage accounts are
  "FDIC Insured" (they're SIPC-protected) — this was a real, risky misstatement.
- DRIP calculator (the most complete one) got a broken canonical-domain fix,
  duplicate-page consolidation (3 routes → 1 canonical + redirects), CSV/PDF
  export, and HowTo/WebApplication schema. An Article-schema date bug (dates
  emitted as JS `Date.toString()` instead of ISO 8601, breaking Google's rich
  results) was found and fixed sitewide.

## Where to look for more context
GA4 property ID: 527370798. Vercel project name: "calc". Memory file
`reference_affiliate_site_portfolio.md` has the cross-site portfolio picture.

---

# Calc - Dividend Calculator Affiliate Site
**Status:** 90% Complete - Ready for Revenue Optimization
**Stack:** Next.js 15 + TypeScript + Tailwind + shadcn/ui + Framer Motion
**Goal:** $5,000-10,000/month via broker affiliate links

## Current State (Feb 2026)
### ✅ COMPLETE & WORKING
1. **5 Professional Calculators** - DRIP, retirement income, dividend growth, yield-on-cost, coffee millionaire
2. **InlineBrokerCTA Component** - 3 variants (default, compact, featured) already integrated in DripCalculator
3. **Viral Sharing System** - URL parameters, social sharing, pre-fill functionality
4. **Email Capture** - Multi-provider support (ConvertKit, SendGrid, Resend, Mailchimp) - needs API key
5. **Broker Affiliates** - 5 current + 15 expanded partners ready in broker-affiliates-expanded.ts
6. **SEO Optimization** - FAQ schema, metadata, structured data
7. **Analytics Tracking** - Google Analytics, conversion tracking, affiliate attribution
8. **Premium UI** - Framer Motion animations, responsive, dark mode

### ⚡ QUICK WINS (High ROI, Low Effort)
1. **Switch to Expanded Broker List** (30 min)
   - Import BROKER_AFFILIATES_EXPANDED instead of BROKER_AFFILIATES
   - File: `components/affiliate/BrokerComparisonTable.tsx`
   - Impact: 15 partners vs 5 = better match rate = higher conversion

2. **Add Email API Key** (5 min)
   - Get ConvertKit API key
   - Add to `.env.local`: `EMAIL_API_KEY=xxx`
   - Start capturing leads immediately

3. **Verify All Calculator CTAs** (1 hour)
   - DripCalculator: ✅ Has InlineBrokerCTA (line 549)
   - Check other 4 calculators have it too
   - Add if missing

4. **Create Calculator Landing Pages** (4-6 hours)
   - Separate pages for each calculator for SEO
   - Target specific keywords (high search volume)

### 🏗️ ARCHITECTURE
```
app/
  calculators/
    drip/ - ✓ DRIP calculator page
    drip-calculator/ - ✓ Alternate route
    dividend-growth/
    retirement-income/
    yield-on-cost/
components/
  calculators/
    DripCalculator.tsx - ✓ Has InlineBrokerCTA integrated
  affiliate/
    InlineBrokerCTA.tsx - ✓ 3 variants ready
    BrokerComparisonTable.tsx - Uses BROKER_AFFILIATES
lib/
  data/
    broker-affiliates.ts - DELETED 2026-09-06 (stale 5-broker predecessor, unused)
    broker-affiliates-expanded.ts - Current, actually imported (15+ brokers)
```

### 📊 REVENUE OPTIMIZATION PATH
**Phase 1: Immediate (Today)**
- Build verification
- Switch to expanded brokers
- Add email key
- Deploy

**Phase 2: SEO (Week 1)**
- Calculator landing pages
- Educational blog posts
- Internal linking

**Phase 3: A/B Testing (Week 2)**
- CTA copy variants
- Broker ordering tests
- Conversion tracking

### 🚀 DEPLOYMENT
```bash
# Local testing
npm run dev

# Build verification
npm run build

# Deploy to Vercel
npm run deploy
# OR
vercel --prod
```

### 📝 KNOWN ISSUES
- **npm install slow on WSL2** - /mnt/e mount is slow (15-20 min vs 2-3 min on native Linux fs)
- **Need real affiliate tracking IDs** - Current links are placeholders
- **No automated tests** - Risky for financial calculations (add later)
- **Email service not configured** - Code ready, needs API key

### 💰 REVENUE TRACKING
Monitor these metrics:
- Calculator uses per day
- Email capture rate (target: 3-5%)
- Broker CTA clicks (target: 6-8% with inline CTAs)
- Affiliate signups (target: 10-15% of clicks)
- Revenue per visit (target: $0.50-1.00)

### 🔄 COMMUNICATION
- Update `/mnt/e/projects/.agent-bus/status/calc.md` each cycle
- Share affiliate optimization learnings to `.agent-bus/advice/`
- Cross-pollinate with credit, back, affiliate agents

### 🎯 NEXT SESSION PRIORITIES
1. Complete npm install (in progress)
2. Run build verification
3. Switch to expanded broker data
4. Test all calculators work
5. Deploy to production
6. Monitor first conversions
