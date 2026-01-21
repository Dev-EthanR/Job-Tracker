import { useDroppable } from "@dnd-kit/core";
import { useState } from "react";
import type ColumnDetails from "../../Entities/ColumnDetails";
import type Data from "../../Entities/Data";
import icon from "../../assets/icons/dropdown.svg";
import Card from "../ui/Card";
import NotFound from "./NotFound";

interface Props {
  column: ColumnDetails;
  data: Data[];
}

const Columns = ({ column, data }: Props) => {
  const [toggleItems, setToggleItems] = useState<boolean>(true);

  const filteredData: Data[] = data.filter(
    (item) => item.label === column.title,
  );
  const { setNodeRef } = useDroppable({ id: column.title });

  return (
    <article className="flex flex-col gap-4 max-w-80 xl:max-w-120 w-full">
      <button
        className={`${column.color} text-center font-semibold text-2xl p-3 rounded-md flex justify-center items-center cursor-pointer mb-4 md:mb-6 select-none`}
        aria-label="toggle columns"
        onClick={() => setToggleItems((prev) => !prev)}
      >
        <h2 className="ml-auto pl-5 text-white">{column.title}</h2>
        <img
          className={`max-w-10 ml-auto transition-transform duration-300 ${toggleItems ? "rotate-0" : "rotate-90"} invert`}
          src={icon}
          alt=""
        />
      </button>

      {toggleItems && (
        <div ref={setNodeRef} className="flex flex-col gap-4">
          {filteredData.length <= 0 ? (
            <NotFound
              heading="No applications here yet"
              subtext="Add one or drag a card here"
              type="column"
            />
          ) : (
            filteredData.map((card) => (
              <Card key={card.id} cardData={{ ...card }} color={column.color} />
            ))
          )}
        </div>
      )}
    </article>
  );
};

export default Columns;
