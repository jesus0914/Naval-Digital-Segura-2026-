"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  Lock,
  Smartphone,
  UserCheck,
  MessageCircleWarning,
  KeyRound,
  HeartHandshake,

  // Nuevos
  ShieldAlert,
  CheckCircle2,
  XCircle,
  Link,
  UserRoundPlus,
  Clock3,
  HandHelping,
  Gamepad2,
  Users,
  Footprints,
  SearchCheck,
  ShoppingCart,
  Laptop,
  Eye, Activity, Moon, Brain ,Sparkles
} from "lucide-react";

export default function PrimariaPage() {
  const router = useRouter();
  const contenido = {
    nivel: "Primaria (1° a 5°)",

    introduccion:
      "En primaria, los niños empiezan a usar celulares, tabletas y computadores para aprender y divertirse. Por eso es importante aprender a usar la tecnología de forma segura, responsable y guiada.",

    proposito:
      "Formar hábitos digitales seguros desde la infancia para usar la tecnología como herramienta de aprendizaje sin riesgos.",

    bloques: [
      {
        titulo: "📱 Uso de dispositivos electrónicos",
        color: "sky",
        items: [
          "Los dispositivos ayudan a aprender, jugar y comunicarse.",
          "Deben usarse con supervisión de un adulto.",
          "El exceso de pantalla puede afectar la salud y el estudio.",
          "Es importante tener horarios de uso.",
          "Se deben cuidar para evitar daños."
        ]
      },
      {
        titulo: "🌐 Uso de internet",
        color: "blue",
        items: [
          "Internet sirve para aprender y explorar información.",
          "No todo lo que aparece en internet es seguro.",
          "Existen riesgos como páginas falsas o desconocidos.",
          "Siempre se debe navegar con un adulto.",
          "Se recomienda usar internet con fines educativos."
        ]
      },
      {
        titulo: "🔐 Seguridad digital",
        color: "emerald",
        items: [
          "Protege tu información personal siempre.",
          "No compartas contraseñas con nadie.",
          "No hables con desconocidos en línea.",
          "No envíes fotos sin permiso.",
          "Si algo raro pasa, avisa a un adulto."
        ]
      },
      {
        titulo: "⚠️ Riesgos digitales",
        color: "red",
        items: [
          "Personas desconocidas en internet.",
          "Mensajes o enlaces peligrosos.",
          "Páginas no seguras.",
          "Uso excesivo de pantallas.",
          "Compartir datos personales sin cuidado."
        ]
      },
      {
        titulo: "🌱 Hábitos digitales responsables",
        color: "violet",
        items: [
          "Usar dispositivos con tiempo limitado.",
          "Alternar con juegos y actividades físicas.",
          "Respetar a otros en internet.",
          "Usar tecnología para aprender.",
          "Pensar antes de hacer clic."
        ]
      }
    ],

    objetivos: [
      "Identificar riesgos en internet y dispositivos.",
      "Proteger información personal.",
      "Usar tecnología de forma responsable.",
      "Desarrollar buenos hábitos digitales.",
      "Aprender a tomar decisiones seguras."
    ],

    conclusion:
      "La ciberseguridad en primaria ayuda a formar niños responsables, conscientes y preparados para usar la tecnología de forma segura durante toda su vida."
  };

  const juegosRedes = [
  {
    icon: Gamepad2,
    titulo: "Juegos en Línea",
    texto:
      "Los videojuegos permiten divertirse y aprender, pero nunca debes compartir información personal con personas desconocidas.",
  },
  {
    icon: Users,
    titulo: "Redes Sociales",
    texto:
      "Comparte contenido de forma responsable y acepta únicamente personas que realmente conozcas.",
  },
  {
    icon: ShoppingCart,
    titulo: "Compras y Premios",
    texto:
      "Desconfía de mensajes que prometan monedas, premios o regalos gratis a cambio de información.",
  },
  {
    icon: Laptop,
    titulo: "Dispositivos Compartidos",
    texto:
      "Recuerda cerrar sesión y no guardar contraseñas en computadores de uso público o escolar.",
  },
  ];
  const situaciones = [
    {
      icon: UserRoundPlus,
      titulo: "Solicitud de amistad",
      situacion:
        "Una persona que no conoces te envía una solicitud en un juego o red social.",
      respuesta: "No aceptar y avisar a un adulto.",
      segura: false,
    },
    {
      icon: Lock,
      titulo: "Contraseña secreta",
      situacion:
        "Un amigo te pide tu contraseña para entrar a tu cuenta.",
      respuesta: "Nunca compartir contraseñas.",
      segura: false,
    },
    {
      icon: Link,
      titulo: "Enlace desconocido",
      situacion:
        "Recibes un enlace extraño prometiendo premios o regalos.",
      respuesta: "No abrirlo y consultar con un adulto.",
      segura: false,
    },
    {
      icon: CheckCircle2,
      titulo: "Pedir ayuda",
      situacion:
        "Algo en internet te hace sentir incómodo o preocupado.",
      respuesta: "Hablar con tus padres o docentes.",
      segura: true,
    },
  ];
  const consejos = [
    {
      icon: ShieldCheck,
      titulo: "Protege tu información",
      texto:
        "No compartas tu nombre completo, dirección, colegio o número de teléfono con personas desconocidas.",
    },
    {
      icon: Lock,
      titulo: "Usa contraseñas seguras",
      texto:
        "Crea contraseñas largas combinando letras, números y símbolos. No las compartas con amigos.",
    },
    {
      icon: Smartphone,
      titulo: "Pide permiso antes de descargar",
      texto:
        "Consulta con tus padres o docentes antes de instalar juegos o aplicaciones nuevas.",
    },
    {
      icon: UserCheck,
      titulo: "Acepta solo personas conocidas",
      texto:
        "En juegos y redes sociales agrega únicamente personas que realmente conozcas.",
    },
    {
      icon: MessageCircleWarning,
      titulo: "No respondas mensajes extraños",
      texto:
        "Si alguien te hace sentir incómodo o te pide información personal, avisa a un adulto.",
    },
    {
      icon: Eye,
      titulo: "Piensa antes de publicar",
      texto:
        "Todo lo que compartes en internet puede permanecer mucho tiempo visible para otras personas.",
    },
    {
      icon: KeyRound,
      titulo: "Mantén tus cuentas seguras",
      texto:
        "Cierra sesión en computadores compartidos y nunca escribas tus contraseñas en lugares públicos.",
    },
    {
      icon: HeartHandshake,
      titulo: "Sé amable en internet",
      texto:
        "Respeta a los demás, evita insultos y ayuda a construir espacios digitales seguros y amigables.",
    },
  ];

  const ciudadania = [
  {
    icon: ShieldAlert,
    titulo: "Ciberacoso",
    texto:
      "Nadie debe insultar, humillar o molestar a otras personas por internet. Si ocurre, pide ayuda a un adulto.",
  },
  {
    icon: Footprints,
    titulo: "Huella Digital",
    texto:
      "Todo lo que publicas, comentas o compartes puede permanecer en internet durante mucho tiempo.",
  },
  {
    icon: Users,
    titulo: "Respeto en Línea",
    texto:
      "Debemos tratar a los demás con respeto y amabilidad, igual que en la vida real.",
  },
  {
    icon: SearchCheck,
    titulo: "Información Confiable",
    texto:
      "No toda la información que aparece en internet es verdadera. Aprende a verificar antes de creer o compartir.",
  },
];
const retos = [
  {
    pregunta: "¿Qué debes hacer para proteger tu contraseña?",
    opciones: [
      "Compartirla con amigos",
      "Usar una contraseña fuerte",
      "Escribirla en redes sociales"
    ],
    correcta: "Usar una contraseña fuerte"
  },
  {
    pregunta: "¿Qué es phishing?",
    opciones: [
      "Un juego",
      "Un ataque para robar datos",
      "Un antivirus"
    ],
    correcta: "Un ataque para robar datos"
  },
  {
    pregunta: "¿Qué debes evitar en redes sociales?",
    opciones: [
      "Compartir datos personales",
      "Usar emojis",
      "Seguir amigos"
    ],
    correcta: "Compartir datos personales"
  }
];
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900 px-6 py-14">

      <div className="max-w-5xl mx-auto space-y-14">

        
        {/* HEADER */}
          <section className="relative py-20 md:py-28">

            {/* Fondo elegante */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-white" />

            <div className="max-w-6xl mx-auto px-6 text-center">

              {/* Badge */}
              <div className="inline-block border border-sky-200 bg-white px-6 py-2 rounded-full text-xs tracking-[0.35em] uppercase font-semibold text-sky-700 shadow-sm">
                Nivel {contenido.nivel}
              </div>

              {/* Título */}
              <h1 className="mt-10 text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.05]">
                Formación en
                <span className="block text-sky-600">
                  Ciberseguridad Infantil
                </span>
              </h1>

              {/* Intro */}
              <p className="mt-8 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                {contenido.introduccion}
              </p>

              {/* Divider elegante */}
              <div className="mt-12 w-24 h-[2px] bg-sky-500 mx-auto" />

              {/* Propósito */}
              <div className="mt-12 max-w-3xl mx-auto">
                <h2 className="text-sm tracking-[0.3em] uppercase text-slate-500 font-semibold mb-4">
                  Propósito Formativo
                </h2>

                <p className="text-xl text-slate-700 leading-relaxed font-medium">
                  {contenido.proposito}
                </p>
              </div>

              {/* Bloque inferior minimalista */}
              <div className="mt-20 grid md:grid-cols-3 gap-12 text-left">

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Uso seguro de la tecnología
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Comprensión de prácticas básicas para proteger la información personal
                    y navegar de forma responsable en entornos digitales.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Convivencia digital
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Desarrollo de habilidades sociales que promueven el respeto, la empatía
                    y la comunicación adecuada en plataformas digitales.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Pensamiento crítico
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Identificación de riesgos, desinformación y situaciones que puedan
                    afectar la seguridad en internet.
                  </p>
                </div>

              </div>

            </div>

          </section>
        {/* ¿QUÉ ES LA CIBERSEGURIDAD? */}
          <section className="relative pt-10 pb-10 overflow-hidden">

            <div className="max-w-6xl mx-auto px-6">

              {/* Encabezado */}
              <div className="text-center max-w-4xl mx-auto">

                <span className="text-sky-600 font-semibold tracking-[0.3em] uppercase text-sm">
                  Fundamentos Digitales
                </span>

                <h2 className="mt-5 text-5xl md:text-6xl font-black text-slate-900">
                  ¿Qué es la
                  <span className="block text-sky-600">
                    Ciberseguridad?
                  </span>
                </h2>

                <p className="mt-8 text-xl text-slate-600 leading-relaxed">
                  La ciberseguridad nos ayuda a proteger nuestra información,
                  nuestros dispositivos y nuestras actividades digitales para
                  navegar de forma segura y responsable.
                </p>

              </div>

              {/* Tarjetas */}
              <div className="grid md:grid-cols-3 gap-6 mt-20">

                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900">
                    Protección
                  </h3>

                  <p className="mt-4 text-slate-600">
                    Cuidamos nuestros datos personales y nuestra identidad digital.
                  </p>
                </div>

                <div className="bg-sky-600 rounded-3xl p-8 text-white">
                  <h3 className="text-xl font-bold">
                    Seguridad
                  </h3>

                  <p className="mt-4 text-sky-100">
                    Aprendemos a reconocer situaciones seguras en internet.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900">
                    Ciudadanía Digital
                  </h3>

                  <p className="mt-4 text-slate-600">
                    Utilizamos la tecnología con respeto y responsabilidad.
                  </p>
                </div>

              </div>

              {/* Bloque destacado */}
              <div className="mt-12 rounded-[32px] bg-gradient-to-r from-slate-900 to-slate-800 p-12 text-center">

                <span className="text-sky-300 uppercase tracking-[0.3em] text-sm font-semibold">
                  Mensaje Clave
                </span>

                <h3 className="mt-5 text-3xl md:text-4xl font-black text-white max-w-4xl mx-auto">
                  La tecnología es más segura cuando aprendemos a usarla correctamente.
                </h3>

                <p className="mt-6 text-slate-300 max-w-3xl mx-auto text-lg">
                  La ciberseguridad no solo protege dispositivos. También protege
                  personas, información y experiencias digitales.
                </p>

              </div>
              
              {/* Imagen */}
               <div className="relative h-[700px] w-full mt-12 overflow-hidden rounded-3xl">

                <Image
                  src="/ciberseguridadninos.png"
                  alt="Niños aprendiendo ciberseguridad"
                  fill
                  className="object-contain"
                  priority
                />

              </div>
            </div>

          </section>
        
        {/* ¿Por qué es importante? */}
          <section className="relative pt-10 pb-10 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">

              {/* Encabezado */}
              <div className="text-center max-w-4xl mx-auto">

                <span className="text-sky-600 font-semibold tracking-[0.3em] uppercase text-sm">
                  Buenas Prácticas Digitales
                </span>

                <h2 className="mt-5 text-5xl md:text-6xl font-black text-slate-900">
                  Tus Superpoderes
                  <span className="block text-sky-600">
                    en Internet
                  </span>
                </h2>

                <p className="mt-8 text-xl text-slate-600 leading-relaxed">
                  Cada consejo te ayudará a navegar de forma segura, proteger tu
                  información y convertirte en un verdadero Ciberhéroe Digital.
                </p>

              </div>

              {/* Tarjetas */}
              <div className="grid lg:grid-cols-2 gap-8 mt-24">

                {consejos.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="
                        group
                        relative
                        bg-white
                        border border-slate-100
                        rounded-[32px]
                        p-8
                        shadow-sm
                        hover:shadow-lg
                        transition-all
                        duration-300
                      "
                    >
                      <div className="flex items-start gap-6">

                        {/* Número */}
                        <div className="flex flex-col items-center">

                          <span className="text-4xl font-black text-sky-200 leading-none">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <div className="w-px h-12 bg-slate-200 mt-3"></div>

                        </div>

                        {/* Icono */}
                        <div className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-8 h-8 text-sky-600" />
                        </div>

                        {/* Contenido */}
                        <div>

                          <h3 className="text-2xl font-bold text-slate-900">
                            {item.titulo}
                          </h3>

                          <p className="mt-4 text-slate-600 leading-relaxed text-lg">
                            {item.texto}
                          </p>

                        </div>

                      </div>

                    </div>
                  );
                })}

              </div>

              {/* Frase destacada */}
              <div className="mt-20 text-center">

                <div className="max-w-4xl mx-auto rounded-[32px] border border-sky-100 bg-sky-50 p-10">

                  <h3 className="text-3xl font-black text-slate-900">
                    Cada decisión en internet cuenta
                  </h3>

                  <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                    Antes de hacer clic, compartir información o descargar archivos,
                    piensa si es seguro. Un Ciberhéroe siempre actúa con cuidado y
                    responsabilidad.
                  </p>

                </div>

              </div>

            </div>

          </section>
          {/*"¿Seguro o Peligroso?"*/}
          <section className="relative pt-10 pb-10 overflow-hidden">

            <div className="max-w-6xl mx-auto px-6">

              {/* Encabezado */}
              <div className="text-center max-w-4xl mx-auto">

                <span className="text-sky-600 font-semibold tracking-[0.3em] uppercase text-sm">
                  Aprendizaje Interactivo
                </span>

                <h2 className="mt-5 text-5xl md:text-6xl font-black text-slate-900">
                  ¿Seguro o
                  <span className="block text-sky-600">
                    Peligroso?
                  </span>
                </h2>

                <p className="mt-8 text-xl text-slate-600 leading-relaxed">
                  Aprende a reconocer situaciones que pueden representar riesgos en
                  internet y descubre cómo actuar de manera segura y responsable.
                </p>

              </div>
              
                {/* ================= VIDEO EDUCATIVO ================= */}
                <div className="mt-16">
                  <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl">
                    
                    <div className="grid lg:grid-cols-5">

                      {/* Información */}
                      <div className="flex flex-col justify-center bg-gradient-to-br from-sky-600 to-cyan-600 p-10 text-white lg:col-span-2">
                        
                        <span className="inline-flex w-fit rounded-full bg-white/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em]">
                          Recurso Multimedia
                        </span>

                        <h3 className="mt-5 text-3xl font-black leading-tight">
                          Aprende con un video interactivo
                        </h3>

                        <p className="mt-5 leading-8 text-sky-100">
                          Antes de resolver las situaciones, observa este video y descubre
                          cómo identificar riesgos en internet, proteger tu información y
                          tomar decisiones seguras mientras navegas.
                        </p>

                        <div className="mt-8 flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-2xl">
                            ▶
                          </div>

                          <div>
                            <p className="font-semibold">Duración aproximada</p>
                            <span className="text-sm text-sky-100">Video educativo</span>
                          </div>
                        </div>

                      </div>

                      {/* Video */}
                      <div className="lg:col-span-3 h-full">
                        <div className="h-full w-full">
                          <iframe
                            className="h-full w-full min-h-[320px] lg:min-h-full"
                            src="https://www.youtube.com/embed/NoJvP06sDr4"
                            title="¿Seguro o Peligroso?"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              {/* Tarjetas */}
              <div className="grid md:grid-cols-2 gap-6 mt-20">

                {situaciones.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
                    >

                      <div className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-sky-600" />
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900">
                        {item.titulo}
                      </h3>

                      <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                        {item.situacion}
                      </p>

                      <div
                        className={`mt-6 rounded-2xl p-5 ${
                          item.segura
                            ? "bg-green-50 border border-green-200"
                            : "bg-red-50 border border-red-200"
                        }`}
                      >
                        <div className="flex items-center gap-3">

                          {item.segura ? (
                            <CheckCircle2 className="w-6 h-6 text-green-600" />
                          ) : (
                            <XCircle className="w-6 h-6 text-red-600" />
                          )}

                          <span className="font-bold text-lg text-slate-900">
                            {item.segura
                              ? "Acción Correcta"
                              : "Situación de Riesgo"}
                          </span>

                        </div>

                        <p className="mt-3 text-slate-700">
                          {item.respuesta}
                        </p>

                      </div>

                    </div>
                  );
                })}
              </div>

              {/* Mensaje destacado */}
              <div className="mt-12 rounded-[32px] bg-gradient-to-r from-slate-900 to-slate-800 p-12 text-center">

                <span className="text-sky-300 uppercase tracking-[0.3em] text-sm font-semibold">
                  CiberConsejo
                </span>

                <h3 className="mt-5 text-3xl md:text-4xl font-black text-white max-w-4xl mx-auto">
                  Si algo en internet te parece extraño, detente y consulta con un adulto.
                </h3>

                <p className="mt-6 text-slate-300 max-w-3xl mx-auto text-lg">
                  Reconocer riesgos es una de las habilidades más importantes para
                  navegar de forma segura y proteger tu información personal.
                </p>

              </div>

            </div>

          </section>
         
         {/*Juegos y Redes Sociales Seguras*/}
          <section className="relative pt-10 pb-10 overflow-hidden">

            <div className="max-w-6xl mx-auto px-6">

              {/* HEADER */}
              <div className="text-center max-w-3xl mx-auto">

                <span className="text-sky-600 font-semibold tracking-[0.35em] uppercase text-xs">
                  Navegación Responsable
                </span>

                <h2 className="mt-6 text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                  Juegos y Redes
                  <span className="block text-sky-600">
                    Seguras
                  </span>
                </h2>

                <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">
                  Aprende a usar internet de forma segura mientras juegas, chateas y te comunicas,
                  protegiendo tu información personal y tomando decisiones responsables.
                </p>

              </div>

              {/* CARDS */}
              <div className="grid md:grid-cols-2 gap-8 mt-20">

                {juegosRedes.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={index}
                      className="group relative rounded-3xl border border-slate-100 bg-white p-8 
                                shadow-[0_10px_30px_rgba(2,132,199,0.08)] 
                                transition-all duration-300 
                                hover:-translate-y-2 
                                hover:shadow-[0_25px_60px_rgba(2,132,199,0.18)] 
                                overflow-hidden"
                    >

                      {/* BRILLO SUAVE EN HOVER */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-50/40 to-transparent opacity-0 group-hover:opacity-100 transition" />

                      <div className="relative">

                        {/* HEADER CARD */}
                        <div className="flex items-start gap-4">

                          {/* ICONO CON PROFUNDIDAD */}
                          <div className="relative">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-400 blur-md opacity-30 group-hover:opacity-60 transition" />

                            <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-100 to-cyan-100 flex items-center justify-center group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300">
                              <Icon className="w-7 h-7 text-sky-600" />
                            </div>
                          </div>

                          {/* TITULO */}
                          <div>
                            <h3 className="text-2xl font-black text-slate-900 group-hover:text-sky-700 transition-colors">
                              {item.titulo}
                            </h3>

                            <p className="text-xs text-slate-400 mt-1">
                              Módulo de seguridad digital
                            </p>
                          </div>

                        </div>

                        {/* DESCRIPCIÓN */}
                        <p className="mt-5 text-slate-600 leading-relaxed">
                          {item.texto}
                        </p>

                        {/* BLOQUE DE APRENDIZAJE */}
                        <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-100 p-5">

                          <p className="font-bold text-slate-800 mb-3">
                            💡 Aprendizajes clave
                          </p>

                          <ul className="space-y-2 text-sm text-slate-600">

                            <li className="flex gap-2">
                              <span className="text-sky-500 font-bold">▸</span>
                              No compartas datos personales con desconocidos
                            </li>

                            <li className="flex gap-2">
                              <span className="text-sky-500 font-bold">▸</span>
                              Usa contraseñas seguras y diferentes
                            </li>

                            <li className="flex gap-2">
                              <span className="text-sky-500 font-bold">▸</span>
                              Piensa antes de publicar o comentar
                            </li>

                          </ul>

                        </div>

                        {/* ALERTA FINAL */}
                        <div className="mt-5 flex items-start gap-2 text-amber-600 text-sm font-medium">
                          <span>⚠</span>
                          <span>
                            Todo lo que publicas en internet puede permanecer de forma permanente.
                          </span>
                        </div>

                      </div>

                    </article>
                  );
                })}

              </div>

            </div>

          </section>
        
        { /* Ciberacoso y Huella Digital */}
          <section  className="relative pt-10 pb-10 overflow-hidden">

            <div className="max-w-6xl mx-auto px-6">

              {/* HEADER */}
              <div className="text-center max-w-3xl mx-auto">

                <span className="text-sky-600 font-semibold tracking-[0.35em] uppercase text-xs">
                  Ciudadanía Digital
                </span>

                <h2 className="mt-6 text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                  Respeto y
                  <span className="block text-sky-600">
                    Huella Digital
                  </span>
                </h2>

                <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">
                  Ser un buen ciudadano digital significa actuar con respeto,
                  responsabilidad y conciencia en cada acción que realizamos en internet.
                </p>

              </div>
              {/* 🖼️ IMAGEN */}
                <div className="mt-10 flex justify-center">
                  <div className="relative max-w-2xl w-full overflow-hidden rounded-3xl shadow-[0_25px_60px_rgba(2,132,199,0.15)] border border-slate-100">

                    <img
                      src="/seguridad.png"
                      alt="Seguridad digital y ciudadanía responsable"
                      className="w-full h-auto object-cover"
                    />

                  </div>
                </div>

              {/* CARDS */}
              <div className="grid md:grid-cols-2 gap-8 mt-20">

                {ciudadania.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={index}
                      className="group relative rounded-3xl border border-slate-100 bg-white p-8 
                                shadow-[0_10px_30px_rgba(2,132,199,0.08)] 
                                transition-all duration-300 
                                hover:-translate-y-2 
                                hover:shadow-[0_25px_60px_rgba(2,132,199,0.18)] 
                                overflow-hidden"
                    >

                      {/* BRILLO SUAVE */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-50/40 to-transparent opacity-0 group-hover:opacity-100 transition" />

                      <div className="relative">

                        {/* ICONO */}
                        <div className="relative w-14 h-14 mb-6">
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-400 blur-md opacity-30 group-hover:opacity-60 transition" />

                          <div className="relative w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center group-hover:rotate-3 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-8 h-8 text-sky-600" />
                          </div>
                        </div>

                        {/* TITULO */}
                        <h3 className="text-2xl font-black text-slate-900 group-hover:text-sky-700 transition-colors">
                          {item.titulo}
                        </h3>

                        {/* TEXTO */}
                        <p className="mt-4 text-slate-600 leading-relaxed">
                          {item.texto}
                        </p>

                        {/* MINI BLOQUE EDUCATIVO */}
                        <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-100 p-5">

                          <p className="font-semibold text-slate-800 mb-2">
                            💡 Reflexión digital
                          </p>

                          <p className="text-sm text-slate-600">
                            Tus acciones en internet dejan huella. Piensa antes de publicar,
                            comentar o compartir información.
                          </p>

                        </div>

                      </div>

                    </article>
                  );
                })}

              </div>

            </div>

          </section>

        {/* 🌿 BIENESTAR DIGITAL */}
          <section className="relative pt-14 pb-16 overflow-hidden">

            <div className="max-w-6xl mx-auto px-6">

              {/* HEADER */}
              <div className="text-center max-w-4xl mx-auto">

                <span className="text-sky-600 font-semibold tracking-[0.3em] uppercase text-sm">
                  Salud y tecnología
                </span>

                <h2 className="mt-6 text-5xl md:text-6xl font-black text-slate-900 leading-tight">
                  Bienestar
                  <span className="block text-sky-600">
                    Digital
                  </span>
                </h2>

                <p className="mt-8 text-xl text-slate-600 leading-relaxed">
                  El bienestar digital consiste en usar la tecnología de forma equilibrada,
                  cuidando la salud física, mental y emocional en nuestra vida diaria.
                </p>

              </div>

              {/* CARDS */}
              <div className="grid md:grid-cols-3 gap-7 mt-20">

                {/* CARD 1 */}
                <div className="group bg-white rounded-3xl p-8 border border-slate-100
                  transition-all duration-300 ease-out
                  hover:-translate-y-3 hover:shadow-2xl hover:border-sky-200 cursor-pointer">

                  <div className="w-12 h-12 rounded-2xl bg-sky-100 flex items-center justify-center
                    transition-transform duration-300 group-hover:scale-110">

                    <Eye className="w-6 h-6 text-sky-600" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    Cuida tus ojos
                  </h3>

                  <p className="mt-3 text-slate-600 leading-relaxed text-sm">
                    Descansa la vista cada 20 minutos para evitar fatiga visual y mejorar tu concentración.
                  </p>

                </div>

                {/* CARD 2 (DESTACADA) */}
                <div className="group bg-sky-600 rounded-3xl p-8 text-white
                  transition-all duration-300 ease-out
                  hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.03] cursor-pointer">

                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center
                    transition-transform duration-300 group-hover:scale-110">

                    <Activity className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    Mantente activo
                  </h3>

                  <p className="mt-3 text-sky-100 leading-relaxed text-sm">
                    Alterna el uso de la tecnología con actividad física diaria y hábitos saludables.
                  </p>

                </div>

                {/* CARD 3 */}
                <div className="group bg-white rounded-3xl p-8 border border-slate-100
                  transition-all duration-300 ease-out
                  hover:-translate-y-3 hover:shadow-2xl hover:border-indigo-200 cursor-pointer">

                  <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center
                    transition-transform duration-300 group-hover:scale-110">

                    <Moon className="w-6 h-6 text-indigo-600" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    Descansa bien
                  </h3>

                  <p className="mt-3 text-slate-600 leading-relaxed text-sm">
                    Evita pantallas antes de dormir para mejorar la calidad del sueño.
                  </p>

                </div>

              </div>

              {/* BLOQUE DESTACADO */}
              <div className="mt-14 rounded-[32px] bg-gradient-to-r from-slate-900 to-slate-800
                p-12 text-center shadow-xl">

                <span className="text-sky-300 uppercase tracking-[0.3em] text-sm font-semibold">
                  Mensaje clave
                </span>

                <h3 className="mt-6 text-3xl md:text-4xl font-black text-white max-w-4xl mx-auto leading-tight">
                  El bienestar digital no es desconectarte,
                  es aprender a usar la tecnología con inteligencia.
                </h3>

                <p className="mt-6 text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
                  Un uso equilibrado de la tecnología mejora tu salud, tu atención y tu calidad de vida.
                </p>

              </div>

              {/* VIDEO */}
              <div className="mt-14 flex justify-center">

                <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl
                  border border-slate-200 shadow-lg">

                  <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/NetTFnoICbE"
                    title="Bienestar digital"
                    allowFullScreen
                  />

                </div>

              </div>

            </div>

          </section>
          {/* JUEGO */}  
        <section className="relative -mt-20 pb-20 z-20">
          <div
            className="max-w-7xl mx-auto overflow-hidden rounded-[40px]
            bg-gradient-to-br from-slate-50 via-white to-indigo-50
            border border-indigo-100 shadow-[0_25px_70px_rgba(99,102,241,.18)]"
          >
            <div className="grid lg:grid-cols-2 items-center gap-10 p-8 lg:p-14">

              {/* INFORMACIÓN */}
              <div>

                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold">
                  🎮 Nuevo Mini Juego
                </div>

                <h2 className="mt-6 text-5xl font-black leading-tight text-indigo-700">
                  CIBER JUEGO PRO
                </h2>

                <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                  Pon a prueba tus conocimientos sobre ciberseguridad mientras
                  superas desafíos, ganas experiencia y avanzas de nivel.
                  Aprende jugando con retos rápidos e interactivos.
                </p>

                {/* Características */}

                <div className="grid grid-cols-2 gap-4 mt-8">

                  <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-md">
                    <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center text-2xl">
                      🧠
                    </div>

                    <div>
                      <p className="font-bold text-slate-800">
                        Piensa rápido
                      </p>

                      <p className="text-sm text-slate-500">
                        Responde retos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-md">
                    <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center text-2xl">
                      🔐
                    </div>

                    <div>
                      <p className="font-bold text-slate-800">
                        Navega seguro
                      </p>

                      <p className="text-sm text-slate-500">
                        Aprende buenas prácticas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-md">
                    <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-2xl">
                      ⭐
                    </div>

                    <div>
                      <p className="font-bold text-slate-800">
                        Gana XP
                      </p>

                      <p className="text-sm text-slate-500">
                        Sube de nivel.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-md">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-2xl">
                      🏆
                    </div>

                    <div>
                      <p className="font-bold text-slate-800">
                        Desbloquea logros
                      </p>

                      <p className="text-sm text-slate-500">
                        Completa todos los retos.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Botón */}

                <button
  onClick={() => router.push("/juego-ciberseguridad")}
  className="
    group
    relative
    mt-10
    inline-flex
    items-center
    overflow-hidden
    rounded-full
    bg-slate-900
    px-2
    py-2
    transition-all
    duration-500
    hover:shadow-[0_20px_45px_rgba(15,23,42,.25)]
    hover:scale-105
  "
