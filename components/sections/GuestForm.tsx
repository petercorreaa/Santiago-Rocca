import { Mail } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { contactEmail } from "@/lib/content";

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

      <Reveal delay={0.1} className="mt-12">
        <a
          href={`mailto:${contactEmail}?subject=${encodeURIComponent("Quiero ser invitado en Vive para Contarlo")}`}
          className="btn-primary"
        >
          <Mail size={17} strokeWidth={1.75} />
          {contactEmail}
        </a>
      </Reveal>
    </SectionWrapper>
  );
}
