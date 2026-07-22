"use client";

import { FormEvent, useState } from "react";

export default function ContactCTA() {
  const [humanAnswer, setHumanAnswer] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (humanAnswer.trim() !== "24") {
      setError("La respuesta es incorrecta. Comprueba la operación.");
      return;
    }

    setError("");

    const form = new FormData(event.currentTarget);

    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const message = String(form.get("message") || "");

    const subject = encodeURIComponent(
      `Nuevo mensaje desde la web de Rolteatro — ${name}`
    );

    const body = encodeURIComponent(
      `Nombre: ${name}
Correo electrónico: ${email}
Teléfono: ${phone || "No indicado"}

Mensaje:
${message}`
    );

    window.location.href =
      `mailto:rolteatrocompaniadeteatro@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#111111] to-[#070707] py-24 sm:py-28"
    >
      <div className="container-section">
        {/* Cabecera */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.45em] text-[#C8A96A]">
            Inscríbete
          </p>

          <h2 className="mt-4 section-title-light">
            Contacta con nosotros
          </h2>

          <div className="gold-line" />

          <p className="mx-auto max-w-2xl leading-8 text-gray-300">
            Escríbenos para solicitar información sobre nuestros cursos,
            espectáculos, inscripciones o próximos proyectos.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Información de contacto */}

          <article className="rounded-[24px] border border-[#C8A96A]/25 bg-[#151515] p-8 shadow-2xl shadow-black/30 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A96A]">
              Contacto
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              Hablemos de teatro
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              Puedes contactar directamente con nosotros mediante correo,
              teléfono o utilizando el formulario.
            </p>

            <div className="mt-10 space-y-8">
              {/* Correo */}

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C8A96A]/30 bg-[#C8A96A]/10 text-[#C8A96A]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M4 6h16v12H4z" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </div>

                <div>
                  <p className="font-semibold text-white">
                    Correo electrónico
                  </p>

                  <a
                    href="mailto:rolteatrocompaniadeteatro@gmail.com"
                    className="mt-1 block break-all text-sm leading-6 text-gray-300 transition hover:text-[#C8A96A]"
                  >
                    rolteatrocompaniadeteatro@gmail.com
                  </a>
                </div>
              </div>

              {/* Pedro */}

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C8A96A]/30 bg-[#C8A96A]/10 text-[#C8A96A]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M7 3h3l2 5-2 2a16 16 0 0 0 4 4l2-2 5 2v3a4 4 0 0 1-4 4C9.3 21 3 14.7 3 7a4 4 0 0 1 4-4Z" />
                  </svg>
                </div>

                <div>
                  <p className="font-semibold text-white">
                    Pedro García
                  </p>

                  <a
                    href="tel:+34618872671"
                    className="mt-1 block text-gray-300 transition hover:text-[#C8A96A]"
                  >
                    618 87 26 71
                  </a>
                </div>
              </div>

              {/* Juan */}

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C8A96A]/30 bg-[#C8A96A]/10 text-[#C8A96A]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M7 3h3l2 5-2 2a16 16 0 0 0 4 4l2-2 5 2v3a4 4 0 0 1-4 4C9.3 21 3 14.7 3 7a4 4 0 0 1 4-4Z" />
                  </svg>
                </div>

                <div>
                  <p className="font-semibold text-white">
                    Juan A. García Casas
                  </p>

                  <a
                    href="tel:+34696901656"
                    className="mt-1 block text-gray-300 transition hover:text-[#C8A96A]"
                  >
                    696 90 16 56
                  </a>
                </div>
              </div>

              {/* Web */}

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C8A96A]/30 bg-[#C8A96A]/10 text-[#C8A96A]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
                  </svg>
                </div>

                <div>
                  <p className="font-semibold text-white">
                    Página web
                  </p>

                  <a
                    href="https://www.rolteatro.es"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-gray-300 transition hover:text-[#C8A96A]"
                  >
                    www.rolteatro.es
                  </a>
                </div>
              </div>
            </div>

            {/* Redes sociales */}

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A96A]">
                Redes sociales
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/15 px-5 py-2 text-sm text-gray-300">
                  Instagram
                </span>

                <span className="rounded-full border border-white/15 px-5 py-2 text-sm text-gray-300">
                  Facebook
                </span>

                <span className="rounded-full border border-white/15 px-5 py-2 text-sm text-gray-300">
                  YouTube
                </span>
              </div>
            </div>
          </article>

          {/* Formulario */}

          <article className="rounded-[24px] border border-[#C8A96A]/25 bg-[#151515] p-8 shadow-2xl shadow-black/30 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A96A]">
              Formulario
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              Envíanos un mensaje
            </h3>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              {/* Nombre */}

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-200"
                >
                  Nombre *
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Escribe tu nombre"
                  className="w-full rounded-xl border border-white/10 bg-[#0D0D0D] px-5 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#C8A96A] focus:ring-2 focus:ring-[#C8A96A]/20"
                />
              </div>

              {/* Correo */}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-200"
                >
                  Correo electrónico *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="ejemplo@correo.com"
                  className="w-full rounded-xl border border-white/10 bg-[#0D0D0D] px-5 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#C8A96A] focus:ring-2 focus:ring-[#C8A96A]/20"
                />
              </div>

              {/* Teléfono */}

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-gray-200"
                >
                  Número de teléfono
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Tu número de teléfono"
                  className="w-full rounded-xl border border-white/10 bg-[#0D0D0D] px-5 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#C8A96A] focus:ring-2 focus:ring-[#C8A96A]/20"
                />
              </div>

              {/* Mensaje */}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-200"
                >
                  Mensaje *
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Cuéntanos en qué podemos ayudarte"
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#0D0D0D] px-5 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#C8A96A] focus:ring-2 focus:ring-[#C8A96A]/20"
                />
              </div>

              {/* Comprobación humana */}

              <div>
                <label
                  htmlFor="human"
                  className="mb-2 block text-sm font-semibold text-gray-200"
                >
                  Si eres humano, resuelve la operación: 27 − 3 = ?
                </label>

                <input
                  id="human"
                  name="human"
                  type="number"
                  required
                  value={humanAnswer}
                  onChange={(event) => {
                    setHumanAnswer(event.target.value);
                    setError("");
                  }}
                  placeholder="Escribe el resultado"
                  className="w-full rounded-xl border border-white/10 bg-[#0D0D0D] px-5 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#C8A96A] focus:ring-2 focus:ring-[#C8A96A]/20"
                />

                {error && (
                  <p className="mt-2 text-sm text-red-400">
                    {error}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="mt-3 inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-[#8B1E1E] px-8 py-4 font-bold uppercase tracking-[0.2em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#6D1515] hover:shadow-[0_12px_30px_rgba(139,30,30,0.35)] sm:w-auto"
              >
                Enviar mensaje
              </button>

              <p className="text-sm leading-6 text-gray-500">
                Al pulsar el botón se abrirá tu aplicación de correo con el
                mensaje preparado para enviarlo a Rolteatro.
              </p>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
}