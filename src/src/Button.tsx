import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

type Variant = "primary" | "secondary" | "accent" | "ghost" | "whatsapp" | "outline-light";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
}

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-300 disabled:opacity-60 disabled:pointer-events-none group";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-navy-700 via-royal-500 to-navy-600 text-white shadow-lg shadow-navy-500/25 hover:shadow-xl hover:shadow-cyan-accent/30 hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border border-slate-200 bg-white/70 text-navy-800 backdrop-blur-sm hover:border-cyan-accent/50 hover:bg-white hover:text-navy-900 hover:-translate-y-0.5 active:translate-y-0",
  "outline-light":
    "border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:border-cyan-accent/70 hover:bg-white/15 hover:-translate-y-0.5 active:translate-y-0",
  accent:
    "bg-gradient-to-r from-amber-400 to-amber-500 text-navy-950 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-400/40 hover:-translate-y-0.5 active:translate-y-0",
  whatsapp:
    "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "text-navy-800 hover:bg-navy-50 hover:text-navy-900",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: ButtonProps): React.JSX.Element;
export function Button(props: LinkProps): React.JSX.Element;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  icon,
  ...rest
}: BaseProps &
  (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>)) {
  const cls = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  );

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={cls} {...anchorRest}>
        {content}
      </a>
    );
  }

  return (
    <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
