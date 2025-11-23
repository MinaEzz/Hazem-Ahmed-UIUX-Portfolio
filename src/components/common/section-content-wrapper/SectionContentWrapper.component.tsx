export default function SectionContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="w-full flex flex-col gap-16">{children}</main>;
}
