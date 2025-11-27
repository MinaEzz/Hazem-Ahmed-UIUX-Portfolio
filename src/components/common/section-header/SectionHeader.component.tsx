import ISectionHeaderProps from "./SectionHeader.types";

export default function SectionHeader({
  id,
  title,
  desc,
  children,
}: ISectionHeaderProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center gap-2 capitalize">
      <h3 id={id} className="text-4xl font-bold text-white">
        {title}
      </h3>
      {desc && <p className="text-xl font-medium text-[#C4C2C2]">{desc}</p>}
      {children && children}
    </div>
  );
}
