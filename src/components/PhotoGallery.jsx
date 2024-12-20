import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import coding from "../assets/gallery/coding.png";
import cratediggers from "../assets/gallery/cratediggers.anon.png";
import deeper from "../assets/gallery/deeper.JPG";
import dj808 from "../assets/gallery/dj-808.JPG";
import helloworld from "../assets/gallery/hello-world.png";
import moebooka from "../assets/gallery/moebooka.JPEG";

export default function PhotoGallery() {
  const handleCratedigger = () => {
    window.open("https://linktr.ee/cratediggers.anon", "_blank");
  };
  return (
    <>
      <motion.section
        className="flex flex-row space-x-6 rounded-xl overflow-x-auto bg-trasparent justify-center absolute inset-x-0 py-2 pb-16 scrollbar-hide"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0, duration: 2 },
        }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <Tilt className="flex-shrink-0" tiltReverse={true}>
          <Image
            className="object-cover object-center rounded-xl shadow-lg w-56 h-56 shadow-blue-gray-900/50 transform rotate-2 md:h-72 md:w-72"
            src={helloworld}
            alt="helloworld"
          />
        </Tilt>
        <Tilt className="flex-shrink-0" tiltReverse={true}>
          <Image
            className="object-cover object-center rounded-xl shadow-lg w-56 h-56 shadow-blue-gray-900/50 transform -rotate-2 md:h-72 md:w-72"
            src={deeper}
            alt="deeper"
          />
        </Tilt>
        <Tilt className="flex-shrink-0" tiltReverse={true}>
          <Image
            className="object-cover object-center rounded-xl shadow-lg w-56 h-56 shadow-blue-gray-900/50 transform rotate-2 md:h-72 md:w-72"
            src={dj808}
            alt="dj808"
          />
        </Tilt>
        <Tilt className="flex-shrink-0" tiltReverse={true}>
          <Image
            className="object-cover object-center rounded-xl shadow-lg w-56 h-56 shadow-blue-gray-900/50 transform -rotate-2 md:h-72 md:w-72"
            src={coding}
            alt="coding"
          />
        </Tilt>
        <Tilt className="flex-shrink-0" tiltReverse={true}>
          <Image
            className="object-contain object-center rounded-xl shadow-lg w-56 h-56 shadow-blue-gray-900/50 transform rotate-2 hover:cursor-pointer md:h-72 md:w-72 border border-transparent hover:border-yellow-300 ease-in-out duration-300"
            src={cratediggers}
            alt="cratediggers"
            onClick={handleCratedigger}
          />
        </Tilt>
        <Tilt className="flex-shrink-0" tiltReverse={true}>
          <Image
            className="object-contain object-center rounded-xl shadow-lg w-56 h-56 shadow-blue-gray-900/50 transform -rotate-3 md:h-72 md:w-72"
            src={moebooka}
            alt="moebooka"
          />
        </Tilt>
      </motion.section>
      <div className="h-72 md:h-96 mb-4"></div>
    </>
  );
}
