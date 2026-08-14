import type { ReactNode } from "react";

export function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="group relative px-3 py-2 text-sm font-semibold text-navy-800 transition-colors hover:text-royal-600"
    >
      {children}
      <span
        className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-royal-500 to-cyan-accent transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden="true"
      />
    </a>
  );
}
