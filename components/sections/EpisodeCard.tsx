import { Play } from "lucide-react";

export interface Episode {
  number: string;
  title: string;
  guest: string;
  duration: string;
  category?: string;
}

interface EpisodeCardProps {
  episode: Episode;
  /** Superficie sobre la que se muestra la card. */
  surface?: "dark" | "light";
}

/** Card de episodio del podcast. Placeholder de carátula + meta. */
export function EpisodeCard({ episode, surface = "dark" }: EpisodeCardProps) {
  const isDark = surface === "dark";

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-sm border transition-colors duration-300 ${
        isDark
          ? "border-ink-border bg-ink-surface hover:border-accent"
          : "border-ink/10 bg-paper hover:border-brand"
      }`}
    >
      {/* Carátula placeholder */}
      <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-brand/40 to-ink">
        <span className="font-display text-3xl font-extrabold uppercase tracking-tight text-white/80">
          EP {episode.number}
        </span>
        <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-ink transition-transform duration-300 group-hover:scale-110">
          <Play size={16} fill="currentColor" />
        </span>
      </div>

      {/* Meta */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-3">
          {episode.category && (
            <span className="label text-accent">{episode.category}</span>
          )}
          <span className={`text-xs ${isDark ? "text-white/40" : "text-ink/40"}`}>
            {episode.duration}
          </span>
        </div>
        <h3
          className={`font-display text-xl font-bold uppercase leading-tight tracking-tight ${
            isDark ? "text-white" : "text-ink"
          }`}
        >
          {episode.title}
        </h3>
        <p className={`mt-auto text-sm ${isDark ? "text-white/50" : "text-ink/50"}`}>
          {episode.guest}
        </p>
      </div>
    </article>
  );
}
