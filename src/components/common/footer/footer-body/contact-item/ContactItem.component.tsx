import React from "react";
import IContactItemProps from "./ContactItem.types";

export default function ContactItem({
  icon,
  title,
  href,
  desc,
}: IContactItemProps) {
  return (
    <div className="w-fit flex items-center gap-2 text-[#959595]">
      {React.cloneElement(icon, { className: "w-4 h-4" })}
      <a href={href} className="text-base font-bold" title={title}>
        {desc}
      </a>
    </div>
  );
}
