"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, TrendingUp, Search, PieChart, BarChart3 } from 'lucide-react'
import { RECOMMENDED_TOOLS } from '@/lib/data/broker-affiliates'
import { trackAffiliateClick } from '@/lib/analytics/tracking'

const categoryIcons = {
  research: Search,
  data: BarChart3,
  portfolio: PieChart,
  analysis: TrendingUp
}

export function RecommendedTools() {
  const handleToolClick = (tool: any) => {
    trackAffiliateClick({
      merchantId: tool.id,
      merchantName: tool.name,
      category: tool.category,
      placement: 'recommended-tools'
    })

    window.open(tool.affiliateUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Tools for Dividend Investors</CardTitle>
        <CardDescription>
          Premium tools and services to enhance your dividend investing strategy
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {RECOMMENDED_TOOLS.map((tool) => {
            const Icon = categoryIcons[tool.category as keyof typeof categoryIcons] || TrendingUp
            
            return (
              <div
                key={tool.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{tool.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {tool.category}
                  </Badge>
                </div>

                <div className="mb-3">
                  <p className="text-sm font-medium mb-2">Key Features:</p>
                  <ul className="grid grid-cols-2 gap-1 text-sm text-gray-600 dark:text-gray-400">
                    {tool.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-1">
                        <span className="text-green-600">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500">
                    *Affiliate link - we may earn a commission
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleToolClick(tool)}
                    className="flex items-center gap-2"
                  >
                    Learn More
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}