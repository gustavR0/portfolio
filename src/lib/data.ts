export const personalInfo = {
  name: "Gustavo Romero Oltehua",
  location: "Zongolica, Veracruz, México",
  email: "gustavro.dev@gmail.com",
  github: "https://github.com/gustavR0",
  linkedin: "https://www.linkedin.com/in/gustavo-romero-oltehua-643095196/",
};

export const workExperience = [
  {
    company: "Banamex",
    location: "Remoto",
    position: "Full Stack Developer",
    period: "Ene 2025 - Presente",
    achievements: [
      "Corregí vulnerabilidades en apps con Angular y Java 8 (Spring boot).",
      "Refactoricé código legacy y migré de Angular 15 a 17 y Node 18 a 20.",
      "Resolución de bugs y code smells más de 12 mil issues en SonarQube resueltos en 5 meses para Angular y Java.",
    ],
  },
  {
    company: "Citibanamex",
    location: "Remoto",
    position: "Full Stack Developer",
    period: "Jul 2023 - Dic 2024",
    achievements: [
      "Corregí vulnerabilidades en apps con Angular y Java 8 (Spring boot).",
      "Refactoricé código legacy y migré de Angular 10 a 15 y Node 16 a 18.",
      "Lideré investigación e implementación para la migración de node 16 a node 18 por jenkins.",
      "Optimicé procesos: desarrollé herramienta interna que redujo las migraciones de SQL Schema de 3 días a 1 minuto.",
    ],
  },
  {
    company: "Romegus WISP",
    location: "Freelance",
    position: "Full Stack Developer",
    period: "Ene 2022 - Jun 2023",
    achievements: [
      "Diseñe app desde cero control de ventas, reportes de fallas, estadísticas de red (usuarios conectados, ventas globales).",
      "Integre API para conexión directa a dispositivos de red (reinicio remoto, monitoreo).",
      "Aumenté conectividad de clientes y ventas con mejoras en la infraestructura.",
      "Implementé Docker para el despliegue eficiente.",
    ],
  },
  {
    company: "Tienda “el paso”",
    location: "Freelance",
    position: "Full Stack Developer",
    period: "Ene 2021 - Ene 2022",
    achievements: [
      "Sistema en tiempo real App para gestión de inventario (existencia, precios, altas y bajas).",
      "Versión de escritorio con impresión de tickets y sincronización sin conexión.",
      "Implementé Docker para el despliegue eficiente.",
    ],
  },
  {
    company: "Universidad Veracruzana",
    location: "Ixtazoquitlan, Veracruz, México (Presencial)",
    position: "Full Stack Developer",
    period: "May 2020 - Dic 2020",
    achievements: [
      "Diseñe y Desarrollé plataforma web de encuestas enfocado en la calidad de procesos para empresas.",
      "Panel administrativo con estadísticas segmentadas (empresa, región).",
      "Moduló de registro y generación de encuestas personalizadas.",
      "Modelado de base de datos.",
    ],
  },
  {
    company: "Romegus WISP",
    location: "Freelance",
    position: "Full Stack Developer",
    period: "Ene 2019 - Feb 2020",
    achievements: [
      "Mantenimiento y mejora a software de ventas para ISP (distribución de internet).",
      "Investigación y análisis para las conexiones de clientes, proponiendo optimizaciones.",
      "Rediseño de sistema análisis de requerimientos y desarrollo de prototipo para nueva plataforma.",
      "Modelado de base de datos, arquitectura base para futuro desarrollo y migración.",
    ],
  },
];

export const education = [
  {
    institution: "Licenciatura en ingenieria de software",
    location: "Ixtazoquitlan, Veracruz, México",
    degree: "Licenciatura en ingenieria de software",
    period: "Jun 2018 - Jun 2022",
    achievements: [],
  },
];
export const skills = {
  programmingLanguages: [
    "TypeScript",
    "JavaScript",
    "Java",
    "Php",
  ],
  frontendDevelopment: [
    "Nextjs",
    "Reactjs",
    "Primereact",
    "Electron",
    "Tailwind CSS",
    "HTML",
    "CSS",
  ],
  backendDevelopment: [
    "Nodejs", 
    "Expressjs",
    "Nestjs",
    "Spring Boot",
  ],
  databaseAndStorage: [
    "PostgreSQL", 
    "Sequelize (ORM)",
    "MySQL",
    "MongoDB",
    "JDBC",
    "Hibernate",
  ],
  cloudAndDevOps: ["Dicital Ocean", "Docker",],
  toolsAndServices: [
    "Stripe",
    "GitHub",
    "Bitbucket",
    "Postman",
    "Jira",
  ],
};

export const projects = [
  {
    title: "Portfolio personal",
    github: "https://github.com/gustavR0/portfolio",
    description: [
      "Este es mi portafolio personal, donde muestro mis proyectos y habilidades.",
      "Está construido con Astro y TypeScript, utilizando Tailwind CSS para el diseño.",
      "El código está disponible en GitHub.",
      "Basado en el diseño de portafolio de @rishikesh2003 en github.",
    ],
  },
  {
    title: "Chat en tiempo real",
    github: "https://github.com/gustavR0/chat-app",
    githubBack: "https://github.com/gustavR0/server-chat-app",
    liveDemo: "https://chat.gustavro.dev",
    description: [
      "Chat app sencillo en tiempo real.",
      "Implementación de WebSockets para comunicación en tiempo real.",
      "Uso de socket.io para la gestión de eventos y mensajes.",
      "Despliegue en Digital Ocean con Docker.",
      "Código dividido en frontend y backend para una mejor organización.",
    ],
  },
  {
    title: "Map en tiempo real",
    github: "https://github.com/gustavR0/Map-App",
    githubBack: "https://github.com/gustavR0/server-ws-map-app",
    liveDemo: "https://maps.gustavro.dev",
    description: [
      "Mapa interactivo unicamente demostrativo con funcionalidad de poner pin en tiempo real.",
      "Implementación de WebSockets para comunicación en tiempo real.",
      "Uso de mapbox para visualización de mapas.",
      "Despliegue en Digital Ocean con Docker.",
      "Código dividido en frontend y backend para una mejor organización.",
    ],
  },
  {
    title: "Creación biblioteca routing en React",
    githubRepo: "https://github.com/gustavR0/clon-react-router-dom",
    description: [
      "Proyecto personal para comprender mejor el funcionamiento de React Router Dom.",
      "Implementación de rutas anidadas y manejo de parámetros en la URL.",
      "Soporte para rutas dinámicas y carga diferida de componentes.",
      "Manejo de errores y redirecciones personalizadas.",
      "Ejemplo de internalización i18n con rutas.",
    ],
  },
];
