import useTheme from "../../../hooks/useTheme";

interface Props {
  color: string;
  label: string;
  date: string;
}

const CardFooter = ({ color, label, date }: Props) => {
  const formattedDate: string = new Date(`${date}`).toDateString().substring(4);
  const { theme } = useTheme();

  return (
    <>
      <span
        className={`${color}  text-white rounded-sm px-2.5 py-0.5 text-sm font-semibold md:bg-transparent flex items-center gap-2 md:order-1`}
      >
        <div
          className={`h-2.5 w-2.5 ${color} rounded-full hidden md:block `}
        ></div>
        {label}
      </span>
      <span
        className={`font-medium text-xs tracking-tight ${theme === "dark" ? "text-dark-subtext" : "text-text"}`}
      >
        {formattedDate}
      </span>
    </>
  );
};

export default CardFooter;
