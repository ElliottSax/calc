// Email Sequence Templates for Dividend Investors
// Use with ConvertKit, Mailchimp, or any email marketing platform

export interface EmailTemplate {
  id: string
  subject: string
  preheader: string
  body: string
  delayDays?: number
  tags?: string[]
}

// ==========================================
// WELCOME SEQUENCE (5 emails)
// ==========================================

export const WELCOME_SEQUENCE: EmailTemplate[] = [
  {
    id: 'welcome-1',
    subject: "Welcome! Here's your DRIP calculator guide 📊",
    preheader: 'Start building wealth with dividend reinvestment',
    delayDays: 0, // Immediate
    tags: ['new_subscriber', 'welcome_series'],
    body: `
Hi {{first_name}},

Welcome to the Dividend Calculator community! 🎉

I'm excited to have you here. You've just taken the first step toward building serious wealth through dividend investing.

**Here's what you get as a subscriber:**

✅ Free access to 5 professional dividend calculators
✅ Pre-filled calculators for 100+ dividend stocks
✅ Weekly dividend stock analysis
✅ Exclusive broker deals and promotions
✅ Dividend investing strategies and tips

**👉 Start here:** Use our DRIP Calculator to see how reinvesting dividends can double your returns over 20 years:
[Link: DRIP Calculator]

**Popular with new investors:**
• Johnson & Johnson Calculator - 62 years of dividend increases
• Coca-Cola Calculator - Classic dividend aristocrat
• McDonald's Calculator - Famous brand, reliable dividends

Over the next few days, I'll send you our best resources to help you become a confident dividend investor.

**Tomorrow:** I'll show you the #1 mistake new dividend investors make (and how to avoid it).

To your success,
The Dividend Calculator Team

P.S. Have a question? Just hit reply - I read every email!

---
QUICK LINKS:
• Browse 100+ Stock Calculators: [Link]
• Read: Complete DRIP Investing Guide: [Link]
• Find the Best Broker for Dividends: [Link]
    `
  },
  {
    id: 'welcome-2',
    subject: "The #1 mistake killing your dividend returns ⚠️",
    preheader: 'Most investors lose 50% of potential gains to this error',
    delayDays: 1,
    tags: ['welcome_series'],
    body: `
Hi {{first_name}},

Yesterday I welcomed you to our community. Today, I want to save you from the biggest mistake dividend investors make.

**The Mistake:** Choosing stocks solely based on high yields.

I see it all the time. Someone sees an 8% yield and thinks "jackpot!" without checking if that dividend is actually sustainable.

**Here's what happens:**

❌ Company pays unsustainable dividend
❌ Business struggles, dividend gets cut
❌ Stock price crashes 30-50%
❌ Your "high yield" becomes a big loss

**Real example:**
• Stock A: 8% yield, cuts dividend, loses 40% value = -32% return
• Stock B: 3% yield, grows 10%/year = +13% return

Stock B crushes Stock A, even with half the yield.

**What to check instead:**

1. **Payout Ratio** - Under 70% is sustainable
2. **Dividend Growth History** - 10+ years of increases = reliable
3. **Business Quality** - Strong moat, recurring revenue
4. **Sector Stability** - Utilities, healthcare, consumer staples = safer

**👉 Use our Stock Screener to find safe, high-quality dividend stocks:**
[Link to Stock Screener]

**Safe high-yield stocks to consider:**
• Realty Income (O) - 5.0% yield, 29 years of growth
• 3M (MMM) - 5.7% yield, 66 years of increases
• Verizon (VZ) - 6.2% yield, telecom stability

Tomorrow, I'll show you the secret weapon dividend aristocrats use to compound wealth.

To sustainable dividends,
The Dividend Calculator Team

P.S. Calculate any stock's payout ratio with our free calculators: [Link]
    `
  },
  {
    id: 'welcome-3',
    subject: "This secret compounds your dividends 2x faster 🚀",
    preheader: 'Why dividend aristocrats beat the market',
    delayDays: 2,
    tags: ['welcome_series'],
    body: `
Hi {{first_name}},

Quick question: Would you rather earn 4% dividends forever, or start at 4% and grow to 12% over time?

That's the power of **dividend growth**.

**The Dividend Aristocrats Secret:**

Companies that increase dividends for 25+ years straight (Dividend Aristocrats) don't just pay you - they pay you MORE every single year.

**Real example - Johnson & Johnson (JNJ):**

If you bought JNJ 20 years ago at $50/share:
• Initial yield: 2.5% ($1.25/share)
• Today's yield on cost: 9.5% ($4.75/share)
• Your dividend QUADRUPLED while you slept

That's a 9.5% yield on your original investment, while new investors only get 2.9%.

**This is how generational wealth is built.**

**Top Dividend Aristocrats to research:**

1. Procter & Gamble (PG) - 68 years of increases
2. Johnson & Johnson (JNJ) - 62 years
3. Coca-Cola (KO) - 62 years
4. 3M (MMM) - 66 years
5. Walmart (WMT) - 51 years

**👉 Calculate your 20-year returns with our Dividend Growth Calculator:**
[Link to Calculator]

**Pro tip:** Don't chase the highest current yield. Chase the highest dividend growth rate. A 3% yielding stock growing dividends at 10%/year beats a 6% yielder with 0% growth within 7 years.

Tomorrow: I'll reveal which brokers are best for dividend investors (and which to avoid).

To growing dividends,
The Dividend Calculator Team

P.S. See all 100+ Dividend Aristocrats here: [Link to Stocks Page]
    `
  },
  {
    id: 'welcome-4',
    subject: "Best brokers for dividend investors (2026 comparison) 🏦",
    preheader: 'Avoid high fees that eat your returns',
    delayDays: 3,
    tags: ['welcome_series', 'broker_comparison'],
    body: `
Hi {{first_name}},

You've learned about DRIP investing and dividend aristocrats. Now let's talk about WHERE to invest.

Not all brokers are created equal for dividend investors.

**What dividend investors need:**

✅ Commission-free trading (saves $5-10 per trade)
✅ Automatic dividend reinvestment (DRIP)
✅ Fractional shares (reinvest every penny)
✅ No account minimums
✅ Easy-to-use interface

**Top 3 Brokers for Dividend Investors:**

**1. M1 Finance** ⭐ Best Overall
• Free DRIP, fractional shares
• "Pies" for automatic portfolio rebalancing
• No commissions, no minimums
• Perfect for long-term dividend investors
→ [Open M1 Finance Account]

**2. Fidelity** ⭐ Best for Research
• Excellent research tools
• Free DRIP, fractional shares
• Great customer service
• Large selection of dividend ETFs
→ [Open Fidelity Account]

**3. Charles Schwab** ⭐ Best All-Around
• Powerful platform
• Free DRIP, fractional shares
• Bank integration
• Great mobile app
→ [Open Schwab Account]

**Honorable Mentions:**
• Robinhood - Simple, beginner-friendly
• Webull - Advanced charting
• Public.com - Social investing features

**❌ Brokers to AVOID for dividend investing:**
• Brokers charging per-trade commissions (kills DRIP benefits)
• Platforms without fractional shares (waste dividend $)
• Robo-advisors that don't let you pick stocks

**👉 See our complete broker comparison:**
[Link to Broker Comparison Page]

**Special offers:**
Many brokers offer signup bonuses ($50-$200) when you transfer money. Check our comparison page for current deals.

Tomorrow: Your final email with my personal dividend portfolio strategy.

To smart brokerage choices,
The Dividend Calculator Team

P.S. Already have a broker? Make sure DRIP is enabled in your account settings!
    `
  },
  {
    id: 'welcome-5',
    subject: "My $500/month dividend portfolio strategy (final email) 💰",
    preheader: 'How to build a portfolio that pays you every month',
    delayDays: 4,
    tags: ['welcome_series', 'strategy'],
    body: `
Hi {{first_name}},

This is the final email in your welcome series. I want to leave you with something valuable: my exact strategy for building a dividend portfolio that pays you monthly.

**The Monthly Dividend Portfolio Strategy:**

Most stocks pay quarterly (every 3 months). But by combining stocks with different payment schedules, you can get paid every single month.

**How it works:**

• Stocks A, D, G, J pay: Jan, Apr, Jul, Oct
• Stocks B, E, H, K pay: Feb, May, Aug, Nov
• Stocks C, F, I, L pay: Mar, Jun, Sep, Dec

Result: Income every month like clockwork.

**Sample $10,000 Monthly Dividend Portfolio:**

**January payers ($2,500 each):**
• Johnson & Johnson (JNJ)
• Procter & Gamble (PG)
• Coca-Cola (KO)

**February payers ($2,500 each):**
• McDonald's (MCD)
• Home Depot (HD)
• Nike (NKE)

**March payers ($2,500 each):**
• Walmart (WMT)
• Costco (COST)
• Target (TGT)

**April payers:**
(Repeat cycle with different stocks)

**Expected result:**
• Total yield: 3.2%
• Monthly income: ~$27/month
• Annual income: $320/year
• With DRIP: Grows to $800+/year in 10 years

**For faster monthly income:**
Add REITs like Realty Income (O) - they pay MONTHLY instead of quarterly.

**Next steps:**

1. Open a broker account (if you haven't)
2. Start with $100-500
3. Buy 1-3 dividend aristocrats
4. Enable DRIP
5. Add money monthly
6. Watch your dividend income grow

**👉 Calculate your portfolio's projected income:**
[Link to Portfolio Calculator]

**Resources you now have access to:**

📊 100+ Stock Calculators: [Link]
📚 DRIP Investing Guide: [Link]
🏦 Broker Comparison: [Link]
📈 Dividend Stock Screener: [Link]
📧 Weekly Newsletter: You're subscribed!

**What's next from us:**

You'll now receive our weekly newsletter with:
• Top dividend stock analysis
• Market updates
• Investment strategies
• Exclusive deals

**One last thing:**

Building wealth through dividends isn't complicated, but it requires patience. The investors who win are the ones who:

✅ Start early
✅ Invest consistently
✅ Reinvest dividends
✅ Think in decades, not days

You've got all the tools. Now execute.

To your dividend success,
The Dividend Calculator Team

P.S. Have a friend who'd benefit from dividend investing? Forward this email - they can sign up here: [Link]

P.P.S. Questions? Reply to this email. I read every response.

---

**BONUS: Quick Start Checklist**

☐ Choose a broker (M1, Fidelity, or Schwab recommended)
☐ Open and fund account ($100 minimum)
☐ Enable dividend reinvestment (DRIP)
☐ Buy first dividend stock (start with a dividend aristocrat)
☐ Set up automatic monthly investments
☐ Check portfolio quarterly (not daily!)
☐ Celebrate your first dividend payment 🎉

Start today: [Link to Broker Comparison]
    `
  }
]

