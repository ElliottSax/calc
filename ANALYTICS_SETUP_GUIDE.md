# Analytics Setup Guide

## PostHog Installation & Configuration

PostHog has been added to your affiliate marketing toolkit to track conversions, A/B test results, and user behavior.

### Step 1: Install Dependencies

Due to WSL file locking, run this when ready:

```bash
cd /mnt/e/projects/calc
npm install
# or if issues persist:
npm install --force
```

### Step 2: Get Your PostHog API Key

1. Go to [PostHog.com](https://posthog.com/) and create a free account
2. Create a new project
3. Copy your Project API Key (starts with `phc_...`)
4. Note your PostHog host URL (usually `https://app.posthog.com`)

### Step 3: Configure Environment Variables

Create a `.env.local` file in the `/mnt/e/projects/calc` directory:

```bash
# PostHog Analytics
NEXT_PUBLIC_POSTHOG_KEY=phc_your_actual_key_here
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
NEXT_PUBLIC_ENABLE_ANALYTICS=true

# Feature Flags
NEXT_PUBLIC_ENABLE_AB_TESTING=true
NEXT_PUBLIC_ENABLE_EMAIL_CAPTURE=true
```

⚠️ **Important**: Never commit `.env.local` to git. It's already in `.gitignore`.

### Step 4: Initialize PostHog in Your App

Add this to `app/layout.tsx` (already done in the commit):

```typescript
'use client'

import { useEffect } from 'react'
import { initPostHog } from '@/lib/analytics/posthog'

export default function RootLayout({ children }) {
  useEffect(() => {
    initPostHog()
  }, [])

  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
```

### Step 5: Test Your Setup

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:3000

3. Check the browser console for "PostHog loaded" message

4. Visit PostHog dashboard to see events coming in

## What's Being Tracked

### Automatic Tracking
- ✅ Page views
- ✅ Session recordings (can be disabled)
- ✅ Page leave events

### Custom Events We Track

#### Affiliate Clicks
```typescript
import { trackAffiliateClick } from '@/lib/analytics/posthog'

trackAffiliateClick({
  merchantId: 'fidelity',
  merchantName: 'Fidelity',
  category: 'broker',
  placement: 'comparison-table'
})
```

#### Calculator Usage
```typescript
import { trackCalculatorUsage } from '@/lib/analytics/posthog'

trackCalculatorUsage({
  calculatorType: 'drip',
  initialInvestment: 10000,
  monthlyContribution: 500,
  years: 20,
  ticker: 'AAPL'
})
```

#### Conversions
```typescript
import { trackConversion } from '@/lib/analytics/posthog'

trackConversion({
  conversionType: 'broker_signup',
  value: 150, // Commission amount
  merchantId: 'fidelity'
})
```

#### Email Signups
```typescript
import { trackEmailSignup } from '@/lib/analytics/posthog'

trackEmailSignup({
  source: 'exit_intent_popup',
  email: 'user@example.com' // Optional
})
```

#### A/B Test Events
```typescript
import { trackExperiment } from '@/lib/analytics/posthog'

// Automatically tracked by useExperiment hook
trackExperiment({
  experimentId: 'brokerCTA',
  variantId: 'urgency',
  event: 'exposure'
})
```

## Key Metrics to Monitor

### Daily Metrics
- [ ] Page views by source
- [ ] Calculator completions
- [ ] Affiliate click-through rate
- [ ] Email capture rate

### Weekly Metrics
- [ ] A/B test results (statistical significance)
- [ ] Conversion rate by broker
- [ ] Top-performing stock pages
- [ ] User session duration

### Monthly Metrics
- [ ] Total conversions
- [ ] Revenue per visitor
- [ ] Email list growth rate
- [ ] Organic search traffic

## Important for Affiliate Applications

When applying to broker affiliate programs, you can now provide:

1. **Traffic Stats**: Real-time visitor counts from PostHog
2. **Engagement Metrics**: Average session duration, pages per visit
3. **Conversion Data**: Click-through rates on existing affiliate links
4. **User Demographics**: Location, device type, referral sources

### Where to Find These Stats in PostHog

1. **Dashboard** → Overview of key metrics
2. **Insights** → Create custom reports
3. **Sessions** → Watch session recordings to understand user behavior
4. **Funnels** → Track calculator → broker click → signup flow
5. **Cohorts** → Analyze user segments

## Privacy & Compliance

### GDPR Compliance
PostHog is GDPR compliant. We:
- ✅ Get cookie consent before tracking (via CookieConsent component)
- ✅ Allow users to opt-out
- ✅ Don't track sensitive PII by default
- ✅ Provide data deletion on request

### What We DON'T Track
- ❌ Investment amounts (actual calculations)
- ❌ Personal financial data
- ❌ Passwords or authentication tokens
- ❌ Credit card information

## Troubleshooting

### PostHog Not Loading
1. Check browser console for errors
2. Verify your API key in `.env.local`
3. Check if you have an ad blocker (may block analytics)
4. Ensure you're on a secure connection (https or localhost)

### Events Not Appearing
1. Wait 30-60 seconds for events to process
2. Check PostHog dashboard "Live Events" feed
3. Verify `NEXT_PUBLIC_ENABLE_ANALYTICS=true` in `.env.local`
4. Check browser Network tab for failed requests to PostHog

### npm Install Issues (WSL)
If you get file locking errors:
```bash
# Option 1: Clear cache and retry
rm -rf node_modules
npm cache clean --force
npm install

# Option 2: Use force flag
npm install --force

# Option 3: Use legacy peer deps
npm install --legacy-peer-deps
```

## Next Steps

1. ✅ Install PostHog package (`npm install`)
2. ✅ Get API key from PostHog
3. ✅ Add to `.env.local`
4. ✅ Test in development
5. ✅ Deploy to production
6. ✅ Set up custom dashboards in PostHog
7. ✅ Share metrics with affiliate managers

## Resources

- [PostHog Documentation](https://posthog.com/docs)
- [PostHog React Integration](https://posthog.com/docs/libraries/react)
- [A/B Testing Guide](https://posthog.com/docs/experiments)
- [Funnels & Conversion Tracking](https://posthog.com/docs/user-guides/funnels)

---

**Ready to apply to affiliate programs?** You now have professional analytics to share with affiliate managers! 🚀
