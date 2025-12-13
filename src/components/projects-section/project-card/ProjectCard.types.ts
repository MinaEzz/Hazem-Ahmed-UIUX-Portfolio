import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default interface IProjectCardProps {
  image: string | StaticImport;
  title: string;
  href: string;
  className?: string;
}
