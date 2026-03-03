import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GDPR Compliance | Dividend Engines",
  description:
    "Learn how Dividend Engines complies with the General Data Protection Regulation (GDPR) and how you can exercise your data protection rights.",
};

export default function GDPRCompliancePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
        GDPR Compliance
      </h1>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        <strong>Last updated:</strong> March 1, 2026
      </p>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Dividend Engines is committed to protecting your personal data and
        complying with the General Data Protection Regulation (GDPR). This page
        explains how we collect, process, and protect your data, and outlines
        your rights as a data subject.
      </p>

      {/* Data Controller */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        Data Controller
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        The data controller responsible for your personal data is:
      </p>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        <strong>Dividend Engines</strong>
        <br />
        Website:{" "}
        <a
          href="https://dividendengines.com"
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
        >
          dividendengines.com
        </a>
        <br />
        Contact:{" "}
        <a
          href="mailto:support@dividendengines.com"
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
        >
          support@dividendengines.com
        </a>
      </p>

      {/* Lawful Basis for Processing */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        Lawful Basis for Processing
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        We process personal data under the following lawful bases as defined by
        Article 6 of the GDPR:
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-6 mb-2">
        Consent
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        We rely on your explicit consent for setting non-essential cookies
        (analytics, marketing, and personalization), sending marketing emails
        and newsletters, and enabling analytics tracking on your browsing
        activity. You may withdraw your consent at any time.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-6 mb-2">
        Legitimate Interest
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        We process certain data based on our legitimate interests, including
        maintaining site security, preventing fraud and abuse, and improving
        our services. We conduct balancing tests to ensure our legitimate
        interests do not override your fundamental rights and freedoms.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-6 mb-2">
        Contractual Necessity
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        When you use our calculator tools and services, we process the data
        necessary to provide the functionality you have requested, such as
        performing calculations and displaying results.
      </p>

      {/* Data We Process */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        Data We Process
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        We may collect and process the following categories of personal data:
      </p>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>
          <strong>Email addresses</strong> provided voluntarily through
          newsletter signups and contact forms
        </li>
        <li>
          <strong>Usage data</strong> such as pages visited, time spent on
          pages, calculator interactions, and referral sources
        </li>
        <li>
          <strong>Cookie data</strong> as described in our{" "}
          <Link
            href="/cookies"
            className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
          >
            Cookie Policy
          </Link>
        </li>
        <li>
          <strong>IP addresses</strong> collected for security purposes, fraud
          prevention, and approximate geographic analytics
        </li>
        <li>
          <strong>Device and browser information</strong> including browser
          type, operating system, and screen resolution
        </li>
      </ul>

      {/* Your Rights Under GDPR */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        Your Rights Under GDPR
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        As a data subject under the GDPR, you have the following rights:
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-6 mb-2">
        Right of Access
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        You have the right to request a copy of the personal data we hold about
        you. We will provide this information in a commonly used, structured,
        and machine-readable format within 30 days of your request.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-6 mb-2">
        Right to Rectification
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        You have the right to request that we correct any inaccurate or
        incomplete personal data we hold about you.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-6 mb-2">
        Right to Erasure
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Also known as the &quot;right to be forgotten,&quot; you may request
        that we delete your personal data when it is no longer necessary for
        the purpose it was collected, when you withdraw consent, or when
        there is no other legal basis for processing.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-6 mb-2">
        Right to Restrict Processing
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        You have the right to request that we restrict the processing of your
        personal data in certain circumstances, such as when you contest the
        accuracy of the data or when you have objected to processing.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-6 mb-2">
        Right to Data Portability
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        You have the right to receive the personal data you have provided to us
        in a structured, commonly used, and machine-readable format, and to
        transmit that data to another controller without hindrance.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-6 mb-2">
        Right to Object
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        You have the right to object to the processing of your personal data
        when that processing is based on our legitimate interests. Upon
        receiving your objection, we will cease processing unless we can
        demonstrate compelling legitimate grounds that override your interests.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-6 mb-2">
        Right to Withdraw Consent
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Where we rely on your consent to process personal data, you may
        withdraw that consent at any time. You can manage cookie consent
        through the cookie settings on our website, and you can unsubscribe
        from marketing emails using the unsubscribe link included in every
        email we send.
      </p>

      {/* Cookie Consent */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        Cookie Consent
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        We obtain explicit consent before setting any non-essential cookies on
        your device. Our cookie consent banner allows you to choose which
        categories of cookies you wish to accept. You can manage your cookie
        preferences at any time through the cookie settings link in our website
        footer. For detailed information about the cookies we use, please see
        our{" "}
        <Link
          href="/cookies"
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
        >
          Cookie Policy
        </Link>
        .
      </p>

      {/* International Data Transfers */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        International Data Transfers
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Dividend Engines is hosted on Vercel, with servers located in the
        United States. If you are accessing our site from the European Economic
        Area (EEA) or the United Kingdom, your data may be transferred to and
        processed in the United States. Where applicable, we rely on Standard
        Contractual Clauses (SCCs) approved by the European Commission to
        ensure that your data receives an adequate level of protection during
        international transfers.
      </p>

      {/* Data Retention */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        Data Retention
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        We retain personal data only for as long as necessary to fulfill the
        purposes for which it was collected:
      </p>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>
          <strong>Newsletter subscribers:</strong> Your email address is
          retained until you unsubscribe, at which point it is deleted from our
          mailing list within 30 days.
        </li>
        <li>
          <strong>Analytics data:</strong> Aggregated usage data is retained
          for up to 14 months, after which it is automatically deleted or
          anonymized.
        </li>
        <li>
          <strong>Cookies:</strong> Individual cookie retention periods are
          detailed in our{" "}
          <Link
            href="/cookies"
            className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
          >
            Cookie Policy
          </Link>
          .
        </li>
      </ul>

      {/* Data Breach Notification */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        Data Breach Notification
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        In the event of a personal data breach that is likely to result in a
        risk to your rights and freedoms, we will notify the relevant
        supervisory authority within 72 hours of becoming aware of the breach,
        as required by Article 33 of the GDPR. If the breach is likely to
        result in a high risk to you, we will also notify you directly without
        undue delay, providing details of the breach and the measures we are
        taking to address it.
      </p>

      {/* How to Exercise Your Rights */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        How to Exercise Your Rights
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        To exercise any of your rights under the GDPR, please send an email to{" "}
        <a
          href="mailto:support@dividendengines.com?subject=GDPR%20Request"
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
        >
          support@dividendengines.com
        </a>{" "}
        with <strong>&quot;GDPR Request&quot;</strong> in the subject line.
        Please include the following information in your request:
      </p>
      <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
        <li>Your full name and email address associated with your data</li>
        <li>
          A description of the right you wish to exercise (access,
          rectification, erasure, etc.)
        </li>
        <li>
          Any additional information that will help us identify and locate your
          data
        </li>
      </ul>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        We will respond to your request within 30 days. In some cases, we may
        need to verify your identity before processing your request.
      </p>

      {/* Supervisory Authority */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        Supervisory Authority
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        If you believe that our processing of your personal data infringes the
        GDPR, you have the right to lodge a complaint with your local data
        protection authority (also known as a supervisory authority). A list of
        EU/EEA data protection authorities can be found on the{" "}
        <a
          href="https://edpb.europa.eu/about-edpb/about-edpb/members_en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
        >
          European Data Protection Board website
        </a>
        . We would, however, appreciate the opportunity to address your
        concerns before you approach a supervisory authority, so please
        consider contacting us first.
      </p>

      {/* Contact Us */}
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
        Contact Us
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        If you have any questions about this GDPR compliance page or our data
        protection practices, please contact us at{" "}
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
