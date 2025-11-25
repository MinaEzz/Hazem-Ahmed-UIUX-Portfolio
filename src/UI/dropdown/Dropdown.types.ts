type TDropdownVariant = "default" | "outlined";
type TInputSize = "sm" | "md" | "lg";
type TOption = { label: string; value: string };

export default interface IDropdownProps {
  className?: string;
  variant?: TDropdownVariant;
  inputSize?: TInputSize;
  options: TOption[];
  onSelect: (name: string, value: string | number) => void;
  placeholder?: string;
  name: string;
}
