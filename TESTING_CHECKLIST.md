# Blog URL Migration - Testing Checklist

## Pre-Deployment Testing (Local)

### Environment Setup
- [ ] Node.js 18+ installed (`node --version`)
- [ ] npm/yarn installed
- [ ] All dependencies installed (`npm install`)
- [ ] No uncommitted changes in git (`git status`)
- [ ] `.env.local` configured correctly

### File Integrity Tests

#### Created Files
- [ ] `/c/projects/calc/lib/blog/slug-mapping.ts` exists
- [ ] `/c/projects/calc/app/blog/[id]/route.ts` exists
- [ ] `/c/projects/calc/lib/blog/blog-sitemap.ts` exists

#### Modified Files
- [ ] `/c/projects/calc/app/blog/page.tsx` updated
- [ ] `/c/projects/calc/app/sitemap.ts` updated
- [ ] `/c/projects/calc/next.config.js` updated

#### Documentation Files
- [ ] `/c/projects/calc/BLOG_URL_MIGRATION.md` created
- [ ] `/c/projects/calc/SEO_PRESERVATION_STRATEGY.md` created
- [ ] `/c/projects/calc/TESTING_CHECKLIST.md` created

### Code Quality Tests

```bash
# Run TypeScript compiler
npx tsc --noEmit

# Expected output: No errors
```

- [ ] TypeScript compilation passes
- [ ] No `any` types used inappropriately
- [ ] All imports resolve correctly

### Build Tests

```bash
# Test build process
npm run build

# Expected: Build completes successfully
```

- [ ] Build completes without errors
- [ ] No warnings in build output
- [ ] `.next` directory created
- [ ] Static assets generated

### Redirect Handler Tests

#### Test Redirect Responses
```bash
# Start dev server
npm run dev

# In another terminal:

# Test ID 1 (valid)
curl -i http://localhost:3000/blog/1
# Expected: HTTP 301
# Expected Location: /blog/dividend-growth-strategy

# Test ID 2 (valid)
curl -i http://localhost:3000/blog/2
# Expected: HTTP 301
# Expected Location: /blog/drip-investing-complete-guide

# Test ID 999 (invalid)
curl -i http://localhost:3000/blog/999
# Expected: HTTP 404

# Test non-numeric ID
curl -i http://localhost:3000/blog/abc
# Expected: HTTP 400 (bad request)
```

- [ ] Valid IDs return 301
- [ ] Invalid IDs return 404
- [ ] Non-numeric IDs return 400
- [ ] Redirect Location header correct
- [ ] Cache-Control header present

#### Test All ID Mappings
```bash
# Loop through all valid IDs
for i in {1..14}; do
  echo "Testing ID $i:"
  curl -s -o /dev/null -w "HTTP %{http_code}\n" http://localhost:3000/blog/$i
done

# Expected: All return 301
```

- [ ] All IDs 1-14 return 301
- [ ] No 404s for valid IDs
- [ ] Consistent response format

### Page Link Tests

```bash
# Visit blog home page
# http://localhost:3000/blog
```

#### Featured Post
- [ ] Featured post link uses slug (not numeric ID)
- [ ] Slug format: `/blog/drip-investing-for-beginners-2026`
- [ ] Link clickable and works

#### Recent Posts Grid
- [ ] Each recent post link uses slug
- [ ] All 6 recent posts have valid links
- [ ] Clicking links works correctly

#### Most Popular Sidebar
- [ ] Top 3 posts have slug-based links
- [ ] Links format correct
- [ ] Clicking works

### Slug Mapping Tests

```typescript
// In Node REPL:
import { getSlugForId, getIdForSlug, isValidBlogId } from '@/lib/blog/slug-mapping'

// Test forward lookup
getSlugForId('1')
// Expected: 'dividend-growth-strategy'

// Test reverse lookup
getIdForSlug('dividend-growth-strategy')
// Expected: '1'

// Test validation
isValidBlogId('1')
// Expected: true

isValidBlogId('999')
// Expected: false
```

