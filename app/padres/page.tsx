"use client";

import { motion } from "framer-motion";
import {
  Quote,
  Lightbulb,
  ShieldCheck,
  Users,
  BookOpen,
  Laptop,
  CheckCircle2,
  AlertTriangle,
  GraduationCap,
  Search,
  Filter,
  Brain,
  UserRoundCheck,
  PlayCircle,
  Video,
  Clock,
  EyeOff,
  MessageCircleWarning,
  LockKeyhole,
 DatabaseBackup,
  KeyRound,
  RefreshCcw,
  Smartphone,
  Eye,
  Globe,
  ShieldAlert,
  MailWarning,
  Link2,
  Mail,
  BadgeAlert,
  MessageCircle,
  HeartHandshake,
  Award,
  ShieldX,
  WifiOff,
  Bug,
  Lock,
  TimerReset,
  BadgeCheck,
  CircleX,
  ClipboardCheck,
  MessageCircleQuestion,
  LifeBuoy

} from "lucide-react";

export default function EscuelaPadresPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">

        {/* Decoración */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#4338ca20,transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#06b6d420,transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28">

          <div className="grid items-center gap-20 lg:grid-cols-2">

            {/* Información */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .7 }}
            >

              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[.3em] text-cyan-300">

                <GraduationCap size={16} />

                Escuela de Padres

              </span>

              <h1 className="mt-8 text-6xl font-black leading-tight text-white">

                Formando familias

                <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">

                  seguras en el mundo digital

                </span>

              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">

                La tecnología ofrece enormes oportunidades para aprender,
                comunicarse y crecer. Sin embargo, también presenta riesgos que
                pueden afectar a niños, adolescentes y adultos. Esta Escuela de
                Padres ha sido diseñada para brindar conocimientos prácticos,
                herramientas y estrategias que permitan acompañar a los hijos
                durante su desarrollo digital de forma segura y responsable.

              </p>

              

            </motion.div>

            {/* Tarjeta */}

            <motion.div
              initial={{ opacity: 0, scale: .9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: .8 }}
            >

              <div className="rounded-[34px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                <div className="flex items-center gap-4">

                  <div className="rounded-2xl bg-cyan-500/20 p-4">

                    <ShieldCheck className="h-10 w-10 text-cyan-400" />

                  </div>

                  <div>

                    <h3 className="text-2xl font-black text-white">

                      ¿Qué aprenderás?

                    </h3>

                    <p className="mt-2 text-slate-400">

                      Formación integral para proteger a toda la familia.

                    </p>

                  </div>

                </div>

                <div className="mt-10 space-y-5">

                  {[
                    "Identificar amenazas digitales.",
                    "Configurar controles parentales.",
                    "Proteger la información familiar.",
                    "Detectar fraudes y estafas.",
                    "Acompañar el uso de redes sociales.",
                    "Actuar correctamente ante incidentes digitales.",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-2xl bg-white/5 p-4"
                    >

                      <CheckCircle2 className="mt-1 h-6 w-6 text-cyan-400" />

                      <p className="text-slate-300">

                        {item}

                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* ================= INTRODUCCIÓN ================= */}

      <section className="relative overflow-hidden bg-slate-50 py-24">
  <div className="mx-auto max-w-7xl px-6">

    {/* Encabezado */}
    <div className="mx-auto max-w-4xl text-center">
      <span className="rounded-full bg-cyan-100 px-5 py-2 text-xs font-bold uppercase tracking-[.3em] text-cyan-700">
        Nuestra misión
      </span>

      <h2 className="mt-8 text-5xl font-black text-slate-900">
        Formando familias para un entorno digital seguro
      </h2>

      <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-600">
        La Escuela de Padres es un espacio de orientación donde las familias
        encuentran información clara y actualizada para comprender los desafíos
        que enfrentan niños y adolescentes en Internet, fortaleciendo su papel
        como primeros educadores en el mundo digital.
      </p>
    </div>

    {/* Tarjetas */}
    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <Users className="h-14 w-14 text-cyan-600 transition-transform duration-300 group-hover:scale-110" />

        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          Orientación Familiar
        </h3>

        <p className="mt-5 leading-8 text-slate-600">
          Promovemos el diálogo entre padres e hijos para fortalecer la confianza,
          establecer normas saludables y acompañar el desarrollo digital desde el
          hogar.
        </p>
      </div>

      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <Laptop className="h-14 w-14 text-indigo-600 transition-transform duration-300 group-hover:scale-110" />

        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          Cultura Digital
        </h3>

        <p className="mt-5 leading-8 text-slate-600">
          Explicamos de manera sencilla cómo funcionan las plataformas,
          aplicaciones, redes sociales y tecnologías que hacen parte de la vida
          cotidiana de los menores.
        </p>
      </div>

      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <AlertTriangle className="h-14 w-14 text-orange-500 transition-transform duration-300 group-hover:scale-110" />

        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          Prevención
        </h3>

        <p className="mt-5 leading-8 text-slate-600">
          Difundimos información sobre los principales riesgos digitales para
          fomentar una navegación responsable, segura y consciente.
        </p>
      </div>

      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <BookOpen className="h-14 w-14 text-emerald-600 transition-transform duration-300 group-hover:scale-110" />

        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          Educación Continua
        </h3>

        <p className="mt-5 leading-8 text-slate-600">
          Compartimos contenidos informativos y recomendaciones que ayudan a las
          familias a mantenerse actualizadas frente a los cambios del entorno
          digital.
        </p>
      </div>

    </div>

  </div>
      </section>

          {/*==================== IMPORTANCIA DE LA FORMACIÓN ====================*/}

      <section className="relative overflow-hidden bg-white py-24">

        {/* Decoración */}
        <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-cyan-100 blur-3xl opacity-40" />
        <div className="absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-blue-100 blur-3xl opacity-40" />

        <div className="relative mx-auto max-w-7xl px-6">

          {/* Encabezado */}

          <div className="mx-auto max-w-4xl text-center">

            <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-6 py-2 text-xs font-bold uppercase tracking-[.35em] text-cyan-700">

              Preparación para las Familias

            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight text-slate-900">

              ¿Por qué es importante

              <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">

                capacitarse en seguridad digital?

              </span>

            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-600">

              La tecnología evoluciona constantemente y, con ella, también aparecen
              nuevas oportunidades y riesgos. Los padres y cuidadores desempeñan un
              papel esencial en la formación de hábitos digitales seguros, ya que sus
              decisiones y orientación influyen directamente en la protección y el
              bienestar de sus hijos. Contar con conocimientos sobre seguridad
              digital permite prevenir incidentes, actuar oportunamente y fomentar un
              uso responsable de Internet dentro del hogar.

            </p>

          </div>

          {/* Tarjetas */}

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {/* Card 1 */}

            <article className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100">

                <Users className="h-8 w-8 text-cyan-600" />

              </div>

              <h3 className="mt-8 text-2xl font-black text-slate-900">

                Acompañamiento Familiar

              </h3>

              <p className="mt-5 leading-8 text-slate-600">

                Aprende a orientar a tus hijos durante cada etapa de su desarrollo
                digital fortaleciendo la comunicación, la confianza y la toma de
                decisiones responsables.

              </p>

              <div className="mt-8 border-t border-slate-100 pt-5">

                <span className="text-sm font-semibold text-cyan-700">

                  Comunicación • Confianza • Orientación

                </span>

              </div>

            </article>

            {/* Card 2 */}

            <article className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">

                <ShieldCheck className="h-8 w-8 text-blue-600" />

              </div>

              <h3 className="mt-8 text-2xl font-black text-slate-900">

                Protección Digital

              </h3>

              <p className="mt-5 leading-8 text-slate-600">

                Descubre cómo proteger dispositivos, cuentas, contraseñas e
                información personal para reducir riesgos y mantener la seguridad de
                toda la familia.

              </p>

              <div className="mt-8 border-t border-slate-100 pt-5">

                <span className="text-sm font-semibold text-blue-700">

                  Contraseñas • Dispositivos • Privacidad

                </span>

              </div>

            </article>

            {/* Card 3 */}

            <article className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">

                <AlertTriangle className="h-8 w-8 text-orange-500" />

              </div>

              <h3 className="mt-8 text-2xl font-black text-slate-900">

                Prevención de Amenazas

              </h3>

              <p className="mt-5 leading-8 text-slate-600">

                Identifica señales de phishing, malware, grooming, ciberacoso, robo
                de identidad, fraudes digitales y otros riesgos que pueden afectar a
                niños, adolescentes y adultos.

              </p>

              <div className="mt-8 border-t border-slate-100 pt-5">

                <span className="text-sm font-semibold text-orange-600">

                  Prevención • Detección • Respuesta

                </span>

              </div>

            </article>

            {/* Card 4 */}

            <article className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100">

                <BookOpen className="h-8 w-8 text-emerald-600" />

              </div>

              <h3 className="mt-8 text-2xl font-black text-slate-900">

                Formación Práctica

              </h3>

              <p className="mt-5 leading-8 text-slate-600">

                Accede a contenidos, actividades, ejemplos reales y recursos
                interactivos que podrás aplicar inmediatamente para fortalecer la
                seguridad digital de tu hogar.

              </p>

              <div className="mt-8 border-t border-slate-100 pt-5">

                <span className="text-sm font-semibold text-emerald-700">

                  Recursos • Actividades • Evaluaciones

                </span>

              </div>

            </article>

          </div>

        </div>

      </section>

      {/*==================== TEMA 01 ====================*/}
        <section className="relative overflow-hidden bg-white py-28">

  {/* Fondo decorativo */}

  <div className="absolute inset-0">

    <div className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-cyan-100/60 blur-[140px]" />

    <div className="absolute bottom-0 -left-40 h-[480px] w-[480px] rounded-full bg-blue-100/50 blur-[140px]" />

    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f920_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f920_1px,transparent_1px)] bg-[size:90px_90px]" />

  </div>

  <div className="relative mx-auto max-w-7xl px-6">

    {/* Encabezado */}

    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-6 py-2 text-xs font-bold uppercase tracking-[.35em] text-cyan-700">

        Escuela de Padres

      </span>

      <h2 className="mt-8 text-5xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">

        Familias preparadas para un

        <span className="block bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 bg-clip-text text-transparent">

          entorno digital seguro

        </span>

      </h2>

      <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-600">

        Vivimos en una sociedad donde Internet forma parte de la educación,
        la comunicación y el entretenimiento. Comprender cómo funciona el
        entorno digital permite a las familias acompañar a niños y adolescentes
        con mayor confianza, fortalecer hábitos responsables y promover una
        convivencia basada en el respeto, la prevención y el uso seguro de la
        tecnología.

      </p>

    </div>

    {/* Primer bloque */}

    <div className="mt-24 grid items-center gap-16 lg:grid-cols-2">

      <div>

        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100">

          <Users className="h-8 w-8 text-cyan-700" />

        </div>

        <h3 className="mt-8 text-4xl font-black text-slate-900">

          La familia es el primer espacio de aprendizaje

        </h3>

        <p className="mt-8 text-lg leading-9 text-slate-600">

          Antes de que un niño aprenda sobre seguridad en Internet dentro del
          aula, aprende observando el ejemplo de quienes lo rodean. El diálogo,
          la confianza y el acompañamiento permiten construir hábitos digitales
          responsables desde las primeras etapas del desarrollo.

        </p>

        <p className="mt-6 text-lg leading-9 text-slate-600">

          Más que controlar la tecnología, el objetivo es comprenderla para
          utilizarla de forma consciente, promoviendo un equilibrio entre las
          oportunidades que ofrece y los riesgos que pueden presentarse.

        </p>

      </div>

      <div className="relative">

        <div className="absolute -left-6 -top-6 h-full w-full rounded-[36px] bg-cyan-100"></div>

        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-cyan-600 via-sky-600 to-blue-700 p-12 text-white shadow-2xl">

          <ShieldCheck className="h-14 w-14" />

          <h4 className="mt-10 text-3xl font-black">

            Educar para prevenir

          </h4>

          <p className="mt-6 text-lg leading-9 text-cyan-50">

            Una familia informada desarrolla mejores criterios para identificar
            riesgos, tomar decisiones responsables y fomentar un uso positivo de
            la tecnología dentro y fuera del hogar.

          </p>

        </div>

      </div>

    </div>
        {/* Bloque 02 */}

    <div className="mt-32 grid items-center gap-20 lg:grid-cols-2">

      {/* Imagen / Destacado */}

      <div className="order-2 lg:order-1">

        <div className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-slate-50 p-10">

          <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full bg-blue-100 blur-3xl"></div>

          <div className="relative">

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-600 shadow-xl">

              <Laptop className="h-10 w-10 text-white" />

            </div>

            <h4 className="mt-10 text-3xl font-black text-slate-900">

              Comprender la tecnología fortalece la prevención

            </h4>

            <div className="mt-8 space-y-6">

              <div className="flex gap-4">

                <div className="mt-2 h-3 w-3 rounded-full bg-cyan-500"></div>

                <p className="text-lg leading-8 text-slate-600">

                  Conocer cómo funcionan las redes sociales, los videojuegos,
                  las aplicaciones móviles y la inteligencia artificial permite
                  tomar decisiones más informadas.

                </p>

              </div>

              <div className="flex gap-4">

                <div className="mt-2 h-3 w-3 rounded-full bg-blue-500"></div>

                <p className="text-lg leading-8 text-slate-600">

                  La información ayuda a comprender tanto las oportunidades como
                  los desafíos que presenta el entorno digital.

                </p>

              </div>

              <div className="flex gap-4">

                <div className="mt-2 h-3 w-3 rounded-full bg-indigo-500"></div>

                <p className="text-lg leading-8 text-slate-600">

                  Un adulto informado puede orientar mejor y generar espacios de
                  diálogo basados en la confianza.

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Texto */}

      <div className="order-1 lg:order-2">

        <span className="text-sm font-bold uppercase tracking-[.30em] text-cyan-600">

          Comprender el entorno digital

        </span>

        <h3 className="mt-6 text-5xl font-black leading-tight text-slate-900">

          La información permite acompañar con mayor seguridad

        </h3>

        <p className="mt-8 text-lg leading-9 text-slate-600">

          El entorno digital cambia constantemente. Cada nueva aplicación,
          plataforma o servicio incorpora características que pueden influir en
          la forma en que niños y adolescentes interactúan, aprenden y se
          comunican.

        </p>

        <p className="mt-6 text-lg leading-9 text-slate-600">

          Conocer estas herramientas no significa utilizarlas todas, sino
          entender su funcionamiento para brindar orientación, promover hábitos
          saludables y fortalecer una convivencia digital responsable.

        </p>

      </div>

    </div>

    {/* Separador */}

    <div className="my-28 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
        {/* Bloque 03 */}

    <div className="grid gap-20 lg:grid-cols-[280px_1fr]">

      {/* Línea lateral */}

      <div className="relative">

        <div className="sticky top-28">

          <span className="text-sm font-bold uppercase tracking-[.35em] text-cyan-600">

            Principios

          </span>

          <h3 className="mt-5 text-4xl font-black leading-tight text-slate-900">

            Cuatro pilares para una convivencia digital responsable

          </h3>

          <p className="mt-6 text-lg leading-8 text-slate-600">

            La seguridad digital no depende únicamente de la tecnología, sino
            también de los hábitos, la comunicación y la participación activa de
            toda la familia.

          </p>

        </div>

      </div>

      {/* Contenido */}

      <div className="relative">

        {/* Línea */}

        <div className="absolute left-6 top-0 h-full w-px bg-slate-200"></div>

        {/* ITEM */}

        <div className="relative mb-20 pl-20">

          <div className="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-600 text-white shadow-lg">

            <ShieldCheck className="h-6 w-6" />

          </div>

          <h4 className="text-3xl font-black text-slate-900">

            Proteger la información personal

          </h4>

          <p className="mt-5 text-lg leading-9 text-slate-600">

            Fotografías, documentos, contraseñas y datos personales forman parte
            de la identidad digital. Aprender a proteger esta información reduce
            riesgos y fortalece la privacidad de toda la familia.

          </p>

        </div>

        {/* ITEM */}

        <div className="relative mb-20 pl-20">

          <div className="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg">

            <AlertTriangle className="h-6 w-6" />

          </div>

          <h4 className="text-3xl font-black text-slate-900">

            Identificar riesgos digitales

          </h4>

          <p className="mt-5 text-lg leading-9 text-slate-600">

            El phishing, el ciberacoso, el grooming, el fraude y otras amenazas
            requieren una actitud preventiva. Reconocer las señales permite
            actuar con rapidez y minimizar posibles consecuencias.

          </p>

        </div>

        {/* ITEM */}

        <div className="relative mb-20 pl-20">

          <div className="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">

            <Users className="h-6 w-6" />

          </div>

          <h4 className="text-3xl font-black text-slate-900">

            Fortalecer la comunicación

          </h4>

          <p className="mt-5 text-lg leading-9 text-slate-600">

            La confianza entre padres e hijos facilita el diálogo sobre las
            experiencias digitales, fomenta el respeto y crea un ambiente donde
            es más fácil buscar ayuda ante cualquier situación.

          </p>

        </div>

        {/* ITEM */}

        <div className="relative pl-20">

          <div className="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg">

            <Laptop className="h-6 w-6" />

          </div>

          <h4 className="text-3xl font-black text-slate-900">

            Promover un uso responsable

          </h4>

          <p className="mt-5 text-lg leading-9 text-slate-600">

            La tecnología ofrece grandes oportunidades para aprender, crear y
            comunicarse. Utilizarla con equilibrio y responsabilidad contribuye
            al bienestar digital de todos los miembros del hogar.

          </p>

        </div>

      </div>

    </div>

    {/* Cierre */}

    <div className="mt-28 rounded-[40px] border border-slate-200 bg-slate-50 p-12">

      <div className="mx-auto max-w-4xl text-center">

        <ShieldCheck className="mx-auto h-14 w-14 text-cyan-600" />

        <h3 className="mt-8 text-4xl font-black text-slate-900">

          Educar también significa proteger

        </h3>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">

          La seguridad digital comienza con el conocimiento. Una familia
          informada desarrolla mejores criterios para acompañar, orientar y
          fortalecer una convivencia basada en la confianza, la prevención y el
          uso responsable de la tecnología.

        </p>

      </div>

    </div>

  </div>

        </section>

        <section className="relative overflow-hidden bg-slate-950 py-28">

          {/* Fondo */}

          <div className="absolute inset-0">

            <div className="
            absolute -left-40 top-0
            h-[500px] w-[500px]
            rounded-full
            bg-cyan-500/20
            blur-[120px]
            " />

            <div className="
            absolute right-0 bottom-0
            h-[500px] w-[500px]
            rounded-full
            bg-blue-600/20
            blur-[120px]
            " />

          </div>



          <div className="relative mx-auto max-w-7xl px-6">


            {/* HEADER */}

            <div className="mx-auto max-w-4xl text-center">


              <span className="
              inline-flex
              rounded-full
              border border-cyan-400/30
              bg-cyan-400/10
              px-6 py-2
              text-sm
              font-bold
              uppercase
              tracking-widest
              text-cyan-300
              ">
                Módulo 01
              </span>



              <h1 className="
              mt-8
              text-5xl
              font-black
              text-white
              md:text-6xl
              ">

                Configuración del
                <span className="block text-cyan-400">
                  Hogar Digital
                </span>

              </h1>



              <p className="
              mt-8
              text-xl
              leading-9
              text-slate-300
              ">

                Aprende a construir una base de seguridad digital desde casa,
                protegiendo la conexión familiar, los dispositivos y la navegación
                diaria.

              </p>


            </div>






            {/* CARDS */}

            <div className="
            mt-20
            grid
            gap-10
            ">



            

        {/* ========================================================= */}
        {/* CARD 01 - PROTECCIÓN DEL ROUTER Y WI-FI */}
        {/* ========================================================= */}


        <article className="
        rounded-[40px]
        border border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        md:p-12
        ">



        {/* CABECERA */}

        <div className="flex items-center gap-5">


        <div className="
        flex h-16 w-16
        items-center justify-center
        rounded-2xl
        bg-cyan-400/20
        text-2xl
        font-black
        text-cyan-300
        ">
        01
        </div>



        <div>

        <h2 className="
        text-3xl
        font-black
        text-white
        ">
        Protección del Router y Wi-Fi
        </h2>


        <p className="
        mt-2
        text-slate-400
        ">
        La primera línea de defensa del hogar digital
        </p>


        </div>


        </div>







        {/* CONTENIDO PRINCIPAL */}


        <div className="
        mt-10
        grid
        gap-10
        lg:grid-cols-2
        ">





        {/* INFORMACIÓN */}


        <div>


        <h3 className="
        text-xl
        font-black
        text-white
        ">
        ¿Por qué debemos proteger el router?
        </h3>



        <p className="
        mt-5
        leading-8
        text-slate-300
        ">

        El router es el dispositivo encargado de conectar todos los equipos
        del hogar con internet. Desde allí pasan las comunicaciones de teléfonos,
        computadores, televisores inteligentes, consolas y otros dispositivos.

        Una configuración insegura puede permitir que personas desconocidas
        accedan a la red, consuman la conexión sin autorización o intenten
        obtener información privada.

        Por esta razón, proteger el router debe ser el primer paso para crear
        un hogar digital seguro.

        </p>





        <h3 className="
        mt-8
        text-xl
        font-black
        text-white
        ">
        En esta sección aprenderás:
        </h3>



        <ul className="
        mt-5
        space-y-4
        text-slate-300
        ">


        <li>
        ✓ Cambiar las credenciales predeterminadas del router.
        </li>


        <li>
        ✓ Configurar una contraseña Wi-Fi segura.
        </li>


        <li>
        ✓ Utilizar protocolos de protección como WPA2/WPA3.
        </li>


        <li>
        ✓ Identificar dispositivos conectados a la red.
        </li>


        <li>
        ✓ Aplicar recomendaciones de seguridad para hogares colombianos.
        </li>


        </ul>




        </div>









        {/* VIDEO */}


        <div>


        <div className="
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-black
        shadow-xl
        ">


        <iframe
        className="
        aspect-video
        w-full
        "
        src="https://www.youtube.com/embed/nV9zOtHDmcA"
        title="Protección del Router y Wi-Fi"
        allowFullScreen
        />

        </div>



        <div className="
        mt-5
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-5
        ">


        <p className="
        text-sm
        font-bold
        uppercase
        tracking-widest
        text-cyan-300
        ">
        Video práctico
        </p>


        <p className="
        mt-3
        leading-7
        text-slate-300
        ">

        Aprende cómo revisar la configuración del router y aplicar medidas
        básicas para mejorar la seguridad de tu conexión doméstica.

        </p>


        </div>


        </div>





        </div>









        {/* CONTEXTO COLOMBIA */}



        <div className="
        mt-10
        rounded-3xl
        border
        border-blue-400/20
        bg-blue-400/10
        p-6
        ">


        <h3 className="
        font-black
        text-blue-300
        ">
        🇨🇴 Aplicación en hogares colombianos
        </h3>



        <p className="
        mt-3
        leading-7
        text-slate-300
        ">

        En Colombia, los hogares pueden recibir routers de diferentes
        proveedores de internet como Claro, Movistar, Tigo, ETB u otros.

        Aunque el diseño del equipo puede cambiar, las opciones principales
        de seguridad son similares: contraseña administrativa, configuración
        Wi-Fi, cifrado de red y revisión de dispositivos conectados.

        El objetivo es que cualquier familia pueda aplicar estas medidas
        sin importar la compañía que preste el servicio.

        </p>


        </div>









        {/* GUIA */}



        <div className="
        mt-10
        grid
        gap-6
        md:grid-cols-2
        ">





        <div className="
        rounded-3xl
        border
        border-cyan-400/20
        bg-cyan-400/10
        p-6
        ">


        <h3 className="
        font-black
        text-cyan-300
        ">
        📘 Material complementario
        </h3>



        <p className="
        mt-3
        leading-7
        text-slate-300
        ">

        Amplía tus conocimientos con la guía de seguridad del router
        "Tu router: tu castillo", donde encontrarás recomendaciones
        adicionales para proteger tu conexión doméstica.

        </p>



        <a
        href="https://www.incibe.es/sites/default/files/docs/guia_router/osi-guia-tu-router-tu-castillo.pdf"
        target="_blank"
        className="
        mt-5
        inline-flex
        rounded-xl
        bg-cyan-400
        px-5
        py-3
        font-bold
        text-slate-950
        transition
        hover:bg-cyan-300
        "
        >

        Leer guía del router

        </a>


        </div>








        <div className="
        rounded-3xl
        bg-slate-900
        p-6
        ">


        <h3 className="
        font-black
        text-white
        ">
        🎯 Objetivo del aprendizaje
        </h3>



        <p className="
        mt-3
        leading-7
        text-slate-400
        ">

        Al finalizar esta sección podrás identificar los principales riesgos
        de una red doméstica y aplicar configuraciones básicas para proteger
        la conexión digital de tu familia.

        </p>


        </div>





        </div>









        {/* RESULTADO */}



        <div className="
        mt-10
        rounded-3xl
        bg-cyan-400/10
        p-6
        ">


        <p className="
        font-bold
        text-cyan-300
        ">
        Resultado:
        </p>



        <p className="
        mt-3
        leading-7
        text-slate-300
        ">

        Tendrás una red Wi-Fi más segura, con mejores controles de acceso y
        una base sólida para continuar configurando otros elementos del hogar
        digital como filtros familiares, buscadores seguros y plataformas de
        contenido.

        </p>


        </div>




        </article>




        {/* ========================================================= */}
        {/* CARD 02 - DNS FAMILIAR Y NAVEGACIÓN SEGURA */}
        {/* ========================================================= */}


        <article className="
        rounded-[40px]
        border border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        md:p-12
        ">



        {/* CABECERA */}

        <div className="flex items-center gap-5">


        <div className="
        flex h-16 w-16
        items-center justify-center
        rounded-2xl
        bg-blue-400/20
        text-2xl
        font-black
        text-blue-300
        ">
        02
        </div>



        <div>

        <h2 className="
        text-3xl
        font-black
        text-white
        ">
        DNS Familiar y navegación segura
        </h2>


        <p className="
        mt-2
        text-slate-400
        ">
        Filtrar riesgos antes de llegar a ellos
        </p>


        </div>


        </div>









        {/* CONTENIDO PRINCIPAL */}


        <div className="
        mt-10
        grid
        gap-10
        lg:grid-cols-2
        ">






        {/* EXPLICACIÓN */}


        <div>


        <h3 className="
        text-xl
        font-black
        text-white
        ">
        ¿Qué es un DNS Familiar?
        </h3>



        <p className="
        mt-5
        leading-8
        text-slate-300
        ">

        El DNS (Sistema de Nombres de Dominio) es el encargado de transformar
        las direcciones web que escribimos diariamente en conexiones que los
        dispositivos pueden interpretar.

        Por ejemplo, cuando una persona escribe una página web, el DNS consulta
        dónde se encuentra ese sitio y permite establecer la conexión.

        Un DNS Familiar añade una capa adicional de seguridad porque analiza
        estas solicitudes y puede bloquear automáticamente dominios relacionados
        con malware, phishing, fraudes digitales o contenido no apropiado.

        </p>






        <h3 className="
        mt-8
        text-xl
        font-black
        text-white
        ">
        ¿Por qué implementarlo en el hogar?
        </h3>



        <p className="
        mt-4
        leading-8
        text-slate-300
        ">

        Los niños, adolescentes y adultos pueden encontrarse con páginas
        peligrosas durante una búsqueda normal, mediante enlaces compartidos
        o publicidad engañosa.

        Un DNS seguro ayuda a reducir estos riesgos antes de que el usuario
        entre al sitio, creando un entorno de navegación más confiable para
        todos los dispositivos conectados.

        </p>




        </div>









        {/* VIDEO */}


        <div>


        <div className="
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-black
        shadow-xl
        ">


        <iframe
          className="
          aspect-video
          w-full
          "
          src="https://www.youtube.com/embed/mKpq5bAus_A"
          title="DNS Familiar y navegación segura"
          allowFullScreen
        />

        </div>





        <div className="
        mt-5
        rounded-3xl
        border border-white/10
        bg-white/5
        p-5
        ">


        <p className="
        text-sm
        font-bold
        uppercase
        tracking-widest
        text-blue-300
        ">
        Video práctico
        </p>



        <p className="
        mt-3
        leading-7
        text-slate-300
        ">

        Aprende cómo funciona un DNS seguro, qué riesgos puede bloquear
        y cómo configurarlo para proteger la conexión familiar.

        </p>


        </div>



        </div>





        </div>









        {/* SERVICIOS DNS */}



        <div className="
        mt-12
        ">

        <h3 className="
        text-2xl
        font-black
        text-white
        ">
        Servicios DNS recomendados
        </h3>


        <p className="
        mt-3
        text-slate-400
        ">

        Cada servicio tiene un objetivo diferente. Algunos priorizan velocidad,
        otros privacidad o protección familiar.

        </p>





        <div className="
        mt-6
        grid
        gap-5
        md:grid-cols-2
        ">





        <div className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        ">


        <h4 className="
        font-black
        text-white
        ">
        Cloudflare Family
        </h4>


        <p className="
        mt-3
        text-slate-400
        ">
        Bloquea malware y contenido adulto.
        </p>


        <div className="
        mt-4
        rounded-xl
        bg-black/20
        p-3
        text-cyan-300
        ">

        1.1.1.3<br/>
        1.0.0.3

        </div>


        </div>







        <div className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        ">


        <h4 className="
        font-black
        text-white
        ">
        Quad9
        </h4>


        <p className="
        mt-3
        text-slate-400
        ">
        Protección contra malware y sitios fraudulentos.
        </p>


        <div className="
        mt-4
        rounded-xl
        bg-black/20
        p-3
        text-cyan-300
        ">

        9.9.9.9

        </div>


        </div>







        <div className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        ">


        <h4 className="
        font-black
        text-white
        ">
        Google DNS
        </h4>


        <p className="
        mt-3
        text-slate-400
        ">
        Alta estabilidad y compatibilidad.
        </p>


        <div className="
        mt-4
        rounded-xl
        bg-black/20
        p-3
        text-cyan-300
        ">

        8.8.8.8<br/>
        8.8.4.4

        </div>


        </div>







        <div className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        ">


        <h4 className="
        font-black
        text-white
        ">
        AdGuard DNS
        </h4>


        <p className="
        mt-3
        text-slate-400
        ">
        Bloqueo de anuncios y rastreadores.
        </p>


        <div className="
        mt-4
        rounded-xl
        bg-black/20
        p-3
        text-cyan-300
        ">

        94.140.14.14

        </div>


        </div>





        </div>


        </div>









        {/* APLICACIÓN */}



        <div className="
        mt-12
        rounded-3xl
        border
        border-blue-400/20
        bg-blue-400/10
        p-8
        ">



        <h3 className="
        text-xl
        font-black
        text-blue-300
        ">
        ¿Cómo aplicarlo en un hogar?
        </h3>



        <p className="
        mt-4
        leading-8
        text-slate-300
        ">

        La configuración más recomendable es realizar el cambio directamente
        en el router, porque permite proteger automáticamente todos los
        dispositivos conectados a la red familiar.

        También puede configurarse de forma individual en computadores,
        teléfonos o tablets.

        </p>



        <ul className="
        mt-6
        space-y-3
        text-slate-300
        ">


        <li>
        ✓ Configurar DNS seguro en el router.
        </li>


        <li>
        ✓ Aplicarlo en Windows, Android, iOS o macOS.
        </li>


        <li>
        ✓ Activar DNS cifrado cuando esté disponible.
        </li>


        <li>
        ✓ Revisar periódicamente las reglas de protección.
        </li>


        </ul>



        </div>









        {/* RESULTADO */}



        <div className="
        mt-10
        rounded-3xl
        bg-blue-400/10
        p-6
        ">


        <p className="
        font-bold
        text-blue-300
        ">
        Resultado:
        </p>



        <p className="
        mt-3
        leading-7
        text-slate-300
        ">

        Al finalizar esta sección podrás implementar una capa adicional de
        seguridad en la navegación del hogar, reduciendo riesgos como malware,
        phishing y contenido no recomendado, mientras fortaleces los hábitos
        digitales de toda la familia.

        </p>


        </div>





        </article>
        {/* ========================================================= */}
        {/* CARD 03 - BÚSQUEDAS SEGURAS Y GOOGLE SAFESEARCH */}
        {/* ========================================================= */}


        <article className="
        rounded-[40px]
        border border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        md:p-12
        ">



        {/* CABECERA */}

        <div className="flex items-center gap-5">


        <div className="
        flex h-16 w-16
        items-center justify-center
        rounded-2xl
        bg-purple-400/20
        text-2xl
        font-black
        text-purple-300
        ">
        03
        </div>



        <div>

        <h2 className="
        text-3xl
        font-black
        text-white
        ">
        Búsquedas seguras y Google SafeSearch
        </h2>


        <p className="
        mt-2
        text-slate-400
        ">
        Controlar lo que aparece antes de encontrarlo
        </p>


        </div>


        </div>









        {/* CONTENIDO PRINCIPAL */}


        <div className="
        mt-10
        grid
        gap-10
        lg:grid-cols-2
        ">






        {/* EXPLICACIÓN */}


        <div>


        <h3 className="
        flex
        items-center
        gap-3
        text-xl
        font-black
        text-white
        ">

        <Search className="
        h-6
        w-6
        text-purple-300
        "/>

        ¿Por qué proteger las búsquedas en internet?

        </h3>



        <p className="
        mt-5
        leading-8
        text-slate-300
        ">

        Los motores de búsqueda son una de las principales puertas de entrada
        a internet. A través de ellos las personas encuentran información,
        aprenden nuevas habilidades y acceden a diferentes servicios digitales.

        Sin embargo, una búsqueda puede mostrar resultados no adecuados,
        páginas fraudulentas o contenido creado para manipular a los usuarios.

        Configurar herramientas de búsqueda segura permite reducir estos riesgos
        y crear un entorno digital más protegido para niños, adolescentes y
        familias.

        </p>








        <h3 className="
        mt-8
        flex
        items-center
        gap-3
        text-xl
        font-black
        text-white
        ">

        <ShieldCheck className="
        h-6
        w-6
        text-purple-300
        "/>

        ¿Qué es Google SafeSearch?

        </h3>




        <p className="
        mt-4
        leading-8
        text-slate-300
        ">

        Google SafeSearch es una herramienta de filtrado que ayuda a reducir la
        aparición de resultados explícitos dentro del buscador.

        Su función es analizar los resultados y bloquear o esconder contenido
        como:

        </p>





        <ul className="
        mt-5
        space-y-3
        text-slate-300
        ">


        <li className="flex gap-3">

        <CheckCircle2 className="
        h-5
        w-5
        text-purple-300
        "/>

        Imágenes con contenido sexual explícito.

        </li>



        <li className="flex gap-3">

        <CheckCircle2 className="
        h-5
        w-5
        text-purple-300
        "/>

        Páginas con material no recomendado.

        </li>




        <li className="flex gap-3">

        <CheckCircle2 className="
        h-5
        w-5
        text-purple-300
        "/>

        Resultados asociados a riesgos digitales.

        </li>


        </ul>




        </div>













        {/* VIDEO */}



        <div>


        <div className="
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-black
        shadow-xl
        ">


        <iframe

        className="
        aspect-video
        w-full
        "

        src="https://www.youtube.com/embed/9S-0uE3XBis"

        title="Configuración Google SafeSearch"

        allowFullScreen

        />


        </div>





        <div className="
        mt-5
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-5
        ">


        <p className="
        text-sm
        font-bold
        uppercase
        tracking-widest
        text-purple-300
        ">
        Video práctico
        </p>



        <p className="
        mt-3
        leading-7
        text-slate-300
        ">

        Aprende cómo activar Google SafeSearch y configurar filtros de búsqueda
        para reducir la aparición de contenido explícito, resultados peligrosos
        y páginas no recomendadas durante la navegación familiar.

        </p>


        </div>



        </div>





        </div>









        {/* APRENDIZAJE */}



        <div className="
        mt-12
        rounded-3xl
        border
        border-purple-400/20
        bg-purple-400/10
        p-8
        ">


        <h3 className="
        flex
        items-center
        gap-3
        text-xl
        font-black
        text-purple-300
        ">

        <ShieldCheck className="
        h-6
        w-6
        "/>

        En esta sección aprenderás:

        </h3>






        <div className="
        mt-6
        grid
        gap-5
        md:grid-cols-2
        ">





        <div className="
        flex
        items-start
        gap-3
        rounded-2xl
        bg-white/5
        p-5
        text-slate-300
        ">


        <CheckCircle2 className="
        h-6
        w-6
        shrink-0
        text-purple-300
        "/>


        <span>
        Activar Google SafeSearch correctamente.
        </span>


        </div>





        <div className="
        flex
        items-start
        gap-3
        rounded-2xl
        bg-white/5
        p-5
        text-slate-300
        ">


        <Filter className="
        h-6
        w-6
        shrink-0
        text-purple-300
        "/>


        <span>
        Reducir contenido explícito en resultados.
        </span>


        </div>






        <div className="
        flex
        items-start
        gap-3
        rounded-2xl
        bg-white/5
        p-5
        text-slate-300
        ">


        <Search className="
        h-6
        w-6
        shrink-0
        text-purple-300
        "/>


        <span>
        Configurar búsquedas más seguras para menores.
        </span>


        </div>







        <div className="
        flex
        items-start
        gap-3
        rounded-2xl
        bg-white/5
        p-5
        text-slate-300
        ">


        <CheckCircle2 className="
        h-6
        w-6
        shrink-0
        text-purple-300
        "/>


        <span>
        Crear hábitos responsables al investigar en internet.
        </span>


        </div>




        </div>


        </div>









        {/* CONFIGURACIÓN */}



        <div className="
        mt-10
        rounded-3xl
        border
        border-white/10
        bg-slate-900
        p-8
        ">


        <h3 className="
        text-xl
        font-black
        text-white
        ">
        Configuración recomendada
        </h3>



        <p className="
        mt-4
        leading-8
        text-slate-400
        ">

        Para activar SafeSearch se debe ingresar a la configuración del buscador
        y habilitar los filtros de resultados.

        Esta herramienta debe complementarse con educación digital,
        acompañamiento familiar y controles adicionales.

        </p>





        <ul className="
        mt-6
        space-y-3
        text-slate-300
        ">


        <li className="flex gap-3">

        <CheckCircle2 className="text-purple-300"/>

        Abrir configuración de búsqueda de Google.

        </li>



        <li className="flex gap-3">

        <CheckCircle2 className="text-purple-300"/>

        Activar el filtro SafeSearch.

        </li>



        <li className="flex gap-3">

        <CheckCircle2 className="text-purple-300"/>

        Revisar periódicamente la configuración.

        </li>



        <li className="flex gap-3">

        <CheckCircle2 className="text-purple-300"/>

        Enseñar a reportar contenido inapropiado.

        </li>



        </ul>



        </div>









        {/* BUENAS PRACTICAS */}



        <div className="
        mt-10
        grid
        gap-6
        md:grid-cols-2
        ">





        <div className="
        rounded-3xl
        bg-white/5
        p-6
        ">


        <div className="flex items-center gap-3">

        <Brain className="
        h-7
        w-7
        text-purple-300
        "/>


        <h3 className="
        font-black
        text-white
        ">
        Pensamiento crítico digital
        </h3>

        </div>



        <p className="
        mt-4
        leading-7
        text-slate-400
        ">

        Los filtros ayudan, pero también es importante enseñar a verificar
        fuentes, identificar engaños y analizar la información encontrada.

        </p>


        </div>








        <div className="
        rounded-3xl
        bg-white/5
        p-6
        ">



        <div className="flex items-center gap-3">


        <UserRoundCheck className="
        h-7
        w-7
        text-purple-300
        "/>


        <h3 className="
        font-black
        text-white
        ">
        Acompañamiento familiar
        </h3>


        </div>




        <p className="
        mt-4
        leading-7
        text-slate-400
        ">

        La tecnología funciona mejor cuando está acompañada de comunicación,
        educación y reglas claras dentro del hogar.

        </p>


        </div>





        </div>









        {/* RESULTADO */}



        <div className="
        mt-10
        rounded-3xl
        bg-purple-400/10
        p-6
        ">


        <p className="
        font-bold
        text-purple-300
        ">
        Resultado:
        </p>



        <p className="
        mt-3
        leading-7
        text-slate-300
        ">

        Al finalizar esta sección tendrás configuradas herramientas que ayudan
        a reducir la exposición a contenido inapropiado y mejorar la seguridad
        durante las búsquedas realizadas por la familia.

        </p>


        </div>


        </article>
        {/* ========================================================= */}
        {/* CARD 04 - YOUTUBE SEGURO + CONTROL PARENTAL */}
        {/* ========================================================= */}


        <article className="
        rounded-[40px]
        border border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        md:p-12
        ">



        {/* CABECERA */}


        <div className="
        flex
        items-center
        gap-5
        ">


        <div className="
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        bg-red-400/20
        text-2xl
        font-black
        text-red-300
        ">

        04

        </div>



        <div>

        <h2 className="
        text-3xl
        font-black
        text-white
        ">

        YouTube seguro y control parental

        </h2>


        <p className="
        mt-2
        text-slate-400
        ">

        Gestionar contenido, privacidad y hábitos digitales familiares

        </p>


        </div>


        </div>









        {/* CONTENIDO PRINCIPAL */}



        <div className="
        mt-10
        grid
        gap-10
        lg:grid-cols-2
        ">






        {/* EXPLICACIÓN */}



        <div>


        <h3 className="
        flex
        items-center
        gap-3
        text-xl
        font-black
        text-white
        ">

        <Video className="
        h-6
        w-6
        text-red-300
        "/>

        ¿Por qué proteger YouTube?

        </h3>




        <p className="
        mt-5
        leading-8
        text-slate-300
        ">

        YouTube es una de las plataformas más utilizadas dentro del hogar.
        Niños, adolescentes y adultos utilizan la plataforma para aprender,
        entretenerse y descubrir nuevos contenidos.

        Sin embargo, el sistema de recomendaciones puede mostrar videos que no
        siempre son adecuados para todas las edades.

        Por esta razón es importante conocer las herramientas de seguridad,
        privacidad y control parental que permiten crear un entorno digital
        más protegido.

        </p>







        <h3 className="
        mt-8
        flex
        items-center
        gap-3
        text-xl
        font-black
        text-white
        ">


        <ShieldCheck className="
        h-6
        w-6
        text-red-300
        "/>


        Protección digital familiar

        </h3>





        <ul className="
        mt-5
        space-y-3
        text-slate-300
        ">


        <li className="flex gap-3">

        <CheckCircle2 className="
        h-5
        w-5
        text-red-300
        "/>

        Controlar contenido recomendado.

        </li>


        <li className="flex gap-3">

        <CheckCircle2 className="
        h-5
        w-5
        text-red-300
        "/>

        Configurar privacidad de cuentas.

        </li>


        <li className="flex gap-3">

        <CheckCircle2 className="
        h-5
        w-5
        text-red-300
        "/>

        Aplicar controles familiares.

        </li>


        <li className="flex gap-3">

        <CheckCircle2 className="
        h-5
        w-5
        text-red-300
        "/>

        Crear hábitos digitales saludables.

        </li>


        </ul>


        </div>












        {/* VIDEO */}



        <div>


        <div className="
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-black
        shadow-xl
        ">


        <iframe

        className="
        aspect-video
        w-full
        "

        src="https://www.youtube.com/embed/qEY4jYpMHgE"

        title="YouTube seguro y control parental"

        allowFullScreen

        />

        </div>






        <div className="
        mt-5
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        ">



        <div className="
        flex
        items-center
        gap-3
        ">


        <PlayCircle className="
        h-6
        w-6
        text-red-300
        "/>


        <p className="
        font-black
        text-white
        ">

        Video práctico

        </p>


        </div>





        <p className="
        mt-3
        leading-7
        text-slate-300
        ">

        Aprende cómo configurar opciones de seguridad en YouTube, mejorar la
        privacidad de la cuenta y utilizar herramientas familiares para reducir
        riesgos durante el consumo de contenido digital.

        </p>


        </div>



        </div>




        </div>









        {/* APRENDIZAJE */}



        <div className="
        mt-12
        rounded-3xl
        border
        border-red-400/20
        bg-red-400/10
        p-8
        ">



        <h3 className="
        text-xl
        font-black
        text-red-300
        ">

        En esta sección aprenderás:

        </h3>






        <div className="
        mt-6
        grid
        gap-5
        md:grid-cols-2
        ">





        <div className="
        rounded-2xl
        bg-white/5
        p-6
        ">


        <ShieldCheck className="
        h-8
        w-8
        text-red-300
        "/>


        <h4 className="
        mt-4
        font-black
        text-white
        ">

        Privacidad y seguridad

        </h4>


        <p className="
        mt-3
        leading-7
        text-slate-300
        ">

        Configurar opciones de privacidad, seguridad y protección de cuentas.

        </p>


        </div>







        <div className="
        rounded-2xl
        bg-white/5
        p-6
        ">


        <Users className="
        h-8
        w-8
        text-red-300
        "/>


        <h4 className="
        mt-4
        font-black
        text-white
        ">

        Control parental

        </h4>


        <p className="
        mt-3
        leading-7
        text-slate-300
        ">

        Crear configuraciones adecuadas para niños y adolescentes.

        </p>


        </div>







        <div className="
        rounded-2xl
        bg-white/5
        p-6
        ">


        <EyeOff className="
        h-8
        w-8
        text-red-300
        "/>


        <h4 className="
        mt-4
        font-black
        text-white
        ">

        Contenido seguro

        </h4>


        <p className="
        mt-3
        leading-7
        text-slate-300
        ">

        Reducir contenido inapropiado y mejorar recomendaciones.

        </p>


        </div>







        <div className="
        rounded-2xl
        bg-white/5
        p-6
        ">


        <Clock className="
        h-8
        w-8
        text-red-300
        "/>


        <h4 className="
        mt-4
        font-black
        text-white
        ">

        Bienestar digital

        </h4>


        <p className="
        mt-3
        leading-7
        text-slate-300
        ">

        Gestionar tiempos de uso y crear hábitos saludables.

        </p>


        </div>




        </div>


        </div>









        {/* CONFIGURACIÓN */}



        <div className="
        mt-10
        rounded-3xl
        border
        border-white/10
        bg-slate-900
        p-8
        ">


        <h3 className="
        text-xl
        font-black
        text-white
        ">

        Configuración recomendada del hogar

        </h3>



        <div className="
        mt-6
        grid
        gap-4
        md:grid-cols-2
        ">



        <div className="
        rounded-2xl
        bg-white/5
        p-5
        text-slate-300
        ">

        ✓ Revisar privacidad de la cuenta Google.

        </div>



        <div className="
        rounded-2xl
        bg-white/5
        p-5
        text-slate-300
        ">

        ✓ Activar herramientas familiares.

        </div>




        <div className="
        rounded-2xl
        bg-white/5
        p-5
        text-slate-300
        ">

        ✓ Configurar YouTube Kids cuando sea necesario.

        </div>



        <div className="
        rounded-2xl
        bg-white/5
        p-5
        text-slate-300
        ">

        ✓ Establecer límites y acompañamiento.

        </div>



        </div>


        </div>









        {/* RESULTADO */}



        <div className="
        mt-10
        rounded-3xl
        bg-red-400/10
        p-6
        ">


        <p className="
        font-bold
        text-red-300
        ">

        Resultado:

        </p>



        <p className="
        mt-3
        leading-7
        text-slate-300
        ">

        Al finalizar esta sección tendrás una configuración más segura de
        YouTube, herramientas de control parental y conocimientos para
        acompañar el consumo digital de niños y adolescentes dentro del hogar.

        </p>


        </div>





        </article>
        {/* ========================================================= */}
        {/* CARD 05 - REDES SOCIALES SEGURAS Y PRIVACIDAD DIGITAL */}
        {/* ========================================================= */}


        <article className="
        rounded-[40px]
        border border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        md:p-12
        ">





        {/* CABECERA */}


        <div className="
        flex
        items-center
        gap-5
        ">


        <div className="
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        bg-indigo-400/20
        text-2xl
        font-black
        text-indigo-300
        ">

        05

        </div>





        <div>


        <h2 className="
        text-3xl
        font-black
        text-white
        ">

        Redes sociales seguras y privacidad digital

        </h2>



        <p className="
        mt-2
        text-slate-400
        ">

        Proteger la identidad, información personal y huella digital familiar

        </p>


        </div>


        </div>









        {/* CONTENIDO PRINCIPAL */}



        <div className="
        mt-10
        grid
        gap-10
        lg:grid-cols-2
        ">






        {/* EXPLICACIÓN */}



        <div>


        <h3 className="
        flex
        items-center
        gap-3
        text-xl
        font-black
        text-white
        ">


        <ShieldCheck className="
        h-6
        w-6
        text-indigo-300
        "/>


        ¿Por qué proteger las redes sociales?


        </h3>




        <p className="
        mt-5
        leading-8
        text-slate-300
        ">

        Las redes sociales permiten comunicarse, aprender y compartir momentos
        con otras personas, pero también pueden exponer información personal si
        no se configuran correctamente.

        Cada fotografía, comentario, ubicación o dato compartido puede formar
        parte de la huella digital de una persona.

        En esta sección aprenderás a configurar perfiles más seguros, controlar
        quién puede acceder a la información y reducir riesgos relacionados con
        privacidad, engaños y contacto con desconocidos.

        </p>







        <h3 className="
        mt-8
        flex
        items-center
        gap-3
        text-xl
        font-black
        text-white
        ">


        <AlertTriangle className="
        h-6
        w-6
        text-indigo-300
        "/>


        Riesgos de una mala configuración


        </h3>





        <ul className="
        mt-5
        space-y-3
        text-slate-300
        ">


        <li className="flex gap-3">


        <CheckCircle2 className="
        h-5
        w-5
        text-indigo-300
        "/>


        Exposición innecesaria de información personal.


        </li>



        <li className="flex gap-3">


        <CheckCircle2 className="
        h-5
        w-5
        text-indigo-300
        "/>


        Contactos desconocidos o perfiles falsos.


        </li>



        <li className="flex gap-3">


        <CheckCircle2 className="
        h-5
        w-5
        text-indigo-300
        "/>


        Riesgos de ciberacoso y manipulación digital.


        </li>



        <li className="flex gap-3">


        <CheckCircle2 className="
        h-5
        w-5
        text-indigo-300
        "/>


        Pérdida de control sobre fotografías y publicaciones.


        </li>



        </ul>


        </div>












        {/* VIDEO */}



        <div>


        <div className="
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-black
        shadow-xl
        ">


        <iframe

        className="
        aspect-video
        w-full
        "

        src="https://www.youtube.com/embed/u95pYOeRAuw"

        title="Privacidad y seguridad en redes sociales"

        allowFullScreen

        />


        </div>







        <div className="
        mt-5
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        ">



        <div className="
        flex
        items-center
        gap-3
        ">


        <PlayCircle className="
        h-6
        w-6
        text-indigo-300
        "/>


        <p className="
        font-black
        text-white
        ">

        Video práctico

        </p>


        </div>





        <p className="
        mt-3
        leading-7
        text-slate-300
        ">

        Aprende cómo mejorar la privacidad en redes sociales, revisar la
        información compartida y aplicar configuraciones que ayudan a proteger
        la identidad digital de niños, adolescentes y adultos.

        </p>



        </div>



        </div>





        </div>









        {/* APRENDIZAJE */}



        <div className="
        mt-12
        rounded-3xl
        border
        border-indigo-400/20
        bg-indigo-400/10
        p-8
        ">



        <h3 className="
        text-xl
        font-black
        text-indigo-300
        ">

        En esta sección aprenderás:

        </h3>






        <div className="
        mt-6
        grid
        gap-5
        md:grid-cols-2
        ">






        <div className="
        rounded-2xl
        bg-white/5
        p-6
        ">


        <LockKeyhole className="
        h-8
        w-8
        text-indigo-300
        "/>


        <h4 className="
        mt-4
        font-black
        text-white
        ">

        Privacidad de perfiles

        </h4>


        <p className="
        mt-3
        leading-7
        text-slate-300
        ">

        Configurar quién puede ver publicaciones, fotografías e información
        personal.

        </p>


        </div>








        <div className="
        rounded-2xl
        bg-white/5
        p-6
        ">


        <Users className="
        h-8
        w-8
        text-indigo-300
        "/>


        <h4 className="
        mt-4
        font-black
        text-white
        ">

        Control de contactos

        </h4>


        <p className="
        mt-3
        leading-7
        text-slate-300
        ">

        Identificar perfiles sospechosos y evitar interacciones peligrosas.

        </p>


        </div>








        <div className="
        rounded-2xl
        bg-white/5
        p-6
        ">


        <EyeOff className="
        h-8
        w-8
        text-indigo-300
        "/>


        <h4 className="
        mt-4
        font-black
        text-white
        ">

        Huella digital

        </h4>


        <p className="
        mt-3
        leading-7
        text-slate-300
        ">

        Comprender que todo lo publicado puede afectar la reputación digital.

        </p>


        </div>








        <div className="
        rounded-2xl
        bg-white/5
        p-6
        ">


        <MessageCircleWarning className="
        h-8
        w-8
        text-indigo-300
        "/>


        <h4 className="
        mt-4
        font-black
        text-white
        ">

        Ciberacoso y reportes

        </h4>


        <p className="
        mt-3
        leading-7
        text-slate-300
        ">

        Aprender cómo bloquear, denunciar y actuar ante situaciones de riesgo.

        </p>


        </div>





        </div>


        </div>









        {/* CONFIGURACIÓN */}



        <div className="
        mt-10
        rounded-3xl
        border
        border-white/10
        bg-slate-900
        p-8
        ">


        <h3 className="
        text-xl
        font-black
        text-white
        ">

        Configuración recomendada

        </h3>





        <div className="
        mt-6
        grid
        gap-4
        md:grid-cols-2
        ">



        <div className="
        rounded-2xl
        bg-white/5
        p-5
        text-slate-300
        ">

        ✓ Activar perfiles privados cuando sea necesario.

        </div>



        <div className="
        rounded-2xl
        bg-white/5
        p-5
        text-slate-300
        ">

        ✓ Revisar permisos de aplicaciones.

        </div>




        <div className="
        rounded-2xl
        bg-white/5
        p-5
        text-slate-300
        ">

        ✓ Evitar compartir ubicación en tiempo real.

        </div>




        <div className="
        rounded-2xl
        bg-white/5
        p-5
        text-slate-300
        ">

        ✓ Activar autenticación en dos pasos.

        </div>




        </div>


        </div>









        {/* RESULTADO */}



        <div className="
        mt-10
        rounded-3xl
        bg-indigo-400/10
        p-6
        ">


        <p className="
        font-bold
        text-indigo-300
        ">

        Resultado:

        </p>




        <p className="
        mt-3
        leading-7
        text-slate-300
        ">

        Al finalizar esta sección tendrás conocimientos para proteger perfiles
        sociales, reducir la exposición de información personal y crear hábitos
        más seguros de interacción digital dentro del hogar.

        </p>

        </div>

        </article>

            </div>

          </div>

        </section>

