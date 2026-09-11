import Link from "next/link";
import { notFound } from "next/navigation";
import { getHospitalsByRegion, getRegions, getNationalStats } from "@/lib/data/hospitals";
import { formatWaitTime, waitSeverity, severityDotColor } from "@/lib/utils";
import type { Metadata } from "next";

export function generateStaticParams() {
  const regions = getRegions();
  return regions.map((r) => ({
    slug: r.region.toLowerCase().replace(/\s+&\s+/g, "-and-").replace(/\s+/g, "-"),
  }));
}

function slugToRegion(slug: string): string | null {
  const regions = getRegions();
  const decoded = decodeURIComponent(slug);
  return (
    regions.find(
      (r) =>
        r.region.toLowerCase().replace(/\s+&\s+/g, "-and-").replace(/\s+/g, "-") ===
        decoded
    )?.region ?? null
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const region = slugToRegion(slug);
  if (!region) return { title: "Region Not Found" };
  return {
    title: `${region} — Live A&E Wait Times`,
    description: `Current A&E waiting times at NHS hospitals in ${region}.`,
  };
}

export default async function RegionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const region = slugToRegion(slug);
  if (!region) notFound();

  const hospitals = getHospitalsByRegion(region);
  const nationalAvg = getNationalStats().avgWait;

  const withData = hospitals.filter((h) => h.wait_minutes !== null);
  const avgWait =
    withData.length > 0
      ? Math.round(
          withData.reduce((sum, h) => sum + h.wait_minutes!, 0) / withData.length
        )
      : null;

  const sorted = [...hospitals].sort((a, b) => {
    if (a.wait_minutes !== null && b.wait_minutes === null) return -1;
    if (a.wait_minutes === null && b.wait_minutes !== null) return 1;
    if (a.wait_minutes !== null && b.wait_minutes !== null) return a.wait_minutes - b.wait_minutes;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>{" "}
        &rsaquo;{" "}
        <Link href="/regions" className="hover:text-gray-700">
          Regions
        </Link>{" "}
        &rsaquo; {region}
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        {region} — Live A&E Wait Times
      </h1>
      <p className="text-gray-600 mb-2">
        {hospitals.length} A&E department{hospitals.length !== 1 ? "s" : ""}{" "}
        tracked in {region}.
      </p>
      {avgWait !== null && (
        <p className="text-sm text-gray-500 mb-8">
          Region average: <strong>{formatWaitTime(avgWait)}</strong>
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sorted.map((hospital) => {
          const severity = waitSeverity(hospital.wait_minutes);
          return (
            <Link
              key={hospital.id}
              href={`/hospitals/${hospital.slug}`}
              className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {hospital.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-0.5">
                    {hospital.city}
                  </p>
                  <span className="inline-block mt-2 text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                    {hospital.type}
                  </span>
                </div>
                {hospital.wait_minutes !== null ? (
                  <div className="text-right">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`w-2 h-2 rounded-full ${severityDotColor(severity)}`}
                      />
                      <span className="text-xl font-bold text-gray-900">
                        {hospital.wait_minutes}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">min</p>
                    <p className="text-xs text-gray-400">
                      ~ {formatWaitTime(hospital.wait_minutes)}
                    </p>
                  </div>
                ) : (
                  <div className="text-right">
                    <span className="text-xs text-gray-400">Live wait unavailable</span>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {hospital.avg_wait !== null ? (
                        <>Avg: <span className="font-semibold">{hospital.avg_wait} min</span></>
                      ) : nationalAvg > 0 ? (
                        <>National avg: <span className="font-semibold">{nationalAvg} min</span></>
                      ) : null}
                    </p>
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
