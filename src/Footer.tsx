import { MonitorSmartphone, Phone, MapPin, MessageCircle, Navigation } from "lucide-react";
import { NAV_LINKS, telLink, whatsappLink, directionsLink, PHONE_PRIMARY, PHONE_SECONDARY, BUSINESS } from "../lib/site";

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 pt-16 pb-8 text-slate-300">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 via-royal-500 to-cyan-accent text-white shadow-lg">
                <MonitorSmartphone className="h-6 w-6" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-heading text-base font-bold text-white">
                  Mansoori
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-cyan-400">
                  Jan Seva Kendra
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              {BUSINESS.shortDescription}
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-cyan-accent"
                  >
                    <span className="h-px w-3 bg-slate-600 transition-colors group-hover:bg-cyan-accent" aria-hidden="true" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={telLink(PHONE_PRIMARY)} className="group inline-flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-cyan-accent">
                  <Phone className="h-4 w-4 text-cyan-400" />
                  {PHONE_PRIMARY}
                </a>
              </li>
              <li>
                <a href={telLink(PHONE_SECONDARY)} className="group inline-flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-cyan-accent">
                  <Phone className="h-4 w-4 text-cyan-400" />
                  {PHONE_SECONDARY}
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-cyan-accent">
                  <MessageCircle className="h-4 w-4 text-cyan-400" />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Location
            </h3>
            <p className="mt-4 flex items-start gap-2.5 text-sm leading-relaxed text-slate-400">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
              {BUSINESS.address}
            </p>
            <a
              href={directionsLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/40 px-4 py-2 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-500/10"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-slate-400">
            © 2026 Mansoori Jan Seva Kendra. All Rights Reserved.
          </p>
          <p className="text-xs text-slate-500">
            Internet Cafe &amp; Digital Service Center · Vrishangpura, UP
          </p>
        </div>
      </div>
    </footer>
  );
}
