import { HTMLMotionProps } from "framer-motion";

export default interface IAnimationsProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amplitude?: number;
  duration?: number;
}
