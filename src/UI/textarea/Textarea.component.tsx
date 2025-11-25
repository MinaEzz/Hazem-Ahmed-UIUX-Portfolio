import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";
import ITextareaProps from "./Textarea.types";

const inputStyles = cva(
  "w-full p-2 rounded-md placeholder:text-[#959595] placeholder:text-base placeholder:font-medium outline-none",
  {
    variants: {
      variant: {
        default: "bg-white/4 text-white",
        outlined: "",
      },
      inputSize: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
      defaultVariants: {
        variant: "default",
        inputSize: "md",
      },
    },
  }
);

export default function Textarea({
  variant = "default",
  className = "",
  inputSize = "md",
  rows = 40,
  ...props
}: ITextareaProps) {
  return (
    <textarea
      className={cn(inputStyles({ variant, inputSize }), className)}
      rows={rows}
      {...props}
    />
  );
}
