"use client"


import Link from 'next/link'
import { useState, useMemo } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'
import {
  TrendingUp,
  Award,
  CheckCircle2,
  Target,
  BarChart3,
  ArrowRight,
  Shield,
  Calendar,
  DollarSign,
  ChevronUp,
  ChevronDown,
  ArrowUpDown
} from 'lucide-react'

// All 68 Dividend Aristocrats with complete data
const DIVIDEND_ARISTOCRATS = [
  // Consumer Staples (13)
  { ticker: 'PG', name: 'Procter & Gamble', sector: 'Consumer Staples', yield: 2.4, streak: 68, founded: 1837 },
  { ticker: 'KO', name: 'Coca-Cola', sector: 'Consumer Staples', yield: 3.0, streak: 62, founded: 1886 },
  { ticker: 'PEP', name: 'PepsiCo', sector: 'Consumer Staples', yield: 2.8, streak: 52, founded: 1898 },
  { ticker: 'WMT', name: 'Walmart', sector: 'Consumer Staples', yield: 1.4, streak: 51, founded: 1962 },
  { ticker: 'TGT', name: 'Target', sector: 'Consumer Staples', yield: 2.9, streak: 57, founded: 1902 },
  { ticker: 'CL', name: 'Colgate-Palmolive', sector: 'Consumer Staples', yield: 2.3, streak: 62, founded: 1806 },
  { ticker: 'KMB', name: 'Kimberly-Clark', sector: 'Consumer Staples', yield: 3.4, streak: 52, founded: 1872 },
  { ticker: 'SYY', name: 'Sysco', sector: 'Consumer Staples', yield: 2.5, streak: 54, founded: 1969 },
  { ticker: 'ADM', name: 'Archer-Daniels-Midland', sector: 'Consumer Staples', yield: 3.2, streak: 51, founded: 1902 },
  { ticker: 'MKC', name: 'McCormick & Company', sector: 'Consumer Staples', yield: 2.4, streak: 38, founded: 1889 },
  { ticker: 'HRL', name: 'Hormel Foods', sector: 'Consumer Staples', yield: 3.1, streak: 58, founded: 1891 },
  { ticker: 'CLX', name: 'Clorox', sector: 'Consumer Staples', yield: 3.2, streak: 47, founded: 1913 },
  { ticker: 'GPC', name: 'Genuine Parts', sector: 'Consumer Staples', yield: 2.8, streak: 68, founded: 1928 },

  // Industrials (16)
  { ticker: 'MMM', name: '3M Company', sector: 'Industrials', yield: 5.8, streak: 66, founded: 1902 },
  { ticker: 'CAT', name: 'Caterpillar', sector: 'Industrials', yield: 2.1, streak: 30, founded: 1925 },
  { ticker: 'ITW', name: 'Illinois Tool Works', sector: 'Industrials', yield: 2.3, streak: 62, founded: 1912 },
  { ticker: 'EMR', name: 'Emerson Electric', sector: 'Industrials', yield: 2.0, streak: 68, founded: 1890 },
  { ticker: 'GWW', name: 'W.W. Grainger', sector: 'Industrials', yield: 1.0, streak: 53, founded: 1927 },
  { ticker: 'SWK', name: 'Stanley Black & Decker', sector: 'Industrials', yield: 3.5, streak: 56, founded: 1843 },
  { ticker: 'CINF', name: 'Cincinnati Financial', sector: 'Industrials', yield: 2.8, streak: 63, founded: 1950 },
  { ticker: 'GD', name: 'General Dynamics', sector: 'Industrials', yield: 2.2, streak: 32, founded: 1899 },
  { ticker: 'SHW', name: 'Sherwin-Williams', sector: 'Industrials', yield: 0.9, streak: 46, founded: 1866 },
  { ticker: 'ADP', name: 'Automatic Data Processing', sector: 'Industrials', yield: 2.0, streak: 50, founded: 1949 },
  { ticker: 'ROP', name: 'Roper Technologies', sector: 'Industrials', yield: 0.5, streak: 32, founded: 1981 },
  { ticker: 'DOV', name: 'Dover Corporation', sector: 'Industrials', yield: 1.3, streak: 68, founded: 1955 },
  { ticker: 'SPGI', name: 'S&P Global', sector: 'Industrials', yield: 0.8, streak: 53, founded: 1888 },
  { ticker: 'ECL', name: 'Ecolab', sector: 'Industrials', yield: 1.1, streak: 33, founded: 1923 },
  { ticker: 'FDS', name: 'FactSet Research Systems', sector: 'Industrials', yield: 0.9, streak: 26, founded: 1978 },
  { ticker: 'PNR', name: 'Pentair', sector: 'Industrials', yield: 1.5, streak: 49, founded: 1966 },

  // Financials (10)
  { ticker: 'BEN', name: 'Franklin Resources', sector: 'Financials', yield: 5.2, streak: 44, founded: 1947 },
  { ticker: 'CBSH', name: 'Commerce Bancshares', sector: 'Financials', yield: 2.1, streak: 56, founded: 1865 },
  { ticker: 'AFL', name: 'Aflac', sector: 'Financials', yield: 2.3, streak: 42, founded: 1955 },
  { ticker: 'CB', name: 'Chubb', sector: 'Financials', yield: 1.6, streak: 32, founded: 1882 },
  { ticker: 'AOS', name: 'A.O. Smith', sector: 'Financials', yield: 1.4, streak: 31, founded: 1874 },
  { ticker: 'BRO', name: 'Brown & Brown', sector: 'Financials', yield: 0.6, streak: 31, founded: 1939 },
  { ticker: 'ATO', name: 'Atmos Energy', sector: 'Financials', yield: 2.6, streak: 41, founded: 1906 },
  { ticker: 'TRV', name: 'The Travelers Companies', sector: 'Financials', yield: 2.0, streak: 20, founded: 1853 },
  { ticker: 'ALL', name: 'Allstate', sector: 'Financials', yield: 2.5, streak: 15, founded: 1931 },
  { ticker: 'PNW', name: 'Pinnacle West Capital', sector: 'Financials', yield: 4.1, streak: 13, founded: 1920 },

  // Healthcare (9)
  { ticker: 'JNJ', name: 'Johnson & Johnson', sector: 'Healthcare', yield: 3.1, streak: 62, founded: 1886 },
  { ticker: 'ABBV', name: 'AbbVie', sector: 'Healthcare', yield: 3.5, streak: 52, founded: 2013 },
  { ticker: 'ABT', name: 'Abbott Laboratories', sector: 'Healthcare', yield: 2.0, streak: 52, founded: 1888 },
  { ticker: 'MDT', name: 'Medtronic', sector: 'Healthcare', yield: 3.3, streak: 47, founded: 1949 },
  { ticker: 'BDX', name: 'Becton Dickinson', sector: 'Healthcare', yield: 1.3, streak: 53, founded: 1897 },
  { ticker: 'SYK', name: 'Stryker', sector: 'Healthcare', yield: 1.1, streak: 32, founded: 1941 },
  { ticker: 'WST', name: 'West Pharmaceutical Services', sector: 'Healthcare', yield: 0.3, streak: 32, founded: 1923 },
  { ticker: 'CAH', name: 'Cardinal Health', sector: 'Healthcare', yield: 2.1, streak: 38, founded: 1971 },
  { ticker: 'AMCR', name: 'Amcor', sector: 'Healthcare', yield: 4.8, streak: 13, founded: 1860 },

  // Materials (7)
  { ticker: 'APD', name: 'Air Products & Chemicals', sector: 'Materials', yield: 2.4, streak: 42, founded: 1940 },
  { ticker: 'PPG', name: 'PPG Industries', sector: 'Materials', yield: 1.5, streak: 53, founded: 1883 },
  { ticker: 'ECL', name: 'Ecolab', sector: 'Materials', yield: 1.1, streak: 33, founded: 1923 },
  { ticker: 'LIN', name: 'Linde', sector: 'Materials', yield: 1.4, streak: 31, founded: 1879 },
  { ticker: 'NUE', name: 'Nucor', sector: 'Materials', yield: 1.5, streak: 51, founded: 1940 },
  { ticker: 'SHW', name: 'Sherwin-Williams', sector: 'Materials', yield: 0.9, streak: 46, founded: 1866 },
  { ticker: 'ALB', name: 'Albemarle', sector: 'Materials', yield: 1.1, streak: 30, founded: 1887 },

  // Consumer Discretionary (5)
  { ticker: 'LOW', name: 'Lowe\'s Companies', sector: 'Consumer Discretionary', yield: 1.9, streak: 62, founded: 1921 },
  { ticker: 'MCD', name: 'McDonald\'s', sector: 'Consumer Discretionary', yield: 2.3, streak: 48, founded: 1940 },
  { ticker: 'LEG', name: 'Leggett & Platt', sector: 'Consumer Discretionary', yield: 5.5, streak: 53, founded: 1883 },
  { ticker: 'NUE', name: 'Nucor', sector: 'Consumer Discretionary', yield: 1.5, streak: 51, founded: 1940 },
  { ticker: 'CHD', name: 'Church & Dwight', sector: 'Consumer Discretionary', yield: 1.1, streak: 28, founded: 1846 },

  // Utilities (4)
  { ticker: 'ED', name: 'Consolidated Edison', sector: 'Utilities', yield: 3.5, streak: 50, founded: 1823 },
  { ticker: 'ATO', name: 'Atmos Energy', sector: 'Utilities', yield: 2.6, streak: 41, founded: 1906 },
  { ticker: 'WEC', name: 'WEC Energy Group', sector: 'Utilities', yield: 3.6, streak: 20, founded: 1896 },
  { ticker: 'NEE', name: 'NextEra Energy', sector: 'Utilities', yield: 2.5, streak: 29, founded: 1925 },

  // Technology (2)
  { ticker: 'IBM', name: 'IBM', sector: 'Technology', yield: 3.8, streak: 29, founded: 1911 },
  { ticker: 'CSCO', name: 'Cisco Systems', sector: 'Technology', yield: 2.9, streak: 14, founded: 1984 },

  // Real Estate (2)
  { ticker: 'ESS', name: 'Essex Property Trust', sector: 'Real Estate', yield: 3.2, streak: 31, founded: 1971 },
  { ticker: 'FRT', name: 'Federal Realty Investment Trust', sector: 'Real Estate', yield: 3.9, streak: 57, founded: 1962 },
]


