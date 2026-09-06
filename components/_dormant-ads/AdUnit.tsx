"use client"

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import type { AdSlot } from '@/types/monetization'

declare global {
  interface Window {
    adsbygoogle?: any[]
  }
}

interface AdUnitProps {
  slot: AdSlot
  className?: string
  testMode?: boolean
}

export function AdUnit({ slot, className, testMode = false }: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!slot.enabled || isLoaded || error) return

    const loadAd = () => {
      try {
        // In production, this would be your actual AdSense client ID
        const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || 'ca-pub-XXXXXXXXXXXXXX'
        const slotId = slot.id

        if (testMode || !window.adsbygoogle) {
          // Test mode - show placeholder
          setIsLoaded(true)
          return
        }

        // Push ad to adsbygoogle array
        (window.adsbygoogle = window.adsbygoogle || []).push({})
        setIsLoaded(true)

        // Track ad impression
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'ad_impression', {
            ad_slot: slot.id,
            ad_placement: slot.placement
          })
        }
      } catch (err) {
        console.error('Error loading ad:', err)
        setError(true)
      }
    }

    // Delay ad loading for better performance
    const timer = setTimeout(loadAd, 1000)
    return () => clearTimeout(timer)
  }, [slot, isLoaded, error, testMode])

  if (!slot.enabled || error) return null

  const adSizes = getAdDimensions(slot.size)
  const isResponsive = slot.size === 'responsive'

  return (
    <div 
      className={cn(
        'ad-unit-container',
        `ad-${slot.placement}`,
        className
      )}
      ref={adRef}
    >
      {testMode ? (
        <div 
          className={cn(
            'bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600',
            'flex items-center justify-center text-gray-500',
            isResponsive ? 'w-full h-[250px]' : ''
          )}
          style={!isResponsive ? { width: adSizes.width, height: adSizes.height } : {}}
        >
          <div className="text-center">
            <p className="text-sm font-medium">Ad Space</p>
            <p className="text-xs">{slot.size} - {slot.placement}</p>
          </div>
        </div>
      ) : (
        <ins
          className="adsbygoogle"
          style={{
            display: isResponsive ? 'block' : 'inline-block',
            width: isResponsive ? '100%' : adSizes.width,
            height: isResponsive ? '250px' : adSizes.height
          }}
          data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT}
          data-ad-slot={slot.id}
          data-ad-format={isResponsive ? 'auto' : undefined}
          data-full-width-responsive={isResponsive ? 'true' : undefined}
        />
      )}
    </div>
  )
}

function getAdDimensions(size: string): { width: number; height: number } {
  const dimensions: Record<string, { width: number; height: number }> = {
    '728x90': { width: 728, height: 90 },
    '300x250': { width: 300, height: 250 },
    '336x280': { width: 336, height: 280 },
    '300x600': { width: 300, height: 600 },
    '320x50': { width: 320, height: 50 },
  }
  
  return dimensions[size] || { width: 300, height: 250 }
}