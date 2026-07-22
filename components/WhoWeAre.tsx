"use client";

import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="relative overflow-hidden bg-[#0d0d0d] py-28 text-white md:py-36"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#C8A96A]/5 blur-[170px]" />

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
            Nuestra historia
          </p>

          <h2 className="mt-6 text-5xl font-black md:text-7xl">
            Quiénes somos
          </h2>

          <div className="mx-auto mt-8 h-[2px] w-28 bg-[#C8A96A]" />

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-9 text-gray-300 md:text-xl">
            ROLTEATRO es una asociación cultural y escuela de artes escénicas,
            con un proyecto que nace de la mano de Pedro García en el año 2016
            para la formación, creación y exhibición.
          </p>

          <p className="mx-auto mt-5 max-w-4xl text-lg leading-9 text-gray-300 md:text-xl">
            Ofrecemos un espacio donde cualquier persona puede aprender,
            experimentar y disfrutar de las artes escénicas.
          </p>
        </motion.div>

        {/* Tarjetas */}

        <div className="mx-auto mt-20 grid max-w-6xl gap-10 lg:grid-cols-2">
          {/* Director */}

          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-[#C8A96A]/25 bg-[#151515] p-8 text-center shadow-[0_25px_70px_rgba(0,0,0,0.45)] md:p-11"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#C8A96A]">
              Director de Rolteatro
            </p>

            <h3 className="mt-5 text-4xl font-black">
              Pedro García
            </h3>

            <p className="mx-auto mt-5 max-w-xl text-lg font-semibold leading-8 text-white">
              Director de Escuela · Actor profesional · Profesor de
              Interpretación
            </p>

            <div className="mx-auto mt-8 h-[2px] w-20 bg-[#C8A96A]" />

            <h4 className="mt-9 text-2xl font-bold text-[#C8A96A]">
              Perfil profesional
            </h4>

            <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-300">
              Director y actor teatral, docente especializado en interpretación,
              dirección escénica y formación de actores. Su trayectoria combina
              la creación artística con el desarrollo de proyectos dirigidos a
              alumnos en proceso de formación.
            </p>

            <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-300">
              Como director de escuela teatral, impulsa una metodología basada
              en el dominio de las técnicas interpretativas, fomentando un
              teatro comprometido con la creatividad y la excelencia artística.
            </p>
          </motion.article>

          {/* Experiencia */}

          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl border border-[#C8A96A]/25 bg-[#151515] p-8 text-center shadow-[0_25px_70px_rgba(0,0,0,0.45)] md:p-11"
          >
            <h3 className="text-4xl font-black">
              Experiencia
            </h3>

            <div className="mx-auto mt-7 h-[2px] w-20 bg-[#C8A96A]" />

            <h4 className="mt-9 text-xl font-bold text-[#C8A96A]">
              Director de Escuela de Teatro
            </h4>

            <ul className="mx-auto mt-5 max-w-xl space-y-3 text-gray-300">
              <li>• Diseño y coordinación de programas formativos.</li>
              <li>• Formación de actores.</li>
              <li>• Dirección de montajes teatrales.</li>
            </ul>

            <h4 className="mt-9 text-xl font-bold text-[#C8A96A]">
              Director escénico de la compañía
            </h4>

            <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-300">
              Dirección de montajes de teatro clásico y contemporáneo,
              desarrollando procesos creativos desde la dramaturgia hasta la
              puesta en escena, con especial atención al trabajo actoral.
            </p>

            <h4 className="mt-9 text-xl font-bold text-[#C8A96A]">
              Trabajos de dirección y montaje
            </h4>

            <ul className="mx-auto mt-5 max-w-xl space-y-3 text-gray-300">
              <li>• Lorca 20023</li>
              <li>• Don Juan Tenorio 2025</li>
              <li>• Actúa 2026</li>
            </ul>
          </motion.article>
        </div>

        {/* Filosofía */}

        <motion.blockquote
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 max-w-5xl rounded-3xl border border-[#C8A96A]/30 bg-gradient-to-br from-[#181818] to-[#101010] px-8 py-12 text-center shadow-[0_25px_70px_rgba(0,0,0,0.45)] md:px-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#C8A96A]">
            Filosofía de trabajo
          </p>

          <p className="mx-auto mt-7 max-w-4xl text-2xl font-semibold italic leading-10 text-gray-200 md:text-3xl">
            “El teatro es una herramienta de transformación personal y
            colectiva. Cada montaje constituye una oportunidad para descubrir
            nuevas formas de comunicar, emocionar y comprender al ser humano.”
          </p>

          <p className="mt-7 font-bold text-[#C8A96A]">
            Pedro García
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}