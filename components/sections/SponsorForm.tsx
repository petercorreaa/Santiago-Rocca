"use client";

import { useState, FormEvent } from "react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";

const inputBase =
  "w-full rounded-sm border border-ink/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/30 outline-none transition-colors duration-200 focus:border-brand";

const labelBase = "label mb-2 block text-ink/50";

export function SponsorForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log("[SponsorForm]", data);
    setSent(true);
  }

  return (
    <SectionWrapper variant="light" id="sponsors">
      <Reveal className="max-w-2xl">
        <p className="label flex items-center gap-3 text-brand">
          <span className="inline-block h-px w-8 bg-accent" />
          Sponsors
        </p>
        <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold uppercase leading-tight tracking-tight text-ink">
          Publicidad y sponsors
        </h2>
        <div className="mt-3 h-1 w-10 bg-brand" />
        <p className="mt-5 text-sm leading-relaxed text-ink/60">
          Si tu marca quiere conectar con una audiencia comprometida con el
          crecimiento personal, hablemos.
        </p>
      </Reveal>

      {sent ? (
        <Reveal delay={0.1} className="mt-12 rounded-sm border border-brand/20 bg-paper p-8 text-center">
          <p className="font-display text-2xl font-bold uppercase text-brand">
            ¡Mensaje recibido!
          </p>
          <p className="mt-3 text-sm text-ink/50">
            Te respondemos en menos de 48 horas hábiles.
          </p>
        </Reveal>
      ) : (
        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            <div className="flex flex-col">
              <label htmlFor="s-empresa" className={labelBase}>
                Empresa *
              </label>
              <input
                id="s-empresa"
                name="empresa"
                type="text"
                required
                placeholder="Nombre de la empresa"
                className={inputBase}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="s-contacto" className={labelBase}>
                Persona de contacto *
              </label>
              <input
                id="s-contacto"
                name="contacto"
                type="text"
                required
                placeholder="Nombre y apellido"
                className={inputBase}
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label htmlFor="s-email" className={labelBase}>
                Email *
              </label>
              <input
                id="s-email"
                name="email"
                type="email"
                required
                placeholder="correo@empresa.com"
                className={inputBase}
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label htmlFor="s-objetivo" className={labelBase}>
                Objetivo de campaña *
              </label>
              <textarea
                id="s-objetivo"
                name="objetivo"
                required
                rows={3}
                placeholder="¿Qué querés lograr con la publicidad?"
                className={`${inputBase} resize-none`}
              />
            </div>

            <div className="flex items-end md:col-span-2">
              <button type="submit" className="btn-secondary-light">
                Enviar consulta
              </button>
            </div>
          </form>
        </Reveal>
      )}
    </SectionWrapper>
  );
}
