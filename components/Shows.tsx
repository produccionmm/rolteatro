export default function Shows() {
  const shows = [
    {
      title: "Festival Fin de Curso",
      description: "Los alumnos muestran todo lo aprendido durante el curso.",
    },
    {
      title: "Teatro Musical",
      description: "Interpretación, canto y movimiento en un mismo espectáculo.",
    },
    {
      title: "Representaciones Especiales",
      description: "Eventos y actuaciones abiertas al público durante el año.",
    },
  ];

  return (
    <section className="bg-[#111111] py-28 px-6 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="uppercase tracking-[0.4em] text-red-500">
            Espectáculos
          </p>

          <h2 className="mt-5 text-5xl font-black">
            Vive la magia del escenario
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400 text-lg">
            Cada curso culmina con representaciones donde el esfuerzo y la
            creatividad cobran vida frente al público.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {shows.map((show) => (
            <div
              key={show.title}
              className="rounded-3xl bg-[#181818] border border-white/10 p-8 transition hover:border-red-600 hover:-translate-y-2"
            >
              <div className="mb-6 text-5xl">🎬</div>

              <h3 className="text-2xl font-bold">
                {show.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                {show.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}