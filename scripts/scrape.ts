import { runAllScrapers } from "../src/lib/scrapers";
import { getDb } from "../src/lib/db";

async function main() {
  console.log(`[${new Date().toISOString()}] Starting scrape…`);

  const results = await runAllScrapers();

  let totalUpdated = 0;
  let totalErrors = 0;

  for (const r of results) {
    const status = r.success ? "✓" : "✗";
    console.log(`  ${status} ${r.source}: ${r.hospitalsUpdated} updated`);
    if (r.errors.length > 0) {
      for (const e of r.errors) console.error(`    Error: ${e}`);
    }
    totalUpdated += r.hospitalsUpdated;
    totalErrors += r.errors.length;
  }

  // Prune readings older than 7 days to keep DB size manageable
  const db = getDb();
  const pruned = db
    .prepare("DELETE FROM wait_readings WHERE scraped_at < datetime('now', '-7 days')")
    .run();
  console.log(`  Pruned ${pruned.changes} old readings`);

  console.log(
    `[${new Date().toISOString()}] Done — ${totalUpdated} hospitals updated, ${totalErrors} errors`
  );

  process.exit(totalErrors > 0 ? 1 : 0);
}

main();
