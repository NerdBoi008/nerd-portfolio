'use client';

import { fontSecondary } from "@/app/fonts";
import React from "react";
import { motion } from "framer-motion";

export const HeroNameComponent = () => {
    const text = "Nerdboi";
  const number = "008"; 
  return (
    <h1 className={`text-9xl ${fontSecondary.className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: index * 0.1,
            ease: "easeOut"
          }}
        >
          {char}
        </motion.span>
      ))}
      {number.split("").map((char, index) => (
        <motion.span
          key={`number-${index}`}
          className="text-[#001A2C]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: (text.length + index) * 0.1,
            ease: "easeOut"
          }}
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
};

export default HeroNameComponent;
