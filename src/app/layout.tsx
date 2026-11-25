import type { Metadata } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

// Google Analytics 4 (measurement ID is public). Placed in the root layout so
// it loads on every statically-exported page.
const GA_ID = "G-EZL0VPTSYT";

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
  verification: {
    google: "K_1Hvuo70slWVcn8-4-xctVbM2KbVh_tO--P6DN-KHM",
  },
  robots: {
    index: true,
    follow: true,
  },
  // NOTE: no `alternates.canonical` here — a canonical set in the root layout
  // is inherited by every page, pointing them all at "/" and telling search
  // engines the whole site is a duplicate of the homepage. Each page sets its
  // own canonical instead.
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" data-scroll-behavior="smooth" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://yield.lkz.ai" />
        <link rel="preconnect" href="https://securepubads.g.doubleclick.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="//tpc.googlesyndication.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(d,b,c,s,u){c=d.querySelector('link[rel=canonical]');u=String(c&&c.href||location.href||'').split(/[?#]/)[0];s=d.createElement('script');s.async=1;s.src=b+'?u='+encodeURIComponent(u);(d.head||d.documentElement).appendChild(s)}(document,"https://yield.lkz.ai/s/1324.js")`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-gray-50 text-gray-900">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // Consent Mode v2: default everything to denied until the visitor
            // chooses in the cookie banner (UK GDPR/PECR + AdSense requirement).
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500
            });

            // Restore a previous "accept" before the first hit so returning
            // visitors aren't re-prompted and analytics works immediately.
            try {
              if (localStorage.getItem('aewt_consent') === 'granted') {
                gtag('consent', 'update', {
                  ad_storage: 'granted',
                  analytics_storage: 'granted',
                  ad_user_data: 'granted',
                  ad_personalization: 'granted'
                });
              }
            } catch (e) {}

            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <Header builtAt={new Date().toISOString()} />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
        <CookieConsent />
      </body>
    </html>
  );
}
