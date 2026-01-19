import { useEffect, useState, type ChangeEvent } from "react";

const DeleteConfirmation = () => {
  const [isChecked, setIsChecked] = useState<boolean>(() => {
    const deleteConfirmation: string | null =
      localStorage.getItem("deleteConfirmation");
    return deleteConfirmation ? JSON.parse(deleteConfirmation) : true;
  });

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  useEffect(() => {
    localStorage.setItem("deleteConfirmation", JSON.stringify(isChecked));
  }, [isChecked]);
  return (
    <div>
      <input
        id="confirmation"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label className="ml-2" htmlFor="confirmation">
        Delete Confirmation
      </label>
    </div>
  );
};

export default DeleteConfirmation;
