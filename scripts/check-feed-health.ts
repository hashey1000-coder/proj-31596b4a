/**
 * Flags NHS feeds that have gone stale — a hospital with a configured live
 * source whose most recent reading is more than STALE_HOURS old. This catches
 * upstream outages (e.g. a trust dashboard freezing for days) that otherwise
 * silently show as "unavailable".
 *
 * A reading is stored on every run while a feed is alive, even when the unit
 * is merely closed (we store the closed state), so recency tracks the FEED's
 * health, not whether the department happens to be open right now.
 *
 * Prints a human-readable report. Exits 0 always (monitoring must never break
 * the deploy). With --json it prints a machine-readable summary on the last
 * line for the alert workflow to consume.
 */
import path from "path";
import Database from "better-sqlite3";
import { SOURCES } from "../src/lib/scrapers/sources";

const STALE_HOURS = 48;

interface Stale {
  slug: string;
  name: string;
  type: string;
  hoursStale: number | null; // null = never seen
}

function main() {
  const db = new Database(path.join(process.cwd(), "data", "aewaittime.db"), {
    readonly: true,
  });

  // Hospitals we expect a live feed for: everything mapped in sources.ts, plus
  // the Northern Ireland 24/7 EDs (discovered dynamically by their scraper).
  const expected = new Map<string, { name: string; type: string }>();
  for (const s of SOURCES) {
    for (const h of s.hospitals) expected.set(h.slug, { name: h.name, type: h.type ?? "AE" });
  }
  const niEds = db
    .prepare(
      `SELECT h.slug, h.name, h.type FROM hospitals h
       JOIN trusts t ON t.id = h.trust_id
       WHERE t.name LIKE '%Northern Ireland%' AND h.type = 'AE'`
    )
    .all() as { slug: string; name: string; type: string }[];
  for (const h of niEds) expected.set(h.slug, { name: h.name, type: h.type });

  const latest = db.prepare(
    `SELECT MAX(wr.scraped_at) AS t
     FROM wait_readings wr JOIN hospitals h ON h.id = wr.hospital_id
     WHERE h.slug = ?`
  );

  const stale: Stale[] = [];
  for (const [slug, info] of expected) {
    const row = latest.get(slug) as { t: string | null } | undefined;
    if (!row || !row.t) {
      stale.push({ slug, name: info.name, type: info.type, hoursStale: null });
      continue;
    }
    const hours = (Date.now() - new Date(row.t + "Z").getTime()) / 3_600_000;
    if (hours > STALE_HOURS) {
      stale.push({ slug, name: info.name, type: info.type, hoursStale: Math.round(hours) });
    }
  }
  db.close();

  stale.sort((a, b) => (b.hoursStale ?? 1e9) - (a.hoursStale ?? 1e9));

  console.log(`Feed health: ${expected.size} expected-live hospitals, ${stale.length} stale (> ${STALE_HOURS}h).`);
  for (const s of stale) {
    const age = s.hoursStale === null ? "no readings in the retention window" : `${s.hoursStale}h since last reading`;
    console.log(`  - ${s.name} (${s.type}) — ${age}`);
  }

  if (process.argv.includes("--json")) {
    console.log(
      "FEED_HEALTH_JSON=" +
        JSON.stringify({
          staleCount: stale.length,
          expected: expected.size,
          staleHours: STALE_HOURS,
          stale: stale.map((s) => ({
            name: s.name,
            type: s.type,
            slug: s.slug,
            hoursStale: s.hoursStale,
          })),
        })
    );
  }
}

main();
