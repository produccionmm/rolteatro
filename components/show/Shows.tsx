"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { categories, shows, upcomingShows } from "@/components/show/data";
import type { GalleryImage, Show } from "@/components/show/types";

export default function Shows() {
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [upcomingOpen, setUpcomingOpen] = useState(false);
  const [selectedShow, setSelectedShow] = useState<Show | null>(null);
  const [activeTab, setActiveTab] = useState<"info" | "gallery">("info");
  const [notice, setNotice] = useState<string | null>(null);
  const [expandedImage, setExpandedImage] =
    useState<GalleryImage | null>(null);

  function openCatalog() {
    setCatalogOpen(true);
    setUpcomingOpen(false);
    setNotice(null);
  }

  function openUpcoming() {
    setUpcomingOpen(true);
    setCatalogOpen(false);
    setNotice(null);
  }

  function closeAllCatalogs() {
    setCatalogOpen(false);
    setUpcomingOpen(false);
    setSelectedShow(null);
    setExpandedImage(null);
    setNotice(null);
  }

  function openShow(show: Show, tab: "info" | "gallery" = "info") {
    setSelectedShow(show);
    setActiveTab(tab);
    setExpandedImage(null);
  }

  function closeShow() {
    setSelectedShow(null);
    setExpandedImage(null);
  }

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      if (expandedImage) {
        setExpandedImage(null);
        return;
      }

      if (selectedShow) {
        closeShow();
        return;
      }

      if (catalogOpen || upcomingOpen) {
        closeAllCatalogs();
      }
    }

    const modalOpen =
      catalogOpen ||
      upcomingOpen ||
      selectedShow !== null ||
      expandedImage !== null;

    if (modalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [catalogOpen, upcomingOpen, selectedShow, expandedImage]);

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

            <h2 className="mt-4 section-title-light">Espectáculos</h2>

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
                {category.image ? (
                  <div className="relative h-[250px] overflow-hidden border-b border-[#C8A96A]/15 sm:h-[290px]">
                    <Image
                      src={category.image}
                      alt={`Imagen de ${category.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
                  </div>
                ) : (
                  <div className="flex h-[250px] items-center justify-center border-b border-[#C8A96A]/15 bg-gradient-to-br from-[#262626] to-[#111111] sm:h-[290px]">
                    <div className="text-center">
                      <div className="mx-auto mb-5 h-px w-16 bg-[#C8A96A]" />

                      <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
                        {category.title}
                      </p>
                    </div>
                  </div>
                )}

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
                      if (category.action === "catalog") {
                        openCatalog();
                        return;
                      }

                      if (category.action === "upcoming") {
                        openUpcoming();
                        return;
                      }

                      setNotice(category.title);
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
          <CatalogModal
            title="Montajes"
            description="Selecciona una obra para consultar el cartel, la información y las fotografías disponibles."
            shows={shows}
            onClose={closeAllCatalogs}
            onOpenInfo={(show) => openShow(show, "info")}
            onOpenGallery={(show) => openShow(show, "gallery")}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {upcomingOpen && !selectedShow && (
          <CatalogModal
            title="Próximos montajes"
            description="Consulta la próxima producción de ROLTEATRO."
            shows={upcomingShows}
            onClose={closeAllCatalogs}
            onOpenInfo={(show) => openShow(show, "info")}
            onOpenGallery={(show) => openShow(show, "gallery")}
          />
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
                aria-label="Volver"
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
                          key={`${selectedShow.title}-${index}`}
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
                      <button
                        type="button"
                        key={image.src}
                        onClick={() => setExpandedImage(image)}
                        className="relative min-h-[400px] overflow-hidden rounded-[18px] border border-[#C8A96A]/20 bg-black transition hover:border-[#C8A96A]/60 sm:min-h-[540px]"
                        aria-label={`Ampliar ${image.alt}`}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-contain p-3 transition duration-500 hover:scale-[1.02] sm:p-5"
                        />
                      </button>
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
                  Volver
                </button>

                <button
                  type="button"
                  onClick={closeAllCatalogs}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 px-7 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:border-[#C83B3B] hover:text-[#C83B3B]"
                >
                  Cerrar todo
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {expandedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setExpandedImage(null);
              }
            }}
            className="fixed inset-0 z-[130] flex items-center justify-center bg-black/95 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={expandedImage.alt}
          >
            <button
              type="button"
              onClick={() => setExpandedImage(null)}
              className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-black text-3xl text-white transition hover:border-[#C8A96A] hover:text-[#C8A96A]"
              aria-label="Cerrar imagen ampliada"
            >
              ×
            </button>

            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="relative h-[88vh] w-full max-w-6xl"
            >
              <Image
                src={expandedImage.src}
                alt={expandedImage.alt}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

type CatalogModalProps = {
  title: string;
  description: string;
  shows: Show[];
  onClose: () => void;
  onOpenInfo: (show: Show) => void;
  onOpenGallery: (show: Show) => void;
};

function CatalogModal({
  title,
  description,
  shows,
  onClose,
  onOpenInfo,
  onOpenGallery,
}: CatalogModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-md sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        className="relative max-h-[94vh] w-full max-w-7xl overflow-y-auto rounded-[22px] border border-[#C8A96A]/35 bg-[#101010] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.8)] sm:p-8 lg:p-10"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black text-2xl text-white transition hover:border-[#C8A96A] hover:text-[#C8A96A]"
          aria-label={`Cerrar ${title}`}
        >
          ×
        </button>

        <div className="mx-auto mb-10 max-w-3xl pr-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#C8A96A]">
            Rolteatro
          </p>

          <h3 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
            {title}
          </h3>

          <div className="gold-line" />

          <p className="leading-7 text-gray-300 sm:text-lg">{description}</p>
        </div>

        <div
          className={`grid gap-7 ${
            shows.length === 1
              ? "mx-auto max-w-md grid-cols-1"
              : "md:grid-cols-2 xl:grid-cols-4"
          }`}
        >
          {shows.map((show) => (
            <article
              key={show.title}
              className="flex flex-col overflow-hidden rounded-[20px] border border-[#C8A96A]/20 bg-[#171717]"
            >
              <button
                type="button"
                onClick={() => onOpenInfo(show)}
                className="relative h-[320px] w-full overflow-hidden bg-black sm:h-[380px]"
              >
                <Image
                  src={show.poster}
                  alt={show.posterAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
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

                <p className="mt-2 text-[#C8A96A]">{show.author}</p>

                <p className="mt-5 flex-1 leading-7 text-gray-300">
                  {show.summary}
                </p>

                <button
                  type="button"
                  onClick={() => onOpenGallery(show)}
                  className="mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#8B1E1E] px-6 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#6D1515]"
                >
                  Imágenes
                </button>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}