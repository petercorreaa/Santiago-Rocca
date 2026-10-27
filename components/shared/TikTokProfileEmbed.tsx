"use client";

import { useEffect, useRef, useState } from "react";

interface TikTokProfileEmbedProps {
  username: string;
  label: string;
}

/**
 * Feed oficial del perfil de TikTok: muestra los videos más recientes y se actualiza solo.
 * Si TikTok no lo carga (bloqueo, red), el bloque entero se oculta para no dejar un hueco.
 */
export function TikTokProfileEmbed({ username, label }: TikTokProfileEmbedProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    const timer = setTimeout(() => {
      const iframe = ref.current?.querySelector("iframe");
      // Un feed cargado mide varios cientos de px; una página de error o un iframe vacío, bastante menos.
      if (!iframe || iframe.getBoundingClientRect().height < 300) setFailed(true);
    }, 10000);

    return () => {
      script.remove();
      clearTimeout(timer);
    };
  }, []);

  if (failed) return null;

  return (
    <div ref={ref}>
      <p className="label mb-5 text-brand">{label}</p>
      <blockquote
        className="tiktok-embed"
        cite={`https://www.tiktok.com/@${username}`}
        data-unique-id={username}
        data-embed-type="creator"
        style={{ maxWidth: 780, minWidth: 288, margin: "0 auto" }}
      >
        <section>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.tiktok.com/@${username}?refer=creator_embed`}
          >
            @{username}
          </a>
        </section>
      </blockquote>
    </div>
  );
}
