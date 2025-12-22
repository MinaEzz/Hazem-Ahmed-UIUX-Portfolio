"use client";
import { NAVIGATION_LINKS } from "@/data";
import NavLink from "./nav-link/NavLink.component";
import ToDown from "../../animations/to-down/ToDown.component";

export default function DesktopNavigation() {
  return (
    <nav className="w-full max-xl:hidden">
      <ul className="w-full flex items-center justify-center gap-8">
        {NAVIGATION_LINKS.map((link, index) => {
          return (
            <li key={index}>
              <ToDown delay={0.2 * index}>
                <NavLink {...link} />
              </ToDown>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
