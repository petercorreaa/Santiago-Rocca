"use client";

import { useState, FormEvent } from "react";

const inputBase =
  "w-full rounded-sm border border-ink-border bg-ink-surface px-5 py-4 text-sm text-white placeholder:text-white/30 outline-none transition-colors duration-200 focus:border-accent";

export function WaitlistForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log("[WaitlistForm]", data);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-sm border border-accent/30 bg-ink-surface px-8 py-10 text-center">
        <p className="font-display text-2xl font-bold uppercase text-accent">¡Anotado!</p>
        <p className="mt-3 text-sm text-white/50">
          Te avisamos en cuanto el libro esté disponible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-end">
      <div className="flex flex-1 flex-col gap-2">
        <label htmlFor="waitlist-email" className="label text-ink/50">
          Tu email
        </label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          required
          placeholder="correo@ejemplo.com"
          className="w-full rounded-sm border border-ink/10 bg-white px-5 py-4 text-sm text-ink placeholder:text-ink/30 outline-none transition-colors duration-200 focus:border-brand"
        />
      </div>
      <button type="submit" className="btn-secondary-light shrink-0">
        Avisame cuando esté
      </button>
    </form>
  );
}
