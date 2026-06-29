import { Headphones, BookOpen, Lightbulb } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/shared/Button";
import { EpisodeCard } from "@/components/sections/EpisodeCard";
import { InstagramEmbed } from "@/components/shared/InstagramEmbed";
import { GuestForm } from "@/components/sections/GuestForm";
import { SponsorForm } from "@/components/sections/SponsorForm";
import { podcast } from "@/lib/content";

// Íconos para los objetivos del podcast
const objectiveIcons = [Headphones, BookOpen, Lightbulb];

export default function ViveParaContarloPage() {
  return (
    <>
      {/* ─────────────────────────────────────────────
          1 · HERO con marquee de texto
      ───────────────────────────────────────────── */}
      <section className="w-full bg-ink text-white">
        {/* Franja marquee — acento amarillo sobre negro */}
        <div className="overflow-hidden border-y border-ink-border bg-ink-surface py-4">
          <div className="flex animate-marquee whitespace-nowrap">
            <span className="font-display text-2xl font-extrabold uppercase tracking-widest text-accent">
              {podcast.marqueeText}
            </span>
            {/* Duplicado para el loop sin saltos */}
            <span className="font-display text-2xl font-extrabold uppercase tracking-widest text-accent" aria-hidden>
              {podcast.marqueeText}
            </span>
          </div>
        </div>

        {/* Contenido del hero */}
        <div className="relative overflow-hidden">
          {/* Resplandor bordo sutil */}
          <div aria-hidden className="pointer-events-none absolute -left-40 top-0 h-[40rem] w-[40rem] rounded-full bg-brand/10 blur-3xl" />
          <div aria-hidden className="absolute left-0 top-0 h-full w-1 bg-brand" />

          <div className="mx-auto w-full max-w-content px-6 py-24 md:px-14">
            <Reveal className="max-w-4xl">
              <h1 className="font-display text-[clamp(3.5rem,9vw,7.5rem)] font-extrabold uppercase leading-[0.9] tracking-hero">
                {podcast.name}
              </h1>
              <div className="mt-6 h-1 w-20 bg-accent" />
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
                {podcast.meaning}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href={podcast.spotify}>Escuchar en Spotify</Button>
                {/* Botón con color y estilo de marca YouTube (rojo #FF0000) */}
                <a
                  href={podcast.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-[#FF0000] px-8 py-4 text-sm font-bold uppercase tracking-label text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#CC0000]"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
                  </svg>
                  Ver en YouTube
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          2 · ÚLTIMOS EPISODIOS
      ───────────────────────────────────────────── */}
      <SectionWrapper variant="dark">
        <Reveal className="mb-12">
          <p className="label flex items-center gap-3 text-accent">
            <span className="inline-block h-px w-8 bg-accent" />
            Episodios
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,4rem)] font-extrabold uppercase leading-none tracking-tight">
            Últimos episodios
          </h2>
          <div className="mt-4 h-1 w-10 bg-brand" />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {podcast.instagramPosts.length > 0
            ? podcast.instagramPosts.map((url, i) => (
                <Reveal key={url} delay={i * 0.07}>
                  <InstagramEmbed url={url} />
                </Reveal>
              ))
            : podcast.episodes.map((ep, i) => (
                <Reveal key={ep.number} delay={i * 0.07}>
                  <EpisodeCard episode={ep} surface="dark" />
                </Reveal>
              ))}
        </div>
      </SectionWrapper>

      {/* ─────────────────────────────────────────────
          3 · SOBRE EL PODCAST
      ───────────────────────────────────────────── */}
      <SectionWrapper variant="light">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-20">
          {/* Descripción */}
          <Reveal>
            <p className="label flex items-center gap-3 text-brand">
              <span className="inline-block h-px w-8 bg-accent" />
              El podcast
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold uppercase leading-tight tracking-tight text-ink">
              ¿De qué se trata?
            </h2>
            <div className="mt-3 h-1 w-10 bg-brand" />
            <p className="mt-6 text-base leading-relaxed text-ink/70 md:text-lg">
              {podcast.description}
            </p>
          </Reveal>

          {/* Objetivos */}
          <Reveal delay={0.12}>
            <p className="label mb-6 text-brand">Qué vas a encontrar</p>
            <ul className="flex flex-col gap-6">
              {podcast.objectives.map((obj, i) => {
                const Icon = objectiveIcons[i];
                return (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-brand/10 text-accent">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <p className="text-base leading-relaxed text-ink/80">{obj}</p>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </SectionWrapper>

      {/* ─────────────────────────────────────────────
          4 · TIPOS DE INVITADOS
      ───────────────────────────────────────────── */}
      <SectionWrapper variant="dark">
        <Reveal className="max-w-2xl">
          <p className="label flex items-center gap-3 text-accent">
            <span className="inline-block h-px w-8 bg-accent" />
            Invitados
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,4rem)] font-extrabold uppercase leading-none tracking-tight">
            ¿De qué hablamos?
          </h2>
          <div className="mt-4 h-1 w-10 bg-brand" />
          <p className="mt-5 text-base leading-relaxed text-white/50 md:text-lg">
            Cualquier persona con una historia que enseñe algo.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 flex flex-wrap gap-3">
          {podcast.guestTypes.map((type) => (
            <span
              key={type}
              className="rounded-sm border border-accent/40 px-5 py-2.5 font-sans text-sm font-semibold text-white/80 transition-colors duration-200 hover:border-accent hover:text-white"
            >
              {type}
            </span>
          ))}
        </Reveal>
      </SectionWrapper>

      {/* ─────────────────────────────────────────────
          5 · FORMULARIO — INVITADOS  (client)
      ───────────────────────────────────────────── */}
      <GuestForm />

      {/* ─────────────────────────────────────────────
          6 · FORMULARIO — SPONSORS  (client)
      ───────────────────────────────────────────── */}
      <SponsorForm />
    </>
  );
}
