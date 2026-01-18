// import { useEffect, useRef } from "react";
import { useEffect } from "react";
import { type FormFields, type FormDataShape } from "../../utilities/schema";
import { type UseFormRegister, type UseFormSetFocus } from "react-hook-form";

type form = "add" | "edit";

interface Props {
  input: FormFields;
  register: UseFormRegister<FormDataShape>;
  setFocus: UseFormSetFocus<FormDataShape>;
  formType: form;
}

const Input = ({ input, register, formType, setFocus }: Props) => {
  useEffect(() => {
    setFocus("company");
  }, [setFocus]);

  return (
    <div>
      <label className="flex justify-between" htmlFor={input.key}>
        <span>
          {input.name}:
          {formType === "add" && <span className="text-red-400 ml-1">*</span>}
        </span>
        {input.error && (
          <span className="text-red-400">{input.error.message}</span>
        )}
      </label>
      <input
        className="border-gray-300 border rounded-md mt-1 mb-3 h-8 w-full p-4 focus:outline-gray-400"
        id={input.key}
        type={input.type}
        aria-required
        defaultValue={formType === "edit" ? input.value : ""}
        autoComplete="off"
        {...register(input.key)}
      />
    </div>
  );
};

export default Input;
