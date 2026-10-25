/**
 * Generates src/lib/typical-waits.ts — a static per-hospital "typical wait"
 * fallback shown where no live feed exists. Sourced from official statistics:
 *   - Scotland: Public Health Scotland monthly A&E (opendata.nhs.scot CKAN API)
 *   - Wales:    StatsWales emergency-department 4-hour performance by hospital
 *   - England:  NHS England monthly A&E SitRep (via src/lib/nhs-england-stats)
 *
 * These are official averages, NOT live data — the UI labels them clearly as
 * "Typical wait" with the source and period. Re-run periodically:
 *   npx tsx scripts/generate-typical-waits.ts
 */
import fs from "fs";
import path from "path";
import Database from "better-sqlite3";
import { getTypicalWaitForTrust } from "../src/lib/nhs-england-stats";

// Typical wait derived from % seen within 4h, matching the England SitRep
// formula: within-4h patients average ~90 min, over-4h ~360 min.
function typicalFromPct(pctWithin4h: number): number {
  const p = Math.max(0, Math.min(1, pctWithin4h / 100));
  return Math.round(p * 90 + (1 - p) * 360);
}

interface Entry {
  typicalWaitMinutes: number;
  pctWithin4h: number;
  period: string;
  source: string;
}

async function ckan(resourceId: string, params: string) {
  const url = `https://www.opendata.nhs.scot/api/3/action/datastore_search?resource_id=${resourceId}&${params}`;
  const res = await fetch(url, { signal: AbortSignal.timeout(25_000) });
  const data = await res.json();
  if (!data.success) throw new Error("CKAN request failed");
  return data.result.records as Record<string, unknown>[];
}

// Scotland TreatmentLocation code -> our slug (Type 1 EDs; verified Aug 2026).
// Western General Edinburgh has no Type 1 ED, so no official figure exists.
const SCOTLAND_CODE_TO_SLUG: Record<string, string> = {
  H202H: "raigmore-hospital",
  A111H: "university-hospital-crosshouse",
  A210H: "university-hospital-ayr",
  B120H: "borders-general-hospital",
  Y146H: "dumfries-and-galloway-royal-infirmary",
  F704H: "victoria-hospital-kirkcaldy",
  N101H: "aberdeen-royal-infirmary",
  N411H: "dr-grays-hospital",
  C418H: "royal-alexandra-hospital-paisley",
  G107H: "glasgow-royal-infirmary",
  G405H: "queen-elizabeth-university-hospital-glasgow",
  L106H: "university-hospital-monklands",
  L302H: "hairmyres-hospital",
  L308H: "university-hospital-wishaw",
  S308H: "st-johns-hospital-livingston",
  S314H: "royal-infirmary-of-edinburgh",
  T101H: "ninewells-hospital",
  T202H: "perth-royal-infirmary",
};

