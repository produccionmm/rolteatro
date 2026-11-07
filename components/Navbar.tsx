
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Quiénes somos", href: "#who-we-are" },
  { label: "Escuela", href: "#about" },
  { label: "Cursos", href: "#courses" },
  { label: "Espectáculos", href: "#shows" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-[#C8A96A]/20 bg-[#080808]/95 backdrop-blur-xl">
        <nav className="flex h-[76px] w-full items-center px-4 sm:px-6 lg:h-24 lg:px-10">
          {/* Logo */}

          <a
            href="#hero"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-3 sm:gap-4"
          >
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-[#C8A96A]/40 sm:h-14 sm:w-14">
              <Image
                src="/images/logo.png"
                alt="Rolteatro"
                fill
                priority
                sizes="56px"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-[21px] font-extrabold leading-none tracking-wide sm:text-[30px]">
                <span className="text-white transition-colors duration-300 group-hover:text-[#C83B3B]">
                  ROL
                </span>
                <span className="text-[#C8A96A] transition-colors duration-300 group-hover:text-[#C83B3B]">
                  TEATRO
                </span>
              </p>

              <p className="mt-1 hidden text-[9px] uppercase tracking-[0.34em] text-gray-400 sm:block sm:text-[10px]">
                Escuela de Teatro
              </p>
            </div>
          </a>

          {/* Menú escritorio */}

          <div className="ml-auto hidden items-center gap-7 lg:flex">
            <ul className="flex items-center gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[12px] font-bold uppercase tracking-[0.16em] text-gray-200 transition-colors duration-300 hover:text-[#C83B3B] xl:text-[13px]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#C8A96A] px-6 text-[12px] font-bold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:border-[#C83B3B] hover:text-[#C83B3B] xl:px-7 xl:text-[13px]"
            >
              Inscríbete
            </a>
          </div>

          {/* Botón hamburguesa */}

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="ml-auto flex h-11 w-11 items-center justify-center rounded-lg border border-[#C8A96A]/40 text-white transition-colors hover:border-[#C83B3B] hover:text-[#C83B3B] lg:hidden"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <span className="relative block h-5 w-6">
              <span
                className={`absolute left-0 h-[2px] w-6 bg-current transition-all duration-300 ${
                  menuOpen ? "top-[9px] rotate-45" : "top-0"
                }`}
              />

              <span
                className={`absolute left-0 top-[9px] h-[2px] w-6 bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`absolute left-0 h-[2px] w-6 bg-current transition-all duration-300 ${
                  menuOpen ? "top-[9px] -rotate-45" : "top-[18px]"
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* Fondo móvil */}

      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Menú móvil */}

      <aside
        className={`fixed right-0 top-[76px] z-40 h-[calc(100dvh-76px)] w-full max-w-[360px] overflow-y-auto border-l border-[#C8A96A]/20 bg-[#0B0B0B] px-6 py-7 shadow-2xl transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav aria-label="Menú móvil">
          <ul>
            {links.map((link) => (
              <li
                key={link.href}
                className="border-b border-white/10"
              >
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="flex min-h-16 items-center justify-between text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:text-[#C83B3B]"
                >
                  <span>{link.label}</span>
                  <span className="text-[#C8A96A]" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-8 flex min-h-14 w-full items-center justify-center rounded-xl border border-[#C8A96A] text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#C83B3B] hover:text-[#C83B3B]"
          >
            Inscríbete
          </a>

          <div className="mt-10 border-t border-white/10 pt-7">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A96A]">
              Contacto
            </p>

            <a
              href="mailto:rolteatrocompaniadeteatro@gmail.com"
              className="mt-4 block break-all text-sm leading-6 text-gray-400 transition-colors hover:text-[#C83B3B]"
            >
              rolteatrocompaniadeteatro@gmail.com
            </a>

            <a
              href="tel:+34618872671"
              className="mt-4 block text-sm text-gray-400 transition-colors hover:text-[#C83B3B]"
            >
              Pedro García: 618 87 26 71
            </a>
          </div>
        </nav>
      </aside>
    </>
  );
}
