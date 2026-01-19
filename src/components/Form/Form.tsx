import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema, type FormDataShape } from "../../utilities/schema";
import { useEffect } from "react";
import ModalContainer from "../features/ModalContainer";
import FormHeader from "./FormHeader";
import Input from "./Input";
import type { FormType } from "./Input";
import LabelOptions from "./LabelOptions";
import FormButton from "./FormButton";
import type FormFields from "../../Entities/FormFields";
import useTheme from "../../hooks/useTheme";

interface Props {
  id: FormType;
  open: boolean;
  title: string;
  submitLabel: string;
  defaultValues?: Partial<FormDataShape>;
  onClose: () => void;
  onSubmit: (data: FormDataShape) => void;
}

const Form = ({
  id,
  open,
  title,
  submitLabel,
  defaultValues,
  onClose,
  onSubmit,
}: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    setFocus,
    formState: { errors },
  } = useForm<FormDataShape>({
    resolver: zodResolver(schema),
    defaultValues,
  });
  const { theme } = useTheme();

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  function exit() {
    clearErrors();
    reset();
    onClose();
  }

  const fields: FormFields[] = [
    { name: "Company", key: "company", type: "text", error: errors.company },
    { name: "Position", key: "position", type: "text", error: errors.position },
    { name: "Date", key: "date", type: "date", error: errors.date },
  ];
  return (
    <ModalContainer open={open} onClose={() => exit()}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`absolute left-1/2 top-1/20 z-20 -translate-x-1/2 translate-y-1/20 md:top-1/2 md:translate-y-1/2 flex flex-col  p-5 rounded-lg shadow-2xl w-80 md:w-140 ${theme === "dark" ? "bg-dark-primary" : "bg-primary"}`}
      >
        <FormHeader title={title} onClose={exit} />
        {fields.map((input) => (
          <Input
            key={input.key}
            input={input}
            register={register}
            setFocus={setFocus}
            formType={id}
          />
        ))}
        <label className="flex justify-between" htmlFor="label">
          <span>
            Label:{" "}
            {id === "add" && <span className="text-red-400 ml-1">*</span>}
          </span>
          {errors.label && (
            <p className="text-red-400">{errors.label.message}</p>
          )}
        </label>
        <select
          id="label"
          {...register("label")}
          className={`block w-full  border rounded-md mt-1 mb-3 h-10 px-4 mr-4 ${theme === "dark" ? "border-gray-600 focus:outline-gray-600 " : "border-gray-300 focus:outline-gray-400"} `}
        >
          <LabelOptions />
        </select>
        <label htmlFor="notes">Notes:</label>
        <textarea
          id="notes"
          {...register("notes")}
          className={`block w-full  border rounded-md mt-1 mb-3 h-20 p-4 ${theme === "dark" ? "border-gray-600 focus:outline-gray-600" : "border-gray-300 focus:outline-gray-400"} `}
        />

        <FormButton successActionName={submitLabel} onClose={exit} />
      </form>
    </ModalContainer>
  );
};

export default Form;
