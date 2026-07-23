// Dividend Engines — free course content.
// Static, no DB required. Lesson `content` is markdown (rendered with react-markdown).

export type CourseLevel = 'beginner' | 'intermediate' | 'advanced'

export interface Lesson {
  slug: string
  title: string
  description: string
  readTime: string
  content: string
  /** Optional hands-on step that sends the reader into one of our calculators. */
  tryIt?: { title: string; description: string; href: string; label: string }
}

export interface Course {
  slug: string
  title: string
  description: string
  level: CourseLevel
  estimatedTime: string
  lessons: Lesson[]
}

const dividendInvesting101: Lesson[] = [
  {
    slug: 'what-a-dividend-actually-is',
    title: 'What a Dividend Actually Is',
    description: 'How companies pay you, what the four key dates mean, and why the share price drops on the ex-dividend date.',
    readTime: '6 min',
    content: `## Getting paid to own a business

A dividend is a slice of a company's profit paid out to shareholders in cash. If you own 100 shares of a company paying $0.50 per share each quarter, you receive $50 every three months — whether or not the share price went up.

That last part is the whole appeal: **dividends pay you without requiring you to sell anything.**

### The four dates that matter

Every dividend moves through the same four dates, and confusing them is the most common beginner mistake:

- **Declaration date** — the company announces the dividend amount and schedule.
- **Ex-dividend date** — the cutoff. You must own the stock *before* this date to get the payment. Buy on or after it and the seller keeps the dividend.
- **Record date** — the company checks its books for who owns shares.
- **Payment date** — cash actually lands in your account.

### Why the price drops on the ex-dividend date

On the ex-dividend date, the share price typically falls by roughly the dividend amount. This surprises people, but it's just arithmetic: the company literally sent cash out the door, so it's worth that much less.

This means you cannot "capture" a free dividend by buying the day before and selling the day after — a strategy called dividend capture. After the price drop (and taxes, and trading costs), you usually end up behind.

### What actually builds wealth

The real return comes from holding quality companies that pay *and grow* their dividends over years. A 3% yield that grows 7% a year becomes a much larger income stream on your original investment a decade later. That compounding — not dividend capture — is what this course is about.`,
  },
  {
    slug: 'yield-vs-growth',
    title: 'Yield vs. Growth: The Numbers That Matter',
    description: 'Why a high yield is often a warning sign, and how to read payout ratio and dividend growth rate.',
    readTime: '7 min',
    content: `## The number everyone looks at first (and shouldn't)

**Dividend yield** = annual dividend ÷ share price. A $100 stock paying $3/year yields 3%.

Notice the price is the denominator. That means yield rises when the price *falls*. A stock yielding 12% is usually not generous — it's usually in trouble, and the market is pricing in a dividend cut.

### The payout ratio tells you if it's safe

**Payout ratio** = dividends ÷ earnings. It answers: how much of its profit is the company handing out?

- **Under 50%** — comfortable, plenty of room to keep paying and raising.
- **50–75%** — normal for mature, stable businesses (utilities, consumer staples).
- **Over 80–90%** — fragile. One bad year and the dividend gets cut.
- **Over 100%** — the company is paying out more than it earns. That's funded by debt or savings, and it cannot last.

REITs are the exception — they're legally required to distribute most of their income, so high payout ratios are normal there. Judge them on funds from operations (FFO) instead.

### Growth beats starting yield over time

Compare two stocks:

- **Stock A:** 5% yield, no growth.
- **Stock B:** 2.5% yield, growing 10% a year.

Stock A pays more today. But Stock B's payment doubles roughly every seven years. Around year 10–12, B is paying you more *on your original investment* — and it keeps pulling ahead, usually with a rising share price too.

This is **yield on cost**: the dividend you now receive measured against what you originally paid. It's the metric that matters for long-term income.

### The quick screen

Before buying anything for income, ask: Is the payout ratio sustainable? Has the dividend actually grown over the last 5–10 years? Would I want to own this business if it paid nothing? If the answer to the last one is no, the yield won't save you.`,
  },
  {
    slug: 'how-drip-compounding-works',
    title: 'How DRIP Compounding Really Works',
    description: 'Reinvesting dividends turns a linear income stream into an exponential one — here is the math.',
    readTime: '6 min',
    content: `## Reinvesting turns income into a snowball

A **DRIP** (Dividend Reinvestment Plan) automatically uses your dividends to buy more shares. Those new shares pay their own dividends, which buy more shares again.

Three forces stack on top of each other:

1. **More shares** each time a dividend is paid.
2. **A growing dividend per share**, if you own quality companies that raise their payouts.
3. **Share price appreciation** over time.

Each one alone is decent. Together, over decades, they're the entire argument for dividend investing.

### The part people underestimate

Compounding is quiet for a long time and then becomes dramatic. In the early years, reinvested dividends barely move the needle — which is exactly why most people give up. The curve bends late.

Consider $10,000 in a stock yielding 3% and growing its dividend ~6% a year, all reinvested. In year one you collect about $300. By year 20 you're collecting several times that annually, on shares you never paid an extra cent for.

### When *not* to reinvest

DRIP isn't automatically right:

- **You need the income now** — retirees often take dividends as cash to live on.
- **The position is too large** — reinvesting into an already-oversized holding concentrates your risk.
- **You've lost conviction** — never auto-buy more of a company you no longer believe in. Redirect that cash elsewhere.

### See it for your own numbers

The gap between reinvesting and not reinvesting is hard to feel from a paragraph. Run your actual starting amount, yield, and time horizon and watch the two curves separate.`,
    tryIt: {
      title: 'Run your own DRIP projection',
      description: 'Plug in your investment, yield, and dividend growth rate to see the compounding curve over time.',
      href: '/calculators/drip',
      label: 'Open the DRIP Calculator',
    },
  },
  {
    slug: 'building-a-portfolio',
    title: 'Building a Dividend Portfolio That Survives',
    description: 'Diversification that actually protects you, how many holdings you need, and where dividend investors get concentrated without noticing.',
    readTime: '7 min',
    content: `## The failure mode is concentration you didn't notice

Most dividend portfolios don't blow up because someone picked a bad company. They blow up because every holding was quietly the same bet.

Chasing yield naturally pulls you into a handful of sectors — utilities, energy, REITs, telecom — because those are where the high yields live. Own eight of those and you don't have eight positions; you have one interest-rate bet wearing eight costumes.

### Diversify across the things that actually differ

- **Sector** — no more than ~20–25% in any one.
- **Business model** — a utility, a consumer staple, and a bank fail for different reasons.
- **Geography** — non-U.S. dividend payers behave differently (and are taxed differently).
- **Dividend profile** — mix high-yield/slow-growth with lower-yield/fast-growth.

### How many holdings?

Roughly **20–30 individual stocks** gets you most of the diversification benefit. Below ~15, one dividend cut genuinely hurts. Above ~40, you're doing a lot of monitoring work to own something an index fund would give you for a few basis points.

If that sounds like more research than you want to do, that's a legitimate answer — a broad dividend ETF is a perfectly good core, and you can hold individual names around it.

### Position sizing, simply

Equal-weighting (each position ~3–5%) is boring and hard to beat. It stops any single dividend cut from wrecking your income. If you do size by conviction, cap the largest position at ~8–10%.

### Rebalance on a schedule, not a feeling

Check once or twice a year. If a position has grown far beyond its target, trim it back. The point isn't to chase performance — it's to stop your portfolio from silently drifting into a concentrated bet while you weren't looking.`,
    tryIt: {
      title: 'Model your retirement income',
      description: 'See what portfolio size and yield you need to cover your target annual income.',
      href: '/calculators/drip-calculator',
      label: 'Open the Calculators',
    },
  },
  {
    slug: 'taxes-and-yield-traps',
    title: 'Taxes, Traps, and How to Avoid Both',
    description: 'Qualified vs. ordinary dividends, which accounts to hold what in, and the warning signs of a dividend about to be cut.',
    readTime: '7 min',
    content: `## Two dividends, two tax bills

In the U.S., dividends are taxed one of two ways:

- **Qualified dividends** — taxed at long-term capital gains rates (0%, 15%, or 20% depending on income). Most U.S. companies held long enough qualify.
- **Ordinary (non-qualified) dividends** — taxed as regular income, at your marginal rate. This includes most **REIT** distributions and some foreign payers.

To get the qualified rate you generally must hold the stock more than 60 days around the ex-dividend date. Constantly trading in and out forfeits the better rate.

### Put the right assets in the right accounts

This is the highest-value, lowest-effort tax move available to you:

- **Tax-advantaged accounts (IRA/401k)** — hold your *tax-inefficient* income: REITs, high-yield bonds, anything throwing off ordinary income.
- **Taxable accounts** — hold qualified-dividend payers and dividend growers, where the rate is already favorable.

Same holdings, same returns, meaningfully less tax drag — purely from placement.

### Spotting a dividend before it gets cut

A cut usually announces itself well in advance. Warning signs:

- **Payout ratio above ~90%**, or above 100% — the dividend is being funded by something other than profit.
- **Rising debt** used to maintain the payment.
- **Declining revenue or earnings** for several quarters running.
- **A yield far above sector peers** — the market is telling you it doesn't believe the payment.
- **Frozen dividend** — a company that stops raising its dividend after years of increases is often preparing to cut it.

### The honest summary

Dividend investing works because it's boring: own good businesses, hold them long enough for the payouts to grow, reinvest while you don't need the income, keep the tax drag low, and don't reach for yield. Nothing in this course beats simply doing that for twenty years.`,
    tryIt: {
      title: 'Check the compounding math',
      description: 'Compare taxable vs. tax-advantaged growth on the same starting investment.',
      href: '/calculators/compound-interest',
      label: 'Open the Compound Interest Calculator',
    },
  },
]

export const courses: Course[] = [
  {
    slug: 'dividend-investing-101',
    title: 'Dividend Investing 101',
    description:
      'A free, five-lesson course on building dividend income: how dividends work, which numbers actually matter, how DRIP compounding builds wealth, and how to avoid yield traps and unnecessary taxes.',
    level: 'beginner',
    estimatedTime: '~33 min',
    lessons: dividendInvesting101,
  },
]

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug)
}
