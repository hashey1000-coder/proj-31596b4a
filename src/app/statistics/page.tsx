import Link from "next/link";
import {
  getNationalStats,
  getLongestWaits,
  getShortestWaits,
} from "@/lib/data/hospitals";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Live A&E Statistics — National Wait Time Dashboard",
  description:
    "Real-time statistics across all tracked NHS A&E departments. Average wait, median, distribution, busiest and quietest departments right now.",
};

function formatWait(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h} hr ${m} min` : `${h} hr`;
}

export default function StatisticsPage() {
  const stats = getNationalStats();
  const longest = getLongestWaits(10);
  const shortest = getShortestWaits(10);

  const pctUnder30 = stats.reporting > 0 ? Math.round((stats.under30 / stats.reporting) * 100) : 0;
  const pct3060 = stats.reporting > 0 ? Math.round((stats.between30and60 / stats.reporting) * 100) : 0;
  const pctOver60 = stats.reporting > 0 ? Math.round((stats.over60 / stats.reporting) * 100) : 0;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <nav className="text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-700">Home</Link> &rsaquo; Statistics
      </nav>

      <div>
        <h1 className="text-3xl font-bold text-gray-900">Live A&E Statistics</h1>
        <p className="mt-2 text-gray-600 max-w-2xl">
          A real-time snapshot across all {stats.reporting} departments currently
          reporting live wait data out of {stats.totalTracked} tracked.
        </p>
      </div>

      {/* Key Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Average Wait</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{formatWait(stats.avgWait)}</p>
          <p className="text-xs text-gray-400 mt-1">Across all reporting departments</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Median Wait</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{formatWait(stats.medianWait)}</p>
          <p className="text-xs text-gray-400 mt-1">50% of departments below this</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <p className="text-xs font-semibold text-green-600 uppercase tracking-wider">Shortest Wait</p>
          <p className="text-3xl font-bold text-green-700 mt-1">{formatWait(stats.shortestWait.minutes)}</p>
          <p className="text-xs text-gray-400 mt-1">
            <Link href={`/hospitals/${stats.shortestWait.slug}`} className="text-[#005EB8] hover:underline">
              {stats.shortestWait.name}
            </Link>
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <p className="text-xs font-semibold text-red-600 uppercase tracking-wider">Longest Wait</p>
          <p className="text-3xl font-bold text-red-700 mt-1">{formatWait(stats.longestWait.minutes)}</p>
          <p className="text-xs text-gray-400 mt-1">
            <Link href={`/hospitals/${stats.longestWait.slug}`} className="text-[#005EB8] hover:underline">
              {stats.longestWait.name}
            </Link>
          </p>
        </div>
      </div>

      {/* Distribution */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-1">Wait Time Distribution</h2>
        <p className="text-sm text-gray-500 mb-5">
          What proportion of departments fall into each wait band right now.
        </p>

        <div className="flex rounded-xl overflow-hidden h-10 mb-4">
          {stats.under30 > 0 && (
            <div
              className="bg-green-500 flex items-center justify-center text-white text-xs font-bold transition-all"
              style={{ width: `${pctUnder30}%` }}
            >
              {pctUnder30}%
            </div>
          )}
          {stats.between30and60 > 0 && (
            <div
              className="bg-amber-400 flex items-center justify-center text-white text-xs font-bold transition-all"
              style={{ width: `${pct3060}%` }}
            >
              {pct3060}%
            </div>
          )}
          {stats.over60 > 0 && (
            <div
              className="bg-red-500 flex items-center justify-center text-white text-xs font-bold transition-all"
              style={{ width: `${pctOver60}%` }}
            >
              {pctOver60}%
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500" />
            Under 30 min — {stats.under30} departments ({pctUnder30}%)
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            30–60 min — {stats.between30and60} departments ({pct3060}%)
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            Over 60 min — {stats.over60} departments ({pctOver60}%)
          </div>
        </div>
      </div>

      {/* Patients Waiting */}
      {stats.totalPatientsWaiting > 0 && (
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">People Waiting Now</p>
              <p className="text-4xl font-bold text-gray-900 mt-1">
                {stats.totalPatientsWaiting.toLocaleString()}
              </p>
            </div>
            <p className="text-sm text-gray-500">
              Across {stats.hospitalsReportingPatients} departments that report patient counts
            </p>
          </div>
        </div>
      )}

      {/* Shortest & Longest Tables */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
            Quickest Departments
          </h2>
          <div className="divide-y divide-gray-100">
            {shortest.map((h, i) => (
              <Link
                key={h.id}
                href={`/hospitals/${h.slug}`}
                className="flex items-center justify-between py-3 hover:bg-gray-50 -mx-3 px-3 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-gray-400 w-5">{i + 1}</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{h.name}</p>
                    <p className="text-xs text-gray-400">{h.trust_name}</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-lg">
                  {formatWait(h.wait_minutes!)}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            Longest Waits Right Now
          </h2>
          <div className="divide-y divide-gray-100">
            {longest.map((h, i) => (
              <Link
                key={h.id}
                href={`/hospitals/${h.slug}`}
                className="flex items-center justify-between py-3 hover:bg-gray-50 -mx-3 px-3 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-gray-400 w-5">{i + 1}</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{h.name}</p>
                    <p className="text-xs text-gray-400">{h.trust_name}</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-lg">
                  {formatWait(h.wait_minutes!)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Key Insights</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs font-semibold text-gray-500 uppercase">Range</p>
            <p className="text-lg font-bold text-gray-900 mt-1">
              {formatWait(stats.longestWait.minutes - stats.shortestWait.minutes)}
            </p>
            <p className="text-xs text-gray-400">Best to worst difference</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs font-semibold text-gray-500 uppercase">Departments</p>
            <p className="text-lg font-bold text-gray-900 mt-1">{stats.reporting}</p>
            <p className="text-xs text-gray-400">Currently reporting live</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs font-semibold text-gray-500 uppercase">Under 30 min</p>
            <p className="text-lg font-bold text-green-700 mt-1">{pctUnder30}%</p>
            <p className="text-xs text-gray-400">{stats.under30} quiet departments</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs font-semibold text-gray-500 uppercase">Over 60 min</p>
            <p className="text-lg font-bold text-red-700 mt-1">{pctOver60}%</p>
            <p className="text-xs text-gray-400">{stats.over60} busy departments</p>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 pt-4">
        Data sourced from NHS trust websites. Updated with each page refresh.
        This is an independent service — not affiliated with the NHS.
      </div>
    </div>
  );
}
