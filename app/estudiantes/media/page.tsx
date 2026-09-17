import {
  Database,
  ShieldCheck,
  Laptop,
  Globe,
  CheckCircle2,
  ShieldAlert,
  MessageSquareWarning,
  UserX,
  DatabaseZap,
  Bug,
  BrainCircuit,
  PlayCircle,
  BookOpen,
} from "lucide-react";
const riesgos = [
  {
    icon: ShieldAlert,
    t: "Phishing Avanzado",
    d: "Correos, mensajes o sitios fraudulentos diseñados para capturar credenciales y datos sensibles.",
    impact:
      "Robo de contraseñas, acceso no autorizado a cuentas institucionales y pérdida de información.",
    tip: "Verifica enlaces, remitentes y certificados antes de proporcionar información."
  },
  {
    icon: MessageSquareWarning,
    t: "Ciberacoso Persistente",
    d: "Conductas reiteradas de intimidación o agresión que afectan la convivencia digital.",
    impact:
      "Afectaciones emocionales, disminución del rendimiento académico y problemas de convivencia.",
    tip: "Reporta incidentes, conserva evidencias y solicita apoyo oportuno."
  },
  {
    icon: UserX,
    t: "Suplantación de Identidad",
    d: "Uso indebido de perfiles, fotografías o datos personales para engañar a terceros.",
    impact:
      "Fraudes, engaños y daños a la reputación digital de la víctima.",
    tip: "Configura adecuadamente la privacidad y utiliza autenticación segura."
  },
  {
    icon: DatabaseZap,
    t: "Fugas de Información",
    d: "Exposición accidental o deliberada de información personal o institucional.",
    impact:
      "Divulgación de datos sensibles y vulneración de la privacidad.",
    tip: "Comparte únicamente datos necesarios y controla los permisos de acceso."
  },
  {
    icon: Bug,
    t: "Software Malicioso",
    d: "Amenazas informáticas capaces de comprometer dispositivos, archivos y sistemas.",
    impact:
      "Pérdida de información, daño de equipos y secuestro de archivos.",
    tip: "Mantén actualizados los equipos y utiliza software confiable."
  },
  {
    icon: BrainCircuit,
    t: "Ingeniería Social",
    d: "Técnicas de manipulación orientadas a obtener información confidencial.",
    impact:
      "Obtención fraudulenta de credenciales y acceso a información privada.",
    tip: "Desconfía de solicitudes urgentes o mensajes que generen presión."
  }
];
const mediaContenido = {
  encabezado: {
    badge: "Formación Avanzada • Educación Media",
    titulo: "Ciberseguridad y HackLab",
    subtitulo: "Grados 10° y 11°",
    descripcion:
      "En la educación media desarrollarás competencias técnicas y éticas para comprender cómo funcionan los ataques informáticos, cómo proteger sistemas y cómo convertirte en un ciudadano digital responsable. Aprenderás mediante desafíos, simulaciones y laboratorios inspirados en entornos profesionales de ciberseguridad.",
    boton: "Comenzar Ruta de Formación",
  },

  estadisticas: [
    {
      numero: "8",
      titulo: "Módulos",
      descripcion: "Ruta completa de aprendizaje.",
    },
    {
      numero: "35+",
      titulo: "Laboratorios",
      descripcion: "Retos prácticos interactivos.",
    },
    {
      numero: "100%",
      titulo: "Aprendizaje",
      descripcion: "Basado en proyectos y desafíos.",
    },
    {
      numero: "∞",
      titulo: "Pensamiento",
      descripcion: "Crítico y analítico.",
    },
  ],

  modulos: [
    {
      titulo: "Fundamentos de Ciberseguridad",
      icono: "shield",
      color: "from-cyan-500 to-blue-600",
      descripcion:
        "Comprende cómo funciona la seguridad informática y los principios de confidencialidad, integridad y disponibilidad.",
      temas: [
        "Conceptos fundamentales",
        "Amenazas digitales",
        "Tipos de malware",
        "Ingeniería social",
        "Buenas prácticas",
      ],
    },

    {
      titulo: "HackLab Ético",
      icono: "terminal",
      color: "from-emerald-500 to-teal-600",
      descripcion:
        "Explora laboratorios seguros donde aprenderás cómo actúan los atacantes para comprender cómo defender sistemas.",
      temas: [
        "CTF educativos",
        "Análisis de vulnerabilidades",
        "Reconocimiento",
        "Escaneo básico",
        "Ética profesional",
      ],
    },

    {
      titulo: "Seguridad en Redes",
      icono: "network",
      color: "from-indigo-500 to-violet-600",
      descripcion:
        "Aprende cómo viaja la información por Internet y cómo proteger las comunicaciones.",
      temas: [
        "Direcciones IP",
        "DNS",
        "HTTP y HTTPS",
        "Firewalls",
        "VPN",
      ],
    },

    {
      titulo: "Identidad Digital",
      icono: "user",
      color: "from-orange-500 to-red-500",
      descripcion:
        "Protege tu información personal, reputación digital y privacidad en plataformas digitales.",
      temas: [
        "Huella digital",
        "Privacidad",
        "Autenticación",
        "Contraseñas",
        "MFA",
      ],
    },

    {
      titulo: "Análisis de Amenazas",
      icono: "bug",
      color: "from-pink-500 to-rose-600",
      descripcion:
        "Identifica campañas de phishing, ransomware y otras amenazas comunes del entorno digital.",
      temas: [
        "Phishing",
        "Smishing",
        "Ransomware",
        "Spyware",
        "Deepfake",
      ],
    },

    {
      titulo: "Inteligencia Artificial Segura",
      icono: "brain",
      color: "from-fuchsia-500 to-purple-600",
      descripcion:
        "Utiliza herramientas de IA de forma responsable comprendiendo riesgos, sesgos y privacidad.",
      temas: [
        "IA generativa",
        "Prompts seguros",
        "Privacidad",
        "Ética",
        "Verificación",
      ],
    },

    {
      titulo: "Ciudadanía Digital",
      icono: "globe",
      color: "from-sky-500 to-cyan-600",
      descripcion:
        "Fortalece competencias para participar responsablemente en comunidades digitales.",
      temas: [
        "Respeto",
        "Derechos digitales",
        "Responsabilidad",
        "Convivencia",
        "Pensamiento crítico",
      ],
    },

    {
      titulo: "Proyecto Final",
      icono: "rocket",
      color: "from-yellow-500 to-orange-500",
      descripcion:
        "Integra todos los conocimientos mediante un proyecto práctico de ciberseguridad.",
      temas: [
        "Investigación",
        "Análisis",
        "Presentación",
        "Defensa",
        "Trabajo colaborativo",
      ],
    },
  ],

  competencias: [
    "Comprender fundamentos modernos de ciberseguridad.",
    "Analizar riesgos y amenazas digitales.",
    "Proteger dispositivos y cuentas personales.",
    "Aplicar autenticación multifactor.",
    "Detectar ataques de phishing.",
    "Comprender principios de hacking ético.",
    "Interpretar vulnerabilidades comunes.",
    "Utilizar laboratorios tipo CTF.",
    "Proteger información sensible.",
    "Gestionar identidades digitales.",
    "Evaluar riesgos de inteligencia artificial.",
    "Aplicar pensamiento crítico frente a noticias falsas.",
    "Desarrollar proyectos tecnológicos seguros.",
    "Trabajar colaborativamente.",
    "Actuar con ética profesional.",
  ],

  retos: [
    {
      titulo: "Hack Challenge",
      descripcion:
        "Resuelve retos de lógica, criptografía y análisis digital mediante escenarios gamificados.",
    },
    {
      titulo: "Blue Team",
      descripcion:
        "Protege un sistema detectando amenazas y fortaleciendo su seguridad.",
    },
    {
      titulo: "Forense Digital",
      descripcion:
        "Analiza evidencias digitales para descubrir incidentes de seguridad.",
    },
    {
      titulo: "Escape Room Cyber",
      descripcion:
        "Supera desafíos interactivos relacionados con redes, contraseñas y criptografía.",
    },
  ],

  recursos: [
    "Laboratorios virtuales",
    "Simuladores",
    "Videos interactivos",
    "Retos tipo Capture The Flag",
    "Infografías",
    "Casos reales",
    "Evaluaciones gamificadas",
    "Guías PDF",
    "Cuestionarios",
    "Proyectos colaborativos",
  ],

  mensajeFinal: {
    titulo: "Piensa como un Hacker Ético",
    descripcion:
      "La ciberseguridad no consiste en atacar sistemas, sino en comprender cómo funcionan las amenazas para proteger la información, fortalecer la seguridad y construir un entorno digital más seguro para todos. Cada laboratorio, desafío y proyecto te acercará al mundo profesional de la seguridad informática desde una perspectiva ética, responsable y académica.",
    boton: "Explorar Recursos",
  },
};
export default function MediaPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white">


    {/* ================= HERO ================= */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 bg-[#050b14]">

        {/* Fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#071525] to-[#020b14]" />

        {/* Glow */}
        <div className="absolute left-1/2 top-[-40px] -z-20 h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] md:h-[360px] md:w-[360px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]
          bg-[linear-gradient(rgba(34,211,238,.25)_1px,transparent_1px),
          linear-gradient(90deg,rgba(34,211,238,.25)_1px,transparent_1px)]
          bg-[size:50px_50px]"
        />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 sm:px-5 py-2 sm:py-2.5 backdrop-blur-xl">

            <span className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />

            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.35em] text-cyan-300">
              Grados 10° y 11°
            </span>

          </div>

          {/* Título */}
          <h1 className="mt-6 sm:mt-8 text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-white">

            Educación Media

            <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
              Naval Digital Segura
            </span>

          </h1>

          {/* Texto */}
          <p className="mx-auto mt-5 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-300">

            Este espacio reúne todos los contenidos del eje temático
            <span className="font-semibold text-cyan-300">
              {" "}Naval Digital Segura
            </span>
            , diseñado para estudiantes de Educación Media. A través de experiencias
            interactivas, simulaciones y recursos educativos fortalecerás tus
            competencias en ciberseguridad, ciudadanía digital, ética tecnológica y
            pensamiento crítico para desenvolverte de forma segura y responsable en
            entornos académicos, personales y futuros escenarios profesionales.

          </p>

          {/* Imagen */}
          <div className="mt-6 sm:mt-8 md:mt-10">

            <img
              src="/mediasc.png"
              alt="Educación Media - Naval Digital Segura"
              className="mx-auto w-full max-w-3xl rounded-2xl border border-cyan-400/20 shadow-2xl object-cover"
            />

          </div>

          {/* Panel */}
         <div className="mt-12 mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">

  {/* Competencia 01 */}

  <div className="group w-full max-w-sm rounded-3xl border border-cyan-400/20 bg-cyan-500/5 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:shadow-2xl hover:shadow-cyan-500/20">

    <div className="flex items-center justify-between">

      <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
        Competencia 01
      </span>

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl">
        🛡️
      </div>

    </div>

    <h3 className="mt-6 text-2xl font-black text-white">
      Ciberseguridad
    </h3>

    <p className="mt-4 leading-7 text-slate-300">
      Identificar amenazas digitales, proteger dispositivos, fortalecer la
      seguridad de la información y comprender los principios básicos de la
      defensa digital.
    </p>

  </div>

  {/* Competencia 02 */}

  <div className="group w-full max-w-sm rounded-3xl border border-emerald-400/20 bg-emerald-500/5 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-emerald-400/40 hover:bg-emerald-500/10 hover:shadow-2xl hover:shadow-emerald-500/20">

    <div className="flex items-center justify-between">

      <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">
        Competencia 02
      </span>

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-2xl">
        🤝
      </div>

    </div>

    <h3 className="mt-6 text-2xl font-black text-white">
      Ética Digital
    </h3>

    <p className="mt-4 leading-7 text-slate-300">
      Promover el respeto, la responsabilidad y el uso consciente de la
      tecnología para fortalecer la convivencia y proteger la identidad digital.
    </p>

  </div>

  {/* Competencia 03 */}

  <div className="group w-full max-w-sm rounded-3xl border border-blue-400/20 bg-blue-500/5 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-blue-400/40 hover:bg-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/20">

    <div className="flex items-center justify-between">

      <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
        Competencia 03
      </span>

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl">
        🧠
      </div>

    </div>

    <h3 className="mt-6 text-2xl font-black text-white">
      Pensamiento Crítico
    </h3>

    <p className="mt-4 leading-7 text-slate-300">
      Analizar información digital, reconocer la desinformación, verificar
      fuentes y tomar decisiones responsables frente a los contenidos en línea.
    </p>

  </div>

</div>

        </div>

      </section>
    
    {/*====================== TEMA 01 ======================*/}
      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          {/* Encabezado */}

          <div className="mx-auto max-w-4xl text-center">

            <span className="inline-flex rounded-full bg-cyan-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-700">
              Tema 01 · Fundamentos de la Ciberseguridad
            </span>

            <h2 className="mt-8 text-5xl font-black tracking-tight text-slate-900">

              Comprender la

              <span className="block bg-gradient-to-r from-cyan-600 via-sky-600 to-emerald-600 bg-clip-text text-transparent">
                Ciberseguridad
              </span>

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">

              Antes de aprender a detectar amenazas, proteger dispositivos o enfrentar
              ataques informáticos, es necesario comprender los conceptos que forman la
              base de la ciberseguridad. En este tema conocerás cómo proteger la
              información, por qué existen los riesgos digitales y cuál es el papel de
              cada persona en la construcción de un entorno digital seguro.

            </p>

          </div>

          {/* Panel principal */}

          <div className="mx-auto mt-20 max-w-6xl rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-12 shadow-sm">

            <div className="grid gap-12 lg:grid-cols-2">

              {/* Columna izquierda */}

              <div>

                <span className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-700">
                  ¿Qué aprenderás?
                </span>

                <h3 className="mt-4 text-3xl font-black text-slate-900">
                  Al finalizar este tema serás capaz de:
                </h3>

                <div className="mt-10 space-y-6">

                  <div className="flex gap-5">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-600 text-lg font-bold text-white">
                      01
                    </div>

                    <div>

                      <h4 className="text-xl font-bold text-slate-900">
                        Comprender la ciberseguridad
                      </h4>

                      <p className="mt-2 leading-8 text-slate-600">
                        Identificar el propósito de la ciberseguridad y comprender su
                        importancia para proteger personas, organizaciones e
                        información digital.
                      </p>

                    </div>

                  </div>

                  <div className="flex gap-5">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-lg font-bold text-white">
                      02
                    </div>

                    <div>

                      <h4 className="text-xl font-bold text-slate-900">
                        Reconocer amenazas digitales
                      </h4>

                      <p className="mt-2 leading-8 text-slate-600">
                        Diferenciar riesgos como malware, phishing, robo de identidad,
                        ingeniería social y otras amenazas presentes en internet.
                      </p>

                    </div>

                  </div>

                  <div className="flex gap-5">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
                      03
                    </div>

                    <div>

                      <h4 className="text-xl font-bold text-slate-900">
                        Aplicar buenas prácticas
                      </h4>

                      <p className="mt-2 leading-8 text-slate-600">
                        Implementar medidas de protección para utilizar dispositivos,
                        plataformas digitales y servicios en línea de forma segura.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* Columna derecha */}

              <div className="rounded-3xl bg-slate-900 p-10 text-white">

                <span className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
                  Contenido del tema
                </span>

                <h3 className="mt-4 text-3xl font-black">
                  Recorrido de aprendizaje
                </h3>

                <p className="mt-6 leading-8 text-slate-300">

                  Durante este tema desarrollarás los conocimientos necesarios para
                  comprender cómo funciona la seguridad digital y por qué es una
                  competencia indispensable en la actualidad.

                </p>

                <div className="mt-10 space-y-5">

                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">

                    <span className="text-cyan-400 font-bold">01</span>

                    <p className="text-slate-200">
                      ¿Qué es la ciberseguridad?
                    </p>

                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">

                    <span className="text-cyan-400 font-bold">02</span>

                    <p className="text-slate-200">
                      Activos digitales e información
                    </p>

                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">

                    <span className="text-cyan-400 font-bold">03</span>

                    <p className="text-slate-200">
                      Amenazas, vulnerabilidades y riesgos
                    </p>

                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">

                    <span className="text-cyan-400 font-bold">04</span>

                    <p className="text-slate-200">
                      Buenas prácticas de protección digital
                    </p>

                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">

                    <span className="text-cyan-400 font-bold">05</span>

                    <p className="text-slate-200">
                      Actividad práctica y evaluación del tema
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
      {/*================ ¿QUÉ ES LA CIBERSEGURIDAD? =================*/}
      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          {/* Encabezado */}

          <div className="mx-auto max-w-4xl text-center">

            <span className="inline-flex rounded-full bg-cyan-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-700">
              Contenido 1
            </span>

            <h2 className="mt-8 text-5xl font-black tracking-tight text-slate-900">
              ¿Qué es la
              <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Ciberseguridad?
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">

              La ciberseguridad es el conjunto de medidas, conocimientos y
              tecnologías destinadas a proteger la información, los dispositivos,
              las redes y los servicios digitales frente a amenazas que pueden
              comprometer su funcionamiento o poner en riesgo los datos de las
              personas y las organizaciones.

            </p>

          </div>

          {/* Contenido */}

          <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

            {/* Texto */}

            <div>

              <h3 className="text-3xl font-black text-slate-900">

                ¿Por qué existe la ciberseguridad?

              </h3>

              <p className="mt-6 text-lg leading-9 text-slate-600">

                Actualmente realizamos gran parte de nuestras actividades mediante
                internet: estudiamos, enviamos tareas, utilizamos plataformas
                educativas, realizamos videoconferencias, almacenamos documentos y
                compartimos información personal. Todo este intercambio de datos
                necesita mecanismos de protección para evitar accesos no autorizados,
                pérdidas de información o ataques informáticos.

              </p>

              <p className="mt-6 text-lg leading-9 text-slate-600">

                La ciberseguridad busca reducir estos riesgos mediante buenas
                prácticas, herramientas tecnológicas y el desarrollo de hábitos
                responsables que permitan utilizar la tecnología de forma segura.

              </p>

              {/* Dato */}

              <div className="mt-10 rounded-2xl border-l-4 border-cyan-600 bg-cyan-50 p-6">

                <h4 className="font-bold text-cyan-700">
                  Dato importante
                </h4>

                <p className="mt-3 leading-8 text-slate-700">

                  La mayoría de los incidentes de seguridad no ocurren por fallas de
                  los computadores, sino por errores humanos como utilizar
                  contraseñas débiles, abrir enlaces sospechosos o compartir
                  información sin verificar su procedencia.

                </p>

              </div>

            </div>

            {/* Imagen */}

            {/* Video educativo */}

      <div className="relative">

        {/* Glow */}
        <div className="absolute -inset-4 rounded-[34px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-emerald-500/10 blur-2xl"></div>

        <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-2xl">

          {/* Encabezado */}
          <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-4">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-700">
                Recurso Multimedia
              </p>

              <h4 className="mt-1 text-lg font-bold text-slate-900">
                Introducción a la Ciberseguridad
              </h4>

            </div>

            <span className="rounded-full bg-cyan-100 px-4 py-1 text-xs font-semibold text-cyan-700">
              Video educativo
            </span>

          </div>

          {/* Video */}

          <div className="overflow-hidden">

            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/fMhs0mUih78"
              title="Introducción a la Ciberseguridad"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

          </div>

          {/* Pie */}

          <div className="border-t border-slate-200 bg-white px-6 py-5">

            <h5 className="font-bold text-slate-900">
              Objetivo del recurso
            </h5>

            <p className="mt-2 leading-7 text-slate-600">

              Observa este video para comprender el concepto de ciberseguridad,
              su importancia en la protección de la información y los principales
              riesgos presentes en los entornos digitales. Este recurso complementa
              el contenido teórico del tema y servirá como base para las actividades
              prácticas que desarrollarás posteriormente.

            </p>

          </div>

        </div>

      </div>

          </div>

          {/* Conceptos */}

         {/*================ ¿QUÉ PROTEGE LA CIBERSEGURIDAD? =================*/}

          <div className="mt-28">

            <div className="mx-auto max-w-4xl text-center">

              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-700">

                <span className="h-2.5 w-2.5 rounded-full bg-cyan-600 animate-pulse" />

                Protección Digital

              </span>

              <h3 className="mt-8 text-5xl font-black tracking-tight text-slate-900">

                ¿Qué protege la
                <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  Ciberseguridad?
                </span>

              </h3>

              <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">

                La ciberseguridad protege todos los recursos digitales que utilizamos
                diariamente para estudiar, comunicarnos, trabajar y almacenar información.
                Su objetivo es preservar la confidencialidad, integridad y disponibilidad
                de los datos frente a amenazas informáticas.

              </p>

            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

              {/* Información */}

              <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl">

                <div className="h-2 bg-cyan-500" />

                <div className="p-8">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 transition group-hover:scale-110">

                    <Database className="h-8 w-8 text-cyan-700" />

                  </div>

                  <h4 className="mt-7 text-2xl font-bold text-slate-900">

                    Información

                  </h4>

                  <p className="mt-5 leading-8 text-slate-600">

                    Documentos, tareas, fotografías, bases de datos, archivos personales
                    y toda la información almacenada en medios digitales.

                  </p>

                  <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-cyan-700">

                    <CheckCircle2 className="h-4 w-4" />

                    Protección de datos

                  </div>

                </div>

              </div>

              {/* Personas */}

              <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl">

                <div className="h-2 bg-emerald-500" />

                <div className="p-8">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 transition group-hover:scale-110">

                    <ShieldCheck className="h-8 w-8 text-emerald-700" />

                  </div>

                  <h4 className="mt-7 text-2xl font-bold text-slate-900">

                    Personas

                  </h4>

                  <p className="mt-5 leading-8 text-slate-600">

                    Protege la identidad digital, la privacidad y los datos personales de
                    cada usuario frente al fraude, robo de información o suplantación.

                  </p>

                  <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-emerald-700">

                    <CheckCircle2 className="h-4 w-4" />

                    Privacidad digital

                  </div>

                </div>

              </div>

              {/* Dispositivos */}

              <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl">

                <div className="h-2 bg-blue-500" />

                <div className="p-8">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:scale-110">

                    <Laptop className="h-8 w-8 text-blue-700" />

                  </div>

                  <h4 className="mt-7 text-2xl font-bold text-slate-900">

                    Dispositivos

                  </h4>

                  <p className="mt-5 leading-8 text-slate-600">

                    Computadores, tabletas, teléfonos móviles y cualquier equipo conectado
                    a internet que almacene o procese información.

                  </p>

                  <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-blue-700">

                    <CheckCircle2 className="h-4 w-4" />

                    Seguridad de equipos

                  </div>

                </div>

              </div>

              {/* Redes */}

              <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-2xl">

                <div className="h-2 bg-violet-500" />

                <div className="p-8">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 transition group-hover:scale-110">

                    <Globe className="h-8 w-8 text-violet-700" />

                  </div>

                  <h4 className="mt-7 text-2xl font-bold text-slate-900">

                    Redes y Servicios

                  </h4>

                  <p className="mt-5 leading-8 text-slate-600">

                    Plataformas educativas, servicios en la nube, redes Wi-Fi, correo
                    electrónico y aplicaciones utilizadas diariamente.

                  </p>

                  <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-violet-700">

                    <CheckCircle2 className="h-4 w-4" />

                    Conectividad segura

                  </div>

                </div>

              </div>

            </div>

          </div>

                  </div>

      </section>
      {/*================ CONTENIDO 2 =================*/}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-24">

          {/* Glow */}
          <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-red-500/10 blur-[120px]" />
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />

          {/* Grid tecnológica */}
          <div
            className="absolute inset-0 opacity-[0.04]
            bg-[linear-gradient(rgba(239,68,68,.6)_1px,transparent_1px),
            linear-gradient(90deg,rgba(239,68,68,.6)_1px,transparent_1px)]
            bg-[size:45px_45px]"
          />

          {/* Líneas */}
          <div className="absolute inset-0 opacity-30">

            <div className="absolute left-[8%] top-[18%] h-px w-40 bg-red-400" />
            <div className="absolute right-[10%] top-[28%] h-px w-56 bg-orange-400" />
            <div className="absolute left-[18%] bottom-[20%] h-px w-60 bg-red-300" />

          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6">

            {/* Badge */}

            <div className="flex justify-center">

              <div className="inline-flex items-center gap-3 rounded-full border border-red-300 bg-white px-6 py-3 shadow-md">

                <span className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />

                <span className="text-xs font-bold uppercase tracking-[0.35em] text-red-700">
                  Contenido 2
                </span>

              </div>

            </div>

            {/* Título */}

            <div className="mx-auto mt-10 max-w-5xl text-center">

              <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900">

                Principales

                <span className="block bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">

                  Amenazas Digitales

                </span>

              </h2>

              <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-600">

                Cada conexión a Internet representa una oportunidad para aprender,
                pero también puede convertirse en un riesgo si no conocemos las
                amenazas digitales más comunes. Comprender cómo actúan los ataques
                informáticos permite prevenir incidentes y proteger nuestra
                información personal, académica y profesional.

              </p>
                  
                {/*================ VIDEO EDUCATIVO =================*/}

