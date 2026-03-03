import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Dividend Engines',
  description: 'Privacy Policy for Dividend Engines. Learn how we collect, use, and protect your personal information when you use our dividend calculators and educational resources.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
        Privacy Policy
      </h1>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Last updated: March 1, 2026
      </p>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Dividend Engines (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website
        dividendengines.com (the &quot;Site&quot;). This Privacy Policy explains how we collect,
        use, disclose, and safeguard your information when you visit our Site. Please read this
        policy carefully. By using the Site, you consent to the practices described in this
        Privacy Policy.
      </p>

      {/* Section 1 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        1. Information We Collect
      </h2>
      <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mt-4 mb-2">
        Personal Information
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        We may collect personal information that you voluntarily provide to us, including but
        not limited to:
      </p>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>Email address (when you subscribe to our newsletter or download resources)</li>
        <li>Name (if provided during newsletter signup)</li>
        <li>Any information you include in communications you send to us</li>
      </ul>
      <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mt-4 mb-2">
        Usage Data
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        We automatically collect certain information when you visit our Site, including:
      </p>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>IP address and approximate geographic location</li>
        <li>Browser type, version, and operating system</li>
        <li>Pages visited, time spent on pages, and navigation paths</li>
        <li>Referring website or source</li>
        <li>Device type and screen resolution</li>
        <li>Calculator usage patterns and interactions</li>
      </ul>
      <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mt-4 mb-2">
        Cookies and Similar Technologies
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        We use cookies and similar tracking technologies to collect usage data and improve your
        experience. For detailed information about the cookies we use, please see our{' '}
        <a href="/cookies" className="text-blue-600 dark:text-blue-400 hover:underline">
          Cookie Policy
        </a>.
      </p>

      {/* Section 2 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        2. How We Use Your Information
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        We use the information we collect for the following purposes:
      </p>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>To provide, operate, and maintain our Site and calculators</li>
        <li>To send you newsletters and email communications you have opted into</li>
        <li>To analyze usage trends and improve our Site, calculators, and content</li>
        <li>To understand how visitors interact with our tools and resources</li>
        <li>To detect, prevent, and address technical issues or abuse</li>
        <li>To respond to your inquiries and provide customer support</li>
        <li>To comply with legal obligations</li>
      </ul>

      {/* Section 3 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        3. Cookies and Tracking
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Our Site uses the following types of cookies and tracking technologies:
      </p>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>
          <strong>Google Analytics:</strong> We use Google Analytics to understand how visitors
          interact with our Site. Google Analytics collects information such as how often users
          visit, what pages they view, and what other sites they visited before coming to our
          Site.
        </li>
        <li>
          <strong>PostHog:</strong> We use PostHog for product analytics to understand user
          behavior, improve our calculators, and optimize the user experience.
        </li>
        <li>
          <strong>Affiliate Tracking Cookies:</strong> When you click on affiliate links on our
          Site, third-party affiliate networks may place cookies on your device to track
          referrals. These cookies are governed by the respective affiliate network&apos;s
          privacy policies.
        </li>
        <li>
          <strong>Essential Cookies:</strong> Some cookies are necessary for the Site to function
          properly, such as remembering your preferences and settings.
        </li>
      </ul>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        For more information about how we use cookies and how to manage your preferences, please
        visit our{' '}
        <a href="/cookies" className="text-blue-600 dark:text-blue-400 hover:underline">
          Cookie Policy
        </a>.
      </p>

      {/* Section 4 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        4. Third-Party Services
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        We use the following third-party services that may collect information about you:
      </p>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>
          <strong>Google Analytics:</strong> Web analytics service provided by Google, Inc. Their
          privacy policy is available at{' '}
          <a
            href="https://policies.google.com/privacy"
            className="text-blue-600 dark:text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            policies.google.com/privacy
          </a>.
        </li>
        <li>
          <strong>ConvertKit (Kit):</strong> Email marketing platform used to manage our
          newsletter. Their privacy policy is available at{' '}
          <a
            href="https://convertkit.com/privacy"
            className="text-blue-600 dark:text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            convertkit.com/privacy
          </a>.
        </li>
        <li>
          <strong>Affiliate Networks:</strong> We participate in affiliate programs with various
          brokerage and financial service providers. When you click an affiliate link, you may be
          subject to that partner&apos;s privacy policy.
        </li>
        <li>
          <strong>Vercel:</strong> Our Site is hosted on Vercel. Their privacy policy is available
          at{' '}
          <a
            href="https://vercel.com/legal/privacy-policy"
            className="text-blue-600 dark:text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            vercel.com/legal/privacy-policy
          </a>.
        </li>
      </ul>

      {/* Section 5 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        5. Data Sharing
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        We do not sell, trade, or rent your personal information to third parties. We may share
        your information only in the following circumstances:
      </p>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>
          <strong>Service Providers:</strong> We share information with third-party service
          providers who help us operate our Site (e.g., hosting, analytics, email delivery).
          These providers are obligated to protect your information and use it only for the
          services they provide to us.
        </li>
        <li>
          <strong>Legal Requirements:</strong> We may disclose your information if required to do
          so by law, or in response to valid requests by public authorities (e.g., a court order
          or government agency).
        </li>
        <li>
          <strong>Protection of Rights:</strong> We may disclose information when we believe it
          is necessary to protect our rights, your safety, or the safety of others, investigate
          fraud, or respond to a government request.
        </li>
      </ul>

      {/* Section 6 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        6. Data Retention
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        We retain your personal information only for as long as necessary to fulfill the
        purposes for which it was collected, including to satisfy any legal, accounting, or
        reporting requirements. Email subscriber information is retained until you unsubscribe
        or request deletion.
      </p>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        You may request deletion of your personal data at any time by contacting us at{' '}
        <a
          href="mailto:support@dividendengines.com"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@dividendengines.com
        </a>.
        We will respond to your request within 30 days.
      </p>

      {/* Section 7 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        7. Your Rights
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Depending on your location, you may have the following rights regarding your personal
        information:
      </p>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>
          <strong>Access:</strong> You have the right to request a copy of the personal
          information we hold about you.
        </li>
        <li>
          <strong>Correction:</strong> You have the right to request that we correct any
          inaccurate or incomplete personal information.
        </li>
        <li>
          <strong>Deletion:</strong> You have the right to request that we delete your personal
          information, subject to certain legal exceptions.
        </li>
        <li>
          <strong>Opt-Out of Marketing:</strong> You can unsubscribe from our email
          communications at any time by clicking the &quot;unsubscribe&quot; link included in
          every email we send.
        </li>
        <li>
          <strong>Cookie Preferences:</strong> You can manage your cookie preferences through
          your browser settings. Note that disabling certain cookies may affect the functionality
          of the Site.
        </li>
      </ul>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        To exercise any of these rights, please contact us at{' '}
        <a
          href="mailto:support@dividendengines.com"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@dividendengines.com
        </a>.
      </p>

      {/* Section 8 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        8. Children&apos;s Privacy
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Our Site is not directed at individuals under the age of 13. We do not knowingly collect
        personal information from children under 13. If we become aware that we have
        inadvertently collected personal information from a child under 13, we will take steps to
        delete that information as soon as possible. If you believe we have collected information
        from a child under 13, please contact us immediately at{' '}
        <a
          href="mailto:support@dividendengines.com"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@dividendengines.com
        </a>.
      </p>

      {/* Section 9 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        9. Changes to This Policy
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        We may update this Privacy Policy from time to time to reflect changes in our practices
        or for other operational, legal, or regulatory reasons. We will notify you of any
        material changes by posting the updated policy on this page and updating the &quot;Last
        updated&quot; date. We encourage you to review this Privacy Policy periodically to stay
        informed about how we protect your information.
      </p>

      {/* Section 10 */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        10. Contact Us
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        If you have any questions or concerns about this Privacy Policy or our data practices,
        please contact us:
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
