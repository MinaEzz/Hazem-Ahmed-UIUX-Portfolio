"use client";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";
import IDropdownProps from "./Dropdown.types";
import { useEffect, useRef } from "react";
import { useDropdown } from "./useDropdown.hook";
import { BsChevronDown, BsCheck } from "react-icons/bs";

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

export default function Dropdown({
  name = "",
  inputSize = "md",
  variant = "default",
  className = "",
  placeholder = "Select an option",
  options = [],
  onSelect,
  value,
}: IDropdownProps) {
  const { isOpen, closeDropdown, toggleDropdown, selected, setSelected } =
    useDropdown();
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setSelected(value || "");
  }, [value, setSelected]);

  return (
    <div ref={ref} className="w-full relative">
      <button
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={cn(
          inputStyles({ variant, inputSize }),
          className,
          "flex items-center justify-between cursor-pointer"
        )}
      >
        <span>{selected || placeholder}</span>
        <BsChevronDown
          className={`w-5 h-5 opacity-70 ${
            isOpen ? "rotate-180" : ""
          } duration-300 ease-in-out`}
        />
      </button>

      {isOpen && (
        <ul
          // role="listbox"
          className="absolute left-0 mt-2 w-full max-h-48 overflow-y-auto bg-white/5 backdrop-blur-sm rounded-md shadow-lg p-2 space-y-2"
        >
          {options.length === 0 ? (
            <li className="text-gray-300 text-center py-2">
              No options available.
            </li>
          ) : (
            options.map((option) => {
              const isSelected = option?.label === selected;
              return (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={isSelected}
                  className="w-full flex items-center justify-between text-white p-2 cursor-pointer hover:bg-white/10"
                  onClick={() => {
                    setSelected(option.label);
                    onSelect(name, option.value);
                    closeDropdown();
                  }}
                >
                  <span>{option.label}</span>
                  {isSelected && <BsCheck className="w-6 h-6" />}
                </li>
              );
            })
          )}
        </ul>
      )}
    </div>
  );
}
