import { TextareaHTMLAttributes } from "react";

type TTextareaVariant = "default" | "outlined";
type TInputSize = "sm" | "md" | "lg";

export default interface ITextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: TTextareaVariant;
  className?: string;
  rows?: number;
  inputSize?: TInputSize;
}
