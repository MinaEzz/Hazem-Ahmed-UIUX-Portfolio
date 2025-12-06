"use client";
import { motion } from "framer-motion";
import IAnimationsProps from "../Animations.types";

export default function Floating({
  children,
  className = "",
  amplitude = 10,
  duration = 4,
  ...rest
}: IAnimationsProps) {
  return (
    <motion.div
      animate={{
        y: [0, -amplitude, 0, amplitude, 0],
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration,
        ease: "linear",
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
