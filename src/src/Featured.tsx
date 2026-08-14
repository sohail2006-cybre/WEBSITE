import {
  Zap,
  Globe,
  FileOutput,
  PrinterCheck,
  Wifi,
  MapPinned,
  CheckCircle2,
} from "lucide-react";
import { Pill } from "./ui";
import { Reveal } from "../hooks/useReveal";

const features = [
  { icon: Zap, title: "Quick Assistance", desc: "Get help promptly without long waits." },
  { icon: Globe, title: "Easy Online Services", desc: "Simple help with web forms and portals." },
  { icon: FileOutput, title: "Document Support", desc: "Prepare, copy and organise documents." },
  { icon: PrinterCheck, title: "Printing & Scanning", desc: "Quality print and scan services." },
  { icon: Wifi, title: "Internet Access", desc: "Reliable connection when you need it." },
  { icon: MapPinned, title: "Local Convenience", desc: "Located close to home in Vrishangpura." },
];

export default function Featured() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
      <div
        className="absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-royal-500/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left: text + list */}
        <Reveal>
          <Pill className="border-cyan-400/30 bg-cyan-400/10 text-cyan-100">
            One-Stop Solution
          </Pill>
          <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
            Complete Digital Assistance{" "}
            <span className="text-shimmer">Under One Roof</span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            From online forms and documents to printing and scanning, get all your
            common digital tasks handled in one convenient location. No more
            running around — just friendly, practical help when you need it.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal as="li" key={f.title} delay={i * 70}>
                <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-colors duration-300 hover:border-cyan-400/30 hover:bg-white/10">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-royal-500 to-cyan-accent text-white">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-white">
                      {f.title}
                    </h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-300">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </Reveal>

        {/* Right: illustration */}
        <Reveal delay={150}>
          <div className="relative mx-auto w-full max-w-md">
            <div
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-cyan-accent/20 to-royal-500/20 blur-2xl"
              aria-hidden="true"
            />
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-accent animate-pulse" />
                  <span className="text-sm font-semibold text-white">Digital Hub</span>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Online
                </span>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  { label: "Internet Browsing", pct: "100%" },
                  { label: "Printing & Scanning", pct: "100%" },
                  { label: "Form Filling Help", pct: "100%" },
                ].map((row) => (
                  <div key={row.label} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-100">{row.label}</span>
                      <span className="inline-flex items-center gap-1 font-semibold text-cyan-accent">
                        <CheckCircle2 className="h-4 w-4" /> {row.pct}
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-full rounded-full bg-gradient-to-r from-royal-500 to-cyan-accent" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-xl bg-gradient-to-r from-amber-400/15 to-amber-500/10 p-4 ring-1 ring-amber-400/20">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-navy-950">
                  <MapPinned className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">Conveniently Located</p>
                  <p className="text-xs text-slate-300">Vrishangpura, Uttar Pradesh</p>
                </div>
              </div>
            </div>

            {/* floating badge */}
            <div className="absolute -right-3 -top-5 animate-float rounded-2xl border border-white/20 bg-white px-4 py-3 shadow-xl sm:-right-6">
              <p className="text-xs font-semibold text-slate-500">Everything you need</p>
              <p className="font-heading text-sm font-bold text-navy-900">In one place</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
