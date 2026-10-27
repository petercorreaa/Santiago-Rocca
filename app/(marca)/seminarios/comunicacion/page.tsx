import { PlayCircle, Library, Wrench, Users, Infinity as InfinityIcon, Check, Plus, CreditCard, ShieldCheck, Mic, Handshake, Lightbulb, Video, ArrowUpRight, Quote } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { TikTokProfileEmbed } from "@/components/shared/TikTokProfileEmbed";
import { comunicacionSeminar as seminar, whatsappContact, podcast } from "@/lib/content";

export const metadata = {
  title: "Comunicación — Seminarios — Santiago Rocca",
  description: seminar.hero.subtitle,
};

const includeIcons = [PlayCircle, Library, Wrench, Users, InfinityIcon];
const situationIcons = [Mic, Handshake, Lightbulb, Video];

export default function SeminarioComunicacionPage() {
  return (
    <>
      {/* ─── 1 · HERO ─── */}
      <section className="relative flex min-h-[70vh] w-full items-center overflow-hidden bg-ink text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-[center_15%]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.78) 55%, rgba(10,10,10,0.68) 100%), url(/Seminarios/comunicacion-hero.jpg)",
          }}
        />
        <div aria-hidden className="pointer-events-none absolute -left-40 top-1/4 h-[50rem] w-[50rem] rounded-full bg-brand/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-accent/6 blur-3xl" />
        <div aria-hidden className="absolute left-0 top-0 h-full w-1 bg-brand" />

        <div className="relative z-10 mx-auto w-full max-w-content px-6 py-28 md:px-8">
          <Reveal className="max-w-3xl">
            <p className="label flex items-center gap-3 text-accent">
              <span className="inline-block h-px w-8 bg-accent" />
              {seminar.hero.audience}
            </p>
            <h1 className="mt-6 flex flex-col gap-4 font-display text-[clamp(2.25rem,5vw,4.25rem)] font-extrabold uppercase leading-[0.98] tracking-hero md:gap-6">
              {seminar.hero.questions.map((question) => (
                <span key={question} className="block">
                  {question}
                </span>
              ))}
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

      {/* ─── SITUACIONES ─── */}
      <SectionWrapper variant="light">
        <Reveal className="mb-12 max-w-2xl">
          <p className="label flex items-center gap-3 text-brand">
            <span className="inline-block h-px w-8 bg-accent" />
            {seminar.situations.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold uppercase leading-tight tracking-tight text-ink">
            {seminar.situations.title}
          </h2>
          <div className="mt-3 h-1 w-10 bg-brand" />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {seminar.situations.items.map((item, i) => {
            const Icon = situationIcons[i] ?? Mic;
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="group flex h-full flex-col gap-5 rounded-sm border border-ink/10 bg-paper p-8 transition-all duration-300 hover:border-accent hover:bg-ink hover:text-white">
                  <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand/10 text-accent transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/60 transition-colors group-hover:text-white/60 md:text-base">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </SectionWrapper>

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
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">
              {seminar.promise.extra}
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

      {/* ─── LA RUTA ─── */}
      <SectionWrapper variant="dark">
        <Reveal className="mb-12 max-w-2xl">
          <p className="label flex items-center gap-3 text-accent">
            <span className="inline-block h-px w-8 bg-accent" />
            {seminar.route.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold uppercase leading-tight tracking-tight">
            {seminar.route.title}
          </h2>
          <div className="mt-3 h-1 w-10 bg-brand" />
          <p className="mt-5 text-base leading-relaxed text-white/60 md:text-lg">
            {seminar.route.intro}
          </p>
        </Reveal>

        <div className="max-w-4xl border-t border-white/10">
          {seminar.route.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06}>
              <div className="flex gap-6 border-b border-white/10 py-7 md:gap-10">
                <span className="w-16 shrink-0 font-display text-5xl font-extrabold leading-none text-accent md:w-24 md:text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-base leading-relaxed text-white/60">{step.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-8">
          <p className="max-w-3xl border-l-4 border-accent pl-6 text-base font-semibold leading-relaxed text-white/80 md:text-lg">
            {seminar.route.note}
          </p>
        </Reveal>
      </SectionWrapper>

      {/* ─── 3 · QUÉ INCLUYE ─── */}
      <SectionWrapper variant="dark" className="border-t border-white/10">
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

      {/* ─── LO QUE ENSEÑO, LO APLICO ─── */}
      <SectionWrapper variant="light">
        <Reveal className="mb-12 max-w-2xl">
          <p className="label flex items-center gap-3 text-brand">
            <span className="inline-block h-px w-8 bg-accent" />
            {seminar.proof.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold uppercase leading-tight tracking-tight text-ink">
            {seminar.proof.title}
          </h2>
          <div className="mt-3 h-1 w-10 bg-brand" />
          <p className="mt-5 text-base font-semibold leading-relaxed text-ink/70 md:text-lg">
            {seminar.proof.text}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {seminar.proof.links.map((link, i) => (
            <Reveal key={link.name} delay={i * 0.08}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between gap-8 rounded-sm border border-ink/10 bg-paper p-6 transition-all duration-300 hover:border-accent hover:bg-ink hover:text-white"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="label text-brand transition-colors group-hover:text-accent">{link.name}</p>
                  <ArrowUpRight size={20} strokeWidth={1.75} className="shrink-0 text-ink/30 transition-colors group-hover:text-accent" />
                </div>
                {link.count ? (
                  <div>
                    <p className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight">
                      {link.count}
                    </p>
                    <p className="mt-2 text-sm text-ink/50 transition-colors group-hover:text-white/60">
                      {link.unit}
                    </p>
                  </div>
                ) : (
                  <p className="font-display text-2xl font-bold uppercase tracking-tight">Ver perfil</p>
                )}
              </a>
            </Reveal>
          ))}
        </div>

        <p className="mt-4 text-xs text-ink/40">{seminar.proof.updated}</p>

        <div className="mt-12">
          <TikTokProfileEmbed username={seminar.proof.tiktokUser} label="Mis últimos videos en TikTok" />
        </div>

        <p className="label mb-5 mt-12 text-brand">Del podcast, con mis invitados</p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {podcast.featuredVideos.map((video, i) => (
            <Reveal key={video.url} delay={i * 0.08}>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-video overflow-hidden rounded-sm border border-ink/10 transition-colors duration-300 hover:border-[#FF0000]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${video.image}')` }}
                />
                <span className="absolute left-1/2 top-1/2 flex h-12 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-[#FF0000] text-white opacity-90 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* ─── POR QUÉ VENDO ESTE SEMINARIO ─── */}
      <SectionWrapper variant="dark">
        <Reveal className="mx-auto max-w-3xl">
          <p className="label flex items-center gap-3 text-accent">
            <span className="inline-block h-px w-8 bg-accent" />
            {seminar.whySell.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold uppercase leading-tight tracking-tight">
            {seminar.whySell.title}
          </h2>
          <div className="mt-3 h-1 w-10 bg-brand" />
          <div className="mt-8 flex flex-col gap-5">
            {seminar.whySell.paragraphs.map((p) => (
              <p key={p} className="text-base leading-relaxed text-white/70 md:text-lg">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-8 border-l-4 border-accent pl-7">
            <p className="text-base font-semibold leading-relaxed text-white/90 md:text-lg">
              {seminar.whySell.closing}
            </p>
          </div>
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

        <Reveal className="mb-8">
          <div className="rounded-sm border border-accent/40 bg-accent/10 p-6 md:p-8">
            <span className="inline-flex items-center rounded-sm bg-accent px-3 py-1 text-xs font-bold uppercase tracking-label text-ink">
              {seminar.pricing.launch.badge}
            </span>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/80 md:text-lg">
              {seminar.pricing.launch.text}
            </p>
          </div>
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
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink/80 md:text-base">
                      <Check size={18} strokeWidth={2.5} className="mt-0.5 shrink-0 text-brand" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <a
                    href={plan.payLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${plan.highlight ? "btn-primary" : "btn-secondary-light"} w-full`}
                  >
                    {seminar.pricing.payLabel}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-6">
          <div className="rounded-sm border border-accent/40 bg-ink">
            {seminar.pricing.assurances.map((text) => (
              <div key={text} className="flex items-center justify-center gap-4 px-6 py-6 md:py-8">
                <CreditCard size={30} strokeWidth={1.75} className="shrink-0 text-accent" />
                <p className="font-display text-xl font-extrabold uppercase tracking-tight text-white md:text-3xl">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.18} className="mt-6">
          <div className="flex flex-col gap-5 rounded-sm border border-brand/40 bg-brand/[0.04] p-8 md:flex-row md:items-start md:gap-8 md:p-10">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-brand text-white">
              <ShieldCheck size={28} strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
                {seminar.pricing.guarantee.title}
              </h3>
              <div className="mt-4 flex flex-col gap-3">
                {seminar.pricing.guarantee.paragraphs.map((p) => (
                  <p key={p} className="max-w-3xl text-base leading-relaxed text-ink/80 md:text-lg">
                    {p}
                  </p>
                ))}
              </div>
              <p className="mt-4 text-sm font-semibold text-brand">{seminar.pricing.guarantee.note}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mx-auto mt-8 max-w-md">
          <a
            href={`https://wa.me/${whatsappContact.phone}?text=${encodeURIComponent(seminar.pricing.cta.message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-sm border border-[#25D366]/40 bg-[#25D366]/5 px-5 py-3 text-center transition-colors duration-300 hover:border-[#25D366]"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
              <svg viewBox="0 0 32 32" width="18" height="18" fill="white" aria-hidden="true">
                <path d="M16.004 2.667c-7.363 0-13.333 5.97-13.333 13.333 0 2.353.615 4.56 1.69 6.475L2.667 29.333l7.03-1.844a13.27 13.27 0 0 0 6.307 1.607h.006c7.362 0 13.333-5.97 13.333-13.333S23.366 2.667 16.004 2.667zm0 24.397a11.04 11.04 0 0 1-5.63-1.54l-.404-.24-4.174 1.095 1.114-4.07-.263-.418a11.03 11.03 0 0 1-1.69-5.891c0-6.098 4.963-11.06 11.05-11.06 2.953 0 5.727 1.15 7.815 3.24a10.986 10.986 0 0 1 3.238 7.822c0 6.098-4.963 11.06-11.056 11.06zm6.062-8.283c-.332-.166-1.965-.97-2.27-1.08-.305-.111-.526-.166-.748.166-.221.332-.858 1.08-1.052 1.302-.194.222-.388.25-.72.083-.332-.166-1.401-.516-2.669-1.646-.987-.88-1.654-1.967-1.848-2.299-.194-.332-.02-.512.146-.677.15-.15.332-.388.498-.582.166-.194.221-.332.332-.554.111-.222.055-.416-.028-.582-.083-.166-.748-1.804-1.025-2.47-.27-.649-.545-.561-.748-.572-.194-.01-.416-.012-.638-.012a1.225 1.225 0 0 0-.887.416c-.305.332-1.163 1.137-1.163 2.773s1.191 3.218 1.357 3.44c.166.222 2.343 3.577 5.678 5.015.793.343 1.412.548 1.894.7.796.253 1.52.217 2.093.132.638-.095 1.965-.803 2.242-1.58.277-.776.277-1.44.194-1.58-.083-.14-.305-.222-.638-.388z" />
              </svg>
            </span>
            <p className="font-display text-base font-bold uppercase tracking-tight text-ink">
              {seminar.pricing.cta.title}
            </p>
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

      {/* ─── CASOS DE ÉXITO (fila que va pasando) ─── */}
      <SectionWrapper variant="light" contained={false}>
        <div className="mx-auto mb-12 w-full max-w-content px-6 md:px-8">
          <Reveal className="max-w-2xl">
            <p className="label flex items-center gap-3 text-brand">
              <span className="inline-block h-px w-8 bg-accent" />
              {seminar.cases.eyebrow}
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold uppercase leading-tight tracking-tight text-ink">
              {seminar.cases.title}
            </h2>
            <div className="mt-3 h-1 w-10 bg-brand" />
            <p className="mt-5 text-base leading-relaxed text-ink/60 md:text-lg">{seminar.cases.text}</p>
          </Reveal>
        </div>

        <div className="group relative overflow-hidden motion-reduce:overflow-x-auto">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-paper to-transparent md:w-24"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-paper to-transparent md:w-24"
          />
          <div
            className="flex w-max animate-marquee gap-5 pr-5 hover:[animation-play-state:paused] motion-reduce:animate-none"
            style={{ animationDuration: "90s" }}
          >
            {[0, 1].map((copy) =>
              seminar.cases.items.map((c) => (
                <article
                  key={`${copy}-${c.name}`}
                  aria-hidden={copy === 1}
                  className="flex w-[300px] shrink-0 flex-col gap-5 rounded-sm border border-ink/10 bg-paper p-7 md:w-[380px] md:p-8"
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-label">
                    <span className="text-brand">{c.stage}</span>
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    <span className="text-ink/50">{c.feeling}</span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-extrabold uppercase leading-tight tracking-tight text-ink">
                      {c.headline}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-ink/50">{c.name}</p>
                  </div>

                  <div className="flex flex-col gap-3 text-sm leading-relaxed text-ink/70">
                    <p>
                      <span className="font-semibold text-ink">Qué cambió: </span>
                      {c.changed}
                    </p>
                    {c.proof && (
                      <p>
                        <span className="font-semibold text-ink">Prueba real: </span>
                        {c.proof}
                      </p>
                    )}
                  </div>

                  <div className="mt-auto flex gap-3 border-l-4 border-accent pl-5">
                    <Quote size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-accent" />
                    <p className="text-sm font-semibold leading-relaxed text-ink">
                      &ldquo;{c.quote}&rdquo;
                    </p>
                  </div>
                </article>
              )),
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* ─── 6 · PREGUNTAS FRECUENTES ─── */}
      <SectionWrapper variant="light" className="border-t border-ink/10">
        <div className="mx-auto max-w-3xl">
          <Reveal className="mb-12">
            <p className="label flex items-center gap-3 text-brand">
              <span className="inline-block h-px w-8 bg-accent" />
              {seminar.faq.eyebrow}
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold uppercase leading-tight tracking-tight text-ink">
              {seminar.faq.title}
            </h2>
            <div className="mt-3 h-1 w-10 bg-brand" />
          </Reveal>

          <div className="flex flex-col border-t border-ink/10">
            {seminar.faq.items.map((item) => (
              <details key={item.q} className="group border-b border-ink/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left font-display text-lg font-bold uppercase tracking-tight text-ink transition-colors hover:text-brand md:text-xl [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <Plus
                    size={22}
                    strokeWidth={2}
                    className="shrink-0 text-brand transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                <p className="pb-6 pr-10 text-base leading-relaxed text-ink/70">{item.a}</p>
              </details>
            ))}
          </div>

          <p className="mt-10 text-sm text-ink/50">
            ¿Te quedó otra duda?{" "}
            <a
              href={whatsappContact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand underline underline-offset-4 hover:text-brand-hover"
            >
              Escribime por WhatsApp
            </a>
            .
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
