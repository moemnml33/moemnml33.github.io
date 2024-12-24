import { Typography } from "@material-tailwind/react";
import React from "react";
import mineralLogsScreenshot from "../assets/projects/mineralLogsScreenshot.jpeg";
// import musicCatalogExplorerScreenshot from "../assets/projects/musicCatalogExplorerScreenshot.jpeg";
import portfolioScreenshot from "../assets/projects/portfolioScreenshot.jpeg";
import snakeNTetrisScreenshot from "../assets/projects/snakeNTetrisScreenshot.jpg";
import MotionSection from "../components/MotionSection";
import ProjectCard from "../components/ProjectCard";
import TextHighlight from "../components/TextHighlight";

const PROJECTS = [
  {
    image: portfolioScreenshot,
    title: "Portfolio Website",
    description: `A responsive portfolio website created with React and Tailwind CSS, featuring a modern design,
    smooth animations, and an intuitive layout to showcase skills, projects, and experiences. The website is optimized
    for performance and accessibility, ensuring a seamless experience across all devices.`,
    skillOne: "#REACT",
    skillTwo: "#TALWIND",
    skillThree: "#FRONTEND",
  },
  {
    image: mineralLogsScreenshot,
    title: "Mineral Data Tracker",
    description: `A full-stack interactive application for recording and retrieving runtime variables and settings from pipeline
    processes as part of my summer 2024 internship. Features include a React.js front end with Tailwind CSS for date-based data selection, an Express.js
    back end for database queries, and an SQLite database for structured data storage and retrieval. Users can explore
    data in expandable sections, visualize feature importance in charts, and copy or save information with ease.`,
    skillOne: "#REACT",
    skillTwo: "#NODE",
    skillThree: "#FULL-STACK",
  },
  //   {
  //     image: musicCatalogExplorerScreenshot,
  //     title: "Music Catalog Explorer",
  //     description: `A full-stack web application designed to query musicians, albums, and tracks using a React.js front end and a
  //       Node.js back end. Features include an SQLite database with three relational tables (Musician, Album, Track), a basic user
  //       interface for searching musicians and viewing related albums, and dynamic track details displayed in a table format.`,
  //     skillOne: "#REACT",
  //     skillTwo: "#NODE",
  //     skillThree: "#FULL-STACK",
  //   },
  {
    image: snakeNTetrisScreenshot,
    title: "Snake / Tetris",
    description: `Interactive applications and games, including Game Launcher, Tetris, and Snake, designed and programmed in
    Python to integrate with a Brain-Computer Interface (BCI) model, enabling users to control them with brain signals. Features
    include seamless synchronization between the BCI model and applications, a user-friendly GUI with intuitive layouts,
    and engaging sound effects.`,
    skillOne: "#PYTHON",
    skillTwo: "#PYQT5",
    skillThree: "#UX-UI",
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
          . (more on my github)
        </Typography>
      </div>
      <div className="container grid md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-y-4 mx-auto xl:flex-row md:gap-x-20">
        {PROJECTS.map((props, index) => (
          <ProjectCard key={index} {...props} />
        ))}
      </div>
    </MotionSection>
  );
}
