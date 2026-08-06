import type { Category, Show } from "./types";

export const categories: Category[] = [
  {
    title: "Montajes",
    text: "Conoce algunas de las producciones que ROLTEATRO ha llevado a escena a lo largo de su trayectoria.",
    button: "Ver montajes",
    image: "/images/FondoMontaje.jpeg",
    action: "catalog",
  },
  {
    title: "En cartel",
    text: "Consulta los espectáculos que actualmente forman parte de la programación de ROLTEATRO.",
    button: "Más información",
    image: "/images/EnCartel.jpg",
    action: "current",
  },
  {
    title: "Próximos montajes",
    text: "Descubre los nuevos proyectos y producciones en preparación que llegarán próximamente.",
    button: "Más información",
    image: "/images/ProxMontajes.jpg",
    action: "upcoming",
  },
];

export const shows: Show[] = [
  {
    title: "Petición de mano & El oso",
    author: "Antón Chéjov",
    year: "2020",
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
    year: "2019",
    poster: "/images/CartelCisne.jpg",
    posterAlt: "Cartel de El canto del cisne",
    summary:
      "Una pieza teatral de Antón Chéjov que reflexiona sobre el oficio del actor, la memoria y el paso del tiempo.",
    synopsis: [
      "Adentrarnos en el teatro de Chéjov es, para toda persona que se sumerja en el mundo de la interpretación, una aventura tan apasionante como la vida misma; donde la sencillez de la naturaleza y la calidez de sus personajes atrapan al actor, provocando una auténtica simbiosis con el espectador.",
      "La maestría del autor hace revivir el teatro ruso y es considerado el mayor representante del naturalismo moderno.",
      "En El canto del cisne se pone de manifiesto todo un horizonte de emociones, cargado de contradicciones, fracasos, delirios, entusiasmos y soledades; en definitiva, todo este infinito y alambicado engranaje que compone la más íntima esencia de cualquier ser humano.",
      "Iván Ivánich, gran actor de provecta edad, decide hacer su última representación homenaje y es ahí donde se analizan en profundidad, a corazón abierto, todos sus éxitos repletos de fortuna, reconocimiento, aplausos y máximas consideraciones, todo ello bajo una pátina de soledad y afección que ha ido minando la vida y la salud del actor.",
      "Enfrentado cara a cara a la soledad del escenario, el actor recuerda sus grandes éxitos, entre los que se encuentran retazos de personajes emblemáticos de su carrera, como Hamlet y el mismísimo Rey Lear.",
      "El amor, muy importante en su vida, también está presente a través de una loa de nuestro siempre genial y admirado Lope de Vega.",
      "La soledad del teatro penetra por todos los poros de la piel del actor, provocando auténtico terror y enajenación, dando origen a que las tablas del escenario se empapen de la más sincera y obituaria emoción.",
      "Musas, fantasmas y hasta la mismísima muerte giran en derredor del personaje y, cómo no, su leal apuntador, que le guardará fidelidad hasta su último aliento.",
      "Esperamos que la disfruten.",
    ],
    gallery: [
      {
        src: "/images/CartelCisne.jpg",
        alt: "Cartel de El canto del cisne",
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
    year: "2022",
    poster: "/images/CartelBecquer.jpg",
    posterAlt: "Cartel del montaje Bécquer",
    summary:
      "Una propuesta escénica inspirada en el universo literario y poético de Gustavo Adolfo Bécquer.",
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
      {
        src: "/images/Becquer4.jpg",
        alt: "Fotografía del montaje Bécquer 4",
      },
    ],
  },
  {
    title: "Don Juan Tenorio",
    author: "José Zorrilla",
    year: "2023",
    poster: "/images/CartelDonJuan.jpg",
    posterAlt: "Cartel de Don Juan Tenorio",
    summary:
      "Pasión, honor, misterio y redención en uno de los grandes clásicos del teatro español.",
    synopsis: [
      "Don Juan Tenorio narra la historia de un seductor arrogante y temerario que desafía todas las normas morales y sociales.",
      "Tras conquistar mujeres y enfrentarse a numerosos rivales, su vida cambia al enamorarse de Doña Inés, un amor puro que despierta en él el deseo de redención.",
      "Entre pasión, honor, duelos y misterio, la obra culmina con un mensaje de esperanza: el amor verdadero y el arrepentimiento pueden vencer incluso a la muerte y conducir a la salvación.",
    ],
    gallery: [
      {
        src: "/images/CartelDonJuan.jpg",
        alt: "Cartel de Don Juan Tenorio",
      },
      {
        src: "/images/DonJuan1.jpg",
        alt: "Fotografía de Don Juan Tenorio 1",
      },
      {
        src: "/images/DonJuan2.jpg",
        alt: "Fotografía de Don Juan Tenorio 2",
      },
      {
        src: "/images/DonJuan3.jpg",
        alt: "Fotografía de Don Juan Tenorio 3",
      },
      {
        src: "/images/DonJuan4.jpg",
        alt: "Fotografía de Don Juan Tenorio 4",
      },
      {
        src: "/images/DonJuan5.jpg",
        alt: "Fotografía de Don Juan Tenorio 5",
      },
      {
        src: "/images/DonJuan6.jpg",
        alt: "Fotografía de Don Juan Tenorio 6",
      },
      {
        src: "/images/DonJuan7.jpg",
        alt: "Fotografía de Don Juan Tenorio 7",
      },
      {
        src: "/images/DonJuan8.jpg",
        alt: "Fotografía de Don Juan Tenorio 8",
      },
      {
        src: "/images/DonJuan9.jpg",
        alt: "Fotografía de Don Juan Tenorio 9",
      },
      {
        src: "/images/DonJuan10.jpg",
        alt: "Fotografía de Don Juan Tenorio 10",
      },
      {
        src: "/images/DonJuan11.jpg",
        alt: "Fotografía de Don Juan Tenorio 11",
      },
    ],
  },

  {
    title: "Lorca",
    author: "Federico García Lorca",
    year: "2024",
    poster: "/images/CartelLorca.jpeg",
    posterAlt: "Cartel del montaje Lorca",
    summary:
      "Una inmersión apasionada y vibrante en el universo poético y teatral de Federico García Lorca.",
    synopsis: [
      "Lorca es una inmersión apasionada y vibrante en el universo poético y teatral de uno de nuestros autores más universales: Federico García Lorca. La compañía Rolteatro teje un friso escénico donde la tragedia, la belleza y la raíz popular se funden en una sola voz.",
      "A través de una cuidada y sobrecogedora selección de sus obras dramáticas más emblemáticas, el espectador recorrerá el ahogo y la autoridad implacable de La casa de Bernarda Alba, el dolor reprimido y la pulsión de la maternidad en Yerma, y la ruptura vanguardista y reveladora de Comedia sin título.",
      "Este viaje dramático se entrelaza de forma armónica con el duende de su poesía y su música. El pellizco imperecedero del Romancero Gitano y la emoción del llanto por su amigo, el torero Ignacio Sánchez Mejías, se abrazan a la frescura de su cancionero tradicional (La Tarara, El Café de Chinitas...), devolviéndonos a un Lorca vivo, musical, desgarrador y luminoso.",
      "Lorca no es solo un tributo; es una experiencia teatral sugerente y llena de fuerza que reivindica la vigencia, la pasión y la poesía inmortal del genio de Fuente Vaqueros. Un espectáculo indispensable para sentir el teatro en toda su pureza.",
    ],
    gallery: [
      {
        src: "/images/CartelLorca.jpeg",
        alt: "Cartel del montaje Lorca",
      },
      {
        src: "/images/Lorca1.jpg",
        alt: "Fotografía del montaje Lorca 1",
      },
      {
        src: "/images/Lorca2.jpg",
        alt: "Fotografía del montaje Lorca 2",
      },
      {
        src: "/images/Lorca3.jpg",
        alt: "Fotografía del montaje Lorca 3",
      },
      {
        src: "/images/Lorca4.jpg",
        alt: "Fotografía del montaje Lorca 4",
      },
      {
        src: "/images/Lorca5.jpg",
        alt: "Fotografía del montaje Lorca 5",
      },
    ],
  },
  {
    title: "Lapislázuli",
    author: "José Luis Alonso de Santos",
    year: "2025",
    poster: "/images/CartelLapis.jpg",
    posterAlt: "Cartel de Lapislázuli",
    summary: "Una conmovedora y divertida propuesta inspirada en la mirada cercana y vital de José Luis Alonso de Santos.",
    synopsis: [
      "Rolteatro presenta 'Lapislázuli', una conmovedora y divertida propuesta inspirada en la mirada cercana y vital de José Luis Alonso de Santos.",
      "La obra se adentra en el fascinante universo de las relaciones humanas y en esas historias cotidianas que, envueltas en la rutina, a menudo pasan desapercibidas. A través de escenas llenas de frescura, ternura y humor, se nos invita a reflexionar sobre cómo el amor, la costumbre y la complicidad moldean nuestras experiencias vitales.",
      "Con una narrativa ágil y emotiva, los personajes desnudan sus emociones y contradicciones, provocando tanto la risa espontánea como el pellizco de la introspección.",
      "Lapislázuli es un viaje teatral sensible y provocador que resalta la belleza de lo auténtico y celebra la imperfección humana.",
      "Una cita imprescindible para dejar volar la imaginación y disfrutar del mejor teatro de cerca.",
      "Sumérgete en estas historias y déjate llevar por el humor, la emoción y la magia de una función inolvidable. ¡Te esperamos!"
    ],
    gallery: [
      { src: "/images/CartelLapis.jpg", alt: "Cartel de Lapislázuli" },
      { src: "/images/Lapis1.jpeg", alt: "Lapislázuli 1" },
      { src: "/images/Lapis2.jpeg", alt: "Lapislázuli 2" },
      { src: "/images/Lapis3.jpeg", alt: "Lapislázuli 3" },
      { src: "/images/Lapis4.jpeg", alt: "Lapislázuli 4" },
      { src: "/images/Lapis5.jpeg", alt: "Lapislázuli 5" },
      { src: "/images/Lapis6.jpeg", alt: "Lapislázuli 6" },
    ],
  },
];

export const currentShows: Show[] = [
  {
    title: "ACTÚA",
    author: "ROLTEATRO",
    year: "En cartel",
    poster: "/images/CartelActua2.jpg",
    posterAlt: "Cartel de ACTÚA",
    summary:
      "Un recorrido por el alma humana a través de trece autores y textos esenciales de la historia teatral.",
    synopsis: [
      "ACTÚA no es solo una representación; es un recorrido por el alma humana a través de los textos que han definido nuestra historia teatral. En este montaje de Rolteatro, nos sumergimos en un juego de espejos donde la realidad y la ficción se confunden, guiados por la palabra y, en definitiva, por la verdad del hecho teatral.",
      "El viaje comienza con el rigor de Hamlet, de William Shakespeare, y sus consejos a los cómicos, para luego transitar por el ingenio de Práxedes en Eloísa está debajo de un almendro, de Enrique Jardiel Poncela, y la fragilidad de Blanche en Un tranvía llamado deseo, de Tennessee Williams.",
      "La escena se llena de humanidad con el monólogo de La Agrado de Todo sobre mi madre, de Pedro Almodóvar, y la desgarradora fuerza de Nawal en Incendios, de Wajdi Mouawad.",
      "Exploramos nuestras raíces con el juego de la Jerigonza y la astucia de La Celestina, de Fernando de Rojas, navegando por el Siglo de Oro con los versos de Lope de Vega y la picardía de Cervantes en El viejo celoso.",
      "La poesía de Lorca en Doña Rosita la soltera y la sobriedad de Delibes en Cinco horas con Mario nos preparan para el contraste final: la sátira de Don Mendo en su Venganza, de Pedro Muñoz Seca, y, como cierre absoluto, la lucha existencial de Calígula, de Albert Camus.",
      "Trece estaciones. Trece autores. Un solo impulso: ¡ACTÚA!",
    ],
    gallery: [
      {
        src: "/images/CartelActua2.jpg",
        alt: "Cartel de ACTÚA",
      },
    ],
  },
  {
    title: "Don Juan Tenorio",
    author: "José Zorrilla",
    year: "En cartel",
    poster: "/images/CartelDon2.jpg",
    posterAlt: "Cartel de Don Juan Tenorio en cartel",
    summary:
      "ROLTEATRO revive el espíritu de uno de los grandes clásicos del teatro español.",
    synopsis: [
      "Abordar Don Juan Tenorio supone enfrentarse a uno de los grandes clásicos del teatro español, una obra cuya vigencia reside en la profundidad de sus personajes y en la universalidad de sus conflictos.",
      "ROLTEATRO asume este reto con una propuesta escénica que respeta la esencia del texto de José Zorrilla, ofreciendo al mismo tiempo una representación cercana, dinámica y emocionante.",
      "La dirección consigue imprimir un ritmo fluido que permite al espectador adentrarse en la evolución de Don Juan, un personaje que transita desde la soberbia y el desafío hasta el descubrimiento del amor y la redención. Frente a él, Doña Inés se erige como el símbolo de la pureza y la esperanza, convirtiéndose en el eje emocional de la historia.",
      "El conjunto del reparto demuestra un sólido trabajo interpretativo, construyendo personajes creíbles y llenos de matices. La cuidada iluminación, el vestuario y la ambientación contribuyen a crear una atmósfera evocadora que realza la belleza poética de la obra y mantiene el interés del público durante toda la representación.",
      "Con esta producción, ROLTEATRO confirma su apuesta por un teatro de calidad, comprometido con la difusión de los grandes clásicos y con la creación de experiencias escénicas capaces de emocionar, conmover e invitar a la reflexión. Una representación que pone de manifiesto la fuerza imperecedera del teatro de José Zorrilla y el talento artístico de una compañía que continúa creciendo con rigor, pasión y sensibilidad.",
    ],
    gallery: [
      {
        src: "/images/CartelDon2.jpg",
        alt: "Cartel de Don Juan Tenorio en cartel",
      },
    ],
  },
];

export const upcomingShows: Show[] = [
  {
    title: "VECINOS",
    author: "ROLTEATRO",
    year: "Próximamente",
    poster: "/images/CartelVecinos.jpeg",
    posterAlt: "Cartel de VECINOS",
    summary: "Próxima producción teatral de ROLTEATRO.",
    synopsis: [
      "Próximamente ampliaremos la información y la sinopsis de este montaje.",
    ],
    gallery: [
      {
        src: "/images/CartelVecinos.jpeg",
        alt: "Cartel de VECINOS",
      },
    ],
  },
  {
    title: "La extraña pareja",
    author: "ROLTEATRO",
    year: "Próximamente",
    poster: "/images/CartelEstrana.jpg",
    posterAlt: "Cartel de La extraña pareja",
    summary: "Próxima producción teatral de ROLTEATRO.",
    synopsis: [
      "Próximamente ampliaremos la información y la sinopsis de este montaje.",
    ],
    gallery: [
      {
        src: "/images/CartelEstrana.jpg",
        alt: "Cartel de La extraña pareja",
      },
    ],
  },
];