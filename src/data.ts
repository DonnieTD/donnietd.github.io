export interface Language {
  idiom: string;
  level: string;
}

export interface Experience {
  role: string;
  time: string;
  company: string;
  details: string[];
}

export interface Project {
  title: string;
  link?: string;
  tagline: string;
}

export interface Skill {
  name: string;
  level: number; // 0–100
}

export const profile = {
  name: "Donovan van der Linde",
  tagline: "Senior Software Engineer",
  avatar: "./profile.jpeg",
  email: "donniethedev@gmail.com",
  phone: "0747371185",
  timezone: "GMT+2",
  citizenship: "South-African",
  website: "donnietd.github.io",
  github: "donnietd",
};

export const languages: Language[] = [
  { idiom: "English", level: "Native" },
  { idiom: "Afrikaans", level: "Native" },
];

export const interests: string[] = ["Programming", "Music"];

export const careerProfile = `Software is my passion and not my job.
I love what I do and when allowed to do what I want this is what I will be doing.
Well written software reads like poetry and I aspire to become a raw logic artist like many of my role models.`;

export const experiences: Experience[] = [
  {
    role: "Chief Technologist",
    time: "May 2023 - Present",
    company: "WeavaCare, Gauteng",
    details: [
      "Strategic problem solving and technical innovation",
      "Systems architecture design and development",
      "Engineering process optimization",
      "Domain modeling / reverse engineering / product engineering",
      "Cryptography and system security",
    ],
  },
  {
    role: "Polyglot Software Engineer",
    time: "Feb 2022 - Apr 2023",
    company: "Span Digital, San Francisco",
    details: [
      "Typescript / ECMAScript 2022 / Javascript",
      "Go",
      "Echo / Postgres / Gorm",
      "Python",
      "Django / Celery / Graphene",
      "React",
      "Redux / redux-observable / React-Query / Apollo GraphQL",
      "React-Testing-Library / Jest / Enzyme",
      "Docker",
    ],
  },
  {
    role: "Chief Software Engineer, Novaris Security",
    time: "Sep 2021 - Feb 2022",
    company: "Belmopan, Belize",
    details: [
      "Python",
      "Flask",
      "Spacy / Puppeteer / Selenium",
      "Nodejs / Expressjs",
      "React",
      "Docker / Kubernetes",
      "Architecting the solution",
      "Direct consultant to CEO and CTO",
    ],
  },
  {
    role: "Tech Lead (UI), Gap Draught",
    time: "Nov 2020 - Sep 2021",
    company: "Centurion, Gauteng",
    details: [
      "React",
      "React-Query",
      "Jotai / Zustand / Valtio / Redux",
      "Istanbul / Jest / React Testing Library / Cypress",
      "AWS S3 / Cognito / QuickSight / EC2 / CloudFront",
      "React-Hook-Form",
      "Google Maps API",
      "Verdaccio",
      "Docz",
    ],
  },
  {
    role: "Senior Software Engineer, Silicon Overdrive",
    time: "Jul 2020 - Nov 2020",
    company: "Cape Town, Western Cape",
    details: [
      "React",
      "Redux / Redux-Saga",
      "AWS S3 / Cognito",
      "Bitbucket Pipelines CI/CD",
      "Training teammates",
      "Architecting solutions",
      "Google Maps API",
      "Verdaccio",
      "Docz",
    ],
  },
  {
    role: "Software Developer, InfoSlips",
    time: "Nov 2018 - Jul 2020",
    company: "Centurion, Gauteng",
    details: [
      "Javascript / Typescript",
      "C#",
      "React / AngularJS",
      "XML / XSLT",
      "Razor",
      "Email/financial templates and data processing",
    ],
  },
  {
    role: "Software Developer, Redcactus",
    time: "Nov 2017 - Nov 2018",
    company: "Queenswood, Gauteng",
    details: ["PHP", "C#", "Javascript", "Wordpress", "SQL Server"],
  },
];

// NOTE: these entries came from the original theme's placeholder data.
// Replace them with your real projects, or empty the array to hide the section.
export const projects: Project[] = [
  {
    title: "Velocity",
    link: "#",
    tagline:
      "A responsive website template designed to help startups promote, market and sell their products.",
  },
  {
    title: "DevStudio",
    link: "#",
    tagline:
      "A responsive website template designed to help web developers/designers market their services.",
  },
  {
    title: "Tempo",
    link: "#",
    tagline:
      "A responsive website template designed to help startups promote their products or services and to attract users & investors.",
  },
  {
    title: "Atom",
    link: "#",
    tagline:
      "A comprehensive website template solution for startups/developers to market their mobile apps.",
  },
  {
    title: "Delta",
    link: "#",
    tagline:
      "A responsive Bootstrap one page theme designed to help app developers promote their mobile apps.",
  },
];

export const skills: Skill[] = [
  { name: "Javascript / Typescript", level: 99 },
  { name: "React", level: 99 },
  { name: "Go", level: 80 },
  { name: "Python", level: 75 },
  { name: "C#", level: 50 },
  { name: "Php", level: 50 },
];
