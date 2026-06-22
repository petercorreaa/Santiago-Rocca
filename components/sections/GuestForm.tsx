"use client";

import { useState, FormEvent } from "react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";

const inputBase =
  "w-full rounded-sm border border-ink-border bg-ink-surface px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors duration-200 focus:border-accent";

const labelBase = "label mb-2 block text-white/60";

export function GuestForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log("[GuestForm]", data);
    setSent(true);
  }

  return (
    <SectionWrapper variant="dark" id="ser-invitado">
      <Reveal className="max-w-2xl">
        <p className="label flex items-center gap-3 text-accent">
          <span className="inline-block h-px w-8 bg-accent" />
          Invitados
        </p>
        <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold uppercase leading-tight tracking-tight">
          ¿Querés participar?
        </h2>
        <div className="mt-3 h-1 w-10 bg-brand" />
        <p className="mt-5 text-sm leading-relaxed text-white/50">
          Si tenés una historia que vale la pena contar, completá el formulario y
          te contactamos.
        </p>
      </Reveal>

      {sent ? (
        <Reveal delay={0.1} className="mt-12 rounded-sm border border-accent/30 bg-ink-surface p-8 text-center">
          <p className="font-display text-2xl font-bold uppercase text-accent">
            ¡Gracias por escribirnos!
          </p>
          <p className="mt-3 text-sm text-white/50">
            Revisamos tu historia y te respondemos pronto.
          </p>
        </Reveal>
      ) : (
        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            <div className="flex flex-col">
              <label htmlFor="g-nombre" className={labelBase}>
                Nombre completo *
              </label>
              <input
                id="g-nombre"
                name="nombre"
                type="text"
                required
                placeholder="Tu nombre"
                className={inputBase}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="g-redes" className={labelBase}>
                Redes sociales
              </label>
              <input
                id="g-redes"
                name="redes"
                type="text"
                placeholder="@usuario o URL"
                className={inputBase}
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label htmlFor="g-historia" className={labelBase}>
                Tu historia *
              </label>
              <textarea
                id="g-historia"
                name="historia"
                required
                rows={4}
                placeholder="Contanos brevemente quién sos y qué viviste..."
                className={`${inputBase} resize-none`}
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label htmlFor="g-por-que" className={labelBase}>
                ¿Por qué deberías participar? *
              </label>
              <textarea
                id="g-por-que"
                name="porQue"
                required
                rows={4}
                placeholder="¿Qué valor aportaría tu historia a la audiencia?"
                className={`${inputBase} resize-none`}
              />
            </div>

            <div className="md:col-span-2">
              <button type="submit" className="btn-primary">
                Enviar postulación
              </button>
            </div>
          </form>
        </Reveal>
      )}
    </SectionWrapper>
  );
}
