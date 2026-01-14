import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import close from "../../assets/icons/menu-close.svg";
import useAddModal from "../../hooks/useAddModal";
import useData from "../../hooks/useData";
import usePreventScroll from "../../hooks/usePreventScroll";

const schema = z.object({
  company: z.string().max(30).min(1, "Company is required"),
  position: z.string().max(30).min(1, "Position is required"),
  date: z.iso.date("Date is required"),
  notes: z.string().max(200).optional(),
});

type FormDataShape = z.infer<typeof schema>;

const AddModal = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const { modalOpen, setModalOpen } = useAddModal();
  usePreventScroll(modalOpen);
  const { setData } = useData();

  if (!modalOpen) return null;
  const onSubmit = (data: FormDataShape) => {
    reset();
    setData((prevData) => [...prevData, data]);
    setModalOpen(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 flex flex-col bg-white p-5 rounded-lg shadow-2xl w-80 md:w-140"
      >
        <div className="flex justify-between border-b border-gray-300 pb-2 mb-2">
          <h2 className="text-2xl font-semibold">Add Application</h2>
          <button aria-label="close" onClick={() => setModalOpen(false)}>
            <img className="w-5" src={close} alt="" />
          </button>
        </div>
        <div>
          <label className="flex justify-between" htmlFor="company">
            <span>
              Company: <span className="text-red-400">*</span>
            </span>
            {errors.company && (
              <span className="text-red-400">{errors.company.message}</span>
            )}
          </label>
          <input
            className="border-gray-300 border rounded-md mt-1 mb-3 h-8 w-full p-4 focus:outline-gray-400"
            id="company"
            type="text"
            {...register("company")}
            aria-required
            autoComplete="off"
          />
          <label className="flex justify-between" htmlFor="position">
            <span>
              Positon: <span className="text-red-400">*</span>
            </span>
            {errors.position && (
              <span className="text-red-400">{errors.position.message}</span>
            )}
          </label>
          <input
            className="border-gray-300 border rounded-md mt-1 mb-3 h-8 w-full p-4 focus:outline-gray-400"
            id="position"
            {...register("position")}
            type="text"
            aria-required
            autoComplete="off"
          />
          <label className="flex justify-between" htmlFor="date">
            <span>
              Applied Date: <span className="text-red-400">*</span>
            </span>
            {errors.date && (
              <span className="text-red-400">{errors.date.message}</span>
            )}
          </label>
          <input
            className="border-gray-300 border rounded-md mt-1 mb-3 h-8 w-full p-4 focus:outline-gray-400"
            id="date"
            {...register("date")}
            type="date"
            aria-required
          />
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            {...register("notes")}
            className="block w-full border-gray-300 border rounded-md mt-1 mb-3 h-20 p-4 focus:outline-gray-400"
          ></textarea>
        </div>
        <div className="flex gap-3 border-t border-gray-300 pt-3 mt-3">
          <button
            className="border-gray-300 border p-1 w-full"
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </button>
          <button
            className="bg-accent text-white border-gray-300 border p-1 w-full"
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
