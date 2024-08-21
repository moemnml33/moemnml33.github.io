import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";

// const LINKS = ["About", "Experience", "Education", "Uses"];
const LINKS = [
  { title: "About", link: "#about" },
  { title: "Skills", link: "#skills" },
  { title: "Education", link: "#" },
  { title: "Experience", link: "#" },
  { title: "Projects", link: "#" },
];

export default function SimpleNavbar() {
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="fixed backdrop-filter backdrop-blur-md top-0 inset-x-0 z-10 h-max max-w-full border-none rounded-none py-3 bg-black flex justify-around">
      <div className="text-slate-500 dark:text-zinc-400">
        {LINKS.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="px-2 md:px-4 cursor-pointer py-1.5 text-sm font-light hover:text-cyan-400 duration-300 ease-in-out text-zinc-400"
          >
            {item.title}
          </a>
        ))}
        {/* <span class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span> */}
      </div>
    </Navbar>
  );
}
