import {
  RiGithubLine,
  RiLinkedinBoxLine,
  RiTwitterLine,
} from "@remixicon/react";
import {
  RiCodeBoxLine,
  RiFlutterFill,
  RiShieldCheckLine,
  RiDatabaseLine,
  RiTeamLine,
} from "react-icons/ri";

import ts from "../../public/assets/img/typescript.svg";
// import js from "../../public/assets/img/skills-javascript.svg";
import html from "../../public/assets/img/skills-html.svg";
import css from "../../public/assets/img/skills-css.svg";
import git from "../../public/assets/img/skills-git.svg";
import github from "../../public/assets/img/skills-github.svg";
// import photoshop from "../../public/assets/img/skills-photoshop.svg";
import react from "../../public/assets/img/skills-react.svg";
import tailwind from "../../public/assets/img/skills-tailwind-css.svg";
import flutter from "../../public/assets/img/flutter.svg";
import mui from "../../public/assets/img/material-ui-1.svg";
import mongodb from "../../public/assets/img/mongodb-icon-1-1.svg";
import nextLogo from "../../public/assets/img/nextjs-0.png";
import expressLogo from "../../public/assets/img/expressjs.png";
import nodejs from "../../public/assets/img/nodejs-1.svg";
import prisma from "../../public/assets/img/prisma-3.svg";
import redux from "../../public/assets/img/redux.svg";

export const skills = [
  // Frontend Technologies
  //   { src: html, alt: "HTML" },
  //   { src: css, alt: "CSS" },
  { src: ts, alt: "TypeScript" },
  { src: react, alt: "React" },
  { src: nextLogo, alt: "Next.js" },
  { src: tailwind, alt: "Tailwind CSS" },
  { src: mui, alt: "Material-UI" },
  { src: flutter, alt: "Flutter" },
  { src: redux, alt: "Redux" },

  // Backend Technologies
  //   { src: nodejs, alt: "Node.js" },
  { src: mongodb, alt: "MongoDB" },

  { src: prisma, alt: "Prisma" },

  // Version Control & Other Tools
  { src: git, alt: "Git" },
  //   { src: github, alt: "GitHub" },
];

export const skillsMatcher = [
  { src: ts, alt: "TypeScript" },
  { src: react, alt: "React" },
  { src: nextLogo, alt: "Nextjs" },
  { src: tailwind, alt: "Tailwind CSS" },
  { src: mui, alt: "Material-UI" },
  { src: flutter, alt: "Flutter" },
  { src: redux, alt: "Redux" },
  { src: mongodb, alt: "Mongoose" },
  { src: prisma, alt: "Prisma" },
  { src: git, alt: "Git" },
  { src: nodejs, alt: "Nodejs" },
  { src: github, alt: "GitHub" },
  { src: html, alt: "HTML" },
  { src: css, alt: "CSS" },
  { src: expressLogo, alt: "Express" },
];
export const getSkillImage = (techName: string): string => {
  const skill = skillsMatcher.find(
    (s) => s.alt.toLowerCase() === techName.toLowerCase()
  );
  return skill ? skill.src : ts.src;
};

export const services = [
  {
    icon: <RiCodeBoxLine />,
    name: "Full-Stack Development",
    description:
      "Building scalable and robust web applications with ethical and clean coding practices, ensuring compliance with Islamic values.",
  },
  {
    icon: <RiFlutterFill />,
    name: "Flutter Development",
    description:
      "Developing beautiful and performant cross-platform mobile applications for Android and iOS with a focus on user satisfaction.",
  },
  {
    icon: <RiDatabaseLine />,
    name: "Database Management",
    description:
      "Designing efficient and secure database systems with a strong focus on data integrity and scalability.",
  },
  {
    icon: <RiShieldCheckLine />,
    name: "Ethical Development Practices",
    description:
      "Delivering projects that prioritize fairness, honesty, and trust while adhering to Islamic ethical standards.",
  },
  {
    icon: <RiTeamLine />,
    name: "Collaborative Development",
    description:
      "Working seamlessly with teams to deliver projects efficiently while fostering a collaborative and respectful environment.",
  },
];

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/jayedulislam",
    icon: <RiLinkedinBoxLine />,
    alt: "LinkedIn",
  },
  {
    href: "https://github.com/jayed-islam",
    icon: <RiGithubLine />,
    alt: "GitHub",
  },
  {
    href: "https://twitter.com/jayedulislamkn",
    icon: <RiTwitterLine />,
    alt: "Twitter",
  },
];
