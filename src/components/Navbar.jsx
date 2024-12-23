import { Bars3Icon } from "@heroicons/react/24/solid";
import { Navbar } from "@material-tailwind/react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
} from "@nextui-org/react";

import React from "react";

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

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Navbar className="fixed backdrop-filter backdrop-blur-md top-0 inset-x-0 z-10 h-max max-w-full border-none rounded-none py-3 px-5 bg-black flex lg:justify-around">
        <Button
          className="text-xs lg:hidden p-0 m-0 min-w-10 max-h-6 bg-transparent"
          onPress={onOpen}
        >
          <Bars3Icon className="h-6 w-6 text-white" />
        </Button>
        <div className="text-slate-500 dark:text-zinc-400 hidden lg:block">
          {LINKS.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="px-2 md:px-4 cursor-pointer py-1.5 text-sm font-light hover:text-cyan-400 duration-300 ease-in-out text-zinc-300"
            >
              {item.title}
            </a>
          ))}
          {/* <span class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span> */}
        </div>
      </Navbar>
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="left"
        backdrop="blur"
        size="xs"
        motionProps={{
          variants: {
            enter: {
              opacity: 1,
              x: 0,
              duration: 1,
            },
            exit: {
              x: 0,
              opacity: 0,
              duration: 1,
            },
          },
        }}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader
                className="flex flex-col gap-1 text-3xl"
                color="white"
              >
                Menu
              </DrawerHeader>
              <DrawerBody>
                <div>
                  {LINKS.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="block py-2 text-zinc-300 text-large hover:text-cyan-400 duration-300 ease-in-out"
                      onClick={onClose}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}

{
  /* <Menu
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
      </Menu> */
}
