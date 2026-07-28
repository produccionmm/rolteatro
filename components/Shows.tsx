"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Show = {
  title: string;
  author: string;
  year: string;
  poster: string;
  posterAlt: string;
  summary: string;
  synopsis: string[];
  gallery: {
    src: string;
    alt: string;
  }[];
};

type Category = {
  title: string;
  text: string;
  button: string;
};

const categories: Category[] = [
  {
    title: "Montajes",
    text: "Conoce algunas de las producciones que ROLTEATRO ha llevado a escena a lo largo de su trayectoria.",
    button: "Más información",
  },
  {
    title: "En cartel",
    text: "Consulta las representaciones y actividades teatrales que se encuentran actualmente en programación.",
    button: "Más información",
  },
  {
    title: "Próximos montajes",
    text: "Descubre los nuevos proyectos, producciones y propuestas escénicas de ROLTEATRO.",
    button: "Más información",
  },
];

const shows: Show[] = [
  {
    title: "Petición de mano & El oso",
    author: "Antón Chéjov",
    year: "2019",
    poster: "/images/Peticion.jpg",
    posterAlt: "Cartel de Petición de mano y El oso",
    summary:
      "Humor, ironía, ternura y emoción en dos de las comedias más emblemáticas de Antón Chéjov.",
    synopsis: [
      "Representar Petición de mano y El oso, dos de las comedias más emblemáticas de Antón Chéjov, supone un apasionante reto para ROLTEATRO. Desde el respeto y la humildad, nos acercamos a un autor que, bajo una aparente sencillez, retrata con brillantez las contradicciones y emociones del ser humano.",

      "Ambas obras comparten un mismo hilo conductor: el triunfo del amor sobre los intereses materiales. Con humor, ironía y personajes inolvidables, Chéjov nos invita a reflexionar sobre los verdaderos valores de la vida.",

      "En Petición de mano, los nervios, la hipocondría y los constantes enfrentamientos no impedirán que Lomov y Natalia encuentren un inesperado camino hacia el matrimonio.",

      "En El oso, una disputa por una deuda termina transformándose, de forma tan absurda como divertida, en una inesperada historia de amor.",

      "Humor, ternura y emoción se unen en estas dos pequeñas joyas teatrales que siguen demostrando que, por encima de todo, el amor es capaz de cambiarlo todo.",

      "Esperamos que disfruten de esta representación tanto como nosotros hemos disfrutado llevándola a escena.",
    ],
    gallery: [
      {
        src: "/images/Peticion.jpg",
        alt: "Cartel de Petición de mano y El oso",
      },
    ],
  },
  {
    title: "El canto del cisne",
    author: "Antón Chéjov",
    year: "2020",
    poster: "/images/CartelCisne.jpg",
    posterAlt: "Cartel de El canto del cisne",
    summary:
      "Montaje de ROLTEATRO basado en una de las piezas teatrales más reconocidas de Antón Chéjov.",
    synopsis: [
      "La información completa y la sinopsis de este montaje se incorporarán próximamente.",
    ],
    gallery: [
      {
        src: "/images/CartelCisne.jpg",
        alt: "Cartel de El canto del cisne",
      },
      {
        src: "/images/Canto1.jpg",
        alt: "Fotografía de El canto del cisne 1",
      },
      {
        src: "/images/Canto2.jpg",
        alt: "Fotografía de El canto del cisne 2",
      },
      {
        src: "/images/Canto3.jpg",
        alt: "Fotografía de El canto del cisne 3",
      },
    ],
  },
  {
    title: "Bécquer",
    author: "Gustavo Adolfo Bécquer",
    year: "2021",
    poster: "/images/CartelBecquer.jpg",
    posterAlt: "Cartel del montaje Bécquer",
    summary:
      "Una propuesta escénica de ROLTEATRO inspirada en el universo literario de Gustavo Adolfo Bécquer.",
    synopsis: [
      "La información completa y la sinopsis de este montaje se incorporarán próximamente.",
    ],
    gallery: [
      {
        src: "/images/CartelBecquer.jpg",
        alt: "Cartel del montaje Bécquer",
      },
      {
        src: "/images/MontajeBecquer.jpg",
        alt: "Collage fotográfico del montaje Bécquer",
      },
      {
        src: "/images/Becquer1.jpg",
        alt: "Fotografía del montaje Bécquer 1",
      },
      {
        src: "/images/Becquer2.jpg",
        alt: "Fotografía del montaje Bécquer 2",
      },
      {
        src: "/images/Becquer3.jpg",
        alt: "Fotografía del montaje Bécquer 3",
      },
    ],
  },
];

