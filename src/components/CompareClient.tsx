"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { formatWaitTime, severityDotColor, waitSeverity } from "@/lib/utils";

export interface CompareHospital {
  slug: string;
  name: string;
  city: string | null;
  region: string | null;
  type: string;
  wait_minutes: number | null;
  typical_wait_minutes: number | null;
  typical_pct_within_4h: number | null;
  typical_source: string | null;
  patients_waiting: number | null;
  opening_hours: string | null;
}

const MAX = 4;

// The figure we rank/compare on: the live wait if we have one, otherwise the
// official typical estimate.
function effectiveWait(h: CompareHospital): number | null {
  return h.wait_minutes ?? h.typical_wait_minutes;
}

export function CompareClient({ hospitals }: { hospitals: CompareHospital[] }) {
  const bySlug = useMemo(() => {
    const m = new Map<string, CompareHospital>();
    hospitals.forEach((h) => m.set(h.slug, h));
    return m;
  }, [hospitals]);

  const [selected, setSelected] = useState<string[]>([]);
  const [query, setQuery] = useState("");

  // Pre-fill from a shared URL (?h=slug1,slug2) after mount only, so the static
  // HTML and the first client render agree (both start empty).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get("h");
    if (!raw) return;
    const slugs = raw
      .split(",")
      .map((s) => s.trim())
      .filter((s) => bySlug.has(s))
      .slice(0, MAX);
    // One-shot restore of a shared selection on mount; the static HTML renders
    // the empty state, so this only ever runs client-side after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (slugs.length) setSelected(slugs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the URL in sync so a comparison can be copied and shared.
  useEffect(() => {
    const url = new URL(window.location.href);
    if (selected.length) url.searchParams.set("h", selected.join(","));
    else url.searchParams.delete("h");
    window.history.replaceState(null, "", url.toString());
  }, [selected]);

  const add = (slug: string) => {
    setSelected((cur) =>
      cur.includes(slug) || cur.length >= MAX ? cur : [...cur, slug]
    );
    setQuery("");
  };
  const remove = (slug: string) =>
    setSelected((cur) => cur.filter((s) => s !== slug));

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return hospitals
      .filter(
        (h) =>
          !selected.includes(h.slug) &&
          (h.name.toLowerCase().includes(q) ||
            (h.city || "").toLowerCase().includes(q) ||
            (h.region || "").toLowerCase().includes(q))
      )
      .slice(0, 6);
  }, [query, hospitals, selected]);

  const chosen = selected
    .map((s) => bySlug.get(s))
    .filter((h): h is CompareHospital => Boolean(h));

  // Which selected hospital has the shortest effective wait (for the badge).
  const bestSlug = useMemo(() => {
    let best: { slug: string; v: number } | null = null;
    for (const h of chosen) {
      const v = effectiveWait(h);
      if (v !== null && (best === null || v < best.v)) best = { slug: h.slug, v };
    }
    return best?.slug ?? null;
  }, [chosen]);

  return (
    <div>
      {/* Picker */}
      <div className="relative max-w-xl">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={
            selected.length >= MAX
              ? `Remove one to add another (max ${MAX})`
              : "Add a hospital to compare…"
          }
          disabled={selected.length >= MAX}
          aria-label="Search for a hospital to add to the comparison"
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#005EB8] focus:border-transparent disabled:bg-gray-50 disabled:text-gray-400"
        />
        {matches.length > 0 && (
          <ul className="absolute z-10 mt-1 w-full rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
            {matches.map((h) => (
              <li key={h.slug}>
                <button
                  onClick={() => add(h.slug)}
                  className="w-full text-left px-4 py-2.5 hover:bg-gray-50 flex items-center justify-between gap-3"
                >
                  <span>
                    <span className="text-sm font-medium text-gray-900">
                      {h.name}
                    </span>
                    <span className="block text-xs text-gray-500">
                      {h.city} · {h.region}
                    </span>
                  </span>
                  <span className="text-xs font-medium text-[#005EB8]">Add</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Selected chips */}
      {chosen.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {chosen.map((h) => (
            <span
              key={h.slug}
              className="inline-flex items-center gap-2 rounded-full bg-[#005EB8]/10 text-[#005EB8] pl-3 pr-2 py-1 text-sm font-medium"
            >
              {h.name}
              <button
                onClick={() => remove(h.slug)}
                aria-label={`Remove ${h.name} from comparison`}
                className="rounded-full hover:bg-[#005EB8]/20 p-0.5"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
          ))}
          {chosen.length > 0 && (
            <button
              onClick={() => setSelected([])}
              className="text-sm text-gray-500 hover:text-gray-700 px-2"
            >
              Clear all
            </button>
          )}
        </div>
      )}

      {/* Empty state */}
      {chosen.length === 0 && (
        <div className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
          <p className="text-gray-600">
            Search above to add up to {MAX} hospitals and compare their waits
            side by side.
          </p>
        </div>
      )}

      {/* Comparison table */}
      {chosen.length > 0 && (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-separate border-spacing-0 min-w-[520px]">
            <thead>
              <tr>
                <th className="sticky left-0 z-10 bg-white w-32 sm:w-40" />
                {chosen.map((h) => (
                  <th
                    key={h.slug}
                    className="p-3 align-bottom text-left border-b border-gray-200"
                  >
                    <Link
                      href={`/hospitals/${h.slug}`}
                      className="text-sm font-semibold text-[#005EB8] hover:underline leading-snug block"
                    >
                      {h.name}
                    </Link>
                    <span className="text-xs text-gray-500">{h.city}</span>
                    {h.slug === bestSlug && chosen.length > 1 && (
                      <span className="mt-1 inline-block rounded-full bg-green-100 text-green-700 px-2 py-0.5 text-[11px] font-semibold">
                        Shortest now
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <Row label="Wait now">
                {chosen.map((h) => {
                  const live = h.wait_minutes !== null;
                  const v = effectiveWait(h);
                  return (
                    <Cell key={h.slug} highlight={h.slug === bestSlug && chosen.length > 1}>
                      {v !== null ? (
                        <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                          <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${severityDotColor(waitSeverity(v))}`} />
                          <span className="text-lg font-bold text-gray-900">
                            {live ? "" : "~ "}
                            {formatWaitTime(v)}
                          </span>
                        </span>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </Cell>
                  );
                })}
              </Row>

              <Row label="Data">
                {chosen.map((h) => (
                  <Cell key={h.slug}>
                    {h.wait_minutes !== null ? (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        Live feed
                      </span>
                    ) : h.typical_wait_minutes !== null ? (
                      <span className="text-xs text-gray-500">
                        Typical · {h.typical_source}
                      </span>
                    ) : (
                      <span className="text-xs text-gray-400">No data</span>
                    )}
                  </Cell>
                ))}
              </Row>

              <Row label="Seen within 4 hours">
                {chosen.map((h) => (
                  <Cell key={h.slug}>
                    {h.typical_pct_within_4h !== null ? (
                      <span className="text-sm font-medium text-gray-900">
                        {h.typical_pct_within_4h}%
                      </span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </Cell>
                ))}
              </Row>

              <Row label="Patients waiting">
                {chosen.map((h) => (
                  <Cell key={h.slug}>
                    {h.patients_waiting !== null ? (
                      <span className="text-sm font-medium text-gray-900">
                        {h.patients_waiting}
                      </span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </Cell>
                ))}
              </Row>

              <Row label="Type">
                {chosen.map((h) => (
                  <Cell key={h.slug}>
                    <span className="text-sm text-gray-700">
                      {h.type === "UTC"
                        ? "Urgent Treatment Centre"
                        : h.type === "MIU"
                          ? "Minor Injuries Unit"
                          : "A&E (Type 1)"}
                    </span>
                  </Cell>
                ))}
              </Row>

              <Row label="Region">
                {chosen.map((h) => (
                  <Cell key={h.slug}>
                    <span className="text-sm text-gray-700">{h.region || "—"}</span>
                  </Cell>
                ))}
              </Row>

              <Row label="Opening hours">
                {chosen.map((h) => (
                  <Cell key={h.slug}>
                    <span className="text-xs text-gray-600">
                      {h.opening_hours?.includes("24")
                        ? "Open 24/7"
                        : h.opening_hours || "Check hours"}
                    </span>
                  </Cell>
                ))}
              </Row>

              <Row label="">
                {chosen.map((h) => (
                  <Cell key={h.slug}>
                    <Link
                      href={`/hospitals/${h.slug}`}
                      className="text-sm font-medium text-[#005EB8] hover:underline"
                    >
                      View details →
                    </Link>
                  </Cell>
                ))}
              </Row>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <tr>
      <th
        scope="row"
        className="sticky left-0 z-10 bg-white text-left align-top p-3 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100"
      >
        {label}
      </th>
      {children}
    </tr>
  );
}

function Cell({
  children,
  highlight = false,
}: {
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <td
      className={`p-3 align-top border-b border-gray-100 ${
        highlight ? "bg-green-50/60" : ""
      }`}
    >
      {children}
    </td>
  );
}
