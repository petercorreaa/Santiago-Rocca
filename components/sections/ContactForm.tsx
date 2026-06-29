"use client";

import { useState, FormEvent } from "react";
import { Camera } from "lucide-react";
import { social } from "@/lib/content";

const socialLinks = [
  { ...social.instagram, Icon: Camera, label: "Instagram" },
];

const inputBase =
  "w-full rounded-sm border border-ink-border bg-ink-surface px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors duration-200 focus:border-accent";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log("[ContactoForm]", data);
    setSent(true);
  }

  return (
    <>
      {/* Redes sociales */}
      <div>
        <p className="label mb-5 text-white/40">Encontrame en</p>
        <ul className="flex flex-col gap-4">
          {socialLinks.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-white/50 transition-colors duration-200 hover:text-white"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-ink-border transition-colors duration-200 group-hover:border-accent group-hover:text-accent">
                  <Icon size={17} strokeWidth={1.75} />
                </span>
                <span className="text-sm font-semibold">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Formulario */}
      <div>
        {sent ? (
          <div className="flex flex-col items-center justify-center gap-4 rounded-sm border border-accent/30 bg-ink-surface p-10 text-center">
            <p className="font-display text-3xl font-bold uppercase text-accent">
              ¡Mensaje enviado!
            </p>
            <p className="text-sm text-white/50">
              Te respondo en menos de 48 horas hábiles.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="nombre" className="label text-white/50">Nombre *</label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                placeholder="Tu nombre"
                className={inputBase}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="label text-white/50">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="tu@email.com"
                className={inputBase}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="mensaje" className="label text-white/50">Mensaje *</label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={6}
                placeholder="¿En qué puedo ayudarte?"
                className={`${inputBase} resize-none`}
              />
            </div>
            <button type="submit" className="btn-primary self-start">
              Enviar mensaje
            </button>
          </form>
        )}
      </div>
    </>
  );
}
