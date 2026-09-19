import { Shield, Lock, Award, CheckCircle2 } from 'lucide-react'

/**
 * Every badge here must be a claim this site can actually back.
 *
 * A "4.8/5 Rating" badge used to sit in this row. It was invented -- this site
 * collects no reviews and has no rating to report -- and it rendered live on
 * every page carrying TrustBadges, including the broker review pages that also
 * carry monetized CTAs. Removed 2026-09-19.
 *
 * This is the same fabricated-social-proof pattern already stripped from
 * app/layout.tsx's JSON-LD (an invented aggregateRating plus two fake Review
 * entries, commit 6ea7aaf) and recorded in components/layout/Footer.tsx, where
 * a sibling "4.9/5 Rating" badge was removed for exactly this reason. This
 * occurrence survived both passes.
 *
 * The remaining badges are verifiable: the site is served over TLS, it stores
 * no visitor input, the calculators disclose their assumptions, and they are
 * free. Do not add a rating, review count, user total or "trusted by N
 * investors" badge here without a real source behind it.
 */
export function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 py-6 border-t border-b my-8">
      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
        <Shield className="h-5 w-5 text-green-600" />
        <span className="text-sm font-medium">SSL Secured</span>
      </div>

      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
        <Lock className="h-5 w-5 text-blue-600" />
        <span className="text-sm font-medium">Privacy Protected</span>
      </div>

      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
        <Award className="h-5 w-5 text-purple-600" />
        <span className="text-sm font-medium">Assumptions Shown</span>
      </div>

      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
        <CheckCircle2 className="h-5 w-5 text-green-600" />
        <span className="text-sm font-medium">100% Free</span>
      </div>
    </div>
  )
}

export function CompactTrustBadges() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 py-3 text-sm text-gray-600 dark:text-gray-400">
      <div className="flex items-center gap-1">
        <Shield className="h-4 w-4 text-green-600" />
        <span>Secure</span>
      </div>
      <div className="flex items-center gap-1">
        <Lock className="h-4 w-4 text-blue-600" />
        <span>Private</span>
      </div>
      <div className="flex items-center gap-1">
        <CheckCircle2 className="h-4 w-4 text-green-600" />
        <span>Free Forever</span>
      </div>
    </div>
  )
}
