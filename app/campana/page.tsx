import Link from "next/link";
import {
  ShieldAlert,
  MessageSquareWarning,
  UserX,
  DatabaseZap,
  Bug,
  BrainCircuit
} from "lucide-react";
import Image from "next/image";
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
const videos = [
  {
    titulo: "Bienestar Digital",
    video: "1SOVn6XjSuo",
    descripcion: "Aprende hábitos seguros para navegar y proteger tu información."
  },
  {
    titulo: "Redes Sociales Seguras",
    video: "UZ6e_lszqH0",
    descripcion: "Identifica riesgos y protege tu privacidad en línea."
  },
  {
    titulo: "Protección de Datos",
    video: "-zn6vEbRl0s",
    descripcion: "Aprende a proteger tu privacidad y tu información personal."
  },
  {
    titulo: "Ciberseguridad",
    video: "fMhs0mUih78",
    descripcion: "Aprende a prevenir fraudes, malware y ataques digitales."
  },
  {
    titulo: "Inteligencia Artificial",
    video: "GX79smagB2Y",
    descripcion: "Uso responsable de la IA en educación e innovación."
  },
  {
    titulo: "Ciudadanía Digital",
    video: "GVWkK9w0ooU",
    descripcion: "Promueve el respeto y la convivencia en entornos digitales."
  }
];
export default function CampañaPage() {
  return (
    <main className="bg-white text-slate-900 min-h-screen pt-28 px-6">

      <div className="max-w-5xl mx-auto space-y-24">

        {/* HERO */}
        <section className="text-center space-y-6">

          <span className="text-cyan-700 text-xs tracking-[0.35em] uppercase font-semibold">
            Programa Institucional de Ciberseguridad Educativa
          </span>
          {/* HERO CONTENT */}
          <div className="max-w-5xl mx-auto px-6">
          <h1 className="mt-10 text-5xl md:text-7xl font-black tracking-tight leading-tight text-slate-900 text-center">
            Naval Digital{" "}
            <span className="text-cyan-600">
              Segura
            </span>
          </h1>

            <p className="text-slate-600 text-lg leading-relaxed mt-6 text-left">
              Naval Digital Segura es el programa institucional del Colegio Naval
              orientado a fortalecer la cultura de ciberseguridad, ciudadanía digital
              y protección de la información en toda la comunidad educativa.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed mt-6 text-left">
              En un entorno cada vez más conectado, donde estudiantes, docentes y
              familias interactúan diariamente mediante plataformas digitales,
              dispositivos móviles, redes sociales e inteligencia artificial,
              resulta fundamental desarrollar competencias que permitan utilizar
              la tecnología de forma segura, ética y responsable.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed mt-6 text-left">
              A través de estrategias de sensibilización, simulaciones interactivas,
              recursos educativos y experiencias prácticas, la iniciativa promueve
              la prevención de riesgos digitales, el pensamiento crítico y la
              construcción de entornos digitales más seguros para todos.
            </p>

          </div>
          {/* BOTÓN */}
          <div className="flex justify-center pt-4">
            <Link
              href="https://phishingquiz.withgoogle.com/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-cyan-700 text-white px-7 py-3 rounded-xl font-semibold hover:bg-cyan-800 transition shadow-md hover:shadow-lg"
            >
              Simulación de Ataques
            </Link>
          </div>

        </section>
      {/* VIDEO INTRO */}
        <section className="space-y-8">

        {/* IMAGEN */}
        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
          <Image
            src="/campaña.png"
            alt="Campaña Naval Digital Segura"
            width={1600}
            height={900}
            sizes="(max-width: 768px) 100vw, 896px"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200">
          <span className="h-2 w-2 rounded-full bg-cyan-600"></span>
          <span className="text-sm font-semibold text-cyan-700 uppercase tracking-wider">
            Campaña Institucional
          </span>
        </div>

        {/* TÍTULO */}
        <h2 className="text-xl font-bold text-cyan-700">
          01. ¿Por qué nace Naval Digital Segura?
        </h2>

        {/* TEXTO */}
        <div className="space-y-5 text-lg leading-relaxed text-slate-700">

          <p>
            La transformación digital ha cambiado la forma en que estudiantes,
            docentes y familias se comunican, aprenden y acceden a la información.
            El uso cotidiano de dispositivos móviles, redes sociales, plataformas
            educativas e inteligencia artificial ofrece grandes oportunidades para el
            desarrollo académico y personal.
          </p>

          <p>
            Sin embargo, estos avances también han incrementado la exposición a
            amenazas digitales como el <strong>phishing</strong>, el
            <strong> ciberacoso</strong>, la <strong>suplantación de identidad</strong>,
            la vulneración de datos personales, la desinformación y otros riesgos que
            pueden afectar la seguridad, la privacidad y el bienestar de la comunidad
            educativa.
          </p>

          <p>
            Consciente de esta realidad, el Colegio Naval impulsa la campaña
            <strong> Naval Digital Segura</strong>, una iniciativa orientada a
            fortalecer la cultura de ciberseguridad mediante procesos de
            sensibilización, educación y prevención dirigidos a estudiantes,
            docentes y padres de familia.
          </p>

          <p>
            La campaña busca promover hábitos digitales responsables, fomentar el
            pensamiento crítico frente a los contenidos en línea y desarrollar
            competencias que permitan aprovechar la tecnología de manera segura,
            ética y consciente en los diferentes entornos digitales.
          </p>

        </div>

        </section>

        {/* CONTEXTO */}
        <section className="space-y-5">
          <h2 className="text-xl font-bold text-cyan-700">
            02. Transformación Digital y Riesgos Emergentes
          </h2>

          <div className="space-y-4 text-slate-600 text-lg leading-relaxed mt-6 text-left">
            <p>
              El entorno digital ha transformado profundamente la educación,
              la comunicación y el acceso a la información. Sin embargo, este
              avance también ha incrementado la exposición a amenazas
              cibernéticas cada vez más sofisticadas.
            </p>

            <p>
              La ausencia de cultura en seguridad digital convierte a los
              usuarios en objetivos de ataques como fraude, robo de identidad
              y manipulación de información.
            </p>
          </div>
        </section>

        {/* VIDEO EDUCATIVO */}
        <section className="space-y-5">

          <h2 className="text-xl font-bold text-cyan-700">
            03. Ciudadanía Digital y Uso Seguro de Internet
          </h2>

          <p className="space-y-4 text-slate-600 text-lg leading-relaxed mt-6 text-left">
            Este recurso audiovisual invita a reflexionar sobre la importancia de proteger la información personal,
            actuar con responsabilidad en redes sociales y desarrollar hábitos seguros durante la navegación en internet.
          </p>

          {/* VIDEO */}
          <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/NI68FYGyinQ"
              title="Ciudadanía Digital"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* FUENTE */}
          <div className="text-sm text-slate-500 leading-relaxed">
            <strong>Fuente:</strong> Common Sense Education. (s.f.).
            <em> Ciudadanía Digital</em> [Video]. YouTube.
            https://www.youtube.com/watch?v=NI68FYGyinQ
            <br />
            Material utilizado con fines educativos y de sensibilización dentro de la
            campaña institucional <strong>Naval Digital Segura</strong>.
          </div>

        </section>

       
      
      {/* RIESGOS DIGITALES */}
        <section className="space-y-6">

          <h2 className="text-xl font-bold text-cyan-700">
            04. Superficie de Riesgo Digital
          </h2>

          <p className="space-y-4 text-slate-600 text-lg leading-relaxed mt-6 text-left">
            Conocer las amenazas digitales permite prevenir incidentes y fortalecer una cultura de seguridad en la comunidad educativa.
          </p>

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

        {/* CTA */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-2xl p-6 mt-8">

              <h3 className="text-xl font-bold mb-3">
                ¿Por qué es importante conocer estos riesgos?
              </h3>

              <p className="text-cyan-50 text-lg leading-relaxed text-left">
                La mayoría de los incidentes de ciberseguridad tienen origen en errores humanos.
                La educación digital es la primera línea de defensa para estudiantes, docentes y familias.
              </p>

            </div>

          {/* EJE TEMÁTICO */}
            <section className="space-y-8">

              <div className="rounded-3xl border border-cyan-100 bg-gradient-to-br from-slate-50 to-cyan-50 p-8">

                {/* HEADER */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900">
                    05. Biblioteca Audiovisual Naval Digital Segura
                  </h3>

                  <p className="mt-3 text-slate-600 text-lg leading-relaxed text-left max-w-4xl">
                    Recursos audiovisuales para fortalecer la ciberseguridad,
                    la ciudadanía digital y el uso responsable de las tecnologías.
                  </p>
                </div>

                {/* GRID */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* CARD 1 */}
                    <div className="overflow-hidden rounded-2xl border border-cyan-100 bg-white shadow-sm hover:shadow-md transition-shadow">

                      <iframe
                        className="aspect-video w-full"
                        src="https://www.youtube.com/embed/1SOVn6XjSuo"
                        title="Bienestar Digital"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />

                      <div className="p-5 space-y-3">

                        <span className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700">
                          Cápsula Digital
                        </span>

                        <h4 className="text-xl font-bold text-slate-900">
                          Bienestar Digital
                        </h4>

                        <p className="text-slate-600 text-lg leading-relaxed text-left">
                          Aprende hábitos seguros para navegar y proteger tu información.
                        </p>

                      </div>
                    </div>

                  {/* CARD 2 */}
                    <div
                      className="
                        group relative overflow-hidden
                        rounded-3xl
                        border border-slate-200
                        bg-white
                        shadow-sm
                        hover:shadow-xl
                        hover:border-cyan-300
                        transition-all duration-500
                        hover:-translate-y-1
                      "
                    >

                      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-600 via-sky-500 to-cyan-400" />

                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-50 via-transparent to-sky-50" />

                      <iframe
                        className="aspect-video w-full relative z-10"
                        src="https://www.youtube.com/embed/UZ6e_lszqH0"
                        title="Redes Sociales Seguras"
                        allowFullScreen
                      />

                      <div className="relative z-10 p-6 space-y-4">

                        <span className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 border border-cyan-100">
                          Cápsula Digital
                        </span>

                        <h4 className="text-xl font-bold text-slate-900">
                          Redes Sociales Seguras
                        </h4>

                        <p className="text-slate-600 text-lg leading-relaxed text-left">
                          Identifica riesgos y protege tu privacidad en línea.
                        </p>

                      </div>

                    </div>

                  {/* CARD 3 */}
                    <div className="overflow-hidden rounded-2xl border border-cyan-100 bg-white shadow-sm hover:shadow-md transition-shadow">

                      <iframe
                        className="aspect-video w-full"
                        src="https://www.youtube.com/embed/-zn6vEbRl0s"
                        title="Protección de Datos"
                        allowFullScreen
                      />

                      <div className="p-5 space-y-3">

                        <span className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700">
                          Cápsula Digital
                        </span>

                        <h4 className="text-xl font-bold text-slate-900">
                          Protección de Datos
                        </h4>

                        <p className="text-slate-600 text-lg leading-relaxed text-left">
                          Aprende a proteger tu privacidad y tu información personal.
                        </p>

                      </div>
                    </div>

                  {/* CARD 4 */}
                      <div className="overflow-hidden rounded-2xl border border-cyan-100 bg-white shadow-sm hover:shadow-md transition-shadow">

                        <iframe
                          className="aspect-video w-full"
                          src="https://www.youtube.com/embed/fMhs0mUih78"
                          title="Ciberseguridad"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />

                        <div className="p-5 space-y-3">

                          <span className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700">
                            Cápsula Digital
                          </span>

                          <h4 className="text-xl font-bold text-slate-900">
                            Ciberseguridad
                          </h4>

                          <p className="text-slate-600 text-lg leading-relaxed text-left">
                            Aprende a prevenir fraudes, malware y ataques digitales.
                          </p>

                        </div>

                      </div>

                  {/* CARD 5 */}
                      <div className="overflow-hidden rounded-2xl border border-cyan-100 bg-white shadow-sm hover:shadow-md transition-shadow">

                        <iframe
                          className="aspect-video w-full"
                          src="https://www.youtube.com/embed/GX79smagB2Y"
                          title="Inteligencia Artificial"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />

                        <div className="p-5 space-y-3">

                          <span className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700">
                            Cápsula Digital
                          </span>

                          <h4 className="text-xl font-bold text-slate-900">
                            Inteligencia Artificial
                          </h4>

                          <p className="text-slate-600 text-lg leading-relaxed text-left">
                            Uso responsable de la IA en educación e innovación.
                          </p>

                        </div>

                      </div>

                  {/* CARD 6 */}
                <div
                  className="
                    group relative overflow-hidden
                    rounded-3xl
                    border border-slate-200
                    bg-white
                    shadow-sm
                    hover:shadow-xl
                    hover:border-cyan-300
                    transition-all duration-500
                    hover:-translate-y-1
                  "
                >

                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-600 via-sky-500 to-cyan-400" />

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-50 via-transparent to-sky-50" />

                  <iframe
                    className="aspect-video w-full relative z-10"
                    src="https://www.youtube.com/embed/GVWkK9w0ooU"
                    title="Ciudadanía Digital"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />

                  <div className="relative z-10 p-6 space-y-4">

                    <span className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 border border-cyan-100">
                      Cápsula Digital
                    </span>

                    <h4 className="text-xl font-bold text-slate-900">
                      Ciudadanía Digital
                    </h4>

                    <p className="text-slate-600 text-lg leading-relaxed text-left">
                      Promueve el respeto, la convivencia y la participación responsable en los entornos digitales.
                    </p>

                  </div>

                    </div>
                    </div>
              </div>

            </section>
            { /* IMPACTO */}
          <section className="bg-slate-50 border border-slate-200 p-8 rounded-2xl space-y-5">

            <h2 className="text-2xl font-bold text-cyan-700">
              06. Impacto Educativo
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed text-left">
              Naval Digital Segura contribuye al fortalecimiento de las competencias
              digitales de estudiantes, docentes y familias mediante estrategias de
              sensibilización, formación y prevención orientadas a la construcción de
              entornos digitales más seguros y responsables.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed text-left">
              La campaña promueve el <strong>uso responsable de dispositivos móviles</strong>,
              fomentando hábitos saludables que favorecen el equilibrio entre la vida
              digital, el bienestar emocional y las actividades académicas.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed text-left">
              Asimismo, fortalece la cultura de <strong>redes sociales seguras</strong>,
              permitiendo identificar riesgos como el ciberacoso, el grooming,
              la suplantación de identidad y otras situaciones que pueden afectar
              la convivencia y la integridad de los usuarios.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed text-left">
              La iniciativa también impulsa el uso ético y responsable de la
              <strong> inteligencia artificial</strong>, promoviendo su aplicación
              como herramienta de apoyo al aprendizaje, la creatividad y la innovación,
              siempre bajo criterios de responsabilidad y pensamiento crítico.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed text-left">
              En materia de <strong>seguridad digital</strong>, la comunidad educativa
              desarrolla capacidades para proteger datos personales, crear contraseñas
              seguras, reconocer intentos de fraude y actuar adecuadamente frente a
              amenazas como phishing, malware e ingeniería social.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed text-left">
              Finalmente, la campaña fortalece la <strong>ciudadanía digital</strong>,
              promoviendo valores como el respeto, la empatía, la participación
              responsable y la sana convivencia en los diferentes espacios virtuales.
            </p>

          </section>
        {/* CIERRE */}
       <section className="text-center border border-slate-200 p-10 rounded-2xl bg-slate-50">

        <h2 className="text-2xl font-bold text-cyan-700">
          La seguridad digital es una competencia esencial del siglo XXI
        </h2>

        <p className="text-slate-600 text-lg leading-relaxed mt-4 max-w-3xl mx-auto">
          Educar en ciberseguridad significa formar ciudadanos responsables,
          críticos y preparados para desenvolverse de manera segura en los
          entornos digitales actuales.
        </p>

      </section>

      </div>
    </main>
  );
}