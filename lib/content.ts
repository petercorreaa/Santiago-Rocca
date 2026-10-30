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
  { label: "Vive para Contarlo", href: "/vive-para-contarlo" },
  { label: "Libro", href: "/libro" },
  { label: "Seminarios", href: "/seminarios" },
  { label: "Comunidad", href: "/comunidad" },
];

export const social = {
  instagram: { label: "Instagram", href: "https://www.instagram.com/santiagorocca" },
  youtube: { label: "YouTube", href: "https://www.youtube.com/channel/UCkYBD_iWej0aGUE2rwlF-Fw" },
  spotify: { label: "Spotify", href: "https://open.spotify.com/show/4Q2IgSrlVU61LQzlX6hzMv" },
};

export const contactEmail = "Santiagorocca2017@gmail.com";

// Mail dedicado a invitados y sponsors del podcast.
export const podcastEmail = "santiagoroccalivetell@gmail.com";

// Botón flotante de WhatsApp (visible en todas las páginas).
export const whatsappContact = {
  phone: "5491163014893",
  displayPhone: "+54 9 11 6301-4893",
  message: "Hola! Como estas?",
  get href() {
    return `https://wa.me/${this.phone}?text=${encodeURIComponent(this.message)}`;
  },
};

// ---------------------------------------------------------------------------
// Quién es Santiago / Misión
// ---------------------------------------------------------------------------

