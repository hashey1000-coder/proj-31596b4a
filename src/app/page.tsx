import Link from "next/link";
import type { Metadata } from "next";
import {
  getAllHospitalsWithWaits,
  getLongestWaits,
  getShortestWaits,
  getRegions,
} from "@/lib/data/hospitals";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};
import { HospitalCard, HospitalCardLarge } from "@/components/HospitalCard";
import { SearchBar } from "@/components/SearchBar";
import { DemandHeatmap } from "@/components/DemandHeatmap";
import { FAQ } from "@/components/FAQ";
import { FAQ_ITEMS } from "@/lib/faq-data";



function relativeTime(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins} min ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

export default function HomePage() {
  const allHospitals = getAllHospitalsWithWaits();
  const longestWaits = getLongestWaits(3);
  const shortestWaits = getShortestWaits(3);
  const regions = getRegions();

  const hospitalsWithData = allHospitals.filter((h) => h.wait_minutes !== null);
  const totalTracked = allHospitals.length;
  const latestTimestamp = hospitalsWithData[0]?.source_timestamp;

  return (
    <div className="space-y-16 pb-16">
      {/* Hero */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                Compare A&E Waits{" "}
                <span className="text-[#005EB8]">Before You Travel</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl leading-relaxed">
                See which NHS emergency departments have the shortest queues
                right now.{" "}
                <strong className="text-gray-900">
                  {totalTracked} hospitals tracked
                </strong>{" "}
                across England, Scotland, Wales and Northern Ireland — with data
                pulled directly from each trust&apos;s own public dashboard.
              </p>

              {/* Social proof */}
              <div className="mt-5 flex items-center gap-3">
                <div className="flex -space-x-1">
                  {["bg-blue-400", "bg-green-400", "bg-purple-400", "bg-amber-400"].map((c, i) => (
                    <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-white flex items-center justify-center text-white text-[10px] font-bold`}>
                      {String.fromCharCode(65 + i * 5)}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((s) => (
                      <svg key={s} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-xs text-gray-500 ml-1">Used by thousands of patients every week</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 max-w-xl">
                <SearchBar hospitals={allHospitals} />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
                <span>
                  <strong className="text-gray-700">Data from:</strong> NHS Trust
                  dashboards
                </span>
                <span>
                  <strong className="text-gray-700">Refreshed:</strong>{" "}
                  {latestTimestamp ? relativeTime(latestTimestamp) : "—"}
                </span>
                <Link
                  href="#methodology"
                  className="text-[#005EB8] hover:underline"
                >
                  Our approach
                </Link>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="hidden md:block flex-shrink-0 w-72 lg:w-80">
              <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                <rect x="80" y="80" width="160" height="140" rx="8" fill="#E8F0FE" stroke="#005EB8" strokeWidth="2" />
                <rect x="130" y="40" width="60" height="180" rx="4" fill="#F0F5FF" stroke="#005EB8" strokeWidth="2" />
                <rect x="148" y="55" width="24" height="8" rx="2" fill="#005EB8" />
                <rect x="156" y="47" width="8" height="24" rx="2" fill="#005EB8" />
                <rect x="100" y="105" width="20" height="25" rx="3" fill="#BDD5F5" stroke="#005EB8" strokeWidth="1" />
                <rect x="140" y="105" width="20" height="25" rx="3" fill="#BDD5F5" stroke="#005EB8" strokeWidth="1" />
                <rect x="200" y="105" width="20" height="25" rx="3" fill="#BDD5F5" stroke="#005EB8" strokeWidth="1" />
                <rect x="100" y="145" width="20" height="25" rx="3" fill="#BDD5F5" stroke="#005EB8" strokeWidth="1" />
                <rect x="200" y="145" width="20" height="25" rx="3" fill="#BDD5F5" stroke="#005EB8" strokeWidth="1" />
                <rect x="145" y="180" width="30" height="40" rx="4" fill="#005EB8" />
                <circle cx="170" cy="200" r="2" fill="#FFF" />
                <rect x="40" y="220" width="240" height="6" rx="3" fill="#005EB8" opacity="0.15" />
                <rect x="20" y="100" width="44" height="54" rx="8" fill="#FFF" stroke="#005EB8" strokeWidth="1.5" />
                <circle cx="42" cy="120" r="10" stroke="#005EB8" strokeWidth="1.5" fill="none" />
                <line x1="42" y1="120" x2="42" y2="113" stroke="#005EB8" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="42" y1="120" x2="47" y2="120" stroke="#005EB8" strokeWidth="1.5" strokeLinecap="round" />
                <text x="42" y="146" textAnchor="middle" fill="#005EB8" fontSize="8" fontWeight="bold">WAIT</text>
                <path d="M256 130 L266 130 L270 115 L276 145 L282 125 L286 130 L300 130" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <circle cx="270" cy="168" r="5" fill="#22C55E" />
                <circle cx="270" cy="183" r="5" fill="#F59E0B" />
                <circle cx="270" cy="198" r="5" fill="#EF4444" />
                <rect x="280" y="164" width="28" height="8" rx="2" fill="#E5E7EB" />
                <rect x="280" y="179" width="22" height="8" rx="2" fill="#E5E7EB" />
                <rect x="280" y="194" width="16" height="8" rx="2" fill="#E5E7EB" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-xs font-bold text-[#005EB8] uppercase tracking-widest mb-1">
            How it works
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Locate the Shortest Queue Near You
          </h2>
          <p className="mt-1 text-gray-600">
            Three quick steps to compare A&E departments by distance and current wait.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              ),
              title: "Share your postcode or location",
              desc: "Enter a postcode or let us detect your position once — we never store location data.",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M3 6h18M3 12h12M3 18h18" />
                </svg>
              ),
              title: "Compare hospitals side by side",
              desc: "Nearby departments appear ranked by distance, each showing their current queue length.",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Choose with confidence",
              desc: "Tap into any hospital page for address, phone number, opening hours and 24-hour trend data.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl border border-gray-200 p-6 text-center"
            >
              <span className="absolute -top-3 left-6 bg-[#005EB8] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                {i + 1}
              </span>
              <div className="flex justify-center mb-3 text-[#005EB8]">
                {step.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            href="/near-me"
            className="inline-flex items-center gap-2 rounded-xl bg-[#005EB8] px-6 py-3 text-sm font-medium text-white hover:bg-[#004f99] transition-colors shadow-sm"
          >
            Search by my location
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Popular Hospitals */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs font-bold text-[#005EB8] uppercase tracking-widest mb-1">
              Popular hospitals
            </p>
            <h2 className="text-2xl font-bold text-gray-900">
              Most-Viewed A&E Departments
            </h2>
            <p className="mt-1 text-gray-600 max-w-2xl">
              The hospitals people check most often on this site. Tap any card
              for detailed wait data, opening hours and recent trends.
            </p>
          </div>
          <Link
            href="/hospitals"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[#005EB8] hover:underline whitespace-nowrap"
          >
            See all hospitals &rarr;
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-1 px-1 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-5">
          {hospitalsWithData.slice(0, 5).map((hospital, i) => (
            <div
              key={hospital.id}
              className="snap-start shrink-0 w-[85%] sm:w-[68%] md:w-auto"
            >
              <HospitalCard hospital={hospital} rank={i + 1} />
            </div>
          ))}
        </div>
      </section>

      {/* Longest Queues */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">
              Longest queues
            </p>
            <h2 className="text-2xl font-bold text-gray-900">
              Where Waits Are Highest Right Now
            </h2>
            <p className="mt-1 text-gray-600">
              The three NHS departments currently reporting the longest
              wait before being seen.
            </p>
          </div>
          <Link
            href="/hospitals?sort=wait-desc"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[#005EB8] hover:underline whitespace-nowrap"
          >
            Full leaderboard &rarr;
          </Link>
        </div>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 -mx-1 px-1 md:grid md:grid-cols-3 md:overflow-visible">
          {longestWaits.map((hospital) => (
            <div
              key={hospital.id}
              className="snap-start shrink-0 w-[85%] sm:w-[68%] md:w-auto"
            >
              <HospitalCardLarge hospital={hospital} />
            </div>
          ))}
        </div>
      </section>

      {/* Fastest Departments */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-1">
              Fastest departments
            </p>
            <h2 className="text-2xl font-bold text-gray-900">
              Where Waits Are Lowest Right Now
            </h2>
            <p className="mt-1 text-gray-600">
              The three NHS departments currently clearing patients
              the quickest.
            </p>
          </div>
          <Link
            href="/hospitals?sort=wait-asc"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[#005EB8] hover:underline whitespace-nowrap"
          >
            Full leaderboard &rarr;
          </Link>
        </div>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 -mx-1 px-1 md:grid md:grid-cols-3 md:overflow-visible">
          {shortestWaits.map((hospital) => (
            <div
              key={hospital.id}
              className="snap-start shrink-0 w-[85%] sm:w-[68%] md:w-auto"
            >
              <HospitalCardLarge hospital={hospital} />
            </div>
          ))}
        </div>
      </section>

      {/* Explore by Area */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-xs font-bold text-[#005EB8] uppercase tracking-widest mb-1">
            Explore by area
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            A&E Waits by Region
          </h2>
          <p className="mt-1 text-gray-600">
            Drill into any region to see every hospital and its current queue.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {regions.map((r) => {
            const regionMeta: Record<string, { icon: string; color: string }> = {
              "London": { icon: "\u{1F3D9}️", color: "bg-blue-50" },
              "Birmingham & Solihull": { icon: "\u{1F3ED}", color: "bg-purple-50" },
              "Kent": { icon: "\u{1F33F}", color: "bg-green-50" },
              "Wales": { icon: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}", color: "bg-red-50" },
              "Scotland": { icon: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}", color: "bg-blue-50" },
              "Northern Ireland": { icon: "☘️", color: "bg-emerald-50" },
              "South West": { icon: "⚓", color: "bg-cyan-50" },
              "North West": { icon: "\u{1F3D4}️", color: "bg-slate-50" },
              "Midlands": { icon: "\u{1F3DB}️", color: "bg-amber-50" },
              "Yorkshire": { icon: "\u{1F33E}", color: "bg-lime-50" },
              "North East": { icon: "\u{1F309}", color: "bg-violet-50" },
            };
            const meta = regionMeta[r.region] || { icon: "\u{1F4CD}", color: "bg-gray-50" };
            return (
              <Link
                key={r.region}
                href={`/regions/${encodeURIComponent(r.region.toLowerCase().replace(/\s+&\s+/g, "-and-").replace(/\s+/g, "-"))}`}
                className={`group rounded-xl border border-gray-200 ${meta.color} p-5 hover:shadow-md hover:-translate-y-0.5 transition-all`}
              >
                <span className="text-2xl mb-2 block">{meta.icon}</span>
                <h3 className="font-semibold text-gray-900 group-hover:text-[#005EB8] transition-colors">
                  {r.region}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {r.count} {r.count === 1 ? "department" : "departments"}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Demand Heatmap */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
          <div className="mb-6">
            <p className="text-xs font-bold text-[#005EB8] uppercase tracking-widest mb-1">
              Timing matters
            </p>
            <h2 className="text-2xl font-bold text-gray-900">
              Pick the Right Hour to Go
            </h2>
            <p className="mt-1 text-gray-600 max-w-2xl">
              National attendance data shows clear daily rhythms. Early
              mornings (before 8 am) are consistently the emptiest window,
              while Monday mornings and weekend evenings see peak demand.
            </p>
          </div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Typical weekly demand pattern
          </h3>
          <p className="text-xs text-gray-400 mb-4">
            (based on national attendance averages)
          </p>
          <DemandHeatmap />
          <div className="mt-6 pt-4 border-t border-gray-100">
            <Link
              href="/guides/busiest-times-ae"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#005EB8] hover:underline"
            >
              Read the full guide: Best &amp; Worst Times to Visit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section
        id="methodology"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
          <div className="mb-6">
            <p className="text-xs font-bold text-[#005EB8] uppercase tracking-widest mb-1">
              Our approach
            </p>
            <h2 className="text-2xl font-bold text-gray-900">
              Where the Numbers Come From
            </h2>
            <p className="mt-1 text-gray-600">
              Every figure on this site is traceable, timestamped and labelled
              so you can judge its reliability yourself.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-[#005EB8]/10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-[#005EB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Direct from trusts</h3>
              <p className="text-sm text-gray-600">
                We pull data from the same public pages each NHS Trust
                maintains for its own patients — plus official statistical
                releases from NHS England, NHS Wales, NHS Scotland and HSC
                Northern Ireland.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Clearly timestamped</h3>
              <p className="text-sm text-gray-600">
                Every number shows when it was last collected. Figures are
                labelled{" "}
                <span className="inline-flex items-center gap-1 text-xs font-medium bg-green-100 text-green-700 px-1.5 py-0.5 rounded">
                  Live
                </span>{" "}
                ,{" "}
                <span className="text-xs font-medium bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">
                  Latest published
                </span>{" "}
                ,{" "}
                <span className="text-xs font-medium bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                  Monthly average
                </span>{" "}
                or{" "}
                <span className="text-xs font-medium bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded">
                  Estimated
                </span>{" "}
                — so there is no ambiguity about age.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Fully independent
              </h3>
              <p className="text-sm text-gray-600">
                This is a privately run project with no NHS affiliation,
                sponsorship or endorsement. We exist to make public data
                easier for patients to use — every figure links back to
                the original trust page.
              </p>
            </div>
          </div>

          {/* Review Badge */}
          <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full border border-green-200">
              <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
              <span className="text-xs font-medium text-green-700">Reviewed for accuracy</span>
            </div>
            <span className="text-xs text-gray-400">
              Methodology and editorial content are periodically reviewed by healthcare professionals.
            </span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs font-bold text-[#005EB8] uppercase tracking-widest mb-1">
              Common questions
            </p>
            <h2 className="text-2xl font-bold text-gray-900">
              Quick Answers About A&E Waits
            </h2>
            <p className="mt-1 text-gray-600">
              Straightforward answers to the things patients ask us most.
            </p>
          </div>
          <Link
            href="/faq"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[#005EB8] hover:underline whitespace-nowrap"
          >
            All questions &rarr;
          </Link>
        </div>
        <FAQ />
      </section>

      {/* Emergency Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-red-50 border border-red-200 p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="38" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2" />
              <rect x="28" y="24" width="24" height="8" rx="2" fill="#DC2626" />
              <rect x="36" y="16" width="8" height="24" rx="2" fill="#DC2626" />
              <text x="40" y="58" textAnchor="middle" fill="#DC2626" fontSize="14" fontWeight="bold">999</text>
            </svg>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-red-900">
              Genuine emergency? Skip this site — dial 999
            </h2>
            <p className="mt-2 text-red-800 max-w-xl">
              Chest pain, difficulty breathing, heavy uncontrolled bleeding,
              stroke symptoms or serious trauma all need an ambulance, not
              a wait-time comparison. For anything urgent but not
              life-threatening, try{" "}
              <a
                href="https://111.nhs.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium"
              >
                NHS 111 online
              </a>{" "}
              or call 111.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ structured data for Google rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
