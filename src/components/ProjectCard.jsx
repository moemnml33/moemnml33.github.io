import {
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Typography,
} from "@material-tailwind/react";
import { Image } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { motion } from "framer-motion";

export default function ProfileCard({
  image,
  title,
  description,
  skillOne,
  skillTwo,
  skillThree,
}) {
  return (
    <motion.div className="max-w-[360px] md:max-w-96 bg-cardBackground rounded-3xl shadow-md shadow-zinc-950/80 mb-4">
      <CardHeader
        floated={false}
        className="bg-transparent rounded-2xl aspect-w-16 aspect-h-9 shadow-md shadow-zinc-950/80"
      >
        <Image src={image} alt="project-picture" className="size-auto z-auto" />
      </CardHeader>
      <CardBody className="p-5 pb-1">
        <Typography color="white" variant="h4" className="mb-2">
          {title}
        </Typography>
        <ScrollShadow size={25} hideScrollBar className="pt-1 pb-2 max-h-32">
          <Typography color="gray" className="font-medium text-sm" textGradient>
            {description}
          </Typography>
        </ScrollShadow>
      </CardBody>
      <CardFooter className="flex gap-2 p-0 pt-2 pb-4 justify-center">
        <Chip color="cyan" value={skillOne} className="rounded-xl" />
        <Chip color="teal" value={skillTwo} className="rounded-xl" />
        <Chip color="indigo" value={skillThree} className="rounded-xl" />
      </CardFooter>
    </motion.div>
  );
}
