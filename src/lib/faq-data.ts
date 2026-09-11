export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Where do you get A&E wait data from?",
    answer:
      "Every figure is pulled from the public dashboard that each NHS Trust maintains for its own patients, or from the official statistical publications released by NHS England, NHS Wales, NHS Scotland and HSC Northern Ireland. We never estimate or model a number ourselves. Each entry on the site is labelled with its source and a timestamp so you can judge freshness before you set off.",
  },
  {
    question: "When are A&E departments least crowded?",
    answer:
      "National attendance figures consistently show a dip between roughly 6 am and 9 am on every day of the week. Mid-afternoon on Tuesdays and Wednesdays is another relatively quiet window. The busiest spikes tend to hit on Monday mornings (GP surgeries reopen and people arrive with weekend problems), weekday evenings after 6 pm, and Friday and Saturday nights.",
  },
  {
    question: "How do I find the nearest A&E with the shortest wait?",
    answer:
      "Use the search bar at the top of this page — type a postcode or tap the location button. The results list every department within range, sorted by distance, with the current queue length alongside each one so you can weigh travel time against wait time.",
  },
  {
    question: "What is the difference between A&E and an Urgent Treatment Centre?",
    answer:
      "A&E handles life-threatening and serious conditions: chest pain, major trauma, suspected stroke, severe bleeding or difficulty breathing. An Urgent Treatment Centre (UTC) — sometimes still called a Minor Injuries Unit — deals with less serious problems such as sprains, small fractures, cuts that may need stitching, bites and minor burns. UTCs usually have much shorter queues. If you are unsure which service you need, ring NHS 111.",
  },
  {
    question: "Can I do anything to be seen faster?",
    answer:
      "A&E operates on clinical triage, not first-come-first-served, so the most critically ill patients are always prioritised. What you can control: visit during a quieter window if your condition allows, check this site first to pick the department with the shortest queue at a similar distance, bring a list of any medications you take, and call NHS 111 before travelling — they can sometimes book you a timed slot at a UTC and bypass the A&E queue entirely.",
  },
  {
    question: "How reliable are the wait-time figures on this site?",
    answer:
      "It depends on the underlying source. Trusts that run a live dashboard (refreshing every 10–15 minutes) produce figures that are usually accurate within a quarter of an hour. Where only a monthly statistical release is available, the number shown is the latest published average — useful for comparison but not a guarantee of today's wait. The label beside each figure tells you which category it falls into.",
  },
];
