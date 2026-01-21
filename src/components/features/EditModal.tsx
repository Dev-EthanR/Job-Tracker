import type Data from "../../Entities/Data";
import useData from "../../hooks/useData";
import useToast from "../../hooks/useToast";
import Form from "../Form/Form";

interface Props {
  cardId: string;
  open: boolean;
  setOpen: (toggle: boolean) => void;
}

const EditModal = ({ cardId, open, setOpen }: Props) => {
  const { data, setData } = useData();
  const { setToastOpen } = useToast();

  const card: Data | undefined = data.find((d) => d.id === cardId);

  if (!card) return null;

  return (
    <Form
      id="edit"
      open={open}
      title="Edit Application"
      submitLabel="Save"
      defaultValues={card}
      onClose={() => setOpen(false)}
      onSubmit={(formData) => {
        setOpen(false);
        setData((prev) =>
          prev.map((item) =>
            item.id === cardId ? { id: cardId, ...formData } : item,
          ),
        );
        setToastOpen({
          open: true,
          message: "Successfully Updated Application",
          color: "bg-green-600",
        });
      }}
    />
  );
};

export default EditModal;
