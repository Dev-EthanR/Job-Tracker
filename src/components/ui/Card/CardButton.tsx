import { useState } from "react";
import editImg from "../../../assets/icons/edit.svg";
import moreOptionsImg from "../../../assets/icons/three-dots.svg";
import deleteImg from "../../../assets/icons/trash.svg";
import useTheme from "../../../hooks/useTheme";

interface Props {
  setEditModal: (toggle: boolean) => void;
  setDeleteModal: (toggle: boolean) => void;
  deleteAction?: () => void;
}

const CardButton = ({ setEditModal, setDeleteModal, deleteAction }: Props) => {
  const [optionsOpened, setOpionsOpened] = useState<boolean>(false);
  const { theme } = useTheme();

  function modalOption(setModal: (option: boolean) => void): void {
    setOpionsOpened(false);
    setModal(true);
  }

  function handleDelete() {
    const deleteConfirmation = localStorage.getItem("deleteConfirmation");
    const confirmDelete = deleteConfirmation && JSON.parse(deleteConfirmation);

    if (confirmDelete) {
      modalOption(setDeleteModal);
    } else {
      if (deleteAction) deleteAction();
    }
  }
  return (
    <>
      <button
        aria-label="further card options"
        onClick={() => setOpionsOpened((prev) => !prev)}
      >
        <img
          className={`w-7 hover:-translate-x-0.5 transition-transform duration-300 cursor-pointer ease-out select-none ${theme === "dark" && "invert"}`}
          src={moreOptionsImg}
          alt=""
        />
      </button>
      {optionsOpened && (
        <div
          className={`absolute top-6 right-0 flex flex-col items-start ${theme === "dark" ? "bg-dark-primary border-gray-900 text-dark-text" : "bg-primary border-gray-200 text-text"}  rounded-md shadow-sm border w-22 px-2 py-1 text-sm gap-1`}
        >
          <button
            className={`${theme === "dark" ? "hover:bg-gray-900" : "hover:bg-gray-200"} w-full rounded-sm text-left cursor-pointer flex items-center gap-2`}
            onClick={() => modalOption(setEditModal)}
          >
            <img
              className={`w-5 ${theme === "dark" && "invert"}`}
              src={editImg}
              alt=""
            />
            Edit
          </button>
          <button
            className={`${theme === "dark" ? "hover:bg-gray-900" : "hover:bg-gray-200"} w-full rounded-sm text-left cursor-pointer flex items-center gap-2`}
            onClick={handleDelete}
          >
            <img
              className={`w-5 ${theme === "dark" && "invert"}`}
              src={deleteImg}
              alt=""
            />
            Delete
          </button>
        </div>
      )}
    </>
  );
};

export default CardButton;
