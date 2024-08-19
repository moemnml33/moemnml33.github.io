import moebooka from "../assets/moebooka.JPEG";
import deeper from "../assets/deeper.JPG";
import cratediggers from "../assets/cratediggers.anon.png";
import dj808 from "../assets/dj-808.JPG";
import helloworld from "../assets/hello-world.png";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export default function PhotoGallery() {
  const handleCratedigger = () => {
    window.open("https://linktr.ee/cratediggers.anon", "_blank");
  };
  return (
    <>
      <motion.div
        className="flex flex-row space-x-6 rounded-xl overflow-x-auto bg-trasparent justify-center absolute inset-x-0 py-2 pb-16 no-scrollbar"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0, duration: 0.7 },
        }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <Tilt className="flex-shrink-0" tiltReverse={true}>
          <img
            className="object-cover object-center rounded-xl shadow-lg w-56 h-56 shadow-blue-gray-900/50 transform -rotate-2 md:h-72 md:w-72"
            src={helloworld}
            alt="helloworld"
          />
        </Tilt>
        <Tilt className="flex-shrink-0" tiltReverse={true}>
          <img
            className="object-cover object-center rounded-xl shadow-lg w-56 h-56 shadow-blue-gray-900/50 transform rotate-2 md:h-72 md:w-72"
            src={dj808}
            alt="dj808"
          />
        </Tilt>
        <Tilt className="flex-shrink-0" tiltReverse={true}>
          <img
            className="object-cover object-center rounded-xl shadow-lg w-56 h-56 shadow-blue-gray-900/50 transform -rotate-2 md:h-72 md:w-72"
            src={deeper}
            alt="deeper"
          />
        </Tilt>
        <Tilt className="flex-shrink-0" tiltReverse={true}>
          <img
            className="object-contain object-center rounded-xl shadow-lg w-56 h-56 shadow-blue-gray-900/50 transform rotate-2 hover:cursor-pointer md:h-72 md:w-72 border border-transparent hover:border-yellow-300 ease-in-out duration-300"
            src={cratediggers}
            alt="cratediggers"
            onClick={handleCratedigger}
          />
        </Tilt>
        <Tilt className="flex-shrink-0" tiltReverse={true}>
          <img
            className="object-contain object-center rounded-xl shadow-lg w-56 h-56 shadow-blue-gray-900/50 transform -rotate-3 md:h-72 md:w-72"
            src={moebooka}
            alt="moebooka"
          />
        </Tilt>
      </motion.div>
      <div className="h-80 md:h-96"></div>
    </>
  );
}