<section className="
relative
overflow-hidden
bg-white
py-5
">


{/* Fondo decorativo */}

<div className="
absolute
inset-0
pointer-events-none
">


<div className="
absolute
-left-40
top-0
h-[500px]
w-[500px]
rounded-full
bg-cyan-400/20
blur-[120px]
"/>



<div className="
absolute
right-0
bottom-0
h-[500px]
w-[500px]
rounded-full
bg-blue-500/20
blur-[120px]
"/>


</div>




<div className="
mx-auto
max-w-7xl
px-6
text-center
">



<div className="
mt-20
grid
w-full
gap-10
">





{/* ========================================================= */}
{/* CARD 06 - PROTECCIÓN DE DISPOSITIVOS Y CUENTAS */}
{/* ========================================================= */}



<article className="
w-full
rounded-[40px]
border
border-slate-200
bg-white
p-8
shadow-xl
md:p-12
">





<div className="flex items-center gap-5">



<div className="
flex
h-16
w-16
items-center
justify-center
rounded-2xl
bg-emerald-100
text-2xl
font-black
text-emerald-600
">

06

</div>




<div>


<h2 className="
text-3xl
font-black
text-slate-900
">

Protección de dispositivos y cuentas

</h2>



<p className="
mt-2
text-slate-500
">

