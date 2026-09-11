"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { HospitalWithWait } from "@/lib/data/hospitals";

interface PostcodeResult {
  postcode: string;
  latitude: number;
  longitude: number;
}

export function SearchBar({
  hospitals,
}: {
  hospitals: HospitalWithWait[];
}) {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isPostcode = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i.test(query.trim());

  const normalize = (s: string) => s.toLowerCase().replace(/['']/g, "");
  const filtered = query.length >= 2 && !isPostcode
    ? hospitals
        .filter(
          (h) =>
            normalize(h.name).includes(normalize(query)) ||
            h.city?.toLowerCase().includes(query.toLowerCase()) ||
            h.postcode?.toLowerCase().replace(/\s/g, "").includes(query.toLowerCase().replace(/\s/g, ""))
        )
        .slice(0, 8)
    : [];

  async function handlePostcodeSearch() {
    if (!isPostcode) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.postcodes.io/postcodes/${encodeURIComponent(query.trim())}`
      );
      const data = await res.json();
      if (data.status === 200 && data.result) {
        const { latitude, longitude } = data.result as PostcodeResult;
        router.push(`/near-me?lat=${latitude}&lng=${longitude}&postcode=${encodeURIComponent(query.trim())}`);
      } else {
        alert("Postcode not found. Please check and try again.");
      }
    } catch {
      alert("Failed to look up postcode. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit() {
    if (isPostcode) {
      handlePostcodeSearch();
    } else if (filtered.length === 1) {
      router.push(`/hospitals/${filtered[0].slug}`);
      setShowResults(false);
    } else if (query.trim()) {
      router.push(`/hospitals?q=${encodeURIComponent(query.trim())}`);
      setShowResults(false);
    } else {
      router.push("/hospitals");
    }
  }

  function handleUseLocation() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        router.push(
          `/near-me?lat=${position.coords.latitude}&lng=${position.coords.longitude}`
        );
        setLoading(false);
      },
      () => {
        alert("Location access denied. Please enable location services or enter a postcode.");
        setLoading(false);
      }
    );
  }

  return (
    <div ref={wrapperRef} className="relative">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            placeholder="Search hospital name or postcode"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowResults(true);
            }}
            onFocus={() => setShowResults(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
            className="w-full rounded-xl border border-gray-300 bg-white pl-10 pr-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005EB8] focus:border-transparent shadow-sm"
          />
        </div>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="rounded-xl bg-[#005EB8] px-5 py-3 text-sm font-medium text-white hover:bg-[#004f99] transition-colors shadow-sm disabled:opacity-50"
        >
          {loading ? "..." : "Search"}
        </button>
      </div>

      <div className="mt-2 flex items-center gap-3">
        <button
          onClick={handleUseLocation}
          disabled={loading}
          className="inline-flex items-center gap-1.5 text-sm text-[#005EB8] hover:underline font-medium disabled:opacity-50"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          Use my location
        </button>
        <span className="text-xs text-gray-400">
          We use your location once. Nothing is stored.
        </span>
      </div>

      {/* Dropdown results */}
      {showResults && filtered.length > 0 && (
        <div className="absolute top-[52px] left-0 right-0 rounded-xl border border-gray-200 bg-white shadow-lg z-50 overflow-hidden max-h-[360px] overflow-y-auto">
          {filtered.map((h) => (
            <button
              key={h.id}
              onClick={() => {
                router.push(`/hospitals/${h.slug}`);
                setShowResults(false);
                setQuery("");
              }}
              className="w-full px-4 py-3 text-left hover:bg-blue-50 flex items-center justify-between border-b border-gray-50 last:border-0 transition-colors"
            >
              <div>
                <p className="text-sm font-medium text-gray-900">{h.name}</p>
                <p className="text-xs text-gray-500">
                  {h.city}
                  {h.region ? `, ${h.region}` : ""}
                </p>
              </div>
              {h.wait_minutes !== null && (
                <div className="flex items-center gap-1.5 ml-4">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      h.wait_minutes < 120
                        ? "bg-green-500"
                        : h.wait_minutes < 240
                          ? "bg-amber-500"
                          : "bg-red-500"
                    }`}
                  />
                  <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                    {h.wait_minutes} min
                  </span>
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      {showResults && isPostcode && (
        <div className="absolute top-[52px] left-0 right-0 rounded-xl border border-gray-200 bg-white shadow-lg z-50 p-4">
          <button
            onClick={handlePostcodeSearch}
            disabled={loading}
            className="w-full text-left text-sm text-[#005EB8] font-medium hover:underline"
          >
            {loading
              ? "Looking up postcode..."
              : `Find nearest A&E to ${query.trim().toUpperCase()}`}
          </button>
        </div>
      )}

      {showResults && query.length >= 2 && !isPostcode && filtered.length === 0 && (
        <div className="absolute top-[52px] left-0 right-0 rounded-xl border border-gray-200 bg-white shadow-lg z-50 p-4 text-sm text-gray-500">
          No hospitals found for &ldquo;{query}&rdquo;. Try a postcode instead.
        </div>
      )}
    </div>
  );
}
