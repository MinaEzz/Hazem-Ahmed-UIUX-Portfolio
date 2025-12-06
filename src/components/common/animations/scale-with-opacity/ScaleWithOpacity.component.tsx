"use client";
import { motion } from "framer-motion";
import IAnimationsProps from "../Animations.types";

export default function ScaleWithOpacity({
  children,
  delay = 0.2,
  className = "",
  ...rest
}: IAnimationsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 100,
        delay,
      }}
      viewport={{ once: true }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
