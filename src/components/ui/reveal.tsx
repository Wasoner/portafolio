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
 * revelan al entrar en pantalla.
 *
 * Dos mecanismos, porque uno solo no basta:
 *
 * 1. IntersectionObserver → revela con la transición CSS al hacer scroll.
 * 2. Fail-safe de scroll/resize → un "salto" de scroll (posibilidad de scroll
 *    restaurada al recargar en Safari, enlace a un ancla, `scrollTo`
 *    programático) lleva al bloque de bajo el fold a cruzar el viewport sin
 *    llegar a intersectarlo nunca, y el observer no vuelve a disparar: sin
 *    este respaldo el bloque se quedaría en `opacity: 0` para siempre. Cualquier
 *    scroll o resize que deje el bloque a la altura del viewport lo revela.
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

    // Solo se animan los bloques que arrancan completamente fuera del
    // viewport: lo que ya está visible (total o parcialmente) jamás se oculta,
    // así la hidratarción nunca "esconde" contenido que el visitante ya ve.
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    // Alias ya estrechado: `el` solo es `HTMLDivElement` después del guard de
    // arriba, y los helpers anidados necesitan esa garantía a nivel de tipos.
    const target: HTMLDivElement = el;

    let revealed = false;
    let frame = 0;

    function show() {
      if (revealed) return;
      revealed = true;
      target.dataset.reveal = "visible";
    }

    function stop() {
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
    }

    function settle() {
      // "A la altura del viewport o más arriba": el bloque ya se ve (o ya se
      // pasó), así que no puede quedarse oculto.
      if (target.getBoundingClientRect().top < window.innerHeight) {
        show();
        stop();
      }
    }

    function schedule() {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        settle();
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show();
          stop();
        }
      },
      // Cualquier píxel visible basta: así el observer y el fail-safe usan
      // exactamente el mismo criterio y no pueden divergir.
      { rootMargin: "0px", threshold: 0 }
    );

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    target.dataset.reveal = direction;
    if (delay > 0) target.style.setProperty("--reveal-delay", `${delay}s`);
    observer.observe(target);

    return stop;
  }, [delay, direction]);

  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  );
}
