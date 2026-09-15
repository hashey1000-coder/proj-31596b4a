import { ADSENSE_CLIENT } from "@/lib/ads";

export const dynamic = "force-static";

// AdSense requires an ads.txt at the domain root listing authorised sellers.
// Generated from the single config in src/lib/ads.ts — the ads.txt entry uses
// the "pub-…" form of the publisher ID (without the "ca-" prefix).
export function GET() {
  const body = ADSENSE_CLIENT
    ? `google.com, ${ADSENSE_CLIENT.replace(/^ca-/, "")}, DIRECT, f08c47fec0942fa0\n`
    : "# No advertising partners configured\n";
  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
}
