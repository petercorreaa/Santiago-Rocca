import Link from "next/link";
import { navLinks, site, social } from "@/lib/content";

const socials = [social.instagram, social.youtube, social.spotify];

export function Footer() {
  return (
    <footer className="w-full border-t border-ink-border bg-ink text-white">
      <div className="mx-auto flex w-full max-w-content flex-col gap-12 px-6 py-16 md:px-8">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          {/* Marca */}
          <div className="max-w-xs">
            <Link
              href="/"
              className="font-display text-5xl font-extrabold leading-none tracking-tight text-brand"
            >
              {site.logo}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted">{site.tagline}</p>
            {/* Línea bordo como detalle de marca */}
            <div className="mt-6 h-1 w-8 bg-brand" />
          </div>

          {/* Navegación */}
          <nav aria-label="Pie de página">
            <p className="label mb-5 text-accent">Páginas</p>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Redes */}
          <div>
            <p className="label mb-5 text-accent">Seguime</p>
            <ul className="flex flex-col gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separador acento */}
        <div className="h-px w-full bg-ink-border" />

        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
