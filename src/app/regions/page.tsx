import Link from "next/link";
import { getRegions } from "@/lib/data/hospitals";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Browse A&E Waits by Region",
  description: "Browse current A&E waiting times across UK regions.",
};

export default function RegionsPage() {
  const regions = getRegions();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>{" "}
        &rsaquo; Regions
      </nav>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Browse A&E Waits by Region
      </h1>
      <p className="text-gray-600 mb-8">
        Select a region to see current A&E waiting times at NHS hospitals in
        that area.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {regions.map((r) => (
          <Link
            key={r.region}
            href={`/regions/${encodeURIComponent(r.region.toLowerCase().replace(/\s+&\s+/g, "-and-").replace(/\s+/g, "-"))}`}
            className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <h2 className="text-lg font-semibold text-gray-900">{r.region}</h2>
            <p className="text-sm text-gray-500 mt-1">
              {r.count} A&E department{r.count !== 1 ? "s" : ""}
            </p>
            <p className="text-xs text-gray-400 mt-1">{r.country}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