<div className="mt-16">

  <div className="overflow-hidden rounded-[32px] border border-red-200 bg-white shadow-xl">

    {/* Encabezado */}
    <div className="flex items-center justify-between border-b border-red-100 bg-gradient-to-r from-red-50 to-orange-50 px-8 py-5">

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-700">
          Recurso Multimedia
        </p>

        <h3 className="mt-2 text-2xl font-black text-slate-900">
          Video: Amenazas Digitales
        </h3>
      </div>

      <div className="rounded-full bg-red-100 p-3">
        <PlayCircle className="h-6 w-6 text-red-600" />
      </div>

    </div>

    {/* Video */}
    <iframe
      className="aspect-video w-full"
      src="https://www.youtube.com/embed/_BF0QWsFh3I"
      title="Amenazas Digitales"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />

    {/* Información */}
    <div className="px-8 py-7">

      <p className="text-lg leading-8 text-slate-600">
        Este video presenta las principales amenazas digitales y explica cómo
        identificarlas para proteger la información personal y navegar de forma
        segura en Internet.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">

        <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
          <ShieldCheck className="h-4 w-4" />
          Ciberseguridad
        </span>

        <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
          <BookOpen className="h-4 w-4" />
          Aprendizaje
        </span>

        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
          <CheckCircle2 className="h-4 w-4" />
          Prevención
        </span>

      </div>

    </div>

  </div>

