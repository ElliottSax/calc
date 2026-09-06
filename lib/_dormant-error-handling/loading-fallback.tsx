'use client'

import React from 'react'
import { Loader2 } from 'lucide-react'

interface LoadingFallbackProps {
  message?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  fullScreen?: boolean
  className?: string
}

export function LoadingFallback({
  message = 'Loading...',
  size = 'md',
  fullScreen = false,
  className = '',
}: LoadingFallbackProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  }

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  }

  const content = (
    <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600 dark:text-blue-400`} />
      {message && (
        <p className={`${textSizeClasses[size]} text-slate-600 dark:text-slate-400 animate-pulse`}>
          {message}
        </p>
      )}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
        {content}
      </div>
    )
  }

  return content
}

// Skeleton loader for content
interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular'
  width?: string | number
  height?: string | number
  animation?: 'pulse' | 'wave' | 'none'
}

export function Skeleton({
  className = '',
  variant = 'text',
  width,
  height,
  animation = 'pulse',
}: SkeletonProps) {
  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  }

  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'animate-shimmer',
    none: '',
  }

  const style: React.CSSProperties = {
    width: width || (variant === 'text' ? '100%' : undefined),
    height: height || (variant === 'text' ? '1.2em' : undefined),
  }

  return (
    <div
      className={`bg-slate-200 dark:bg-slate-700 ${variantClasses[variant]} ${animationClasses[animation]} ${className}`}
      style={style}
    />
  )
}

// Card skeleton
export function CardSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`p-6 rounded-xl border bg-white dark:bg-slate-900 ${className}`}>
      <div className="space-y-4">
        <Skeleton variant="rectangular" height={20} width="60%" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" width="80%" />
        <div className="flex gap-2 pt-2">
          <Skeleton variant="rectangular" height={32} width={80} />
          <Skeleton variant="rectangular" height={32} width={80} />
        </div>
      </div>
    </div>
  )
}

// Table skeleton
export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="w-full">
      <div className="border rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-slate-50 dark:bg-slate-800 p-4 border-b">
          <div className="flex gap-4">
            <Skeleton width="30%" height={20} />
            <Skeleton width="25%" height={20} />
            <Skeleton width="25%" height={20} />
            <Skeleton width="20%" height={20} />
          </div>
        </div>
        {/* Rows */}
        {Array.from({ length: rows }).map((_, index) => (
          <div key={index} className="p-4 border-b last:border-b-0">
            <div className="flex gap-4">
              <Skeleton width="30%" height={16} />
              <Skeleton width="25%" height={16} />
              <Skeleton width="25%" height={16} />
              <Skeleton width="20%" height={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Chart skeleton
export function ChartSkeleton({ height = 300 }: { height?: number }) {
  return (
    <div className="w-full" style={{ height }}>
      <div className="h-full bg-slate-100 dark:bg-slate-800 rounded-lg p-4 flex items-end justify-between gap-2">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-t animate-pulse"
            style={{
              height: `${Math.random() * 80 + 20}%`,
              animationDelay: `${index * 100}ms`,
            }}
          />
        ))}
      </div>
    </div>
  )
}