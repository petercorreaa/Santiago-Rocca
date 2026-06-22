import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/shared/Button";
import { EpisodeCard, Episode } from "@/components/sections/EpisodeCard";
import { InstagramEmbed } from "@/components/shared/InstagramEmbed";

interface PodcastPreviewProps {
  eyebrow: string;
  name: string;
  subtitle: string;
  episodes: Episode[];
  cta: { label: string; href: string };
  /** Permalinks de Instagram. Si hay, reemplazan las cards placeholder. */
  instagramPosts?: string[];
}

/** Preview del podcast: título, bajada y 3 episodios destacados. */
export function PodcastPreview({
  eyebrow,
  name,
  subtitle,
  episodes,
  cta,
  instagramPosts = [],
}: PodcastPreviewProps) {
  const useEmbeds = instagramPosts.length > 0;
  return (
    <SectionWrapper variant="dark">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal className="max-w-2xl">
          <p className="label flex items-center gap-3 text-accent">
            <span className="inline-block h-px w-8 bg-accent" />
            {eyebrow}
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,4rem)] font-extrabold uppercase leading-none tracking-tight">
            {name}
          </h2>
          <div className="mt-4 h-1 w-10 bg-brand" />
          <p className="mt-5 text-base leading-relaxed text-white/50 md:text-lg">
            {subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="hidden md:block">
          <Button href={cta.href} variant="secondary" surface="dark">
            {cta.label}
          </Button>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {useEmbeds
          ? instagramPosts.slice(0, 3).map((url, i) => (
              <Reveal key={url} delay={i * 0.1}>
                <InstagramEmbed url={url} />
              </Reveal>
            ))
          : episodes.map((ep, i) => (
              <Reveal key={ep.number} delay={i * 0.1}>
                <EpisodeCard episode={ep} surface="dark" />
              </Reveal>
            ))}
      </div>

      {/* CTA visible en mobile */}
      <div className="mt-10 md:hidden">
        <Button href={cta.href} variant="secondary" surface="dark">
          {cta.label}
        </Button>
      </div>
    </SectionWrapper>
  );
}
