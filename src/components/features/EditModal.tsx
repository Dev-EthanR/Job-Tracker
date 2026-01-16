import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type FieldError } from "react-hook-form";
import { z } from "zod";
import { FocusTrap } from "focus-trap-react";
import close from "../../assets/icons/menu-close.svg";
import useData from "../../hooks/useData";
import usePreventScroll from "../../hooks/usePreventScroll";
import Input from "../input";
// form validations
const schema = z.object({
  company: z.string().max(30).trim().min(1, "Company cannot be empty"),
  position: z.string().max(30).trim().min(1, "Position cannot be empty"),
  date: z.iso.date("Date cannot be empty"),
  notes: z.string().max(200).optional(),
});

export type FormDataShape = z.infer<typeof schema>;

export interface FormFields {
  name: string;
  key: keyof FormDataShape;
  type: string;
  error?: FieldError;
  value?: string;
}

interface Props {
  cardId: string;
  open: boolean;
  setOpen: (toggle: boolean) => void;
}
const EditModal = ({ cardId, open, setOpen }: Props) => {
  const {
    register,
    reset,
    handleSubmit,
    clearErrors,
    setFocus,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const { data, setData } = useData();

  const cardtoEdit = data.find((d) => d.id === cardId);
  usePreventScroll(open);
  // display nothing if add button isnt pressed
  if (!open) return null;

  const onSubmit = (fData: FormDataShape) => {
    setData((prev) =>
      prev.map((item) => (item.id === cardId ? { id: cardId, ...fData } : item))
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
    <>
      <FocusTrap active={open}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 flex flex-col bg-white p-5 rounded-lg shadow-2xl w-80 md:w-140"
        >
          <div className="flex justify-between border-b border-gray-300 pb-2 mb-2">
            <h2 className="text-2xl font-semibold">Edit Application</h2>
            <button
              aria-label="close"
              onClick={exitModal}
              className="cursor-pointer"
            >
              <img className="w-5" src={close} alt="" />
            </button>
          </div>
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

            <label htmlFor="notes">Notes:</label>
            <textarea
              id="notes"
              {...register("notes")}
              className="block w-full border-gray-300 border rounded-md mt-1 mb-3 h-20 p-4 focus:outline-gray-400"
              defaultValue={cardtoEdit?.notes}
            ></textarea>
          </div>
          <div className="flex gap-3 border-t border-gray-300 pt-3 mt-3">
            <button
              className="border-gray-300 border p-1 w-full cursor-pointer"
              onClick={exitModal}
            >
              Cancel
            </button>
            <button
              className="bg-accent text-white border-gray-300 border p-1 w-full cursor-pointer"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </FocusTrap>
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/40"></div>
    </>
  );
};

export default EditModal;
