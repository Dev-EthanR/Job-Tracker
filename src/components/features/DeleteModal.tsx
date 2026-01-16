import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type FieldError } from "react-hook-form";
import { z } from "zod";
import close from "../../assets/icons/menu-close.svg";
import useData from "../../hooks/useData";
import usePreventScroll from "../../hooks/usePreventScroll";
import { v4 as uuidv4 } from "uuid";

interface Props {
  cardId: string;
  open: boolean;
  setOpen: (toggle: boolean) => void;
}
const DeleteModal = ({ cardId, open, setOpen }: Props) => {
  const { setData } = useData();
  usePreventScroll(open);

  // display nothing if dekete button isnt pressed
  if (!open) return null;

  function exitModal(): void {
    setOpen(false);
  }

  function deleteApplication(): void {
    setData((prevData) => prevData.filter((d) => d.id != cardId));
  }

  return (
    <>
      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 flex flex-col bg-white p-5 rounded-lg shadow-2xl w-80 md:w-90">
        <h2 className="text-lg md:text-2xl font-semibold mb-1.5">
          Delete Application
        </h2>
        <p className="text-xs md:text-sm text-gray-500 mb-3">
          Are you sure you want to delete the application? <br /> This action
          cannot be undone
        </p>
        <div className="flex justify-between gap-6">
          <button
            className="border-gray-300 border w-30 rounded-lg p-1 cursor-pointer"
            onClick={exitModal}
          >
            Cancel
          </button>
          <button
            className="bg-red-600 text-white border-gray-300 w-30 rounded-lg border p-1  cursor-pointer"
            onClick={deleteApplication}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/40"></div>
    </>
  );
};

export default DeleteModal;
