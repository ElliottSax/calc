/**
 * Required Minimum Distribution (RMD) math for Traditional IRAs, SEP/SIMPLE
 * IRAs, and employer plans (401(k), 403(b), etc.).
 *
 * Core formula (IRS Publication 590-B, "Distributions from Individual
 * Retirement Arrangements (IRAs)", Worksheet "Figuring Your Required Minimum
 * Distribution", used with Appendix B Table III):
 *
 *   RMD = Prior year Dec 31 account balance / Distribution period (Uniform
 *         Lifetime Table, keyed by the age the owner turns in the
 *         distribution year)
 *
 * Uniform Lifetime Table (IRS Pub. 590-B, Appendix B, Table III) is the table
 * almost every account owner uses. It does NOT apply when the sole
 * beneficiary is a spouse more than 10 years younger than the owner -- IRS
 * rules require the two-dimensional Joint Life and Last Survivor Table
 * (Table II) instead, which this module does not implement (see
 * `needsJointLifeTable` below); that case is flagged, not silently
 * miscalculated.
 *
 * Table III values below are the version effective for distribution calendar
 * years beginning on or after January 1, 2022 (updated by T.D. 9930, 87 FR
 * 10504, and reprinted in the current IRS Pub. 590-B). Spot-checked against
 * Fidelity's and Schwab's published RMD divisor tables, which cite the same
 * source.
 *
 * RMD applicable age by birth year (SECURE 2.0 Act of 2022, Section 107,
 * amending IRC Sec. 401(a)(9)): source IRS.gov "Retirement topics -
 * Required Minimum Distributions (RMDs)".
 *   - Born before 1951: age 72 (already required to have started RMDs)
 *   - Born 1951-1959: age 73
 *   - Born 1960 or later: age 75
 *
 * Excise tax for missing/under-taking an RMD (IRC Sec. 4974(a), as amended by
 * SECURE 2.0 Act Section 302): 25% of the shortfall (Required RMD minus the
 * amount actually distributed), reduced to 10% if the shortfall is corrected
 * within the "correction window" (generally by the end of the second tax
 * year following the year the tax was imposed) via a timely distribution and
 * a filed Form 5329.
 */

export const UNIFORM_LIFETIME_TABLE: Record<number, number> = {
  72: 27.4, 73: 26.5, 74: 25.5, 75: 24.6, 76: 23.7, 77: 22.9, 78: 22.0, 79: 21.1,
  80: 20.2, 81: 19.4, 82: 18.5, 83: 17.7, 84: 16.8, 85: 16.0, 86: 15.2, 87: 14.4,
  88: 13.7, 89: 12.9, 90: 12.2, 91: 11.5, 92: 10.8, 93: 10.1, 94: 9.5, 95: 8.9,
  96: 8.4, 97: 7.8, 98: 7.3, 99: 6.8, 100: 6.4, 101: 6.0, 102: 5.6, 103: 5.2,
  104: 4.9, 105: 4.6, 106: 4.3, 107: 4.1, 108: 3.9, 109: 3.7, 110: 3.5,
  111: 3.4, 112: 3.3, 113: 3.1, 114: 3.0, 115: 2.9, 116: 2.8, 117: 2.7,
  118: 2.5, 119: 2.3, 120: 2.0,
}

export type AccountType = 'ira' | 'employer'

/** SECURE 2.0 Act Sec. 107: the age at which RMDs must begin, by birth year. */
export function rmdApplicableAge(birthYear: number): number {
  if (birthYear < 1951) return 72
  if (birthYear <= 1959) return 73
  return 75
}

/** Table III divisor for a given age, or null if RMDs haven't started (age below 72) or age is invalid. */
export function uniformDivisor(age: number): number | null {
  if (!Number.isFinite(age) || age < 72) return null
  const cappedAge = Math.min(Math.floor(age), 120)
  return UNIFORM_LIFETIME_TABLE[cappedAge] ?? null
}

/**
 * The Joint Life and Last Survivor Table (Table II) applies instead of the
 * Uniform Lifetime Table only when the sole beneficiary for the entire
 * distribution year is a spouse more than 10 years younger than the owner
 * (IRS Pub. 590-B). It produces a longer divisor (smaller required RMD) than
 * Table III. This calculator does not embed Table II (a 2-D table keyed by
 * both ages); flag the case instead of guessing at values.
 */
export function needsJointLifeTable(ownerAge: number, spouseIsSoleBeneficiary: boolean, spouseAge: number | null): boolean {
  if (!spouseIsSoleBeneficiary || spouseAge == null || !Number.isFinite(spouseAge)) return false
  return ownerAge - spouseAge > 10
}

export interface RMDInput {
  ownerAge: number
  priorYearEndBalance: number
}

export interface RMDResult {
  divisor: number
  rmd: number
}

/** RMD = prior year-end balance / Uniform Lifetime Table divisor. Returns null if not yet subject to RMDs. */
export function calculateRMD({ ownerAge, priorYearEndBalance }: RMDInput): RMDResult | null {
  const divisor = uniformDivisor(ownerAge)
  if (divisor == null || priorYearEndBalance <= 0) return null
  return { divisor, rmd: priorYearEndBalance / divisor }
}

export interface PenaltyInput {
  requiredRMD: number
  amountWithdrawn: number
  correctedWithinWindow: boolean
}

/** IRC Sec. 4974(a) excise tax: 25% of the shortfall, or 10% if corrected within the SECURE 2.0 correction window. */
export function calculateShortfallPenalty({ requiredRMD, amountWithdrawn, correctedWithinWindow }: PenaltyInput): number {
  const shortfall = Math.max(requiredRMD - amountWithdrawn, 0)
  const rate = correctedWithinWindow ? 0.1 : 0.25
  return shortfall * rate
}

export interface ProjectionYear {
  year: number
  age: number
  divisor: number | null
  rmdRequired: number
  balanceStart: number
  balanceAfter: number
}

export interface ProjectionInput {
  birthYear: number
  startYear: number
  /** Account balance as of Dec 31 of the year before startYear. */
  priorYearEndBalance: number
  expectedReturnRate: number
  years: number
}

/**
 * Year-by-year RMD schedule. Each year: RMD is taken from the balance as of
 * the prior Dec 31, then the remainder is assumed to grow at
 * `expectedReturnRate` through the rest of the year, becoming the next
 * year's opening (prior-year-end) balance. A simplification (real accounts
 * see intra-year growth before the withdrawal too), but the standard
 * approach used by most RMD projection tools, and clearly the same
 * `(balance - RMD) x (1 + growth)` step for every year of the projection.
 */
export function projectRMDSchedule({ birthYear, startYear, priorYearEndBalance, expectedReturnRate, years }: ProjectionInput): ProjectionYear[] {
  const schedule: ProjectionYear[] = []
  let balance = priorYearEndBalance
  const r = expectedReturnRate / 100
  for (let i = 0; i < years; i++) {
    const year = startYear + i
    const age = year - birthYear
    const divisor = uniformDivisor(age)
    const rmdRequired = divisor != null ? balance / divisor : 0
    const balanceAfter = Math.max(balance - rmdRequired, 0) * (1 + r)
    schedule.push({ year, age, divisor, rmdRequired, balanceStart: balance, balanceAfter })
    balance = balanceAfter
  }
  return schedule
}
