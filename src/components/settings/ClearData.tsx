import { useState } from "react";
import useData from "../../hooks/useData";
import DeleteModal from "../features/DeleteModal";

const ClearData = () => {
  const { setData } = useData();
  const [confirmationModal, setConfirmationModal] = useState<boolean>(false);

  function clearData() {
    localStorage.removeItem("jobData");
    setData([]);
  }

  return (
    <>
      <button
        className="border border-gray-400 px-4 cursor-pointer rounded-md hover:border-green-800"
        onClick={() => setConfirmationModal(true)}
      >
        Clear Data
      </button>
      <DeleteModal
        deleteAction={clearData}
        open={confirmationModal}
        setOpen={setConfirmationModal}
        heading="Delete Data"
      >
        Are you sure you want to delete all your data
        <br /> This action cannot be undone
      </DeleteModal>
    </>
  );
};

export default ClearData;