export const about = {
  bio: "Hola, soy Santiago Rocca. Hace más de siete años que estudio desarrollo personal, comunicación y comportamiento humano. También estudié cuatro años Comunicación en la Universidad del Salvador.",
  mission:
    "Quiero enseñarte las herramientas del desarrollo personal que más me sirvieron a mí y que realmente me cambiaron la vida, para que puedas entenderte mejor, tomar el control de tus decisiones y construir una vida más consciente.",
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
  // Bloque "Quién es Santiago" (hero de Inicio, sin foto).
  whoIs: {
    eyebrow: "Quién soy",
    title: "Santiago Rocca",
    paragraph: about.bio,
    image: "/images/quien-soy-hero.png",
    credentials: [
      "Autor de ¿Qué hacen distinto?",
      "Host de Vive para Contarlo",
      "+7 años en desarrollo personal",
    ],
    cta: { label: "Conocé mi historia", href: "#sobre-mi" },
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
    cta: {
      label: "Unirme a la comunidad",
      href: "https://chat.whatsapp.com/LxfhQ9o3sWYFRCpIzvLVhk?s=cl&p=i&mlu=4&amv=0",
    },
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
      image: "/Mias/SR-persona.webp",
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
      image: "/Mias/Mia1.webp",
    },
    aprendizajes: {
      eyebrow: "La transformación",
      title: "Qué aprendí",
      paragraphs: [
        "Con el paso del tiempo empecé a trabajar en mis creencias, mis hábitos, mi forma de comunicarme y la manera en la que veía la vida. No fue un proceso perfecto ni lineal. Hubo momentos de mucho crecimiento y otros de retrocesos, dudas y aprendizajes. Pero cada paso me fue ayudando a entenderme mejor.",
        "Aprendí muchísimas cosas que terminaron impactando en todas las áreas de mi vida. Me ayudaron en mi trabajo, en mis estudios, en la facultad, en mis relaciones y en la forma en la que tomo decisiones. Aprendí a comunicarme mejor, a expresarme con más claridad, a escribir mejor, a vender mejor mis ideas, a relacionarme con las personas de una manera más profunda y a entender qué era lo que realmente quería para mi vida.",
        "También aprendí a conocerme. A entender cuáles son mis valores, mis principios, qué cosas me motivan y qué cosas no estoy dispuesto a negociar. Descubrí que muchas veces las respuestas que buscamos afuera están dentro de nosotros, pero necesitamos las herramientas correctas para encontrarlas.",
        "Y después de años aprendiendo, leyendo, escuchando y poniendo en práctica todo ese conocimiento, me di cuenta de algo que cambió por completo mi rumbo: una de las cosas que más disfruto es compartirlo. Me apasiona transmitir ideas, generar conversaciones y acercar herramientas que puedan ayudar a otras personas, tal como me ayudaron a mí. Porque si algo comprobé en este camino es que una sola idea puede cambiar una perspectiva, una decisión puede cambiar un destino y una conversación puede cambiar una vida.",
      ],
      image: "/Mias/Mia2.webp",
    },
    mision: {
      eyebrow: "El futuro",
      title: "Qué quiero construir",
      paragraphs: [
        "Hoy dedico gran parte de mi tiempo a estudiar, aprender, poner en práctica y compartir todo aquello que considero valioso. A través de mi podcast, mis redes sociales, los proyectos que desarrollo y los libros, busco que cada persona que me escuche pueda llevarse una idea, una herramienta o una reflexión que le sirva para mejorar algún aspecto de su vida.",
        "Mi objetivo no es decirle a nadie cómo vivir, sino acercar conocimientos, experiencias y conversaciones que ayuden a las personas a conocerse mejor, cuestionarse más y tomar decisiones más conscientes.",
        "Si tuviera que resumir mi misión en una sola frase, diría que quiero ayudar a las personas a mejorar su vida a través del desarrollo personal, entendiendo cómo funciona su mente, qué impulsa su comportamiento y cuál es su propósito, para que puedan construir una vida más consciente, más auténtica y más alineada con quienes realmente son.",
        "Creo profundamente que cuando una persona se entiende a sí misma, descubre herramientas para crecer y se anima a actuar, puede transformar por completo el rumbo de su vida.",
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Podcast — Vive para Contarlo
// ---------------------------------------------------------------------------

export const podcast = {
  name: "Vive para Contarlo",
  meaning: "Relatos de historias que inspiran, enseñan y transforman.",
  description: [
    "Conversamos con personas que tienen una historia, una experiencia o un aprendizaje que vale la pena compartir. Personas que, además de contar su recorrido, aportan valor desde aquello que hacen y dominan: comparten las herramientas, conocimientos, decisiones y aprendizajes que las ayudaron a crecer y alcanzar sus propios resultados.",
    "La idea es que cada conversación no solo inspire, sino que también enseñe algo concreto que quien escucha pueda llevarse y aplicar en su propia vida.",
  ],
  objectives: [
    "Enseñar a través del entretenimiento.",
    "Generar conversaciones profundas, educativas y prácticas.",
    "Que cada episodio deje una enseñanza aplicable.",
  ],
  guestIntro:
    "Buscamos relatos que enseñen algo y que ayuden a entender mejor cómo pensamos, cómo decidimos y cómo podemos crecer. Hablamos de desarrollo personal, mentalidad, disciplina, hábitos, comunicación, trabajo, desafíos, errores y aprendizajes: todo lo que pueda inspirar a alguien a mejorar algún aspecto de su vida. Porque detrás de cada persona hay una historia, y detrás de cada historia, una enseñanza.",
  guestTypes: [
    "Empresarios",
    "Emprendedores",
    "Psicólogos",
    "Deportistas",
    "Autores",
    "Comunicadores",
    "Personas con historias extraordinarias",
  ],
  // Categorías para orientar a quien quiere ser invitado sobre qué contar en el mail.
  guestValuePrompts: [
    "Una experiencia o historia que marcó tu vida",
    "Un conocimiento o habilidad que dominás",
    "Un aprendizaje que le puede servir a la audiencia",
    "Una perspectiva distinta sobre algún tema",
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
  spotify: "https://open.spotify.com/show/4Q2IgSrlVU61LQzlX6hzMv",
  youtube: "https://www.youtube.com/channel/UCkYBD_iWej0aGUE2rwlF-Fw",
  youtubePlaylistId: "PLK2ymStI_H-H9nTMjYbqswKyZGzLjsHCc",
  youtubePlaylistUrl:
    "https://www.youtube.com/playlist?list=PLK2ymStI_H-H9nTMjYbqswKyZGzLjsHCc",
  // Fallback (3 más recientes) por si el fetch del feed RSS falla en build.
  latestVideosFallback: ["unVSD_vsh9k", "w5VS9DIjI1Y", "ljDHxOOpcfU"],
  // Videos destacados de YouTube (portadas). Los links se completan luego.
  featuredVideos: [
    { image: "/Podcast/portada-1.webp", url: "https://youtu.be/0zaOVO_PgHw?si=0tjxdded43Kwrzxb" },
    { image: "/Podcast/portada-2.webp", url: "https://youtu.be/PHFGJRLWyHo?si=a1ohODwoYV8iBCG9" },
    { image: "/Podcast/portada-3.webp", url: "https://youtu.be/oocNI18DX78?si=fStYOTGuGv-2Jgtn" },
  ],
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
  status: "Disponible",
  title: "¿Qué hacen distinto?",
  subtitle:
    "Qué separa a las personas que logran lo que se proponen de las que no. Basado en las mejores ideas de mis autores favoritos, Napoleon Hill, Jim Rohn, Brian Tracy, Tony Robbins, Bob Proctor y Kevin Trudeau.",
  synopsis:
    "13 capítulos que reúnen los principios que se repiten entre quienes construyen la vida que quieren: éxito, metas, creencias, deseo, pensamientos, salud y energía, manejo del tiempo y resolución de problemas. Con ejercicios prácticos para pasar del conocimiento a la acción.",
  bonus:
    "Incluye un bonus: un ejercicio de autorreflexión de 30 preguntas, más 13 clases grabadas en audio, una por cada capítulo.",
  cover: "/Libro/portada.png",
  buyLink: "https://go.hotmart.com/J107008561I",
  includes: ["Libro digital", "Guía práctica", "Ejercicios", "Clases grabadas por capítulo"],
  audience: {
    eyebrow: "Para quién es",
    title: "¿De qué le va a servir a la audiencia?",
    items: [
      "Conocerse, entender qué quiere y cuáles son sus valores",
      "Definir metas y una dirección",
      "Detectar y cuestionar creencias limitantes",
      "Trabajar su identidad y confianza",
      "Desarrollar disciplina y mejores hábitos",
      "Manejar mejor pensamientos y emociones",
      "Administrar tiempo y energía",
      "Tomar decisiones más conscientes",
      "Enfrentar mejor los problemas",
      "Comunicarse y relacionarse mejor",
      "Transformar conocimiento en acción",
    ],
    outcome:
      "Le sirve para dejar de consumir desarrollo personal como información y empezar a utilizarlo como una herramienta para cambiar su forma de pensar, actuar y vivir.",
  },
  transformation: {
    eyebrow: "El cambio",
    title: "La transformación",
    from: "Vivir en automático, sin claridad, reaccionando a tus pensamientos, emociones, circunstancias y viejas creencias.",
    to: "Conocerte, hacerte responsable, definir qué querés y empezar a dirigir conscientemente tus pensamientos, decisiones y acciones hacia la vida que querés construir.",
    quote:
      "No promete resultados. Promete darte la claridad, las herramientas y el método para que puedas empezar a construirlos.",
  },
  testimonials: [
    "Santi explica desarrollo personal de una forma que realmente se entiende.",
    "Desde que empecé a mirar tus videos cambié muchísimo mi forma de pensar.",
    "Compré el libro y es increíble todo el valor que tiene.",
  ],
  philosophy:
    "El libro no se regala porque las personas valoran más aquello por lo que realizan una inversión. El objetivo es aumentar el compromiso y la implementación de los aprendizajes.",
};

// ---------------------------------------------------------------------------
// Seminarios
// ---------------------------------------------------------------------------

export const seminars = {
  eyebrow: "Formación",
  title: "Seminarios",
  subtitle: "Programas prácticos para llevar el desarrollo personal a resultados concretos.",
  index: [
    {
      slug: "comunicacion",
      name: "Comunicación",
      description:
        "Programa práctico de comunicación, persuasión y relaciones. Aprendé a comunicar mejor, conectar y vender e influir con más calidad.",
      status: "Disponible",
      href: "/seminarios/comunicacion",
    },
    {
      slug: "desarrollo-personal",
      name: "Desarrollo Personal",
      description:
        "El próximo seminario, para llevar los principios del libro y el podcast a la práctica.",
      status: "Próximamente",
      href: null,
    },
  ],
};

export const comunicacionSeminar = {
  hero: {
    headline: ["No te eligen por lo que sabés.", "Te eligen por cómo lo comunicás."],
    subtitle:
      "Aprendé herramientas prácticas de comunicación, oratoria, persuasión y relaciones humanas para aplicarlas en tu vida personal y profesional.",
    support: ["Clases grabadas", "Material de archivo", "Ejercicios", "Comunidad privada"],
  },
  situations: {
    eyebrow: "Para qué te sirve",
    title: "Situaciones en las que te sirve",
    items: [
      {
        title: "Hablar con seguridad",
        text: "Expresarte mejor, ordenar tus ideas y reducir el miedo a hablar frente a otros.",
      },
      {
        title: "Relacionarte mejor",
        text: "Iniciar conversaciones, escuchar y conectar con las personas.",
      },
      {
        title: "Vender tus ideas",
        text: "Explicar el valor de lo que ofrecés, resolver objeciones y generar confianza.",
      },
      {
        title: "Crear contenido",
        text: "Comunicarte frente a cámara, construir mensajes y captar la atención.",
      },
    ],
  },
  promise: {
    eyebrow: "La promesa",
    title: "Hacé que te elijan",
    text: "Aprendé a leer a las personas, conectar en minutos e influir con ética. Son los fundamentos de la comunicación que nadie te enseñó y que definen si te eligen o no.",
    extra:
      "En la primera semana tenés una conversación distinta: hacés las preguntas correctas, escuchás de verdad y la otra persona termina contándote lo que realmente le importa.",
  },
  proof: {
    eyebrow: "Mi trabajo",
    title: "Lo que enseño, lo aplico todos los días",
    text: "No te pido que me creas. Mirá cómo comunico.",
    tiktokUser: "santiroccalote",
    updated: "Seguidores al 27 de octubre de 2026.",
    links: [
      {
        name: "TikTok",
        href: "https://www.tiktok.com/@santiroccalote",
        count: "71,1 mil",
        unit: "seguidores",
      },
      {
        name: "YouTube",
        href: "https://www.youtube.com/@santiagoroccalote",
        count: "",
        unit: "",
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/santiagorocca/",
        count: "49,8 mil",
        unit: "seguidores",
      },
      {
        name: "Instagram del podcast",
        href: "https://www.instagram.com/viveparacontarlo_/",
        count: "27,7 mil",
        unit: "seguidores",
      },
      {
        name: "Podcast en Spotify",
        href: "https://open.spotify.com/show/4Q2IgSrlVU61LQzlX6hzMv",
        count: "",
        unit: "",
      },
    ],
  },
  whySell: {
    eyebrow: "Mi historia con esto",
    title: "¿Por qué vendo este seminario?",
    paragraphs: [
      "Antes me costaba hablar. Me trababa, dudaba, no sabía cómo conectar con la gente.",
      "Estudié en la facultad de comunicación, hice seminarios, me pagué cursos de oratoria y consumí horas y horas de YouTube y podcasts sobre el tema. Cuanto más entendía cómo funciona la comunicación, más confianza ganaba para relacionarme.",
      "Cuando empecé a construir mi marca personal en redes, empezó a pasar algo: la gente me escribía para pedirme que les enseñara a comunicar como comunico yo.",
    ],
    closing:
      "Este seminario es esa respuesta. Lo que me llevó años y mucha prueba y error, ordenado en clases para que vos ganes esa confianza mucho más rápido.",
  },
  cases: {
    eyebrow: "Encuesta del seminario",
    title: "Casos de éxito",
    text: "Esto contestaron alumnos que están haciendo el seminario.",
    items: [
      {
        name: "Damir",
        headline: "Frenó todo y hablamos 10 minutos",
        stage: "Mitad del seminario",
        feeling: "Se siente mucho más seguro",
        changed: "Dejó las muletillas, charla con facilidad y se fija en los detalles de cada persona.",
        proof:
          "Un compañero de trabajo pasaba a mil. Damir aplicó lo que vio en clase, hablarle a alguien de lo que le apasiona, y le preguntó por su torneo de jiu jitsu. Frenó en seco y charlaron 10 minutos.",
        quote: "Un 10.",
      },
      {
        name: "Francisco Arbelo",
        headline: "Lo ayudé a resolverlo con sus propias respuestas",
        stage: "Mitad del seminario",
        feeling: "Un poco más seguro",
        changed:
          "Aprendió a empatizar, a entender qué le quiere decir el otro y a que su mensaje llegue. También sumó técnicas para grabar videos.",
        proof:
          "Una persona cercana tenía un problema. En vez de darle consejos, le hizo preguntas y, con sus propias respuestas, encontró la solución.",
        quote:
          "10/10. Muy buenas las clases, que tenga clases semanales y sobre todo la práctica, es esencial. Los archivos de práctica potencian un montón el programa.",
      },
      {
        name: "Fernando Grau",
        headline: "Aprendí a leer a las personas",
        stage: "Mitad del seminario",
        feeling: "Un poco más seguro",
        changed:
          "Lee mejor qué quiere cada persona y cómo se quiere mostrar. Sumó lenguaje corporal y los 7 pecados capitales.",
        proof:
          "Un compañero de equipo quería que lo vieran como talentoso en algo. Fernando se lo reconoció, el compañero se sintió mejor y quiere seguir juntándose con él.",
        quote: "10/10.",
      },
      {
        name: "Facundo Astudillo",
        headline: "Ahora soy consciente de cómo me comunico",
        stage: "Recién empieza",
        feeling: "Se siente mucho más seguro",
        changed:
          "Más seguridad en la postura y los gestos, escucha más y mejor, habla más tranquilo y gana confianza y empatía.",
        proof:
          "Lo aplica todo el tiempo y ahora es consciente de cómo se comunica y de cómo lo percibe el otro.",
        quote: "Es muy bueno, estoy muy conforme de haberlo tomado.",
      },
      {
        name: "Valentino Indiveri",
        headline: "Aprendí a contar historias",
        stage: "Está terminando",
        feeling: "Un poco más seguro",
        changed: "Mejoró su forma de contar historias, siempre que habla con alguien.",
        proof: "",
        quote: "Muy útil para quienes quieran mejorar su comunicación.",
      },
    ],
  },
  why: {
    eyebrow: "Por qué importa",
    title: "Por qué la comunicación importa",
    quote: "Primero buscá comprender; después, ser comprendido.",
    quoteAuthor: "Stephen Covey",
    quoteSource: "Los 7 hábitos de la gente altamente efectiva",
    paragraph:
      "Casi todo lo que conseguís en la vida pasa por otra persona. Una venta, un acuerdo, un vínculo, una idea que querés que prospere. Y sin embargo nadie nos enseña a comunicarnos: damos por sentado que hablar es lo mismo que comunicar. No lo es. La diferencia entre alguien que genera confianza en dos minutos y alguien que no la genera nunca no es carisma ni suerte — son habilidades concretas, y se aprenden.",
  },
  route: {
    eyebrow: "El programa",
    title: "La ruta, paso a paso",
    intro:
      "No es teoría suelta: cada tema te lleva al siguiente, en orden, y lo practicás en cada clase.",
    steps: [
      {
        title: "Leer a las personas",
        text: "Entender qué mueve a cada persona, escuchar de verdad y hacer las preguntas correctas.",
      },
      {
        title: "Conectar sin forzar",
        text: "Iniciar conversaciones y generar confianza en minutos, de forma natural.",
      },
      {
        title: "Persuadir con ética",
        text: "Influir en las decisiones de los demás sin manipular, entendiendo cómo funciona el ego y qué le importa a cada uno.",
      },
      {
        title: "Armar un discurso que se recuerde",
        text: "Ordenar tus ideas y contarlas con una estructura clara, para que lo que decís quede en la memoria.",
      },
      {
        title: "Usar tu voz y tu cuerpo a favor",
        text: "Oratoria práctica: transmitir seguridad, perder la vergüenza y reducir el miedo a hablar frente a otros.",
      },
      {
        title: "Llevarlo a las ventas y al contenido",
        text: "Explicar el valor de lo que ofrecés, resolver objeciones y comunicarte frente a cámara con mensajes que captan la atención.",
      },
    ],
    note: "Cada clase trae material de archivo y ejercicios prácticos. En el plan completo, además, devolución personalizada sobre lo que hacés.",
  },
  includes: {
    eyebrow: "Contenido",
    title: "¿Qué incluye el programa?",
    intro:
      "El objetivo es que entiendas los fundamentos de la comunicación y las relaciones humanas, y que puedas aplicarlos en situaciones reales: frente a cámara, en una venta, en una conversación, al crear contenido o al presentar una idea.",
    items: [
      {
        title: "Las clases de comunicación",
        text: "La ruta principal, en orden. Aprendés a entender qué mueve a cada persona, a conectar sin forzar, a persuadir con ética, a armar un discurso que se recuerde y a usar tu voz y tu cuerpo a favor. Cada clase trae material de archivo, ejercicios prácticos y devolución sobre lo que hacés.",
      },
      {
        title: "Contenido extra",
        text: "Una biblioteca que crece todos los meses:",
        bullets: [
          "Clases pregrabadas para profundizar en cada tema.",
          "Creación de contenido: estrategia, organización, formatos y los atajos que uso para crear y publicar.",
          "El podcast por dentro: fragmentos de Vive Para Contarlo comentados, para ver cómo comunican personas reales.",
        ],
      },
      {
        title: "Kit de herramientas",
        text: "Plantillas listas para usar: estructura de discurso, persuasión PAS, banco de hooks y ficha para leer a las personas. Las abrís, las completás y salís con el mensaje armado.",
      },
      {
        title: "Comunidad privada",
        text: "Un grupo de WhatsApp solo para comunicación: tips, ejemplos y recursos extra para seguir practicando fuera de las clases.",
      },
      {
        title: "Acceso de por vida, siempre actualizado",
        text: "Entrás una vez y es tuyo para siempre. Cada clase nueva, cada recurso y cada mejora que se sume al programa ya está incluido, sin pagar de nuevo. El programa que comprás hoy va a ser más completo dentro de seis meses, y más completo todavía dentro de un año. Y vos vas a tener acceso a todo.",
      },
    ] as { title: string; text: string; bullets?: string[] }[],
    programLink: "https://docs.google.com/document/d/1pISaksjJ3d0CV9hEbLIrEtQRdqsUQ7e4czuU-BASEaI/edit?tab=t.0",
  },
  closing:
    "La idea no es que termines sabiendo más teoría. Es que empieces a observar mejor, preguntar mejor, expresarte mejor, y a entender qué hace que una comunicación genere confianza, atención, emoción e influencia.",
  faq: {
    eyebrow: "Dudas",
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Para quién es este seminario? ¿Hace falta experiencia previa?",
        a: "Es para cualquiera que quiera comunicar mejor: expresarse con más seguridad, perder la vergüenza, persuadir, ganar amigos, vender más, crear mejor contenido y contar lo que hace, su trabajo y su vida con más impacto. No hace falta experiencia previa.",
      },
      {
        q: "¿Me sirve si quiero vender o crear contenido, no solo hablar mejor?",
        a: "Sí, es clave. Hoy la mejor manera de vender es saber comunicar: le va mejor a quien sabe relacionarse que a quien solo conoce técnicas de venta. Vemos clases de ventas para mejorar tus resultados, y para crear contenido aprendés a armar mensajes que tu audiencia entienda y con los que conecte. De yapa, hablás y te relacionás mejor.",
      },
      {
        q: "Soy muy tímido, ¿me va a servir igual?",
        a: "Sí. Comunicando mejor te animás más, y por eso vas a ir perdiendo la vergüenza. Trabajamos entender a la otra persona, escuchar, hacer buenas preguntas y cómo funciona el ego.",
      },
      {
        q: "¿Qué diferencia hay con mirar videos gratis en YouTube?",
        a: "Cuando invertís en un programa lo tomás más en serio y lo vivís más. Además aprendés de alguien que ya está logrando resultados, con atención personalizada y la posibilidad de hacer preguntas. No es lo mismo aprender gratis que aprender de algo en lo que invertiste.",
      },
      {
        q: "¿Las clases son en vivo o grabadas? ¿Puedo verlas cuando quiero?",
        a: "Hay de las dos: clases pregrabadas y clases en vivo, que se coordinan semana a semana con los alumnos. Todas quedan grabadas en un drive, así que podés verlas cuando quieras.",
      },
      {
        q: "¿Cuánto tiempo tengo acceso?",
        a: "De por vida. Una vez que entrás, tenés acceso a las clases y a todo el contenido nuevo que se vaya sumando, y a la comunidad en el plan que la incluye.",
      },
      {
        q: "¿Cada cuánto se agrega contenido nuevo?",
        a: "Varias veces por mes. Sumamos contenido del podcast y contenido extra para mejorar en distintas áreas de la comunicación: redes, publicidad, ventas, trucos, hacks y cómo mejorar tu vocabulario. Además, todas las semanas mandamos más información a la comunidad privada.",
      },
      {
        q: "¿Cómo funciona la comunidad de WhatsApp? ¿Respondés vos?",
        a: "La manejo yo junto con mi equipo: entre todos respondemos y estamos atentos a lo que necesites.",
      },
      {
        q: "¿Cuánto sale y cómo se paga? ¿Se puede en cuotas?",
        a: "El Seminario grabado sale $80.000 e incluye las clases pregrabadas, sin comunidad ni clases en vivo. El Seminario + en vivo sale $250.000 y se puede pagar en 3 o 6 cuotas. Pagás desde Hotmart, con distintos medios de pago.",
      },
      {
        q: "¿Hay garantía?",
        a: "Sí. El plan Seminario + en vivo tiene la Garantía Doble Apuesta: hacés las primeras 3 clases y sus ejercicios, y si no sentís que ganaste confianza y que te relacionás mejor, te devuelvo el 100% de tu dinero y además te quedás en la comunidad, gratis.",
      },
    ],
  },
  pricing: {
    eyebrow: "Inversión",
    title: "Elegí tu plan",
    launch: {
      badge: "Precio de lanzamiento por tiempo limitado",
      text: "Estoy arrancando el programa y doy una clase en vivo por semana. Mientras lo completo, entrás a este precio. Cuando esté terminado, el precio sube, y quien ya entró conserva todo lo que se sume después.",
    },
    plans: [
      {
        name: "Seminario grabado",
        price: "$80.000",
        items: ["Clases grabadas", "Material de archivo", "Ejercicios"],
        highlight: false,
        payLink: "https://pay.hotmart.com/L107326163T?off=yxlzcbwe",
      },
      {
        name: "Seminario + en vivo",
        price: "$250.000",
        items: [
          "Todo lo del plan grabado",
          "Clases en vivo, una por semana",
          "Devolución personalizada sobre tus ejercicios: qué hacés bien y qué mejorar",
          "Comunidad privada de WhatsApp: practicás con otros alumnos, te enterás de cada clase nueva y recibís tips y recursos todas las semanas",
          "Garantía Doble Apuesta",
        ],
        highlight: true,
        payLink: "https://pay.hotmart.com/L107326163T?off=85kyksiq",
      },
    ],
    payLabel: "Apretá acá para pagar",
    assurances: ["3 y 6 cuotas"],
    guarantee: {
      title: "Garantía Doble Apuesta",
      paragraphs: [
        "Hacé las primeras 3 clases y sus ejercicios. Si no sentís que ganaste confianza y que te relacionás mejor, te devuelvo el 100% de tu dinero. Y además te quedás en la comunidad, gratis.",
        "Apuesto doble porque sé lo que pasa cuando empezás a aplicar esto.",
      ],
      note: "Válida para el plan Seminario + en vivo.",
    },
    cta: {
      title: "También podés anotarte por WhatsApp",
      message: "Hola! Quiero anotarme al seminario de Comunicación.",
    },
  },
};

// ---------------------------------------------------------------------------
// Comunidad (WhatsApp)
// ---------------------------------------------------------------------------

export const community = {
  channel: "WhatsApp",
  whatsappLink: "https://chat.whatsapp.com/LxfhQ9o3sWYFRCpIzvLVhk?s=cl&p=i&mlu=4&amv=0",
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

