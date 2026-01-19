import { useEffect } from "react";
import { type UseFormRegister, type UseFormSetFocus } from "react-hook-form";
import type FormFields from "../../Entities/FormFields";
import { type FormDataShape } from "../../utilities/schema";
import useTheme from "../../hooks/useTheme";

export type FormType = "add" | "edit";

interface Props {
  input: FormFields;
  register: UseFormRegister<FormDataShape>;
  setFocus: UseFormSetFocus<FormDataShape>;
  formType: FormType;
}

const Input = ({ input, register, formType, setFocus }: Props) => {
  const { theme } = useTheme();

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
        className={`${theme === "dark" ? "border-gray-700 focus:outline-gray-800" : "border-gray-300 focus:outline-gray-400"} border rounded-md mt-1 mb-3 h-8 w-full p-4 `}
        id={input.key}
        type={input.type}
        aria-required
        autoComplete="off"
        {...register(input.key)}
      />
    </div>
  );
};

export default Input;
