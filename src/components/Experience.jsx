import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import React from "react";
import SkillCard from "./SkillCard";

const EXPERIENCE = [
  {
    icon: BriefcaseIcon,
    title:
      "Bachelor's in Computer Science CO-OP - Concordia University, Montreal",
    children: `Relevant Courses: Web-Based Enterprise Application Design, Web Services & Applications, User Interface Design, 
    Artifical Intelligence, Machine Learning, Data Structures & Algorithms, Database Management, Object Oriented Programming, 
    System Hardware, Web Programming, Operating Systems, Software Engineering.`,
    date: "2020-2025 (Expected)",
  },
  {
    icon: BriefcaseIcon,
    title: "Certified Web Developer - Web Development Institute",
    children:
      "This comprehensive program covered HTML5, CSS3, JavaScript, responsive design, server-side scripting, and web security.",
    date: "2016",
  },
  {
    icon: BriefcaseIcon,
    title: "Excel Training Program - Concordia University",
    children: `The Excel Training Program is a voluntary series of microlearning concept videos and assessments, to enhance my excel 
      skills and readiness. Covers, Excel basics, data wrangling and date time handling, LOOKUP functions and charts, array 
      formulae and data analysis.`,
    date: "2023",
  },
  {
    icon: BriefcaseIcon,
    title: "JavaScript Developer Certification - Code Academy",
    children:
      "This certification demonstrates advanced proficiency in JavaScript programming, including ES6 features and practical applications.",
    date: "2014",
  },
];

export default function Experience() {
  return (
    <motion.section
      className="mb-4 xl:mx-15 pt-6"
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
          <span className="inline text-cyan-600 font-semibold">
            well-rounded professional with a creative edge
          </span>
          . My year as a{" "}
          <span className="inline text-cyan-600 font-semibold">
            Software Engineering Research Assistant
          </span>
          , along with experience as an assistant manager, tech salesperson, and
          DJ, has sharpened my{" "}
          <span className="inline text-cyan-600 font-semibold">
            technical, leadership, and creative skills
          </span>
          . This diverse background prepares me to tackle challenges from
          multiple angles and{" "}
          <span className="inline text-cyan-600 font-semibold">
            craft innovative solutions
          </span>
          .
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
