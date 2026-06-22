"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/lib/content";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-ink-border bg-ink/40 backdrop-blur-md">
      <nav className="mx-auto flex h-20 w-full max-w-content items-center justify-between px-6 md:px-10">
        {/* Logo — tipográfico bordo */}
        <Link
          href="/"
          aria-label={site.name}
          className="font-display text-3xl font-extrabold leading-none tracking-tight text-brand transition-colors hover:text-brand-hover"
        >
          {site.logo}
        </Link>

        {/* Links desktop */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors hover:text-accent ${
                  isActive(link.href) ? "text-accent" : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Toggle móvil */}
        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 p-2 lg:hidden"
        >
          <span className={`h-0.5 w-6 bg-white transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Menú móvil */}
      {open && (
        <ul className="flex flex-col gap-0 border-t border-ink-border bg-ink-surface px-6 py-4 lg:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block border-b border-ink-border py-4 text-base font-semibold transition-colors hover:text-accent ${
                  isActive(link.href) ? "text-accent" : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
