import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getHospitalBySlug,
  getHospitalReadings,
  getAllHospitalsWithWaits,
  getNationalStats,
} from "@/lib/data/hospitals";
import {
  formatWaitTime,
  waitSeverity,
  severityDotColor,
  haversineDistance,
} from "@/lib/utils";
import { getHospitalImage } from "@/lib/hospital-images";
import { HospitalHistory } from "@/components/HospitalHistory";
import type { Metadata } from "next";

export function generateStaticParams() {
  const hospitals = getAllHospitalsWithWaits();
  return hospitals.map((h) => ({ slug: h.slug }));
}

function relativeTime(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins} min ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const hospital = getHospitalBySlug(slug);
  if (!hospital) return { title: "Hospital Not Found" };
  const dept =
    hospital.type === "UTC" ? "UTC" : hospital.type === "MIU" ? "MIU" : "A&E";
  return {
    title: `${hospital.name} — Current ${dept} Queue & Department Info`,
    description: `See the latest ${dept} queue length at ${hospital.name} in ${hospital.city}, sourced from ${hospital.trust_name}. Compare with nearby hospitals.`,
  };
}

export default async function HospitalDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hospital = getHospitalBySlug(slug);
  if (!hospital) notFound();

  const readings = getHospitalReadings(hospital.id, 24);
  const severity = waitSeverity(hospital.wait_minutes);

  const allHospitals = getAllHospitalsWithWaits();
  const nationalAvg = getNationalStats().avgWait;
  const nearby =
    hospital.lat && hospital.lng
      ? allHospitals
          .filter(
            (h) =>
              h.id !== hospital.id &&
              h.lat !== null &&
              h.lng !== null &&
              h.wait_minutes !== null
          )
          .map((h) => ({
            ...h,
            distance: haversineDistance(
              hospital.lat!,
              hospital.lng!,
              h.lat!,
              h.lng!
            ),
          }))
          .sort((a, b) => a.distance - b.distance)
          .slice(0, 5)
      : [];

  const prevReading = readings.length > 1 ? readings[1] : null;
  const change =
    hospital.wait_minutes !== null && prevReading?.wait_minutes !== null && prevReading?.wait_minutes !== undefined
      ? hospital.wait_minutes - prevReading.wait_minutes
      : null;

  const departments: string[] = hospital.departments
    ? JSON.parse(hospital.departments)
    : [];

  const hospitalFaqs = generateHospitalFaqs(hospital);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>{" "}
        &rsaquo;{" "}
        <Link href="/hospitals" className="hover:text-gray-700">
          Hospitals
        </Link>{" "}
        {hospital.region && (
          <>
            &rsaquo;{" "}
            <Link
              href={`/regions/${hospital.region.toLowerCase().replace(/\s+&\s+/g, "-and-").replace(/\s+/g, "-")}`}
              className="hover:text-gray-700"
            >
              {hospital.region}
            </Link>{" "}
          </>
        )}
        &rsaquo; {hospital.name}
      </nav>

      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-8">
        {(() => {
          const imageUrl = getHospitalImage(slug) || hospital.image_url;
          return imageUrl ? (
            <div className="relative h-48 md:h-64 w-full">
              <Image
                src={imageUrl}
                alt={`${hospital.name} hospital building`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1280px"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          ) : (
            <div className="relative h-36 md:h-48 w-full bg-gradient-to-br from-[#005EB8]/10 via-[#005EB8]/5 to-gray-50 flex items-center justify-center">
              <svg viewBox="0 0 120 80" fill="none" className="w-32 h-20 opacity-30">
                <rect x="30" y="20" width="60" height="50" rx="4" stroke="#005EB8" strokeWidth="2" />
                <rect x="45" y="5" width="30" height="55" rx="2" stroke="#005EB8" strokeWidth="2" />
                <rect x="54" y="12" width="12" height="4" rx="1" fill="#005EB8" />
                <rect x="58" y="8" width="4" height="12" rx="1" fill="#005EB8" />
                <rect x="38" y="30" width="10" height="10" rx="1.5" fill="#005EB8" opacity="0.3" />
                <rect x="55" y="30" width="10" height="10" rx="1.5" fill="#005EB8" opacity="0.3" />
                <rect x="72" y="30" width="10" height="10" rx="1.5" fill="#005EB8" opacity="0.3" />
                <rect x="38" y="46" width="10" height="10" rx="1.5" fill="#005EB8" opacity="0.3" />
                <rect x="72" y="46" width="10" height="10" rx="1.5" fill="#005EB8" opacity="0.3" />
                <rect x="55" y="50" width="10" height="20" rx="2" fill="#005EB8" opacity="0.5" />
              </svg>
            </div>
          );
        })()}
        <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {hospital.name} — Current{" "}
              {hospital.type === "UTC"
                ? "UTC"
                : hospital.type === "MIU"
                  ? "MIU"
                  : "A&E"}{" "}
              Queue
            </h1>

            {/* Also known as */}
            {hospital.aliases && (
              <p className="text-sm text-gray-400 mt-1">
                Also known as: {hospital.aliases}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3 mt-3">
              <span
                className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                  hospital.opening_hours?.includes("24")
                    ? "bg-green-50 text-green-700"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {hospital.opening_hours?.includes("24")
                  ? "Open 24/7"
                  : hospital.opening_hours || "Check hours"}
              </span>
              <span className="text-xs text-gray-500">{hospital.city}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                hospital.type === "UTC"
                  ? "bg-purple-50 text-purple-700"
                  : "bg-blue-50 text-blue-700"
              }`}>
                {hospital.type === "UTC" ? "Urgent Treatment Centre" : hospital.type}
              </span>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              Last updated{" "}
              {hospital.source_timestamp
                ? relativeTime(hospital.source_timestamp)
                : "—"}{" "}
              &middot; sourced from {hospital.trust_name}
            </p>
          </div>

          {/* Wait Time Display */}
          <div className="bg-gray-50 rounded-xl p-6 text-center min-w-[200px]">
            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-2">
              {hospital.type === "UTC" ? "Current Wait (UTC)" : `Typical Time in Department (${hospital.type})`}
            </p>
            {hospital.wait_minutes !== null ? (
              <>
                <div className="flex items-center justify-center gap-2">
                  <span
                    className={`w-3 h-3 rounded-full ${severityDotColor(severity)}`}
                  />
                  <span className="text-5xl font-bold text-gray-900">
                    {hospital.wait_minutes}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  minutes &middot; ~ {formatWaitTime(hospital.wait_minutes)}
                </p>
                {change !== null && (
                  <p
                    className={`text-sm mt-2 font-medium ${
                      change < 0 ? "text-green-600" : change > 0 ? "text-red-600" : "text-gray-500"
                    }`}
                  >
                    {change > 0 ? "+" : ""}
                    {change} min vs previous reading
                  </p>
                )}
              </>
            ) : (
              <div>
                <p className="text-lg text-gray-400">Live wait unavailable</p>
                <div className="mt-2">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    {hospital.avg_wait !== null ? "Average" : "National Average"}
                  </p>
                  <p className="text-3xl font-bold text-gray-400">
                    {hospital.avg_wait ?? nationalAvg}
                  </p>
                  <p className="text-sm text-gray-400">minutes</p>
                </div>
              </div>
            )}

            <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-2 gap-3">
              {hospital.patients_waiting !== null && (
                <div>
                  <p className="text-xs text-gray-500">Patients Waiting</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {hospital.patients_waiting}
                  </p>
                </div>
              )}
              {hospital.total_patients !== null && (
                <div>
                  <p className="text-xs text-gray-500">Total in Dept</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {hospital.total_patients}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Source Link */}
        {hospital.trust_source_url && (
          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2">
            <span className="text-xs text-gray-500">Source:</span>
            <a
              href={hospital.trust_source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#005EB8] hover:underline"
            >
              {hospital.trust_name} A&E Waiting Times
            </a>
          </div>
        )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* About */}
          {hospital.about_text && (
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">
                About {hospital.name}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {hospital.about_text}
              </p>
            </div>
          )}

          {/* Hospital Details */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Hospital details
            </h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {hospital.address && (
                <div>
                  <dt className="text-gray-500">Address</dt>
                  <dd className="text-gray-900 mt-0.5">{hospital.address}</dd>
                </div>
              )}
              {hospital.city && (
                <div>
                  <dt className="text-gray-500">City</dt>
                  <dd className="text-gray-900 mt-0.5">
                    {hospital.city}
                    {hospital.postcode ? `, ${hospital.postcode}` : ""}
                  </dd>
                </div>
              )}
              {hospital.phone && (
                <div>
                  <dt className="text-gray-500">Phone</dt>
                  <dd className="mt-0.5">
                    <a
                      href={`tel:${hospital.phone}`}
                      className="text-[#005EB8] hover:underline"
                    >
                      {hospital.phone}
                    </a>
                  </dd>
                </div>
              )}
              {hospital.opening_hours && (
                <div>
                  <dt className="text-gray-500">Opening Hours</dt>
                  <dd className="text-gray-900 mt-0.5">
                    {hospital.opening_hours}
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-gray-500">NHS Trust</dt>
                <dd className="text-gray-900 mt-0.5">{hospital.trust_name}</dd>
              </div>
              <div>
                <dt className="text-gray-500">Type</dt>
                <dd className="text-gray-900 mt-0.5">
                  {hospital.type === "UTC"
                    ? "Urgent Treatment Centre"
                    : hospital.type === "MIU"
                      ? "Minor Injuries Unit"
                      : "Accident & Emergency (Type 1)"}
                </dd>
              </div>
            </dl>
          </div>

          {/* Departments */}
          {departments.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Departments & Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {departments.map((dept) => (
                  <div key={dept} className="flex items-center gap-2 py-1.5">
                    <svg className="w-4 h-4 text-[#005EB8] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span className="text-sm text-gray-700">{dept}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 24-Hour History */}
          {readings.length > 0 && (
            <HospitalHistory readings={readings} hospitalName={hospital.name} />
          )}

          {/* Regional context */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              {hospital.name} in context
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {hospital.wait_minutes !== null ? (
                <>
                  The latest reading puts {hospital.name} at roughly{" "}
                  <strong>{formatWaitTime(hospital.wait_minutes)}</strong>.{" "}
                  {(() => {
                    const regionHospitals = allHospitals.filter(
                      (h) => h.region === hospital.region && h.wait_minutes !== null
                    );
                    if (regionHospitals.length < 2) return null;
                    const avgWait = Math.round(
                      regionHospitals.reduce((sum, h) => sum + (h.wait_minutes || 0), 0) /
                        regionHospitals.length
                    );
                    const diff = hospital.wait_minutes! - avgWait;
                    return (
                      <>
                        Across {hospital.region} the typical figure is around{" "}
                        <strong>{formatWaitTime(avgWait)}</strong>.{" "}
                        {diff > 30
                          ? `That puts this department noticeably above the area norm — the nearby-alternatives panel may show a shorter queue.`
                          : diff < -30
                            ? `That is comfortably below the area norm, suggesting a relatively quiet department right now.`
                            : `That places it roughly in line with neighbouring departments.`}
                      </>
                    );
                  })()}
                </>
              ) : (
                `No recent data is available for ${hospital.name}. Refresh later or contact the trust directly for up-to-the-minute information.`
              )}
            </p>
            {hospital.type === "AE" && (
              <Link
                href="/guides/ae-or-utc"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#005EB8] hover:underline"
              >
                Wondering whether you actually need A&E?
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>

          {/* Hospital-specific FAQ */}
          {hospitalFaqs.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Common Questions About {hospital.name}
              </h2>
              <div className="space-y-4">
                {hospitalFaqs.map((faq, i) => (
                  <div key={i} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1.5">
                      {faq.q}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Nearby Alternatives */}
          {nearby.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Other Departments Nearby
              </h2>
              <div className="space-y-4">
                {nearby.map((h) => {
                  const s = waitSeverity(h.wait_minutes);
                  return (
                    <Link
                      key={h.id}
                      href={`/hospitals/${h.slug}`}
                      className="block p-4 rounded-xl border border-gray-100 hover:shadow-sm hover:border-gray-200 transition-all"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">
                            {h.distance.toFixed(1)} km
                          </p>
                          <p className="text-sm font-medium text-gray-900">
                            {h.name}
                          </p>
                          <p className="text-xs text-gray-500">{h.city}</p>
                          {h.type === "UTC" && (
                            <span className="inline-block mt-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-purple-50 text-purple-700">
                              UTC
                            </span>
                          )}
                        </div>
                        {h.wait_minutes !== null && (
                          <div className="text-right">
                            <div className="flex items-center gap-1">
                              <span
                                className={`w-2 h-2 rounded-full ${severityDotColor(s)}`}
                              />
                              <span className="text-sm font-bold text-gray-900">
                                {h.wait_minutes}
                              </span>
                              <span className="text-xs text-gray-400">min</span>
                            </div>
                            <p className="text-xs text-gray-400">
                              ~ {formatWaitTime(h.wait_minutes)}
                            </p>
                          </div>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
              <Link
                href="/near-me"
                className="mt-4 flex items-center gap-1.5 text-sm font-medium text-[#005EB8] hover:underline"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                Find by my location
              </Link>
            </div>
          )}

          {/* Queue colour guide */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-sm font-semibold text-gray-900 mb-3">
              Queue Colour Guide
            </h2>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-600">Wait &lt; 120 mins</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="text-gray-600">Wait 120-240 mins</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-gray-600">Wait &gt; 240 mins</span>
              </div>
            </div>
          </div>

          {/* Related Guides */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-sm font-semibold text-gray-900 mb-3">
              Related guides
            </h2>
            <div className="space-y-2.5">
              <Link
                href="/guides/ae-or-utc"
                className="block p-3 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm text-sm font-medium text-gray-900 transition-all"
              >
                A&E vs UTC — picking the right door
              </Link>
              <Link
                href="/guides/reduce-ae-wait"
                className="block p-3 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm text-sm font-medium text-gray-900 transition-all"
              >
                Practical ways to shorten your time
              </Link>
              <Link
                href="/guides/busiest-times-ae"
                className="block p-3 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm text-sm font-medium text-gray-900 transition-all"
              >
                Best &amp; worst hours to arrive
              </Link>
            </div>
          </div>

          {/* Accuracy note */}
          <div className="bg-green-50 rounded-2xl border border-green-200 p-5">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
              <span className="text-sm font-semibold text-green-800">Checked for accuracy</span>
            </div>
            <p className="text-xs text-green-700 leading-relaxed">
              Page content is periodically verified against official sources. All queue data comes from NHS Trust dashboards and government statistical releases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function generateHospitalFaqs(hospital: {
  name: string;
  city: string | null;
  wait_minutes: number | null;
  opening_hours: string | null;
  type: string;
  postcode: string | null;
}) {
  const faqs: { q: string; a: string }[] = [];
  const deptLabel =
    hospital.type === "UTC" ? "UTC" : hospital.type === "MIU" ? "MIU" : "A&E";

  faqs.push({
    q: `How long is the queue at ${hospital.name} right now?`,
    a: hospital.wait_minutes !== null
      ? `The most recent figure shows roughly ${formatWaitTime(hospital.wait_minutes)} (${hospital.wait_minutes} minutes) at ${hospital.name}'s ${deptLabel}. This is pulled from the trust's public dashboard and refreshes regularly, but the actual time you wait will depend on how urgently you need treatment and how busy the department is when you arrive.`
      : `We do not have a current reading for ${hospital.name}. Try refreshing later, or ring the hospital switchboard for the latest situation.`,
  });

  faqs.push({
    q: `What are ${hospital.name}'s opening hours?`,
    a: hospital.opening_hours?.includes("24")
      ? `The ${deptLabel} at ${hospital.name} runs around the clock — 24 hours, seven days a week, bank holidays included. No appointment is needed; patients are assessed on arrival and seen in order of clinical urgency, not arrival time.`
      : `${hospital.name} is open: ${hospital.opening_hours || "contact the hospital for confirmed hours"}. If you need care outside those hours, dial 111 for advice on the nearest open department.`,
  });

  if (hospital.type === "AE") {
    faqs.push({
      q: `Do I actually need A&E, or could a UTC near ${hospital.city || "here"} be faster?`,
      a: `A&E at ${hospital.name} is the right place for anything that could be life-threatening — chest pain, stroke symptoms, uncontrolled bleeding, serious breathing problems or major injuries. For less severe issues (sprains, small cuts, minor fractures, bites, burns), a nearby Urgent Treatment Centre will almost always see you sooner. If you are unsure, ring 111 — they can point you to the best service and sometimes book you a timed slot.`,
    });
  }

  faqs.push({
    q: `How do I get to ${hospital.name}?`,
    a: `${hospital.name} is in ${hospital.city || "the local area"}${hospital.postcode ? `, postcode ${hospital.postcode}` : ""}. Use the location search on this site to see the distance from where you are and compare it against other departments nearby.`,
  });

  faqs.push({
    q: `When is ${hospital.name} ${deptLabel} typically quietest?`,
    a: `Nationally, emergency departments see the fewest arrivals between about 6 am and 9 am. Demand tends to peak on Monday mornings, weekday evenings after 6 pm, and on Friday and Saturday nights. Arriving during a quieter window — if your condition allows it — can noticeably cut the time you spend waiting.`,
  });

  return faqs;
}
