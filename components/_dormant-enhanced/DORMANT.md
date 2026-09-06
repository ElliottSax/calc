# Dormant: enhanced DRIP calculator experience

**Moved here:** 2026-09-06, during a dead-code sweep.

`EnhancedDripCalculator.tsx` is a second, more elaborate DRIP calculator
(gamification, stock lookup, AI recommendations, portfolio tracker, market
news feed, tax optimizer, export tools, achievement system, themed UI) that
`git log -S EnhancedDripCalculator -- app` shows was never routed anywhere.
The live DRIP calculator that `app/calculators/drip` and `app/stocks/[symbol]`
actually use is `components/calculators/DripCalculator.tsx`, unaffected by
this move.

Everything in this directory is reachable only through
`EnhancedDripCalculator.tsx` and was moved along with it:
`tools/{DividendCalendar,DividendComparison,DividendScreener,DividendSimulator,
ExportTools,RetirementPlanner,StockLookup,TaxOptimizer}.tsx`,
`hero/AnimatedHero.tsx`, `news/MarketInsights.tsx`,
`InvestmentRecommendations.tsx`, `PortfolioTracker.tsx`,
`AchievementSystem.tsx`, `ThemeToggle.tsx`, `useDebounce.ts`, `stockApi.ts`
(the last two came from `hooks/` and `lib/services/` respectively — moved in
here rather than left as single-file orphan directories, since every one of
their callers lives in this cluster).

**Decision needed:** finish-and-launch (this is a substantially more feature-
rich calculator than the live one — could replace it or ship as a "pro" tier)
or delete the whole cluster. Until decided, leave dormant.
