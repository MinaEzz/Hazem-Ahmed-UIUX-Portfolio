"use client";
import { useEffect, useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

const linkStyles = cva(
  "block w-full px-3 py-2 text-lg capitalize font-medium tracking-wider hover:text-[#2231FF] transition-colors ease-linear",
  {
    variants: {
      active: {
        true: "text-[#2231FF] border-2 border-[#2231FF] rounded-xl",
        false: "text-white",
      },
    },
  }
);

export default function NavLink({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  const [activeHash, setActiveHash] = useState<string>("#home");
  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <a
      href={href}
      aria-current={activeHash === href ? "true" : undefined}
      className={cn(linkStyles({ active: activeHash === href }))}
    >
      {title}
    </a>
  );
}
