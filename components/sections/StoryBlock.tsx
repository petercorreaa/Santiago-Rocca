import { SectionWrapper, SectionVariant } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";

interface StoryBlockProps {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: string;
  /** Posición de la imagen en desktop. */
  imagePosition?: "left" | "right";
  variant?: SectionVariant;
  /**
   * Foto real (no placeholder): usa un overlay sutil para que la persona se
   * vea nítida, en vez del degradé oscuro de marca de los placeholders.
   */
  realPhoto?: boolean;
}

/**
 * Bloque narrativo de scroll storytelling.
 * Desktop: 2 columnas (texto + imagen, orden intercambiable).
 * Mobile: apilado con imagen arriba.
 */
export function StoryBlock({
  eyebrow,
  title,
  paragraphs,
  image,
  imagePosition = "right",
  variant = "light",
  realPhoto = false,
}: StoryBlockProps) {
  const isLight = variant === "light";

  // Overlay sutil para fotos reales (solo asegura legibilidad del label);
  // degradé de marca más oscuro para los placeholders.
  const overlay = realPhoto
    ? "linear-gradient(to top, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0) 35%)"
    : "linear-gradient(135deg, rgba(122,28,46,0.3), rgba(10,10,10,0.75))";

  const textCol = (
    <Reveal className="flex flex-col justify-center">
      <p
        className={`label flex items-center gap-3 ${isLight ? "text-brand" : "text-accent"}`}
      >
        <span
          className={`inline-block h-px w-8 ${isLight ? "bg-accent" : "bg-accent"}`}
        />
        {eyebrow}
      </p>
      <h2
        className={`mt-5 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold uppercase leading-tight tracking-tight ${
          isLight ? "text-ink" : "text-white"
        }`}
      >
        {title}
      </h2>
      <div className="mt-4 h-1 w-10 bg-brand" />
      <div className="mt-6 flex flex-col gap-4">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className={`text-base leading-relaxed ${isLight ? "text-ink/70" : "text-white/60"}`}
          >
            {p}
          </p>
        ))}
      </div>
    </Reveal>
  );

  const imageCol = (
    <Reveal delay={0.12}>
      <div
        className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-cover bg-center"
        style={{
          backgroundImage: `${overlay}, url(${image})`,
        }}
      >
        <div
          className={`absolute inset-0 border ${isLight ? "border-ink/8" : "border-white/5"}`}
        />
      </div>
    </Reveal>
  );

  return (
    <SectionWrapper variant={variant}>
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        {imagePosition === "left" ? (
          <>
            {imageCol}
            {textCol}
          </>
        ) : (
          <>
            {textCol}
            {imageCol}
          </>
        )}
      </div>
    </SectionWrapper>
  );
}
