import { useState } from "react";
import editImg from "../../../assets/icons/edit.svg";
import moreOptionsImg from "../../../assets/icons/three-dots.svg";
import deleteImg from "../../../assets/icons/trash.svg";

interface Props {
  setEditModal: (toggle: boolean) => void;
  setDeleteModal: (toggle: boolean) => void;
}

const CardButton = ({ setEditModal, setDeleteModal }: Props) => {
  const [optionsOpened, setOpionsOpened] = useState<boolean>(false);

  function modalOption(setModal: (option: boolean) => void): void {
    setOpionsOpened(false);
    setModal(true);
  }
  return (
    <>
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
            onClick={() => modalOption(setEditModal)}
          >
            <img className="w-5" src={editImg} alt="" />
            Edit
          </button>
          <button
            className="hover:bg-gray-200 w-full rounded-sm text-left cursor-pointer flex items-center gap-2 "
            onClick={() => modalOption(setDeleteModal)}
          >
            <img className="w-5 " src={deleteImg} alt="" />
            Delete
          </button>
        </div>
      )}
    </>
  );
};

export default CardButton;
