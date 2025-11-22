import ICountItemProps from "./CountItem.types";

export default function CountItem({ count, title }: ICountItemProps) {
  return (
    <div className="w-full flex flex-col gap-1 text-xl font-bold md:px-4 max-md:py-4">
      <h2 className="text-[#2231FF]">{count}+</h2>
      <p className="text-[#DFDFDF] capitalize">{title}</p>
    </div>
  );
}
