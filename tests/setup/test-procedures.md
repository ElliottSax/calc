# Comprehensive Testing Plan for Dividend Calculator Website

## Overview
This document outlines detailed test procedures to validate core functionality, SEO implementation, and performance optimization of the dividend calculator website.

---

## 1. Local Development Environment Setup

### Prerequisites
- Node.js 18+ installed
- Git installed
- Modern browser (Chrome, Firefox, Safari)
- Internet connection for external dependencies

### Setup Steps

1. **Clone and Install Dependencies**
```bash
cd /mnt/e/projects/calc/dividend-calculator-hub
npm install
```

2. **Configure Environment Variables**
```bash
# Copy example environment file
cp .env.local.example .env.local

# Edit .env.local with the following test values:
NEXT_PUBLIC_APP_URL=http://localhost:3000
TEST_MODE=true
MOCK_API_RESPONSES=true
DISABLE_ANALYTICS=true
LOG_LEVEL=debug
```

3. **Start Development Server**
```bash
npm run dev
```

**Expected Result:** Server starts on http://localhost:3000 without errors

### Environment Validation Checklist
- [ ] Server starts successfully on port 3000
- [ ] No compilation errors in terminal
- [ ] Browser console shows no critical errors
- [ ] Mock API responses are being used (check network tab)

---

## 2. Core Calculator Functionality Tests

### 2.1 DRIP Calculator Testing

#### Test Case 1: Basic DRIP Calculation
**Location:** http://localhost:3000/

**Test Steps:**
1. Navigate to home page
2. Enter the following inputs:
   - Ticker Symbol: JNJ
   - Initial Investment: $10,000
   - Monthly Contribution: $500
   - Investment Period: 20 years
   - Expected Annual Dividend Growth: 5%
3. Click "Calculate DRIP Returns"
4. Verify results display

**Expected Results:**
- [ ] Form accepts all inputs without validation errors
- [ ] Calculation completes within 3 seconds
- [ ] Results show:
  - Total value after 20 years
  - Total dividends received
  - Number of shares owned
  - Compound annual growth rate
- [ ] Results are mathematically correct (manual verification)
- [ ] Charts/graphs render properly
- [ ] No JavaScript errors in console

#### Test Case 2: Edge Cases and Validation
**Test Steps:**
1. Test with $0 initial investment
2. Test with negative monthly contribution
3. Test with 0% dividend growth
4. Test with very high growth rate (50%)
5. Test with non-existent ticker symbol
6. Test with special characters in inputs

**Expected Results:**
- [ ] Appropriate validation messages appear
- [ ] Invalid inputs are rejected gracefully
- [ ] Error states are user-friendly
- [ ] Form resets properly after errors

#### Test Case 3: Responsive Design
**Test Steps:**
1. Test on mobile viewport (375px width)
2. Test on tablet viewport (768px width)
3. Test on desktop viewport (1200px+ width)
4. Test form interactions on touch devices

**Expected Results:**
- [ ] Calculator form is fully functional on all screen sizes
- [ ] Text remains readable without horizontal scrolling
- [ ] Buttons are appropriately sized for touch
- [ ] Charts adapt to screen size

### 2.2 Dividend Yield Calculator
**Location:** http://localhost:3000/?calculator=yield

**Test Steps:**
1. Switch to yield calculator mode
2. Enter:
   - Current Stock Price: $100
   - Annual Dividend: $4
3. Calculate yield

**Expected Results:**
- [ ] Yield calculation shows 4.0%
- [ ] Additional metrics display (if implemented)
- [ ] Switching between calculators works smoothly

---

## 3. Dividend Aristocrats Explorer Tests

### Test Case 1: Data Loading and Display
**Location:** http://localhost:3000/aristocrats

**Test Steps:**
1. Navigate to Aristocrats page
2. Wait for data to load
3. Verify table displays stock data

