"use client";
import { motion } from "framer-motion";
import IAnimationsProps from "../Animations.types";

export default function ToDown({
  children,
  className = "",
  delay = 0.2,
  ...rest
}: IAnimationsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay }}
      viewport={{ once: true }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
