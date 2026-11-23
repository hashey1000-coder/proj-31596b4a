/**
 * Generates src/lib/hospital-descriptions.ts — an evergreen, factual AND
 * globally-unique description for every hospital without a curated about_text.
 *
 * UNIQUENESS GUARANTEE: every sentence embeds at least one page-unique token
 * (the hospital name, or the specific nearest department + its exact mileage),
 * the variant pools are large, and a final pass checks every sentence against a
 * global set — if any sentence has already been used on another page it rotates
 * to another variant, and as a last resort weaves the hospital name in, so no
 * sentence is ever repeated verbatim across the site. Output is deterministic
 * (same input → same output), so re-running doesn't churn the file.
 *
 * Nothing is invented: every sentence is built only from fields that exist in
 * the data (type, trust, city, region, opening hours, and nearest departments
 * computed from coordinates). No volatile numbers are baked in.
 *
 * Run: npx tsx scripts/generate-hospital-descriptions.ts
 */
import fs from "fs";
import path from "path";
import { getAllHospitalsWithWaits } from "../src/lib/data/hospitals";
import { haversineDistance } from "../src/lib/utils";

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const KM_TO_MILES = 0.621371;
function milesText(km: number): string {
  const mi = km * KM_TO_MILES;
  if (mi < 1) return "under a mile";
  if (mi < 10) return `about ${mi.toFixed(1)} miles`;
  return `about ${Math.round(mi)} miles`;
}

type Kind = "AE" | "UTC" | "MIU";
function kindOf(type: string): Kind {
  const t = (type || "").toUpperCase();
  if (t === "UTC") return "UTC";
  if (t === "MIU") return "MIU";
  return "AE";
}
function typeNoun(kind: Kind): string {
  return kind === "UTC"
    ? "urgent treatment centre"
    : kind === "MIU"
      ? "minor injuries unit"
      : "accident & emergency (A&E) department";
}
function art(kind: Kind): string {
  return kind === "MIU" ? "a" : "an";
}

interface Near {
  name: string;
  city: string | null;
  km: number;
}

function cleanHours(hours: string | null): string | null {
  if (!hours || !hours.trim()) return null;
  const h = hours
    .trim()
    .replace(/^open\s*:?\s*/i, "")
    .replace(/\.$/, "")
    .trim();
  return h || null;
}
function is24(h: string): boolean {
  return /24\s*(\/|hour|hr|h\b)/i.test(h) || /\b24\b/.test(h);
}

