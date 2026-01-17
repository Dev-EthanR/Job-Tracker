import { useState, type Dispatch, type SetStateAction } from "react";
import moreOptionsImg from "../../assets/icons/three-dots.svg";
import editImg from "../../assets/icons/edit.svg";
import deleteImg from "../../assets/icons/trash.svg";
import DeleteModal from "../features/DeleteModal";
import EditModal from "../features/EditModal";

interface Props {
  id: string;
  company: string;
  title: string;
  date: string;
  label: string;
}

interface Status {
  name: string;
  color: string;
}

const Card = ({ id, company, title, date, label }: Props) => {
  const [optionsOpened, setOpionsOpened] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

  function modalOption(setModal: Dispatch<SetStateAction<boolean>>): void {
    setOpionsOpened(false);
    setModal(true);
  }

  const formattedDate = new Date(`${date}`).toDateString().substring(4);

  const status: Status = {
    name: label,
    color: "",
  };

  if (label === "Applied") status.color = "bg-applied";
  if (label === "Interview") status.color = "bg-interview";
  if (label === "Offer") status.color = "bg-offer";
  if (label === "Rejected") status.color = "bg-rejected";

  return (
    <div className="bg-white rounded-lg shadow-md shadow-gray-300 py-4 px-3 h-fit mx-auto w-70  md:w-50 max-w-80 xl:w-full xl:max-w-110">
      <div className="flex justify-between items-start  mb-2 relative">
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
            className="w-7 hover:-translate-x-0.5 transition-transform duration-300 cursor-pointer ease-out select-none"
            src={moreOptionsImg}
            alt=""
          />
        </button>
        {optionsOpened && (
          <div className="absolute top-6 right-0 flex flex-col items-start bg-white border-gray-200 rounded-md shadow-sm border w-22 px-2 py-1 text-sm gap-1">
            <button
              className="hover:bg-gray-200 w-full rounded-sm text-left cursor-pointer flex items-center gap-2"
              onClick={() => modalOption(setEditModalOpen)}
            >
              <img className="w-5" src={editImg} alt="" />
              Edit
            </button>
            <button
              className="hover:bg-gray-200 w-full rounded-sm text-left cursor-pointer flex items-center gap-2 "
              onClick={() => modalOption(setDeleteModalOpen)}
            >
              <img className="w-5 " src={deleteImg} alt="" />
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
        <span className="font-medium text-xs tracking-tight">
          {formattedDate}
        </span>
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
