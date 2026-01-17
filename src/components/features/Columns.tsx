import { useState } from "react";
import type { Data } from "../../App";
import icon from "../../assets/icons/dropdown.svg";
import Card from "../ui/Card";
import NotFound from "./NotFound";

interface Props {
  title: string;
  color: string;
  data: Data[];
}

const Columns = ({ title, color, data }: Props) => {
  const [toggleItems, setToggleItems] = useState<boolean>(true);

  const filteredData = data.filter((item) => item.label === title);

  return (
    <article className="flex flex-col gap-4 max-w-80 xl:max-w-120 w-full">
      <button
        className={`${color} text-center font-semibold text-2xl p-3 rounded-md flex justify-center items-center cursor-pointer mb-4 md:mb-6 select-none`}
        aria-label="toggle columns"
        onClick={() => setToggleItems((prev) => !prev)}
      >
        <h2 className="ml-auto pl-5">
          {title} ({filteredData.length})
        </h2>
        <img
          className={`max-w-10 ml-auto transition-transform duration-300 ${toggleItems ? "rotate-0" : "rotate-90"}`}
          src={icon}
          alt=""
        />
      </button>

      {toggleItems &&
        (filteredData.length <= 0 ? (
          <NotFound
            heading="No applications here yet"
            subtext="Add one or drag a card here"
            type="column"
          />
        ) : (
          filteredData.map((d) => (
            <Card
              key={d.id}
              id={d.id}
              company={d.company}
              title={d.position}
              date={d.date}
              label={d.label}
            />
          ))
        ))}
    </article>
  );
};

export default Columns;
