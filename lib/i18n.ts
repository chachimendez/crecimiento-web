// Single source of truth for all site copy, in both languages.
// EN is canonical; ES is the rioplatense version (technical terms stay in English).

export type Lang = "en" | "es";

const en = {
  nav: {
    home: "Home",
    blog: "Blog",
    about: "About us",
  },
  hero: {
    // Definition, display version (subject is the wordmark above)
    defPre: "A foundation driving ",
    defBold: "Argentina's",
    defMid: " tech ecosystem to position the country as a ",
    defBoldItalic: "global hub for innovation",
    defPost: ".",
    impactBold: "OUR",
    impactItalic: "IMPACT",
    stats: [
      { target: 15000, label: "People through our programs" },
      { target: 200, label: "Startups accelerated" },
      { target: 220, label: "Programs" },
      { target: 100, label: "Partners" },
    ],
    discover: "DISCOVER",
    scrollAria: "Scroll to the next section",
  },
  opportunity: {
    eyebrow: "OUR VISION",
    titleLight: "THE ",
    titleBold: "ARGENTINA",
    titleItalicBlue: "OPPORTUNITY",
    introPre:
      "Argentina's tech ecosystem is in motion: startups raising capital week after week, engineers leading global teams, products built here running across the region. ",
    introBold:
      "Behind that motion, Argentina has all the conditions to become a global hub for innovation.",
    pillars: [
      {
        tag: "/TOP TALENT",
        text: "Argentina produces world-class engineers, scientists, developers and founders. Many hold key roles in the world's leading technology companies.",
      },
      {
        tag: "/REAL NEED",
        text: "Necessity shapes what gets built here. Argentine builders live close to real problems, and their products are built to solve them.",
      },
      {
        tag: "/INSTITUTIONAL SUPPORT",
        text: "The public sector is listening and responding to the needs of those who build, working toward a regulatory framework that matches the ecosystem's pace.",
      },
    ],
    closingLight: "The conditions took decades to build. ",
    closingBold: "The convergence is happening now.",
    mapAria: "Dot map of Argentina",
  },
  whatWeDo: {
    statementPre: "CRECIMIENTO EMERGES AS A RESPONSE TO WHAT IS ",
    statementBlue: "ALREADY HAPPENING IN ARGENTINA.",
    bodyPre:
      "Every startup that scales solves a concrete problem for real people. Crecimiento exists so that more of them succeed: an interconnected ecosystem of programs and initiatives that creates the conditions for collaboration and experimentation, supporting founders at every stage and connecting them with the right people at the right time. ",
    bodyBold: "Our work stands on three fronts.",
    fronts: [
      {
        tag: "/COWORK",
        img: "/images/front-cowork-1.jpg",
        alt: "Builders working at the Aleph Hub in Buenos Aires",
        text: "Aleph Hub, our permanent home in Buenos Aires, hosts the programs, the events and the daily activity of the ecosystem.",
      },
      {
        tag: "/PROGRAMS",
        img: "/images/front-programs-1.jpg",
        alt: "A Crecimiento program session full of builders",
        text: "A system of programs that supports startups and founders at every stage, connecting them with mentors, investors and international partners.",
      },
      {
        tag: "/REGULATORY EFFORTS",
        img: "/images/front-regulatory-1.jpg",
        alt: "A regulatory roundtable between builders and institutions",
        text: "Crecimiento bridges the public and private sectors, bringing the needs of those who build into the regulatory conversation.",
      },
    ],
  },
  programs: {
    nextEvent: "Next flagship event",
    ldacImg: "/images/ldac-banner.jpg",
    ldacBtn: { left: "41.5%", top: "70.3%", width: "24%", height: "11%" },
    ldacAlt:
      "Latam Digital Assets Conf: a two-day institutional conference at the intersection of digital assets, traditional finance, and regulation. August 20 and 21, Buenos Aires.",
    discoverMore: "DISCOVER MORE",
    eyebrow: "Our programs and initiatives",
    titleLight: "THE ",
    titleBold: "CRECIMIENTO",
    titleItalic: "ECOSYSTEM",
    items: [
      {
        title: "Aleph",
        tag: "Pop Up City",
        img: "/images/Programs/aleph.png",
        description:
          "A month-long event where the ecosystem gathers to live and build together in Buenos Aires, combining a formal agenda of hackathons, summits, demo days, workshops and thematic days such as Regulation Day or AI Day with programming created by the community itself. Across five editions, more than 10,000 people took part.",
      },
      {
        title: "Aleph Hackathon",
        tag: "From Idea to Project",
        img: "/images/Programs/hackathon.png",
        description:
          "Crecimiento's flagship hackathon: an intensive, multi-day event where builders, founders, developers and students create projects across the ecosystem's most relevant verticals. More than 3,000 hackers took part across its five editions, with tracks in different technologies such as crypto, AI, biotech and robotics.",
      },
      {
        title: "Regulation Day",
        tag: "Policy Dialogue",
        img: "/images/Programs/regulation-day.jpg",
        description:
          "It gathers regulators, lawmakers, industry chambers and private-sector leaders to build bridges between the public sector and the innovation ecosystem. Its five editions brought together more than 300 speakers, with an agenda that follows the regulatory questions of each moment: digital assets, stablecoins, tokenization, compliance, AI and special economic zones.",
      },
      {
        title: "Acceleration Program",
        tag: "Accelerate",
        img: "/images/Programs/acceleration.png",
        description:
          "Six-week programs where startups refine their product, ending in a demo day in front of global investors. Selected teams get structured mentorship, masterclasses, technical support and office hours with the teams of the protocols involved. Crecimiento has run them alongside the Uniswap Foundation, twice, and Lisk.",
      },
      {
        title: "Startup World Cup",
        tag: "Pitch Competition",
        img: "/images/Programs/startup-world-cup.jpg",
        description:
          "Crecimiento's own competition, where the ecosystem's startups pitch in front of investors and industry leaders. Its first edition took place during Devconnect Buenos Aires, with 200+ teams competing.",
      },
      {
        title: "Technical Summits",
        tag: "Thematic Conferences",
        img: "/images/Programs/technical-summits.jpg",
        description:
          "Crecimiento's thematic conferences: one-day gatherings, each dedicated to a specific field of the ecosystem, bringing together builders, specialists, companies and, depending on the topic, regulators and institutions. Three verticals so far: Privacy, Fintech and DeFi.",
      },
      {
        title: "Halketon",
        tag: "Tech for Good",
        img: "/images/Programs/halketon-card.jpg",
        description:
          "A tech-for-good hackathon where builders spend a full day creating solutions for the real needs of NGOs: tools for donations, operations and outreach. Its first edition brought together more than 100 builders working for 18 organizations.",
      },
      {
        title: "Buenos Aires Ethereum Community Hub",
        tag: "Community",
        img: "/images/Programs/eth-hub.png",
        description:
          "The first official Ethereum Community Hub in Latin America, supported by Ethereum Everywhere, with monthly meetups and weekly coworking days at Aleph Hub.",
      },
    ],
    spinoffsLabel: "Spin-offs",
    spinoffs: [
      {
        title: "Lucero Ventures",
        href: "https://www.lucero.vc/",
        img: "/images/Programs/lucero-white.jpg",
        description:
          "An early-stage venture fund backing exceptional founders in crypto, AI and emerging tech.",
      },
      {
        title: "Anden",
        href: "https://www.anden.tech/",
        img: "/images/Programs/anden.jpg",
        description:
          "An operator of special economic regimes, created to promote Argentina's first digital special economic zone.",
      },
      {
        title: "Founder School",
        href: "https://founderschool.build/",
        img: "/images/Programs/founder-school-card.jpg",
        description:
          "A free, global training program for early-stage founders. More than 280 founders have gone through its cohorts.",
      },
    ],
  },
  partners: {
    titleBold: "Global",
    titleBlue: "Allies",
    subtitle:
      "Partners, foundations, and communities building together across borders.",
    cta: "Want to become an ally? Get in touch →",
    communityAlt: "The Crecimiento community",
  },
  blog: {
    titleLight: "WHAT'S NEW IN THE ",
    titleBold: "ECOSYSTEM",
    empty: "Notes are on their way.",
    readMore: "Read more →",
    back: "← Back to the blog",
    searchPlaceholder: "Search the blog",
    noResults: "No posts match your search.",
    description:
      "Stories, programs and milestones from Argentina's tech ecosystem.",
    basePath: "/blog",
  },
  footer: {
    columns: [
      [
        { label: "About Us", href: "/about", external: false },
        { label: "Blog", href: "/blog", external: false },
      ],
      [
        {
          label: "Newsletter",
          href: "https://build.us13.list-manage.com/subscribe?u=60b930baa003769c7f659afd0&id=31c6fe553e",
          external: true,
        },
        { label: "Media Kit", href: "/media-kit", external: false },
        { label: "Calendar", href: "https://luma.com/crecimiento", external: true },
      ],
      [
        { label: "Telegram", href: "https://t.me/+UfzEgPbzXB43ZjE0", external: true },
        { label: "Twitter", href: "https://x.com/crecimientoar", external: true },
        { label: "LinkedIn", href: "https://www.linkedin.com/company/crecimientobuild/", external: true },
        { label: "Instagram", href: "https://www.instagram.com/crecimientoar", external: true },
        { label: "YouTube", href: "https://www.youtube.com/@Crecimientoar", external: true },
      ],
    ],
    rights: "All rights reserved.",
  },
  about: {
    titleLight: "OUR",
    titleItalic: "JOURNEY",
    intro: [
      "Over the past decade, Argentina has become one of the most dynamic crypto and tech ecosystems in the region.",
      "In 2024, founders, builders, investors, and policy leaders converged around a shared conviction: Argentina has the potential to become a global hub for crypto. From that conviction, the first Pop-Up City was born.",
      "Crecimiento was created to sustain and scale that momentum, empowering startups, strengthening infrastructure, and connecting talent, capital, and institutions.",
      "What began as a crypto-native experiment quickly evolved into a long-term platform for Argentina's technological expansion. In less than two years, more than 15,000 people have participated in our programs.",
    ],
    journeyBeganPre: "AND SO THE ",
    journeyBeganItalic: "JOURNEY BEGAN…",
    numbers: [
      { value: "+15,000", label: "People through our programs" },
      { value: "+1,000", label: "Startups in the ecosystem" },
      { value: "+200", label: "Startups accelerated" },
      { value: "+220", label: "Programs" },
      { value: "+100", label: "Partners" },
    ],
    seasons: [
      {
        date: "AUGUST 2024",
        season: "SEASON 1",
        name: "BIRTH",
        event: "Aleph, Ciudad de Crecimiento",
        eventDetail: "Buenos Aires, Argentina",
        attendance: "Duration: 1 month",
        paragraph:
          "It all began as a pop-up city. For one month, international builders and the local crypto community shared a single space in Buenos Aires, working around one conviction: Argentina could become a global hub. That experience gave the movement its name, its method and its first community.",
        rows: [
          { label: "Milestone", text: "The Crecimiento movement is born." },
          {
            label: "First Regulation Day",
            text: "The largest public-private Web3 gathering in Argentina.",
          },
          {
            label: "First startups in the ecosystem",
            text: "70 startups accelerated.",
          },
          { label: "Community", text: "+3,000 attendees in one month." },
        ],
      },
      {
        date: "NOVEMBER — DECEMBER 2024",
        season: "SEASON 2",
        name: "EXPANDING NETWORK",
        event: "Aleph de Verano",
        eventDetail: "Buenos Aires, Argentina",
        attendance: "",
        paragraph:
          "The movement consolidated into a long-term structure. The year closed with Aleph de Verano: two weeks of summer programming, more than one hundred speakers, a new edition of the Aleph Hackathon, and the participation of Vitalik Buterin.",
        rows: [
          {
            label: "Key launch",
            text: "Founder School opens its first cohort: free, global training for early-stage founders.",
          },
          {
            label: "Aleph Hub",
            text: "The cowork settles as the crypto and tech heart of the region, with regular programming and a community that shows up every week.",
          },
        ],
      },
      {
        date: "JANUARY — MARCH 2025",
        season: "SEASON 3",
        name: "MOMENTUM",
        event: "Aleph March '25",
        eventDetail: "Buenos Aires, Argentina",
        attendance: "",
        paragraph:
          "The ecosystem reconvened with startups at the center. Rayuela, the first startup competition, took 49 teams through six weeks of building toward a demo day in front of investors, while the third Regulation Day kept the regulatory conversation moving.",
        rows: [
          {
            label: "Key program",
            text: "Rayuela closes with a Demo Day in front of investors. 49 startups accelerated through six weeks of building.",
          },
          {
            label: "First AI Day",
            text: "The start of regular programming around AI.",
          },
        ],
      },
      {
        date: "APRIL — NOVEMBER 2025",
        season: "SEASON 4",
        name: "BRING ARGENTINA ONCHAIN",
        event: "Aleph Festival",
        eventDetail: "August — November, Buenos Aires, Argentina",
        attendance: "",
        paragraph:
          "The season ran from April to November under one flag: the Bring Argentina Onchain campaign, all of it pointing to Devconnect. Aleph Festival was the strongest bet for the ecosystem's startups: the Builder Funnel took teams from the Aleph Hackathon through acceleration to the Startup World Cup. Around it, the Hub moved 1,500 people a month, hosting more than 100 programs with partners and a series of technical summits.",
        rows: [
          {
            label: "Milestone",
            text: "The world comes to see it: Devconnect lands in Buenos Aires with 15,000 people.",
          },
          {
            label: "Aleph Hackathon",
            text: "The largest hackathon in Latin America, with 1,300+ hackers.",
          },
          {
            label: "Acceleration Season",
            text: "Run alongside the Uniswap Foundation and Lisk.",
          },
          {
            label: "Startup World Cup",
            text: "Its first edition, with a Grand Finale at Devconnect.",
          },
          {
            label: "Regulation Day",
            text: "Its fourth edition, held within Devconnect.",
          },
        ],
      },
    ],
    s5Date: "2026 — TODAY",
    s5Title: "SEASON 5",
    s5Name: "NEW FRONTIERS",
    s5Paragraphs: [
      "Crecimiento grew beyond crypto. The talent is there across every edge of tech, and the method that worked for one vertical now supports many: AI, biotech and frontier tech joined the map, driven by the same conviction. The season bets on federalizing the movement across Argentina and Latin America, and on placing AI at the center of programs and community.",
      "The season opened with Aleph March '26 and a new permanent home at Workplace by IRSA. Next stop: Aleph Week, this August, with the Latam Digital Assets Conference and a new edition of the Aleph Hackathon.",
    ],
    metaTitle: "About Us",
    metaDescription:
      "Crecimiento is a foundation driving Argentina's tech ecosystem to position the country as a global hub for innovation.",
  },
};

