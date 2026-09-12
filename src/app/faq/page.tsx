import Link from "next/link";
import { FAQ } from "@/components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Common Questions About A&E Queues in the UK",
  description: "Quick answers about NHS A&E queue lengths, triage priorities, data sources and when an Urgent Treatment Centre might be a better option.",
  alternates: { canonical: "/faq/" },
};

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-700">Home</Link> &rsaquo; FAQ
      </nav>

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">
          Questions &amp; Answers
        </h1>
        <p className="mt-2 text-gray-600 max-w-2xl">
          Short, direct answers to the things patients ask us most about A&E
          queues, triage and choosing the right service. For deeper dives, see
          our{" "}
          <Link href="/guides" className="text-[#005EB8] hover:underline">
            patient guides
          </Link>
          .
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <FAQ />
        </div>

        <aside className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="font-semibold text-gray-900 mb-4">Popular guides</h2>
            <div className="space-y-3">
              <Link
                href="/guides/ae-or-utc"
                className="block p-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
              >
                <p className="text-sm font-medium text-gray-900">A&E vs UTC — Picking the Right Door</p>
                <p className="text-xs text-gray-500 mt-1">5 min read</p>
              </Link>
              <Link
                href="/guides/reduce-ae-wait"
                className="block p-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
              >
                <p className="text-sm font-medium text-gray-900">Practical Ways to Shorten Your Time</p>
                <p className="text-xs text-gray-500 mt-1">4 min read</p>
              </Link>
              <Link
                href="/guides/busiest-times-ae"
                className="block p-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
              >
                <p className="text-sm font-medium text-gray-900">Best &amp; Worst Hours to Arrive</p>
                <p className="text-xs text-gray-500 mt-1">4 min read</p>
              </Link>
            </div>
          </div>

          <div className="bg-red-50 rounded-2xl border border-red-200 p-6">
            <h2 className="font-semibold text-red-900 mb-2">Emergency?</h2>
            <p className="text-sm text-red-800">
              In a life-threatening emergency, call <strong>999</strong>. For
              urgent medical advice, call <strong>NHS 111</strong>.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
