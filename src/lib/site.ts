/**
 * Central, single-source-of-truth site identity and trust metadata.
 *
 * Keep E-E-A-T claims honest: A&E Tracker UK is an independent, automated
 * aggregator run as a solo project — NOT a multi-person medical editorial
 * board. The wording here deliberately avoids implying named clinical
 * reviewers we don't have. Update LAST_REVIEWED when the editorial content and
 * policy pages are genuinely reviewed.
 */
export const SITE_NAME = "A&E Tracker UK";
export const SITE_URL = "https://aewaittimes.uk";

/**
 * Published contact address. This must be a mailbox that actually exists —
 * create it in cPanel (or forward it) so mail is received. Change it in this
 * one place to update every page.
 */
export const CONTACT_EMAIL = "contact@aewaittimes.uk";

/** ISO date the editorial/policy content was last genuinely reviewed. */
export const LAST_REVIEWED_ISO = "2026-11-22";
/** Human-readable form of LAST_REVIEWED_ISO. */
export const LAST_REVIEWED_DISPLAY = "22 November 2026";
