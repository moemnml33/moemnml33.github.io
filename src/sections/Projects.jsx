import { Typography } from "@material-tailwind/react";
import React from "react";
import MotionSection from "../components/MotionSection";
import TextHighlight from "../components/TextHighlight";

const PROJECTS = [
  {
    title: "Problem Solving",
    children:
      "I thrive on challenges and mentally stimulating tasks, which sparked my passion for coding and led me to pursue computer science. Whether it's building apps, websites, or user interfaces, I find joy in solving problems through writing code, embracing every opportunity to learn and innovate.",
    date: "Soft Skills",
  },
  {
    title: "Full-Stack Web Development ",
    children:
      "Crafting seamless and dynamic web applications is my specialty. From designing engaging user interfaces to building robust back-end systems, I create end-to-end solutions that deliver exceptional user experiences.",
    date: "Technical Skills",
  },
  {
    title: "Attention To Detail",
    children:
      "I ensure every aspect of a project is carefully planned, tested, and executed. From clean, efficient code to polished user interfaces, my focus is on delivering high-quality, dependable solutions.",
    date: "Soft Skills",
  },
  {
    title: "Mobile App Development",
    children:
      "I am on a journey to master the art of creating responsive and intuitive mobile apps. My focus is on ensuring seamless performance across both iOS and Android devices, as I continuously explore and integrate the latest development techniques and best practices.",
    date: "Technical Skills",
  },
  {
    title: "Creative Thinking",
    children:
      "I bring innovative solutions to complex challenges, thinking outside the box to optimize workflows, improve user experiences, and push the boundaries of what's possible in development.",
    date: "Soft Skills",
  },
];

export default function Projects() {
  return (
    <MotionSection id="projects">
      <div className="container mx-auto mb-10 text-center">
        <Typography color="white" className="mb-2 font-bold uppercase">
          my projects
        </Typography>
        <Typography variant="h2" color="white" className="mb-4">
          What I Have Built
        </Typography>
        <Typography className="mx-auto w-full dark:text-zinc-400 lg:w-10/12">
          Each project I've undertaken is a testament to my{" "}
          <TextHighlight>drive for innovation and excellence</TextHighlight>.
          From designing{" "}
          <TextHighlight>
            intuitive web applications to creating immersive digital experiences
          </TextHighlight>
          , my portfolio showcases the{" "}
          <TextHighlight>versatility of my skills</TextHighlight>. Whether it's
          a dynamic e-commerce platform, an engaging portfolio website, or a
          soundscape mix that blends technology with artistry, every project
          reflects my{" "}
          <TextHighlight>
            dedication to delivering impactful and user-focused solutions
          </TextHighlight>
          .
        </Typography>
      </div>
      <div className="container flex flex-col gap-y-4 mx-auto xl:flex-row md:gap-x-20"></div>
    </MotionSection>
  );
}
