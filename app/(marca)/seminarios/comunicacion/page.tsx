import { PlayCircle, Library, Wrench, Users, Infinity as InfinityIcon, Check, X } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { comunicacionSeminar as seminar, whatsappContact } from "@/lib/content";

export const metadata = {
  title: "Comunicación — Seminarios — Santiago Rocca",
  description: seminar.hero.subtitle,
};

const includeIcons = [PlayCircle, Library, Wrench, Users, InfinityIcon];

export default function SeminarioComunicacionPage() {
  return (
    <>
      {/* ─── 1 · HERO ─── */}
      <section className="relative flex min-h-[70vh] w-full items-center overflow-hidden bg-ink text-white">
        <div aria-hidden className="pointer-events-none absolute -left-40 top-1/4 h-[50rem] w-[50rem] rounded-full bg-brand/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-accent/6 blur-3xl" />
        <div aria-hidden className="absolute left-0 top-0 h-full w-1 bg-brand" />

        <div className="relative z-10 mx-auto w-full max-w-content px-6 py-28 md:px-8">
          <Reveal className="max-w-3xl">
            <p className="label flex items-center gap-3 text-accent">
              <span className="inline-block h-px w-8 bg-accent" />
              Seminarios · Comunicación
            </p>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold uppercase leading-[0.95] tracking-hero">
              {seminar.hero.title}
            </h1>
            <div className="mt-6 h-1 w-20 bg-accent" />
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
              {seminar.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6">
              {seminar.hero.support.map((item, i) => (
                <span key={item} className="flex items-center gap-6 text-xs font-semibold uppercase tracking-label text-white/50">
                  {i > 0 && <span className="hidden h-1 w-1 rounded-full bg-accent/60 sm:inline-block" />}
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── PROMESA ─── */}
      <section className="w-full bg-accent text-ink">
        <div className="mx-auto w-full max-w-content px-6 py-20 md:px-8 md:py-28">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="label text-ink/60">{seminar.promise.eyebrow}</p>
            <h2 className="mt-5 font-display text-[clamp(3rem,8vw,6.5rem)] font-extrabold uppercase leading-[0.9] tracking-hero">
              {seminar.promise.title}
            </h2>
            <div className="mx-auto mt-6 h-1 w-16 bg-ink" />
            <p className="mx-auto mt-8 max-w-2xl text-lg font-semibold leading-relaxed text-ink/80 md:text-2xl">
              {seminar.promise.text}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── 2 · POR QUÉ LA COMUNICACIÓN IMPORTA ─── */}
      <SectionWrapper variant="light">
        <Reveal className="mx-auto max-w-4xl">
          <p className="label flex items-center gap-3 text-brand">
            <span className="inline-block h-px w-8 bg-accent" />
            {seminar.why.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold uppercase leading-tight tracking-tight text-ink">
            {seminar.why.title}
          </h2>
          <div className="mt-3 h-1 w-10 bg-brand" />

          <blockquote className="mt-10 border-l-4 border-brand pl-7">
            <p className="font-display text-2xl font-extrabold uppercase leading-tight tracking-tight text-ink md:text-3xl">
              &ldquo;{seminar.why.quote}&rdquo;
            </p>
            <footer className="mt-4 text-sm text-ink/50">
              — {seminar.why.quoteAuthor}, <cite className="italic">{seminar.why.quoteSource}</cite>
            </footer>
          </blockquote>

          <p className="mt-10 text-base leading-relaxed text-ink/70 md:text-lg">
            {seminar.why.paragraph}
          </p>
        </Reveal>
      </SectionWrapper>

      {/* ─── 3 · QUÉ INCLUYE ─── */}
      <SectionWrapper variant="dark">
        <Reveal className="mb-12 max-w-2xl">
          <p className="label flex items-center gap-3 text-accent">
            <span className="inline-block h-px w-8 bg-accent" />
            {seminar.includes.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold uppercase leading-tight tracking-tight">
            {seminar.includes.title}
          </h2>
          <div className="mt-3 h-1 w-10 bg-brand" />
          <p className="mt-5 text-base leading-relaxed text-white/60 md:text-lg">
            {seminar.includes.intro}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {seminar.includes.items.map((item, i) => {
            const Icon = includeIcons[i] ?? PlayCircle;
            const isLast = i === seminar.includes.items.length - 1;
            return (
              <Reveal key={item.title} delay={i * 0.07} className={isLast ? "md:col-span-2" : ""}>
                <div
                  className={`flex h-full flex-col gap-5 rounded-sm border p-8 transition-colors duration-300 hover:border-accent md:p-10 ${
                    isLast ? "border-accent/50 bg-accent/5" : "border-ink-border bg-ink-surface"
                  }`}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand/15 text-accent">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70 md:text-base">{item.text}</p>
                  {item.bullets && (
                    <ul className="flex flex-col gap-3">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-sm leading-relaxed text-white/70 md:text-base">
                          <Check size={18} strokeWidth={2.5} className="mt-0.5 shrink-0 text-accent" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15} className="mt-10">
          <a
            href={seminar.includes.programLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-dark"
          >
            Ver el programa completo acá
          </a>
        </Reveal>
      </SectionWrapper>

      {/* ─── 4 · INVERSIÓN ─── */}
      <SectionWrapper variant="light">
        <Reveal className="mb-12 max-w-2xl">
          <p className="label flex items-center gap-3 text-brand">
            <span className="inline-block h-px w-8 bg-accent" />
            {seminar.pricing.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold uppercase leading-tight tracking-tight text-ink">
            {seminar.pricing.title}
          </h2>
          <div className="mt-3 h-1 w-10 bg-brand" />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {seminar.pricing.plans.map((plan, planIndex) => (
            <Reveal key={plan.name} delay={planIndex * 0.1}>
              <div
                className={`flex h-full flex-col rounded-sm border p-8 ${
                  plan.highlight ? "border-brand bg-brand/[0.03]" : "border-ink/10"
                }`}
              >
                {plan.highlight && (
                  <span className="mb-5 inline-flex w-fit items-center rounded-sm bg-brand px-3 py-1 text-xs font-bold uppercase tracking-label text-white">
                    Completo
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-ink">
                  {plan.name}
                </h3>
                <p className="mt-3 font-display text-4xl font-extrabold text-ink">
                  {plan.price}
                </p>

                <ul className="mt-8 flex flex-col gap-4">
                  {seminar.pricing.features.map((feature, i) => {
                    const included = plan.included[i];
                    return (
                      <li
                        key={feature}
                        className={`flex items-center gap-3 text-sm md:text-base ${
                          included ? "text-ink/80" : "text-ink/35 line-through"
                        }`}
                      >
                        {included ? (
                          <Check size={18} strokeWidth={2.5} className="shrink-0 text-brand" />
                        ) : (
                          <X size={18} strokeWidth={2.5} className="shrink-0 text-ink/25" />
                        )}
                        {feature}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mx-auto mt-10 max-w-xl">
          <a
            href={`https://wa.me/${whatsappContact.phone}?text=${encodeURIComponent(seminar.pricing.cta.message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 rounded-sm border border-[#25D366]/40 bg-[#25D366]/5 px-8 py-10 text-center transition-colors duration-300 hover:border-[#25D366]"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]">
              <svg viewBox="0 0 32 32" width="26" height="26" fill="white" aria-hidden="true">
                <path d="M16.004 2.667c-7.363 0-13.333 5.97-13.333 13.333 0 2.353.615 4.56 1.69 6.475L2.667 29.333l7.03-1.844a13.27 13.27 0 0 0 6.307 1.607h.006c7.362 0 13.333-5.97 13.333-13.333S23.366 2.667 16.004 2.667zm0 24.397a11.04 11.04 0 0 1-5.63-1.54l-.404-.24-4.174 1.095 1.114-4.07-.263-.418a11.03 11.03 0 0 1-1.69-5.891c0-6.098 4.963-11.06 11.05-11.06 2.953 0 5.727 1.15 7.815 3.24a10.986 10.986 0 0 1 3.238 7.822c0 6.098-4.963 11.06-11.056 11.06zm6.062-8.283c-.332-.166-1.965-.97-2.27-1.08-.305-.111-.526-.166-.748.166-.221.332-.858 1.08-1.052 1.302-.194.222-.388.25-.72.083-.332-.166-1.401-.516-2.669-1.646-.987-.88-1.654-1.967-1.848-2.299-.194-.332-.02-.512.146-.677.15-.15.332-.388.498-.582.166-.194.221-.332.332-.554.111-.222.055-.416-.028-.582-.083-.166-.748-1.804-1.025-2.47-.27-.649-.545-.561-.748-.572-.194-.01-.416-.012-.638-.012a1.225 1.225 0 0 0-.887.416c-.305.332-1.163 1.137-1.163 2.773s1.191 3.218 1.357 3.44c.166.222 2.343 3.577 5.678 5.015.793.343 1.412.548 1.894.7.796.253 1.52.217 2.093.132.638-.095 1.965-.803 2.242-1.58.277-.776.277-1.44.194-1.58-.083-.14-.305-.222-.638-.388z" />
              </svg>
            </span>
            <p className="font-display text-xl font-bold uppercase tracking-tight text-ink">
              {seminar.pricing.cta.title}
            </p>
            <p className="text-sm text-ink/60">{seminar.pricing.cta.text}</p>
          </a>
        </Reveal>
      </SectionWrapper>

      {/* ─── 5 · CIERRE ─── */}
      <SectionWrapper variant="dark">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-8 h-1 w-12 bg-accent" />
          <p className="text-lg leading-relaxed text-white/70 md:text-xl">
            {seminar.closing}
          </p>
        </Reveal>
      </SectionWrapper>
    </>
  );
}
