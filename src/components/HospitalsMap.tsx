"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export interface MapHospital {
  slug: string;
  name: string;
  city: string | null;
  type: string;
  lat: number;
  lng: number;
  wait_minutes: number | null;
  typical_wait_minutes: number | null;
}

const LEAFLET_VERSION = "1.9.4";
const CSS_URL = `https://cdnjs.cloudflare.com/ajax/libs/leaflet/${LEAFLET_VERSION}/leaflet.min.css`;
const JS_URL = `https://cdnjs.cloudflare.com/ajax/libs/leaflet/${LEAFLET_VERSION}/leaflet.min.js`;

function band(mins: number | null): { color: string; label: string } {
  if (mins === null) return { color: "#9ca3af", label: "No data" };
  if (mins < 120) return { color: "#16a34a", label: "Under 2h" };
  if (mins <= 240) return { color: "#d97706", label: "2–4h" };
  return { color: "#dc2626", label: "Over 4h" };
}

function loadLeaflet(): Promise<void> {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((window as any).L) return resolve();
    if (!document.querySelector(`link[href="${CSS_URL}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CSS_URL;
      document.head.appendChild(link);
    }
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${JS_URL}"]`
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("leaflet")));
      return;
    }
    const script = document.createElement("script");
    script.src = JS_URL;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("leaflet failed to load"));
    document.head.appendChild(script);
  });
}

export function HospitalsMap({ hospitals }: { hospitals: MapHospital[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let map: any = null;

    loadLeaflet()
      .then(() => {
        if (cancelled || !containerRef.current) return;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const L = (window as any).L;

        map = L.map(containerRef.current, {
          center: [54.5, -3.2],
          zoom: 6,
          scrollWheelZoom: false,
        });

        L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18,
          }
        ).addTo(map);

        for (const h of hospitals) {
          const mins = h.wait_minutes ?? h.typical_wait_minutes;
          const b = band(mins);
          const live = h.wait_minutes !== null;
          const waitTxt =
            mins === null
              ? "No current data"
              : `${live ? "" : "~ "}${mins} min${live ? " (live)" : " (typical)"}`;

          const marker = L.circleMarker([h.lat, h.lng], {
            radius: 7,
            color: "#ffffff",
            weight: 1.5,
            fillColor: b.color,
            fillOpacity: 0.9,
          }).addTo(map);

          const esc = (s: string) =>
            s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
          marker.bindPopup(
            `<div style="min-width:150px">
               <strong>${esc(h.name)}</strong><br/>
               <span style="color:#6b7280">${esc(h.city || "")}</span><br/>
               <span style="font-weight:600">${waitTxt}</span><br/>
               <a href="/hospitals/${h.slug}/" style="color:#005EB8;font-weight:600">View details →</a>
             </div>`
          );
        }

        if (!cancelled) setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
      if (map) map.remove();
    };
  }, [hospitals]);

  return (
    <div>
      <div className="relative rounded-2xl overflow-hidden border border-gray-200">
        <div
          ref={containerRef}
          className="h-[70vh] min-h-[420px] w-full bg-gray-100 z-0"
        />
        {status === "loading" && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50/80 pointer-events-none">
            <span className="text-sm text-gray-500">Loading map…</span>
          </div>
        )}
        {status === "error" && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 p-6 text-center">
            <span className="text-sm text-gray-600">
              The map couldn&apos;t load. Try the{" "}
              <Link href="/hospitals" className="text-[#005EB8] underline">
                hospitals list
              </Link>{" "}
              instead.
            </span>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-600">
        {[
          { c: "#16a34a", l: "Under 2 hours" },
          { c: "#d97706", l: "2–4 hours" },
          { c: "#dc2626", l: "Over 4 hours" },
          { c: "#9ca3af", l: "No current data" },
        ].map((x) => (
          <span key={x.l} className="flex items-center gap-1.5">
            <span
              className="w-3 h-3 rounded-full border border-white shadow-sm"
              style={{ backgroundColor: x.c }}
            />
            {x.l}
          </span>
        ))}
      </div>
    </div>
  );
}
