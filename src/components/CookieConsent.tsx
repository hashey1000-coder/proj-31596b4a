"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Cookie consent banner implementing Google Consent Mode v2.
 *
 * Consent defaults to DENIED in the root layout before Google Analytics runs,
 * so no non-essential cookies are set until the visitor chooses here. Accepting
 * updates all four consent signals to "granted"; declining leaves them denied
 * (GA then sends only cookieless, privacy-preserving pings). The choice is
 * remembered in localStorage under "aewt_consent" and restored before the first
 * analytics hit on return visits (see layout.tsx). This satisfies UK GDPR/PECR
 * and the consent signalling AdSense requires for EEA/UK traffic.
 */
const STORAGE_KEY = "aewt_consent";

type Consent = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

function applyConsent(value: Consent) {
  try {
    window.dataLayer = window.dataLayer || [];
    // Push an arguments object, exactly as gtag() would, so GA interprets it.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function gtag(..._args: unknown[]) {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    }
    gtag("consent", "update", {
      ad_storage: value,
      analytics_storage: value,
      ad_user_data: value,
      ad_personalization: value,
    });
  } catch {
    /* no-op: analytics simply stays off */
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // One-shot sync after mount: localStorage is client-only, so the banner's
    // visibility can only be decided here, not during SSR.
    /* eslint-disable react-hooks/set-state-in-effect */
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored !== "granted" && stored !== "denied") {
        setVisible(true);
      }
    } catch {
      // If storage is unavailable, show the banner so a choice can still be made.
      setVisible(true);
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  function choose(value: Consent) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    applyConsent(value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-4"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white shadow-lg p-4 sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600 leading-relaxed">
            We use cookies to measure how the site is used and, where enabled, to
            support advertising. You can accept or decline non-essential cookies.
            See our{" "}
            <Link href="/cookie-policy" className="text-[#005EB8] hover:underline font-medium">
              cookie policy
            </Link>
            .
          </p>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => choose("denied")}
              className="rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={() => choose("granted")}
              className="rounded-xl bg-[#005EB8] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#004f99] transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
