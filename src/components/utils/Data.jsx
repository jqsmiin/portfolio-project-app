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
import project2 from "../../photos/delivery.png";
import project3 from "../../photos/appco.png";
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
    id: 1,
    link: "https://real-estate-fyb1.onrender.com",
    gitLink: "https://github.com/jqsmiin/real-estate-project",
    title: "Elite Homes",
    subtitle: "Real Estate Project | MERN MUI",
    paragraph:
      "Elite Homes lets you easily view, filter, and create properties. You can add basic details like the property name, description, location, price, number of bedrooms, and bathrooms, as well as multiple images. Once you've added a property, you can view it on the home page along with other properties. Filter by location, bedrooms, and bathrooms to find your perfect property. With a modern, user-friendly design, it's easy to use.",
    circle,
    img: project1,
  },
  {
    id: 2,
    link: "https://rich-jade-crow-slip.cyclic.app",
    gitLink: "https://github.com/jqsmiin/food-order-app",
    title: "Delivery",
    subtitle: "Food Order Project | MERN",
    paragraph:
      "Delivery is an application that allows you to place or order food. You can register as a customer or as a restaurant. As a customer, you can view all available food categories and order them. As a restaurant, you can place your food, track orders and manage your menu.",
    circle,
    img: project2,
  },
  {
    id: 3,
    link: "https://appco-landing.vercel.app",
    gitLink: "https://github.com/jqsmiin/appco-landing",
    title: "Appco Landing",
    subtitle: "Landing Page Project | React Next.js",
    paragraph:
      "Appco landing provides a modern, sleek design that is sure to capture the attention of your visitors. It's not only visually stunning, but it is also built with performance in mind. Using Next.js, I was able to create a website that is not only fast and responsive, but also highly customizable and easy to maintain. If you are interested in seeing performance and accessibility of website, check github link.",
    circle,
    img: project3,
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
