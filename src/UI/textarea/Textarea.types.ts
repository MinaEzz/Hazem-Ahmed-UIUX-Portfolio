import { TextareaHTMLAttributes } from "react";
type TTextareaVariant = "default" | "outlined";

export default interface ITextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: TTextareaVariant;
  className?: string;
  rows?: number;
}
