"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { registrarVisita } from "../lib/analytics";

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const rutasRegistradas = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (!pathname) return;

    // Evita registrar dos veces la misma ruta
    // durante la misma carga de la aplicación.
    if (rutasRegistradas.current.has(pathname)) {
      return;
    }

    rutasRegistradas.current.add(pathname);

    let seccion = pathname
      .replace(/^\/+/, "")
      .replace(/\//g, "_");

    if (!seccion) {
      seccion = "inicio";
    }

    registrarVisita(seccion, pathname);
  }, [pathname]);

  return null;
}