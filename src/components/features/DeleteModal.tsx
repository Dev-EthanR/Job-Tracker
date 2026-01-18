import { useEffect, useRef } from "react";
import useData from "../../hooks/useData";
import ModalContainer from "./ModalContainer";
interface Props {
  cardId: string;
  open: boolean;
  setOpen: (toggle: boolean) => void;
}
const DeleteModal = ({ cardId, open, setOpen }: Props) => {
  const { setData } = useData();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [open]);

  // display nothing if delete button isnt pressed
  function exitModal(): void {
    setOpen(false);
  }

  function deleteApplication(): void {
    setData((prevData) => prevData.filter((d) => d.id != cardId));
  }

  return (
    <ModalContainer open={open} onClose={() => exitModal()}>
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
            ref={buttonRef}
            className="bg-red-600 text-white border-gray-300 w-30 rounded-lg border p-1  cursor-pointer"
            onClick={deleteApplication}
          >
            Delete
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default DeleteModal;
