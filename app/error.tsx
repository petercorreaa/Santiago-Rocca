"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("[AppError]", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-8 bg-ink px-6 text-center text-white">
      <div className="h-1 w-12 bg-accent" />
      <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight">
        Algo salió mal
      </h2>
      <p className="max-w-md text-sm text-white/50">
        Ocurrió un error inesperado. Podés intentar recargar la página.
      </p>
      <button onClick={reset} className="btn-primary">
        Intentar de nuevo
      </button>
    </div>
  );
}
