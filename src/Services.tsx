import {
  Wifi,
  FileText,
  Landmark,
  ClipboardList,
  BookOpenCheck,
  Printer,
  Palette,
  Copy,
  ScanLine,
  UploadCloud,
  Briefcase,
  Camera,
  Ticket,
  FolderCog,
  MonitorCog,
  LifeBuoy,
} from "lucide-react";
import { SectionHeading } from "./ui";
import { Reveal } from "../hooks/useReveal";

const services = [
  { icon: Wifi, title: "Internet Browsing", desc: "Fast and reliable internet access for browsing and online work." },
  { icon: FileText, title: "Online Form Filling", desc: "Accurate help with filling online forms the right way." },
  { icon: Landmark, title: "Government Online Services", desc: "Assistance with common government-related online services." },
  { icon: ClipboardList, title: "Online Applications", desc: "Support with submitting applications through online portals." },
  { icon: BookOpenCheck, title: "Exam Form Services", desc: "Help with exam form submissions and related requirements." },
  { icon: Printer, title: "Printing", desc: "Clean, high-quality black & white printing for documents." },
  { icon: Palette, title: "Colour Printing", desc: "Vivid colour printing for photos, forms and presentations." },
  { icon: Copy, title: "Photocopy", desc: "Quick and clear photocopies of your important documents." },
  { icon: ScanLine, title: "Scanning", desc: "Crisp document scanning in standard digital formats." },
  { icon: UploadCloud, title: "Document Upload", desc: "Convenient upload of documents to required portals." },
  { icon: Briefcase, title: "Resume / CV Services", desc: "Help preparing and formatting professional resumes and CVs." },
  { icon: Camera, title: "Passport Photo Services", desc: "Passport-size photographs taken and printed on the spot." },
  { icon: Ticket, title: "Online Ticket Booking", desc: "Assistance with booking tickets online for travel and events." },
  { icon: FolderCog, title: "Digital Documentation", desc: "Organising and preparing documents in digital format." },
  { icon: MonitorCog, title: "Computer Services", desc: "Basic computer assistance for your digital tasks." },
  { icon: LifeBuoy, title: "Other Online Assistance", desc: "Friendly support for a wide range of online needs." },
];

const accents = [
  "from-navy-700 to-royal-500",
  "from-royal-500 to-cyan-accent",
  "from-cyan-500 to-royal-500",
  "from-navy-600 to-cyan-accent",
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Digital Services"
            title="Everything you need for your everyday online and digital requirements."
            subtitle="From browsing to printing, form filling to document support — we provide complete digital assistance under one roof."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 80}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-200 hover:shadow-2xl hover:shadow-cyan-500/10">
                {/* hover glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-100/0 blur-2xl transition-all duration-500 group-hover:bg-cyan-200/50" aria-hidden="true" />

                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${accents[i % accents.length]} p-3 text-white shadow-md shadow-navy-500/20 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
                >
                  <s.icon className="h-6 w-6" />
                </span>

                <h3 className="mt-5 font-heading text-lg font-bold text-navy-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {s.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
