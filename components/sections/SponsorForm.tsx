import { Mail } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { contactEmail } from "@/lib/content";

export function SponsorForm() {
  return (
    <SectionWrapper variant="light" id="sponsors">
      <Reveal className="max-w-2xl">
        <p className="label flex items-center gap-3 text-brand">
          <span className="inline-block h-px w-8 bg-accent" />
          Sponsors
        </p>
        <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold uppercase leading-tight tracking-tight text-ink">
          Publicidad y sponsors
        </h2>
        <div className="mt-3 h-1 w-10 bg-brand" />
        <p className="mt-5 text-sm leading-relaxed text-ink/60">
          Si tu marca quiere conectar con una audiencia comprometida con el
          crecimiento personal, escribime por email.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <a
          href={`mailto:${contactEmail}?subject=${encodeURIComponent("Consulta de sponsors")}`}
          className="btn-secondary-light"
        >
          <Mail size={17} strokeWidth={1.75} />
          {contactEmail}
        </a>
      </Reveal>
    </SectionWrapper>
  );
}
