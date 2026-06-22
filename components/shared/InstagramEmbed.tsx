"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

// Carga el script oficial de Instagram una sola vez para toda la app.
let scriptPromise: Promise<void> | null = null;

function loadEmbedScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.instgrm) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src*="instagram.com/embed.js"]',
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      return;
    }
    const s = document.createElement("script");
    s.src = "https://www.instagram.com/embed.js";
    s.async = true;
    s.onload = () => resolve();
    document.body.appendChild(s);
  });
  return scriptPromise;
}

interface InstagramEmbedProps {
  /** Permalink de un post o reel: https://www.instagram.com/p/XXXX/ o /reel/XXXX/ */
  url: string;
  className?: string;
}

/**
 * Incrusta un post/reel de Instagram con el embed oficial (embed.js).
 * Funciona solo con permalinks de posts individuales, no con perfiles.
 */
export function InstagramEmbed({ url, className = "" }: InstagramEmbedProps) {
  useEffect(() => {
    let active = true;
    loadEmbedScript().then(() => {
      if (active && window.instgrm) window.instgrm.Embeds.process();
    });
    return () => {
      active = false;
    };
  }, [url]);

  return (
    <div className={`overflow-hidden rounded-sm border border-ink-border ${className}`}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ width: "100%", margin: 0, minWidth: 0 }}
      />
    </div>
  );
}
