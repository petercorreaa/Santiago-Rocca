/**
 * Banco de contenido del sitio de Santiago Rocca.
 * Todo el copy vive aquí, estructurado por sección, para que las páginas
 * y los componentes solo consuman datos y nunca lleven texto embebido.
 */

// ---------------------------------------------------------------------------
// Navegación y datos globales
// ---------------------------------------------------------------------------

export const site = {
  name: "Santiago Rocca",
  logo: "SR",
  tagline: "Desarrollo personal con propósito",
};

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Vive para Contarlo", href: "/vive-para-contarlo" },
  { label: "Libro", href: "/libro" },
  { label: "Comunidad", href: "/comunidad" },
  { label: "Recursos", href: "/recursos" },
  { label: "Contacto", href: "/contacto" },
];

export const social = {
  instagram: { label: "Instagram", href: "#" },
  youtube: { label: "YouTube", href: "#" },
  spotify: { label: "Spotify", href: "#" },
};

// ---------------------------------------------------------------------------
// Quién es Santiago / Misión
// ---------------------------------------------------------------------------

export const about = {
  bio: "Santiago Rocca es emprendedor, autor, divulgador del desarrollo personal y estudiante permanente del comportamiento humano. Dedica gran parte de su tiempo a estudiar desarrollo personal, comunicación, marketing, comportamiento humano y todas aquellas disciplinas que ayudan a las personas a crecer y alcanzar una mejor versión de sí mismas.",
  mission:
    "Le muestro a las personas a mejorar su vida mediante el desarrollo personal, entendiendo cómo funciona su mente, su comportamiento y su propósito para construir una vida más consciente.",
};

// ---------------------------------------------------------------------------
// Inicio
// ---------------------------------------------------------------------------

export const home = {
  hero: {
    eyebrow: "Desarrollo personal",
    title: "Convertite en la mejor versión de vos mismo",
    subtitle: "Aprendizajes, herramientas y conversaciones que transforman.",
    image: "/images/hero-placeholder.jpg",
    primaryCta: { label: "Conocé mi historia", href: "/sobre-mi" },
    secondaryCta: { label: "Escuchá el podcast", href: "/vive-para-contarlo" },
  },
  // Frase de impacto (sección blanca) — usa la misión de Santiago.
  impact: {
    eyebrow: "Mi misión",
    quote: about.mission,
  },
  pillars: {
    eyebrow: "Pilares",
    title: "En qué te puedo ayudar",
    subtitle:
      "Seis áreas que sostienen el crecimiento personal y que atraviesan todo mi trabajo.",
    // El campo `icon` mapea a un ícono de lucide-react en PillarsGrid.
    items: [
      {
        name: "Mentalidad",
        description: "Reprogramá tus creencias y fortalecé tu forma de pensar.",
        icon: "Brain",
      },
      {
        name: "Hábitos",
        description: "Diseñá rutinas que sostienen el cambio en el tiempo.",
        icon: "Repeat",
      },
      {
        name: "Comunicación",
        description: "Expresá tus ideas con claridad y conectá de verdad.",
        icon: "MessagesSquare",
      },
      {
        name: "Propósito",
        description: "Encontrá el rumbo que le da sentido a tu vida.",
        icon: "Compass",
      },
      {
        name: "Productividad",
        description: "Hacé que tu tiempo y tu energía trabajen a tu favor.",
        icon: "Zap",
      },
      {
        name: "Bienestar",
        description: "Cuidá tu cuerpo y tu mente para sostener tu crecimiento.",
        icon: "HeartPulse",
      },
    ],
  },
  // Bloque "Quién es Santiago" (sección blanca, 2 columnas).
  whoIs: {
    eyebrow: "Quién soy",
    title: "Santiago Rocca",
    paragraph: about.bio,
    image: "/images/santiago-placeholder.jpg",
    cta: { label: "Conocé mi historia", href: "/sobre-mi" },
  },
  // Preview del podcast (sección oscura).
  podcastPreview: {
    eyebrow: "El podcast",
    cta: { label: "Ver todos los episodios", href: "/vive-para-contarlo" },
    episodes: [
      {
        number: "001",
        title: "Cómo superar la adversidad y volver más fuerte",
        guest: "Invitado por confirmar",
        duration: "58 min",
      },
      {
        number: "002",
        title: "Construir hábitos que realmente duran",
        guest: "Invitado por confirmar",
        duration: "1 h 12 min",
      },
      {
        number: "003",
        title: "El poder de comunicar con propósito",
        guest: "Invitado por confirmar",
        duration: "47 min",
      },
    ],
  },
  // CTA final (sección con fondo acento).
  communityCta: {
    title: "Sumate a la comunidad",
    text: "Recibí reflexiones, resúmenes de libros, recomendaciones y desafíos directamente en tu WhatsApp. Un espacio para crecer todos los días.",
    cta: { label: "Unirme a la comunidad", href: "/comunidad" },
  },
};

