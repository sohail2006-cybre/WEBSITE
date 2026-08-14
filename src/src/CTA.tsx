import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Button } from "./Button";
import { Reveal } from "../hooks/useReveal";
import { telLink, PHONE_PRIMARY, whatsappLink, directionsLink } from "../lib/site";

const dots = [
  { top: "10%", left: "8%", d: "0s" },
  { top: "30%", left: "85%", d: "0.8s" },
  { top: "70%", left: "12%", d: "1.6s" },
  { top: "80%", left: "75%", d: "0.4s" },
  { top: "50%", left: "50%", d: "1.2s" },
  { top: "15%", left: "60%", d: "2s" },
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-800 to-royal-600 animate-gradient" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />

      {/* pulse dots */}
      {dots.map((dot, i) => (
        <span
          key={i}
          className="absolute h-2 w-2 rounded-full bg-cyan-accent"
          style={{ top: dot.top, left: dot.left, animation: `pulse-ring 3s ease-in-out ${dot.d} infinite` }}
          aria-hidden="true"
        />
      ))}

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Need Help With an Online or{" "}
            <span className="text-shimmer">Digital Service?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Visit Mansoori Jan Seva Kendra or contact us today for convenient
            digital assistance.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href={telLink(PHONE_PRIMARY)} variant="accent" size="lg" icon={<Phone className="h-5 w-5" />}>
              Call Now
            </Button>
            <Button href={whatsappLink()} variant="whatsapp" size="lg" icon={<MessageCircle className="h-5 w-5" />} target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </Button>
            <Button href={directionsLink()} variant="outline-light" size="lg" icon={<MapPin className="h-5 w-5" />} target="_blank" rel="noopener noreferrer">
              Get Directions
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