// ==========================================
// LEAD MAGNET DELIVERY
// ==========================================

export const LEAD_MAGNET_EMAIL: EmailTemplate = {
  id: 'lead-magnet-delivery',
  subject: "Here's your free Dividend Investing Starter Kit 📦",
  preheader: 'Everything you need to start building passive income',
  delayDays: 0,
  tags: ['lead_magnet', 'new_subscriber'],
  body: `
Hi {{first_name}},

Thanks for downloading the **Dividend Investing Starter Kit**!

**👉 Download your free kit here:**
[Download Button: Dividend Investing Starter Kit PDF]

**What's inside:**

📘 **Complete Beginner's Guide** (24 pages)
• Understanding dividend investing
• How DRIP works
• Selecting your first stocks
• Building a diversified portfolio

📊 **Stock Research Cheat Sheet**
• 5 metrics to check before buying
• Red flags to avoid
• How to read a dividend safety score

📈 **Portfolio Templates**
• Conservative Income Portfolio (4-5% yield)
• Balanced Growth & Income (3% yield, 8% growth)
• Aggressive Growth (2% yield, 12% growth)

💰 **Dividend Aristocrats List**
• All 100+ stocks with 25+ years of increases
• Sorted by yield, growth, and sector
• Recommended allocation percentages

**BONUS:** Calculator Access
Use our free tools to calculate returns for any dividend stock:
[Link to Calculators]

**What's next?**

I'll send you a few more emails this week with:
• Tomorrow: The #1 mistake new dividend investors make
• Day 3: How to find safe high-yield stocks
• Day 5: Best brokers for dividend investing

These emails will help you put the Starter Kit into action.

**Have questions?**
Just reply to this email - I read every message!

To your dividend success,
The Dividend Calculator Team

P.S. Bookmark our stock calculator page - you'll use it constantly: [Link]
  `
}

