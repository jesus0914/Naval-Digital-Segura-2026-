import {
  Smartphone,
  Users,
  BrainCircuit,
  ShieldAlert,
  HeartHandshake,
} from "lucide-react";

export default function Features() {
  const temas = [
    {
      title: "Uso Responsable del Celular",
      desc: "Administra tu tiempo, evita la dependencia y mantén el equilibrio ideal entre tu vida digital y tu entorno real.",
      icon: Smartphone,
      accent:
        "hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100",
      iconColor:
        "text-blue-600 bg-blue-50 border-blue-100 group-hover:bg-blue-100",
    },
    {
      title: "Redes Sociales Seguras",
      desc: "Identifica y mitiga riesgos como ciberacoso, grooming, sexting y suplantación de identidad.",
      icon: Users,
      accent:
        "hover:border-green-200 hover:shadow-xl hover:shadow-green-100",
      iconColor:
        "text-green-600 bg-green-50 border-green-100 group-hover:bg-green-100",
    },
    {
      title: "IA de Forma Educativa",
      desc: "Aprende a utilizar la Inteligencia Artificial para investigar, crear contenido y fortalecer tu aprendizaje.",
      icon: BrainCircuit,
      accent:
        "hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100",
      iconColor:
        "text-purple-600 bg-purple-50 border-purple-100 group-hover:bg-purple-100",
    },
    {
      title: "Seguridad Digital",
      desc: "Protege tus datos personales, crea contraseñas seguras y detecta amenazas como phishing y malware.",
      icon: ShieldAlert,
      accent:
        "hover:border-amber-200 hover:shadow-xl hover:shadow-amber-100",
      iconColor:
        "text-amber-600 bg-amber-50 border-amber-100 group-hover:bg-amber-100",
    },
    {
      title: "Comunidad y Respeto Digital",
      desc: "Promueve la empatía, el respeto y la sana convivencia en los espacios digitales.",
      icon: HeartHandshake,
      accent:
        "hover:border-teal-200 hover:shadow-xl hover:shadow-teal-100",
      iconColor:
        "text-teal-600 bg-teal-50 border-teal-100 group-hover:bg-teal-100",
    },
  ];

  return (
    <section className="py-24 w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900">
            Temas de la{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
              Campaña
            </span>
          </h2>

          <p className="text-slate-600 text-base mt-5 max-w-2xl mx-auto leading-relaxed">
            Conoce los principales temas de{" "}
            <span className="font-semibold text-slate-900">
              Naval Digital Segura
            </span>
            , una iniciativa diseñada para fortalecer la ciudadanía digital,
            la seguridad en línea y el uso responsable de la tecnología.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {temas.map((tema, i) => {
            const IconComponent = tema.icon;

            return (
              <div
                key={i}
                className={`group bg-white border border-slate-200 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${tema.accent}`}
              >
                <div
                  className={`p-4 rounded-xl border w-fit mb-6 transition-all duration-300 ${tema.iconColor}`}
                >
                  <IconComponent className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {tema.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {tema.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}