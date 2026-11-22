import Link from "next/link";
import type { Metadata } from "next";
import { SITE_NAME, LAST_REVIEWED_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Data Sources — Where Our A&E Wait Times Come From",
  description:
    "Every A&E wait-time figure on A&E Tracker UK is sourced from official, publicly available NHS feeds and statistics. See the full list of sources for England, Scotland, Wales and Northern Ireland.",
  alternates: { canonical: "/data-sources/" },
};

const NATIONS: {
  nation: string;
  live: string;
  typical: string;
  links: { label: string; href: string }[];
}[] = [
  {
    nation: "England",
    live: "Individual NHS trust live A&E dashboards, published by the trusts themselves (for example University Hospitals Birmingham, University Hospitals Coventry & Warwickshire, Plymouth, Torbay and others that publish a live feed).",
    typical:
      "NHS England's monthly A&E Attendances & Emergency Admissions statistics (Type 1 performance), used to derive a typical wait where a trust has no live feed.",
    links: [
      {
        label: "NHS England — A&E Waiting Times & Activity",
        href: "https://www.england.nhs.uk/statistics/statistical-work-areas/ae-waiting-times-and-activity/",
      },
    ],
  },
  {
    nation: "Scotland",
    live: "NHS board live feeds where published (for example NHS Forth Valley's emergency department and minor-injury feeds).",
    typical:
      "Public Health Scotland's weekly A&E activity and performance statistics, used for a typical wait where no live feed exists.",
    links: [
      {
        label: "Public Health Scotland — A&E activity",
        href: "https://publichealthscotland.scot/publications/show-all-releases/?id=2843",
      },
    ],
  },
  {
    nation: "Wales",
    live: "The NHS Wales national emergency-department waiting-times feed.",
    typical:
      "StatsWales emergency-department performance statistics, used for a typical wait where the live feed does not cover a site.",
    links: [
      { label: "NHS Wales — A&E waiting times", href: "https://aeinfo.nhs.wales/" },
      {
        label: "StatsWales — emergency department performance",
        href: "https://statswales.gov.wales/Catalogue/Health-and-Social-Care/NHS-Hospital-Waiting-Times/Emergency-Department",
      },
    ],
  },
  {
    nation: "Northern Ireland",
    live: "The nidirect emergency department waiting-times page, published by the Department of Health (NI).",
    typical:
      "No hospital-level statistical fallback is currently published for Northern Ireland, so where the live feed has no figure we show none rather than an estimate.",
    links: [
      {
        label: "nidirect — Emergency department waiting times",
        href: "https://www.nidirect.gov.uk/articles/emergency-department-waiting-times",
      },
    ],
  },
];

export default function DataSourcesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-700">Home</Link> &rsaquo; Data sources
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
        Our data sources
      </h1>
      <p className="mt-4 text-lg text-gray-600 leading-relaxed">
        Every figure on {SITE_NAME} comes from an official, publicly available
        source. We gather and standardise what NHS bodies already publish — we do
        not generate, estimate by hand, or crowd-source live numbers. Here is
        where each nation&apos;s data comes from.
      </p>

      <div className="mt-10 space-y-6">
        {NATIONS.map((n) => (
          <section
            key={n.nation}
            className="rounded-2xl border border-gray-200 bg-white p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900">{n.nation}</h2>
            <dl className="mt-4 space-y-4 text-sm text-gray-700 leading-relaxed">
              <div>
                <dt className="font-semibold text-gray-900">Live figures</dt>
                <dd className="mt-1">{n.live}</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Typical figures</dt>
                <dd className="mt-1">{n.typical}</dd>
              </div>
            </dl>
            <ul className="mt-4 space-y-1.5">
              {n.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#005EB8] hover:underline"
                  >
                    {l.label} &nearr;
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Licensing &amp; attribution
          </h2>
          <p className="mt-3">
            The national statistical publications we use are Crown copyright and
            made available under the{" "}
            <a
              href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#005EB8] hover:underline"
            >
              Open Government Licence v3.0
            </a>
            . Trust live dashboards are published by the individual trusts for
            public information. {SITE_NAME} is an independent aggregator and
            claims no ownership of the underlying data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            How we use these sources
          </h2>
          <p className="mt-3">
            For the detail on refresh frequency, how we tell &ldquo;live&rdquo;
            from &ldquo;typical&rdquo;, and the validation we apply, see our{" "}
            <Link href="/methodology" className="text-[#005EB8] hover:underline">
              methodology
            </Link>
            . If you believe a source is mislabelled or out of date,{" "}
            <Link href="/contact" className="text-[#005EB8] hover:underline">
              let us know
            </Link>
            .
          </p>
        </section>

        <p className="text-sm text-gray-500">
          Page last reviewed {LAST_REVIEWED_DISPLAY}.
        </p>
      </div>
    </div>
  );
}
