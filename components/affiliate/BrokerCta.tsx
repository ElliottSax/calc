import type { ReactNode } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { buildAffiliateUrl } from '@/lib/affiliate/config'
import { TrackedAffiliateLink } from './TrackedAffiliateLink'

interface BrokerCtaProps {
  brokerId: string
  brokerName: string
  /** The broker's plain homepage. No tracking ID is invented: buildAffiliateUrl
   *  appends one only when NEXT_PUBLIC_AFFILIATE_TRACKING has a real value. */
  baseUrl: string
  placement: string
  children: ReactNode
  size?: 'default' | 'sm' | 'lg'
  variant?: 'default' | 'secondary' | 'outline'
  className?: string
}

/** Button-styled outbound broker link that fires GA4 `affiliate_click`. */
export function BrokerCta({
  brokerId,
  brokerName,
  baseUrl,
  placement,
  children,
  size = 'lg',
  variant = 'default',
  className,
}: BrokerCtaProps) {
  return (
    <TrackedAffiliateLink
      href={buildAffiliateUrl(brokerId, baseUrl)}
      brokerSlug={brokerId}
      brokerName={brokerName}
      placement={placement}
    >
      <Button size={size} variant={variant} className={className}>
        {children}
      </Button>
    </TrackedAffiliateLink>
  )
}

/** One-line affiliate disclosure shown next to broker CTAs. */
export function AffiliateNotice() {
  return (
    <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
      We may earn a commission if you open an account through links on this page, at no extra cost to you.{' '}
      <Link href="/affiliate-disclosure" className="underline">
        Affiliate disclosure
      </Link>
    </p>
  )
}
