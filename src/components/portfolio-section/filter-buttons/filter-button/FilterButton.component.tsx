"use client";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";
import IFilterButtonProps from "./FilterButton.types";

const filterButtonStyles = cva(
  "w-fit py-4 px-6 rounded-md transition-colors inline-flex items-center justify-center font-medium rounded-lg text-base text-white capitalize cursor-pointer",
  {
    variants: {
      active: {
        true: "bg-[#2A3086]",
        false: "bg-white/10 hover:bg-white/20",
      },
    },
  }
);
export default function FilterButton({
  label,
  active,
  onClick,
}: IFilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(filterButtonStyles({ active }))}
    >
      {label}
    </button>
  );
}
