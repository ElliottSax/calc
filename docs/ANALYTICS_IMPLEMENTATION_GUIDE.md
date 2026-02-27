# Analytics & Conversion Tracking Implementation Guide
**Goal:** Track complete revenue funnel from visit to signup
**Tools:** Google Analytics 4, PostHog (optional), Supabase
**Time to Implement:** 2-3 hours

---

## Overview

Track every step of the revenue funnel to optimize conversions:

```
Visit → Calculator Use → Results → CTA Click → Broker Click → Signup
```

Currently tracking:
- ✅ Page views (GA4)
- ✅ Some custom events (gtag)
- ⚠️ Incomplete funnel tracking
- ⚠️ No A/B test framework

---

## Event Tracking Schema

### Core Events to Track

#### 1. Calculator Engagement Events

**calculator_loaded**
```javascript
gtag('event', 'calculator_loaded', {
  calculator_type: 'drip', // drip, retirement, growth, yoc, coffee
  page_path: window.location.pathname,
  referrer: document.referrer,
  session_id: getSessionId() // from cookie
})
```

**calculator_input_changed**
```javascript
gtag('event', 'calculator_input_changed', {
  calculator_type: 'drip',
  field_name: 'initial_investment',
  value_range: '10000-50000', // bucketed for privacy
  interaction_number: 3
})
```

**calculation_completed**
```javascript
gtag('event', 'calculation_completed', {
  calculator_type: 'drip',
  final_portfolio_value: portfolioValue,
  final_dividend_income: dividendIncome,
  years_calculated: years,
  reinvest_enabled: true,
  session_calculation_count: 2 // 2nd calc this session
})
```

#### 2. CTA Interaction Events

**inline_cta_impression**
```javascript
gtag('event', 'inline_cta_impression', {
  cta_variant: 'featured', // default, compact, featured
  calculator_type: 'drip',
  portfolio_value_shown: 847293,
  position: 'after_results'
})
```

**inline_cta_click**
```javascript
gtag('event', 'inline_cta_click', {
  cta_variant: 'featured',
  calculator_type: 'drip',
  portfolio_value: 847293,
  cta_text: 'Compare Top Brokers',
  time_to_click: 15.3 // seconds after impression
})
```

#### 3. Broker Interaction Events

**broker_comparison_view**
```javascript
gtag('event', 'broker_comparison_view', {
  source: 'inline_cta', // inline_cta, header_nav, footer
  calculator_type: 'drip',
  brokers_displayed: 15
})
```

**broker_click**
```javascript
gtag('event', 'broker_click', {
  broker_id: 'm1finance',
  broker_name: 'M1 Finance',
  position: 1, // position in list
  commission_amount: 150,
  calculator_type: 'drip',
  portfolio_value: 847293,
  source: 'inline_cta'
})
```

#### 4. Email Capture Events

**email_form_impression**
```javascript
gtag('event', 'email_form_impression', {
  form_location: 'calculator_footer', // calculator_footer, sidebar, popup
  calculator_type: 'drip'
})
```

**email_signup**
```javascript
gtag('event', 'email_signup', {
  form_location: 'calculator_footer',
  calculator_type: 'drip',
  lead_magnet: 'dividend_checklist',
  provider: 'convertkit'
})
```

#### 5. Share Events

**calculator_shared**
```javascript
gtag('event', 'calculator_shared', {
  calculator_type: 'drip',
  share_method: 'link', // link, twitter, facebook, email
  portfolio_value: 847293,
  has_custom_params: true
})
```

**shared_link_clicked**
```javascript
// Track when someone arrives via shared link
gtag('event', 'shared_link_clicked', {
  calculator_type: 'drip',
  prefill_params: ['initial', 'monthly', 'years'],
  referrer: document.referrer
})
```

---

## Implementation Locations

### File: `/components/calculators/DripCalculator.tsx`

**Current implementation at line 549:**
```tsx
<InlineBrokerCTA
  variant="featured"
  finalPortfolioValue={Number(summary.finalPortfolioValue)}
  finalDividendIncome={Number(summary.finalDividendIncome)}
  calculatorType="drip"
  className="mt-8"
/>
```

