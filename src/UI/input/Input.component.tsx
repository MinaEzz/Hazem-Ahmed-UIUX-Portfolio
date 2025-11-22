import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";
import IInputProps from "./Input.types";

const inputStyles = cva(
  "w-full p-2 rounded-md placeholder:text-[#959595] placeholder:text-base placeholder:font-medium outline-none",
  {
    variants: {
      variant: {
        default: "bg-white/4 text-white",
        outlined: "",
      },
      inputSize: {
        sm: "h-8 text-sm",
        md: "h-10 text-base",
        lg: "h-12 text-lg",
      },
      defaultVariants: {
        variant: "default",
        inputSize: "md",
      },
    },
  }
);

export default function Input({
  inputSize = "md",
  variant = "default",
  className = "",
  ...props
}: IInputProps) {
  return (
    <input
      className={cn(inputStyles({ variant, inputSize }), className)}
      {...props}
    />
  );
}