**Expected Results:**
- [ ] Mock aristocrats data loads within 5 seconds
- [ ] Table displays at least 3 test stocks (JNJ, KO, PG)
- [ ] All columns show proper data:
  - Symbol, Company Name, Sector, Yield, Years, etc.
- [ ] Loading states are shown during data fetch
- [ ] No API errors in console

### Test Case 2: Filtering and Sorting
**Test Steps:**
1. Use sector filter dropdown
2. Select "Healthcare" sector
3. Sort by dividend yield (ascending/descending)
4. Search for "Johnson" in search box
5. Clear all filters

**Expected Results:**
- [ ] Healthcare filter shows only JNJ
- [ ] Sorting reorders table correctly
- [ ] Search finds Johnson & Johnson
- [ ] Clear filters resets table to original state
- [ ] Filter combinations work correctly

### Test Case 3: Stock Detail Views
**Test Steps:**
1. Click on a stock row (e.g., JNJ)
2. Verify modal or detail view opens
3. Check for stock-specific information
4. Test "Add to Watchlist" functionality

**Expected Results:**
- [ ] Detail view opens smoothly
- [ ] Stock information is accurate
- [ ] Interactive elements respond correctly
- [ ] Modal can be closed properly

---

## 4. Stock Profile Pages Tests

### Test Case 1: Individual Stock Pages
**Locations to test:**
- http://localhost:3000/stocks/jnj
- http://localhost:3000/stocks/ko
- http://localhost:3000/stocks/pg

**Test Steps for each stock:**
1. Navigate to stock page
2. Verify page loads without errors
3. Check all content sections:
   - Header with stock info
   - Key metrics cards
   - Company overview
   - Dividend history chart
   - Related stocks section
   - SEO content section
4. Test "Calculate DRIP Returns" button
5. Verify breadcrumb navigation

**Expected Results:**
- [ ] Page loads within 3 seconds
- [ ] All content sections display properly
- [ ] Mock data appears correctly
- [ ] Charts render without errors
- [ ] Related stocks show similar sector companies
- [ ] DRIP calculator link pre-fills ticker symbol
- [ ] Breadcrumbs show correct navigation path
- [ ] No 404 errors or broken links

### Test Case 2: Non-existent Stock Pages
**Test Steps:**
1. Navigate to http://localhost:3000/stocks/invalid-symbol
2. Verify error handling

**Expected Results:**
- [ ] 404 page displays appropriately
- [ ] User is guided back to valid content
- [ ] No server errors in logs

---

## 5. SEO Components Validation

### Test Case 1: Meta Tags and Structured Data
**Tools needed:**
- Google Rich Results Test: https://search.google.com/test/rich-results
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- Browser DevTools

**Test Steps:**
1. **Home Page SEO:**
   - View page source of http://localhost:3000/
   - Check for proper title, description, keywords
   - Verify Open Graph tags
   - Test structured data in Rich Results Test

2. **Stock Profile SEO:**
   - Test http://localhost:3000/stocks/jnj
   - Verify dynamic meta tags
   - Check stock-specific structured data
   - Test breadcrumb schema

3. **Blog Post SEO:**
   - Test http://localhost:3000/blog/dividend-aristocrats-complete-guide-2024
   - Verify article schema
   - Check author and publication date

**Expected Results:**
- [ ] All pages have unique, descriptive titles
- [ ] Meta descriptions are under 160 characters
- [ ] Open Graph tags present for social sharing
- [ ] Structured data validates without errors
- [ ] Canonical URLs are correctly set
- [ ] No duplicate meta tags

### Test Case 2: Sitemap and Robots.txt
**Test Steps:**
1. Navigate to http://localhost:3000/sitemap.xml
2. Navigate to http://localhost:3000/robots.txt
3. Verify content and structure

**Expected Results:**
- [ ] Sitemap.xml loads and contains:
  - Homepage
  - Stock profile pages
  - Blog posts
  - Learning center pages
  - All URLs are absolute and valid
