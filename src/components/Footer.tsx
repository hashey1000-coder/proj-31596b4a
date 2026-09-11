import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#005EB8] text-white border-t border-white/20 mt-12">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="py-16 md:py-20 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Hospitals
            </h2>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <Link href="/hospitals/derriford-hospital" className="hover:text-white transition-colors">
                  Derriford Hospital
                </Link>
              </li>
              <li>
                <Link href="/hospitals/royal-london-hospital" className="hover:text-white transition-colors">
                  Royal London Hospital
                </Link>
              </li>
              <li>
                <Link href="/hospitals/queen-elizabeth-hospital-birmingham" className="hover:text-white transition-colors">
                  Queen Elizabeth Hospital
                </Link>
              </li>
              <li>
                <Link href="/hospitals/manchester-royal-infirmary" className="hover:text-white transition-colors">
                  Manchester Royal Infirmary
                </Link>
              </li>
              <li>
                <Link href="/hospitals/leeds-general-infirmary" className="hover:text-white transition-colors">
                  Leeds General Infirmary
                </Link>
              </li>
              <li>
                <Link href="/hospitals" className="hover:text-white transition-colors font-medium">
                  All hospitals &rarr;
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Regions
            </h2>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <Link href="/regions/london" className="hover:text-white transition-colors">
                  London
                </Link>
              </li>
              <li>
                <Link href="/regions/north-west" className="hover:text-white transition-colors">
                  North West
                </Link>
              </li>
              <li>
                <Link href="/regions/birmingham-and-solihull" className="hover:text-white transition-colors">
                  Birmingham &amp; Solihull
                </Link>
              </li>
              <li>
                <Link href="/regions/wales" className="hover:text-white transition-colors">
                  Wales
                </Link>
              </li>
              <li>
                <Link href="/regions/scotland" className="hover:text-white transition-colors">
                  Scotland
                </Link>
              </li>
              <li>
                <Link href="/regions/northern-ireland" className="hover:text-white transition-colors">
                  Northern Ireland
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Resources
            </h2>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <Link href="/guides" className="hover:text-white transition-colors">
                  Patient Guides
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/guides/ae-or-utc" className="hover:text-white transition-colors">
                  A&E vs UTC
                </Link>
              </li>
              <li>
                <Link href="/guides/busiest-times-ae" className="hover:text-white transition-colors">
                  Quietest hours
                </Link>
              </li>
              <li>
                <Link href="/#methodology" className="hover:text-white transition-colors">
                  Our approach
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              In an Emergency
            </h2>
            <p className="text-sm text-white/75 leading-relaxed">
              Life-threatening? Dial{" "}
              <strong className="text-white">999</strong> now.
            </p>
            <p className="text-sm text-white/75 mt-3 leading-relaxed">
              Urgent but not critical? Call{" "}
              <strong className="text-white">111</strong> or go to{" "}
              <a
                href="https://www.nhs.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                nhs.uk
              </a>
              .
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="py-6 border-t border-white/20">
          <div className="bg-white/10 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
              <div className="text-xs text-white/70 leading-relaxed">
                <p className="font-semibold text-white/90 mb-1">Important Notice</p>
                <p>
                  A&E Tracker UK is an independent project that aggregates publicly available NHS data. It is <strong className="text-white/90">not operated, endorsed or affiliated with the National Health Service</strong>. Nothing on this site should be treated as medical advice — always consult a qualified healthcare professional about your specific situation.
                </p>
                <p className="mt-2">
                  Wait-time figures are sourced from NHS Trust public dashboards and official statistical publications. Because queues change rapidly, the numbers displayed may not match the situation at any department at any given moment. We aim for accuracy but cannot guarantee it.
                </p>
                <p className="mt-2">
                  Editorial content is reviewed periodically. Our team references official NHS guidance and published clinical evidence wherever possible.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex flex-wrap items-center gap-4">
            <span>
              <strong className="text-white/70">Not medical advice.</strong>
            </span>
            <span>Life-threatening emergency? Dial 999.</span>
          </div>
          <div className="flex items-baseline gap-0.5">
            <span className="font-extrabold text-white text-sm">A&E</span>
            <span className="font-bold text-white/80 text-sm">Tracker</span>
            <span className="font-medium text-white/60 text-sm">UK</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