// ---------------------------------------------------------------------------
// Sobre mí — historia personal
// ---------------------------------------------------------------------------

export const story = {
  eyebrow: "Sobre mí",
  title: "Mi historia",
  milestones: [
    "Durante el colegio tuvo dificultades académicas y no encontraba un rumbo claro.",
    "Durante la pandemia descubrió el desarrollo personal.",
    "Uno de los momentos más importantes fue realizar el Seminario Fénix de Brian Tracy.",
    "A partir de ese momento comenzó a trabajar en sus creencias, hábitos, mentalidad y propósito.",
    "Desde entonces dedica gran parte de su tiempo a estudiar, aplicar y compartir conocimientos.",
  ],

  // Bloques narrativos para la página de scroll storytelling
  chapters: {
    comoEmpezó: {
      eyebrow: "El comienzo",
      title: "Cómo empezó todo",
      paragraphs: [
        "Desde muy chico hubo una pregunta que me acompañó constantemente: ¿qué hace que algunas personas logren resultados extraordinarios mientras otras ni siquiera consiguen dar el primer paso hacia sus metas?",
        "Siempre sentí una enorme curiosidad por entender por qué algunas personas construyen grandes carreras, destacan en un deporte, crean empresas exitosas o alcanzan una vida que admiran, mientras otras parecen quedarse estancadas. Me fascinaba descubrir qué marcaba esa diferencia, qué había detrás de las decisiones, los hábitos, la mentalidad y la forma de ver el mundo de cada persona.",
        "Esa curiosidad me llevó a pasar incontables horas leyendo libros, viendo entrevistas, estudiando biografías, investigando historias y consumiendo documentales sobre algunas de las personas más exitosas del mundo y sobre muchos de mis ídolos. Quería entender cómo habían vivido, cómo fue su infancia, qué hacían de manera diferente, qué obstáculos habían tenido que superar y, sobre todo, cómo pensaban. Siempre sentí que detrás de cada gran resultado había una forma particular de ver la vida, y estaba decidido a descubrirla.",
        "Sin saberlo, esa búsqueda me acercó al desarrollo personal, la psicología y también a la sociología, porque entender a las personas y comprender por qué somos como somos se convirtió en una de mis mayores pasiones.",
        "Desde el principio creí profundamente que cualquier persona puede alcanzar mucho más de lo que imagina. Sé que puede sonar idealista o demasiado optimista, pero la experiencia me demostró una y otra vez que las personas somos capaces de transformar nuestra realidad cuando encontramos una razón fuerte para hacerlo y estamos dispuestos a crecer. Hay una frase que me acompaña desde hace años y que resume gran parte de mi forma de pensar: \"Apunta a la luna; porque aunque no llegues, terminarás entre las estrellas\". Para mí, el verdadero fracaso no es quedarse corto de una meta ambiciosa, sino nunca animarse a perseguirla.",
      ],
      image: "/images/historia-inicio-placeholder.jpg",
    },
    pandemia: {
      eyebrow: "El quiebre",
      title: "La pandemia y el descubrimiento del desarrollo personal",
      paragraphs: [
        "En 2020, mientras el mundo parecía detenerse, encontré algo que me puso en movimiento. De repente tenía más tiempo libre que nunca, y empecé a dedicarlo a leer libros, escuchar podcasts, ver entrevistas y profundizar en un mundo que hasta ese momento conocía muy poco: el desarrollo personal.",
        "Recuerdo sentir que estaba descubriendo respuestas a muchas de las preguntas que me habían acompañado durante años. Por primera vez, todo lo que aprendía tenía una aplicación directa en mi vida. Cada libro me dejaba una idea nueva, cada podcast me abría una perspectiva diferente y cada aprendizaje se convertía en una herramienta concreta para crecer, mejorar y entenderme mejor.",
        "Y lo que más me impactó era encontrar patrones en las historias de las personas que admiraba. Veía que muchos de mis ídolos, independientemente del deporte, la profesión o la industria en la que se desempeñaban, compartían valores, hábitos y formas de pensar muy similares. Habían atravesado dificultades, fracasos, rechazos y momentos de incertidumbre, pero habían aprendido a utilizarlos como combustible para seguir avanzando.",
        "Lo que comenzó como una simple curiosidad durante el aislamiento terminó transformándose en una forma de vida. Ya no se trataba solamente de aprender, sino de poner en práctica esos conocimientos, cuestionar mis creencias, desarrollar nuevos hábitos y convertirme, poco a poco, en una mejor versión de mí mismo.",
      ],
      image: "/images/historia-pandemia-placeholder.jpg",
    },
    aprendizajes: {
      eyebrow: "La transformación",
      title: "Qué aprendí",
      paragraphs: [
        "A partir de ese momento, Santiago empezó a trabajar en sus creencias, sus hábitos, su forma de comunicarse y su propósito. No como un proceso lineal, sino como un trabajo constante, con avances y retrocesos.",
        "Aprendió que el crecimiento personal no es un destino: es una práctica. Que la disciplina es más poderosa que la motivación. Que las conversaciones correctas cambian el rumbo de una vida.",
        "Y que el conocimiento vale mucho más cuando se comparte.",
      ],
      image: "/images/historia-aprendizajes-placeholder.jpg",
    },
    mision: {
      eyebrow: "El futuro",
      title: "Qué quiero construir",
      paragraphs: [
        "Santiago dedica gran parte de su tiempo a estudiar, aplicar y compartir lo que aprende. A través del podcast, las redes, la comunidad y el libro que está escribiendo, busca que cada persona que lo escuche se lleve algo concreto.",
        "Su misión es simple y ambiciosa al mismo tiempo: ayudar a las personas a entender cómo funciona su mente, qué mueve su comportamiento y cuál es su propósito, para que puedan construir una vida más consciente y más propia.",
      ],
    },
  },

  // Fotos de la galería (placeholders)
  gallery: [
    { label: "Grabando el podcast", image: "/images/gallery-podcast.jpg" },
    { label: "Hablando en público", image: "/images/gallery-publico.jpg" },
    { label: "Foto profesional", image: "/images/gallery-profesional-1.jpg" },
    { label: "Sesión de trabajo", image: "/images/gallery-trabajo.jpg" },
    { label: "Foto profesional", image: "/images/gallery-profesional-2.jpg" },
    { label: "Con la comunidad", image: "/images/gallery-comunidad.jpg" },
  ],
};

