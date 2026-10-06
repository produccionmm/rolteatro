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

export default function ContactCTA() {
  const [verification, setVerification] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (verification.trim() !== "24") {
      setError("La respuesta de verificación no es correcta.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("");
    setSending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          phone: String(formData.get("phone") ?? ""),
          message: String(formData.get("message") ?? ""),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "No se ha podido enviar el mensaje.");
      }

      setSuccess(
        "Mensaje enviado correctamente. Gracias por contactar con ROLTEATRO."
      );

      form.reset();
      setVerification("");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "No se ha podido enviar el mensaje. Inténtalo de nuevo."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#090909] py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute left-[-150px] top-24 h-96 w-96 rounded-full bg-[#8B1E1E]/12 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-100px] right-[-100px] h-96 w-96 rounded-full bg-[#C8A96A]/10 blur-[140px]" />

      <div className="container-section relative z-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#C8A96A]">
            Hablemos
          </p>

          <h2 className="mt-4 section-title-light">Contacto</h2>

          <div className="gold-line" />

          <p className="mx-auto max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Contacta con ROLTEATRO para recibir información sobre cursos,
            talleres, espectáculos y actividades teatrales.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[24px] border border-[#C8A96A]/25 bg-[#151515] p-7 shadow-2xl shadow-black/30 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C8A96A]">
              Información
            </p>

            <h3 className="mt-4 text-3xl font-bold">Ponte en contacto</h3>

            <div className="my-7 h-[2px] w-16 bg-[#C8A96A]" />

            <div className="space-y-5">
              <a
                href="mailto:rolteatro@gmail.com"
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/25 p-5 transition hover:border-[#C8A96A]/50"
              >
                <FaEnvelope className="mt-1 shrink-0 text-[#C8A96A]" />
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                    Correo electrónico
                  </span>
                  <span className="mt-2 block break-all text-white">
                    rolteatro@gmail.com
                  </span>
                </span>
              </a>

              <a
                href="tel:+34696901656"
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/25 p-5 transition hover:border-[#C8A96A]/50"
              >
                <FaPhoneAlt className="mt-1 shrink-0 text-[#C8A96A]" />
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                    Juan Casas
                  </span>
                  <span className="mt-2 block text-white">696 90 16 56</span>
                </span>
              </a>

              <a
                href="tel:+34618872671"
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/25 p-5 transition hover:border-[#C8A96A]/50"
              >
                <FaPhoneAlt className="mt-1 shrink-0 text-[#C8A96A]" />
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                    Pedro García
                  </span>
                  <span className="mt-2 block text-white">618 87 26 71</span>
                </span>
              </a>

              <a
                href="https://www.rolteatro.es"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/25 p-5 transition hover:border-[#C8A96A]/50"
              >
                <FaGlobe className="mt-1 shrink-0 text-[#C8A96A]" />
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

            <div className="mt-9 border-t border-white/10 pt-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
                Síguenos
              </p>

              <div className="mt-5 flex gap-4">
                <a
                  href="https://www.instagram.com/rol_teatro/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram de Rolteatro"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C8A96A]/35 text-lg text-[#C8A96A] transition hover:border-[#C83B3B] hover:text-[#C83B3B]"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.facebook.com/Rolteatro?locale=es_ES"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook de Rolteatro"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C8A96A]/35 text-lg text-[#C8A96A] transition hover:border-[#C83B3B] hover:text-[#C83B3B]"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.youtube.com/@Rolteatro-u7s"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube de Rolteatro"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C8A96A]/35 text-lg text-[#C8A96A] transition hover:border-[#C83B3B] hover:text-[#C83B3B]"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </article>

          <form
            onSubmit={handleSubmit}
            className="rounded-[24px] border border-[#C8A96A]/25 bg-[#151515] p-7 shadow-2xl shadow-black/30 sm:p-10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C8A96A]">
              Escríbenos
            </p>

            <h3 className="mt-4 text-3xl font-bold">Envíanos un mensaje</h3>

            <div className="my-7 h-[2px] w-16 bg-[#C8A96A]" />

            <div className="space-y-5">
              <input
                name="name"
                type="text"
                required
                placeholder="Nombre *"
                className="min-h-13 w-full rounded-xl border border-white/15 bg-black/30 px-5 text-white outline-none placeholder:text-gray-600 focus:border-[#C8A96A]"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Correo electrónico *"
                className="min-h-13 w-full rounded-xl border border-white/15 bg-black/30 px-5 text-white outline-none placeholder:text-gray-600 focus:border-[#C8A96A]"
              />

              <input
                name="phone"
                type="tel"
                placeholder="Número de teléfono"
                className="min-h-13 w-full rounded-xl border border-white/15 bg-black/30 px-5 text-white outline-none placeholder:text-gray-600 focus:border-[#C8A96A]"
              />

              <textarea
                name="message"
                required
                rows={7}
                placeholder="Mensaje *"
                className="w-full resize-y rounded-xl border border-white/15 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-gray-600 focus:border-[#C8A96A]"
              />

              <div>
                <label
                  htmlFor="verification"
                  className="mb-3 block text-sm text-gray-300"
                >
                  Si eres humano, resuelve la operación: 27 - 3 = ?
                </label>

                <input
                  id="verification"
                  type="text"
                  inputMode="numeric"
                  value={verification}
                  onChange={(event) => {
                    setVerification(event.target.value);
                    setError("");
                    setSuccess("");
                  }}
                  required
                  className="min-h-13 w-full rounded-xl border border-white/15 bg-black/30 px-5 text-white outline-none focus:border-[#C8A96A]"
                />
              </div>

              {error && (
                <p className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
                  {error}
                </p>
              )}

              {success && (
                <p className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-300">
                  {success}
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="inline-flex min-h-13 w-full items-center justify-center rounded-xl bg-[#8B1E1E] px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#6D1515] disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit"
              >
                {sending ? "Enviando..." : "Enviar mensaje"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
