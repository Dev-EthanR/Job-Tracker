import { v4 as uuidv4 } from "uuid";
import useAddModal from "../../hooks/useAddModal";
import useData from "../../hooks/useData";
import Form from "../Form/Form";

const AddModal = () => {
  const { modalOpen, setModalOpen } = useAddModal();
  const { setData } = useData();

  if (!modalOpen) return null;

  return (
    <Form
      id="add"
      open={modalOpen}
      title="Add Application"
      submitLabel="Apply"
      defaultValues={{ label: "" }}
      onClose={() => setModalOpen(false)}
      onSubmit={(data) => {
        setData((prev) => [{ id: uuidv4(), ...data }, ...prev]);
        setModalOpen(false);
      }}
    />
  );
};

export default AddModal;
