"use client"

import { useEffect, useState } from 'react'
import { AdUnit } from './AdUnit'
import type { AdSlot } from '@/types/monetization'

// Default ad slots configuration
const DEFAULT_AD_SLOTS: AdSlot[] = [
  {
    id: 'header-leaderboard',
    type: 'display',
    size: '728x90',
    placement: 'header',
    enabled: true
  },
  {
    id: 'sidebar-rectangle',
    type: 'display',
    size: '300x250',
    placement: 'sidebar',
    enabled: true
  },
  {
    id: 'content-native',
    type: 'native',
    size: 'responsive',
    placement: 'in-content',
    enabled: true
  },
  {
    id: 'below-calc-rectangle',
    type: 'display',
    size: '336x280',
    placement: 'below-calculator',
    enabled: true
  }
]

interface AdManagerProps {
  placement: AdSlot['placement']
  testMode?: boolean
  className?: string
}

export function AdManager({ placement, testMode = false, className }: AdManagerProps) {
  const [adSlots, setAdSlots] = useState<AdSlot[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // In production, fetch ad configuration from API
    setAdSlots(DEFAULT_AD_SLOTS)
  }, [])

  if (!isClient) return null

  const slot = adSlots.find(s => s.placement === placement && s.enabled)
  if (!slot) return null

  // Don't show ads on mobile for certain placements
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  if (isMobile && (placement === 'sidebar' || placement === 'header')) {
    return null
  }

  return <AdUnit slot={slot} testMode={testMode} className={className} />
}

// Specialized ad components for easy placement
export function HeaderAd({ testMode = false }: { testMode?: boolean }) {
  return (
    <div className="container mx-auto px-4 py-2">
      <AdManager placement="header" testMode={testMode} className="mx-auto" />
    </div>
  )
}

export function SidebarAd({ testMode = false }: { testMode?: boolean }) {
  return (
    <div className="sticky top-20">
      <AdManager placement="sidebar" testMode={testMode} />
    </div>
  )
}

export function InContentAd({ testMode = false }: { testMode?: boolean }) {
  return (
    <div className="my-8">
      <AdManager placement="in-content" testMode={testMode} />
    </div>
  )
}

export function BelowCalculatorAd({ testMode = false }: { testMode?: boolean }) {
  return (
    <div className="mt-8 flex justify-center">
      <AdManager placement="below-calculator" testMode={testMode} />
    </div>
  )
}