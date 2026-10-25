import type { Metadata } from "next";
import { getAllHospitalsWithWaits } from "@/lib/data/hospitals";
import { NearMeClient } from "@/components/NearMeClient";

export const metadata: Metadata = {
  title: "A&E Near Me — Compare Queues by Distance",
  description:
    "Enter a postcode or share your location to see every NHS A&E department nearby, ranked by distance with current queue lengths.",
  alternates: { canonical: "/near-me/" },
};

export default function NearMePage() {
  const allHospitals = getAllHospitalsWithWaits();

  const hospitals = allHospitals
    .filter((h) => h.lat !== null && h.lng !== null)
    .map((h) => ({
      id: h.id,
      name: h.name,
      slug: h.slug,
      city: h.city,
      region: h.region,
      type: h.type,
      wait_minutes: h.wait_minutes,
      patients_waiting: h.patients_waiting,
      // Unified official-statistics fallback (Scotland + Wales + England),
      // only when there is no live wait.
      typical_wait: h.wait_minutes === null ? h.typical_wait_minutes : null,
      pct_within_4h: h.wait_minutes === null ? h.typical_pct_within_4h : null,
      lat: h.lat!,
      lng: h.lng!,
    }));

  return <NearMeClient hospitals={hospitals} />;
}
