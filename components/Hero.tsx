"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-[#070707] via-[#15110d] to-[#090909] pt-20 text-white"
    >
      {/* Luces de fondo */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-[-280px] h-[850px] w-[850px] -translate-x-1/2 rounded-full bg-red-700/20 blur-[180px]" />

        <div className="absolute left-[-200px] top-1/3 h-[500px] w-[500px] rounded-full bg-red-800/10 blur-[150px]" />

        <div className="absolute right-[-200px] top-1/2 h-[500px] w-[500px] rounded-full bg-red-800/10 blur-[150px]" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50" />

      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <Image
            src="/images/logo.png"
            alt="Rolteatro"
            width={180}
            height={180}
            priority
            className="mx-auto drop-shadow-[0_0_40px_rgba(220,38,38,.45)]"
          />

          <p className="mt-8 uppercase tracking-[0.45em] text-red-500">
            Formación · Escena · Emoción
          </p>

          <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
            <span className="text-red-600">ROL</span>TEATRO
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Un espacio para descubrir tu voz, desarrollar tu creatividad y
            vivir el teatro desde dentro junto a profesionales en activo.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <a
              href="#about"
              className="rounded bg-red-700 px-8 py-4 font-bold transition duration-300 hover:bg-red-800"
            >
              VER CURSOS
            </a>

            <a
              href="#shows"
              className="rounded border border-white/30 px-8 py-4 font-bold transition duration-300 hover:bg-white hover:text-black"
            >
              PRÓXIMOS ESPECTÁCULOS
            </a>

          </div>

        </motion.div>

      </div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-4xl text-red-500"
      >
        ↓
      </motion.div>

    </section>
  );
}