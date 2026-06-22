import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/shared/Button";

interface WhoIsProps {
  eyebrow: string;
  title: string;
  paragraph: string;
  image: string;
  cta: { label: string; href: string };
}

/** "Quién es Santiago" — dos columnas: foto + texto introductorio. */
export function WhoIs({ eyebrow, title, paragraph, image, cta }: WhoIsProps) {
  return (
    <SectionWrapper variant="light">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Foto (placeholder) */}
        <Reveal>
          <div
            className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(122,28,46,0.25), rgba(10,10,10,0.85)), url(${image})`,
            }}
          >
            {/* Marco acento */}
            <div className="absolute inset-0 border border-ink/10" />
            <span className="absolute bottom-5 left-5 label text-white/70">
              Santiago Rocca
            </span>
          </div>
        </Reveal>

        {/* Texto */}
        <Reveal delay={0.1}>
          <p className="label flex items-center gap-3 text-brand">
            <span className="inline-block h-px w-8 bg-accent" />
            {eyebrow}
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold uppercase leading-tight tracking-tight text-ink">
            {title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/70 md:text-lg">
            {paragraph}
          </p>
          <div className="mt-9">
            <Button href={cta.href} variant="secondary" surface="light">
              {cta.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