>
  <span
    className="
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-full
      bg-gradient-to-r
      from-indigo-600
      to-violet-600
      text-xl
      transition-all
      duration-500
      group-hover:rotate-12
    "
  >
    🎮
  </span>

  <span className="px-6 text-base font-semibold text-white">
    Comenzar Juego
  </span>

  <span
    className="
      pr-5
      text-white
      transition-transform
      duration-500
      group-hover:translate-x-1
    "
  >
    →
  </span>
                </button>

              </div>

              {/* IMAGEN */}

              <div className="relative">

                <div className="absolute -inset-8 rounded-full bg-indigo-300/20 blur-3xl"></div>

                <img
                  src="/ciber-juego-banner.png"
                  alt="Ciber Juego"
                  className="relative w-full drop-shadow-[0_25px_50px_rgba(99,102,241,.35)] hover:scale-105 transition duration-500"
                />

              </div>

            </div>
          </div>
          </section>
       

          {/* CONCLUSIÓN */}
          <section className="relative mb-4 overflow-hidden rounded-3xl border-2 border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-yellow-50 px-5 py-7 text-center shadow-xl sm:px-8">
            <div className="absolute -top-10 -left-10 h-28 w-28 rounded-full bg-cyan-200/40 blur-2xl" />
            <div className="absolute -bottom-12 -right-10 h-32 w-32 rounded-full bg-yellow-200/50 blur-2xl" />

            <div className="relative mx-auto max-w-3xl">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-white shadow-lg ring-4 ring-cyan-100">
                <Brain className="h-8 w-8 text-cyan-600" />
              </div>

              <p className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-1.5 text-sm font-black text-cyan-700">
                <Sparkles className="h-4 w-4" />
                Conclusión
              </p>

              <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                ¡Lo más importante!
              </h2>

              <div className="mt-4 rounded-2xl border border-cyan-100 bg-white/80 px-5 py-5 shadow-sm">
                <p className="text-base font-semibold leading-7 text-slate-700 sm:text-lg">
                  {contenido.conclusion}
                </p>
              </div>
            </div>
          </section>

      </div>
    </main>
  );
}