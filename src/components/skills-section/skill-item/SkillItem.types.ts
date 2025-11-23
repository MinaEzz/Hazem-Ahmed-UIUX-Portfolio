export default interface ISkillItemProps {
  percentage: number;
  title: string;
  icon: React.ReactElement<{ className: string }>;
  size?: number;
  strokeWidth?: number;
}
