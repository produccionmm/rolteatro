"use client";

import { motion } from "framer-motion";

const courses = [
  {
    title: "INTERPRETACIÓN PARA ADULTOS",
    description: "Nivel Iniciación y Avanzado.\n1 vez por semana.",
  },
  {
    title: "ENTRENAMIENTO ACTORAL",
    description: "Técnica, escena y cámara.\n1 vez por semana.",
  },
  {
    title: "VOZ Y EXPRESIÓN CORPORAL",
    description: "Trabajo de voz, cuerpo y presencia escénica.",
  },
];

export default function Courses() {
  return (
    <section
      id="courses"
      className="bg-dark py-28 text-white"
    >
      <div className="container-section">

        <div className="mb-16 text-center">

          <p className="uppercase tracking-[0.45em] text-[#C8A96A] font-semibold">
            FORMACIÓN
          </p>

          <h2 className="mt-4 section-title-light">
            Nuestros cursos
          </h2>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {courses.map((course, index) => (

            <motion.article
              key={course.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="overflow-hidden rounded-2xl border border-[#C8A96A]/30 bg-[#181818] transition hover:-translate-y-2 hover:border-[#C8A96A]"
            >

              {/* Imagen */}

              <div className="flex h-60 items-center justify-center bg-[#262626]">

                <span className="text-lg text-gray-500">
                  Imagen del curso
                </span>

              </div>

              {/* Contenido */}

              <div className="p-8">

                <div className="mb-6 h-[2px] w-20 bg-[#C8A96A]" />

                <h3 className="text-2xl font-bold leading-tight">
                  {course.title}
                </h3>

                <p className="mt-6 whitespace-pre-line leading-8 text-gray-300">
                  {course.description}
                </p>

                <a
                  href="#contact"
                  className="mt-8 inline-flex rounded-lg bg-[#8B1E1E] px-6 py-3 font-semibold transition hover:bg-[#6d1515]"
                >
                  MÁS INFORMACIÓN
                </a>

              </div>

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
}