Fortalecer equipos, accesos e identidad digital familiar

</p>


</div>


</div>







<div className="
mt-10
grid
gap-10
lg:grid-cols-2
">





<div>


<h3 className="
flex
items-center
gap-3
text-xl
font-black
text-slate-900
">


<ShieldCheck
className="
h-6
w-6
text-emerald-600
"
/>


¿Por qué proteger los dispositivos?


</h3>




<p className="
mt-5
leading-8
text-slate-600
">

Los computadores, teléfonos, tablets y dispositivos inteligentes
forman parte del hogar digital moderno.

Estos equipos almacenan información personal como fotografías,
documentos, conversaciones, cuentas y datos importantes de la familia.

Cuando no cuentan con medidas adecuadas de seguridad pueden convertirse
en una puerta de entrada para amenazas digitales, robo de información,
pérdida de archivos o accesos no autorizados.

Por esta razón es fundamental proteger los dispositivos utilizados
diariamente y mantener configuraciones seguras.

</p>





<h3 className="
mt-8
flex
items-center
gap-3
text-xl
font-black
text-slate-900
">


<LockKeyhole
className="
h-6
w-6
text-emerald-600
"
/>


Medidas esenciales de seguridad


</h3>





<ul className="
mt-5
space-y-4
text-slate-600
">



