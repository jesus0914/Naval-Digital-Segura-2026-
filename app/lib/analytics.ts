"use client";

import { ref, push, set, serverTimestamp } from "firebase/database";
import { database } from "./firebase";

const VISITOR_KEY = "naval_digital_segura_visitor_id";

function getVisitorId(): string {
  if (typeof window === "undefined") {
    return "server";
  }

  let visitorId = localStorage.getItem(VISITOR_KEY);

  if (!visitorId) {
    visitorId = `VST-${crypto.randomUUID()}`;
    localStorage.setItem(VISITOR_KEY, visitorId);
  }

  return visitorId;
}

export async function registrarVisita(
  seccion: string,
  ruta?: string
) {
  if (typeof window === "undefined") return;

  try {
    const visitorId = getVisitorId();

    const visitaRef = push(ref(database, "visitas"));

    await set(visitaRef, {
      visitorId,
      seccion,
      ruta: ruta || window.location.pathname,
      fecha: new Date().toISOString(),
      timestamp: serverTimestamp(),
      userAgent: navigator.userAgent,
      idioma: navigator.language,
      pantalla: `${window.innerWidth}x${window.innerHeight}`,
    });

    console.log("Visita registrada:", visitorId);
  } catch (error) {
    console.error("Error registrando visita:", error);
  }
}