# CALC - Post-Build Deployment Checklist

## Phase 1: Verify Build Success ✓ [PENDING]
- [ ] Build completes without errors
- [ ] No TypeScript errors
- [ ] .next/production directory created
- [ ] Build manifest generated
- [ ] Static assets optimized

**Next command after build:**
```bash
if [ -d ".next/production" ]; then
  echo "✓ Build successful!"
  npm run deploy  # or vercel --prod
else
  echo "✗ Build failed - check errors above"
fi
```

## Phase 2: Vercel Deployment [PENDING]
- [ ] Create/link GitHub account to Vercel (if needed)
- [ ] Push code to GitHub (if using git)
- [ ] Deploy: `npm run deploy` OR `vercel --prod`
- [ ] Verify deployment at https://calc-XXXXXX.vercel.app
- [ ] Check Vercel dashboard shows "Production" status
- [ ] Review deployment logs for errors

**Expected URL:** 
- Preview: calc-[random].vercel.app
- Production: calc.yourdomain.com (after CNAME setup)

**Quick test URLs after deployment:**
1. https://[deployed-url]/ (homepage)
2. https://[deployed-url]/calculators/drip (calculator)
3. https://[deployed-url]/blog (blog listing)
4. https://[deployed-url]/blog/best-dividend-stocks-2026 (article)

## Phase 3: Environment Variables Setup [PENDING]
In Vercel Dashboard → Settings → Environment Variables:

### Required
- [ ] NEXT_PUBLIC_APP_NAME = "Dividend Calculator Hub"
- [ ] NEXT_PUBLIC_APP_URL = "https://calc.yourdomain.com" (UPDATE WITH REAL DOMAIN)

### Analytics (Optional but recommended)
- [ ] NEXT_PUBLIC_GA_MEASUREMENT_ID = "G-XXXXXXXXXX"
- [ ] NEXT_PUBLIC_GOOGLE_ADS_ID = "AW-XXXXXXXXXX"

### Email Service (Required for email capture)
- [ ] EMAIL_API_KEY = "your-convertkit-api-key" (GET FROM CONVERTKIT)
- [ ] EMAIL_FROM = "noreply@calc.yourdomain.com"

### Optional
- [ ] NEXT_PUBLIC_ENABLE_EMAIL_CAPTURE = "true"
- [ ] NEXT_PUBLIC_ENABLE_ANALYTICS = "true"

## Phase 4: Quick Functionality Test [PENDING]
Test these on the deployed site:

### Homepage
- [ ] Loads without 404
- [ ] Mobile responsive
- [ ] Calculator tabs work
- [ ] Broker comparison table renders
- [ ] Dark mode toggle works
- [ ] Animations smooth

### Calculators
- [ ] DRIP calculator: Enter values → results update
- [ ] Dividend Growth calculator works
- [ ] Retirement Income calculator computes
- [ ] All calculators show InlineBrokerCTA

### Blog
- [ ] Blog listing page loads
- [ ] All 79 articles appear
- [ ] Blog post example loads (no 404)
- [ ] Article schema visible in page source
- [ ] Blog CTA sections visible

### Affiliate Links
- [ ] Broker CTA buttons clickable
- [ ] Links point to correct brokers (check URLs)
- [ ] No JavaScript errors in console
- [ ] Email signup form appears after 30 sec on homepage

## Phase 5: Email Service Setup [PENDING]
Choose one email provider:

### Option A: ConvertKit (RECOMMENDED for affiliates)
1. Go to https://convertkit.com
2. Sign up for free account
3. Get API key: Settings → API Keys → API Secret
4. Add to Vercel: EMAIL_API_KEY=[your-key]
5. Test: Fill email form on production site
6. Verify email appears in ConvertKit dashboard

### Option B: SendGrid
1. Go to https://sendgrid.com
2. Create free account
3. Get API key from Settings → API Keys
4. Add to Vercel: EMAIL_API_KEY=[your-key]
5. Test same as ConvertKit

