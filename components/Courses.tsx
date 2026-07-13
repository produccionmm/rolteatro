export default function Courses() {
  const courses = [
    {
      title: "Infantil",
      age: "6 - 11 años",
      icon: "🎈",
      description:
        "Aprender jugando, desarrollar la imaginación y ganar confianza sobre el escenario.",
    },
    {
      title: "Juvenil",
      age: "12 - 17 años",
      icon: "🎭",
      description:
        "Interpretación, improvisación, expresión corporal y preparación de espectáculos.",
    },
    {
      title: "Adultos",
      age: "+18 años",
      icon: "🌟",
      description:
        "Para quienes desean iniciarse o seguir creciendo como actores y actrices.",
    },
  ];

  return (
    <section className="bg-[#090909] py-28 px-6 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="uppercase tracking-[0.4em] text-red-500">
            Nuestros cursos
          </p>

          <h2 className="mt-5 text-5xl font-black">
            Formación para todas las edades
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Cada grupo está diseñado para desarrollar el talento artístico,
            la creatividad y la seguridad escénica.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group rounded-3xl border border-white/10 bg-[#141414] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-red-600 hover:shadow-[0_0_40px_rgba(220,38,38,.25)]"
            >
              <div className="text-5xl">{course.icon}</div>

              <h3 className="mt-6 text-3xl font-bold">
                {course.title}
              </h3>

              <p className="mt-2 font-semibold text-red-500">
                {course.age}
              </p>

              <p className="mt-6 leading-8 text-gray-400">
                {course.description}
              </p>

              <button className="mt-10 rounded-xl bg-red-700 px-6 py-3 font-bold transition group-hover:bg-red-600">
                Más información
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}