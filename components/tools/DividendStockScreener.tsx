'use client'

import React, { useState, useMemo, useCallback } from 'react'
import { Search, Filter, TrendingUp, DollarSign, Calendar, AlertCircle, ChevronDown, ChevronUp, Info, ExternalLink, Star, Download } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { Checkbox } from '@/components/ui/checkbox'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

// Mock data for dividend stocks
const DIVIDEND_STOCKS = [
  {
    ticker: 'JNJ',
    name: 'Johnson & Johnson',
    sector: 'Healthcare',
    price: 156.23,
    yield: 3.2,
    dividendGrowth5Y: 5.8,
    payoutRatio: 52,
    marketCap: 410000,
    peRatio: 24.5,
    consecutiveYears: 61,
    frequency: 'Quarterly',
    exDividendDate: '2025-02-20',
    aristocrat: true,
    king: true,
    rating: 5,
    description: 'Dividend King with 61 years of consecutive increases'
  },
  {
    ticker: 'KO',
    name: 'Coca-Cola Co',
    sector: 'Consumer Staples',
    price: 61.45,
    yield: 3.1,
    dividendGrowth5Y: 3.5,
    payoutRatio: 75,
    marketCap: 265000,
    peRatio: 26.8,
    consecutiveYears: 61,
    frequency: 'Quarterly',
    exDividendDate: '2025-03-14',
    aristocrat: true,
    king: true,
    rating: 5,
    description: 'Dividend King with stable global brand'
  },
  {
    ticker: 'PG',
    name: 'Procter & Gamble',
    sector: 'Consumer Staples',
    price: 167.89,
    yield: 2.3,
    dividendGrowth5Y: 5.2,
    payoutRatio: 65,
    marketCap: 395000,
    peRatio: 27.2,
    consecutiveYears: 67,
    frequency: 'Quarterly',
    exDividendDate: '2025-01-23',
    aristocrat: true,
    king: true,
    rating: 5,
    description: 'Dividend King with 67 years of increases'
  },
  {
    ticker: 'O',
    name: 'Realty Income',
    sector: 'Real Estate',
    price: 52.34,
    yield: 5.8,
    dividendGrowth5Y: 3.2,
    payoutRatio: 85,
    marketCap: 44000,
    peRatio: 42.3,
    consecutiveYears: 29,
    frequency: 'Monthly',
    exDividendDate: '2025-01-31',
    aristocrat: true,
    king: false,
    rating: 4,
    description: 'The Monthly Dividend Company - REIT'
  },
  {
    ticker: 'ABBV',
    name: 'AbbVie Inc',
    sector: 'Healthcare',
    price: 178.45,
    yield: 3.6,
    dividendGrowth5Y: 8.9,
    payoutRatio: 48,
    marketCap: 315000,
    peRatio: 18.2,
    consecutiveYears: 11,
    frequency: 'Quarterly',
    exDividendDate: '2025-01-14',
    aristocrat: false,
    king: false,
    rating: 4,
    description: 'High yield pharmaceutical giant'
  },
  {
    ticker: 'VZ',
    name: 'Verizon',
    sector: 'Communication',
    price: 40.12,
    yield: 6.7,
    dividendGrowth5Y: 2.1,
    payoutRatio: 51,
    marketCap: 168000,
    peRatio: 8.9,
    consecutiveYears: 19,
    frequency: 'Quarterly',
    exDividendDate: '2025-01-09',
    aristocrat: false,
    king: false,
    rating: 3,
    description: 'High yield telecom with stable cash flow'
  },
  {
    ticker: 'T',
    name: 'AT&T Inc',
    sector: 'Communication',
    price: 22.67,
    yield: 5.4,
    dividendGrowth5Y: -2.1,
    payoutRatio: 45,
    marketCap: 162000,
    peRatio: 7.8,
    consecutiveYears: 1,
    frequency: 'Quarterly',
    exDividendDate: '2025-01-09',
    aristocrat: false,
    king: false,
    rating: 2,
    description: 'Telecom giant - dividend recently reset'
  },
  {
    ticker: 'XOM',
    name: 'Exxon Mobil',
    sector: 'Energy',
    price: 113.45,
    yield: 3.3,
    dividendGrowth5Y: 2.8,
    payoutRatio: 38,
    marketCap: 455000,
    peRatio: 10.2,
    consecutiveYears: 41,
    frequency: 'Quarterly',
    exDividendDate: '2025-02-13',
    aristocrat: true,
    king: false,
    rating: 4,
    description: 'Energy dividend aristocrat'
  },
  {
    ticker: 'MSFT',
    name: 'Microsoft Corp',
    sector: 'Technology',
    price: 415.23,
    yield: 0.7,
    dividendGrowth5Y: 10.2,
    payoutRatio: 28,
    marketCap: 3100000,
    peRatio: 35.6,
    consecutiveYears: 20,
    frequency: 'Quarterly',
    exDividendDate: '2025-02-19',
    aristocrat: false,
    king: false,
    rating: 5,
    description: 'Tech giant with growing dividend'
  },
  {
    ticker: 'AAPL',
    name: 'Apple Inc',
    sector: 'Technology',
    price: 195.67,
    yield: 0.4,
    dividendGrowth5Y: 5.1,
    payoutRatio: 15,
    marketCap: 3000000,
    peRatio: 32.4,
    consecutiveYears: 12,
    frequency: 'Quarterly',
    exDividendDate: '2025-02-09',
    aristocrat: false,
    king: false,
    rating: 4,
    description: 'Tech leader with modest dividend'
  },
  {
    ticker: 'MCD',
    name: 'McDonald\'s Corp',
    sector: 'Consumer Discretionary',
    price: 281.34,
    yield: 2.2,
    dividendGrowth5Y: 7.8,
    payoutRatio: 58,
    marketCap: 202000,
    peRatio: 26.1,
    consecutiveYears: 47,
    frequency: 'Quarterly',
    exDividendDate: '2025-02-28',
    aristocrat: true,
    king: false,
    rating: 5,
    description: 'Dividend Aristocrat - global franchise'
  },
  {
    ticker: 'PEP',
    name: 'PepsiCo Inc',
    sector: 'Consumer Staples',
    price: 163.45,
    yield: 3.0,
    dividendGrowth5Y: 6.5,
    payoutRatio: 68,
    marketCap: 224000,
    peRatio: 24.3,
    consecutiveYears: 51,
    frequency: 'Quarterly',
    exDividendDate: '2025-03-07',
    aristocrat: true,
    king: true,
    rating: 5,
    description: 'Dividend King - beverage & snacks'
  },
  {
    ticker: 'WMT',
    name: 'Walmart Inc',
    sector: 'Consumer Staples',
    price: 89.23,
    yield: 1.0,
    dividendGrowth5Y: 1.9,
    payoutRatio: 35,
    marketCap: 715000,
    peRatio: 42.8,
    consecutiveYears: 50,
    frequency: 'Quarterly',
    exDividendDate: '2025-01-09',
    aristocrat: true,
    king: false,
    rating: 4,
    description: 'Retail giant - Dividend Aristocrat'
  },
  {
    ticker: 'JPM',
    name: 'JPMorgan Chase',
    sector: 'Financial',
    price: 238.45,
    yield: 2.0,
    dividendGrowth5Y: 10.5,
    payoutRatio: 27,
    marketCap: 682000,
    peRatio: 12.8,
    consecutiveYears: 13,
    frequency: 'Quarterly',
    exDividendDate: '2025-01-06',
    aristocrat: false,
    king: false,
    rating: 5,
    description: 'Leading bank with growing dividend'
  },
  {
    ticker: 'CVX',
    name: 'Chevron Corp',
    sector: 'Energy',
    price: 154.67,
    yield: 3.5,
    dividendGrowth5Y: 4.2,
    payoutRatio: 42,
    marketCap: 283000,
    peRatio: 13.5,
    consecutiveYears: 37,
    frequency: 'Quarterly',
    exDividendDate: '2025-02-16',
    aristocrat: true,
    king: false,
    rating: 4,
    description: 'Energy Dividend Aristocrat'
  }
]

