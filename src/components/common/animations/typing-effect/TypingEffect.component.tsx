"use client";
import { motion, Variants } from "framer-motion";

export default function TypingEffect({ text }: { text: string }) {
  const letters = text.split("").map((char) => ({
    char,
    isSpace: char === " ",
  }));

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: "0.3em" },
    visible: {
      opacity: 1,
      y: "0em",
      transition: {
        duration: 0.22,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      style={{
        display: "inline-flex",
        whiteSpace: "pre-wrap",
        position: "relative",
      }}
    >
      {letters.map((item, i) => {
        const isLast = i === letters.length - 1;

        return (
          <motion.span
            key={i}
            variants={!item.isSpace ? child : undefined}
            style={{
              display: "inline-block",
              position: "relative",
            }}
          >
            {item.char}

            {/* Cursor */}
            {isLast && (
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                }}
                style={{
                  marginLeft: "4px",
                  display: "inline-block",
                  position: "absolute",
                  left: "100%",
                  top: 0,
                  width: "2px",
                  height: "1em",
                  background: "white",
                }}
              />
            )}
          </motion.span>
        );
      })}
    </motion.span>
  );
}
