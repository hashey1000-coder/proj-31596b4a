import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Compare NHS A&E Waits in Real Time — Every Hospital, Every Region",
    template: "%s | A&E Tracker UK",
  },
  description:
    "See how long you will wait at every NHS A&E department right now. Side-by-side hospital comparisons, postcode search, regional breakdowns and 24-hour trend data for the whole of the UK.",
  metadataBase: new URL("https://aewaittimes.uk"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "A&E Tracker UK",
    title: "Compare NHS A&E Waits in Real Time",
    description:
      "Side-by-side A&E wait comparisons for every NHS hospital. Search by postcode, browse by region, and spot the quietest departments near you.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare NHS A&E Waits in Real Time",
    description:
      "Side-by-side A&E wait comparisons for every NHS hospital. Find the shortest queue near you right now.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" data-scroll-behavior="smooth" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-gray-50 text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
