/**
 * A/B Testing Framework for Conversion Optimization
 *
 * Usage:
 * const variant = useExperiment('brokerCTA');
 * <Button>{variant.text}</Button>
 */

export interface ExperimentVariant {
  id: string;
  weight: number;
  [key: string]: any;
}

export interface Experiment {
  id: string;
  name: string;
  description: string;
  variants: ExperimentVariant[];
  metric: string;
  startDate: Date;
  endDate?: Date;
  active: boolean;
}

/**
 * Active A/B tests for conversion optimization
 */
export const ACTIVE_EXPERIMENTS: Record<string, Experiment> = {
  brokerCTA: {
    id: 'broker-cta-v1',
    name: 'Broker CTA Copy Test',
    description: 'Test different call-to-action button text for broker signups',
    variants: [
      {
        id: 'control',
        text: 'Open Account',
        weight: 0.2,
      },
      {
        id: 'urgency',
        text: 'Start Earning Dividends Today',
        weight: 0.2,
      },
      {
        id: 'bonus',
        text: 'Claim Your Bonus',
        weight: 0.2,
      },
      {
        id: 'social',
        text: 'Join 50K+ Dividend Investors',
        weight: 0.2,
      },
      {
        id: 'value',
        text: 'Build Your Dividend Portfolio',
        weight: 0.2,
      },
    ],
    metric: 'click_through_rate',
    startDate: new Date('2026-02-01'),
    active: true,
  },

  ctaPlacement: {
    id: 'cta-placement-v1',
    name: 'CTA Placement Test',
    description: 'Test different placements for broker recommendations',
    variants: [
      {
        id: 'after-results',
        placement: 'below-calculator',
        weight: 0.33,
      },
      {
        id: 'floating-sidebar',
        placement: 'sticky-sidebar',
        weight: 0.33,
      },
      {
        id: 'inline-results',
        placement: 'within-results',
        weight: 0.34,
      },
    ],
    metric: 'conversion_rate',
    startDate: new Date('2026-02-01'),
    active: true,
  },

  urgencyElements: {
    id: 'urgency-v1',
    name: 'Urgency Element Test',
    description: 'Test impact of urgency/scarcity elements on conversions',
    variants: [
      {
        id: 'control',
        showTimer: false,
        showScarcity: false,
        showBonus: false,
        weight: 0.25,
      },
      {
        id: 'timer-only',
        showTimer: true,
        showScarcity: false,
        showBonus: false,
        timerText: 'Limited time: $75 bonus expires in',
        weight: 0.25,
      },
      {
        id: 'scarcity-only',
        showTimer: false,
        showScarcity: true,
        showBonus: false,
        scarcityText: 'Only 3 spots left at this bonus level',
        weight: 0.25,
      },
      {
        id: 'combined',
        showTimer: true,
        showScarcity: true,
        showBonus: true,
        weight: 0.25,
      },
    ],
    metric: 'signup_rate',
    startDate: new Date('2026-02-01'),
    active: true,
  },

  brokerOrdering: {
    id: 'broker-order-v1',
    name: 'Broker Table Ordering',
    description: 'Test ordering brokers by commission vs rating',
    variants: [
      {
        id: 'by-rating',
        sortBy: 'rating',
        weight: 0.33,
      },
      {
        id: 'by-commission',
        sortBy: 'commission',
        weight: 0.33,
      },
      {
        id: 'by-relevance',
        sortBy: 'relevance', // Based on user's calc inputs
        weight: 0.34,
      },
    ],
    metric: 'revenue_per_user',
    startDate: new Date('2026-02-01'),
    active: true,
  },

  socialProofType: {
    id: 'social-proof-v1',
    name: 'Social Proof Element Test',
    description: 'Test different types of social proof elements',
    variants: [
      {
        id: 'user-count',
        message: '47,283 investors calculated today',
        weight: 0.25,
      },
      {
        id: 'recent-activity',
        message: 'John from NYC just calculated $847K portfolio',
        weight: 0.25,
      },
      {
        id: 'testimonial',
        message: '"This calculator changed my investment strategy" - Sarah M.',
        weight: 0.25,
      },
      {
        id: 'authority',
        message: 'Featured in WSJ, Forbes, and Bloomberg',
        weight: 0.25,
      },
    ],
    metric: 'engagement_rate',
    startDate: new Date('2026-02-01'),
    active: true,
  },
};

