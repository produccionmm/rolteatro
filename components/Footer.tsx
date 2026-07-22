import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">

        <div>
          <h3 className="text-3xl font-bold">
            <span className="text-red-600">ROL</span>TEATRO
          </h3>

          <p className="mt-5 text-gray-400">
            Escuela y compañía de teatro donde la creatividad cobra vida.
          </p>
        </div>

        <div>
          <h4 className="mb-5 text-xl font-bold">
            Contacto
          </h4>

          <p className="mb-3 flex items-center gap-3">
            <FaEnvelope />
            info@rolteatro.es
          </p>

          <p className="flex items-center gap-3">
            <FaPhone />
            +34 600 000 000
          </p>
        </div>

        <div>
          <h4 className="mb-5 text-xl font-bold">
            Síguenos
          </h4>

          <div className="flex gap-5 text-3xl text-red-600">
            <FaInstagram className="cursor-pointer hover:scale-110 transition" />
            <FaFacebook className="cursor-pointer hover:scale-110 transition" />
          </div>
        </div>

      </div>

      <p className="mt-14 text-center text-sm text-gray-500">
        © 2026 Rolteatro · Todos los derechos reservados.
      </p>
    </footer>
  );
}