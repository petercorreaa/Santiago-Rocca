import { BookOpen, ClipboardList, PenLine, PlayCircle, Check, Quote } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { book, community } from "@/lib/content";

export const metadata = {
  title: `${book.title} — Santiago Rocca`,
  description: book.subtitle,
};

const features = [
  { icon: BookOpen,      label: "Libro digital" },
  { icon: ClipboardList, label: "Guía práctica" },
  { icon: PenLine,       label: "Ejercicios" },
  { icon: PlayCircle,    label: "Clases grabadas por capítulo" },
];

export default function LibroPage() {
  return (
    <>
      {/* ─── 1 · HERO ─── */}
      <section className="relative flex min-h-[90vh] w-full items-center overflow-hidden bg-ink text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(10,10,10,0.82), rgba(10,10,10,0.82)), url(/Libro/fondo-hero.png)",
          }}
        />
        <div aria-hidden className="pointer-events-none absolute -left-40 top-1/4 h-[50rem] w-[50rem] rounded-full bg-brand/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-accent/6 blur-3xl" />
        <div aria-hidden className="absolute left-0 top-0 h-full w-1 bg-brand" />

        <div className="relative z-10 mx-auto w-full max-w-content px-6 py-28 md:px-8">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">

            {/* Portada */}
            <Reveal delay={0.1} className="order-2 md:order-1">
              <div className="relative mx-auto w-full max-w-xs">
                <div className="absolute -bottom-4 left-4 right-0 h-full rounded-sm bg-ink-border blur-xl" />
                <div
                  aria-hidden
                  className="relative aspect-square w-full rounded-sm border border-white/10 bg-cover bg-center shadow-2xl"
                  style={{ backgroundImage: `url(${book.cover})` }}
                />
              </div>
            </Reveal>

            {/* Texto */}
            <Reveal className="order-1 md:order-2">
              <span className="inline-flex items-center gap-2 rounded-sm border border-emerald-400/40 bg-emerald-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-label text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Disponible ahora
              </span>
              <h1 className="mt-6 font-display text-[clamp(3rem,7vw,5.5rem)] font-extrabold uppercase leading-[0.9] tracking-hero">
                {book.title}
              </h1>
              <div className="mt-5 h-1 w-10 bg-brand" />
              <p className="mt-6 text-base leading-relaxed text-white/60 md:text-lg">
                {book.subtitle}
              </p>
              <a
                href={book.buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-10 inline-flex"
              >
                Comprar el libro
              </a>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ─── 2 · QUÉ INCLUYE ─── */}
      <SectionWrapper variant="light">
        <Reveal className="mb-12 max-w-2xl">
          <p className="label flex items-center gap-3 text-brand">
            <span className="inline-block h-px w-8 bg-accent" />
            Contenido
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold uppercase leading-tight tracking-tight text-ink">
            Qué incluye
          </h2>
          <div className="mt-3 h-1 w-10 bg-brand" />
          <p className="mt-5 text-base font-bold leading-relaxed text-ink md:text-lg">
            {book.synopsis}
          </p>
          <div className="mt-5 inline-flex items-center gap-3 rounded-sm border border-emerald-500/30 bg-emerald-500/5 px-5 py-3">
            <span className="label text-emerald-600">Bonus</span>
            <span className="text-sm text-ink/70">{book.bonus}</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-0 border border-ink/8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 0.07}>
              <div className="group flex flex-col gap-5 border border-ink/8 bg-paper p-8 transition-all duration-300 hover:border-accent hover:bg-ink hover:text-white">
                <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand/10 text-accent transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-lg font-bold uppercase tracking-tight">
                  {label}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* ─── 3 · A QUIÉN LE SIRVE ─── */}
      <SectionWrapper variant="dark">
        <Reveal className="mb-12 max-w-2xl">
          <p className="label flex items-center gap-3 text-accent">
            <span className="inline-block h-px w-8 bg-accent" />
            {book.audience.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold uppercase leading-tight tracking-tight">
            {book.audience.title}
          </h2>
          <div className="mt-3 h-1 w-10 bg-brand" />
        </Reveal>

        <div className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
          {book.audience.items.map((item, i) => (
            <Reveal key={item} delay={i * 0.05} className="flex items-start gap-3">
              <Check size={18} strokeWidth={2.5} className="mt-0.5 shrink-0 text-accent" />
              <span className="text-base leading-relaxed text-white/70">{item}</span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-12 max-w-3xl border-l-4 border-accent pl-7">
          <p className="text-base font-semibold leading-relaxed text-white/80 md:text-lg">
            {book.audience.outcome}
          </p>
        </Reveal>
      </SectionWrapper>

      {/* ─── 4 · LA TRANSFORMACIÓN ─── */}
      <SectionWrapper variant="light">
        <Reveal className="mb-12 max-w-2xl">
          <p className="label flex items-center gap-3 text-brand">
            <span className="inline-block h-px w-8 bg-accent" />
            {book.transformation.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold uppercase leading-tight tracking-tight text-ink">
            {book.transformation.title}
          </h2>
          <div className="mt-3 h-1 w-10 bg-brand" />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal className="border border-ink/8 bg-paper p-8">
            <p className="label text-ink/40">De</p>
            <p className="mt-4 text-base leading-relaxed text-ink/60 md:text-lg">
              {book.transformation.from}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="border border-brand/20 bg-brand/5 p-8">
            <p className="label text-brand">A</p>
            <p className="mt-4 text-base font-semibold leading-relaxed text-ink md:text-lg">
              {book.transformation.to}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mx-auto mt-12 max-w-2xl text-center">
          <p className="font-display text-xl font-bold uppercase leading-snug tracking-tight text-ink md:text-2xl">
            &ldquo;{book.transformation.quote}&rdquo;
          </p>
        </Reveal>
      </SectionWrapper>

      {/* ─── 5 · FILOSOFÍA EDITORIAL ─── */}
      <SectionWrapper variant="dark">
        <Reveal className="mx-auto max-w-4xl">
          <div className="mb-10 h-1 w-12 bg-accent" />
          <blockquote className="font-display text-[clamp(1.75rem,4vw,3rem)] font-extrabold uppercase leading-[1.1] tracking-tight text-white">
            Las personas valoran más aquello por lo que hacen una inversión.
          </blockquote>
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-white/60 md:text-xl">
            {book.philosophy}
          </p>
          <div className="mt-10 border-l-4 border-accent pl-7">
            <p className="text-base font-semibold leading-relaxed text-white/80 md:text-lg">
              El libro no busca completar una biblioteca. Busca cambiar
              comportamientos. Por eso cada capítulo viene con ejercicios,
              una guía práctica y clases grabadas que profundizan lo escrito.
            </p>
          </div>
        </Reveal>
      </SectionWrapper>

      {/* ─── 6 · COMPRAR ─── */}
      <SectionWrapper variant="light">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="label flex items-center justify-center gap-3 text-brand">
              <span className="inline-block h-px w-8 bg-accent" />
              Conseguilo ya
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold uppercase leading-tight tracking-tight text-ink">
              Empezá a leerlo hoy
            </h2>
            <div className="mx-auto mt-3 h-1 w-10 bg-brand" />
            <p className="mt-5 text-base leading-relaxed text-ink/60">
              {book.title} ya está disponible.
            </p>
            <a
              href={book.buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-10 inline-flex"
            >
              Comprar el libro
            </a>
          </Reveal>
        </div>
      </SectionWrapper>

      {/* ─── 7 · COMENTARIOS ─── */}
      <SectionWrapper variant="dark">
        <Reveal className="mb-12 max-w-2xl">
          <p className="label flex items-center gap-3 text-accent">
            <span className="inline-block h-px w-8 bg-accent" />
            Redes
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold uppercase leading-tight tracking-tight">
            Lo que dicen en mis redes
          </h2>
          <div className="mt-3 h-1 w-10 bg-brand" />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {book.testimonials.map((quote, i) => (
            <Reveal key={quote} delay={i * 0.1}>
              <div className="flex h-full flex-col gap-5 rounded-sm border border-ink-border bg-ink-surface p-8 transition-colors duration-300 hover:border-accent">
                <Quote size={22} strokeWidth={1.75} className="text-accent" />
                <p className="text-base leading-relaxed text-white/70">&ldquo;{quote}&rdquo;</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* ─── 8 · CTA FINAL ─── */}
      <section className="w-full bg-accent text-ink">
        <div className="mx-auto w-full max-w-content px-6 py-24 md:px-8 md:py-28">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold uppercase leading-none tracking-tight">
              Mientras tanto, seguí creciendo
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-base leading-relaxed text-ink/70 md:text-lg">
              El podcast y la comunidad están disponibles ahora mismo.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="/vive-para-contarlo"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-8 py-4 text-sm font-bold uppercase tracking-label text-white transition-all duration-200 hover:-translate-y-px hover:bg-ink-surface"
              >
                Escuchar el podcast
              </a>
              <a
                href={community.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-brand"
              >
                Unirme a la comunidad
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
