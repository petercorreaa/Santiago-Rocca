import { WhoIsHero } from "@/components/sections/WhoIsHero";
import { ImpactQuote } from "@/components/sections/ImpactQuote";
import { PillarsGrid } from "@/components/sections/PillarsGrid";
import { StoryBlock } from "@/components/sections/StoryBlock";
import { CommunityCTA } from "@/components/sections/CommunityCTA";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { home, story } from "@/lib/content";

export default function InicioPage() {
  const { chapters } = story;

  return (
    <>
      {/* 1 · Hero principal — Quién soy (estilo tonyrobbins) */}
      <WhoIsHero
        eyebrow={home.whoIs.eyebrow}
        title={home.whoIs.title}
        paragraph={home.whoIs.paragraph}
        image={home.whoIs.image}
        credentials={home.whoIs.credentials}
        cta={home.whoIs.cta}
        secondaryCta={home.hero.secondaryCta}
      />

      {/* 2 · Frase de impacto */}
      <ImpactQuote eyebrow={home.impact.eyebrow} quote={home.impact.quote} />

      {/* 3 · Pilares */}
      <PillarsGrid
        eyebrow={home.pillars.eyebrow}
        title={home.pillars.title}
        subtitle={home.pillars.subtitle}
        items={home.pillars.items}
      />

      {/* 4 · Sobre mí — mi historia */}
      <section id="sobre-mi" className="relative flex min-h-[60vh] w-full items-end overflow-hidden bg-ink text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(160deg, rgba(122,28,46,0.35) 0%, rgba(10,10,10,0.9) 60%), url(/images/sobre-mi-hero.png)",
          }}
        />
        <div aria-hidden className="absolute left-0 top-0 h-full w-1 bg-brand" />
        <div className="relative z-10 mx-auto w-full max-w-content px-6 pb-20 pt-32 md:px-8">
          <Reveal>
            <p className="label flex items-center gap-3 text-accent">
              <span className="inline-block h-px w-8 bg-accent" />
              {story.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-[clamp(3rem,8vw,6.5rem)] font-extrabold uppercase leading-[0.9] tracking-hero">
              {story.title}
            </h2>
            <div className="mt-6 h-1 w-20 bg-accent" />
          </Reveal>
        </div>
      </section>

      <StoryBlock
        eyebrow={chapters.comoEmpezó.eyebrow}
        title={chapters.comoEmpezó.title}
        paragraphs={chapters.comoEmpezó.paragraphs}
        image={chapters.comoEmpezó.image}
        imagePosition="right"
        variant="light"
        realPhoto
      />

      <StoryBlock
        eyebrow={chapters.pandemia.eyebrow}
        title={chapters.pandemia.title}
        paragraphs={chapters.pandemia.paragraphs}
        image={chapters.pandemia.image}
        imagePosition="left"
        variant="dark"
        realPhoto
      />

      <StoryBlock
        eyebrow={chapters.aprendizajes.eyebrow}
        title={chapters.aprendizajes.title}
        paragraphs={chapters.aprendizajes.paragraphs}
        image={chapters.aprendizajes.image}
        imagePosition="right"
        variant="light"
        realPhoto
      />

      <SectionWrapper variant="dark">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="label flex items-center gap-3 text-accent">
              <span className="inline-block h-px w-8 bg-accent" />
              {chapters.mision.eyebrow}
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,4rem)] font-extrabold uppercase leading-tight tracking-tight">
              {chapters.mision.title}
            </h2>
            <div className="mt-4 h-1 w-10 bg-brand" />
          </Reveal>
          <div className="mt-8 flex flex-col gap-5">
            {chapters.mision.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-base leading-relaxed text-white/60 md:text-lg">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 5 · CTA final — comunidad */}
      <CommunityCTA
        title={home.communityCta.title}
        text={home.communityCta.text}
        cta={home.communityCta.cta}
      />
    </>
  );
}
