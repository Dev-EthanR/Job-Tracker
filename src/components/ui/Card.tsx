import { useState } from "react";
import type Data from "../../Entities/Data";
import DeleteModal from "../features/DeleteModal";
import EditModal from "../features/EditModal";
import CardButton from "./Card/CardButton";
import CardHeader from "./Card/CardHeader";
import CardFooter from "./Card/CardFooter";

interface Props {
  cardData: Data;
  color: string;
}

const Card = ({ cardData, color }: Props) => {
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

  return (
    <div className="bg-white rounded-lg shadow-md shadow-gray-300 py-4 px-3 h-fit mx-auto w-70  md:w-50 max-w-80 xl:w-full xl:max-w-110">
      <div className="flex justify-between items-start  mb-2 relative">
        <CardHeader title={cardData.company} subTitle={cardData.position} />
        <CardButton
          setEditModal={setEditModalOpen}
          setDeleteModal={setDeleteModalOpen}
        />
      </div>
      <div className="flex items-center justify-between md:justify-start">
        <CardFooter color={color} label={cardData.label} date={cardData.date} />
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
    </div>
  );
};

export default Card;
