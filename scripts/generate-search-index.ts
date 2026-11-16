/**
 * Writes public/search-index.json — a small, static index the SearchBar loads
 * on demand (name, city, region, postcode, slug, current wait). This keeps the
 * full hospital list OUT of every page's hydration payload: previously the
 * not-found boundary (bundled into every route) embedded all ~158 full hospital
 * records on every page, bloating each page by ~200KB. Fetching one shared
 * ~20KB file instead shrinks the whole build several-fold.
 *
 * Runs automatically before `next build` via the "prebuild" npm script, so the
 * waits in the index are as fresh as the build itself.
 */
import fs from "fs";
import path from "path";
import { getAllHospitalsWithWaits } from "../src/lib/data/hospitals";

interface SearchEntry {
  id: string;
  name: string;
  slug: string;
  city: string | null;
  region: string | null;
  postcode: string | null;
  wait_minutes: number | null;
}

function main() {
  const entries: SearchEntry[] = getAllHospitalsWithWaits().map((h) => ({
    id: h.id,
    name: h.name,
    slug: h.slug,
    city: h.city,
    region: h.region,
    postcode: h.postcode,
    wait_minutes: h.wait_minutes,
  }));

  const outPath = path.join(process.cwd(), "public", "search-index.json");
  fs.writeFileSync(outPath, JSON.stringify(entries));
  console.log(
    `Wrote ${entries.length} hospitals to public/search-index.json (${(
      fs.statSync(outPath).size / 1024
    ).toFixed(1)} KB)`
  );
}

main();
