import { Camera, MonitorPlay, Headphones } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/shared/Button";
import { StoryBlock } from "@/components/sections/StoryBlock";
import { story, about, social } from "@/lib/content";

export const metadata = {
  title: "Sobre mí — Santiago Rocca",
  description: about.bio,
};

const socialLinks = [
  { ...social.instagram, Icon: Camera },
  { ...social.youtube, Icon: MonitorPlay },
  { ...social.spotify, Icon: Headphones },
];

export default function SobreMiPage() {
  const { chapters } = story;

  return (
    <>
      {/* ─────────────────────────────────────────────
          1 · HERO — foto grande con overlay y título
      ───────────────────────────────────────────── */}
      <section className="relative flex min-h-[80vh] w-full items-end overflow-hidden bg-ink text-white">
        {/* Foto de fondo (placeholder → degradé) */}
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(160deg, rgba(122,28,46,0.35) 0%, rgba(10,10,10,0.9) 60%), url(/images/sobre-mi-hero.jpg)",
          }}
        />

        {/* Línea bordo lateral */}
        <div aria-hidden className="absolute left-0 top-0 h-full w-1 bg-brand" />

        <div className="relative z-10 mx-auto w-full max-w-content px-6 pb-20 pt-40 md:px-14">
          <Reveal>
            <p className="label flex items-center gap-3 text-accent">
              <span className="inline-block h-px w-8 bg-accent" />
              {story.eyebrow}
            </p>
            <h1 className="mt-4 font-display text-[clamp(4rem,10vw,8rem)] font-extrabold uppercase leading-[0.9] tracking-hero">
              {story.title}
            </h1>
            <div className="mt-6 h-1 w-20 bg-accent" />
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
              {about.bio}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          2 · Cómo empezó todo — texto izq, imagen der (light)
      ───────────────────────────────────────────── */}
      <StoryBlock
        eyebrow={chapters.comoEmpezó.eyebrow}
        title={chapters.comoEmpezó.title}
        paragraphs={chapters.comoEmpezó.paragraphs}
        image={chapters.comoEmpezó.image}
        imagePosition="right"
        variant="light"
      />

      {/* ─────────────────────────────────────────────
          3 · La pandemia — imagen izq, texto der (dark)
      ───────────────────────────────────────────── */}
      <StoryBlock
        eyebrow={chapters.pandemia.eyebrow}
        title={chapters.pandemia.title}
        paragraphs={chapters.pandemia.paragraphs}
        image={chapters.pandemia.image}
        imagePosition="left"
        variant="dark"
      />

      {/* ─────────────────────────────────────────────
          4 · Qué aprendí — texto izq, imagen der (light)
      ───────────────────────────────────────────── */}
      <StoryBlock
        eyebrow={chapters.aprendizajes.eyebrow}
        title={chapters.aprendizajes.title}
        paragraphs={chapters.aprendizajes.paragraphs}
        image={chapters.aprendizajes.image}
        imagePosition="right"
        variant="light"
      />

      {/* ─────────────────────────────────────────────
          5 · Qué quiero construir — centrado (dark)
      ───────────────────────────────────────────── */}
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

      {/* ─────────────────────────────────────────────
          6 · CTA final — redes + comunidad
      ───────────────────────────────────────────── */}
      <SectionWrapper variant="dark">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-block h-1 w-12 bg-accent" />
          <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold uppercase leading-none tracking-tight">
            Seguí el camino
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/60 md:text-lg">
            Conectate, escuchá el podcast y sumate a la comunidad. El crecimiento
            es más simple cuando no lo hacés solo.
          </p>

          {/* Botones principales */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/vive-para-contarlo">Escuchá el podcast</Button>
            <Button href="/comunidad" variant="secondary" surface="dark">
              Unirme a la comunidad
            </Button>
          </div>

          {/* Redes sociales */}
          <div className="mt-14 flex items-center justify-center gap-6">
            <span className="label text-white/30">Seguime en</span>
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-sm border border-ink-border text-white/50 transition-all duration-200 hover:border-accent hover:text-accent"
              >
                <Icon size={18} strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </Reveal>
      </SectionWrapper>
    </>
  );
}