<li className="flex gap-3">

<CheckCircle2
className="
h-5
w-5
text-emerald-600
"/>

Crear contraseñas largas, únicas y seguras.

</li>




<li className="flex gap-3">

<CheckCircle2
className="
h-5
w-5
text-emerald-600
"/>

Activar autenticación en dos pasos.

</li>




<li className="flex gap-3">

<CheckCircle2
className="
h-5
w-5
text-emerald-600
"/>

Mantener sistemas y aplicaciones actualizadas.

</li>




<li className="flex gap-3">

<CheckCircle2
className="
h-5
w-5
text-emerald-600
"/>

Revisar permisos y accesos de aplicaciones.

</li>




<li className="flex gap-3">

<CheckCircle2
className="
h-5
w-5
text-emerald-600
"/>

Realizar copias de seguridad importantes.

</li>



</ul>


</div>






<div>


<div className="
overflow-hidden
rounded-3xl
border
border-slate-200
bg-black
shadow-xl
">


<iframe

className="
aspect-video
w-full
"

src="https://www.youtube.com/embed/VIDEO_AQUI"

title="Protección de dispositivos y cuentas"

allowFullScreen

/>


</div>





<div className="
mt-5
rounded-3xl
border
border-emerald-200
bg-emerald-50
p-6
">