- [ ] Robots.txt contains:
  - Proper disallow rules
  - Sitemap reference
  - No syntax errors

---

## 6. Content Marketing System Tests

### Test Case 1: Blog System
**Location:** http://localhost:3000/blog

**Test Steps:**
1. Navigate to blog listing page
2. Verify blog posts display correctly
3. Click on a featured post
4. Navigate through blog post content
5. Test related posts section
6. Test newsletter signup form

**Expected Results:**
- [ ] Blog listing shows sample posts with proper formatting
- [ ] Featured posts are visually distinct
- [ ] Individual blog posts load correctly
- [ ] Markdown content renders properly
- [ ] Related posts show relevant content
- [ ] Newsletter signup form functions (without actual email sending)
- [ ] Reading time estimates are reasonable
- [ ] Author information displays correctly

### Test Case 2: Learning Center
**Location:** http://localhost:3000/learn

**Test Steps:**
1. Navigate to learning center
2. Browse learning paths
3. Click on a course
4. Navigate through course content
5. Test interactive elements

**Expected Results:**
- [ ] Learning paths display with correct difficulty levels
- [ ] Course cards show proper metadata
- [ ] Course content is well-formatted
- [ ] Navigation between courses works
- [ ] Progress indicators function (if implemented)

---

## 7. Performance and Monitoring Tests

### Test Case 1: Lighthouse Audit
**Test Steps:**
1. Open Chrome DevTools
2. Navigate to Lighthouse tab
3. Run audit on key pages:
   - Homepage
   - /aristocrats
   - /stocks/jnj
   - /blog
4. Generate reports

**Expected Results:**
- [ ] Performance score > 85
- [ ] Accessibility score > 95
- [ ] Best Practices score > 90
- [ ] SEO score > 95
- [ ] Core Web Vitals pass:
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1

### Test Case 2: Web Vitals Monitoring
**Test Steps:**
1. Open browser console
2. Navigate through different pages
3. Check for Web Vitals logging
4. Verify monitoring data collection

**Expected Results:**
- [ ] Web Vitals metrics are logged to console
- [ ] No errors in vitals collection
- [ ] Performance observer functions correctly
- [ ] Custom metrics are tracked

### Test Case 3: Error Handling and Fallbacks
**Test Steps:**
1. Simulate network failures
2. Test with disabled JavaScript
3. Test error boundary components
4. Verify graceful degradation

**Expected Results:**
- [ ] App handles network errors gracefully
- [ ] Loading states appear during API calls
- [ ] Error messages are user-friendly
- [ ] Basic functionality works without JavaScript

---

## 8. Social Sharing Tests

### Test Case 1: Social Share Components
**Test Steps:**
1. Navigate to any blog post
2. Click social share button
3. Test different sharing platforms
4. Verify copy link functionality

**Expected Results:**
- [ ] Share dropdown opens correctly
- [ ] Platform-specific sharing URLs are generated
- [ ] Copy to clipboard works
- [ ] Share analytics fire (if implemented)

### Test Case 2: Open Graph Images
**Test Steps:**
1. Test dynamic OG image generation:
   - http://localhost:3000/api/og?title=Test&type=stock&symbol=JNJ
2. Use Facebook Sharing Debugger
3. Test different image parameters

**Expected Results:**
- [ ] OG images generate successfully
- [ ] Images contain correct information
- [ ] Different types (stock, article, calculator) render differently
- [ ] Images are properly sized (1200x630)

---

## 9. Responsive Design Testing

### Device Testing Matrix

| Device Type | Viewport | Test Cases |
|-------------|----------|------------|
| Mobile | 375x667 (iPhone) | Navigation, forms, calculators |
| Tablet | 768x1024 (iPad) | Table layouts, filters |
| Desktop | 1200x800+ | Full functionality |
| Large Screen | 1920x1080+ | Layout scaling |

