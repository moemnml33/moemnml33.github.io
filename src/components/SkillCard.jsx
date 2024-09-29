import { CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import React, { useEffect } from "react";

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
      className="bg-zinc-800 rounded-3xl p-1 max-w-2xl justify-self-center shadow-md shadow-zinc-950/80"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0, duration: 0.7 },
      }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <CardHeader
        className="flex items-center justify-between rounded-3xl overflow-visible bg-zinc-800 mt-1 mr-1 relative"
        floated={false}
        shadow={false}
      >
        <div className="flex flex-col gap-1 w-full pr-12">
          <Typography color="light-blue" className="font-medium text-xs pt-1">
            {date}
          </Typography>
          <Typography variant="h5" color="white" className="w-full">
            {title}
          </Typography>
        </div>
        <div className="grid mb-4 h-10 w-10 place-items-center rounded-full bg-gray-900 p-2 text-white shadow flex-shrink-0 absolute top-0 right-0">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
      </CardHeader>
      <CardBody className="grid justify-start px-4 pt-2 pb-5">
        <Typography className="!text-zinc-400 text-md">{children}</Typography>
      </CardBody>
    </motion.div>
  );
}

export default SkillCard;
