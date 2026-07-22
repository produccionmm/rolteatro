"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[#C8A96A]/20 bg-[#111111]/70 backdrop-blur-xl">
      <nav className="container-section flex h-20 items-center justify-between">

        {/* Logo */}

        <a
          href="#hero"
          className="flex items-center gap-4"
        >
          <Image
            src="/images/logo.png"
            alt="Rolteatro"
            width={55}
            height={55}
            priority
            className="rounded-full"
          />

          <div>

            <h1 className="text-2xl font-bold tracking-wide">
              <span className="text-white">ROL</span>
              <span className="text-[#C8A96A]">TEATRO</span>
            </h1>

            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Escuela & Compañía
            </p>

          </div>

        </a>

        {/* Menú */}

        <ul className="hidden items-center gap-10 text-sm font-medium uppercase tracking-widest lg:flex">

          <li>
            <a
              href="#about"
              className="transition hover:text-[#C8A96A]"
            >
              Escuela
            </a>
          </li>

          <li>
            <a
              href="#courses"
              className="transition hover:text-[#C8A96A]"
            >
              Cursos
            </a>
          </li>

          <li>
            <a
              href="#shows"
              className="transition hover:text-[#C8A96A]"
            >
              Espectáculos
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="transition hover:text-[#C8A96A]"
            >
              Contacto
            </a>
          </li>

        </ul>

        {/* Botón */}

        <a
          href="#contact"
          className="hidden rounded-lg border border-[#C8A96A] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#C8A96A] transition hover:bg-[#C8A96A] hover:text-[#111111] lg:inline-flex"
        >
          Inscríbete
        </a>

      </nav>
    </header>
  );
}