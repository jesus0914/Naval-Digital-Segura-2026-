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

type Registro = Visita & {
  id: string;
  fechaReal: Date | null;
};

type Periodo = "todo" | "hoy" | "7dias" | "30dias";

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

function obtenerNombreSeccion(seccion?: string) {
  const nombres: Record<string, string> = {
    inicio: "Inicio",
    campana: "Campaña",
    estudiantes: "Estudiantes",
    estudiantes_primaria: "Primaria",
    estudiantes_secundaria: "Secundaria",
    estudiantes_media: "Media",
    primaria: "Primaria",
    secundaria: "Secundaria",
    media: "Media",
    padres: "Padres de familia",
    ia: "Inteligencia Artificial",
    inteligencia_artificial: "Inteligencia Artificial",
    recursos: "Recursos",
    juego_ciberseguridad: "Juego de Ciberseguridad",
  };

  if (!seccion) {
    return "Sin sección";
  }

  return (
    nombres[seccion] ||
    seccion
      .replaceAll("_", " ")
      .replaceAll("-", " ")
      .replace(/\b\w/g, (letra) => letra.toUpperCase())
  );
}

function detectarDispositivo(userAgent?: string) {
  if (!userAgent) {
    return "Desconocido";
  }

  const ua = userAgent.toLowerCase();

  if (
    ua.includes("iphone") ||
    ua.includes("ipad") ||
    ua.includes("android") ||
    ua.includes("mobile")
  ) {
    return "Móvil / Tablet";
  }

  return "Computador";
}

function formatoFecha(fecha: Date | null) {
  if (!fecha) {
    return "Sin fecha";
  }

  return fecha.toLocaleString("es-CO", {
    dateStyle: "short",
    timeStyle: "short",
  });
}

function formatoHora(hora: number) {
  return `${String(hora).padStart(2, "0")}:00`;
}

function inicioDelDia(fecha: Date) {
  return new Date(
    fecha.getFullYear(),
    fecha.getMonth(),
    fecha.getDate()
  );
}

function porcentaje(valor: number, total: number) {
  if (!total) return 0;

  return Math.round((valor / total) * 100);
}

