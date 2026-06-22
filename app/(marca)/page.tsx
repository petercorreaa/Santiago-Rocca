import { WhoIsHero } from "@/components/sections/WhoIsHero";
import { ImpactQuote } from "@/components/sections/ImpactQuote";
import { PillarsGrid } from "@/components/sections/PillarsGrid";
import { PodcastPreview } from "@/components/sections/PodcastPreview";
import { CommunityCTA } from "@/components/sections/CommunityCTA";
import { home, podcast } from "@/lib/content";

export default function InicioPage() {
  return (
    <>
      {/* 1 · Hero principal — Quién soy (estilo tonyrobbins) */}
      <WhoIsHero
        eyebrow={home.whoIs.eyebrow}
        title={home.whoIs.title}
        paragraph={home.whoIs.paragraph}
        image={home.whoIs.image}
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

      {/* 4 · Preview del podcast */}
      <PodcastPreview
        eyebrow={home.podcastPreview.eyebrow}
        name={podcast.name}
        subtitle={podcast.description}
        episodes={home.podcastPreview.episodes}
        cta={home.podcastPreview.cta}
        instagramPosts={podcast.instagramPosts}
      />

      {/* 5 · CTA final — comunidad */}
      <CommunityCTA
        title={home.communityCta.title}
        text={home.communityCta.text}
        cta={home.communityCta.cta}
      />
    </>
  );
}
