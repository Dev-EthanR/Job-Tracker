import useTheme from "../../hooks/useTheme";

interface Props {
  logo: string;
  count: number;
  description: string;
}

const StatBox = ({ logo, count, description }: Props) => {
  const { theme } = useTheme();

  return (
    <div
      className={`relative ${theme === "dark" ? "bg-dark-primary shadow-gray-950 text-dark-text" : "bg-primary shadow-gray-300 text-text"} rounded-lg shadow-md  py-4 px-3 h-fit w-40 mx-auto md:w-65 lg:w-50 xl:w-65 2xl:w-80 flex flex-col items-center gap-1`}
    >
      <img className="w-10 mb-2 select-none" src={logo} alt="" />
      <h2 className="text-2xl font-bold">{count}</h2>
      <p
        className={`${theme === "dark" ? "text-dark-subtext" : "text-subtext"}tracking-tight`}
      >
        {description}
      </p>
    </div>
  );
};

export default StatBox;
