"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  SwatchIcon,
  EyeIcon,
  DevicePhoneMobileIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "./SkillCard";
import java from "../assets/tech-stack-icons/Java.png";
import python from "../assets/tech-stack-icons/Python.png";
import react from "../assets/tech-stack-icons/React.png";
import html from "../assets/tech-stack-icons/HTML.png";
import css from "../assets/tech-stack-icons/CSS.png";
import js from "../assets/tech-stack-icons/JavaScript.png";
import tailwind from "../assets/tech-stack-icons/TailwindCSS.png";
import vite from "../assets/tech-stack-icons/Vite.png";
import figma from "../assets/tech-stack-icons/Figma.png";
import github from "../assets/tech-stack-icons/Github.png";
import nodejs from "../assets/tech-stack-icons/NodeJS.png";
import npm from "../assets/tech-stack-icons/Npm.png";
import php from "../assets/tech-stack-icons/PHP.png";
import mysql from "../assets/tech-stack-icons/MySQL.png";
import sqlite from "../assets/tech-stack-icons/SQLite.png";
import vscode from "../assets/tech-stack-icons/VSCode.png";
import eclipse from "../assets/tech-stack-icons/Eclipse.png";
import androidstudio from "../assets/tech-stack-icons/AndroidStudio.png";
import qt from "../assets/tech-stack-icons/QT.png";
import ableton from "../assets/tech-stack-icons/Ableton.png";
import { motion } from "framer-motion";

const TECH_ICONS_MAIN = [
  java,
  python,
  react,
  html,
  css,
  js,
  tailwind,
  vite,
  figma,
  github,
];

const TECH_ICONS_SEC = [
  qt,
  mysql,
  sqlite,
  nodejs,
  npm,
  php,
  vscode,
  eclipse,
  androidstudio,
  ableton,
];

const SKILLS = [
  {
    icon: EyeIcon,
    title: "User-Centric Design",
    children:
      "My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.",
    date: "Soft Skills",
  },
  {
    icon: RectangleGroupIcon,
    title: "Frontend Web Development",
    children:
      "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build experiences that captivate and engage users.",
    date: "Technical Skills",
  },
  {
    icon: LightBulbIcon,
    title: "Attention To Detail",
    children:
      "Committed to exceptional code quality, intuitive user interface design, and thorough testing to deliver flawless, user-friendly web applications. Continuously striving to innovate and optimize, ensuring every project exceeds expectations.",
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
    icon: PuzzlePieceIcon,
    title: "Creative Thinking",
    children:
      "Committed to exceptional code quality, intuitive user interface design, and thorough testing to deliver flawless, user-friendly web applications. Continuously striving to innovate and optimize, ensuring every project exceeds expectations.",
    date: "Soft Skills",
  },
  {
    icon: SwatchIcon,
    title: "Technology Stack",
    children: (
      <span>
        <span className="grid grid-cols-5 gap-y-1 gap-x-4 sm:gap-1 sm:grid-cols-10 md:grid-cols-5 lg:grid-cols-10 xl:grid-cols-10 xl:gap-x-1 pb-1">
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
      className="px-8 mb-10"
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0, duration: 0.7 },
      }}
      viewport={{ once: true, amount: 0.1 }}
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
          <span className="inline text-cyan-600 font-semibold">
            curator of digital experiences
          </span>
          . My passion lies in{" "}
          <span className="inline text-cyan-600 font-semibold">
            blending creativity with technology
          </span>
          , whether I'm developing apps or DJing, to{" "}
          <span className="inline text-cyan-600 font-semibold">
            design and craft memorable experiences
          </span>{" "}
          for my audience.
        </Typography>
      </div>
      <div className="container grid grid-cols-1 gap-x-6 gap-y-4 mx-auto md:grid-cols-2 justify-between">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
