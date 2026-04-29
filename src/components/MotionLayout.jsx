import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.3 } },
};

export default function MotionLayout({ children, id }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={id || "motion-layout"}
        layout
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageVariants}
        style={{ width: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
