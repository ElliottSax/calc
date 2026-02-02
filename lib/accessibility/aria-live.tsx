'use client'

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react'

type AriaLiveLevel = 'polite' | 'assertive' | 'off'

interface AriaLiveContextValue {
  announce: (message: string, level?: AriaLiveLevel) => void
  clear: () => void
}

const AriaLiveContext = createContext<AriaLiveContextValue | undefined>(undefined)

export function AriaLiveProvider({ children }: { children: ReactNode }) {
  const [announcements, setAnnouncements] = useState<{
    polite: string
    assertive: string
  }>({
    polite: '',
    assertive: '',
  })

  const announce = useCallback((message: string, level: AriaLiveLevel = 'polite') => {
    if (level === 'off') return

    setAnnouncements((prev) => ({
      ...prev,
      [level]: message,
    }))

    // Clear the message after announcement
    setTimeout(() => {
      setAnnouncements((prev) => ({
        ...prev,
        [level]: '',
      }))
    }, 1000)
  }, [])

  const clear = useCallback(() => {
    setAnnouncements({
      polite: '',
      assertive: '',
    })
  }, [])

  return (
    <AriaLiveContext.Provider value={{ announce, clear }}>
      {children}

      {/* Screen reader announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcements.polite}
      </div>
      <div className="sr-only" aria-live="assertive" aria-atomic="true">
        {announcements.assertive}
      </div>
    </AriaLiveContext.Provider>
  )
}

export function useAriaLive() {
  const context = useContext(AriaLiveContext)
  if (!context) {
    throw new Error('useAriaLive must be used within AriaLiveProvider')
  }
  return context
}

// Standalone component for announcements
export function AriaAnnouncement({
  message,
  level = 'polite',
  className = 'sr-only',
}: {
  message: string
  level?: AriaLiveLevel
  className?: string
}) {
  if (!message || level === 'off') return null

  return (
    <div
      role={level === 'assertive' ? 'alert' : 'status'}
      aria-live={level}
      aria-atomic="true"
      className={className}
    >
      {message}
    </div>
  )
}

// Loading announcement component
export function LoadingAnnouncement({
  loading,
  loadingMessage = 'Loading, please wait...',
  completeMessage = 'Loading complete',
}: {
  loading: boolean
  loadingMessage?: string
  completeMessage?: string
}) {
  const { announce } = useAriaLive()

  React.useEffect(() => {
    if (loading) {
      announce(loadingMessage, 'polite')
    } else {
      announce(completeMessage, 'polite')
    }
  }, [loading, loadingMessage, completeMessage, announce])

  return null
}

// Form validation announcements
export function ValidationAnnouncement({
  errors,
  successMessage,
}: {
  errors?: string[]
  successMessage?: string
}) {
  const { announce } = useAriaLive()

  React.useEffect(() => {
    if (errors && errors.length > 0) {
      const errorMessage = `Form has ${errors.length} error${
        errors.length > 1 ? 's' : ''
      }: ${errors.join(', ')}`
      announce(errorMessage, 'assertive')
    } else if (successMessage) {
      announce(successMessage, 'polite')
    }
  }, [errors, successMessage, announce])

  return null
}