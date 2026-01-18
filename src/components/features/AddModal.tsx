import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import useAddModal from "../../hooks/useAddModal";
import useData from "../../hooks/useData";
import {
  schema,
  type FormDataShape,
  type FormFields,
} from "../../utilities/schema";
import FormButton from "../Form/FormButton";
import FormHeader from "../Form/FormHeader";
import Input from "../Input";
import ModalContainer from "./ModalContainer";
import LabelOptions from "../Form/LabelOptions";

const AddModal = () => {
  const {
    register,
    reset,
    handleSubmit,
    clearErrors,
    setFocus,
    formState: { errors },
  } = useForm({
    defaultValues: { label: "" },
    resolver: zodResolver(schema),
  });
  const { modalOpen, setModalOpen } = useAddModal();
  const { setData } = useData();

  // display nothing if add button isnt pressed
  if (!modalOpen) return null;

  const onSubmit = (fData: FormDataShape) => {
    setData((prevData) => [{ id: uuidv4(), ...fData }, ...prevData]);
    exitModal();
  };

  function exitModal(): void {
    setModalOpen(false);
    clearErrors();
    reset();
  }

  //   form Elements
  const inputForm: FormFields[] = [
    { name: "Company", key: "company", type: "text", error: errors.company },
    { name: "Position", key: "position", type: "text", error: errors.position },
    { name: "Date", key: "date", type: "date", error: errors.date },
  ];

  return (
    <ModalContainer open={modalOpen} onClose={() => exitModal()}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 flex flex-col bg-white p-5 rounded-lg shadow-2xl w-80 md:w-140"
      >
        <FormHeader title="Add Application" onClose={exitModal} />

        <div>
          {inputForm.map((input) => (
            <Input
              key={input.key}
              input={input}
              register={register}
              setFocus={setFocus}
              formType="add"
            />
          ))}
          <label className="flex justify-between" htmlFor="label">
            <span>
              Label:
              <span className="text-red-400 ml-1">*</span>
            </span>
            {errors.label && (
              <p className="text-red-400">{errors.label.message}</p>
            )}
          </label>
          <select
            id="label"
            {...register("label")}
            className="block w-full border-gray-300 border rounded-md mt-1 mb-3 h-10 px-4 mr-4 focus:outline-gray-400"
          >
            <option value="" selected disabled hidden></option>
            <LabelOptions />
          </select>
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            {...register("notes")}
            className="block w-full border-gray-300 border rounded-md mt-1 mb-3 h-20 p-4 focus:outline-gray-400"
          ></textarea>
        </div>
        <FormButton successActionName="Apply" onClose={exitModal} />
      </form>
    </ModalContainer>
  );
};

export default AddModal;
