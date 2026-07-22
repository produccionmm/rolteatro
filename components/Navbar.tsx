"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[#C8A96A]/20 bg-[#090909]/85 backdrop-blur-2xl shadow-xl shadow-black/30">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <a
          href="#hero"
          className="flex items-center gap-4 transition duration-300 hover:scale-[1.02]"
        >
          <Image
            src="/images/logo.png"
            alt="Rolteatro"
            width={62}
            height={62}
            priority
            className="rounded-full border border-[#C8A96A]/40"
          />

          <div>
            <h1 className="text-3xl font-extrabold leading-none tracking-wide">
              <span className="text-white">ROL</span>
              <span className="text-[#C8A96A]">TEATRO</span>
            </h1>

            <p className="mt-1 text-[11px] uppercase tracking-[0.45em] text-gray-400">
              Escuela · Compañía
            </p>
          </div>
        </a>

        {/* Menú */}

        <ul className="hidden items-center gap-12 text-sm font-semibold uppercase tracking-[0.25em] lg:flex">

          <li>
            <a
              href="#hero"
              className="transition duration-300 hover:text-[#C8A96A]"
            >
              Inicio
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="transition duration-300 hover:text-[#C8A96A]"
            >
              Escuela
            </a>
          </li>

          <li>
            <a
              href="#courses"
              className="transition duration-300 hover:text-[#C8A96A]"
            >
              Cursos
            </a>
          </li>

          <li>
            <a
              href="#shows"
              className="transition duration-300 hover:text-[#C8A96A]"
            >
              Espectáculos
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="transition duration-300 hover:text-[#C8A96A]"
            >
              Contacto
            </a>
          </li>

        </ul>

        {/* Botón */}

        <a
          href="#contact"
          className="hidden rounded-xl border border-[#C8A96A] bg-[#C8A96A]/10 px-7 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#C8A96A] transition duration-300 hover:-translate-y-0.5 hover:bg-[#C8A96A] hover:text-black lg:inline-flex"
        >
          Inscríbete
        </a>

      </nav>
    </header>
  );
}