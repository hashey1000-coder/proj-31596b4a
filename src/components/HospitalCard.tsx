import Link from "next/link";
import Image from "next/image";
import { formatWaitTime, waitSeverity, severityDotColor } from "@/lib/utils";
import type { HospitalWithWait } from "@/lib/data/hospitals";
import { getHospitalImage } from "@/lib/hospital-images";

function HospitalPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(/\s+/)
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#005EB8]/10 to-[#005EB8]/5 flex items-center justify-center">
      <span className="text-2xl font-bold text-[#005EB8]/30">{initials}</span>
    </div>
  );
}

export function HospitalCard({
  hospital,
  rank,
  nationalAvg,
}: {
  hospital: HospitalWithWait;
  rank?: number;
  nationalAvg?: number;
}) {
  const severity = waitSeverity(hospital.wait_minutes);
  const imageUrl = getHospitalImage(hospital.slug) || hospital.image_url;

  return (
    <div className="rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 h-full bg-white">
      <Link
        href={`/hospitals/${hospital.slug}`}
        className="flex flex-col h-full"
      >
        <div className="relative h-32 w-full overflow-hidden bg-gray-100">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`${hospital.name} building`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 85vw, 20vw"
              unoptimized
            />
          ) : (
            <HospitalPlaceholder name={hospital.name} />
          )}
          {rank && (
            <span className="absolute top-2 left-2 bg-[#005EB8] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              #{rank} Most tracked
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2 p-4 flex-1">
          <h3 className="text-sm font-semibold text-gray-900 leading-tight">
            {hospital.name}
          </h3>

          <p className="text-xs text-gray-500">
            {hospital.city}
            {hospital.region && hospital.city !== hospital.region
              ? `, ${hospital.region}`
              : ""}
          </p>

          <div className="mt-auto pt-3 border-t border-gray-100">
            <p className="text-[10px] text-gray-500 mb-1">Current wait</p>
            {hospital.wait_minutes !== null ? (
              <div className="flex items-baseline gap-2">
                <span className="flex items-center gap-1.5">
                  <span
                    className={`inline-block w-2 h-2 rounded-full ${severityDotColor(severity)}`}
                  />
                  <span className="text-xl font-bold text-gray-900">
                    {hospital.wait_minutes}
                  </span>
                  <span className="text-xs text-gray-500">min</span>
                </span>
              </div>
            ) : (
              <div>
                <span className="text-xs text-gray-400">Live wait unavailable</span>
                <p className="text-xs text-gray-500 mt-1">
                  {hospital.avg_wait !== null ? (
                    <>Avg: <span className="font-semibold">{hospital.avg_wait} min</span></>
                  ) : nationalAvg ? (
                    <>National avg: <span className="font-semibold">{nationalAvg} min</span></>
                  ) : null}
                </p>
              </div>
            )}
            {hospital.wait_minutes !== null && (
              <p className="text-[10px] text-gray-400 mt-0.5">
                ~ {formatWaitTime(hospital.wait_minutes)}
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

export function HospitalCardLarge({
  hospital,
  nationalAvg,
}: {
  hospital: HospitalWithWait;
  nationalAvg?: number;
}) {
  const severity = waitSeverity(hospital.wait_minutes);
  const imageUrl = getHospitalImage(hospital.slug) || hospital.image_url;

  return (
    <div className="rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 h-full bg-white">
      <Link
        href={`/hospitals/${hospital.slug}`}
        className="flex flex-col flex-1"
      >
        <div className="relative h-40 w-full overflow-hidden bg-gray-100">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`${hospital.name} building`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 85vw, 33vw"
              unoptimized
            />
          ) : (
            <HospitalPlaceholder name={hospital.name} />
          )}
          <div className="absolute top-2 left-2 flex items-center gap-2">
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-medium backdrop-blur-sm ${
                hospital.opening_hours?.includes("24")
                  ? "bg-green-500/90 text-white"
                  : "bg-gray-800/70 text-white"
              }`}
            >
              {hospital.opening_hours?.includes("24") ? "Open" : "Check hours"}
            </span>
            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-white/90 text-gray-700 backdrop-blur-sm">
              {hospital.type}
            </span>
          </div>
        </div>

        <div className="p-5 flex flex-col gap-2 flex-1">
          <h3 className="text-lg font-semibold text-gray-900">
            {hospital.name}
          </h3>

          <p className="text-sm text-gray-500">
            {hospital.opening_hours || "Contact for hours"}
          </p>

          <div className="mt-auto pt-4 grid grid-cols-4 gap-3 border-t border-gray-100">
            <div>
              <p className="text-xs text-gray-500">Wait</p>
              {hospital.wait_minutes !== null ? (
                <>
                  <p className="text-xl font-bold text-gray-900">
                    {hospital.wait_minutes}
                  </p>
                  <p className="text-xs text-gray-400">min</p>
                </>
              ) : (
                <>
                  <p className="text-xl font-bold text-gray-400">
                    {hospital.avg_wait ?? nationalAvg ?? "—"}
                  </p>
                  <p className="text-xs text-gray-400">
                    {hospital.avg_wait !== null ? "avg min" : nationalAvg ? "nat. avg" : ""}
                  </p>
                </>
              )}
            </div>
            <div>
              <p className="text-xs text-gray-500">Waiting</p>
              <p className="text-xl font-bold text-gray-900">
                {hospital.patients_waiting ?? "—"}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500">In Dept</p>
              <p className="text-xl font-bold text-gray-900">
                {hospital.total_patients ?? "—"}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Severity</p>
              <span
                className={`inline-block mt-1 w-3 h-3 rounded-full ${severityDotColor(severity)}`}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
