import { useDraggable } from "@dnd-kit/core";
import { useState } from "react";
import type Data from "../../Entities/Data";
import DeleteModal from "../features/DeleteModal";
import EditModal from "../features/EditModal";
import CardButton from "./Card/CardButton";
import CardFooter from "./Card/CardFooter";
import CardHeader from "./Card/CardHeader";
import useData from "../../hooks/useData";
import useTheme from "../../hooks/useTheme";

interface Props {
  cardData: Data;
  color: string;
}

const Card = ({ cardData, color }: Props) => {
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const { setData } = useData();
  const { theme } = useTheme();

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: cardData.id,
  });
  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : undefined;

  return (
    <>
      <div
        className={`relative ${theme === "dark" ? "bg-dark-primary shadow-gray-950" : "bg-primary shadow-gray-300"} rounded-lg shadow-md  py-4 px-3 h-fit mx-auto w-70  md:w-50 max-w-80 xl:w-full xl:max-w-110 ${transform ? "cursor-grabbing" : "cursor-grab"}`}
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        style={style}
      >
        <div className="flex justify-between items-start  mb-2 relative">
          <CardHeader title={cardData.company} subTitle={cardData.position} />
          <div
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
          >
            <CardButton
              setEditModal={setEditModalOpen}
              setDeleteModal={setDeleteModalOpen}
              deleteAction={() =>
                setData((prevData) =>
                  prevData.filter((d) => d.id != cardData.id),
                )
              }
            />
          </div>
        </div>
        <div className="flex items-center justify-between md:justify-start">
          <CardFooter
            color={color}
            label={cardData.label}
            date={cardData.date}
          />
        </div>
        {transform && (
          <div
            className={`h-full w-10 ${theme === "dark" ? "bg-blue-950" : "bg-blue-200"}  absolute rounded-r-lg top-0 right-0`}
          ></div>
        )}
      </div>

      <DeleteModal
        open={deleteModalOpen}
        setOpen={setDeleteModalOpen}
        deleteAction={() =>
          setData((prevData) => prevData.filter((d) => d.id != cardData.id))
        }
        heading="Delete Application"
      >
        Are you sure you want to delete the application? <br /> This action
        cannot be undone
      </DeleteModal>
      <EditModal
        open={editModalOpen}
        setOpen={setEditModalOpen}
        cardId={cardData.id}
      />
    </>
  );
};

export default Card;
