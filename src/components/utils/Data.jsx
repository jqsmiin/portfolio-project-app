// Technologies
import firebase from "../../photos/tech/firebase.png";
import html from "../../photos/tech/html.png";
import css from "../../photos/tech/css.png";
import git from "../../photos/tech/git.png";
import javascript from "../../photos/tech/javascript.png";
import mongodb from "../../photos/tech/mongodb.png";
import nodejs from "../../photos/tech/nodejs.png";
import reactjs from "../../photos/tech/reactjs.png";
import redux from "../../photos/tech/redux.png";
import tailwind from "../../photos/tech/tailwind.png";
import typescript from "../../photos/tech/typescript.png";
import threejs from "../../photos/tech/threejs.svg";
import figma from "../../photos/tech/figma.png";
// Projects
import project1 from "../../photos/ell2.png";
import project2 from "../../photos/teller.png";
import project3 from "../../photos/growify.png";
import project4 from "../../photos/laptop2.png";
import circle from "../../photos/circle.png";
// Education
import { VscSymbolStructure } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "firebase",
    icon: firebase,
  },
];

export const projectsInfo = [
  {
    id: 2,
    link: "https://www.youtube.com/watch?v=aMFEpCQLuOA&feature=youtu.be",
    gitLink: "https://github.com/Teller-AI/teller-ai?tab=readme-ov-file",
    title: "Teller AI",
    subtitle: "Teller AI Project | Mongo DB, Express, Node js, Next js",
    paragraph:
      "Teller (or TellerAI) is an AI tool which provides you a unique, family-friendly, image and text-based story based on your input prompt. It comes along with our AI voice adaptation - just select your actor and enjoy him/her recite your story to you ⭐.",
    circle,
    img: project2,
  },
  //  {
  //   id: 4,
  //   link: "https://appco-landing.vercel.app",
  //   gitLink: "https://github.com/Growify-AI/growify-ai",
  //   title: "Growify AI",
  //   subtitle: "Growify AI Project | PostgreSQL, Express, Typescript, Next js",
  //   paragraph:
  //     "GrowifyAI revolutionizes learning experience by offering dynamic quiz generation from PDF or text inputs. You can seamlessly take and organize notes, categorize subjects, and access a convenient text-to-speech feature. This tool enables you to effortlessly enhance your learning process.",
  //   circle,
  //   img: project3,
  // },
   {
    id: 1,
    link: "https://job-hunt-askprxhga-laxy24.vercel.app",
    gitLink: "https://github.com/jqsmiin/job-hunt",
    title: "Job Hunt",
    subtitle: "Job Hunt Project | Next.js Typescript",
    paragraph:
      "Job hunt is a place where you can set up a job or apply for one. It is an application that gives the user opportunity to search for jobs, filter them by location, salary, type and experience. If you are registered as an company, you have the option to post a job, provide details and reach the employee.",
    circle,
    img: project4,
  },
  
  {
    id: 3,
    link: "https://real-estate-fyb1.onrender.com",
    gitLink: "https://github.com/jqsmiin/real-estate-project",
    title: "Elite Homes",
    subtitle: "Real Estate Project | Mongo DB, Express, Node js, Next js",
    paragraph:
      "Elite Homes lets you easily view, filter, and create properties. You can add basic details like the property name, description, location, price, number of bedrooms, and bathrooms, as well as multiple images. Once you've added a property, you can view it on the home page along with other properties. Filter by location, bedrooms, and bathrooms to find your perfect property. With a modern, user-friendly design, it's easy to use.",
    circle,
    img: project1,
  },
 
];

export const educationData = [
  {
    id: 1,
    icon: <FaReact />,
    title: "React Front to Back 2022",
    paragraph:
      "I learned about react and some backend technologies like firebase, mongodb etc. It was very helpful and polished my skills.",
    year: "Aug. 6 - 2022",
    link: "https://www.udemy.com/certificate/UC-5f44438a-8299-4886-a696-c0f6df6b88b7/",
  },
  {
    id: 2,
    icon: <IoLogoNodejs />,
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2022",
    paragraph:
      "I learned about Node, MongoDB, Express and other backend technologies.",
    year: "Oct. 4 - 2022",
    link: "https://www.udemy.com/certificate/UC-c3dae912-6c00-443d-9980-32d15e437257/",
  },
  {
    id: 3,
    icon: <VscSymbolStructure />,
    title: "JavaScript Data Structures & Algorithms",
    paragraph:
      "I learned about a variety of data structures, including arrays, linked lists, stacks, queues, trees, heaps, and graphs. Additionally, I learned about a range of algorithms for sorting and searching.",
    year: "May. 5 - 2023",
    link: "",
  },
];
