import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import Columns from "../components/features/Columns";
import Header from "../components/features/Header";
import NotFound from "../components/features/NotFound";
import type ColumnDetails from "../Entities/ColumnDetails";
import useData from "../hooks/useData";
import useTheme from "../hooks/useTheme";

const Applications = () => {
  const [selectedValue, setSelectedValue] = useState<string>("all");
  const { data, setData } = useData();
  const { theme } = useTheme();

  const columns: ColumnDetails[] = [
    { id: "applied", title: "Applied", color: "bg-applied" },
    { id: "interview", title: "Interview", color: "bg-interview" },
    { id: "offer", title: "Offer", color: "bg-offer" },
    { id: "rejected", title: "Rejected", color: "bg-rejected" },
  ];

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const cardId = active.id as string;
    const columnTitle = over.id as string;

    setData((prev) =>
      prev.map((card) =>
        card.id === cardId ? { ...card, label: columnTitle } : card,
      ),
    );
  }

  return (
    <main
      className={`${theme === "dark" && "bg-dark-primary text-dark-text"} flex flex-col flex-1 `}
    >
      <Header value={selectedValue} setValue={setSelectedValue} />
      <section
        className={`flex-1 ${theme === "dark" ? "bg-dark-primary text-dark-text" : "bg-primary text-text"} pt-12 flex justify-center md:block`}
      >
        {data.length <= 0 ? (
          <NotFound
            heading="No applications yet"
            subtext="et started by adding your first job application"
            type="main"
          />
        ) : (
          <DndContext onDragEnd={handleDragEnd}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 px-4 gap-y-4 pb-25 md:pb-0 ">
              {columns.map((column) =>
                selectedValue === column.id || selectedValue === "all" ? (
                  <Columns key={column.id} column={column} data={data} />
                ) : null,
              )}
            </div>
          </DndContext>
        )}
      </section>
    </main>
  );
};

export default Applications;
