"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const courses = [
  {
    title: "INTERPRETACIÓN PARA ADULTOS",
    description:
      "Nivel Iniciación y Avanzado.\n1 vez por semana.",
    image: "/images/Adultos.jpeg",
  },
  {
    title: "ENTRENAMIENTO ACTORAL",
    description:
      "Técnica, escena y cámara.\n1 vez por semana.",
    image: "/images/Fondo.jpeg",
  },
  {
    title: "VOZ Y EXPRESIÓN CORPORAL",
    description:
      "Trabajo de voz, cuerpo y presencia escénica.",
    image: "/images/Fondo.jpeg",
  },
];

export default function Courses() {
  return (
    <section
      id="courses"
      className="bg-[#090909] py-32 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">

          <p className="font-semibold uppercase tracking-[0.45em] text-[#C8A96A]">
            FORMACIÓN
          </p>

          <h2 className="mt-5 text-5xl font-black">
            Nuestros cursos
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Formación actoral para adultos con profesionales en activo.
            Descubre una experiencia donde desarrollar tu creatividad,
            confianza y presencia escénica.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-3">

          {courses.map((course, index) => (

            <motion.article
              key={course.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="overflow-hidden rounded-3xl border border-[#C8A96A]/20 bg-[#151515] shadow-xl transition duration-300 hover:-translate-y-3 hover:border-[#C8A96A]/70"
            >

              <div className="relative h-72">

                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              </div>

              <div className="p-8">

                <div className="mb-6 h-[2px] w-24 bg-[#C8A96A]" />

                <h3 className="text-2xl font-bold leading-tight">
                  {course.title}
                </h3>

                <p className="mt-6 whitespace-pre-line leading-8 text-gray-300">
                  {course.description}
                </p>

                <a
                  href="#contact"
                  className="mt-8 inline-flex rounded-xl bg-[#8B1E1E] px-7 py-4 font-bold transition duration-300 hover:bg-[#6E1717]"
                >
                  SOLICITAR INFORMACIÓN
                </a>

              </div>

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
}