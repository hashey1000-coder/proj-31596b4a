import Link from "next/link";
import type { Metadata } from "next";
import { SITE_NAME, LAST_REVIEWED_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description:
    "A&E Tracker UK provides information only and is not medical advice. In a life-threatening emergency call 999. Read our full medical disclaimer.",
  alternates: { canonical: "/medical-disclaimer/" },
};

export default function MedicalDisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-700">Home</Link> &rsaquo; Medical disclaimer
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
        Medical disclaimer
      </h1>

      <div className="mt-6 rounded-2xl bg-red-50 border border-red-200 p-5 flex items-start gap-3">
        <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>
        <p className="text-sm text-red-800">
          <strong>In a life-threatening emergency, call 999 immediately</strong>{" "}
          — or go to your nearest A&amp;E. For urgent but non-emergency advice,
          call <strong>NHS 111</strong> or visit{" "}
          <a href="https://111.nhs.uk" target="_blank" rel="noopener noreferrer" className="underline font-medium">
            111.nhs.uk
          </a>
          . Do not delay seeking care because of a wait time shown on this site.
        </p>
      </div>

      <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
        <p>
          The information on {SITE_NAME} is provided for general information only.
          It is <strong>not medical advice</strong> and must not be relied upon as
          a substitute for professional medical assessment, diagnosis or
          treatment. Always seek the advice of a qualified healthcare professional
          — your GP, NHS 111, or emergency services — with any questions about a
          medical condition. Never disregard professional medical advice, or delay
          seeking it, because of something you have read here.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Wait times are a guide, not a guarantee
          </h2>
          <p className="mt-3">
            Wait-time figures are aggregated from official NHS sources and can be
            delayed, incomplete or occasionally inaccurate. Emergency departments
            treat patients in order of clinical need, not arrival time, so your
            actual wait may be shorter or longer than any figure shown. Never
            choose a hospital, or decide whether to seek care, on the basis of a
            wait time alone. How we gather and label the data is explained in our{" "}
            <Link href="/methodology" className="text-[#005EB8] hover:underline">
              methodology
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            No warranty
          </h2>
          <p className="mt-3">
            We make reasonable efforts to keep the information accurate and up to
            date but make no warranties, express or implied, about its
            completeness, accuracy, reliability or availability. Any reliance you
            place on the information is strictly at your own risk. To the fullest
            extent permitted by law, {SITE_NAME} accepts no liability for any loss
            or harm arising from use of, or reliance on, this site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Independence
          </h2>
          <p className="mt-3">
            {SITE_NAME} is an independent project and is not operated by, endorsed
            by or affiliated with the NHS or any government body. Links to external
            sites, including nhs.uk, are provided for convenience; we are not
            responsible for their content.
          </p>
        </section>

        <p className="text-sm text-gray-500">
          Page last reviewed {LAST_REVIEWED_DISPLAY}.
        </p>
      </div>
    </div>
  );
}
