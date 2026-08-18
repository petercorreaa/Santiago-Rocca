import { WhoIsHero } from "@/components/sections/WhoIsHero";
import { ImpactQuote } from "@/components/sections/ImpactQuote";
import { PillarsGrid } from "@/components/sections/PillarsGrid";
import { CommunityCTA } from "@/components/sections/CommunityCTA";
import { home } from "@/lib/content";

export default function InicioPage() {
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

      {/* 4 · CTA final — comunidad */}
      <CommunityCTA
        title={home.communityCta.title}
        text={home.communityCta.text}
        cta={home.communityCta.cta}
      />
    </>
  );
}
