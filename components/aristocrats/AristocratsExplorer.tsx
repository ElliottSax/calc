"use client"

import { useState, useEffect } from 'react'
import { AristocratsTable } from './AristocratsTable'
import { StockComparison } from './StockComparison'
import { StockDetails } from './StockDetails'
import { EmailCaptureForm } from '@/components/forms/EmailCaptureForm'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { useWatchlist } from '@/hooks/use-watchlist'
import { Loader2, TrendingUp, RefreshCw } from 'lucide-react'
import type { DividendAristocrat } from '@/types/aristocrats'

export function AristocratsExplorer() {
  const [aristocrats, setAristocrats] = useState<DividendAristocrat[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [compareList, setCompareList] = useState<string[]>([])
  const [selectedStock, setSelectedStock] = useState<string | null>(null)
  const [showDetails, setShowDetails] = useState(false)
  const [showEmailCapture, setShowEmailCapture] = useState(false)
  const { toast } = useToast()
  const { addToWatchlist } = useWatchlist()

  useEffect(() => {
    fetchAristocrats()
    
    // Show email capture after 30 seconds
    const timer = setTimeout(() => {
      setShowEmailCapture(true)
    }, 30000)
    
    return () => clearTimeout(timer)
  }, [])

  const fetchAristocrats = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch('/api/aristocrats')
      if (!response.ok) throw new Error('Failed to fetch data')
      
      const { data, source } = await response.json()
      setAristocrats(data)
      
      if (source === 'fallback') {
        toast({
          title: "Using cached data",
          description: "Live data is temporarily unavailable. Showing cached aristocrats.",
        })
      }
    } catch (err) {
      setError('Failed to load Dividend Aristocrats')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleViewDetails = (symbol: string) => {
    setSelectedStock(symbol)
    setShowDetails(true)
  }

  const handleAddToWatchlist = async (symbol: string) => {
    const stock = aristocrats.find(a => a.symbol === symbol)
    if (stock) {
      await addToWatchlist(stock.symbol, stock.companyName)
    }
  }

  const handleCompare = (symbol: string) => {
    setCompareList(prev => {
      if (prev.includes(symbol)) {
        return prev.filter(s => s !== symbol)
      } else if (prev.length < 3) {
        return [...prev, symbol]
      } else {
        toast({
          title: "Comparison limit",
          description: "You can compare up to 3 stocks at a time.",
        })
        return prev
      }
    })
  }

  const getComparisonStocks = () => {
    return compareList
      .map(symbol => aristocrats.find(a => a.symbol === symbol))
      .filter(Boolean) as DividendAristocrat[]
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (error) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Button onClick={fetchAristocrats} variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          title="Total Aristocrats"
          value={aristocrats.length}
          icon={TrendingUp}
        />
        <StatCard
          title="Average Yield"
          value={`${(aristocrats.reduce((sum, a) => sum + a.currentYield, 0) / aristocrats.length).toFixed(2)}%`}
          icon={TrendingUp}
        />
        <StatCard
          title="Avg 5Y Growth"
          value={`${(aristocrats.reduce((sum, a) => sum + a.dividendGrowthRate5Y, 0) / aristocrats.length).toFixed(2)}%`}
          icon={TrendingUp}
        />
        <StatCard
          title="Sectors"
          value={new Set(aristocrats.map(a => a.sector)).size}
          icon={TrendingUp}
        />
      </div>

      {/* Email capture banner - show after delay */}
      {showEmailCapture && (
        <EmailCaptureForm 
          variant="banner"
          onSuccess={() => setShowEmailCapture(false)}
        />
      )}

      {/* Main table */}
      <Card>
        <CardHeader>
          <CardTitle>All Dividend Aristocrats</CardTitle>
        </CardHeader>
        <CardContent>
          <AristocratsTable
            data={aristocrats}
            onViewDetails={handleViewDetails}
            onAddToWatchlist={handleAddToWatchlist}
            onCompare={handleCompare}
            compareList={compareList}
          />
        </CardContent>
      </Card>

      {/* Comparison section */}
      {compareList.length > 0 && (
        <StockComparison
          stocks={getComparisonStocks()}
          onRemove={(symbol) => handleCompare(symbol)}
          onClear={() => setCompareList([])}
        />
      )}

      {/* Email capture form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* Additional content could go here */}
        </div>
        <div>
          <EmailCaptureForm />
        </div>
      </div>

      {/* Stock details modal */}
      {selectedStock && (
        <StockDetails
          symbol={selectedStock}
          isOpen={showDetails}
          onClose={() => setShowDetails(false)}
          onAddToWatchlist={handleAddToWatchlist}
        />
      )}
    </div>
  )
}

function StatCard({ title, value, icon: Icon }: any) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
          </div>
          <Icon className="h-8 w-8 text-gray-400" />
        </div>
      </CardContent>
    </Card>
  )
}