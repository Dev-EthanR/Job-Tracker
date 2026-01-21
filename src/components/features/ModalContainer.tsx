import { FocusTrap } from "focus-trap-react";
import useEscapeKey from "../../hooks/useEscapeKey";
import usePreventScroll from "../../hooks/usePreventScroll";
import { useEffect, type ReactNode } from "react";
import useToast from "../../hooks/useToast";

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}
const ModalContainer = ({ open, onClose, children }: Props) => {
  const { setToastOpen } = useToast();
  usePreventScroll(open);
  useEscapeKey(onClose);

  useEffect(() => {
    if (!open) return;
    setToastOpen({ open: false, message: null, color: null });
  }, [open]);
  if (!open) return null;

  return (
    <>
      <FocusTrap active>{children}</FocusTrap>
      <div className="absolute inset-0 z-10 bg-black/40" onClick={onClose} />
    </>
  );
};

export default ModalContainer;