/**
 * Get a variant for a user based on their ID
 * Uses consistent hashing to ensure same user always sees same variant
 */
export function getVariant(
  experimentId: string,
  userId?: string
): ExperimentVariant | null {
  const experiment = ACTIVE_EXPERIMENTS[experimentId];

  if (!experiment || !experiment.active) {
    return null;
  }

  // If no userId, use random selection
  if (!userId) {
    return selectRandomVariant(experiment.variants);
  }

  // Use consistent hashing based on userId + experimentId
  const hash = hashString(userId + experimentId);
  const normalizedHash = hash / 0xffffffff; // Normalize to 0-1

  // Select variant based on cumulative weights
  let cumulativeWeight = 0;
  for (const variant of experiment.variants) {
    cumulativeWeight += variant.weight;
    if (normalizedHash < cumulativeWeight) {
      return variant;
    }
  }

  // Fallback to last variant
  return experiment.variants[experiment.variants.length - 1];
}

/**
 * Select random variant based on weights
 */
function selectRandomVariant(variants: ExperimentVariant[]): ExperimentVariant {
  const random = Math.random();
  let cumulativeWeight = 0;

  for (const variant of variants) {
    cumulativeWeight += variant.weight;
    if (random < cumulativeWeight) {
      return variant;
    }
  }

  return variants[variants.length - 1];
}

/**
 * Simple string hash function for consistent variant selection
 */
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

/**
 * Track experiment exposure (user saw this variant)
 */
export function trackExperimentExposure(
  experimentId: string,
  variantId: string,
  userId?: string
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'experiment_exposure', {
      experiment_id: experimentId,
      variant_id: variantId,
      user_id: userId,
    });
  }

  // Also track in analytics
  if (typeof window !== 'undefined' && (window as any).analytics) {
    (window as any).analytics.track('Experiment Exposure', {
      experimentId,
      variantId,
      userId,
    });
  }
}

/**
 * Track experiment conversion (user completed desired action)
 */
export function trackExperimentConversion(
  experimentId: string,
  variantId: string,
  metric: string,
  value?: number,
  userId?: string
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'experiment_conversion', {
      experiment_id: experimentId,
      variant_id: variantId,
      metric,
      value,
      user_id: userId,
    });
  }

  // Also track in analytics
  if (typeof window !== 'undefined' && (window as any).analytics) {
    (window as any).analytics.track('Experiment Conversion', {
      experimentId,
      variantId,
      metric,
      value,
      userId,
    });
  }
}

/**
 * Get experiment results (for admin dashboard)
 */
export interface ExperimentResults {
  experimentId: string;
  variants: {
    id: string;
    exposures: number;
    conversions: number;
    conversionRate: number;
    avgValue: number;
  }[];
  winner?: string;
  confidence?: number;
}

/**
 * Calculate statistical significance between variants
 * Using two-proportion z-test
 */
export function calculateSignificance(
  conversions1: number,
  exposures1: number,
  conversions2: number,
  exposures2: number
): number {
  const p1 = conversions1 / exposures1;
  const p2 = conversions2 / exposures2;
  const pPool = (conversions1 + conversions2) / (exposures1 + exposures2);

  const se = Math.sqrt(pPool * (1 - pPool) * (1 / exposures1 + 1 / exposures2));
  const z = (p1 - p2) / se;

  // Convert z-score to confidence level (simplified)
  const confidence = 1 - Math.exp(-0.717 * z * z - 0.416 * z * z * z * z);

  return Math.min(confidence * 100, 99.9);
}
