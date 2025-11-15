/**
 * Excel export functionality for calculations
 * In production, you would use a library like SheetJS (xlsx)
 */

import type { DripCalculationResult, DripSummary } from '@/types/calculator'

interface ExportData {
  type: string
  results: DripCalculationResult[]
  summary: DripSummary | null
  inputs: any
}

export async function exportToExcel(data: ExportData) {
  // In a real implementation, you would use SheetJS
  // For now, we'll create a CSV file that can be opened in Excel
  
  const csv = generateCSV(data)
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  
  const link = document.createElement('a')
  link.href = url
  link.download = `dividend-calculation-${data.type}-${new Date().toISOString().split('T')[0]}.csv`
  link.click()
  
  URL.revokeObjectURL(url)
}

function generateCSV(data: ExportData): string {
  const { results, summary, inputs } = data
  const lines: string[] = []
  
  // Header
  lines.push('Dividend Investment Calculation Report')
  lines.push(`Report Date: ${new Date().toLocaleDateString()}`)
  lines.push('')
  
  // Input Parameters
  lines.push('INPUT PARAMETERS')
  lines.push('Parameter,Value')
  lines.push(`Initial Investment,$${inputs.initialInvestment}`)
  lines.push(`Monthly Contribution,$${inputs.monthlyContribution}`)
  lines.push(`Share Price,$${inputs.sharePrice}`)
  lines.push(`Annual Dividend,$${inputs.annualDividend}`)
  lines.push(`Dividend Growth Rate,${inputs.dividendGrowthRate}%`)
  lines.push(`Share Appreciation Rate,${inputs.shareAppreciationRate}%`)
  lines.push(`Investment Period,${inputs.yearsToCalculate} years`)
  lines.push(`Tax Rate,${inputs.taxRate}%`)
  lines.push('')
  
  // Summary
  if (summary) {
    lines.push('INVESTMENT SUMMARY')
    lines.push('Metric,Value')
    lines.push(`Final Portfolio Value,$${summary.finalPortfolioValue.toFixed(2)}`)
    lines.push(`Total Return,${summary.totalReturnPercent.toFixed(2)}%`)
    lines.push(`Total Contributions,$${summary.totalContributions.toFixed(2)}`)
    lines.push(`Total Dividends Earned,$${summary.totalDividendsEarned.toFixed(2)}`)
    lines.push(`Annualized Return,${summary.annualizedReturn.toFixed(2)}%`)
    lines.push(`Final Shares,${summary.finalShares.toFixed(2)}`)
    lines.push(`Final Annual Dividend,$${summary.finalDividendIncome.toFixed(2)}`)
    lines.push(`Final Yield on Cost,${summary.finalYieldOnCost.toFixed(2)}%`)
    lines.push('')
  }
  
  // Year-by-Year Data
  lines.push('YEAR-BY-YEAR BREAKDOWN')
  lines.push('Year,Shares,Share Price,Portfolio Value,Annual Dividend,Total Dividends,Total Contributions,Total Return,Total Return %,Dividend Yield,Yield on Cost')
  
  results.forEach(r => {
    lines.push([
      r.year,
      r.shares.toFixed(2),
      `$${r.sharePrice.toFixed(2)}`,
      `$${r.portfolioValue.toFixed(2)}`,
      `$${r.annualDividend.toFixed(2)}`,
      `$${r.totalDividends.toFixed(2)}`,
      `$${r.totalContributions.toFixed(2)}`,
      `$${r.totalReturn.toFixed(2)}`,
      `${r.totalReturnPercent.toFixed(2)}%`,
      `${r.dividendYield.toFixed(2)}%`,
      `${r.yieldOnCost.toFixed(2)}%`
    ].join(','))
  })
  
  return lines.join('\n')
}