**Test Steps for each viewport:**
1. Resize browser window or use device emulation
2. Test all major user flows
3. Verify touch interactions on mobile
4. Check text readability
5. Ensure no horizontal scrolling

**Expected Results:**
- [ ] All functionality works across devices
- [ ] Text remains readable at all sizes
- [ ] Interactive elements are appropriately sized
- [ ] Navigation adapts to screen size
- [ ] Tables are horizontally scrollable on mobile

---

## 10. Cross-Browser Compatibility

### Browser Testing Matrix

| Browser | Version | Test Priority |
|---------|---------|---------------|
| Chrome | Latest | High |
| Firefox | Latest | High |
| Safari | Latest | Medium |
| Edge | Latest | Medium |

**Test Steps:**
1. Test core functionality in each browser
2. Verify visual consistency
3. Check for browser-specific errors
4. Test performance variations

**Expected Results:**
- [ ] Consistent functionality across browsers
- [ ] No browser-specific JavaScript errors
- [ ] Acceptable performance variations
- [ ] Visual elements render consistently

---

## 11. Accessibility Testing

### Test Case 1: Keyboard Navigation
**Test Steps:**
1. Navigate site using only keyboard
2. Test Tab, Shift+Tab, Enter, Space, Arrow keys
3. Verify focus indicators
4. Test form submission with keyboard

**Expected Results:**
- [ ] All interactive elements accessible via keyboard
- [ ] Focus indicators are clearly visible
- [ ] Tab order is logical
- [ ] No keyboard traps

### Test Case 2: Screen Reader Compatibility
**Test Steps:**
1. Use browser screen reader or NVDA/JAWS
2. Navigate through content
3. Verify semantic markup
4. Test form labels and error messages

**Expected Results:**
- [ ] Content is properly announced
- [ ] Forms have appropriate labels
- [ ] Error messages are accessible
- [ ] Semantic HTML is used throughout

---

## 12. Security Testing

### Test Case 1: Input Validation
**Test Steps:**
1. Test form inputs with malicious data:
   - XSS attempts: `<script>alert('xss')</script>`
   - SQL injection: `'; DROP TABLE users; --`
   - Large payloads
2. Verify server-side validation

**Expected Results:**
- [ ] Malicious inputs are sanitized
- [ ] No script execution occurs
- [ ] Server responds with appropriate errors
- [ ] Rate limiting works (if implemented)

---

## Test Execution Checklist

### Pre-Testing Setup
- [ ] Environment variables configured
- [ ] Mock API responses working
- [ ] Development server running
- [ ] Browser DevTools open
- [ ] Testing tools bookmarked

### During Testing
- [ ] Document all issues found
- [ ] Take screenshots of bugs
- [ ] Note performance metrics
- [ ] Test edge cases thoroughly
- [ ] Verify fixes don't break other functionality

### Post-Testing
- [ ] Compile bug report
- [ ] Prioritize issues by severity
- [ ] Plan fixes and improvements
- [ ] Schedule re-testing

---

## Success Criteria

The testing phase is considered successful when:

1. **Functionality:** All core features work as designed
2. **Performance:** Lighthouse scores meet targets
3. **SEO:** All structured data validates
4. **Accessibility:** WCAG 2.1 AA compliance
5. **Compatibility:** Works across major browsers/devices
6. **Security:** No critical vulnerabilities found
7. **Content:** All sample content displays correctly
8. **User Experience:** Intuitive navigation and interactions

---

## Troubleshooting Common Issues

### Issue: Mock API not working
**Solution:** Verify `MOCK_API_RESPONSES=true` in .env.local

### Issue: Styles not loading
**Solution:** Check Tailwind CSS compilation, restart dev server

### Issue: TypeScript errors
**Solution:** Run `npm run type-check` and fix type issues

### Issue: Performance issues
**Solution:** Check for console errors, verify code splitting

### Issue: SEO validation fails
**Solution:** Check meta tag generation, verify structured data syntax

For additional support, check the project's README.md and documentation files.