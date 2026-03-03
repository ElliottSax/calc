"use client"

import { Info } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface AffiliateDisclosureBannerProps {
  className?: string
}

export function AffiliateDisclosureBanner({ className }: AffiliateDisclosureBannerProps) {
  return (
    <div
      className={cn(
        'rounded-lg border bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 p-4',
        className
      )}
    >
      <div className="flex items-start space-x-2">
        <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
        <div className="text-sm">
          <p className="font-medium text-blue-900 dark:text-blue-100">Advertiser Disclosure</p>
          <p className="text-blue-700 dark:text-blue-200 mt-1">
            Some links on this page are affiliate links. We may earn a commission at no extra
            cost to you when you sign up through these links. This does not affect our editorial
            ratings or reviews.
            {' '}
            <Link
              href="/affiliate-disclosure"
              className="underline font-medium hover:text-blue-900 dark:hover:text-blue-100"
            >
              Learn more
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
