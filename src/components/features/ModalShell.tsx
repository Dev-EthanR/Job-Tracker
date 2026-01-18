import { FocusTrap } from "focus-trap-react";
import useEscapeKey from "../../hooks/useEscapeKey";
import usePreventScroll from "../../hooks/usePreventScroll";

interface Props {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const ModalShell = ({ open, onClose, children }: Props) => {
  usePreventScroll(open);
  useEscapeKey(onClose);
  if (!open) return null;

  return (
    <>
      <FocusTrap active>{children}</FocusTrap>
      <div className="absolute inset-0 z-10 bg-black/40" onClick={onClose} />
    </>
  );
};

export default ModalShell;
