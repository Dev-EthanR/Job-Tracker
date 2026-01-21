import useTheme from "../../hooks/useTheme";

interface Props {
  successActionName: string;
  onClose: () => void;
}
const FormButton = ({ successActionName, onClose }: Props) => {
  const { theme } = useTheme();

  return (
    <div
      className={`flex gap-3 border-t ${theme === "dark" ? "border-gray-500" : "border-gray-300"} pt-3 mt-3`}
    >
      <button
        className={`border p-1 w-full cursor-pointer order-1 bg-accent hover:bg-hover transition-colors duration-200 text-white ${theme === "dark" ? "border-gray-800" : "border-gray-300"} `}
        type="submit"
      >
        {successActionName}
      </button>
      <button
        className={`border p-1 w-full cursor-pointer ${theme === "dark" ? "border-gray-700 hover:border-gray-400" : "border-gray-300 hover:border-gray-600"} transition-colors duration-200`}
        onClick={onClose}
        type="button"
      >
        Cancel
      </button>
    </div>
  );
};

export default FormButton;
