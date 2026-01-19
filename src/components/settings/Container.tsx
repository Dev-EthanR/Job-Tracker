import { type ReactNode } from "react";
import useTheme from "../../hooks/useTheme";

interface Props {
  children: ReactNode;
  title?: string;
}

const Container = ({ children, title }: Props) => {
  const { theme } = useTheme();

  return (
    <div
      className={`flex justify-between items-center max-w-100 rounded-2xl border px-4 py-1.5 shadow-xs gap-6 ${theme === "dark" ? "border-gray-400 shadow-gray-800 bg-dark-primary" : "border-gray-700 shadow-gray-500 bg-primary"} `}
    >
      {title && <h2 className="whitespace-nowrap">{title}</h2>}
      {children}
    </div>
  );
};

export default Container;
