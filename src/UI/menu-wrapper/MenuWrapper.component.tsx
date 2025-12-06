"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { closeMobileNavMenu } from "@/lib/store/mobile-nav-menu/mobileNavMenu.slice";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen } = useAppSelector((state) => state.mobileNavMenu);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1280) {
        dispatch(closeMobileNavMenu());
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch(closeMobileNavMenu());
      }
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="h-[100dvh] w-[100dvw] fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex justify-end"
          style={{ display: isOpen ? "flex" : "none" }}
          role="dialog"
          aria-modal="true"
          aria-hidden={!isOpen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => dispatch(closeMobileNavMenu())}
        >
          <motion.div
            className="h-full w-[18.5rem]"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
