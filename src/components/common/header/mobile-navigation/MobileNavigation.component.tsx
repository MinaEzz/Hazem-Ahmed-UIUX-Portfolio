import MenuWrapper from "@/UI/menu-wrapper/MenuWrapper.component";
import CloseMenuButton from "./close-menu-button/CloseMenuButton.component";
import Link from "next/link";
import Button from "@/UI/button/Button.component";
import { useAppDispatch } from "@/lib/store/hooks";
import { closeMobileNavMenu } from "@/lib/store/mobile-nav-menu/mobileNavMenu.slice";
import { NAVIGATION_LINKS } from "@/data";
import NavLink from "./nav-link/NavLink.component";

export default function MobileNavigation() {
  const dispatch = useAppDispatch();
  return (
    <MenuWrapper>
      <aside className="w-full h-full relative p-4 bg-black/50 overflow-y-auto">
        <CloseMenuButton />

        <div className="w-full h-full flex flex-col items-center gap-6 pt-12">
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

          <nav className="w-full h-full flex-1">
            <ul className="w-full flex flex-col gap-8">
              {NAVIGATION_LINKS.map((link, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => dispatch(closeMobileNavMenu())}
                  >
                    <NavLink {...link} />
                  </li>
                );
              })}
            </ul>
          </nav>

          <Button
            variant="default"
            size="lg"
            onClick={() => {
              window.location.hash = "contact";
              dispatch(closeMobileNavMenu());
            }}
            className="w-full"
          >
            Hire Me
          </Button>
        </div>
      </aside>
    </MenuWrapper>
  );
}
