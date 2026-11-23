import Link from "next/link";
import type { Metadata } from "next";
import { SITE_NAME, LAST_REVIEWED_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "The cookies A&E Tracker UK uses, what each one does, and how to control your consent and your browser settings.",
  alternates: { canonical: "/cookie-policy/" },
};

const COOKIES: { name: string; provider: string; purpose: string; expiry: string }[] = [
  { name: "_ga", provider: "Google Analytics", purpose: "Distinguishes unique visitors to measure site usage.", expiry: "2 years" },
  { name: "_ga_*", provider: "Google Analytics", purpose: "Maintains session state for Google Analytics 4.", expiry: "2 years" },
  { name: "aewt_consent", provider: SITE_NAME, purpose: "Remembers your cookie choice so we don't ask again.", expiry: "6 months" },
];

export default function CookiePolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-700">Home</Link> &rsaquo; Cookie policy
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
        Cookie policy
      </h1>
      <p className="mt-4 text-gray-600 leading-relaxed">
        This page explains how {SITE_NAME} uses cookies and similar technologies,
        and how you can control them. It sits alongside our{" "}
        <Link href="/privacy-policy" className="text-[#005EB8] hover:underline">
          privacy policy
        </Link>
        .
      </p>

      <div className="mt-10 space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            What cookies are
          </h2>
          <p className="mt-3">
            Cookies are small text files a website stores on your device. They let
            a site remember your choices and help its owner understand how the
            site is used. Similar technologies (such as local storage) do
            comparable things, and we treat them the same way here.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            How we use them
          </h2>
          <p className="mt-3">
            We keep cookies to a minimum. A single essential cookie remembers your
            consent choice. Beyond that, we use analytics cookies — and, where
            advertising is enabled, advertising cookies — <strong>only after you
            agree</strong> through our cookie banner. If you decline, these are not
            set.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Cookies we may set
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg">
              <thead className="bg-gray-50 text-left text-gray-700">
                <tr>
                  <th className="px-3 py-2 font-semibold">Cookie</th>
                  <th className="px-3 py-2 font-semibold">Provider</th>
                  <th className="px-3 py-2 font-semibold">Purpose</th>
                  <th className="px-3 py-2 font-semibold">Expiry</th>
                </tr>
              </thead>
              <tbody>
                {COOKIES.map((c) => (
                  <tr key={c.name} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 whitespace-nowrap">{c.name}</td>
                    <td className="px-3 py-2 text-gray-600">{c.provider}</td>
                    <td className="px-3 py-2 text-gray-600">{c.purpose}</td>
                    <td className="px-3 py-2 text-gray-600 whitespace-nowrap">{c.expiry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-500">
            If advertising through Google AdSense is enabled, Google and its
            partners may set additional advertising cookies after you consent; see
            our{" "}
            <Link href="/privacy-policy" className="text-[#005EB8] hover:underline">
              privacy policy
            </Link>{" "}
            for how to opt out of personalised ads.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Controlling cookies
          </h2>
          <p className="mt-3">
            You can accept or decline non-essential cookies using the banner shown
            on your first visit, and change your mind later by clearing this
            site&apos;s data in your browser, which makes the banner appear again.
            You can also block or delete cookies through your browser settings,
            though some conveniences may stop working. Guidance for common
            browsers is available at{" "}
            <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#005EB8] hover:underline">
              aboutcookies.org
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
