"use client";
import { useEffect, useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

const linkStyles = cva(
  "inline-block p-2 text-lg capitalize font-medium tracking-wider hover:text-[#2231FF] transition-colors ease-linear",
  {
    variants: {
      active: {
        true: "text-[#2231FF]",
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

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <a href={href} className={cn(linkStyles({ active: activeHash === href }))}>
      {title}
    </a>
  );
}
