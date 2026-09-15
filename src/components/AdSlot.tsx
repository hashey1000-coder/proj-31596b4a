"use client";

import { useEffect, useRef } from "react";
import { ADSENSE_CLIENT, ADSENSE_SLOT_IN_CONTENT, adsEnabled } from "@/lib/ads";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * A single in-content AdSense unit. Rendered repeatedly through long content
 * (hospital table, guides, result lists). Renders nothing at all while ads
 * are disabled in src/lib/ads.ts.
 */
export function AdSlot({ className = "" }: { className?: string }) {
  const pushed = useRef(false);

  useEffect(() => {
    if (!adsEnabled || pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // adsbygoogle not loaded (blocked or offline) — fail silently
    }
  }, []);

  if (!adsEnabled) return null;

  return (
    <div className={`my-6 ${className}`}>
      <p className="text-[10px] uppercase tracking-wider text-gray-300 text-center mb-1">
        Advertisement
      </p>
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={ADSENSE_SLOT_IN_CONTENT}
        data-ad-layout="in-article"
        data-ad-format="fluid"
      />
    </div>
  );
}
