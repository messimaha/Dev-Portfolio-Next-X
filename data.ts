import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import {
  AiOutlineAntDesign,
  AiOutlineApi,
} from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import {
  IProject,
  Service,
  Skill,
} from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>SPRING BOOT </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>Spring boot api</b>  & <b>Node API</b> ",
  },

  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b> ",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Express",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Spring boot",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Laravel",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
];

export const projects: IProject[] = [
  {
    name: "Wegrow",
    description:
      "This is a website help people who like to fix things can help others. They offer different services like gardening, fixing things at home, moving, taking care of pets, cleaning, putting in new floors, helping with computers, and painting. People who know how to do these things can show what they can do. People who need these services can find someone to help them based on what they need or where they are",
    image_path: "/assets/wegrow.png",
    deployed_url: null,
    github_url:
      "https://github.com/yassine121212/Wegrow",
    category: ["react","mongo","Express","node"],
    key_techs: [
      "React",
      "mongo",
      "NodeJs",
      "Express",
    ],
  },
  {
    name: "Allip",
    image_path: "/assets/allip.png",
    deployed_url: null,
    github_url:
      "https://github.com/messimaha/projet_automobile",
    category: ["react","Firebase"],
    description:
      "Designed and developed a versatile web application for managing internal operations and client interactions. Utilized React.js for front-end and Firebase for back-end.",
    key_techs: ["React", "Firebase"],
  },

  {
    name: "Car Prediction",
    image_path: "/assets/carpre.png",
    deployed_url: null,
    github_url:
      "https://github.com/aya-sahlouf/CarPricePredactor",
    category: ["node", "react", "Firebase"],
    description:
      "It allows users to quickly obtain reliable estimates, thus simplifying their process of buying or selling vehicles. Our application represents a significant advance in the field of car price evaluation.",
    key_techs: [
      "React",
      "Firebase",
      "Flask",
      "Tailwind",
    ],
  },

  {
    name: "Kanban App",
    image_path: "/assets/Even.png",
    deployed_url: null,
    github_url:
      "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
    category: ["node", "mongo", "react"],
    description:
      "Kanban project to handle tasks and projects between members",
    key_techs: [
      "React",
      "Node",
      "Express",
      "Mongodb",
    ],
  },
  {
    name: "Hospital Management",
    image_path: "/assets/hop.png",
    deployed_url: null,
    github_url: "Private",
    category: ["node", "react", "Laravel"],
    description:
      "Realization of the HIS management application of the International University Hospital Mohammed.",
    key_techs: ["React", "Laravel"],
  },
];
