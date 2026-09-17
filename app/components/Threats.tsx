import {
  ShieldAlert,
  UserX,
  MessageCircleWarning,
  Bug,
  EyeOff,
  Newspaper,
} from "lucide-react";

export default function Threats() {
  const threats = [
    {
      number: "01",
      level: "ALTO",
      color: "text-red-400",
      width: "w-[85%]",
      title: "Phishing",
      icon: ShieldAlert,
      desc: "Mensajes fraudulentos diseñados para robar contraseñas, datos personales o información financiera.",
    },
    {
      number: "02",
      level: "MEDIO",
      color: "text-amber-400",
      width: "w-[65%]",
      title: "Suplantación de Identidad",
      icon: UserX,
      desc: "Perfiles falsos creados para engañar, manipular o afectar la reputación de otras personas.",
    },
    {
      number: "03",
      level: "ALTO",
      color: "text-red-400",
      width: "w-[80%]",
      title: "Ciberacoso",
      icon: MessageCircleWarning,
      desc: "Ataques, intimidaciones o humillaciones realizadas mediante plataformas digitales.",
    },
    {
      number: "04",
      level: "CRÍTICO",
      color: "text-pink-400",
      width: "w-full",
      title: "Malware",
      icon: Bug,
      desc: "Software malicioso que puede dañar equipos o comprometer información sensible.",
    },
    {
      number: "05",
      level: "MEDIO",
      color: "text-amber-400",
      width: "w-[60%]",
      title: "Pérdida de Privacidad",
      icon: EyeOff,
      desc: "La exposición excesiva de información puede comprometer la seguridad personal y familiar.",
    },
    {
      number: "06",
      level: "ALTO",
      color: "text-red-400",
      width: "w-[80%]",
      title: "Desinformación",
      icon: Newspaper,
      desc: "Contenido falso o manipulado que afecta la toma de decisiones y genera confusión.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#020817] py-20">

      {/* GRID TECNOLÓGICO */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,.12),transparent_45%)]" />

      {/* RADARES */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[500px] rounded-full border border-cyan-500/10" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[320px] h-[320px] rounded-full border border-cyan-500/10" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto">

          <div className="relative flex justify-center mb-6">

            <div className="absolute w-28 h-28 bg-cyan-500/10 blur-3xl rounded-full" />

            <ShieldAlert className="relative w-20 h-20 md:w-24 md:h-24 text-cyan-400/20" />

          </div>

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-sm">

            <div className="relative">
              <div className="absolute inset-0 bg-red-500 rounded-full animate-ping" />
              <div className="relative w-2.5 h-2.5 rounded-full bg-red-500" />
            </div>

            <span className="text-red-300 font-bold uppercase tracking-[0.2em] text-[11px]">
              Amenazas Digitales
            </span>

          </div>

          <h2 className="mt-6 text-4xl md:text-6xl font-black uppercase leading-none text-white">

            Protege Tu

            <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Mundo Digital
            </span>

          </h2>

          <p className="mt-5 text-slate-300 max-w-2xl mx-auto">
            Conoce las amenazas digitales más comunes y aprende cómo proteger tu
            información, identidad y privacidad en internet.
          </p>

        </div>

        {/* SEPARADOR */}
        <div className="w-40 h-px mx-auto my-10 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

        {/* TARJETAS */}
        <div className="grid lg:grid-cols-2 gap-6">

          {threats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-800
                  bg-black/40
                  backdrop-blur-xl
                  p-6
                  hover:border-cyan-400/50
                  hover:-translate-y-1
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                  transition-all
                  duration-500
                "
              >
                <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[80px] font-black text-white/[0.03] select-none">
                  {item.number}
                </span>

                <div className="relative flex gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>

                  <div className="flex-1">

                    <div className="flex flex-wrap items-center gap-3 mb-2">

                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>

                      <span
                        className={`text-xs uppercase font-bold tracking-widest ${item.color}`}
                      >
                        {item.level}
                      </span>

                    </div>

                    <p className="text-slate-400 leading-relaxed text-sm">
                      {item.desc}
                    </p>

                    <div className="mt-4">

                      <div className="flex justify-between text-[11px] uppercase tracking-wider text-slate-500 mb-2">
                        <span>Nivel de Riesgo</span>
                        <span>{item.level}</span>
                      </div>

                      <div className="h-2 rounded-full bg-slate-800 overflow-hidden">

                        <div
                          className={`${item.width} h-full transition-all duration-1000 ${
                            item.level === "CRÍTICO"
                              ? "bg-pink-500"
                              : item.level === "ALTO"
                              ? "bg-red-500"
                              : "bg-amber-500"
                          }`}
                        />

                      </div>

                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}