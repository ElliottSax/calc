---
title: '''''''Municipal Bonds Portfolio Beta Calculator: Step-by-Step Guide'''''''
slug: municipal-bonds-portfolio-beta-calculator-step-by-step-guide
description: This article provides valuable insights and information.
author: Content Team
category: guides
tags: []
published_date: '''2026-03-16'''
provider: haiku
---

## Understanding Bond Beta

Municipal bond beta measures interest rate sensitivity and credit risk relative to a bond market index. Unlike stock beta (measuring equity market correlation), bond beta primarily captures interest rate duration risk.

Formula: Bond Beta = Covariance(Bond Return, Index Return) / Variance(Index Return)

## Typical Municipal Bond Betas

Different municipal bond types have distinct betas:

| Bond Type | Typical Beta | Duration | Risk Level |
|---|---|---|---|
| Short-term municipals (VMBS) | 0.2 | 2-3 years | Very low |
| Intermediate municipals (VTEB) | 0.6 | 5-6 years | Low-moderate |
| Long-term municipals (VMLX) | 1.1 | 12-15 years | Moderate |
| High-yield municipals (VWAHX) | 0.8 | 5-7 years | Moderate-high |
| Pre-refunded municipals (specialty) | -0.1 | Near zero | Defensive |

VTEB's 0.6 beta means it moves 60% as much as market indices.

## Step-by-Step Portfolio Beta Calculation

**Example: $500,000 municipal-focused portfolio**

**Step 1: List holdings with betas**

| Holding | Amount | Weight | Beta |
|---|---|---|---|
| VTEB (Municipal) | $250,000 | 50% | 0.60 |
| BND (Taxable) | $100,000 | 20% | 0.15 |
| VGSH (Short Munis) | $80,000 | 16% | 0.20 |
| SCHD (Dividend) | $50,000 | 10% | 0.95 |
| Cash | $20,000 | 4% | 0.00 |

**Step 2: Calculate weighted betas**

| Holding | Weight × Beta |
|---|---|
| VTEB | 50% × 0.60 = 0.30 |
| BND | 20% × 0.15 = 0.03 |
| VGSH | 16% × 0.20 = 0.032 |
| SCHD | 10% × 0.95 = 0.095 |
| Cash | 4% × 0.00 = 0.00 |
| **Portfolio Beta** | **0.487** |

Portfolio beta of 0.487 means 48.7% of market volatility.

## Duration-Based Beta Calculation

Alternative approach using duration (more accurate for bonds):

**Formula: Bond Beta ≈ Duration × Interest Rate Sensitivity**

**Example: VTEB portfolio analysis**

VTEB duration: 5.8 years

If interest rates change 1%:
- Approximate price change: -5.8%
- Beta proxy: 5.8 / 10 = 0.58 (close to actual 0.60)

For 2% rate change:
- Approximate price change: -11.6%
- Return: -11.6%

## Impact of Allocation Changes

**Original portfolio beta: 0.487**

**Scenario: Shift $50,000 from SCHD to VTEB**

New holdings:
- VTEB: $300,000 (60% weight, 0.60 beta) = 0.36
- BND: $100,000 (20% weight, 0.15 beta) = 0.03
- VGSH: $80,000 (16% weight, 0.20 beta) = 0.032
- SCHD: $0 (0% weight)
- Cash: $20,000 (4% weight, 0.00 beta) = 0.00

New portfolio beta: 0.452 (decreased, less risky)

Impact: Shift to municipal bonds reduced beta by 3.5 percentage points, reducing portfolio volatility.

## Stress Testing with Beta

Beta helps estimate portfolio behavior in market stress:

**S&P 500 crash scenario: -30%**

Portfolio beta of 0.487 predicts:
- Portfolio decline: 0.487 × (-30%) = -14.6%
- $500,000 portfolio: Falls to $427,000
- Loss: $73,000

Compare to:
- All stocks (beta 1.0): -$150,000 loss
- All bonds (beta -0.1): +$5,000 gain
- Municipal strategy: Moderate loss with protection

## Credit Beta vs. Duration Beta

Municipal bond beta contains two components:

**Duration Beta (interest rate risk):**
- Accounts for 60-70% of bond volatility
- VTEB duration 5.8 years = 0.58 duration beta

**Credit Beta (default risk):**
- Accounts for 30-40% of bond volatility
- VTEB average A+ rating = 0.02 credit beta
- Higher-yield municipals: 0.05-0.10 credit beta

Total beta = Duration beta + Credit beta
VTEB: 0.58 + 0.02 = 0.60

## Comparing Municipal Strategies

**Three municipal allocation strategies with different betas:**

Strategy A: Conservative (0.35 portfolio beta)
- 60% VGSH (short-term): 0.20
- 30% VMBS (bonds): 0.045
- 10% Cash: 0.00
- Total beta: 0.245

Strategy B: Moderate (0.50 portfolio beta)
- 50% VTEB (intermediate): 0.30
- 30% BND (taxable): 0.045
- 20% Cash: 0.00
- Total beta: 0.345

Strategy C: Aggressive (0.75 portfolio beta)
- 60% VMLX (long-term): 0.66
- 25% VWAHX (high-yield): 0.20
- 15% SCHD (dividend): 0.1425
- Total beta: 1.0025

Different strategies suit different risk profiles.

## Rebalancing to Target Beta

**Target portfolio beta: 0.55**

Current portfolio beta: 0.487 (below target—too conservative)

Recommended rebalancing:
- Reduce VGSH (short-term): From $80,000 to $50,000 (-$30,000)
- Increase VTEB (intermediate): From $250,000 to $280,000 (+$30,000)

New calculation:
- VTEB: 280/500 × 0.60 = 0.336
- Other holdings: 0.167
- New beta: 0.503 (closer to 0.55 target)

Continue adjusting until beta reaches target.

## Frequently Asked Questions

**Q1: Should municipal portfolio beta match stock beta?**
A: No. Municipal beta of 0.4-0.6 suits conservative portfolios; stock beta of 0.8-1.0 suits growth portfolios.

**Q2: What municipal bond beta targets which investor?**
A: Ages 60+: 0.3-0.4; Ages 40-60: 0.4-0.6; Ages 25-40: 0.5-0.8.

**Q3: Can municipal bond beta be negative?**
A: Rarely. Pre-refunded municipal bonds with low durations approach 0.0 beta.

**Q4: How often should I recalculate portfolio beta?**
A: Quarterly review sufficient. Rebalance if beta drifts 0.15+ from target.

**Q5: Does VTEB beta remain constant?**
A: No. As duration changes and credit environment shifts, VTEB beta fluctuates 0.5-0.7 range.
