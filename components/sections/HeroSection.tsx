"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/shared/Button";

interface HeroSectionProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Imagen de fondo full-bleed (opcional). Si falta, cae a un degradé bordo→negro. */
  image?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function HeroSection({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image,
}: HeroSectionProps) {
  return (
    <section className="relative flex min-h-[92vh] w-full items-center overflow-hidden bg-ink text-white">
      {/* Degradé de respaldo — visible si la imagen aún no existe */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-brand/40 via-ink to-ink"
      />

      {/* Imagen de fondo */}
      {image && (
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}

      {/* Overlay oscuro semitransparente (#0A0A0A a 60%) */}
      <div aria-hidden className="absolute inset-0 bg-ink/60" />

      {/* Línea bordo vertical izquierda */}
      <div aria-hidden className="absolute left-0 top-0 z-10 h-full w-1 bg-brand" />

      <div className="relative z-10 mx-auto w-full max-w-content px-6 py-28 md:px-8">
        <div className="max-w-4xl">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-3"
          >
            <span className="brand-dot" />
            <span className="label text-accent">{eyebrow}</span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 font-display text-[clamp(3rem,8vw,6.5rem)] font-extrabold uppercase leading-[0.92] tracking-hero"
          >
            {title}
          </motion.h1>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 h-1 w-20 bg-accent"
          />

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-7 max-w-2xl text-lg leading-relaxed text-white/70 md:text-2xl"
          >
            {subtitle}
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-12 flex flex-col gap-4 sm:flex-row"
          >
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
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
