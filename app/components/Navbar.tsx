"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, ShieldCheck, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/campana", label: "Campaña" },
  { href: "/estudiantes", label: "Estudiantes" },
  { href: "/padres", label: "Padres" },
  { href: "/ia", label: "IA Responsable" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">

        {/* ================================
            NAVBAR
        ================================= */}
        <div className="flex h-20 items-center justify-between">

          {/* ================================
              LOGO + NOMBRE
          ================================= */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center gap-3"
          >
            <Image
              src="/logo_colegio.png"
              width={80}
              height={80}
              priority
              alt="Logo Colegio Naval de Crespo"
              className="
                h-14
                w-14
                shrink-0
                object-contain
                sm:h-15
                sm:w-15
                lg:h-16
                lg:w-16
              "
            />

            {/* ================================
                MÓVIL
            ================================= */}
            <div className="sm:hidden">
              <h1 className="text-xl font-bold leading-none tracking-tight text-white">
                Naval Segura
              </h1>
            </div>

            {/* ================================
                TABLET / DESKTOP
            ================================= */}
            <div className="hidden sm:block">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                Colegio Naval de Crespo
              </p>

              <h1 className="mt-0.5 whitespace-nowrap text-base font-bold leading-tight text-white lg:text-lg">
                Naval Digital Segura 2026
              </h1>
            </div>
          </Link>

          {/* ================================
              NAVEGACIÓN DESKTOP
          ================================= */}
          <nav className="ml-auto hidden items-center lg:flex">

            <div className="flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    whitespace-nowrap
                    rounded-lg
                    px-3
                    py-2
                    text-sm
                    font-medium
                    text-slate-300
                    transition-all
                    duration-200
                    hover:bg-slate-800/70
                    hover:text-cyan-400
                    xl:px-4
                  "
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Separador */}
            <div className="mx-4 h-7 w-px bg-slate-700 xl:mx-5" />

            {/* ================================
                TEST DE SEGURIDAD
            ================================= */}
            <Link
              href="https://phishingquiz.withgoogle.com/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                shrink-0
                items-center
                justify-center
                gap-2
                whitespace-nowrap
                rounded-xl
                bg-cyan-700
                px-4
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-cyan-950/20
                transition-all
                duration-200
                hover:bg-cyan-600
                hover:shadow-cyan-900/30
                xl:px-5
              "
            >
              <ShieldCheck size={18} />
              Test de Seguridad
            </Link>
          </nav>

          {/* ================================
              BOTÓN MOBILE
          ================================= */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-xl
              text-white
              transition-all
              duration-200
              hover:bg-slate-800
              active:scale-95
              lg:hidden
            "
          >
            {open ? (
              <X
                size={32}
                strokeWidth={2}
              />
            ) : (
              <Menu
                size={32}
                strokeWidth={2}
              />
            )}
          </button>
        </div>

        {/* ================================
            MENÚ MOBILE
        ================================= */}
        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            lg:hidden
            ${
              open
                ? "max-h-[600px] border-t border-slate-800 opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <nav className="flex flex-col gap-1 py-5">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="
                  rounded-lg
                  px-4
                  py-3
                  text-base
                  font-medium
                  text-slate-200
                  transition-all
                  duration-200
                  hover:bg-slate-800
                  hover:text-cyan-400
                "
              >
                {link.label}
              </Link>
            ))}

            {/* Test móvil */}
            <Link
              href="https://phishingquiz.withgoogle.com/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="
                mt-3
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-cyan-700
                px-5
                py-3.5
                font-semibold
                text-white
                shadow-lg
                shadow-cyan-950/20
                transition-all
                duration-200
                hover:bg-cyan-600
              "
            >
              <ShieldCheck size={19} />
              Test de Seguridad
            </Link>
          </nav>
        </div>

      </div>
    </header>
  );
}