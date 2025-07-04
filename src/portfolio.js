import emoji from "react-easy-emoji";

import bacancyTechnology from "./assets/img/icons/common/bacancy_og.png";
import excelra from "./assets/img/icons/common/Excelra.png";
import resume from "./assets/pdf/resume.pdf";

export const greetings = {
  name: "Abhishek Bhavsar",
  title: "Hi all, I'm Abhishek",
  description:
    "Full Stack Developer with 5+ years of experience in building scalable web applications using React, Node.js, Python, and AWS. Passionate about clean code, DevOps practices, and delivering impact-driven solutions.",
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
  subTitle: "FULL STACK DEVELOPER WITH CLOUD EXPERTISE",
  skills: [
    emoji(
      "⚡ Build scalable web applications with React, Node.js and Django"
    ),
    emoji("⚡ Design and manage cloud infrastructure"),
    emoji(
      "⚡ Implement DevOps practices with AWS CLI, CI/CD, and Docker"
    ),
    emoji("⚡ Develop responsive UIs with React, Redux, and Tailwind CSS"),
  ],

  softwareSkills: [
    {
      skillName: "ReactJs",
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
      skillName: "Docker",
      fontAwesomeClassname: "logos:docker-icon",
    },
    {
      skillName: "NodeJs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName:"PostgreSQL",
      fontAwesomeClassname: "logos:postgresql",
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "logos:firebase",
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "logos:git-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend (React, NextJS, Tailwind CSS)",
    progressPercentage: "90",
  },
  {
    Stack: "Backend (Node.js, Django, REST APIs)",
    progressPercentage: "85",
  },
  {
    Stack: "Cloud & DevOps (AWS, Docker)",
    progressPercentage: "80",
  },
  {
    Stack: "Databases (MongoDB, PostgreSQL, DynamoDB)",
    progressPercentage: "75",
  },
];

export const educationInfo = [
  {
    schoolName: "KS School of Business Management, Gujarat University",
    subHeader: "Master of Science (Information Technology)",
    duration: "2018 - 2020",
    desc: "GPA: 3.78/5",
    descBullets: [],
  },
  // {
  //   schoolName: "KS School of Business Management, Gujarat University",
  //   subHeader: "Bachelor of Science (Information Technology)",
  //   duration: "2015 - 2018",
  //   desc: "GPA: 3.54/5",
  //   descBullets: [],
  // },
];

export const experience = [
  {
    role: "Software Specialist",
    company: "Excelra",
    companylogo: excelra,
    date: "Feb 2023 - Present",
    desc: "Working as a Software Specialist with focus on cloud development and responsive UIs.",
    descBullets: [
      "Built cloud-based applications using Django and AWS (Lambda, S3, EC2), and developed responsive UIs with React and Tailwind CSS",
      "Developed bioinformatics workflow UI using React and integrated Python-based backend services to handle terabytes of sequencing data",
      "Built reusable frontend components in React and integrated user-specific API authentication",
      "Designed and consumed REST APIs in Node.js for dynamic data flow and enhanced plan tracking features"
    ],
  },
  {
    role: "Software Engineer",
    company: "Bacancy Technology",
    companylogo: bacancyTechnology,
    date: "Jan 2020 - Feb 2023",
    desc: "Worked as a Software Engineer developing full-stack applications with React, Node.js, and AWS.",
    descBullets: [
      "Developed modular frontend using React and Redux with secure user-level API authentication and reusable UI modules",
      "Engineered backend using Node.js and managed AWS stack via SAM templates with enhanced monitoring via AWS CloudWatch",
      "Created puppeteer scripts to scrape market data into MongoDB and implemented Passport.js authentication",
      "Built image upload features with AWS S3 and developed RESTful APIs integrating third-party sports-engine API"
    ],
  }
];

export const certifications = [
  {
    name: "AWS Cloud Practitioner",
    body: "Amazon Web Services",
    date: "2024",
    desc: "Validated knowledge of AWS Cloud concepts, services, security, architecture, pricing, and support"
  }
];

export const projects = [
  {
    name: "Cloud Solution Platform",
    desc: `Built cloud-based applications using Django and AWS (Lambda, S3, EC2), and developed responsive UIs with React and Tailwind CSS for a scalable product platform.`,
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