**Add impression tracking:**
```tsx
// After CTA renders, track impression
useEffect(() => {
  if (summary && typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'inline_cta_impression', {
      cta_variant: 'featured',
      calculator_type: 'drip',
      portfolio_value_shown: Number(summary.finalPortfolioValue),
      position: 'after_results'
    })
  }
}, [summary])
```

### File: `/components/affiliate/InlineBrokerCTA.tsx`

**Current tracking (line 32):**
```tsx
(window as any).gtag('event', 'inline_broker_cta_click', {
  calculator: calculatorType,
  portfolio_value: finalPortfolioValue,
  source: 'calculator_results'
})
```

**Enhanced tracking:**
```tsx
const startTime = useRef(Date.now())

const scrollToBrokers = () => {
  const brokersSection = document.getElementById('brokers')
  if (brokersSection) {
    brokersSection.scrollIntoView({ behavior: 'smooth', block: 'start' })

    const timeToClick = (Date.now() - startTime.current) / 1000

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'inline_cta_click', {
        cta_variant: variant,
        calculator_type: calculatorType,
        portfolio_value: finalPortfolioValue,
        final_dividend_income: finalDividendIncome,
        cta_text: 'Compare Top Brokers',
        time_to_click: timeToClick
      })
    }
  }
}
```

### File: `/components/affiliate/BrokerComparisonTable.tsx`

**Add broker click tracking:**
```tsx
const handleBrokerClick = (broker: BrokerComparison, position: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'broker_click', {
      broker_id: broker.id,
      broker_name: broker.name,
      position: position + 1,
      commission_amount: typeof broker.commission === 'object'
        ? broker.commission.amount
        : null,
      calculator_type: getCalculatorType(), // from context or props
      source: 'inline_cta'
    })
  }

  // Open affiliate link
  window.open(broker.affiliateLink.url + broker.affiliateLink.trackingId, '_blank')
}
```

---

## Conversion Funnel Tracking

### GA4 Funnel Configuration

**Funnel: Calculator to Broker Signup**

1. **Step 1:** calculator_loaded
2. **Step 2:** calculation_completed
3. **Step 3:** inline_cta_click
4. **Step 4:** broker_comparison_view
5. **Step 5:** broker_click
6. **Goal:** broker_signup (tracked via affiliate network)

### Custom Dimensions

**User-scoped:**
- `user_id` - If logged in
- `first_calculator_used` - drip, retirement, etc.
- `total_calculations` - Lifetime count
- `email_subscriber` - true/false

**Session-scoped:**
- `session_id` - Unique per visit
- `entry_calculator` - First calculator in session
- `calculators_used_count` - Number in this session
- `cta_variant_seen` - Which CTA variant shown

**Event-scoped:**
- `portfolio_value` - From calculation
- `dividend_income` - From calculation
- `years_calculated` - Investment timeframe
- `broker_clicked` - Which broker

---

## A/B Testing Framework

### Structure

```typescript
// lib/ab-testing/experiments.ts

export interface Experiment {
  id: string
  name: string
  variants: Variant[]
  metric: string
  startDate: string
  endDate?: string
  status: 'draft' | 'active' | 'paused' | 'completed'
}

export interface Variant {
  id: string
  name: string
  weight: number // 0-1, sum must equal 1
  config: Record<string, any>
}

export const ACTIVE_EXPERIMENTS: Experiment[] = [
  {
    id: 'cta-variant-test-001',
    name: 'Inline CTA Variant Test',
    variants: [
      {
        id: 'control',
        name: 'Default CTA',
        weight: 0.33,
        config: {
          variant: 'default',
          ctaText: 'Compare Top Brokers'
        }
      },
      {
        id: 'featured',
        name: 'Featured Premium CTA',
        weight: 0.33,
        config: {
          variant: 'featured',
          ctaText: 'Compare Top Brokers'
        }
      },
      {
        id: 'compact',
        name: 'Compact Minimal CTA',
        weight: 0.34,
        config: {
          variant: 'compact',
          ctaText: 'See Best Brokers'
        }
      }
    ],
    metric: 'inline_cta_click',
    startDate: '2026-02-15',
    status: 'active'
  }
]
```

