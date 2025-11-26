# 🚀 Production Deployment Checklist

Quick reference checklist for deploying to production.

## ✅ Before Deployment

### Code Quality
- [ ] All TypeScript errors fixed (`npm run type-check`)
- [ ] No lint errors (`npm run lint`)
- [ ] Build succeeds locally (`npm run build`)
- [ ] All tests pass (if applicable)
- [ ] Code reviewed and approved

### Configuration
- [ ] `.env.example` is up to date
- [ ] All required environment variables documented
- [ ] No sensitive data in codebase
- [ ] `.gitignore` excludes all env files and secrets

### Content & Assets
- [ ] All images optimized (< 200KB each)
- [ ] Favicon and app icons created
- [ ] OG image created (1200x630)
- [ ] site.webmanifest configured
- [ ] All placeholder text replaced with real content

### SEO
- [ ] Meta titles and descriptions set
- [ ] Open Graph tags configured
- [ ] Twitter Card tags configured
- [ ] Structured data (JSON-LD) added
- [ ] Canonical URLs set
- [ ] robots.txt reviewed
- [ ] Sitemap generated

### Security
- [ ] Security headers configured in next.config.js
- [ ] CSP configured in middleware.ts
- [ ] HTTPS enforced
- [ ] No API keys in client-side code
- [ ] Rate limiting configured for APIs
- [ ] Authentication tested (if applicable)

### Performance
- [ ] Code splitting implemented
- [ ] Images use Next.js Image component
- [ ] Lazy loading for heavy components
- [ ] Bundle size analyzed
- [ ] Lighthouse score > 90

### Monitoring
- [ ] Error tracking configured (Sentry/similar)
- [ ] Analytics installed (GA4/similar)
- [ ] Web Vitals monitoring active
- [ ] Logging configured
- [ ] Alerts set up

## ✅ Deployment

### Environment Setup
- [ ] Production environment variables added to Vercel
- [ ] Database connection string verified
- [ ] API keys added and tested
- [ ] Feature flags configured

### Vercel Configuration
- [ ] Project linked to Git repository
- [ ] Build settings configured
- [ ] Domain configured
- [ ] SSL certificate auto-renewed
- [ ] Environment variables set for production

### Database
- [ ] Migrations run
- [ ] Seed data added (if needed)
- [ ] Backups enabled
- [ ] RLS policies configured (Supabase)

### External Services
- [ ] Email service configured and tested
- [ ] Payment processing tested (if applicable)
- [ ] API services tested
- [ ] CDN configured (if using)

## ✅ After Deployment

### Verification
- [ ] Site loads at production URL
- [ ] SSL certificate active (🔒 in browser)
- [ ] All pages accessible
- [ ] Calculator functions work
- [ ] Forms submit correctly
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Works on major browsers (Chrome, Firefox, Safari, Edge)

### Testing
- [ ] Test with slow 3G connection
- [ ] Test with JavaScript disabled (graceful degradation)
- [ ] Test with ad blocker enabled
- [ ] Cross-browser testing
- [ ] Accessibility testing (WCAG compliance)

### SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify site ownership
- [ ] Request indexing for main pages
- [ ] Set up Google Analytics property

### Performance
- [ ] Run PageSpeed Insights
- [ ] Run WebPageTest
- [ ] Check Core Web Vitals
- [ ] Verify caching headers
- [ ] Test CDN (if using)

### Security
- [ ] Run securityheaders.com scan
- [ ] Verify CSP working correctly
- [ ] Test rate limiting
- [ ] Review CORS settings
- [ ] Check for exposed secrets

### Monitoring
- [ ] Verify error tracking receiving events
- [ ] Verify analytics tracking pageviews
- [ ] Test error reporting
- [ ] Set up uptime monitoring
- [ ] Configure alert thresholds

## ✅ Post-Launch

### First 24 Hours
- [ ] Monitor error rates
- [ ] Check server response times
- [ ] Monitor traffic patterns
- [ ] Review user feedback
- [ ] Check for any critical issues

### First Week
- [ ] Review analytics data
- [ ] Check SEO indexing progress
- [ ] Monitor Core Web Vitals
- [ ] Review error logs
- [ ] Optimize based on real user data

### Ongoing
- [ ] Weekly dependency updates
- [ ] Monthly security audit
- [ ] Quarterly content review
- [ ] Regular performance optimization
- [ ] User feedback incorporation

## 🆘 Emergency Rollback

If critical issues arise:

```bash
# Vercel rollback to previous deployment
vercel rollback

# Or redeploy specific commit
git checkout <previous-commit-hash>
vercel --prod
```

## 📊 Success Metrics

Track these KPIs:
- **Performance**: Lighthouse score > 90
- **Uptime**: > 99.9%
- **Error Rate**: < 0.1%
- **Load Time**: < 2s
- **SEO**: Ranking for target keywords
- **Conversions**: Email signups, tool usage

## 📝 Notes

Add deployment-specific notes here:
- Deployment date: __________
- Deployed by: __________
- Version: __________
- Issues encountered: __________
- Resolutions: __________

---

**Last Updated**: [Date]
**Next Review**: [Date]