export function DividendStockScreener() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sector, setSector] = useState('all')
  const [minYield, setMinYield] = useState([0])
  const [maxYield, setMaxYield] = useState([10])
  const [minGrowth, setMinGrowth] = useState([-5])
  const [payoutFilter, setPayoutFilter] = useState('all')
  const [aristocratOnly, setAristocratOnly] = useState(false)
  const [kingOnly, setKingOnly] = useState(false)
  const [monthlyOnly, setMonthlyOnly] = useState(false)
  const [sortBy, setSortBy] = useState('yield')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [expandedStocks, setExpandedStocks] = useState<Set<string>>(new Set())

  const sectors = [...new Set(DIVIDEND_STOCKS.map(s => s.sector))].sort()

  const filteredStocks = useMemo(() => {
    let filtered = DIVIDEND_STOCKS

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(stock =>
        stock.ticker.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stock.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Sector filter
    if (sector !== 'all') {
      filtered = filtered.filter(stock => stock.sector === sector)
    }

    // Yield filter
    filtered = filtered.filter(stock =>
      stock.yield >= minYield[0] && stock.yield <= maxYield[0]
    )

    // Growth filter
    filtered = filtered.filter(stock => stock.dividendGrowth5Y >= minGrowth[0])

    // Payout ratio filter
    if (payoutFilter !== 'all') {
      if (payoutFilter === 'low') {
        filtered = filtered.filter(stock => stock.payoutRatio < 40)
      } else if (payoutFilter === 'medium') {
        filtered = filtered.filter(stock => stock.payoutRatio >= 40 && stock.payoutRatio <= 70)
      } else if (payoutFilter === 'high') {
        filtered = filtered.filter(stock => stock.payoutRatio > 70)
      }
    }

    // Aristocrat filter
    if (aristocratOnly) {
      filtered = filtered.filter(stock => stock.aristocrat)
    }

    // King filter
    if (kingOnly) {
      filtered = filtered.filter(stock => stock.king)
    }

    // Monthly dividend filter
    if (monthlyOnly) {
      filtered = filtered.filter(stock => stock.frequency === 'Monthly')
    }

    // Sorting
    filtered.sort((a, b) => {
      let aVal: number, bVal: number

      switch (sortBy) {
        case 'yield':
          aVal = a.yield
          bVal = b.yield
          break
        case 'growth':
          aVal = a.dividendGrowth5Y
          bVal = b.dividendGrowth5Y
          break
        case 'payout':
          aVal = a.payoutRatio
          bVal = b.payoutRatio
          break
        case 'marketCap':
          aVal = a.marketCap
          bVal = b.marketCap
          break
        case 'peRatio':
          aVal = a.peRatio
          bVal = b.peRatio
          break
        case 'consecutiveYears':
          aVal = a.consecutiveYears
          bVal = b.consecutiveYears
          break
        case 'rating':
          aVal = a.rating
          bVal = b.rating
          break
        default:
          aVal = a.yield
          bVal = b.yield
      }

      return sortOrder === 'asc' ? aVal - bVal : bVal - aVal
    })

    return filtered
  }, [searchTerm, sector, minYield, maxYield, minGrowth, payoutFilter, aristocratOnly, kingOnly, monthlyOnly, sortBy, sortOrder])

  const toggleExpanded = useCallback((ticker: string) => {
    setExpandedStocks(prev => {
      const newSet = new Set(prev)
      if (newSet.has(ticker)) {
        newSet.delete(ticker)
      } else {
        newSet.add(ticker)
      }
      return newSet
    })
  }, [])

  const handleSort = useCallback((newSortBy: string) => {
    if (sortBy === newSortBy) {
      setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(newSortBy)
      setSortOrder('desc')
    }
  }, [sortBy])

  const exportToCSV = () => {
    const headers = ['Ticker', 'Name', 'Sector', 'Price', 'Yield%', '5Y Growth%', 'Payout Ratio%', 'Market Cap', 'P/E', 'Years']
    const rows = filteredStocks.map(stock => [
      stock.ticker,
      stock.name,
      stock.sector,
      stock.price,
      stock.yield,
      stock.dividendGrowth5Y,
      stock.payoutRatio,
      stock.marketCap,
      stock.peRatio,
      stock.consecutiveYears
    ])

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'dividend-stocks-screener.csv'
    a.click()
  }

  return (
    <div className="space-y-6">
      {/* Header with Export */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Dividend Stock Screener
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Filter and analyze {DIVIDEND_STOCKS.length}+ dividend-paying stocks
          </p>
        </div>
        <Button onClick={exportToCSV} variant="outline" className="gap-2">
          <Download className="w-4 h-4" />
          Export to CSV
        </Button>
      </div>

      {/* Filters Card */}
      <Card className="border-2 border-blue-100 dark:border-blue-900/50">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30">
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-blue-600" />
            Screening Filters
          </CardTitle>
          <CardDescription>
            Use filters to find dividend stocks that match your criteria
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          {/* Search and Basic Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Ticker or company name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Sector</label>
              <Select value={sector} onValueChange={setSector}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sectors</SelectItem>
                  {sectors.map(s => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Payout Ratio</label>
              <Select value={payoutFilter} onValueChange={setPayoutFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ratios</SelectItem>
                  <SelectItem value="low">Low (&lt;40%)</SelectItem>
                  <SelectItem value="medium">Medium (40-70%)</SelectItem>
                  <SelectItem value="high">High (&gt;70%)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Range Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Dividend Yield</label>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {minYield[0]}% - {maxYield[0]}%
                </span>
              </div>
              <div className="space-y-2">
                <Slider
                  value={minYield}
                  onValueChange={setMinYield}
                  min={0}
                  max={10}
                  step={0.1}
                  className="mb-1"
                />
                <Slider
                  value={maxYield}
                  onValueChange={setMaxYield}
                  min={0}
                  max={10}
                  step={0.1}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">5Y Dividend Growth</label>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  Min: {minGrowth[0]}%
                </span>
              </div>
              <Slider
                value={minGrowth}
                onValueChange={setMinGrowth}
                min={-5}
                max={20}
                step={0.5}
              />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="aristocrat"
                checked={aristocratOnly}
                onCheckedChange={(checked) => setAristocratOnly(checked as boolean)}
              />
              <label
                htmlFor="aristocrat"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Dividend Aristocrats Only
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="king"
                checked={kingOnly}
                onCheckedChange={(checked) => setKingOnly(checked as boolean)}
              />
              <label
                htmlFor="king"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Dividend Kings Only
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="monthly"
                checked={monthlyOnly}
                onCheckedChange={(checked) => setMonthlyOnly(checked as boolean)}
              />
              <label
                htmlFor="monthly"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Monthly Dividends Only
              </label>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between pt-4 border-t">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Found <span className="font-bold text-slate-900 dark:text-white">{filteredStocks.length}</span> matching stocks
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchTerm('')
                setSector('all')
                setMinYield([0])
                setMaxYield([10])
                setMinGrowth([-5])
                setPayoutFilter('all')
                setAristocratOnly(false)
                setKingOnly(false)
                setMonthlyOnly(false)
              }}
            >
              Reset Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 dark:bg-slate-800/50 border-b">
                <tr>
                  <th className="text-left p-4">Stock</th>
                  <th
                    className="text-right p-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/50"
                    onClick={() => handleSort('yield')}
                  >
                    <div className="flex items-center justify-end gap-1">
                      Yield
                      {sortBy === 'yield' && (
                        sortOrder === 'desc' ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />
                      )}
                    </div>
                  </th>
                  <th
                    className="text-right p-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/50"
                    onClick={() => handleSort('growth')}
                  >
                    <div className="flex items-center justify-end gap-1">
                      5Y Growth
                      {sortBy === 'growth' && (
                        sortOrder === 'desc' ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />
                      )}
                    </div>
                  </th>
                  <th
                    className="text-right p-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/50"
                    onClick={() => handleSort('payout')}
                  >
                    <div className="flex items-center justify-end gap-1">
                      Payout
                      {sortBy === 'payout' && (
                        sortOrder === 'desc' ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />
                      )}
                    </div>
                  </th>
                  <th
                    className="text-right p-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/50"
                    onClick={() => handleSort('consecutiveYears')}
                  >
                    <div className="flex items-center justify-end gap-1">
                      Years
                      {sortBy === 'consecutiveYears' && (
                        sortOrder === 'desc' ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />
                      )}
                    </div>
                  </th>
                  <th className="text-center p-4">Rating</th>
                  <th className="text-right p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredStocks.map((stock, index) => (
                  <React.Fragment key={stock.ticker}>
                    <tr className={`border-b hover:bg-slate-50 dark:hover:bg-slate-800/30 ${index % 2 === 0 ? '' : 'bg-slate-50/50 dark:bg-slate-900/20'}`}>
                      <td className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-slate-900 dark:text-white">{stock.ticker}</span>
                              {stock.king && (
                                <Badge variant="default" className="bg-gradient-to-r from-yellow-500 to-yellow-600">
                                  King
                                </Badge>
                              )}
                              {!stock.king && stock.aristocrat && (
                                <Badge variant="secondary" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                                  Aristocrat
                                </Badge>
                              )}
                              {stock.frequency === 'Monthly' && (
                                <Badge variant="outline" className="border-green-500 text-green-600">
                                  Monthly
                                </Badge>
                              )}
                            </div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">{stock.name}</span>
                            <span className="text-xs text-slate-500">{stock.sector}</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex flex-col items-end">
                          <span className="font-bold text-green-600">{stock.yield.toFixed(1)}%</span>
                          <span className="text-xs text-slate-500">${stock.price.toFixed(2)}</span>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <span className={`font-medium ${stock.dividendGrowth5Y >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {stock.dividendGrowth5Y > 0 ? '+' : ''}{stock.dividendGrowth5Y.toFixed(1)}%
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex flex-col items-end">
                          <span className={`font-medium ${stock.payoutRatio > 70 ? 'text-orange-600' : stock.payoutRatio < 40 ? 'text-green-600' : 'text-slate-700 dark:text-slate-300'}`}>
                            {stock.payoutRatio}%
                          </span>
                          <span className="text-xs text-slate-500">P/E {stock.peRatio.toFixed(1)}</span>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <span className="font-medium text-blue-600">{stock.consecutiveYears}</span>
                      </td>
                      <td className="p-4">
                        <div className="flex justify-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < stock.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`}
                            />
                          ))}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-end gap-2">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => toggleExpanded(stock.ticker)}
                                >
                                  <Info className="w-4 h-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>View details</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-1"
                            onClick={() => window.open(`https://finance.yahoo.com/quote/${stock.ticker}`, '_blank')}
                          >
                            <ExternalLink className="w-3 h-3" />
                            Research
                          </Button>
                        </div>
                      </td>
                    </tr>
                    {expandedStocks.has(stock.ticker) && (
                      <tr className="bg-blue-50/50 dark:bg-blue-950/20 border-b">
                        <td colSpan={7} className="p-4">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Company Details</p>
                              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{stock.description}</p>
                              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                                Market Cap: ${(stock.marketCap / 1000).toFixed(0)}B
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Dividend Details</p>
                              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                Frequency: {stock.frequency}
                              </p>
                              <p className="text-sm text-slate-600 dark:text-slate-400">
                                Ex-Dividend: {new Date(stock.exDividendDate).toLocaleDateString()}
                              </p>
                              <p className="text-sm text-slate-600 dark:text-slate-400">
                                Annual Dividend: ${(stock.price * stock.yield / 100).toFixed(2)}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Quick Analysis</p>
                              <div className="mt-2 space-y-1">
                                {stock.yield > 4 && (
                                  <Badge variant="outline" className="text-xs">High Yield</Badge>
                                )}
                                {stock.dividendGrowth5Y > 7 && (
                                  <Badge variant="outline" className="text-xs">Fast Grower</Badge>
                                )}
                                {stock.payoutRatio < 50 && (
                                  <Badge variant="outline" className="text-xs">Safe Payout</Badge>
                                )}
                                {stock.consecutiveYears > 25 && (
                                  <Badge variant="outline" className="text-xs">Reliable</Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">Ready to Start Investing?</h3>
              <p className="text-blue-100 mt-1">
                Open a brokerage account and start building your dividend portfolio today
              </p>
            </div>
            <Button size="lg" variant="secondary" className="whitespace-nowrap">
              Compare Brokers →
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}