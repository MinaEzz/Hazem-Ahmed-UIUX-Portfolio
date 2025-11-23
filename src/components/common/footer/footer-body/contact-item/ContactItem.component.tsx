import React from "react";
import IContactItemProps from "./ContactItem.types";

export default function ContactItem({
  icon,
  title,
  href,
  desc,
}: IContactItemProps) {
  return (
    <a
      href={href}
      className="w-fit flex items-center gap-2 text-[#959595] text-base font-bold"
      title={title}
    >
      {React.cloneElement(icon, { className: "w-4 h-4" })}
      {desc}
    </a>
  );
}
