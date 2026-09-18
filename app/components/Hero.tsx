import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[680px] flex items-center overflow-hidden bg-[#070d1a] text-white font-sans">
    {/* Imagen de Fondo - 100% Clara y sin filtros oscuros */}
    <div className="absolute inset-0 z-0 opacity-70 md:opacity-100 md:left-1/3 lg:left-1/2 w-full md:w-2/3 lg:w-1/2 h-full">
  <Image
    src="/colegio.png"
    alt="Colegio Naval de Crespo"
    fill
    priority
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover object-center"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-[#070d1a] via-[#070d1a]/10 to-transparent" />
</div>

      {/* Fondo limpio: Eliminamos el degradado negro superior para dar luz total */}
      <div className="absolute inset-0 bg-[#070d1a]/5 z-0" />
      {/* Degradado ambiental mínimo para que la foto mantenga su luz original */}

      {/* Degradado ambiental suave de fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070d1a]/20 via-[#070d1a]/75 to-[#050a14] z-0" />

      {/* Contenedor del Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12">
        <div className="max-w-3xl">
          
          {/* Tag de Campaña Oficial */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-xs font-bold tracking-[0.2em] uppercase mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            Naval Digital Segura 2026
          </div>

          {/* Título Principal */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.95] uppercase">
            Conectados con
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 font-black">
              Responsabilidad
            </span>
          </h1>

          {/* Eslogan Oficial */}
          <div className="mt-6 border-l-4 border-yellow-400 pl-4 py-1">
            <p className="text-xl md:text-2xl font-medium text-slate-200 italic">
              "Tecnología para aprender, no para perjudicar."
            </p>
          </div>

          {/* Texto de Introducción */}
          <p className="mt-6 text-slate-300 text-lg max-w-2xl leading-relaxed">
            Vivimos en un mundo digital lleno de oportunidades, pero también de riesgos. Esta campaña busca informarte, orientarte y ayudarte a tomar decisiones responsables.
          </p>

          {/* Botones de Acción */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/campana"
              className="px-8 py-3.5 rounded bg-gradient-to-r from-yellow-500 to-amber-500 text-[#070d1a] font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:from-yellow-400 hover:to-amber-400 hover:shadow-lg hover:shadow-yellow-500/20 active:scale-98"
            >
              Ver Campaña
            </Link>

            <Link
              href="/estudiantes"
              className="px-8 py-3.5 rounded border border-slate-700 bg-slate-900/40 text-slate-200 font-semibold text-sm tracking-wider uppercase backdrop-blur-md transition-all duration-300 hover:bg-slate-800/60 hover:border-slate-500 active:scale-98"
            >
              Aprender a Prevenir
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
}