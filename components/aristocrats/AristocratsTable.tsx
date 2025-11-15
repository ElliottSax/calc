"use client"

import { useState, useMemo, useEffect } from 'react'
import { ChevronUp, ChevronDown, Search, Filter, Eye, Plus } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useToast } from '@/hooks/use-toast'
import { formatPercent, formatCurrency } from '@/lib/utils/calculations'
import type { DividendAristocrat, AristocratFilter } from '@/types/aristocrats'

interface AristocratsTableProps {
  data: DividendAristocrat[]
  onViewDetails: (symbol: string) => void
  onAddToWatchlist: (symbol: string) => void
  onCompare: (symbol: string) => void
  compareList: string[]
}

type SortKey = keyof DividendAristocrat
type SortDirection = 'asc' | 'desc'

export function AristocratsTable({
  data,
  onViewDetails,
  onAddToWatchlist,
  onCompare,
  compareList
}: AristocratsTableProps) {
  const { toast } = useToast()
  const [searchTerm, setSearchTerm] = useState('')
  const [sortKey, setSortKey] = useState<SortKey>('companyName')
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc')
  const [filters, setFilters] = useState<AristocratFilter>({
    sectors: [],
    minYield: 0,
    maxYield: 10,
    minGrowthRate: 0,
    maxGrowthRate: 20,
    minYearsGrowth: 25
  })
  const [showFilters, setShowFilters] = useState(false)

  // Get unique sectors from data
  const sectors = useMemo(() => {
    return Array.from(new Set(data.map(item => item.sector))).sort()
  }, [data])

  // Filter and sort data
  const processedData = useMemo(() => {
    const filtered = data.filter(item => {
      // Search filter
      const matchesSearch = searchTerm === '' || 
        item.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.symbol.toLowerCase().includes(searchTerm.toLowerCase())

      // Sector filter
      const matchesSector = filters.sectors.length === 0 ||
        filters.sectors.includes(item.sector)

      // Yield filter
      const matchesYield = item.currentYield >= filters.minYield &&
        item.currentYield <= filters.maxYield

      // Growth rate filter
      const matchesGrowth = item.dividendGrowthRate5Y >= filters.minGrowthRate &&
        item.dividendGrowthRate5Y <= filters.maxGrowthRate

      // Years of growth filter
      const matchesYears = item.yearsOfDividendGrowth >= filters.minYearsGrowth

      return matchesSearch && matchesSector && matchesYield && matchesGrowth && matchesYears
    })

    // Sort data
    filtered.sort((a, b) => {
      const aValue = a[sortKey]
      const bValue = b[sortKey]

      if (aValue === null || aValue === undefined) return 1
      if (bValue === null || bValue === undefined) return -1

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue)
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' 
          ? aValue - bValue
          : bValue - aValue
      }

      return 0
    })

    return filtered
  }, [data, searchTerm, sortKey, sortDirection, filters])

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortDirection('asc')
    }
  }

  const handleAddToWatchlist = (symbol: string) => {
    onAddToWatchlist(symbol)
    toast({
      title: "Added to Watchlist",
      description: `${symbol} has been added to your watchlist.`
    })
  }

  const getSectorColor = (sector: string): string => {
    const colors: Record<string, string> = {
      'Healthcare': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      'Consumer Defensive': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'Industrials': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
      'Real Estate': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'Financials': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'Technology': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
    }
    return colors[sector] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
  }

  return (
    <div className="space-y-4">
      {/* Search and Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search by company or ticker..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Filters
          {Object.values(filters).some(v => 
            (Array.isArray(v) && v.length > 0) || 
            (typeof v === 'number' && v > 0)
          ) && (
            <Badge variant="secondary" className="ml-1">Active</Badge>
          )}
        </Button>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Sector Filter */}
              <div>
                <label className="text-sm font-medium mb-2 block">Sectors</label>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {sectors.map(sector => (
                    <label key={sector} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={filters.sectors.includes(sector)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters(prev => ({
                              ...prev,
                              sectors: [...prev.sectors, sector]
                            }))
                          } else {
                            setFilters(prev => ({
                              ...prev,
                              sectors: prev.sectors.filter(s => s !== sector)
                            }))
                          }
                        }}
                        className="rounded"
                      />
                      <span className="text-sm">{sector}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Yield Range Filter */}
              <div>
                <label className="text-sm font-medium mb-2 block">Yield Range (%)</label>
                <div className="flex items-center space-x-2">
                  <Input
                    type="number"
                    value={filters.minYield}
                    onChange={(e) => setFilters(prev => ({ ...prev, minYield: parseFloat(e.target.value) || 0 }))}
                    className="w-20"
                    step="0.1"
                    min="0"
                  />
                  <span>to</span>
                  <Input
                    type="number"
                    value={filters.maxYield}
                    onChange={(e) => setFilters(prev => ({ ...prev, maxYield: parseFloat(e.target.value) || 10 }))}
                    className="w-20"
                    step="0.1"
                    min="0"
                  />
                </div>
              </div>

              {/* Growth Rate Filter */}
              <div>
                <label className="text-sm font-medium mb-2 block">5Y Growth Rate (%)</label>
                <div className="flex items-center space-x-2">
                  <Input
                    type="number"
                    value={filters.minGrowthRate}
                    onChange={(e) => setFilters(prev => ({ ...prev, minGrowthRate: parseFloat(e.target.value) || 0 }))}
                    className="w-20"
                    step="0.1"
                    min="0"
                  />
                  <span>to</span>
                  <Input
                    type="number"
                    value={filters.maxGrowthRate}
                    onChange={(e) => setFilters(prev => ({ ...prev, maxGrowthRate: parseFloat(e.target.value) || 20 }))}
                    className="w-20"
                    step="0.1"
                    min="0"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <Button
                variant="ghost"
                onClick={() => setFilters({
                  sectors: [],
                  minYield: 0,
                  maxYield: 10,
                  minGrowthRate: 0,
                  maxGrowthRate: 20,
                  minYearsGrowth: 25
                })}
              >
                Clear Filters
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Results Summary */}
      <div className="text-sm text-gray-600 dark:text-gray-400">
        Showing {processedData.length} of {data.length} aristocrats
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4">
                <button
                  className="flex items-center space-x-1 font-medium hover:text-blue-600"
                  onClick={() => handleSort('companyName')}
                >
                  <span>Company</span>
                  {sortKey === 'companyName' && (
                    sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                  )}
                </button>
              </th>
              <th className="text-left py-3 px-4">Sector</th>
              <th className="text-right py-3 px-4">
                <button
                  className="flex items-center space-x-1 font-medium hover:text-blue-600 ml-auto"
                  onClick={() => handleSort('currentYield')}
                >
                  <span>Yield</span>
                  {sortKey === 'currentYield' && (
                    sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                  )}
                </button>
              </th>
              <th className="text-right py-3 px-4">
                <button
                  className="flex items-center space-x-1 font-medium hover:text-blue-600 ml-auto"
                  onClick={() => handleSort('dividendGrowthRate5Y')}
                >
                  <span>5Y Growth</span>
                  {sortKey === 'dividendGrowthRate5Y' && (
                    sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                  )}
                </button>
              </th>
              <th className="text-right py-3 px-4">
                <button
                  className="flex items-center space-x-1 font-medium hover:text-blue-600 ml-auto"
                  onClick={() => handleSort('payoutRatio')}
                >
                  <span>Payout %</span>
                  {sortKey === 'payoutRatio' && (
                    sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                  )}
                </button>
              </th>
              <th className="text-right py-3 px-4">
                <button
                  className="flex items-center space-x-1 font-medium hover:text-blue-600 ml-auto"
                  onClick={() => handleSort('yearsOfDividendGrowth')}
                >
                  <span>Years</span>
                  {sortKey === 'yearsOfDividendGrowth' && (
                    sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                  )}
                </button>
              </th>
              <th className="text-center py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {processedData.map((stock, index) => (
              <tr 
                key={stock.symbol}
                className={`border-b hover:bg-gray-50 dark:hover:bg-gray-800 ${
                  compareList.includes(stock.symbol) ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                }`}
              >
                <td className="py-3 px-4">
                  <div>
                    <div className="font-medium">{stock.symbol}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stock.companyName}</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <Badge className={getSectorColor(stock.sector)} variant="secondary">
                    {stock.sector}
                  </Badge>
                </td>
                <td className="text-right py-3 px-4 font-medium">
                  {formatPercent(stock.currentYield)}
                </td>
                <td className="text-right py-3 px-4">
                  <span className={stock.dividendGrowthRate5Y > 5 ? 'text-green-600' : ''}>
                    {formatPercent(stock.dividendGrowthRate5Y)}
                  </span>
                </td>
                <td className="text-right py-3 px-4">
                  <span className={stock.payoutRatio > 80 ? 'text-orange-600' : ''}>
                    {formatPercent(stock.payoutRatio)}
                  </span>
                </td>
                <td className="text-right py-3 px-4">
                  {stock.yearsOfDividendGrowth}
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center justify-center space-x-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onViewDetails(stock.symbol)}
                      title="View Details"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleAddToWatchlist(stock.symbol)}
                      title="Add to Watchlist"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={compareList.includes(stock.symbol) ? "default" : "ghost"}
                      size="sm"
                      onClick={() => onCompare(stock.symbol)}
                      title="Compare"
                      disabled={!compareList.includes(stock.symbol) && compareList.length >= 3}
                    >
                      Compare
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {processedData.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No aristocrats match your search criteria.
        </div>
      )}
    </div>
  )
}