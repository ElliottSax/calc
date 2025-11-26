/**
 * Pre-configured calculator scenarios for quick exploration
 */

export const DRIP_PRESETS = {
  conservative: {
    name: "Conservative Retiree",
    icon: "🛡️",
    description: "Low-risk, stable dividend stocks with moderate growth",
    inputs: {
      ticker: '',
      initialInvestment: '100000',
      sharePrice: '100',
      annualDividend: '4',
      dividendYield: '4',
      monthlyContribution: '500',
      dividendGrowthRate: '3',
      shareAppreciationRate: '5',
      yearsToCalculate: 20,
      taxRate: '15',
      reinvestDividends: true
    }
  },
  aggressive: {
    name: "Aggressive Growth",
    icon: "🚀",
    description: "High-growth dividend aristocrats with lower current yield",
    inputs: {
      ticker: '',
      initialInvestment: '50000',
      sharePrice: '150',
      annualDividend: '3',
      dividendYield: '2',
      monthlyContribution: '1000',
      dividendGrowthRate: '10',
      shareAppreciationRate: '12',
      yearsToCalculate: 30,
      taxRate: '15',
      reinvestDividends: true
    }
  },
  fire: {
    name: "Early Retirement (FIRE)",
    icon: "🔥",
    description: "Path to financial independence with high savings rate",
    inputs: {
      ticker: '',
      initialInvestment: '25000',
      sharePrice: '75',
      annualDividend: '3.75',
      dividendYield: '5',
      monthlyContribution: '2500',
      dividendGrowthRate: '7',
      shareAppreciationRate: '8',
      yearsToCalculate: 15,
      taxRate: '15',
      reinvestDividends: true
    }
  },
  aristocrats: {
    name: "Dividend Aristocrats",
    icon: "👑",
    description: "Blue-chip stocks with 25+ years of dividend growth",
    inputs: {
      ticker: '',
      initialInvestment: '75000',
      sharePrice: '120',
      annualDividend: '4.80',
      dividendYield: '4',
      monthlyContribution: '750',
      dividendGrowthRate: '7',
      shareAppreciationRate: '8',
      yearsToCalculate: 25,
      taxRate: '15',
      reinvestDividends: true
    }
  },
  highYield: {
    name: "High Yield Focus",
    icon: "💎",
    description: "REITs and high-yield stocks for immediate income",
    inputs: {
      ticker: '',
      initialInvestment: '150000',
      sharePrice: '50',
      annualDividend: '4',
      dividendYield: '8',
      monthlyContribution: '250',
      dividendGrowthRate: '4',
      shareAppreciationRate: '4',
      yearsToCalculate: 20,
      taxRate: '15',
      reinvestDividends: true
    }
  },
  youngInvestor: {
    name: "Young Investor",
    icon: "🌱",
    description: "Starting small with time on your side",
    inputs: {
      ticker: '',
      initialInvestment: '5000',
      sharePrice: '50',
      annualDividend: '1.50',
      dividendYield: '3',
      monthlyContribution: '300',
      dividendGrowthRate: '8',
      shareAppreciationRate: '10',
      yearsToCalculate: 40,
      taxRate: '15',
      reinvestDividends: true
    }
  }
}

export type PresetKey = keyof typeof DRIP_PRESETS
