import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import moebooka from "../assets/gallery/moebooka.JPEG";
import TextHighlight from "../components/TextHighlight";
import { initial, viewport, whileInView } from "../GlobalVariables";

export default function AboutCard() {
  const handleGithub = () => {
    window.open("https://www.github.com/moemnml33", "_blank");
  };
  const handleLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/mohamad-boukaili-9871b5211/",
      "_blank"
    );
  };
  const handleInstagram = () => {
    window.open("https://www.instagram.com/moebooka33/", "_blank");
  };
  const handleSoundcloud = () => {
    window.open("https://soundcloud.com/moebooka_music", "_blank");
  };
  const handleTwitch = () => {
    window.open("https://www.twitch.tv/moebooka_music", "_blank");
  };
  const handleDiscord = () => {
    window.open("https://discord.com/users/moebooka33/", "_blank");
  };

  return (
    <motion.div
      className="container flex flex-col sm:px-8 pt-12 sm:pb-4 md:pb-8 lg:mx-12 max-w-[850px]"
      id="about"
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
    >
      <Card className="my-8 bg-transparent shadow-transparent">
        <Avatar src={moebooka} alt="avatar" size="xl" />
        <CardBody className="p-0 pt-6">
          <Typography variant="h2" color="white" className="mb-2">
            Junior Full-Stack & App Developer, Independent Artist
          </Typography>
          <Typography className="text-zinc-400">
            I'm Mohamad -{" "}
            <TextHighlight>a junior full-stack and app developer</TextHighlight>{" "}
            , as well as an <TextHighlight> independent artist </TextHighlight>{" "}
            based in Montreal. I hold up to one year of work experience as a
            software engineering research assistant, I am currently in my{" "}
            <TextHighlight>
              fifth & last year of a Computer Science degree
            </TextHighlight>{" "}
            at Concordia University. It all began with a simple "Hello, World!"
            program... Let's connect!
          </Typography>
        </CardBody>
        <CardFooter className="px-0 pt-4 pb-8">
          <div className="flex gap-4">
            <button
              className="w-8 relative align-center text-xs text-zinc-400 hover:text-cyan-400 duration-300 ease-in-out"
              type="button"
              onClick={handleGithub}
            >
              <span>
                <i className="text-xl fab fa-github" aria-hidden="true"></i>
              </span>
            </button>
            <button
              className="w-8 relative align-center text-xs text-zinc-400 hover:text-cyan-400 duration-300 ease-in-out"
              type="button"
              onClick={handleLinkedin}
            >
              <span>
                <i className="text-xl fab fa-linkedin" aria-hidden="true"></i>
              </span>
            </button>
            <button
              className="w-8 relative align-center text-xs text-zinc-400 hover:text-cyan-400 duration-300 ease-in-out"
              type="button"
              onClick={handleInstagram}
            >
              <span>
                <i className="text-xl fab fa-instagram" aria-hidden="true"></i>
              </span>
            </button>
            <button
              className="w-8 relative align-center text-xs text-zinc-400 hover:text-cyan-400 duration-300 ease-in-out"
              type="button"
              onClick={handleSoundcloud}
            >
              <span>
                <i className="text-xl fab fa-soundcloud" aria-hidden="true"></i>
              </span>
            </button>
            <button
              className="w-8 relative align-center text-xs text-zinc-400 hover:text-cyan-400 duration-300 ease-in-out"
              type="button"
              onClick={handleTwitch}
            >
              <span>
                <i className="text-xl fab fa-twitch" aria-hidden="true"></i>
              </span>
            </button>
            <button
              className="w-8 relative align-center text-xs text-zinc-400 hover:text-cyan-400 duration-300 ease-in-out"
              type="button"
              onClick={handleDiscord}
            >
              <span>
                <i className="text-xl fab fa-discord" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
