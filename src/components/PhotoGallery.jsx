import moebooka from "../assets/moebooka.JPEG";
import deeper from "../assets/deeper.JPG";
import cratediggers from "../assets/cratediggers.anon.png";
import dj808 from "../assets/dj-808.JPG";
import helloworld from "../assets/hello-world.png";

export default function PhotoGallery() {
  const handleCratedigger = () => {
    window.open("https://linktr.ee/cratediggers.anon", "_blank");
  };
  return (
    <>
      <div className="flex flex-row space-x-6 rounded-xl overflow-x-hidden bg-trasparent justify-center absolute -left-1 h-[420px] py-2">
        <img
          className="object-cover object-center rounded-xl shadow-lg w-56 h-56 shadow-blue-gray-900/50 transform -rotate-2 md:h-72 md:w-72"
          src={helloworld}
          alt="helloworld"
        />
        <img
          className="object-cover object-center rounded-xl shadow-lg w-56 h-56 shadow-blue-gray-900/50 transform rotate-2 md:h-72 md:w-72"
          src={dj808}
          alt="dj808"
        />
        <img
          className="object-cover object-center rounded-xl shadow-lg w-56 h-56 shadow-blue-gray-900/50 transform -rotate-2 md:h-72 md:w-72"
          src={deeper}
          alt="deeper"
        />
        <img
          className="object-contain object-center rounded-xl shadow-lg w-56 h-56 shadow-blue-gray-900/50 transform rotate-2 hover:cursor-pointer md:h-72 md:w-72"
          src={cratediggers}
          alt="cratediggers"
          onClick={handleCratedigger}
        />
        <img
          className="object-contain object-center rounded-xl shadow-lg w-56 h-56 shadow-blue-gray-900/50 transform -rotate-3 md:h-72 md:w-72"
          src={moebooka}
          alt="moebooka"
        />
      </div>
      <div className="h-96"></div>
    </>
  );
}
