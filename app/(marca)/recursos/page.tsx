import Link from "next/link";
import {
  BookMarked,
  Mic,
  MessageCircle,
  Megaphone,
  Brain,
  Zap,
  FlaskConical,
  Heart,
  type LucideIcon,
} from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { resources } from "@/lib/content";

export const metadata = {
  title: "Recursos — Santiago Rocca",
  description:
    "Biblioteca de conocimiento curada por Santiago Rocca: libros, podcasts, desarrollo personal, productividad y más.",
};

// Slugs y metadatos por categoría (orden igual a resources.categories)
const categoryMeta: Record<
  string,
  { icon: LucideIcon; description: string; slug: string }
> = {
  "Libros": {
    icon: BookMarked,
    description: "Los libros que más impacto tuvieron en el camino de Santiago.",
    slug: "libros",
  },
  "Podcasts": {
    icon: Mic,
    description: "Programas que vale la pena escuchar mientras vivís tu día.",
    slug: "podcasts",
  },
  "Comunicación": {
    icon: MessageCircle,
    description: "Herramientas y recursos para expresarte mejor.",
    slug: "comunicacion",
  },
  "Marketing": {
    icon: Megaphone,
    description: "Lo esencial para construir una marca con propósito.",
    slug: "marketing",
  },
  "Desarrollo Personal": {
    icon: Brain,
    description: "La columna vertebral de todo lo que enseña Santiago.",
    slug: "desarrollo-personal",
  },
  "Productividad": {
    icon: Zap,
    description: "Métodos y sistemas para lograr más con menos fricción.",
    slug: "productividad",
  },
  "Psicología": {
    icon: FlaskConical,
    description: "Entender cómo funciona la mente para usarla mejor.",
    slug: "psicologia",
  },
  "Historias Inspiradoras": {
    icon: Heart,
    description: "Historias reales que demuestran que el cambio es posible.",
    slug: "historias-inspiradoras",
  },
};

export default function RecursosPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative flex min-h-[70vh] w-full items-end overflow-hidden bg-ink text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-1/3 h-[45rem] w-[45rem] rounded-full bg-brand/10 blur-3xl"
        />
        <div aria-hidden className="absolute left-0 top-0 h-full w-1 bg-brand" />

        <div className="relative z-10 mx-auto w-full max-w-content px-6 pb-20 pt-40 md:px-8">
          <Reveal>
            <p className="label flex items-center gap-3 text-accent">
              <span className="inline-block h-px w-8 bg-accent" />
              Conocimiento curado
            </p>
            <h1 className="mt-4 font-display text-[clamp(3rem,9vw,7rem)] font-extrabold uppercase leading-[0.9] tracking-hero">
              Biblioteca de conocimiento
            </h1>
            <div className="mt-6 h-1 w-20 bg-accent" />
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
              Todo lo que Santiago estudia, aplica y recomienda, organizado por
              categoría. Un punto de partida para quien quiere seguir creciendo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── GRID DE CATEGORÍAS ─── */}
      <SectionWrapper variant="light">
        <Reveal className="mb-12 max-w-2xl">
          <p className="label flex items-center gap-3 text-brand">
            <span className="inline-block h-px w-8 bg-accent" />
            Categorías
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold uppercase leading-tight tracking-tight text-ink">
            Explorá por tema
          </h2>
          <div className="mt-3 h-1 w-10 bg-brand" />
          <p className="mt-5 text-base leading-relaxed text-ink/60 md:text-lg">
            Cada categoría reúne lo mejor de lo que Santiago encontró en años
            de estudio y práctica.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-0 border border-ink/8 sm:grid-cols-2 lg:grid-cols-4">
          {resources.categories.map((cat, i) => {
            const meta = categoryMeta[cat];
            if (!meta) return null;
            const { icon: Icon, description, slug } = meta;
            return (
              <Reveal key={cat} delay={(i % 4) * 0.07}>
                <Link
                  href={`/recursos/${slug}`}
                  className="group flex flex-col gap-5 border border-ink/8 bg-paper p-8 transition-all duration-300 hover:scale-[1.01] hover:border-accent hover:bg-ink hover:text-white md:p-10"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand/10 text-accent transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight">
                    {cat}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/60 transition-colors group-hover:text-white/50">
                    {description}
                  </p>
                  <span className="mt-auto text-xs font-semibold uppercase tracking-label text-accent transition-colors group-hover:text-accent-hover">
                    Ver recursos →
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ─── CTA FINAL ─── */}
      <SectionWrapper variant="dark">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-block h-1 w-12 bg-accent" />
          <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold uppercase leading-none tracking-tight">
            ¿Falta algo?
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-base leading-relaxed text-white/60 md:text-lg">
            Si tenés una recomendación, un libro o un recurso que cambió tu
            vida, escribinos. La biblioteca crece con la comunidad.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contacto" className="btn-primary">
              Hacer una sugerencia
            </Link>
            <Link href="/comunidad" className="btn-secondary-dark">
              Unirme a la comunidad
            </Link>
          </div>
        </Reveal>
      </SectionWrapper>
    </>
  );
}
