import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Dividend Engines",
  description:
    "Learn how Dividend Engines uses cookies to improve your experience, including analytics, marketing, and personalization cookies.",
};

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
        Cookie Policy
      </h1>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        <strong>Last updated:</strong> March 1, 2026
      </p>

      {/* What Are Cookies */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        What Are Cookies
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Cookies are small text files that are stored on your device (computer,
        tablet, or mobile phone) when you visit a website. They are widely used
        to make websites work more efficiently, provide a better user
        experience, and give website owners useful information about how their
        site is being used. Cookies may be set by the website you are visiting
        (&quot;first-party cookies&quot;) or by third-party services that the
        website uses (&quot;third-party cookies&quot;).
      </p>

      {/* Cookie Categories We Use */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        Cookie Categories We Use
      </h2>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-6 mb-2">
        Necessary Cookies (Always Active)
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        These cookies are essential for the website to function properly. They
        enable core features such as session management, security protections,
        and remembering your cookie consent preferences. Because they are
        strictly necessary, these cookies cannot be disabled.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-6 mb-2">
        Analytics Cookies (Opt-In Required)
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        We use analytics services including Google Analytics 4 and PostHog to
        understand how visitors interact with Dividend Engines. These cookies
        help us measure site usage, track page views, and analyze user behavior
        so we can improve our calculators and content. Analytics cookies are
        only set after you provide consent.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-6 mb-2">
        Marketing Cookies (Opt-In Required)
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Marketing cookies from services like Google Ads and Facebook Pixel are
        used for ad targeting and conversion tracking. These cookies help us
        understand the effectiveness of our advertising campaigns and may be
        used to show you relevant advertisements on other websites. Marketing
        cookies are only set after you provide consent.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-6 mb-2">
        Personalization Cookies (Opt-In Required)
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Personalization cookies remember your preferences such as theme
        selection (light or dark mode), calculator settings, and language
        preferences. These cookies enhance your experience by tailoring the
        site to your individual needs. Personalization cookies are only set
        after you provide consent.
      </p>

      {/* Specific Cookies Used */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        Specific Cookies Used
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Below is a list of the primary cookies used on Dividend Engines:
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-300 dark:border-slate-600">
              <th className="py-2 pr-4 text-slate-900 dark:text-white font-semibold">
                Cookie Name
              </th>
              <th className="py-2 pr-4 text-slate-900 dark:text-white font-semibold">
                Provider
              </th>
              <th className="py-2 pr-4 text-slate-900 dark:text-white font-semibold">
                Purpose
              </th>
              <th className="py-2 text-slate-900 dark:text-white font-semibold">
                Duration
              </th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-200 dark:border-slate-700">
              <td className="py-2 pr-4 font-mono text-sm">_ga</td>
              <td className="py-2 pr-4">Google Analytics 4</td>
              <td className="py-2 pr-4">
                Distinguishes unique users by assigning a randomly generated
                number as a client identifier
              </td>
              <td className="py-2">2 years</td>
            </tr>
            <tr className="border-b border-slate-200 dark:border-slate-700">
              <td className="py-2 pr-4 font-mono text-sm">_gid</td>
              <td className="py-2 pr-4">Google Analytics 4</td>
              <td className="py-2 pr-4">
                Distinguishes unique users for session-level analytics
              </td>
              <td className="py-2">24 hours</td>
            </tr>
            <tr className="border-b border-slate-200 dark:border-slate-700">
              <td className="py-2 pr-4 font-mono text-sm">ph_*</td>
              <td className="py-2 pr-4">PostHog</td>
              <td className="py-2 pr-4">
                Product analytics tracking for site usage and feature adoption
              </td>
              <td className="py-2">1 year</td>
            </tr>
            <tr className="border-b border-slate-200 dark:border-slate-700">
              <td className="py-2 pr-4 font-mono text-sm">cookie_consent</td>
              <td className="py-2 pr-4">Dividend Engines</td>
              <td className="py-2 pr-4">
                Stores your cookie consent preferences
              </td>
              <td className="py-2">1 year</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Affiliate Tracking Cookies */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        Affiliate Tracking Cookies
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        When you click on affiliate links to our broker partners (such as
        brokerage platforms and financial tools), those partners may set their
        own cookies on your device. These affiliate tracking cookies are used
        to identify that you were referred from Dividend Engines, so that any
        qualifying commissions can be properly attributed. The duration and
        behavior of these cookies are governed by the respective partner&apos;s
        cookie policy. We do not control the cookies set by third-party
        affiliate partners.
      </p>

      {/* How to Manage Cookies */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        How to Manage Cookies
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        You have several options for managing cookies on Dividend Engines:
      </p>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>
          <strong>Cookie Consent Banner:</strong> When you first visit our
          site, a cookie consent banner allows you to accept or decline
          non-essential cookies. You can update your preferences at any time by
          clicking the cookie settings link in our website footer.
        </li>
        <li>
          <strong>Browser Settings:</strong> Most web browsers allow you to
          control cookies through their settings. You can typically find these
          options in the &quot;Privacy&quot; or &quot;Security&quot; section of
          your browser preferences. You can block all cookies, block only
          third-party cookies, or delete cookies that have already been set.
        </li>
        <li>
          <strong>Important Note:</strong> Blocking or deleting certain cookies
          may affect the functionality of Dividend Engines. For example,
          disabling necessary cookies may prevent some features from working
          correctly, and disabling personalization cookies will reset your
          saved preferences.
        </li>
      </ul>

      {/* Third-Party Cookies */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        Third-Party Cookies
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Some cookies on our site are set by third-party services. For more
        information about how these services use cookies, please refer to their
        respective privacy policies:
      </p>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
          >
            Google Privacy Policy
          </a>{" "}
          (covers Google Analytics and Google Ads)
        </li>
        <li>
          <a
            href="https://posthog.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
          >
            PostHog Privacy Policy
          </a>
        </li>
      </ul>

      {/* Changes to Cookie Policy */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        Changes to This Cookie Policy
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        We may update this Cookie Policy from time to time to reflect changes
        in our practices, technology, or legal requirements. When we make
        changes, we will update the &quot;Last updated&quot; date at the top of
        this page. We encourage you to review this policy periodically. If we
        make significant changes to how we use cookies, we will notify you
        through a prominent notice on our website or by re-displaying the
        cookie consent banner.
      </p>

      {/* Contact Us */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        Contact Us
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        If you have any questions about our use of cookies, please contact us
        at{" "}
        <a
          href="mailto:support@dividendengines.com"
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
        >
          support@dividendengines.com
        </a>
        .
      </p>
    </div>
  );
}
