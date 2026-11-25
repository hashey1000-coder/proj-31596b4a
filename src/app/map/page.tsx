import Link from "next/link";
import { PageTrust } from "@/components/PageTrust";
import LkzAd from "@/components/LkzAd";
import type { Metadata } from "next";
import { getAllHospitalsWithWaits } from "@/lib/data/hospitals";
import { HospitalsMap, type MapHospital } from "@/components/HospitalsMap";

export const metadata: Metadata = {
  title: "A&E Wait Times Map — Every UK Hospital",
  description:
    "An interactive map of every tracked NHS A&E, UTC and MIU across the UK, with each department colour-coded by its current wait.",
  alternates: { canonical: "/map/" },
};

export default function MapPage() {
  const hospitals: MapHospital[] = getAllHospitalsWithWaits()
    .filter((h) => h.lat !== null && h.lng !== null)
    .map((h) => ({
      slug: h.slug,
      name: h.name,
      city: h.city,
      type: h.type,
      lat: h.lat as number,
      lng: h.lng as number,
      wait_minutes: h.wait_minutes,
      typical_wait_minutes: h.typical_wait_minutes,
    }));

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>{" "}
        &rsaquo; Map
      </nav>

      <h1 className="text-3xl font-bold text-gray-900">A&E Wait Times Map</h1>
      <p className="mt-2 text-gray-600 max-w-2xl">
        {hospitals.length} departments across the UK, each pin coloured by its
        current wait. Tap a pin for the latest figure and a link to its page.
      </p>

      <LkzAd unit={1548} name="Top_leaderboard" />

      <div className="mt-8">
        <HospitalsMap hospitals={hospitals} />
      </div>

      <p className="mt-6 text-xs text-gray-400 max-w-2xl">
        Live figures come straight from each trust&apos;s dashboard; where no
        live feed exists, the pin reflects the typical wait from official
        statistics. Map data &copy; OpenStreetMap contributors.
      </p>
      <PageTrust />
    </div>
  );
}
