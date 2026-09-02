import Link from "next/link";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { seminars } from "@/lib/content";

export const metadata = {
  title: "Seminarios — Santiago Rocca",
  description: seminars.subtitle,
};

export default function SeminariosPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative flex min-h-[50vh] w-full items-end overflow-hidden bg-ink text-white">
        <div aria-hidden className="pointer-events-none absolute -right-40 top-0 h-[40rem] w-[40rem] rounded-full bg-brand/10 blur-3xl" />
        <div aria-hidden className="absolute left-0 top-0 h-full w-1 bg-brand" />

        <div className="relative z-10 mx-auto w-full max-w-content px-6 pb-20 pt-40 md:px-8">
          <Reveal>
            <p className="label flex items-center gap-3 text-accent">
              <span className="inline-block h-px w-8 bg-accent" />
              {seminars.eyebrow}
            </p>
            <h1 className="mt-4 font-display text-[clamp(3.5rem,9vw,7rem)] font-extrabold uppercase leading-[0.9] tracking-hero">
              {seminars.title}
            </h1>
            <div className="mt-6 h-1 w-20 bg-accent" />
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
              {seminars.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── GRILLA DE SEMINARIOS ─── */}
      <SectionWrapper variant="dark">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {seminars.index.map((seminar) => {
            const isActive = Boolean(seminar.href);
            const card = (
              <div
                className={`flex h-full flex-col gap-5 rounded-sm border p-8 transition-colors duration-300 ${
                  isActive
                    ? "border-ink-border bg-ink-surface hover:border-accent"
                    : "border-ink-border/50 bg-ink-surface/40"
                }`}
              >
                <span
                  className={`label inline-flex w-fit items-center rounded-sm px-3 py-1 ${
                    isActive
                      ? "bg-accent/15 text-accent"
                      : "bg-white/5 text-white/30"
                  }`}
                >
                  {seminar.status}
                </span>
                <h2
                  className={`font-display text-2xl font-bold uppercase tracking-tight md:text-3xl ${
                    isActive ? "text-white" : "text-white/40"
                  }`}
                >
                  {seminar.name}
                </h2>
                <p className={`text-sm leading-relaxed md:text-base ${isActive ? "text-white/60" : "text-white/30"}`}>
                  {seminar.description}
                </p>
              </div>
            );

            return (
              <Reveal key={seminar.slug}>
                {isActive ? (
                  <Link href={seminar.href as string} className="block h-full">
                    {card}
                  </Link>
                ) : (
                  <div className="h-full cursor-not-allowed">{card}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </SectionWrapper>
    </>
  );
}
