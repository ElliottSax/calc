import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Dividend Engines',
  description: 'Terms of Service for Dividend Engines. Read the terms and conditions governing your use of our dividend calculators, content, and services.',
}

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
        Terms of Service
      </h1>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Last updated: March 1, 2026
      </p>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Welcome to Dividend Engines. These Terms of Service (&quot;Terms&quot;) govern your
        access to and use of the Dividend Engines website located at dividendengines.com (the
        &quot;Site&quot;), including all content, tools, calculators, and services provided
        through the Site.
      </p>

      {/* Section 1 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        1. Acceptance of Terms
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        By accessing or using our Site, you agree to be bound by these Terms and our{' '}
        <a href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">
          Privacy Policy
        </a>. If you do not agree to these Terms, you must not access or use the Site. We
        reserve the right to modify these Terms at any time, and your continued use of the Site
        after any changes constitutes acceptance of the updated Terms.
      </p>

      {/* Section 2 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        2. Description of Service
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Dividend Engines provides free online dividend calculators, educational content about
        dividend investing, broker comparisons, stock information, and related financial
        resources. Our services include but are not limited to:
      </p>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>Dividend reinvestment (DRIP) calculators</li>
        <li>Dividend growth and yield calculators</li>
        <li>Retirement income projection tools</li>
        <li>Investment return and compound interest calculators</li>
        <li>401(k), IRA, and savings calculators</li>
        <li>Educational blog articles about dividend investing</li>
        <li>Brokerage comparison guides and reviews</li>
        <li>Stock information and dividend data</li>
        <li>Email newsletter with investing insights</li>
      </ul>

      {/* Section 3 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        3. No Financial Advice
      </h2>
      <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-4">
        <p className="text-slate-700 dark:text-slate-300 font-semibold mb-3">
          IMPORTANT: The content on this Site is for informational and educational purposes only.
        </p>
        <p className="text-slate-600 dark:text-slate-400 mb-3">
          Nothing on this Site constitutes financial advice, investment advice, tax advice, or
          legal advice. The calculators, articles, guides, and other content provided on
          Dividend Engines are not intended to be, and should not be construed as, professional
          financial guidance.
        </p>
        <p className="text-slate-600 dark:text-slate-400">
          You should always consult with a qualified financial advisor, certified financial
          planner (CFP), certified public accountant (CPA), or other licensed professional
          before making any investment decisions. Your financial situation is unique, and the
          general information on this Site may not be appropriate for your specific
          circumstances.
        </p>
      </div>

      {/* Section 4 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        4. User Responsibilities
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        When using our Site, you agree to:
      </p>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>Provide accurate information when subscribing to our newsletter or contacting us</li>
        <li>Use the Site and its tools only for lawful purposes</li>
        <li>Not attempt to gain unauthorized access to our systems or infrastructure</li>
        <li>Not use automated tools (bots, scrapers) to access the Site without our written permission</li>
        <li>Not reproduce, distribute, or create derivative works from our content without authorization</li>
        <li>Not interfere with or disrupt the Site or its servers</li>
        <li>Comply with all applicable local, state, national, and international laws and regulations</li>
      </ul>

      {/* Section 5 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        5. Intellectual Property
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        All content on the Site, including but not limited to text, graphics, logos, icons,
        images, calculator designs, software, code, and the overall look and feel of the Site,
        is the property of Dividend Engines or its content suppliers and is protected by United
        States and international copyright, trademark, and other intellectual property laws.
      </p>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        You may not reproduce, modify, distribute, transmit, display, perform, publish, license,
        create derivative works from, transfer, or sell any content, information, software,
        products, or services obtained from the Site without our prior written permission.
      </p>

      {/* Section 6 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        6. Limitation of Liability
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        To the fullest extent permitted by applicable law, Dividend Engines and its owners,
        operators, affiliates, and contributors shall not be liable for any direct, indirect,
        incidental, special, consequential, or punitive damages arising out of or related to
        your use of, or inability to use, the Site.
      </p>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        This includes, without limitation:
      </p>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>Any investment decisions you make based on information found on the Site</li>
        <li>Financial losses resulting from the use of our calculators or content</li>
        <li>Errors, inaccuracies, or omissions in calculator results or content</li>
        <li>Interruptions or unavailability of the Site</li>
        <li>Any actions taken by third-party services linked from our Site</li>
      </ul>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Calculator results are estimates based on the inputs you provide and mathematical
        assumptions. They are not predictions of actual investment performance. Actual results
        will vary based on market conditions, fees, taxes, and other factors.
      </p>

      {/* Section 7 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        7. Disclaimer of Warranties
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        The Site and all content, tools, and services are provided on an &quot;AS IS&quot; and
        &quot;AS AVAILABLE&quot; basis without warranties of any kind, whether express or
        implied. We disclaim all warranties, including but not limited to:
      </p>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>Implied warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
        <li>Warranties that the Site will be uninterrupted, error-free, or free of viruses or other harmful components</li>
        <li>Warranties regarding the accuracy, reliability, completeness, or timeliness of any content, including calculator results, stock data, or dividend information</li>
      </ul>

      {/* Section 8 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        8. Indemnification
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        You agree to indemnify, defend, and hold harmless Dividend Engines, its owners,
        operators, affiliates, and contributors from and against any and all claims, liabilities,
        damages, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising
        out of or related to your use of the Site, your violation of these Terms, or your
        violation of any rights of another party.
      </p>

      {/* Section 9 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        9. Affiliate Links and Third-Party Content
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Our Site contains affiliate links to third-party brokerage firms, financial service
        providers, and other companies. When you click on these links and make a purchase or
        open an account, we may earn a commission at no additional cost to you.
      </p>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        We are not responsible for the content, privacy practices, or terms of service of any
        third-party websites. When you leave our Site by clicking an affiliate or external link,
        you are subject to the terms and policies of the destination website. We encourage you
        to review the terms and privacy policies of any third-party site you visit.
      </p>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        The inclusion of any link on our Site does not imply endorsement of the linked site or
        its products or services. For more information about our affiliate relationships, please
        see our{' '}
        <a href="/disclaimer" className="text-blue-600 dark:text-blue-400 hover:underline">
          Financial Disclaimer
        </a>.
      </p>

      {/* Section 10 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        10. Termination
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        We reserve the right to terminate or restrict your access to the Site, without notice,
        for any conduct that we, in our sole discretion, believe is in violation of these Terms,
        is harmful to other users, us, or third parties, or for any other reason.
      </p>

      {/* Section 11 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        11. Governing Law
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        These Terms shall be governed by and construed in accordance with the laws of the United
        States, without regard to its conflict of law provisions. Any disputes arising under or
        in connection with these Terms shall be subject to the exclusive jurisdiction of the
        courts located within the United States.
      </p>

      {/* Section 12 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        12. Changes to Terms
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        We reserve the right to modify these Terms at any time. Changes will be effective
        immediately upon posting to the Site. We will update the &quot;Last updated&quot; date at
        the top of this page to reflect the date of the most recent changes. Your continued use
        of the Site after any modifications to these Terms constitutes your acceptance of the
        revised Terms. We encourage you to review these Terms periodically.
      </p>

      {/* Section 13 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        13. Contact Us
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        If you have any questions about these Terms of Service, please contact us:
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
    </div>
  )
}