</div>
                
            </div>

          </div>

            
            {/* Amenazas */}
            <div className="relative z-10 mx-auto mt-20 max-w-7xl px-6">

              {/* Introducción */}
              <div className="mb-14 text-center">

                <h3 className="text-4xl font-black text-slate-900">
                  Amenazas digitales más comunes
                </h3>
              </div>

              {/* Tarjetas */}
              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                {riesgos.map((item, idx) => {
                  const Icon = item.icon;

                  return (

                    <article
                      key={idx}
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-3xl
                        border
                        border-slate-200
                        bg-white
                        p-8
                        shadow-sm
                        transition-all
                        duration-500
                        hover:-translate-y-2
                        hover:border-red-300
                        hover:shadow-2xl
                      "
                    >

                      {/* Línea superior */}
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400" />

                      {/* Glow */}
                      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-br from-red-50 via-transparent to-orange-50" />

                      <div className="relative z-10">

                        {/* Cabecera */}
                        <div className="flex items-center justify-between">

                          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 transition duration-500 group-hover:scale-110 group-hover:rotate-6">

                            <Icon
                              size={30}
                              className="text-red-600"
                            />

                          </div>

                          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-700">
                            Amenaza
                          </span>

                        </div>

                        {/* Nombre */}
                        <h3 className="mt-7 text-2xl font-black text-slate-900">
                          {item.t}
                        </h3>

                        {/* Descripción */}
                        <p className="mt-5 leading-8 text-slate-600">
                          {item.d}
                        </p>

                        {/* Impacto */}
                        <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-5">

                          <p className="font-bold text-orange-700">
                            Impacto
                          </p>

                          <p className="mt-2 leading-7 text-slate-600">
                            {item.impact}
                          </p>

                        </div>

                        {/* Prevención */}
                        <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">

                          <p className="font-bold text-emerald-700">
                            ¿Cómo prevenirlo?
                          </p>

                          <p className="mt-2 leading-7 text-slate-600">
                            {item.tip}
                          </p>

                        </div>

                      </div>

                    </article>

                  );
                })}

              </div>

              {/* Nota final */}
              <div className="mt-20 rounded-3xl border border-red-200 bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 p-10 shadow-sm">

                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                  <div>

                    <h3 className="text-3xl font-black text-slate-900">
                      Recuerda
                    </h3>

                    <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">

                      Ninguna amenaza informática es completamente inofensiva. La mejor
                      defensa es mantener hábitos seguros, actualizar los dispositivos,
                      desconfiar de enlaces sospechosos y proteger siempre la información
                      personal.

                    </p>

                  </div>

                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg">

                    <span className="text-5xl">🛡️</span>

                  </div>

                </div>

              </div>

            </div>
        </section>

      {/*================ CONTENIDO 3 =================*/}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-cyan-50 py-24">

        {/* Glow */}
        <div className="absolute left-0 top-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-[140px]" />

        {/* Fondo tecnológico */}
        <div
          className="absolute inset-0 opacity-[0.04]
          bg-[linear-gradient(rgba(6,182,212,.7)_1px,transparent_1px),
          linear-gradient(90deg,rgba(6,182,212,.7)_1px,transparent_1px)]
          bg-[size:45px_45px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          {/* Badge */}

          <div className="flex justify-center">

            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-200 bg-white px-6 py-3 shadow">

              <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />

              <span className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-700">
                Contenido 3
              </span>

            </div>

          </div>

          {/* Título */}

          <div className="mx-auto mt-10 max-w-5xl text-center">

            <h2 className="text-5xl font-black text-slate-900">

              Buenas

              <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">

                Prácticas de Ciberseguridad

              </span>

            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-600">

              La mejor forma de proteger la información no depende únicamente del
              software o de los equipos, sino también de las acciones que realiza
              cada usuario. Adoptar hábitos seguros reduce considerablemente el
              riesgo de sufrir ataques informáticos.

            </p>

          </div>

          {/* Tarjetas */}

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {/* 1 */}

            <article className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-3xl">
                🔐
              </div>

              <h3 className="mt-6 text-2xl font-black text-slate-900">
                Utilizar contraseñas seguras
              </h3>

              <p className="mt-5 leading-8 text-slate-600">

                Las contraseñas deben contener letras mayúsculas, minúsculas,
                números y símbolos. Además, nunca deben compartirse con otras
                personas.

              </p>

            </article>

            {/* 2 */}

            <article className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
                🔄
              </div>

              <h3 className="mt-6 text-2xl font-black text-slate-900">
                Mantener el software actualizado
              </h3>

              <p className="mt-5 leading-8 text-slate-600">

                Las actualizaciones corrigen vulnerabilidades de seguridad y mejoran
                el funcionamiento del sistema operativo y de las aplicaciones.

              </p>

            </article>

            {/* 3 */}

            <article className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                📩
              </div>

              <h3 className="mt-6 text-2xl font-black text-slate-900">
                Desconfiar de enlaces sospechosos
              </h3>

              <p className="mt-5 leading-8 text-slate-600">

                Antes de hacer clic en un enlace recibido por correo o redes
                sociales, verifica siempre quién lo envía y si la dirección es
                confiable.

              </p>

            </article>

            {/* 4 */}

            <article className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-3xl">
                🛡️
              </div>

              <h3 className="mt-6 text-2xl font-black text-slate-900">
                Activar la autenticación en dos pasos
              </h3>

              <p className="mt-5 leading-8 text-slate-600">

                La verificación en dos pasos añade una capa adicional de protección
                para impedir el acceso no autorizado a las cuentas.

              </p>

            </article>

            {/* 5 */}

            <article className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
                💾
              </div>

              <h3 className="mt-6 text-2xl font-black text-slate-900">
                Realizar copias de seguridad
              </h3>

              <p className="mt-5 leading-8 text-slate-600">

                Guardar copias de los archivos importantes permite recuperarlos en
                caso de pérdida, daño o ataque de ransomware.

              </p>

            </article>

            {/* 6 */}

            <article className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-3xl">
                🚫
              </div>

              <h3 className="mt-6 text-2xl font-black text-slate-900">
                No compartir información personal
              </h3>

              <p className="mt-5 leading-8 text-slate-600">

                Evita publicar datos personales, contraseñas, documentos o información
                sensible en redes sociales o sitios desconocidos.

              </p>

            </article>

          </div>

          {/*================ RECURSO MULTIMEDIA =================*/}

      <div className="mt-20">

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

          <div className="grid lg:grid-cols-5">

            {/* Video */}

            <div className="lg:col-span-3">

              <iframe
                className="aspect-video h-full w-full"
                src="https://www.youtube.com/embed/7inJZi8RdTg"
                title="Buenas prácticas de ciberseguridad"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

            </div>

            {/* Información */}

            <div className="flex flex-col justify-between bg-slate-50 p-8 lg:col-span-2">

              <div>

                <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-cyan-700">

                  Recurso Multimedia

                </span>

                <h3 className="mt-6 text-3xl font-black text-slate-900">

                  Buenas prácticas de Ciberseguridad

                </h3>

                <p className="mt-6 leading-8 text-slate-600">

                  Antes de continuar con el contenido, observa el siguiente video.
                  Este recurso explica de forma sencilla las principales acciones que
                  cualquier persona puede aplicar para proteger sus dispositivos,
                  cuentas e información en Internet.

                </p>

              </div>

              {/* Objetivos */}

              <div className="mt-10 space-y-4">

                <div className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-xl">
                    🎯
                  </div>

                  <div>

                    <h4 className="font-bold text-slate-900">
                      Objetivo
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-600">

                      Comprender cómo proteger la información mediante hábitos
                      digitales seguros.

                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl">
                    👀
                  </div>

                  <div>

                    <h4 className="font-bold text-slate-900">
                      Mientras observas
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-600">

                      Identifica cuáles recomendaciones ya aplicas y cuáles puedes
                      comenzar a implementar desde hoy.

                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-xl">
                    💡
                  </div>

                  <div>

                    <h4 className="font-bold text-slate-900">
                      Consejo
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-600">

                      Después del video revisa las tarjetas inferiores para reforzar
                      los conceptos explicados.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

          {/* Recomendación */}

          <div className="mt-20 rounded-3xl border border-cyan-200 bg-white p-10 shadow-lg">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center">

              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cyan-100 text-5xl">
                💡
              </div>

              <div>

                <h3 className="text-3xl font-black text-slate-900">
                  Consejo de seguridad
                </h3>

                <p className="mt-4 text-lg leading-8 text-slate-600">

                  La tecnología por sí sola no garantiza la seguridad. La mejor
                  protección es combinar herramientas tecnológicas con hábitos
                  responsables, pensamiento crítico y una actitud preventiva frente
                  a cualquier situación sospechosa en Internet.

                </p>

              </div>

            </div>

          </div>

        </div>

        

      </section>

      {/*================ COMPETENCIA 02 =================*/}

<section className="relative overflow-hidden bg-gradient-to-b from-violet-50 via-white to-indigo-50 py-24">

  {/* Glow */}
  <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-violet-400/15 blur-[120px]" />
  <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-indigo-400/15 blur-[140px]" />

  {/* Fondo */}
  <div
    className="absolute inset-0 opacity-[0.04]
    bg-[linear-gradient(rgba(99,102,241,.8)_1px,transparent_1px),
    linear-gradient(90deg,rgba(99,102,241,.8)_1px,transparent_1px)]
    bg-[size:50px_50px]"
  />

  <div className="relative z-10 mx-auto max-w-7xl px-6">

    {/* Badge */}

    <div className="flex justify-center">

      <div className="inline-flex items-center gap-3 rounded-full border border-violet-200 bg-white px-6 py-3 shadow-lg">

        <div className="h-3 w-3 rounded-full bg-violet-600 animate-pulse" />

        <span className="text-xs font-bold uppercase tracking-[0.35em] text-violet-700">
          Competencia 02
        </span>

      </div>

    </div>

    {/* Encabezado */}

    <div className="mx-auto mt-10 max-w-5xl text-center">

      <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900">

        Ética

        <span className="block bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">

          Digital

        </span>

      </h2>

      <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-600">

        La ciudadanía digital implica actuar con respeto, responsabilidad y
        compromiso cada vez que utilizamos Internet. Una conducta ética en los
        entornos digitales fortalece la convivencia, protege la privacidad y
        favorece un uso seguro y consciente de la tecnología.

      </p>

    </div>

    {/* Contenido */}

    <div className="mt-20 grid items-center gap-10 lg:grid-cols-[1.2fr_.8fr]">

      {/* Tarjeta principal */}

      <div className="rounded-[32px] border border-violet-200 bg-white p-10 shadow-xl">

        <div className="flex items-center gap-5">

          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-600 text-4xl shadow-lg">

            🤝

          </div>

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-violet-700">

              Competencia

            </p>

            <h3 className="mt-2 text-3xl font-black text-slate-900">

              Promover la Ética Digital

            </h3>

          </div>

        </div>

        <p className="mt-8 text-lg leading-9 text-slate-600">

          Desarrollar actitudes responsables para utilizar las tecnologías de
          manera segura, respetuosa y consciente, fomentando la convivencia
          digital, la protección de la información y el respeto hacia los demás
          usuarios en cualquier entorno virtual.

        </p>

        {/* Valores */}

        <div className="mt-10 grid gap-4 md:grid-cols-2">

          <div className="rounded-2xl bg-violet-50 p-5 border border-violet-100">

            <h4 className="font-bold text-violet-700">
              🤝 Respeto
            </h4>

            <p className="mt-2 text-slate-600">
              Tratar a todas las personas con cortesía y evitar cualquier forma
              de acoso o discriminación en Internet.
            </p>

          </div>

          <div className="rounded-2xl bg-indigo-50 p-5 border border-indigo-100">

            <h4 className="font-bold text-indigo-700">
              🔒 Responsabilidad
            </h4>

            <p className="mt-2 text-slate-600">
              Proteger la información personal y asumir las consecuencias de
              nuestras acciones digitales.
            </p>

          </div>

          <div className="rounded-2xl bg-sky-50 p-5 border border-sky-100">

            <h4 className="font-bold text-sky-700">
              💬 Comunicación
            </h4>

            <p className="mt-2 text-slate-600">
              Compartir información de forma respetuosa, verificando siempre la
              veracidad del contenido.
            </p>

          </div>

          <div className="rounded-2xl bg-emerald-50 p-5 border border-emerald-100">

            <h4 className="font-bold text-emerald-700">
              🌎 Convivencia
            </h4>

            <p className="mt-2 text-slate-600">
              Contribuir a construir espacios digitales seguros, inclusivos y
              colaborativos.
            </p>

          </div>

        </div>

      </div>

      {/* Panel lateral */}

      <div className="space-y-6">

        <div className="rounded-3xl border border-violet-200 bg-white p-8 shadow-lg">

          <div className="text-5xl">💡</div>

          <h4 className="mt-5 text-2xl font-black text-slate-900">

            Objetivo

          </h4>

          <p className="mt-4 leading-8 text-slate-600">

            Promover el respeto, la responsabilidad y el uso consciente de la
            tecnología para una convivencia segura en los entornos digitales.

          </p>

        </div>

        <div className="rounded-3xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 p-8 text-white shadow-xl">

          <div className="text-5xl">
            🌐
          </div>

          <h4 className="mt-5 text-2xl font-black">

            Mensaje clave

          </h4>

          <p className="mt-4 leading-8 text-violet-100">

            La ética digital no consiste únicamente en conocer la tecnología,
            sino en utilizarla con respeto, responsabilidad y compromiso para
            generar un impacto positivo en la comunidad.

          </p>

        </div>

      </div>

    </div>

  </div>

</section>
{/*================ CONTENIDO 1 =================*/}

<section className="bg-slate-50 py-24">

  <div className="mx-auto max-w-7xl px-6">

    {/* Encabezado */}

    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex rounded-full bg-violet-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-violet-700">
        Contenido 1
      </span>

      <h2 className="mt-8 text-5xl font-black tracking-tight text-slate-900">

        ¿Qué es la

        <span className="block bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">

          Ética Digital?

        </span>

      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">

        La ética digital es el conjunto de principios, valores y normas que
        orientan el comportamiento responsable de las personas cuando utilizan
        tecnologías digitales e Internet. Su finalidad es promover una
        convivencia respetuosa, proteger los derechos de los usuarios y
        fomentar un uso seguro, responsable y consciente de la tecnología.

      </p>

    </div>

    {/* Contenido */}

    <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

      {/* Texto */}

      <div>

        <h3 className="text-3xl font-black text-slate-900">

          ¿Por qué es importante la Ética Digital?

        </h3>

        <p className="mt-6 text-lg leading-9 text-slate-600">

          Actualmente gran parte de nuestras actividades se desarrollan en
          entornos digitales: estudiamos, trabajamos, compartimos fotografías,
          utilizamos redes sociales y nos comunicamos mediante diferentes
          plataformas. Cada acción que realizamos deja una huella digital y
          puede afectar tanto a nosotros como a otras personas.

        </p>

        <p className="mt-6 text-lg leading-9 text-slate-600">

          Actuar con ética digital significa utilizar la tecnología con respeto,
          honestidad y responsabilidad, evitando conductas que puedan perjudicar
          la privacidad, la seguridad o la convivencia dentro de la comunidad
          digital.

        </p>

        {/* Dato */}

        <div className="mt-10 rounded-2xl border-l-4 border-violet-600 bg-violet-50 p-6">

          <h4 className="font-bold text-violet-700">

            Dato importante

          </h4>

          <p className="mt-3 leading-8 text-slate-700">

            Todo lo que publicamos en Internet puede permanecer disponible
            durante mucho tiempo. Antes de compartir información, imágenes o
            comentarios, es importante pensar en las consecuencias que podrían
            tener para nosotros y para otras personas.

          </p>

        </div>

      </div>

      {/* Video */}

     {/*================ VIDEO EDUCATIVO =================*/}

<div className="mt-20">

  <div className="overflow-hidden rounded-[32px] border border-cyan-200 bg-white shadow-2xl">

    {/* Encabezado */}

    <div className="flex items-center justify-between border-b border-cyan-100 bg-gradient-to-r from-cyan-50 to-blue-50 px-8 py-5">

      <div>

        <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-700">
          Recurso Multimedia
        </p>

        <h3 className="mt-2 text-2xl font-black text-slate-900">
          Ética Digital y Ciudadanía Responsable
        </h3>

      </div>

      <span className="rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold text-cyan-700">
        🎥 Video educativo
      </span>

    </div>

    {/* Video */}

    <iframe
      className="aspect-video w-full"
      src="https://www.youtube.com/embed/tc2l0DHxthg"
      title="Ética Digital"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />

    {/* Pie */}

    <div className="bg-slate-50 px-8 py-6">

      <h4 className="text-xl font-bold text-slate-900">
        ¿Qué aprenderás?
      </h4>

      <p className="mt-3 leading-8 text-slate-600">

        Este recurso explica la importancia de la ética digital, el respeto en
        los entornos virtuales, el uso responsable de las redes sociales, la
        protección de la privacidad y las buenas prácticas para convivir de
        manera segura y responsable en Internet.

      </p>

      <div className="mt-6 flex flex-wrap gap-3">

        <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
          🤝 Respeto
        </span>

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          🔒 Privacidad
        </span>

        <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
          🌐 Ciudadanía Digital
        </span>

        <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
          💬 Convivencia
        </span>

      </div>

    </div>

  </div>

</div>
    </div>

    {/* Conceptos */}

    <div className="mt-24">

      <h3 className="text-center text-4xl font-black text-slate-900">

        Principios fundamentales de la Ética Digital

      </h3>

      <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">

        Una convivencia digital segura depende de los valores que ponemos en
        práctica cada vez que utilizamos la tecnología.

      </p>

     <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

  {/* Card 1 */}
  <article className="group relative overflow-hidden rounded-[28px] bg-white p-8 shadow-md ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:ring-violet-300">

    <div className="absolute left-0 top-0 h-1 w-full bg-violet-600" />

    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-3xl">
      🤝
    </div>

    <h4 className="mt-8 text-2xl font-extrabold text-slate-900">
      Respeto
    </h4>

    <p className="mt-5 leading-8 text-slate-600">
      Mantén una comunicación cordial y empática en cualquier entorno digital.
      El respeto fortalece la convivencia y previene situaciones de acoso,
      discriminación o conflictos en Internet.
    </p>

  </article>

  {/* Card 2 */}

  <article className="group relative overflow-hidden rounded-[28px] bg-white p-8 shadow-md ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:ring-sky-300">

    <div className="absolute left-0 top-0 h-1 w-full bg-sky-500" />

    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-3xl">
      🔒
    </div>

    <h4 className="mt-8 text-2xl font-extrabold text-slate-900">
      Privacidad
    </h4>

    <p className="mt-5 leading-8 text-slate-600">
      Protege tus datos personales y respeta la información privada de otras
      personas. Configurar adecuadamente la privacidad ayuda a prevenir riesgos
      y fraudes digitales.
    </p>

  </article>

  {/* Card 3 */}

  <article className="group relative overflow-hidden rounded-[28px] bg-white p-8 shadow-md ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:ring-emerald-300">

    <div className="absolute left-0 top-0 h-1 w-full bg-emerald-500" />

    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
      ⚖️
    </div>

    <h4 className="mt-8 text-2xl font-extrabold text-slate-900">
      Responsabilidad
    </h4>

    <p className="mt-5 leading-8 text-slate-600">
      Cada publicación, comentario o archivo compartido deja una huella
      digital. Actúa con responsabilidad y piensa en las consecuencias de tus
      acciones antes de publicar.
    </p>

  </article>

  {/* Card 4 */}

  <article className="group relative overflow-hidden rounded-[28px] bg-white p-8 shadow-md ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:ring-amber-300">

    <div className="absolute left-0 top-0 h-1 w-full bg-amber-500" />

    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-3xl">
      📚
    </div>

    <h4 className="mt-8 text-2xl font-extrabold text-slate-900">
      Honestidad
    </h4>

    <p className="mt-5 leading-8 text-slate-600">
      Utiliza información confiable, cita las fuentes cuando corresponda y
      respeta los derechos de autor. La honestidad fortalece la confianza en
      los entornos digitales.
    </p>

  </article>

</div>

    </div>

  </div>

</section>

<section className="relative bg-white py-28">

  <div className="mx-auto max-w-7xl px-6">

    {/* HEADER */}

    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-6 py-2 text-xs font-bold uppercase tracking-[0.35em] text-red-600">
        Contenido 2
      </span>

      <h2 className="mt-8 text-5xl font-black text-slate-900">
        Riesgos de no practicar la
        <span className="block bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
          Ética Digital
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-600">
        Las acciones realizadas en Internet tienen consecuencias reales.
        Ignorar los principios de la ética digital puede afectar la seguridad,
        la privacidad, la reputación y la convivencia entre las personas.
      </p>

    </div>


    {/* CARD PRINCIPAL */}

    <div className="mt-20 overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-2xl">

      <div className="grid lg:grid-cols-2">

        {/* IZQUIERDA */}

        <div className="p-14">

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-bold text-red-600">
            Consecuencias
          </span>

          <h3 className="mt-8 text-4xl font-black text-slate-900">
            Cada acción deja una huella digital
          </h3>

          <p className="mt-8 text-lg leading-9 text-slate-600">

            Publicar información falsa, compartir datos personales o faltar al
            respeto a otras personas puede generar problemas que permanecen en
            Internet durante muchos años.

          </p>

          <p className="mt-6 text-lg leading-9 text-slate-600">

            Una conducta responsable protege nuestra identidad digital,
            fortalece la confianza y contribuye a crear comunidades virtuales
            más seguras para todos.

          </p>

        </div>


        {/* DERECHA */}

        <div className="bg-gradient-to-br from-red-600 via-orange-500 to-amber-500 p-14 text-white">

          <div className="text-7xl">
            ⚠️
          </div>

          <h3 className="mt-8 text-4xl font-black">
            Antes de publicar...
          </h3>

          <p className="mt-8 text-lg leading-9 text-red-100">

            Pregúntate siempre:

          </p>

          <div className="mt-10 space-y-5">

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              ✔ ¿Es verdadera la información?
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              ✔ ¿Respeta a otras personas?
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              ✔ ¿Podría perjudicar a alguien?
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              ✔ ¿Quiero que permanezca en Internet?
            </div>

          </div>

        </div>

      </div>

    </div>


    {/* GRID */}

    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">


      {/* CARD */}

      <article className="group rounded-[28px] border border-slate-200 bg-white p-8 transition duration-500 hover:-translate-y-3 hover:border-red-300 hover:shadow-2xl">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-4xl">
          🚫
        </div>

        <h3 className="mt-8 text-2xl font-black text-slate-900">
          Ciberacoso
        </h3>

        <p className="mt-5 leading-8 text-slate-600">

          Los comentarios ofensivos, amenazas o burlas pueden afectar la salud
          emocional de otras personas.

        </p>

      </article>


      <article className="group rounded-[28px] border border-slate-200 bg-white p-8 transition duration-500 hover:-translate-y-3 hover:border-orange-300 hover:shadow-2xl">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-4xl">
          🔓
        </div>

        <h3 className="mt-8 text-2xl font-black text-slate-900">
          Pérdida de privacidad
        </h3>

        <p className="mt-5 leading-8 text-slate-600">

          Compartir información personal facilita el robo de identidad y otros
          riesgos de seguridad.

        </p>

      </article>


      <article className="group rounded-[28px] border border-slate-200 bg-white p-8 transition duration-500 hover:-translate-y-3 hover:border-amber-300 hover:shadow-2xl">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-4xl">
          📢
        </div>

        <h3 className="mt-8 text-2xl font-black text-slate-900">
          Desinformación
        </h3>

        <p className="mt-5 leading-8 text-slate-600">

          Compartir noticias falsas puede generar confusión y afectar a miles
          de personas.

        </p>

      </article>


      <article className="group rounded-[28px] border border-slate-200 bg-white p-8 transition duration-500 hover:-translate-y-3 hover:border-rose-300 hover:shadow-2xl">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-50 text-4xl">
          👤
        </div>

        <h3 className="mt-8 text-2xl font-black text-slate-900">
          Reputación Digital
        </h3>

        <p className="mt-5 leading-8 text-slate-600">

          Todo lo que publicamos puede influir en nuestra imagen personal,
          académica y profesional.

        </p>

      </article>

    </div>


    {/* MENSAJE */}

    <div className="mt-24 rounded-[36px] border border-slate-200 bg-slate-50 p-12">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <span className="text-sm font-bold uppercase tracking-[0.3em] text-red-600">
            Reflexión
          </span>

          <h3 className="mt-4 text-4xl font-black text-slate-900">
            La mejor protección comienza con nuestras decisiones.
          </h3>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600">

            Practicar la ética digital significa pensar antes de actuar,
            respetar a los demás, proteger la información y utilizar la
            tecnología de manera responsable para construir una sociedad digital
            segura, inclusiva y confiable.

          </p>

        </div>

        <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-orange-500 text-7xl shadow-xl">
          🛡️
        </div>

      </div>

    </div>

  </div>

</section>

<section className="bg-white py-24">

  <div className="mx-auto max-w-7xl px-6">

    {/*================ ENCABEZADO ================*/}

    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-6 py-2 text-xs font-bold uppercase tracking-[0.35em] text-indigo-700">
        Competencia 03
      </span>

      <h2 className="mt-8 text-5xl font-black tracking-tight text-slate-900">

        Pensamiento

        <span className="block bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
          Crítico
        </span>

      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">

        Analizar la información digital de manera crítica permite identificar
        contenidos confiables, reconocer la desinformación y tomar decisiones
        responsables frente a todo aquello que encontramos en Internet.

      </p>

    </div>

    {/*================ CONTENIDO PRINCIPAL ================*/}

    <div className="mt-20 overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-2xl">

      <div className="grid lg:grid-cols-2">

        {/* IZQUIERDA */}

        <div className="p-12">

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-bold text-indigo-700">
            ¿Por qué es importante?
          </span>

          <h3 className="mt-8 text-4xl font-black text-slate-900">
            Pensar antes de creer y compartir
          </h3>

          <p className="mt-8 text-lg leading-9 text-slate-600">

            Internet ofrece acceso inmediato a millones de contenidos, pero no
            toda la información publicada es verdadera, completa o confiable.
            El pensamiento crítico permite analizar cada contenido antes de
            aceptarlo como cierto.

          </p>

          <p className="mt-6 text-lg leading-9 text-slate-600">

            Desarrollar esta habilidad ayuda a evitar la desinformación,
            reconocer noticias falsas, verificar fuentes oficiales y tomar
            decisiones responsables al utilizar plataformas digitales, redes
            sociales y buscadores de Internet.

          </p>

          <div className="mt-10 rounded-2xl border-l-4 border-indigo-600 bg-indigo-50 p-6">

            <h4 className="font-bold text-indigo-700">
              Reflexiona
            </h4>

            <p className="mt-3 leading-8 text-slate-700">

              Antes de compartir cualquier información pregúntate:
              <strong> ¿Quién la publicó?, ¿la fuente es confiable?, ¿existen
              otras fuentes que confirmen esa información?</strong>

            </p>

          </div>

        </div>

        {/* DERECHA */}

        <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 p-12 text-white">

          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 text-5xl backdrop-blur">
            🧠
          </div>

          <h3 className="mt-8 text-4xl font-black">
            Un ciudadano digital crítico...
          </h3>

          <p className="mt-6 leading-9 text-slate-200">

            Analiza la información antes de aceptarla, verifica las fuentes,
            identifica posibles manipulaciones y utiliza el conocimiento para
            tomar decisiones responsables en los entornos digitales.

          </p>

          <div className="mt-10 space-y-5">

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">

              <div className="font-bold">
                ✔ Analiza antes de creer
              </div>

              <p className="mt-2 text-slate-300">

                No acepta cualquier publicación como verdadera sin comprobarla.

              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">

              <div className="font-bold">
                ✔ Verifica las fuentes
              </div>

              <p className="mt-2 text-slate-300">

                Consulta medios oficiales, instituciones y fuentes confiables.

              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">

              <div className="font-bold">
                ✔ Comparte responsablemente
              </div>

              <p className="mt-2 text-slate-300">

                Solo difunde información verificada para evitar la propagación
                de noticias falsas.

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

    {/*================ HABILIDADES ================*/}

    <div className="mt-24">

      <div className="text-center">

        <h3 className="text-4xl font-black text-slate-900">
          Habilidades del Pensamiento Crítico
        </h3>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">

          Estas competencias permiten analizar la información digital de forma
          objetiva y responsable.

        </p>

      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

          <div className="flex items-center gap-5">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-3xl">
              🔍
            </div>

            <div>

              <h4 className="text-2xl font-black text-slate-900">
                Verificar información
              </h4>

              <p className="mt-2 text-slate-600">

                Contrastar la información consultando varias fuentes confiables
                antes de aceptarla como verdadera.

              </p>

            </div>

          </div>

        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

          <div className="flex items-center gap-5">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
              📰
            </div>

            <div>

              <h4 className="text-2xl font-black text-slate-900">
                Detectar desinformación
              </h4>

              <p className="mt-2 text-slate-600">

                Reconocer noticias falsas, titulares engañosos e información
                manipulada en Internet.

              </p>

            </div>

          </div>

        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

          <div className="flex items-center gap-5">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-3xl">
              💡
            </div>

            <div>

              <h4 className="text-2xl font-black text-slate-900">
                Analizar objetivamente
              </h4>

              <p className="mt-2 text-slate-600">

                Evaluar evidencias, identificar opiniones y diferenciar hechos
                antes de tomar decisiones.

              </p>

            </div>

          </div>

        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

          <div className="flex items-center gap-5">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
              ⚖️
            </div>

            <div>

              <h4 className="text-2xl font-black text-slate-900">
                Tomar decisiones responsables
              </h4>

              <p className="mt-2 text-slate-600">

                Utilizar información verificada para actuar con responsabilidad
                en los entornos digitales.

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

    {/*================ MENSAJE FINAL ================*/}

    <div className="mt-24 rounded-[32px] bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 p-12 text-center text-white shadow-2xl">

      <div className="text-6xl">🧠</div>

      <h3 className="mt-6 text-4xl font-black">
        Pensar críticamente es una habilidad esencial
      </h3>

      <p className="mx-auto mt-6 max-w-4xl text-lg leading-9 text-blue-100">

        En el mundo digital no basta con acceder a la información; es necesario
        analizarla, cuestionarla y verificarla. El pensamiento crítico permite
        combatir la desinformación, fortalecer la ciudadanía digital y tomar
        decisiones responsables que beneficien tanto a las personas como a la
        sociedad.

      </p>

    </div>

  </div>

</section>
   </main>
  );
}