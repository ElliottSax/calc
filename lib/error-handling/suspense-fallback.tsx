'use client'

import React, { Suspense, ComponentType } from 'react'
import { LoadingFallback, CardSkeleton, TableSkeleton, ChartSkeleton } from './loading-fallback'

interface WithSuspenseProps {
  fallback?: React.ReactNode
  fallbackType?: 'default' | 'card' | 'table' | 'chart' | 'custom'
  fallbackProps?: any
}

// HOC to wrap components with Suspense
export function withSuspense<P extends object>(
  Component: ComponentType<P>,
  options: WithSuspenseProps = {}
) {
  const {
    fallback,
    fallbackType = 'default',
    fallbackProps = {},
  } = options

  const getFallback = () => {
    if (fallback) return fallback

    switch (fallbackType) {
      case 'card':
        return <CardSkeleton {...fallbackProps} />
      case 'table':
        return <TableSkeleton {...fallbackProps} />
      case 'chart':
        return <ChartSkeleton {...fallbackProps} />
      case 'custom':
        return fallbackProps.component || <LoadingFallback {...fallbackProps} />
      default:
        return <LoadingFallback {...fallbackProps} />
    }
  }

  return function WithSuspenseComponent(props: P) {
    return (
      <Suspense fallback={getFallback()}>
        <Component {...props} />
      </Suspense>
    )
  }
}

// Lazy load with retry logic
export function lazyWithRetry<T extends ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>
): React.LazyExoticComponent<T> {
  return React.lazy(async () => {
    const MAX_RETRIES = 3
    const RETRY_DELAY = 1000

    for (let i = 0; i < MAX_RETRIES; i++) {
      try {
        return await componentImport()
      } catch (error) {
        if (i === MAX_RETRIES - 1) {
          // Last attempt failed
          console.error('Failed to load component after retries:', error)
          throw error
        }

        // Wait before retrying
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * (i + 1)))

        // Clear module cache and retry
        if (typeof window !== 'undefined' && 'location' in window) {
          // Force refresh on final retry
          if (i === MAX_RETRIES - 2) {
            window.location.reload()
          }
        }
      }
    }

    throw new Error('Component failed to load')
  })
}

// Suspense wrapper component
interface SuspenseWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  fallbackType?: 'default' | 'card' | 'table' | 'chart'
  message?: string
  fullScreen?: boolean
}

export function SuspenseWrapper({
  children,
  fallback,
  fallbackType = 'default',
  message = 'Loading...',
  fullScreen = false,
}: SuspenseWrapperProps) {
  const getFallback = () => {
    if (fallback) return fallback

    switch (fallbackType) {
      case 'card':
        return <CardSkeleton />
      case 'table':
        return <TableSkeleton />
      case 'chart':
        return <ChartSkeleton />
      default:
        return <LoadingFallback message={message} fullScreen={fullScreen} />
    }
  }

  return <Suspense fallback={getFallback()}>{children}</Suspense>
}

// Async component wrapper for server components
export function AsyncBoundary({
  children,
  fallback,
  errorFallback,
}: {
  children: React.ReactNode
  fallback?: React.ReactNode
  errorFallback?: React.ReactNode
}) {
  return (
    <ErrorBoundaryWrapper fallback={errorFallback}>
      <Suspense fallback={fallback || <LoadingFallback />}>
        {children}
      </Suspense>
    </ErrorBoundaryWrapper>
  )
}

// Simple error boundary for async components
class ErrorBoundaryWrapper extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="p-4 text-center">
            <p className="text-red-600">Something went wrong loading this content.</p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="mt-2 text-blue-600 hover:text-blue-700 underline"
            >
              Try again
            </button>
          </div>
        )
      )
    }

    return this.props.children
  }
}