"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Repeat,
  MessagesSquare,
  Compass,
  Zap,
  HeartPulse,
  type LucideIcon,
} from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

// Mapa explícito de íconos — permite tree-shaking (evita el barrel completo).
const iconMap: Record<string, LucideIcon> = {
  Brain,
  Repeat,
  MessagesSquare,
  Compass,
  Zap,
  HeartPulse,
};

export interface Pillar {
  name: string;
  description: string;
  /** Clave de `iconMap` (p. ej. "Brain"). */
  icon: string;
}

interface PillarsGridProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: Pillar[];
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function PillarsGrid({ eyebrow, title, subtitle, items }: PillarsGridProps) {
  return (
    <SectionWrapper variant="dark">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <p className="label flex items-center gap-3 text-accent">
          <span className="inline-block h-px w-8 bg-accent" />
          {eyebrow}
        </p>
        <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,4rem)] font-extrabold uppercase leading-tight tracking-tight">
          {title}
        </h2>
        <div className="mt-4 h-1 w-10 bg-brand" />
        <p className="mt-5 text-base leading-relaxed text-white/50 md:text-lg">{subtitle}</p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {items.map((pillar) => {
          const Icon = iconMap[pillar.icon];
          return (
            <motion.div
              key={pillar.name}
              variants={item}
              className="group flex flex-col gap-5 rounded-sm border border-ink-border bg-ink-surface p-8 transition-colors duration-300 hover:border-accent"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand/15 text-accent transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                {Icon ? <Icon size={22} strokeWidth={1.75} /> : null}
              </span>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                {pillar.name}
              </h3>
              <p className="text-sm leading-relaxed text-white/50">{pillar.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
