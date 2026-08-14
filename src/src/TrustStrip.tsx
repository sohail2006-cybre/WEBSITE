import { Zap, HeartHandshake, Cpu, BadgeCheck } from "lucide-react";
import { Reveal } from "../hooks/useReveal";

const stats = [
  { icon: Zap, title: "Fast Service", desc: "Quick turnaround for everyday digital tasks" },
  { icon: HeartHandshake, title: "Reliable Assistance", desc: "Helpful guidance for your online needs" },
  { icon: Cpu, title: "Digital Solutions", desc: "Modern internet & document services" },
  { icon: BadgeCheck, title: "Affordable Services", desc: "Convenient pricing for the local community" },
];

export default function TrustStrip() {
  return (
    <section className="relative z-10 -mt-10 px-4 sm:px-6 lg:px-8" aria-label="Key features">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.title} delay={i * 90}>
            <div className="group flex h-full items-start gap-4 rounded-2xl border border-slate-100 bg-white/90 p-5 shadow-lg shadow-navy-900/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-500/10">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-royal-500 text-white shadow-md shadow-navy-500/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <s.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-navy-900">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">
                  {s.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
