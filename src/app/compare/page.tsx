import Link from "next/link";
import { PageTrust } from "@/components/PageTrust";
import type { Metadata } from "next";
import { getAllHospitalsWithWaits } from "@/lib/data/hospitals";
import { CompareClient, type CompareHospital } from "@/components/CompareClient";

export const metadata: Metadata = {
  title: "Compare A&E Departments Side by Side",
  description:
    "Compare the current wait, 4-hour performance and department type of up to four NHS A&E departments side by side, using live and official data.",
  alternates: { canonical: "/compare/" },
};

export default function ComparePage() {
  const hospitals: CompareHospital[] = getAllHospitalsWithWaits().map((h) => ({
    slug: h.slug,
    name: h.name,
    city: h.city,
    region: h.region,
    type: h.type,
    wait_minutes: h.wait_minutes,
    typical_wait_minutes: h.typical_wait_minutes,
    typical_pct_within_4h: h.typical_pct_within_4h,
    typical_source: h.typical_source,
    patients_waiting: h.patients_waiting,
    opening_hours: h.opening_hours,
  }));

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>{" "}
        &rsaquo; Compare
      </nav>

      <h1 className="text-3xl font-bold text-gray-900">
        Compare A&E Departments
      </h1>
      <p className="mt-2 text-gray-600 max-w-2xl">
        Add up to four hospitals to see their current waits, 4-hour performance
        and department details side by side. Your selection is saved in the page
        link, so you can share the comparison.
      </p>

      <div className="mt-8">
        <CompareClient hospitals={hospitals} />
      </div>
      <PageTrust />
    </div>
  );
}
