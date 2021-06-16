import emoji from "react-easy-emoji";

import bacancyTechnology from "./assets/img/icons/common/bacancy_og.png";
import openxcelLogo from "./assets/img/icons/common/openxcell.png";
import resume from "./assets/pdf/resume.pdf";

export const greetings = {
  name: "Jasmin Saikh",
  title: "Hi all, I'm Jasmin",
  description:
    "A passionate Full Stack Web Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.",
  resumeLink: resume,
};

export const openSource = {
  githubUserName: "JasminShaikh",
};

export const contact = {};

export const socialLinks = {
  // facebook: "https://www.facebook.com/1hanzla100",
  instagram: "https://www.instagram.com/jess_shaikh/",
  twitter: "https://twitter.com/JasminS07179948",
  github: "https://github.com/JasminShaikh",
  linkedin: "https://www.linkedin.com/in/jasmin-shaikh-b12682160/",
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
    {
      skillName: "aws",
      fontAwesomeClassname: "logos:aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "logos:firebase",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "logos:docker-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "80",
  },
  {
    Stack: "Programming",
    progressPercentage: "70",
  },
];

export const educationInfo = [
  {
    schoolName: "GLS University",
    subHeader: "Master of Computer Applications",
    duration: "August 2016 - April 2018",
    desc: "Participated in  and published 3 papers.",
    descBullets: [
      "Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  },
  {
    schoolName: "Gujarat University",
    subHeader: "Bachelor of Computer Applications",
    duration: "September 2013 - April 2016",
    desc: "Participated in the research of XXX and published 3 papers.",
    descBullets: [
      "Lorem ipsum dolor sit amet, consectetfgur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Bacancy Technology",
    companylogo: bacancyTechnology,
    date: "since November 2020",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descBullets: [
      "Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  },
  {
    role: "Software Engineer",
    company: "OpenXcell",
    companylogo: openxcelLogo,
    date: "2018 – 2020",
    desc: "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const projects = [
  {
    name: "StepUp",
    desc: `StepUp to be the project in which users can check recycling events, news, tips, and scan Qr
    code of bin, RVM, events to earn points. Users can also redeem points by donating to other 
    users, and can get voucher code from vendors. Plant a seed named gamification will appear 
    after every third QR scan, In that user will get a random number of points.`,
  },
  {
    name: "1Yes",
    desc: `1Yes is a job portal for Singapore people. A seeker can easily find a job, get the latest jobs
    updates and apply to interested jobs. Hire a seeker by employee’s (Company), they can also
    check profile of seeker details, experience etc. Employee’s can post their jobs in multiple 
    sectors, Categories are managed by the admin through the portal. Seekers can communicate 
    with employee’s or companies if they are shortlisted for a position`,
  },
  {
    name: "Prospeqs",
    desc: `Prospeqs is a social media application, it’s mainly used for getting updates of horse riding. 
    Users can upload video and images, description, rating, category, etc details of horse ride, add 
    horse details, and can like, comment and share. Subscription plan to add a new horse.`,
  },
  {
    name: "The VIP Group",
    desc: `The VIP Group is a dating application, Users can see newbies of the application, nearby some 
    kilometers, favorites etc. Users need to send requests for chatting. After approval they can directly chat 
    with their friends through video call, audio call, messages.
    `,
    // link: {
    //   name: "jasmin",
    //   url: "kasjfklsdjf",
    // },
  },
  {
    name: "Clice",
    desc: `Clice is a social networking application, Users can post images, some text, etc. All posts will be shown in 
    their feeds, can like, comment, save, and share. All posts will disappear after 24 hours. Users can also 
    add events with tagging with their friends or family. All events will be shown in calendar view.`,
  },
  {
    name: "AtoZ9",
    desc: `AtoZ9 is a service application, and offering platform for any kind of products like food, home cleaning, cabs, gifting services, bakery items and many more. `,
    link: {
      name: "AtoZ9",
      url: "http://atoz9.com/",
    },
  },
];
