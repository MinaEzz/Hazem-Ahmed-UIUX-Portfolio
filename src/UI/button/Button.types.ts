import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
type TButtonVariant = "default" | "outlined";
type TButtonSize = "sm" | "md" | "lg";

interface ICommonProps {
  className?: string;
  children: ReactNode;
  variant?: TButtonVariant;
  size?: TButtonSize;
}

type TButtonAsButton = {
  href?: undefined;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  ICommonProps;

type TButtonAsLink = {
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  ICommonProps;

export type TButtonProps = TButtonAsButton | TButtonAsLink;