- [ ] `getSlugForId()` returns correct slug
- [ ] `getIdForSlug()` returns correct ID
- [ ] `isValidBlogId()` works correctly
- [ ] All 14 IDs map correctly

### Sitemap Tests

```bash
# Fetch sitemap
curl http://localhost:3000/sitemap.xml | head -50

# Expected: XML with slug-based URLs
```

- [ ] Sitemap generates without errors
- [ ] Sitemap is valid XML
- [ ] All blog posts included
- [ ] All URLs are slug-based (no numeric IDs)
- [ ] Categories included
- [ ] Tags included
- [ ] Priority/changefreq set correctly

### Database/Content Tests

- [ ] All blog posts load without errors
- [ ] Content displays correctly
- [ ] Images load properly
- [ ] Code blocks render correctly
- [ ] Links work correctly

### Browser Tests (Manual)

#### Chrome
- [ ] Navigate to `/blog/1`
- [ ] Verify redirect to `/blog/dividend-growth-strategy`
- [ ] Page loads completely
- [ ] No console errors
- [ ] Responsive design works

#### Firefox
- [ ] Same tests as Chrome
- [ ] Open Dev Tools → Network
- [ ] Verify 301 response in first request

#### Safari
- [ ] Same tests as Chrome
- [ ] Check mobile view

#### Mobile Browser
- [ ] Visit `/blog/1` on phone
- [ ] Verify redirect works
- [ ] Page responsive
- [ ] Links clickable

### Performance Tests

```bash
# Test response time
for i in {1..10}; do
  curl -s -o /dev/null -w "Time: %{time_total}s\n" http://localhost:3000/blog/1
done

# Expected: <100ms average
```

- [ ] Redirects fast (<100ms)
- [ ] No server errors
- [ ] No memory leaks
- [ ] Consistent response time

### Search Crawlability Tests

```bash
# Simulate Googlebot
curl -H "User-Agent: Mozilla/5.0 (compatible; Googlebot/2.1)" \
  http://localhost:3000/blog/1

# Expected: 301 with Location header
```

- [ ] Googlebot sees redirect
- [ ] Bingbot sees redirect
- [ ] Yandexbot sees redirect
- [ ] Crawlers follow redirect

---

## Staging Deployment Testing

### Deployment Steps

```bash
# 1. Create feature branch
git checkout -b blog-url-migration

# 2. Commit changes
git add .
git commit -m "feat: migrate blog URLs from numeric IDs to SEO-friendly slugs"

# 3. Push to remote
git push -u origin blog-url-migration

# 4. Deploy to staging
# (Vercel: Automatically from Git)
```

- [ ] Feature branch created
- [ ] All changes committed
- [ ] Pushed to remote
- [ ] Staging deployment triggered

### Staging Environment Tests

#### Redirect Tests
```bash
# Test from staging URL
curl -i https://calc-staging.vercel.app/blog/1

# Expected: 301 with proper Location header
```

- [ ] Redirects work in staging
- [ ] All IDs tested
- [ ] Invalid IDs return 404

#### Page Load Tests
```bash
# Visit staging blog
https://calc-staging.vercel.app/blog
```

- [ ] Blog page loads
- [ ] No errors in console
- [ ] Links use correct slugs
- [ ] Sitemap accessible

#### Google Search Console Tests (Staging Property)

If you have a staging property in GSC:

- [ ] Request URL inspection for `/blog/1`
- [ ] Verify "Live test" shows 301
- [ ] Request URL inspection for `/blog/dividend-growth-strategy`
- [ ] Verify page renders correctly

#### SEO Tool Verification

Using online tools:

```
Tools to use:
- https://httpstatus.io
- https://www.redirect-checker.org
- SEMrush crawl test
- Screaming Frog (limit 500 URLs)
```

- [ ] Redirect status codes correct
- [ ] Redirect chains proper
- [ ] No broken redirects
- [ ] Page metadata correct

