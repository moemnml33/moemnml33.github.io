import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { motion } from "framer-motion";

export function SkillCard({ icon: Icon, title, children, date }) {
  // code to disable border on touch screens aka mobile cause it does some weird behaviour where
  // the border stays even after removing the hover
  useEffect(() => {
    const handleTouchEnd = () => {
      document
        .querySelectorAll(".hover\\:border-cyan-400")
        .forEach((element) => {
          element.style.borderColor = "transparent";
        });
    };

    window.addEventListener("touchend", handleTouchEnd);
    return () => window.removeEventListener("touchend", handleTouchEnd);
  }, []);

  return (
    <motion.div
      className="bg-zinc-800 rounded-3xl p-1 max-w-xl justify-self-center shadow-md shadow-zinc-950/80"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0, duration: 0.8 },
      }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <CardHeader
        className="flex items-center justify-between rounded-3xl overflow-visible bg-zinc-800 mt-1 mr-1"
        floated={false}
        shadow={false}
      >
        <div className="flex flex-col gap-1 w-full">
          <Typography color="light-blue" className="font-medium text-xs">
            {date}
          </Typography>
          <Typography variant="h5" color="white" className="w-full">
            {title}
          </Typography>
        </div>
        <div className="grid mb-4 h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow flex-shrink-0">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
      </CardHeader>
      <CardBody className="grid justify-start px-4 pt-0 pb-3">
        <Typography className="!text-zinc-400 text-md">{children}</Typography>
      </CardBody>
    </motion.div>
  );
}

export default SkillCard;
