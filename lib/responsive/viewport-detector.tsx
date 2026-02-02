'use client'

import { useState, useEffect, useCallback } from 'react'

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

export function useViewport() {
  const [viewport, setViewport] = useState<{
    width: number
    height: number
    breakpoint: Breakpoint
    isMobile: boolean
    isTablet: boolean
    isDesktop: boolean
    isTouch: boolean
    orientation: 'portrait' | 'landscape'
  }>(() => {
    if (typeof window === 'undefined') {
      return {
        width: 1024,
        height: 768,
        breakpoint: 'lg',
        isMobile: false,
        isTablet: false,
        isDesktop: true,
        isTouch: false,
        orientation: 'landscape',
      }
    }

    const width = window.innerWidth
    const height = window.innerHeight

    return {
      width,
      height,
      breakpoint: getBreakpoint(width),
      isMobile: width < BREAKPOINTS.md,
      isTablet: width >= BREAKPOINTS.md && width < BREAKPOINTS.lg,
      isDesktop: width >= BREAKPOINTS.lg,
      isTouch: 'ontouchstart' in window,
      orientation: width > height ? 'landscape' : 'portrait',
    }
  })

  const handleResize = useCallback(() => {
    const width = window.innerWidth
    const height = window.innerHeight

    setViewport({
      width,
      height,
      breakpoint: getBreakpoint(width),
      isMobile: width < BREAKPOINTS.md,
      isTablet: width >= BREAKPOINTS.md && width < BREAKPOINTS.lg,
      isDesktop: width >= BREAKPOINTS.lg,
      isTouch: 'ontouchstart' in window,
      orientation: width > height ? 'landscape' : 'portrait',
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
    }
  }, [handleResize])

  return viewport
}

function getBreakpoint(width: number): Breakpoint {
  if (width >= BREAKPOINTS['2xl']) return '2xl'
  if (width >= BREAKPOINTS.xl) return 'xl'
  if (width >= BREAKPOINTS.lg) return 'lg'
  if (width >= BREAKPOINTS.md) return 'md'
  if (width >= BREAKPOINTS.sm) return 'sm'
  return 'xs'
}

// Responsive component that only renders on certain breakpoints
export function Responsive({
  children,
  min,
  max,
  only,
}: {
  children: React.ReactNode
  min?: Breakpoint
  max?: Breakpoint
  only?: Breakpoint | Breakpoint[]
}) {
  const { breakpoint } = useViewport()

  const shouldRender = useCallback(() => {
    const currentIndex = Object.keys(BREAKPOINTS).indexOf(breakpoint)

    if (only) {
      const onlyArray = Array.isArray(only) ? only : [only]
      return onlyArray.includes(breakpoint)
    }

    if (min && max) {
      const minIndex = Object.keys(BREAKPOINTS).indexOf(min)
      const maxIndex = Object.keys(BREAKPOINTS).indexOf(max)
      return currentIndex >= minIndex && currentIndex <= maxIndex
    }

    if (min) {
      const minIndex = Object.keys(BREAKPOINTS).indexOf(min)
      return currentIndex >= minIndex
    }

    if (max) {
      const maxIndex = Object.keys(BREAKPOINTS).indexOf(max)
      return currentIndex <= maxIndex
    }

    return true
  }, [breakpoint, min, max, only])

  if (!shouldRender()) return null

  return <>{children}</>
}

// Mobile-only component
export function MobileOnly({ children }: { children: React.ReactNode }) {
  const { isMobile } = useViewport()
  return isMobile ? <>{children}</> : null
}

// Tablet-only component
export function TabletOnly({ children }: { children: React.ReactNode }) {
  const { isTablet } = useViewport()
  return isTablet ? <>{children}</> : null
}

// Desktop-only component
export function DesktopOnly({ children }: { children: React.ReactNode }) {
  const { isDesktop } = useViewport()
  return isDesktop ? <>{children}</> : null
}

// Touch device only
export function TouchOnly({ children }: { children: React.ReactNode }) {
  const { isTouch } = useViewport()
  return isTouch ? <>{children}</> : null
}