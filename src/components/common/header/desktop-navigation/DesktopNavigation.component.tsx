"use client";
import { NAVIGATION_LINKS } from "@/data";
import NavLink from "./nav-link/NavLink.component";

export default function DesktopNavigation() {
  return (
    <nav className="w-full max-lg:hidden">
      <ul className="w-full flex items-center justify-center gap-8">
        {NAVIGATION_LINKS.map((link) => {
          return (
            <li key={link.title}>
              <NavLink {...link} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
