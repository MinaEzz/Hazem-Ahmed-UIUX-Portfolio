import { NAVIGATION_LINKS } from "@/data";
import Link from "next/link";

export default function FooterHeader() {
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <Link
        href="/"
        className="text-3xl font-bold capitalize tracking-wide bg-linear-to-r from-[#2A3086] to-[#E60026] bg-clip-text text-transparent"
      >
        Hazem Ahmed
      </Link>

      <nav className="w-full">
        <ul className="w-full flex items-center justify-center flex-wrap gap-x-8 gap-y-4">
          {NAVIGATION_LINKS.map((link) => {
            return (
              <li key={link.title}>
                <a
                  href={link.href}
                  className={`text-lg text-[#C4C2C2] capitalize  font-medium tracking-wider`}
                >
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
