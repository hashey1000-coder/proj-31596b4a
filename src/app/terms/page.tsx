import Link from "next/link";
import type { Metadata } from "next";
import { SITE_NAME, CONTACT_EMAIL, LAST_REVIEWED_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms governing your use of A&E Tracker UK, including that the site is information only and not medical advice.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-700">Home</Link> &rsaquo; Terms of use
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
        Terms of use
      </h1>
      <p className="mt-4 text-gray-600 leading-relaxed">
        These terms govern your use of {SITE_NAME}. By using the site you agree to
        them. If you do not agree, please do not use the site.
      </p>

      <div className="mt-10 space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Not medical advice
          </h2>
          <p className="mt-3">
            {SITE_NAME} provides information only. Nothing on the site is medical
            advice and it must not be used to decide whether or when to seek care.
            In a life-threatening emergency call 999. Please read our full{" "}
            <Link href="/medical-disclaimer" className="text-[#005EB8] hover:underline">
              medical disclaimer
            </Link>
            , which forms part of these terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Accuracy &amp; availability
          </h2>
          <p className="mt-3">
            Wait-time figures are aggregated from official NHS sources and can be
            delayed, incomplete or occasionally inaccurate. We make reasonable
            efforts to keep the site accurate and available but provide it
            &ldquo;as is&rdquo;, without warranties of any kind. We may change,
            suspend or withdraw any part of the site at any time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Acceptable use
          </h2>
          <p className="mt-3">
            You agree not to misuse the site — for example by attempting to
            disrupt it, scrape it at a scale that degrades service for others, or
            use it for any unlawful purpose.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Intellectual property
          </h2>
          <p className="mt-3">
            The site&apos;s original text, design and code belong to {SITE_NAME}.
            The underlying wait-time data is published by NHS bodies and, for the
            national statistics, is Crown copyright made available under the Open
            Government Licence; see our{" "}
            <Link href="/data-sources" className="text-[#005EB8] hover:underline">
              data sources
            </Link>
            . You may link to our pages freely.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Third-party links
          </h2>
          <p className="mt-3">
            The site links to external websites (such as NHS services) for your
            convenience. We are not responsible for the content or practices of
            those sites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Limitation of liability
          </h2>
          <p className="mt-3">
            To the fullest extent permitted by law, {SITE_NAME} accepts no
            liability for any loss or harm arising from use of, or reliance on,
            the site or its data. Nothing in these terms limits liability that
            cannot be limited by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Changes &amp; governing law
          </h2>
          <p className="mt-3">
            We may update these terms from time to time; the date below shows when
            they were last reviewed. These terms are governed by the law of
            England and Wales. Questions? Email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#005EB8] hover:underline font-medium">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </section>

        <p className="text-sm text-gray-500">
          Last reviewed {LAST_REVIEWED_DISPLAY}.
        </p>
      </div>
    </div>
  );
}
