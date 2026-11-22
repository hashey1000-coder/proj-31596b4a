import Link from "next/link";
import type { Metadata } from "next";
import { SITE_NAME, CONTACT_EMAIL, LAST_REVIEWED_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Editorial Policy — Standards, Independence & Corrections",
  description:
    "The editorial standards behind A&E Tracker UK: how we source and check information, our independence, how we handle corrections, and the limits of what we publish.",
  alternates: { canonical: "/editorial-policy/" },
};

export default function EditorialPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-700">Home</Link> &rsaquo; Editorial policy
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
        Editorial policy
      </h1>
      <p className="mt-4 text-lg text-gray-600 leading-relaxed">
        This policy sets out the standards we hold ourselves to and, just as
        importantly, what we are not. We&apos;d rather be clear about our limits
        than overstate our authority.
      </p>

      <div className="mt-10 space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            What kind of site this is
          </h2>
          <p className="mt-3">
            {SITE_NAME} is an independent aggregator of official NHS wait-time
            data, with a small set of plain-English guides to help people
            navigate urgent care. The wait-time data is collected automatically
            from the sources listed on our{" "}
            <Link href="/data-sources" className="text-[#005EB8] hover:underline">
              data sources
            </Link>{" "}
            page. We are not a news publisher and not a medical organisation, and
            we do not present ourselves as either.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            How our guides are written
          </h2>
          <p className="mt-3">
            The patient-facing guides (for example when to choose A&amp;E over an
            Urgent Treatment Centre, or how triage works) are written in plain
            language and grounded in official NHS guidance. Where we describe a
            service or symptom, we point you to the authoritative source — usually{" "}
            <a href="https://www.nhs.uk" target="_blank" rel="noopener noreferrer" className="text-[#005EB8] hover:underline">
              nhs.uk
            </a>{" "}
            or NHS 111 — rather than asking you to take our word for it. Our
            guides are general information and never a substitute for advice from
            a qualified clinician.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">Independence</h2>
          <p className="mt-3">
            We have no commercial or editorial relationship with any NHS trust,
            government body, advertiser or sponsor that influences what we show or
            write. The project is self-funded. If that ever changes, we will say
            so plainly on our{" "}
            <Link href="/about" className="text-[#005EB8] hover:underline">
              about
            </Link>{" "}
            page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Accuracy &amp; review
          </h2>
          <p className="mt-3">
            Wait-time data is validated automatically before publication —
            implausible or stale readings are dropped rather than shown (see our{" "}
            <Link href="/methodology" className="text-[#005EB8] hover:underline">
              methodology
            </Link>
            ). The written guides and policy pages are reviewed periodically and
            whenever we are told something has changed or is wrong. Each of these
            pages carries the date it was last reviewed.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Corrections
          </h2>
          <p className="mt-3">
            We want to be told when something is wrong. If a wait time looks
            implausible, a hospital&apos;s details are out of date, or a guide
            contains an error, email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#005EB8] hover:underline font-medium">
              {CONTACT_EMAIL}
            </a>{" "}
            with the hospital or page name and what you believe is incorrect. We
            review corrections promptly, fix confirmed errors as quickly as the
            build cycle allows, and update the affected page&apos;s review date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            AI &amp; automation disclosure
          </h2>
          <p className="mt-3">
            The site is largely automated: data collection, validation and
            publishing run without manual intervention, and automated tools assist
            in drafting and maintaining the written content. A human is
            accountable for what is published and reviews the editorial material.
            We disclose this because we think readers deserve to know how a site
            is produced.
          </p>
        </section>

        <p className="text-sm text-gray-500">
          Page last reviewed {LAST_REVIEWED_DISPLAY}.
        </p>
      </div>
    </div>
  );
}
