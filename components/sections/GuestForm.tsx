import { Mail, Sparkles, BookOpen, Lightbulb, Compass } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { podcast, podcastEmail } from "@/lib/content";

const promptIcons = [Sparkles, BookOpen, Lightbulb, Compass];

export function GuestForm() {
  return (
    <SectionWrapper variant="dark" id="ser-invitado">
      <Reveal className="max-w-2xl">
        <p className="label flex items-center gap-3 text-accent">
          <span className="inline-block h-px w-8 bg-accent" />
          Invitados
        </p>
        <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold uppercase leading-tight tracking-tight">
          ¿Querés participar?
        </h2>
        <div className="mt-3 h-1 w-10 bg-brand" />
        <p className="mt-5 text-sm leading-relaxed text-white/50">
          Si tenés una historia que vale la pena contar, escribime por email
          contándome quién sos y qué viviste.
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mt-10">
        <p className="label mb-5 text-white/40">Contame qué le podés aportar a la audiencia</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {podcast.guestValuePrompts.map((prompt, i) => {
            const Icon = promptIcons[i] ?? Sparkles;
            return (
              <div
                key={prompt}
                className="flex flex-col gap-4 rounded-sm border border-ink-border bg-ink-surface p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-brand/15 text-accent">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <p className="text-sm leading-relaxed text-white/70">{prompt}</p>
              </div>
            );
          })}
        </div>
      </Reveal>

      <Reveal delay={0.15} className="mt-10">
        <a
          href={`mailto:${podcastEmail}?subject=${encodeURIComponent("Quiero ser invitado en Vive para Contarlo")}`}
          className="btn-primary"
        >
          <Mail size={17} strokeWidth={1.75} />
          {podcastEmail}
        </a>
      </Reveal>
    </SectionWrapper>
  );
}
