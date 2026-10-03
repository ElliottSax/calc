'use client'

import type { ReactNode } from 'react'
import { trackAffiliateClick } from '@/lib/analytics/tracking'

interface TrackedAffiliateLinkProps {
  href: string
  brokerSlug: string
  brokerName: string
  placement: string
  children: ReactNode
}

/**
 * Anchor that fires the GA4 `affiliate_click` event (merchant_id = broker slug,
 * placement = page area) before the browser follows the link. Used on the
 * server-rendered broker pages, where an onClick handler is not possible.
 */
export function TrackedAffiliateLink({
  href,
  brokerSlug,
  brokerName,
  placement,
  children,
}: TrackedAffiliateLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={() =>
        trackAffiliateClick({
          merchantId: brokerSlug,
          merchantName: brokerName,
          category: 'broker',
          placement,
        })
      }
    >
      {children}
    </a>
  )
}
