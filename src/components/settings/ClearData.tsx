import { useState } from "react";
import useData from "../../hooks/useData";
import DeleteModal from "../features/DeleteModal";
import Container from "./Container";
import useToast from "../../hooks/useToast";

const ClearData = () => {
  const { setData } = useData();
  const { setToastOpen } = useToast();

  const [confirmationModal, setConfirmationModal] = useState<boolean>(false);

  function clearData(): void {
    localStorage.removeItem("jobData");
    setData([]);
    setToastOpen({
      open: true,
      message: "Successfully Deleted Data",
      color: "bg-red-600",
    });
  }

  return (
    <Container title="Clear Data">
      <button
        className="border bg-[#da594d] hover:bg-[#df7b72] text-white px-4 py-0.5 cursor-pointer rounded-md"
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
