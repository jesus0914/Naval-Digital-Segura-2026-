import {
  ShieldCheck,
  Code2,
  MapPin,
  Anchor,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const address =
    "Colegio Naval de Crespo, Av. 9A Cl. 72, Barrio Militar de Crespo, Cartagena de Indias, Bolívar, Colombia";

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <footer className="relative mt-24 overflow-hidden bg-slate-950 text-white">

      {/* Línea superior */}
      <div className="h-[3px] bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-700" />

      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        {/* =====================================================
            INFORMACIÓN PRINCIPAL
        ====================================================== */}
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr]">

          {/* ===================================================
              PROYECTO
          ==================================================== */}
          <div>

            {/* Marca */}
            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 shadow-lg shadow-blue-950/40">
                <ShieldCheck
                  className="h-7 w-7 text-white"
                  strokeWidth={2}
                />
              </div>

              <div>
                <h3 className="text-xl font-extrabold tracking-tight">
                  Naval Digital Segura
                </h3>

                <p className="mt-1 text-xs font-medium tracking-wide text-cyan-400">
                  Proyecto Educativo 2026
                </p>
              </div>

            </div>

            {/* Descripción */}
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">
              Promoviendo el uso responsable de la tecnología, la seguridad
              digital y la ciudadanía digital en nuestra comunidad educativa.
            </p>

            {/* =================================================
                FIRMA PROFESIONAL
            ================================================== */}
            <div className="mt-7 flex items-center gap-3">

              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900">
                <Code2
                  className="h-4 w-4 text-cyan-400"
                  strokeWidth={2}
                />
              </div>

              <div className="h-8 w-px bg-slate-800" />

              <div>
                <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-slate-600">
                  Desarrollo web
                </p>

                <p className="text-sm font-semibold tracking-tight text-slate-300">
                  ING.Jesús Villarreal C
                </p>
              </div>

            </div>

          </div>

          {/* ===================================================
              INSTITUCIÓN
          ==================================================== */}
          <div className="lg:border-l lg:border-slate-800 lg:pl-12">

            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              Institución
            </h4>

            <div className="space-y-6">

              {/* Dirección */}
              <div className="flex items-start gap-3">

                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400"
                  strokeWidth={1.8}
                />

                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Colegio Naval de Crespo
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Av. 9A Cl. 72, Barrio Militar de Crespo
                    <br />
                    Cartagena de Indias, Bolívar
                  </p>
                </div>

              </div>

              {/* Armada */}
              <div className="flex items-start gap-3">

                <Anchor
                  className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400"
                  strokeWidth={1.8}
                />

                <div>
                  <p className="text-sm font-medium text-slate-300">
                    Armada Nacional de Colombia
                  </p>

                  <p className="mt-1 text-xs text-slate-600">
                    Institución de la Armada Nacional
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            MAPA
        ====================================================== */}
        <div className="mt-12">

          <div className="mb-4 flex items-center justify-between gap-4">

            <div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cyan-400" />

                <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-300">
                  Ubicación
                </h4>
              </div>

              <p className="mt-1 text-xs text-slate-600">
                Colegio Naval de Crespo · Cartagena de Indias
              </p>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-lg border border-slate-800 px-3 py-2 text-xs font-medium text-slate-500 transition-colors hover:border-slate-700 hover:text-cyan-400 sm:inline-flex"
            >
              Ver ubicación
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

          </div>

          {/* Mapa */}
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl shadow-black/20">

            <iframe
              src={mapUrl}
              title="Ubicación del Colegio Naval de Crespo"
              width="100%"
              height="280"
              style={{
                border: 0,
                display: "block",
                filter: "grayscale(15%)",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

          </div>

        </div>

        {/* =====================================================
            SEPARADOR
        ====================================================== */}
        <div className="my-8 h-px bg-slate-800" />

        {/* =====================================================
            COPYRIGHT
        ====================================================== */}
        <div className="flex flex-col items-center justify-between gap-2 text-center md:flex-row md:text-left">

          <p className="text-xs text-slate-600">
            © 2026{" "}
            <span className="text-slate-500">
              Naval Digital Segura
            </span>
            {" "}· Todos los derechos reservados.
          </p>

          <p className="text-xs text-slate-700">
            Colegio Naval de Crespo · Cartagena de Indias
          </p>

        </div>

      </div>
    </footer>
  );
}