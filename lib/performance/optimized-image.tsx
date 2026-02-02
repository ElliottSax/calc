'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  sizes?: string
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  onLoad?: () => void
  fill?: boolean
  style?: React.CSSProperties
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  lazy?: boolean
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  sizes,
  quality = 85,
  placeholder = 'blur',
  blurDataURL,
  onLoad,
  fill = false,
  style,
  objectFit = 'cover',
  lazy = true,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)

  // Generate a simple blur placeholder if not provided
  const defaultBlurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k='

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setError(true)
  }

  if (error) {
    return (
      <div
        className={cn(
          'bg-slate-200 dark:bg-slate-700 flex items-center justify-center',
          className
        )}
        style={{ width, height, ...style }}
      >
        <span className="text-slate-400 text-sm">Failed to load image</span>
      </div>
    )
  }

  const imageProps = fill ? {
    fill: true,
    style: { objectFit: objectFit as any, ...style }
  } : {
    width,
    height,
    style
  }

  return (
    <div className={cn('relative', !isLoaded && 'animate-pulse')}>
      <Image
        src={src}
        alt={alt}
        {...imageProps}
        priority={priority}
        loading={lazy ? 'lazy' : undefined}
        className={cn(
          'transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL || defaultBlurDataURL}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  )
}

// Lazy loading component for non-critical images
export function LazyImage({
  src,
  alt,
  className,
  width,
  height,
  threshold = 0.1,
  rootMargin = '200px',
  ...props
}: OptimizedImageProps & {
  threshold?: number
  rootMargin?: string
}) {
  const [isInView, setIsInView] = useState(false)
  const [ref, setRef] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(ref)

    return () => {
      observer.disconnect()
    }
  }, [ref, threshold, rootMargin])

  return (
    <div ref={setRef} className={className} style={{ width, height }}>
      {isInView ? (
        <OptimizedImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          {...props}
        />
      ) : (
        <div className="w-full h-full bg-slate-200 dark:bg-slate-700 animate-pulse" />
      )}
    </div>
  )
}

// Responsive image with multiple sources
export function ResponsiveImage({
  src,
  alt,
  sources,
  ...props
}: OptimizedImageProps & {
  sources?: Array<{
    media: string
    srcSet: string
  }>
}) {
  return (
    <picture>
      {sources?.map((source, index) => (
        <source key={index} media={source.media} srcSet={source.srcSet} />
      ))}
      <OptimizedImage src={src} alt={alt} {...props} />
    </picture>
  )
}