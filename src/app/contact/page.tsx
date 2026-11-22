import Link from "next/link";
import type { Metadata } from "next";
import { SITE_NAME, CONTACT_EMAIL, LAST_REVIEWED_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with A&E Tracker UK — report a data error, suggest a correction, or make a press or general enquiry.",
  alternates: { canonical: "/contact/" },
};

const REASONS: { title: string; body: string }[] = [
  {
    title: "Report a data error",
    body: "A wait time that looks implausible, a hospital with the wrong details, or a source that seems out of date. Tell us the hospital or page and what looks wrong.",
  },
  {
    title: "Corrections to a guide",
    body: "Spotted a mistake in one of our written guides or policy pages? We review and fix confirmed errors promptly.",
  },
  {
    title: "Press & general enquiries",
    body: "Questions about the project, how it works, or the data behind it. We're happy to explain our methodology.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-700">Home</Link> &rsaquo; Contact
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
        Contact us
      </h1>
      <p className="mt-4 text-lg text-gray-600 leading-relaxed">
        {SITE_NAME} is an independent project and we genuinely value being told
        when something is wrong or could be better.
      </p>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 text-center">
        <p className="text-sm text-gray-500">Email us at</p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-1 inline-block text-xl font-semibold text-[#005EB8] hover:underline break-all"
        >
          {CONTACT_EMAIL}
        </a>
        <p className="mt-3 text-sm text-gray-500">
          We&apos;re a small project, so please allow a little time for a reply.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900">
          What to get in touch about
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-1">
          {REASONS.map((r) => (
            <div key={r.title} className="rounded-xl border border-gray-100 bg-gray-50 p-5">
              <h3 className="font-semibold text-gray-900">{r.title}</h3>
              <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-red-50 border border-red-200 p-5 flex items-start gap-3">
        <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>
        <p className="text-sm text-red-800">
          <strong>We cannot help with medical questions or emergencies.</strong>{" "}
          In a life-threatening emergency call 999. For urgent advice call NHS 111
          or visit{" "}
          <a href="https://111.nhs.uk" target="_blank" rel="noopener noreferrer" className="underline font-medium">
            111.nhs.uk
          </a>
          .
        </p>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        Page last reviewed {LAST_REVIEWED_DISPLAY}.
      </p>
    </div>
  );
}
