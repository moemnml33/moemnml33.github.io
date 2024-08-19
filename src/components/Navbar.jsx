import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";

// const LINKS = ["About", "Experience", "Education", "Uses"];
const LINKS = [
  { title: "About", link: "#about" },
  { title: "Skills", link: "#skills" },
  { title: "Experience", link: "#" },
  { title: "Projects", link: "#" },
  { title: "Education", link: "#" },
];

export default function SimpleNavbar() {
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="backdrop-filter backdrop-blur-md fixed top-0 inset-x-0 z-10 h-max max-w-full border-none rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-black flex justify-evenly">
      <div className="text-slate-500 dark:text-zinc-400">
        {LINKS.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="mx-3 md:mx-4 cursor-pointer py-1.5 text-sm font-light hover:text-cyan-400 duration-300 ease-in-out text-zinc-400"
          >
            {item.title}
          </a>
        ))}
        {/* <span class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span> */}
      </div>
    </Navbar>
  );
}