### Variant Assignment

```typescript
// lib/ab-testing/assignment.ts

export function getExperimentVariant(
  experimentId: string,
  userId?: string
): Variant | null {
  const experiment = ACTIVE_EXPERIMENTS.find(e => e.id === experimentId)
  if (!experiment || experiment.status !== 'active') return null

  // Use consistent hashing for user (sticky assignment)
  const hash = userId
    ? hashString(experimentId + userId)
    : Math.random()

  let cumulative = 0
  for (const variant of experiment.variants) {
    cumulative += variant.weight
    if (hash <= cumulative) {
      return variant
    }
  }

  return experiment.variants[experiment.variants.length - 1]
}

function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }
  return Math.abs(hash) / 2147483647 // Normalize to 0-1
}
```

### Usage in Components

```tsx
// In DripCalculator or other calculator
import { getExperimentVariant } from '@/lib/ab-testing/assignment'

const [ctaVariant, setCtaVariant] = useState('default')

useEffect(() => {
  const variant = getExperimentVariant('cta-variant-test-001', sessionId)
  if (variant) {
    setCtaVariant(variant.config.variant)

    // Track experiment participation
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'experiment_participation', {
        experiment_id: 'cta-variant-test-001',
        variant_id: variant.id,
        variant_name: variant.name
      })
    }
  }
}, [sessionId])

// Render with assigned variant
<InlineBrokerCTA
  variant={ctaVariant as 'default' | 'compact' | 'featured'}
  {...otherProps}
/>
```

---

## Revenue Attribution

### Multi-Touch Attribution Model

**Problem:** User may interact multiple times before signup:
1. First visit: Reads blog post, uses calculator
2. Returns next day: Uses calculator again, clicks broker
3. Returns week later: Clicks different broker, signs up

**Solution:** Track all touchpoints, attribute based on model.

### Attribution Models

**1. Last Click (Simple)**
```
Signup → Last broker clicked gets 100% credit
```

**2. First Click**
```
Signup → First calculator used gets 100% credit
```

**3. Linear (Fair)**
```
Signup → Equal credit to all touchpoints
3 touchpoints = 33.3% each
```

**4. Time Decay (Recommended)**
```
Signup → More credit to recent touchpoints
Day 1: 10%
Day 2: 20%
Day 3 (signup): 70%
```

### Implementation

```typescript
// Track all touchpoints in Supabase
interface Touchpoint {
  session_id: string
  user_id?: string
  timestamp: string
  event_type: 'calculator_use' | 'cta_click' | 'broker_click'
  calculator_type?: string
  broker_id?: string
  portfolio_value?: number
}

// On broker signup (webhook from affiliate network)
async function attributeConversion(conversionData: {
  broker_id: string
  affiliate_click_id: string
  signup_timestamp: string
  commission: number
}) {
  // Get all touchpoints for this user (last 30 days)
  const touchpoints = await getTouchpoints(conversionData.affiliate_click_id)

  // Apply time-decay attribution
  const attribution = applyTimeDecayAttribution(
    touchpoints,
    conversionData.signup_timestamp,
    conversionData.commission
  )

  // Store attribution
  await saveAttribution(attribution)

  // Update analytics
  for (const touch of attribution) {
    gtag('event', 'conversion_attributed', {
      touchpoint_type: touch.event_type,
      calculator_type: touch.calculator_type,
      broker_id: conversionData.broker_id,
      attributed_value: touch.attributed_commission,
      attribution_model: 'time_decay'
    })
  }
}
```

---

## Dashboard Metrics

### Key Performance Indicators (KPIs)

**Traffic Metrics**
- Monthly visitors
- Organic vs. paid vs. direct
- Pages per session
- Average session duration
- Bounce rate by page

**Engagement Metrics**
- Calculator usage rate (% of visitors who calculate)
- Calculations per session
- Average time on calculator
- Calculator completion rate
- Share rate

