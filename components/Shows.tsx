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
    <section id="shows" className="bg-light py-28">

      <div className="container-section">

        <div className="mb-16 text-center">

          <p className="uppercase tracking-[0.45em] text-[#C8A96A] font-semibold">
            ESCENARIO
          </p>

          <h2 className="mt-4 section-title">
            Próximos espectáculos
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Descubre las próximas producciones y acompáñanos en cada función.
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
                duration: .6,
                delay: index * .15,
              }}
              className="editorial-card"
            >

              <div className="flex h-80 items-center justify-center bg-[#d9d4ca]">

                <span className="text-gray-600 text-lg">
                  Cartel del espectáculo
                </span>

              </div>

              <div className="p-8">

                <div className="gold-line"></div>

                <h3 className="text-3xl font-bold text-[#2b2b2b]">
                  {show.title}
                </h3>

                <p className="mt-6 leading-8 text-gray-600">
                  {show.text}
                </p>

                <button className="btn-primary mt-10">
                  MÁS INFORMACIÓN
                </button>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}