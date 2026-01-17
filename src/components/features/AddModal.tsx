import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type FieldError } from "react-hook-form";
import { z } from "zod";
import { FocusTrap } from "focus-trap-react";
import close from "../../assets/icons/menu-close.svg";
import useAddModal from "../../hooks/useAddModal";
import useData from "../../hooks/useData";
import usePreventScroll from "../../hooks/usePreventScroll";
import { v4 as uuidv4 } from "uuid";
import Input from "../Input";
import useEscapeKey from "../../hooks/useEscapeKey";

// form validations

const schema = z.object({
  company: z.string().max(30).trim().min(1, "Company is required"),
  position: z.string().max(30).trim().min(1, "Position is required"),
  date: z.iso.date("Date is required"),
  label: z.string().min(1, "Label is required"),
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
    setFocus,
    formState: { errors },
  } = useForm({
    defaultValues: { label: "" },
    resolver: zodResolver(schema),
  });
  const { modalOpen, setModalOpen } = useAddModal();
  const { setData } = useData();
  usePreventScroll(modalOpen);
  useEscapeKey(() => exitModal());

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
      <FocusTrap active={modalOpen}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 flex flex-col bg-white p-5 rounded-lg shadow-2xl w-80 md:w-140"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.stopPropagation();
            }
          }}
        >
          <div className="flex justify-between border-b border-gray-300 pb-2 mb-2">
            <h2 className="text-2xl font-semibold">Add Application</h2>
            <button
              aria-label="close"
              onClick={exitModal}
              className="cursor-pointer"
              type="button"
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
              <option className="bg-applied" value="Applied">
                Applied
              </option>
              <option className="bg-interview" value="Interview">
                Interview
              </option>
              <option className="bg-offer" value="Offer">
                Offer
              </option>
              <option className="bg-reject" value="Reject">
                Reject
              </option>
            </select>
            <label htmlFor="notes">Notes:</label>
            <textarea
              id="notes"
              {...register("notes")}
              className="block w-full border-gray-300 border rounded-md mt-1 mb-3 h-20 p-4 focus:outline-gray-400"
            ></textarea>
          </div>
          <div className="flex gap-3 border-t border-gray-300 pt-3 mt-3">
            <button
              className="bg-accent text-white border-gray-300 border p-1 w-full cursor-pointer order-1"
              type="submit"
            >
              Apply
            </button>
            <button
              className="border-gray-300 border p-1 w-full cursor-pointer"
              onClick={exitModal}
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </FocusTrap>
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/40"></div>
    </>
  );
};

export default AddModal;
