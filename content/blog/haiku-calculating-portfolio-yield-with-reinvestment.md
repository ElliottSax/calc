---
title: Calculating Portfolio Yield with Reinvestment
slug: calculating-portfolio-yield-with-reinvestment
description: Master the mathematics of portfolio yield calculations and understand
author: Investment Research Team
category: guides
tags: []
published_date: '''2026-03-16'''
provider: haiku
---

# Calculating Portfolio Yield with Reinvestment

Portfolio yield appears straightforward—divide annual distributions by portfolio value—yet this surface calculation obscures the exponential dynamics underneath. Reinvested yield creates compounding that transforms a 3% annual yield into 8%+ effective returns over decades. This guide provides the mathematical frameworks to calculate actual portfolio yields accounting for reinvestment, and demonstrates why precision matters.

## Basic Yield Calculation

The simplest yield calculation is:

**Yield = Annual Distributions / Current Portfolio Value**

A $100,000 portfolio receiving $3,200 in annual dividends yields 3.2%.

However, this static calculation is incomplete because:
1. Your portfolio value changes
2. Distributions vary annually (companies adjust payouts)
3. Reinvestment creates compounding
4. Time horizon affects realized returns

For practical planning, you need dynamic yield calculations that account for these factors.

## Current Yield vs. Yield-on-Cost

Two yield concepts matter:

**Current Yield** = Annual Distribution / Current Market Value

**Yield-on-Cost** = Annual Distribution / Original Purchase Price

Example:
- Purchased SCHD for $50,000 in 2015
- Current value: $75,000
- Annual dividend: $2,400

Current yield: $2,400 / $75,000 = 3.2%
Yield-on-cost: $2,400 / $50,000 = 4.8%

Yield-on-cost appears higher because you earned returns on your original investment. Investors often focus on yield-on-cost for long-term holdings, showing the growing income from a static investment size.

## Dividend Growth and Compounding Yield-on-Cost

Dividend-paying companies typically increase payouts annually. This creates compounding yield-on-cost:

**Example: Coca-Cola (KO)**
- Purchase: $50,000 in 2010 (assuming 1,000 shares at $50/share)
- 2010 dividend: $1.76/share = $1,760 annually
- 2010 yield-on-cost: $1,760 / $50,000 = 3.52%

KO historically raised dividends ~5% annually:
- 2015 dividend: $1.76 × (1.05)^5 = $2.25/share = $2,250
- 2015 yield-on-cost: $2,250 / $50,000 = 4.5%

- 2020 dividend: $1.76 × (1.05)^10 = $2.87/share = $2,870
- 2020 yield-on-cost: $2,870 / $50,000 = 5.74%

- 2025 dividend: $1.76 × (1.05)^15 = $3.66/share = $3,660
- 2025 yield-on-cost: $3,660 / $50,000 = 7.32%

Over 15 years, your yield-on-cost nearly doubled due to dividend growth compounding.

## Calculating Effective Yield with Reinvestment

When dividends are reinvested (DRIP), the calculation becomes:

**Effective Yield = (Ending Value - Beginning Value - New Contributions) / Average Capital Employed**

Here's a worked example:

Starting position: $50,000 initial investment
Annual reinvested dividend: Approximately 3% (compounding)
Duration: 5 years

| Year | Beginning Balance | 3% Dividend | Reinvested Shares | Ending Balance |
|------|-----------------|-------------|------------------|-----------------|
| 1 | $50,000 | $1,500 | $51,500 |
| 2 | $51,500 | $1,545 | $53,045 |
| 3 | $53,045 | $1,591 | $54,636 |
| 4 | $54,636 | $1,639 | $56,275 |
| 5 | $56,275 | $1,688 | $57,963 |

Ending value: $57,963
Beginning value: $50,000
Gain: $7,963
Effective yield: $7,963 / $50,000 = 15.9% over 5 years, or 3% annualized

