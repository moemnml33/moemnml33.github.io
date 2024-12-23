import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import React from "react";
import bureauengros from "../assets/institutions-logos/bureauengros.png";
import healthcaresystems from "../assets/institutions-logos/healthcaresystemsr&a.png";
import timhortons from "../assets/institutions-logos/timhortons.jpeg";
import SkillCard from "../components/SkillCard";
import TextHighlight from "../components/TextHighlight";

const EXPERIENCE = [
  {
    icon: healthcaresystems,
    title:
      "Machine Learning & Computer Vision Intern - Healthcare Systems R&A Inc., Montreal",
    children: `Developed mobile apps for iOS and Android simulators, resolving platform-specific backend issues.
    Integrated spine prediction and pain score estimation models, while debugging video processing and data-handling
    issues. Improved predictive modelling accuracy with Artificial Neural Networks (ANNs). Enhanced model stability and
    performance with iterative data imputation, cross-validation, and PCA. Streamlined app usability and created
    comprehensive setup guides and troubleshooting documentation.`,
    date: "Sep 2024 - Dec 2024",
  },
  {
    icon: healthcaresystems,
    title:
      "Full-stack Web & Mobile Dev Intern - Healthcare Systems R&A Inc., Montreal",
    children: `Full-stack React frontend with calendar-based date selection for data fetching and display, and Express.js
    backend with API endpoints for retrieving and aggregating data from SQLite3 database. Enhanced React Native app usability 
    with intuitive navigation, live camera feed processing, video upload, front/back camera toggling, and LineChart for pain-related data 
    visualization. Improved codebase with reusable components, resolved dependency errors, and redesigned interface.`,
    date: "May 2024 - Aug 2025",
  },
  {
    icon: healthcaresystems,
    title: "Python Game Dev Intern - Healthcare Systems R&A Inc., Montreal",
    children: `Designed and developed interactive applications and games in Python, integrating with a Brain-Computer Interface
    (BCI) model to control apps using brain signals. Ensured seamless synchronization between the BCI and applications for smooth
    interaction. Created a clean, user-friendly GUI with an intuitive layout, visual appeal, and engaging sound effects to enhance user experience.`,
    date: "June 2023 - Sept 2023",
  },
  {
    icon: bureauengros,
    title: "Technology Sales - Bureau En Gros/Staples, Montreal",
    children: `Analyzed client needs and provided personalized solutions using in-depth knowledge of technology products and services.
    Provided technical support, troubleshooting, and warranty-related inquiries for various devices. Maintained an organized stock system
    for efficient operations and streamlined customer service.`,
    date: "Aug 2021 - Aug 2022",
  },
  {
    icon: timhortons,
    title: "Assistant Manager - Tim Horton's, Montreal",
    children: `Fostered a team environment to drive sales and revenue by building strong relationships. Strategically allocated 
      tasks based on strengths and goals to maximize efficiency. Interviewed new hires, provided coaching, training, and customer 
      service guidance. Thrived in high-pressure environments with an organized workflow.`,
    date: "Jan 2016 - Aug 2021",
  },
];

export default function Experience() {
  return (
    <motion.section
      className="mb-4 xl:mx-15 pt-20"
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { delay: 0, duration: 0.7 },
      }}
      viewport={{ once: true, amount: 0.05 }}
    >
      <div className="container mx-auto mb-10 text-center">
        <Typography color="white" className="mb-2 font-bold uppercase">
          Work & Experience
        </Typography>
        <Typography variant="h2" color="white" className="mb-4">
          Creative Technologist
        </Typography>
        <Typography className="mx-auto w-full dark:text-zinc-400 lg:w-10/12">
          I'm not just a developer; I'm a{" "}
          <TextHighlight>
            well-rounded professional with a creative edge
          </TextHighlight>
          . My year as a{" "}
          <TextHighlight>Software Engineering Research Assistant</TextHighlight>
          , along with experience as an assistant manager, tech salesperson, and
          DJ, has sharpened my{" "}
          <TextHighlight>
            technical, leadership, and creative skills
          </TextHighlight>
          . This diverse background prepares me to tackle challenges from
          multiple angles and{" "}
          <TextHighlight>craft innovative solutions</TextHighlight>.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-6 gap-y-4">
        {EXPERIENCE.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </motion.section>
  );
}
