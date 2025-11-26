/**
 * Financial calculation utilities using Big.js for precision
 */

import Big from 'big.js'
import type { DripCalculatorInputs, DripCalculationResult, DripSummary } from '@/types/calculator'
import { calculatorLogger } from '@/lib/logger'

// Configure Big.js for financial calculations
Big.DP = 10 // 10 decimal places
Big.RM = Big.roundHalfUp // Round half up

/**
 * Calculate DRIP (Dividend Reinvestment Plan) results
 */
export function calculateDripResults(
  inputs: DripCalculatorInputs
): { results: DripCalculationResult[]; summary: DripSummary } {
  calculatorLogger.info({ inputs }, 'Starting DRIP calculation')

  const results: DripCalculationResult[] = []
  
  // Convert inputs to Big numbers
  let shares = new Big(inputs.initialInvestment).div(new Big(inputs.sharePrice))
  let sharePrice = new Big(inputs.sharePrice)
  let annualDividendPerShare = new Big(inputs.annualDividend)
  const monthlyContribution = new Big(inputs.monthlyContribution)
  const dividendGrowthRate = new Big(inputs.dividendGrowthRate).div(100)
  const shareAppreciationRate = new Big(inputs.shareAppreciationRate).div(100)
  const taxRate = new Big(inputs.taxRate).div(100)
  
  let totalDividendsEarned = new Big(0)
  let totalContributions = new Big(inputs.initialInvestment)
  
  // Calculate for each year
  for (let year = 1; year <= inputs.yearsToCalculate; year++) {
    // Update share price
    if (year > 1) {
      sharePrice = sharePrice.mul(new Big(1).plus(shareAppreciationRate))
    }
    
    // Update dividend per share
    if (year > 1) {
      annualDividendPerShare = annualDividendPerShare.mul(new Big(1).plus(dividendGrowthRate))
    }
    
    // Calculate annual dividend income
    const grossAnnualDividend = shares.mul(annualDividendPerShare)
    const taxOnDividends = grossAnnualDividend.mul(taxRate)
    const netAnnualDividend = grossAnnualDividend.minus(taxOnDividends)
    
    // Add monthly contributions
    const annualContributions = monthlyContribution.mul(12)
    totalContributions = totalContributions.plus(annualContributions)
    
    // Buy shares with contributions
    const sharesFromContributions = annualContributions.div(sharePrice)
    shares = shares.plus(sharesFromContributions)
    
    // Reinvest dividends if enabled
    if (inputs.reinvestDividends) {
      const sharesFromDividends = netAnnualDividend.div(sharePrice)
      shares = shares.plus(sharesFromDividends)
    }
    
    // Track total dividends
    totalDividendsEarned = totalDividendsEarned.plus(grossAnnualDividend)
    
    // Calculate portfolio value and returns
    const portfolioValue = shares.mul(sharePrice)
    const totalReturn = portfolioValue.plus(totalDividendsEarned).minus(totalContributions)
    const totalReturnPercent = totalContributions.eq(0) 
      ? new Big(0) 
      : totalReturn.div(totalContributions).mul(100)
    
    // Calculate yields
    const currentYield = sharePrice.eq(0) 
      ? new Big(0) 
      : annualDividendPerShare.div(sharePrice).mul(100)
    
    const yieldOnCost = new Big(inputs.sharePrice).eq(0)
      ? new Big(0)
      : annualDividendPerShare.div(new Big(inputs.sharePrice)).mul(100)
    
    results.push({
      year,
      shares,
      sharePrice,
      portfolioValue,
      annualDividend: grossAnnualDividend,
      grossAnnualDividend,
      netAnnualDividend,
      totalDividends: totalDividendsEarned,
      totalDividendsEarned,
      totalContributions,
      totalReturn,
      totalReturnPercent,
      dividendYield: currentYield,
      yieldOnCost
    })
  }
  
  // Calculate summary
  const finalResult = results[results.length - 1]
  const annualizedReturn = calculateAnnualizedReturn(
    totalContributions,
    finalResult.portfolioValue,
    inputs.yearsToCalculate
  )
  
  const summary: DripSummary = {
    initialInvestment: new Big(inputs.initialInvestment),
    finalPortfolioValue: finalResult.portfolioValue,
    totalContributions: finalResult.totalContributions,
    totalDividendsEarned: finalResult.totalDividends,
    totalReturn: finalResult.totalReturn,
    totalReturnPercent: finalResult.totalReturnPercent,
    annualizedReturn,
    finalShares: finalResult.shares,
    finalDividendIncome: finalResult.annualDividend,
    finalYieldOnCost: finalResult.yieldOnCost
  }
  
  calculatorLogger.info({ summary }, 'DRIP calculation completed')
  
  return { results, summary }
}

/**
 * Calculate annualized return using CAGR formula
 */
export function calculateAnnualizedReturn(
  initialValue: Big,
  finalValue: Big,
  years: number
): Big {
  if (initialValue.eq(0) || years === 0) return new Big(0)
  
  // CAGR = (FV/PV)^(1/n) - 1
  const ratio = finalValue.div(initialValue)
  const exponent = 1 / years
  
  // Use JavaScript Math for power calculation, then convert back to Big
  const result = Math.pow(ratio.toNumber(), exponent) - 1
  
  return new Big(result).mul(100)
}

/**
 * Format a Big number for display
 */
export function formatCurrency(value: Big | number | string): string {
  const num = value instanceof Big ? value.toNumber() : Number(value)
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(num)
}

/**
 * Format a percentage for display
 */
export function formatPercent(value: Big | number | string): string {
  const num = value instanceof Big ? value.toNumber() : Number(value)
  return `${num.toFixed(2)}%`
}

/**
 * Format number with commas
 */
export function formatNumber(value: Big | number | string, decimals = 2): string {
  const num = value instanceof Big ? value.toNumber() : Number(value)
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(num)
}