#### Performance Tests

```bash
# Test with Lighthouse (via Google DevTools)
```

- [ ] Lighthouse score > 90
- [ ] Core Web Vitals passing
- [ ] No performance regressions

---

## Production Deployment Testing

### Pre-Production Checklist

- [ ] All staging tests passed
- [ ] Code reviewed and approved
- [ ] Backup of current state created
- [ ] Rollback plan documented
- [ ] Team notified of changes
- [ ] Monitoring set up

### Deployment Steps

```bash
# 1. Merge to main branch
git checkout main
git pull origin main
git merge blog-url-migration

# 2. Deploy to production
# (Automatic via Vercel)
```

- [ ] Merge to main successful
- [ ] Production deployment triggered
- [ ] Deployment completes without errors

### Immediate Post-Deployment Tests (First Hour)

#### Basic Functionality
- [ ] Website loads normally
- [ ] Blog accessible
- [ ] No 500 errors

#### Redirect Verification
```bash
# Test production redirects
curl -i https://calc.ai/blog/1
```

- [ ] All redirects working
- [ ] HTTP 301 responses
- [ ] Location headers correct
- [ ] No infinite loops

#### Page Verification
- [ ] Blog index loads
- [ ] Individual posts load
- [ ] Images load correctly
- [ ] Links work properly

#### Monitoring
- [ ] Server status normal
- [ ] Error logs clean
- [ ] No unusual traffic patterns
- [ ] Database queries normal

### Google Search Console Tasks (Day 1)

1. **Submit Updated Sitemap**
   - Go to Sitemaps
   - Add new sitemap URL
   - Check "Processed" status

2. **Check Coverage Report**
   - Look for 404 errors
   - Check for "Redirected" entries
   - Monitor for unusual patterns

3. **Request Index for New URLs**
   - URL Inspection Tool
   - Test a new slug-based URL
   - Request Google to crawl

4. **Monitor Search Results**
   - Search Console → Search Results
   - Check for old URLs still indexed
   - Look for new URLs appearing

### Bing Webmaster Tools Tasks (Day 1)

- [ ] Resubmit sitemap
- [ ] Request recrawl
- [ ] Monitor crawl stats

### Ongoing Monitoring (Week 1-4)

#### Daily (First 7 Days)
- [ ] Check 404 errors in Search Console
- [ ] Monitor server logs for errors
- [ ] Check for unusual redirect patterns
- [ ] Monitor Google crawl activity

#### Weekly (Weeks 1-4)
- [ ] Review Search Console coverage
- [ ] Check URL inspection tool results
- [ ] Monitor keyword positions
- [ ] Analyze organic traffic
- [ ] Check crawl stats

#### Tracking Metrics

Create spreadsheet with columns:
| Date | 404s | Valid URLs | Redirect Count | Organic Traffic | Rankings | CTR |
|---|---|---|---|---|---|---|

- [ ] Baseline measured (day of deploy)
- [ ] Daily tracking for week 1
- [ ] Weekly tracking for weeks 2-4
- [ ] Monthly tracking long-term

---

## Automated Testing (Optional)

### Test Suite Setup

```bash
# Create test file
touch __tests__/blog-migration.test.ts
```

### Test Cases

```typescript
describe('Blog URL Migration', () => {
  describe('Slug Mapping', () => {
    it('should map all numeric IDs to slugs', () => {
      for (let i = 1; i <= 14; i++) {
        const slug = getSlugForId(String(i))
        expect(slug).toBeDefined()
        expect(slug).not.toEqual('')
      }
    })

    it('should handle invalid IDs', () => {
      expect(isValidBlogId('999')).toBe(false)
      expect(getSlugForId('999')).toBeNull()
    })
  })

  describe('Redirect Route', () => {
    it('should return 301 for valid IDs', async () => {
      const response = await fetch('/blog/1')
      expect(response.status).toBe(301)
      expect(response.headers.get('Location')).toContain('dividend-growth-strategy')
    })

    it('should return 404 for invalid IDs', async () => {
      const response = await fetch('/blog/999')
      expect(response.status).toBe(404)
    })
  })
})
```

