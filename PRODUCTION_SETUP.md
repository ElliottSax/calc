# Production Setup Guide

This guide covers all the steps needed to deploy the Dividend Calculator Hub to production.

## 📋 Pre-Deployment Checklist

### 1. Environment Variables

Copy `.env.example` to create your production environment variables:

```bash
# In your Vercel dashboard or hosting provider:
```

**Required Variables:**
- `NEXT_PUBLIC_APP_URL` - Your production domain
- `NEXT_PUBLIC_APP_NAME` - App name
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key (keep secret!)

**Optional but Recommended:**
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics tracking ID
- `SENTRY_DSN` - Sentry error tracking DSN
- `FINANCIAL_MODELING_PREP_API_KEY` - For stock data
- `EMAIL_API_KEY` - Email service API key

### 2. Security Configuration

#### Update CSP in `middleware.ts`
Review and update the Content Security Policy based on your actual third-party services:

```typescript
// Add your analytics, ad networks, and API domains
connect-src 'self' https://your-analytics.com https://your-api.com;
```

#### Verification Codes
Update in `app/layout.tsx`:
```typescript
verification: {
  google: 'your-actual-google-verification-code',
}
```

### 3. SEO & Branding

#### Update Metadata
In `app/layout.tsx`, update:
- Site URL and name
- Open Graph images
- Twitter handle
- Structured data ratings

#### Create Required Images
Place in `/public`:
- `favicon.ico` (16x16, 32x32)
- `favicon-16x16.png`
- `apple-touch-icon.png` (180x180)
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`
- `og-image.jpg` (1200x630) - For social sharing

### 4. Performance Optimization

#### Test Build Locally
```bash
npm run build
npm start
```

#### Analyze Bundle Size
```bash
npm run analyze
```

Check for:
- Large dependencies that could be lazy-loaded
- Unused code that can be tree-shaken
- Images that need optimization

### 5. Testing

#### TypeScript Check
```bash
npm run type-check
```

#### Linting
```bash
npm run lint
```

#### Manual Testing
- [ ] Test all calculator functions
- [ ] Test on mobile devices
- [ ] Test with slow 3G network
- [ ] Test all forms and submissions
- [ ] Test error states
- [ ] Test with ad blockers enabled

### 6. Monitoring Setup

#### Error Tracking
If using Sentry:
1. Create a Sentry project
2. Add `SENTRY_DSN` to environment variables
3. Install Sentry SDK if not already:
   ```bash
   npm install @sentry/nextjs
   npx @sentry/wizard -i nextjs
   ```

#### Analytics
If using Google Analytics:
1. Create GA4 property
2. Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` to env
3. Add Google Analytics script or use @next/third-parties

### 7. Database & Backend

#### Supabase Setup
1. Create Supabase project
2. Run migrations (if any)
3. Set up Row Level Security policies
4. Configure authentication providers
5. Set up database backups

### 8. External Services

#### Email Service
Configure your email provider:
- SendGrid
- Resend
- AWS SES
- Mailgun

Add API keys to environment variables.

#### Payment Processing (if applicable)
- Stripe
- PayPal
- Add webhook handlers
- Test in sandbox mode first

## 🚀 Deployment Steps

### Option 1: Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Link Project**
   ```bash
   vercel link
   ```

3. **Add Environment Variables**
   ```bash
   # Add variables one by one
   vercel env add NEXT_PUBLIC_APP_URL

   # Or pull from Vercel dashboard
   vercel env pull
   ```

4. **Deploy to Preview**
   ```bash
   vercel
   ```

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy to Other Platforms

#### Netlify
```bash
npm run build
# Deploy the .next folder
```

#### AWS Amplify
- Connect your Git repository
- Set build command: `npm run build`
- Set publish directory: `.next`

#### Docker
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
RUN npm ci --production
EXPOSE 3000
CMD ["npm", "start"]
```

## 📊 Post-Deployment

### 1. Verify Deployment

- [ ] Visit your production URL
- [ ] Check all pages load correctly
- [ ] Verify SSL certificate is active
- [ ] Test calculator functionality
- [ ] Check console for errors
- [ ] Verify analytics is tracking
- [ ] Test error reporting

### 2. Performance Testing

Use these tools:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)

Target scores:
- Lighthouse Performance: 90+
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

### 3. SEO Verification

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify robots.txt is accessible
- [ ] Check Open Graph tags with [OpenGraph.xyz](https://www.opengraph.xyz/)
- [ ] Verify structured data with [Schema.org validator](https://validator.schema.org/)

### 4. Security Audit

- [ ] Run security headers check: [securityheaders.com](https://securityheaders.com/)
- [ ] Verify HTTPS is enforced
- [ ] Check CSP is working correctly
- [ ] Test rate limiting on API endpoints
- [ ] Review Supabase RLS policies

### 5. Monitoring

Set up alerts for:
- Error rate > 1%
- Response time > 1s
- Uptime < 99.9%
- Failed database connections
- API rate limit hits

### 6. Backup Strategy

- [ ] Database backups (daily)
- [ ] Environment variables backed up securely
- [ ] Git repository has all latest code
- [ ] Document any manual configurations

## 🔧 Maintenance

### Regular Tasks

**Daily:**
- Monitor error logs
- Check analytics for anomalies
- Review user feedback

**Weekly:**
- Review performance metrics
- Check for dependency updates
- Review and respond to user issues

**Monthly:**
- Update dependencies
- Review and update content
- Analyze traffic patterns
- Review and optimize costs

### Emergency Procedures

**If site goes down:**
1. Check Vercel/hosting status page
2. Check error logs
3. Verify environment variables
4. Check database connectivity
5. Roll back to previous deployment if needed

**If errors spike:**
1. Check error monitoring dashboard
2. Identify affected components
3. Deploy hotfix if critical
4. Notify users if necessary

## 📝 Important URLs

- Production: `https://yourdomain.com`
- Vercel Dashboard: `https://vercel.com/dashboard`
- Supabase Dashboard: `https://supabase.com/dashboard`
- Google Analytics: `https://analytics.google.com`
- Google Search Console: `https://search.google.com/search-console`
- Error Tracking: Your Sentry/error service URL

## 🆘 Support

- GitHub Issues: [Your repo issues URL]
- Documentation: [Your docs URL]
- Email: support@yourdomain.com

## 📚 Additional Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Web Vitals](https://web.dev/vitals/)
- [Security Best Practices](https://nextjs.org/docs/advanced-features/security-headers)
