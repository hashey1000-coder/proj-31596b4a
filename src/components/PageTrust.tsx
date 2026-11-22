import Link from "next/link";
import { SITE_NAME, LAST_REVIEWED_ISO, LAST_REVIEWED_DISPLAY } from "@/lib/site";

/**
 * Trust / authorship block shown beneath pages that carry live or estimated
 * wait data. Provides the transparency signals Google's quality raters look
 * for on YMYL (health) pages: who maintains the page, where the data comes
 * from, when it was last reviewed, and a clear not-medical-advice notice with
 * links to the methodology, data-sources, disclaimer and editorial policy.
 *
 * Pure server component — no client state, so it adds nothing to the hydration
 * payload and renders fully into the static HTML (crawlable).
 */
export function PageTrust({ className = "" }: { className?: string }) {
  return (
    <section aria-label="About this page" className={`mt-10 ${className}`}>
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6 text-sm text-gray-600 leading-relaxed">
        <p>
          Maintained by{" "}
          <Link href="/about" className="text-[#005EB8] hover:underline font-medium">
            {SITE_NAME}
          </Link>
          , an independent project that is not operated by, endorsed by or
          affiliated with the NHS. Wait-time figures are sourced directly from
          NHS Trust public feeds and official NHS statistics for England,
          Scotland, Wales and Northern Ireland — see our{" "}
          <Link href="/methodology" className="text-[#005EB8] hover:underline">
            methodology
          </Link>{" "}
          and{" "}
          <Link href="/data-sources" className="text-[#005EB8] hover:underline">
            data sources
          </Link>
          . Live figures update automatically throughout the day.
        </p>
        <p className="mt-3">
          Page last reviewed{" "}
          <time dateTime={LAST_REVIEWED_ISO} className="font-medium text-gray-700">
            {LAST_REVIEWED_DISPLAY}
          </time>
          . This page is for information only and is{" "}
          <strong className="font-semibold text-gray-700">not medical advice</strong>.
          In a life-threatening emergency call{" "}
          <strong className="font-semibold text-gray-700">999</strong>; for urgent
          but non-emergency advice call{" "}
          <strong className="font-semibold text-gray-700">NHS 111</strong>. See our
          full{" "}
          <Link href="/medical-disclaimer" className="text-[#005EB8] hover:underline">
            medical disclaimer
          </Link>{" "}
          and{" "}
          <Link href="/editorial-policy" className="text-[#005EB8] hover:underline">
            editorial policy
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
