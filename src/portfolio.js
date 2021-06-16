import emoji from "react-easy-emoji";

import bacancyTechnology from "./assets/img/icons/common/bacancy_og.png";
import resume from "./assets/pdf/resume.pdf";

export const greetings = {
  name: "Abhishek Bhavsar",
  title: "Hi all, I'm Abhishek",
  description:
    "A passionate Full Stack Web Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.",
  resumeLink: resume,
};

export const openSource = {
  githubUserName: "Abhishek168",
};

export const contact = {};

export const socialLinks = {
  // facebook: "https://www.facebook.com/1hanzla100",
  instagram: "https://www.instagram.com/i.am_abhii/",
  twitter: "https://twitter.com/abhishe25713158",
  github: "https://github.com/Abhishek168",
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
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "logos:aws",
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "logos:firebase",
    // },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "logos:docker-icon",
    // },
  ],
};

export const SkillBars = [
	{
		Stack: "Backend",
		progressPercentage: "80",
	},
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "70", //Insert relative proficiency in percentage
  },
  {
    Stack: "Programming",
    progressPercentage: "60",
  },
];

export const educationInfo = [
  {
    schoolName: "K. S. School Of Business Management",
    subHeader: "Master of Science (Information Technology)",
    duration: "August 2015 - April 2020",
    desc: "Participated in  and published 5 papers.",
    descBullets: [
      // "Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
      // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  }
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Bacancy Technology",
    companylogo: bacancyTechnology,
    // date: "since November 2020",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descBullets: [
      "Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  }
];

export const projects = [
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
		// link: {
    //   name: "abhishek",
    //   url: "kasjfklsdjf",
    // },
  },
];