export default function EstadisticasPage() {
  const [visitas, setVisitas] = useState<Record<string, Visita>>({});
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [periodo, setPeriodo] = useState<Periodo>("todo");

  useEffect(() => {
    const visitasRef = ref(database, "visitas");

    const cancelar = onValue(
      visitasRef,
      (snapshot) => {
        setVisitas(snapshot.val() || {});
        setCargando(false);
        setError("");
      },
      (firebaseError) => {
        console.error(firebaseError);

        setError(
          "No se pudieron cargar las estadísticas. Revisa los permisos de lectura de Firebase."
        );

        setCargando(false);
      }
    );

    return () => cancelar();
  }, []);

  const registros = useMemo<Registro[]>(() => {
    return Object.entries(visitas)
      .map(([id, visita]) => ({
        id,
        ...visita,
        fechaReal: obtenerFecha(visita),
      }))
      .sort(
        (a, b) =>
          (b.fechaReal?.getTime() || 0) -
          (a.fechaReal?.getTime() || 0)
      );
  }, [visitas]);

  const registrosFiltrados = useMemo(() => {
    if (periodo === "todo") {
      return registros;
    }

    const ahora = new Date();
    let inicio: Date;

    if (periodo === "hoy") {
      inicio = inicioDelDia(ahora);
    } else if (periodo === "7dias") {
      inicio = new Date();
      inicio.setDate(inicio.getDate() - 6);
      inicio = inicioDelDia(inicio);
    } else {
      inicio = new Date();
      inicio.setDate(inicio.getDate() - 29);
      inicio = inicioDelDia(inicio);
    }

    return registros.filter(
      (registro) =>
        registro.fechaReal &&
        registro.fechaReal >= inicio
    );
  }, [registros, periodo]);

  const estadisticas = useMemo(() => {
    const total = registrosFiltrados.length;

    const visitantes = new Set(
      registrosFiltrados
        .map((registro) => registro.visitorId)
        .filter(Boolean)
    );

    const secciones: Record<string, number> = {};
    const rutas: Record<string, number> = {};
    const dispositivos: Record<string, number> = {};
    const idiomas: Record<string, number> = {};
    const pantallas: Record<string, number> = {};
    const horas: Record<number, number> = {};

    registrosFiltrados.forEach((registro) => {
      const seccion = obtenerNombreSeccion(
        registro.seccion
      );

      secciones[seccion] =
        (secciones[seccion] || 0) + 1;

      const ruta = registro.ruta || "/";

      rutas[ruta] = (rutas[ruta] || 0) + 1;

      const dispositivo = detectarDispositivo(
        registro.userAgent
      );

      dispositivos[dispositivo] =
        (dispositivos[dispositivo] || 0) + 1;

      const idioma = registro.idioma || "Desconocido";

      idiomas[idioma] =
        (idiomas[idioma] || 0) + 1;

      const pantalla = registro.pantalla || "Desconocida";

      pantallas[pantalla] =
        (pantallas[pantalla] || 0) + 1;

      if (registro.fechaReal) {
        const hora = registro.fechaReal.getHours();

        horas[hora] = (horas[hora] || 0) + 1;
      }
    });

    const visitantesFrecuencia: Record<string, number> =
      {};

    registrosFiltrados.forEach((registro) => {
      if (!registro.visitorId) return;

      visitantesFrecuencia[registro.visitorId] =
        (visitantesFrecuencia[registro.visitorId] || 0) +
        1;
    });

    const recurrentes = Object.entries(
      visitantesFrecuencia
    )
      .filter(([, cantidad]) => cantidad > 1)
      .sort((a, b) => b[1] - a[1]);

    const ordenar = (obj: Record<string, number>) =>
      Object.entries(obj).sort((a, b) => b[1] - a[1]);

    const ordenarHoras = Object.entries(horas)
      .map(([hora, cantidad]) => ({
        hora: Number(hora),
        cantidad,
      }))
      .sort((a, b) => b.cantidad - a.cantidad);

    return {
      total,
      unicos: visitantes.size,
      secciones: ordenar(secciones),
      rutas: ordenar(rutas),
      dispositivos: ordenar(dispositivos),
      idiomas: ordenar(idiomas),
      pantallas: ordenar(pantallas),
      horas: ordenarHoras,
      recurrentes,
    };
  }, [registrosFiltrados]);

  const actividadDiaria = useMemo(() => {
    const dias: Record<string, number> = {};

    registrosFiltrados.forEach((registro) => {
      if (!registro.fechaReal) return;

      const fecha = registro.fechaReal;

      const clave = `${fecha.getFullYear()}-${String(
        fecha.getMonth() + 1
      ).padStart(2, "0")}-${String(
        fecha.getDate()
      ).padStart(2, "0")}`;

      dias[clave] = (dias[clave] || 0) + 1;
    });

    return Object.entries(dias)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .slice(-14);
  }, [registrosFiltrados]);

  if (cargando) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-cyan-400" />

          <p className="mt-4 font-semibold">
            Cargando estadísticas...
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Conectando con Firebase
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* HEADER */}

      <header className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
                Analytics
              </span>

              <h1 className="mt-3 text-3xl font-bold md:text-4xl">
                Estadísticas
              </h1>

              <p className="mt-2 max-w-2xl text-sm text-slate-400">
                Análisis de comportamiento y navegación de
                los visitantes de Naval Digital Segura 2026.
              </p>
            </div>

            {/* FILTROS */}

            <div className="flex flex-wrap gap-2">
              <Filtro
                activo={periodo === "todo"}
                onClick={() => setPeriodo("todo")}
              >
                Todo
              </Filtro>

              <Filtro
                activo={periodo === "hoy"}
                onClick={() => setPeriodo("hoy")}
              >
                Hoy
              </Filtro>

              <Filtro
                activo={periodo === "7dias"}
                onClick={() => setPeriodo("7dias")}
              >
                7 días
              </Filtro>

              <Filtro
                activo={periodo === "30dias"}
                onClick={() => setPeriodo("30dias")}
              >
                30 días
              </Filtro>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {error && (
          <div className="mb-8 rounded-2xl border border-red-500/30 bg-red-500/10 p-5 text-red-200">
            <p className="font-semibold">
              Error de conexión
            </p>

            <p className="mt-1 text-sm text-red-200/70">
              {error}
            </p>
          </div>
        )}

        {/* TARJETAS */}

        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Stat
            titulo="Visitas"
            valor={estadisticas.total}
            descripcion="Registros del período"
          />

          <Stat
            titulo="Visitantes únicos"
            valor={estadisticas.unicos}
            descripcion="Identificadores diferentes"
          />

          <Stat
            titulo="Páginas consultadas"
            valor={estadisticas.rutas.length}
            descripcion="Rutas diferentes"
          />

          <Stat
            titulo="Recurrentes"
            valor={estadisticas.recurrentes.length}
            descripcion="Visitantes con más de una visita"
          />
        </section>

        {/* ACTIVIDAD DIARIA */}

        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="mb-7">
            <h2 className="text-xl font-bold">
              Actividad diaria
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Cantidad de visitas registradas por día.
            </p>
          </div>

          {actividadDiaria.length === 0 ? (
            <Empty />
          ) : (
            <div className="flex h-64 items-end gap-3 overflow-x-auto pb-8">
              {actividadDiaria.map(
                ([fecha, cantidad]) => {
                  const max =
                    Math.max(
                      ...actividadDiaria.map(
                        ([, valor]) => valor
                      )
                    ) || 1;

                  const altura =
                    Math.max(
                      (cantidad / max) * 100,
                      5
                    );

                  const fechaObj = new Date(
                    `${fecha}T12:00:00`
                  );

                  return (
                    <div
                      key={fecha}
                      className="flex min-w-[45px] flex-1 flex-col items-center justify-end"
                    >
                      <span className="mb-2 text-xs font-bold text-cyan-400">
                        {cantidad}
                      </span>

                      <div
                        className="w-full max-w-[45px] rounded-t-lg bg-cyan-400 transition-all"
                        style={{
                          height: `${altura}%`,
                        }}
                      />

                      <span className="mt-3 rotate-[-45deg] whitespace-nowrap text-[10px] text-slate-500">
                        {fechaObj.toLocaleDateString(
                          "es-CO",
                          {
                            day: "2-digit",
                            month: "2-digit",
                          }
                        )}
                      </span>
                    </div>
                  );
                }
              )}
            </div>
          )}
        </section>

        {/* SECCIONES + RUTAS */}

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <Panel
            titulo="Secciones más visitadas"
            descripcion="Distribución por área de la plataforma."
          >
            <Ranking
              datos={estadisticas.secciones}
              total={estadisticas.total}
            />
          </Panel>

          <Panel
            titulo="Rutas más consultadas"
            descripcion="Páginas que reciben mayor cantidad de visitas."
          >
            <Ranking
              datos={estadisticas.rutas}
              total={estadisticas.total}
              mostrarRuta
            />
          </Panel>
        </section>

        {/* DISPOSITIVOS + IDIOMAS */}

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <Panel
            titulo="Dispositivos"
            descripcion="Tipo de equipo utilizado para acceder."
          >
            <Ranking
              datos={estadisticas.dispositivos}
              total={estadisticas.total}
            />
          </Panel>

          <Panel
            titulo="Idiomas"
            descripcion="Idioma configurado en el navegador."
          >
            <Ranking
              datos={estadisticas.idiomas}
              total={estadisticas.total}
            />
          </Panel>
        </section>

        {/* HORARIOS */}

        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold">
              Horarios de mayor actividad
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Horas con mayor cantidad de accesos.
            </p>
          </div>

          {estadisticas.horas.length === 0 ? (
            <Empty />
          ) : (
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8">
              {estadisticas.horas
                .slice(0, 16)
                .map(({ hora, cantidad }) => (
                  <div
                    key={hora}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-4"
                  >
                    <p className="text-xs uppercase text-slate-500">
                      Hora
                    </p>

                    <p className="mt-1 text-lg font-bold text-cyan-400">
                      {formatoHora(hora)}
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

        {/* PANTALLAS */}

        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold">
              Resoluciones de pantalla
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Tamaños de pantalla registrados.
            </p>
          </div>

          <Ranking
            datos={estadisticas.pantallas}
            total={estadisticas.total}
          />
        </section>

        {/* VISITANTES RECURRENTES */}

        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold">
              Visitantes recurrentes
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Identificadores anónimos que han regresado a
              la plataforma.
            </p>
          </div>

          {estadisticas.recurrentes.length === 0 ? (
            <Empty
              texto="Todavía no hay visitantes recurrentes."
            />
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-slate-800 text-left">
                    <th className="px-4 py-3 text-xs uppercase text-slate-500">
                      Visitante
                    </th>

                    <th className="px-4 py-3 text-xs uppercase text-slate-500">
                      Visitas
                    </th>

                    <th className="px-4 py-3 text-xs uppercase text-slate-500">
                      Estado
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {estadisticas.recurrentes
                    .slice(0, 20)
                    .map(([id, cantidad]) => (
                      <tr
                        key={id}
                        className="border-b border-slate-800/70"
                      >
                        <td className="px-4 py-4 font-mono text-xs text-cyan-400">
                          {id}
                        </td>

                        <td className="px-4 py-4 font-bold">
                          {cantidad}
                        </td>

                        <td className="px-4 py-4">
                          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                            Recurrente
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* ACTIVIDAD RECIENTE */}

        <section className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
          <div className="border-b border-slate-800 p-6">
            <h2 className="text-xl font-bold">
              Actividad reciente
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Últimos registros recibidos.
            </p>
          </div>

          {registrosFiltrados.length === 0 ? (
            <div className="p-8">
              <Empty />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px]">
                <thead>
                  <tr className="border-b border-slate-800 text-left">
                    <th className="px-6 py-4 text-xs uppercase text-slate-500">
                      Visitante
                    </th>

                    <th className="px-6 py-4 text-xs uppercase text-slate-500">
                      Sección
                    </th>

                    <th className="px-6 py-4 text-xs uppercase text-slate-500">
                      Ruta
                    </th>

                    <th className="px-6 py-4 text-xs uppercase text-slate-500">
                      Dispositivo
                    </th>

                    <th className="px-6 py-4 text-xs uppercase text-slate-500">
                      Fecha
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {registrosFiltrados
                    .slice(0, 30)
                    .map((registro) => (
                      <tr
                        key={registro.id}
                        className="border-b border-slate-800/70 hover:bg-slate-800/30"
                      >
                        <td className="px-6 py-4 font-mono text-xs text-cyan-400">
                          {registro.visitorId
                            ? registro.visitorId
                            : "Sin ID"}
                        </td>

                        <td className="px-6 py-4 text-sm">
                          {obtenerNombreSeccion(
                            registro.seccion
                          )}
                        </td>

                        <td className="px-6 py-4">
                          <code className="rounded bg-slate-950 px-2 py-1 text-xs text-slate-400">
                            {registro.ruta || "/"}
                          </code>
                        </td>

                        <td className="px-6 py-4 text-sm text-slate-400">
                          {detectarDispositivo(
                            registro.userAgent
                          )}
                        </td>

                        <td className="px-6 py-4 text-sm text-slate-400">
                          {formatoFecha(
                            registro.fechaReal
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* ESTADO */}

        <section className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">
          <h2 className="font-bold text-cyan-300">
            Sistema de analítica activo
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Los datos mostrados proceden de Firebase
            Realtime Database y se actualizan en tiempo real.
            Los visitantes son identificados mediante un
            identificador anónimo generado en el navegador.
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-slate-300">
              Firebase Realtime Database
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-slate-300">
              Visitantes anónimos
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-slate-300">
              Actualización en tiempo real
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}

function Stat({
  titulo,
  valor,
  descripcion,
}: {
  titulo: string;
  valor: number;
  descripcion: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-500/30">
      <p className="text-sm font-medium text-slate-400">
        {titulo}
      </p>

      <p className="mt-3 text-3xl font-bold">
        {valor.toLocaleString("es-CO")}
      </p>

      <p className="mt-2 text-xs text-slate-500">
        {descripcion}
      </p>
    </div>
  );
}

function Filtro({
  activo,
  onClick,
  children,
}: {
  activo: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
        activo
          ? "border-cyan-400 bg-cyan-400 text-slate-950"
          : "border-slate-700 bg-slate-900 text-slate-300 hover:border-cyan-500/50"
      }`}
    >
      {children}
    </button>
  );
}

function Panel({
  titulo,
  descripcion,
  children,
}: {
  titulo: string;
  descripcion: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <h2 className="text-xl font-bold">
        {titulo}
      </h2>

      <p className="mt-1 mb-6 text-sm text-slate-400">
        {descripcion}
      </p>

      {children}
    </div>
  );
}

function Ranking({
  datos,
  total,
  mostrarRuta = false,
}: {
  datos: [string, number][];
  total: number;
  mostrarRuta?: boolean;
}) {
  if (datos.length === 0) {
    return <Empty />;
  }

  const maximo = datos[0][1] || 1;

  return (
    <div className="space-y-5">
      {datos.slice(0, 10).map(([nombre, cantidad]) => {
        const ancho =
          (cantidad / maximo) * 100;

        return (
          <div key={nombre}>
            <div className="mb-2 flex items-center justify-between gap-4">
              <span
                className={`truncate text-sm ${
                  mostrarRuta
                    ? "font-mono text-slate-300"
                    : "font-medium text-slate-200"
                }`}
              >
                {nombre}
              </span>

              <span className="shrink-0 text-sm font-bold text-cyan-400">
                {cantidad}
                <span className="ml-1 text-xs font-normal text-slate-500">
                  ({porcentaje(cantidad, total)}%)
                </span>
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-cyan-400 transition-all"
                style={{
                  width: `${ancho}%`,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Empty({
  texto = "No hay datos disponibles todavía.",
}: {
  texto?: string;
}) {
  return (
    <div className="rounded-xl border border-dashed border-slate-800 bg-slate-950/40 p-8 text-center">
      <p className="text-sm text-slate-400">
        {texto}
      </p>
    </div>
  );
}