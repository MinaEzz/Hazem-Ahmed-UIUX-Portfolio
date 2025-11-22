import ISectionHeaderProps from "./SectionHeader.types";

export default function SectionHeader({
  id,
  title,
  desc,
}: ISectionHeaderProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center gap-2 text-white capitalize">
      <h3 id={id} className="text-4xl font-bold">
        {title}
      </h3>
      <p className="text-xl font-medium">{desc}</p>
    </div>
  );
}
