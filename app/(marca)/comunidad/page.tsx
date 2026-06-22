import {
  MessageCircle,
  BookOpen,
  Star,
  Newspaper,
  Video,
  Target,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { community } from "@/lib/content";

export const metadata = {
  title: "Comunidad — Santiago Rocca",
  description:
    "Sumate a la comunidad de WhatsApp de Santiago Rocca: reflexiones, resúmenes de libros, desafíos y aprendizajes diarios.",
};

// Íconos por categoría de contenido (orden igual a community.content)
const contentIcons: LucideIcon[] = [
  Sparkles,   // Reflexiones
  BookOpen,   // Resúmenes de libros
  Star,       // Recomendaciones
  Newspaper,  // Noticias
  Video,      // Videos
  Target,     // Desafíos
  MessageCircle, // Aprendizajes personales
];

// Descripción breve por categoría
const contentDescriptions: Record<string, string> = {
  "Reflexiones":          "Pensamientos para empezar o terminar el día con intención.",
  "Resúmenes de libros":  "Las ideas más valiosas de cada libro, condensadas.",
  "Recomendaciones":      "Lo que Santiago está leyendo, escuchando o siguiendo.",
  "Noticias":             "Lo más relevante del mundo del desarrollo personal.",
  "Videos":               "Material audiovisual curado para aprender y reflexionar.",
  "Desafíos":             "Pequeños retos prácticos para salir de la zona de confort.",
  "Aprendizajes personales": "Experiencias propias con lecciones que valen la pena compartir.",
};

export default function ComunidadPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative flex min-h-[70vh] w-full items-end overflow-hidden bg-ink text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-0 h-[50rem] w-[50rem] rounded-full bg-accent/8 blur-3xl"
        />
        <div aria-hidden className="absolute left-0 top-0 h-full w-1 bg-brand" />

        <div className="relative z-10 mx-auto w-full max-w-content px-6 pb-20 pt-40 md:px-14">
          <Reveal>
            <p className="label flex items-center gap-3 text-accent">
              <span className="inline-block h-px w-8 bg-accent" />
              WhatsApp
            </p>
            <h1 className="mt-4 font-display text-[clamp(4rem,10vw,8rem)] font-extrabold uppercase leading-[0.9] tracking-hero">
              Comunidad
            </h1>
            <div className="mt-6 h-1 w-20 bg-accent" />
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
              Un espacio directo, sin algoritmos, donde compartir reflexiones,
              herramientas y desafíos para crecer todos los días. Gratis, desde
              el celular.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── GRID DE CONTENIDO ─── */}
      <SectionWrapper variant="light">
        <Reveal className="mb-12 max-w-2xl">
          <p className="label flex items-center gap-3 text-brand">
            <span className="inline-block h-px w-8 bg-accent" />
            Qué vas a encontrar
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold uppercase leading-tight tracking-tight text-ink">
            Contenido de la comunidad
          </h2>
          <div className="mt-3 h-1 w-10 bg-brand" />
          <p className="mt-5 text-base leading-relaxed text-ink/60 md:text-lg">
            Todos los días hay algo nuevo. Sin spam, sin ruido.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-0 border border-ink/8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {community.content.map((item, i) => {
            const Icon = contentIcons[i] ?? Sparkles;
            const description = contentDescriptions[item] ?? "";
            return (
              <Reveal key={item} delay={(i % 4) * 0.07}>
                <div className="group flex flex-col gap-5 border border-ink/8 bg-paper p-8 transition-all duration-300 hover:border-accent hover:bg-ink hover:text-white md:p-10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand/10 text-accent transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight">
                    {item}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/60 transition-colors group-hover:text-white/50">
                    {description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ─── CTA WHATSAPP ─── */}
      <SectionWrapper variant="dark">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-block h-1 w-12 bg-accent" />
          <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold uppercase leading-none tracking-tight">
            Sumate ahora
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-base leading-relaxed text-white/60 md:text-lg">
            El único requisito es tener ganas de crecer. El grupo es gratuito
            y podés salir cuando quieras.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-10 inline-flex"
          >
            <MessageCircle size={18} />
            Unirme a la comunidad
          </a>
        </Reveal>
      </SectionWrapper>
    </>
  );
}
