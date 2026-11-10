import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { marcaPersonal as mp, comunicacionSeminar } from "@/lib/content";

export const metadata = {
  title: "Diferenciá tu marca personal — Santiago Rocca",
  description: mp.hero.subtitle,
};

function SectionHeading({
  eyebrow,
  title,
  tone,
  intro,
}: {
  eyebrow: string;
  title: string;
  tone: "dark" | "light";
  intro?: string;
}) {
  const light = tone === "light";
  return (
    <Reveal className="mb-12 max-w-3xl">
      <p className={`label flex items-center gap-3 ${light ? "text-brand" : "text-accent"}`}>
        <span className="inline-block h-px w-8 bg-accent" />
        {eyebrow}
      </p>
      <h2
        className={`mt-5 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold uppercase leading-tight tracking-tight ${
          light ? "text-ink" : ""
        }`}
      >
        {title}
      </h2>
      <div className="mt-3 h-1 w-10 bg-brand" />
      {intro && (
        <p className={`mt-5 text-base leading-relaxed md:text-lg ${light ? "text-ink/70" : "text-white/60"}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}

function ApplyCta({ label }: { label: string }) {
  return (
    <a href={mp.applyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
      {label}
      <ArrowRight size={18} strokeWidth={2} />
    </a>
  );
}

export default function MarcaPersonalPage() {
  return (
    <>
      {/* ─── 1 · HERO ─── */}
      <section className="relative flex min-h-[64vh] w-full flex-col overflow-hidden bg-ink text-white md:flex-row md:items-center">
        {/* Foto: en celular va arriba, en compu de fondo a la derecha */}
        <div
          aria-hidden
          className="relative h-80 w-full bg-cover bg-[55%_30%] bg-no-repeat md:absolute md:inset-0 md:h-auto md:bg-[length:130%_auto] md:bg-[position:0%_30%]"
          style={{ backgroundImage: "url(/Marca-Personal/portada.jpg)" }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-transparent via-transparent to-ink md:inset-0 md:h-auto md:bg-gradient-to-r md:from-ink/90 md:via-ink/70 md:via-40% md:to-ink/5"
        />
        <div aria-hidden className="pointer-events-none absolute -left-40 top-1/4 h-[50rem] w-[50rem] rounded-full bg-brand/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-accent/6 blur-3xl" />
        <div aria-hidden className="absolute left-0 top-0 h-full w-1 bg-brand" />

        <div className="relative z-10 mx-auto w-full max-w-content px-6 pb-16 pt-4 md:px-8 md:pb-20 md:pt-36">
          <Reveal className="max-w-2xl">
            <p className="label flex items-center gap-3 text-accent">
              <span className="inline-block h-px w-8 bg-accent" />
              {mp.hero.eyebrow}
            </p>
            <h1 className="mt-5 flex flex-col gap-2 font-display text-[clamp(2.25rem,5vw,4.25rem)] font-extrabold uppercase leading-[0.95] tracking-hero md:gap-3">
              <span className="block">{mp.hero.headline[0]}</span>
              <span className="block text-accent">{mp.hero.headline[1]}</span>
            </h1>
            <div className="mt-6 h-1 w-20 bg-accent" />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
              {mp.hero.subtitle}
            </p>
            <div className="mt-8">
              <ApplyCta label={mp.hero.cta} />
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6">
              {mp.hero.support.map((item, i) => (
                <span key={item} className="flex items-center gap-6 text-xs font-semibold uppercase tracking-label text-white/50">
                  {i > 0 && <span className="hidden h-1 w-1 rounded-full bg-accent/60 sm:inline-block" />}
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── 2 · EL PROBLEMA ─── */}
      <SectionWrapper variant="light">
        <SectionHeading eyebrow={mp.problem.eyebrow} title={mp.problem.title} tone="light" />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {mp.problem.pains.map((pain, i) => (
            <Reveal key={pain.title} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-4 rounded-sm border border-ink/10 bg-paper p-8">
                <span className="font-display text-5xl font-extrabold leading-none text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight">{pain.title}</h3>
                <p className="text-sm leading-relaxed text-ink/60 md:text-base">{pain.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-10">
          <p className="max-w-3xl border-l-4 border-brand pl-6 font-display text-2xl font-extrabold uppercase leading-tight tracking-tight text-ink md:text-3xl">
            {mp.problem.note}
          </p>
        </Reveal>
        {/* Cuadro amarillo de lo importante */}
        <Reveal delay={0.15} className="mt-12">
          <div className="max-w-3xl border-2 border-ink bg-accent p-7 text-ink shadow-[8px_8px_0_0_rgba(10,10,10,0.9)] md:p-9">
            <p className="label text-ink/70">{mp.problem.callout.label}</p>
            <p className="mt-3 text-lg font-medium leading-snug md:text-xl">{mp.problem.callout.text}</p>
            <p className="mt-3 font-display text-2xl font-extrabold uppercase leading-tight tracking-tight md:text-3xl">
              {mp.problem.callout.strong}
            </p>
          </div>
        </Reveal>
      </SectionWrapper>

      {/* ─── 3 · PARA QUIÉN ES ─── */}
      <SectionWrapper variant="dark">
        <SectionHeading eyebrow={mp.audience.eyebrow} title={mp.audience.title} tone="dark" />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {mp.audience.items.map((item, i) => (
            <Reveal key={item} delay={i * 0.07}>
              <div className="flex h-full items-start gap-4 rounded-sm border border-ink-border bg-ink-surface p-7 transition-colors duration-300 hover:border-accent">
                <Check size={22} strokeWidth={2.5} className="mt-0.5 shrink-0 text-accent" />
                <p className="text-base leading-relaxed text-white/80 md:text-lg">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* ─── 4 · EL DIFERENCIAL ─── */}
      <section className="w-full bg-accent text-ink">
        <div className="mx-auto w-full max-w-content px-6 py-20 md:px-8 md:py-28">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="label text-ink/60">{mp.differential.eyebrow}</p>
            <h2 className="mt-5 font-display text-[clamp(3rem,8vw,6.5rem)] font-extrabold uppercase leading-[0.9] tracking-hero">
              {mp.differential.title}
            </h2>
            <div className="mx-auto mt-6 h-1 w-16 bg-ink" />
            <p className="mx-auto mt-8 max-w-2xl text-lg font-semibold leading-relaxed text-ink/80 md:text-2xl">
              {mp.differential.text}
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">
              {mp.differential.extra}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── 5 · CÓMO FUNCIONA ─── */}
      <SectionWrapper variant="light">
        <SectionHeading eyebrow={mp.how.eyebrow} title={mp.how.title} tone="light" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {mp.how.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="group flex h-full flex-col gap-4 rounded-sm border border-ink/10 bg-paper p-8 transition-all duration-300 hover:border-accent hover:bg-ink hover:text-white">
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink/60 transition-colors group-hover:text-white/60 md:text-base">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* ─── 6 · CON QUÉ SALÍS ─── */}
      <SectionWrapper variant="dark">
        <SectionHeading eyebrow={mp.outcome.eyebrow} title={mp.outcome.title} tone="dark" />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {mp.outcome.items.map((item, i) => (
            <Reveal key={item} delay={i * 0.07}>
              <div className="flex h-full items-start gap-4 rounded-sm border border-accent/40 bg-accent/5 p-7">
                <Check size={22} strokeWidth={2.5} className="mt-0.5 shrink-0 text-accent" />
                <p className="text-base font-semibold leading-relaxed text-white md:text-lg">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-10">
          <ApplyCta label={mp.hero.cta} />
        </Reveal>
      </SectionWrapper>

      {/* ─── 7 · EL MÉTODO ─── */}
      <SectionWrapper variant="light">
        <SectionHeading eyebrow={mp.method.eyebrow} title={mp.method.title} tone="light" intro={mp.method.intro} />

        <Reveal className="mb-14 flex flex-wrap gap-3">
          {mp.method.pillars.map((pillar) => (
            <span
              key={pillar}
              className="rounded-sm border-2 border-ink bg-paper px-4 py-2 font-display text-lg font-bold uppercase tracking-tight text-ink"
            >
              {pillar}
            </span>
          ))}
        </Reveal>

        <Reveal className="mb-6">
          <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
            {mp.method.stepsTitle}
          </h3>
        </Reveal>
        <div className="max-w-4xl border-t border-ink/15">
          {mp.method.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06}>
              <div className="flex gap-6 border-b border-ink/15 py-7 md:gap-10">
                <span className="w-16 shrink-0 font-display text-5xl font-extrabold leading-none text-brand md:w-24 md:text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-ink md:text-3xl">
                    {step.title}
                  </h4>
                  <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink/70">{step.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* ─── 8 · AVATAR + PRODUCTO ─── */}
      <SectionWrapper variant="dark">
        <SectionHeading eyebrow={mp.avatar.eyebrow} title={mp.avatar.title} tone="dark" intro={mp.avatar.intro} />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mp.avatar.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="flex h-full flex-col gap-3 rounded-sm border border-ink-border bg-ink-surface p-8 transition-colors duration-300 hover:border-accent">
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-accent">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/70 md:text-base">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-12">
          <div className="rounded-sm border-2 border-accent p-8 text-center md:p-12">
            <p className="font-display text-[clamp(1.5rem,3.5vw,2.75rem)] font-extrabold uppercase leading-tight tracking-tight">
              {mp.avatar.connection}
            </p>
            <p className="mt-3 text-base text-white/60 md:text-lg">{mp.avatar.connectionNote}</p>
          </div>
        </Reveal>
      </SectionWrapper>

      {/* ─── 9 · VIRAL, NICHO Y VENTA ─── */}
      <SectionWrapper variant="light">
        <SectionHeading eyebrow={mp.system.eyebrow} title={mp.system.title} tone="light" />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {mp.system.types.map((type, i) => (
            <Reveal key={type.name} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-4 rounded-sm border border-ink/10 bg-paper p-8">
                <p className="font-display text-4xl font-extrabold uppercase tracking-tight text-brand">{type.name}</p>
                <p className="label text-ink">{type.goal}</p>
                <p className="text-sm leading-relaxed text-ink/70 md:text-base">{type.text}</p>
                <div className="mt-auto border-t border-ink/10 pt-4">
                  <p className="label text-brand">{mp.system.controlLabel}</p>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-ink md:text-base">{type.question}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mb-6 mt-16">
          <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
            {mp.system.awareness.title}
          </h3>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {mp.system.awareness.stages.map((stage, i) => (
            <Reveal key={stage.name} delay={i * 0.06}>
              <div className="flex h-full flex-col gap-2 rounded-sm border border-ink/10 bg-paper p-6">
                <span className="font-display text-3xl font-extrabold leading-none text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="font-display text-xl font-bold uppercase tracking-tight text-ink">{stage.name}</h4>
                <p className="text-sm font-semibold text-ink/80">{stage.goal}</p>
                <p className="mt-2 text-sm italic leading-relaxed text-ink/60">{stage.example}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10">
          <p className="max-w-3xl border-l-4 border-brand pl-6 text-base font-semibold leading-relaxed text-ink/80 md:text-lg">
            {mp.system.note}
          </p>
        </Reveal>
      </SectionWrapper>

      {/* ─── 10 · EL CONTENIDO ─── */}
      <SectionWrapper variant="dark">
        <SectionHeading eyebrow={mp.content.eyebrow} title={mp.content.title} tone="dark" />

        {/* Cuatro formas */}
        <Reveal className="mb-3">
          <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
            {mp.content.formsTitle}
          </h3>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/60 md:text-lg">{mp.content.formsIntro}</p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {mp.content.forms.map((form, i) => (
            <Reveal key={form.title} delay={i * 0.07}>
              <div className="flex h-full flex-col gap-3 rounded-sm border border-ink-border bg-ink-surface p-7 transition-colors duration-300 hover:border-accent">
                <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-accent">{form.title}</h4>
                <p className="text-sm leading-relaxed text-white/70 md:text-base">{form.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Combustible */}
        <Reveal className="mb-3 mt-20">
          <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
            {mp.content.fuelTitle}
          </h3>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/60 md:text-lg">{mp.content.fuelIntro}</p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {mp.content.fuel.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <div className="flex h-full flex-col gap-2 border-l-4 border-accent bg-white/5 p-6">
                <h4 className="font-display text-xl font-bold uppercase tracking-tight">{item.title}</h4>
                <p className="text-sm leading-relaxed text-white/70 md:text-base">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-8">
          <p className="max-w-3xl text-base font-semibold leading-relaxed text-white/80 md:text-lg">
            {mp.content.fuelNote}
          </p>
        </Reveal>

        {/* Recorrido */}
        <Reveal className="mb-3 mt-20">
          <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
            {mp.content.journeyTitle}
          </h3>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/60 md:text-lg">{mp.content.journeyIntro}</p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {mp.content.journey.map((q, i) => (
            <Reveal key={q} delay={i * 0.08}>
              <div className="h-full rounded-sm border border-accent/40 bg-accent/5 p-7">
                <p className="font-display text-xl font-bold uppercase leading-snug tracking-tight md:text-2xl">
                  &ldquo;{q}&rdquo;
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-8">
          <p className="max-w-3xl text-base leading-relaxed text-white/60 md:text-lg">{mp.content.journeyText}</p>
        </Reveal>

        {/* Coherencia */}
        <Reveal delay={0.1} className="mt-12">
          <div className="max-w-3xl border-l-4 border-accent pl-6">
            <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight md:text-3xl">
              {mp.content.coherenceTitle}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-white/70 md:text-lg">{mp.content.coherenceText}</p>
          </div>
        </Reveal>
      </SectionWrapper>

      {/* ─── 11 · EL SISTEMA DE COMUNICACIÓN ─── */}
      <SectionWrapper variant="light">
        <SectionHeading
          eyebrow={mp.communication.eyebrow}
          title={mp.communication.title}
          tone="light"
          intro={mp.communication.intro}
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {mp.communication.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <div className="group flex h-full flex-col gap-4 rounded-sm border border-ink/10 bg-paper p-8 transition-all duration-300 hover:border-accent hover:bg-ink hover:text-white md:p-10">
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink/60 transition-colors group-hover:text-white/70 md:text-base">
                  {item.text}
                </p>
                {item.bullets && (
                  <ul className="flex flex-col gap-3">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-sm leading-relaxed text-ink/70 transition-colors group-hover:text-white/70 md:text-base"
                      >
                        <Check size={18} strokeWidth={2.5} className="mt-0.5 shrink-0 text-brand group-hover:text-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
          {mp.communication.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <div className="h-full rounded-sm bg-ink p-8 text-white">
                <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight text-accent">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* ─── 12 · MI TRABAJO (redes reales) ─── */}
      <SectionWrapper variant="dark">
        <SectionHeading eyebrow={mp.proof.eyebrow} title={mp.proof.title} tone="dark" intro={mp.proof.text} />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {comunicacionSeminar.proof.links.map((link, i) => (
            <Reveal key={link.name} delay={i * 0.08}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between gap-8 rounded-sm border border-ink-border bg-ink-surface p-6 transition-all duration-300 hover:border-accent"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="label text-accent">{link.name}</p>
                  <ArrowUpRight size={20} strokeWidth={1.75} className="shrink-0 text-white/30 transition-colors group-hover:text-accent" />
                </div>
                {link.count ? (
                  <div>
                    <p className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight">{link.count}</p>
                    <p className="mt-2 text-sm text-white/50">{link.unit}</p>
                  </div>
                ) : (
                  <p className="font-display text-2xl font-bold uppercase tracking-tight">Ver perfil</p>
                )}
              </a>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-xs text-white/40">{comunicacionSeminar.proof.updated}</p>
      </SectionWrapper>

      {/* ─── 13 · CIERRE ─── */}
      <section className="w-full bg-accent text-ink">
        <div className="mx-auto w-full max-w-content px-6 py-20 md:px-8 md:py-28">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="font-display text-[clamp(1.75rem,4vw,3rem)] font-extrabold uppercase leading-tight tracking-tight">
              &ldquo;{mp.closing.quote}&rdquo;
            </p>
            <div className="mx-auto mt-8 h-1 w-16 bg-ink" />
            <h2 className="mt-8 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold uppercase leading-none tracking-hero">
              {mp.closing.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/75 md:text-lg">{mp.closing.text}</p>
            <div className="mt-8 flex justify-center">
              <a
                href={mp.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-sm bg-ink px-8 py-4 text-sm font-bold uppercase tracking-label text-white transition-colors duration-300 hover:bg-brand"
              >
                {mp.closing.cta}
                <ArrowRight size={18} strokeWidth={2} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
