import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import moebooka from "../assets/gallery/moebooka.JPEG";
import Links from "../components/Links";
import TextHighlight from "../components/TextHighlight";
import { initial, viewport, whileInView } from "../GlobalVariables";

export default function AboutCard() {
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
          <Links />
        </CardFooter>
      </Card>
    </motion.div>
  );
}
