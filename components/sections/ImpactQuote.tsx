import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";

interface ImpactQuoteProps {
  eyebrow: string;
  quote: string;
}

/** Frase de impacto centrada sobre fondo blanco, tono editorial. */
export function ImpactQuote({ eyebrow, quote }: ImpactQuoteProps) {
  return (
    <SectionWrapper variant="light">
      <Reveal className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Línea decorativa acento arriba */}
        <div className="mb-8 h-1 w-12 bg-accent" />
        <p className="label mb-6 text-brand">{eyebrow}</p>
        <blockquote className="font-display text-[clamp(1.75rem,4vw,3rem)] font-bold uppercase leading-[1.1] tracking-tight text-ink">
          {quote}
        </blockquote>
      </Reveal>
    </SectionWrapper>
  );
}
