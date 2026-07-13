"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090909] px-6 pt-24 text-white">

      {/* Fondo */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-[-250px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-red-700/20 blur-[180px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#090909_80%)]" />
      </div>

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center"
      >
        <Image
          src="/images/logo.png"
          alt="Rolteatro"
          width={180}
          height={180}
          priority
          className="drop-shadow-[0_0_40px_rgba(220,38,38,.45)]"
        />

        <p className="mt-8 uppercase tracking-[0.45em] text-red-500">
          Escuela · Compañía · Formación
        </p>

        <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
          DONDE CADA
          <br />
          <span className="text-red-600">HISTORIA COBRA VIDA</span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
          Descubre un espacio donde niños, jóvenes y adultos desarrollan su
          creatividad, confianza y pasión por el teatro de la mano de
          profesionales.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-xl bg-red-700 px-8 py-4 text-lg font-bold transition duration-300 hover:scale-105 hover:bg-red-800">
            Ver cursos
          </button>

          <button className="rounded-xl border border-white/30 px-8 py-4 text-lg font-bold transition duration-300 hover:border-red-600 hover:bg-white hover:text-black">
            Contactar
          </button>
        </div>

        <div className="mt-20 animate-bounce text-3xl text-red-500">
          ↓
        </div>
      </motion.div>
    </section>
  );
}