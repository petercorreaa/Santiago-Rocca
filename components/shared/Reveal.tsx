"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Fade + slide-up sutil al entrar al viewport.
 *
 * SSR-safe: el servidor siempre renderiza contenido completamente visible.
 * La animación solo se aplica en el cliente después del montaje, lo que
 * evita el flash de pantalla blanca por mismatch de hidratación.
 */
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const [mounted, setMounted] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Antes del montaje: renderizar visible sin motion (evita opacity:0 en SSR)
  if (!mounted || prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