// ---------------------------------------------------------------------------
// Podcast — Vive para Contarlo
// ---------------------------------------------------------------------------

export const podcast = {
  name: "Vive para Contarlo",
  meaning:
    "Vivir para contarlo significa vivir experiencias que transforman. Cuanto más vive una persona, más aprende. Cuanto más aprende, más tiene para compartir. La vida se construye a través de historias, relaciones, desafíos y aprendizajes.",
  description:
    "Relatos e historias que inspiran, enseñan y transforman. Conversaciones con personas que superaron desafíos, lograron resultados extraordinarios o desarrollaron aprendizajes valiosos que merecen ser compartidos.",
  objectives: [
    "Enseñar a través del entretenimiento.",
    "Generar conversaciones profundas, educativas y prácticas.",
    "Que cada episodio deje una enseñanza aplicable.",
  ],
  guestTypes: [
    "Empresarios",
    "Emprendedores",
    "Psicólogos",
    "Deportistas",
    "Autores",
    "Comunicadores",
    "Personas con historias extraordinarias",
  ],
  episodes: [
    {
      number: "001",
      title: "Cómo superar la adversidad y volver más fuerte",
      guest: "Invitado por confirmar",
      duration: "58 min",
      category: "Mentalidad",
    },
    {
      number: "002",
      title: "Construir hábitos que realmente duran",
      guest: "Invitado por confirmar",
      duration: "1 h 12 min",
      category: "Hábitos",
    },
    {
      number: "003",
      title: "El poder de comunicar con propósito",
      guest: "Invitado por confirmar",
      duration: "47 min",
      category: "Comunicación",
    },
    {
      number: "004",
      title: "De cero a emprendedor: el camino real",
      guest: "Invitado por confirmar",
      duration: "1 h 5 min",
      category: "Emprendimiento",
    },
    {
      number: "005",
      title: "Encontrá tu propósito antes de los 30",
      guest: "Invitado por confirmar",
      duration: "52 min",
      category: "Propósito",
    },
    {
      number: "006",
      title: "Alto rendimiento sin quemarte en el intento",
      guest: "Invitado por confirmar",
      duration: "1 h 18 min",
      category: "Productividad",
    },
  ],
  marqueeText: "VIVE PARA CONTARLO · HISTORIAS QUE TRANSFORMAN · APRENDIZAJES REALES · CONVERSACIONES QUE INSPIRAN · ",
  spotify: "#",
  youtube: "#",
  instagramProfile:
    "https://www.instagram.com/viveparacontarlo_",
  // Permalinks de posts/reels para los embeds reales de Instagram.
  // Formato: "https://www.instagram.com/p/XXXX/" o "https://www.instagram.com/reel/XXXX/"
  // Mientras esté vacío, los previews muestran las cards placeholder.
  instagramPosts: [
    "https://www.instagram.com/reel/DVbgxt8kfwZ/",
    "https://www.instagram.com/reel/DPM13wgkWjw/",
    "https://www.instagram.com/reel/DZ0QZdPRMvX/",
    "https://www.instagram.com/reel/DZ0PxiXxEVk/",
    "https://www.instagram.com/reel/DZWNp1zxSCc/",
    "https://www.instagram.com/reel/DZLGScbRZkZ/",
  ],
};

// ---------------------------------------------------------------------------
// Libro (en desarrollo)
// ---------------------------------------------------------------------------

export const book = {
  status: "En desarrollo",
  includes: [
    "Libro digital",
    "Audiolibro",
    "Guía práctica",
    "Ejercicios",
    "Clases grabadas por capítulo",
  ],
  philosophy:
    "El libro no se regala porque las personas valoran más aquello por lo que realizan una inversión. El objetivo es aumentar el compromiso y la implementación de los aprendizajes.",
};

// ---------------------------------------------------------------------------
// Comunidad (WhatsApp)
// ---------------------------------------------------------------------------

export const community = {
  channel: "WhatsApp",
  content: [
    "Reflexiones",
    "Resúmenes de libros",
    "Recomendaciones",
    "Noticias",
    "Videos",
    "Desafíos",
    "Aprendizajes personales",
  ],
};

// ---------------------------------------------------------------------------
// Recursos
// ---------------------------------------------------------------------------

export const resources = {
  categories: [
    "Libros",
    "Podcasts",
    "Comunicación",
    "Marketing",
    "Desarrollo Personal",
    "Productividad",
    "Psicología",
    "Historias Inspiradoras",
  ],
};
