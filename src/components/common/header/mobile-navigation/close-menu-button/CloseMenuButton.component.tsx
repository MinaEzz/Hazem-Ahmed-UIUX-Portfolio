"use client";
import { useAppDispatch } from "@/lib/store/hooks";
import { closeMobileNavMenu } from "@/lib/store/mobile-nav-menu/mobileNavMenu.slice";
import { CgClose } from "react-icons/cg";

export default function CloseMenuButton() {
  const dispatch = useAppDispatch();

  return (
    <button
      className="absolute left-4 text-white cursor-pointer"
      aria-label="Close menu"
    >
      <CgClose
        className="w-6 h-6"
        onClick={() => dispatch(closeMobileNavMenu())}
        aria-hidden="true"
      />
    </button>
  );
}
