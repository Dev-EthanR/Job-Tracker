import { useState, type ReactNode } from "react";
import icon from "../../assets/icons/dropdown.svg";

interface Props {
  title: string;
  color: string;
  children: ReactNode;
}

const Columns = ({ title, color, children }: Props) => {
  const [toggleItems, setToggleItems] = useState<boolean>(true);

  return (
    <article className="flex flex-col gap-4 max-w-80 xl:max-w-120 w-full">
      <button
        className={`${color} text-center font-semibold text-2xl p-3 rounded-md flex justify-center items-center cursor-pointer mb-4 md:mb-6 select-none`}
        aria-label="toggle columns"
        onClick={() => setToggleItems((prev) => !prev)}
      >
        <h2 className="ml-auto pl-5">{title}</h2>
        <img
          className={`max-w-10 ml-auto transition-transform duration-300 ${toggleItems ? "rotate-0" : "rotate-90"}`}
          src={icon}
          alt=""
        />
      </button>
      {toggleItems && children}
    </article>
  );
};

export default Columns;
