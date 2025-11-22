"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/UI/button/Button.component";
import DesktopNavigation from "./desktop-navigation/DesktopNavigation.component";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 45);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const background = isScrolled
    ? " bg-black/25 backdrop-blur-sm"
    : "bg-transparent";

  return (
    <header
      className={`w-full fixed z-50 pt-8 pb-6 border-b border-[#2A3086] ${background} transition-colors duration-200 ease-in-out`}
    >
      <div className="container">
        <div className="w-full flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl font-bold capitalize tracking-wide bg-linear-to-r from-[#2A3086] to-[#E60026] bg-clip-text text-transparent shrink-0"
            style={{
              fontFamily: "var(--font-k2d)",
            }}
            draggable={false}
          >
            Hazem Ahmed
          </Link>

          <DesktopNavigation />
          <Button className="shrink-0" href="#contact">
            Hire Me
          </Button>
        </div>
      </div>
    </header>
  );
}
