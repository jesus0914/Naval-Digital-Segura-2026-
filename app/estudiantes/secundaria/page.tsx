"use client";
import { motion, Variants } from "framer-motion";
import {
  AlertTriangle,
  ShieldAlert,
  MailWarning,
  Globe,
  LockKeyhole,
  UserRoundCheck,
  ShieldCheck,
  Shield,
  Ban,
  ShieldBan,
  RefreshCw,
  BadgeAlert,
  MessageSquareWarning,
  UserX,
  DatabaseZap,
  Bug,
  BrainCircuit
} from "lucide-react";

/* ================= ANIMACIONES ================= */
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};
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
/* ================= PAGE ================= */

export default function SecundariaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-slate-50 px-6 py-14 text-slate-900">

      <div className="mx-auto max-w-7xl space-y-16">

        {/* ================= HERO ================= */}
          <section className="relative overflow-hidden py-16 sm:py-20 md:py-24">

                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.25, 0.55, 0.25],
                            x: [-8, 8, -8],
                          }}
                          transition={{
                            duration: 12,
                            repeat: Infinity,
                          }}
                          className="absolute left-1/2 top-[-40px] -z-20 h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] md:h-[360px] md:w-[360px] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-[140px]"
                        />

                        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">

                          {/* Badge */}
                          <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-indigo-200 bg-white/90 px-4 sm:px-5 py-2 sm:py-2.5 shadow-md backdrop-blur-xl">
                            <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600" />
                            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.35em] text-indigo-700">
                              Grados 6° a 9°
                            </span>
                          </div>

                          {/* Title */}
                          <h1 className="mt-6 sm:mt-8 text-3xl sm:text-4xl md:text-6xl font-black tracking-tight">
                            Secundaria
                            <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                              Digital Segura
                            </span>
                          </h1>

                          {/* Text */}
                          <p className="mx-auto mt-5 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
                            En secundaria, los estudiantes utilizan internet, redes sociales y
                            plataformas digitales con mayor frecuencia para aprender, comunicarse y
                            crear contenido. Por eso es fundamental fortalecer el uso seguro,
                            responsable y consciente de la tecnología, desarrollando habilidades para
                            proteger la información personal, identificar riesgos en línea y convivir
                            de manera respetuosa en entornos digitales.
                          </p>

                          {/* Imagen abajo */}
            {/* Imagen abajo animada */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mt-6 sm:mt-8 md:mt-10"
            >
              <motion.img
                src="/media.png"
                alt="Estudiantes aprendiendo seguridad digital"
                className="mx-auto w-full max-w-3xl rounded-2xl shadow-xl object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>

            </div>
          </section>

        {/* ================= COMPETENCIAS ================= */}
          <section className="relative overflow-hidden">

        {/* Glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-0 -z-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[170px]"
        />

        <div className="mx-auto py-2 max-w-6xl px-6">

          {/* HEADER (mejorado) */}
          <div className="mx-auto max-w-3xl text-center">

            {/* Badge */}
            <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-indigo-700 shadow-sm">
              Área de Aprendizaje
            </span>

            {/* Title */}
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Competencias Digitales
            </h2>

            {/* Subtitle */}
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Desarrolla habilidades para utilizar internet, redes sociales y entornos digitales de forma segura,
              crítica y responsable. Fortalece la toma de decisiones informadas, la protección de tu identidad digital
              y la convivencia respetuosa en espacios colaborativos en línea.
            </p>

          </div>

          {/* GRID */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3"
          >

            {/* CARD 1 */}
            <motion.article
              variants={item}
              whileHover={{ y: -12, scale: 1.03 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:shadow-2xl"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <AlertTriangle className="h-6 w-6" />
              </div>

              <span className="mt-6 block text-xs font-black tracking-[0.35em] text-indigo-600">
                RIESGOS DIGITALES
              </span>

              <h3 className="mt-3 text-xl font-bold text-slate-900">
                Identificación de Amenazas
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                Reconoce phishing, fraudes, noticias falsas (fake news) y comportamientos sospechosos en línea
                para tomar decisiones informadas y seguras.
              </p>
            </motion.article>

            {/* CARD 2 */}
            <motion.article
              variants={item}
              whileHover={{ y: -12, scale: 1.03 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:shadow-2xl"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <Shield className="h-6 w-6" />
              </div>

              <span className="mt-6 block text-xs font-black tracking-[0.35em] text-indigo-600">
                IDENTIDAD
              </span>

              <h3 className="mt-3 text-xl font-bold text-slate-900">
                Protección de la Identidad Digital
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                Gestiona tu privacidad, contraseñas seguras y huella digital para proteger tu reputación
                en entornos sociales y educativos.
              </p>
            </motion.article>

            {/* CARD 3 */}
            <motion.article
              variants={item}
              whileHover={{ y: -12, scale: 1.03 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:shadow-2xl"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <Ban className="h-6 w-6" />
              </div>

              <span className="mt-6 block text-xs font-black tracking-[0.35em] text-indigo-600">
                CONVIVENCIA
              </span>

              <h3 className="mt-3 text-xl font-bold text-slate-900">
                Prevención del Ciberacoso
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                Aprende a prevenir, identificar y actuar frente al ciberacoso, grooming y sextorsión
                promoviendo respeto digital.
              </p>
            </motion.article>

          </motion.div>

        </div>
          </section>
         {/* ================= VIDEO EDUCATIVO ================= */}
          <section className="relative py-2 overflow-hidden">

            {/* Fondo */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-red-50 via-white to-white" />
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-80 w-80 rounded-full bg-red-200/20 blur-[120px] -z-10" />

            <div className="mx-auto max-w-6xl px-6">

              {/* HEADER */}
              <div className="mx-auto max-w-4xl text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-6 py-2 shadow-md">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-[0.35em] text-red-700">
                    Recurso Audiovisual
                  </span>
                </div>

                {/* Título */}
                <h2 className="mt-10 text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
                  Formas de
                  <span className="block bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
                    Ataques Cibernéticos
                  </span>
                </h2>

                {/* Descripción */}
                <p className="mx-auto mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-slate-600">
                  Aprende a identificar las principales amenazas presentes en Internet,
                  cómo actúan los ciberdelincuentes y qué medidas puedes aplicar para
                  proteger tu información, tus dispositivos y tu identidad digital.
                </p>

                <div className="mx-auto mt-12 h-[3px] w-28 rounded-full bg-gradient-to-r from-red-500 via-orange-400 to-red-500" />

              </div>

              {/* VIDEO */}
              <div className="mt-16 mx-auto max-w-5xl">

                <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,.18)]">

                  {/* Cabecera */}
                  <div className="flex items-center justify-between border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white px-6 py-4">

                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        🎥 Formas de Ataques Cibernéticos
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Video explicativo sobre las amenazas digitales más comunes.
                      </p>
                    </div>

                    <div className="hidden md:flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
                      Educación Digital
                    </div>

                  </div>

                  {/* Video */}
                  <div className="aspect-video">
                    <iframe
                      className="h-full w-full"
                      src="https://www.youtube.com/embed/1cI5PdgnT_o"
                      title="Formas de Ataques Cibernéticos - Video Explicativo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>

                </div>

              </div>

              {/* Información inferior */}
{/* ================= APRENDERÁS ================= */}
<div className="mx-auto mt-12 max-w-5xl rounded-[30px] border border-red-100 bg-gradient-to-br from-red-50 to-orange-50 p-8 shadow-lg">

  <div className="text-center">

    <span className="inline-flex rounded-full bg-white px-5 py-2 text-sm font-bold uppercase tracking-widest text-red-700 shadow">
      ¿Qué aprenderás?
    </span>

    <h3 className="mt-5 text-3xl font-black text-slate-900">
      Al finalizar este video podrás
    </h3>

  </div>

  <div className="mt-10 grid gap-6 md:grid-cols-2">

    {/* Amenazas */}
    <div className="group flex gap-4 rounded-2xl border border-red-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-xl">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-100 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
        <ShieldAlert className="h-6 w-6" />
      </div>

      <div>
        <h4 className="font-bold text-slate-900">
          Identificar amenazas
        </h4>

        <p className="mt-2 leading-relaxed text-slate-600">
          Reconocer los ataques cibernéticos más frecuentes utilizados por los delincuentes digitales.
        </p>
      </div>

    </div>

    {/* Phishing */}
    <div className="group flex gap-4 rounded-2xl border border-red-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-xl">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-100 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
        <MailWarning className="h-6 w-6" />
      </div>

      <div>
        <h4 className="font-bold text-slate-900">
          Detectar engaños
        </h4>

        <p className="mt-2 leading-relaxed text-slate-600">
          Aprender a identificar correos electrónicos, mensajes y sitios web fraudulentos antes de compartir información personal.
        </p>
      </div>

    </div>

    {/* Protección */}
    <div className="group flex gap-4 rounded-2xl border border-red-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-xl">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-100 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
        <LockKeyhole className="h-6 w-6" />
      </div>

      <div>
        <h4 className="font-bold text-slate-900">
          Proteger tu información
        </h4>

        <p className="mt-2 leading-relaxed text-slate-600">
          Aplicar buenas prácticas para mantener seguros tus datos personales y tu identidad digital.
        </p>
      </div>

    </div>

    {/* Navegación */}
    <div className="group flex gap-4 rounded-2xl border border-red-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-xl">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-100 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
        <Globe className="h-6 w-6" />
      </div>

      <div>
        <h4 className="font-bold text-slate-900">
          Navegar con seguridad
        </h4>

        <p className="mt-2 leading-relaxed text-slate-600">
          Adoptar hábitos responsables para utilizar Internet y las redes sociales de forma segura.
        </p>
      </div>

    </div>

  </div>

</div>

              {/* Fuente */}
              <p className="mt-8 text-center text-sm text-slate-500">
                <strong>Fuente:</strong> YouTube · <span className="font-medium">Formas de Ataques Cibernéticos - Video Explicativo</span>
              </p>

            </div>

          </section>

        {/* RIESGOS DIGITALES */}
                <section className="space-y-6">
                  <div className="text-center">
                    <span className="text-sm font-extrabold uppercase tracking-[0.35em] text-cyan-600">
                      04. Competencia
                    </span>

                    <h2 className="mt-4 text-5xl font-black tracking-tight leading-[1.05] text-slate-900 md:text-6xl">
                      Superficie de
                      <span className="block bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                        Riesgo Digital
                      </span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-600 md:text-xl">
                      Conocer las amenazas digitales permite identificar los riesgos presentes en
                      Internet, prevenir incidentes de seguridad y fortalecer una cultura de
                      protección digital. Comprender cómo actúan los ciberdelincuentes ayuda a
                      tomar decisiones responsables y a utilizar la tecnología de forma segura en
                      el ámbito personal, académico y social.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {riesgos.map((item, idx) => {
                      const Icon = item.icon;

                      return (
                        <article
                          key={idx}
                          className="
                            group relative overflow-hidden
                            rounded-3xl
                            border border-slate-200
                            bg-white
                            p-6
                            shadow-sm
                            hover:shadow-xl
                            hover:border-cyan-300
                            transition-all duration-500
                            hover:-translate-y-1
                          "
                        >

                          {/* top line */}
                          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-600 via-sky-500 to-cyan-400" />

                          {/* glow */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-50 via-transparent to-sky-50" />

                          <div className="relative z-10 space-y-5">

                            {/* header */}
                            <div className="flex items-start justify-between">

                              <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition">
                                <Icon size={28} className="text-cyan-700" />
                              </div>

                              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-100">
                                Riesgo Alto
                              </span>

                            </div>

                            {/* title */}
                            <h3 className="text-xl font-bold text-slate-800">
                              {item.t}
                            </h3>

                            {/* description */}
                            <p className="text-slate-600 text-lg leading-relaxed text-left">
                              {item.d}
                            </p>

                            {/* impact */}
                            <div className="rounded-xl border border-amber-100 bg-amber-50 p-3">
                              <p className="text-slate-600 text-lg leading-relaxed text-left">
                                <span className="font-semibold text-amber-700">Impacto:</span>{" "}
                                {item.impact}
                              </p>
                            </div>

                            {/* tip */}
                            <div className="rounded-xl border border-cyan-100 bg-cyan-50 p-4">
                              <p className="text-slate-600 text-lg leading-relaxed text-left">
                                <span className="font-semibold text-cyan-700">Medida preventiva:</span>{" "}
                                {item.tip}
                              </p>
                            </div>

                          </div>
                        </article>
                      );
                    })}

                  </div>
                </section>

        {/* ================= BUENAS PRÁCTICAS ================= */}
          <section
            className="rounded-[36px] bg-slate-950 p-10 text-white"
          >

         <div className="mx-auto max-w-5xl text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-6 py-3 backdrop-blur-sm">
            <ShieldCheck className="h-5 w-5 text-cyan-300" />

            <span className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">
              Seguridad Digital
            </span>
          </div>

            {/* Título */}
            <h2 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-white md:text-6xl">
              Buenas Prácticas para una
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                Vida Digital Segura
              </span>
            </h2>

            {/* Línea decorativa */}
            <div className="mx-auto mt-6 h-1 w-40 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400" />

            {/* Descripción */}
            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-300 md:text-xl">
              Mantener una vida digital segura implica desarrollar hábitos responsables al
              utilizar Internet, las redes sociales y los dispositivos tecnológicos.
              Aplicar buenas prácticas de ciberseguridad permite proteger la información
              personal, fortalecer la privacidad, prevenir ataques informáticos y reducir
              los riesgos asociados al uso cotidiano de la tecnología. Cada decisión que
              tomamos en el entorno digital contribuye a construir una experiencia más
              segura para nosotros y para quienes interactúan con nosotros.
            </p>

            {/* Indicadores */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-6 py-4">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                  Objetivo
                </p>
                <p className="mt-2 font-semibold text-white">
                  Prevenir riesgos digitales
                </p>
              </div>

              <div className="rounded-2xl border border-indigo-400/20 bg-indigo-500/10 px-6 py-4">
                <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">
                  Enfoque
                </p>
                <p className="mt-2 font-semibold text-white">
                  Protección y prevención
                </p>
              </div>

              <div className="rounded-2xl border border-sky-400/20 bg-sky-500/10 px-6 py-4">
                <p className="text-xs font-bold uppercase tracking-widest text-sky-300">
                  Competencia
                </p>
                <p className="mt-2 font-semibold text-white">
                  Ciudadanía Digital Responsable
                </p>
              </div>

            </div>

        </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
        <LockKeyhole className="h-8 w-8 text-cyan-300" />

        <h3 className="mt-5 font-bold text-xl">
          Utiliza contraseñas seguras
        </h3>

        <p className="mt-3 text-slate-300 leading-7">
          Las contraseñas son la primera barrera de protección de tus cuentas
          digitales. Crea contraseñas que combinen letras mayúsculas, minúsculas,
          números y símbolos, evitando utilizar nombres, fechas de nacimiento o
          información personal fácil de adivinar. Utiliza una contraseña diferente
          para cada servicio y nunca la compartas con otras personas para reducir
          el riesgo de acceso no autorizado.
        </p>

      </div>

      <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
        <ShieldCheck className="h-8 w-8 text-green-300" />

        <h3 className="mt-5 font-bold text-xl">
          Activa la verificación en dos pasos
        </h3>

        <p className="mt-3 text-slate-300 leading-7">
          La autenticación en dos pasos añade una capa adicional de seguridad a tus
          cuentas. Además de la contraseña, solicita un código temporal enviado a
          tu dispositivo o generado por una aplicación de autenticación. Esto
          dificulta que personas no autorizadas accedan a tu información, incluso
          si conocen tu contraseña.
        </p>

      </div>

      <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
        <MailWarning className="h-8 w-8 text-orange-300" />

        <h3 className="mt-5 font-bold text-xl">
          Desconfía de mensajes sospechosos
        </h3>

        <p className="mt-3 text-slate-300 leading-7">
          No abras enlaces desconocidos ni descargues archivos enviados por
          personas que no conoces. Los ciberdelincuentes suelen utilizar mensajes,
          correos electrónicos o publicaciones falsas para engañar a los usuarios y
          obtener información personal. Antes de responder o hacer clic, verifica
          siempre la identidad del remitente y la autenticidad del mensaje.
        </p>

      </div>

      <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
        <UserRoundCheck className="h-8 w-8 text-blue-300" />

        <h3 className="mt-5 font-bold text-xl">
          Cuida tu información personal
        </h3>

        <p className="mt-3 text-slate-300 leading-7">
          Protege datos como tu nombre completo, dirección, número telefónico,
          documentos de identidad, ubicación en tiempo real y fotografías con
          información sensible. Compartir estos datos sin precaución puede facilitar
          la suplantación de identidad, el fraude o situaciones de riesgo tanto en
          el entorno digital como en la vida cotidiana.
        </p>

      </div>

      <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
        <RefreshCw className="h-8 w-8 text-violet-300" />

        <h3 className="mt-5 font-bold text-xl">
          Mantén tus dispositivos actualizados
        </h3>

        <p className="mt-3 text-slate-300 leading-7">
          Instala las actualizaciones del sistema operativo, navegadores y
          aplicaciones tan pronto como estén disponibles. Estas actualizaciones
          corrigen vulnerabilidades de seguridad, mejoran el rendimiento y ayudan a
          proteger tus dispositivos frente a nuevas amenazas, virus y programas
          maliciosos que aparecen constantemente en Internet.
        </p>

      </div>

      <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
        <BadgeAlert className="h-8 w-8 text-red-300" />

        <h3 className="mt-5 font-bold text-xl">
          Pide ayuda cuando algo te incomode
        </h3>

        <p className="mt-3 text-slate-300 leading-7">
          Si recibes amenazas, insultos, intentos de engaño o solicitudes
          inapropiadas por Internet, no respondas ni compartas información personal.
          Guarda las evidencias, bloquea al usuario si es necesario e informa de
          inmediato a tus padres, docentes o a un adulto de confianza. Pedir ayuda
          a tiempo puede evitar situaciones de ciberacoso, grooming, sextorsión o
          cualquier otro riesgo digital.
        </p>

      </div>

          </div>
          </section>

      </div>
    </main>
  );
}