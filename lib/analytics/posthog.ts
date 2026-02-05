// PostHog Analytics Configuration
// Install: npm install posthog-js

import posthog from 'posthog-js';

export const initPostHog = () => {
  if (typeof window !== 'undefined') {
    // Only initialize in production or when explicitly enabled
    const isProduction = process.env.NODE_ENV === 'production';
    const enableAnalytics = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true';

    if (isProduction || enableAnalytics) {
      posthog.init(
        process.env.NEXT_PUBLIC_POSTHOG_KEY || 'phc_placeholder_key_replace_me',
        {
          api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
          loaded: (posthog) => {
            if (process.env.NODE_ENV === 'development') console.log('PostHog loaded');
          },
          capture_pageview: true, // Auto-capture page views
          capture_pageleave: true, // Track when users leave
          autocapture: false, // Disable automatic event capture (we'll be explicit)
          session_recording: {
            recordCrossOriginIframes: false,
          },
        }
      );
    }
  }
};

// Track affiliate clicks
export const trackAffiliateClick = (data: {
  merchantId: string;
  merchantName: string;
  category: string;
  placement: string;
  commission?: number;
}) => {
  if (typeof window !== 'undefined' && posthog) {
    posthog.capture('affiliate_click', {
      merchant_id: data.merchantId,
      merchant_name: data.merchantName,
      category: data.category,
      placement: data.placement,
      commission: data.commission,
      timestamp: new Date().toISOString(),
    });
  }
};

// Track calculator usage
export const trackCalculatorUsage = (data: {
  calculatorType: string;
  initialInvestment?: number;
  monthlyContribution?: number;
  years?: number;
  ticker?: string;
}) => {
  if (typeof window !== 'undefined' && posthog) {
    posthog.capture('calculator_usage', {
      calculator_type: data.calculatorType,
      initial_investment: data.initialInvestment,
      monthly_contribution: data.monthlyContribution,
      years: data.years,
      ticker: data.ticker,
      timestamp: new Date().toISOString(),
    });
  }
};

// Track conversions
export const trackConversion = (data: {
  conversionType: string;
  value?: number;
  merchantId?: string;
  metadata?: Record<string, any>;
}) => {
  if (typeof window !== 'undefined' && posthog) {
    posthog.capture('conversion', {
      conversion_type: data.conversionType,
      value: data.value,
      merchant_id: data.merchantId,
      ...data.metadata,
      timestamp: new Date().toISOString(),
    });
  }
};

// Track email signups
export const trackEmailSignup = (data: {
  source: string;
  email?: string; // Only track if user consents
}) => {
  if (typeof window !== 'undefined' && posthog) {
    posthog.capture('email_signup', {
      source: data.source,
      timestamp: new Date().toISOString(),
    });

    // Identify user for cohort analysis (if email provided)
    if (data.email) {
      posthog.identify(data.email, {
        signup_source: data.source,
      });
    }
  }
};

// Track social shares
export const trackSocialShare = (data: {
  platform: string;
  content: string;
  url: string;
}) => {
  if (typeof window !== 'undefined' && posthog) {
    posthog.capture('social_share', {
      platform: data.platform,
      content: data.content,
      url: data.url,
      timestamp: new Date().toISOString(),
    });
  }
};

// Track experiments (for A/B testing)
export const trackExperiment = (data: {
  experimentId: string;
  variantId: string;
  event: 'exposure' | 'conversion';
  value?: number;
}) => {
  if (typeof window !== 'undefined' && posthog) {
    posthog.capture(`experiment_${data.event}`, {
      experiment_id: data.experimentId,
      variant_id: data.variantId,
      value: data.value,
      timestamp: new Date().toISOString(),
    });
  }
};

// Set user properties
export const setUserProperties = (properties: Record<string, any>) => {
  if (typeof window !== 'undefined' && posthog) {
    posthog.people.set(properties);
  }
};

// Track page views manually (if needed)
export const trackPageView = (pagePath?: string) => {
  if (typeof window !== 'undefined' && posthog) {
    posthog.capture('$pageview', {
      $current_url: pagePath || window.location.href,
    });
  }
};

export default posthog;
