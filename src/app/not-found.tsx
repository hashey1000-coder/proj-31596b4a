import Link from "next/link";
import type { Metadata } from "next";
import { getAllHospitalsWithWaits } from "@/lib/data/hospitals";
import { SearchBar } from "@/components/SearchBar";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

const QUICK_LINKS = [
  { href: "/hospitals", label: "All hospitals" },
  { href: "/near-me", label: "Find my nearest A&E" },
  { href: "/regions", label: "Browse by region" },
  { href: "/statistics", label: "Live statistics" },
  { href: "/guides", label: "Patient guides" },
];

export default function NotFound() {
  const hospitals = getAllHospitalsWithWaits();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
      <p className="text-sm font-bold text-[#005EB8] uppercase tracking-widest mb-3">
        Error 404
      </p>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
        We couldn&apos;t find that page
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
        The page may have moved or never existed. Search for a hospital below,
        or jump to one of the main sections.
      </p>

      <div className="mt-8 max-w-xl mx-auto text-left">
        <SearchBar hospitals={hospitals} />
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        {QUICK_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:border-[#005EB8] hover:text-[#005EB8] hover:shadow-sm transition-all"
          >
            {l.label}
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-red-50 border border-red-200 p-5 max-w-xl mx-auto text-left flex items-start gap-3">
        <svg
          className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>
        <p className="text-sm text-red-800">
          <strong>In a medical emergency, dial 999.</strong> For urgent advice,
          call NHS 111 or visit{" "}
          <a
            href="https://111.nhs.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium"
          >
            111.nhs.uk
          </a>
          .
        </p>
      </div>
    </div>
  );
}
