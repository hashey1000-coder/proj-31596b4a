/**
 * Regenerates src/lib/nhs-england-stats.ts from the NHS England Monthly A&E
 * SitRep provider CSV (Type 1 / major A&E). The CSV is published monthly at a
 * URL whose filename changes each month, so pass the current one:
 *
 *   npx tsx scripts/refresh-england-stats.ts "<csv-url>"
 *
 * Find the latest at:
 *   https://www.england.nhs.uk/statistics/statistical-work-areas/ae-waiting-times-and-activity/
 * (the "Monthly A&E … CSV" provider-level file). NHS England's edge blocks
 * non-browser User-Agents, so a desktop UA is sent below.
 */
import fs from "fs";
import path from "path";
import Database from "better-sqlite3";

const DEFAULT_URL =
  "https://www.england.nhs.uk/statistics/wp-content/uploads/sites/2/2026/11/October-2026-CSV-WD35qg.csv";
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

// Minimal quote-aware CSV line splitter (org names contain commas).
function splitCsvLine(line: string): string[] {
  const out: string[] = [];
  let cur = "";
  let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      if (inQ && line[i + 1] === '"') { cur += '"'; i++; }
      else inQ = !inQ;
    } else if (c === "," && !inQ) { out.push(cur); cur = ""; }
    else cur += c;
  }
  out.push(cur);
  return out;
}

const norm = (s: string) => s.toUpperCase().replace(/\s+/g, " ").trim();

async function main() {
  const url = process.argv[2] || DEFAULT_URL;
  const periodMatch = url.match(/([A-Za-z]+)-(20\d\d)-CSV/);
  const period = periodMatch ? `${periodMatch[1]} ${periodMatch[2]}` : "latest NHS England SitRep";

  const res = await fetch(url, { headers: { "User-Agent": UA }, signal: AbortSignal.timeout(30_000) });
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${url}`);
  const text = await res.text();
  const lines = text.split(/\r?\n/).filter(Boolean);
  const header = splitCsvLine(lines[0]);
  const iName = header.indexOf("Org name");
  const iAtt = header.indexOf("A&E attendances Type 1");
  const iOver = header.indexOf("Attendances over 4hrs Type 1");
  if (iName < 0 || iAtt < 0 || iOver < 0) throw new Error("Unexpected CSV columns");

  const csvMap = new Map<string, { avgWaitMinutes: number; pctWithin4h: number }>();
  for (const line of lines.slice(1)) {
    const cells = splitCsvLine(line);
    const att = parseInt(cells[iAtt]) || 0;
    const over = parseInt(cells[iOver]) || 0;
    if (att <= 0) continue;
    const pct = Math.round(((att - over) / att) * 1000) / 10;
    const avg = Math.round(((att - over) * 90 + over * 360) / att);
    csvMap.set(norm(cells[iName]), { avgWaitMinutes: avg, pctWithin4h: pct });
  }

  // Match against our DB's England trust names (exact, with a leading-"The" tolerance).
  const db = new Database(path.join(process.cwd(), "data", "aewaittime.db"), { readonly: true });
  const trusts = db
    .prepare("SELECT DISTINCT t.name AS name FROM trusts t JOIN hospitals h ON h.trust_id = t.id WHERE h.country = 'England'")
    .all() as { name: string }[];
  db.close();

  const out: Record<string, { avgWaitMinutes: number; pctWithin4h: number; period: string }> = {};
  for (const { name } of trusts) {
    const alt = name.startsWith("The ") ? name.slice(4) : "The " + name;
    const hit = csvMap.get(norm(name)) || csvMap.get(norm(alt));
    if (hit) out[name] = { ...hit, period };
  }

  const entries = Object.keys(out)
    .sort()
    .map((k) => `  ${JSON.stringify(k)}: { avgWaitMinutes: ${out[k].avgWaitMinutes}, pctWithin4h: ${out[k].pctWithin4h}, period: ${JSON.stringify(period)} },`)
    .join("\n");

  const file = `// AUTO-GENERATED from the NHS England Monthly A&E SitRep provider CSV.
// Source: ${url}
// Period: ${period}. Type 1 (major A&E) only. Regenerate with
// scripts/refresh-england-stats.ts. Estimated avg wait uses the SitRep-style
// blend: within-4h patients ~90 min, over-4h ~360 min.

export const NHS_ENGLAND_TYPICAL_WAITS: Record<string, { avgWaitMinutes: number; pctWithin4h: number; period: string }> = {
${entries}
};

export function getTypicalWaitForTrust(trustName: string): { avgWaitMinutes: number; pctWithin4h: number; period: string } | null {
  if (NHS_ENGLAND_TYPICAL_WAITS[trustName]) return NHS_ENGLAND_TYPICAL_WAITS[trustName];
  // Tolerate a leading "The " difference between our names and the SitRep's.
  const alt = trustName.startsWith("The ") ? trustName.slice(4) : "The " + trustName;
  return NHS_ENGLAND_TYPICAL_WAITS[alt] ?? null;
}
`;
  fs.writeFileSync(path.join(process.cwd(), "src", "lib", "nhs-england-stats.ts"), file);
  console.log(`Wrote ${Object.keys(out).length} England trusts (${period}) from ${url}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
