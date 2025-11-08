"use client"

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Building2, 
  TrendingUp, 
  DollarSign, 
  Calendar, 
  User, 
  Globe, 
  Users,
  BarChart3,
  LineChart,
  Loader2
} from 'lucide-react'
import { formatPercent, formatCurrency, formatNumber } from '@/lib/utils/calculations'
import type { AristocratDetails } from '@/types/aristocrats'

interface StockDetailsProps {
  symbol: string
  isOpen: boolean
  onClose: () => void
  onAddToWatchlist: (symbol: string, name: string) => void
}

export function StockDetails({ symbol, isOpen, onClose, onAddToWatchlist }: StockDetailsProps) {
  const [details, setDetails] = useState<AristocratDetails | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (isOpen && symbol) {
      fetchStockDetails()
    }
  }, [isOpen, symbol])

  const fetchStockDetails = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch(`/api/aristocrats/${symbol}`)
      if (!response.ok) throw new Error('Failed to fetch stock details')
      
      const { data } = await response.json()
      setDetails(data)
    } catch (err) {
      setError('Failed to load stock details')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        {loading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        )}
        
        {error && (
          <div className="text-center py-12">
            <p className="text-red-600">{error}</p>
          </div>
        )}
        
        {details && (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold">{details.symbol}</span>
                  <span className="text-lg ml-2 text-gray-600">{details.companyName}</span>
                </div>
                <Button onClick={() => onAddToWatchlist(details.symbol, details.companyName)}>
                  Add to Watchlist
                </Button>
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetricCard
                  icon={DollarSign}
                  label="Current Yield"
                  value={formatPercent(details.currentYield)}
                  trend={details.currentYield > 3 ? 'positive' : 'neutral'}
                />
                <MetricCard
                  icon={TrendingUp}
                  label="5Y Growth"
                  value={formatPercent(details.dividendGrowthRate5Y)}
                  trend={details.dividendGrowthRate5Y > 5 ? 'positive' : 'neutral'}
                />
                <MetricCard
                  icon={BarChart3}
                  label="Payout Ratio"
                  value={formatPercent(details.payoutRatio)}
                  trend={details.payoutRatio < 70 ? 'positive' : 'negative'}
                />
                <MetricCard
                  icon={Calendar}
                  label="Years of Growth"
                  value={details.yearsOfDividendGrowth.toString()}
                  trend="positive"
                />
              </div>

              <Tabs defaultValue="overview">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="dividend">Dividend History</TabsTrigger>
                  <TabsTrigger value="financials">Financials</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Company Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-2">Description</p>
                        <p className="text-sm">{details.description}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <InfoItem icon={Building2} label="Sector" value={details.sector} />
                        <InfoItem icon={Building2} label="Industry" value={details.industry} />
                        <InfoItem icon={User} label="CEO" value={details.ceo} />
                        <InfoItem icon={Users} label="Employees" value={formatNumber(details.employees, 0)} />
                        <InfoItem icon={Globe} label="Website" value={
                          <a href={details.website} target="_blank" rel="noopener noreferrer" 
                             className="text-blue-600 hover:underline">
                            Visit
                          </a>
                        } />
                        <InfoItem icon={DollarSign} label="Market Cap" value={`$${(details.marketCap / 1e9).toFixed(1)}B`} />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="dividend" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Dividend Payment History</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <DividendChart history={details.dividendHistory} />
                      
                      <div className="mt-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-600">Annual Dividend</p>
                            <p className="text-xl font-bold">{formatCurrency(details.annualDividend)}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Next Ex-Dividend Date</p>
                            <p className="text-xl font-bold">
                              {details.exDividendDate ? new Date(details.exDividendDate).toLocaleDateString() : 'TBD'}
                            </p>
                          </div>
                        </div>
                        
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-2">Date</th>
                                <th className="text-right py-2">Dividend</th>
                                <th className="text-right py-2">YoY Change</th>
                              </tr>
                            </thead>
                            <tbody>
                              {details.dividendHistory.slice(0, 8).map((item, index) => {
                                const prevDividend = details.dividendHistory[index + 4]?.dividend
                                const yoyChange = prevDividend 
                                  ? ((item.dividend - prevDividend) / prevDividend) * 100 
                                  : 0
                                
                                return (
                                  <tr key={item.date} className="border-b">
                                    <td className="py-2">{new Date(item.date).toLocaleDateString()}</td>
                                    <td className="text-right">${item.dividend.toFixed(3)}</td>
                                    <td className="text-right">
                                      <span className={yoyChange > 0 ? 'text-green-600' : yoyChange < 0 ? 'text-red-600' : ''}>
                                        {yoyChange > 0 ? '+' : ''}{yoyChange.toFixed(1)}%
                                      </span>
                                    </td>
                                  </tr>
                                )
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="financials" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Financial Metrics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <FinancialMetric
                          label="Revenue"
                          value={formatCurrency(details.financialMetrics.revenue)}
                          subLabel={`Growth: ${formatPercent(details.financialMetrics.revenueGrowth)}`}
                        />
                        <FinancialMetric
                          label="Net Income"
                          value={formatCurrency(details.financialMetrics.netIncome)}
                        />
                        <FinancialMetric
                          label="Free Cash Flow"
                          value={formatCurrency(details.financialMetrics.freeCashFlow)}
                        />
                        <FinancialMetric
                          label="Debt to Equity"
                          value={details.financialMetrics.debtToEquity.toFixed(2)}
                          trend={details.financialMetrics.debtToEquity < 1 ? 'positive' : 'negative'}
                        />
                        <FinancialMetric
                          label="Return on Equity"
                          value={formatPercent(details.financialMetrics.returnOnEquity)}
                          trend={details.financialMetrics.returnOnEquity > 15 ? 'positive' : 'neutral'}
                        />
                        <FinancialMetric
                          label="Price"
                          value={formatCurrency(details.price)}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

// Helper Components
function MetricCard({ icon: Icon, label, value, trend }: any) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Icon className="h-4 w-4 text-gray-500" />
          <Badge 
            variant={trend === 'positive' ? 'default' : trend === 'negative' ? 'destructive' : 'secondary'}
            className="h-2 w-2 p-0"
          />
        </div>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-xs text-gray-500">{label}</p>
      </CardContent>
    </Card>
  )
}

function InfoItem({ icon: Icon, label, value }: any) {
  return (
    <div className="flex items-start space-x-2">
      <Icon className="h-4 w-4 text-gray-500 mt-0.5" />
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  )
}

function FinancialMetric({ label, value, subLabel, trend }: any) {
  return (
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className={`text-xl font-bold ${
        trend === 'positive' ? 'text-green-600' : trend === 'negative' ? 'text-red-600' : ''
      }`}>
        {value}
      </p>
      {subLabel && <p className="text-xs text-gray-500">{subLabel}</p>}
    </div>
  )
}

function DividendChart({ history }: { history: any[] }) {
  // Simple bar chart visualization
  const maxDividend = Math.max(...history.map(h => h.dividend))
  
  return (
    <div className="h-48 flex items-end space-x-1">
      {history.slice(0, 20).reverse().map((item, index) => {
        const height = (item.dividend / maxDividend) * 100
        return (
          <div
            key={index}
            className="flex-1 bg-blue-500 hover:bg-blue-600 transition-colors relative group"
            style={{ height: `${height}%` }}
          >
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              ${item.dividend.toFixed(3)}
            </div>
          </div>
        )
      })}
    </div>
  )
}