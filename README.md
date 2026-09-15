# A&E Tracker UK

**Live site: [aewaittimes.uk](https://aewaittimes.uk)**

Compare NHS A&E waiting times in real time across England, Scotland, Wales and Northern Ireland. The site tracks 158 emergency departments, urgent treatment centres and minor injury units, pulling live queue data directly from the public dashboards each NHS trust maintains.

## What it does

- **[Live wait times](https://aewaittimes.uk/hospitals/)** for every tracked NHS hospital, sorted by shortest queue
- **[Find your nearest A&E](https://aewaittimes.uk/near-me/)** by postcode or location, ranked by distance
- **[Regional breakdowns](https://aewaittimes.uk/regions/)** and a **[national statistics dashboard](https://aewaittimes.uk/statistics/)**
- **[Patient guides](https://aewaittimes.uk/guides/)** — A&E vs UTC, quietest hours, what happens inside a department
- 24-hour wait history per hospital, refreshed every 30 minutes

## How it works

A scheduled workflow scrapes each NHS trust's public wait-time feed every 30 minutes, stores readings in SQLite, and rebuilds the site as a fully static Next.js export — every page is plain crawlable HTML with no server required.

Data sources include NHS trust live dashboards (JSON APIs, HTML feeds) and official statistical publications from NHS England and HSC Northern Ireland. Every figure on the site links back to its original source.

## Disclaimer

A&E Tracker UK is an independent project and is not operated, endorsed or affiliated with the National Health Service. Nothing on the site is medical advice. In a life-threatening emergency, dial 999.
