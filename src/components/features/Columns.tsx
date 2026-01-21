import { useDroppable } from "@dnd-kit/core";
import { useState } from "react";
import type ColumnDetails from "../../Entities/ColumnDetails";
import type Data from "../../Entities/Data";
import icon from "../../assets/icons/dropdown.svg";
import useAnimateHeight from "../../hooks/useAnimateHeight";
import Card from "../ui/Card";
import NotFound from "./NotFound";

interface Props {
  column: ColumnDetails;
  data: Data[];
}

const Columns = ({ column, data }: Props) => {
  const [open, setOpen] = useState(true);

  const { setNodeRef } = useDroppable({ id: column.title });

  const filteredData = data.filter((item) => item.label === column.title);

  const { height, contentRef } = useAnimateHeight(open, filteredData.length);

  return (
    <article className="flex flex-col gap-4 max-w-80 xl:max-w-120 w-full">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`${column.color} text-center font-semibold text-2xl p-3 rounded-md flex items-center mb-4 md:mb-6`}
      >
        <h2 className="ml-auto pl-5 text-white">{column.title}</h2>
        <img
          src={icon}
          alt=""
          className={`max-w-10 ml-auto transition-transform duration-300 ${
            open ? "rotate-0" : "rotate-90"
          } invert`}
        />
      </button>

      <div
        ref={(node) => {
          setNodeRef(node);
          contentRef.current = node;
        }}
        style={{ height }}
        className={`${height === 0 && "overflow-hidden"} transition-[height] duration-300 ease-in-out flex flex-col gap-4`}
      >
        {filteredData.length === 0 ? (
          <NotFound
            heading="No applications here yet"
            subtext="Add one or drag a card here"
            type="column"
          />
        ) : (
          filteredData.map((card) => (
            <Card key={card.id} cardData={card} color={column.color} />
          ))
        )}
      </div>
    </article>
  );
};

export default Columns;
