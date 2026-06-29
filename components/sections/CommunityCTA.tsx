import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

interface CommunityCTAProps {
  title: string;
  text: string;
  cta: { label: string; href: string };
}

/** CTA final sobre fondo acento (amarillo oscuro), botón negro. */
export function CommunityCTA({ title, text, cta }: CommunityCTAProps) {
  return (
    <section className="w-full bg-accent text-ink">
      <div className="mx-auto w-full max-w-content px-6 py-24 md:px-8 md:py-32">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold uppercase leading-none tracking-tight">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/75 md:text-lg">
            {text}
          </p>
          <Link
            href={cta.href}
            className="mt-10 inline-flex items-center justify-center gap-3 rounded-sm bg-ink px-8 py-4 text-sm font-bold uppercase tracking-label text-white transition-all duration-200 hover:-translate-y-px hover:bg-ink-surface"
          >
            <MessageCircle size={18} />
            {cta.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
