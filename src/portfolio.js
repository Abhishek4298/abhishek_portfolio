import emoji from "react-easy-emoji";

import bacancyTechnology from "./assets/img/icons/common/bacancy_og.png";
import excelra from "./assets/img/icons/common/Excelra.png";
import resume from "./assets/pdf/resume.pdf";

export const greetings = {
  name: "Abhishek Bhavsar",
  title: "Hi all, I'm Abhishek",
  description:
    "A passionate Full Stack Web Developer having an experience of building Web applications.",
  resumeLink: resume,
};

export const openSource = {
  githubUserName: "Abhishek4298",
};

export const contact = {};

export const socialLinks = {
  // instagram: "https://www.instagram.com/i.am_abhii/",
  // twitter: "https://twitter.com/abhishe25713158",
  github: "https://github.com/Abhishek4298",
  linkedin: "https://www.linkedin.com/in/abhibhavsar/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
    emoji("⚡ Cloud Development ( AWS )"),
  ],

  softwareSkills: [
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "logos:python",
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "vscode-icons:file-type-django",
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "logos:aws",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "logos:docker-icon",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName:"PostgreSQL",
      fontAwesomeClassname: "logos:postgresql",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "logos:firebase",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
  ],
};

// based on my above skill set please fill up Skillbars
export const SkillBars = [
  {
    Stack: "Frontend Development", //Insert stack or technology you have experience in
    progressPercentage: "90",
  },
  {
    Stack: "Backend Development", //Insert stack or technology you have experience in
    progressPercentage: "80", //Insert relative proficiency in percentage
  },
  {
    Stack: "Cloud Development", //Insert stack or technology you have experience in
    progressPercentage: "80", //Insert relative proficiency in percentage
  },
];

export const educationInfo = [
  {
    schoolName: "K. S. School Of Business Management",
    subHeader: "Master of Science (Information Technology)",
    duration: "August 2015 - April 2020",
    desc: "Participated in  and published 5 papers.",
    descBullets: [],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Bacancy Technology",
    companylogo: bacancyTechnology,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descBullets: [
      "Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  },
  {
    role: "Software Specialist",
    company: "Excelra ",
    companylogo: excelra,
    // date: "since November 2020",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descBullets: [
      "Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  },
];

export const projects = [
  {
    name: "Cloud Solution Platform",
    desc: `Built cloud-based microservices using Django and AWS (Lambda, S3, EC2), and developed responsive UIs with React and Tailwind CSS for a scalable product platform.`,
  },
  {
    name: "Op2 Platform",
    desc: `Developed bioinformatics workflow UI using React and integrated Python-based backend services to handle terabytes of sequencing data. Focused on improving data visualization and user authentication.`,
  },
  {
    name: "BOP Plan Management (IDMS)",
    desc: `Built reusable frontend components in React and integrated user-specific API authentication. Designed and consumed REST APIs in Node.js for dynamic data flow and enhanced plan tracking features.`,
  },
  {
    name: "MyHealth Shop",
    desc: `Developed modular frontend using React and Redux. Integrated secure user-level API authentication and reusable UI modules to reduce development effort by 30%.`,
  },
  {
    name: "Tashi Pro",
    desc: `Engineered backend using Node.js and managed AWS stack via SAM templates. Wrote unit/integration tests using Jest and enhanced monitoring via AWS CloudWatch.`,
  },
  {
    name: "PackLeader",
    desc: `Packleader DVM is designed to have registered all the companies providing medical treatment to all species of animals. Each company is treated as a client whereas they need to have an appointment in order to have treatment of any kind. In addition, the software is imparting several more facilities like an estimation of the charges, medical records, charges(how much product and services are going to be consumed), payment gateway(Financial Transaction and quick payment), and reports.`,
  },
  {
    name: "TonkaHockey",
    desc: `This application is used for hockey sport. Users can see a list of players, coaches, games and sponsors. Data is populated from third party API (sports-engine). We had also integrated azure to store images on the server.`,
  },
  {
    name: "GoForClose",
    desc: `Marketing Agency for real estate investors. Have to manage marketing-ops, puppeteer, and next-data services separately.`,
  },
];