**Conversion Metrics**
- Inline CTA impression rate
- Inline CTA click rate (Goal: 6-8%)
- Broker comparison view rate
- Broker click rate (Goal: 60-80% of CTA clickers)
- Email signup rate (Goal: 3-5%)

**Revenue Metrics**
- Broker signups (tracked via affiliate networks)
- Signup conversion rate (clicks to signups, goal: 10-15%)
- Average commission per signup
- Revenue per visitor (Goal: $0.50-1.00)
- Monthly recurring revenue (from subscriptions)

### GA4 Custom Reports

**Report 1: Calculator Funnel**
```
Rows: Calculator Type
Columns: Funnel Steps
Values: User Count, Conversion Rate

Loaded → Used → Completed → CTA Click → Broker Click
```

**Report 2: Revenue by Source**
```
Rows: Traffic Source / Medium
Columns: Conversion Events
Values: Revenue, ROAS

organic/google → $X revenue → Y% ROAS
social/facebook → $X revenue → Y% ROAS
```

**Report 3: A/B Test Results**
```
Rows: Experiment Variant
Columns: Key Metrics
Values: Count, Conversion Rate, Statistical Significance

Control → 1,000 users → 5.2% CTR
Featured → 1,000 users → 7.8% CTR (+50%, p<0.01)
```

---

## PostHog Integration (Optional)

### Why PostHog?

- Session recordings (see exactly how users interact)
- Heatmaps (where do users click?)
- Feature flags (for A/B tests)
- Funnel analysis (visual conversion tracking)
- Cohort analysis (group users by behavior)

### Setup

```bash
npm install posthog-js
```

```typescript
// lib/analytics/posthog.ts
import posthog from 'posthog-js'

export function initPostHog() {
  if (typeof window !== 'undefined') {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: 'https://app.posthog.com',
      loaded: (ph) => {
        if (process.env.NODE_ENV === 'development') {
          ph.opt_out_capturing() // Don't track in dev
        }
      }
    })
  }
}

export { posthog }
```

### Track Events

```typescript
import { posthog } from '@/lib/analytics/posthog'

// Track with PostHog AND GA4
posthog.capture('calculation_completed', {
  calculator_type: 'drip',
  portfolio_value: 847293,
  dividend_income: 33891
})

// Also send to GA4
gtag('event', 'calculation_completed', {...})
```

---

## Implementation Checklist

### Week 1: Core Events
- [ ] Add all calculator engagement events
- [ ] Add inline CTA impression/click events
- [ ] Add broker comparison/click events
- [ ] Add email capture events
- [ ] Test all events in GA4 DebugView

### Week 2: Funnels & Dashboards
- [ ] Create calculator funnel in GA4
- [ ] Create conversion dashboard
- [ ] Set up custom dimensions
- [ ] Configure conversion goals
- [ ] Create weekly report automation

### Week 3: A/B Testing
- [ ] Implement experiment framework
- [ ] Set up variant assignment
- [ ] Create first CTA variant test
- [ ] Add experiment tracking events
- [ ] Configure statistical analysis

### Week 4: Attribution & Revenue
- [ ] Set up Supabase touchpoint tracking
- [ ] Implement attribution model
- [ ] Configure affiliate webhook receivers
- [ ] Create revenue dashboard
- [ ] Set up automated reporting

---

## Success Metrics

After implementation, you'll be able to answer:

**User Behavior**
- Which calculator is most popular?
- How long do users spend on calculators?
- What portfolio values do users calculate?
- Which calculators lead to most signups?

**Conversion Optimization**
- Which CTA variant converts best?
- What time-to-click indicates high intent?
- Do higher portfolio values convert better?
- Which brokers do users prefer?

**Revenue Performance**
- Revenue per calculator type
- ROI by traffic source
- Lifetime value by cohort
- Attribution by touchpoint

**A/B Test Insights**
- Featured CTA: +50% CTR (winner!)
- Compact CTA: -20% CTR (loser)
- CTA copy variations: 10-30% difference

---

**Status: READY TO IMPLEMENT**

Full tracking schema defined. Can begin implementation immediately.

Next: Add event tracking to existing components (no build dependency).