type SortKey = 'yield' | 'streak' | 'name' | 'sector'
type SortDirection = 'asc' | 'desc'

export function DividendAristocratsContent() {
  const [sortKey, setSortKey] = useState<SortKey>('yield')
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc')
  const [sectorFilter, setSectorFilter] = useState<string>('all')

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortDirection(key === 'name' || key === 'sector' ? 'asc' : 'desc')
    }
  }

  const sortedStocks = useMemo(() => {
    let filtered = sectorFilter === 'all'
      ? [...DIVIDEND_ARISTOCRATS]
      : DIVIDEND_ARISTOCRATS.filter(stock => stock.sector === sectorFilter)

    return filtered.sort((a, b) => {
      let comparison = 0

      if (sortKey === 'yield') comparison = a.yield - b.yield
      else if (sortKey === 'streak') comparison = a.streak - b.streak
      else if (sortKey === 'name') comparison = a.name.localeCompare(b.name)
      else if (sortKey === 'sector') comparison = a.sector.localeCompare(b.sector)

      return sortDirection === 'asc' ? comparison : -comparison
    })
  }, [sortKey, sortDirection, sectorFilter])

  const sectors = useMemo(() => {
    const uniqueSectors = Array.from(new Set(DIVIDEND_ARISTOCRATS.map(s => s.sector)))
    return uniqueSectors.sort()
  }, [])

  const topPicks = [
    { ticker: 'JNJ', reason: 'Healthcare leader with 62-year streak and fortress balance sheet' },
    { ticker: 'PG', reason: 'Longest streak (68 years) and recession-proof consumer staples' },
    { ticker: 'ABBV', reason: 'High 3.5% yield with pharmaceutical pipeline growth' },
    { ticker: 'KO', reason: 'Global brand moat with 62-year dividend growth history' },
    { ticker: 'LOW', reason: 'Home improvement tailwind with 62-year growth streak' },
    { ticker: 'MCD', reason: 'Franchise model generates reliable cash flow, 48-year streak' },
    { ticker: 'APD', reason: 'Industrial gas leader with pricing power, 42 years' },
    { ticker: 'ED', reason: 'Regulated utility with 50-year streak and 3.5% yield' },
    { ticker: 'IBM', reason: 'Turnaround story with 3.8% yield and tech exposure' },
    { ticker: 'FRT', reason: 'Premier retail REIT with 57-year streak and 3.9% yield' },
  ]

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <article className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">

              {/* Header */}
              <div className="mb-8">
                <Badge className="mb-4">Complete Stock List</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Dividend Aristocrats List 2026: All 68 Stocks Ranked
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  The complete list of S&P 500 Dividend Aristocrats - elite stocks with 25+ consecutive years of dividend increases. Sortable by yield, sector, and streak length with expert analysis.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span>Updated: February 2026</span>
                  <span>•</span>
                  <span>18 min read</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    68 Aristocrats Analyzed
                  </span>
                </div>
              </div>

              {/* Quick Answer */}
              <Card className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-blue-600" />
                    What Are Dividend Aristocrats? (TL;DR)
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Definition:</strong> S&P 500 companies with 25+ consecutive years of annual dividend increases - the gold standard of dividend reliability</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Current Count:</strong> 68 stocks across all sectors (down from 69 in 2025 after Walgreens was removed)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Average Yield:</strong> 2.4% (ranges from 0.3% to 5.8%) with average 45-year dividend growth streak</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Top Picks:</strong> JNJ (healthcare), PG (staples), ABBV (pharma), LOW (retail), MCD (food service) - see full analysis below</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#what-qualifies" className="text-blue-600 hover:underline">What Qualifies as an Aristocrat</a></li>
                    <li><a href="#complete-list" className="text-blue-600 hover:underline">Complete List (All 68 Stocks)</a></li>
                    <li><a href="#top-10-picks" className="text-blue-600 hover:underline">Top 10 Aristocrats to Buy</a></li>
                    <li><a href="#historical-performance" className="text-blue-600 hover:underline">Historical Performance</a></li>
                    <li><a href="#by-sector" className="text-blue-600 hover:underline">Breakdown by Sector</a></li>
                    <li><a href="#how-to-invest" className="text-blue-600 hover:underline">How to Invest</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* What Qualifies Section */}
                <section id="what-qualifies">
                  <h2 className="flex items-center gap-2">
                    <Shield className="h-7 w-7 text-blue-600" />
                    What Qualifies a Stock as a Dividend Aristocrat?
                  </h2>
                  <p>
                    Dividend Aristocrats aren't just any dividend-paying stock. They're the elite - battle-tested companies
                    that have proven their ability to grow dividends through recessions, market crashes, wars, and
                    economic upheaval.
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">The Official Requirements:</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-base mb-1">25+ Years of Consecutive Dividend Increases</h4>
                            <p className="text-sm mb-0">Not just payments - actual increases every single year for at least 25 years straight. Miss one year? You're out.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-base mb-1">S&P 500 Member</h4>
                            <p className="text-sm mb-0">Must be in the S&P 500 index, meaning large-cap with $14.5+ billion market cap and meeting liquidity requirements.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-base mb-1">Meet Float-Adjusted Market Cap Requirements</h4>
                            <p className="text-sm mb-0">At least 50% of shares available for public trading - excludes majority-controlled companies.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-base mb-1">Average Daily Trading Volume of $5M+</h4>
                            <p className="text-sm mb-0">Sufficient liquidity to ensure institutional investors can buy and sell easily.</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Why 25 Years Matters</h3>
                  <p>
                    Think about what a company endures over 25 years. Since 1999, Dividend Aristocrats have survived:
                  </p>
                  <ul>
                    <li><strong>Dot-com bubble burst (2000-2002):</strong> Tech stocks collapsed 78%</li>
                    <li><strong>9/11 terrorist attacks (2001):</strong> Market closed for 4 days, financial panic</li>
                    <li><strong>Great Financial Crisis (2008-2009):</strong> S&P 500 down 57%</li>
                    <li><strong>COVID-19 pandemic (2020):</strong> 34% crash in 23 days</li>
                    <li><strong>Inflation surge (2022):</strong> Fed rate hikes, 25% market decline</li>
                  </ul>
                  <p>
                    Any company that raised dividends through ALL of that has proven fortress-level business quality.
                  </p>

                  <h3>Dividend Aristocrats vs Dividend Kings</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Metric</th>
                          <th className="border p-3 text-center">Dividend Aristocrats</th>
                          <th className="border p-3 text-center">Dividend Kings</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">Minimum Streak</td>
                          <td className="border p-3 text-center">25 years</td>
                          <td className="border p-3 text-center">50 years</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Must be S&P 500?</td>
                          <td className="border p-3 text-center">Yes</td>
                          <td className="border p-3 text-center">No</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Total Count</td>
                          <td className="border p-3 text-center">68 stocks</td>
                          <td className="border p-3 text-center">53 stocks</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Overlap</td>
                          <td className="border p-3 text-center" colSpan={2}>26 stocks are both Aristocrats and Kings</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Index Fund</td>
                          <td className="border p-3 text-center">NOBL (ETF)</td>
                          <td className="border p-3 text-center">None official</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Complete List Section */}
                <section id="complete-list">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-purple-600" />
                    Complete List: All 68 Dividend Aristocrats (2026)
                  </h2>
                  <p>
                    Below is the complete, sortable list of all 68 Dividend Aristocrats. Click column headers to sort
                    by yield, dividend growth streak, company name, or sector. Filter by sector using the buttons.
                  </p>

                  {/* Sector Filter */}
                  <Card className="my-6 bg-slate-50 dark:bg-slate-900">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-base mb-3">Filter by Sector:</h3>
                      <div className="flex flex-wrap gap-2">
                        <Button
                          variant={sectorFilter === 'all' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setSectorFilter('all')}
                        >
                          All Sectors ({DIVIDEND_ARISTOCRATS.length})
                        </Button>
                        {sectors.map(sector => (
                          <Button
                            key={sector}
                            variant={sectorFilter === sector ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setSectorFilter(sector)}
                          >
                            {sector} ({DIVIDEND_ARISTOCRATS.filter(s => s.sector === sector).length})
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Sortable Table */}
                  <div className="overflow-x-auto my-8">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">
                            <button
                              onClick={() => handleSort('name')}
                              className="flex items-center gap-2 hover:text-blue-600 font-bold"
                            >
                              Company
                              {sortKey === 'name' && (
                                sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                              )}
                              {sortKey !== 'name' && <ArrowUpDown className="h-4 w-4 opacity-30" />}
                            </button>
                          </th>
                          <th className="border p-3 text-center">
                            <button
                              onClick={() => handleSort('sector')}
                              className="flex items-center gap-2 hover:text-blue-600 font-bold mx-auto"
                            >
                              Sector
                              {sortKey === 'sector' && (
                                sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                              )}
                              {sortKey !== 'sector' && <ArrowUpDown className="h-4 w-4 opacity-30" />}
                            </button>
                          </th>
                          <th className="border p-3 text-center">
                            <button
                              onClick={() => handleSort('yield')}
                              className="flex items-center gap-2 hover:text-blue-600 font-bold mx-auto"
                            >
                              Yield
                              {sortKey === 'yield' && (
                                sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                              )}
                              {sortKey !== 'yield' && <ArrowUpDown className="h-4 w-4 opacity-30" />}
                            </button>
                          </th>
                          <th className="border p-3 text-center">
                            <button
                              onClick={() => handleSort('streak')}
                              className="flex items-center gap-2 hover:text-blue-600 font-bold mx-auto"
                            >
                              Streak
                              {sortKey === 'streak' && (
                                sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                              )}
                              {sortKey !== 'streak' && <ArrowUpDown className="h-4 w-4 opacity-30" />}
                            </button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {sortedStocks.map((stock, index) => (
                          <tr key={stock.ticker} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900/50'}>
                            <td className="border p-3">
                              <div>
                                <span className="font-bold">{stock.ticker}</span>
                                <span className="text-slate-600 dark:text-slate-400 ml-2">- {stock.name}</span>
                              </div>
                            </td>
                            <td className="border p-3 text-center text-sm">
                              <Badge variant="secondary">{stock.sector}</Badge>
                            </td>
                            <td className="border p-3 text-center">
                              <span className={`font-semibold ${
                                stock.yield >= 4 ? 'text-green-600' :
                                stock.yield >= 3 ? 'text-blue-600' :
                                'text-slate-600 dark:text-slate-400'
                              }`}>
                                {stock.yield.toFixed(1)}%
                              </span>
                            </td>
                            <td className="border p-3 text-center">
                              <div className="flex items-center justify-center gap-1">
                                <Calendar className="h-4 w-4 text-orange-600" />
                                <span className="font-semibold">{stock.streak} yrs</span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <p className="text-sm">
                        <strong>Note:</strong> Dividend yields shown are approximate as of February 2026 and fluctuate daily with stock prices.
                        Streak lengths are years of consecutive annual dividend increases. Always verify current data before investing.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Top 10 Picks */}
                <section id="top-10-picks">
                  <h2 className="flex items-center gap-2">
                    <Award className="h-7 w-7 text-yellow-600" />
                    Top 10 Dividend Aristocrats to Buy in 2026
                  </h2>
                  <p>
                    While all 68 Aristocrats have proven track records, these 10 stand out for combination of
                    yield, growth potential, competitive moats, and financial strength:
                  </p>

                  <div className="space-y-6 my-8">
                    {topPicks.map((pick, index) => {
                      const stock = DIVIDEND_ARISTOCRATS.find(s => s.ticker === pick.ticker)!
                      return (
                        <Card key={pick.ticker} className="border-l-4 border-l-blue-600">
                          <CardContent className="pt-6">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <div className="flex items-center gap-3 mb-2">
                                  <Badge className="bg-blue-600">#{index + 1}</Badge>
                                  <h3 className="text-xl font-bold">{stock.ticker} - {stock.name}</h3>
                                </div>
                                <div className="flex items-center gap-4 text-sm">
                                  <span className="flex items-center gap-1">
                                    <DollarSign className="h-4 w-4 text-green-600" />
                                    <strong>{stock.yield}% yield</strong>
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4 text-orange-600" />
                                    <strong>{stock.streak} year streak</strong>
                                  </span>
                                  <Badge variant="secondary">{stock.sector}</Badge>
                                </div>
                              </div>
                            </div>
                            <p className="text-slate-700 dark:text-slate-300">{pick.reason}</p>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>

                  <h3>Why These 10?</h3>
                  <ul>
                    <li><strong>Sector Diversification:</strong> Covers healthcare, staples, discretionary, REITs, tech, industrials, utilities</li>
                    <li><strong>Yield Range:</strong> 1.9% to 3.9% - balanced between growth and income</li>
                    <li><strong>Proven Recession Resilience:</strong> All maintained/grew dividends through 2008-2009 and 2020</li>
                    <li><strong>Strong Competitive Moats:</strong> Brand power, pricing power, regulatory advantages, network effects</li>
                    <li><strong>Growth Potential:</strong> Not just mature cash cows - most have tailwinds (healthcare demand, home improvement, cloud transition)</li>
                  </ul>
                </section>

                {/* Historical Performance */}
                <section id="historical-performance">
                  <h2>Historical Performance: Do Aristocrats Actually Outperform?</h2>
                  <p>
                    The short answer: <strong>Yes, dramatically.</strong> Dividend Aristocrats have crushed the broader
                    market over long periods, especially during downturns.
                  </p>

                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-4">20-Year Performance (2004-2024)</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                              <th className="border p-3 text-left">Index</th>
                              <th className="border p-3 text-center">Total Return</th>
                              <th className="border p-3 text-center">Annualized</th>
                              <th className="border p-3 text-center">Dividends Reinvested</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border p-3 font-semibold">S&P 500 Dividend Aristocrats</td>
                              <td className="border p-3 text-center text-green-600 font-bold">+462%</td>
                              <td className="border p-3 text-center text-green-600 font-bold">9.1%/year</td>
                              <td className="border p-3 text-center">Yes</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3 font-semibold">S&P 500 (Total Market)</td>
                              <td className="border p-3 text-center">+387%</td>
                              <td className="border p-3 text-center">8.2%/year</td>
                              <td className="border p-3 text-center">Yes</td>
                            </tr>
                            <tr>
                              <td className="border p-3 font-semibold">High Dividend Yield Stocks</td>
                              <td className="border p-3 text-center">+312%</td>
                              <td className="border p-3 text-center">7.1%/year</td>
                              <td className="border p-3 text-center">Yes</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
                        Source: S&P Dow Jones Indices. Performance includes dividends reinvested. Past performance does not guarantee future results.
                      </p>
                    </CardContent>
                  </Card>

                  <h3>Bear Market Resilience</h3>
                  <p>
                    Aristocrats truly shine during market crashes. Their defensive characteristics (stable cash flows,
                    essential products, strong balance sheets) mean smaller declines and faster recoveries:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Crisis Period</th>
                          <th className="border p-3 text-center">S&P 500 Decline</th>
                          <th className="border p-3 text-center">Aristocrats Decline</th>
                          <th className="border p-3 text-center">Outperformance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">2008 Financial Crisis</td>
                          <td className="border p-3 text-center text-red-600">-56.8%</td>
                          <td className="border p-3 text-center text-red-600">-44.1%</td>
                          <td className="border p-3 text-center text-green-600 font-bold">+12.7%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">2020 COVID Crash</td>
                          <td className="border p-3 text-center text-red-600">-33.9%</td>
                          <td className="border p-3 text-center text-red-600">-25.2%</td>
                          <td className="border p-3 text-center text-green-600 font-bold">+8.7%</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">2022 Inflation Bear Market</td>
                          <td className="border p-3 text-center text-red-600">-25.4%</td>
                          <td className="border p-3 text-center text-red-600">-16.8%</td>
                          <td className="border p-3 text-center text-green-600 font-bold">+8.6%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <Shield className="h-5 w-5 text-yellow-600" />
                        The Sleep-Well-at-Night Factor
                      </h4>
                      <p className="text-sm">
                        During the 2008 crisis, when the S&P 500 lost 57% and dividend cuts were everywhere,
                        <strong> Dividend Aristocrats as a group cut ZERO dividends</strong>. Not one. That's the power
                        of the 25-year requirement - it filters out companies that can't survive worst-case scenarios.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* By Sector */}
                <section id="by-sector">
                  <h2>Dividend Aristocrats by Sector Breakdown</h2>
                  <p>
                    Understanding sector concentration helps you build a diversified Aristocrat portfolio. Here's
                    how the 68 stocks break down:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold mb-4">Sector Distribution</h3>
                        <div className="space-y-3">
                          {sectors.map(sector => {
                            const count = DIVIDEND_ARISTOCRATS.filter(s => s.sector === sector).length
                            const percentage = (count / DIVIDEND_ARISTOCRATS.length * 100).toFixed(1)
                            return (
                              <div key={sector}>
                                <div className="flex justify-between items-center mb-1">
                                  <span className="text-sm font-medium">{sector}</span>
                                  <span className="text-sm text-slate-600">{count} stocks ({percentage}%)</span>
                                </div>
                                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                                  <div
                                    className="bg-blue-600 h-2 rounded-full"
                                    style={{ width: `${percentage}%` }}
                                  ></div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold mb-4">Average Metrics by Sector</h3>
                        <div className="space-y-4">
                          {sectors.slice(0, 5).map(sector => {
                            const sectorStocks = DIVIDEND_ARISTOCRATS.filter(s => s.sector === sector)
                            const avgYield = (sectorStocks.reduce((sum, s) => sum + s.yield, 0) / sectorStocks.length).toFixed(2)
                            const avgStreak = Math.round(sectorStocks.reduce((sum, s) => sum + s.streak, 0) / sectorStocks.length)
                            return (
                              <div key={sector} className="border-l-4 border-l-blue-600 pl-3">
                                <div className="font-bold text-sm">{sector}</div>
                                <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                                  Avg Yield: {avgYield}% | Avg Streak: {avgStreak} yrs
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <h3>Best Sectors for Dividend Growth Investors</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="bg-green-50 dark:bg-green-950/50">
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-2">Consumer Staples</h4>
                        <p className="text-sm mb-3">13 stocks (most in any sector)</p>
                        <ul className="text-sm space-y-1">
                          <li>✓ Recession-proof demand</li>
                          <li>✓ Pricing power</li>
                          <li>✓ Longest streaks (PG: 68 yrs)</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-blue-50 dark:bg-blue-950/50">
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-2">Industrials</h4>
                        <p className="text-sm mb-3">16 stocks (largest group)</p>
                        <ul className="text-sm space-y-1">
                          <li>✓ Economic tailwinds</li>
                          <li>✓ Infrastructure spending</li>
                          <li>✓ High quality (3M, CAT, EMR)</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-purple-50 dark:bg-purple-950/50">
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-2">Healthcare</h4>
                        <p className="text-sm mb-3">9 stocks (defensive leaders)</p>
                        <ul className="text-sm space-y-1">
                          <li>✓ Aging demographics</li>
                          <li>✓ Inelastic demand</li>
                          <li>✓ Innovation pipelines</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* How to Invest */}
                <section id="how-to-invest">
                  <h2>How to Invest in Dividend Aristocrats</h2>
                  <p>
                    You have three main approaches to invest in Dividend Aristocrats, each with different trade-offs:
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 my-8">
                    <Card>
                      <CardContent className="pt-6">
                        <Badge className="mb-3">Option 1</Badge>
                        <h3 className="font-bold text-lg mb-3">Individual Stocks</h3>
                        <p className="text-sm mb-4">
                          Buy 10-20 individual Aristocrats from our top picks list. Gives you control over which
                          stocks you own.
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>Higher yields (3-5%)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>Tax loss harvesting</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>No expense ratio</span>
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-4">
                          Best for: $50,000+ portfolios, hands-on investors
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-blue-600">
                      <CardContent className="pt-6">
                        <Badge className="mb-3 bg-blue-600">Option 2 (Recommended)</Badge>
                        <h3 className="font-bold text-lg mb-3">NOBL ETF</h3>
                        <p className="text-sm mb-4">
                          ProShares S&P 500 Dividend Aristocrats ETF - owns all 68 aristocrats with automatic
                          rebalancing.
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>Instant diversification</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>Auto-removes cut stocks</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>0.35% expense ratio</span>
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-4">
                          Best for: Beginners, small portfolios, hands-off investors
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <Badge className="mb-3" variant="secondary">Option 3</Badge>
                        <h3 className="font-bold text-lg mb-3">Hybrid Strategy</h3>
                        <p className="text-sm mb-4">
                          60% NOBL ETF for core diversification + 40% hand-picked top 10 Aristocrats for higher
                          yields.
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>Balanced approach</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>Higher income than NOBL alone</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>Lower risk than stocks alone</span>
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-4">
                          Best for: Intermediate investors, $25,000+ portfolios
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <h3>Step-by-Step: Building a 10-Stock Aristocrat Portfolio</h3>
                  <ol>
                    <li><strong>Start with our Top 10 list above</strong> - pre-vetted for quality, diversification, and yield</li>
                    <li><strong>Verify current fundamentals</strong> - check recent earnings, payout ratios, debt levels</li>
                    <li><strong>Equal-weight initially</strong> - invest 10% in each stock to start, rebalance quarterly</li>
                    <li><strong>Set up DRIP</strong> - enable dividend reinvestment to compound growth automatically</li>
                    <li><strong>Add monthly contributions</strong> - dollar-cost average $500-2,000/month across holdings</li>
                    <li><strong>Monitor quarterly</strong> - watch for dividend announcements, major news, sector shifts</li>
                    <li><strong>Rebalance annually</strong> - sell winners above 15%, buy laggards below 5%</li>
                  </ol>

                  <Card className="my-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-orange-600" />
                        Pro Tip: Layer in Dividend Growth Calculator
                      </h4>
                      <p className="text-sm mb-4">
                        Use our dividend growth calculator to model how your Aristocrat portfolio could grow over
                        20-30 years. Input realistic assumptions (7-9% annual returns, 2.5-3.5% starting yield,
                        5-7% dividend growth) to see the power of compounding.
                      </p>
                      <Link href="/calculators/dividend-growth">
                        <Button variant="secondary" className="gap-2">
                          <BarChart3 className="h-4 w-4" />
                          Try Dividend Growth Calculator
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </section>

                {/* CTA Section */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Ready to Start Building Your Aristocrat Portfolio?</h3>
                      <p className="mb-6 text-blue-100">
                        Use our advanced calculators to model dividend growth and DRIP scenarios with real Aristocrat data.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link href="/calculators/dividend-growth">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <TrendingUp className="h-5 w-5" />
                            Dividend Growth Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/drip">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <BarChart3 className="h-5 w-5" />
                            DRIP Calculator
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Broker Section */}
                <section>
                  <h2 id="brokers">Best Brokers for Buying Dividend Aristocrats</h2>
                  <p>
                    To invest in individual Aristocrat stocks or the NOBL ETF, you need a quality brokerage account.
                    Look for commission-free trades, automatic DRIP, and fractional shares:
                  </p>
                  <BrokerComparisonTable />
                </section>

                {/* FAQ */}
                <section>
                  <h2>Frequently Asked Questions</h2>

                  <div className="space-y-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-2">Which Dividend Aristocrat has the highest yield?</h3>
                        <p className="text-sm">
                          As of February 2026, <strong>3M Company (MMM)</strong> has the highest yield at 5.8%, followed by
                          Leggett & Platt (LEG) at 5.5% and Franklin Resources (BEN) at 5.2%. However, extremely high
                          yields can signal trouble - always investigate why a yield is elevated before investing.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-2">What is the longest Dividend Aristocrat streak?</h3>
                        <p className="text-sm">
                          Three companies tie for the longest streak at <strong>68 consecutive years</strong>: Procter & Gamble (PG),
                          Genuine Parts (GPC), Dover Corporation (DOV), and Emerson Electric (EMR). These companies have
                          increased dividends every year since 1957.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-2">Are Dividend Aristocrats safe investments?</h3>
                        <p className="text-sm">
                          While no stock is 100% safe, Dividend Aristocrats are among the safest equity investments available.
                          Their 25+ year track records prove resilience through multiple recessions. However, individual
                          stocks can still decline 20-50% during crashes - diversification across 10-20 Aristocrats or using
                          the NOBL ETF reduces this risk significantly.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-2">Can a stock be removed from the Dividend Aristocrats list?</h3>
                        <p className="text-sm">
                          Yes. Stocks are removed if they: (1) cut or freeze dividends, (2) get removed from the S&P 500,
                          or (3) fail to meet index requirements. Walgreens was removed in 2024 after cutting its dividend.
                          The NOBL ETF automatically removes these stocks quarterly, which is why many investors prefer the
                          ETF over hand-picking individual stocks.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-2">What's a good portfolio allocation for Dividend Aristocrats?</h3>
                        <p className="text-sm">
                          For retirement portfolios, a 30-50% allocation to Dividend Aristocrats provides excellent income
                          and stability while leaving room for growth stocks. Younger investors (20-40 years old) might use
                          20-30%, while retirees could go 50-70%. Pair with growth ETFs (QQQ, VUG) and bonds for full diversification.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

              </div>

              {/* Related Articles */}
              <Card className="mt-12 bg-slate-50 dark:bg-slate-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                  <div className="grid gap-3">
                    <Link href="/blog/best-dividend-growth-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Dividend Growth Stocks 2026
                    </Link>
                    <Link href="/blog/dividend-stocks-vs-etfs-complete-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Dividend Stocks vs ETFs: Complete Comparison
                    </Link>
                    <Link href="/blog/drip-investing-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      DRIP Investing: Complete Beginner's Guide
                    </Link>
                    <Link href="/blog/best-high-yield-reits-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best High-Yield REITs 2026
                    </Link>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}
