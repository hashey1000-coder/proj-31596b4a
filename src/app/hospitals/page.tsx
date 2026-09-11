import { Suspense } from "react";
import { getAllHospitalsWithWaits, getNationalStats } from "@/lib/data/hospitals";
import { HospitalsTable } from "@/components/HospitalsTable";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All NHS Hospitals — A&E Wait Times",
  description:
    "Browse live A&E waiting times at every NHS hospital we track across the UK.",
};

export default function HospitalsPage() {
  const hospitals = getAllHospitalsWithWaits();
  const nationalAvg = getNationalStats().avgWait;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Suspense>
        <HospitalsTable hospitals={hospitals} nationalAvg={nationalAvg} />
      </Suspense>
    </div>
  );
}
