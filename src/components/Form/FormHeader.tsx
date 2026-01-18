import close from "../../assets/icons/menu-close.svg";

interface Props {
  title: string;
  onClose: () => void;
}

const FormHeader = ({ title, onClose }: Props) => {
  return (
    <div className="flex justify-between border-b border-gray-300 pb-2 mb-2">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <button
        aria-label="close"
        onClick={onClose}
        className="cursor-pointer"
        type="button"
      >
        <img className="w-5" src={close} alt="" />
      </button>
    </div>
  );
};

export default FormHeader;
