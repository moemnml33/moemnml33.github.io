import { motion } from "framer-motion";
import React from "react";

export default function MotionSection({ children, id }) {
  return (
    <motion.section
      className="xl:mx-15 pt-14"
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { delay: 0, duration: 0.7 },
      }}
      viewport={{ once: true, amount: 0.05 }}
    >
      {children}
    </motion.section>
  );
}
