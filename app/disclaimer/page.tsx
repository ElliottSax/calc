import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Financial Disclaimer | Dividend Engines',
  description: 'Financial Disclaimer for Dividend Engines. Important information about the educational nature of our content, calculator limitations, and affiliate relationships.',
}

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
        Financial Disclaimer
      </h1>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Last updated: March 1, 2026
      </p>

      {/* Section 1 - Prominent General Disclaimer */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        1. General Disclaimer
      </h2>
      <div className="bg-red-50 dark:bg-red-950 border-2 border-red-300 dark:border-red-800 rounded-lg p-6 mb-6">
        <p className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">
          IMPORTANT: Dividend Engines Does NOT Provide Financial Advice
        </p>
        <p className="text-slate-700 dark:text-slate-300 mb-3">
          All content on dividendengines.com, including articles, calculators, tools, guides,
          broker comparisons, and any other materials, is provided for <strong>informational
          and educational purposes only</strong>. Nothing on this website constitutes:
        </p>
        <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 mb-3 space-y-2">
          <li><strong>Financial advice</strong> or financial planning recommendations</li>
          <li><strong>Investment advice</strong> or solicitation to buy, sell, or hold any securities</li>
          <li><strong>Tax advice</strong> or guidance on tax-related decisions</li>
          <li><strong>Legal advice</strong> of any kind</li>
        </ul>
        <p className="text-slate-700 dark:text-slate-300">
          The information presented on this Site should not be relied upon as a substitute for
          professional financial counsel tailored to your individual circumstances. You are
          solely responsible for evaluating any information, opinion, advice, or other content
          available on or through this Site.
        </p>
      </div>

      {/* Section 2 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        2. No Guarantees
      </h2>
      <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-4">
        <p className="text-slate-700 dark:text-slate-300 font-semibold mb-2">
          Past performance does not guarantee future results.
        </p>
        <p className="text-slate-600 dark:text-slate-400">
          Historical dividend data, stock performance, yield information, and other financial
          data presented on this Site reflect past performance only. There is no guarantee that
          any investment will achieve similar results in the future. Dividend payments can be
          reduced, suspended, or eliminated at any time at the discretion of the issuing company.
        </p>
      </div>

      {/* Section 3 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        3. Investment Risk
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        All investing involves risk, including the potential loss of principal. The value of
        your investments can go down as well as up, and you may receive back less than you
        originally invested. Specific risks associated with dividend investing include but are
        not limited to:
      </p>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>
          <strong>Market Risk:</strong> Stock prices can decline due to market conditions,
          economic downturns, or company-specific factors, regardless of dividend yield.
        </li>
        <li>
          <strong>Dividend Risk:</strong> Companies may reduce or eliminate dividend payments
          at any time. A high dividend yield may indicate financial distress.
        </li>
        <li>
          <strong>Inflation Risk:</strong> Returns may not keep pace with inflation, reducing
          your purchasing power over time.
        </li>
        <li>
          <strong>Concentration Risk:</strong> Focusing heavily on dividend-paying stocks may
          result in inadequate portfolio diversification.
        </li>
        <li>
          <strong>Interest Rate Risk:</strong> Rising interest rates can negatively affect the
          prices of dividend-paying stocks, particularly utilities and REITs.
        </li>
        <li>
          <strong>Tax Risk:</strong> Tax laws and rates may change, affecting the after-tax
          return of dividend income.
        </li>
      </ul>

      {/* Section 4 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        4. Calculator Accuracy
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        The calculators on Dividend Engines are tools designed for illustrative and educational
        purposes only. They are based on mathematical formulas and the assumptions you input.
        Important limitations to understand:
      </p>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>
          Calculator results are <strong>estimates and projections</strong>, not predictions
          of actual investment performance.
        </li>
        <li>
          Results are based on simplified assumptions such as constant growth rates, fixed
          dividend yields, and steady contributions, which may not reflect real-world conditions.
        </li>
        <li>
          Calculators do not account for all factors that affect investment returns, including
          taxes, fees, commissions, inflation variability, market volatility, and changes in
          dividend policies.
        </li>
        <li>
          Actual investment results will differ, sometimes significantly, from calculator
          projections.
        </li>
        <li>
          We make no representation that the results obtained from using our calculators will be
          accurate, complete, or suitable for any particular purpose.
        </li>
      </ul>

      {/* Section 5 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        5. Consult a Professional
      </h2>
      <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-4">
        <p className="text-slate-700 dark:text-slate-300 mb-3">
          Before making any investment, financial, or tax decisions, you should consult with
          qualified professionals who can provide advice tailored to your specific situation:
        </p>
        <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2">
          <li>
            <strong>Chartered Financial Analyst (CFA)</strong> for investment analysis and
            portfolio management
          </li>
          <li>
            <strong>Certified Financial Planner (CFP)</strong> for comprehensive financial
            planning
          </li>
          <li>
            <strong>Certified Public Accountant (CPA)</strong> for tax planning and compliance
          </li>
          <li>
            <strong>Registered Investment Advisor (RIA)</strong> for personalized investment
            advice
          </li>
          <li>
            <strong>Licensed Attorney</strong> for legal matters related to your investments or
            estate
          </li>
        </ul>
      </div>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        A qualified professional can assess your complete financial picture, including your
        income, expenses, risk tolerance, time horizon, tax situation, and personal goals, to
        provide recommendations appropriate for you.
      </p>

      {/* Section 6 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        6. Affiliate Relationships
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Dividend Engines participates in affiliate programs with brokerage firms, financial
        service providers, and other companies. This means:
      </p>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>
          We may earn commissions when you click on affiliate links on our Site and
          subsequently open an account, make a purchase, or take another qualifying action.
        </li>
        <li>
          These commissions come at no additional cost to you. The prices and terms you see
          are the same whether or not you use our affiliate links.
        </li>
        <li>
          Our affiliate relationships do <strong>not</strong> influence our analysis,
          recommendations, reviews, or the content of our calculators.
        </li>
        <li>
          We strive to provide honest, objective information regardless of whether we have an
          affiliate relationship with a particular company.
        </li>
        <li>
          Not all brokers or financial products featured on our Site are affiliate partners.
        </li>
      </ul>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        We believe in full transparency about our affiliate relationships. Our goal is to
        provide valuable, unbiased information while sustaining the free resources we offer to
        our users.
      </p>

      {/* Section 7 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        7. Forward-Looking Statements
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Certain content on this Site may contain forward-looking statements, projections, or
        hypothetical scenarios. These statements are based on current expectations, assumptions,
        and historical data, and are subject to significant risks and uncertainties. Important
        considerations include:
      </p>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>
          Projections and hypothetical scenarios are for illustrative purposes only and should
          not be interpreted as forecasts or predictions.
        </li>
        <li>
          Growth rates, dividend yields, and returns used in examples and calculators are
          assumptions and may not reflect future reality.
        </li>
        <li>
          Economic conditions, market trends, interest rates, and other factors can change
          rapidly and unpredictably.
        </li>
        <li>
          Historical data, including past dividend payments and stock performance, is not
          indicative of future results.
        </li>
      </ul>

      {/* Section 8 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        8. Third-Party Content
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Our Site may reference, link to, or display data from third-party sources, including
        financial data providers, news outlets, and other websites. Regarding third-party
        content:
      </p>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>
          We do not guarantee the accuracy, completeness, timeliness, or reliability of any
          third-party data or content displayed on our Site.
        </li>
        <li>
          Stock prices, dividend yields, financial ratios, and other market data may be delayed
          or inaccurate.
        </li>
        <li>
          We are not responsible for the content, products, services, or privacy practices of
          any third-party websites linked from our Site.
        </li>
        <li>
          The inclusion of third-party links or data does not imply our endorsement or approval
          of those sources.
        </li>
      </ul>

      {/* Section 9 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        9. No Endorsement of Specific Securities
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Any mention of specific stocks, ETFs, mutual funds, or other securities on this Site is
        for <strong>educational and informational purposes only</strong> and should not be
        interpreted as:
      </p>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>A recommendation to buy, sell, or hold any particular security</li>
        <li>A solicitation of any transaction in any security</li>
        <li>An endorsement of any company, stock, or financial product</li>
        <li>A guarantee that any security will perform in a certain way</li>
      </ul>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Any discussion of individual securities, including dividend aristocrats, high-yield
        stocks, or any other specific investments, is provided solely for educational purposes.
        You should conduct your own thorough research and due diligence, and consult with a
        qualified financial professional, before making any investment decisions.
      </p>

      {/* Section 10 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        10. Limitation of Liability
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        To the maximum extent permitted by applicable law, Dividend Engines, its owners,
        operators, affiliates, and contributors shall not be held liable for any damages
        whatsoever, including but not limited to direct, indirect, incidental, special,
        consequential, or punitive damages, arising out of or in connection with:
      </p>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>Your use of, or reliance on, any content, tools, or calculators on this Site</li>
        <li>Any investment decisions you make based on information obtained from this Site</li>
        <li>Any financial losses, whether realized or unrealized, resulting from your investment activities</li>
        <li>Errors, inaccuracies, or omissions in any content or calculator results</li>
        <li>Any interruption or cessation of the Site or its services</li>
        <li>Any third-party content, products, or services accessed through links on our Site</li>
      </ul>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        By using this Site, you acknowledge that you are solely responsible for your own
        investment decisions and that you use the information and tools provided at your own
        risk.
      </p>

      {/* Section 11 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        11. Contact Us
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        If you have any questions about this Financial Disclaimer, please contact us:
      </p>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>
          Email:{' '}
          <a
            href="mailto:support@dividendengines.com"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            support@dividendengines.com
          </a>
        </li>
        <li>
          Website:{' '}
          <a
            href="https://dividendengines.com"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            dividendengines.com
          </a>
        </li>
      </ul>

      {/* Final Notice */}
      <div className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-6 mt-8">
        <p className="text-slate-700 dark:text-slate-300 text-sm">
          By using Dividend Engines, you acknowledge that you have read and understood this
          Financial Disclaimer and agree to its terms. This disclaimer is part of and subject
          to our{' '}
          <a href="/terms" className="text-blue-600 dark:text-blue-400 hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">
            Privacy Policy
          </a>.
        </p>
      </div>
    </div>
  )
}
