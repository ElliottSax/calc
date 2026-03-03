import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | Dividend Engines",
  description:
    "Dividend Engines affiliate disclosure. Learn how we earn money through affiliate partnerships and how this affects our content and recommendations.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
        Affiliate Disclosure
      </h1>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        <strong>Last updated:</strong> March 1, 2026
      </p>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        This disclosure is provided in accordance with the Federal Trade
        Commission&apos;s 16 CFR Part 255 guidelines on the use of
        endorsements and testimonials in advertising. Transparency is a core
        value at Dividend Engines, and we want you to fully understand how we
        fund this website.
      </p>

      {/* How We Make Money */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        How We Make Money
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Dividend Engines is a free resource providing dividend calculators,
        investment tools, and educational content at no cost to you. We earn
        money through affiliate partnerships with brokerages, investment
        platforms, and financial tools. When you click certain links on our
        site and subsequently sign up for a product or service, we may receive
        a commission from the partner company. This commission comes at no
        additional cost to you.
      </p>

      {/* What This Means for You */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        What This Means for You
      </h2>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>
          <strong>You never pay more by using our links.</strong> The price you
          pay for any product or service is the same whether you use our
          affiliate link or go directly to the provider&apos;s website.
        </li>
        <li>
          <strong>
            Our content and recommendations are based on independent research.
          </strong>{" "}
          We evaluate products on their merits, not on the size of the
          commission we may receive.
        </li>
        <li>
          <strong>
            Affiliate partnerships do not influence our ratings or editorial
            content.
          </strong>{" "}
          Our editorial team maintains full independence from our business
          relationships. We will never recommend a product solely because it
          pays a higher commission.
        </li>
        <li>
          <strong>
            We only recommend products we believe provide genuine value.
          </strong>{" "}
          If a product does not meet our standards, we will not recommend it
          regardless of any potential affiliate relationship.
        </li>
      </ul>

      {/* How Affiliate Links Work */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        How Affiliate Links Work
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Affiliate links are specially tracked URLs that identify Dividend
        Engines as the referral source. Here is how the process works:
      </p>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>
          You click an affiliate link on our site, which directs you to the
          partner&apos;s website.
        </li>
        <li>
          The partner may set a tracking cookie on your device to record that
          you were referred by Dividend Engines. These cookies typically last
          between 30 and 90 days, depending on the partner.
        </li>
        <li>
          If you complete a qualifying action (such as opening an account,
          making a deposit, or subscribing to a service) within the cookie
          window, Dividend Engines may receive a commission from the partner.
        </li>
        <li>
          The commission is paid by the partner company, not by you. Your costs
          are the same as if you had navigated to the partner&apos;s site
          directly.
        </li>
      </ul>

      {/* Our Editorial Standards */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        Our Editorial Standards
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        We hold ourselves to high editorial standards to ensure the information
        on Dividend Engines is accurate, useful, and trustworthy:
      </p>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>
          All broker and platform reviews are based on objective criteria
          including fees and commissions, available features, user experience,
          customer support quality, and regulatory status.
        </li>
        <li>
          We regularly update our content to reflect current pricing, features,
          and market conditions.
        </li>
        <li>
          We clearly label content that contains affiliate links so you always
          know when a link may result in compensation to us.
        </li>
        <li>
          Our calculator tools provide results based solely on the data you
          input and established financial formulas. Affiliate relationships
          have no effect on calculator outputs.
        </li>
      </ul>

      {/* Which Content Contains Affiliate Links */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        Which Content Contains Affiliate Links
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        You may encounter affiliate links in the following types of content on
        Dividend Engines:
      </p>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>
          <strong>Broker comparison tables</strong> that list and compare
          brokerage platforms side by side
        </li>
        <li>
          <strong>Calculator pages with broker recommendations</strong> where
          we suggest platforms relevant to the calculation you are performing
        </li>
        <li>
          <strong>&quot;Best of&quot; and review articles</strong> that
          evaluate and rank financial products and services
        </li>
        <li>
          <strong>Resource pages with tool recommendations</strong> where we
          suggest software, apps, and platforms that complement your investing
          strategy
        </li>
      </ul>

      {/* FTC Compliance */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        FTC Compliance
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        This disclosure is provided in compliance with the Federal Trade
        Commission&apos;s guidelines concerning the use of endorsements and
        testimonials in advertising (16 CFR Part 255). We are committed to
        honest, transparent communication with our readers. We believe you
        deserve to know how we fund this website and how our business
        relationships may relate to the content we publish.
      </p>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        The opinions expressed on Dividend Engines are our own. We strive to
        provide accurate, up-to-date information, but we make no guarantees
        regarding the completeness or accuracy of the information on this site.
        Investment decisions should always be based on your own research and
        consultation with a qualified financial advisor.
      </p>

      {/* Questions */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        Questions?
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        If you have any questions about our affiliate relationships, editorial
        practices, or this disclosure, we welcome your inquiries. Please
        contact us at{" "}
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
