import {
  hervoicematters,
  impactbridge,
  spotify,
  elegalvault,
  jnv,
  iiitr,
  cpp,
  sanity,
  next,
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  github,
  figma,
  redux,
  threejs,
  antd,
  c,
  python,
  docker,
  mysql,
  kubernetes,
  socket,
  firebase,
  redis,
  kafka,
  postman,
  aws,
  express,
  shell,
  gosocial,
  getreferred,
  learnshala,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "Back-end Developer",
    icon: mobile,
  },
  {
    title: "Competetive Programmer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "Kafka",
    icon: kafka,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Socket IO",
    icon: socket,
  },
  {
    name: "Shell Scripting",
    icon: shell,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Amrutam",
    icon: "https://doctor.amrutam.global/assets/logo-BUB-F7Sl.png",
    iconBg: "#383E56",
    date: "March 2024 - Present",
    company_url: "https://amrutam.global/",
    technologies: [
      "React",
      "NextJs",
      "Redux",
      "React Query",
      "Razorpay",
      "SEO",
      "Figma",
      "Axios",
      "Tailwind CSS",
      "Firebase",
      "Agoda",
      "MarTech",
      "SSR",
      "NodeJs",
      "Git",
      "GitHub",
      "Postman",
    ],
    points: [
      "Worked on doctor dashboard and consumer app, developed important features like Appointment Booking, Authentication, Profile management and real-time consultation.",
      "Integrated 3rd party services like Razorpay, Easebuzz for payment transactions, Agoda for real-time video-call, Exotel for per-minute basis audio consultations and firebase for real-time chat consultation.",
      "Developed and improved doctor dashboard features reducing project size from 1.2GB to 780MB. Also worked on dashboard performance and reduced initial loading time from 1.7s to 1.2s.",
      "Migrated consumer app from Client Side Rendering(CSR) to Server Side Rendering(SSR) using NodeJs and ExpressJs to improve SEO and SMO. Also improved performance by 22%.",
    ],
  },
];

const educations = [
  {
    title: "Bachelor of technology",
    company_name: "Indian Institute of information technology, Ranchi",
    icon: iiitr,
    iconBg: "#383E56",
    date: "November 2022 - Present",
    points: [
      "Pursuing computer science and engineering with specialization in data science and artificial intelligence.",
      "CGPA: 8.6",
    ],
  },
  {
    title: "Intermediate",
    company_name: "Araria College, Araria",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "April 2019 - Feb 2021",
    points: ["Overall percentage - 81.6%."],
  },
  {
    title: "Matriculation",
    company_name: "Jawahar Navodaya Vidyalaya, Araria",
    icon: jnv,
    iconBg: "#383E56",
    date: "August 2014 - March 2023",
    points: ["Overall percentage - 87.6%."],
  },
];

const projects = [
  {
    name: "Get Referred",
    description:
      "A platform for students/employees to get referral from employees of top startups and MNCs.",
    tags: [
      {
        name: "Microservices",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
      {
        name: "Fastify",
        color: "orange-text-gradient",
      },
      {
        name: "NodeJs",
        color: "yellow-text-gradient",
      },
      {
        name: "Socket IO",
        color: "purple-text-gradient",
      },
      {
        name: "Redis",
        color: "red-text-gradient",
      },
      {
        name: "MongoDB",
        color: "white-text-gradient",
      },
      {
        name: "MySQL",
        color: "gray-text-gradient",
      },
    ],
    image: getreferred,
    source_code_link: "https://github.com/imkhateeb/GetReferred",
    deployed_link: "none",
  },
  {
    name: "LearnShala",
    description:
      "A Modern course review and rating web application built on MERN stack. Here students can review, rate courses, enroll in courses and track their progress.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
      {
        name: "NodeJs",
        color: "yellow-text-gradient",
      },
      {
        name: "Rate Limiter",
        color: "purple-text-gradient",
      },
      {
        name: "JWT",
        color: "red-text-gradient",
      },
      {
        name: "Deployment",
        color: "white-text-gradient",
      },
    ],
    image: learnshala,
    source_code_link: "https://github.com/imkhateeb/Learnshala-node-backend",
    deployed_link: "https://learnshala-react-frontend.vercel.app/",
  },
  {
    name: "Go Social",
    description:
      "A Modern and fully responsive image sharing social media web application built on MERN stack.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "sanity",
        color: "pink-text-gradient",
      },
    ],
    image: gosocial,
    source_code_link: "https://github.com/imkhateeb/goSocial",
    deployed_link: "https://gosocialbykhateeb.netlify.app/",
  },
  {
    name: "Her Voice Matters",
    description: `A web-portal built using EJS, CSS, JavaScript, NodeJS, Express, MongoDB and mongoose where sexually harassed women cain register complaint and take support.`,
    tags: [
      {
        name: "mongoose",
        color: "blue-text-gradient",
      },
      {
        name: "EJS",
        color: "green-text-gradient",
      },
      {
        name: "NodenExpress",
        color: "pink-text-gradient",
      },
    ],
    image: hervoicematters,
    source_code_link: "https://github.com/imkhateeb/herVoiceMatters",
    deployed_link: "none",
  },
  {
    name: "Spotify Landing Page",
    description: `Just a clone of landing page of spotify. This was my first webpage`,
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: spotify,
    source_code_link: "https://github.com/imkhateeb/SpotifyClone",
    deployed_link: "https://spotifyclonebykhateeb.netlify.app/",
  },
];

export { services, technologies, experiences, projects, educations };
