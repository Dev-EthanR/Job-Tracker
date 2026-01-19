import { useState } from "react";
import useData from "../../hooks/useData";
import DeleteModal from "../features/DeleteModal";
import Container from "./Container";

const ClearData = () => {
  const { setData } = useData();
  const [confirmationModal, setConfirmationModal] = useState<boolean>(false);

  function clearData() {
    localStorage.removeItem("jobData");
    setData([]);
  }

  return (
    <Container title="Clear Data">
      <button
        className="border bg-[#da594d] text-white px-4 py-0.5 cursor-pointer rounded-md"
        onClick={() => setConfirmationModal(true)}
      >
        Clear
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
    </Container>
  );
};

export default ClearData;
