import { useEffect } from "react";
import useToast from "../../hooks/useToast";
import close from "../../assets/icons/menu-close.svg";

const Toast = () => {
  const { toastOpen, setToastOpen } = useToast();

  useEffect(() => {
    if (!toastOpen.open) return;
    const timeOut = setTimeout(() => {
      closeToast();
    }, 5000);
    return () => clearTimeout(timeOut);
  }, [toastOpen]);

  function closeToast() {
    setToastOpen({ open: false, message: null, color: null });
  }

  if (!toastOpen.open) return null;
  return (
    <div
      className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-10 rounded-md flex items-center justify-center gap-7 w-full max-w-85 md:max-w-105 py-3 px-3 whitespace-nowrap text-base md:text-xl font-semibold ${toastOpen.color} text-white select-none `}
      aria-live="polite"
    >
      {toastOpen.message}
      <button
        onClick={closeToast}
        aria-label="Close notification"
        className="cursor-pointer"
      >
        <img className="w-5 invert" src={close} alt="" />
      </button>
    </div>
  );
};

export default Toast;
