import useTheme from "../../../hooks/useTheme";

interface Props {
  title: string;
  subTitle: string;
}

const CardHeader = ({ title, subTitle }: Props) => {
  const { theme } = useTheme();

  return (
    <div className="flex gap-1 flex-col md:flex-row md:items-center md:gap-x-5 flex-wrap">
      <h3
        className={`tracking-tight  ${theme === "dark" ? "text-blue-400" : "text-accent"} text-xl font-bold md:text-3xl`}
      >
        {title}
      </h3>
      <h4
        className={`tracking-tight text-sm md:text-base font-medium  ${theme === "dark" ? "text-gray-100" : "text-gray-600"}`}
      >
        {subTitle}
      </h4>
    </div>
  );
};

export default CardHeader;
