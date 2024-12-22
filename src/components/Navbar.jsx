import { Bars3Icon } from "@heroicons/react/24/solid";
import {
  Button,
  Drawer,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React from "react";

// const LINKS = ["About", "Experience", "Education", "Uses"];
const LINKS = [
  { title: "About", link: "#about" },
  { title: "Education", link: "#education" },
  { title: "Experience", link: "#experience" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#" },
];

export default function SimpleNavbar() {
  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960);
  }, []);

  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <Navbar className="fixed backdrop-filter backdrop-blur-md top-0 inset-x-0 z-10 h-max max-w-full border-none rounded-none py-3 px-5 bg-black flex sm:justify-around">
        {/* <Menu
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
        placement="bottom-end"
      >
        <MenuHandler>
          <Button className="text-xs sm:hidden py-1 px-2 m-0 bg-transparent">
            <Bars3Icon className="h-6 w-6 text-white" />
          </Button>
        </MenuHandler>
        <MenuList className="bg-black border-blue-gray-900 text-white rounded-xl">
          {LINKS.map((item, index) => (
            <MenuItem key={index}>
              <a href={item.link}>{item.title}</a>
            </MenuItem>
          ))}
        </MenuList>
      </Menu> */}
        <Button
          className="text-xs sm:hidden py-1 px-2 m-0 bg-transparent"
          onClick={openDrawer}
        >
          <Bars3Icon className="h-6 w-6 text-white" />
        </Button>
        <div className="text-slate-500 dark:text-zinc-400 hidden sm:block">
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
      <Drawer
        open={open}
        onClose={closeDrawer}
        className="p-4 bg-gray-900 text-white"
        size={240}
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="white">
            Menu
          </Typography>
          <IconButton variant="text" color="white" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div>
          {LINKS.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block py-2 text-white text-medium hover:text-cyan-400"
              onClick={closeDrawer}
            >
              {item.title}
            </a>
          ))}
        </div>
      </Drawer>
    </>
  );
}
