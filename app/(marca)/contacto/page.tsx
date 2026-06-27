import type { Metadata } from "next";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contacto — Santiago Rocca",
  description: "Escribile a Santiago Rocca. Consultas, propuestas y colaboraciones.",
};

export default function ContactoPage() {
  return (
    <SectionWrapper variant="dark" className="min-h-screen">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">

        {/* Título */}
        <Reveal className="flex flex-col gap-10">
          <div>
            <p className="label flex items-center gap-3 text-accent">
              <span className="inline-block h-px w-8 bg-accent" />
              Escribime
            </p>
            <h1 className="mt-5 font-display text-[clamp(3.5rem,8vw,6rem)] font-extrabold uppercase leading-[0.9] tracking-hero">
              Contacto
            </h1>
            <div className="mt-5 h-1 w-10 bg-brand" />
            <p className="mt-6 text-base leading-relaxed text-white/60 md:text-lg">
              ¿Tenés una consulta, propuesta o simplemente querés decir hola?
              Escribime y te respondo lo antes posible.
            </p>
          </div>
        </Reveal>

        {/* Formulario + redes (client) */}
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>

      </div>
    </SectionWrapper>
  );
}
