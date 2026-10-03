'use client'

import { usePathname } from 'next/navigation'
import { InlineSignup } from '@/components/email/InlineSignup'

export function CalculatorSignup() {
  const path = usePathname() || ''
  const slug = path.split('/').filter(Boolean).pop() || 'calculators'
  return (
    <div className="container mx-auto px-4 pb-12 max-w-3xl">
      <InlineSignup variant="compact" source={`calculator-${slug}`} />
    </div>
  )
}
