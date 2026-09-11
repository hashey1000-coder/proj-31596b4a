import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <p className="text-6xl font-bold text-[#005EB8] mb-4">404</p>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Page not found
      </h1>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
        Try searching for a hospital instead.
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-xl bg-[#005EB8] px-6 py-3 text-sm font-medium text-white hover:bg-[#004f99] transition-colors"
        >
          Go to homepage
        </Link>
        <Link
          href="/hospitals"
          className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Browse all hospitals
        </Link>
      </div>
    </div>
  );
}
