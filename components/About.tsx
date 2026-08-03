"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#111111] to-[#080808] py-28"
    >
      <div className="container-section">
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[0.45em] text-[#C8A96A]">
            Nuestra esencia
          </p>

          <h2 className="mt-4 section-title-light">
            Vive el teatro desde dentro
          </h2>

          <div className="gold-line" />
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* ESCUELA */}

          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group overflow-hidden rounded-[24px] border border-[#C8A96A]/25 bg-[#151515] shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-2 hover:border-[#C8A96A]/50"
          >
            <div className="relative h-72 overflow-hidden border-b border-[#C8A96A]/15">
              <Image
                src="/images/ImagenEscuela.jpg"
                alt="Escuela Rolteatro"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </div>

            <div className="p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A96A]">
                Escuela
              </p>

              <div className="gold-line !mx-0" />

              <h3 className="text-3xl font-bold text-white">
                Formación actoral para adultos
              </h3>

              <p className="mt-6 leading-8 text-gray-300">
                Cursos regulares, talleres intensivos y entrenamiento
                escénico con profesionales en activo.
              </p>

              <a
                href="#courses"
                className="btn-primary mt-10"
              >
                Conocer los cursos
              </a>
            </div>
          </motion.article>

          {/* COMPAÑÍA */}

          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="group overflow-hidden rounded-[24px] border border-[#C8A96A]/25 bg-[#151515] shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-2 hover:border-[#C8A96A]/50"
          >
            <div className="relative h-72 overflow-hidden border-b border-[#C8A96A]/15">
              <Image
                src="/images/ImagenCompania.jpg"
                alt="Compañía Rolteatro"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </div>

            <div className="p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A96A]">
                Compañía
              </p>

              <div className="gold-line !mx-0" />

              <h3 className="text-3xl font-bold text-white">
                Teatro que emociona
              </h3>

              <p className="mt-6 leading-8 text-gray-300">
                Creamos y llevamos a escena producciones propias,
                acercando el teatro al público con propuestas
                originales y de calidad.
              </p>

              <a
                href="#shows"
                className="btn-primary mt-10"
              >
                Ver espectáculos
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}