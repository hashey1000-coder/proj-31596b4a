"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";

interface HospitalData {
  id: string;
  name: string;
  slug: string;
  city: string | null;
  region: string | null;
  type: string;
  wait_minutes: number | null;
  patients_waiting: number | null;
  typical_wait: number | null;
  pct_within_4h: number | null;
  lat: number;
  lng: number;
}

interface NearbyHospital extends HospitalData {
  distance: number;
}

function haversine(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function NearMeClient({
  hospitals,
}: {
  hospitals: HospitalData[];
}) {
  const [userLat, setUserLat] = useState<number | null>(null);
  const [userLng, setUserLng] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [locationLabel, setLocationLabel] = useState<string | null>(null);
  const [postcode, setPostcode] = useState("");

  const nearby: NearbyHospital[] = useMemo(() => {
    if (userLat === null || userLng === null) return [];
    return hospitals
      .map((h) => ({
        ...h,
        distance: haversine(userLat, userLng, h.lat, h.lng),
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 15);
  }, [hospitals, userLat, userLng]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lat = params.get("lat");
    const lng = params.get("lng");
    const pc = params.get("postcode");
    if (lat && lng) {
      setLocationLabel(pc ? pc.toUpperCase() : "Your location");
      setUserLat(parseFloat(lat));
      setUserLng(parseFloat(lng));
    }
  }, []);

  function findNearby() {
    if (!navigator.geolocation) {
      setError(
        "Geolocation is not supported by your browser. Please enter your postcode below."
      );
      return;
    }
    setLoading(true);
    setError(null);
    setLocationLabel("Your location");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLat(position.coords.latitude);
        setUserLng(position.coords.longitude);
        setLoading(false);
      },
      () => {
        setError(
          "Location access denied. Please enter your postcode below instead."
        );
        setLoading(false);
      },
      { timeout: 10000, enableHighAccuracy: false, maximumAge: 300000 }
    );
  }

  async function searchByPostcode(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = postcode.trim();
    if (!trimmed) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://api.postcodes.io/postcodes/${encodeURIComponent(trimmed)}`
      );
      if (!res.ok) {
        setError("Postcode not found. Please check and try again.");
        setLoading(false);
        return;
      }
      const data = await res.json();
      if (data.status !== 200 || !data.result) {
        setError("Postcode not found. Please check and try again.");
        setLoading(false);
        return;
      }
      setLocationLabel(trimmed.toUpperCase());
      setUserLat(data.result.latitude);
      setUserLng(data.result.longitude);
      setLoading(false);
    } catch {
      setError("Failed to look up postcode. Please try again.");
      setLoading(false);
    }
  }

  function severityDot(mins: number): string {
    if (mins < 120) return "bg-green-500";
    if (mins < 240) return "bg-amber-500";
    return "bg-red-500";
  }

  function formatWait(mins: number): string {
    if (mins < 60) return `${mins} min`;
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return m === 0 ? `${h} hr` : `${h} hr ${m} min`;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>{" "}
        &rsaquo; Near Me
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Find Your Nearest A&E
      </h1>
      <p className="text-gray-600 mb-6">
        The fastest way to compare A&E waits in your area, sorted by distance.
      </p>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          {
            step: "1",
            title: "Share your location",
            desc: "Use the button or enter your postcode below.",
          },
          {
            step: "2",
            title: "See ranked results",
            desc: "We sort the closest NHS A&E departments by distance and show the wait at each.",
          },
          {
            step: "3",
            title: "Pick the right A&E",
            desc: "Tap any hospital for full details: address, phone, opening hours, and wait history.",
          },
        ].map((s) => (
          <div
            key={s.step}
            className="bg-white rounded-xl border border-gray-200 p-5"
          >
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#005EB8] text-white text-xs font-bold mb-3">
              {s.step}
            </span>
            <h3 className="font-semibold text-gray-900 text-sm mb-1">
              {s.title}
            </h3>
            <p className="text-xs text-gray-500">{s.desc}</p>
          </div>
        ))}
      </div>

      {nearby.length === 0 && !loading && (
        <div className="text-center py-10">
          <button
            onClick={findNearby}
            disabled={loading}
            className="rounded-xl bg-[#005EB8] px-8 py-4 text-base font-medium text-white hover:bg-[#004f99] transition-colors disabled:opacity-50 shadow-md hover:shadow-lg inline-flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            Use my location
          </button>
          <p className="text-xs text-gray-400 mt-3 mb-6">
            We use your location once. Nothing is stored.
          </p>

          <div className="flex items-center gap-3 max-w-xs mx-auto mb-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 font-medium">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <form onSubmit={searchByPostcode} className="max-w-xs mx-auto">
            <label
              htmlFor="postcode"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Enter your postcode
            </label>
            <div className="flex gap-2">
              <input
                id="postcode"
                type="text"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                placeholder="e.g. SE1 7EH"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#005EB8] focus:border-transparent"
              />
              <button
                type="submit"
                disabled={!postcode.trim()}
                className="rounded-lg bg-[#005EB8] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#004f99] transition-colors disabled:opacity-40"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      )}

      {error && (
        <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700 mb-6">
          {error}
        </div>
      )}

      {loading && nearby.length === 0 && (
        <div className="text-center py-12">
          <div className="inline-block w-8 h-8 border-4 border-[#005EB8] border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-gray-500 mt-3">
            Finding hospitals near you...
          </p>
        </div>
      )}

      {nearby.length > 0 && (
        <>
          {locationLabel && (
            <p className="text-sm text-gray-500 mb-4">
              Showing {nearby.length} nearest A&E departments to{" "}
              <strong className="text-gray-700">{locationLabel}</strong>
            </p>
          )}
          <div className="space-y-3">
            {nearby.map((h, i) => {
              const hasLive = h.wait_minutes !== null;
              const hasTypical = h.typical_wait !== null;
              const displayWait = h.wait_minutes ?? h.typical_wait;

              return (
                <Link
                  key={h.id}
                  href={`/hospitals/${h.slug}`}
                  className={`block rounded-xl border p-5 hover:shadow-md transition-all ${
                    hasLive
                      ? "border-gray-200 bg-white hover:border-gray-300"
                      : "border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-200"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-xs font-bold text-gray-600">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-xs text-[#005EB8] font-semibold mb-0.5">
                          {h.distance.toFixed(1)} km away
                        </p>
                        <h3 className="font-semibold text-gray-900">
                          {h.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {h.city}
                          {h.region ? `, ${h.region}` : ""}
                        </p>
                        <span className="inline-block mt-1.5 text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                          {h.type}
                        </span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      {hasLive ? (
                        <>
                          <div className="flex items-center gap-1 mb-0.5">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            <p className="text-xs text-green-700 font-medium">
                              Live
                            </p>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`w-2.5 h-2.5 rounded-full ${severityDot(h.wait_minutes!)}`}
                            />
                            <span className="text-2xl font-bold text-gray-900">
                              {h.wait_minutes}
                            </span>
                            <span className="text-sm text-gray-400">min</span>
                          </div>
                          <p className="text-xs text-gray-400">
                            ~ {formatWait(h.wait_minutes!)}
                          </p>
                        </>
                      ) : hasTypical ? (
                        <>
                          <p className="text-xs text-amber-600 font-medium mb-0.5">
                            Typical wait
                          </p>
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`w-2.5 h-2.5 rounded-full ${severityDot(displayWait!)}`}
                            />
                            <span className="text-2xl font-bold text-gray-500">
                              ~{displayWait}
                            </span>
                            <span className="text-sm text-gray-400">min</span>
                          </div>
                          <p className="text-xs text-gray-400">
                            {h.pct_within_4h}% seen in 4h
                          </p>
                          <p className="text-[10px] text-gray-300">
                            NHS England data
                          </p>
                        </>
                      ) : (
                        <span className="text-xs text-gray-400">
                          No data available
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <p className="text-xs text-gray-400 mt-4">
            <strong>Live</strong> = real-time from NHS trust feeds.{" "}
            <strong>Typical wait</strong> = estimated average from NHS England
            monthly statistics (not real-time).
          </p>
        </>
      )}
    </div>
  );
}