### Option C: Resend (Next.js optimized)
1. Go to https://resend.com
2. Create account
3. Get API key from dashboard
4. Add to Vercel: EMAIL_API_KEY=[your-key]

**Test Email Capture:**
```bash
1. Visit production site
2. Wait 30 seconds (popup trigger)
3. OR scroll to see email widget
4. Enter test email
5. Submit
6. Check email provider dashboard for capture
```

## Phase 6: Google Search Console [PENDING]
1. Go to https://search.google.com/search-console
2. Click "Start now"
3. Add property: "https://calc.yourdomain.com"
4. Verify ownership (choose method):
   - [ ] HTML file (download, add to public/, redeploy)
   - [ ] DNS record (add TXT record to domain)
   - [ ] Google Analytics (if connected)
5. Submit sitemap: /sitemap.xml
6. Monitor "Coverage" for indexing status

## Phase 7: Google Analytics 4 [PENDING]
1. Go to https://analytics.google.com
2. Create new property
3. Set up data stream: Web
4. Add domain: calc.yourdomain.com
5. Get Measurement ID (format: G-XXXXXXXXXX)
6. Add to Vercel: NEXT_PUBLIC_GA_MEASUREMENT_ID=[your-id]
7. Redeploy
8. Check Real-Time dashboard:
   - [ ] Homepage visit appears within 30 sec
   - [ ] Page views counter increases
   - [ ] Calculator usage tracked

## Phase 8: Affiliate Program Signup [PENDING]
Sign up for affiliate programs to replace placeholder links:

### Tier 1 (Priority - highest CPA)
- [ ] M1 Finance (~$150 CPA)
- [ ] Charles Schwab (~$100-200)
- [ ] TD Ameritrade (~$100-150)

### Tier 2 (Solid commissions)
- [ ] Fidelity (~$50-100)
- [ ] Vanguard (~$30-50)
- [ ] SoFi Invest (~$50-100)

### Tier 3 (Additional coverage)
- [ ] Webull
- [ ] Robinhood
- [ ] Interactive Brokers
- [ ] E*TRADE

**For each program:**
1. Sign up at affiliate network
2. Search for broker program
3. Apply for partnership
4. Wait for approval (1-7 days)
5. Get tracking ID/affiliate URL
6. Update BROKER_AFFILIATES_EXPANDED with:
   - `affiliateLink.url` (tracking URL)
   - `affiliateLink.trackingId` (ID for reference)
7. Test link on production
8. Monitor affiliate dashboard for clicks

## Phase 9: Domain Setup [PENDING]
If using custom domain:
1. [ ] Get domain from registrar (GoDaddy, Namecheap, etc.)
2. [ ] Create Vercel project domain
3. [ ] Add CNAME record:
   - Subdomain: "calc" (or "www")
   - Points to: cname.vercel.sh
4. [ ] Wait for DNS propagation (5-48 hours)
5. [ ] Test: https://calc.yourdomain.com loads
6. [ ] Update NEXT_PUBLIC_APP_URL in Vercel env vars

## Success Criteria ✅
- [ ] Site loads at production URL
- [ ] All pages accessible (no 404s)
- [ ] Calculators functional and performant
- [ ] Email capture working
- [ ] Analytics tracking page views
- [ ] Affiliate links clickable
- [ ] Google Search Console showing coverage
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Dark mode working

## Timeline
- Build: 25-30 min (currently running)
- Deploy: 10-15 min
- Config: 30-45 min
- Email Setup: 15-30 min
- GSC: 15-20 min
- GA4: 15-20 min
- Affiliate Signup: 1-2 hours (ongoing)

**Total time to production: 2-3 hours (first 4 phases)**
**Full monetization setup: 3-4 hours**

---
**Last Updated:** Feb 27, 2026
**Status:** Ready to deploy after build completes
