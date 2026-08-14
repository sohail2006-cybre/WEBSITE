import { useEffect, useState } from "react";
import { Menu, X, Phone, MonitorSmartphone } from "lucide-react";
import { NavLink } from "./NavbarLinks";
import { NAV_LINKS, telLink, PHONE_PRIMARY } from "../lib/site";
import { cn } from "../utils/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? Math.min(window.scrollY / total, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/80 shadow-lg shadow-navy-900/5 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        {/* Scroll progress bar */}
        <div
          className="absolute left-0 top-0 h-0.5 bg-gradient-to-r from-navy-700 via-cyan-accent to-amber-400 transition-[width] duration-150"
          style={{ width: `${scrollProgress * 100}%` }}
          aria-hidden="true"
        />

        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-2.5" aria-label="Mansoori Jan Seva Kendra home">
            <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 via-royal-500 to-cyan-accent text-white shadow-lg shadow-navy-500/30 transition-transform duration-300 group-hover:scale-105">
              <MonitorSmartphone className="h-6 w-6" strokeWidth={2.2} />
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-amber-400 ring-2 ring-white" aria-hidden="true" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-heading text-base font-bold text-navy-900 sm:text-lg">
                Mansoori
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-cyan-600">
                Jan Seva Kendra
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href}>{link.label}</NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={telLink(PHONE_PRIMARY)}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-lg shadow-amber-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-400/40"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-navy-900 backdrop-blur transition-colors hover:bg-slate-50 lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-navy-950/40 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
        />
        {/* Panel */}
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
            <span className="font-heading text-lg font-bold text-navy-900">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-navy-900 transition-colors hover:bg-slate-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <ul className="flex flex-col px-6 py-4">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                style={{ transitionDelay: `${i * 40}ms` }}
                className={cn(
                  "transition-all duration-300",
                  open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                )}
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-4 text-lg font-semibold text-navy-900 transition-colors hover:bg-navy-50 hover:text-royal-600"
                >
                  {link.label}
                  <span className="text-cyan-500" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-3 border-t border-slate-100 p-6">
            <a
              href={telLink(PHONE_PRIMARY)}
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-3.5 text-base font-semibold text-navy-950 shadow-lg shadow-amber-500/30 transition-transform hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
            <a
              href="tel:+918791351712"
              className="text-center text-sm font-medium text-slate-500"
            >
              {PHONE_PRIMARY}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
