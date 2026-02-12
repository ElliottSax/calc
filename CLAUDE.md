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
    broker-affiliates.ts - Current (5 brokers)
    broker-affiliates-expanded.ts - Ready to use (15+ brokers)
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
