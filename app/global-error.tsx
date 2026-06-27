"use client";

import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

// Captura errores en el root layout (incluye fallos de fuentes, CSS, etc.)
export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("[GlobalError]", error);
  }, [error]);

  return (
    <html lang="es">
      <body
        style={{
          background: "#0A0A0A",
          color: "#fff",
          fontFamily: "system-ui, sans-serif",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          gap: "1.5rem",
          textAlign: "center",
          padding: "1.5rem",
        }}
      >
        <div style={{ height: 4, width: 48, background: "#C4900A" }} />
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.03em" }}>
          Error crítico
        </h1>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", maxWidth: 400 }}>
          La página no pudo cargar correctamente. Recargá e intentá de nuevo.
        </p>
        <button
          onClick={reset}
          style={{
            background: "#C4900A",
            color: "#0A0A0A",
            border: "none",
            padding: "1rem 2rem",
            fontWeight: 700,
            fontSize: "0.875rem",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            cursor: "pointer",
          }}
        >
          Recargar
        </button>
      </body>
    </html>
  );
}
