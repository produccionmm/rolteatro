"use client";

import { FormEvent, useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";

const contactEmail = "rolteatro@gmail.com";

export default function ContactCTA() {
  const [verification, setVerification] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (verification.trim() !== "24") {
      setError("La respuesta de verificación no es correcta.");
      return;
    }

    setError("");

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = encodeURIComponent(
      `Consulta desde la web de ROLTEATRO - ${name}`,
    );

    const body = encodeURIComponent(
      `Nombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}\n\nMensaje:\n${message}`,
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#0a0a0a] py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-[#8B1E1E]/15 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-120px] right-[-80px] h-96 w-96 rounded-full bg-[#C8A96A]/10 blur-[140px]" />

      <div className="container-section relative z-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#C8A96A]">
            Hablemos
          </p>

          <h2 className="mt-4 section-title-light">Contacto</h2>

          <div className="gold-line" />

          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            Contacta con ROLTEATRO para recibir información sobre cursos,
            talleres, espectáculos y actividades teatrales.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[24px] border border-[#C8A96A]/25 bg-gradient-to-br from-[#181818] to-[#101010] p-7 shadow-2xl shadow-black/30 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C8A96A]">
              Información
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              Ponte en contacto
            </h3>

            <div className="my-6 h-[2px] w-16 bg-[#C8A96A]" />

            <div className="space-y-5">
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/25 p-5 transition hover:border-[#C8A96A]/50"
              >
                <span className="mt-1 text-[#C8A96A]">
                  <FaEnvelope />
                </span>

                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                    Correo electrónico
                  </span>

                  <span className="mt-2 block break-all text-white">
                    {contactEmail}
                  </span>
                </span>
              </a>

              <a
                href="tel:+34618872671"
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/25 p-5 transition hover:border-[#C8A96A]/50"
              >
                <span className="mt-1 text-[#C8A96A]">
                  <FaPhoneAlt />
                </span>

                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                    Pedro García
                  </span>

                  <span className="mt-2 block text-white">618 87 26 71</span>
                </span>
              </a>

              <a
                href="tel:+34696901656"
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/25 p-5 transition hover:border-[#C8A96A]/50"
              >
                <span className="mt-1 text-[#C8A96A]">
                  <FaPhoneAlt />
                </span>

                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                    Juan A. García Casas
                  </span>

                  <span className="mt-2 block text-white">696 90 16 56</span>
                </span>
              </a>

              <a
                href="https://www.rolteatro.es"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/25 p-5 transition hover:border-[#C8A96A]/50"
              >
                <span className="mt-1 text-[#C8A96A]">
                  <FaGlobe />
                </span>

                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                    Página web
                  </span>

                  <span className="mt-2 block text-white">
                    www.rolteatro.es
                  </span>
                </span>
              </a>
            </div>

            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
                Redes sociales
              </p>

              <div className="mt-5 flex flex-wrap gap-4">
                <a
                  href="https://www.instagram.com/rol_teatro/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram de ROLTEATRO"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C8A96A]/35 text-lg text-[#C8A96A] transition hover:border-[#C83B3B] hover:text-[#C83B3B]"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.facebook.com/Rolteatro?locale=es_ES"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook de ROLTEATRO"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C8A96A]/35 text-lg text-[#C8A96A] transition hover:border-[#C83B3B] hover:text-[#C83B3B]"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.youtube.com/@Rolteatro-u7s"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube de ROLTEATRO"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C8A96A]/35 text-lg text-[#C8A96A] transition hover:border-[#C83B3B] hover:text-[#C83B3B]"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[24px] border border-[#C8A96A]/25 bg-[#151515] p-7 shadow-2xl shadow-black/30 sm:p-10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C8A96A]">
              Escríbenos
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              Envíanos tu consulta
            </h3>

            <div className="my-6 h-[2px] w-16 bg-[#C8A96A]" />

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-gray-300">
                  Nombre
                </span>

                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  className="min-h-12 w-full rounded-xl border border-white/15 bg-black/30 px-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#C8A96A]"
                  placeholder="Tu nombre"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-gray-300">
                  Correo electrónico
                </span>

                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="min-h-12 w-full rounded-xl border border-white/15 bg-black/30 px-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#C8A96A]"
                  placeholder="tu@email.com"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-semibold text-gray-300">
                Teléfono
              </span>

              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                className="min-h-12 w-full rounded-xl border border-white/15 bg-black/30 px-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#C8A96A]"
                placeholder="Tu teléfono"
              />
            </label>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-semibold text-gray-300">
                Mensaje
              </span>

              <textarea
                name="message"
                required
                rows={7}
                className="w-full resize-none rounded-xl border border-white/15 bg-black/30 px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#C8A96A]"
                placeholder="Cuéntanos en qué podemos ayudarte"
              />
            </label>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-semibold text-gray-300">
                Verificación: 27 - 3 = ?
              </span>

              <input
                type="text"
                inputMode="numeric"
                value={verification}
                onChange={(event) => setVerification(event.target.value)}
                required
                className="min-h-12 w-full rounded-xl border border-white/15 bg-black/30 px-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#C8A96A]"
                placeholder="Escribe el resultado"
              />
            </label>

            {error && (
              <p
                role="alert"
                className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-7 inline-flex min-h-13 w-full items-center justify-center rounded-xl bg-[#8B1E1E] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#6D1515]"
            >
              Enviar consulta
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-gray-500">
              Al pulsar el botón se abrirá tu programa de correo con el mensaje
              preparado para enviarlo a {contactEmail}.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}