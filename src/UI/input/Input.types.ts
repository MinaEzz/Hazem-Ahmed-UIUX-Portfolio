import { InputHTMLAttributes } from "react";

type TInputVariant = "default" | "outlined";
type TInputSize = "sm" | "md" | "lg";
export default interface IInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  variant?: TInputVariant;
  inputSize?: TInputSize;
}
