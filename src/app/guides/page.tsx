import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Guides — Navigate NHS Emergency Services With Confidence",
  description: "Plain-English guides to help you pick the right NHS service, arrive prepared and spend less time waiting. Independently written, regularly reviewed.",
};

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-700">Home</Link> &rsaquo; Guides
      </nav>

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Patient Guides</h1>
        <p className="mt-2 text-gray-600 max-w-2xl">
          Straightforward answers to the questions people ask before, during and after an A&E visit. Written independently, checked against NHS sources and refreshed on a regular cycle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GUIDES.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#005EB8]/10 text-[#005EB8]">
                {guide.category}
              </span>
              <span className="text-xs text-gray-400">{guide.readTime}</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-900 group-hover:text-[#005EB8] transition-colors mb-2">
              {guide.title}
            </h2>
            <p className="text-sm text-gray-600 flex-1">{guide.description}</p>
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-400">
                Reviewed {guide.lastReviewed}
              </span>
              <span className="text-sm font-medium text-[#005EB8] group-hover:underline">
                Read guide &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 rounded-2xl border border-blue-200 p-8 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Looking for a hospital right now?</h2>
        <p className="text-gray-600 mb-4">
          Dial <strong>999</strong> for anything life-threatening. Otherwise, compare A&E queues near you before you travel.
        </p>
        <Link
          href="/near-me"
          className="inline-flex items-center gap-2 rounded-xl bg-[#005EB8] px-6 py-3 text-sm font-medium text-white hover:bg-[#004f99] transition-colors"
        >
          Search by location
        </Link>
      </div>
    </div>
  );
}
