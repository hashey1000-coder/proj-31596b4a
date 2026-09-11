import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuideBySlug, GUIDES } from "@/lib/guides";
import type { Metadata } from "next";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: "Guide Not Found" };
  return {
    title: guide.title,
    description: guide.description,
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const otherGuides = GUIDES.filter((g) => g.slug !== slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-700">Home</Link>{" "}
        &rsaquo;{" "}
        <Link href="/guides" className="hover:text-gray-700">Guides</Link>{" "}
        &rsaquo; {guide.title}
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <article className="lg:col-span-2">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#005EB8]/10 text-[#005EB8]">
                {guide.category}
              </span>
              <span className="text-xs text-gray-400">{guide.readTime}</span>
              <span className="flex items-center gap-1 text-xs text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
                Clinically reviewed
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {guide.title}
            </h1>
            <p className="text-gray-600 mb-6">{guide.description}</p>

            <div className="border-t border-gray-100 pt-6 guide-content">
              <div dangerouslySetInnerHTML={{ __html: markdownToHtml(guide.content) }} />
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
              Last clinically reviewed: {guide.lastReviewed}. This guide is for general information only and is not a substitute for professional medical advice.
            </div>
          </div>
        </article>

        <aside className="space-y-6">
          <div className="bg-red-50 rounded-2xl border border-red-200 p-6">
            <h2 className="font-semibold text-red-900 mb-2">Emergency?</h2>
            <p className="text-sm text-red-800">
              In a life-threatening emergency, call <strong>999</strong>. For urgent advice, call <strong>NHS 111</strong>.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="font-semibold text-gray-900 mb-4">Related guides</h2>
            <div className="space-y-3">
              {otherGuides.map((g) => (
                <Link
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  className="block p-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
                >
                  <p className="text-sm font-medium text-gray-900">{g.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{g.readTime}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="font-semibold text-gray-900 mb-3">Compare queues now</h2>
            <p className="text-sm text-gray-600 mb-4">
              See which departments near you have the shortest wait right now.
            </p>
            <Link
              href="/near-me"
              className="block text-center rounded-xl bg-[#005EB8] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#004f99] transition-colors"
            >
              Search by location
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

function inlineFormat(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-[#005EB8] underline hover:text-[#004f99]">$1</a>'
    );
}

function markdownToHtml(md: string): string {
  const lines = md.split("\n");
  const out: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i++;
      continue;
    }

    if (line.startsWith("### ")) {
      out.push(`<h3>${inlineFormat(line.slice(4))}</h3>`);
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      out.push(`<h2>${inlineFormat(line.slice(3))}</h2>`);
      i++;
      continue;
    }

    if (line.startsWith("- ")) {
      out.push("<ul>");
      while (i < lines.length && lines[i].startsWith("- ")) {
        out.push(`<li>${inlineFormat(lines[i].slice(2))}</li>`);
        i++;
      }
      out.push("</ul>");
      continue;
    }

    const olMatch = line.match(/^(\d+)\. (.+)/);
    if (olMatch) {
      out.push("<ol>");
      while (i < lines.length) {
        const m = lines[i].match(/^(\d+)\. (.+)/);
        if (!m) break;
        out.push(`<li>${inlineFormat(m[2])}</li>`);
        i++;
      }
      out.push("</ol>");
      continue;
    }

    out.push(`<p>${inlineFormat(line)}</p>`);
    i++;
  }

  return out.join("\n");
}
