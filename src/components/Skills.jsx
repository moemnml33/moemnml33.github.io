"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "./SkillCard";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Web Development",
    children:
      "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build experiences that captivate and engage users.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Mobile App Development",
    children:
      "I am on a journey to master the art of creating responsive and intuitive mobile apps. My focus is on ensuring seamless performance across both iOS and Android devices, as I continuously explore and integrate the latest development techniques and best practices.",
  },
  {
    icon: EyeIcon,
    title: "User-Centric Design",
    children:
      "My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.",
  },
  {
    icon: SwatchIcon,
    title: "Technology Stack",
    children:
      "I'm well-versed in the industry's leading technologies, including frontend tools like HTML5, CSS3, JS, and frameworks such as React, React Native, and Tailwind. Additionally, I have extensive experience with Python, Java, and database management using MySQL.",
  },
  //   {
  //     icon: HashtagIcon,
  //     title: " Web Optimization",
  //     children:
  //       "Performance matters. I optimize websites and apps for speed, ensuring the users enjoy a fast and responsive experience.",
  //   },
  //   {
  //     icon: DocumentTextIcon,
  //     title: "Testing and Quality Assurance",
  //     children:
  //       "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Peace of mind is as important to me as the functionality of the project.",
  //   },
];

export function Skills() {
  return (
    <section className="px-8 mb-10" id="skills">
      <div className="container mx-auto mb-10 text-center">
        <Typography color="white" className="mb-2 font-bold uppercase">
          my skills
        </Typography>
        <Typography variant="h2" color="white" className="mb-4">
          What I do
        </Typography>
        <Typography className="mx-auto w-full dark:text-zinc-400 lg:w-10/12">
          I&apos;m not just a developer; I&apos;m a curator of digital
          experiences. My passion lies in blending creativity with technology,
          whether I'm developing apps or DJing, to design and craft memorable
          experiences for my audience.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2 justify-between">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
