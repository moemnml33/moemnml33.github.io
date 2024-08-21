import React from "react";
import { Typography } from "@material-tailwind/react";
import { AcademicCapIcon, FireIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const EDUCATION = [
  {
    icon: AcademicCapIcon,
    title:
      "Bachelor's in Computer Science CO-OP - Concordia University, Montreal",
    children: `Relevant Courses: Web-Based Enterprise Application Design, Web Services & Applications, User Interface Design, 
    Artifical Intelligence, Machine Learning, Data Structures & Algorithms, Database Management, Object Oriented Programming, 
    System Hardware, Web Programming, Operating Systems, Software Engineering.`,
    date: "2020-2025 (Expected)",
  },
  {
    icon: AcademicCapIcon,
    title: "Certified Web Developer - Web Development Institute",
    children:
      "This comprehensive program covered HTML5, CSS3, JavaScript, responsive design, server-side scripting, and web security.",
    date: "2016",
  },
  {
    icon: AcademicCapIcon,
    title: "Excel Training Program - Concordia University",
    children: `The Excel Training Program is a voluntary series of microlearning concept videos and assessments, to enhance my excel 
      skills and readiness. Covers, Excel basics, data wrangling and date time handling, LOOKUP functions and charts, array 
      formulae and data analysis.`,
    date: "2023",
  },
  {
    icon: AcademicCapIcon,
    title: "JavaScript Developer Certification - Code Academy",
    children:
      "This certification demonstrates advanced proficiency in JavaScript programming, including ES6 features and practical applications.",
    date: "2014",
  },
];

export default function Education() {
  return (
    <motion.section
      className="mb-4 xl:mx-15 pt-14"
      id="education"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { delay: 0, duration: 0.7 },
      }}
      viewport={{ once: true, amount: 0.05 }}
    >
      <div className="container mx-auto mb-10 text-center">
        <Typography color="white" className="mb-2 font-bold uppercase">
          Education & Certifications
        </Typography>
        <Typography variant="h2" color="white" className="mb-4">
          Eager to learn
        </Typography>
        <Typography className="mx-auto w-full dark:text-zinc-400 lg:w-10/12">
          Driven by a passion for continuous growth, each milestone in my
          academic and professional training has equipped me with the skills
          needed to{" "}
          <span className="inline text-cyan-600 font-semibold">
            innovate and excel in creating impactful digital solutions
          </span>
          . From mastering core programming languages to earning specialized
          certifications, my educational background reflects my{" "}
          <span className="inline text-cyan-600 font-semibold">
            commitment to staying at the forefront of technology
          </span>
          .
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-6 gap-y-4">
        {EDUCATION.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </motion.section>
  );
}
