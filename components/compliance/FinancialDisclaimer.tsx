"use client"

import { AlertTriangle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface FinancialDisclaimerProps {
  variant?: 'compact' | 'full'
  className?: string
}

export function FinancialDisclaimer({ variant = 'compact', className }: FinancialDisclaimerProps) {
  if (variant === 'compact') {
    return (
      <Card className={cn('bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800', className)}>
        <CardContent className="pt-6">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
            <p className="text-xs text-amber-800 dark:text-amber-200">
              For informational purposes only. Not financial advice. Investing involves risk
              including loss of principal. Past performance does not guarantee future results.
              Consult a qualified financial professional.
              {' '}
              <Link
                href="/disclaimer"
                className="underline font-medium hover:text-amber-900 dark:hover:text-amber-100"
              >
                See our full disclaimer
              </Link>.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={cn('bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800', className)}>
      <CardContent className="pt-6">
        <div className="flex items-start space-x-2">
          <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-medium text-amber-900 dark:text-amber-100 mb-2">
              Important Financial Disclaimer
            </p>
            <ul className="text-xs text-amber-800 dark:text-amber-200 space-y-1.5 list-disc list-inside">
              <li>
                All content is for informational and educational purposes only and does not
                constitute financial, investment, tax, or legal advice.
              </li>
              <li>
                Investing in securities involves risk, including the possible loss of all
                principal invested. There is no guarantee of profit.
              </li>
              <li>
                Past performance of any investment, strategy, or index is not indicative of
                future results.
              </li>
              <li>
                Dividend payments are not guaranteed. Companies may reduce or eliminate
                dividends at any time without notice.
              </li>
              <li>
                Calculator results are estimates based on the inputs you provide and
                historical data. Actual results will vary.
              </li>
              <li>
                Always consult with a qualified financial advisor, tax professional, or
                licensed broker before making investment decisions.
              </li>
            </ul>
            <p className="text-xs text-amber-800 dark:text-amber-200 mt-2">
              <Link
                href="/disclaimer"
                className="underline font-medium hover:text-amber-900 dark:hover:text-amber-100"
              >
                Read our full disclaimer
              </Link>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
