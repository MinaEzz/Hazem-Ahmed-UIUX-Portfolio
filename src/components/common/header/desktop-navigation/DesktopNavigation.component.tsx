"use client";
import { NAVIGATION_LINKS } from "@/data";
import { useEffect, useState } from "react";

export default function DesktopNavigation() {
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
    <nav className="w-full max-lg:hidden">
      <ul className="w-full flex items-center justify-center gap-8">
        {NAVIGATION_LINKS.map((link) => {
          return (
            <li key={link.title}>
              <a
                href={link.href}
                className={`text-lg capitalize  font-medium tracking-wider  transition-colors ${
                  activeHash === link.href ? "text-[#2231FF]" : "text-white"
                }`}
              >
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
