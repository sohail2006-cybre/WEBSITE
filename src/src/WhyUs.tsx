import {
  Gauge,
  HeartHandshake,
  Globe2,
  MapPin,
  MessageCircle,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "./ui";
import { Reveal } from "../hooks/useReveal";

const reasons = [
  { icon: Gauge, title: "Fast & Convenient", desc: "Get common digital tasks handled conveniently in one place." },
  { icon: HeartHandshake, title: "Friendly Assistance", desc: "Helpful support for customers who need guidance with online services." },
  { icon: Globe2, title: "Digital Services", desc: "Access a wide range of internet and document-related services." },
  { icon: MapPin, title: "Local Convenience", desc: "A convenient digital-service point for the Vrishangpura area." },
  { icon: MessageCircle, title: "Easy Communication", desc: "Quick contact through phone and WhatsApp." },
  { icon: Wrench, title: "Practical Solutions", desc: "Simple assistance for everyday online requirements." },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative bg-slate-50/70 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why Choose Mansoori Jan Seva Kendra?"
            subtitle="We focus on making every digital task easier for you — with friendly help, practical solutions and local convenience."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 90}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-900/10">
                <div
                  className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-navy-700 via-royal-500 to-cyan-accent transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-cyan-accent text-white shadow-md shadow-navy-500/20 transition-transform duration-300 group-hover:scale-110">
                    <r.icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-heading text-lg font-bold text-navy-900">
                    {r.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  {r.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
