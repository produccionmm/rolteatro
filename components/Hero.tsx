"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden text-white"
    >
      {/* Fondo */}

      <Image
        src="/images/Fondo.jpeg"
        alt="Rolteatro"
        fill
        priority
        className="object-cover"
      />

      {/* Oscurecer imagen */}

      <div className="absolute inset-0 bg-black/65" />

      {/* Degradado */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-[#090909]" />

      {/* Luces */}

      <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#8B1E1E]/20 blur-[180px]" />

      <div className="absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-[#C8A96A]/10 blur-[170px]" />

      {/* Contenido */}

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-6">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="max-w-3xl"
  >
    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.5em] text-[#C8A96A]">
      Escuela y Compañía de Teatro
    </p>

    <h1 className="text-6xl font-black leading-[1.05] md:text-7xl">
      ¿Siempre has querido
      <span className="block text-[#C8A96A]">
        hacer teatro?
      </span>
    </h1>

    <p className="mt-10 text-xl leading-9 text-gray-300">
      ¿Buscas un espacio donde desarrollar tu creatividad, ganar confianza y
      vivir la emoción del escenario?
      
      <br />
      <br />

      En <span className="font-semibold text-white">ROLTEATRO</span> te
      ofrecemos mucho más que clases de interpretación: te invitamos a formar
      parte de una auténtica experiencia teatral.
    </p>

    <div className="mt-14 flex flex-wrap gap-6">
      <a
        href="#courses"
        className="rounded-xl bg-[#8B1E1E] px-10 py-5 text-lg font-bold transition duration-300 hover:scale-105 hover:bg-[#701818]"
      >
        VER CURSOS
      </a>

      <a
        href="#contact"
        className="rounded-xl border border-[#C8A96A] px-10 py-5 text-lg font-bold text-[#C8A96A] transition duration-300 hover:bg-[#C8A96A] hover:text-black"
      >
        CONTACTAR
      </a>
    </div>
  </motion.div>
      </div>

        
      {/* Flecha */}

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-4xl text-[#C8A96A]"
      >
        ↓
      </motion.div>

    </section>
  );
}