"use client";

import React from "react";

type RevealDirection = "up" | "left" | "right";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Delay en segundos antes de iniciar la transición de entrada. */
  delay?: number;
  /** Dirección del desplazamiento inicial (por defecto, desde abajo). */
  direction?: RevealDirection;
  children: React.ReactNode;
}

/**
 * Progressive-enhancement reveal.
 *
 * El contenido se sirve SIEMPRE visible en el HTML del servidor: si el
 * JavaScript no carga (o tarda), la página sigue siendo legible. Solo cuando
 * el cliente hidrata —y únicamente si el visitante no pide movimiento
 * reducido— se ocultan los elementos que arrancan fuera del viewport y se
 * revelan con una transición CSS al entrar en pantalla vía IntersectionObserver.
 *
 * Reemplaza el patrón `initial={{opacity: 0}} + whileInView` de framer-motion,
 * que dejaba el contenido invisible para usuarios con `prefers-reduced-motion`.
 */
export function Reveal({
  delay = 0,
  direction = "up",
  className,
  children,
  ...rest
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Elementos que arrancan (casi) dentro del viewport no se ocultan nunca:
    // así no hay parpadeo de "visible → oculto → visible" arriba del fold.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    el.dataset.reveal = direction;
    if (delay > 0) el.style.setProperty("--reveal-delay", `${delay}s`);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          el.dataset.reveal = "visible";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  );
}
