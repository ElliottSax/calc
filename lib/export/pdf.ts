/**
 * PDF export functionality for calculations
 * In production, you would use a library like jsPDF or react-pdf
 */

import { formatCurrency, formatPercent, formatNumber } from '@/lib/utils/calculations'
import type { DripCalculationResult, DripSummary } from '@/types/calculator'

interface ExportData {
  type: string
  results: DripCalculationResult[]
  summary: DripSummary | null
  inputs: any
}

export async function exportToPDF(data: ExportData) {
  // In a real implementation, you would use jsPDF
  // For now, we'll create a printable HTML version
  
  const printWindow = window.open('', '_blank')
  if (!printWindow) {
    throw new Error('Failed to open print window')
  }

  const html = generatePDFHTML(data)
  
  printWindow.document.write(html)
  printWindow.document.close()
  
  // Trigger print dialog
  setTimeout(() => {
    printWindow.print()
  }, 500)
}

function generatePDFHTML(data: ExportData): string {
  const { type, results, summary, inputs } = data
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Dividend Calculator Report</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          color: #333;
        }
        h1 {
          color: #2563eb;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 10px;
        }
        h2 {
          color: #1f2937;
          margin-top: 30px;
        }
        .summary-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin: 20px 0;
        }
        .summary-item {
          background: #f3f4f6;
          padding: 15px;
          border-radius: 8px;
        }
        .summary-item label {
          display: block;
          font-size: 12px;
          color: #6b7280;
          margin-bottom: 5px;
        }
        .summary-item .value {
          font-size: 18px;
          font-weight: bold;
          color: #1f2937;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        th {
          background: #f3f4f6;
          padding: 10px;
          text-align: left;
          font-weight: 600;
          border-bottom: 2px solid #e5e7eb;
        }
        td {
          padding: 8px;
          border-bottom: 1px solid #e5e7eb;
        }
        .footer {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
          font-size: 12px;
          color: #6b7280;
        }
        @media print {
          body {
            margin: 0;
            padding: 10px;
          }
        }
      </style>
    </head>
    <body>
      <h1>Dividend Investment Analysis Report</h1>
      
      <div class="report-meta">
        <p><strong>Report Date:</strong> ${new Date().toLocaleDateString()}</p>
        <p><strong>Calculator Type:</strong> ${type.toUpperCase()}</p>
      </div>

      ${summary ? `
        <h2>Investment Summary</h2>
        <div class="summary-grid">
          <div class="summary-item">
            <label>Initial Investment</label>
            <div class="value">${formatCurrency(summary.initialInvestment)}</div>
          </div>
          <div class="summary-item">
            <label>Final Portfolio Value</label>
            <div class="value">${formatCurrency(summary.finalPortfolioValue)}</div>
          </div>
          <div class="summary-item">
            <label>Total Return</label>
            <div class="value">${formatPercent(summary.totalReturnPercent)}</div>
          </div>
          <div class="summary-item">
            <label>Total Contributions</label>
            <div class="value">${formatCurrency(summary.totalContributions)}</div>
          </div>
          <div class="summary-item">
            <label>Total Dividends</label>
            <div class="value">${formatCurrency(summary.totalDividendsEarned)}</div>
          </div>
          <div class="summary-item">
            <label>Annualized Return</label>
            <div class="value">${formatPercent(summary.annualizedReturn)}</div>
          </div>
        </div>
      ` : ''}

      <h2>Input Parameters</h2>
      <table>
        <tr>
          <td>Initial Investment</td>
          <td>${formatCurrency(inputs.initialInvestment || 0)}</td>
        </tr>
        <tr>
          <td>Monthly Contribution</td>
          <td>${formatCurrency(inputs.monthlyContribution || 0)}</td>
        </tr>
        <tr>
          <td>Investment Period</td>
          <td>${inputs.yearsToCalculate || 0} years</td>
        </tr>
        <tr>
          <td>Dividend Growth Rate</td>
          <td>${formatPercent(inputs.dividendGrowthRate || 0)}</td>
        </tr>
        <tr>
          <td>Share Appreciation Rate</td>
          <td>${formatPercent(inputs.shareAppreciationRate || 0)}</td>
        </tr>
      </table>

      <h2>Year-by-Year Breakdown</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Portfolio Value</th>
            <th>Annual Dividend</th>
            <th>Total Return</th>
            <th>Yield on Cost</th>
          </tr>
        </thead>
        <tbody>
          ${results.map(r => `
            <tr>
              <td>${r.year}</td>
              <td>${formatCurrency(r.portfolioValue)}</td>
              <td>${formatCurrency(r.annualDividend)}</td>
              <td>${formatPercent(r.totalReturnPercent)}</td>
              <td>${formatPercent(r.yieldOnCost)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <div class="footer">
        <p>Generated by Dividend Calculator Hub - ${window.location.hostname}</p>
        <p>This report is for informational purposes only and should not be considered financial advice.</p>
      </div>
    </body>
    </html>
  `
}