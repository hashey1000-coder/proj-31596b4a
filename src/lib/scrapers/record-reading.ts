import { getDb } from "../db";
import { generateId } from "../utils";

// Absolute plausibility ceiling for a "longest wait to be seen", in minutes.
// This matches the long-standing guard in the generic scraper: no real figure
// exceeds ~15h — values above that are trust-dashboard glitches (observed:
// Derriford 1422 min, Leighton 936 min). Deliberately an ABSOLUTE ceiling, not
// a relative "sudden jump" guard: a relative guard was tried and removed
// because it also rejected legitimate crisis-level steps (Midland Met's real
// 10h16m after a 2h36m reading), freezing a hospital at a stale value.
export const PLAUSIBLE_MAX_MINUTES = 15 * 60;
const MAX_PLAUSIBLE_PATIENTS = 2000;

export interface ReadingInput {
  hospitalId: string;
  waitMinutes: number | null;
  patientsWaiting?: number | null;
  totalPatients?: number | null;
}

export interface ReadingResult {
  inserted: boolean;
  /** Set when the reading was rejected as implausible. */
  reason?: string;
}

// Drop negative or absurd patient counts to null rather than storing nonsense.
function sanitizeCount(
  v: number | null | undefined,
  max: number
): number | null {
  if (v === null || v === undefined || !Number.isFinite(v)) return null;
  if (v < 0 || v > max) return null;
  return Math.round(v);
}

/**
 * Validate and record one wait reading. A clearly-impossible wait (negative, or
 * above the plausibility ceiling) is rejected and returned with a reason so the
 * scraper can log it; everything else is stored, with patient counts sanitized.
 * Centralising this keeps every scraper (generic, Wales, Northern Ireland) on
 * the same guard instead of each re-implementing (or missing) it.
 */
export function recordReading(input: ReadingInput): ReadingResult {
  const wait = input.waitMinutes;

  if (wait !== null) {
    if (!Number.isFinite(wait) || wait < 0) {
      return { inserted: false, reason: `invalid wait: ${wait}` };
    }
    if (wait > PLAUSIBLE_MAX_MINUTES) {
      return {
        inserted: false,
        reason: `implausible wait ${Math.round(wait)} min (> ${PLAUSIBLE_MAX_MINUTES})`,
      };
    }
  }

  const db = getDb();
  db.prepare(
    `INSERT INTO wait_readings (id, hospital_id, wait_minutes, patients_waiting, total_patients, source_timestamp, freshness)
     VALUES (?, ?, ?, ?, ?, datetime('now'), 'live')`
  ).run(
    generateId(),
    input.hospitalId,
    wait === null ? null : Math.round(wait),
    sanitizeCount(input.patientsWaiting, MAX_PLAUSIBLE_PATIENTS),
    sanitizeCount(input.totalPatients, MAX_PLAUSIBLE_PATIENTS)
  );

  return { inserted: true };
}
