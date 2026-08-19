/**
 * Content for "The Dividend Investor's Toolkit" -- the guide offered at
 * /free-guide.
 *
 * This is the single source of truth for the guide. scripts/generate-guide-pdf.mjs
 * renders it to public/dividend-investors-toolkit.pdf, and /free-guide/read renders
 * the same content as a web page. Edit here, re-run the script, and both update.
 *
 * DELIBERATELY CONTAINS NO STOCK PRICES, YIELDS OR TICKER RECOMMENDATIONS.
 * A PDF cannot be updated once someone has downloaded it. Publishing "AAPL yields
 * 0.52%" in a file that lives on a stranger's hard drive for three years is how a
 * guide becomes actively misleading. Every number below is either arithmetic that
 * stays true (a formula), or a clearly-labelled hypothetical. Where a reader needs
 * current figures, the guide sends them to the live tools on the site instead.
 */

export interface GuideBlock {
  type: 'p' | 'ul' | 'ol' | 'formula' | 'note'
  text?: string
  items?: string[]
}

export interface GuideChapter {
  number: number
  title: string
  blocks: GuideBlock[]
}

export const GUIDE_TITLE = "The Dividend Investor's Toolkit"
export const GUIDE_SUBTITLE =
  'How dividend investing actually works: the mechanics, the maths, and the traps'
export const GUIDE_SITE = 'dividendengines.com'

export const GUIDE_FRONT_MATTER: GuideBlock[] = [
  {
    type: 'p',
    text: 'This guide explains the mechanics of dividend investing — what a dividend is, how yield and payout ratios behave, what reinvestment actually compounds, and which numbers tend to mislead people. It is written to be read once and then used as a reference.',
  },
  {
    type: 'p',
    text: 'What it does not do is tell you what to buy. There is no stock list in here, and that is deliberate: a PDF cannot update itself, and a list of prices and yields would be wrong within weeks of you downloading it. Where you need current figures, the guide points you at the free tools on the site, which do update.',
  },
  {
    type: 'note',
    text: 'This is educational material, not investment advice. It is general information and takes no account of your circumstances, goals, or tax position. Tax sections describe common US treatment and may not apply to you. Nothing here is a recommendation to buy or sell any security. You can lose money investing, including money you cannot afford to lose. Consider talking to a licensed professional who knows your situation.',
  },
]

