"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  Brain,
  Check,
  CheckCircle2,
  CircleAlert,
  Eye,
  FileCheck2,
  Globe2,
  GraduationCap,
  LockKeyhole,
  MessageSquareText,
  Network,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  UserRoundCheck,
  X,
  Zap,
} from "lucide-react";

export default function InteligenciaArtificialPage() {
  const etapas = [
    {
      numero: "01",
      titulo: "Comprender",
      texto: "Conocer qué es la inteligencia artificial, cómo aprende y qué puede hacer.",
      icono: Brain,
    },
    {
      numero: "02",
      titulo: "Utilizar",
      texto: "Emplear herramientas de IA como apoyo para aprender, crear e investigar.",
      icono: Zap,
    },
    {
      numero: "03",
      titulo: "Verificar",
      texto: "Analizar las respuestas, contrastar información y detectar posibles errores.",
      icono: SearchCheck,
    },
    {
      numero: "04",
      titulo: "Responsabilizarse",
      texto: "Proteger los datos, respetar la autoría y tomar decisiones conscientes.",
      icono: ShieldCheck,
    },
  ];

  const usosEducativos = [
    {
      icono: GraduationCap,
      titulo: "Aprender",
      texto:
        "Solicitar explicaciones, ejemplos, ejercicios y diferentes formas de comprender un tema.",
    },
    {
      icono: MessageSquareText,
      titulo: "Crear",
      texto:
        "Generar ideas, organizar proyectos, desarrollar borradores y explorar diferentes alternativas.",
    },
    {
      icono: SearchCheck,
      titulo: "Investigar",
      texto:
        "Utilizar la IA como punto de partida y posteriormente contrastar la información con fuentes confiables.",
    },
    {
      icono: Network,
      titulo: "Programar",
      texto:
        "Comprender código, encontrar errores, explorar soluciones y aprender nuevas herramientas.",
    },
  ];

  const riesgos = [
    {
      icono: CircleAlert,
      titulo: "Información incorrecta",
      texto:
        "Una respuesta puede parecer convincente y contener datos incompletos, desactualizados o incorrectos.",
    },
    {
      icono: UserRoundCheck,
      titulo: "Dependencia",
      texto:
        "Utilizar IA para resolver todo puede reducir la práctica, la autonomía y el desarrollo del pensamiento propio.",
    },
    {
      icono: LockKeyhole,
      titulo: "Privacidad",
      texto:
        "Introducir información personal, académica o confidencial en una herramienta sin autorización puede generar riesgos.",
    },
    {
      icono: TriangleAlert,
      titulo: "Contenido engañoso",
      texto:
        "La IA puede facilitar la creación de imágenes, audios, videos o textos que parezcan auténticos sin serlo.",
    },
    {
      icono: Globe2,
      titulo: "Sesgos",
      texto:
        "Los resultados pueden reflejar limitaciones o sesgos presentes en los datos utilizados para desarrollar los modelos.",
    },
    {
      icono: Eye,
      titulo: "Falsa certeza",
      texto:
        "Una respuesta escrita con seguridad no significa que sea verdadera. La verificación sigue siendo necesaria.",
    },
  ];

  const pasosVerificacion = [
    {
      numero: "01",
      titulo: "Generar",
      texto: "Utiliza la IA para obtener una primera respuesta o propuesta.",
    },
    {
      numero: "02",
      titulo: "Analizar",
      texto: "Revisa si la respuesta tiene sentido y si responde realmente a lo que necesitas.",
    },
    {
      numero: "03",
      titulo: "Contrastar",
      texto: "Comprueba los datos importantes utilizando fuentes confiables.",
    },
    {
      numero: "04",
      titulo: "Corregir",
      texto: "Modifica, complementa o descarta aquello que no sea correcto.",
    },
  ];

  const protocolo = [
    {
      letra: "P",
      titulo: "PIENSA",
      texto: "¿Para qué necesito utilizar la IA?",
    },
    {
      letra: "I",
      titulo: "INVESTIGA",
      texto: "¿La información obtenida puede comprobarse?",
    },
    {
      letra: "E",
      titulo: "EVALÚA",
      texto: "¿La respuesta es coherente, completa y adecuada?",
    },
    {
      letra: "N",
      titulo: "NO EXPONGAS",
      texto: "¿Estoy compartiendo información que debería permanecer privada?",
    },
    {
      letra: "S",
      titulo: "SE RESPONSABLE",
      texto: "¿Estoy respetando la autoría y las normas académicas?",
    },
    {
      letra: "A",
      titulo: "ACTÚA",
      texto: "Usa la herramienta como apoyo, no como sustituto de tu criterio.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-800">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative border-b border-slate-200 bg-white">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400" />

        <div className="absolute left-[-140px] top-20 h-80 w-80 rounded-full bg-cyan-100/50 blur-3xl" />
        <div className="absolute right-[-100px] top-10 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-[1500px] px-6 pb-14 pt-10 lg:px-10 lg:pb-20 lg:pt-14">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            {/* TEXTO */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-700">
                <Sparkles className="h-4 w-4" />
                IA Responsable • Naval Digital Segura 2026
              </div>

              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
                Inteligencia{" "}
                <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Artificial
                </span>
              </h1>

              <p className="mt-5 text-2xl font-bold text-slate-700 md:text-3xl">
                Comprenderla. Utilizarla. Verificarla. Responsabilizarse.
              </p>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                La inteligencia artificial está transformando la educación,
                la comunicación, la creación de contenidos y la forma en que
                accedemos al conocimiento. Aprender a utilizarla implica
                desarrollar criterio, proteger nuestra información y
                comprender que una herramienta inteligente no reemplaza el
                pensamiento humano.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#que-es-ia"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 font-bold text-white transition hover:bg-cyan-700"
                >
                  Explorar la IA
                  <ArrowRight className="h-5 w-5" />
                </a>

                <a
                  href="#riesgos"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-bold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-700"
                >
                  Conocer los riesgos
                </a>
              </div>

              <div className="mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  ["Pensamiento crítico", "Analizar antes de aceptar"],
                  ["Seguridad digital", "Proteger antes de compartir"],
                  ["Uso responsable", "Decidir antes de utilizar"],
                ].map(([titulo, texto]) => (
                  <div
                    key={titulo}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <p className="font-bold text-slate-900">{titulo}</p>
                    <p className="mt-1 text-sm text-slate-500">{texto}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGEN */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-cyan-100/60 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-900 shadow-2xl">
                <Image
                  src="/hero-ia.png"
                  alt="Inteligencia artificial y educación"
                  width={1000}
                  height={760}
                  className="h-[460px] w-full object-cover"
                  priority
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-7 pt-24">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                    Tecnología con propósito
                  </p>

                  <p className="mt-2 text-xl font-bold text-white">
                    La IA es una herramienta. El criterio, la creatividad y
                    la responsabilidad siguen siendo humanos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ETAPAS */}
          <div className="mt-14 grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:grid-cols-4">
            {etapas.map((etapa, index) => {
              const Icon = etapa.icono;

              return (
                <div
                  key={etapa.numero}
                  className={`relative p-5 md:p-6 ${
                    index !== etapas.length - 1
                      ? "border-b border-slate-200 md:border-b-0 md:border-r"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-cyan-600">
                      {etapa.numero}
                    </span>

                    <Icon className="h-5 w-5 text-slate-400" />
                  </div>

                  <h3 className="mt-4 font-black text-slate-900">
                    {etapa.titulo}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {etapa.texto}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center pb-5 text-slate-300">
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </div>
      </section>

      {/* =========================================================
          ¿QUÉ ES LA IA?
      ========================================================= */}
      <section id="que-es-ia" className="scroll-mt-20 bg-slate-50 py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-cyan-600">
              01 · Comprender
            </span>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              ¿Qué es realmente la inteligencia artificial?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              La inteligencia artificial reúne tecnologías capaces de
              procesar información, identificar patrones y generar resultados
              a partir de modelos entrenados con grandes cantidades de datos.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icono: Brain,
                titulo: "Aprende patrones",
                texto:
                  "Los sistemas de IA procesan grandes cantidades de datos para identificar relaciones y patrones que permiten generar resultados.",
              },
              {
                icono: Sparkles,
                titulo: "Genera contenido",
                texto:
                  "La IA generativa puede producir texto, imágenes, código, audio y otros contenidos a partir de instrucciones.",
              },
              {
                icono: Globe2,
                titulo: "Está presente",
                texto:
                  "La encontramos en buscadores, recomendaciones, traducciones, asistentes, aplicaciones educativas y muchas otras tecnologías.",
              },
            ].map((item) => {
              const Icon = item.icono;

              return (
                <article
                  key={item.titulo}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition group-hover:bg-cyan-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-black text-slate-900">
                    {item.titulo}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.texto}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-3xl border border-cyan-200 bg-cyan-50 p-7">
            <div className="flex gap-4">
              <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-cyan-700" />

              <div>
                <h3 className="font-black text-cyan-900">
                  Una idea fundamental
                </h3>

                <p className="mt-2 leading-7 text-cyan-900/80">
                  Que una herramienta pueda generar una respuesta no significa
                  que comprenda el mundo de la misma manera que una persona ni
                  que todas sus respuestas sean correctas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          IA EN EDUCACIÓN
      ========================================================= */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.18em] text-cyan-600">
                02 · Utilizar
              </span>

              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                IA para aprender, no para dejar de pensar
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                En el contexto educativo, la IA puede funcionar como una
                herramienta de apoyo. El estudiante continúa siendo
                responsable de comprender, analizar, practicar y construir su
                propio conocimiento.
              </p>

              <div className="mt-7 rounded-2xl bg-slate-900 p-6 text-white">
                <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">
                  Regla práctica
                </p>

                <p className="mt-3 text-xl font-bold leading-8">
                  Utiliza la IA para ampliar tus capacidades, no para
                  reemplazar el proceso de aprendizaje.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {usosEducativos.map((item, index) => {
                const Icon = item.icono;

                return (
                  <article
                    key={item.titulo}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-300 hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-cyan-700">
                        <Icon className="h-6 w-6" />
                      </div>

                      <span className="text-3xl font-black text-slate-100">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-black text-slate-900">
                      {item.titulo}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.texto}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          APRENDER A PREGUNTAR
      ========================================================= */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-cyan-600">
              03 · Saber preguntar
            </span>

            <h2 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">
              Una buena pregunta produce mejores resultados
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Cuando utilices una herramienta de IA, proporciona suficiente
              contexto para que pueda entender lo que necesitas. Después,
              revisa el resultado antes de utilizarlo.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* PROMPT DÉBIL */}
            <div className="rounded-3xl border border-red-200 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <X className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-bold text-red-600">
                    Solicitud poco precisa
                  </p>
                  <h3 className="text-xl font-black text-slate-900">
                    Poco contexto
                  </h3>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-900 p-5 font-mono text-sm leading-7 text-slate-200">
                Explícame la inteligencia artificial.
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                El sistema debe interpretar por sí mismo el nivel, propósito,
                extensión y formato que necesitas.
              </p>
            </div>

            {/* PROMPT MEJORADO */}
            <div className="rounded-3xl border border-emerald-200 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Check className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-bold text-emerald-600">
                    Solicitud mejor estructurada
                  </p>
                  <h3 className="text-xl font-black text-slate-900">
                    Contexto + objetivo + formato
                  </h3>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-900 p-5 font-mono text-sm leading-7 text-slate-200">
                Explícame qué es la inteligencia artificial para un estudiante
                de grado 8°, utilizando un ejemplo relacionado con la
                educación y terminando con tres preguntas para comprobar la
                comprensión.
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                Una instrucción específica facilita obtener una respuesta
                adaptada al objetivo.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {[
              ["Contexto", "¿Quién necesita la información?"],
              ["Objetivo", "¿Qué quieres conseguir?"],
              ["Condiciones", "¿Qué debe tener la respuesta?"],
              ["Formato", "¿Cómo quieres recibirla?"],
              ["Revisión", "¿Cómo comprobarás el resultado?"],
            ].map(([titulo, texto], index) => (
              <div
                key={titulo}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <span className="text-xs font-black text-cyan-600">
                  0{index + 1}
                </span>

                <h3 className="mt-3 font-black text-slate-900">{titulo}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          VERIFICACIÓN
      ========================================================= */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
              04 · Verificar
            </span>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              No todo lo que genera una IA debe darse por cierto
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Una respuesta puede estar bien redactada y aun así contener
              errores. Por eso, la verificación debe formar parte del proceso
              antes de compartir, publicar o utilizar información.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {pasosVerificacion.map((paso, index) => (
              <div
                key={paso.numero}
                className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-6"
              >
                {index !== pasosVerificacion.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-cyan-400 md:block" />
                )}

                <span className="text-sm font-black text-cyan-300">
                  {paso.numero}
                </span>

                <h3 className="mt-5 text-xl font-black">{paso.titulo}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {paso.texto}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-7">
            <div className="flex flex-col gap-5 md:flex-row md:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
                <SearchCheck className="h-7 w-7" />
              </div>

              <div>
                <h3 className="text-xl font-black text-white">
                  Pregunta siempre: “¿Cómo puedo comprobarlo?”
                </h3>

                <p className="mt-2 leading-7 text-slate-300">
                  Para datos importantes, consulta fuentes institucionales,
                  académicas, científicas o especializadas y compara la
                  información.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PENSAMIENTO CRÍTICO
      ========================================================= */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.18em] text-cyan-600">
                05 · Pensamiento crítico
              </span>

              <h2 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">
                La respuesta más rápida no siempre es la respuesta correcta
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                El verdadero aprendizaje aparece cuando el estudiante analiza
                la respuesta, identifica posibles problemas y utiliza su
                propio criterio para decidir qué información puede utilizar.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "¿La respuesta responde exactamente a la pregunta?",
                  "¿Los datos importantes pueden comprobarse?",
                  "¿Existen otras fuentes que presenten información diferente?",
                  "¿La información corresponde al contexto y al momento actual?",
                  "¿Estoy comprendiendo el contenido o simplemente copiándolo?",
                ].map((pregunta) => (
                  <div
                    key={pregunta}
                    className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                    <p className="font-medium text-slate-700">{pregunta}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-gradient-to-br from-cyan-600 to-blue-700 p-8 text-white shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <Brain className="h-7 w-7" />
              </div>

              <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-cyan-100">
                Regla de oro
              </p>

              <h3 className="mt-3 text-3xl font-black leading-tight">
                La IA puede ayudarte a pensar, pero no debe pensar por ti.
              </h3>

              <div className="mt-8 h-px bg-white/20" />

              <p className="mt-6 leading-8 text-cyan-50">
                Preguntar, comparar, cuestionar, corregir y crear siguen siendo
                habilidades humanas fundamentales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRIVACIDAD
      ========================================================= */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.18em] text-cyan-600">
                06 · Seguridad
              </span>

              <h2 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">
                Protege tu información
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Antes de introducir información en una herramienta de IA,
                detente y piensa si realmente es necesario compartirla.
              </p>

              <div className="mt-7 rounded-3xl bg-slate-900 p-7 text-white">
                <LockKeyhole className="h-8 w-8 text-cyan-300" />

                <h3 className="mt-5 text-xl font-black">
                  Tu información también tiene valor
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  La seguridad digital comienza antes de pulsar “enviar”.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Datos personales",
                "Contraseñas",
                "Documentos privados",
                "Información familiar",
                "Datos financieros",
                "Información académica sensible",
                "Fotos privadas",
                "Códigos o credenciales",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
                    <LockKeyhole className="h-5 w-5" />
                  </div>

                  <span className="font-bold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <div className="flex gap-4">
              <TriangleAlert className="mt-1 h-6 w-6 shrink-0 text-amber-600" />

              <div>
                <h3 className="font-black text-amber-900">
                  Antes de compartir información
                </h3>

                <p className="mt-2 leading-7 text-amber-900/80">
                  Pregunta: ¿Tengo autorización para compartir estos datos?
                  ¿Es realmente necesario? ¿La herramienta es apropiada para
                  manejarlos?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RIESGOS
      ========================================================= */}
      <section id="riesgos" className="scroll-mt-20 bg-white py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-red-600">
              07 · Riesgos digitales
            </span>

            <h2 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">
              Conocer los riesgos también es parte de aprender IA
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              El uso responsable requiere reconocer las situaciones en las que
              una herramienta de inteligencia artificial puede generar
              problemas o tomar decisiones que deberían pasar por revisión
              humana.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {riesgos.map((riesgo) => {
              const Icon = riesgo.icono;

              return (
                <article
                  key={riesgo.titulo}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-black text-slate-900">
                    {riesgo.titulo}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {riesgo.texto}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          INTEGRIDAD ACADÉMICA
      ========================================================= */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                08 · Integridad académica
              </span>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Aprender sigue siendo el objetivo
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                La utilización de IA en actividades académicas debe respetar
                las instrucciones del docente y las normas de la institución.
                Utilizar una herramienta como apoyo no significa presentar
                automáticamente como propio todo lo que genera.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  titulo: "Usar como apoyo",
                  texto:
                    "Solicitar explicaciones, ejemplos, preguntas de práctica o ayuda para organizar ideas.",
                  positivo: true,
                },
                {
                  titulo: "Revisar y transformar",
                  texto:
                    "Comprender la respuesta, corregirla, aportar ideas propias y construir el resultado final.",
                  positivo: true,
                },
                {
                  titulo: "Respetar las instrucciones",
                  texto:
                    "Seguir las indicaciones del docente sobre cuándo, cómo y para qué puede utilizarse IA.",
                  positivo: true,
                },
                {
                  titulo: "Evitar presentar trabajo ajeno como propio",
                  texto:
                    "Generar una actividad completa con IA y entregarla como si fuera resultado del propio proceso puede entrar en conflicto con las normas académicas.",
                  positivo: false,
                },
              ].map((item) => (
                <div
                  key={item.titulo}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5"
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                      item.positivo
                        ? "bg-emerald-400/10 text-emerald-300"
                        : "bg-red-400/10 text-red-300"
                    }`}
                  >
                    {item.positivo ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <X className="h-5 w-5" />
                    )}
                  </div>

                  <div>
                    <h3 className="font-black text-white">{item.titulo}</h3>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.texto}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TIPOS DE IA GENERATIVA
      ========================================================= */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-cyan-600">
              09 · IA generativa
            </span>

            <h2 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">
              La IA puede crear diferentes tipos de contenido
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Las herramientas generativas pueden trabajar con diferentes
              modalidades. Por eso también debemos aprender a evaluar el
              contenido que producen.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                titulo: "Texto",
                ejemplo: "Explicaciones, resúmenes, ideas y borradores.",
              },
              {
                titulo: "Imágenes",
                ejemplo: "Ilustraciones, diseños y representaciones visuales.",
              },
              {
                titulo: "Audio",
                ejemplo: "Voces, música y contenidos sonoros.",
              },
              {
                titulo: "Código",
                ejemplo: "Programas, funciones y ejemplos de programación.",
              },
            ].map((item, index) => (
              <div
                key={item.titulo}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <span className="text-sm font-black text-cyan-600">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-xl font-black text-slate-900">
                  {item.titulo}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.ejemplo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROTOCOLO NAVAL DIGITAL
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-700 to-slate-900 py-20 text-white">
        <div className="absolute right-[-100px] top-[-100px] h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-sm font-black uppercase tracking-[0.2em] text-cyan-100">
              10 · Protocolo Naval Digital
            </span>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Antes de utilizar IA, PIENSA
            </h2>

            <p className="mt-5 text-lg leading-8 text-cyan-50">
              Una ruta sencilla para tomar mejores decisiones al interactuar
              con herramientas de inteligencia artificial.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {protocolo.map((paso) => (
              <div
                key={paso.letra}
                className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl font-black text-blue-700">
                    {paso.letra}
                  </div>

                  <h3 className="text-lg font-black">{paso.titulo}</h3>
                </div>

                <p className="mt-5 leading-7 text-cyan-50">
                  {paso.texto}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-white/20 bg-slate-950/25 p-8 text-center">
            <ShieldCheck className="mx-auto h-10 w-10 text-cyan-200" />

            <p className="mt-5 text-2xl font-black leading-9 md:text-3xl">
              “La inteligencia artificial puede ampliar nuestras capacidades.
              La responsabilidad determina cómo las utilizamos.”
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          KIT FINAL
      ========================================================= */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <div className="text-center">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-cyan-600">
              Tu kit de uso responsable
            </span>

            <h2 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">
              Cinco hábitos para llevar contigo
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {[
              "Define qué necesitas antes de abrir una herramienta de IA.",
              "No compartas información privada o sensible sin autorización.",
              "Revisa y contrasta la información importante.",
              "Utiliza la IA para aprender y desarrollar tus propias capacidades.",
              "Respeta la autoría, las normas académicas y las instrucciones de tus docentes.",
            ].map((item, index) => (
              <div
                key={item}
                className={`flex items-center gap-5 p-6 ${
                  index !== 4 ? "border-b border-slate-200" : ""
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-600 font-black text-white">
                  {index + 1}
                </div>

                <p className="font-semibold leading-7 text-slate-700">
                  {item}
                </p>

                <CheckCircle2 className="ml-auto hidden h-5 w-5 shrink-0 text-cyan-600 sm:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CIERRE
      ========================================================= */}
      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
            <Brain className="h-8 w-8" />
          </div>

          <h2 className="mt-7 text-3xl font-black text-slate-900 md:text-4xl">
            La tecnología cambia. El criterio permanece.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Aprender inteligencia artificial no significa solamente aprender a
            utilizar una herramienta. Significa desarrollar la capacidad de
            preguntar, analizar, verificar, proteger y crear de manera
            responsable.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-5 py-3 font-bold text-cyan-700">
            <ShieldCheck className="h-5 w-5" />
            Naval Digital Segura 2026
          </div>
        </div>
      </section>
    </main>
  );
}