import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useData from "../../hooks/useData";
import {
  schema,
  type FormDataShape,
  type FormFields,
} from "../../utilities/schema";
import FormButton from "../Form/FormButton";
import FormHeader from "../Form/FormHeader";
import Input from "../Form/Input";
import ModalContainer from "./ModalContainer";
import LabelOptions from "../Form/LabelOptions";

interface Props {
  cardId: string;
  open: boolean;
  setOpen: (toggle: boolean) => void;
}
const EditModal = ({ cardId, open, setOpen }: Props) => {
  const { data, setData } = useData();

  const cardtoEdit = data.find((d) => d.id === cardId);
  const {
    register,
    reset,
    handleSubmit,
    clearErrors,
    setFocus,
    formState: { errors },
  } = useForm({
    defaultValues: {
      label: cardtoEdit?.label, // The value of the option you want selected by default
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (fData: FormDataShape) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === cardId ? { id: cardId, ...fData } : item,
      ),
    );
    exitModal();
  };

  function exitModal(): void {
    setOpen(false);
    clearErrors();
    reset();
  }

  //   form Elements
  const inputForm: FormFields[] = [
    {
      name: "Company",
      key: "company",
      type: "text",
      error: errors.company,
      value: cardtoEdit?.company,
    },
    {
      name: "Position",
      key: "position",
      type: "text",
      error: errors.position,
      value: cardtoEdit?.position,
    },
    {
      name: "Date",
      key: "date",
      type: "date",
      error: errors.date,
      value: cardtoEdit?.date,
    },
  ];

  return (
    <ModalContainer open={open} onClose={() => exitModal()}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 flex flex-col bg-white p-5 rounded-lg shadow-2xl w-80 md:w-140"
      >
        <FormHeader title="Edit Application" onClose={exitModal} />

        <div>
          {inputForm.map((input) => (
            <Input
              key={input.key}
              input={input}
              register={register}
              setFocus={setFocus}
              formType="edit"
            />
          ))}

          <label className="flex justify-between" htmlFor="label">
            <span>Label:</span>
            {errors.label && (
              <p className="text-red-400">{errors.label.message}</p>
            )}
          </label>
          <select
            id="label"
            {...register("label")}
            className="block w-full border-gray-300 border rounded-md mt-1 mb-3 h-10 px-4 mr-4 focus:outline-gray-400"
          >
            <LabelOptions />
          </select>
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            {...register("notes")}
            className="block w-full border-gray-300 border rounded-md mt-1 mb-3 h-20 p-4 focus:outline-gray-400"
            defaultValue={cardtoEdit?.notes}
          ></textarea>
        </div>
        <FormButton successActionName="Save" onClose={exitModal} />
      </form>
    </ModalContainer>
  );
};

export default EditModal;
