import { Shield, Lock, Award, Star, CheckCircle2 } from 'lucide-react'

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
        <span className="text-sm font-medium">Expert Verified</span>
      </div>

      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
        <Star className="h-5 w-5 text-yellow-500" />
        <span className="text-sm font-medium">4.8/5 Rating</span>
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
