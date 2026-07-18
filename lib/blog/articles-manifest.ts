/**
 * Articles Manifest - Metadata for all 50 SEO blog articles
 * Includes slug, title, description, keywords, related articles, and search metrics
 */

export interface ArticleMetadata {
  slug: string
  title: string
  metaDescription: string
  keywords: string
  category: 'stock-lists' | 'how-to' | 'strategy' | 'tax' | 'advanced'
  relatedSlugs: string[]
  estimatedSearchVolume: number
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  readTime: number
  publishDate?: string
}

export const ARTICLES_MANIFEST: ArticleMetadata[] = [
  // BATCH 1: Stock Lists (10 articles)
  {
    slug: 'best-monthly-dividend-stocks-2026',
    title: 'Best Monthly Dividend Stocks 2026: 12 Paychecks Per Year',
    metaDescription: 'Discover the top monthly dividend stocks that pay 12 times per year. Complete analysis of reliable monthly payers with yields up to 10%+ for consistent passive income.',
    keywords: 'monthly dividend stocks, monthly dividend payers, best monthly dividends 2026, monthly income stocks',
    category: 'stock-lists',
    relatedSlugs: [
      'top-dividend-etfs-passive-income',
      'best-dividend-stocks-under-50',
      'dividend-stocks-beginners'
    ],
    estimatedSearchVolume: 4800,
    difficulty: 'beginner',
    readTime: 12
  },
  {
    slug: 'top-dividend-etfs-passive-income',
    title: 'Top 10 Dividend ETFs for Passive Income: 2026 Selection',
    metaDescription: 'Compare the best dividend ETFs for 2026. Find high-yield ETFs with low fees, diversification, and consistent dividend payments for passive income investing.',
    keywords: 'dividend ETFs, high-yield ETFs, passive income ETFs, best dividend ETFs 2026',
    category: 'stock-lists',
    relatedSlugs: [
      'best-monthly-dividend-stocks-2026',
      'etfs-vs-individual-dividend-stocks',
      'dividend-investing-vs-index-funds'
    ],
    estimatedSearchVolume: 5200,
    difficulty: 'beginner',
    readTime: 10
  },
  {
    slug: 'best-dividend-stocks-under-50',
    title: 'Best Dividend Stocks Under $50: Affordable Dividend Payers',
    metaDescription: 'Find affordable dividend stocks under $50 that offer high yields and growth potential. Perfect for beginners building a portfolio with limited capital.',
    keywords: 'dividend stocks under 50, cheap dividend stocks, low price dividend stocks, affordable dividend payers',
    category: 'stock-lists',
    relatedSlugs: [
      'best-dividend-stocks-for-beginners',
      'dividend-stocks-beginners',
      'build-dividend-portfolio-from-scratch'
    ],
    estimatedSearchVolume: 3600,
    difficulty: 'beginner',
    readTime: 9
  },
  {
    slug: 'high-yield-reits-2026',
    title: 'High-Yield REITs Worth Buying in 2026',
    metaDescription: 'Discover the best high-yield REITs for 2026. Analysis of real estate investment trusts offering 5-10%+ yields with strong fundamentals.',
    keywords: 'high-yield REITs, best REITs 2026, REIT stocks, real estate dividend stocks',
    category: 'stock-lists',
    relatedSlugs: [
      'best-monthly-dividend-stocks-2026',
      'dividend-investing-vs-index-funds'
    ],
    estimatedSearchVolume: 4200,
    difficulty: 'intermediate',
    readTime: 11
  },
  {
    slug: 'dividend-stocks-beginners',
    title: 'Best Dividend Stocks for Beginners: Start Your Journey',
    metaDescription: 'Complete beginner\'s guide to dividend stocks. Learn how to identify safe, reliable dividend stocks and build your first portfolio.',
    keywords: 'dividend stocks for beginners, beginner dividend investing, how to start dividend investing, safe dividend stocks',
    category: 'stock-lists',
    relatedSlugs: [
      'best-dividend-stocks-under-50',
      'build-dividend-portfolio-from-scratch',
      'calculate-dividend-yield'
    ],
    estimatedSearchVolume: 6800,
    difficulty: 'beginner',
    readTime: 13
  },
  {
    slug: 'top-canadian-dividend-stocks',
    title: 'Top Canadian Dividend Stocks: Banks, Energy & Utilities',
    metaDescription: 'Best Canadian dividend stocks for 2026. Analysis of TSX dividend payers in banking, energy, utilities, and REITs.',
    keywords: 'Canadian dividend stocks, best Canadian stocks, TSX dividend stocks, Canadian dividend payers',
    category: 'stock-lists',
    relatedSlugs: [
      'top-dividend-etfs-passive-income',
      'top-utility-dividend-stocks'
    ],
    estimatedSearchVolume: 3400,
    difficulty: 'intermediate',
    readTime: 10
  },
  {
    slug: 'best-dividend-growth-stocks-2026',
    title: 'Best Dividend Growth Stocks 2026: Consistent Increases',
    metaDescription: 'Find dividend growth stocks with consistent history of increasing payments. Outpace inflation and build wealth over decades.',
    keywords: 'dividend growth stocks, dividend growers, dividend increase stocks, dividend aristocrats',
    category: 'stock-lists',
    relatedSlugs: [
      'dividend-aristocrats-vs-kings',
      'dividend-growth-vs-high-yield'
    ],
    estimatedSearchVolume: 5600,
    difficulty: 'intermediate',
    readTime: 11
  },
  {
    slug: 'top-tech-dividend-stocks',
    title: 'Top Technology Dividend Stocks: Tech Companies That Pay',
    metaDescription: 'Discover tech companies that pay dividends. Find the best technology dividend stocks for growth and income.',
    keywords: 'tech dividend stocks, technology stocks that pay dividends, best tech dividend payers',
    category: 'stock-lists',
    relatedSlugs: [
      'dividend-growth-vs-high-yield',
      'dividend-investing-vs-index-funds'
    ],
    estimatedSearchVolume: 4400,
    difficulty: 'intermediate',
    readTime: 10
  },
  {
    slug: 'best-healthcare-dividend-stocks',
    title: 'Best Healthcare Dividend Stocks: Pharma & Medical REITs',
    metaDescription: 'Top healthcare dividend stocks including pharmaceuticals, biotech, and medical REITs. Benefit from aging demographics.',
    keywords: 'healthcare dividend stocks, pharma dividend stocks, medical REIT stocks, healthcare dividend payers',
    category: 'stock-lists',
    relatedSlugs: [
      'high-yield-reits-2026',
      'dividend-investing-vs-index-funds'
    ],
    estimatedSearchVolume: 3800,
    difficulty: 'intermediate',
    readTime: 10
  },
  {
    slug: 'top-utility-dividend-stocks',
    title: 'Top Utility Dividend Stocks: Stable & Predictable Income',
    metaDescription: 'Best utility stocks for dividend income. Stable, regulated utilities with predictable dividends and low volatility.',
    keywords: 'utility dividend stocks, utility stocks, best utility companies, electricity stocks dividend',
    category: 'stock-lists',
    relatedSlugs: [
      'dividend-stocks-beginners',
      'dividend-investing-vs-index-funds'
    ],
    estimatedSearchVolume: 4600,
    difficulty: 'beginner',
    readTime: 9
  },

  // BATCH 2: How-To Guides (10 articles)
  {
    slug: 'build-1000-month-dividend-portfolio',
    title: 'How to Build a $1,000/Month Dividend Portfolio',
    metaDescription: 'Step-by-step guide to building a dividend portfolio generating $1,000 monthly income. Calculate capital needed, select stocks, and optimize yields.',
    keywords: '$1000 month dividend portfolio, monthly dividend income, passive income $1000 month, dividend portfolio',
    category: 'how-to',
    relatedSlugs: [
      'calculate-dividend-yield',
      'screen-quality-dividend-stocks'
    ],
    estimatedSearchVolume: 8200,
    difficulty: 'intermediate',
    readTime: 14
  },
  {
    slug: 'calculate-dividend-yield',
    title: 'How to Calculate Dividend Yield Correctly',
    metaDescription: 'Learn how to calculate dividend yield, trailing yield, forward yield, and current yield. Avoid common mistakes in dividend analysis.',
    keywords: 'how to calculate dividend yield, dividend yield formula, dividend yield calculator, current yield',
    category: 'how-to',
    relatedSlugs: [
      'read-dividend-payout-ratios',
      'analyze-dividend-safety'
    ],
    estimatedSearchVolume: 5400,
    difficulty: 'beginner',
    readTime: 8
  },
  {
    slug: 'find-dividend-stocks',
    title: 'How to Find Dividend Stocks Before They\'re Popular',
    metaDescription: 'Learn screening techniques to discover undervalued dividend stocks before they become widely known. Build your watchlist effectively.',
    keywords: 'how to find dividend stocks, find best dividend stocks, dividend stock screening, dividend stock research',
    category: 'how-to',
    relatedSlugs: [
      'screen-quality-dividend-stocks',
      'analyze-dividend-safety'
    ],
    estimatedSearchVolume: 4200,
    difficulty: 'intermediate',
    readTime: 11
  },
  {
    slug: 'analyze-dividend-safety',
    title: 'How to Analyze Dividend Safety: Never Get Cut Again',
    metaDescription: 'Complete guide to evaluating dividend safety. Analyze payout ratios, cash flow, and debt to identify sustainable dividends.',
    keywords: 'dividend safety analysis, safe dividend stocks, dividend safety ratio, sustainable dividend',
    category: 'how-to',
    relatedSlugs: [
      'read-dividend-payout-ratios',
      'evaluate-dividend-cuts'
    ],
    estimatedSearchVolume: 6100,
    difficulty: 'intermediate',
    readTime: 12
  },
  {
    slug: 'ex-dividend-date-explained',
    title: 'How to Time Dividend Purchases Using Ex-Dividend Dates',
    metaDescription: 'Understand ex-dividend dates, record dates, and payment dates. Learn when to buy dividend stocks to capture upcoming payments.',
    keywords: 'ex-dividend date, ex-dividend date explained, when to buy dividend stocks, dividend payment dates',
    category: 'how-to',
    relatedSlugs: [
      'dividend-capture-strategy',
      'build-1000-month-dividend-portfolio'
    ],
    estimatedSearchVolume: 4800,
    difficulty: 'beginner',
    readTime: 7
  },
  {
    slug: 'dividend-ladder-strategy',
    title: 'How to Build a Dividend Ladder Strategy',
    metaDescription: 'Create a staggered dividend payment schedule using bonds and dividend stocks. Ensure reliable income every month.',
    keywords: 'dividend ladder, dividend ladder strategy, bond ladder, income ladder',
    category: 'how-to',
    relatedSlugs: [
      'build-1000-month-dividend-portfolio',
      'reinvest-dividends-maximum-growth'
    ],
    estimatedSearchVolume: 3200,
    difficulty: 'intermediate',
    readTime: 10
  },
  {
    slug: 'reinvest-dividends-maximum-growth',
    title: 'How to Reinvest Dividends for Maximum Growth',
    metaDescription: 'Learn DRIP investing strategies to maximize compound growth. Automate dividend reinvestment for exponential wealth building.',
    keywords: 'dividend reinvestment, DRIP investing, reinvest dividends, dividend reinvestment plan',
    category: 'how-to',
    relatedSlugs: [
      'drip-vs-manual-reinvestment',
      'calculate-total-return-dividends'
    ],
    estimatedSearchVolume: 5800,
    difficulty: 'beginner',
    readTime: 10
  },
  {
    slug: 'track-dividend-portfolio',
    title: 'How to Track Your Dividend Portfolio Effectively',
    metaDescription: 'Tools and methods for monitoring dividend stocks, tracking yields, and measuring performance.',
    keywords: 'track dividend portfolio, dividend tracking app, dividend portfolio tracker, dividend portfolio management',
    category: 'how-to',
    relatedSlugs: [
      'calculate-total-return-dividends',
      'build-1000-month-dividend-portfolio'
    ],
    estimatedSearchVolume: 3600,
    difficulty: 'beginner',
    readTime: 8
  },
  {
    slug: 'screen-quality-dividend-stocks',
    title: 'How to Screen for Quality Dividend Stocks',
    metaDescription: 'Step-by-step dividend stock screening process using fundamental metrics. Find quality dividend payers systematically.',
    keywords: 'dividend stock screening, how to screen dividend stocks, dividend metrics, dividend analysis',
    category: 'how-to',
    relatedSlugs: [
      'find-dividend-stocks',
      'analyze-dividend-safety',
      'read-dividend-payout-ratios'
    ],
    estimatedSearchVolume: 4900,
    difficulty: 'intermediate',
    readTime: 12
  },
  {
    slug: 'read-dividend-payout-ratios',
    title: 'How to Read & Interpret Dividend Payout Ratios',
    metaDescription: 'Understand payout ratios, safety margins, and what they tell you about dividend sustainability.',
    keywords: 'dividend payout ratio, payout ratio analysis, dividend payout percentage, safe payout ratio',
    category: 'how-to',
    relatedSlugs: [
      'analyze-dividend-safety',
      'calculate-dividend-yield'
    ],
    estimatedSearchVolume: 4100,
    difficulty: 'beginner',
    readTime: 8
  },

  // BATCH 3: Advanced How-To & Strategy (10 articles)
  {
    slug: 'calculate-total-return-dividends',
    title: 'How to Calculate Total Return with Dividends',
    metaDescription: 'Comprehensive guide to calculating total return including capital gains and reinvested dividends. Measure true investment performance.',
    keywords: 'total return dividend, total return calculation, dividend return, annualized return with dividends',
    category: 'strategy',
    relatedSlugs: [
      'reinvest-dividends-maximum-growth',
      'track-dividend-portfolio'
    ],
    estimatedSearchVolume: 3400,
    difficulty: 'intermediate',
    readTime: 10
  },
  {
    slug: 'dividend-snowball-strategy',
    title: 'How to Create a Dividend Snowball for Exponential Growth',
    metaDescription: 'Use the dividend snowball method to build wealth exponentially. Reinvest dividends into higher-yielding stocks.',
    keywords: 'dividend snowball, dividend snowball strategy, exponential dividend growth, compound dividend growth',
    category: 'strategy',
    relatedSlugs: [
      'reinvest-dividends-maximum-growth',
      'build-1000-month-dividend-portfolio'
    ],
    estimatedSearchVolume: 2800,
    difficulty: 'advanced',
    readTime: 11
  },
  {
    slug: 'diversify-dividend-portfolio',
    title: 'How to Diversify a Dividend Portfolio Across Sectors',
    metaDescription: 'Build a diversified dividend portfolio. Spread across sectors, risk levels, and stock types for optimal safety and growth.',
    keywords: 'diversify dividend portfolio, portfolio diversification, sector diversification, dividend diversification strategy',
    category: 'strategy',
    relatedSlugs: [
      'build-dividend-portfolio-from-scratch',
      'screen-quality-dividend-stocks'
    ],
    estimatedSearchVolume: 4300,
    difficulty: 'intermediate',
    readTime: 12
  },
  {
    slug: 'evaluate-dividend-cuts',
    title: 'How to Evaluate Dividend Cuts and Suspensions',
    metaDescription: 'Understand why companies cut dividends and how to respond. Protect your portfolio from dividend disasters.',
    keywords: 'dividend cut, dividend suspension, dividend reduction, dividend cut stocks',
    category: 'strategy',
    relatedSlugs: [
      'analyze-dividend-safety',
      'evaluate-dividend-cuts'
    ],
    estimatedSearchVolume: 3100,
    difficulty: 'intermediate',
    readTime: 10
  },
  {
    slug: 'covered-calls-dividend-stocks',
    title: 'How to Use Covered Calls with Dividend Stocks',
    metaDescription: 'Generate additional income by selling covered calls on dividend stocks. Advanced strategy for experienced investors.',
    keywords: 'covered calls dividend stocks, covered call strategy, selling covered calls, options on dividend stocks',
    category: 'strategy',
    relatedSlugs: [
      'dividend-reinvestment-vs-cash'
    ],
    estimatedSearchVolume: 3800,
    difficulty: 'advanced',
    readTime: 13
  },
  {
    slug: 'dividend-investing-vs-index-funds',
    title: 'Dividend Investing vs Index Funds: Which Strategy Wins?',
    metaDescription: 'Compare dividend stock investing vs passive index fund investing. Returns, taxes, time requirements, and best approaches.',
    keywords: 'dividend investing vs index funds, index funds vs dividend stocks, which is better, stock picking vs passive',
    category: 'strategy',
    relatedSlugs: [
      'top-dividend-etfs-passive-income',
      'etfs-vs-individual-dividend-stocks'
    ],
    estimatedSearchVolume: 7200,
    difficulty: 'intermediate',
    readTime: 12
  },
  {
    slug: 'drip-vs-manual-reinvestment',
    title: 'DRIP vs Manual Reinvestment: Which Strategy is Better?',
    metaDescription: 'Compare automatic dividend reinvestment plans (DRIP) vs manual reinvestment. Pros, cons, and tax implications.',
    keywords: 'DRIP vs manual reinvestment, dividend reinvestment plan, DRIP investing benefits, manual vs automatic',
    category: 'strategy',
    relatedSlugs: [
      'reinvest-dividends-maximum-growth',
      'dividend-reinvestment-vs-cash'
    ],
    estimatedSearchVolume: 4200,
    difficulty: 'intermediate',
    readTime: 10
  },
  {
    slug: 'dividend-growth-vs-high-yield',
    title: 'Dividend Growth vs High Yield: 30-Year Analysis',
    metaDescription: 'Compare 30-year performance of dividend growth strategies vs high-yield strategies. Returns, risks, and best approach.',
    keywords: 'dividend growth vs high yield, growth vs yield, dividend growers vs high yield stocks, long-term dividend strategy',
    category: 'strategy',
    relatedSlugs: [
      'best-dividend-growth-stocks-2026',
      'high-yield-reits-2026'
    ],
    estimatedSearchVolume: 5900,
    difficulty: 'advanced',
    readTime: 14
  },
  {
    slug: 'roth-ira-vs-taxable-dividends',
    title: 'Roth IRA vs Taxable Accounts for Dividend Investing',
    metaDescription: 'Compare Roth IRA and taxable accounts for dividend investing. Tax implications, strategies, and optimal asset location.',
    keywords: 'Roth IRA dividend investing, taxable vs Roth, account type for dividends, tax-advantaged dividend investing',
    category: 'strategy',
    relatedSlugs: [
      'best-accounts-dividend-investing',
      'qualified-vs-ordinary-dividends'
    ],
    estimatedSearchVolume: 5100,
    difficulty: 'intermediate',
    readTime: 11
  },
  {
    slug: 'qualified-vs-ordinary-dividends',
    title: 'Qualified vs Ordinary Dividends: Tax Implications Explained',
    metaDescription: 'Understand qualified dividends (taxed at capital gains rates) vs ordinary dividends. Minimize tax burden legally.',
    keywords: 'qualified dividends, ordinary dividends, dividend tax rates, qualified dividend tax treatment',
    category: 'strategy',
    relatedSlugs: [
      'dividend-tax-guide-2026',
      'minimize-dividend-taxes'
    ],
    estimatedSearchVolume: 4800,
    difficulty: 'intermediate',
    readTime: 9
  },

  // BATCH 4: Tax, Advanced, Strategy (10 articles)
  {
    slug: 'dollar-cost-averaging-dividends',
    title: 'Dollar-Cost Averaging for Dividend Stocks: Proven Method',
    metaDescription: 'Use dollar-cost averaging to build a dividend portfolio systematically. Reduce timing risk and emotional decisions.',
    keywords: 'dollar-cost averaging, DCA, dividend investing method, systematic investing, dividend portfolio building',
    category: 'strategy',
    relatedSlugs: [
      'build-dividend-portfolio-from-scratch',
      'build-1000-month-dividend-portfolio'
    ],
    estimatedSearchVolume: 4600,
    difficulty: 'beginner',
    readTime: 10
  },
  {
    slug: 'value-vs-growth-dividend-stocks',
    title: 'Value vs Growth Dividend Stocks: Which Delivers Better Returns?',
    metaDescription: 'Compare value dividend stocks vs growth dividend stocks. Returns, risks, and which strategy suits your goals.',
    keywords: 'value dividend stocks, growth dividend stocks, value vs growth investing, dividend growth stocks',
    category: 'strategy',
    relatedSlugs: [
      'best-dividend-growth-stocks-2026',
      'dividend-growth-vs-high-yield'
    ],
    estimatedSearchVolume: 4200,
    difficulty: 'intermediate',
    readTime: 11
  },
  {
    slug: 'etfs-vs-individual-dividend-stocks',
    title: 'ETFs vs Individual Dividend Stocks: Pros and Cons',
    metaDescription: 'Compare dividend ETFs vs picking individual stocks. Cost, diversification, control, and which approach wins.',
    keywords: 'dividend ETFs vs stocks, ETF vs individual stocks, dividend fund vs stocks, which is better',
    category: 'strategy',
    relatedSlugs: [
      'top-dividend-etfs-passive-income',
      'dividend-investing-vs-index-funds'
    ],
    estimatedSearchVolume: 5400,
    difficulty: 'intermediate',
    readTime: 11
  },
  {
    slug: 'dividend-strategy-by-age',
    title: 'Dividend Strategy by Age: Young vs Mid-Career vs Retired',
    metaDescription: 'Tailor your dividend strategy to your age and life stage. Different approaches for different ages optimize wealth building.',
    keywords: 'dividend strategy by age, young dividend investor, dividend strategy retirement, age-based dividend strategy',
    category: 'strategy',
    relatedSlugs: [
      'build-1000-month-dividend-portfolio',
      'roth-ira-vs-taxable-dividends'
    ],
    estimatedSearchVolume: 3800,
    difficulty: 'intermediate',
    readTime: 11
  },
  {
    slug: 'dividend-reinvestment-vs-cash',
    title: 'Dividend Reinvestment vs Taking Cash: Which is Better?',
    metaDescription: 'Decide whether to reinvest dividends or take the cash. Pros, cons, tax implications, and decision framework.',
    keywords: 'reinvest dividends or take cash, dividend reinvestment benefits, take dividend income vs reinvest',
    category: 'strategy',
    relatedSlugs: [
      'reinvest-dividends-maximum-growth',
      'drip-vs-manual-reinvestment'
    ],
    estimatedSearchVolume: 4100,
    difficulty: 'intermediate',
    readTime: 9
  },
  {
    slug: 'dividend-tax-guide-2026',
    title: 'Complete Dividend Tax Guide 2026: Minimize Your Tax Bill',
    metaDescription: 'Comprehensive 2026 tax guide for dividend investors. Qualified dividends, tax brackets, credits, and optimization strategies.',
    keywords: 'dividend tax 2026, dividend tax rates, dividend taxes, how dividends are taxed, dividend tax guide',
    category: 'tax',
    relatedSlugs: [
      'minimize-dividend-taxes',
      'qualified-vs-ordinary-dividends'
    ],
    estimatedSearchVolume: 6800,
    difficulty: 'intermediate',
    readTime: 14
  },
  {
    slug: 'best-accounts-dividend-investing',
    title: 'Best Accounts for Dividend Investing: 401k, IRA, Taxable',
    metaDescription: 'Compare account types for dividend investing. 401k, Traditional IRA, Roth IRA, and taxable accounts explained.',
    keywords: 'best account for dividends, dividend investing accounts, IRA vs taxable, 401k dividend investing',
    category: 'tax',
    relatedSlugs: [
      'roth-ira-vs-taxable-dividends',
      'dividend-tax-guide-2026'
    ],
    estimatedSearchVolume: 4900,
    difficulty: 'intermediate',
    readTime: 11
  },
  {
    slug: 'minimize-dividend-taxes',
    title: 'How to Minimize Dividend Taxes Legally in 2026',
    metaDescription: 'Legal strategies to reduce dividend tax burden. Asset location, account types, and timing strategies explained.',
    keywords: 'minimize dividend taxes, reduce dividend taxes, dividend tax strategies, dividend tax efficiency',
    category: 'tax',
    relatedSlugs: [
      'dividend-tax-guide-2026',
      'tax-loss-harvesting-dividends'
    ],
    estimatedSearchVolume: 5200,
    difficulty: 'intermediate',
    readTime: 10
  },
  {
    slug: 'foreign-dividend-tax-withholding',
    title: 'Foreign Dividend Tax Withholding Explained: Recovery & Optimization',
    metaDescription: 'Understand foreign dividend tax withholding (WHT), foreign tax credits, and how to optimize international dividend investing.',
    keywords: 'foreign dividend tax, dividend withholding tax, foreign tax credit, international dividend investing tax',
    category: 'tax',
    relatedSlugs: [
      'dividend-tax-guide-2026',
      'minimize-dividend-taxes'
    ],
    estimatedSearchVolume: 2800,
    difficulty: 'advanced',
    readTime: 12
  },
  {
    slug: 'tax-loss-harvesting-dividends',
    title: 'Tax-Loss Harvesting with Dividend Stocks: Complete Guide',
    metaDescription: 'Use tax-loss harvesting to offset dividend income taxes. Strategy, rules, and execution for dividend portfolios.',
    keywords: 'tax-loss harvesting, tax loss harvesting dividend stocks, tax harvesting, dividend tax loss',
    category: 'tax',
    relatedSlugs: [
      'minimize-dividend-taxes',
      'dividend-tax-guide-2026'
    ],
    estimatedSearchVolume: 3600,
    difficulty: 'advanced',
    readTime: 11
  },

  // BATCH 5: Advanced Topics (10 articles)
  {
    slug: 'dividend-capture-strategy',
    title: 'Dividend Capture Strategy: Does It Work in 2026?',
    metaDescription: 'Evaluate dividend capture strategy. Does trying to capture dividends just before ex-date actually work? Analysis and risks.',
    keywords: 'dividend capture strategy, dividend capture investing, capture dividend payment, dividend capture trading',
    category: 'advanced',
    relatedSlugs: [
      'ex-dividend-date-explained',
      'covered-calls-dividend-stocks'
    ],
    estimatedSearchVolume: 3200,
    difficulty: 'advanced',
    readTime: 11
  },
  {
    slug: 'how-companies-decide-dividends',
    title: 'How Companies Decide Dividend Amounts and Frequencies',
    metaDescription: 'Understand how boards decide dividends. Payout ratios, cash flow, growth plans, and shareholder considerations.',
    keywords: 'how companies decide dividends, dividend decision, dividend policy, why companies pay dividends',
    category: 'advanced',
    relatedSlugs: [
      'read-dividend-payout-ratios',
      'analyze-dividend-safety'
    ],
    estimatedSearchVolume: 2900,
    difficulty: 'intermediate',
    readTime: 9
  },
  {
    slug: 'unsustainable-dividend-warning-signs',
    title: 'Warning Signs of an Unsustainable Dividend: Protect Your Portfolio',
    metaDescription: 'Learn red flags that signal an unsustainable dividend. Avoid dividend cuts by spotting problems early.',
    keywords: 'unsustainable dividend, dividend cut warning signs, dividend red flags, dividend sustainability',
    category: 'advanced',
    relatedSlugs: [
      'analyze-dividend-safety',
      'evaluate-dividend-cuts'
    ],
    estimatedSearchVolume: 3900,
    difficulty: 'intermediate',
    readTime: 10
  },
  {
    slug: 'dividend-aristocrats-vs-kings',
    title: 'Dividend Aristocrats vs Dividend Kings: Which Are Better?',
    metaDescription: 'Compare Dividend Aristocrats (25+ years) vs Dividend Kings (50+ years). Returns, safety, and suitability analysis.',
    keywords: 'dividend aristocrats vs kings, dividend king stocks, dividend aristocrats, best dividend stocks 25 years',
    category: 'advanced',
    relatedSlugs: [
      'best-dividend-growth-stocks-2026',
      'dividend-growth-vs-high-yield'
    ],
    estimatedSearchVolume: 4100,
    difficulty: 'intermediate',
    readTime: 10
  },
  {
    slug: 'build-dividend-portfolio-from-scratch',
    title: 'Building a Dividend Portfolio from Scratch: Complete Roadmap',
    metaDescription: 'Step-by-step roadmap to build a dividend portfolio from zero. Capital, stock selection, diversification, and milestones.',
    keywords: 'build dividend portfolio from scratch, how to build dividend portfolio, dividend portfolio for beginners, start dividend investing',
    category: 'advanced',
    relatedSlugs: [
      'dividend-stocks-beginners',
      'build-1000-month-dividend-portfolio',
      'screen-quality-dividend-stocks'
    ],
    estimatedSearchVolume: 7600,
    difficulty: 'intermediate',
    readTime: 15
  },
  {
    slug: 'dividend-stocks-for-women',
    title: 'Dividend Investing for Women: Build Wealth Your Way',
    metaDescription: 'Dividend investing strategies tailored for women investors. Overcome common obstacles and build financial independence.',
    keywords: 'dividend stocks for women, women dividend investing, female investors, dividend portfolio women',
    category: 'advanced',
    relatedSlugs: [
      'dividend-stocks-beginners',
      'build-dividend-portfolio-from-scratch'
    ],
    estimatedSearchVolume: 2800,
    difficulty: 'beginner',
    readTime: 10
  },
  {
    slug: 'dividend-stocks-small-accounts',
    title: 'Best Dividend Stocks for Small Accounts: Start With $500',
    metaDescription: 'Dividend stocks perfect for investors with limited capital. Build wealth starting with just $500-$1,000.',
    keywords: 'dividend stocks small account, small investment dividend stocks, micro investing dividends, penny dividend stocks',
    category: 'advanced',
    relatedSlugs: [
      'dividend-stocks-beginners',
      'build-1000-month-dividend-portfolio'
    ],
    estimatedSearchVolume: 4200,
    difficulty: 'beginner',
    readTime: 9
  },
  {
    slug: 'dividend-stocks-large-portfolios',
    title: 'Advanced Dividend Strategies for Large Portfolios ($1M+)',
    metaDescription: 'Advanced dividend strategies for substantial investment portfolios. Optimize taxes and maximize returns at scale.',
    keywords: 'large dividend portfolio, high net worth dividend investing, portfolio dividend strategy, wealth management dividends',
    category: 'advanced',
    relatedSlugs: [
      'minimize-dividend-taxes',
      'dividend-tax-guide-2026',
      'tax-loss-harvesting-dividends'
    ],
    estimatedSearchVolume: 3200,
    difficulty: 'advanced',
    readTime: 12
  },
  {
    slug: 'international-dividend-stocks',
    title: 'International Dividend Stocks: Expand Beyond US Markets',
    metaDescription: 'Dividend stocks from developed and emerging markets. Diversify globally and access higher yields.',
    keywords: 'international dividend stocks, foreign dividend stocks, global dividend investing, emerging market dividends',
    category: 'advanced',
    relatedSlugs: [
      'top-canadian-dividend-stocks',
      'diversify-dividend-portfolio',
      'foreign-dividend-tax-withholding'
    ],
    estimatedSearchVolume: 3600,
    difficulty: 'intermediate',
    readTime: 11
  },
  {
    slug: 'recession-proof-dividend-stocks',
    title: 'Recession-Proof Dividend Stocks: Survive Economic Downturns',
    metaDescription: 'Find dividend stocks that survive recessions and maintain payments during economic downturns.',
    keywords: 'recession proof dividend stocks, defensive dividend stocks, economic downturn stocks, stable dividend stocks',
    category: 'advanced',
    relatedSlugs: [
      'analyze-dividend-safety',
      'unsustainable-dividend-warning-signs',
      'dividend-aristocrats-vs-kings'
    ],
    estimatedSearchVolume: 4400,
    difficulty: 'intermediate',
    readTime: 11
  }
]

// Utility functions
export function getArticleBySlug(slug: string): ArticleMetadata | undefined {
  return ARTICLES_MANIFEST.find(article => article.slug === slug)
}

export function getRelatedArticles(slug: string): ArticleMetadata[] {
  const article = getArticleBySlug(slug)
  if (!article) return []
  return article.relatedSlugs
    .map(relSlug => getArticleBySlug(relSlug))
    .filter((a): a is ArticleMetadata => a !== undefined)
}

export function getArticlesByCategory(category: ArticleMetadata['category']): ArticleMetadata[] {
  return ARTICLES_MANIFEST.filter(article => article.category === category)
}

export function getArticlesByDifficulty(difficulty: ArticleMetadata['difficulty']): ArticleMetadata[] {
  return ARTICLES_MANIFEST.filter(article => article.difficulty === difficulty)
}

export function getTopSearchVolumeArticles(limit: number = 10): ArticleMetadata[] {
  return [...ARTICLES_MANIFEST]
    .sort((a, b) => b.estimatedSearchVolume - a.estimatedSearchVolume)
    .slice(0, limit)
}