<p className="
text-sm
font-bold
uppercase
tracking-widest
text-emerald-700
">

Video práctico

</p>



<p className="
mt-3
leading-7
text-slate-600
">

Aprende cómo proteger computadores, celulares y cuentas digitales
mediante configuraciones sencillas que ayudan a reducir riesgos y
mantener segura la información familiar.

</p>


</div>


</div>


</div>
{/* APRENDIZAJE */}



<div className="
mt-12
rounded-3xl
border
border-emerald-200
bg-emerald-50
p-8
">



<h3 className="
flex
items-center
gap-3
text-xl
font-black
text-emerald-700
">


<ShieldCheck

className="
h-6
w-6
"

/>


En esta sección aprenderás:


</h3>





<div className="
mt-6
grid
gap-5
md:grid-cols-2
">






<div className="
rounded-2xl
bg-white
p-6
shadow-sm
">


<Smartphone

className="
h-8
w-8
text-emerald-600
"

/>




<h4 className="
mt-4
font-black
text-slate-900
">

Seguridad móvil

</h4>




<p className="
mt-3
text-slate-600
">

Configurar teléfonos y tablets con medidas básicas de protección
para reducir riesgos digitales.

</p>



</div>








<div className="
rounded-2xl
bg-white
p-6
shadow-sm
">


<KeyRound

className="
h-8
w-8
text-emerald-600
"

/>




<h4 className="
mt-4
font-black
text-slate-900
">

Protección de cuentas

</h4>




<p className="
mt-3
text-slate-600
">

Crear accesos seguros, mejorar contraseñas y proteger cuentas
importantes de la familia.

</p>



</div>









<div className="
rounded-2xl
bg-white
p-6
shadow-sm
">


<RefreshCcw

className="
h-8
w-8
text-emerald-600
"

/>




<h4 className="
mt-4
font-black
text-slate-900
">

Actualizaciones

</h4>




<p className="
mt-3
text-slate-600
">

Mantener dispositivos preparados frente a nuevas amenazas
digitales.

</p>



</div>









<div className="
rounded-2xl
bg-white
p-6
shadow-sm
">


<DatabaseBackup

className="
h-8
w-8
text-emerald-600
"

/>




<h4 className="
mt-4
font-black
text-slate-900
">

Copias de seguridad

</h4>




<p className="
mt-3
text-slate-600
">

Proteger fotografías, documentos y archivos importantes
ante pérdidas o incidentes.

</p>



</div>




</div>


</div>









{/* CONFIGURACIÓN RECOMENDADA */}



<div className="
mt-10
rounded-3xl
border
border-slate-200
bg-slate-50
p-8
">





<h3 className="
text-xl
font-black
text-slate-900
">

Configuración recomendada

</h3>








<div className="
mt-6
grid
gap-4
md:grid-cols-2
">







<div className="
rounded-2xl
bg-white
p-5
shadow-sm
text-slate-600
flex
gap-3
">


<CheckCircle2

className="
h-5
w-5
shrink-0
text-emerald-600
"

/>



Actualizar sistemas operativos y aplicaciones regularmente.


</div>









<div className="
rounded-2xl
bg-white
p-5
shadow-sm
text-slate-600
flex
gap-3
">


<CheckCircle2

className="
h-5
w-5
shrink-0
text-emerald-600
"

/>



Activar bloqueo seguro mediante PIN, contraseña o biometría.


</div>









<div className="
rounded-2xl
bg-white
p-5
shadow-sm
text-slate-600
flex
gap-3
">


<CheckCircle2

className="
h-5
w-5
shrink-0
text-emerald-600
"

/>



Usar autenticación de doble factor en cuentas importantes.


</div>









<div className="
rounded-2xl
bg-white
p-5
shadow-sm
text-slate-600
flex
gap-3
">


<CheckCircle2

className="
h-5
w-5
shrink-0
text-emerald-600
"

/>



Crear copias de seguridad de documentos y fotografías.


</div>





</div>


</div>
{/* BUENAS PRÁCTICAS */}



<div className="
mt-10
grid
gap-6
md:grid-cols-2
">







<div className="
rounded-3xl
border
border-slate-200
bg-white
p-6
shadow-sm
">





<div className="
flex
items-center
gap-3
">



<Brain

className="
h-7
w-7
text-emerald-600
"

/>




<h3 className="
font-black
text-slate-900
">

Hábitos digitales seguros

</h3>



</div>








<p className="
mt-4
leading-7
text-slate-600
">

La seguridad digital también depende de las acciones diarias.

Evitar compartir contraseñas, revisar permisos y analizar antes de
instalar aplicaciones ayuda a proteger la información familiar.

</p>




</div>












<div className="
rounded-3xl
border
border-slate-200
bg-white
p-6
shadow-sm
">





<div className="
flex
items-center
gap-3
">



<Users

className="
h-7
w-7
text-emerald-600
"

/>





<h3 className="
font-black
text-slate-900
">

Acompañamiento familiar

</h3>



</div>








<p className="
mt-4
leading-7
text-slate-600
">

Crear acuerdos familiares sobre el uso de dispositivos permite que
niños, adolescentes y adultos comprendan la importancia de proteger
sus cuentas y datos personales.

</p>




</div>






</div>













{/* RESULTADO */}




<div className="
mt-10
rounded-3xl
bg-emerald-50
p-6
">





<p className="
font-bold
text-emerald-700
">

Resultado:

</p>








<p className="
mt-3
leading-7
text-slate-600
">

Al finalizar esta sección tendrás dispositivos y cuentas familiares
mejor protegidos, aplicando medidas como contraseñas seguras,
autenticación en dos pasos, actualizaciones y copias de seguridad
para reducir riesgos digitales dentro del hogar.

</p>




</div>







</article>


{/* ========================================================= */}
{/* CARD 07 - NAVEGACIÓN SEGURA Y PREVENCIÓN DEL PHISHING */}
{/* ========================================================= */}

<article
  className="
    w-full
    rounded-[40px]
    border
    border-slate-200
    bg-white
    p-8
    shadow-xl
    md:p-12
  "
