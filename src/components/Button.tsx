import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-gold text-ink-950 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20",
    secondary:
      "border border-ink-600 bg-transparent text-ink-100 hover:border-gold hover:text-gold",
    ghost: "text-ink-300 hover:text-gold",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