// ==========================================
// NURTURE SEQUENCE (Ongoing)
// ==========================================

export const NURTURE_SEQUENCE: EmailTemplate[] = [
  {
    id: 'nurture-1',
    subject: "5 dividend stocks I'm watching this month 👀",
    preheader: 'Plus: Why one should be on your watchlist',
    tags: ['nurture', 'stock_picks'],
    body: `
Hi {{first_name}},

Every month I analyze dozens of dividend stocks. Here are 5 that caught my attention:

**1. Altria (MO) - 8.5% Yield**
• Highest yield on our list
• 54 years of increases
• ⚠️ Watch: Declining cigarette sales
• Best for: Income-focused investors

**2. UnitedHealth (UNH) - 16.5% Dividend Growth**
• Fastest growing dividend
• Healthcare sector leader
• Great for: Long-term compounding

**3. Realty Income (O) - Monthly Dividends**
• Pays every month (not quarterly!)
• 29 years of increases
• Perfect for: Monthly income seekers

**4. Costco (COST) - 13.5% Dividend Growth**
• Retail powerhouse
• Consistent growth
• Ideal for: Growth + dividends

**5. Cisco (CSCO) - 3.08% Tech Yield**
• Rare high-yielding tech stock
• Networking leader
• Great for: Tech exposure with income

**My top pick this month:** [Stock name]
[Brief analysis and link to calculator]

**👉 Calculate your returns with each stock:**
[Link to Comparison Tool]

Happy investing,
The Dividend Calculator Team
    `
  },
  {
    id: 'nurture-2',
    subject: "This dividend was just increased (again) 📈",
    preheader: 'Companies raising dividends this quarter',
    tags: ['nurture', 'dividend_increases'],
    body: `
Hi {{first_name}},

Great news for dividend investors!

Several quality companies just announced dividend increases:

**Recent Dividend Increases:**

🟢 Johnson & Johnson (JNJ): +5.3%
• New annual dividend: $5.00/share
• 63 consecutive years of increases
• [Calculate your new yield]

🟢 Procter & Gamble (PG): +4.2%
• New quarterly dividend: $1.05/share
• 69 consecutive years of increases
• [Calculate your returns]

🟢 Coca-Cola (KO): +4.7%
• Inflation-beating increase
• Still yielding 3.2%
• [See your projections]

**Why this matters:**

If you own these stocks, your income just went up automatically. No work required.

This is the power of dividend growth investing.

**Example:**
• You bought 100 shares of JNJ 5 years ago
• Your dividend income has increased 28% since then
• You're earning $500/year vs $390 when you started
• That's an extra $110/year forever

**The compound effect:**
With DRIP enabled, this means:
• More shares purchased
• More dividends received
• Even faster growth next year

**👉 See which of your stocks are increasing dividends:**
[Link to Dividend Calendar]

**Not invested yet?**
These increases make quality stocks even more attractive. Use our calculators to see your potential returns.

To growing income,
The Dividend Calculator Team
    `
  }
]

