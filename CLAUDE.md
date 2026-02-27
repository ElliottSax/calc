# Calc - Dividend Calculator Affiliate Site
**Status:** 95% Complete - Ready for Deployment
**Stack:** Next.js 15 + TypeScript + Tailwind + shadcn/ui + Framer Motion
**Goal:** $5,000-10,000/month via broker affiliate links

## Current State (Feb 2026)
### COMPLETE & WORKING
1. **10 Calculators** - DRIP, dividend growth, retirement income, yield-on-cost, 401(k), IRA, compound interest, investment return, savings, multi-calculator
2. **All 10 calculators have InlineBrokerCTA** integrated (verified)
3. **17 Broker Affiliates** - Using BROKER_AFFILIATES_EXPANDED (already switched)
4. **79 Blog Articles** - Covering stock picks, strategies, comparisons, beginner guides, tax guides
5. **Blog Listing Page** - Properly links to all 79 articles organized by category
6. **Email Capture** - Multi-provider support (ConvertKit, SendGrid, Resend, Mailchimp) - needs API key
7. **SEO** - Schema markup, metadata, structured data on all pages
8. **Analytics** - Google Analytics, PostHog, conversion tracking ready
9. **Premium UI** - Framer Motion animations, responsive, dark mode

### Architecture
```
app/
  calculators/ - 11 routes (drip, dividend-growth, retirement-income, yield-on-cost, 401k, ira, compound-interest, investment-return, savings)
  blog/ - 79 article pages + dynamic [slug] route + listing page
  brokers/ - 6 broker pages + dynamic [slug]
  stocks/ - Stock directory + [symbol] pages
  api/ - 15+ API endpoints
components/
  calculators/ - 10 calculator components (all with InlineBrokerCTA)
  affiliate/ - InlineBrokerCTA (3 variants), BrokerComparisonTable (uses expanded 17-broker list)
  email/ - InlineSignup component
lib/
  data/
    broker-affiliates-expanded.ts - 17 brokers IN USE
docs/ - 78 documentation files (moved from root for cleanliness)
```

### Known Issues
- **Build: "use client" + metadata conflict** - Fixed in dividend-aristocrats-complete-list-2026 (moved metadata to layout.tsx)
- **npm/build slow on WSL2** - /mnt/e mount: builds take 20-30 min vs 2-3 min on native Linux
- **Need real affiliate tracking IDs** - Current links are placeholders
- **Email service not configured** - Code ready, needs API key

### Deployment
```bash
npm run build         # Verify build (slow on WSL2)
npm run deploy        # Deploy to Vercel (validate + vercel --prod)
vercel --prod         # Direct deploy
```

### Next Steps
1. Wait for build to complete, fix any remaining errors
2. Deploy to Vercel production
3. Set up ConvertKit API key for email capture
4. Add real affiliate tracking IDs
5. Submit sitemap to Google Search Console
6. Set up Google Analytics 4