export const GUIDE_CHAPTERS: GuideChapter[] = [
  {
    number: 1,
    title: 'What a dividend actually is',
    blocks: [
      {
        type: 'p',
        text: 'A dividend is a company handing part of its profits to shareholders in cash. The board decides whether to pay one, how much, and when. No company is obliged to pay a dividend, and none is obliged to keep paying it — this is the single most important fact in the whole subject, and the one most often forgotten.',
      },
      {
        type: 'p',
        text: 'Four dates govern every dividend payment, and confusing them is the most common beginner error:',
      },
      {
        type: 'ul',
        items: [
          'Declaration date — the board announces the dividend, its size, and the dates below.',
          'Ex-dividend date — the cutoff. Buy on or after this date and you do not receive this dividend; the seller does.',
          'Record date — the day the company checks its books to see who the shareholders are.',
          'Payment date — the cash actually arrives, typically a few weeks after the record date.',
        ],
      },
      {
        type: 'p',
        text: 'On the ex-dividend date, the share price typically opens lower by roughly the dividend amount. This surprises people, but it has to happen: the company is worth exactly that much less once the cash leaves it. A share that pays $1 and drops $1 has given you nothing you did not already own.',
      },
      {
        type: 'note',
        text: 'This kills the "dividend capture" idea before it starts. Buying just before the ex-date to collect the payment and selling after does not produce free money — you collect $1 and your shares fall about $1, and you pay two lots of trading costs and possibly tax for the privilege.',
      },
    ],
  },
  {
    number: 2,
    title: 'Yield, and why a high one is a warning',
    blocks: [
      {
        type: 'p',
        text: 'Dividend yield is the annual dividend divided by the share price:',
      },
      { type: 'formula', text: 'Yield = Annual dividend per share / Price per share' },
      {
        type: 'p',
        text: 'Look at that fraction carefully. Yield rises when the dividend rises — or when the price falls. Those are opposite situations, and the yield number alone cannot tell you which one you are looking at.',
      },
      {
        type: 'p',
        text: 'This is why screening for "highest yield" so reliably finds trouble. A company whose share price has halved because the market expects a dividend cut will show a spectacular yield right up until the cut arrives, at which point both the dividend and the price fall again. The industry name for this is a yield trap, and it catches new dividend investors more than any other single mistake.',
      },
      {
        type: 'p',
        text: 'A practical habit: whenever a yield looks unusually good for its sector, find out what the price has done over the last year before you look at anything else. A high yield produced by a rising dividend is a different animal from a high yield produced by a collapsing price.',
      },
      {
        type: 'ul',
        items: [
          'Yield up because the dividend was raised — usually a good sign.',
          'Yield up because the price fell — the market is pricing in a problem. Find out what it is.',
          'Yield far above every peer in the same sector — assume something is wrong until you can show otherwise.',
        ],
      },
    ],
  },
  {
    number: 3,
    title: 'Payout ratio: can they actually afford it?',
    blocks: [
      {
        type: 'p',
        text: 'The payout ratio asks whether the dividend is being paid out of genuine profits or out of hope:',
      },
      { type: 'formula', text: 'Payout ratio = Dividends per share / Earnings per share' },
      {
        type: 'p',
        text: 'A ratio of 40% means the company pays out 40 cents of every dollar it earns and keeps the rest to reinvest, pay down debt, or absorb a bad year. A ratio above 100% means it is paying out more than it earns, which it can only do by burning cash, selling assets, or borrowing. That is survivable for a year; it is not a business model.',
      },
      {
        type: 'p',
        text: 'Earnings are an accounting figure and can be distorted by one-off charges. The more demanding version uses free cash flow, which is harder to massage:',
      },
      { type: 'formula', text: 'Cash payout ratio = Dividends paid / Free cash flow' },
      {
        type: 'p',
        text: 'If the earnings-based ratio looks comfortable but the cash-based one does not, believe the cash.',
      },
      {
        type: 'p',
        text: 'What counts as high depends entirely on the sector. Utilities and consumer staples run high payout ratios sustainably because their revenues are stable and predictable. A cyclical industrial or a miner running the same ratio is taking a far bigger risk, because its earnings can halve in a downturn. REITs are a special case covered in Chapter 10 — they are legally required to distribute most of their income, so ordinary payout ratios do not apply to them at all.',
      },
      {
        type: 'note',
        text: 'Compare payout ratios within a sector, never across sectors. A 70% payout ratio is unremarkable for a regulated utility and alarming for a semiconductor company.',
      },
    ],
  },
  {
    number: 4,
    title: 'Growth versus income: yield on cost',
    blocks: [
      {
        type: 'p',
        text: 'There is a genuine trade-off between a high yield today and a fast-growing dividend. A stock yielding 5% that never raises its payout will be beaten, eventually, by one yielding 2% that raises 10% a year. The question is how long "eventually" is — and it is usually longer than people expect.',
      },
      {
        type: 'p',
        text: 'Yield on cost measures what your original investment now pays you, ignoring what the shares are worth today:',
      },
      { type: 'formula', text: 'Yield on cost = Current annual dividend per share / Price you originally paid' },
      {
        type: 'p',
        text: 'Worked example, hypothetical throughout. You buy at $100 with a $2 dividend — a 2% yield. If that dividend grows 10% a year, after ten years it is about $5.19, so your yield on cost is about 5.2%. Meanwhile a 5% payer with a flat dividend is still paying you 5%. The growth stock overtakes it somewhere around year ten, and from then on the gap widens quickly.',
      },
      {
        type: 'p',
        text: 'Two honest caveats. First, ten years is a long time to be behind, and if you need income now, the crossover is irrelevant to you. Second, "grows 10% a year for a decade" is an assumption, not a fact — most companies that have done it for ten years will not do it for the next ten. Yield on cost is a useful way to see the effect of growth. It is not a prediction, and it is a poor way to compare an old holding against a new opportunity, because the price you happened to pay years ago tells you nothing about which is the better investment today.',
      },
      {
        type: 'p',
        text: 'The dividend growth calculator on the site runs this comparison with your own numbers, including the crossover year.',
      },
    ],
  },
  {
    number: 5,
    title: 'DRIP: what reinvestment does and does not do',
    blocks: [
      {
        type: 'p',
        text: 'A dividend reinvestment plan automatically uses each dividend to buy more shares, usually including fractional shares, usually with no commission. Those extra shares then pay dividends of their own. That is the compounding engine, and over long periods it does most of the heavy lifting in a dividend portfolio.',
      },
      {
        type: 'p',
        text: 'Three things are worth understanding clearly:',
      },
      {
        type: 'ol',
        items: [
          'Reinvestment buys at whatever price prevails on the day. It is not market timing, and over a long holding period it averages your purchase price across good days and bad.',
          'The compounding is real but slow to become visible. For the first several years the difference between reinvesting and taking cash looks trivial. The gap becomes dramatic only over decades, which is why patience is the actual strategy.',
          'In a taxable account, reinvested dividends are usually still taxed in the year they are paid, even though you never saw the cash. You also create a new cost basis with every reinvestment, which makes record-keeping tedious.',
        ],
      },
      {
        type: 'p',
        text: 'The DRIP calculator on the site models this properly, including reinvestment frequency and dividend growth. Run your own numbers rather than trusting a rule of thumb — the results are sensitive to the growth rate you assume, and small changes there swamp everything else over long horizons.',
      },
      {
        type: 'note',
        text: 'Be suspicious of any projection, including your own, that runs 30 years at a fixed growth rate. It shows you what the arithmetic implies, not what will happen. Treat the output as a comparison tool, not a forecast.',
      },
    ],
  },
  {
    number: 6,
    title: 'Position sizing and the concentration trap',
    blocks: [
      {
        type: 'p',
        text: 'Dividend investing has a specific, structural diversification problem: the companies with long histories of stable, growing dividends cluster heavily in a handful of sectors — utilities, consumer staples, healthcare, financials, energy, and REITs.',
      },
      {
        type: 'p',
        text: 'An investor who simply buys the best dividend payers one at a time, each on its own merits, can easily end up with a portfolio that is three-quarters rate-sensitive and heavily exposed to the same few macro forces. It will look diversified — twenty different companies — while behaving like three bets.',
      },
      {
        type: 'ul',
        items: [
          'Track your sector weights, not just your holding count. Twenty holdings across four sectors is not twenty bets.',
          'Notice which of your holdings move together when interest rates change. Utilities, REITs and other high-yield sectors often fall as a group.',
          'Decide a maximum position size before you buy, not after a holding has doubled and you are reluctant to trim it.',
        ],
      },
      {
        type: 'p',
        text: 'There is no correct number for maximum position size, but the useful question is: if this company cut its dividend to zero tomorrow and the shares halved, would that change my plans? If the answer is yes, the position is too big for comfort regardless of what any rule says.',
      },
    ],
  },
  {
    number: 7,
    title: 'A screening process you can repeat',
    blocks: [
      {
        type: 'p',
        text: 'Screens do not find good investments. They shrink a universe of thousands down to a list short enough to actually read. Everything that matters happens after the screen.',
      },
      {
        type: 'p',
        text: 'A workable sequence:',
      },
      {
        type: 'ol',
        items: [
          'Start with dividend history. A long record of maintained or rising dividends through at least one recession tells you something real about the business and its management. It is evidence, not a guarantee.',
          'Apply a payout-ratio ceiling appropriate to the sector, using cash flow where you can get it.',
          'Discard yields that are wildly above sector peers until you have read enough to explain why.',
          'Check the direction of revenue and earnings over five years. A dividend is paid from a business; if the business is shrinking, the dividend is on borrowed time.',
          'Look at debt. Heavily indebted companies cut dividends first when credit tightens, because lenders get paid before shareholders.',
          'Only now read about the company — what it sells, who to, and what would have to go wrong.',
        ],
      },
      {
        type: 'p',
        text: 'The site keeps a live dividend aristocrats explorer with current figures, which is a reasonable place to start step one. Use it for current data rather than any list printed in a document like this one.',
      },
    ],
  },
  {
    number: 8,
    title: 'Reading a dividend cut before it arrives',
    blocks: [
      {
        type: 'p',
        text: 'Dividend cuts are rarely a surprise to anyone who was paying attention. They are usually preceded by months of visible strain. The warning signs, roughly in order of how alarming they are:',
      },
      {
        type: 'ul',
        items: [
          'The payout ratio climbing year after year, especially past 80-90% for a company that is not a REIT or utility.',
          'Dividends being paid while free cash flow is negative — the money is coming from somewhere other than the business.',
          'Rising debt alongside a maintained dividend. Borrowing to pay shareholders is a temporary measure that companies describe as a temporary measure.',
          'The dividend growth rate slowing to token increases — a fraction of a cent a year is a company signalling it cannot afford more while trying not to break its streak.',
          'Management suddenly emphasising "capital allocation flexibility" or "reviewing our capital return policy" on earnings calls. This is the phrasing that precedes cuts.',
          'A yield far above the company\'s own historical range. The market is usually right that something is wrong.',
        ],
      },
      {
        type: 'p',
        text: 'None of these individually proves a cut is coming. Several together, in a company whose earnings are falling, is about as clear a signal as markets offer.',
      },
      {
        type: 'note',
        text: 'When a cut does come, the decision to sell should rest on whether the business has permanently deteriorated — not on the cut itself. Sometimes a cut is the responsible act of a management team protecting the balance sheet, and the shares recover. Selling reflexively at the bottom is its own expensive mistake.',
      },
    ],
  },
  {
    number: 9,
    title: 'Tax: the part that quietly costs the most',
    blocks: [
      {
        type: 'note',
        text: 'This chapter describes common US federal treatment as a worked illustration. Tax law is jurisdiction-specific, changes regularly, and depends on your personal circumstances. Treat this as vocabulary to take to a professional, not as advice.',
      },
      {
        type: 'p',
        text: 'In the US, dividends are split into qualified and ordinary. Qualified dividends are taxed at long-term capital gains rates, which are lower. Ordinary (non-qualified) dividends are taxed as ordinary income. To be qualified, a dividend generally must come from a US corporation or a qualifying foreign one, and you must have held the shares for a minimum period around the ex-dividend date.',
      },
      {
        type: 'p',
        text: 'That holding-period rule matters more than it sounds: trading in and out around ex-dividend dates can convert what would have been favourably-taxed income into ordinary income, which is one more reason dividend capture strategies disappoint.',
      },
      {
        type: 'p',
        text: 'Certain payments are never qualified regardless of how long you hold them — most REIT distributions are a notable example, since REITs pass through income that was never taxed at the corporate level.',
      },
      {
        type: 'p',
        text: 'The practical consequence is asset location. Holdings that generate heavily-taxed income are often better placed inside tax-advantaged accounts, while more favourably-taxed holdings can sit in a taxable account. Getting this right costs nothing and compounds for as long as you hold the position; getting it wrong is a small, permanent leak.',
      },
      {
        type: 'p',
        text: 'Foreign dividends add withholding tax at source, sometimes reclaimable, sometimes not, depending on treaties and on which account holds the shares. If you hold international dividend payers, find out the rate before you buy rather than after your first payment arrives smaller than expected.',
      },
    ],
  },
  {
    number: 10,
    title: 'REITs, MLPs and other special cases',
    blocks: [
      {
        type: 'p',
        text: 'Some high-yielding structures are not ordinary companies and cannot be analysed as if they were.',
      },
      {
        type: 'p',
        text: 'REITs (real estate investment trusts) must distribute the large majority of their taxable income to shareholders, which is why they yield what they do. Because property depreciation is a large non-cash charge, reported earnings understate the cash a REIT generates, and an earnings-based payout ratio for a REIT will look absurd while being meaningless. The sector uses funds from operations (FFO) and adjusted FFO instead:',
      },
      { type: 'formula', text: 'REIT payout ratio = Dividends per share / FFO per share' },
      {
        type: 'p',
        text: 'MLPs (master limited partnerships) are partnerships rather than corporations. They can offer high distributions, but they issue a K-1 tax form instead of the simpler dividend reporting, they can create tax obligations in multiple states, and holding them inside a tax-advantaged account can produce unexpected taxable income. Many investors decide the yield does not justify the paperwork. That is a legitimate conclusion.',
      },
      {
        type: 'p',
        text: 'BDCs, closed-end funds and covered-call ETFs frequently advertise very high distribution rates. The question to ask of any of them is whether the distribution is funded by income the vehicle actually earned, or partly by returning your own capital to you. A distribution that is substantially return of capital is not income; it is your money coming back, minus fees.',
      },
    ],
  },
  {
    number: 11,
    title: 'The mistakes that cost the most',
    blocks: [
      {
        type: 'ol',
        items: [
          'Chasing the highest yield on the screen. Covered in Chapter 2, and still the single most expensive habit in dividend investing.',
          'Treating a dividend as guaranteed income. It is a discretionary payment from a business that may stop it at any board meeting.',
          'Ignoring total return. A 6% dividend on a stock that loses 10% of its value a year is not income, it is a slow liquidation with good marketing.',
          'Building an accidental sector bet while feeling diversified. Chapter 6.',
          'Forgetting that a share price falls on the ex-dividend date, and mistaking the payment for a gain.',
          'Reinvesting on autopilot into a position that has grown far past your intended size.',
          'Paying no attention to tax treatment until the first tax bill arrives.',
          'Judging a holding by its yield on cost rather than by whether you would buy it again today.',
          'Selling reflexively the moment a dividend is cut, without asking whether the business is permanently impaired.',
          'Assuming a long dividend streak makes a company safe. Streaks end, and the longest ones end loudest.',
        ],
      },
    ],
  },
  {
    number: 12,
    title: 'Putting it together',
    blocks: [
      {
        type: 'p',
        text: 'A workable process, start to finish:',
      },
      {
        type: 'ol',
        items: [
          'Decide first whether you need income now or growth for later. This single answer determines whether a 5% flat payer or a 2% fast grower is right for you, and no amount of analysis substitutes for it.',
          'Set your sector limits and maximum position size in advance, in writing.',
          'Screen on dividend history, payout ratio and business direction, using the sequence in Chapter 7.',
          'For each survivor, model the outcome with the calculators on the site using your own assumptions — and run a pessimistic case as well as your base case.',
          'Check the tax treatment and decide which account the holding belongs in before you buy.',
          'Buy, record why you bought it and what would make you sell, and then leave it alone.',
          'Review annually against your written reasons, not against the daily price. Check payout ratios and the direction of the business, and rebalance sector weights if they have drifted.',
        ],
      },
      {
        type: 'p',
        text: 'Step six is the one people skip, and it is the one that saves you. Writing down why you bought something converts a future panic into a simple check: has the thing I wrote down stopped being true? If it has, act. If it has not, the price movement is noise.',
      },
      {
        type: 'p',
        text: `The calculators referenced throughout are free and need no account: DRIP compounding, dividend growth and yield on cost, retirement income planning, position comparison, and a yield calculator. They are at ${GUIDE_SITE}/calculators.`,
      },
    ],
  },
]
