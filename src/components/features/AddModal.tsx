import { v4 as uuidv4 } from "uuid";
import useAddModal from "../../hooks/useAddModal";
import useData from "../../hooks/useData";
import Form from "../Form/Form";
import useToast from "../../hooks/useToast";
import { useEffect } from "react";

const AddModal = () => {
  const { modalOpen, setModalOpen } = useAddModal();
  const { setData } = useData();
  const { setToastOpen } = useToast();

  useEffect(() => {
    if (!modalOpen) return;
    setToastOpen({ open: false, message: null, color: null });
  }, [modalOpen]);
  if (!modalOpen) return null;

  const defaultLabel = localStorage.getItem("defaultLabel");
  return (
    <Form
      id="add"
      open={modalOpen}
      title="Add Application"
      submitLabel="Apply"
      defaultValues={{ label: defaultLabel || "" }}
      onClose={() => setModalOpen(false)}
      onSubmit={(data) => {
        setData((prev) => [{ id: uuidv4(), ...data }, ...prev]);
        setToastOpen({
          open: true,
          message: "Successfully Added Application",
          color: "bg-green-600",
        });
        setModalOpen(false);
      }}
    />
  );
};

export default AddModal;
