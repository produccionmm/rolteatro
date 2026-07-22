"use client";

import { motion } from "framer-motion";

const shows = [
  {
    title: "Próximo estreno",
    text: "Muy pronto anunciaremos nuestra próxima producción teatral.",
  },
  {
    title: "Temporada 2026",
    text: "Nuevos montajes, representaciones y colaboraciones durante toda la temporada.",
  },
  {
    title: "Eventos especiales",
    text: "Participación en muestras, festivales y actividades culturales.",
  },
];

export default function Shows() {
  return (
    <section
      id="shows"
      className="bg-gradient-to-b from-[#080808] to-[#111111] py-28"
    >
      <div className="container-section">
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[0.45em] text-[#C8A96A]">
            Escenario
          </p>

          <h2 className="mt-4 section-title-light">
            Próximos espectáculos
          </h2>

          <div className="gold-line" />

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-300">
            Descubre las próximas producciones y acompáñanos en cada
            función.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {shows.map((show, index) => (
            <motion.article
              key={show.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="overflow-hidden rounded-[24px] border border-[#C8A96A]/25 bg-[#151515] shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-2 hover:border-[#C8A96A]/50"
            >
              <div className="flex h-80 items-center justify-center border-b border-[#C8A96A]/15 bg-gradient-to-br from-[#262626] to-[#151515]">
                <span className="text-lg text-gray-400">
                  Cartel del espectáculo
                </span>
              </div>

              <div className="p-8">
                <div className="gold-line !mx-0" />

                <h3 className="text-3xl font-bold text-white">
                  {show.title}
                </h3>

                <p className="mt-6 leading-8 text-gray-300">
                  {show.text}
                </p>

                <a href="#contact" className="btn-primary mt-10">
                  Más información
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}