"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-red-900/20 bg-black/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="Rolteatro"
            width={55}
            height={55}
            className="rounded-full"
            priority
          />

          <div>
            <h1 className="text-2xl font-bold text-white">
              <span className="text-red-600">ROL</span>TEATRO
            </h1>

            <p className="text-xs text-gray-400">
              Escuela y Compañía de Teatro
            </p>
          </div>
        </div>

        <ul className="hidden gap-8 font-medium text-gray-200 md:flex">
          <li className="cursor-pointer transition hover:text-red-500">Inicio</li>
          <li className="cursor-pointer transition hover:text-red-500">Escuela</li>
          <li className="cursor-pointer transition hover:text-red-500">Cursos</li>
          <li className="cursor-pointer transition hover:text-red-500">Espectáculos</li>
          <li className="cursor-pointer transition hover:text-red-500">Contacto</li>
        </ul>
      </nav>
    </header>
  );
}