"use client";

import { motion } from "framer-motion";

const productions = [
  {
    title: "El Canto del Cisne",
    year: "2019",
  },
  {
    title: "Petición de Mano & El Oso",
    year: "2020",
  },
  {
    title: "Bécquer",
    year: "2022",
  },
  {
    title: "Lorca",
    year: "2024",
  },
  {
    title: "Don Juan Tenorio",
    year: "2023, 2025, 2026",
  },
  {
    title: "Actúa",
    year: "2026",
  },
];

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="relative overflow-hidden bg-gradient-to-b from-[#080808] via-[#111111] to-[#090909] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Luces de fondo */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#8B1E1E]/15 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#C8A96A]/10 blur-[140px]" />

      <div className="container-section relative z-10">
        {/* CABECERA */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#C8A96A]">
            Nuestra historia
          </p>

          <h2 className="mt-4 section-title-light">
            Quiénes somos
          </h2>

          <div className="gold-line" />

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-300">
            ROLTEATRO es una compañía y escuela de artes escénicas, con un
            proyecto que nace de la mano de Pedro García en el año 2016 para
            la formación, creación y exhibición, donde se ofrece un espacio
            donde cualquier persona puede aprender, experimentar y disfrutar
            de las artes escénicas.
          </p>
        </motion.div>

        {/* DIRECCIÓN + PERFIL PROFESIONAL */}

        <div className="grid gap-8 lg:grid-cols-2">
          {/* DIRECCIÓN */}

          <motion.article
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="rounded-[24px] border border-[#C8A96A]/20 bg-gradient-to-br from-[#181818] to-[#101010] p-7 shadow-2xl shadow-black/30 sm:p-10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C8A96A]">
              Director de ROLTEATRO
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Pedro García
            </h3>

            <div className="my-6 h-[2px] w-16 bg-[#C8A96A]" />

            <p className="text-lg font-semibold leading-8 text-white">
              Director de Escuela · Actor profesional · Profesor de
              Interpretación
            </p>

            <div className="mt-9 rounded-2xl border border-white/10 bg-black/25 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C8A96A]">
                Perfil profesional
              </p>

              <div className="mt-5 space-y-5 leading-8 text-gray-300">
                <p>
                  Director y actor teatral, docente especializado en
                  interpretación, dirección escénica y formación de actores.
                  Su trayectoria combina la creación artística desarrollando
                  proyectos dirigidos a alumnos en proceso de formación.
                </p>

                <p>
                  Como director de escuela teatral, impulsa una metodología
                  basada en el dominio de las técnicas interpretativas,
                  fomentando un teatro comprometido con la creatividad y la
                  excelencia artística.
                </p>
              </div>
            </div>
          </motion.article>

          {/* COMPAÑÍA Y ESCUELA */}

          <motion.article
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[24px] border border-[#C8A96A]/20 bg-[#151515] p-7 shadow-2xl shadow-black/30 sm:p-10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C8A96A]">
              Rolteatro
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Compañía y escuela
            </h3>

            <div className="my-6 h-[2px] w-16 bg-[#C8A96A]" />

            <div className="space-y-5 text-base leading-8 text-gray-300">
              <p>
                ROLTEATRO desarrolla su actividad dentro de las artes
                escénicas, combinando la creación teatral con la formación de
                nuevos intérpretes.
              </p>

              <p>
                Como compañía, trabaja en la producción, dirección y
                representación de diferentes montajes teatrales, acercando al
                público obras clásicas y propuestas escénicas propias.
              </p>

              <p>
                Como escuela, ofrece formación actoral para adultos mediante
                cursos, talleres y entrenamiento escénico orientados al
                desarrollo de la interpretación, la voz, el cuerpo y la
                presencia sobre el escenario.
              </p>
            </div>
          </motion.article>
        </div>

        {/* EXPERIENCIA */}

        <motion.article
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mt-8 rounded-[24px] border border-[#C8A96A]/20 bg-[#151515] p-7 shadow-2xl shadow-black/30 sm:p-10"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C8A96A]">
            Experiencia
          </p>

          <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Dirección y formación teatral
          </h3>

          <div className="my-6 h-[2px] w-16 bg-[#C8A96A]" />

          <div className="grid gap-8 lg:grid-cols-2">
            {/* DIRECTOR DE ESCUELA */}

            <div className="rounded-2xl border border-white/10 bg-black/25 p-6">
              <h4 className="text-xl font-bold text-white">
                Director de Escuela de Teatro
              </h4>

              <ul className="mt-5 space-y-4 leading-7 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-[#C8A96A]">•</span>
                  <span>Diseño y coordinación de programas formativos.</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-[#C8A96A]">•</span>
                  <span>Formación de actores.</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-[#C8A96A]">•</span>
                  <span>Dirección de montajes teatrales.</span>
                </li>
              </ul>
            </div>

            {/* DIRECTOR ESCÉNICO */}

            <div className="rounded-2xl border border-white/10 bg-black/25 p-6">
              <h4 className="text-xl font-bold text-white">
                Director Escénico de la compañía
              </h4>

              <p className="mt-5 leading-8 text-gray-300">
                Dirección de montajes de teatro clásico y contemporáneo,
                desarrollando procesos creativos desde la dramaturgia hasta
                la puesta en escena, con especial atención al trabajo
                actoral.
              </p>
            </div>
          </div>
        </motion.article>

        {/* TRAYECTORIA */}

        <motion.article
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mt-8 rounded-[24px] border border-[#C8A96A]/20 bg-gradient-to-br from-[#181818] to-[#101010] p-7 shadow-2xl shadow-black/30 sm:p-10"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C8A96A]">
            Trayectoria
          </p>

          <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Trabajos de dirección y montaje
          </h3>

          <div className="my-6 h-[2px] w-16 bg-[#C8A96A]" />

          <div className="grid gap-4 md:grid-cols-2">
            {productions.map((production, index) => (
              <motion.div
                key={`${production.title}-${production.year}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                }}
                className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-black/25 p-5 transition duration-300 hover:border-[#C8A96A]/45 sm:flex-row sm:items-center sm:justify-between"
              >
                <p className="font-semibold text-white">
                  {production.title}
                </p>

                <span className="text-sm font-bold tracking-[0.12em] text-[#C8A96A]">
                  {production.year}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.article>

        {/* FILOSOFÍA */}

        <motion.article
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-8 max-w-5xl rounded-[24px] border border-[#C8A96A]/30 bg-gradient-to-r from-[#171717] via-[#111111] to-[#171717] p-8 text-center shadow-2xl shadow-black/30 sm:p-12"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C8A96A]">
            Filosofía de trabajo
          </p>

          <div className="gold-line" />

          <blockquote className="mx-auto max-w-4xl text-xl font-medium italic leading-9 text-gray-200 sm:text-2xl sm:leading-10">
            “El teatro es una herramienta de transformación personal y
            colectiva. Cada montaje constituye una oportunidad para descubrir
            nuevas formas de comunicar, emocionar y comprender al ser humano.”
          </blockquote>
        </motion.article>
      </div>
    </section>
  );
}