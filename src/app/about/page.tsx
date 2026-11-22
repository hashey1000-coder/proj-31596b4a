import Link from "next/link";
import type { Metadata } from "next";
import { SITE_NAME, CONTACT_EMAIL, LAST_REVIEWED_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — How A&E Tracker UK Works",
  description:
    "A&E Tracker UK is an independent project that aggregates publicly available NHS A&E wait-time data. Learn who we are, how the site works, how it is funded and how to reach us.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-700">Home</Link> &rsaquo; About
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
        About {SITE_NAME}
      </h1>
      <p className="mt-4 text-lg text-gray-600 leading-relaxed">
        {SITE_NAME} is an independent, free-to-use project that collects
        publicly available A&amp;E wait-time data from across the UK and presents
        it in one place, so you can see how busy emergency departments are before
        you set off.
      </p>

      <div className="mt-10 space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">What we do</h2>
          <p className="mt-3">
            Every day, individual NHS trusts and national health bodies publish
            how long people are waiting in their emergency departments — but that
            information is scattered across dozens of separate dashboards and
            statistical releases. We gather those public figures automatically,
            standardise them, and show them on a single, fast, mobile-friendly
            site with search, comparison and regional breakdowns.
          </p>
          <p className="mt-3">
            Our aim is simple: help people make a calmer, better-informed choice
            about <em>where</em> and <em>when</em> to seek urgent care — including
            whether an Urgent Treatment Centre might be a quicker and more
            appropriate option than a major A&amp;E.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Who runs the site
          </h2>
          <p className="mt-3">
            {SITE_NAME} is built and maintained as an independent solo project.
            It is <strong>not</strong> operated by, endorsed by or affiliated with
            the NHS, any NHS trust, or any government body. We are not a medical
            organisation and we do not employ clinicians. Where we describe
            symptoms or services, we draw on official NHS guidance and link back
            to the source so you can check it yourself.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Where the data comes from
          </h2>
          <p className="mt-3">
            All wait-time figures come from official, publicly available sources:
            NHS trust live dashboards and the national statistical publications
            for England, Scotland, Wales and Northern Ireland. We do not invent,
            estimate or crowd-source live numbers. Full details — including each
            source, how often it updates, and how we label &ldquo;live&rdquo;
            versus &ldquo;typical&rdquo; figures — are set out on our{" "}
            <Link href="/data-sources" className="text-[#005EB8] hover:underline">
              data sources
            </Link>{" "}
            and{" "}
            <Link href="/methodology" className="text-[#005EB8] hover:underline">
              methodology
            </Link>{" "}
            pages.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            How the site is funded
          </h2>
          <p className="mt-3">
            {SITE_NAME} is free to use. The project is self-funded and
            independent; our editorial decisions and the data we show are not
            influenced by any NHS body, advertiser or commercial sponsor. If this
            ever changes, we will disclose it clearly here.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Accuracy &amp; corrections
          </h2>
          <p className="mt-3">
            We work hard to keep the data accurate, but A&amp;E queues change
            minute to minute and source feeds occasionally lag or go offline, so
            figures may not match the situation on the ground at any given moment.
            If you spot something wrong, please tell us — see our{" "}
            <Link href="/editorial-policy" className="text-[#005EB8] hover:underline">
              editorial policy
            </Link>{" "}
            for how we handle corrections.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
          <p className="mt-3">
            Questions, corrections or press enquiries are welcome at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[#005EB8] hover:underline font-medium"
            >
              {CONTACT_EMAIL}
            </a>
            . See our{" "}
            <Link href="/contact" className="text-[#005EB8] hover:underline">
              contact page
            </Link>{" "}
            for more.
          </p>
        </section>

        <div className="rounded-2xl bg-red-50 border border-red-200 p-5 flex items-start gap-3">
          <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
          </svg>
          <p className="text-sm text-red-800">
            <strong>In a medical emergency, dial 999.</strong> Nothing on this
            site is medical advice. For urgent but non-emergency advice, call NHS
            111 or visit{" "}
            <a href="https://111.nhs.uk" target="_blank" rel="noopener noreferrer" className="underline font-medium">
              111.nhs.uk
            </a>
            .
          </p>
        </div>

        <p className="text-sm text-gray-500">
          Page last reviewed {LAST_REVIEWED_DISPLAY}.
        </p>
      </div>
    </div>
  );
}
