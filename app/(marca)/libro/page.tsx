import { BookOpen, Headphones, ClipboardList, PenLine, PlayCircle } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { WaitlistForm } from "@/components/sections/WaitlistForm";
import { book } from "@/lib/content";

export const metadata = {
  title: "Libro — Santiago Rocca",
  description: "El libro de Santiago Rocca. Próximamente.",
};

const features = [
  { icon: BookOpen,      label: "Libro digital" },
  { icon: Headphones,    label: "Audiolibro" },
  { icon: ClipboardList, label: "Guía práctica" },
  { icon: PenLine,       label: "Ejercicios" },
  { icon: PlayCircle,    label: "Clases grabadas por capítulo" },
];

export default function LibroPage() {
  return (
    <>
      {/* ─── 1 · HERO ─── */}
      <section className="relative flex min-h-[90vh] w-full items-center overflow-hidden bg-ink text-white">
        <div aria-hidden className="pointer-events-none absolute -left-40 top-1/4 h-[50rem] w-[50rem] rounded-full bg-brand/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-accent/6 blur-3xl" />
        <div aria-hidden className="absolute left-0 top-0 h-full w-1 bg-brand" />

        <div className="relative z-10 mx-auto w-full max-w-content px-6 py-28 md:px-8">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">

            {/* Mockup libro */}
            <Reveal delay={0.1} className="order-2 md:order-1">
              <div className="relative mx-auto w-full max-w-xs">
                <div className="absolute -bottom-4 left-4 right-0 h-full rounded-sm bg-ink-border blur-xl" />
                <div className="relative rounded-sm border border-white/10 bg-gradient-to-br from-brand via-ink-surface to-ink px-10 py-16 shadow-2xl">
                  <div className="absolute left-0 top-0 h-full w-3 rounded-l-sm bg-brand/60" />
                  <p className="label mb-6 text-accent">Santiago Rocca</p>
                  <p className="font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-white">
                    [TÍTULO DEL LIBRO]
                  </p>
                  <div className="mt-6 h-px bg-white/15" />
                  <p className="mt-4 text-xs leading-relaxed text-white/40">
                    Subtítulo del libro — próximamente
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Texto */}
            <Reveal className="order-1 md:order-2">
              <span className="inline-flex items-center gap-2 rounded-sm border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-label text-accent">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                Próximamente
              </span>
              <h1 className="mt-6 font-display text-[clamp(3rem,7vw,5.5rem)] font-extrabold uppercase leading-[0.9] tracking-hero">
                El libro
              </h1>
              <div className="mt-5 h-1 w-10 bg-brand" />
              <p className="mt-6 text-base leading-relaxed text-white/60 md:text-lg">
                Un libro pensado para quien quiere pasar del conocimiento a la
                acción. No solo leer — aplicar, practicar y transformar.
              </p>
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
        </Reveal>

        <div className="grid grid-cols-1 gap-0 border border-ink/8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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

      {/* ─── 3 · FILOSOFÍA EDITORIAL ─── */}
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

      {/* ─── 4 · WAITLIST ─── */}
      <SectionWrapper variant="light">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="label flex items-center gap-3 text-brand">
              <span className="inline-block h-px w-8 bg-accent" />
              Waitlist
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold uppercase leading-tight tracking-tight text-ink">
              Avisame cuando esté disponible
            </h2>
            <div className="mt-3 h-1 w-10 bg-brand" />
            <p className="mt-5 text-base leading-relaxed text-ink/60">
              Dejá tu email y te notificamos en cuanto el libro esté listo.
              Sin spam — solo el aviso.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <WaitlistForm />
          </Reveal>
        </div>
      </SectionWrapper>

      {/* ─── 5 · CTA FINAL ─── */}
      <section className="w-full bg-accent text-ink">
        <div className="mx-auto w-full max-w-content px-6 py-24 md:px-8 md:py-28">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold uppercase leading-none tracking-tight">
              Mientras tanto, seguí creciendo
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-base leading-relaxed text-ink/70 md:text-lg">
              El podcast, la comunidad y los recursos están disponibles ahora mismo.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="/vive-para-contarlo"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-8 py-4 text-sm font-bold uppercase tracking-label text-white transition-all duration-200 hover:-translate-y-px hover:bg-ink-surface"
              >
                Escuchar el podcast
              </a>
              <a href="/comunidad" className="btn-ghost-brand">
                Unirme a la comunidad
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
