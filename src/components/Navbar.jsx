import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";

// const LINKS = ["About", "Experience", "Education", "Uses"];
const LINKS = [
  { title: "About", link: "#about" },
  { title: "Skills", link: "#akills" },
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
    <Navbar className="mx-auto w-min p-0 my-5 lg:rounded-full bg-white dark:bg-zinc-800 shadow-lg border border-zinc-700">
      <div className="relative flex items-center justify-between text-slate-500 dark:text-zinc-400">
        {LINKS.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="mx-4 cursor-pointer py-1.5 text-sm font-medium hover:text-cyan-400 duration-300 ease-in-out"
          >
            {item.title}
          </a>
        ))}
        <span class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
      </div>
    </Navbar>
  );
}
