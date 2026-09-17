import Link from "next/link";
import {
  ShieldCheck,
  Users,
  BookOpen,
  GraduationCap,
} from "lucide-react";
export default function EstudiantesPage() {
 const niveles = [
  {
    titulo: "Primaria",
    grados: "1° a 5°",
    descripcion:
      "Descubre el mundo digital de forma segura mediante actividades dinámicas, juegos educativos y recursos interactivos que enseñan hábitos responsables en internet desde edades tempranas.",
    objetivos: [
      "Reconocer situaciones de riesgo en internet",
      "Crear contraseñas seguras y proteger información personal",
      "Desarrollar hábitos digitales responsables",
    ],
    ruta: "/estudiantes/primaria",
    color: "from-sky-500 to-blue-600",
  },
  {
    titulo: "Secundaria",
    grados: "6° a 9°",
    descripcion:
      "Fortalece tus conocimientos sobre seguridad digital, privacidad y ciudadanía digital para enfrentar los desafíos actuales del entorno tecnológico y las redes sociales.",
    objetivos: [
      "Identificar amenazas digitales y fraudes en línea",
      "Proteger la identidad y reputación digital",
      "Prevenir el ciberacoso, grooming y sextorsión",
    ],
    ruta: "/estudiantes/secundaria",
    color: "from-indigo-500 to-purple-600",
  },
  {
    titulo: "Media",
    grados: "10° y 11°",
    descripcion:
      "Desarrolla competencias avanzadas en ética digital, ciberseguridad y pensamiento crítico para utilizar la tecnología de manera segura en contextos académicos y laborales.",
    objetivos: [
      "Comprender principios básicos de ciberseguridad",
      "Aplicar criterios éticos en entornos digitales",
      "Fortalecer pensamiento crítico frente a la información digital",
    ],
    ruta: "/estudiantes/media",
    color: "from-emerald-500 to-teal-600",
  },
];
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 px-6">

      <div className="max-w-7xl mx-auto space-y-14">

        {/* HEADER */}
        <section className="relative text-center pt-16 md:pt-24">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-50 border border-cyan-200 shadow-sm">

            <ShieldCheck className="w-5 h-5 text-cyan-600" />

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
              Formación en Ciberseguridad y Ciudadanía Digital
            </span>

          </div>

          {/* Título */}
          <h1 className="mt-10 text-5xl md:text-7xl font-black tracking-tight leading-tight text-slate-900">

            Comunidad

            <span className="block text-cyan-600">
              Estudiantil
            </span>

          </h1>

          {/* Subtítulo */}
          <p className="mt-8 text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">

            Aprende a utilizar la tecnología de forma
            <span className="font-semibold text-cyan-700"> segura</span>,
            <span className="font-semibold text-cyan-700"> responsable</span> y
            <span className="font-semibold text-cyan-700"> ética</span>,
            fortaleciendo tus competencias digitales para afrontar los retos del mundo actual.

          </p>

          {/* Descripción */}
          <div className="mt-10 max-w-5xl mx-auto">

            <p className="text-lg text-slate-600 leading-8">

              Bienvenido a <strong className="text-slate-900">Naval Digital Segura</strong>,
              un espacio académico diseñado para promover la cultura de la ciberseguridad,
              el pensamiento crítico, la ciudadanía digital y el uso responsable de las
              tecnologías de la información. Aquí encontrarás recursos interactivos,
              contenidos educativos y actividades adaptadas a cada nivel escolar para
              fortalecer tus conocimientos y desarrollar hábitos digitales seguros.

            </p>

          </div>

          {/* Frase destacada */}
          <div className="mt-12 max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-cyan-600 to-sky-600 p-8 shadow-xl">

            <h2 className="text-2xl md:text-3xl font-black text-white">
              "La mejor forma de proteger el futuro digital es aprender a navegar con conocimiento, responsabilidad y respeto."
            </h2>

          </div>

        </section>
          {/* CARDS INFO */}
        <section className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-6 py-8">

          {/* CARD 1 */}
          <article className="group relative overflow-hidden rounded-[30px] border border-cyan-100 bg-white p-6 shadow-lg transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-cyan-200/40">

            {/* Fondo decorativo */}
            <div className="absolute -right-14 -top-14 w-48 h-48 rounded-full bg-cyan-200/30 blur-3xl transition-all duration-700 group-hover:scale-150"></div>

            {/* Número */}
            <span className="absolute top-5 right-5 text-6xl font-black text-slate-100 transition group-hover:text-cyan-100">
              01
            </span>

            {/* Icono */}
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">

              <GraduationCap className="w-8 h-8 text-white" />

            </div>

            <h3 className="mt-7 text-2xl font-black text-slate-900">
              Propósito Educativo
            </h3>

            <p className="mt-4 text-slate-600 leading-7">
              Fortalecer las competencias digitales mediante el uso seguro,
              responsable y ético de la tecnología en los diferentes entornos educativos.
            </p>

            <div className="mt-6 h-1 w-14 rounded-full bg-gradient-to-r from-cyan-500 to-sky-400 transition-all duration-500 group-hover:w-24"></div>

          </article>

          {/* CARD CENTRAL */}
          <article className="group relative overflow-hidden rounded-[34px] bg-gradient-to-br from-cyan-600 via-sky-600 to-blue-700 p-[2px] shadow-2xl scale-[1.03] transition-all duration-700 hover:scale-[1.06]">

            <div className="relative h-full rounded-[32px] bg-gradient-to-br from-cyan-600 via-sky-700 to-blue-800 p-7 overflow-hidden">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.18),transparent_45%)]"></div>

              <div className="absolute -left-20 bottom-0 w-60 h-60 rounded-full bg-white/10 blur-3xl"></div>

              <div className="absolute -right-12 top-0 w-48 h-48 rounded-full bg-cyan-300/20 blur-3xl"></div>

              <span className="absolute top-5 right-5 text-6xl font-black text-white/10">
                02
              </span>

              <div className="relative w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">

                <ShieldCheck className="w-8 h-8 text-white" />

              </div>

              <h3 className="relative mt-7 text-2xl font-black text-white">
                Cultura de Protección
              </h3>

              <p className="relative mt-4 text-cyan-100 leading-7">
                Promovemos una cultura de prevención que permita identificar riesgos,
                proteger la información y fomentar una ciudadanía digital responsable.
              </p>

              <div className="mt-6 h-1 w-14 rounded-full bg-white/70 transition-all duration-500 group-hover:w-24"></div>

            </div>

          </article>

          {/* CARD 3 */}
          <article className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-6 shadow-lg transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-violet-200/40">

            <div className="absolute -left-14 bottom-0 w-48 h-48 rounded-full bg-violet-200/30 blur-3xl transition-all duration-700 group-hover:scale-150"></div>

            <span className="absolute top-5 right-5 text-6xl font-black text-slate-100 transition group-hover:text-violet-100">
              03
            </span>

            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">

              <BookOpen className="w-8 h-8 text-white" />

            </div>

            <h3 className="mt-7 text-2xl font-black text-slate-900">
              Aprendizaje Progresivo
            </h3>

            <p className="mt-4 text-slate-600 leading-7">
              Contenidos organizados por niveles educativos para fortalecer las habilidades
              digitales mediante experiencias prácticas e interactivas.
            </p>

            <div className="mt-6 h-1 w-14 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 transition-all duration-500 group-hover:w-24"></div>

          </article>

        </section>
 
        {/* ================= RUTA DE FORMACIÓN ================= */}
        <section className="relative overflow-hidden py-20">

          {/* Fondo */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-50 via-white to-slate-50" />

          <div className="relative mx-auto max-w-6xl px-6">

          {/* ================= ENCABEZADO ================= */}
          <div className="relative mx-auto mb-24 max-w-5xl text-center">

            {/* Glow */}
            <div className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-[120px]" />

            {/* Badge */}
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-200/80 bg-white/80 px-6 py-3 shadow-lg backdrop-blur-xl">

              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-70" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-500" />
              </span>

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
                Plataforma de Formación
              </span>

            </div>

            {/* Título */}
            <h2 className="mt-10 text-5xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl lg:text-7xl">

              Aprende a proteger tu

              <span className="mt-2 block bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
                Ciudadanía Digital
              </span>

            </h2>

            {/* Texto */}
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">

              Accede a una ruta de aprendizaje diseñada para cada nivel educativo,
              fortaleciendo habilidades en seguridad digital, privacidad,
              ciudadanía responsable y uso ético de las tecnologías mediante
              recursos interactivos y experiencias prácticas.

            </p>

            {/* Línea */}
            <div className="mx-auto mt-10 h-1.5 w-40 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600" />

            {/* Estadísticas */}
            <div className="mt-14 grid gap-6 sm:grid-cols-3">

              <div className="group rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-md backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-xl">

                <p className="text-4xl font-black text-cyan-600">
                  3
                </p>

                <h3 className="mt-2 font-bold text-slate-900">
                  Niveles educativos
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Primaria, Secundaria y Media.
                </p>

              </div>

              <div className="group rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-md backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-xl">

                <p className="text-4xl font-black text-cyan-600">
                  11
                </p>

                <h3 className="mt-2 font-bold text-slate-900">
                  Grados escolares
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Contenido organizado desde 1° hasta 11°.
                </p>

              </div>

              <div className="group rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-md backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-xl">

                <p className="text-4xl font-black text-cyan-600">
                  100%
                </p>

                <h3 className="mt-2 font-bold text-slate-900">
                  Aprendizaje interactivo
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Recursos, actividades y desafíos para cada etapa.
                </p>

              </div>

            </div>

          </div>

            {/* Tarjetas */}
            <div className="grid justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3">

              {niveles.map((nivel, index) => (

              <article
                key={nivel.titulo}
                className="group relative flex h-full w-full max-w-[340px] flex-col overflow-hidden rounded-[30px]
                border border-slate-200/70 bg-white/90 backdrop-blur-lg
                shadow-[0_8px_30px_rgba(15,23,42,0.08)]
                transition-all duration-500
                hover:-translate-y-3 hover:border-cyan-300
                hover:shadow-[0_25px_60px_rgba(6,182,212,0.18)]"
              >

                {/* Glow */}
                <div className="absolute -top-20 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl opacity-0 transition duration-700 group-hover:opacity-100" />

                {/* Barra */}
                <div className={`relative h-2 bg-gradient-to-r ${nivel.color}`}>
                  <div className="absolute inset-0 animate-pulse bg-white/20" />
                </div>

                {/* Número */}
                <span className="absolute right-6 top-5 text-7xl font-black text-slate-100 transition duration-500 group-hover:scale-110">
                  0{index + 1}
                </span>

                <div className="relative flex flex-1 flex-col p-7">

                  {/* Badge */}
                  <div className="flex items-center justify-between">

                    <span
                      className={`rounded-full bg-gradient-to-r ${nivel.color} px-4 py-1.5 text-xs font-bold tracking-wide text-white shadow-md`}
                    >
                      Grados {nivel.grados}
                    </span>

                  </div>

                  {/* Título */}
                  <h3 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900">
                    {nivel.titulo}
                  </h3>

                  {/* Descripción */}
                  <p className="mt-5 text-[15px] leading-7 text-slate-600">
                    {nivel.descripcion}
                  </p>

                  {/* Competencias */}
                  <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50 p-5">

                    <h4 className="mb-4 text-sm font-bold text-slate-900">
                      Competencias
                    </h4>

                    <div className="space-y-4">

                      {nivel.objetivos.map((objetivo, i) => (

                        <div
                          key={i}
                          className="flex items-start gap-3"
                        >

                          <div
                            className={`mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r ${nivel.color}`}
                          />

                          <span className="text-sm leading-6 text-slate-700">
                            {objetivo}
                          </span>

                        </div>

                      ))}

                    </div>

                  </div>

                  {/* Botón */}
                  <Link
                    href={nivel.ruta}
                    className="mt-auto pt-8"
                  >

                    <div
                      className={`group/button flex items-center justify-between rounded-2xl bg-gradient-to-r ${nivel.color}
                      px-6 py-4 text-white transition duration-300 hover:shadow-xl`}
                    >

                      <div>

                        <p className="font-bold">
                          Explorar contenido
                        </p>

                        <span className="text-xs text-white/80">
                          Recursos • Actividades
                        </span>

                      </div>

                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover/button:translate-x-1 group-hover/button:bg-white">

                        <span className="text-xl font-bold text-white group-hover/button:text-cyan-600">
                          →
                        </span>

                      </div>

                    </div>

                  </Link>

                </div>

              </article>

              ))}

            </div>

          </div>

        </section>

        {/* FOOTER */}
        <section className="bg-slate-900 text-white rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-bold">
            Comunidad Digital Segura
          </h3>
          <p className="text-slate-300 mt-4">
            Formación en ciberseguridad para estudiantes.
          </p>
        </section>

      </div>
    </main>
  );
}