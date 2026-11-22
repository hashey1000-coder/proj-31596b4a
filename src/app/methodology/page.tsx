import Link from "next/link";
import type { Metadata } from "next";
import { SITE_NAME, LAST_REVIEWED_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Methodology — How We Collect & Present A&E Wait Data",
  description:
    "How A&E Tracker UK collects, validates, labels and updates NHS A&E wait-time data — including how often we refresh, what 'live' and 'typical' mean, and the limitations you should know about.",
  alternates: { canonical: "/methodology/" },
};

export default function MethodologyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-700">Home</Link> &rsaquo; Methodology
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
        Our methodology
      </h1>
      <p className="mt-4 text-lg text-gray-600 leading-relaxed">
        This page explains exactly how {SITE_NAME} gathers A&amp;E wait-time
        data, how we check and label it, and where its limits lie. We&apos;d
        rather you understand the numbers than take them on faith.
      </p>

      <div className="mt-10 space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            1. Where the figures come from
          </h2>
          <p className="mt-3">
            Every figure on the site originates from an official, publicly
            available source — NHS trust live dashboards and the national
            statistical publications for England, Scotland, Wales and Northern
            Ireland. We never invent, guess or crowd-source live numbers. The
            full list, with links and update frequencies, is on our{" "}
            <Link href="/data-sources" className="text-[#005EB8] hover:underline">
              data sources
            </Link>{" "}
            page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            2. How often we refresh
          </h2>
          <p className="mt-3">
            An automated process collects the latest public figures roughly every
            half hour, around the clock, and rebuilds the site so the pages you
            see stay current. Each source updates on its own schedule, though —
            some refresh every few minutes, others only once a day — so the
            freshness of any single reading depends on the trust that published
            it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            3. &ldquo;Live&rdquo; versus &ldquo;typical&rdquo; figures
          </h2>
          <p className="mt-3">
            We distinguish clearly between two kinds of number:
          </p>
          <ul className="mt-3 space-y-3 list-none">
            <li className="flex gap-3">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
              <span>
                <strong>Live</strong> — a recent reading pulled from a trust&apos;s
                public feed. If the most recent reading is more than about two
                hours old, we stop presenting it as live, because a stale queue
                length can be worse than none.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
              <span>
                <strong>Typical</strong> — where no live feed is available, we may
                show a <em>typical</em> wait. This is an estimate, derived from the
                most recent official four-hour performance statistics published
                for that hospital, and it is always labelled as typical rather
                than live. It describes a normal day, not the queue right now.
              </span>
            </li>
          </ul>
          <p className="mt-3">
            Some areas — Northern Ireland in particular — publish neither a live
            feed nor the statistics needed for a typical estimate at the hospital
            level. Where that is the case, we show no figure rather than a
            misleading one.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            4. Checking the data
          </h2>
          <p className="mt-3">
            Automated feeds occasionally return corrupted or implausible values —
            a negative wait, or a figure far beyond anything a real department
            would report. Before anything is published we discard readings that
            fall outside a plausible range, and we watch for sources that
            suddenly return far fewer hospitals than expected, which usually means
            a feed&apos;s format has changed and needs attention. A reading that
            fails these checks is dropped, not displayed.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            5. Trends and history
          </h2>
          <p className="mt-3">
            We retain roughly a week of readings for each hospital so we can show
            short-term trends — the 24-hour and multi-day charts on hospital
            pages. We do not keep a long-term archive; the site is built to answer
            &ldquo;how busy is it now, and lately?&rdquo;, not to be a historical
            database.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            6. What the numbers don&apos;t tell you
          </h2>
          <p className="mt-3">
            A headline wait time is an average or a snapshot; it is not a promise
            about your visit. Emergency departments see patients in order of
            clinical urgency, not arrival time, so a serious condition is seen
            quickly regardless of the queue, while a minor one may wait longer
            than the figure shown. Local feeds also measure slightly different
            things — time to triage, time to be seen, or time in department — so
            comparisons between nations are indicative rather than exact. Treat
            every figure as a helpful guide, not a guarantee.
          </p>
        </section>

        <div className="rounded-2xl bg-blue-50 border border-blue-200 p-5">
          <p className="text-sm text-blue-900">
            Think a figure looks wrong? We genuinely want to know. See our{" "}
            <Link href="/editorial-policy" className="underline font-medium">
              editorial policy
            </Link>{" "}
            for how to report a correction, or{" "}
            <Link href="/contact" className="underline font-medium">
              get in touch
            </Link>
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
