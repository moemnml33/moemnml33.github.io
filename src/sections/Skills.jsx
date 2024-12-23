import {
  DevicePhoneMobileIcon,
  EyeIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
  RectangleGroupIcon,
  SwatchIcon,
} from "@heroicons/react/24/solid"; // https://github.com/tailwindlabs/heroicons/tree/master/src/24/solid
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
// import DevicePhoneMobileIcon from "../assets/icons/device-phone-mobile.svg";
import ableton from "../assets/tech-stack-icons/Ableton.png";
import androidstudio from "../assets/tech-stack-icons/AndroidStudio.png";
import css from "../assets/tech-stack-icons/CSS.png";
import eclipse from "../assets/tech-stack-icons/Eclipse.png";
import figma from "../assets/tech-stack-icons/Figma.png";
import github from "../assets/tech-stack-icons/Github.png";
import html from "../assets/tech-stack-icons/HTML.png";
import java from "../assets/tech-stack-icons/Java.png";
import js from "../assets/tech-stack-icons/JavaScript.png";
import mysql from "../assets/tech-stack-icons/MySQL.png";
import nodejs from "../assets/tech-stack-icons/NodeJS.png";
import npm from "../assets/tech-stack-icons/Npm.png";
import php from "../assets/tech-stack-icons/PHP.png";
import python from "../assets/tech-stack-icons/Python.png";
import qt from "../assets/tech-stack-icons/QT.png";
import react from "../assets/tech-stack-icons/React.png";
import sequelize from "../assets/tech-stack-icons/Sequelize.svg";
import sqlite from "../assets/tech-stack-icons/SQLite.png";
import tailwind from "../assets/tech-stack-icons/TailwindCSS.png";
import vscode from "../assets/tech-stack-icons/VSCode.png";
import { SkillCard } from "../components/SkillCard";
import TextHighlight from "../components/TextHighlight";

const TECH_ICONS_MAIN = [
  java,
  python,
  html,
  css,
  js,
  react,
  nodejs,
  sequelize,
  sqlite,
  tailwind,
];

const TECH_ICONS_SEC = [
  figma,
  qt,
  php,
  npm,
  mysql,
  vscode,
  eclipse,
  androidstudio,
  github,
  ableton,
];

const SKILLS = [
  {
    icon: PuzzlePieceIcon,
    title: "Problem Solving",
    children:
      "I thrive on challenges and mentally stimulating tasks, which sparked my passion for coding and led me to pursue computer science. Whether it's building apps, websites, or user interfaces, I find joy in solving problems through writing code, embracing every opportunity to learn and innovate.",
    date: "Soft Skills",
  },
  {
    icon: RectangleGroupIcon,
    title: "Full-Stack Web Development ",
    children:
      "Crafting seamless and dynamic web applications is my specialty. From designing engaging user interfaces to building robust back-end systems, I create end-to-end solutions that deliver exceptional user experiences.",
    date: "Technical Skills",
  },
  {
    icon: LightBulbIcon,
    title: "Attention To Detail",
    children:
      "I ensure every aspect of a project is carefully planned, tested, and executed. From clean, efficient code to polished user interfaces, my focus is on delivering high-quality, dependable solutions.",
    date: "Soft Skills",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Mobile App Development",
    children:
      "I am on a journey to master the art of creating responsive and intuitive mobile apps. My focus is on ensuring seamless performance across both iOS and Android devices, as I continuously explore and integrate the latest development techniques and best practices.",
    date: "Technical Skills",
  },
  {
    icon: EyeIcon,
    title: "Creative Thinking",
    children:
      "I bring innovative solutions to complex challenges, thinking outside the box to optimize workflows, improve user experiences, and push the boundaries of what's possible in development.",
    date: "Soft Skills",
  },
  {
    icon: SwatchIcon,
    title: "Technology Stack",
    children: (
      <span>
        <span className="grid grid-cols-5 gap-y-1 gap-x-4 sm:gap-1 sm:grid-cols-10 md:grid-cols-10 xl:grid-cols-10 xl:gap-x-1 pb-1">
          {TECH_ICONS_MAIN.map((element, key) => (
            <img src={element} key={key} />
          ))}
        </span>
        <span className="grid grid-cols-10 gap-1 md:grid-cols-10">
          {TECH_ICONS_SEC.map((element, key) => (
            <img src={element} key={key} />
          ))}
        </span>
      </span>
    ),
    date: "Technical Skills",
  },
];

export function Skills() {
  return (
    <motion.section
      className="mb-4 xl:mx-15 pt-20"
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { delay: 0, duration: 0.7 },
      }}
      viewport={{ once: true, amount: 0.05 }}
    >
      <div className="container mx-auto mb-10 text-center">
        <Typography color="white" className="mb-2 font-bold uppercase">
          my skills
        </Typography>
        <Typography variant="h2" color="white" className="mb-4">
          What I do
        </Typography>
        <Typography className="mx-auto w-full dark:text-zinc-400 lg:w-10/12">
          I&apos;m not just a developer; I&apos;m a{" "}
          <TextHighlight>curator of digital experiences</TextHighlight>. My
          passion lies in{" "}
          <TextHighlight>
            blending intelligence with creativity and technology
          </TextHighlight>
          , whether I'm developing apps or DJing, to{" "}
          <TextHighlight>design and craft memorable experiences</TextHighlight>{" "}
          for my audience.
        </Typography>
      </div>
      <div className="container flex flex-col gap-y-4 mx-auto xl:flex-row md:gap-x-20">
        {/* Soft skills */}
        <div className="flex flex-col gap-y-4 items-center">
          {SKILLS.filter((_, idx) => idx % 2 === 0).map((props, idx) => (
            <SkillCard key={idx} {...props} />
          ))}
        </div>
        {/* Technical skills */}
        <div className="flex flex-col gap-y-4 items-center">
          {SKILLS.filter((_, idx) => idx % 2 !== 0).map((props, idx) => (
            <SkillCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