>
  {/* CABECERA */}

  <div className="flex items-center gap-5">
    <div
      className="
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        bg-blue-100
        text-2xl
        font-black
        text-blue-600
      "
    >
      07
    </div>

    <div>
      <h2 className="text-3xl font-black text-slate-900">
        Navegación segura y prevención del phishing
      </h2>

      <p className="mt-2 text-slate-500">
        Aprender a reconocer páginas falsas, enlaces sospechosos y fraudes
        digitales antes de convertirse en una víctima.
      </p>
    </div>
  </div>

  {/* CONTENIDO PRINCIPAL */}

  <div className="mt-10 grid gap-10 lg:grid-cols-2">

    {/* EXPLICACIÓN */}

    <div>

      <h3 className="flex items-center gap-3 text-xl font-black text-slate-900">
        <Globe className="h-6 w-6 text-blue-600" />
        ¿Qué es una navegación segura?
      </h3>

      <p className="mt-5 leading-8 text-slate-600">
        Cada vez que utilizamos Internet dejamos información personal en
        diferentes plataformas, servicios y páginas web. Una navegación
        segura consiste en adoptar buenas prácticas para evitar el robo de
        información, la instalación de software malicioso y el acceso a
        sitios fraudulentos.

        Muchas amenazas actuales no atacan directamente los dispositivos,
        sino que buscan engañar a las personas mediante páginas falsas,
        enlaces maliciosos o mensajes que aparentan provenir de entidades
        confiables.

        Conocer estas técnicas permite tomar decisiones más seguras y
        reducir considerablemente el riesgo de sufrir un fraude digital.
      </p>

      <h3 className="mt-8 flex items-center gap-3 text-xl font-black text-slate-900">
        <ShieldAlert className="h-6 w-6 text-blue-600" />
        ¿Qué es el phishing?
      </h3>

      <p className="mt-5 leading-8 text-slate-600">
        El phishing es una técnica de fraude donde un atacante suplanta la
        identidad de una empresa, banco, red social o institución para
        engañar a las personas y obtener contraseñas, datos bancarios,
        códigos de verificación o información personal.

        Generalmente utiliza correos electrónicos, mensajes de texto,
        llamadas telefónicas o enlaces hacia páginas falsas que parecen
        completamente legítimas.
      </p>

      <ul className="mt-6 space-y-4 text-slate-600">

        <li className="flex gap-3">
          <CheckCircle2 className="h-5 w-5 text-blue-600" />
          Verificar siempre la dirección del sitio web.
        </li>

        <li className="flex gap-3">
          <CheckCircle2 className="h-5 w-5 text-blue-600" />
          Evitar abrir enlaces recibidos inesperadamente.
        </li>

        <li className="flex gap-3">
          <CheckCircle2 className="h-5 w-5 text-blue-600" />
          No compartir contraseñas ni códigos de verificación.
        </li>

        <li className="flex gap-3">
          <CheckCircle2 className="h-5 w-5 text-blue-600" />
          Confirmar la autenticidad de mensajes antes de responder.
        </li>

        <li className="flex gap-3">
          <CheckCircle2 className="h-5 w-5 text-blue-600" />
          Mantener una actitud crítica frente a ofertas o premios inesperados.
        </li>

      </ul>

    </div>

    {/* VIDEO */}

   <div className="mt-35">

  <div
    className="
      overflow-hidden
      rounded-3xl
      border
      border-slate-200
      bg-black
      shadow-xl
    "
  >
    <iframe
      className="aspect-video w-full"
      src="https://www.youtube.com/embed/ddOCSdoXvVw"
      title="Uso seguro de Internet para niños y adolescentes"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>

  <div
    className="
      mt-5
      rounded-3xl
      border
      border-blue-200
      bg-blue-50
      p-6
    "
  >
    <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
      Video práctico
    </p>

    <p className="mt-3 leading-7 text-slate-600">
      Aprende a identificar páginas falsas, correos fraudulentos,
      enlaces sospechosos y otras técnicas utilizadas por los
      ciberdelincuentes para robar información personal.
    </p>
  </div>

</div>

  </div>
  {/* ========================================================= */}
{/* APRENDERÁS EN ESTA SECCIÓN */}
{/* ========================================================= */}

<div
  className="
    mt-12
    rounded-3xl
    border
    border-blue-200
    bg-blue-50
    p-8
  "
>
  <h3 className="flex items-center gap-3 text-xl font-black text-blue-700">
    <ShieldCheck className="h-6 w-6" />
    En esta sección aprenderás:
  </h3>

  <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

    {/* Card 1 */}

    <div className="rounded-2xl bg-white p-6 shadow-sm">

      <Globe className="h-8 w-8 text-blue-600" />

      <h4 className="mt-4 font-black text-slate-900">
        Navegación segura
      </h4>

      <p className="mt-3 text-slate-600">
        Identificar sitios web confiables y reconocer señales que ayudan
        a navegar de forma segura en Internet.
      </p>

    </div>

    {/* Card 2 */}

    <div className="rounded-2xl bg-white p-6 shadow-sm">

      <MailWarning className="h-8 w-8 text-blue-600" />

      <h4 className="mt-4 font-black text-slate-900">
        Correos fraudulentos
      </h4>

      <p className="mt-3 text-slate-600">
        Detectar mensajes falsos que intentan obtener información
        personal mediante engaños.
      </p>

    </div>

    {/* Card 3 */}

    <div className="rounded-2xl bg-white p-6 shadow-sm">

      <Link2 className="h-8 w-8 text-blue-600" />

      <h4 className="mt-4 font-black text-slate-900">
        Enlaces sospechosos
      </h4>

      <p className="mt-3 text-slate-600">
        Revisar enlaces antes de hacer clic para evitar ingresar a
        páginas falsas o descargar archivos maliciosos.
      </p>

    </div>

    {/* Card 4 */}

    <div className="rounded-2xl bg-white p-6 shadow-sm">

      <ShieldAlert className="h-8 w-8 text-blue-600" />

      <h4 className="mt-4 font-black text-slate-900">
        Prevención del phishing
      </h4>

      <p className="mt-3 text-slate-600">
        Aplicar medidas prácticas para evitar el robo de contraseñas,
        datos bancarios e información personal.
      </p>

    </div>

  </div>
</div>

{/* ========================================================= */}
{/* SEÑALES DE ALERTA */}
{/* ========================================================= */}

<div
  className="
    mt-10
    rounded-3xl
    border
    border-slate-200
    bg-slate-50
    p-8
  "
>
  <h3 className="text-xl font-black text-slate-900">
    Señales de alerta
  </h3>

  <div className="mt-6 grid gap-5 md:grid-cols-2">

    <div className="rounded-2xl bg-white p-6 shadow-sm flex gap-4">
      <AlertTriangle className="h-6 w-6 shrink-0 text-amber-500" />

      <div>
        <h4 className="font-bold text-slate-900">
          Dominios extraños
        </h4>

        <p className="mt-2 text-slate-600">
          Comprueba que la dirección web corresponda realmente a la
          empresa o institución antes de ingresar información.
        </p>
      </div>
    </div>

    <div className="rounded-2xl bg-white p-6 shadow-sm flex gap-4">
      <Mail className="h-6 w-6 shrink-0 text-blue-600" />

      <div>
        <h4 className="font-bold text-slate-900">
          Mensajes inesperados
        </h4>

        <p className="mt-2 text-slate-600">
          Desconfía de correos o mensajes que soliciten datos personales
          o prometan premios inesperados.
        </p>
      </div>
    </div>

    <div className="rounded-2xl bg-white p-6 shadow-sm flex gap-4">
      <BadgeAlert className="h-6 w-6 shrink-0 text-red-500" />

      <div>
        <h4 className="font-bold text-slate-900">
          Urgencia exagerada
        </h4>

        <p className="mt-2 text-slate-600">
          Los atacantes suelen crear presión para que actúes rápidamente
          sin verificar la información.
        </p>
      </div>
    </div>

    <div className="rounded-2xl bg-white p-6 shadow-sm flex gap-4">
      <Eye className="h-6 w-6 shrink-0 text-blue-600" />

      <div>
        <h4 className="font-bold text-slate-900">
          Revisar antes de hacer clic
        </h4>

        <p className="mt-2 text-slate-600">
          Coloca el cursor sobre el enlace o verifica la URL antes de
          abrir cualquier página.
        </p>
      </div>
    </div>

  </div>
</div>
{/* ========================================================= */}
{/* CONFIGURACIÓN RECOMENDADA */}
{/* ========================================================= */}

<div
  className="
    mt-10
    rounded-3xl
    border
    border-slate-200
    bg-slate-50
    p-8
  "
>
  <h3
    className="
      text-xl
      font-black
      text-slate-900
    "
  >
    Recomendaciones para un uso responsable
  </h3>

  <div
    className="
      mt-6
      grid
      gap-4
      md:grid-cols-2
    "
  >
    <div
      className="
        flex
        gap-3
        rounded-2xl
        bg-white
        p-5
        shadow-sm
        text-slate-600
      "
    >
      <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-600" />

      Conversar frecuentemente sobre el uso seguro de Internet.
    </div>

    <div
      className="
        flex
        gap-3
        rounded-2xl
        bg-white
        p-5
        shadow-sm
        text-slate-600
      "
    >
      <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-600" />

      Establecer horarios para el uso de dispositivos.
    </div>

    <div
      className="
        flex
        gap-3
        rounded-2xl
        bg-white
        p-5
        shadow-sm
        text-slate-600
      "
    >
      <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-600" />

      Configurar controles parentales cuando sea necesario.
    </div>

    <div
      className="
        flex
        gap-3
        rounded-2xl
        bg-white
        p-5
        shadow-sm
        text-slate-600
      "
    >
      <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-600" />

      Fomentar el respeto y la responsabilidad en los entornos digitales.
    </div>
  </div>
</div>

{/* ========================================================= */}
{/* BUENAS PRÁCTICAS */}
{/* ========================================================= */}

<div
  className="
    mt-10
    grid
    gap-6
    md:grid-cols-2
  "
>
  <div
    className="
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-6
      shadow-sm
    "
  >
    <div className="flex items-center gap-3">
      <MessageCircle className="h-7 w-7 text-cyan-600" />

      <h3
        className="
          font-black
          text-slate-900
        "
      >
        Comunicación abierta
      </h3>
    </div>

    <p
      className="
        mt-4
        leading-7
        text-slate-600
      "
    >
      Mantener una comunicación constante permite que niños y adolescentes
      expresen dudas o situaciones incómodas vividas en Internet, fortaleciendo
      la confianza y la prevención.
    </p>
  </div>

  <div
    className="
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-6
      shadow-sm
    "
  >
    <div className="flex items-center gap-3">
      <HeartHandshake className="h-7 w-7 text-cyan-600" />

      <h3
        className="
          font-black
          text-slate-900
        "
      >
        Acompañamiento permanente
      </h3>
    </div>

    <p
      className="
        mt-4
        leading-7
        text-slate-600
      "
    >
      El acompañamiento familiar ayuda a desarrollar hábitos digitales
      saludables y permite actuar oportunamente ante posibles riesgos o
      situaciones de ciberacoso.
    </p>
  </div>
</div>

{/* ========================================================= */}
{/* RESULTADO */}
{/* ========================================================= */}

<div
  className="
    mt-10
    rounded-3xl
    bg-cyan-50
    p-6
  "
>
  <p
    className="
      font-bold
      text-cyan-700
    "
  >
    Resultado:
  </p>

  <p
    className="
      mt-3
      leading-7
      text-slate-600
    "
  >
    Al finalizar esta sección comprenderás cómo acompañar a niños y
    adolescentes en el uso seguro de Internet, promoviendo hábitos digitales
    responsables, una comunicación abierta y una navegación más segura para
    toda la familia.
  </p>
</div>

</article>
{/* ========================================================= */}
{/* CARD 08 - RESPUESTA ANTE INCIDENTES Y RECUPERACIÓN */}
{/* ========================================================= */}

<article
  className="
    rounded-[40px]
    border
    border-slate-200
    bg-white
    p-8
    shadow-xl
    md:p-12
  "
