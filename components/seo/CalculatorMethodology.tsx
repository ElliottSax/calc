"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronDown, ChevronUp, Info } from 'lucide-react'

interface MethodologyProps {
  title: string
  formula: string
  accuracy: string
  dataSourcesHtml: React.ReactNode
  assumptionsHtml: React.ReactNode
  disclaimerHtml?: React.ReactNode
}

export function CalculatorMethodology({
  title,
  formula,
  accuracy,
  dataSourcesHtml,
  assumptionsHtml,
  disclaimerHtml
}: MethodologyProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="border-slate-200 dark:border-slate-700">
      <CardHeader>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between hover:opacity-70 transition-opacity"
        >
          <div className="flex items-center gap-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-600" />
              Calculation Methodology
            </CardTitle>
            <Badge variant="outline" className="text-xs">
              Verified March 3, 2026
            </Badge>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-slate-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-500" />
          )}
        </button>
      </CardHeader>

      {isExpanded && (
        <CardContent className="space-y-6">
          {/* Formula */}
          <div>
            <h3 className="font-semibold text-sm mb-2 text-slate-900 dark:text-white">Formula Used</h3>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto text-slate-700 dark:text-slate-300 break-all">
              {formula}
            </div>
          </div>

          {/* Accuracy */}
          <div>
            <h3 className="font-semibold text-sm mb-2 text-slate-900 dark:text-white">Accuracy Range</h3>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-3 rounded-lg">
              <p className="text-sm text-green-900 dark:text-green-100">
                <strong>{accuracy}</strong>
              </p>
            </div>
          </div>

          {/* Data Sources */}
          <div>
            <h3 className="font-semibold text-sm mb-2 text-slate-900 dark:text-white">Data Sources</h3>
            <div className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
              {dataSourcesHtml}
            </div>
          </div>

          {/* Assumptions */}
          <div>
            <h3 className="font-semibold text-sm mb-2 text-slate-900 dark:text-white">Key Assumptions</h3>
            <div className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
              {assumptionsHtml}
            </div>
          </div>

          {/* Disclaimer */}
          {disclaimerHtml && (
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-3 rounded-lg">
              <p className="text-sm text-amber-900 dark:text-amber-100">
                {disclaimerHtml}
              </p>
            </div>
          )}

          {/* Learn More Link */}
          <div className="text-sm">
            <a
              href="/calculator-methodology"
              className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
            >
              Learn more about our calculation methodology →
            </a>
          </div>
        </CardContent>
      )}
    </Card>
  )
}
