"use client";

import { useEffect, useMemo, useState } from "react";
import { onValue, ref } from "firebase/database";
import { database } from "../../lib/firebase";

type Visita = {
  visitorId?: string;
  seccion?: string;
  ruta?: string;
  fecha?: string;
  timestamp?: number;
  userAgent?: string;
  idioma?: string;
  pantalla?: string;
};

type VisitasData = Record<string, Visita>;

function obtenerFecha(visita: Visita) {
  if (visita.fecha) {
    const fecha = new Date(visita.fecha);

    if (!Number.isNaN(fecha.getTime())) {
      return fecha;
    }
  }

  if (visita.timestamp) {
    return new Date(visita.timestamp);
  }

  return null;
}

function nombreSeccion(seccion?: string) {
  const nombres: Record<string, string> = {
    inicio: "Inicio",
    campana: "Campaña",
    estudiantes: "Estudiantes",
    primaria: "Primaria",
    secundaria: "Secundaria",
    media: "Media",
    padres: "Padres de familia",
    ia: "Inteligencia Artificial",
    inteligencia_artificial: "Inteligencia Artificial",
    "juego-ciberseguridad": "Juego de Ciberseguridad",
    recursos: "Recursos",
  };

  if (!seccion) return "Sin sección";

  return (
    nombres[seccion] ||
    seccion
      .replaceAll("-", " ")
      .replaceAll("_", " ")
      .replace(/\b\w/g, (letra) => letra.toUpperCase())
  );
}

function detectarDispositivo(userAgent?: string) {
  if (!userAgent) return "Desconocido";

  const ua = userAgent.toLowerCase();

  if (
    ua.includes("mobile") ||
    ua.includes("android") ||
    ua.includes("iphone") ||
    ua.includes("ipad")
  ) {
    return "Móvil / Tablet";
  }

  return "Computador";
}

function formatoFecha(fecha: Date | null) {
  if (!fecha) return "Sin fecha";

  return fecha.toLocaleString("es-CO", {
    dateStyle: "short",
    timeStyle: "short",
  });
}

