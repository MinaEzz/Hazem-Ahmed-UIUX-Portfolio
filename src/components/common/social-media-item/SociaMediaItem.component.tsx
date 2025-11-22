import React from "react";
import Link from "next/link";
import ISocialMediaItem from "./SocialMediaItem.types";

export default function SociaMediaItem({
  icon,
  title,
  href,
}: ISocialMediaItem) {
  return (
    <Link
      href={href}
      className="w-10 h-10 rounded-full bg-white/4 border border-[#639AFF] flex items-center justify-center"
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      draggable={false}
      aria-label={title}
    >
      {React.cloneElement(icon, { className: "w-6 h-6 text-white" })}
    </Link>
  );
}