// ==========================================
// RE-ENGAGEMENT SEQUENCE
// ==========================================

export const REENGAGEMENT_SEQUENCE: EmailTemplate[] = [
  {
    id: 'reengage-1',
    subject: "We miss you! Here's what's new... 🌟",
    preheader: 'New tools and resources you might have missed',
    tags: ['reengagement'],
    body: `
Hi {{first_name}},

I noticed you haven't visited our calculators in a while.

No worries - life gets busy! I wanted to share what's new since your last visit:

**New Features:**

✨ **100 Stock Calculators** - We've added 50+ new dividend stocks
✨ **Comparison Tool** - Compare 2-3 stocks side-by-side
✨ **Monthly Dividend Finder** - Find stocks that pay every month
✨ **Broker Deals** - Exclusive signup bonuses worth $50-200

**Most Popular Right Now:**

1. McDonald's Calculator - 48 years of increases
2. Altria Calculator - 8.5% yield (highest on our list!)
3. DRIP Investing Guide - Our most-read article

**Quick question:**
What's holding you back from dividend investing?

☐ Don't know which stocks to buy
☐ Not sure which broker to use
☐ Don't have enough money to start
☐ Overwhelmed by information
☐ Something else

[Reply and let me know - I read every email]

Whatever it is, I can help.

**Start simple:**
Pick ONE dividend aristocrat → Buy ONE share → Enable DRIP → Done.

That's it. You're now a dividend investor.

**👉 Browse our 100+ stock calculators:**
[Link to Stocks Page]

Hope to see you back soon!

The Dividend Calculator Team

P.S. If these emails aren't helpful, you can [unsubscribe here] - no hard feelings!
    `
  }
]