function main() {
  const hospitals = getAllHospitalsWithWaits();
  const withCoords = hospitals.filter((h) => h.lat != null && h.lng != null);

  function nearest(
    h: (typeof hospitals)[number],
    predicate: (o: (typeof hospitals)[number]) => boolean
  ): Near | null {
    let best: Near | null = null;
    for (const o of withCoords) {
      if (o.slug === h.slug || !predicate(o)) continue;
      const km = haversineDistance(h.lat!, h.lng!, o.lat!, o.lng!);
      if (!best || km < best.km) best = { name: o.name, city: o.city, km };
    }
    return best;
  }
  function countWithin(h: (typeof hospitals)[number], miles: number): number {
    if (h.lat == null || h.lng == null) return 0;
    const km = miles / KM_TO_MILES;
    return withCoords.filter(
      (o) =>
        o.slug !== h.slug &&
        haversineDistance(h.lat!, h.lng!, o.lat!, o.lng!) <= km
    ).length;
  }

  // Global pool of every sentence already placed on a page, to guarantee no
  // verbatim repeats anywhere on the site.
  const used = new Set<string>();

  /**
   * Choose the first variant (seeded order) whose text isn't already used.
   * Falls back to weaving the hospital name in if every variant is taken.
   */
  function uniqueSentence(
    frames: string[],
    slug: string,
    slot: string,
    name: string
  ): string {
    const start = hash(slug + "|" + slot) % frames.length;
    for (let i = 0; i < frames.length; i++) {
      const s = frames[(start + i) % frames.length];
      if (!used.has(s)) {
        used.add(s);
        return s;
      }
    }
    // Every variant already used elsewhere: disambiguate with the unique name.
    let base = frames[start];
    let cand = base.replace(/\.$/, ` (${name}).`);
    let n = 2;
    while (used.has(cand)) cand = base.replace(/\.$/, ` (${name}, ${n++}).`);
    used.add(cand);
    return cand;
  }

  const out: Record<string, string> = {};
  let generated = 0;

  // Deterministic order so the global dedup is stable across runs.
  const ordered = [...hospitals].sort((a, b) => a.slug.localeCompare(b.slug));

  for (const h of ordered) {
    if (h.about_text && h.about_text.trim().length > 0) continue;

    const kind = kindOf(h.type);
    const noun = typeNoun(h.type ? kind : "AE");
    const a = art(kind);
    const name = h.name;
    const city = h.city;
    const region = h.region;
    const trust = h.trust_name ?? null;
    const hours = cleanHours(h.opening_hours);

    const near = nearest(h, () => true);
    const nearAlt =
      kind === "AE"
        ? nearest(h, (o) => {
            const k = kindOf(o.type);
            return k === "UTC" || k === "MIU";
          })
        : nearest(h, (o) => kindOf(o.type) === "AE");
    const within15 = countWithin(h, 15);

    const sentences: string[] = [];

    // --- Slot 1: identity (unique via name) ---
    const whereIn = city ? `in ${city}` : region ? `in ${region}` : "in the UK";
    const openFrames = [
      `${name} is ${a} ${noun} ${whereIn}${trust ? `, run by ${trust}` : ""}.`,
      `${name}, ${whereIn}, is ${a} ${noun}${trust ? ` operated by ${trust}` : ""}.`,
      trust
        ? `Run by ${trust}, ${name} is ${a} ${noun} serving ${city || region || "the local area"}.`
        : `${name} is ${a} ${noun} serving ${city || region || "the local area"}.`,
      `Based ${whereIn}, ${name} is ${a} ${noun}${trust ? ` within ${trust}` : ""}.`,
      city
        ? `${name} is ${city}'s ${noun}${trust ? `, operated by ${trust}` : ""}.`
        : `${name} is ${a} ${noun}${trust ? `, operated by ${trust}` : ""}.`,
      `${name} provides ${noun} services ${whereIn}${trust ? `, as part of ${trust}` : ""}.`,
    ];
    sentences.push(uniqueSentence(openFrames, h.slug, "open", name));

    // --- Slot 2: what the department does (unique via name) ---
    const explainFrames =
      kind === "UTC"
        ? [
            `As an urgent treatment centre, ${name} handles urgent but non-life-threatening problems — sprains, suspected minor fractures, cuts needing stitches, infections and minor burns — often faster than a major A&E.`,
            `${name} is built for urgent, walk-in care rather than emergencies, so minor breaks, wounds and feverish illness can usually be seen here promptly.`,
            `For urgent issues that are not emergencies, ${name} is typically a quicker route to treatment than a hospital A&E.`,
            `${name} treats the kind of urgent problems that do not need a full emergency department, from minor injuries to minor infections.`,
          ]
        : kind === "MIU"
          ? [
              `As a minor injuries unit, ${name} treats everyday injuries such as cuts, sprains, minor burns, bites and suspected minor fractures, but is not set up for serious emergencies.`,
              `${name} deals with less serious problems — grazes, strains, small wounds and minor breaks — and is not an alternative to A&E for anything potentially life-threatening.`,
              `For minor injuries, ${name} offers walk-in care that helps take pressure off nearby emergency departments.`,
              `${name} is intended for everyday minor injuries rather than emergencies, which should go to a full A&E.`,
            ]
          : [
              `As a major emergency department, ${name} treats serious and life-threatening conditions — chest pain, stroke symptoms, severe bleeding and major injuries — with patients seen in order of clinical urgency.`,
              `${name}'s A&E is equipped for the most serious cases, from suspected heart attacks and strokes to major trauma, so how long any patient waits depends on how urgent their condition is.`,
              `Everyone arriving at ${name} is triaged on arrival and treated in order of clinical need, which is why a minor complaint can wait longer than the headline figure suggests.`,
              `A&E at ${name} is the place for potentially life-threatening problems; less serious issues are usually better suited to an urgent treatment centre or minor injuries unit.`,
            ];
    sentences.push(uniqueSentence(explainFrames, h.slug, "explain", name));

    // --- Slot 3: hours (unique via name), optional ---
    if (hours) {
      const hoursFrames = is24(hours)
        ? [
            `${name} is open around the clock, 24 hours a day, every day of the year.`,
            `The department at ${name} runs 24 hours a day, seven days a week, bank holidays included.`,
            `${name} never closes — care is available at any hour, day or night.`,
          ]
        : [
            `${name} is open ${hours}.`,
            `Opening hours at ${name} are ${hours}; outside these times, NHS 111 can point you to the nearest open service.`,
            `${name} operates ${hours}, so it is worth checking the times before travelling out of hours.`,
          ];
      sentences.push(uniqueSentence(hoursFrames, h.slug, "hours", name));
    }

    // --- Slot 4: nearest alternative (unique via nearest name + mileage) ---
    // Only recommend a minor-injury unit for "less serious cases" when it is
    // genuinely close; otherwise it's bad advice (don't send minor injuries 40
    // miles away). Fall back to a neutral "nearest department" mention.
    const nearAltClose =
      nearAlt && nearAlt.km * KM_TO_MILES <= 15 ? nearAlt : null;
    const neutralNear = (n: Near) => [
      `The closest other department is ${n.name}${n.city ? ` in ${n.city}` : ""}, ${milesText(n.km)} away.`,
      `${n.name}${n.city ? ` in ${n.city}` : ""} is the nearest alternative to ${name}, ${milesText(n.km)} away.`,
      `The nearest department to ${name} is ${n.name}${n.city ? ` in ${n.city}` : ""}, ${milesText(n.km)} away.`,
    ];
    if (kind === "AE") {
      if (nearAltClose) {
        const altIn = nearAltClose.city ? ` in ${nearAltClose.city}` : "";
        sentences.push(
          uniqueSentence(
            [
              `For less serious injuries, the nearest alternative is ${nearAltClose.name}${altIn}, ${milesText(nearAltClose.km)} away, which can often see minor cases sooner.`,
              `If your problem is minor, ${nearAltClose.name}${altIn} sits ${milesText(nearAltClose.km)} away and may treat it more quickly than the main A&E.`,
              `Minor injuries can sometimes be dealt with faster at ${nearAltClose.name}${altIn}, ${milesText(nearAltClose.km)} from ${name}.`,
            ],
            h.slug,
            "near",
            name
          )
        );
      } else if (near) {
        sentences.push(uniqueSentence(neutralNear(near), h.slug, "near", name));
      }
    } else {
      // UTC/MIU: point to the nearest full A&E for anything more serious.
      if (nearAlt) {
        const altIn = nearAlt.city ? ` in ${nearAlt.city}` : "";
        sentences.push(
          uniqueSentence(
            [
              `For anything more serious than this unit handles, the nearest full A&E is ${nearAlt.name}${altIn}, ${milesText(nearAlt.km)} away.`,
              `For emergencies beyond minor injuries, ${nearAlt.name}${altIn} is the closest A&E to ${name}, ${milesText(nearAlt.km)} away.`,
              `Anything potentially life-threatening should go to the nearest A&E — ${nearAlt.name}${altIn}, ${milesText(nearAlt.km)} from ${name}.`,
            ],
            h.slug,
            "near",
            name
          )
        );
      } else if (near) {
        sentences.push(uniqueSentence(neutralNear(near), h.slug, "near", name));
      }
    }

    // --- Slot 5: local density (unique via name + count) ---
    // Only when there's a genuine cluster nearby; otherwise the neutral nearest
    // sentence above already conveys how isolated the site is.
    if (within15 > 0) {
      const dens = [
        `There ${within15 === 1 ? "is" : "are"} ${within15} other A&E or urgent-care ${within15 === 1 ? "department" : "departments"} within roughly 15 miles of ${name}, so comparing queues before you travel can save time.`,
        `${name} has ${within15} other department${within15 === 1 ? "" : "s"} within about 15 miles, making it easy to weigh up the shortest wait nearby.`,
      ];
      sentences.push(uniqueSentence(dens, h.slug, "density", name));
    }

    // --- Slot 6: closing (unique via name) ---
    const closeFrames = [
      `Use the live figures above to check ${name}'s current queue against nearby departments before you set off.`,
      `The wait shown for ${name} updates through the day — treat it as a guide, since how long you personally wait depends on how urgent your condition is.`,
      `Check ${name}'s up-to-date wait at the top of this page, and compare it with the other departments listed nearby.`,
      `${name}'s live wait above refreshes regularly, so you can see how busy it is right now rather than relying on a typical day.`,
    ];
    sentences.push(uniqueSentence(closeFrames, h.slug, "close", name));

    // Two paragraphs: identity (+hours) / location + guidance.
    const splitAt = hours ? 3 : 2;
    const para1 = sentences.slice(0, splitAt).join(" ");
    const para2 = sentences.slice(splitAt).join(" ");
    out[h.slug] = [para1, para2].filter(Boolean).join("\n\n");
    generated++;
  }

  const header = `// AUTO-GENERATED by scripts/generate-hospital-descriptions.ts — do not edit by hand.
// Evergreen, fact-only, globally-unique descriptions for hospitals without a
// curated about_text. No sentence is repeated verbatim across the site.
// Re-run the script to regenerate. Paragraphs are separated by a blank line.
`;
  const body = `export const HOSPITAL_DESCRIPTIONS: Record<string, string> = ${JSON.stringify(
    out,
    null,
    2
  )};\n`;
  const outPath = path.join(process.cwd(), "src", "lib", "hospital-descriptions.ts");
  fs.writeFileSync(outPath, header + "\n" + body);
  console.log(`Wrote ${generated} descriptions to src/lib/hospital-descriptions.ts`);
}

main();
