import { useEffect, useRef, type ReactNode } from "react";
import ModalContainer from "./ModalContainer";
import useTheme from "../../hooks/useTheme";

interface Props {
  deleteAction: () => void;
  open: boolean;
  setOpen: (toggle: boolean) => void;
  heading: string;
  children: ReactNode;
}
const DeleteModal = ({
  deleteAction,
  open,
  setOpen,
  heading,
  children,
}: Props) => {
  const { theme } = useTheme();

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

  function onDelete() {
    if (deleteAction) deleteAction();
    exitModal();
  }

  return (
    <ModalContainer open={open} onClose={() => exitModal()}>
      <div
        className={`${theme === "dark" ? "bg-dark-primary text-dark-text" : "bg-primary text-text"} absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 flex flex-col  p-5 rounded-lg shadow-2xl w-80 md:w-90`}
      >
        <h2 className="text-lg md:text-2xl font-semibold mb-1.5">{heading}</h2>
        <p
          className={`text-xs md:text-sm ${theme === "dark" ? "text-dark-subtext" : "text-subtext"} mb-3`}
        >
          {children}
        </p>

        <div className="flex justify-between gap-6">
          <button
            className={` ${theme === "dark" ? "border-gray-950" : "border-gray-300"} border w-30 rounded-lg p-1 cursor-pointer`}
            onClick={exitModal}
          >
            Cancel
          </button>
          <button
            ref={buttonRef}
            className={`bg-red-600 text-white border-gray-300 ${theme === "dark" ? "border-gray-950" : "border-gray-300"} w-30 rounded-lg border p-1  cursor-pointer`}
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default DeleteModal;
