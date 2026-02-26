# Calc - Dividend Calculator Hub Deployment Guide

## Quick Start
```bash
# 1. Build locally
npm run build

# 2. Deploy to Vercel
npm run deploy
# OR
vercel --prod
```

## Environment Variables (Vercel)

Add these to Vercel project settings (Settings > Environment Variables):

### Critical (Must Have)
```
NEXT_PUBLIC_APP_URL=https://calc.yourdomain.com
NEXT_PUBLIC_APP_NAME=Dividend Calculator Hub
```

### Optional but Recommended
```
# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX

# Email Service
EMAIL_API_KEY=your-convertkit-key
EMAIL_FROM=noreply@yourdomain.com

# Feature Flags
NEXT_PUBLIC_ENABLE_EMAIL_CAPTURE=true
NEXT_PUBLIC_ENABLE_ANALYTICS=true
```

## Deployment Steps

### Option 1: Vercel CLI (Easiest)
```bash
# Install Vercel CLI if needed
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# View logs
vercel logs
```

### Option 2: GitHub Auto-Deploy
1. Push to GitHub repository
2. Connect repo to Vercel dashboard
3. Auto-deploy on push to main branch

### Option 3: Vercel Dashboard
1. Go to vercel.com
2. Import new project
3. Select repository
4. Add environment variables
5. Deploy

## Post-Deployment Verification

### 1. Test Site Loads
- [ ] Homepage loads without 404
- [ ] All pages accessible
- [ ] Mobile responsive

### 2. Test Calculators
- [ ] DRIP Calculator works
- [ ] Dividend Growth Calculator works
- [ ] Retirement Income Calculator works
- [ ] Yield-on-Cost Calculator works
- [ ] All other calculators responsive

### 3. Test Features
- [ ] Affiliate links clickable (broker CTAs)
- [ ] Email signup appears and submits
- [ ] Analytics tracking fires
- [ ] No console errors

### 4. Monitor Traffic
- [ ] Check Vercel Analytics dashboard
- [ ] Monitor Google Analytics (if connected)
- [ ] Check for 5xx errors

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
npm run build

# Check for TypeScript errors
npm run type-check

# Check linting issues
npm run lint
```

### 404 Errors
- Verify all routes are in `app/` directory
- Check middleware.ts for routing issues
- Verify `next.config.js` settings

### Performance Issues
- Check Vercel Analytics
- Look for unoptimized images
- Review bundle size with `npm run analyze`

### Environment Variables Not Working
- Verify vars are set in Vercel dashboard
- Check format (NEXT_PUBLIC_ prefix for client vars)
- Redeploy after changing vars

## Monitoring & Maintenance

### Daily
- Check Vercel dashboard for errors
- Monitor site uptime
- Check analytics for anomalies

### Weekly
- Review conversion metrics
- Check affiliate click-through rates
- Monitor email signup rates

### Monthly
- Analyze calculator usage patterns
- Review broker affiliate performance
- Plan content expansion

## Revenue Optimization

### Current Setup
- 15+ broker affiliates integrated
- Email capture system active
- Calculator CTAs embedded
- Analytics tracking ready

### Next Steps
1. Generate content from batch topics (50 articles planned)
2. Implement internal linking strategy
3. Set up email sequences for leads
4. Run A/B tests on CTA copy
5. Expand broker partnerships

## Key Metrics to Track
- **Daily Active Users**: Target 100+ in week 1
- **Calculator Uses**: Target 5-10 per user session
- **Email Signups**: Target 3-5% conversion
- **Broker CTAs**: Target 6-8% click rate
- **Affiliate Revenue**: Target $500-1000 in month 1

## Support & Resources
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- Project Issues: Check GitHub issues or CLAUDE.md
