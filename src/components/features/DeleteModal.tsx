import { useEffect, useRef, type ReactNode } from "react";
import ModalContainer from "./ModalContainer";
import useTheme from "../../hooks/useTheme";
import useToast from "../../hooks/useToast";

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
  const { setToastOpen } = useToast();

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

  // handle delete action
  function onDelete(): void {
    if (deleteAction) deleteAction();
    setToastOpen({
      open: true,
      message: "Successfully Deleted Application",
      color: "bg-red-600",
    });
    exitModal();
  }

  return (
    <ModalContainer open={open} onClose={() => exitModal()}>
      <div
        className={`${theme === "dark" ? "bg-dark-primary text-dark-text" : "bg-primary text-text"} absolute left-1/2 top-1/2 z-200 -translate-x-1/2 -translate-y-1/2 flex flex-col  p-5 rounded-lg shadow-2xl w-80 md:w-90`}
      >
        <h2 className="text-lg md:text-2xl font-semibold mb-1.5">{heading}</h2>
        <p
          className={`text-xs md:text-sm ${theme === "dark" ? "text-dark-subtext" : "text-subtext"} mb-3`}
        >
          {children}
        </p>

        <div className="flex justify-between gap-6">
          <button
            className={` ${theme === "dark" ? "border-gray-950" : "border-gray-300"} hover:border-gray-600 transition-colors duration-200 border w-30 rounded-lg p-1 cursor-pointer`}
            onClick={exitModal}
          >
            Cancel
          </button>
          <button
            ref={buttonRef}
            className={`bg-red-600 hover:bg-red-700 text-white transition-colors duration-200   ${theme === "dark" ? "border-gray-950 " : "border-gray-300"} w-30 rounded-lg border p-1  cursor-pointer`}
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
