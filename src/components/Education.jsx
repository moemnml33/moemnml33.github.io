import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import React from "react";
import concordia from "../assets/institutions-logos/concordia.png";
import udemy from "../assets/institutions-logos/udemy.png";
import SkillCard from "./SkillCard";

const EDUCATION = [
  {
    icon: concordia,
    title:
      "Bachelor's in Computer Science CO-OP - Concordia University, Montreal",
    children: `Relevant Courses: Web-Based Enterprise Application Design, Web Services & Applications, User Interface Design,
      Artifical Intelligence, Machine Learning, Data Structures & Algorithms, Database Management, Object Oriented Programming,
      System Hardware, Web Programming, Operating Systems, Software Engineering.`,
    date: "2020-2025 (Expected)",
  },
  {
    icon: udemy,
    title: "The Complete 2024 Web Development Bootcamp - Udemy",
    children: `This comprehensive course covered front-end and back-end web development, including HTML5, CSS3, Flexbox,
    Grid, Bootstrap 5, JavaScript ES6, DOM manipulation, and React.js with Hooks. Backend topics included Node.js,
    Express.js, REST APIs, SQL, PostgreSQL, and authentication. The course also introduced Git, GitHub,
    version control, and deployment with GitHub Pages. Additionally, explored Web3 technologies such as blockchain,
    token contract development, and NFT minting and trading logic, providing a solid foundation for modern web development.`,
    date: "2024 - current",
  },
  {
    icon: udemy,
    title: "Build mobile apps with React Native: From ZERO to EXPERT - Udemy",
    children: `This 10-hour course provided a comprehensive guide to building cross-platform mobile apps with React Native,
    covering essential and advanced topics. It included creating functional and class components, using React Context and
    Hooks, integrating REST APIs, and implementing features such as tab navigation, user authentication (email and Google),
    image uploads, and swipeable image carousels. The course also explored app navigation with bottom tabs and stack
    navigation, making external calls and links, and formatting code with ESLint. Designed to equip learners with the
    skills to build enterprise-grade mobile apps for both iOS and Android.`,
    date: "2024 - current",
  },
  {
    icon: udemy,
    title: "React - The Complete Guide 2024 (incl. Next.js, Redux) - Udemy",
    children: `This course provided an in-depth introduction to React.js and Next.js, covering core
    concepts such as components, props, state management, and dynamic data binding. Topics included React Hooks,
    debugging React apps, styling with Styled Components and CSS Modules, handling forms, HTTP requests, and implementing
    authentication. Explored advanced concepts like Redux Toolkit, React Router, React Server Components, and combining
    React with TypeScript. Additionally, the course covered deploying React apps, adding animations, unit testing,
    and building real-world demo projects to solidify understanding.`,
    date: "2024 - current",
  },
  // {
  //   icon: AcademicCapIcon,
  //   title: "SQLite Databases for Python Programming - Udemy",
  //   children: `This course covered the use of SQLite with Python. It covered database creation,
  //       table management, data manipulation, and query building. Built a basic app to apply skills, including inserting,
  //       updating, sorting, and deleting records using SQLite.`,
  //   date: "2024",
  // },
  {
    icon: concordia,
    title: "Excel Training Program - Concordia University",
    children: `The Excel Training Program is a voluntary series of microlearning concept videos and assessments, to enhance my excel
        skills and readiness. Covers, Excel basics, data wrangling and date time handling, LOOKUP functions and charts, array
        formulae and data analysis.`,
    date: "2023",
  },
];

export default function Education() {
  return (
    <motion.section
      className="mb-4 xl:mx-15 pt-6"
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