Notice the effective yield equals the annual yield percentage—reinvestment compounds the fixed percentage into exponential growth, but the yearly rate remains constant.

## Total Return Calculation (Yield + Appreciation)

Portfolio returns include both yield and price appreciation. Total return is:

**Total Return = (Ending Value - Beginning Value - Contributions) / Beginning Value**

More precisely:

**Total Return = (Yield + Price Appreciation) = (Distribution Yield + Capital Appreciation)**

Example:
- Purchased VOO: $100,000
- Annual dividend yield: 1.3%
- Annual price appreciation: 9%
- Total expected return: 10.3%

Over 10 years with reinvestment:
- $100,000 × (1.103)^10 = $272,478
- Total return: 172.5%
- Annualized return: 10.3%

Breaking this down:
- Yield contribution: 1.3% annual
- Appreciation contribution: 9% annual
- Combined: 10.3% annual

## CAGR: The Proper Return Metric

Compound Annual Growth Rate (CAGR) is the annualized return accounting for compounding:

**CAGR = (Ending Value / Beginning Value)^(1/Years) - 1**

This assumes regular contributions compounded annually, which isn't realistic. For portfolios with additions, use:

**CAGR = (Ending Value / Average Capital Employed)^(1/Years) - 1**

Example:
- Started with $50,000 in Year 1
- Added $10,000 annually for 10 years
- Ending value: Year 10 = $230,000

Average capital employed:
- Year 1: $50,000
- Year 2: $60,000
- Year 3: $70,000
- ...
- Year 10: $140,000
- Average: $95,000

CAGR = ($230,000 / $95,000)^(1/10) - 1 = 2.421^0.1 - 1 = 0.0917 = 9.17%

## Calculating Yield in a Multi-Asset Portfolio

Real portfolios hold multiple securities with different yields:

**Weighted Average Yield = (Position 1 Yield × Allocation %) + (Position 2 Yield × Allocation %)**

Example Portfolio:
- 40% VOO (1.3% yield): 0.40 × 1.3% = 0.52%
- 30% SCHD (3.2% yield): 0.30 × 3.2% = 0.96%
- 20% BND (4.1% yield): 0.20 × 4.1% = 0.82%
- 10% JEPI (9.5% yield): 0.10 × 9.5% = 0.95%

Portfolio weighted yield: 0.52% + 0.96% + 0.82% + 0.95% = 3.25%

On a $500,000 portfolio:
- Annual distributions: $500,000 × 0.0325 = $16,250
- Monthly income: $1,354

## Dollar-Cost Averaging Impact on Effective Yield

When you add funds regularly (dollar-cost averaging), your effective yield adjusts. Adding to positions at higher prices reduces yield, while adding at lower prices increases it.

Scenario: Contributing $2,000 monthly to a 3% yielding investment over 12 months

| Month | Starting Balance | Contribution | Monthly Yield (3% ÷ 12) | Ending Balance |
|-------|-----------------|--------------|------------------------|-----------------|
| 1 | $0 | $2,000 | $5 | $2,005 |
| 2 | $2,005 | $2,000 | $10 | $4,015 |
| 3 | $4,015 | $2,000 | $15 | $6,030 |
| 6 | $12,095 | $2,000 | $30 | $14,125 |
| 12 | $24,150 | $2,000 | $60 | $26,210 |

Year-end balance: $26,210
Total contributions: $24,000
Yield earned: $210
Effective yield on contributions: $210 / $24,000 = 0.875%

This is lower than 3% because contributions compound throughout the year. Early contributions earn the full 3% while later contributions earn less.

For practical planning, assume contributions earn half the annual yield since they arrive mid-year on average.

## Forward-Looking Yield Projections

To project future passive income, use:

**Future Annual Income = Portfolio Value × Expected Yield × (1 + Dividend Growth Rate)^Years**

Example: Planning passive income in 15 years

Current situation:
- Portfolio: $300,000
- Expected return: 7% (5% appreciation + 2% yield)
- Expected yield: 2% currently
- Expected dividend growth: 4% annually
- Annual contributions: $15,000

