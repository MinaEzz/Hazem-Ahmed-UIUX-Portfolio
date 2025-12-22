import Link from "next/link";
import IProjectCardProps from "./ProjectCard.types";
import Image from "next/image";

export default function ProjectCard({
  image,
  title,
  href,
  className = "",
}: IProjectCardProps) {
  return (
    <article
      className={`w-full h-full bg-white/4 rounded-2xl overflow-hidden ${className}`}
      role="article"
      aria-labelledby={`${title}-heading`}
    >
      {/* CARD HEADER */}
      <div className="w-full aspect-[1.7] relative">
        <Image src={image} alt={title} fill />
      </div>

      <div className="w-full p-5 flex max-lg:flex-col max-lg:items-end items-center justify-between gap-4 capitalize">
        <h4
          id={`${title}-heading`}
          className="w-full flex-1 text-lg font-bold text-[#C6C6C6]"
        >
          {title}
        </h4>
        {href && (
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-[#2231FF] !underline font-semibold shrink-0"
          >
            View Project
          </Link>
        )}
      </div>
    </article>
  );
}
