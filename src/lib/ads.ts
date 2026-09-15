// ─── Site-wide advertising config ────────────────────────────────────────────
//
// To turn ads on:
//   1. Paste your Google AdSense publisher ID below (looks like
//      "ca-pub-1234567890123456" — found in AdSense → Account → Settings).
//   2. In AdSense, create ONE ad unit of type "In-article" and paste its
//      slot ID (a number like "1234567890") below. Every in-content slot on
//      the site reuses this one unit.
//
// Leave either value empty and ALL ad code is disabled site-wide — no
// scripts load and no placeholders render.

export const ADSENSE_CLIENT: string = "";
export const ADSENSE_SLOT_IN_CONTENT: string = "";

export const adsEnabled =
  ADSENSE_CLIENT.length > 0 && ADSENSE_SLOT_IN_CONTENT.length > 0;