>
  {/* ========================= */}
  {/* CABECERA */}
  {/* ========================= */}

  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

    <div className="flex items-center gap-5">

      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-red-100
          text-2xl
          font-black
          text-red-600
        "
      >
        08
      </div>

      <div>
        <h2
          className="
            text-3xl
            font-black
            text-slate-900
          "
        >
          Respuesta ante incidentes y recuperación
        </h2>

        <p
          className="
            mt-2
            text-slate-500
          "
        >
          Aprende cómo actuar rápidamente cuando ocurre un incidente de
          ciberseguridad y cómo recuperar tus dispositivos y cuentas.
        </p>
      </div>

    </div>

    <div
      className="
        rounded-2xl
        border
        border-red-200
        bg-red-50
        px-6
        py-4
      "
    >
      <p className="text-sm font-bold uppercase tracking-widest text-red-700">
        Objetivo
      </p>

      <p className="mt-2 text-slate-600 leading-7">
        Reducir el impacto de un incidente y recuperar la información de
        manera segura.
      </p>
    </div>

  </div>

  {/* ========================= */}
  {/* HERO */}
  {/* ========================= */}

  <div
    className="
      mt-12
      grid
      gap-10
      lg:grid-cols-2
      lg:items-start
    "
  >

    {/* TEXTO */}

    <div>

      <span
        className="
          inline-flex
          items-center
          rounded-full
          bg-red-100
          px-4
          py-2
          text-sm
          font-bold
          text-red-700
        "
      >
        ⚠️ Actuar rápidamente puede evitar daños mayores.
      </span>

      <h3
        className="
          mt-6
          text-4xl
          font-black
          leading-tight
          text-slate-900
        "
      >
        ¿Qué es un incidente de ciberseguridad?
      </h3>

      <p
        className="
          mt-6
          leading-8
          text-slate-600
        "
      >
        Un incidente de seguridad ocurre cuando una persona, dispositivo o
        sistema sufre una acción que compromete la confidencialidad,
        integridad o disponibilidad de la información.
      </p>

      <p
        className="
          mt-5
          leading-8
          text-slate-600
        "
      >
        Puede tratarse de un virus, un ataque de phishing, el robo de una
        contraseña, la pérdida de un dispositivo o cualquier situación que
        afecte la seguridad digital.
      </p>

      {/* MINI CARDS */}

      <div
        className="
          mt-10
          grid
          gap-5
          sm:grid-cols-2
        "
      >

        <div
          className="
            rounded-3xl
            border
            border-red-100
            bg-red-50
            p-6
            transition
            duration-300
            hover:-translate-y-2
            hover:shadow-lg
          "
        >
          <ShieldAlert className="h-10 w-10 text-red-600" />

          <h4 className="mt-5 font-black text-slate-900">
            Detectar
          </h4>

          <p className="mt-3 text-slate-600">
            Identificar rápidamente señales de un posible incidente.
          </p>

        </div>

        <div
          className="
            rounded-3xl
            border
            border-orange-100
            bg-orange-50
            p-6
            transition
            duration-300
            hover:-translate-y-2
            hover:shadow-lg
          "
        >
          <ShieldX className="h-10 w-10 text-orange-600" />

          <h4 className="mt-5 font-black text-slate-900">
            Contener
          </h4>

          <p className="mt-3 text-slate-600">
            Evitar que el problema continúe propagándose.
          </p>

        </div>

        <div
          className="
            rounded-3xl
            border
            border-blue-100
            bg-blue-50
            p-6
            transition
            duration-300
            hover:-translate-y-2
            hover:shadow-lg
          "
        >
          <RefreshCcw className="h-10 w-10 text-blue-600" />

          <h4 className="mt-5 font-black text-slate-900">
            Recuperar
          </h4>

          <p className="mt-3 text-slate-600">
            Restaurar la información y volver a operar normalmente.
          </p>

        </div>

        <div
          className="
            rounded-3xl
            border
            border-green-100
            bg-green-50
            p-6
            transition
            duration-300
            hover:-translate-y-2
            hover:shadow-lg
          "
        >
          <GraduationCap className="h-10 w-10 text-green-600" />

          <h4 className="mt-5 font-black text-slate-900">
            Aprender
          </h4>

          <p className="mt-3 text-slate-600">
            Aplicar mejoras para evitar que vuelva a ocurrir.
          </p>

        </div>

      </div>

    </div>

    {/* VIDEO */}

    <div className="mt-12 lg:mt-35">

      <div
        className="
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-black
          shadow-xl
        "
      >
        <iframe
          className="aspect-video w-full"
          src="https://www.youtube.com/embed/VIDEO_AQUI"
          title="Respuesta ante incidentes de ciberseguridad"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div
        className="
          mt-6
          rounded-3xl
          border
          border-red-200
          bg-red-50
          p-6
        "
      >
        <p
          className="
            text-sm
            font-bold
            uppercase
            tracking-widest
            text-red-700
          "
        >
          Video práctico
        </p>

        <p
          className="
            mt-3
            leading-7
            text-slate-600
          "
        >
          Aprende cómo reaccionar correctamente frente a un incidente de
          seguridad, minimizar los daños y recuperar tus cuentas y
          dispositivos utilizando buenas prácticas de ciberseguridad.
        </p>

      </div>

      {/* MÉTRICAS */}

      <div
        className="
          mt-8
          grid
          gap-4
          sm:grid-cols-3
        "
      >

        <div
          className="
            rounded-2xl
            bg-slate-50
            p-5
            text-center
          "
        >
          <p className="text-3xl font-black text-red-600">1°</p>
          <p className="mt-2 text-sm text-slate-600">
            Detectar el incidente
          </p>
        </div>

        <div
          className="
            rounded-2xl
            bg-slate-50
            p-5
            text-center
          "
        >
          <p className="text-3xl font-black text-orange-600">2°</p>
          <p className="mt-2 text-sm text-slate-600">
            Contener el riesgo
          </p>
        </div>

        <div
          className="
            rounded-2xl
            bg-slate-50
            p-5
            text-center
          "
        >
          <p className="text-3xl font-black text-green-600">3°</p>
          <p className="mt-2 text-sm text-slate-600">
            Recuperar la información
          </p>
        </div>

      </div>

    </div>

  </div>

  {/* ========================================================= */}
  {/* CONTINÚA EN LA PARTE 2 */}
  {/* ========================================================= */}
  {/* ========================================================= */}
{/* PLAN DE RESPUESTA */}
{/* ========================================================= */}

{/* ========================================================= */}
{/* CONCLUSIÓN */}
{/* ========================================================= */}

<div className="mt-20">

  <p className="text-sm font-bold uppercase tracking-widest text-red-600">
    Conclusión
  </p>

  <h2 className="mt-3 text-4xl font-black text-slate-900">
    La seguridad digital es un compromiso permanente
  </h2>

  <p className="mt-6 max-w-4xl leading-8 text-slate-600">
    Proteger la información, utilizar la tecnología de forma responsable y
    adoptar hábitos seguros permite reducir riesgos y fortalecer la seguridad
    en el entorno digital. Cada acción preventiva contribuye a proteger a las
    personas, las familias y las organizaciones frente a las amenazas
    cibernéticas.
  </p>

  <div className="mt-12 grid gap-6 lg:grid-cols-2">

    <div className="rounded-3xl border border-slate-200 bg-white p-8">

      <div className="flex items-center gap-4">

        <div className="rounded-2xl bg-red-100 p-3">
          <ShieldCheck className="h-7 w-7 text-red-600" />
        </div>

        <h3 className="text-xl font-black text-slate-900">
          Lo más importante
        </h3>

      </div>

      <ul className="mt-6 space-y-4 text-slate-600 leading-7">

        <li>• Mantén tus dispositivos actualizados.</li>

        <li>• Utiliza contraseñas seguras y únicas.</li>

        <li>• Activa la autenticación en dos pasos.</li>

        <li>• Verifica enlaces y mensajes antes de interactuar.</li>

        <li>• Realiza copias de seguridad periódicamente.</li>

      </ul>

    </div>

    <div className="rounded-3xl border border-red-200 bg-red-50 p-8">

      <div className="flex items-center gap-4">

        <div className="rounded-2xl bg-white p-3 shadow-sm">
          <Lightbulb className="h-7 w-7 text-red-600" />
        </div>

        <h3 className="text-xl font-black text-slate-900">
          Reflexión final
        </h3>

      </div>

      <p className="mt-6 leading-8 text-slate-600">
        La tecnología continuará evolucionando y también lo harán las
        amenazas. Mantenerse informado, fortalecer la cultura de prevención
        y aplicar buenas prácticas de ciberseguridad permitirá aprovechar
        los beneficios del entorno digital de una manera más segura y
        responsable.
      </p>

      <div className="mt-8 rounded-2xl bg-white p-5 border border-red-100">

        <p className="text-lg font-bold text-red-600">
          "La prevención comienza con el conocimiento y se fortalece con las
          acciones que realizamos cada día."
        </p>

      </div>

    </div>

  </div>

</div>

{/* ========================================================= */}
{/* INCIDENTES MÁS COMUNES */}
{/* ========================================================= */}

<div className="mt-20">

  <div className="flex items-center gap-3">

    <AlertTriangle className="h-7 w-7 text-red-600" />

    <h3 className="text-2xl font-black text-slate-900">
      Incidentes más comunes
    </h3>

  </div>

  <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

    <div className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm hover:shadow-lg transition">

      <Bug className="h-10 w-10 text-red-600" />

      <h4 className="mt-5 font-black text-slate-900">
        Malware
      </h4>

      <p className="mt-3 leading-7 text-slate-600">
        Virus, troyanos o ransomware que afectan el funcionamiento del
        equipo.
      </p>

    </div>

    <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm hover:shadow-lg transition">

      <MailWarning className="h-10 w-10 text-orange-600" />

      <h4 className="mt-5 font-black text-slate-900">
        Phishing
      </h4>

      <p className="mt-3 leading-7 text-slate-600">
        Correos o mensajes falsos que intentan robar credenciales o
        información financiera.
      </p>

    </div>

    <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-lg transition">

      <KeyRound className="h-10 w-10 text-blue-600" />

      <h4 className="mt-5 font-black text-slate-900">
        Robo de cuentas
      </h4>

      <p className="mt-3 leading-7 text-slate-600">
        Acceso no autorizado debido a contraseñas débiles o filtradas.
      </p>

    </div>

    <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm hover:shadow-lg transition">

      <Laptop className="h-10 w-10 text-green-600" />

      <h4 className="mt-5 font-black text-slate-900">
        Pérdida de dispositivos
      </h4>

      <p className="mt-3 leading-7 text-slate-600">
        Celulares o computadores extraviados que contienen información
        personal y cuentas activas.
      </p>

    </div>

  </div>

</div>
{/* ========================================================= */}
{/* TIMELINE DE RECUPERACIÓN */}
{/* ========================================================= */}

<div className="mt-20">

  <div className="flex items-center gap-3">

    <TimerReset className="h-7 w-7 text-red-600" />

    <h3 className="text-2xl font-black text-slate-900">
      Proceso de recuperación
    </h3>

  </div>

  <p className="mt-4 max-w-3xl leading-8 text-slate-600">
    Después de controlar el incidente comienza la recuperación.
    El objetivo es restaurar la información, asegurar las cuentas
    y evitar que el problema vuelva a repetirse.
  </p>

  <div className="relative mt-12">

    <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-red-100"></div>

    <div className="space-y-8">

      {/* 1 */}

      <div className="relative flex gap-6">

        <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
          1
        </div>

        <div className="flex-1 rounded-3xl border border-red-100 bg-white p-6 shadow-sm">

          <div className="flex items-center gap-3">

            <ShieldAlert className="h-7 w-7 text-red-600"/>

            <h4 className="text-xl font-black text-slate-900">
              Confirmar el incidente
            </h4>

          </div>

          <p className="mt-4 leading-7 text-slate-600">
            Verifica qué ocurrió, identifica el alcance del problema y
            registra la información necesaria para entender el incidente.
          </p>

        </div>

      </div>

      {/* 2 */}

      <div className="relative flex gap-6">

        <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg">
          2
        </div>

        <div className="flex-1 rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">

          <div className="flex items-center gap-3">

            <Lock className="h-7 w-7 text-orange-600"/>

            <h4 className="text-xl font-black text-slate-900">
              Proteger las cuentas
            </h4>

          </div>

          <p className="mt-4 leading-7 text-slate-600">
            Cambia todas las contraseñas comprometidas y activa la
            autenticación en dos pasos para impedir nuevos accesos.
          </p>

        </div>

      </div>

      {/* 3 */}

      <div className="relative flex gap-6">

        <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
          3
        </div>

        <div className="flex-1 rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">

          <div className="flex items-center gap-3">

            <RefreshCcw className="h-7 w-7 text-blue-600"/>

            <h4 className="text-xl font-black text-slate-900">
              Restaurar el sistema
            </h4>

          </div>

          <p className="mt-4 leading-7 text-slate-600">
            Recupera la información desde copias de seguridad verificadas
            y actualiza el sistema antes de volver a utilizarlo.
          </p>

        </div>

      </div>

      {/* 4 */}

      <div className="relative flex gap-6">

        <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white shadow-lg">
          4
        </div>

        <div className="flex-1 rounded-3xl border border-green-100 bg-white p-6 shadow-sm">

          <div className="flex items-center gap-3">

            <GraduationCap className="h-7 w-7 text-green-600"/>

            <h4 className="text-xl font-black text-slate-900">
              Aprender del incidente
            </h4>

          </div>

          <p className="mt-4 leading-7 text-slate-600">
            Analiza qué sucedió y aplica nuevas medidas de protección
            para evitar que vuelva a ocurrir.
          </p>

        </div>

      </div>

    </div>

  </div>

</div>

{/* ========================================================= */}
{/* QUÉ HACER / QUÉ NO HACER */}
{/* ========================================================= */}

