import type { ReactNode } from "react";
import { cn } from "../utils/cn";

export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-cyan-200/60 bg-cyan-50/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy-700 backdrop-blur",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-accent animate-pulse" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      {eyebrow && (
        <Pill
          className={cn(
            dark && "border-cyan-400/30 bg-cyan-400/10 text-cyan-100"
          )}
        >
          {eyebrow}
        </Pill>
      )}
      <h2
        className={cn(
          "mt-5 text-3xl font-bold leading-tight sm:text-4xl md:text-[2.6rem]",
          dark ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
