# Calc Deployment Checklist - Feb 26, 2026

## Pre-Deployment (In Progress)
- [ ] npm build passes without errors (running...)
- [ ] Type checks pass
- [ ] All 9 calculators load correctly
- [ ] Affiliate CTAs visible and clickable
- [ ] Email capture system ready

## Deployment (Next)
- [ ] Create vercel.json if needed
- [ ] Configure environment variables on Vercel
- [ ] Deploy to production
- [ ] Verify site loads
- [ ] Test affiliate links work
- [ ] Monitor analytics

## Environment Variables Needed
The .env.example file shows these are configured:
- EMAIL_API_KEY (for email capture - ConvertKit)
- GOOGLE_ANALYTICS_ID
- POSTHOG_API_KEY
- Affiliate tracking IDs (broker links)

## Success Criteria
- Site loads without 404 errors
- All calculators responsive
- Affiliate links are clickable
- Email signup captures leads
- Analytics tracking works

## Post-Deployment Monitoring
1. Check Vercel dashboard for deployment status
2. Monitor real user sessions
3. Track first 24h metrics:
   - Page views
   - Calculator uses
   - Email signups
   - Affiliate clicks
4. Fix any issues found in production

