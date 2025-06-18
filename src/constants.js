// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import nova from './assets/company_logo/nova.png'

// Education Section Logo's
import utu from './assets/education_logo/utu1.png';
import vid from './assets/education_logo/vid.png';

// Project Section Logo's
import chat from './assets/work_logo/chat.png';
import mov from './assets/work_logo/mov.png';
import blo from './assets/work_logo/blo.png'
import weather from './assets/work_logo/weather.png';
import img from './assets/work_logo/img.png';
import asky from './assets/work_logo/asky.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: nova,
      role: "Fullstack Web Developer-Intern",
      company: "Nova Softwares, Bharuch",
      date: "April 2025 - July 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance. Working with Dummy APIs is fun Activity to do.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
      ],
    }
  ];
  
  export const education = [
   
    {
      id: 1,
      img: utu,
      school: "Uka Taradia University, Suart",
      date: "Sept 2022 - Mar 2026",
      grade: "8.12 CGPA",
      desc: "I completed my B.Tech in Infomation Technology  from Uka Taradia University, Suart . Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - B.Tech (Information Technology)",
    },
    {
      id: 2,
      img: vid,
      school: "Vidhya Sabha School, Amreli",
      date: " Mar 2021 - March 2022",
      grade: "84 PR",
      desc: "I completed my class 12 education from Vidhya Sabha School, Amreli, under the GSEB board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "GSEB(XII) - PCM ",
    },
    {
      id: 3,
      img: vid,
      school: "Vidhya Sabha School, Amreli",
      date: " Mar 2019 - March 2020",
      grade: "97.70 PR",
      desc: "I completed my class 10 education from Vidhya Sabha School- Amreli, under the GSEB board.",
      degree: "GSEB(class X)"
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Chat-App",
      description:
        "Communication becomes essential in today's world. This is powerful and user-friendly MERN application.",
      image: chat,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "Express JS", "Node JS","Cloudinary"],
      github: "https://github.com/Pranav-Raj-31/mern-chat-app",
      webapp : "https://snoozy.netlify.app/"
    },
  
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: mov,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Pranav-Raj-31/Movie-Recommendation",
      webapp: "https://movie-recommand.netlify.app/",
    },
    {
      id: 3,
      title: "weather App",
      description:"It was a fun project to practice component-based architecture and learn how to fetch and display real-time weather data.",
      image: weather,
      tags: ["React JS", "API", "NPM", "Validation"],
      github: "https://github.com/Pranav-Raj-31/WeatherApp",
      webapp: "https://weather-zeta-tawny.vercel.app/",
    },
  
    {
      id: 5,
      title: "AI Chat-Bot",
      description:
      "Assky is an intelligent, responsive chatbot interface built using React.js and powered by Google Gemini 1.5 Flash via the `@google/generative-ai` SDK. It allows users to interact with an AI model through a clean, chat-style interface that supports markdown rendering, prompt cards, and seamless messaging.",
      image: asky,
      tags: ["HTML", "CSS", "React JS", "Google API Key", "Tailwind CSS"],
      github: "https://github.com/Pranav-Raj-31/ChatBot",
      webapp: "https://assky.netlify.app/",
    },
    {
      id: 6,
      title: "Blog App",
      description:
        "This application is built using the MERN (MongoDB, Express, React, Node.js) stack and comes with various functionalities to manage and share your blogs. Built with full-stack technologies for a seamless learning experience.",
      image: blo,
      tags: ["React JS", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Pranav-Raj-31/Blog-App",
      webapp: "https://bolggy.netlify.app/",
    },
    {
      id: 7,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: img,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/Pranav-Raj-31/ImgSearch",
      webapp: "https://imgsearc.netlify.app/",
    },
   
  ];  