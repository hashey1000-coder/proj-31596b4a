"use client";

import { useEffect, useState } from "react";
import { formatWaitTime } from "@/lib/utils";
import type { WaitReading } from "@/lib/data/hospitals";

function relativeTime(dateStr: string, now: number): string {
  const diff = now - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins} min ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

// Pin the timezone so the server build (UTC) and the visitor's browser format
// the clock identically — otherwise the two disagree and hydration fails.
function clockTime(dateStr: string): string {
  return new Date(dateStr).toLocaleString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/London",
  });
}

export function HospitalHistory({
  readings,
  hospitalName,
}: {
  readings: WaitReading[];
  hospitalName: string;
}) {
  const [showAll, setShowAll] = useState(false);
  const visibleReadings = showAll ? readings : readings.slice(0, 12);

  // "X min ago" depends on the current clock, which only exists on the client.
  // Start null so the server HTML and the first client render match (both show
  // the fixed clock time); fill in the relative label after mount and tick it
  // once a minute.
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    // Intentional one-shot sync after mount: the clock must only start on the
    // client, otherwise the static HTML and first client render disagree.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        {hospitalName} A&E Wait Times — Last 24 Hours
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm" aria-label={`${hospitalName} wait time readings over the last 24 hours`}>
          <thead>
            <tr className="border-b border-gray-200">
              <th scope="col" className="pb-2 text-left text-xs font-semibold text-gray-500 uppercase">
                Time
              </th>
              <th scope="col" className="pb-2 pl-3 text-right text-xs font-semibold text-gray-500 uppercase">
                <span className="sm:hidden">Wait</span>
                <span className="hidden sm:inline">Typical Time in Dept</span>
              </th>
              <th scope="col" className="pb-2 pl-3 text-right text-xs font-semibold text-gray-500 uppercase">
                Change
              </th>
              <th scope="col" className="hidden sm:table-cell pb-2 pl-3 text-right text-xs font-semibold text-gray-500 uppercase">
                Patients
              </th>
              <th scope="col" className="hidden sm:table-cell pb-2 pl-3 text-right text-xs font-semibold text-gray-500 uppercase">
                Total in Dept
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {visibleReadings.map((r, i) => {
              const prev = i + 1 < readings.length ? readings[i + 1] : null;
              const change =
                r.wait_minutes !== null && prev?.wait_minutes !== null && prev?.wait_minutes !== undefined
                  ? r.wait_minutes - prev.wait_minutes
                  : null;
              const pctChange =
                change !== null && prev?.wait_minutes && prev.wait_minutes > 0
                  ? Math.round((change / prev.wait_minutes) * 100)
                  : null;

              return (
                <tr key={r.id}>
                  <td className="py-2.5 text-gray-600" suppressHydrationWarning>
                    <span>
                      {now === null
                        ? clockTime(r.scraped_at)
                        : relativeTime(r.scraped_at, now)}
                    </span>
                    {now !== null && (
                      <span className="text-gray-400 text-xs ml-1.5">
                        {clockTime(r.scraped_at)}
                      </span>
                    )}
                  </td>
                  <td className="py-2.5 pl-3 text-right font-medium text-gray-900 whitespace-nowrap">
                    {r.wait_minutes !== null
                      ? formatWaitTime(r.wait_minutes)
                      : "—"}
                  </td>
                  <td className="py-2.5 pl-3 text-right">
                    {change !== null ? (
                      <span
                        className={`text-xs font-medium ${
                          change < 0
                            ? "text-green-600"
                            : change > 0
                              ? "text-red-600"
                              : "text-gray-400"
                        }`}
                      >
                        {change > 0 ? "+" : ""}
                        {change} min
                        {pctChange !== null && (
                          <span className="text-gray-400 ml-1">
                            ({pctChange > 0 ? "+" : ""}{pctChange}%)
                          </span>
                        )}
                      </span>
                    ) : (
                      <span className="text-xs text-gray-300">—</span>
                    )}
                  </td>
                  <td className="hidden sm:table-cell py-2.5 pl-3 text-right text-gray-600">
                    {r.patients_waiting ?? "—"}
                  </td>
                  <td className="hidden sm:table-cell py-2.5 pl-3 text-right text-gray-600">
                    {r.total_patients ?? "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {readings.length > 12 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-3 text-sm font-medium text-[#005EB8] hover:underline"
        >
          {showAll
            ? "Show fewer readings"
            : `Show all ${readings.length} readings`}
        </button>
      )}
    </div>
  );
}