<div className="mt-20 grid gap-8 lg:grid-cols-2">

  {/* HACER */}

  <div className="rounded-[32px] border border-green-200 bg-green-50 p-8">

    <div className="flex items-center gap-3">

      <BadgeCheck className="h-8 w-8 text-green-600"/>

      <h3 className="text-2xl font-black text-green-700">
        Qué hacer
      </h3>

    </div>

    <div className="mt-8 space-y-5">

      {[
        "Desconectar el dispositivo de Internet.",
        "Cambiar inmediatamente las contraseñas.",
        "Escanear el equipo con un antivirus actualizado.",
        "Restaurar la información desde una copia segura.",
        "Informar el incidente si afecta datos personales.",
        "Actualizar el sistema operativo."
      ].map((item,index)=>(
        <div
          key={index}
          className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm"
        >
          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600"/>
          <p className="text-slate-700">{item}</p>
        </div>
      ))}

    </div>

  </div>

  {/* NO HACER */}

  <div className="rounded-[32px] border border-red-200 bg-red-50 p-8">

    <div className="flex items-center gap-3">

      <CircleX className="h-8 w-8 text-red-600"/>

      <h3 className="text-2xl font-black text-red-700">
        Qué NO hacer
      </h3>

    </div>

    <div className="mt-8 space-y-5">

      {[
        "Ignorar las señales del incidente.",
        "Pagar rescates sin asesoría especializada.",
        "Compartir contraseñas comprometidas.",
        "Conectar otros dispositivos infectados.",
        "Eliminar evidencias importantes.",
        "Seguir utilizando el equipo sin revisarlo."
      ].map((item,index)=>(
        <div
          key={index}
          className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm"
        >
          <CircleX className="mt-1 h-5 w-5 shrink-0 text-red-600"/>
          <p className="text-slate-700">{item}</p>
        </div>
      ))}

    </div>

  </div>

</div>

{/* ========================================================= */}
{/* CHECKLIST FINAL */}
{/* ========================================================= */}

<div className="mt-20 rounded-[36px] border border-slate-200 bg-slate-50 p-10">

  <div className="flex items-center gap-3">

    <ClipboardCheck className="h-8 w-8 text-red-600"/>

    <h3 className="text-2xl font-black text-slate-900">
      Lista de verificación
    </h3>

  </div>

  <div className="mt-10 grid gap-5 md:grid-cols-2">

    {[
      "Detecté el incidente.",
      "Desconecté el equipo de Internet.",
      "Escaneé el dispositivo.",
      "Cambié las contraseñas.",
      "Activé la autenticación en dos pasos.",
      "Restauré la información.",
      "Actualicé el sistema.",
      "Aprendí cómo evitar futuros incidentes."
    ].map((item,index)=>(
      <div
        key={index}
        className="
          flex
          items-center
          gap-4
          rounded-2xl
          bg-white
          p-5
          shadow-sm
          transition
          hover:shadow-md
        "
      >
        <CheckCircle2 className="h-6 w-6 text-green-600"/>
        <span className="text-slate-700 font-medium">
          {item}
        </span>
      </div>
    ))}

  </div>

</div>
{/* ========================================================= */}
{/* RECURSOS ÚTILES */}
{/* ========================================================= */}

<div className="mt-20">

  <div className="flex items-center gap-3">

    <LifeBuoy className="h-7 w-7 text-red-600" />

    <h3 className="text-2xl font-black text-slate-900">
      Recursos útiles después de un incidente
    </h3>

  </div>

  <p className="mt-4 max-w-3xl leading-8 text-slate-600">
    Contar con herramientas y buenas prácticas facilita la recuperación
    y disminuye la probabilidad de sufrir un nuevo incidente de
    ciberseguridad.
  </p>

  <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

    <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 transition hover:-translate-y-2 hover:shadow-xl">

      <KeyRound className="h-10 w-10 text-blue-600" />

      <h4 className="mt-5 font-black text-slate-900">
        Cambiar contraseñas
      </h4>

      <p className="mt-3 leading-7 text-slate-600">
        Reemplaza inmediatamente todas las credenciales comprometidas y
        utiliza claves únicas para cada servicio.
      </p>

    </div>

    <div className="rounded-3xl border border-green-100 bg-green-50 p-6 transition hover:-translate-y-2 hover:shadow-xl">

      <ShieldCheck className="h-10 w-10 text-green-600" />

      <h4 className="mt-5 font-black text-slate-900">
        Activar MFA
      </h4>

      <p className="mt-3 leading-7 text-slate-600">
        La autenticación en dos pasos agrega una capa adicional de
        protección para tus cuentas.
      </p>

    </div>

    <div className="rounded-3xl border border-orange-100 bg-orange-50 p-6 transition hover:-translate-y-2 hover:shadow-xl">

      <DatabaseBackup className="h-10 w-10 text-orange-600" />

      <h4 className="mt-5 font-black text-slate-900">
        Copias de seguridad
      </h4>

      <p className="mt-3 leading-7 text-slate-600">
        Mantén respaldos actualizados para recuperar la información
        rápidamente.
      </p>

    </div>

    <div className="rounded-3xl border border-purple-100 bg-purple-50 p-6 transition hover:-translate-y-2 hover:shadow-xl">

      <RefreshCcw className="h-10 w-10 text-purple-600" />

      <h4 className="mt-5 font-black text-slate-900">
        Actualizar equipos
      </h4>

      <p className="mt-3 leading-7 text-slate-600">
        Instala siempre las últimas actualizaciones de seguridad del
        sistema operativo y las aplicaciones.
      </p>

    </div>

  </div>

</div>

{/* ========================================================= */}
{/* PREGUNTAS FRECUENTES */}
{/* ========================================================= */}

<div className="mt-20">

  <div className="flex items-center gap-3">

    <MessageCircleQuestion className="h-7 w-7 text-red-600" />

    <h3 className="text-2xl font-black text-slate-900">
      Preguntas frecuentes
    </h3>

  </div>

  <div className="mt-8 space-y-5">

    <details className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <summary className="cursor-pointer list-none text-lg font-black text-slate-900">
        ¿Qué hago si sospecho que mi cuenta fue comprometida?
      </summary>

      <p className="mt-5 leading-7 text-slate-600">
        Cambia inmediatamente la contraseña, activa la autenticación en
        dos pasos, revisa los dispositivos conectados y verifica la
        actividad reciente de la cuenta.
      </p>
    </details>

    <details className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <summary className="cursor-pointer list-none text-lg font-black text-slate-900">
        ¿Debo desconectar el equipo de Internet?
      </summary>

      <p className="mt-5 leading-7 text-slate-600">
        Sí. Desconectar el dispositivo puede impedir que el ataque siga
        propagándose o que continúe enviando información al atacante.
      </p>
    </details>

    <details className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <summary className="cursor-pointer list-none text-lg font-black text-slate-900">
        ¿Cuándo debo restaurar una copia de seguridad?
      </summary>

      <p className="mt-5 leading-7 text-slate-600">
        Solamente después de confirmar que el equipo está limpio y libre
        de malware para evitar volver a infectar la información.
      </p>
    </details>

  </div>

</div>

{/* ========================================================= */}
{/* MENSAJE FINAL */}
{/* ========================================================= */}

<div className="mt-20">

  <div className="rounded-[40px] bg-gradient-to-r from-red-600 via-red-500 to-orange-500 p-10 text-white shadow-2xl">

    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

      <div>

        <h3 className="text-4xl font-black">
          La preparación reduce el impacto.
        </h3>

        <p className="mt-5 max-w-2xl text-red-50 leading-8">
          Ninguna organización o familia está completamente libre de
          sufrir un incidente de ciberseguridad. Lo importante es contar
          con un plan de respuesta, actuar rápidamente y aplicar las
          lecciones aprendidas para fortalecer la seguridad digital.
        </p>

      </div>

      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white/20 backdrop-blur">

        <ShieldCheck className="h-16 w-16 text-white" />

      </div>

    </div>

  </div>

</div>

{/* ========================================================= */}
{/* RESULTADO */}
{/* ========================================================= */}

<div className="mt-16 rounded-[36px] border border-red-200 bg-red-50 p-8">

  <div className="flex items-center gap-4">

    <Award className="h-10 w-10 text-red-600" />

    <div>

      <p className="font-bold uppercase tracking-widest text-red-700">
        Resultado esperado
      </p>

      <h3 className="mt-1 text-2xl font-black text-slate-900">
        Estás preparado para responder a un incidente.
      </h3>

    </div>

  </div>

  <p className="mt-6 leading-8 text-slate-700">
    Al finalizar esta sección comprenderás cómo identificar un incidente
    de ciberseguridad, contener sus efectos, proteger tus cuentas,
    recuperar la información de forma segura y aplicar mejoras para
    disminuir el riesgo de futuros ataques. Estas acciones fortalecen la
    resiliencia digital de las personas, familias y organizaciones.
  </p>

</div>

{/* ========================================================= */}
{/* FIN CARD 08 */}
{/* ========================================================= */}
</article>
</div>





</div>




</section>
{/* ========================================================= */}
{/* CONSIDERACIONES FINALES */}
{/* ========================================================= */}
{/* ========================================================= */}
{/* CONSIDERACIONES FINALES */}
{/* ========================================================= */}

{/* ========================================================= */}
{/* CONSIDERACIONES FINALES */}
{/* ========================================================= */}

<section className="mx-auto mt-6 w-full max-w-7xl px-4 sm:px-6 lg:px-8">

  <div
    className="
      overflow-hidden
      rounded-3xl
      border
      border-slate-200
      bg-white
      shadow-sm
    "
  >

    {/* ENCABEZADO */}

    <div
      className="
        border-b
        border-slate-100
        bg-slate-50
        px-6
        py-8
        text-center
        sm:px-10
        lg:px-14
      "
    >

      <div
        className="
          mx-auto
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          bg-red-50
        "
      >
        <ShieldCheck className="h-6 w-6 text-red-600" />
      </div>

      <p
        className="
          mt-4
          text-[10px]
          font-black
          uppercase
          tracking-[0.25em]
          text-red-600
        "
      >
        Consideraciones finales
      </p>

      <h2
        className="
          mt-2
          text-2xl
          font-black
          text-slate-900
          sm:text-3xl
        "
      >
        Construyendo un entorno digital más seguro
      </h2>

      <p
        className="
          mx-auto
          mt-3
          max-w-3xl
          text-sm
          leading-6
          text-slate-500
        "
      >
        La seguridad digital se fortalece cuando convertimos el
        conocimiento en hábitos responsables y acciones concretas.
      </p>

    </div>


    {/* ===================================================== */}
    {/* TRES IDEAS PRINCIPALES */}
    {/* ===================================================== */}

    <div
      className="
        grid
        gap-5
        p-6
        sm:grid-cols-3
        sm:p-8
        lg:p-10
      "
    >

      {/* PREVENCIÓN */}

      <div
        className="
          rounded-2xl
          border
          border-red-100
          bg-red-50
          p-6
          transition
          duration-300
          hover:-translate-y-1
          hover:shadow-md
        "
      >

        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-white
            "
          >
            <ShieldCheck className="h-5 w-5 text-red-600" />
          </div>

          <h3 className="font-black text-slate-900">
            Prevención
          </h3>

        </div>

        <p className="mt-4 text-sm leading-6 text-slate-600">
          Mantén tus dispositivos actualizados, utiliza contraseñas
          seguras y realiza copias de seguridad.
        </p>

      </div>


      {/* RESPONSABILIDAD */}

      <div
        className="
          rounded-2xl
          border
          border-orange-100
          bg-orange-50
          p-6
          transition
          duration-300
          hover:-translate-y-1
          hover:shadow-md
        "
      >

        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-white
            "
          >
            <Eye className="h-5 w-5 text-orange-600" />
          </div>

          <h3 className="font-black text-slate-900">
            Responsabilidad
          </h3>

        </div>

        <p className="mt-4 text-sm leading-6 text-slate-600">
          Analiza enlaces, mensajes y archivos antes de interactuar
          con ellos.
        </p>

      </div>


      {/* COMPROMISO */}

      <div
        className="
          rounded-2xl
          border
          border-green-100
          bg-green-50
          p-6
          transition
          duration-300
          hover:-translate-y-1
          hover:shadow-md
        "
      >

        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-white
            "
          >
            <Users className="h-5 w-5 text-green-600" />
          </div>

          <h3 className="font-black text-slate-900">
            Compromiso
          </h3>

        </div>

        <p className="mt-4 text-sm leading-6 text-slate-600">
          Comparte buenas prácticas y contribuye a crear un entorno
          digital más seguro.
        </p>

      </div>

    </div>


    {/* ===================================================== */}
    {/* FRASE FINAL */}
    {/* ===================================================== */}

    <div className="px-6 pb-8 sm:px-8 lg:px-10">

      <div
        className="
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          px-6
          py-7
          text-center
        "
      >

        <p
          className="
            mx-auto
            max-w-4xl
            text-base
            font-black
            leading-7
            text-slate-900
            sm:text-lg
          "
        >
          La mejor herramienta para proteger la información no es un
          programa, sino el conocimiento, la prevención y la
          responsabilidad con la que utilizamos la tecnología.
        </p>

        <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-red-500" />

      </div>

    </div>

  </div>

</section>


{/* ESPACIO ANTES DEL FOOTER */}

<div className="h-5" />

{/* ESPACIO MÍNIMO ANTES DEL FOOTER */}

<div className="h-5" />

    </main>
  );
}