function monthLabel(yyyymm: number): string {
  const y = Math.floor(yyyymm / 100);
  const m = yyyymm % 100;
  const names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${names[m - 1]} ${y}`;
}

async function fetchScotland(out: Record<string, Entry>) {
  // Latest month
  const maxRes = await fetch(
    "https://www.opendata.nhs.scot/api/3/action/datastore_search_sql?sql=" +
      encodeURIComponent('SELECT MAX("Month") m FROM "37ba17b1-c323-492c-87d5-e986aae9ab59"'),
    { signal: AbortSignal.timeout(25_000) }
  );
  const maxData = await maxRes.json();
  const month = Number(maxData.result.records[0].m);
  const recs = await ckan("37ba17b1-c323-492c-87d5-e986aae9ab59", `limit=400&q=${month}`);
  let n = 0;
  for (const r of recs) {
    if (Number(r.Month) !== month) continue;
    if (r.DepartmentType !== "Type 1" || r.AttendanceCategory !== "All") continue;
    const slug = SCOTLAND_CODE_TO_SLUG[r.TreatmentLocation as string];
    if (!slug) continue;
    const pct = Number(r.PercentageWithin4HoursAll);
    if (!isFinite(pct)) continue;
    out[slug] = {
      typicalWaitMinutes: typicalFromPct(pct),
      pctWithin4h: Math.round(pct * 10) / 10,
      period: monthLabel(month),
      source: "Public Health Scotland",
    };
    n++;
  }
  console.log(`  Scotland: ${n} hospitals (${monthLabel(month)})`);
}

const WALES_NAME_TO_SLUG: Record<string, string> = {
  "Ysbyty Glan Clwyd": "glan-clwyd-hospital",
  "Wrexham Maelor": "wrexham-maelor-hospital",
  Morriston: "morriston-hospital",
  "University Hospital of Wales": "university-hospital-of-wales",
  "Grange University": "the-grange-university-hospital",
  Glangwili: "glangwili-general-hospital",
  "Prince Charles": "prince-charles-hospital",
  "Ysbyty Gwynedd": "ysbyty-gwynedd",
};

async function fetchWales(out: Record<string, Entry>) {
  const url =
    "https://stats.gov.wales/en-GB/3ce1cc28-0625-4674-89d6-9cf3a56f2d9c/data/8mxesf761lyd?sort_by=Date%3Adesc&page_size=1000";
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
    signal: AbortSignal.timeout(25_000),
  });
  const html = await res.text();
  const rows = html.match(/<tr[^>]*>[\s\S]*?<\/tr>/g) || [];
  let n = 0;
  for (const row of rows) {
    const cells = (row.match(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/g) || [])
      .map((c) => c.replace(/<[^>]+>/g, "").trim())
      .filter(Boolean);
    const joined = cells.join(" | ");
    if (!joined.includes("4 hour target")) continue;
    for (const [name, slug] of Object.entries(WALES_NAME_TO_SLUG)) {
      if (out[slug]) continue;
      if (!joined.includes(name)) continue;
      const pct = parseFloat(cells[0]);
      const date = cells.find((c) => /^[A-Z][a-z]+ 20\d\d$/.test(c)) || "";
      if (!isFinite(pct)) continue;
      out[slug] = {
        typicalWaitMinutes: typicalFromPct(pct),
        pctWithin4h: Math.round(pct * 10) / 10,
        period: date,
        source: "StatsWales",
      };
      n++;
    }
  }
  console.log(`  Wales: ${n} hospitals`);
}

function fetchEngland(out: Record<string, Entry>, db: Database.Database) {
  const hospitals = db
    .prepare(
      "SELECT h.slug, t.name trust_name FROM hospitals h JOIN trusts t ON t.id = h.trust_id WHERE h.country = 'England'"
    )
    .all() as { slug: string; trust_name: string }[];
  let n = 0;
  for (const h of hospitals) {
    if (out[h.slug]) continue;
    const tw = getTypicalWaitForTrust(h.trust_name);
    if (!tw || !tw.avgWaitMinutes) continue;
    out[h.slug] = {
      typicalWaitMinutes: tw.avgWaitMinutes,
      pctWithin4h: tw.pctWithin4h,
      period: tw.period,
      source: "NHS England",
    };
    n++;
  }
  console.log(`  England: ${n} hospitals`);
}

async function main() {
  console.log("Generating typical-wait fallback data…");
  const out: Record<string, Entry> = {};
  const db = new Database(path.join(process.cwd(), "data", "aewaittime.db"), { readonly: true });

  // Scotland / Wales are fetched live; tolerate a source being down so the
  // others still generate.
  try {
    await fetchScotland(out);
  } catch (e) {
    console.error("  Scotland failed:", e instanceof Error ? e.message : e);
  }
  try {
    await fetchWales(out);
  } catch (e) {
    console.error("  Wales failed:", e instanceof Error ? e.message : e);
  }
  fetchEngland(out, db);
  db.close();

  const slugs = Object.keys(out).sort();
  const body = slugs
    .map(
      (s) =>
        `  ${JSON.stringify(s)}: ${JSON.stringify(out[s])},`
    )
    .join("\n");

  const file = `// AUTO-GENERATED by scripts/generate-typical-waits.ts — do not edit by hand.
// Official-statistics "typical wait" fallback, shown only where no live feed
// exists. These are averages derived from each nation's published A&E 4-hour
// performance, NOT live data — the UI labels them as such.

export interface TypicalWait {
  /** Estimated typical time in department, minutes */
  typicalWaitMinutes: number;
  /** % of patients seen within 4 hours in the published period */
  pctWithin4h: number;
  /** Human-readable source period, e.g. "August 2026" */
  period: string;
  /** Publishing body */
  source: string;
}

export const TYPICAL_WAITS: Record<string, TypicalWait> = {
${body}
};

export function getTypicalWait(slug: string): TypicalWait | null {
  return TYPICAL_WAITS[slug] ?? null;
}
`;

  const outPath = path.join(process.cwd(), "src", "lib", "typical-waits.ts");
  fs.writeFileSync(outPath, file);
  console.log(`Wrote ${slugs.length} hospitals to src/lib/typical-waits.ts`);
}

main();
