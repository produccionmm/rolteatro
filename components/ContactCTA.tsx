export default function ContactCTA() {
  return (
    <section
  id="contact"
  className="bg-red-700 py-24 text-center text-white"
   >
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-5xl font-bold">
          ¿Preparado para subir al escenario?
        </h2>

        <p className="mt-6 text-lg text-red-100">
          Descubre nuestros cursos y empieza tu aventura en Rolteatro.
        </p>

        <button className="mt-10 rounded-xl bg-white px-10 py-4 font-bold text-red-700 transition hover:scale-105">
         Solicitar información
          </button>
      </div>
    </section>
  );
}