export default function Shows() {
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [selectedShow, setSelectedShow] = useState<Show | null>(null);
  const [activeTab, setActiveTab] = useState<"info" | "gallery">("info");
  const [notice, setNotice] = useState<string | null>(null);

  function openCatalog() {
    setCatalogOpen(true);
    setNotice(null);
  }

  function closeCatalog() {
    setCatalogOpen(false);
    setSelectedShow(null);
    setNotice(null);
  }

  function openShow(show: Show) {
    setSelectedShow(show);
    setActiveTab("info");
  }

  function closeShow() {
    setSelectedShow(null);
  }

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;

      if (selectedShow) {
        closeShow();
        return;
      }

      if (catalogOpen) {
        closeCatalog();
      }
    }

    const modalOpen = catalogOpen || selectedShow !== null;

    if (modalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [catalogOpen, selectedShow]);

  return (
    <>
      <section
        id="shows"
        className="bg-gradient-to-b from-[#080808] to-[#111111] py-20 sm:py-24 lg:py-28"
      >
        <div className="container-section">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#C8A96A]">
              Escenario
            </p>

            <h2 className="mt-4 section-title-light">
              Espectáculos
            </h2>

            <div className="gold-line" />

            <p className="mx-auto max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Descubre los montajes, representaciones y próximos proyectos
              teatrales de ROLTEATRO.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category, index) => (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className="flex h-full flex-col overflow-hidden rounded-[22px] border border-[#C8A96A]/25 bg-[#151515] shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-2 hover:border-[#C8A96A]/55"
              >
                <div className="flex h-[260px] items-center justify-center border-b border-[#C8A96A]/15 bg-gradient-to-br from-[#262626] to-[#111111] sm:h-[300px]">
                  <div className="text-center">
                    <div className="mx-auto mb-5 h-px w-16 bg-[#C8A96A]" />

                    <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
                      {category.title}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C8A96A]">
                    Espectáculos
                  </p>

                  <div className="my-5 h-[2px] w-14 bg-[#C8A96A]" />

                  <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                    {category.title}
                  </h3>

                  <p className="mt-5 flex-1 leading-7 text-gray-300">
                    {category.text}
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      if (category.title === "Montajes") {
                        openCatalog();
                      } else {
                        setNotice(category.title);
                      }
                    }}
                    className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#8B1E1E] px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-[#6D1515] sm:w-auto"
                  >
                    {category.button}
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          <AnimatePresence>
            {notice && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="mx-auto mt-10 max-w-2xl rounded-2xl border border-[#C8A96A]/25 bg-[#151515] p-6 text-center"
              >
                <p className="font-bold uppercase tracking-[0.2em] text-[#C8A96A]">
                  {notice}
                </p>

                <p className="mt-4 leading-7 text-gray-300">
                  Próximamente añadiremos la información facilitada por
                  ROLTEATRO para este apartado.
                </p>

                <button
                  type="button"
                  onClick={() => setNotice(null)}
                  className="mt-5 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:text-[#C83B3B]"
                >
                  Cerrar
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {catalogOpen && !selectedShow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeCatalog();
              }
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-md sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Catálogo de montajes"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              className="relative max-h-[94vh] w-full max-w-7xl overflow-y-auto rounded-[22px] border border-[#C8A96A]/35 bg-[#101010] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.8)] sm:p-8 lg:p-10"
            >
              <button
                type="button"
                onClick={closeCatalog}
                className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black text-2xl text-white transition hover:border-[#C8A96A] hover:text-[#C8A96A]"
                aria-label="Cerrar catálogo"
              >
                ×
              </button>

              <div className="mx-auto mb-10 max-w-3xl pr-12 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#C8A96A]">
                  Rolteatro
                </p>

                <h3 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
                  Montajes
                </h3>

                <div className="gold-line" />

                <p className="leading-7 text-gray-300 sm:text-lg">
                  Selecciona una obra para consultar el cartel, la información
                  y las fotografías disponibles.
                </p>
              </div>

              <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                {shows.map((show) => (
                  <article
                    key={show.title}
                    className="flex flex-col overflow-hidden rounded-[20px] border border-[#C8A96A]/20 bg-[#171717]"
                  >
                    <button
                      type="button"
                      onClick={() => openShow(show)}
                      className="relative h-[330px] w-full overflow-hidden bg-black sm:h-[390px]"
                    >
                      <Image
                        src={show.poster}
                        alt={show.posterAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain p-5 transition duration-500 hover:scale-[1.03]"
                      />
                    </button>

                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C8A96A]">
                        {show.year}
                      </p>

                      <h4 className="mt-3 text-2xl font-bold text-white">
                        {show.title}
                      </h4>

                      <p className="mt-2 text-[#C8A96A]">
                        {show.author}
                      </p>

                      <p className="mt-5 flex-1 leading-7 text-gray-300">
                        {show.summary}
                      </p>

                      <button
                        type="button"
                        onClick={() => openShow(show)}
                        className="mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#8B1E1E] px-6 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#6D1515]"
                      >
                        Más información
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedShow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 p-3 backdrop-blur-md sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={`Información de ${selectedShow.title}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              className="relative max-h-[94vh] w-full max-w-6xl overflow-y-auto rounded-[22px] border border-[#C8A96A]/35 bg-[#111111]"
            >
              <button
                type="button"
                onClick={closeShow}
                className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black text-2xl text-white transition hover:border-[#C8A96A] hover:text-[#C8A96A]"
                aria-label="Volver a montajes"
              >
                ×
              </button>

              <div className="border-b border-white/10 px-6 pt-8 sm:px-10 lg:px-12">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C8A96A]">
                  Rolteatro
                </p>

                <h3 className="mt-4 pr-12 text-3xl font-bold text-white sm:text-4xl">
                  {selectedShow.title}
                </h3>

                <p className="mt-3 font-semibold text-[#C8A96A]">
                  {selectedShow.author}
                </p>

                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-gray-400">
                  Montaje teatral · {selectedShow.year}
                </p>

                <div className="mt-8 flex gap-7">
                  <button
                    type="button"
                    onClick={() => setActiveTab("info")}
                    className={`border-b-2 pb-4 text-sm font-bold uppercase tracking-[0.16em] ${
                      activeTab === "info"
                        ? "border-[#C8A96A] text-[#C8A96A]"
                        : "border-transparent text-gray-400"
                    }`}
                  >
                    Información
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("gallery")}
                    className={`border-b-2 pb-4 text-sm font-bold uppercase tracking-[0.16em] ${
                      activeTab === "gallery"
                        ? "border-[#C8A96A] text-[#C8A96A]"
                        : "border-transparent text-gray-400"
                    }`}
                  >
                    Galería
                  </button>
                </div>
              </div>

              {activeTab === "info" && (
                <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                  <div className="relative min-h-[500px] bg-black sm:min-h-[650px] lg:min-h-[760px]">
                    <Image
                      src={selectedShow.poster}
                      alt={selectedShow.posterAlt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-contain p-5 sm:p-8"
                    />
                  </div>

                  <div className="p-6 sm:p-10 lg:p-12">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C8A96A]">
                      Sinopsis
                    </p>

                    <div className="my-6 h-[2px] w-16 bg-[#C8A96A]" />

                    <div className="space-y-5">
                      {selectedShow.synopsis.map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-sm leading-7 text-gray-300 sm:text-base sm:leading-8"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "gallery" && (
                <div className="p-5 sm:p-8 lg:p-10">
                  <div className="grid gap-6 md:grid-cols-2">
                    {selectedShow.gallery.map((image) => (
                      <div
                        key={image.src}
                        className="relative min-h-[420px] overflow-hidden rounded-[18px] border border-[#C8A96A]/20 bg-black sm:min-h-[560px]"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-contain p-3 sm:p-5"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap justify-center gap-4 border-t border-white/10 p-6">
                <button
                  type="button"
                  onClick={closeShow}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#C8A96A] px-7 text-sm font-bold uppercase tracking-[0.15em] text-[#C8A96A] transition hover:bg-[#C8A96A] hover:text-black"
                >
                  Volver a montajes
                </button>

                <button
                  type="button"
                  onClick={closeCatalog}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 px-7 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:border-[#C83B3B] hover:text-[#C83B3B]"
                >
                  Cerrar todo
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}