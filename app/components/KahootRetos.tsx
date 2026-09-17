"use client";

import { useState } from "react";
import {
  RotateCcw,
  Gamepad2,
  Sparkles,
  AlertTriangle,
  Trophy,
  Star,
} from "lucide-react";

interface Reto {
  pregunta: string;
  opciones: string[];
  correcta: string;
}

interface Props {
  retos: Reto[];
}

export default function KahootRetos({ retos }: Props) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [xp, setXp] = useState(0);
  const [locked, setLocked] = useState(false);
  const [finished, setFinished] = useState(false);
  const [fx, setFx] = useState<"good" | "bad" | null>(null);

  const actual = retos[index];

  const XP_PER_QUESTION = 10;
  const maxXp = retos.length * XP_PER_QUESTION;

  const progress = (index / retos.length) * 100;
  const xpPercent = (xp / maxXp) * 100;

  const handleSelect = (op: string) => {
    if (locked) return;

    setSelected(op);
    setLocked(true);

    const isCorrect = op === actual.correcta;

    if (isCorrect) {
      setScore((s) => s + 1);
      setXp((x) => x + XP_PER_QUESTION);
      setFx("good");
    } else {
      setFx("bad");
    }

    setTimeout(() => {
      if (index + 1 >= retos.length) {
        setFinished(true);
        return;
      }

      setIndex((i) => i + 1);
      setSelected(null);
      setLocked(false);
      setFx(null);
    }, 900);
  };

  const reset = () => {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setXp(0);
    setLocked(false);
    setFinished(false);
    setFx(null);
  };

  /* ================= FINISHED ================= */
  if (finished) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-pink-100 to-sky-100 px-4">
        <div className="w-full max-w-md bg-white rounded-[2rem] shadow-2xl p-8 text-center border-4 border-yellow-300 animate-bounce">

          <Trophy className="w-16 h-16 mx-auto text-yellow-500 animate-pulse" />

          <h2 className="text-2xl font-black mt-4 text-slate-800">
            ¡Juego terminado!
          </h2>

          <p className="text-5xl font-black text-sky-600 mt-4">
            {score} / {retos.length}
          </p>

          <p className="text-purple-600 font-semibold mt-2 flex items-center justify-center gap-1">
            <Star className="w-4 h-4" /> XP: {xp}
          </p>

          <button
            onClick={reset}
            className="mt-6 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white py-3 rounded-2xl font-bold shadow-lg hover:scale-105 active:scale-95 transition"
          >
            <RotateCcw className="w-4 h-4" />
            Jugar otra vez
          </button>
        </div>
      </div>
    );
  }

  /* ================= GAME ================= */
  return (
<section className="min-h-screen flex items-center justify-center px-4 py-25 relative overflow-hidden bg-[radial-gradient(circle_at_top,_#e0f2fe_0%,_#eef2ff_45%,_#ffffff_100%)]">
  {/* FX */}
  {fx && (
    <div
      aria-live="polite"
      className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
    >
      <div
        className={`text-7xl sm:text-8xl animate-bounce drop-shadow-2xl ${
          fx === "good" ? "text-green-500" : "text-red-500"
        }`}
      >
        {fx === "good" ? "🎉" : "💥"}
      </div>
    </div>
  )}

  {/* GAME CARD */}
  <div className="relative z-10 w-full max-w-xl">
    {/* HUD */}
    <div className="mb-5 text-center">
      <div className="flex justify-center">
        <div className="bg-white/90 backdrop-blur shadow-xl rounded-2xl p-3 border border-indigo-100">
          <Gamepad2 className="w-10 h-10 text-indigo-600" />
        </div>
      </div>

      <h1 className="text-3xl sm:text-4xl font-black mt-3 text-indigo-700 tracking-tight drop-shadow-sm">
        CIBER JUEGO PRO
      </h1>

      <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-indigo-100 shadow-sm text-sm font-bold text-slate-600">
        Nivel {index + 1}
        <span className="text-slate-300">/</span>
        {retos.length}
      </div>

      {/* XP BAR */}
      <div className="mt-5">
        <div className="flex items-center justify-between mb-1 text-xs font-bold text-slate-500">
          <span>XP</span>
          <span>{xp} / {maxXp}</span>
        </div>

        <div
          className="w-full h-3 bg-white rounded-full overflow-hidden shadow-inner border border-slate-200"
          role="progressbar"
          aria-valuenow={xp}
          aria-valuemin={0}
          aria-valuemax={maxXp}
        >
          <div
            className="h-full bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 transition-all duration-500"
            style={{ width: `${xpPercent}%` }}
          />
        </div>
      </div>

      {/* PROGRESS BAR */}
      <div className="mt-3">
        <div className="flex items-center justify-between mb-1 text-xs font-bold text-slate-500">
          <span>Progreso</span>
          <span>{Math.round(progress)}%</span>
        </div>

        <div className="w-full h-2 bg-white rounded-full overflow-hidden border border-slate-200">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-sky-400 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>

    {/* QUESTION CARD */}
    <div className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl p-5 sm:p-6 border border-indigo-100">
      <div className="rounded-2xl bg-indigo-50/70 border border-indigo-100 px-4 py-4">
        <h2 className="text-lg sm:text-xl font-black text-center text-slate-800 leading-snug">
          {actual.pregunta}
        </h2>
      </div>

      {/* OPTIONS */}
      <div className="mt-5 grid gap-3">
        {actual.opciones.map((op, i) => {
          const isCorrect = op === actual.correcta;
          const isSelected = op === selected;

          let style =
            "w-full min-h-14 px-4 py-3 rounded-2xl text-center font-black transition-all duration-200 active:scale-[0.98] shadow-md border-2 flex items-center justify-center gap-2";

          if (!selected) {
            style +=
              " bg-white border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer text-slate-700";
          } else if (isCorrect) {
            style +=
              " bg-green-100 border-green-500 text-green-800 shadow-green-100 animate-pulse";
          } else if (isSelected) {
            style += " bg-red-100 border-red-500 text-red-800 shadow-red-100";
          } else {
            style += " bg-slate-50 border-slate-200 text-slate-400 opacity-50";
          }

          return (
            <button
              key={i}
              type="button"
              onClick={() => handleSelect(op)}
              disabled={locked}
              className={style}
            >
              <span>{op}</span>

              {selected && isCorrect && (
                <Sparkles className="w-5 h-5 text-green-600" />
              )}

              {selected && isSelected && !isCorrect && (
                <AlertTriangle className="w-5 h-5 text-red-500" />
              )}
            </button>
          );
        })}
      </div>
    </div>

    {/* SCORE HUD */}
    <div className="text-center mt-5">
      <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur rounded-full shadow-xl text-sm font-black text-indigo-700 border border-indigo-100">
        <Trophy className="w-4 h-4 text-yellow-500" />
        Score: {score}
      </div>
    </div>
  </div>
</section>
  );
}