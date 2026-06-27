import Link from "next/link";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { resources } from "@/lib/content";

// Convierte "Desarrollo Personal" -> "desarrollo-personal"
function toSlug(name: string): string {
  const accents: Record<string, string> = {
    á: "a", é: "e", í: "i", ó: "o", ú: "u", ñ: "n", ü: "u",
  };
  return name
    .toLowerCase()
    .replace(/[áéíóúñü]/g, (c) => accents[c] ?? c)
    .replace(/\s+/g, "-");
}

// Convierte el slug de la URL en un título legible
function prettify(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// Prerendera las categorías reales; el resto se sirve on-demand sin 404.
export function generateStaticParams() {
  return resources.categories.map((cat) => ({ slug: toSlug(cat) }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  // Busca el nombre original de la categoría a partir del slug
  const match = resources.categories.find((cat) => toSlug(cat) === params.slug);
  const title = match ?? prettify(params.slug);
  return { title: `${title} — Recursos — Santiago Rocca` };
}

export default function RecursoCategoriaPage({
  params,
}: {
  params: { slug: string };
}) {
  const match = resources.categories.find((cat) => toSlug(cat) === params.slug);
  const title = match ?? prettify(params.slug);

  return (
    <SectionWrapper variant="dark" className="flex min-h-[80vh] items-center">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="label flex items-center justify-center gap-3 text-accent">
          <span className="inline-block h-px w-8 bg-accent" />
          Recursos
          <span className="inline-block h-px w-8 bg-accent" />
        </p>

        <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold uppercase leading-[0.95] tracking-hero">
          {title}
        </h1>

        <span className="mt-6 inline-flex items-center gap-2 rounded-sm border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-label text-accent">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Próximamente
        </span>

        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
          Estamos preparando una selección de los mejores recursos de{" "}
          <span className="text-white">{title.toLowerCase()}</span>. Muy pronto
          vas a encontrar acá libros, links y materiales recomendados por Santiago.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/recursos" className="btn-primary">
            Ver todas las categorías
          </Link>
          <Link href="/comunidad" className="btn-secondary-dark">
            Unirme a la comunidad
          </Link>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
