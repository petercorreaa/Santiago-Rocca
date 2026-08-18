"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/shared/Button";

interface WhoIsHeroProps {
  eyebrow: string;
  title: string;
  paragraph: string;
  image: string;
  credentials: string[];
  cta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function WhoIsHero({
  eyebrow,
  title,
  paragraph,
  image,
  credentials,
  cta,
  secondaryCta,
}: WhoIsHeroProps) {
  const [mounted, setMounted] = useState(false);
  const prefersReduced = useReducedMotion();
  useEffect(() => setMounted(true), []);

  const animate = mounted && !prefersReduced;

  // Overlay liviano: la foto queda visible arriba, se oscurece solo abajo para leer el texto.
  const background = `linear-gradient(180deg, rgba(10,10,10,0.15) 0%, rgba(10,10,10,0.2) 35%, rgba(10,10,10,0.88) 88%, rgba(10,10,10,0.97) 100%), url(${image})`;

  return (
    <section className="relative flex min-h-[94vh] w-full items-end overflow-hidden bg-ink text-white">
      <div aria-hidden className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: background }} />
      <div aria-hidden className="absolute left-0 top-0 z-10 h-full w-1 bg-brand" />

      <div className="relative z-10 mx-auto w-full max-w-content px-6 pb-16 pt-40 md:px-8">
        <div className="max-w-3xl">

          {/* eyebrow */}
          {animate ? (
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show" className="flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-accent" />
              <span className="label text-accent">{eyebrow}</span>
            </motion.div>
          ) : (
            <div className="flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-accent" />
              <span className="label text-accent">{eyebrow}</span>
            </div>
          )}

          {/* title */}
          {animate ? (
            <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="show"
              className="mt-5 font-display text-[clamp(3.5rem,9vw,7.5rem)] font-extrabold uppercase leading-[0.9] tracking-hero">
              {title}
            </motion.h1>
          ) : (
            <h1 className="mt-5 font-display text-[clamp(3.5rem,9vw,7.5rem)] font-extrabold uppercase leading-[0.9] tracking-hero">
              {title}
            </h1>
          )}

          {/* accent line */}
          {animate ? (
            <motion.div custom={2} variants={fadeUp} initial="hidden" animate="show" className="mt-6 h-1 w-20 bg-accent" />
          ) : (
            <div className="mt-6 h-1 w-20 bg-accent" />
          )}

          {/* paragraph */}
          {animate ? (
            <motion.p custom={3} variants={fadeUp} initial="hidden" animate="show"
              className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              {paragraph}
            </motion.p>
          ) : (
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">{paragraph}</p>
          )}

          {/* CTAs */}
          {animate ? (
            <motion.div custom={4} variants={fadeUp} initial="hidden" animate="show" className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={cta.href}>{cta.label}</Button>
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="secondary" surface="dark">{secondaryCta.label}</Button>
              )}
            </motion.div>
          ) : (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={cta.href}>{cta.label}</Button>
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="secondary" surface="dark">{secondaryCta.label}</Button>
              )}
            </div>
          )}

          {/* Credenciales */}
          {animate ? (
            <motion.div custom={5} variants={fadeUp} initial="hidden" animate="show"
              className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6">
              {credentials.map((c, i) => (
                <span key={c} className="flex items-center gap-6 text-xs font-semibold uppercase tracking-label text-white/50">
                  {i > 0 && <span className="hidden h-1 w-1 rounded-full bg-accent/60 sm:inline-block" />}
                  {c}
                </span>
              ))}
            </motion.div>
          ) : (
            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6">
              {credentials.map((c, i) => (
                <span key={c} className="flex items-center gap-6 text-xs font-semibold uppercase tracking-label text-white/50">
                  {i > 0 && <span className="hidden h-1 w-1 rounded-full bg-accent/60 sm:inline-block" />}
                  {c}
                </span>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
