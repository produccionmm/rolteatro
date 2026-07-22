"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const contents = [
  "Introducción al teatro.",
  "Expresión corporal.",
  "Improvisación.",
  "Voz y dicción.",
  "Confianza escénica.",
  "Construcción de personajes.",
  "Análisis de textos.",
  "Técnicas interpretativas.",
  "Teatro contemporáneo.",
  "Montaje de obras.",
  "Actuación ante público.",
];

export default function Courses() {
  return (
    <section
      id="courses"
      className="relative overflow-hidden bg-[#080808] py-28 text-white md:py-36"
    >
      <div className="pointer-events-none absolute left-[-180px] top-1/3 h-[450px] w-[450px] rounded-full bg-[#8B1E1E]/10 blur-[150px]" />

      <div className="pointer-events-none absolute right-[-180px] bottom-0 h-[450px] w-[450px] rounded-full bg-[#C8A96A]/10 blur-[150px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
        {/* Encabezado */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.55em] text-[#C8A96A]">
            Formación
          </p>

          <h2 className="mt-6 text-5xl font-black leading-tight md:text-6xl">
            Nuestros cursos
          </h2>

          <div className="mx-auto mt-8 h-[2px] w-24 bg-[#C8A96A]" />
        </motion.div>

        {/* Curso */}

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-20 grid max-w-5xl overflow-hidden rounded-3xl border border-[#C8A96A]/30 bg-[#151515] shadow-[0_30px_80px_rgba(0,0,0,0.55)] lg:grid-cols-[0.9fr_1.1fr]"
        >
          {/* Imagen */}

          <div className="relative h-[380px] overflow-hidden lg:h-auto lg:min-h-[580px]">
            <Image
              src="/images/Adultos.jpeg"
              alt="Curso de teatro para adultos"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-[center_38%]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#151515]/20" />
          </div>

          {/* Texto */}

          <div className="flex flex-col items-center justify-center px-8 py-14 text-center sm:px-12 lg:px-14">
            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#C8A96A]">
              Curso regular
            </p>

            <h3 className="mt-6 text-4xl font-black leading-tight md:text-5xl">
              Teatro para adultos
            </h3>

            <div className="mx-auto mt-7 h-[2px] w-20 bg-[#C8A96A]" />

            <ul className="mt-9 grid w-full max-w-xl gap-x-8 gap-y-4 text-base leading-7 text-gray-300 sm:grid-cols-2">
              {contents.map((item) => (
                <li
                  key={item}
                  className="flex items-start justify-center gap-3 text-center"
                >
                  <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8A96A]" />

                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-11 inline-flex items-center justify-center rounded-xl bg-[#8B1E1E] px-9 py-4 text-center text-sm font-bold uppercase tracking-[0.1em] transition duration-300 hover:-translate-y-1 hover:bg-[#6E1717] hover:shadow-[0_0_30px_rgba(139,30,30,0.45)]"
            >
              Solicitar información
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  );
}