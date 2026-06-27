import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] w-full items-center justify-center bg-ink px-6 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <p className="label flex items-center justify-center gap-3 text-accent">
          <span className="inline-block h-px w-8 bg-accent" />
          Error 404
          <span className="inline-block h-px w-8 bg-accent" />
        </p>

        <h1 className="mt-6 font-display text-[clamp(4rem,14vw,9rem)] font-extrabold uppercase leading-[0.85] tracking-hero">
          Página no encontrada
        </h1>

        <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-white/60 md:text-lg">
          La página que buscás no existe o fue movida. Volvé al inicio y seguí
          explorando.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/" className="btn-primary">
            Volver al inicio
          </Link>
          <Link href="/vive-para-contarlo" className="btn-secondary-dark">
            Escuchar el podcast
          </Link>
        </div>
      </div>
    </section>
  );
}
