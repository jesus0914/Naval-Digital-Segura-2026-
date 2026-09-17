"use client";

import KahootRetos from "@/app/components/KahootRetos";

const retos = [
  {
    pregunta: "¿Debes compartir tu contraseña con amigos?",
    opciones: ["Sí", "No"],
    correcta: "No"
  },
  {
    pregunta: "¿Qué haces si un extraño te escribe?",
    opciones: ["Le respondo", "Le aviso a un adulto"],
    correcta: "Le aviso a un adulto"
  },
  {
    pregunta: "¿Qué debes hacer antes de descargar un juego?",
    opciones: ["Preguntar a un adulto", "Descargarlo rápido"],
    correcta: "Preguntar a un adulto"
  },
  {
    pregunta: "¿Es bueno usar internet con respeto?",
    opciones: ["Sí", "No"],
    correcta: "Sí"
  },
  {
    pregunta: "¿Debes decir tu nombre completo en internet?",
    opciones: ["No", "Sí"],
    correcta: "No"
  },
  {
    pregunta: "¿Qué haces si ves algo raro en internet?",
    opciones: ["Lo ignoro", "Aviso a un adulto"],
    correcta: "Aviso a un adulto"
  },
  {
    pregunta: "¿Es bueno usar internet todo el día?",
    opciones: ["No", "Sí"],
    correcta: "No"
  },
  {
    pregunta: "¿Debes aceptar a desconocidos en juegos?",
    opciones: ["No", "Sí"],
    correcta: "No"
  },
  {
    pregunta: "¿Qué es lo correcto en internet?",
    opciones: ["Respetar a otros", "Insultar"],
    correcta: "Respetar a otros"
  },
  {
    pregunta: "¿Debes cuidar tus datos personales?",
    opciones: ["Sí", "No"],
    correcta: "Sí"
  }
];

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <KahootRetos retos={retos} />
    </main>
  );
}