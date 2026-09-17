"use client";

import { useState } from "react";
import {
  ShieldCheck,
  KeyRound,
  Eye,
  BrainCircuit,
  Users,
  Globe,
  Smartphone,
  ShieldAlert,
} from "lucide-react";

export default function BestPractices() {
  const practices = [
    {
      title: "Dispositivos Digitales",
      description:
        "Utiliza celulares, tablets y computadores de forma responsable para estudiar, investigar y comunicarte de manera segura.",
      icon: Smartphone,
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Redes Sociales",
      description:
        "Protege tu privacidad, configura correctamente tus cuentas y piensa antes de publicar información personal.",
      icon: Globe,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Ciberacoso",
      description:
        "Identifica conductas de acoso digital, apoya a las víctimas y reporta cualquier situación inapropiada.",
      icon: ShieldAlert,
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Phishing",
      description:
        "Desconfía de mensajes, enlaces o correos sospechosos que intenten robar tu información personal.",
      icon: ShieldCheck,
      color: "from-emerald-500 to-green-600",
    },
    {
      title: "Contraseñas Seguras",
      description:
        "Crea contraseñas robustas, únicas y utiliza autenticación en dos pasos para proteger tus cuentas.",
      icon: KeyRound,
      color: "from-violet-500 to-purple-600",
    },
    {
      title: "Inteligencia Artificial",
      description:
        "Usa herramientas de IA de forma ética y responsable, verificando siempre la información obtenida.",
      icon: BrainCircuit,
      color: "from-fuchsia-500 to-pink-600",
    },
    {
      title: "Huella Digital",
      description:
        "Todo lo que publicas en internet puede permanecer durante años. Piensa antes de compartir.",
      icon: Eye,
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Ciudadanía Digital",
      description:
        "Promueve el respeto, la empatía y el uso responsable de la tecnología dentro y fuera del colegio.",
      icon: Users,
      color: "from-sky-500 to-cyan-600",
    },
  ];

  const [selected, setSelected] = useState(0);

  const active = practices[selected];
  const ActiveIcon = active.icon;

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
            <ShieldCheck className="w-4 h-4 text-blue-700" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">
              Naval Digital 2026
            </span>
          </div>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-slate-900">
            Ruta del Ciudadano
            <span className="block text-blue-700">
              Digital Responsable
            </span>
          </h2>

          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
            Explora los principales temas para desenvolverte de forma segura,
            ética y responsable en el entorno digital.
          </p>
        </div>

        {/* PANEL PRINCIPAL */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">

            <div
              className={`absolute inset-0 bg-gradient-to-r ${active.color} opacity-5`}
            />

            <div className="relative p-8 md:p-14">
              <div className="flex flex-col md:flex-row items-center gap-10">

                <div
                  className={`w-28 h-28 rounded-3xl bg-gradient-to-br ${active.color} flex items-center justify-center shadow-xl shrink-0`}
                >
                  <ActiveIcon className="w-14 h-14 text-white" />
                </div>

                <div className="text-center md:text-left">

                  <div className="text-sm font-black tracking-widest text-blue-700 mb-2">
                    PASO {String(selected + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-slate-900">
                    {active.title}
                  </h3>

                  <p className="mt-4 text-slate-600 text-lg leading-relaxed max-w-3xl">
                    {active.description}
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TIMELINE INTERACTIVA */}
        <div className="relative">

          <div className="absolute top-10 left-0 right-0 h-1 bg-slate-200 rounded-full" />

          <div className="relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">

            {practices.map((item, index) => {
              const Icon = item.icon;
              const activeItem = selected === index;

              return (
                <button
                  key={index}
                  onClick={() => setSelected(index)}
                  className="group flex flex-col items-center"
                >
                  <div
                    className={`
                      relative z-10
                      w-20 h-20
                      rounded-3xl
                      flex items-center justify-center
                      transition-all duration-300
                      border-4 border-white
                      ${
                        activeItem
                          ? `bg-gradient-to-br ${item.color} scale-110 shadow-2xl`
                          : "bg-white shadow-lg hover:shadow-xl hover:scale-105"
                      }
                    `}
                  >
                    <Icon
                      className={`w-9 h-9 ${
                        activeItem
                          ? "text-white"
                          : "text-slate-700 group-hover:text-blue-700"
                      }`}
                    />
                  </div>

                  <div className="mt-4 text-xs font-black tracking-widest text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <span
                    className={`mt-1 text-sm font-bold text-center transition-colors ${
                      activeItem
                        ? "text-blue-700"
                        : "text-slate-700"
                    }`}
                  >
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* MENSAJE FINAL */}
        <div className="mt-24">
          <div className="rounded-[32px] bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-12 text-center text-white">

            <h3 className="text-3xl md:text-4xl font-black">
              Navega con seguridad
            </h3>

            <p className="mt-4 max-w-3xl mx-auto text-slate-300 text-lg">
              Cada decisión que tomas en internet construye tu identidad digital.
              Aprende, protege tu información y utiliza la tecnología de forma
              responsable.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}