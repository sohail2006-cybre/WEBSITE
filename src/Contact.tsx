import { Phone, MapPin, MessageCircle, Navigation } from "lucide-react";
import { SectionHeading } from "./ui";
import { Reveal } from "../hooks/useReveal";
import { telLink, whatsappLink, directionsLink, PHONE_PRIMARY, PHONE_SECONDARY, BUSINESS } from "../lib/site";

const cards = [
  {
    icon: Phone,
    title: "Phone",
    primary: PHONE_PRIMARY,
    secondary: PHONE_SECONDARY,
    href: telLink(PHONE_PRIMARY),
    href2: telLink(PHONE_SECONDARY),
    gradient: "from-navy-700 to-royal-500",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    primary: "Chat with us",
    secondary: "Quick replies for your queries",
    href: whatsappLink(),
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: MapPin,
    title: "Address",
    primary: BUSINESS.address.split(",")[0],
    secondary: "Vrishangpura, Uttar Pradesh 283104",
    href: directionsLink(),
    gradient: "from-royal-500 to-cyan-accent",
  },
  {
    icon: Navigation,
    title: "Directions",
    primary: "Get Directions",
    secondary: "Open in Google Maps",
    href: directionsLink(),
    gradient: "from-amber-400 to-amber-500",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Get In Touch"
            title="Contact Mansoori Jan Seva Kendra"
            subtitle="Reach out by phone or WhatsApp, or visit us at our convenient location in Vrishangpura."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <div className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-200 hover:shadow-2xl hover:shadow-cyan-500/10">
                <span className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${c.gradient} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}>
                  <c.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-navy-900">
                  {c.title}
                </h3>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-1 text-base font-semibold text-navy-800 transition-colors group-hover:text-royal-600 hover:text-royal-600"
                >
                  {c.primary}
                </a>
                {c.href2 ? (
                  <a
                    href={c.href2}
                    className="text-sm font-medium text-slate-500 transition-colors hover:text-royal-600"
                  >
                    {c.secondary}
                  </a>
                ) : (
                  <p className="text-sm text-slate-500">{c.secondary}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Map / location banner */}
        <Reveal delay={120}>
          <div className="relative mt-8 overflow-hidden rounded-3xl border border-slate-100 shadow-lg">
            <div className="absolute inset-0 bg-dots opacity-40" aria-hidden="true" />
            <div className="relative flex flex-col items-center gap-6 bg-navy-950 p-8 sm:p-12 md:flex-row md:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-royal-500 to-cyan-accent text-white shadow-lg">
                  <MapPin className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    Find Us Here
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
                    {BUSINESS.address}
                  </p>
                </div>
              </div>
              <a
                href={directionsLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-lg shadow-amber-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
