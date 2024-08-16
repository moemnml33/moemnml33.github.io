import React from "react";
import { Navbar } from "@material-tailwind/react";

const LINKS = [
  { title: "About", link: "#about" },
  { title: "Skills", link: "#skills" },
  { title: "Experience", link: "#experience" },
  { title: "Projects", link: "#projects" },
  { title: "Education", link: "#education" },
];

export default function SimpleNavbar() {
  const handleScroll = (event, link) => {
    event.preventDefault();
    const section = document.querySelector(link);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto w-min p-0 my-5 lg:rounded-full bg-white dark:bg-zinc-800 shadow-lg border border-zinc-700">
      <div className="relative flex items-center justify-between text-slate-500 dark:text-zinc-400">
        {LINKS.map((item, index) => (
          <a
            key={index}
            href={item.link}
            onClick={(event) => handleScroll(event, item.link)}
            className="mx-2 md:mx-4 cursor-pointer py-1.5 text-sm font-medium hover:text-cyan-400 duration-300 ease-in-out"
          >
            {item.title}
          </a>
        ))}
        <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
      </div>
    </Navbar>
  );
}
