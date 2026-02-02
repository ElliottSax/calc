'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface FocusTrapProps {
  children: ReactNode
  active?: boolean
  className?: string
  returnFocus?: boolean
  initialFocus?: string
}

export function FocusTrap({
  children,
  active = true,
  className,
  returnFocus = true,
  initialFocus,
}: FocusTrapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const previousFocus = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!active) return

    const container = containerRef.current
    if (!container) return

    // Store the previously focused element
    if (returnFocus) {
      previousFocus.current = document.activeElement as HTMLElement
    }

    // Get all focusable elements
    const getFocusableElements = () => {
      const focusableSelectors = [
        'a[href]',
        'button:not([disabled])',
        'textarea:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
      ]

      return Array.from(
        container.querySelectorAll<HTMLElement>(focusableSelectors.join(','))
      ).filter((el) => {
        // Check if element is visible
        const style = window.getComputedStyle(el)
        return (
          style.display !== 'none' &&
          style.visibility !== 'hidden' &&
          el.offsetParent !== null
        )
      })
    }

    // Set initial focus
    const setInitialFocus = () => {
      const focusableElements = getFocusableElements()

      if (initialFocus) {
        const targetElement = container.querySelector<HTMLElement>(initialFocus)
        if (targetElement) {
          targetElement.focus()
          return
        }
      }

      if (focusableElements.length > 0) {
        focusableElements[0].focus()
      }
    }

    // Handle tab key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      const focusableElements = getFocusableElements()
      if (focusableElements.length === 0) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]
      const activeElement = document.activeElement

      if (e.shiftKey) {
        // Shift + Tab
        if (activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      } else {
        // Tab
        if (activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    // Handle escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && returnFocus && previousFocus.current) {
        previousFocus.current.focus()
      }
    }

    setInitialFocus()
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keydown', handleEscape)

      // Return focus when unmounting
      if (returnFocus && previousFocus.current) {
        previousFocus.current.focus()
      }
    }
  }, [active, initialFocus, returnFocus])

  if (!active) {
    return <>{children}</>
  }

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}