import { ReactNode } from "react";

export type SectionVariant = "dark" | "light";

interface SectionWrapperProps {
  /** Define fondo y colores de texto automáticamente. */
  variant?: SectionVariant;
  /** id de ancla para navegación interna. */
  id?: string;
  /** Quita el padding vertical generoso por defecto (para heros full-bleed). */
  flush?: boolean;
  className?: string;
  /** Limita el contenido al ancho de contenido y lo centra. */
  contained?: boolean;
  children: ReactNode;
}

/**
 * Envuelve cada sección full-bleed del sitio. Alterna fondo negro / blanco
 * y fija los colores de texto base sin repetir lógica en cada página.
 */
export function SectionWrapper({
  variant = "dark",
  id,
  flush = false,
  contained = true,
  className = "",
  children,
}: SectionWrapperProps) {
  const variantClasses =
    variant === "dark" ? "bg-ink text-white" : "bg-paper text-ink";

  return (
    <section
      id={id}
      data-variant={variant}
      className={`w-full ${variantClasses} ${flush ? "" : "py-24 md:py-32"} ${className}`}
    >
      {contained ? (
        <div className="mx-auto w-full max-w-content px-6 md:px-8">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
