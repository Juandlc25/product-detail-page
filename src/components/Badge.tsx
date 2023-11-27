interface Props {
  bgColor: string;
  title: string;
}
const Badge = ({ bgColor, title }: Props) => {
  return (
    <span
      style={{ backgroundColor: bgColor }}
      className={`w-fit px-4 h-[26px] flex items-center justify-center text-xs rounded-[100px] text-white`}
    >
      {title}
    </span>
  );
};

export default Badge;
