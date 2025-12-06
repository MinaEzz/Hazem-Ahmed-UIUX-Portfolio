import Link from "next/link";
import IProjectCardProps from "./ProjectCard.types";

export default function ProjectCard({ image, title, href }: IProjectCardProps) {
  return (
    <div className="xl:w-[90%] xl:mx-auto w-full h-full bg-white/4 rounded-2xl overflow-hidden">
      {/* CARD HEADER */}
      {/* <div className="w-full h-[21rem]">
        <img src={image} alt={title} className=" object-center object-fill" />
      </div> */}

      <div className="w-full my-4 px-4 flex items-center justify-between gap-4 capitalize">
        <h4 className="text-lg font-bold text-[#C6C6C6]">{title}</h4>
        <Link
          href={href}
          className="text-base text-[#2231FF] !underline font-semibold shrink-0"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}