export default function AdminDashboard() {
  const [visitas, setVisitas] = useState<VisitasData>({});
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const visitasRef = ref(database, "visitas");

    const cancelar = onValue(
      visitasRef,
      (snapshot) => {
        const data = snapshot.val() || {};

        setVisitas(data);
        setCargando(false);
        setError("");
      },
      (firebaseError) => {
        console.error("Error leyendo estadísticas:", firebaseError);
        setError(
          "No se pueden leer las visitas. Revisa las reglas de seguridad de Firebase."
        );
        setCargando(false);
      }
    );

    return () => cancelar();
  }, []);

  const listaVisitas = useMemo(() => {
    return Object.entries(visitas)
      .map(([id, visita]) => ({
        id,
        ...visita,
        fechaReal: obtenerFecha(visita),
      }))
      .sort((a, b) => {
        const fechaA = a.fechaReal?.getTime() || 0;
        const fechaB = b.fechaReal?.getTime() || 0;

        return fechaB - fechaA;
      });
  }, [visitas]);

  const estadisticas = useMemo(() => {
    const ahora = new Date();

    const inicioHoy = new Date(
      ahora.getFullYear(),
      ahora.getMonth(),
      ahora.getDate()
    );

    const inicioSemana = new Date(inicioHoy);
    const diaSemana = inicioSemana.getDay();

    const diferencia =
      diaSemana === 0 ? 6 : diaSemana - 1;

    inicioSemana.setDate(
      inicioSemana.getDate() - diferencia
    );

    const inicioMes = new Date(
      ahora.getFullYear(),
      ahora.getMonth(),
      1
    );

    const visitasHoy = listaVisitas.filter((visita) => {
      return (
        visita.fechaReal &&
        visita.fechaReal >= inicioHoy
      );
    });

    const visitasSemana = listaVisitas.filter((visita) => {
      return (
        visita.fechaReal &&
        visita.fechaReal >= inicioSemana
      );
    });

    const visitasMes = listaVisitas.filter((visita) => {
      return (
        visita.fechaReal &&
        visita.fechaReal >= inicioMes
      );
    });

    const visitantesUnicos = new Set(
      listaVisitas
        .map((visita) => visita.visitorId)
        .filter(Boolean)
    );

    const secciones: Record<string, number> = {};

    listaVisitas.forEach((visita) => {
      const seccion = nombreSeccion(visita.seccion);

      secciones[seccion] =
        (secciones[seccion] || 0) + 1;
    });

    const seccionesOrdenadas = Object.entries(secciones)
      .sort((a, b) => b[1] - a[1]);

    const dispositivos: Record<string, number> = {};

    listaVisitas.forEach((visita) => {
      const dispositivo = detectarDispositivo(
        visita.userAgent
      );

      dispositivos[dispositivo] =
        (dispositivos[dispositivo] || 0) + 1;
    });

    const horas: Record<number, number> = {};

    listaVisitas.forEach((visita) => {
      if (!visita.fechaReal) return;

      const hora = visita.fechaReal.getHours();

      horas[hora] = (horas[hora] || 0) + 1;
    });

    const horasOrdenadas = Object.entries(horas)
      .map(([hora, cantidad]) => ({
        hora: Number(hora),
        cantidad,
      }))
      .sort((a, b) => b.cantidad - a.cantidad);

    return {
      total: listaVisitas.length,
      hoy: visitasHoy.length,
      semana: visitasSemana.length,
      mes: visitasMes.length,
      visitantesUnicos: visitantesUnicos.size,
      seccionesOrdenadas,
      dispositivos,
      horasOrdenadas,
    };
  }, [listaVisitas]);

  const maxSeccion =
    estadisticas.seccionesOrdenadas[0]?.[1] || 1;

  if (cargando) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-cyan-400" />

          <h1 className="text-xl font-bold">
            Cargando estadísticas
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Conectando con Firebase Realtime Database...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* HEADER */}
      <header className="border-b border-slate-800 bg-slate-950/95">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-2 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                Administración
              </div>

              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                Naval Digital Segura
              </h1>

              <p className="mt-2 text-slate-400">
                Panel de estadísticas y seguimiento de visitas
              </p>
            </div>

            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

                <span className="text-sm font-semibold text-emerald-300">
                  Firebase conectado
                </span>
              </div>

              <p className="mt-1 text-xs text-slate-400">
                Realtime Database
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* ERROR */}
        {error && (
          <div className="mb-8 rounded-2xl border border-red-500/30 bg-red-500/10 p-5">
            <div className="flex gap-3">
              <div className="text-red-400 text-xl">
                !
              </div>

              <div>
                <h2 className="font-bold text-red-300">
                  No se pueden cargar las estadísticas
                </h2>

                <p className="mt-1 text-sm text-red-200/80">
                  {error}
                </p>

                <p className="mt-3 text-xs text-slate-400">
                  Si aparece PERMISSION_DENIED en la consola,
                  debes permitir la lectura de /visitas en las
                  reglas de Firebase.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* RESUMEN */}
        <section>
          <div className="mb-5">
            <h2 className="text-xl font-bold">
              Resumen general
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Información recopilada de los visitantes de la
              plataforma.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            <StatCard
              title="Visitas totales"
              value={estadisticas.total}
              description="Todos los registros"
            />

            <StatCard
              title="Visitantes únicos"
              value={estadisticas.visitantesUnicos}
              description="Identificadores únicos"
            />

            <StatCard
              title="Hoy"
              value={estadisticas.hoy}
              description="Desde medianoche"
            />

            <StatCard
              title="Esta semana"
              value={estadisticas.semana}
              description="Semana actual"
            />

            <StatCard
              title="Este mes"
              value={estadisticas.mes}
              description="Mes actual"
            />
          </div>
        </section>

        {/* DOS COLUMNAS */}
        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* SECCIONES */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <div className="mb-6">
              <h2 className="text-lg font-bold">
                Secciones más visitadas
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Distribución de las visitas por sección.
              </p>
            </div>

            {estadisticas.seccionesOrdenadas.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="space-y-5">
                {estadisticas.seccionesOrdenadas.map(
                  ([seccion, cantidad]) => {
                    const porcentaje =
                      (cantidad / maxSeccion) * 100;

                    return (
                      <div key={seccion}>
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-200">
                            {seccion}
                          </span>

                          <span className="text-sm font-bold text-cyan-400">
                            {cantidad}
                          </span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                          <div
                            className="h-full rounded-full bg-cyan-400 transition-all"
                            style={{
                              width: `${porcentaje}%`,
                            }}
                          />
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            )}
          </div>

          {/* DISPOSITIVOS */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <div className="mb-6">
              <h2 className="text-lg font-bold">
                Dispositivos
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Tipo de dispositivo utilizado para acceder.
              </p>
            </div>

            {Object.keys(estadisticas.dispositivos).length ===
            0 ? (
              <EmptyState />
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {Object.entries(
                  estadisticas.dispositivos
                ).map(([dispositivo, cantidad]) => (
                  <div
                    key={dispositivo}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-5"
                  >
                    <p className="text-sm text-slate-400">
                      {dispositivo}
                    </p>

                    <p className="mt-2 text-3xl font-bold">
                      {cantidad}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      visitas
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* HORAS */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold">
              Horarios de mayor actividad
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Horas en las que se registraron más visitas.
            </p>
          </div>

          {estadisticas.horasOrdenadas.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {estadisticas.horasOrdenadas
                .slice(0, 10)
                .map(({ hora, cantidad }) => (
                  <div
                    key={hora}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-4"
                  >
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Hora
                    </p>

                    <p className="mt-1 text-xl font-bold text-cyan-400">
                      {String(hora).padStart(2, "0")}:00
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      {cantidad} visita
                      {cantidad !== 1 ? "s" : ""}
                    </p>
                  </div>
                ))}
            </div>
          )}
        </section>

        {/* VISITAS RECIENTES */}
        <section className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
          <div className="border-b border-slate-800 p-6">
            <h2 className="text-lg font-bold">
              Actividad reciente
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Últimas visitas registradas en la plataforma.
            </p>
          </div>

          {listaVisitas.length === 0 ? (
            <div className="p-10">
              <EmptyState />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px]">
                <thead>
                  <tr className="border-b border-slate-800 text-left">
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Visitante
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Sección
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Ruta
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Dispositivo
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Fecha
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {listaVisitas
                    .slice(0, 20)
                    .map((visita) => (
                      <tr
                        key={visita.id}
                        className="border-b border-slate-800/70 transition hover:bg-slate-800/40"
                      >
                        <td className="px-6 py-4">
                          <span className="font-mono text-xs text-cyan-400">
                            {visita.visitorId
                              ? visita.visitorId.substring(
                                  0,
                                  18
                                ) + "..."
                              : "Sin ID"}
                          </span>
                        </td>

                        <td className="px-6 py-4 text-sm text-slate-200">
                          {nombreSeccion(
                            visita.seccion
                          )}
                        </td>

                        <td className="px-6 py-4">
                          <code className="rounded bg-slate-950 px-2 py-1 text-xs text-slate-400">
                            {visita.ruta || "/"}
                          </code>
                        </td>

                        <td className="px-6 py-4 text-sm text-slate-400">
                          {detectarDispositivo(
                            visita.userAgent
                          )}
                        </td>

                        <td className="px-6 py-4 text-sm text-slate-400">
                          {formatoFecha(
                            visita.fechaReal
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* INFORMACIÓN */}
        <section className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">
          <h2 className="font-bold text-cyan-300">
            Sistema de analítica
          </h2>

          <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-400">
            Las estadísticas se actualizan automáticamente
            desde Firebase Realtime Database. Los visitantes
            son identificados mediante un identificador
            anónimo almacenado localmente en el navegador.
          </p>
        </section>
      </div>
    </main>
  );
}

function StatCard({
  title,
  value,
  description,
}: {
  title: string;
  value: number;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-cyan-500/30">
      <p className="text-sm font-medium text-slate-400">
        {title}
      </p>

      <p className="mt-3 text-3xl font-bold tracking-tight text-white">
        {value.toLocaleString("es-CO")}
      </p>

      <p className="mt-2 text-xs text-slate-500">
        {description}
      </p>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-xl border border-dashed border-slate-800 bg-slate-950/40 p-8 text-center">
      <p className="font-medium text-slate-300">
        No hay datos suficientes todavía
      </p>

      <p className="mt-2 text-sm text-slate-500">
        Las estadísticas aparecerán cuando se registren
        nuevas visitas.
      </p>
    </div>
  );
}