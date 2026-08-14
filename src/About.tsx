import { CheckCircle2, MonitorSmartphone, MapPin, Sparkles } from "lucide-react";
import { SectionHeading } from "./ui";
import { Reveal } from "../hooks/useReveal";

const points = [
  "Convenient internet and online services for the local community.",
  "Friendly guidance for form filling and digital applications.",
  "Printing, photocopying, scanning and document support.",
  "Practical help with everyday online and government-related tasks.",
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: visual */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-md">
              <div
                className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-navy-100 via-cyan-100 to-white blur-2xl"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-6 shadow-2xl shadow-navy-900/10 sm:p-8">
                <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-700 to-cyan-accent text-white shadow-lg">
                      <MonitorSmartphone className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="font-heading text-lg font-bold text-navy-900">
                        Mansoori Jan Seva Kendra
                      </p>
                      <p className="text-xs font-medium text-slate-500">
                        Internet Cafe &amp; Digital Service Center
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl bg-navy-950 p-5 text-white">
                    <p className="flex items-center gap-2 text-sm font-semibold text-cyan-accent">
                      <Sparkles className="h-4 w-4" /> Our Focus
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-slate-200">
                      “Making digital services simpler and more accessible for the
                      local community.”
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-navy-700">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <p className="text-sm font-medium text-slate-600">
                      Serving the Vrishangpura area in Uttar Pradesh
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-3 animate-float rounded-2xl border border-white bg-white px-4 py-3 shadow-xl sm:-right-6">
                <p className="text-sm font-bold text-navy-900">Friendly &amp; Reliable</p>
              </div>
            </div>
          </Reveal>

          {/* Right: copy */}
          <Reveal delay={120}>
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title="About Mansoori Jan Seva Kendra"
            />
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Mansoori Jan Seva Kendra is a local Internet Cafe and Digital Service
              Center providing convenient internet, online and digital services for
              the community in Vrishangpura, Uttar Pradesh.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Whether you need to browse the internet, fill out an online form,
              print an important document or get a photograph taken, we aim to make
              every digital task simple, quick and hassle-free.
            </p>

            <ul className="mt-7 space-y-3">
              {points.map((p, i) => (
                <Reveal as="li" key={p} delay={i * 80}>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
                    <span className="text-sm leading-relaxed text-slate-600 sm:text-base">
                      {p}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
