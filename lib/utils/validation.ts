/**
 * Input validation utilities for calculator forms
 */

import type { DripCalculatorInputs, ValidationError } from '@/types/calculator'

/**
 * Validate DRIP calculator inputs
 */
export function validateDripInputs(inputs: DripCalculatorInputs): ValidationError[] {
  const errors: ValidationError[] = []
  
  // Initial investment validation
  const initialInvestment = parseFloat(inputs.initialInvestment)
  if (isNaN(initialInvestment) || initialInvestment < 0) {
    errors.push({
      field: 'initialInvestment',
      message: 'Initial investment must be a positive number'
    })
  }
  
  // Share price validation
  const sharePrice = parseFloat(inputs.sharePrice)
  if (isNaN(sharePrice) || sharePrice <= 0) {
    errors.push({
      field: 'sharePrice',
      message: 'Share price must be greater than 0'
    })
  }
  
  // Annual dividend validation
  const annualDividend = parseFloat(inputs.annualDividend)
  if (isNaN(annualDividend) || annualDividend < 0) {
    errors.push({
      field: 'annualDividend',
      message: 'Annual dividend must be a positive number'
    })
  }
  
  // Monthly contribution validation
  const monthlyContribution = parseFloat(inputs.monthlyContribution)
  if (isNaN(monthlyContribution) || monthlyContribution < 0) {
    errors.push({
      field: 'monthlyContribution',
      message: 'Monthly contribution must be a positive number'
    })
  }
  
  // Growth rate validations
  const dividendGrowthRate = parseFloat(inputs.dividendGrowthRate)
  if (isNaN(dividendGrowthRate) || dividendGrowthRate < -100 || dividendGrowthRate > 100) {
    errors.push({
      field: 'dividendGrowthRate',
      message: 'Dividend growth rate must be between -100% and 100%'
    })
  }
  
  const shareAppreciationRate = parseFloat(inputs.shareAppreciationRate)
  if (isNaN(shareAppreciationRate) || shareAppreciationRate < -100 || shareAppreciationRate > 100) {
    errors.push({
      field: 'shareAppreciationRate',
      message: 'Share appreciation rate must be between -100% and 100%'
    })
  }
  
  // Tax rate validation
  const taxRate = parseFloat(inputs.taxRate)
  if (isNaN(taxRate) || taxRate < 0 || taxRate > 100) {
    errors.push({
      field: 'taxRate',
      message: 'Tax rate must be between 0% and 100%'
    })
  }
  
  // Years validation
  if (inputs.yearsToCalculate < 1 || inputs.yearsToCalculate > 50) {
    errors.push({
      field: 'yearsToCalculate',
      message: 'Years to calculate must be between 1 and 50'
    })
  }
  
  return errors
}

/**
 * Sanitize numeric input
 */
export function sanitizeNumericInput(value: string): string {
  // Remove all non-numeric characters except decimal point and minus sign
  return value.replace(/[^0-9.-]/g, '')
}

/**
 * Parse percentage input (handles both "5" and "5%" formats)
 */
export function parsePercentageInput(value: string): string {
  const sanitized = value.replace(/[^0-9.-]/g, '')
  return sanitized
}