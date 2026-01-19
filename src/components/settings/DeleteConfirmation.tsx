import { useEffect, useState, type ChangeEvent } from "react";
import Container from "./Container";

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
    <Container>
      <div className="flex items-center  mr-auto gap-3">
        <h2 className="whitespace-nowrap">Delete Confirmation</h2>

        <input
          id="confirmation"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          aria-label="Delete Confirmation"
        />
      </div>
    </Container>
  );
};

export default DeleteConfirmation;
