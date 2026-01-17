import { useState, type Dispatch, type SetStateAction } from "react";
import dropdown from "../../assets/icons/dropdown.svg";
import DeleteModal from "../features/DeleteModal";
import EditModal from "../features/EditModal";

type Status = {
  name: "Rejected" | "Applied" | "Interview" | "Offer";
  color: string;
};

interface Props {
  id: string;
  company: string;
  title: string;
  date: string;
  status: Status;
}

const Card = ({ id, company, title, date, status }: Props) => {
  const [optionsOpened, setOpionsOpened] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

  function modalOption(setModal: Dispatch<SetStateAction<boolean>>): void {
    setOpionsOpened(false);
    setModal(true);
  }

  const formattedDate = new Date(`${date}`).toDateString().substring(4);

  return (
    <div className="rounded-lg shadow-md shadow-gray-300 p-4 h-fit max-w-86">
      <div className="flex justify-between items-start w-60 mb-2 md:w-80 relative">
        <div className="flex gap-1 flex-col md:flex-row md:items-center md:gap-x-5 flex-wrap">
          <h3 className="tracking-tight text-accent text-xl font-bold md:text-2xl">
            {company}
          </h3>
          <h4 className="tracking-tight text-sm md:text-base font-medium ">
            {title}
          </h4>
        </div>
        <button
          aria-label="further card options"
          onClick={() => setOpionsOpened((prev) => !prev)}
        >
          <img
            className="w-7 hover:translate-y-1 transition-transform duration-300 cursor-pointer ease-out"
            src={dropdown}
            alt=""
          />
        </button>
        {optionsOpened && (
          <div className="absolute top-6 right-0 flex flex-col items-start bg-white border-gray-200 rounded-md shadow-sm border w-20 px-2 py-1 text-sm gap-1">
            <button
              className="hover:bg-gray-200 w-full rounded-sm text-left cursor-pointer"
              onClick={() => modalOption(setEditModalOpen)}
            >
              Edit
            </button>
            <button
              className="hover:bg-gray-200 w-full rounded-sm text-left cursor-pointer"
              onClick={() => modalOption(setDeleteModalOpen)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between md:justify-start">
        <span
          className={`${status.color} rounded-sm px-2.5 py-0.5 text-sm font-semibold md:bg-transparent flex items-center gap-2 md:order-1`}
        >
          <div
            className={`h-2.5 w-2.5 ${status.color} rounded-full hidden md:block`}
          ></div>
          {status.name}
        </span>
        <span className="font-medium">{formattedDate}</span>
      </div>
      <DeleteModal
        open={deleteModalOpen}
        setOpen={setDeleteModalOpen}
        cardId={id}
      />
      <EditModal open={editModalOpen} setOpen={setEditModalOpen} cardId={id} />
    </div>
  );
};

export default Card;
