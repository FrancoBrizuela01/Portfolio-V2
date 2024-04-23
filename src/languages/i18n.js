import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Navbar: {
          Home: "Home",
          About: "About",
          Experience: "Experience",
          Education: "Education",
          Projects: "Projects",
          Contact: "Contact",
        },
        Home: {
          "Hello!": "Hello!",
          "I'm": "I'm",
        },
        About: {
          About: "About",
          "Who am I?": "Who am I?",
          "I'm Franco Brizuela, a Tech passionate and Web Developer":
            "I'm Franco Brizuela, a Tech passionate and Web Developer",
          "I am a Full Stack programmer with experience in C#, .NET, Node.js, React, and JavaScript. I am completing my technical degree at UTN and have already worked on several projects, facing real challenges and dealing directly with clients. I love programming and am always learning something new.":
            "I am a Full Stack programmer with experience in C#, .NET, Node.js, React, and JavaScript. I am completing my technical degree at UTN and have already worked on several projects, facing real challenges and dealing directly with clients. I love programming and am always learning something new.",
          "Download CV": "Download CV",
          "My skills": "My skills",
        },
        Experience: {
          "Work Experience": "Work Experience",
          "Full Stack Developer at Data IQ": "Full Stack Developer at Data IQ",
          "Full Stack Developer at IngerTec":
            "Full Stack Developer at IngerTec",
          "Data IQ Date": "July 2023 - Present",
          "IngerTec Date": "August 2022 - July 2023",
          "Data IQ Description":
            "I work with .NET, React, MongoDB, and NodeJS, leading the development and maintenance of software projects, including the creation and consumption of APIs, as well as the implementation of automations and scraping and OCR techniques. I have direct communication with clients. I specialize in innovation and process optimization to continuously improve the delivery and quality of systems.",
          "IngerTec Description":
            "In a diverse environment, I collaborate in the development of projects for multiple clients, managing both frontend and backend as well as database administration. I use React and Material-UI for interface design on the frontend, and develop APIs with Java and Spring Boot on the backend. I handle SQL and PostgreSQL databases for data management and report generation. Additionally, I have led the optimization of the corporate website, implementing React and internationalization techniques to improve accessibility and performance.",
        },
        Education: {
          Education: "Education",
          "Tecnicatura Superior en Programación":
            "Advanced Technical Degree in Programming",
          "Universidad Tecnológica Nacional":
            "National Technological University",
          "2018 - 2024": "2018 - 2024",
          ".NET esencial": "Essential .NET",
          Linkedin: "LinkedIn",
          "March 2024": "March 2024",
          "Qlik Sense Diseñador": "Qlik Sense Designer",
          "Data IQ": "Data IQ",
          "August 2023": "August 2023",
          "React - La Guía Completa: Hooks Context Redux MERN +15 Apps":
            "React - The Complete Guide: Hooks, Context, Redux, MERN +15 Apps",
          Udemy: "Udemy",
          "April 2021": "April 2021",
        },
        Portfolio: {
          Portfolio: "Portfolio",
          "My projects": "My projects",
          "Clothing Orders": "Clothing Orders",
          "Miley Cyrus Argentina": "Miley Cyrus Argentina",
          "Drinks Recipes": "Drinks Recipes",
          "Create invoice": "Create Invoice",
          "Mobile App Quiz": "Mobile App Quiz",
          "Covid 19-tracker-react": "Covid-19 Tracker",
          Website: "Website",
          Repositorie: "Repository",
        },
        Contact: {
          Contact: "Contact",
          "Feel free to contact me!": "Feel free to contact me!",
          "Mail Me": "Mail Me",
          "Follow Me": "Follow Me",
          "Contact Me": "Contact Me",
        },
        Footer: {
          "All Rights Reserved": "All Rights Reserved",
        },
      },
    },
    es: {
      translation: {
        Navbar: {
          Home: "Inicio",
          About: "Acerca de",
          Experience: "Experiencia",
          Education: "Educación",
          Projects: "Proyectos",
          Contact: "Contacto",
        },
        Home: {
          "Hello!": "Hola!",
          "I'm": "Soy",
        },
        About: {
          About: "Acerca de",
          "Who am I?": "¿Quién soy?",
          "I'm Franco Brizuela, a Tech passionate and Web Developer":
            "Soy Franco Brizuela, un apasionado de la tecnología y desarrollador web",
          "I am a Full Stack programmer with experience in C#, .NET, Node.js, React, and JavaScript. I am completing my technical degree at UTN and have already worked on several projects, facing real challenges and dealing directly with clients. I love programming and am always learning something new.":
            "Soy programador Full Stack con experiencia en C#, .NET, Node.js, React y JavaScript. Estoy completando mi título técnico en la UTN y ya he trabajado en varios proyectos, enfrentando desafíos reales y tratando directamente con clientes. Me encanta programar y siempre estoy aprendiendo algo nuevo.",
          "Download CV": "Descargar CV",
          "My skills": "Mis habilidades",
        },
        Experience: {
          "Work Experience": "Experiencia Laboral",
          "Full Stack Developer at Data IQ":
            "Desarrollador Full Stack en Data IQ",
          "Full Stack Developer at IngerTec":
            "Desarrollador Full Stack en IngerTec",
          "Data IQ Date": "Julio 2023 - Actualidad",
          "IngerTec Date": "Agosto 2022 - Julio 2023",
          "Data IQ Description":
            "Trabajo con .NET, React, MongoDB y NodeJS, liderando el desarrollo y mantenimiento de proyectos de software, incluyendo la creación y consumo de APIs, así como la implementación de automatizaciones y técnicas de scraping y OCR. Tengo comunicación directa con los clientes. Me especializo en innovación y optimización de procesos para mejorar continuamente la entrega y calidad de los sistemas.",
          "IngerTec Description":
            "En un entorno diverso, colaboro en el desarrollo de proyectos para múltiples clientes, gestionando tanto el frontend como el backend, además de la administración de bases de datos. Utilizo React y Material-UI para el diseño de interfaces en el frontend, y desarrollo APIs con Java y Spring Boot en el backend. Manejo bases de datos SQL y PostgreSQL para la gestión de datos y la generación de informes. Además, he liderado la optimización del sitio web corporativo, implementando React y técnicas de internacionalización para mejorar la accesibilidad y el rendimiento.",
        },
        Education: {
          Education: "Educación",
          "Tecnicatura Superior en Programación":
            "Tecnicatura Superior en Programación",
          "Universidad Tecnológica Nacional":
            "Universidad Tecnológica Nacional",
          "2018 - 2024": "2018 - 2024",
          ".NET esencial": ".NET esencial",
          Linkedin: "LinkedIn",
          "March 2024": "Marzo 2024",
          "Qlik Sense Diseñador": "Qlik Sense Diseñador",
          "Data IQ": "Data IQ",
          "August 2023": "Agosto 2023",
          "React - La Guía Completa: Hooks Context Redux MERN +15 Apps":
            "React - La Guía Completa: Hooks Context Redux MERN +15 Apps",
          Udemy: "Udemy",
          "April 2021": "Abril 2021",
        },
        Portfolio: {
          Portfolio: "Portafolio",
          "My projects": "Mis proyectos",
          "Clothing Orders": "Pedidos de Ropa",
          "Miley Cyrus Argentina": "Miley Cyrus Argentina",
          "Drinks Recipes": "Recetas de Bebidas",
          "Create invoice": "Crear Factura",
          "Mobile App Quiz": "Cuestionario de Aplicación Móvil",
          "Covid 19-tracker-react": "Rastreador de Covid-19",
          Website: "Sitio Web",
          Repositorie: "Repositorio",
        },
        Contact: {
          Contact: "Contacto",
          "Feel free to contact me!": "¡No dudes en contactarme!",
          "Mail Me": "Envíame un correo",
          "Follow Me": "Sígueme",
          "Contact Me": "Contáctame",
        },
        Footer: {
          "All Rights Reserved": "Todos los derechos reservados",
        },
      },
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
