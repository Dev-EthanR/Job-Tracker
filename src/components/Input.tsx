import { type FormFields, type FormDataShape } from "./features/EditModal";
import { type UseFormRegister } from "react-hook-form";

type form = "add" | "edit";

interface Props {
  input: FormFields;
  register: UseFormRegister<FormDataShape>;
  formType: form;
}

const Input = ({ input, register, formType }: Props) => {
  return (
    <div>
      <label className="flex justify-between" htmlFor={input.key}>
        <span>
          {input.name}:
          {formType === "add" && <span className="text-red-400">*</span>}
        </span>
        {input.error && (
          <span className="text-red-400">{input.error.message}</span>
        )}
      </label>
      <input
        className="border-gray-300 border rounded-md mt-1 mb-3 h-8 w-full p-4 focus:outline-gray-400"
        id={input.key}
        type={input.type}
        {...register(input.key)}
        aria-required
        defaultValue={formType === "edit" ? input.value : ""}
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
