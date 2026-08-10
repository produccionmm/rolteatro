"use client";

import { motion } from "framer-motion";

const productions = [
  "Lapislázuli (de José Luis Alonso de Santos)",
  "Lorca (Espectáculo poético-musical)",
  "El Canto del Cisne, Petición de mano y El oso (de Antón Chéjov)",
  "Don Juan Tenorio (de José Zorrilla)",
  "Bécquer (Espectáculo poético-musical)",
  "Actúa y Actúa 2 (Escenas extraídas de obras emblemáticas de la historia de nuestro Teatro)",
  "Dirige la obra “Las Flores del Rincón” de Fernando de las horas (Estreno próximamente)",
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
            proyecto que nace de la mano de Pedro García en el año 2019 para
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
              director de escena, actor y docente teatral.
            </p>

            <div className="mt-9 rounded-2xl border border-white/10 bg-black/25 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C8A96A]">
                Perfil profesional
              </p>

              <div className="mt-5 space-y-5 leading-8 text-gray-300">
                <p>
                  Pedro García Martínez es un profesional de la escena con más de tres décadas de trayectoria vinculada al teatro. Formado junto a grandes maestros de la interpretación en los Seminarios del Teatro Español y en el Laboratorio de Teatro William Layton, completó una etapa clave de seis años (1990–1996) como actor en el elenco estable del Teatro Español de Madrid, participando en producciones de gran formato bajo la dirección de figuras de referencia como Gustavo Pérez Puig, Cayetano Luca de Tena o Mara Recatero. Compartiendo escenario y trabajando con insignes actores de la escena española como José María Rodero.
                </p>
                <p>
                  En 2019 funda la compañía y escuela Rolteatro, espacio desde el cual desarrolla su labor pedagógica y de dirección escénica. Su trabajo destaca por una búsqueda constante de la verdad orgánica del actor, el rigor en el ritmo de la comedia y la tragedia, y un sello estético propio apoyado en puestas en escena minimalistas, poéticas y de gran impacto visual y espacial.
                </p>
                <blockquote className="border-l-2 border-[#C8A96A] pl-5 italic text-gray-200">
                  “En Rolteatro creemos que la emoción no se fabrica; aparece como consecuencia de una acción verdadera. El teatro empieza escuchando.”
                </blockquote>
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
                Al frente de Rolteatro, ha dirigido y llevado a escena espectáculos de diversa índole y complejidad, abordando tanto la gran dramaturgia clásica como el teatro contemporáneo y la creación poético-musical.
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
                key={production}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="rounded-2xl border border-white/10 bg-black/25 p-5 transition duration-300 hover:border-[#C8A96A]/45"
              >
                <p className="font-semibold leading-7 text-white">{production}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 leading-8 text-gray-300">
            En la actualidad; compagina la dirección de la compañía con la labor docente en la Escuela Rolteatro.
          </p>

          <div className="mt-8 rounded-2xl border border-[#C8A96A]/20 bg-black/25 p-6">
            <h4 className="text-xl font-bold text-[#C8A96A]">Para 2027;</h4>
            <ul className="mt-5 space-y-3 leading-7 text-gray-300">
              <li>• Vecinos” (creación propia) Estreno previsto en junio</li>
              <li>• D. Juan Tenorio (Reposición como todos los años en fecha)</li>
              <li>• Feliz aniversario de Adolfo Marsillach.</li>
              <li>• La extraña pareja de Neil Simon</li>
            </ul>
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
            “En Rolteatro creemos que la emoción no se fabrica; aparece como consecuencia de una acción verdadera. El teatro empieza escuchando.”
          </blockquote>
        </motion.article>
      </div>
    </section>
  );
}