"use client";

import Image from "next/image";

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Quiénes somos", href: "#who-we-are" },
  { label: "Escuela", href: "#about" },
  { label: "Cursos", href: "#courses" },
  { label: "Espectáculos", href: "#shows" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-[#C8A96A]/20 bg-[#080808]/95 backdrop-blur-xl">
      <nav className="flex h-24 w-full items-center px-6 lg:px-10">
        {/* Logo a la izquierda */}

        <a
          href="#hero"
          className="group flex shrink-0 items-center gap-4"
        >
          <div className="relative h-14 w-14 overflow-hidden rounded-full border border-[#C8A96A]/40">
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
            <h1 className="text-[31px] font-extrabold leading-none tracking-wide">
              <span className="text-white transition-colors duration-300 group-hover:text-[#C83B3B]">
                ROL
              </span>

              <span className="text-[#C8A96A] transition-colors duration-300 group-hover:text-[#C83B3B]">
                TEATRO
              </span>
            </h1>

            <p className="mt-1 text-[10px] uppercase tracking-[0.38em] text-gray-400">
              Escuela de Teatro
            </p>
          </div>
        </a>

        {/* Menú y botón a la derecha */}

        <div className="ml-auto hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13px] font-bold uppercase tracking-[0.17em] text-gray-200 transition-colors duration-300 hover:text-[#C83B3B]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#C8A96A] px-7 text-[13px] font-bold uppercase tracking-[0.17em] text-white transition-colors duration-300 hover:border-[#C83B3B] hover:text-[#C83B3B]"
          >
            Inscríbete
          </a>
        </div>
      </nav>
    </header>
  );
}