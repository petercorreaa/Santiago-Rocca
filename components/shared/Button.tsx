import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "brand";
type Surface = "dark" | "light";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  surface?: Surface;
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  surface = "dark",
  className = "",
}: ButtonProps) {
  const base =
    variant === "primary"
      ? "btn-primary"
      : variant === "brand"
        ? "btn-ghost-brand"
        : surface === "dark"
          ? "btn-secondary-dark"
          : "btn-secondary-light";

  return (
    <Link href={href} className={`${base} ${className}`}>
      {children}
    </Link>
  );
}
