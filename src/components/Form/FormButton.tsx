import React from "react";

interface Props {
  successActionName: string;
  onClose: () => void;
}
const FormButton = ({ successActionName, onClose }: Props) => {
  return (
    <div className="flex gap-3 border-t border-gray-300 pt-3 mt-3">
      <button
        className="bg-accent text-white border-gray-300 border p-1 w-full cursor-pointer order-1"
        type="submit"
      >
        {successActionName}
      </button>
      <button
        className="border-gray-300 border p-1 w-full cursor-pointer"
        onClick={onClose}
        type="button"
      >
        Cancel
      </button>
    </div>
  );
};

export default FormButton;
