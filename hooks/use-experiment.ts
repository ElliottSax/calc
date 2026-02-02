import { useState, useEffect } from 'react';
import {
  getVariant,
  trackExperimentExposure,
  trackExperimentConversion,
  type ExperimentVariant,
} from '@/lib/ab-testing/experiments';

/**
 * Hook for using A/B test experiments in components
 *
 * Usage:
 * ```tsx
 * const variant = useExperiment('brokerCTA');
 * return <Button>{variant?.text || 'Open Account'}</Button>
 * ```
 */
export function useExperiment(experimentId: string, userId?: string) {
  const [variant, setVariant] = useState<ExperimentVariant | null>(null);

  useEffect(() => {
    // Get variant for this user
    const selectedVariant = getVariant(experimentId, userId);
    setVariant(selectedVariant);

    // Track exposure
    if (selectedVariant) {
      trackExperimentExposure(experimentId, selectedVariant.id, userId);
    }
  }, [experimentId, userId]);

  /**
   * Track conversion for this experiment
   */
  const trackConversion = (metric?: string, value?: number) => {
    if (variant) {
      trackExperimentConversion(
        experimentId,
        variant.id,
        metric || 'conversion',
        value,
        userId
      );
    }
  };

  return {
    variant,
    trackConversion,
    isControl: variant?.id === 'control',
  };
}

/**
 * Hook for experiments with loading state
 */
export function useExperimentWithLoading(experimentId: string, userId?: string) {
  const [loading, setLoading] = useState(true);
  const experimentData = useExperiment(experimentId, userId);

  useEffect(() => {
    if (experimentData.variant !== null) {
      setLoading(false);
    }
  }, [experimentData.variant]);

  return {
    ...experimentData,
    loading,
  };
}
