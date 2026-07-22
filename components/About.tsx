"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-light py-28">

      <div className="container-section">

        <div className="mb-16 text-center">

          <p className="uppercase tracking-[0.45em] text-[#C8A96A] font-semibold">
            NUESTRA ESENCIA
          </p>

          <h2 className="mt-4 section-title">
            Vive el teatro desde dentro
          </h2>

        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* ESCUELA */}

          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="editorial-card"
          >

            <div className="h-72 bg-[#ddd] flex items-center justify-center">

              <span className="text-gray-500 text-lg">
                Imagen Escuela
              </span>

            </div>

            <div className="p-10">

              <p className="uppercase tracking-[0.35em] text-[#C8A96A] text-sm font-semibold">
                ESCUELA
              </p>

              <div className="gold-line"></div>

              <h3 className="text-3xl font-bold text-[#2b2b2b]">
                Formación actoral para adultos
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                Cursos regulares, talleres intensivos y entrenamiento
                escénico con profesionales en activo.
              </p>

              <a
                href="#courses"
                className="btn-primary mt-10"
              >
                CONOCER LOS CURSOS
              </a>

            </div>

          </motion.article>

          {/* COMPAÑÍA */}

          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .9 }}
            className="editorial-card"
          >

            <div className="h-72 bg-[#ddd] flex items-center justify-center">

              <span className="text-gray-500 text-lg">
                Imagen Compañía
              </span>

            </div>

            <div className="p-10">

              <p className="uppercase tracking-[0.35em] text-[#C8A96A] text-sm font-semibold">
                COMPAÑÍA
              </p>

              <div className="gold-line"></div>

              <h3 className="text-3xl font-bold text-[#2b2b2b]">
                Teatro que emociona
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                Creamos y llevamos a escena producciones propias,
                acercando el teatro al público con propuestas
                originales y de calidad.
              </p>

              <a
                href="#shows"
                className="btn-primary mt-10"
              >
                VER ESPECTÁCULOS
              </a>

            </div>

          </motion.article>

        </div>

      </div>

    </section>
  );
}