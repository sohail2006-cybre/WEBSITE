import {
  Phone,
  MapPin,
  MessageCircle,
  Wifi,
  Printer,
  FileText,
  ShieldCheck,
  ScanLine,
  MonitorSmartphone,
} from "lucide-react";
import { Button } from "./Button";
import {
  telLink,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  whatsappLink,
  directionsLink,
} from "../lib/site";

const floatingIcons = [
  { icon: Wifi, label: "Internet", cls: "top-2 left-0", delay: "0s" },
  { icon: Printer, label: "Printing", cls: "top-6 right-0", delay: "1.2s" },
  { icon: FileText, label: "Forms", cls: "bottom-8 left-2", delay: "2.1s" },
  { icon: ScanLine, label: "Scanning", cls: "bottom-2 right-6", delay: "0.6s" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy-950 pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
      <div
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-royal-500/30 blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-cyan-accent/20 blur-3xl animate-blob"
        style={{ animationDelay: "3s" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl animate-blob"
        style={{ animationDelay: "6s" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <div
            className="animate-[fade-up_0.7s_ease-out] inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-medium text-cyan-100 backdrop-blur"
            style={{ animationDelay: "0.05s" }}
          >
            <ShieldCheck className="h-4 w-4 text-cyan-accent" />
            Trusted Digital Service Center
          </div>

          <h1
            className="mt-6 font-heading text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
            style={{ animation: "fade-up 0.7s ease-out 0.12s both" }}
          >
            Your Trusted{" "}
            <span className="text-shimmer">Digital Service</span> &amp; Internet
            Center
          </h1>

          <p
            className="mt-6 text-lg font-medium text-cyan-accent"
            style={{ animation: "fade-up 0.7s ease-out 0.2s both" }}
          >
            Mansoori Jan Seva Kendra
          </p>

          <p
            className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0"
            style={{ animation: "fade-up 0.7s ease-out 0.28s both" }}
          >
            Fast, Reliable and Convenient Internet, Online, Printing and Digital
            Services in Vrishangpura.
          </p>

          {/* CTAs */}
          <div
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            style={{ animation: "fade-up 0.7s ease-out 0.36s both" }}
          >
            <Button href={telLink(PHONE_PRIMARY)} variant="accent" size="lg" icon={<Phone className="h-5 w-5" />}>
              Call Now
            </Button>
            <Button href={directionsLink()} variant="outline-light" size="lg" icon={<MapPin className="h-5 w-5" />} target="_blank" rel="noopener noreferrer">
              Get Directions
            </Button>
            <Button href={whatsappLink()} variant="whatsapp" size="lg" icon={<MessageCircle className="h-5 w-5" />} target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </Button>
          </div>

          {/* Phone numbers */}
          <div
            className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-300 lg:justify-start"
            style={{ animation: "fade-up 0.7s ease-out 0.44s both" }}
          >
            <a href={telLink(PHONE_PRIMARY)} className="inline-flex items-center gap-2 transition-colors hover:text-cyan-accent">
              <Phone className="h-4 w-4 text-amber-400" />
              {PHONE_PRIMARY}
            </a>
            <a href={telLink(PHONE_SECONDARY)} className="inline-flex items-center gap-2 transition-colors hover:text-cyan-accent">
              <Phone className="h-4 w-4 text-amber-400" />
              {PHONE_SECONDARY}
            </a>
          </div>
        </div>

        {/* Right: illustration */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="relative">
            {/* Glow behind */}
            <div
              className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-accent/30 to-royal-500/30 blur-2xl"
              aria-hidden="true"
            />

            {/* Main monitor card */}
            <div className="relative rounded-[2rem] border border-white/15 bg-white/10 p-5 backdrop-blur-xl shadow-2xl sm:p-7">
              <div className="rounded-2xl bg-navy-900/80 p-4 ring-1 ring-white/10 shadow-inner">
                {/* Window dots */}
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="mt-5 flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-royal-500 to-cyan-accent text-white shadow-lg animate-float">
                    <MonitorSmartphone className="h-9 w-9" />
                  </div>
                  <div className="mt-4 h-3 w-3/4 rounded-full bg-white/20" />
                  <div className="mt-2 h-3 w-1/2 rounded-full bg-white/10" />
                  <div className="mt-4 flex gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-accent animate-pulse-ring" />
                    <span className="h-2 w-2 rounded-full bg-cyan-accent animate-pulse-ring" style={{ animationDelay: "0.6s" }} />
                    <span className="h-2 w-2 rounded-full bg-cyan-accent animate-pulse-ring" style={{ animationDelay: "1.2s" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating icon chips */}
            {floatingIcons.map(({ icon: Icon, label, cls, delay }) => (
              <div
                key={label}
                className={`absolute ${cls} flex items-center gap-2 rounded-full border border-white/20 bg-white/90 px-3 py-2 text-xs font-semibold text-navy-900 shadow-xl backdrop-blur animate-float`}
                style={{ animationDelay: delay }}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-royal-500 to-cyan-accent text-white">
                  <Icon className="h-4 w-4" />
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* small fade-up keyframe referenced inline (defined globally too) */
