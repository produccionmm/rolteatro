
"use client";

import { motion } from "framer-motion";

const opiniones = [
  {
    nombre: "Espectador/a",
    tipo: "Compañía",
    estrellas: 5,
    texto:
      "Una experiencia teatral maravillosa. Una compañía que transmite emoción y pasión por el teatro.",
  },
  {
    nombre: "Alumno/a",
    tipo: "Escuela",
    estrellas: 5,
    texto:
      "Un espacio donde aprender, experimentar y descubrir todo lo que el teatro puede ofrecer.",
  },
  {
    nombre: "Espectador/a",
    tipo: "Compañía",
    estrellas: 5,
    texto:
      "Interpretaciones llenas de verdad y espectáculos que consiguen emocionar al público.",
  },
];

export default function Opiniones() {
  return (
    <section
      id="opiniones"
      className="relative overflow-hidden bg-[#080808] py-28 text-white md:py-36"
    >
      <div className="pointer-events-none absolute left-[-150px] top-1/3 h-[400px] w-[400px] rounded-full bg-[#8B1E1E]/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-[-150px] bottom-0 h-[400px] w-[400px] rounded-full bg-[#C8A96A]/10 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">

        {/* ENCABEZADO */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.55em] text-[#C8A96A]">
            Opiniones
          </p>

          <h2 className="mt-6 text-5xl font-black leading-tight md:text-6xl">
            Lo que dicen de nosotros
          </h2>

          <div className="mx-auto mt-8 h-[2px] w-24 bg-[#C8A96A]" />

          <p className="mt-8 text-lg leading-8 text-gray-300">
            La mejor recompensa es compartir la emoción del teatro
            con quienes lo viven desde el escenario y desde el patio
            de butacas.
          </p>
        </motion.div>

        {/* TARJETAS */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {opiniones.map((opinion, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col rounded-3xl border border-[#C8A96A]/25 bg-[#151515] p-9 shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-2 hover:border-[#C8A96A]/60"
            >
              <div className="text-2xl tracking-[0.15em] text-[#C8A96A]">
                {"★".repeat(opinion.estrellas)}
              </div>

              <p className="mt-7 flex-1 text-lg leading-8 text-gray-300">
                «{opinion.texto}»
              </p>

              <div className="mt-9 border-t border-[#C8A96A]/20 pt-6">
                <p className="font-bold text-white">
                  {opinion.nombre}
                </p>

                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[#C8A96A]">
                  {opinion.tipo}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

