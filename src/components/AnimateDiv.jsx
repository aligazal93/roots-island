"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function AnimatedDiv({
  children,
  className = "",
  delay = 0,
  once = true,
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: 0.2,
      }}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}