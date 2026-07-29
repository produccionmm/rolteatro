"use client";

import { motion } from "framer-motion";

const productions = [
  {
    title: "Petición de Mano & El Oso",
    year: "2019",
  },
  {
    title: "El Canto del Cisne",
    year: "2020",
  },
  {
    title: "Bécquer",
    year: "2022",
  },
  {
    title: "Lorca",
    year: "2023",
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
      id="quienes-somos"
      className="relative overflow-hidden bg-[#0b0b0b] py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-[#8B1E1E]/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#C8A96A]/10 blur-[140px]" />

      <div className="container-section relative z-10">
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

          <h2 className="mt-4 section-title-light">Quiénes somos</h2>

          <div className="gold-line" />

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-300">
            ROLTEATRO es una compañía y escuela de artes escénicas.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.article
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="rounded-[24px] border border-[#C8A96A]/20 bg-gradient-to-br from-[#181818] to-[#101010] p-7 shadow-2xl shadow-black/30 sm:p-10"
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
                ROLTEATRO desarrolla su actividad dentro de las artes escénicas,
                combinando la creación teatral con la formación de nuevos
                intérpretes.
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

            <div className="mt-9 rounded-2xl border border-white/10 bg-black/25 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C8A96A]">
                Dirección
              </p>

              <h4 className="mt-3 text-2xl font-bold text-white">
                Pedro García
              </h4>

              <p className="mt-4 leading-7 text-gray-300">
                Actor, director y docente vinculado al mundo teatral, encargado
                de la dirección artística y pedagógica de ROLTEATRO.
              </p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[24px] border border-[#C8A96A]/20 bg-[#151515] p-7 shadow-2xl shadow-black/30 sm:p-10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C8A96A]">
              Trayectoria
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Trabajos de dirección y montaje
            </h3>

            <div className="my-6 h-[2px] w-16 bg-[#C8A96A]" />

            <div className="space-y-4">
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
        </div>
      </div>
    </section>
  );
}