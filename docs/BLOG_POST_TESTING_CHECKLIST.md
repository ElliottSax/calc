# Blog Post Testing Checklist

Use this checklist to validate each blog post before marking it as complete.

## Pre-Publishing Checklist

### 1. File & Structure
- [ ] File created at correct path: `app/blog/[slug]/page.tsx`
- [ ] File exports default function component
- [ ] Metadata export present with title and description
- [ ] Component name matches slug (PascalCase)

### 2. SEO Optimization
- [ ] **Title tag** (metadata.title):
  - [ ] Contains target keyword
  - [ ] 50-60 characters optimal
  - [ ] Includes year "2026" where relevant
  - [ ] Compelling and click-worthy
- [ ] **Meta description** (metadata.description):
  - [ ] 150-160 characters
  - [ ] Contains target keyword
  - [ ] Includes call-to-action or value proposition
  - [ ] Accurate summary of content
- [ ] **H1 heading**:
  - [ ] Matches or closely matches title
  - [ ] Contains target keyword
  - [ ] Only ONE h1 per page
- [ ] **Content structure**:
  - [ ] Target keyword in first paragraph
  - [ ] H2 headings use semantic keywords
  - [ ] H3 subheadings where appropriate
  - [ ] Keyword density 1-2% (natural, not forced)

### 3. Content Quality
- [ ] **Word count**: 2,000-4,500 words
- [ ] **Readability**:
  - [ ] Short paragraphs (2-4 sentences)
  - [ ] Bullet points for lists
  - [ ] Clear, actionable advice
  - [ ] No jargon without explanation
- [ ] **Accuracy**:
  - [ ] Stock data is current (2026)
  - [ ] Dividend yields are realistic
  - [ ] Company information is accurate
  - [ ] Tax information is up-to-date
- [ ] **Value**:
  - [ ] Specific examples with real stocks
  - [ ] Concrete numbers and data
  - [ ] Actionable next steps
  - [ ] Original insights (not just rehashed content)

### 4. Internal Linking (3-5 links minimum)
- [ ] Links to stock calculator pages (`/stocks/[ticker]`)
- [ ] Links to comparison tool (`/tools/compare`)
- [ ] Links to broker pages (`/brokers/[slug]`) where relevant
- [ ] Links to related blog posts
- [ ] All links use descriptive anchor text (not "click here")
- [ ] Links open in same tab (internal links should NOT use target="_blank")

### 5. Components & UI
- [ ] **Imports** are correct:
  - [ ] Card components from '@/components/ui/card'
  - [ ] Button from '@/components/ui/button'
  - [ ] Badge from '@/components/ui/badge'
  - [ ] Icons from 'lucide-react'
  - [ ] InlineSignup from '@/components/email/InlineSignup' (if used)
- [ ] **Hero section** (top of page):
  - [ ] Badge with icon
  - [ ] H1 title
  - [ ] Subtitle paragraph
  - [ ] All centered (text-center on parent div)
- [ ] **Tables** (if present):
  - [ ] Wrapped in overflow-x-auto div
  - [ ] Mobile-responsive
  - [ ] Clear headers
  - [ ] Data is accurate
- [ ] **Cards**:
  - [ ] Consistent styling
  - [ ] Color-coded borders where appropriate
  - [ ] Proper spacing
- [ ] **CTAs**:
  - [ ] Clear and actionable
  - [ ] Visually prominent
  - [ ] Link to relevant pages

### 6. Email Capture
- [ ] InlineSignup component included (1-2 per post)
- [ ] Placed strategically (after value, before conclusion)
- [ ] Props configured:
  - [ ] `variant` set appropriately ("featured", "simple", "minimal")
  - [ ] `title` is compelling
  - [ ] `description` highlights value
  - [ ] `buttonText` is action-oriented
  - [ ] `source` is unique identifier (e.g., "energy_dividend_blog")

### 7. Related Articles Section
- [ ] Section present at bottom of post
- [ ] 2-4 related article links
- [ ] Links to actual blog posts (not placeholder URLs)
- [ ] Cards have hover effects
- [ ] Titles and descriptions are accurate

### 8. Mobile Responsiveness
- [ ] Grid layouts use `md:grid-cols-*` for responsive breakpoints
- [ ] Text sizes use responsive classes (`text-4xl md:text-5xl`)
- [ ] Tables scroll horizontally on mobile (`overflow-x-auto`)
- [ ] Buttons stack vertically on mobile (`grid md:grid-cols-2`)
- [ ] Container has proper padding (`px-4 py-12`)

