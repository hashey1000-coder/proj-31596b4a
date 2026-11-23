import Link from "next/link";
import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, CONTACT_EMAIL, LAST_REVIEWED_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How A&E Tracker UK handles data: what we collect, the cookies and analytics we use, third-party advertising, and your rights under UK GDPR.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-700">Home</Link> &rsaquo; Privacy policy
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
        Privacy policy
      </h1>
      <p className="mt-4 text-gray-600 leading-relaxed">
        This policy explains what information {SITE_NAME} ({SITE_URL}) collects
        when you use the site, how it is used, and the choices and rights you
        have. We have tried to keep it in plain English.
      </p>

      <div className="mt-10 space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">Who we are</h2>
          <p className="mt-3">
            {SITE_NAME} is an independent project that aggregates publicly
            available NHS A&amp;E wait-time data. For any privacy question you can
            reach us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#005EB8] hover:underline font-medium">
              {CONTACT_EMAIL}
            </a>
            . For the purposes of UK data protection law, we are the data
            controller for the limited processing described below.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Information we collect
          </h2>
          <p className="mt-3">
            We do not ask you to create an account or submit personal details to
            use the site. The processing that does take place is:
          </p>
          <ul className="mt-3 space-y-2 list-disc pl-5">
            <li>
              <strong>Usage &amp; analytics data.</strong> With your consent, we
              use Google Analytics to understand how the site is used (for
              example pages viewed, approximate region, device type and
              referring site). This may include your IP address and is handled by
              Google on our behalf.
            </li>
            <li>
              <strong>Postcode searches.</strong> If you search by postcode, that
              postcode is sent to the third-party service{" "}
              <a href="https://postcodes.io" target="_blank" rel="noopener noreferrer" className="text-[#005EB8] hover:underline">
                postcodes.io
              </a>{" "}
              to look up its coordinates. We do not store your searches.
            </li>
            <li>
              <strong>Location.</strong> If you choose &ldquo;use my
              location&rdquo;, your browser shares your approximate coordinates
              with the page once, in order to rank nearby A&amp;Es by distance. It
              is used in your browser and is not sent to us or stored.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Cookies &amp; similar technologies
          </h2>
          <p className="mt-3">
            We use cookies and similar technologies for analytics and, where
            enabled, advertising. Non-essential cookies are only set after you
            consent through our cookie banner, and you can change your choice at
            any time. For the full list and how to control them, see our{" "}
            <Link href="/cookie-policy" className="text-[#005EB8] hover:underline">
              cookie policy
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">Advertising</h2>
          <p className="mt-3">
            We may display third-party advertising on this site, including
            through Google AdSense. In that case:
          </p>
          <ul className="mt-3 space-y-2 list-disc pl-5">
            <li>
              Third-party vendors, including Google, use cookies to serve ads
              based on your prior visits to this and other websites.
            </li>
            <li>
              Google&apos;s use of advertising cookies enables it and its partners
              to serve ads based on your visit to this and other sites.
            </li>
            <li>
              You can opt out of personalised advertising by visiting{" "}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-[#005EB8] hover:underline">
                Google Ads Settings
              </a>
              , or opt out of some third-party vendors&apos; use of cookies at{" "}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-[#005EB8] hover:underline">
                aboutads.info/choices
              </a>
              .
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Legal basis for processing
          </h2>
          <p className="mt-3">
            Where we rely on cookies for analytics and advertising, our legal
            basis is your <strong>consent</strong>, which you give through the
            cookie banner and can withdraw at any time. Operating and securing the
            website itself relies on our legitimate interests.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Who we share data with
          </h2>
          <p className="mt-3">
            We do not sell your personal data. Data is processed by the service
            providers that make the site work — principally Google (analytics and,
            where enabled, advertising) and the postcode lookup service noted
            above. These providers may process data outside the UK; where they do,
            they are required to protect it to UK standards.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Your rights
          </h2>
          <p className="mt-3">
            Under UK GDPR you have the right to access, correct or erase personal
            data, to object to or restrict processing, and to data portability.
            To exercise any of these, email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#005EB8] hover:underline font-medium">
              {CONTACT_EMAIL}
            </a>
            . You also have the right to complain to the UK&apos;s Information
            Commissioner&apos;s Office (
            <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#005EB8] hover:underline">
              ico.org.uk
            </a>
            ).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">Children</h2>
          <p className="mt-3">
            This site is intended for a general audience and is not directed at
            children. We do not knowingly collect personal data from children.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Changes to this policy
          </h2>
          <p className="mt-3">
            We may update this policy from time to time. The date below shows when
            it was last reviewed.
          </p>
        </section>

        <p className="text-sm text-gray-500">
          Last reviewed {LAST_REVIEWED_DISPLAY}.
        </p>
      </div>
    </div>
  );
}