Projected portfolio in 15 years:
- Growth from current: $300,000 × (1.07)^15 = $902,234
- Growth from contributions: $15,000 × [((1.07)^15 - 1) / 0.07] = $340,455
- Total projected portfolio: $1,242,689

Expected yield in 15 years:
- Starting yield: 2%
- With 4% annual growth: 2% × (1.04)^15 = 3.6%

Projected annual income in 15 years:
- $1,242,689 × 3.6% = $44,737
- Monthly income: $3,728

This projects that systematic investing generates nearly $3,700 monthly passive income within 15 years.

## Tax-Adjusted Yield Calculations

Dividends are taxed. Your after-tax yield is lower than pre-tax yield:

**After-Tax Yield = Pre-Tax Yield × (1 - Tax Rate)**

For someone in the 24% marginal tax bracket with 15% qualified dividend rates:

Pre-tax yield: 3%
Tax on dividends: 15%
After-tax yield: 3% × (1 - 0.15) = 2.55%

This demonstrates why tax-advantaged accounts (IRA, 401k) are valuable—yields compound tax-free.

In a tax-advantaged account, 3% reinvested annually for 20 years becomes:
- $100,000 × (1.03)^20 = $180,611

In a taxable account with 15% dividend tax:
- Year 1: $100,000 × 1.0255 = $102,550
- Year 2: $102,550 × 1.0255 = $105,172
- Year 20: Approximately $155,000

Tax-deferred growth generates $25,611 additional wealth (16.5% more) purely from avoiding annual taxes.

## FAQ Section

**Q: Is a 3% portfolio yield realistic?**
A: Yes, for diversified portfolios. VOO yields 1.3%, SCHD yields 3.2%, BND yields 4.1%. A 50/30/20 mix yields approximately 2.4%. If you add high-yield positions (JEPI at 9.5%), the blended yield rises. Most balanced portfolios yield 2-4%.

**Q: How does reinvestment affect my tax bill?**
A: Reinvested dividends are fully taxable in the year received even though you received no cash. In tax-advantaged accounts (IRA, 401k), reinvestment is tax-free. In taxable accounts, track reinvested amounts carefully for tax reporting.

**Q: Should I optimize my portfolio for yield or total return?**
A: For wealth accumulation (20+ years to retirement), optimize total return (yield + appreciation). For income (at or near retirement), optimize yield. Many investors split: 70% growth-focused, 30% yield-focused.

**Q: Can yield be negative?**
A: No, yield is never negative. However, total return can be negative if price appreciation doesn't offset negative yield (rare) or if price declines exceed yield. A stock declining 10% while yielding 3% produces -7% total return.

**Q: How frequently does yield change?**
A: Quarterly, when companies announce dividends. Most US stocks pay dividends quarterly. Some pay monthly (REITs, covered call ETFs). Yields fluctuate when companies adjust payout ratios or when security prices change.

**Q: What's a realistic 30-year yield projection for retirement planning?**
A: Assume 2-3% for balanced portfolios, 3-4% for dividend-focused portfolios. This is conservative relative to current yields but accounts for economic cycles and dividend cuts during recessions. Historical data supports 2-3% safe withdrawal rates from 3-4% yielding portfolios.

## Conclusion

Portfolio yield calculation requires understanding multiple concepts: current yield vs. yield-on-cost, the impact of dividend growth, reinvestment compounding, total return (yield plus appreciation), and tax efficiency. A simple 3% yield reinvested generates 3% annual compounding, which over 30 years transforms $100,000 into $242,726. With regular contributions and strategic allocation, realistic portfolio yields of 3-4% combined with 5-6% price appreciation produce 8-10% total returns—sufficient for comfortable wealth accumulation. Master these calculations, implement automated reinvestment, and optimize for tax efficiency. Your future income streams depend on the precision of today's calculations.
