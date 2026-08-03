import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-[#C8A96A]/20 bg-[#050505] text-white">
      <div className="container-section grid gap-10 py-14 md:grid-cols-3">
        {/* Rolteatro */}

        <div>
          <h2 className="text-2xl font-extrabold tracking-wide">
            <span className="text-white">ROL</span>
            <span className="text-[#C8A96A]">TEATRO</span>
          </h2>

          <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
            Compañía y escuela de artes escénicas dedicada a la formación,
            creación y exhibición teatral.
          </p>
        </div>

        {/* Contacto */}

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-[#C8A96A]">
            Contacto
          </h3>

          <a
            href="mailto:rolteatro@gmail.com"
            className="mt-5 flex items-center gap-3 text-sm text-gray-300 transition hover:text-[#C83B3B]"
          >
            <FaEnvelope className="text-[#C8A96A]" />
            rolteatro@gmail.com
          </a>
        </div>

        {/* Redes */}

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-[#C8A96A]">
            Síguenos
          </h3>

          <div className="mt-5 flex gap-4">
            <a
              href="https://www.instagram.com/rol_teatro/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram de Rolteatro"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-lg text-white transition hover:border-[#C83B3B] hover:text-[#C83B3B]"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/Rolteatro?locale=es_ES"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook de Rolteatro"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-lg text-white transition hover:border-[#C83B3B] hover:text-[#C83B3B]"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.youtube.com/@Rolteatro-u7s"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube de Rolteatro"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-lg text-white transition hover:border-[#C83B3B] hover:text-[#C83B3B]"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-section py-6 text-center text-xs text-gray-500">
          © 2026 ROLTEATRO · Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}