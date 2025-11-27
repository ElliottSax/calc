/**
 * FAQ Schema Markup Component for SEO
 *
 * Provides rich snippet support in Google search results
 * Increases CTR by showing FAQ answers directly in search
 */

interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  faqs: FAQItem[]
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Pre-configured FAQs for different calculator types
export const DRIP_CALCULATOR_FAQS: FAQItem[] = [
  {
    question: "What is a DRIP calculator?",
    answer: "A DRIP (Dividend Reinvestment Plan) calculator helps you project the growth of your investment when you automatically reinvest dividends to purchase additional shares. It shows how compound growth from reinvested dividends can significantly increase your portfolio value over time."
  },
  {
    question: "How do dividend reinvestment plans work?",
    answer: "Dividend reinvestment plans automatically use your dividend payments to buy more shares of the same stock, rather than paying you cash. This creates a compounding effect where your dividends buy more shares, which generate more dividends, accelerating wealth building. Most brokers offer DRIP programs with no commission fees."
  },
  {
    question: "What is the average dividend yield for stocks?",
    answer: "The average dividend yield for S&P 500 stocks is typically between 1.5% and 2%. However, dividend-focused stocks can yield anywhere from 3% to 8% or more. Dividend aristocrats (companies with 25+ years of consecutive dividend increases) often yield 2-4% with solid dividend growth rates of 5-10% annually."
  },
  {
    question: "How much can I make from dividend investing?",
    answer: "Returns from dividend investing depend on your initial investment, monthly contributions, dividend yield, and dividend growth rate. For example, investing $10,000 initially with $500 monthly contributions at a 4% yield and 7% dividend growth over 20 years could grow to over $300,000 in portfolio value generating $15,000+ in annual dividend income."
  },
  {
    question: "Are dividends taxed differently than regular income?",
    answer: "Yes, qualified dividends are taxed at preferential long-term capital gains rates (0%, 15%, or 20% depending on your income), which are typically lower than ordinary income tax rates. Non-qualified dividends are taxed as ordinary income. Dividends in tax-advantaged accounts like IRAs grow tax-free or tax-deferred."
  },
  {
    question: "What are the best dividend stocks for beginners?",
    answer: "Beginners should focus on dividend aristocrats - companies with 25+ years of consecutive dividend increases. Examples include Johnson & Johnson, Procter & Gamble, Coca-Cola, and PepsiCo. These blue-chip stocks offer reliable dividends, lower risk, and consistent dividend growth. Dividend ETFs like VYM or SCHD are also excellent options for diversification."
  },
  {
    question: "How much money do I need to start dividend investing?",
    answer: "You can start dividend investing with as little as $100-500. Many brokers now offer fractional shares, allowing you to invest in expensive dividend stocks with small amounts. The key is to start consistently investing and reinvesting dividends. Even small monthly contributions ($100-300) can grow significantly over decades through compounding."
  },
  {
    question: "Should I reinvest dividends or take them as cash?",
    answer: "For long-term wealth building, reinvesting dividends is generally more beneficial due to the power of compounding. However, if you need current income (e.g., in retirement), taking dividends as cash makes sense. Many investors reinvest during their accumulation years and switch to cash dividends in retirement."
  }
]

export const RETIREMENT_CALCULATOR_FAQS: FAQItem[] = [
  {
    question: "How much do I need to retire on dividend income?",
    answer: "To retire on dividend income, you need a portfolio large enough that annual dividends cover your expenses. Using the 4% rule, divide your annual expenses by your expected dividend yield. For example, to generate $40,000/year at a 4% yield, you need a $1,000,000 portfolio. At a 5% yield, you'd need $800,000."
  },
  {
    question: "Can I retire early with dividend investing?",
    answer: "Yes, dividend investing is a popular strategy for early retirement (FIRE movement). By building a portfolio that generates enough passive income to cover living expenses, you can retire before traditional retirement age. This typically requires aggressive saving (50%+ savings rate), consistent investing, and 10-20 years of compounding growth."
  },
  {
    question: "What is a safe dividend withdrawal rate for retirement?",
    answer: "The traditional 4% rule suggests withdrawing 4% of your portfolio annually for a 30-year retirement. For dividend investors, this translates to a portfolio yielding 4-5%. Many retirees target higher yields (5-7%) or use a combination of dividends and modest portfolio growth to sustain retirement income."
  },
  {
    question: "How long does it take to build a dividend portfolio for retirement?",
    answer: "Building a retirement dividend portfolio typically takes 15-30 years, depending on your savings rate, investment returns, and target income. With consistent monthly contributions, dividend reinvestment, and 7-10% total returns, most investors can build a substantial dividend portfolio in 20-25 years."
  }
]

export const DIVIDEND_GROWTH_FAQS: FAQItem[] = [
  {
    question: "What is dividend growth investing?",
    answer: "Dividend growth investing focuses on companies that consistently increase their dividend payments over time, rather than just high current yields. This strategy combines income growth with potential capital appreciation, as companies that grow dividends typically have strong fundamentals and increasing share prices."
  },
  {
    question: "What is a good dividend growth rate?",
    answer: "A good dividend growth rate is typically 5-10% annually. Dividend aristocrats average 7-8% annual dividend growth. Exceptional dividend growers can achieve 10-15% growth, though these are rarer. Consistent growth is more important than high growth rates - look for companies with 10+ years of consecutive increases."
  },
  {
    question: "How do I find dividend growth stocks?",
    answer: "Look for dividend aristocrats (25+ years of increases) and dividend achievers (10+ years). Screen for companies with: payout ratios under 60%, consistent earnings growth, strong balance sheets, and histories of regular dividend increases. Popular dividend growth stocks include Microsoft, Visa, UnitedHealth Group, and Home Depot."
  }
]
