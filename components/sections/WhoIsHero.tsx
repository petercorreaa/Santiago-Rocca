"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/shared/Button";

interface WhoIsHeroProps {
  eyebrow: string;
  title: string;
  paragraph: string;
  image: string;
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

/**
 * Hero principal "Quién soy" — full-bleed con foto de Santiago + overlay,
 * al estilo tonyrobbins.com: identidad de marca personal arriba de todo.
 */
export function WhoIsHero({
  eyebrow,
  title,
  paragraph,
  image,
  cta,
  secondaryCta,
}: WhoIsHeroProps) {
  return (
    <section className="relative flex min-h-[92vh] w-full items-end overflow-hidden bg-ink text-white">
      {/* Foto de fondo (placeholder → degradé) */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(160deg, rgba(122,28,46,0.35) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.95) 100%), url(${image})`,
        }}
      />

      {/* Línea bordo vertical izquierda */}
      <div aria-hidden className="absolute left-0 top-0 z-10 h-full w-1 bg-brand" />

      <div className="relative z-10 mx-auto w-full max-w-content px-6 pb-24 pt-40 md:px-14">
        <div className="max-w-3xl">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-3"
          >
            <span className="inline-block h-px w-8 bg-accent" />
            <span className="label text-accent">{eyebrow}</span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 font-display text-[clamp(3.5rem,9vw,7.5rem)] font-extrabold uppercase leading-[0.9] tracking-hero"
          >
            {title}
          </motion.h1>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 h-1 w-20 bg-accent"
          />

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
          >
            {paragraph}
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href={cta.href}>{cta.label}</Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="secondary" surface="dark">
                {secondaryCta.label}
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