// ==========================================
// AFFILIATE PROMOTION SEQUENCE
// ==========================================

export const BROKER_PROMO_EMAIL: EmailTemplate = {
  id: 'broker-promo',
  subject: "🎁 Limited time: Get $200 bonus when you invest",
  preheader: 'Exclusive signup bonus for dividend investors',
  tags: ['promotion', 'affiliate'],
  body: `
Hi {{first_name}},

Quick heads up - one of our recommended brokers is running a special promotion:

**M1 Finance: $200 Signup Bonus**
When you deposit $10,000+

**Or: $75 Bonus**
When you deposit $1,000+

**Why M1 Finance?**

✅ Best platform for dividend investors
✅ Automatic dividend reinvestment (free)
✅ Fractional shares
✅ "Pies" for easy portfolio management
✅ No trading commissions
✅ No account fees

**How to claim:**

1. [Open M1 Finance account via this link]
2. Deposit $1,000+ within 30 days
3. Get your bonus deposited automatically

**This offer ends:** [Date]

**Perfect timing if you're:**
• Ready to start dividend investing
• Want to consolidate accounts
• Looking for a better broker platform

**Not ready for M1?**
We also recommend:
• Fidelity - Best research tools
• Schwab - Best all-around platform
• Robinhood - Simplest interface

[Compare all brokers here]

**Questions about M1 Finance?**
Reply to this email - I'm happy to help!

To smart investing,
The Dividend Calculator Team

P.S. This is an affiliate link, which means we earn a commission if you sign up. But we only recommend brokers we genuinely believe are best for dividend investors. Full disclosure: [Link]
  `
}

// Export all sequences
export const EMAIL_SEQUENCES = {
  welcome: WELCOME_SEQUENCE,
  leadMagnet: LEAD_MAGNET_EMAIL,
  nurture: NURTURE_SEQUENCE,
  reengagement: REENGAGEMENT_SEQUENCE,
  brokerPromo: BROKER_PROMO_EMAIL
}

export default EMAIL_SEQUENCES
