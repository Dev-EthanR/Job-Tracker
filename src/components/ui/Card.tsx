import { useDraggable } from "@dnd-kit/core";
import { useState } from "react";
import type Data from "../../Entities/Data";
import DeleteModal from "../features/DeleteModal";
import EditModal from "../features/EditModal";
import CardButton from "./Card/CardButton";
import CardFooter from "./Card/CardFooter";
import CardHeader from "./Card/CardHeader";

interface Props {
  cardData: Data;
  color: string;
}

const Card = ({ cardData, color }: Props) => {
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: cardData.id,
  });
  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : undefined;

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-md shadow-gray-300 py-4 px-3 h-fit mx-auto w-70  md:w-50 max-w-80 xl:w-full xl:max-w-110 cursor-grab"
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
      </div>
      <DeleteModal
        open={deleteModalOpen}
        setOpen={setDeleteModalOpen}
        cardId={cardData.id}
      />
      <EditModal
        open={editModalOpen}
        setOpen={setEditModalOpen}
        cardId={cardData.id}
      />
    </>
  );
};

export default Card;
