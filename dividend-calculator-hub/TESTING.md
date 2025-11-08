# Testing and Deployment Guide

Complete guide for testing and deploying the Dividend Calculator Hub website.

## Quick Start Testing

### 1. Environment Setup
```bash
# Copy environment configuration
cp .env.local.example .env.local

# Install dependencies
npm install

# Start development server
npm run dev
```

### 2. Basic Functionality Test
```bash
# Navigate to http://localhost:3000
# Test DRIP calculator with JNJ stock
# Verify results appear correctly
```

### 3. Run Automated Tests
```bash
# Run test suite (when implemented)
npm run test

# Type checking
npm run type-check

# Linting
npm run lint
```

---

## Detailed Testing Procedures

### Core Calculator Tests

#### DRIP Calculator Validation
1. **Basic Input Test**
   - Symbol: JNJ
   - Initial: $10,000
   - Monthly: $500
   - Years: 20
   - Expected: ~$400k-500k total value

2. **Edge Cases**
   - Zero initial investment
   - Very high growth rates
   - Invalid ticker symbols
   - Negative inputs

3. **Responsive Design**
   - Mobile (375px)
   - Tablet (768px)
   - Desktop (1200px+)

#### Expected Results
- ✅ Calculations complete in <3 seconds
- ✅ Results are mathematically accurate
- ✅ Form validation works correctly
- ✅ Responsive across all viewports

### Stock Profile Tests

#### Test URLs
- http://localhost:3000/stocks/jnj
- http://localhost:3000/stocks/ko
- http://localhost:3000/stocks/pg

#### Validation Checklist
- [ ] Page loads without errors
- [ ] Stock data displays correctly
- [ ] Charts render properly
- [ ] Related stocks appear
- [ ] Breadcrumb navigation works
- [ ] "Calculate DRIP" button pre-fills ticker

### SEO Component Tests

#### Meta Tags Validation
```bash
# Check page source for:
# <title>Unique page title</title>
# <meta name="description" content="...">
# <meta property="og:title" content="...">
# <meta property="og:description" content="...">
```

#### Structured Data Testing
1. Visit: https://search.google.com/test/rich-results
2. Enter your localhost URLs
3. Verify schema validation passes

#### Sitemap Validation
- Check: http://localhost:3000/sitemap.xml
- Verify all important pages listed
- Confirm URLs are absolute

### Performance Testing

#### Lighthouse Audit
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit on key pages
4. Target scores:
   - Performance: >85
   - Accessibility: >95
   - Best Practices: >90
   - SEO: >95

#### Core Web Vitals
- LCP (Largest Contentful Paint): <2.5s
- FID (First Input Delay): <100ms
- CLS (Cumulative Layout Shift): <0.1

### Content System Tests

#### Blog System
- Visit: http://localhost:3000/blog
- Verify sample posts display
- Test individual post pages
- Check related posts section

#### Learning Center
- Visit: http://localhost:3000/learn
- Test navigation through courses
- Verify content formatting

---

## Deployment Testing

### Pre-Deployment Checklist

#### Code Quality
- [ ] All TypeScript errors resolved
- [ ] ESLint passes without errors
- [ ] No console.error() in production code
- [ ] Environment variables configured

#### Functionality
- [ ] Core calculators work correctly
- [ ] All sample data loads properly
- [ ] Navigation functions across site
- [ ] Forms submit without errors

#### SEO & Performance
- [ ] Meta tags present on all pages
- [ ] Structured data validates
- [ ] Sitemap generates correctly
- [ ] Images optimized for web
- [ ] No accessibility violations

### Vercel Deployment

#### Setup
1. **Connect to Vercel**
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel
```

2. **Environment Variables**
Set these in Vercel dashboard:
```
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
MOCK_API_RESPONSES=true
FMP_API_KEY=your_api_key
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
```

3. **Custom Domain (Optional)**
```bash
# Add custom domain
vercel domains add dividendcalculatorhub.com
```

#### Post-Deployment Validation
```bash
# Validate deployment with our script
node tests/scripts/validate-deployment.js https://your-app.vercel.app
```

### Alternative Deployment Platforms

#### Netlify
```bash
# Build command
npm run build

# Deploy directory
.next

# Environment variables
NEXT_PUBLIC_APP_URL=https://your-app.netlify.app
```

#### AWS Amplify
```bash
# Build settings
build:
  commands:
    - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
```

---

## Testing Tools & Resources

### SEO Testing Tools
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### Performance Tools
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

### Accessibility Tools
- [aXe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Web Accessibility Evaluator](https://wave.webaim.org/)
- [Accessibility Insights](https://accessibilityinsights.io/)

### Cross-Browser Testing
- [BrowserStack](https://www.browserstack.com/)
- [LambdaTest](https://www.lambdatest.com/)
- Manual testing on Chrome, Firefox, Safari, Edge

---

## Monitoring & Maintenance

### Analytics Setup
1. **Google Analytics 4**
   - Add GA_MEASUREMENT_ID to environment
   - Verify tracking in GA Real-Time reports
   - Set up conversion goals

2. **Search Console**
   - Add property for your domain
   - Submit sitemap
   - Monitor crawl errors

3. **Performance Monitoring**
   - Vercel Analytics (automatic)
   - Core Web Vitals tracking
   - Error logging with Sentry (optional)

### Regular Maintenance
- Weekly: Check site functionality
- Monthly: Review analytics and performance
- Quarterly: Update dependencies and content
- Annually: Comprehensive security audit

---

## Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Type check
npm run type-check
```

#### Performance Issues
```bash
# Analyze bundle size
npm run build
npm run analyze

# Check for large dependencies
npm ls --depth=0
```

#### SEO Problems
- Verify meta tags in page source
- Check robots.txt accessibility
- Test sitemap URL structure
- Validate structured data syntax

### Support Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Web.dev Performance Guide](https://web.dev/performance/)
- [Google SEO Guide](https://developers.google.com/search/docs)

---

## Success Metrics

### Technical Benchmarks
- ✅ Build completes without errors
- ✅ All pages load in <3 seconds
- ✅ Lighthouse scores >90 average
- ✅ Zero accessibility violations
- ✅ 100% uptime in monitoring

### Functional Requirements
- ✅ Calculators produce accurate results
- ✅ All content displays correctly
- ✅ Navigation works across devices
- ✅ Forms submit successfully
- ✅ Search engines can crawl site

### User Experience Goals
- ✅ Intuitive interface design
- ✅ Fast, responsive interactions
- ✅ Clear error messaging
- ✅ Accessible to all users
- ✅ Mobile-optimized experience

For detailed test procedures, see [tests/setup/test-procedures.md](tests/setup/test-procedures.md).