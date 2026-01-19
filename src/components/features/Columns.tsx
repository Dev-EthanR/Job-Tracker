import { useState, type Dispatch, type SetStateAction } from "react";
import type Data from "../../Entities/Data";
import icon from "../../assets/icons/dropdown.svg";
import Card from "../ui/Card";
import NotFound from "./NotFound";
import type ColumnDetails from "../../Entities/ColumnDetails";

interface Props {
  column: ColumnDetails;
  data: Data[];
  setData: Dispatch<SetStateAction<Data[]>>;
}

type Titles = "Applied" | "Interview" | "Offer" | " Rejected";

const Columns = ({ column, data, setData }: Props) => {
  const [toggleItems, setToggleItems] = useState<boolean>(true);

  const filteredData = data.filter((item) => item.label === column.title);

  function handleDrop(e: React.DragEvent<HTMLElement>, title: string) {
    e.preventDefault();
    const id = e.dataTransfer?.getData("id");
    const currentCard = data.find((c) => c.id === id);
    if (currentCard) {
      const currentData = data.map((card) =>
        card.id === id ? { ...card, label: title } : card,
      );
      setData(currentData);
    }
  }

  return (
    <article
      className="flex flex-col gap-4 max-w-80 xl:max-w-120 w-full"
      onDrop={(e) => handleDrop(e, column.title)}
      onDragOver={(e) => e.preventDefault()}
    >
      <button
        className={`${column.color} text-center font-semibold text-2xl p-3 rounded-md flex justify-center items-center cursor-pointer mb-4 md:mb-6 select-none`}
        aria-label="toggle columns"
        onClick={() => setToggleItems((prev) => !prev)}
      >
        <h2 className="ml-auto pl-5">
          {column.title} ({filteredData.length})
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
          filteredData.map((card) => (
            <Card key={card.id} cardData={{ ...card }} color={column.color} />
          ))
        ))}
    </article>
  );
};

export default Columns;
