"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Hospitals", href: "/hospitals" },
  { label: "Regions", href: "/regions" },
  { label: "Statistics", href: "/statistics" },
  { label: "Guides", href: "/guides" },
  { label: "FAQ", href: "/faq" },
  { label: "Near Me", href: "/near-me" },
];

const COUNTRIES = [
  { label: "England", href: "/regions" },
  { label: "Scotland", href: "/regions/scotland" },
  { label: "Wales", href: "/regions/wales" },
  { label: "Northern Ireland", href: "/regions/northern-ireland" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Country bar */}
      <div className="hidden md:block border-b border-gray-100 bg-gray-50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-8">
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <span className="font-medium">Region:</span>
              {COUNTRIES.map((c) => (
                <Link
                  key={c.label}
                  href={c.href}
                  className="px-2 py-0.5 rounded hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {c.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs text-green-700 font-medium">
                data feeds active
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-baseline gap-0.5">
            <span className="text-xl font-extrabold text-[#005EB8]">A&E</span>
            <span className="text-xl font-bold text-gray-700">Tracker</span>
            <span className="text-lg font-medium text-gray-400">UK</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://www.nhs.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#007F3B] text-white hover:bg-[#006B32] transition-colors"
            >
              NHS.uk
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {menuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 mt-3">
              <p className="px-3 text-xs text-gray-400 font-medium uppercase tracking-wider mb-2">
                By country
              </p>
              {COUNTRIES.map((c) => (
                <Link
                  key={c.label}
                  href={c.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
