'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { analytics } from '@/components/analytics/GoogleAnalytics'

interface Variant {
  id: string
  weight?: number // Distribution weight (0-1)
}

interface Experiment {
  id: string
  name: string
  variants: Variant[]
  defaultVariant: string
}

interface ExperimentResult {
  experimentId: string
  variantId: string
  userId: string
  timestamp: number
}

class ABTestingService {
  private experiments: Map<string, Experiment> = new Map()
  private assignments: Map<string, string> = new Map()
  private userId: string

  constructor() {
    this.userId = this.getOrCreateUserId()
    this.loadAssignments()
  }

  private getOrCreateUserId(): string {
    if (typeof window === 'undefined') return 'server'

    let userId = localStorage.getItem('ab_user_id')
    if (!userId) {
      userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      localStorage.setItem('ab_user_id', userId)
    }
    return userId
  }

  private loadAssignments() {
    if (typeof window === 'undefined') return

    const stored = localStorage.getItem('ab_assignments')
    if (stored) {
      try {
        const assignments = JSON.parse(stored)
        Object.entries(assignments).forEach(([key, value]) => {
          this.assignments.set(key, value as string)
        })
      } catch (e) {
        console.error('Failed to load A/B test assignments')
      }
    }
  }

  private saveAssignments() {
    if (typeof window === 'undefined') return

    const assignments = Object.fromEntries(this.assignments)
    localStorage.setItem('ab_assignments', JSON.stringify(assignments))
  }

  registerExperiment(experiment: Experiment) {
    this.experiments.set(experiment.id, experiment)
  }

  getVariant(experimentId: string): string {
    // Check if already assigned
    const existing = this.assignments.get(experimentId)
    if (existing) return existing

    // Get experiment
    const experiment = this.experiments.get(experimentId)
    if (!experiment) {
      console.warn(`Experiment ${experimentId} not found`)
      return 'control'
    }

    // Assign variant
    const variant = this.assignVariant(experiment)
    this.assignments.set(experimentId, variant)
    this.saveAssignments()

    // Track assignment
    this.trackAssignment(experimentId, variant)

    return variant
  }

  private assignVariant(experiment: Experiment): string {
    const random = Math.random()
    let cumulative = 0

    for (const variant of experiment.variants) {
      const weight = variant.weight || 1 / experiment.variants.length
      cumulative += weight

      if (random < cumulative) {
        return variant.id
      }
    }

    return experiment.defaultVariant
  }

  private trackAssignment(experimentId: string, variantId: string) {
    // Track in Google Analytics
    analytics.event('ab_test_assignment', {
      experiment_id: experimentId,
      variant_id: variantId,
      user_id: this.userId,
    })

    // Send to backend
    if (typeof window !== 'undefined') {
      fetch('/api/ab-test/assignment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          experimentId,
          variantId,
          userId: this.userId,
          timestamp: Date.now(),
        }),
      }).catch(console.error)
    }
  }

  trackConversion(experimentId: string, conversionType: string, value?: number) {
    const variantId = this.assignments.get(experimentId)
    if (!variantId) return

    // Track in Google Analytics
    analytics.event('ab_test_conversion', {
      experiment_id: experimentId,
      variant_id: variantId,
      conversion_type: conversionType,
      value,
      user_id: this.userId,
    })

    // Send to backend
    if (typeof window !== 'undefined') {
      fetch('/api/ab-test/conversion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          experimentId,
          variantId,
          conversionType,
          value,
          userId: this.userId,
          timestamp: Date.now(),
        }),
      }).catch(console.error)
    }
  }
}

// Singleton instance
const abTesting = new ABTestingService()

// React Context
const ABTestingContext = createContext<ABTestingService>(abTesting)

export function ABTestingProvider({ children }: { children: React.ReactNode }) {
  return (
    <ABTestingContext.Provider value={abTesting}>
      {children}
    </ABTestingContext.Provider>
  )
}

// Hook
export function useABTesting() {
  return useContext(ABTestingContext)
}

// Experiment Component
export function Experiment({
  id,
  name,
  variants,
  defaultVariant = 'control',
  children,
}: {
  id: string
  name: string
  variants: Variant[]
  defaultVariant?: string
  children: (variant: string) => React.ReactNode
}) {
  const ab = useABTesting()
  const [variant, setVariant] = useState(defaultVariant)

  useEffect(() => {
    // Register experiment
    ab.registerExperiment({
      id,
      name,
      variants,
      defaultVariant,
    })

    // Get assigned variant
    const assignedVariant = ab.getVariant(id)
    setVariant(assignedVariant)
  }, [id, name, variants, defaultVariant, ab])

  return <>{children(variant)}</>
}

// Split Test Component
export function SplitTest({
  experimentId,
  control,
  variant,
  variantWeight = 0.5,
}: {
  experimentId: string
  control: React.ReactNode
  variant: React.ReactNode
  variantWeight?: number
}) {
  return (
    <Experiment
      id={experimentId}
      name={experimentId}
      variants={[
        { id: 'control', weight: 1 - variantWeight },
        { id: 'variant', weight: variantWeight },
      ]}
      defaultVariant="control"
    >
      {(selectedVariant) => (
        selectedVariant === 'variant' ? variant : control
      )}
    </Experiment>
  )
}

// Multi-variant Test Component
export function MultiVariantTest({
  experimentId,
  variants,
}: {
  experimentId: string
  variants: Record<string, React.ReactNode>
}) {
  const variantKeys = Object.keys(variants)
  const weight = 1 / variantKeys.length

  return (
    <Experiment
      id={experimentId}
      name={experimentId}
      variants={variantKeys.map(id => ({ id, weight }))}
      defaultVariant={variantKeys[0]}
    >
      {(selectedVariant) => variants[selectedVariant] || variants[variantKeys[0]]}
    </Experiment>
  )
}