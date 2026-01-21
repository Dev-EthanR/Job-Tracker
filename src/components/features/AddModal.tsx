import { v4 as uuidv4 } from "uuid";
import useAddModal from "../../hooks/useAddModal";
import useData from "../../hooks/useData";
import useToast from "../../hooks/useToast";
import Form from "../Form/Form";

const AddModal = () => {
  const { modalOpen, setModalOpen } = useAddModal();
  const { setData } = useData();
  const { setToastOpen } = useToast();

  const defaultLabel: string | null = localStorage.getItem("defaultLabel");

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