### 9. Affiliate Integration
- [ ] At least 1 broker recommendation with context
- [ ] Links to `/brokers/[slug]` pages where appropriate
- [ ] Recommendations are genuine and helpful (not forced)
- [ ] Disclosure language if needed

### 10. Technical Validation
- [ ] TypeScript: No type errors
- [ ] Next.js: Exports metadata correctly
- [ ] Imports: All components and icons exist
- [ ] Links: All internal links are valid paths
- [ ] No console errors when rendering

## Testing in Browser

### Visual Testing
- [ ] Page loads without errors
- [ ] Layout looks correct on desktop (1920px)
- [ ] Layout looks correct on tablet (768px)
- [ ] Layout looks correct on mobile (375px)
- [ ] Images load properly (if any)
- [ ] Icons display correctly
- [ ] Colors match brand (dark mode and light mode)
- [ ] Typography is readable
- [ ] Spacing is consistent

### Functionality Testing
- [ ] All internal links work
- [ ] All external links work (open in new tab if appropriate)
- [ ] Buttons have hover states
- [ ] Email signup form displays
- [ ] Related articles cards are clickable
- [ ] No JavaScript errors in console
- [ ] Page loads quickly (< 3 seconds)

### SEO Testing
- [ ] View page source: metadata tags present
- [ ] Title appears in browser tab
- [ ] URL slug is clean and descriptive
- [ ] No duplicate H1 tags
- [ ] Structured data if applicable

## Post-Publishing

### Monitor Performance
- [ ] Add to Google Search Console
- [ ] Check for crawl errors
- [ ] Monitor search rankings for target keyword
- [ ] Track email signups from post (via source tracking)
- [ ] Check affiliate click-through rates

### Update Tracking
- [ ] Mark post as complete in project tracker
- [ ] Add to blog index/listing page
- [ ] Update sitemap.ts (should be automated)
- [ ] Share on social media if applicable

## Common Issues & Fixes

### Issue: TypeScript errors for components
**Fix**: Verify all imports are from correct paths. Check that component props match their definitions.

### Issue: Metadata not showing in search results
**Fix**: Ensure metadata is exported at top level, not inside component. Use `export const metadata = {...}` syntax.

### Issue: Links broken (404 errors)
**Fix**: Use Next.js Link component. Ensure paths start with `/`. Check that target pages exist.

### Issue: Email signup not working
**Fix**: Verify InlineSignup component is imported correctly. Check that `source` prop is unique. Test form submission.

### Issue: Mobile layout broken
**Fix**: Use Tailwind responsive prefixes (`md:`, `lg:`). Wrap tables in `overflow-x-auto`. Test on actual mobile device.

### Issue: Content too short (< 2,000 words)
**Fix**: Add more examples, expand explanations, include sample portfolios, add FAQ section, provide more stock analysis.

### Issue: Keyword density too high (keyword stuffing)
**Fix**: Reduce forced keyword usage. Use natural language and synonyms. Focus on user value, not just SEO.

## Batch Review Checklist

When completing a batch of 5 posts:

- [ ] All 5 posts pass individual checklist
- [ ] Posts link to each other where relevant
- [ ] Sitemap updated with all 5 new URLs
- [ ] Git commit includes all 5 posts
- [ ] Progress updated in BLOG_POST_STRATEGY.md
- [ ] No duplicate content across posts
- [ ] Each post has unique value proposition
- [ ] Testing performed on representative sample (2 of 5)

## Quality Gates

Before marking a post as "Done":

1. ✅ **Content Gate**: 2,000+ words, accurate data, actionable advice
2. ✅ **SEO Gate**: Title, description, keywords, internal links optimized
3. ✅ **Technical Gate**: No TypeScript errors, proper exports, valid imports
4. ✅ **Visual Gate**: Tested on mobile, tablet, desktop - looks good
5. ✅ **Conversion Gate**: Email CTA present, broker links included, related articles linked

**Only mark post as complete when ALL 5 gates pass.**

---

## Quick Reference: Common Mistakes

❌ **DON'T**:
- Use placeholder content or generic advice
- Forget to update metadata
- Skip mobile testing
- Overuse keywords unnaturally
- Copy content from other sites
- Use broken internal links
- Forget email signup CTAs
- Ignore readability (giant paragraphs)
- Rush through without proofreading

✅ **DO**:
- Write for humans first, SEO second
- Use specific examples and data
- Test on multiple devices
- Include clear CTAs
- Link to relevant internal pages
- Make content scannable (headings, bullets)
- Proofread for typos and errors
- Verify all data is accurate