Run tests:
```bash
npm test
```

- [ ] All tests pass
- [ ] No test failures
- [ ] Coverage > 80%

---

## Rollback Plan

### If Critical Issues Arise

1. **Identify Issue**
   - Check error logs
   - Verify redirect status
   - Check Search Console

2. **Quick Decision**
   - Is issue critical? (>50% traffic loss)
   - Can it be fixed quickly? (<1 hour)
   - Should we rollback?

3. **Rollback Steps**
   ```bash
   # Revert commits
   git revert <commit-hash>
   git push origin main

   # Vercel will automatically redeploy
   ```

4. **Post-Rollback**
   - Verify old URLs work
   - Check traffic recovery
   - Investigate root cause
   - Plan fix before retry

- [ ] Rollback procedure documented
- [ ] Team trained on rollback
- [ ] Decision criteria clear

---

## Success Criteria

### Deployment is Successful When

✅ **All the following are true**:

1. **Functionality**
   - [ ] All redirects working (301 status)
   - [ ] All pages load without errors
   - [ ] No 500 errors in logs
   - [ ] Database queries normal

2. **SEO**
   - [ ] Sitemap updated and submitted
   - [ ] No 404 errors in Search Console
   - [ ] Old URLs showing as "Redirected"
   - [ ] New URLs indexing

3. **Performance**
   - [ ] Page load time < 100ms
   - [ ] Server responding normally
   - [ ] No unusual traffic patterns
   - [ ] Error rates normal

4. **User Experience**
   - [ ] Blog pages display correctly
   - [ ] Links work properly
   - [ ] Mobile responsive
   - [ ] No console errors

5. **Monitoring**
   - [ ] All tracking enabled
   - [ ] Analytics flowing
   - [ ] Alerts configured
   - [ ] Dashboard updated

### Expected Results (2-4 Weeks)

- [ ] All old URLs redirecting
- [ ] All new URLs indexed
- [ ] Rankings maintained or improved
- [ ] Organic traffic stable
- [ ] Click-through rate improved
- [ ] No ranking drops > 2 positions

---

## Issue Tracking

### If Issues Found

Create issue template:

```
Title: [Blog Migration] Issue with [specific problem]

Environment: [Staging/Production]

Description:
[What happened]

Steps to Reproduce:
1. [First step]
2. [Second step]

Expected Result:
[What should happen]

Actual Result:
[What actually happened]

Error Details:
[Logs/error messages]

Impact:
[How serious]

Suggested Fix:
[Possible solution]
```

- [ ] Issue template created
- [ ] Team aware of process
- [ ] Escalation path defined

---

## Sign-Off

### QA Sign-Off

- [ ] All test cases passed
- [ ] No critical issues found
- [ ] Performance acceptable
- [ ] User experience good

**QA Lead**: _________________ **Date**: _________

### SEO Sign-Off

- [ ] Redirect strategy implemented correctly
- [ ] Sitemap proper
- [ ] No SEO red flags
- [ ] Monitoring plan solid

**SEO Owner**: _________________ **Date**: _________

### DevOps Sign-Off

- [ ] Deployment smooth
- [ ] Monitoring active
- [ ] Rollback tested
- [ ] Production stable

**DevOps Lead**: _________________ **Date**: _________

---

## Documentation

- [ ] BLOG_URL_MIGRATION.md completed
- [ ] SEO_PRESERVATION_STRATEGY.md completed
- [ ] TESTING_CHECKLIST.md (this file) completed
- [ ] Redirect mapping documented
- [ ] Team trained
- [ ] Handoff documentation prepared

---

**Checklist Created**: 2026-03-19
**Status**: Ready for Testing
**Next Step**: Begin pre-deployment testing
