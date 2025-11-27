import IServiceCardProps from "./ServiceCard.types";
import Button from "@/UI/button/Button.component";
import { RiGroupLine } from "react-icons/ri";

export default function ServiceCard({ title, desc }: IServiceCardProps) {
  return (
    <article
      aria-labelledby={`${title}-heading`}
      className="w-full h-full flex flex-col justify-between items-center px-4 py-6 rounded-3xl bg-white/4 text-center"
    >
      {/* CARD_HEADER */}
      <header className="w-full flex flex-col gap-2 items-center text-[#6271fe]">
        <RiGroupLine className="w-12 h-12" />
        <h4 id={`${title}-heading`} className="text-2xl capitalize font-bold">
          {title}
        </h4>
      </header>

      {/* CARD_BODY */}
      <div className="w-full my-8">
        <p className="text-lg capitalize text-[#ADA8A8] font-medium">{desc}</p>
      </div>

      {/* CARD_FOOTER */}
      <Button
        variant="default"
        size="md"
        aria-label={`Book service: ${title}`}
        className="uppercase"
      >
        Book Now
      </Button>
    </article>
  );
}
