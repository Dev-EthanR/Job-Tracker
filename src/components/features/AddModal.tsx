import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type FieldError } from "react-hook-form";
import { z } from "zod";
import close from "../../assets/icons/menu-close.svg";
import useAddModal from "../../hooks/useAddModal";
import useData from "../../hooks/useData";
import usePreventScroll from "../../hooks/usePreventScroll";
import { v4 as uuidv4 } from "uuid";
import Input from "../input";

// form validations
const schema = z.object({
  company: z.string().max(30).min(1, "Company is required"),
  position: z.string().max(30).min(1, "Position is required"),
  date: z.iso.date("Date is required"),
  notes: z.string().max(200).optional(),
});

type FormDataShape = z.infer<typeof schema>;

interface FormFields {
  name: string;
  key: keyof FormDataShape;
  type: string;
  error?: FieldError;
}

const AddModal = () => {
  const {
    register,
    reset,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const { modalOpen, setModalOpen } = useAddModal();
  const { setData } = useData();
  usePreventScroll(modalOpen);

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
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 flex flex-col bg-white p-5 rounded-lg shadow-2xl w-80 md:w-140"
      >
        <div className="flex justify-between border-b border-gray-300 pb-2 mb-2">
          <h2 className="text-2xl font-semibold">Add Application</h2>
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
              formType="add"
            />
          ))}

          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            {...register("notes")}
            className="block w-full border-gray-300 border rounded-md mt-1 mb-3 h-20 p-4 focus:outline-gray-400"
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
            Apply
          </button>
        </div>
      </form>
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/40"></div>
    </>
  );
};

export default AddModal;
