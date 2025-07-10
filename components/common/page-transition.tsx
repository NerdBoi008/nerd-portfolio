"use client";

import { motion } from "framer-motion";

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="flex-1 flex flex-col"
      initial={{ opacity: 0, }}
      animate={{ opacity: 1, }}
      exit={{ opacity: 0, }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
};