type Dict = typeof en;

const es: Dict = {
  nav: {
    home: "Inicio",
    blog: "Blog",
    about: "Sobre nosotros",
  },
  hero: {
    defPre: "Una fundación que impulsa al ecosistema tech ",
    defBold: "argentino",
    defMid: " para posicionar al país como ",
    defBoldItalic: "hub global de innovación",
    defPost: ".",
    impactBold: "NUESTRO",
    impactItalic: "IMPACTO",
    stats: [
      { target: 15000, label: "Pasaron por nuestros programas" },
      { target: 200, label: "Startups aceleradas" },
      { target: 220, label: "Programas" },
      { target: 100, label: "Partners" },
    ],
    discover: "DESCUBRIR",
    scrollAria: "Bajar a la siguiente sección",
  },
  opportunity: {
    eyebrow: "NUESTRA VISIÓN",
    titleLight: "LA ",
    titleBold: "OPORTUNIDAD",
    titleItalicBlue: "DE ARGENTINA",
    introPre:
      "El ecosistema tech argentino no para de crecer: noticias de startups que levantan inversiones cada semana, argentinos liderando equipos de las principales empresas de la industria, productos hechos acá utilizados en toda la región. ",
    introBold:
      "Detrás de ese crecimiento, Argentina tiene todas las condiciones para convertirse en un hub global de innovación.",
    pillars: [
      {
        tag: "/TALENTO",
        text: "Argentina tiene ingenieros, científicos, desarrolladores y founders de nivel mundial. Muchos ocupan roles clave en las principales empresas de tecnología del mundo.",
      },
      {
        tag: "/NECESIDAD REAL",
        text: "Acá se construye a partir de la necesidad de resolver problemas. Los builders argentinos viven cerca de problemas estructurales, y sus productos nacen para resolverlos.",
      },
      {
        tag: "/APOYO INSTITUCIONAL",
        text: "El sector público escucha y responde a las necesidades de los que construyen, avanzando hacia un marco regulatorio a la altura del ritmo del ecosistema.",
      },
    ],
    closingLight: "Las condiciones tardaron décadas en construirse. ",
    closingBold: "La convergencia está pasando ahora.",
    mapAria: "Mapa punteado de Argentina",
  },
  whatWeDo: {
    statementPre: "CRECIMIENTO NACE COMO RESPUESTA A LO QUE ",
    statementBlue: "YA ESTÁ PASANDO EN ARGENTINA.",
    bodyPre:
      "Cada startup que escala resuelve un problema concreto para el resto de la población. Crecimiento existe para que más lo logren: un ecosistema interconectado de programas e iniciativas que crea las condiciones para colaborar y experimentar, acompañando a los founders en cada etapa y conectándolos con las personas correctas en el momento correcto. ",
    bodyBold: "Nuestro trabajo se apoya en tres frentes.",
    fronts: [
      {
        tag: "/COWORK",
        img: "/images/front-cowork-1.jpg",
        alt: "Builders trabajando en el Aleph Hub de Buenos Aires",
        text: "Aleph Hub, nuestro Hub permanente en Buenos Aires, aloja los programas, los eventos y la actividad cotidiana del ecosistema.",
      },
      {
        tag: "/PROGRAMAS",
        img: "/images/front-programs-1.jpg",
        alt: "Una sesión de programa de Crecimiento llena de builders",
        text: "Un sistema de programas que acompaña a startups y founders en cada etapa, conectándolos con mentores, inversores y partners internacionales.",
      },
      {
        tag: "/TRABAJO REGULATORIO",
        img: "/images/front-regulatory-1.jpg",
        alt: "Una mesa regulatoria entre builders e instituciones",
        text: "Crecimiento tiende puentes entre el sector público y el privado, llevando las necesidades de los que construyen a la conversación regulatoria.",
      },
    ],
  },
  programs: {
    nextEvent: "Próximo gran evento",
    ldacImg: "/images/ldac-banner-es.jpg",
    ldacBtn: { left: "42.1%", top: "71.4%", width: "22.5%", height: "8.8%" },
    ldacAlt:
      "Latam Digital Assets Conf: una conferencia institucional de dos días en la intersección entre activos digitales, finanzas tradicionales y regulación. 20 y 21 de agosto, Buenos Aires.",
    discoverMore: "CONOCÉ MÁS",
    eyebrow: "Nuestros programas e iniciativas",
    titleLight: "EL ",
    titleBold: "ECOSISTEMA",
    titleItalic: "DE CRECIMIENTO",
    items: [
      {
        title: "Aleph",
        tag: "Pop Up City",
        img: "/images/Programs/aleph.png",
        description:
          "Un evento de un mes donde el ecosistema local e internacional se juntan a convivir y construir en Buenos Aires, combinando una agenda propia de hackathons, summits, demo days, workshops y días temáticos con la programación que aporta la propia comunidad. En cinco ediciones participaron más de 10.000 personas.",
      },
      {
        title: "Aleph Hackathon",
        tag: "De la idea al proyecto",
        img: "/images/Programs/hackathon.png",
        description:
          "El hackathon insignia de Crecimiento: un evento intensivo de varios días donde builders, founders, desarrolladores y estudiantes construyen proyectos en las verticales más relevantes del ecosistema. Más de 3.000 hackers participaron en sus cinco ediciones, con tracks en distintas tecnologías como cripto, IA, biotech y robótica.",
      },
      {
        title: "Regulation Day",
        tag: "Diálogo regulatorio",
        img: "/images/Programs/regulation-day.jpg",
        description:
          "Reúne a reguladores, legisladores, cámaras y líderes del sector privado para construir puentes entre el sector público y el ecosistema de innovación. Sus cinco ediciones juntaron a más de 300 speakers, con una agenda que sigue los temas regulatorios de cada momento: activos digitales, stablecoins, tokenización, compliance, IA y zonas económicas especiales.",
      },
      {
        title: "Acceleration Program",
        tag: "Aceleración",
        img: "/images/Programs/acceleration.png",
        description:
          "Programas de seis semanas donde las startups afinan su producto, con cierre en un demo day frente a inversores globales. Los equipos seleccionados reciben mentoría estructurada, masterclasses, soporte técnico y office hours con los equipos de los protocolos involucrados. Ya se corrieron programas junto a Uniswap Foundation, dos veces, y Lisk.",
      },
      {
        title: "Startup World Cup",
        tag: "Competencia de pitch",
        img: "/images/Programs/startup-world-cup.jpg",
        description:
          "Una competencia donde las startups del ecosistema pitchean frente a inversores y líderes de la industria. Su primera edición fue durante Devconnect Buenos Aires, con más de 200 equipos compitiendo.",
      },
      {
        title: "Technical Summits",
        tag: "Conferencias temáticas",
        img: "/images/Programs/technical-summits.jpg",
        description:
          "Las conferencias temáticas de Crecimiento: encuentros de una jornada, cada uno dedicado a un campo específico del ecosistema, que reúnen a builders, especialistas, empresas y, según el tema, a reguladores e instituciones. Se desarrollan en tres verticales hasta ahora: Privacy, Fintech y DeFi.",
      },
      {
        title: "Halketon",
        tag: "Tech for Good",
        img: "/images/Programs/halketon-card.jpg",
        description:
          "Un hackathon de impacto social donde los builders pasan un día entero creando soluciones para necesidades reales de ONGs: herramientas de donaciones, gestión y difusión. Su primera edición reunió a más de 100 builders trabajando para 18 organizaciones.",
      },
      {
        title: "Buenos Aires Ethereum Community Hub",
        tag: "Comunidad",
        img: "/images/Programs/eth-hub.png",
        description:
          "El primer Ethereum Community Hub oficial de Latinoamérica, con el apoyo de Ethereum Everywhere, con meetups mensuales y coworking days semanales en el Aleph Hub.",
      },
    ],
    spinoffsLabel: "Spin-offs",
    spinoffs: [
      {
        title: "Lucero Ventures",
        href: "https://www.lucero.vc/",
        img: "/images/Programs/lucero-white.jpg",
        description:
          "Un fondo de inversión de etapa temprana que apuesta por founders de LATAM en cripto, IA y emerging tech.",
      },
      {
        title: "Andén",
        href: "https://www.anden.tech/",
        img: "/images/Programs/anden.jpg",
        description:
          "Una operadora de regímenes económicos especiales, creada para impulsar la primera zona económica digital especial de Argentina.",
      },
      {
        title: "Founder School",
        href: "https://founderschool.build/",
        img: "/images/Programs/founder-school-card.jpg",
        description:
          "Un programa de formación gratuito y global para founders en etapa temprana. Más de 280 founders pasaron por sus cohortes.",
      },
    ],
  },
  partners: {
    titleBold: "Aliados",
    titleBlue: "Globales",
    subtitle:
      "Partners, comunidades y empresas construyendo junto a nosotros.",
    cta: "¿Querés sumarte como aliado? Escribinos →",
    communityAlt: "La comunidad de Crecimiento",
  },
  blog: {
    titleLight: "LO NUEVO EN EL ",
    titleBold: "ECOSISTEMA",
    empty: "Las notas están en camino.",
    readMore: "Leer más →",
    back: "← Volver al blog",
    searchPlaceholder: "Buscar en el blog",
    noResults: "No hay notas que coincidan con tu búsqueda.",
    description:
      "Historias, programas e hitos del ecosistema tech argentino.",
    basePath: "/es/blog",
  },
  footer: {
    columns: [
      [
        { label: "Sobre nosotros", href: "/es/about", external: false },
        { label: "Blog", href: "/es/blog", external: false },
      ],
      [
        {
          label: "Newsletter",
          href: "https://build.us13.list-manage.com/subscribe?u=60b930baa003769c7f659afd0&id=31c6fe553e",
          external: true,
        },
        { label: "Media Kit", href: "/media-kit", external: false },
        { label: "Calendario", href: "https://luma.com/crecimiento", external: true },
      ],
      [
        { label: "Telegram", href: "https://t.me/+UfzEgPbzXB43ZjE0", external: true },
        { label: "Twitter", href: "https://x.com/crecimientoar", external: true },
        { label: "LinkedIn", href: "https://www.linkedin.com/company/crecimientobuild/", external: true },
        { label: "Instagram", href: "https://www.instagram.com/crecimientoar", external: true },
        { label: "YouTube", href: "https://www.youtube.com/@Crecimientoar", external: true },
      ],
    ],
    rights: "Todos los derechos reservados.",
  },
  about: {
    titleLight: "NUESTRO",
    titleItalic: "CAMINO",
    intro: [
      "En la última década, Argentina se convirtió en uno de los ecosistemas cripto y tech más dinámicos de la región.",
      "En 2024, founders, builders, inversores y referentes de política pública convergieron alrededor de una convicción compartida: Argentina tiene el potencial de convertirse en un hub global de cripto. De esa convicción nació la primera Pop-Up City.",
      "Crecimiento fue creado para sostener y escalar ese momentum: potenciando startups, fortaleciendo infraestructura y conectando talento, capital e instituciones.",
      "Lo que empezó como un experimento cripto-nativo se transformó rápido en una plataforma de largo plazo para la expansión tecnológica argentina. En menos de dos años, más de 15.000 personas participaron de nuestros programas.",
    ],
    journeyBeganPre: "Y ASÍ EMPEZÓ EL ",
    journeyBeganItalic: "CAMINO…",
    numbers: [
      { value: "+15.000", label: "Pasaron por nuestros programas" },
      { value: "+1.000", label: "Startups en el ecosistema" },
      { value: "+200", label: "Startups aceleradas" },
      { value: "+220", label: "Programas" },
      { value: "+100", label: "Partners" },
    ],
    seasons: [
      {
        date: "AGOSTO 2024",
        season: "SEASON 1",
        name: "NACIMIENTO",
        event: "Aleph, Ciudad de Crecimiento",
        eventDetail: "Buenos Aires, Argentina",
        attendance: "Duración: 1 mes",
        paragraph:
          "Todo empezó como una pop-up city. Durante un mes, builders internacionales y la comunidad cripto local compartieron un mismo espacio en Buenos Aires, trabajando alrededor de una convicción: Argentina podía convertirse en un hub global. Esa experiencia le dio al movimiento su nombre, su método y su primera comunidad.",
        rows: [
          { label: "Hito", text: "Nace el movimiento Crecimiento." },
          {
            label: "Primer Regulation Day",
            text: "El encuentro público-privado de Web3 más grande de Argentina.",
          },
          {
            label: "Primeras startups del ecosistema",
            text: "70 startups aceleradas.",
          },
          { label: "Comunidad", text: "+3.000 asistentes en un mes." },
        ],
      },
      {
        date: "NOVIEMBRE A DICIEMBRE 2024",
        season: "SEASON 2",
        name: "RED EN EXPANSIÓN",
        event: "Aleph de Verano",
        eventDetail: "Buenos Aires, Argentina",
        attendance: "",
        paragraph:
          "El movimiento se consolidó como una estructura de largo plazo. El año cerró con Aleph de Verano: dos semanas de programación de verano, más de cien speakers, una nueva edición del Aleph Hackathon y la participación de Vitalik Buterin.",
        rows: [
          {
            label: "Lanzamiento clave",
            text: "Founder School abre su primera cohorte: formación gratuita y global para founders en etapa temprana.",
          },
          {
            label: "Aleph Hub",
            text: "El cowork se asienta como el corazón cripto y tech de la región, con programación regular y una comunidad que vuelve cada semana.",
          },
        ],
      },
      {
        date: "ENERO A MARZO 2025",
        season: "SEASON 3",
        name: "MOMENTUM",
        event: "Aleph March '25",
        eventDetail: "Buenos Aires, Argentina",
        attendance: "",
        paragraph:
          "El ecosistema volvió a reunirse con las startups en el centro. Rayuela, la primera competencia de startups, llevó a 49 equipos por seis semanas de construcción hacia un demo day frente a inversores, mientras el tercer Regulation Day mantenía en movimiento la conversación regulatoria.",
        rows: [
          {
            label: "Programa clave",
            text: "Rayuela cierra con un Demo Day frente a inversores. 49 startups aceleradas en seis semanas de construcción.",
          },
          {
            label: "Primer AI Day",
            text: "El comienzo de la programación regular alrededor de la IA.",
          },
        ],
      },
      {
        date: "ABRIL A NOVIEMBRE 2025",
        season: "SEASON 4",
        name: "BRING ARGENTINA ONCHAIN",
        event: "Aleph Festival",
        eventDetail: "Agosto a noviembre, Buenos Aires, Argentina",
        attendance: "",
        paragraph:
          "La season corrió de abril a noviembre bajo una sola bandera: la campaña Bring Argentina Onchain, con todo apuntando a Devconnect. Aleph Festival fue la apuesta más fuerte para las startups del ecosistema: el Builder Funnel llevó a los equipos del Aleph Hackathon a la aceleración y de ahí a la Startup World Cup. Alrededor, el Hub movía 1.500 personas por mes, con más de 100 programas junto a partners y una serie de technical summits.",
        rows: [
          {
            label: "Hito",
            text: "El mundo viene a verlo: Devconnect aterriza en Buenos Aires con 15.000 personas.",
          },
          {
            label: "Aleph Hackathon",
            text: "El hackathon más grande de Latinoamérica, con más de 1.300 hackers.",
          },
          {
            label: "Acceleration Season",
            text: "Junto a Uniswap Foundation y Lisk.",
          },
          {
            label: "Startup World Cup",
            text: "Su primera edición, con la Gran Final en Devconnect.",
          },
          {
            label: "Regulation Day",
            text: "Su cuarta edición, en el marco de Devconnect.",
          },
        ],
      },
    ],
    s5Date: "2026 A HOY",
    s5Title: "SEASON 5",
    s5Name: "NUEVAS FRONTERAS",
    s5Paragraphs: [
      "Crecimiento creció más allá de cripto. El talento está en todas las aristas de la tecnología, y el método que funcionó para una vertical hoy sostiene varias: IA, biotech y frontier tech se sumaron al mapa, empujadas por la misma convicción. La season apuesta a federalizar el movimiento por Argentina y Latinoamérica, y a poner a la IA en el centro de los programas y la comunidad.",
      "La season abrió con Aleph March '26 y una nueva casa permanente en Workplace by IRSA. Próxima parada: Aleph Week, este agosto, con la Latam Digital Assets Conference y una nueva edición del Aleph Hackathon.",
    ],
    metaTitle: "Nosotros",
    metaDescription:
      "Crecimiento es una fundación que impulsa al ecosistema tech argentino para posicionar al país como hub global de innovación.",
  },
};

const dicts: Record<Lang, Dict> = { en, es };

export function getDict(lang: Lang): Dict {
  return dicts[lang];
}
