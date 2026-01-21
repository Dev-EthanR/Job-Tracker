import { useEffect } from "react";
import useTheme from "../../hooks/useTheme";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
interface Props {
  logo: string;
  count: number;
  description: string;
}

const StatBox = ({ logo, count, description }: Props) => {
  const { theme } = useTheme();
  const motionCount = useMotionValue(0);
  const rounded = useTransform(motionCount, (value) => Math.round(value));

  useEffect(() => {
    const controls = animate(motionCount, count, { duration: 0.4 });
    return () => controls.stop();
  }, [count]);
  return (
    <div
      className={`relative ${theme === "dark" ? "bg-dark-primary shadow-gray-950 text-dark-text" : "bg-primary shadow-gray-300 text-text"} rounded-lg shadow-md  py-4 px-3 h-fit w-40 mx-auto md:w-65 lg:w-50 xl:w-65 2xl:w-80 flex flex-col items-center gap-1`}
    >
      <img className="w-10 mb-2 select-none" src={logo} alt="" />
      <h2 className="text-2xl font-bold">
        <motion.pre>{rounded}</motion.pre>
      </h2>
      <p
        className={`${theme === "dark" ? "text-dark-subtext" : "text-subtext"}tracking-tight`}
      >
        {description}
      </p>
    </div>
  );
};

export default StatBox;
