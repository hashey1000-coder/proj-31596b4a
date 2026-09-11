"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import type { HospitalWithWait } from "@/lib/data/hospitals";
import { formatWaitTime, waitSeverity, severityDotColor } from "@/lib/utils";

export function HospitalsTable({
  hospitals,
  nationalAvg,
}: {
  hospitals: HospitalWithWait[];
  nationalAvg: number;
}) {
  const searchParams = useSearchParams();
  const initialQ = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQ);

  const normalize = (s: string) => s.toLowerCase().replace(/['']/g, "");

  const { filtered, sorted } = useMemo(() => {
    const f = query
      ? hospitals.filter(
          (h) =>
            normalize(h.name).includes(normalize(query)) ||
            (h.city && normalize(h.city).includes(normalize(query))) ||
            (h.region && normalize(h.region).includes(normalize(query)))
        )
      : hospitals;

    const s = [...f].sort((a, b) => {
      if (a.wait_minutes === null && b.wait_minutes === null) return 0;
      if (a.wait_minutes === null) return 1;
      if (b.wait_minutes === null) return -1;
      return a.wait_minutes - b.wait_minutes;
    });

    return { filtered: f, sorted: s };
  }, [hospitals, query]);

  return (
    <>
      <div className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>{" "}
          &rsaquo; Hospitals
        </nav>
        <h1 className="text-3xl font-bold text-gray-900">
          All NHS A&E Departments
        </h1>
        <p className="mt-2 text-gray-600">
          {hospitals.length} hospitals tracked across the UK. Sorted by shortest
          wait time first.
        </p>

        <div className="mt-4 max-w-md">
          <input
            type="text"
            placeholder="Filter by name, city or region…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005EB8] focus:border-transparent"
          />
          {query && (
            <p className="mt-2 text-sm text-gray-500">
              {filtered.length} hospital{filtered.length !== 1 ? "s" : ""}{" "}
              matching &ldquo;{query}&rdquo;
              <button
                onClick={() => setQuery("")}
                className="ml-2 text-[#005EB8] hover:underline"
              >
                Clear
              </button>
            </p>
          )}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Hospital
                </th>
                <th className="hidden sm:table-cell px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Region
                </th>
                <th className="hidden sm:table-cell px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Current Wait
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Patients
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {sorted.map((hospital) => {
                const severity = waitSeverity(hospital.wait_minutes);
                return (
                  <tr
                    key={hospital.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <Link
                        href={`/hospitals/${hospital.slug}`}
                        className="text-sm font-medium text-[#005EB8] hover:underline"
                      >
                        {hospital.name}
                      </Link>
                      <p className="text-xs text-gray-500">{hospital.city}</p>
                    </td>
                    <td className="hidden sm:table-cell px-6 py-4 text-sm text-gray-600">
                      {hospital.region}
                    </td>
                    <td className="hidden sm:table-cell px-6 py-4">
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                        {hospital.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      {hospital.wait_minutes !== null ? (
                        <div className="flex items-center justify-end gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${severityDotColor(severity)}`}
                          />
                          <span className="text-sm font-semibold text-gray-900">
                            {hospital.wait_minutes} min
                          </span>
                          <span className="text-xs text-gray-400">
                            ({formatWaitTime(hospital.wait_minutes)})
                          </span>
                        </div>
                      ) : (
                        <div className="text-right">
                          <span className="text-xs text-gray-400">
                            Live wait unavailable
                          </span>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {hospital.avg_wait !== null ? (
                              <>
                                Avg:{" "}
                                <span className="font-medium">
                                  {hospital.avg_wait} min
                                </span>
                              </>
                            ) : nationalAvg > 0 ? (
                              <>
                                National avg:{" "}
                                <span className="font-medium">
                                  {nationalAvg} min
                                </span>
                              </>
                            ) : null}
                          </p>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right text-sm text-gray-600">
                      {hospital.patients_waiting ?? hospital.total_patients ?? "—"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
