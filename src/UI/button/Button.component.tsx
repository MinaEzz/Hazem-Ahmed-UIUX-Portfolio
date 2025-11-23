import { TButtonProps } from "./Button.types";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

const buttonStyles = cva(
  "w-fit px-4 py-2 rounded-md transition-colors inline-flex items-center justify-center gap-2 font-medium rounded-lg text-white cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-[#2A3086]  border border-[#2A3086]",
        outlined: "border border-[#959595] bg-transparent backdrop-blur-sm",
      },
      size: {
        sm: "h-8 px-6 text-sm",
        md: "h-10 px-8  text-base",
        lg: "h-12 px-10 text-lg",
      },
      defaultVariants: {
        variant: "default",
        size: "md",
      },
    },
  }
);

export default function Button({
  children,
  size = "md",
  variant = "default",
  className = "",
  ...props
}: TButtonProps) {
  if (props.href && typeof props.href === "string") {
    return (
      <a
        href={props.href}
        className={cn(buttonStyles({ variant, size }), className)}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={cn(buttonStyles({ variant, size }), className)}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
